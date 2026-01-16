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
	return CurriculumProvider;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const CurriculumProvider = {
	// Public functions accessible by other modules

	/********************************************************************
  Get Brand Customers List
  @param {Function} cb - Callback function to be invoked once async execution of this function is finished

  @param {Set} args - Array List of Parameters
  * @param {String} auth -  Authentication
  * @param {String} org_id -  Org ID
  * @param {String} brand_id -  Brand ID
  * @param {Number} start - Start Pagination Key

  @return - Thru Callback

  @callback(err, customers list, page data) - Request Callback.
  * @callback {Error} err - Http Error
  * @callback {Set} c_l - Customers List
  * @callback {Set} pg_d - Page data
  *********************************************************************/

	getCurriculumProviderUserData: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_GET_CURRICULLUM_PROVIDER_USER_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingEvaluationLegendStore: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_EVALUATION_LEGEND_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingEvaluationLegendEdit: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_EVALUATION_LEGEND_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingEvaluationLegendUpdate: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_EVALUATION_LEGEND_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingEvaluationLegendUpdateStatus: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_EVALUATION_LEGEND_UPDATE_STATUS"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingEvaluationLegendDestroy: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_EVALUATION_LEGEND_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingEvaluationLegendUndoDestroy: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_EVALUATION_LEGEND_UNDO_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingEvaluationLegendTableData: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_EVALUATION_LEGEND_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingEvaluationLegendDropdown: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_EVALUATION_LEGEND_DROPDOWN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	// Provider Setting Evaluation Remark API's
	ProviderSettingEvaluationRemarkStore: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_EVALUATION_REMARK_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingEvaluationRemarkEdit: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_EVALUATION_REMARK_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingEvaluationRemarkUpdate: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_EVALUATION_REMARK_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingEvaluationRemarkUpdateStatus: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_EVALUATION_REMARK_UPDATE_STATUS"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingEvaluationRemarkDestroy: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_EVALUATION_REMARK_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingEvaluationRemarkDestroy: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_EVALUATION_REMARK_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingEvaluationRemarkUndoDestroy: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_EVALUATION_REMARK_UNDO_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingEvaluationRemarkTableData: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_EVALUATION_REMARK_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	// Provider Setting Subject API's
	ProviderSettingSubjectStore: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_SUBJECT_STORE"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingSubjectEdit: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_SUBJECT_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingSubjectUpdate: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_SUBJECT_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingSubjectUpdateStatus: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_SUBJECT_UPDATE_STATUS"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingSubjectDestroy: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_SUBJECT_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingSubjectUndoDestroy: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_SUBJECT_UNDO_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingSubjectLearningTableData: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_SUBJECT_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingSubjectDropdown: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_SUBJECT_DROPDOWN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingSubjectLearningDropdown: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_SUBJECT_LEARNING_DROPDOWN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingSubjectLearningDestroy: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_SUBJECT_LEARNING_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingSubjectLearningUndoDestroy: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_SUBJECT_LEARNING_UNDO_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	// Provider Setting Action API's
	ProviderSettingActionStore: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_ACTION_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingActionEdit: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_ACTION_EDIT"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingActionUpdate: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_ACTION_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingActionUpdateStatus: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_ACTION_UPDATE_STATUS"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingActionDestroy: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_ACTION_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingActionUndoDestroy: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_ACTION_UNDO_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingActionTableData: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_ACTION_TABLE_DATA"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingActionDropdown: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_ACTION_DROPDOWN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	// Provider Setting Curriculum Store API's
	ProviderSettingCurriculumStore: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_CURRICULUM_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingCurriculumEdit: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_CURRICULUM_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingCurriculumEditContent: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_CURRICULUM_EDIT_CONTENT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingCurriculumUpdate: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_CURRICULUM_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingCurriculumAddChapter: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_CURRICULUM_ADD_CHAPTER"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingCurriculumAddChaptersTopic: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_CURRICULUM_ADD_CHAPTER_TOPIC"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingCurriculumAddChapterSubTopic: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_CURRICULUM_ADD_CHAPTER_TOPIC"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingCurriculumAddSubject: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_CURRICULUM_ADD_SUBJECT"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	// Provider User API's
	ProviderUserLogin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_ACCOUNT_LOGIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderUserUpdate: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_ACCOUNT_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderUserUpdateOrganization: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_ACCOUNT_UPDATE_ORGANIZATION"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderUserDetail: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_ACCOUNT_DETAIL"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderUserGetUserData: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_ACCOUNT_GET_USER_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderUserModules: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_ACCOUNT_MODULE"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderUserLogout: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_ACCOUNT_LOGOUT"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	// Provider Setting Class API's
	ProviderSettingClassStore: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_CLASS_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingClassEdit: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_CLASS_EDIT"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingClassUpdate: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_CLASS_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingClassUpdateStatus: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_CLASS_UPDATE_STATUS"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingClassDestroy: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_CLASS_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingClassUndoDestroy: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_CLASS_UNDO_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingClassTableData: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_CLASS_TABLE_DATA"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingClassDropdown: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_CLASS_DROPDOWN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	// Provider Setting Category API's
	ProviderSettingCategoryStore: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_CATEGORY_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingCategoryEdit: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_CATEGORY_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingCategoryUpdate: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_CATEGORY_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingCategoryUpdateStatus: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_CATEGORY_UPDATE_STATUS"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingCategoryDestroy: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_CATEGORY_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingCategoryUndoDestroy: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_CATEGORY_UNDO_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingCategoryTableData: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_CATEGORY_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	ProviderSettingCategoryDropdown: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_PROVIDER_SETTING_CATEGORY_DROPDOWN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

};
