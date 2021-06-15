// Info: Contains Core Functions Related to Customer
"use strict"

// Shared Dependencies (Managed by Loader)
var Lib

// Exclusive Dependencies
var CONFIG // Module Configration (Managed by Loader)

/////////////////////////// Module-Loader START ////////////////////////////////

/********************************************************************
  Module Constructor and Exporter

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
  @param {Set} config - Module configuration in key-value pairs

  @return {Set[]} - Sub-Modules in specific Sequence
  *********************************************************************/
module.exports = function (shared_libs, config) {
  // Shared Dependencies (Managed my Main Entry Module)
  Lib = shared_libs

  // Module Configuration
  CONFIG = config

  // Export Public Funtions of this module
  return Gallery
}

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const Gallery = {
  // Public functions accessible by other modules

  /********************************************************************
  Get Brand Customers List
  @param {Function} cb - Callback function to be invoked once async execution of this function is finished

  @param {Set} args - Array List of Parameters
  * @param {String} auth -  Authentication
  * @param {String} org_id -  Org ID
  * @param {String} brand_id -  Brand ID
  * @param {Number} start - Start Pagination Key

  @return - Thru Callback

  @callback(err, customers list, page data) - Request Callback.
  * @callback {Error} err - Http Error
  * @callback {Set} c_l - Customers List
  * @callback {Set} pg_d - Page data
  *********************************************************************/
  getGalleryImageAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_GET_IMAGE_ADMIN"])

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_GET_IMAGE_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  addGalleryImageAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_ADD_IMAGE_ADMIN"])

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADD_IMAGE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateGalleryImageAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_UPDATE_IMAGE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  deleteGalleryImageAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_DELETE_IMAGE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getAlbumListAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_GET_ALBUM_LIST_ADMIN"])

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_GET_ALBUM_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  addAlbumAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADD_ALBUM_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editAlbumAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_EDIT_ALBUM_ADMIN"])

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_EDIT_ALBUM_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateAlbumAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]
    console.log(CONFIG["API_URN_UPDATE_ALBUM_ADMIN"])

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_UPDATE_ALBUM_ADMIN"], // api urn
      "POST", // method
      params,
      args["auth"]
    )
  },

  deleteAlbumAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_DELETE_ALBUM_ADMIN"])

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_DELETE_ALBUM_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  getGalleryImageListParent: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_GET_IMAGE_LIST_PARENT"])

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_GET_IMAGE_LIST_PARENT"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getGalleryImageDetailsParent: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_GET_IMAGE_DETAILS_PARENT"])

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_GET_IMAGE_DETAILS_PARENT"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  }
}
