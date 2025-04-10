// Info: Boilerplate library. Contains Functions for Outgoing HTTP(s) requests (For NodeJS only and not browsers)
// TODO: multipart requests
"use strict";

// Shared Dependencies (Managed by Loader)
var Lib = {};

var FormData = require("form-data");

// HTTP Library (Private scope)
const Axios = require("axios");

// Exclusive Dependencies
var CONFIG = require("./config"); // Loader can override it with Custom-Config

/////////////////////////// Module-Loader START ////////////////////////////////

/********************************************************************
  Load dependencies and configurations
  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
  @param {Set} config - Custom configuration in key-value pairs
  @return nothing
  *********************************************************************/
const loader = function (shared_libs, config) {
	// Shared Dependencies (Must be loaded in memory already)
	Lib.Utils = shared_libs.Utils;

	// Override default configuration
	if (!Lib.Utils.isNullOrUndefined(config)) {
		Object.assign(CONFIG, config); // Merge custom configuration with defaults
	}
};


const getErrorMessagesFromStatusCode = (statusCode) => {
	switch (statusCode) {
		case 400:
			return "(Bad Request) The request is not understood by the server due to an incorrect syntax."
			break;
		case 401:
			return "(Unauthorized) It means that one or both of your username and password were invalid."
			break;
		case 403:
			return "(Forbidden) The request sent to the server was a legal request, the server understood it but is refusing to respond to it and to process it. Authorization will not help in this case."
			break;
		case 404:
			return "(Page Not Found) The server cannot find the requested resource. It may be temporarily unavailable or permanently removed."
			break;
		case 500:
			return "(Internal Server Error) The server has encountered a situation it does not know how to handle."
			break;
		case 502:
			return "Bad Gateway"
			break;
		case 501:
			return "Not Implemented"
			break;
		case 503:
			return "(Service Unavailable) The server is not ready to handle the request"
			break;
		case 504:
			return "Gateway Timeout"
			break;
		case 507:
			return "Insufficient Storage"
			break;
		default:
			return "Something Went Wrong!"
	}
}

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////// Module Exports START /////////////////////////////
module.exports = function (shared_libs, config) {
	// Run Loader
	loader(shared_libs, config);

	// Return Public Funtions of this module
	return HttpNodeJS;
}; //////////////////////////// Module Exports END //////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const HttpNodeJS = {
	// Public functions accessible by other modules

	/********************************************************************
  Get JSON-Data from remote server using http(s) protocal.
  @param {Function} cb - Callback function to be invoked once async execution of this function is finished
  @param {String} url - Full URL without protocal
  @param {String} method - ENUM-String for request method (GET | POST | .. )
  @param {Map} params - (Optional) Params to be sent with this request
  @param {String} request_content_type - (Optional) Request Body data type. Default: x-www-form-urlencoded ('json' | 'x-www-form-urlencoded' | 'multipart')
  @param {String} auth_bearer_token - (Optional) Request Auth data in known format. (Currently only Bearer based Authorization method is implemented)
  @return - Thru Callback
  @callback(error, response_status, response_headers, response_data) - Request Callback
  * @callback {Integer} response_status - HTTP Response code from server
  * @callback {Map} response_headers - Return headers from response in Key-value. All keys are converted into lower-case.
  * @callback {ArrayBuffer | String | Object | Blob | Document | Stream} response_data - Return data as per response type.
  *********************************************************************/
	fetchJSON: function (
		cb,
		url,
		method,
		params,
		request_content_type,
		auth_bearer_token
	) {
		// Fetch JSON data from URL
		_HttpNodeJS.fetch(
			cb,
			url,
			method,
			params,
			request_content_type,
			"json", // Transform response to JSON
			auth_bearer_token
		);
	},
}; ///////////////////////////Public Functions END//////////////////////////////

//////////////////////////Private Functions START//////////////////////////////
const _HttpNodeJS = {
	// Private functions accessible within this modules only

	/********************************************************************
  Initialize connection for outgoing HTTP requests
  @param {reference} instance -  Request Instance object reference
  @return {void} - Nothing. Internally creates an agent for outgoing HTTP requests
  *********************************************************************/
	initialize: function (instance) {
		// Create Axios instance and set default config
		instance["http_connection"] = Axios.create({
			timeout: CONFIG.TIMEOUT,
			maxRedirects: CONFIG.MAX_REDIRECTS,
			maxContentLength: CONFIG.MAX_CONTENT_SIZE,
			responseEncoding: "utf8", // default
			headers: {
				Accept: "application/json, text/plain, */*", // Default. Each individual request can specify this.
				"User-Agent": CONFIG.USER_AGENT
			},
		});
	},

	/********************************************************************
  Get Data from remote server using http(s) protocal. Transform-response according to transform function.
	Note: For simplicity and limited usecase of this module, this function does not have different params for Get and Body
  @param {Function} cb - Callback function to be invoked once async execution of this function is finished.
  @param {String} url - Full URL without protocal
  @param {String} method - ENUM-String for request method (GET | POST | .. )
  @param {Map} params - (Optional) Params to be sent with this request
  @param {String} request_content_type - (Optional) Request Body data type. Default: x-www-form-urlencoded ('json' | 'x-www-form-urlencoded' | 'multipart')
  @param {String} response_type - Response data type. ('arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream')
  @param {String} auth_bearer_token - (Optional) Authorization Type ( BEARER_TOKEN | TOKEN | .. )
  @return - Thru Callback
  @callback(error, response_status, response_headers, response_data) - Request Callback
  * @callback {Integer} response_status - HTTP Response code from server
  * @callback {Map} response_headers - Return headers from response in Key-value. All keys are converted into lower-case.
  * @callback {ArrayBuffer | String | Object | Blob | Document | Stream} response_data - Return data as per response type.
  *********************************************************************/
	fetch: function (
		cb,
		url,
		method,
		params,
		request_content_type,
		response_type,
		auth_bearer_token
	) {
		// console.log(params);
		params = { ...params }

		const instance = {};

		// Initialize Http Connection if not Initalized
		_HttpNodeJS.initialize(instance);

		// Generate Cancel Token for this request (used to cancel this request)
		var cancel_token = Axios.CancelToken.source();

		// Set Request Configuration Object
		var request_config = {
			url: url,
			method: method,
			cancelToken: cancel_token.token,
			headers: {},
			params: null, // GET Params
			data: null, // POST, PUT, PATCH Params
		};


		if (request_config) {
			request_config.headers['Authorization'] = `Bearer ${auth_bearer_token}`
		}
		// Response Data transformation in case response is requested as 'json'
		if (response_type === "json") {
			// Request for JSON
			request_config["headers"]["Accept"] = "application/json";

			// Convert data to JSON. Null in case of malformed JSON
			request_config["transformResponse"] = Lib.Utils.stringToJSON;
		}

		// Set request-body and content-type in case of PUT, POST, PATCH
		if (method === "post" || method === "PUT" || method === "PATCH") {
			let formdata = new FormData();

			if (request_content_type === "json") {
				// Set Content-Type
				request_config["headers"]["Content-Type"] = "application/json";

				// Request Params Serializer Function
				request_config["transformRequest"] = function (obj) {
					return JSON.stringify(obj); // Convert params to string
				};
			} else if (request_content_type === "multipart") {
				// TODO
			} else {
				// DEFAULT: x-www-form-urlencoded
				// Set Content-Type
				// request_config['headers'] = formdata.getHeaders();
			}

			// Set Body if params are sent
			if (!Lib.Utils.isNullOrUndefined(params)) {
				for (const [key, value] of Object.entries(params)) {
					formdata.append(key, value);
				}
				request_config["data"] = formdata;
				// Merge params to Body-Data
			}
		}

		// Else set request-url in case of GET
		else {
			// Set only if params are sent
			if (!Lib.Utils.isNullOrUndefined(params)) {
				request_config["params"] = params; // Merge params to Query Params
			}
		}

		if (auth_bearer_token) {
			request_config["headers"]["authentication_key"] = auth_bearer_token;
		}

		// console.log(request_config);

		// Hit URL - Axios Request
		instance["http_connection"]
			.request(request_config)
			.then(function (response) {
				// No error. Execute callback with data
				return cb(
					null, // No error
					response.status,
					response.headers ? response.headers : {}, // Empty headers in case no headers
					response.data ? response.data : null // Null as data in case of no response-body
				);
			})
			.catch(function (error) {
				// Check what kind of error was thrown (multiple formats of errors)
				if (error.response) {
					// The request was made and the server responded with a status code that falls out of the range of 2xx
					// Handle 401 Unauthorized specifically
					if (error.response.status === 401) {
						localStorage.removeItem('userData')
						localStorage.removeItem('userList')
						if (window && typeof window !== 'undefined' && window.location) {
							window.location.replace("/login");
						}
						return cb(
							getErrorMessagesFromStatusCode(error.response.status),
							error.response.status,
							error.response.headers ? error.response.headers : {},
							error.response.data ? error.response.data : null
						);
					}
					return cb(
						getErrorMessagesFromStatusCode(error.response.status), // No error
						error.response.status,
						error.response.headers ? error.response.headers : {}, // Empty headers in case no headers
						error.response.data ? error.response.data : null // Null as data in case of no response-body
					);
				}

				// The request was made but no response was received
				else if (error.request) {
					// Cancel this request (otherwise it will wait till timeout)
					cancel_token.cancel();

					// Return error
					return cb(error); // Invoke callback and forward error
				}

				// Something happened in setting up the request that triggered an Error
				else {
					// Construct Error Object
					var err = Lib.Utils.error(CONFIG.UNKNOWN_ERROR);

					// Return error
					return cb(err); // Invoke callback with error
				}
			});
	},
}; //////////////////////////Private Functions END//////////////////////////////
