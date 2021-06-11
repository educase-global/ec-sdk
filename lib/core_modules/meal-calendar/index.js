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
  return MealCalendar
}

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const MealCalendar = {
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
  getMenuNameAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_GET_MENU_NAME_ADMIN"])

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
      CONFIG["API_URN_GET_MENU_NAME_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"], // auth
      null
    )
  },

  addMenuNameAdmin: function (cb, args) {
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
      CONFIG["API_URN_ADD_MENU_NAME_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editMenuNameAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_EDIT_MENU_NAME_ADMIN"])

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
      CONFIG["API_URN_EDIT_MENU_NAME_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateMenuNameAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]
    console.log(CONFIG["API_URN_UPDATE_MENU_NAME_ADMIN"])

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
      CONFIG["API_URN_UPDATE_MENU_NAME_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    )
  },

  deleteMenuNameAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_DELETE_MENU_NAME_ADMIN"])

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
      CONFIG["API_URN_DELETE_MENU_NAME_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getMealCalendarAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_GET_MEAL_CALENDAR_ADMIN"])

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
      CONFIG["API_URN_GET_MEAL_CALENDAR_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"], // auth
      null
    )
  },

  addMealCalendarAdmin: function (cb, args) {
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
      CONFIG["API_URN_ADD_MEAL_CALENDAR_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editMealCalendarAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_EDIT_MEAL_CALENDAR_ADMIN"])

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
      CONFIG["API_URN_EDIT_MEAL_CALENDAR_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateMealCalendarAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]
    console.log(CONFIG["API_URN_UPDATE_MEAL_CALENDAR_ADMIN"])

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
      CONFIG["API_URN_UPDATE_MEAL_CALENDAR_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    )
  },

  deleteMealCalendarAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_DELETE_MEAL_CALENDAR_ADMIN"])

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
      CONFIG["API_URN_DELETE_MEAL_CALENDAR_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getMealCalendarParent: function (cb, args) {
    // Construct params
    let params = args["params"]

    console.log(CONFIG["API_URN_GET_MEAL_CALENDAR_PARENT"])

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
      CONFIG["API_URN_GET_MEAL_CALENDAR_PARENT"], // api urn
      "GET", // method
      params, // request-params
      args["auth"], // auth
      null
    )
  },
  getMealAdmin: function (cb, args) {
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
      CONFIG["API_URN_GET_MEAL_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"], // auth
      null
    )
  },
  getMealAllAdmin: function (cb, args) {
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
      CONFIG["API_URN_GET_MEAL_ALL_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"], // auth
      null
    )
  },
  updateHideMealAdmin: function (cb, args) {
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
      CONFIG["API_URN_UPDATE_HIDE_MEAL_TIME_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"], // auth
      null
    )
  }
}
