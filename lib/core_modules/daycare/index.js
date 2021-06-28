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
  return Event
}

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const Event = {
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
  getEventCategoryListAdmin: function (cb, args) {
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
      CONFIG["API_URN_GET_EVENT_CATEGORY_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"], // auth
      null
    )
  },

  addEventCategoryAdmin: function (cb, args) {
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
      CONFIG["API_URN_ADD_EVENT_CATEGORY_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editEventCategoryAdmin: function (cb, args) {
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
      CONFIG["API_URN_EDIT_EVENT_CATEGORY_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateEventCategoryAdmin: function (cb, args) {
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
      CONFIG["API_URN_UPDATE_EVENT_CATEGORY_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    )
  },

  deleteEventCategoryAdmin: function (cb, args) {
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
      CONFIG["API_URN_DELETE_EVENT_CATEGORY_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getEventListAdmin: function (cb, args) {
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
      CONFIG["API_URN_GET_EVENT_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  addEventAdmin: function (cb, args) {
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
      CONFIG["API_URN_ADD_EVENT_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  viewEventAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIEW_EVENT_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editEventAdmin: function (cb, args) {
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
      CONFIG["API_URN_EDIT_EVENT_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateEventAdmin: function (cb, args) {
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
      CONFIG["API_URN_UPDATE_EVENT_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]   
      )
  },

  deleteEventAdmin: function (cb, args) {
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
      CONFIG["API_URN_DELETE_EVENT_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getEventCalendarAdmin: function (cb, args) {
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
      CONFIG["API_URN_GET_EVENT_CALENDAR_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  getEventParent: function (cb, args) {
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
      CONFIG["API_URN_GET_EVENT_PARENT"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  }
}
