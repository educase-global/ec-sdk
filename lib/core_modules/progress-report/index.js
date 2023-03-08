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
	return ProgressReport;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const ProgressReport = {
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

	getProgressReportListAdmin: function (cb, args) {
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
			CONFIG["API_URN_GET_PROGRESS_REPORT_LIST_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	viewProgressReportAdmin: function (cb, args) {
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
			CONFIG["API_URN_VIEW_PROGRESS_REPORT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	viewResultAdmin: function (cb, args) {
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
			CONFIG["API_URN_VIEW_RESULT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	GenerateCsvAdmin: function (cb, args) {
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
			CONFIG["API_URN_GENERATE_CSV_PROGRESS_REPORT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	ImportCsvAdmin: function (cb, args) {
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
			CONFIG["API_URN_IMPORT_CSV_PROGRESS_REPORT_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	deleteProgressReportAdmin: function (cb, args) {
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
			CONFIG["API_URN_DELETE_PROGRESS_REPORT_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	addProgressReportAdmin: function (cb, args) {
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
			CONFIG["API_URN_ADD_PROGRESS_REPORT_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	editProgressReportAdmin: function (cb, args) {
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
			CONFIG["API_URN_EDIT_PROGRESS_REPORT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	updateProgressReportAdmin: function (cb, args) {
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
			CONFIG["API_URN_UPDATE_PROGRESS_REPORT_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getResultSettingsListAdmin: function (cb, args) {
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
			CONFIG["API_URN_GET_RESULT_SETTING_LIST_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	deleteResultSettingsAdmin: function (cb, args) {
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
			CONFIG["API_URN_DELETE_RESULT_SETTING_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	addResultSettingsAdmin: function (cb, args) {
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
			CONFIG["API_URN_ADD_RESULT_SETTING_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	editResultSettingsAdmin: function (cb, args) {
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
			CONFIG["API_URN_EDIT_RESULT_SETTING_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	updateResultSettingsAdmin: function (cb, args) {
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
			CONFIG["API_URN_UPDATE_RESULT_SETTING_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getTeacherSignatureListAdmin: function (cb, args) {
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
			CONFIG["API_URN_GET_TEACHER_SIGNATURE_LIST_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	deleteTeacherSignatureAdmin: function (cb, args) {
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
			CONFIG["API_URN_DELETE_TEACHER_SIGNATURE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	addTeacherSignatureAdmin: function (cb, args) {
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
			CONFIG["API_URN_ADD_TEACHER_SIGNATURE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	editTeacherSignatureAdmin: function (cb, args) {
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
			CONFIG["API_URN_EDIT_TEACHER_SIGNATURE_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	updateTeacherSignatureAdmin: function (cb, args) {
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
			CONFIG["API_URN_UPDATE_TEACHER_SIGNATURE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getSignatureAdmin: function (cb, args) {
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
			CONFIG["API_URN_GET_SIGNATURE_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	uploadSignatureAdmin: function (cb, args) {
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
			CONFIG["API_URN_UPLOAD_SIGNATURE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getProgressReportDropdownAdmin: function (cb, args) {
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
			CONFIG["API_URN_GET_PROGRESS_REPORT_DROPDOWN_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getStudentReportAdmin: function (cb, args) {
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
			CONFIG["API_URN_GET_STUDENT_REPORT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	updateStudentReportAdmin: function (cb, args) {
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
			CONFIG["API_URN_UPDATE_STUDENT_REPORT_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportTableDataParent: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_TABLE_DATA_PARENT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportShowParent: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_SHOW_PARENT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportAddSchoolAdmin: function (cb, args) {
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
			CONFIG["APR_URN_ADD_PROGRESS_REPORT_SCHOOL_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportEditSchoolAdmin: function (cb, args) {
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
			CONFIG["APR_URN_EDIT_PROGRESS_REPORT_SCHOOL_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportDeleteSchoolAdmin: function (cb, args) {
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
			CONFIG["APR_URN_DELETE_PROGRESS_REPORT_SCHOOL_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportSchoolListAdmin: function (cb, args) {
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
			CONFIG["API_URN_GET_PROGRESS_REPORT_SCHOOL_LIST_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportViewSchoolAdmin: function (cb, args) {
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
			CONFIG["API_URN_VIEW_PROGRESS_REPORT_SCHOOL_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportViewSchoolResultAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_SCHOOL_VIEW_RESULT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportGenerateCsvSchoolAdmin: function (cb, args) {
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
			CONFIG["API_URN_GENERATE_CSV_PROGRESS_REPORT_SCHOOL_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportImportCsvSchoolAdmin: function (cb, args) {
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
			CONFIG["API_URN_IMPORT_CSV_PROGRESS_REPORT_SCHOOL_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getStudentReportSchoolAdmin: function (cb, args) {
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
			CONFIG["API_URN_GET_STUDENT_REPORT_SCHOOL_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	updateStudentReportSchoolAdmin: function (cb, args) {
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
			CONFIG["API_URN_UPDATE_STUDENT_REPORT_SCHOOL_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getProgressReportSchoolDropdownAdmin: function (cb, args) {
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
			CONFIG["API_URN_GET_PROGRESS_REPORT_SCHOOL_DROPDOWN_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportChangeStatus: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_CHANGE_STATUS"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportSchoolChangeStatus: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_SCHOOL_CHANGE_STATUS"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3TemplateStoreAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_TEMPLATE_STORE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3TemplateEditAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_TEMPLATE_EDIT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3TemplateShowAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_TEMPLATE_SHOW_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3TemplateDestroyAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_TEMPLATE_DESTROY_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3TemplateTableDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_TEMPLATE_TABLE_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3TemplateDropdownAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_TEMPLATE_DROPDOWN_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3StoreAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_STORE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},


	progressReportV3EditAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_EDIT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3UpdateAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3DestroyAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_DESTROY_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3TableDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_TABLE_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3ShowAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_SHOW_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3ViewResultAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_VIEW_RESULT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3GenerateCsvAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_GENERATE_CSV_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3ImportCsvAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_IMPORT_CSV_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3DataAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3ChangeStatusAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_CHANGE_STATUS_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3TemplateCopyAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_TEMPLATE_COPY_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3DropdownAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_DROPDOWN_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3ViewMultipleResultAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_VIEW_MULTIPLE_RESULT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportDestroyStudentDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_DESTROY_STUDENT_DATA_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportCardSettingAddAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_CARD_SETTING_ADD_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportCardSettingGetAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_CARD_SETTING_GET_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3SujectDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_SUBJECT_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3AddSujectDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_SUBJECT_DATA_ADD_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3StudentReportUpdateAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_STUDENT_REPORT_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3GenerateStudentReportAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_GENERATE_STUDENT_REPORT_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3TemplateWithTestReportStoreAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_TEMPLATE_WITH_TEST_REPORT_STORE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3TemplateWithTestReportEditAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_TEMPLATE_WITH_TEST_REPORT_EDIT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3TemplateWithTestReportShowAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_TEMPLATE_WITH_TEST_REPORT_SHOW_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3TemplateWithTestReportCopyAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_TEMPLATE_WITH_TEST_REPORT_COPY_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3TemplateWithTestReportDestroyAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_TEMPLATE_WITH_TEST_REPORT_DESTROY_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3TemplateWithTestReportTableDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_TEMPLATE_WITH_TEST_REPORT_TABLE_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3TemplateWithTestReportDropdownAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_TEMPLATE_WITH_TEST_REPORT_DROPDOWN_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3WithTestReportStoreAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_STORE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3WithTestReportEditAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_EDIT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3WithTestReportUpdateAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3WithTestReportDestroyAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_DESTROY_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3WithTestReportDestroyStudentDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_DESTROY_STUDENT_DATA_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3WithTestReportTableDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_TABLE_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3WithTestReportShowAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_SHOW_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3WithTestReportViewResultAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_VIEW_RESULT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3WithTestReportViewMultipleResultAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_VIEW_MULTIPLE_RESULT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3WithTestReportChangeStatusAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_CHANGE_STATUS_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3StudentReportGetDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_STUDENT_REPORT_GET_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3StudentReportDataUpdateAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_STUDENT_REPORT_DATA_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	progressReportV3WithTestReportGenerateStudentReportAdmin: function (cb, args) {
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
			CONFIG["API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_GENERATE_STUDENT_REPORT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	}
};
