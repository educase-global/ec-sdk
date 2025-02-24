
"use strict";

/****************** Notes *********************
 * Dependencies must be loaded already in Global.Lib
 * Next Note
 ***********************************************/

// Shared Dependencies (Managed by Loader)
var Lib;
var CONFIG;

/////////////////////////// Module-Loader START ////////////////////////////////

/********************************************************************
  Module Constructor and Exporter

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules

  @return {Set} - Export Public Functions of this module
  *********************************************************************/
module.exports = function (shared_libs, config) {
    // Shared Dependencies (Managed by Main Entry Module)
    Lib = shared_libs;
    CONFIG = config;

    // Export Public Functions of this module
    return Commons;
};

//////////////////////////// Module-Loader END /////////////////////////////////

/////////////////////////// Private Functions START ///////////////////////////

// In-memory cache (for quick access during the session)
const inMemoryCache = new Map();

// Cache expiration time in milliseconds (e.g., 5 minutes)
const CACHE_EXPIRATION = 5 * 60 * 1000;

// localStorage key namespace to avoid collisions
const LOCAL_STORAGE_KEY = 'HttpBrowserCache';
const CURRENT_USER_KEY = 'CurrentUserKey';
const REFRESH_FLAG_KEY = 'refreshFlag';
const refreshFlag = localStorage.getItem(REFRESH_FLAG_KEY);

// Load cache from localStorage
function loadCacheFromLocalStorage() {
    if (refreshFlag === '1') {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        localStorage.setItem(REFRESH_FLAG_KEY, '2');
    } else {
        const cacheString = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (cacheString) {
            try {
                const parsedCache = JSON.parse(cacheString);
                Object.keys(parsedCache).forEach(key => {
                    inMemoryCache.set(key, parsedCache[key]);
                });
            } catch (e) {
                console.error('Failed to parse cache from localStorage:', e);
                localStorage.removeItem(LOCAL_STORAGE_KEY);
            }
        }
    }
}

// Save cache to localStorage
function saveCacheToLocalStorage() {
    const cacheObject = {};
    inMemoryCache.forEach((value, key) => {
        cacheObject[key] = value;
    });
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cacheObject));
    } catch (e) {
        console.error('Failed to save cache to localStorage:', e);
    }
}

// Helper function to generate unique cache keys
function generateCacheKey(url, method, params) {
    const paramsString = params ? JSON.stringify(params) : '';
    return `${method.toUpperCase()}::${url}::${paramsString}`;
}

// Helper function to get the current user
function getCurrentUser() {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
        try {
            const userData = JSON.parse(userDataString);
            return userData.id;
        } catch (e) {
            console.error('Failed to parse user data from localStorage:', e);
            return null;
        }
    }
    return null;
}

// Initialize cache on module load
loadCacheFromLocalStorage();

// Function to clear all cache entries
function clearAllCache() {
    inMemoryCache.clear();  // Clear in-memory cache
    localStorage.removeItem(LOCAL_STORAGE_KEY); // Clear localStorage cache
}

// Serve stale data and revalidate
function serveStaleAndRevalidate(cb, cacheKey, url, http_method, http_params, auth_bearer_token, noCache) {
    let servedFromCache = false;

    if (http_method.toUpperCase() === 'GET' && !noCache) {
        // Serve from in-memory cache if available
        if (inMemoryCache.has(cacheKey)) {
            const cachedResponse = inMemoryCache.get(cacheKey);
            const isExpired = (Date.now() - cachedResponse.timestamp) > CACHE_EXPIRATION;
            if (!isExpired) {
                console.log('Serving from in-memory cache:', cacheKey);
                cb(null, cachedResponse.status, null, cachedResponse.data);
                servedFromCache = true;
            }
        } else {
            // Attempt to load from localStorage
            const cacheString = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (cacheString) {
                try {
                    const parsedCache = JSON.parse(cacheString);
                    if (parsedCache[cacheKey]) {
                        const cachedResponse = parsedCache[cacheKey];
                        const isExpired = (Date.now() - cachedResponse.timestamp) > CACHE_EXPIRATION;
                        if (!isExpired) {
                            console.log('Serving from localStorage cache:', cacheKey);
                            // Populate in-memory cache for faster access next time
                            inMemoryCache.set(cacheKey, cachedResponse);
                            cb(null, cachedResponse.status, null, cachedResponse.data);
                            servedFromCache = true;
                        } else {
                            // Remove expired cache entry from both caches
                            inMemoryCache.delete(cacheKey);
                            delete parsedCache[cacheKey];
                            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(parsedCache));
                        }
                    }
                } catch (e) {
                    console.error('Failed to parse cache from localStorage:', e);
                    localStorage.removeItem(LOCAL_STORAGE_KEY);
                }
            }
        }
        // Revalidate cache in the background
        revalidateCache(cacheKey, url, http_method, http_params, auth_bearer_token, servedFromCache ? null : cb);
    } else {
        // For non-GET requests, just make the API call
        revalidateCache(cacheKey, url, http_method, http_params, auth_bearer_token, cb);
    }
}

// Revalidate cache by making the API call
function revalidateCache(cacheKey, url, http_method, http_params, auth_bearer_token, cb) {
    Lib.HttpHandler.fetchJSON(
        function (err, http_status, http_response_headers, response_data) {
            if (err) {
                if (cb) cb(err, http_status);
                return;
            }

            if (!Lib.Utils.isNullOrUndefined(response_data)) {
                if (http_method.toUpperCase() === 'GET' && http_status === 200) {
                    const cacheEntry = {
                        data: response_data,
                        status: http_status,
                        timestamp: Date.now(),
                    };
                    inMemoryCache.set(cacheKey, cacheEntry);

                    // Load existing cache from localStorage
                    let existingCache = {};
                    const cacheString = localStorage.getItem(LOCAL_STORAGE_KEY);
                    if (cacheString) {
                        try {
                            existingCache = JSON.parse(cacheString);
                        } catch (e) {
                            console.error('Failed to parse existing cache from localStorage:', e);
                            existingCache = {};
                        }
                    }

                    // Update cache and save back to localStorage
                    existingCache[cacheKey] = cacheEntry;
                    try {
                        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existingCache));
                    } catch (e) {
                        console.error('Failed to save cache to localStorage:', e);
                    }
                } else if (http_method.toUpperCase() !== 'GET' && http_status >= 200 && http_status < 300) {
                    // Invalidate cache after successful POST/PUT/DELETE
                    clearAllCache();
                }
                if (cb) cb(null, http_status, http_response_headers, response_data);
            } else {
                if (cb) cb(true, http_status);
            }
        },
        url, // url
        http_method, // method
        http_params, // params
        null, // request_content_type
        auth_bearer_token // auth_type
    );
}

/////////////////////////// Public Functions START /////////////////////////////
const Commons = {
    /********************************************************************
      http handler that interacts with js-helper-http-axios
      @param {Function} cb  - callback function
      @param {String} api_urn  - api urn for request
      @param {String} http_method  - http request method
      @param {Set} http_params  - Key value pairs of parameters
      @param {Set} body - Key value pairs of parameters
      @param {String} bearer_token - Bearer Token
      @callback(err, response_data) - Request Callback.
      * @callback {Error} err - Http Error
      * @callback {Set} response_data - Response Data
      *********************************************************************/
    httpHandler: function (cb, api_urn, http_method, http_params, auth_bearer_token, noCache = false) {
        const url = Lib.Commons.constructHttpURL(api_urn, http_params);
        const cacheKey = generateCacheKey(url, http_method, http_params);

        serveStaleAndRevalidate(cb, cacheKey, url, http_method, http_params, auth_bearer_token, noCache);
    },

    /********************************************************************
      Constructs final url for http call
      @param api_urn {String} - api path
      @return url {String} - http url string
      *********************************************************************/
    constructHttpURL: function (api_urn, http_params = {}) {
        // Determine the base URL based on serverType
        const base_url = http_params.serverType === "node"
            ? CONFIG["API_URL_NODEJS_PROD"]
            : CONFIG["API_URL_PROD"];

        return base_url + "/" + api_urn;
    },
}; ///////////////////////////Public Functions ENDS//////////////////////////////

// Export Commons
// module.exports = Commons;

