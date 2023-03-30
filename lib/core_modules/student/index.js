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
  return Student
}

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const Student = {
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
  getStudentListAdmin: function (cb, args) {
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
      CONFIG["API_URN_GET_STUDENT_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  addStudentAdmin: function (cb, args) {
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
      CONFIG["API_URN_ADD_STUDENT_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getExStudentListAdmin: function (cb, args) {
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
      CONFIG["API_URN_GET_EX_STUDENT_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  exStudentDropdownAdmin: function (cb, args) {
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
      CONFIG["API_URN_EX_STUDENT_DROPDOWN_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  addExStudentAdmin: function (cb, args) {
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
      CONFIG["API_URN_ADD_EX_STUDENT_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editStudentAdmin: function (cb, args) {
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
      CONFIG["API_URN_EDIT_STUDENT_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  changeStudentDivisionAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_CHANGE_DIVISION_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  viewStudentAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIEW_STUDENT_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateStudentAdmin: function (cb, args) {
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
      CONFIG["API_URN_UPDATE_STUDENT_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    )
  },

  viewStudentRightsAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIEW_STUDENTS_RIGHTS"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateStudentRightsAdmin: function (cb, args) {
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
      CONFIG["API_URN_UPDATE_STUDENTS_RIGHTS"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    )
  },

  getStudentDeleteHistoryAdmin: function (cb, args) {
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
      CONFIG["API_URN_GET_STUDENT_DELETE_HISTORY_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"]
    )
  },

  deleteStudentAdmin: function (cb, args) {
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
      CONFIG["API_URN_DELETE_STUDENT_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  studentGenerateQrCodeAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_GENERATE_QRCODE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  restoreStudentAdmin: function (cb, args) {
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
      CONFIG["API_URN_RESTORE_STUDENT_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    )
  },

  studentDocumentDestroyAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_DOCUMENT_DESTROY_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    )
  },

  studentChangeStatusAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_CHANGE_STATUS_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    )
  },

  studentUpgradeAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_UPGRADE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    )
  },

  studentSendDetailAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_SEND_DETAIL_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    )
  },

  studentImportCsvAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_IMPORT_CSV_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    )
  },

  studentExportAllAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_EXPORT_ALL_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    )
  },

  studentApplyClassFeeAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_APPLY_CLASS_FEE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    )
  },

  studentChangePasswordAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_CHANGE_PASSWORD_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    )
  },

  studentExportRfidAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_EXPORT_RFID_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    )
  },

  studentShowMultipleAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_SHOW_MULTIPLE_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"]
    )
  },

  studentStatsOverviewAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_STATS_OVERVIEW_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"]
    )
  },

  studentStatsOverviewAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_STATS_OVERVIEW_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"]
    )
  },

  studentStatsClassWishAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_STATS_CLASSWISH_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"]
    )
  }
}