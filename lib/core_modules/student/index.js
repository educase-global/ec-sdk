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
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  getStudentFormSettingsAdmin: function (cb, args) {
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
      CONFIG["API_URN_GET_STUDENT_FORM_SETTINGS_ADMIN"], // api urn
      "get", // method
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
      "post", // method
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
      "get", // method
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
      "get", // method
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
      "post", // method
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
      "get", // method
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
      "post", // method
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
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  studentHeaderSignatureStoreAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_BONAFIDE_HEADER_SIGNATURE_STORE_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  studentHeaderSignatureShowAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_BONAFIDE_HEADER_SIGNATURE_SHOW_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  studentHeaderDeleteAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_BONAFIDE_HEADER_DELETE_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  studentSignatureDeleteAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_BONAFIDE_SIGNATURE_DELETE_ADMIN"], // api urn
      "post", // method
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
      "post", // method
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
      "get", // method
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
      "post", // method
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
      "get", // method
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
      "post", // method
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
      "post", // method
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
      "post", // method
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
      "post", // method
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
      "post", // method
      params, // request-params
      args["auth"]
    )
  },
  studentChangeRTEStatusAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_CHANGE_RTE_STATUS_ADMIN"], // api urn
      "post", // method
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
      "post", // method
      params, // request-params
      args["auth"]
    )
  },
  studentMultipleUpgradeAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_MULTIPLE_UPGRADE_ADMIN"], // api urn
      "post", // method
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
      "post", // method
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
      "post", // method
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
      "post", // method
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
      "post", // method
      params, // request-params
      args["auth"]
    )
  },
  studentApplyClassFeeConfirmationAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_APPLY_CLASS_FEE_CONFIRMATION_ADMIN"], // api urn
      "get", // method
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
      "post", // method
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
      "post", // method
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
      "get", // method
      params, // request-params
      args["auth"]
    )
  },
  changeMultipleStudentDivisionAdmin: function (cb, args) {
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
      CONFIG["API_URN_MULTIPLE_STUDENT_CHANGE_DIVISION"], // api urn
      "post", // method
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
      "get", // method
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
      "get", // method
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
      "get", // method
      params, // request-params
      args["auth"]
    )
  },

  exportStudentFieldDropdownAdmin: function (cb, args) {
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
      CONFIG["API_URN_EXPORT_STUDENT_FIELD_DROPDOWN_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"]
    )
  },

  exportUpdateStudentListAdmin: function (cb, args) {
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
      CONFIG["API_URN_EXPORT_UPDATE_STUDENT_LIST_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"]
    )
  },

  importUpdateStudentCsvAdmin: function (cb, args) {
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
      CONFIG["API_URN_IMPORT_UPDATE_STUDENT_CSV_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },
  studentVerifiedStatusChange: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_CHANGE_VERIFIED"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  studentIdCardSettingStore: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_ID_CARD_SETTING_STORE"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },
  FranchisestudentIdCardSettingStore: function (cb, args) {
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
      CONFIG["API_URN_FRANCHISE_STUDENT_ID_CARD_SETTING_STORE"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },
  FranchisestudentIdCardSettingShow: function (cb, args) {
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
      CONFIG["API_URN_FRANCHISE_STUDENT_ID_CARD_SETTING_SHOW"], // api urn
      "get", // method
      params, // request-params
      args["auth"]
    )
  },
  FranchiseStudentFormSettingsEdit: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_FORM_SETTINGS_SHOW"], // api urn
      "get", // method
      params, // request-params
      args["auth"]
    )
  },
  FranchiseStudentFormSettingsUpdate: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_FORM_SETTINGS_UPDATE"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  studentIdCardSettingShow: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_ID_CARD_SETTING_SHOW"], // api urn
      "get", // method
      params, // request-params
      args["auth"]
    )
  },

  studentAdmissionStore: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_AMISSION_STORE"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  studentAdmissionDelete: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_AMISSION_DESTORY"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  studentConfirmRequest: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_AMISSION_PARENT_ACCEPT_ADMISSION"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  studentConfirmRejectRequest: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_AMISSION_PARENT_REJECT_ADMISSION"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },


  studentAdmissionTableListData: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_AMISSION_TABLE_LIST_DATA"], // api urn
      "get", // method
      params, // request-params
      args["auth"]
    )
  },

  studentAdmissionDetail: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_AMISSION_DETAIL_SHOW"], // api urn
      "get", // method
      params, // request-params
      args["auth"]
    )
  },

  studentAdmissionStatusChange: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_AMISSION_STATUS"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  studentAdmissionStudentStatusChange: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_AMISSION_STUDENT_CHANGE_STATUS"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  studentAdmissionParentUpdateReminderDate: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_AMISSION_PARENT_ADMISSION_UPDATE_REMINDER_DATE"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  studentGetParentAdmissionDetail: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_AMISSION_PARENT_GET_ADMISSION_DETAIL"], // api urn
      "get", // method
      params, // request-params
      args["auth"]
    )
  },

  studentGetAdmissionReceiptDetail: function (cb, args) {
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
      CONFIG["API_URN_GET_STUDENT_AMISSION_RECEIPT_DATA"], // api urn
      "get", // method
      params, // request-params
      args["auth"]
    )
  },

  studentGetAdmissionFeeCollect: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_AMISSION_FEE_COLLECT"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  studentAdmissionSettlementConfirmation: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_AMISSION_SETTLEMENT_CONFIRMATION"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  studentAdmissionConfirmationAddStudent: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_AMISSION_CONFIRMATION_ADD_STUDENT"], // api urn 
      "post", // method
      params, // request-params
      args["auth"]
    )
  },
  studentAdmissionConfirmationUpdateStudent: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_AMISSION_CONFIRMATION_UPDATE_STUDENT"],
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  studentAdmissionConfirmationDeleteStudent: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_AMISSION_CONFIRMATION_DELETE_STUDENT"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },
  studentAdmissionConfirmationChangeStatusConfirm: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_AMISSION_STUDENT_CHANGE_STATUS_CONFIRM"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },
  studentAdmissionConfirmationChangeStatusCancel: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_AMISSION_STUDENT_CHANGE_STATUS_CANCEL"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  studentTcFromSettingsShow: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_TC_FROM_SETTINGS_SHOW"], // api urn
      "get", // method
      params, // request-params
      args["auth"]
    )
  },

  studentTcFromSettingsUpdate: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_TC_FROM_SETTINGS_UPDATE"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  }
}