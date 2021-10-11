// Info: Contains Core Functions Related to Customer
"use strict";

// Shared Dependencies (Managed by Loader)
var Lib;

// Exclusive Dependencies
var CONFIG; // Module Configration (Managed by Loader)

/////////////////////////// Module-Loader START ////////////////////////////////

/********************************************************************
  Module Constructor and Exporter

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
  @param {Set} config - Module configuration in key-value pairs

  @return {Set[]} - Sub-Modules in specific Sequence
  *********************************************************************/
module.exports = function (shared_libs, config) {
  // Shared Dependencies (Managed my Main Entry Module)
  Lib = shared_libs;

  // Module Configuration
  CONFIG = config;

  // Export Public Funtions of this module
  return Elearning;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const Elearning = {
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
  getCategoryListAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_GET_CATEGORY_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  addCategoryAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_ADD_CATEGORY_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  editCategoryAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_EDIT_CATEGORY_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  viewCategoryAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_VIEW_CATEGORY_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  updateCategoryAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];
    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_UPDATE_CATEGORY_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    );
  },

  deleteCategoryAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_DELETE_CATEGORY_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  getTutorialListAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_GET_TUTORIAL_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  addTutorialAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_ADD_TUTORIAL_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  editTutorialAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_EDIT_TUTORIAL_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  viewTutorialAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_VIEW_TUTORIAL_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  updateTutorialAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];
    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_UPDATE_TUTORIAL_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    );
  },

  deleteTutorialAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_DELETE_TUTORIAL_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  getAssessmentListAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_GET_ASSESSMENT_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  addAssessmentAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_ADD_ASSESSMENT_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  editAssessmentAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_EDIT_ASSESSMENT_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  viewAssessmentAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_VIEW_ASSESSMENT_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  updateAssessmentAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];
    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_UPDATE_ASSESSMENT_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    );
  },

  deleteAssessmentAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_DELETE_ASSESSMENT_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  getResultSettingListAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_GET_RESULT_SETTING_LIST_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  addResultSettingAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_ADD_RESULT_SETTING_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  editResultSettingAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_EDIT_RESULT_SETTING_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  viewResultSettingAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_VIEW_RESULT_SETTING_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  updateResultSettingAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];
    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_UPDATE_RESULT_SETTING_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"]
    );
  },

  deleteResultSettingAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_DELETE_RESULT_SETTING_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  getElearningSubjectListParent: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_GET_ELEARNING_SUBJECT_LIST_PARENT"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  getElearningCategoryListParent: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_GET_ELEARNING_CATEGORY_LIST_PARENT"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  getElearningVideoListParent: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_GET_ELEARNING_VIDEO_LIST_PARENT"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  getAssessmentListParent: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_GET_ASSESSMENT_LIST_PARENT"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  getAssessmentQuestionsListParent: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_GET_ASSESSMENT_QUESTIONS_LIST_PARENT"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  getAssessmentStartParent: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_GET_ASSESSMENT_START_PARENT"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  getAssessmentEndParent: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_GET_ASSESSMENT_END_PARENT"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  checkAssessmentStatusParent: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_CHECK_ASSESSMENT_STATUS_PARENT"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  assessmentSubmitParent: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_ASSESSMENT_SUBMIT_PARENT"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  getResultFormatAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_GET_RESULT_FORMAT_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  updateResultFormatAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_UPDATE_RESULT_FORMAT_ADMIN"], // api urn
      "POST", // method
      params, // request-params
      args["auth"] // auth
    );
  },

  getAssessmentLeaderboardAdmin: function (cb, args) {
    // Construct params
    let params = args["params"];

    // http call
    Lib.Commons.httpHandler(
      // callback
      function (err, http_status, http_headers, data) {
        if (err) {
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );
      },
      CONFIG["API_URN_GET_ASSESSMENT_LEADERBOARD_ADMIN"], // api urn
      "GET", // method
      params, // request-params
      args["auth"] // auth
    );
  },
};
