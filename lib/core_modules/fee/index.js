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
  return Fee
}

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const Fee = {
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

  getFeeTypeListAdmin: function (cb, args) {
    let params = args["params"]

    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_GET_FEE_TYPE_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  addFeeTypeAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADD_FEE_TYPE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  viewFeeTypeAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_VIEW_FEE_TYPE_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editFeeTypeAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_EDIT_FEE_TYPE_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateFeeTypeAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_UPDATE_FEE_TYPE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    )
  },

  deleteFeeTypeAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_DELETE_FEE_TYPE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getFeeFineListAdmin: function (cb, args) {
    let params = args["params"]

    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_GET_FEE_FINE_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  addFeeFineAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADD_FEE_FINE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editFeeFineAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_EDIT_FEE_FINE_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateFeeFineAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_UPDATE_FEE_FINE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    )
  },

  deleteFeeFineAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_DELETE_FEE_FINE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getFeeConfigurationListAdmin: function (cb, args) {
    let params = args["params"]

    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_GET_FEE_CONFIG_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  addFeeConfigurationAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADD_FEE_CONFIG_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editFeeConfigurationAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_EDIT_FEE_CONFIG_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateFeeConfigurationAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_UPDATE_FEE_CONFIG_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    )
  },

  deleteFeeConfigurationAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_DELETE_FEE_CONFIG_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  getStudentFeetAdmin: function (cb, args) {
    let params = args["params"]

    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_GET_STUDENT_FEE_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"], // auth
    )
  },
  getStudentFeePrintAdmin: function (cb, args) {
    let params = args["params"]

    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_GET_STUDENT_FEE_PRINT_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  getStudentFeeScheduleAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_GET_STUDENT_FEE_SCHEDULE_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  getStudentLateFeeScheduleAdmin: function (cb, args) {
    let params = args["params"]

    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_GET_STUDENT_LATE_FEE_SCHEDULE_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"], // auth
    )
  },
  addStudentFeeAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADD_STUDENT_FEE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  addStudentFeeListAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADD_STUDENT_FEE_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  deleteStudentFeeListAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_DELETE_STUDENT_FEE_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getStudentFeeCollectionReportAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_STUDENT_FEE_COLLECTION_REPORT_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  getStudentFeePendingReportAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_STUDENT_FEE_PENDING_REPORT_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  addExpensesAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADD_EXPENSES_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getExpensesListAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_GET_EXPENSES_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editExpensesAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_EDIT_EXPENSES_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  deleteExpensesAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_DELETE_EXPENSES_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateExpensesAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_UPDATE_EXPENSES_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  addExpensesTypeAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADD_EXPENSES_TYPE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editExpensesTypeAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_EDIT_EXPENSES_TYPE_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateExpensesTypeAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_UPDATE_EXPENSES_TYPE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  deleteExpensesTypeAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_DELETE_EXPENSES_TYPE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getExpensesTypeListAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_GET_EXPENSES_TYPE_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  addFeeSettingAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADD_UPDATE_FEE_SETTING_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  showFeeSettingAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_SHOW_FEE_SETTING_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  addStudentCustomizeScheduleFee: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADD_STUDENT_CUSTOMIZE_SCHEDULE_FEE"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  studentFeeReceiptDataAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_STUDENT_FEE_RECEIPT_DATA_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  deleteStudentFeeDetailsAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_DELETE_STUDENT_FEE_DETAILS_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  removeStudentFeeAdmin: function (cb, args) {
    let params = args["params"]
    params['tableName'] = 'student_fee'
    // http call
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_REMOVE_STUDENT_FEE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  removeStudentFeeDetailsAdmin: function (cb, args) {
    let params = args["params"]
    params['tableName'] = 'student_fee_detail'
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_REMOVE_STUDENT_FEE_DETAILS_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  emailStudentFeeReceiptAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_EMAIL_STUDENT_FEE_RECEIPT_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  studentPrintClassFeeConfigAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_STUDENT_PRINT_CLASS_FEE_CONFIG_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  parentFeeListView: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_PARENT_FEE_LIST_VIEW"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  parentFeeEmailReceiptView: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_PARENT_FEE_EMAIL_RECEIPT_VIEW"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  studentFeeScheduleDeductListAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_STUDENT_FEE_SCHEDULE_DEDUCT_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  studentFeeChangeChequeStatusAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_STUDENT_FEE_CHANGE_CHEQUE_STATUS_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  feeTypeChangeStatusAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_FEE_TYPE_CHANGE_STATUS_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  feeInstallmentDetailsParent: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_FEE_INSTALLMENT_DETAILS_PARENT"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  classConfigTypeStoreAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_CLASS_CONFIG_TYPE_STORE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  classConfigTypeUpdateAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_CLASS_CONFIG_TYPE_UPDATE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  classConfigTypeDeleteAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_CLASS_CONFIG_TYPE_DELETE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  classConfigTypeListAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_CLASS_CONFIG_TYPE_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  classConfigTypeViewAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_CLASS_CONFIG_TYPE_VIEW_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  classConfigTypeEditAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_CLASS_CONFIG_TYPE_EDIT_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  classConfigTypeDropdownAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_CLASS_CONFIG_TYPE_DROPDOWN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  feeDiscountStoreAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_FEE_DISCOUNT_STORE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  feeDiscountUpdateAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_FEE_DISCOUNT_UPDATE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  feeDiscountDeleteAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_FEE_DISCOUNT_DELETE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  feeDiscountListAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_FEE_DISCOUNT_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  feeDiscountViewAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_FEE_DISCOUNT_VIEW_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  feeDiscountEditAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_FEE_DISCOUNT_EDIT_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  feeDiscountDropdownAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_FEE_DISCOUNT_DROPDOWN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  studentFeeConfigTypeDropdown: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_STUDENT_FEE_CONFIG_TYPE_DROPDOWN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  changeStudentFeeByConfigType: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_CHANGE_STUDENT_FEE_BY_CONFIG_TYPE"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  studentFeeDiscountTableDataAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_STUDENT_FEE_DISCOUNT_TABLE_DATA_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  feeDetailReportStatsAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_FEE_DETAIL_REPORT_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  feeExportDetailReportAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_FEE_EXPORT_DETAIL_REPORT_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  changeMultipleStudentFeeByConfigTypeAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_CHANGE_MULTIPLE_STUDENT_FEE_BY_CONFIG_TYPE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  studentFeeAdvanceInstallmentDetailAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_STUDENT_FEE_ADVANCE_INSTALLMENT_DETAIL_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  onboardingRazorpayBusinessAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ONBOARDING_RAZORPAY_BUSINESS_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  onboardingRazorpayOwnerAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ONBOARDING_RAZORPAY_OWNER_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  onboardingRazorpayBankDetailAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ONBOARDING_RAZORPAY_BANK_DETAIL_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  onboardingRazorpayUploadDocumentAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ONBOARDING_RAZORPAY_UPLOAD_DOCUMENT_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  feeAdvanceInstallmentDetailParent: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_FEE_ADVANCE_INSTALLMENT_DETAIL_PARENT"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  deleteFeeReportDataAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_DELETE_FEE_REPORT_DATA_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  studentFeeStatusAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_STUDENT_FEE_STATUS_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  easebuzzOnboardingBusinessAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ONBOARDING_EASEBUZZ_BUSINESS_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeCategoryStoreAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEE_CATEGORY_STORE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeCategoryEditAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEE_CATEGORY_EDIT_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeCategoryUpdateAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEE_CATEGORY_UPDATE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeCategoryDestroyAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEE_CATEGORY_DESTROY_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeCategoryChangeStatusAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEE_CATEGORY_CHANGE_STATUS_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeCategoryTableDataAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEE_CATEGORY_TABLE_DATA_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeCategoryDropdownAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEE_CATEGORY_DROPDOWN_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeAssignAllocateStoreAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEE_ASSIGN_ALLOCATE_STORE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeAssignAllocateListAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEE_ASSIGN_ALLOCATE_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeAssignDeallocateDestroyAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEE_ASSIGN_DEALLOCATE_DESTROY_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeAssignDeallocateListAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEE_ASSIGN_DEALLOCATE_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeStoreAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEES_STORE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeUpdateAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEES_UPDATE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeDestroyAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEES_DESTROY_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeEditAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEES_EDIT_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeTableDataAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEES_TABLE_DATA_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeShowAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEES_SHOW_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeShowAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEES_SHOW_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeViewListAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEES_VIEW_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeViewShowAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEES_VIEW_SHOW_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeSettingStoreAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEES_SETTING_STORE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeSettingShowAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEES_SETTING_SHOW_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeCollectAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEES_COLLECT_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeesUpdateStudentDataAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEES_UPDATE_STUDENT_DATA_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeesDropdownAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEES_DROPDOWN_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  expensesReportDataAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_EXPENSES_REPORT_DATA_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeesReportTableDataAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEES_REPORT_TABLE_DATA_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  expensesReportGenerateCsvAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_EXPENSES_REPORT_GENERATE_CSV_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeTableDataParent: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEE_TABLE_DATA_PARENT"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeeShowParent: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEE_SHOW_PARENT"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  additionalFeesChangeStatusAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_ADDITIONAL_FEES_CHANGE_STATUS_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  studentFeesTransactionAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_STUDENT_FEES_TRANSACTION_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  classConfigTypeMarkDefaultAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_CLASS_CONFIG_TYPE_MARK_DEFAULT_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  exportFeeTransactionCsvAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_EXPORT_FEE_TRANSACTION_CSV_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  studentRteFeeTableDataAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_STUDENT_RTE_FEE_TABLE_DATA_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  openingBalanceStoreAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_OPENING_BALANCE_STORE_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  studentFeesDetailAdmin: function (cb, args) {
    let params = args["params"]
    Lib.Commons.httpHandler(
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_STUDENT_FEES_DETAIL_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    )
  }
}