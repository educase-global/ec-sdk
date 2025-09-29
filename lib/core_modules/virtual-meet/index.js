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
  return VirtualMeet
}

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const VirtualMeet = {
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
  getVirtualMeetListAdmin: function (cb, args) {
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
      CONFIG["API_URN_GET_VIRTUAL_MEET_LIST_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getArchivedVirtualMeetListParent: function (cb, args) {
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
      CONFIG["API_URN_GET_ARCHIVED_VIRTUAL_MEET_LIST_PARENT"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  addVirtualMeetAdmin: function (cb, args) {
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
      CONFIG["API_URN_ADD_VIRTUAL_MEET_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editVirtualMeetAdmin: function (cb, args) {
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
      CONFIG["API_URN_EDIT_VIRTUAL_MEET_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  viewVirtualMeetAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIEW_VIRTUAL_MEET_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  VirtualMeetCalenderAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIRTUAL_MEETING_CALENDER_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },
VirtualMeetShowParticipantAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIRTUAL_MEETING_SHOW_PARTICIPANTS_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },
VirtualMeetShowOccurranceAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIRTUAL_MEETING_SHOW_OCCURRENCE_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  VirtualMeetShowAttendanceOccurrenceAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIRTUAL_MEETING_SHOW_ATTENDANCE_OCCURRENCE_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  VirtualMeetSingleShowAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIRTUAL_MEETING_SINGLE_SHOW"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  VirtualMeetSingleDestroyAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIRTUAL_MEETING_DESTROY_SINGLE_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },
  VirtualMeetCancelMeetingAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIRTUAL_MEETING_CANCEL_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },
    VirtualMeetCancelSingleMeetingAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIRTUAL_MEETING_SINGLE_CANCEL"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },
    VirtualMeetUpdateSingleMeetingAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIRTUAL_MEETING_SINGLE_UPDATE"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },
  VirtualMeetJoinMeetingAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIRTUAL_MEETING_JOIN_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },
  updateVirtualMeetAdmin: function (cb, args) {
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
      CONFIG["API_URN_UPDATE_VIRTUAL_MEET_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  deleteVirtualMeetAdmin: function (cb, args) {
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
      CONFIG["API_URN_DELETE_VIRTUAL_MEET_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getVirtualMeetListParent: function (cb, args) {
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
      CONFIG["API_URN_GET_VIRTUAL_MEET_LIST_PARENT"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  virtualMeetingShowParent: function (cb, args) {
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
      CONFIG["API_URN_VIRTUAL_MEETING_SHOW_PARENT"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getStudentMeetingShow: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_MEETING_SHOW"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getStudentMeetingShowParticipants: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_MEETING_SHOW_PARTICIPANTS"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getStudentMeetingCalendar: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_MEETING_CALENDAR"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  postStudentMeetingJoin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_MEETING_JOIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  }
}
