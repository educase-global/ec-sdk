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
  return Insta
}

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const Insta = {
  // Public functions accessible by other modules

  /********************************************************************
  Get Brand Customers Sources
  @param {Function} cb - Callback function to be invoked once async execution of this function is finished

  @param {Set} args - Array Sources of Parameters
  * @param {String} auth -  Authentication
  * @param {String} org_id -  Org ID
  * @param {String} brand_id -  Brand ID
  * @param {Number} start - Start Pagination Key

  @return - Thru Callback

  @callback(err, customers Sources, page data) - Request Callback.
  * @callback {Error} err - Http Error
  * @callback {Set} c_l - Customers Sources
  * @callback {Set} pg_d - Page data
  *********************************************************************/
  getInstaCategoryListAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_GET_INSTA_CATEGORY_LIST_ADMIN"])

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
      CONFIG["API_URN_GET_INSTA_CATEGORY_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  addInstaCategoryAdmin: function (cb, args) {
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
      CONFIG["API_URN_ADD_INSTA_CATEGORY_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editInstaCategoryAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_EDIT_INSTA_CATEGORY_ADMIN"])

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
      CONFIG["API_URN_EDIT_INSTA_CATEGORY_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateInstaCategoryAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]
    console.log(CONFIG["API_URN_UPDATE_INSTA_CATEGORY_ADMIN"])

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
      CONFIG["API_URN_UPDATE_INSTA_CATEGORY_ADMIN"], // api urn
      "POST", // method
       params ,// request-params
      args["auth"]
    )
  },

  deleteInstaCategoryAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_DELETE_INSTA_CATEGORY_ADMIN"])

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
      CONFIG["API_URN_DELETE_INSTA_CATEGORY_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getInstaAlertListAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_GET_INSTA_ALERT_LIST_ADMIN"])

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
      CONFIG["API_URN_GET_INSTA_ALERT_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  addInstaAlertAdmin: function (cb, args) {
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
      CONFIG["API_URN_ADD_INSTA_ALERT_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editInstaAlertAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_EDIT_INSTA_ALERT_ADMIN"])

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
      CONFIG["API_URN_EDIT_INSTA_ALERT_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateInstaAlertAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]
    console.log(CONFIG["API_URN_UPDATE_INSTA_ALERT_ADMIN"])

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
      CONFIG["API_URN_UPDATE_INSTA_ALERT_ADMIN"], // api urn
      "POST", // method
       params ,// request-params
      args["auth"]
    )
  },

  deleteInstaAlertAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_DELETE_INSTA_ALERT_ADMIN"])

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
      CONFIG["API_URN_DELETE_INSTA_ALERT_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  getInstaAlertListParent: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_GET_INSTA_CATEGORY_LIST_PARENT"])

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
      CONFIG["API_URN_GET_INSTA_ALERT_LIST_PARENT"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getInstaCategoryDropdownParent: function (cb, args) {
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
      CONFIG["API_URN_GET_EVENT_CATEGORY_DROPDOWN_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

}
