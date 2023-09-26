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
  return Configuration
}

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const Configuration = {
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

  editGeneralSettingsAdmin: function (cb, args) {
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
      CONFIG["API_URN_EDIT_GENERAL_SETTINGS"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateGeneralSettingsAdmin: function (cb, args) {
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
      CONFIG["API_URN_UPDATE_GENERAL_SETTINGS"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editSocialLinksAdmin: function (cb, args) {
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
      CONFIG["API_URN_EDIT_SOCIAL_LINKS"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateSocialLinksAdmin: function (cb, args) {
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
      CONFIG["API_URN_UPDATE_SOCIAL_LINKS"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getClassListAdmin: function (cb, args) {
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
      CONFIG["API_URN_GET_CLASS_LIST_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  addClassAdmin: function (cb, args) {
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
      CONFIG["API_URN_ADD_CLASS_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  viewClassAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIEW_CLASS_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editClassAdmin: function (cb, args) {
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
      CONFIG["API_URN_EDIT_CLASS_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateClassAdmin: function (cb, args) {
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
      CONFIG["API_URN_UPDATE_CLASS_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  deleteClassAdmin: function (cb, args) {
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
      CONFIG["API_URN_DELETE_CLASS_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getSectionListAdmin: function (cb, args) {
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
      CONFIG["API_URN_GET_SECTION_LIST_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  addSectionAdmin: function (cb, args) {
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
      CONFIG["API_URN_ADD_SECTION_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  viewSectionAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIEW_SECTION_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editSectionAdmin: function (cb, args) {
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
      CONFIG["API_URN_EDIT_SECTION_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateSectionAdmin: function (cb, args) {
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
      CONFIG["API_URN_UPDATE_SECTION_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  deleteSectionAdmin: function (cb, args) {
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
      CONFIG["API_URN_DELETE_SECTION_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getSubjectListAdmin: function (cb, args) {
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
      CONFIG["API_URN_GET_SUBJECT_LIST_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  addSubjectAdmin: function (cb, args) {
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
      CONFIG["API_URN_ADD_SUBJECT_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  viewSubjectAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIEW_SUBJECT_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editSubjectAdmin: function (cb, args) {
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
      CONFIG["API_URN_EDIT_SUBJECT_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateSubjectAdmin: function (cb, args) {
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
      CONFIG["API_URN_UPDATE_SUBJECT_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  deleteSubjectAdmin: function (cb, args) {
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
      CONFIG["API_URN_DELETE_SUBJECT_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getAcademicSyllabusListAdmin: function (cb, args) {
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
      CONFIG["API_URN_GET_ACADEMIC_SYLLABUS_LIST_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  addAcademicSyllabusAdmin: function (cb, args) {
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
      CONFIG["API_URN_ADD_ACADEMIC_SYLLABUS_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  viewAcademicSyllabusAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIEW_ACADEMIC_SYLLABUS_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editAcademicSyllabusAdmin: function (cb, args) {
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
      CONFIG["API_URN_EDIT_ACADEMIC_SYLLABUS_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateAcademicSyllabusAdmin: function (cb, args) {
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
      CONFIG["API_URN_UPDATE_ACADEMIC_SYLLABUS_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  deleteAcademicSyllabusAdmin: function (cb, args) {
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
      CONFIG["API_URN_DELETE_ACADEMIC_SYLLABUS_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getDesignationListAdmin: function (cb, args) {
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
      CONFIG["API_URN_GET_DESIGNATION_LIST_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  addDesignationAdmin: function (cb, args) {
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
      CONFIG["API_URN_ADD_DESIGNATION_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editDesignationAdmin: function (cb, args) {
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
      CONFIG["API_URN_EDIT_DESIGNATION_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateDesignationAdmin: function (cb, args) {
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
      CONFIG["API_URN_UPDATE_DESIGNATION_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  deleteDesignationAdmin: function (cb, args) {
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
      CONFIG["API_URN_DELETE_DESIGNATION_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getDesignationAttributeListAdmin: function (cb, args) {
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
      CONFIG["API_URN_GET_DESIGNATION_ATTRIBUTE_LIST_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  addDesignationAttributeAdmin: function (cb, args) {
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
      CONFIG["API_URN_ADD_DESIGNATION_ATTRIBUTE_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editDesignationAttributeAdmin: function (cb, args) {
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
      CONFIG["API_URN_EDIT_DESIGNATION_ATTRIBUTE_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateDesignationAttributeAdmin: function (cb, args) {
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
      CONFIG["API_URN_UPDATE_DESIGNATION_ATTRIBUTE_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  deleteDesignationAttributeAdmin: function (cb, args) {
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
      CONFIG["API_URN_DELETE_DESIGNATION_ATTRIBUTE_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  getDesignationAttributeListJsonAdmin: function (cb, args) {
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
      CONFIG["API_URN_GET_DESIGNATION_ATTRIBUTE_LIST_JSON_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  getNoticeBoardListAdmin: function (cb, args) {
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
      CONFIG["API_URN_GET_NOTICEBOARD_LIST_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  addNoticeBoardAdmin: function (cb, args) {
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
      CONFIG["API_URN_ADD_NOTICEBOARD_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  viewNoticeBoardAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIEW_NOTICEBOARD_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editNoticeBoardAdmin: function (cb, args) {
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
      CONFIG["API_URN_EDIT_NOTICEBOARD_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateNoticeBoardAdmin: function (cb, args) {
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
      CONFIG["API_URN_UPDATE_NOTICEBOARD_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  deleteNoticeBoardAdmin: function (cb, args) {
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
      CONFIG["API_URN_DELETE_NOTICEBOARD_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  getSliderListAdmin: function (cb, args) {
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
      CONFIG["API_URN_GET_SLIDER_LIST_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"], // auth
    )
  },

  addSliderAdmin: function (cb, args) {
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
      CONFIG["API_URN_ADD_SLIDER_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  viewSliderAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIEW_SLIDER_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  editSliderAdmin: function (cb, args) {
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
      CONFIG["API_URN_EDIT_SLIDER_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  updateSliderAdmin: function (cb, args) {
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
      CONFIG["API_URN_UPDATE_SLIDER_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"]
    )
  },

  deleteSliderAdmin: function (cb, args) {
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
      CONFIG["API_URN_DELETE_SLIDER_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  addSmtpAdmin: function (cb, args) {
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
      CONFIG["API_URN_ADD_SMTP_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  viewSmtpAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIEW_SMTP_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  addHeaderScriptAdmin: function (cb, args) {
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
      CONFIG["API_URN_ADD_HEADER_SCRIPT_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },
  viewHeaderScriptAdmin: function (cb, args) {
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
      CONFIG["API_URN_VIEW_HEADER_SCRIPT_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  classChangeStatusAdmin: function (cb, args) {
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
      CONFIG["API_URN_CLASS_CHANGE_STATUS_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  schoolWebsiteSliderAddAdmin: function (cb, args) {
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
      CONFIG["API_URN_SCHOOL_WEBSITE_SLIDER_ADD_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  schoolWebsiteSliderShowAdmin: function (cb, args) {
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
      CONFIG["API_URN_SCHOOL_WEBSITE_SLIDER_SHOW_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  studentEnrollmentSettingUpdateAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_ENROLLMENT_SETTING_UPDATE_ADMIN"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  studentEnrollmentSettingShowAdmin: function (cb, args) {
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
      CONFIG["API_URN_STUDENT_ENROLLMENT_SETTING_SHOW_ADMIN"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  teamStore: function (cb, args) {
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
      CONFIG["API_URN_TEAM_STORE"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  teamEdit: function (cb, args) {
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
      CONFIG["API_URN_TEAM_EDIT"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  teamUpdate: function (cb, args) {
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
      CONFIG["API_URN_TEAM_UPDATE"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  teamDestroy: function (cb, args) {
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
      CONFIG["API_URN_TEAM_DESTROY"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  teamTableData: function (cb, args) {
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
      CONFIG["API_URN_TEAM_TABLE_DATA"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  teamSchoolStore: function (cb, args) {
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
      CONFIG["API_URN_TEAM_SCHOOL_STORE"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  teamSchoolEdit: function (cb, args) {
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
      CONFIG["API_URN_TEAM_SCHOOL_EDIT"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  teamSchoolUpdate: function (cb, args) {
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
      CONFIG["API_URN_TEAM_SCHOOL_UPDATE"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  teamSchoolDestroy: function (cb, args) {
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
      CONFIG["API_URN_TEAM_SCHOOL_DESTROY"], // api urn
      "post", // method
      params, // request-params
      args["auth"] // auth
    )
  },

  teamSchoolTableData: function (cb, args) {
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
      CONFIG["API_URN_TEAM_SCHOOL_TABLE_DATA"], // api urn
      "get", // method
      params, // request-params
      args["auth"] // auth
    )
  }
}
