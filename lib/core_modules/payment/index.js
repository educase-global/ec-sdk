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
  return Payment;
}

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const Payment = {
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
  processFeePayment: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_PROCESS_FEE_PAYMENT"], // api urn
      "post", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  paymentOrderStore: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_PAYMENT_ORDER_STORE"], // api urn
      "post", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  paymentGatewayList: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_PAYMENT_GATEWAY_LIST"], // api urn
      "get", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  paymentOrderShow: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_PAYMENT_ORDER_SHOW"], // api urn
      "get", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  processPaymentFail: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_PROCESS_PAYMENT_FAIL"], // api urn
      "post", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  processDaycarePayment: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_PROCESS_DAYCARE_PAYMENT"], // api urn
      "post", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  feePaymentCheckPastInstallment: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_FEE_PAYMENT_CHECK_PAST_INSTALLMENT"], // api urn
      "get", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  feeProcessAdditionalFeePayment: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_FEE_PROCESS_ADDITIONAL_FEE_PAYMENT"], // api urn
      "post", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  paymentGatewayDetail: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_PAYMENT_GATEWAY_DETAIL"], // api urn
      "get", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  schoolPaymentOrderStoreAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_SCHOOL_PAYMENT_ORDER_STORE_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  schoolPaymentOrderShowAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_SCHOOL_PAYMENT_ORDER_SHOW_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  schoolProcessKitOrderingPaymentAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_SCHOOL_PROCESS_KIT_ORDERING_PAYMENT_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  schoolProcessPaymentFailAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_SCHOOL_PROCESS_PAYMENT_FAIL_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  schoolPaymentGatewayListAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_SCHOOL_PAYMENT_GATEWAY_LIST_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  schoolPaymentGatewayDetailAdmin: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_SCHOOL_PAYMENT_GATEWAY_DETAIL_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  schoolAdmissionProcessPayment: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_SCHOOL_ADMISSION_PROCESS_PAYMENT"], // api urn
      "post", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  schoolProcessProductOrderPayment: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_SCHOOL_PROCESS_PRODUCT_ORDER_PAYMENT"], // api urn
      "post", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  schoolOrderCreateProductOrder: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_SCHOOL_ORDER_CREATE_PRODUCT_ORDER"], // api urn
      "post", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  schoolKitOrderCreateKitOrder: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_KIT_ORDER_CREATE_KIT_ORDER"], // api urn
      "post", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  schoolKitOrderKitPaymentFail: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_KIT_ORDER_KIT_PAYMENT_FAIL"], // api urn
      "post", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  schoolKitOrderProcessKitPayment: function (cb, args) {
    // Construct params
    let params = args["params"]
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err) // Return error and exit
        }
        cb(
          false, // null in case of no error
          data
        )
      },
      CONFIG["API_URN_KIT_ORDER_PROCESS_KIT_PAYMENT"], // api urn
      "post", // method
      params, // request-params
      args["auth"], // auth
    )
  }
}
