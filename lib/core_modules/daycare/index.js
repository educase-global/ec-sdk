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
	return Daycare;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const Daycare = {
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
	getDaycareCategoryListAdmin: function (cb, args) {
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
			CONFIG["API_URN_GET_DAYCARE_CATEGORY_LIST_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	addDaycareCategoryAdmin: function (cb, args) {
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
			CONFIG["API_URN_ADD_DAYCARE_CATEGORY_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	editDaycareCategoryAdmin: function (cb, args) {
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
			CONFIG["API_URN_EDIT_DAYCARE_CATEGORY_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	updateDaycareCategoryAdmin: function (cb, args) {
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
			CONFIG["API_URN_UPDATE_DAYCARE_CATEGORY_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	deleteDaycareCategoryAdmin: function (cb, args) {
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
			CONFIG["API_URN_DELETE_DAYCARE_CATEGORY_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	viewDaycareCategoryAdmin: function (cb, args) {
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
			CONFIG["API_URN_VIEW_DAYCARE_CATEGORY_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getAllocateStudentAdmin: function (cb, args) {
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
			CONFIG["API_URN_ALLOCATE_STUDENT_LIST_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getdeAllocateStudentAdmin: function (cb, args) {
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
			CONFIG["API_URN_DEALLOCATE_STUDENT_LIST_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	addAllocateStudentAdmin: function (cb, args) {
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
			CONFIG["API_URN_ALLOCATE_STUDENT_ADD_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	deleteDeAllocateStudentAdmin: function (cb, args) {
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
			CONFIG["API_URN_DEALLOCATE_STUDENT_DESTROY_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getDaycareInListAdmin: function (cb, args) {
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
			CONFIG["API_URN_GET_DAYCARE_IN_LIST_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getDaycareOutListAdmin: function (cb, args) {
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
			CONFIG["API_URN_GET_DAYCARE_OUT_LIST_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	addDaycareInAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_IN_STORE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	updateDaycareOutAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_OUT_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	daycareDropdownCategoryAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_DROPDOWN_CATEGORY_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	generateStudentBillAdmin: function (cb, args) {
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
			CONFIG["API_URN_STUDENT_GENERATE_BILL_STORE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	generateStudentBillFormAdmin: function (cb, args) {
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
			CONFIG["API_URN_STUDENT_GENERATE_BILL_FORM_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getStudentBillDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_STUDENT_BILL_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	generateStudentBillTableAdmin: function (cb, args) {
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
			CONFIG["API_URN_STUDENT_GENERATE_BILL_TABLE_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	generateStudentBillPrintAdmin: function (cb, args) {
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
			CONFIG["API_URN_STUDENT_GENERATE_BILL_PRINT_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	studentDaycareHistoryAdmin: function (cb, args) {
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
			CONFIG["API_URN_HISTORY_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	deleteStudentBillAdmin: function (cb, args) {
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
			CONFIG["API_URN_DELETE_STUDENT_GENERATE_BILL_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	daycareTimingUpdateAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_TIMING_STORE_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	daycareTimingEditAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_TIMING_EDIT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getDaycarePackageParent: function (cb, args) {
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
			CONFIG["API_URN_GET_DAYCARE_PACKAGE_PARENT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getDaycareTableDataParent: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_TABLE_DATA_PARENT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	studentDaycareEditHistoryAdmin: function (cb, args) {
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
			CONFIG["API_URN_EDIT_HISTORY_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	studentDaycareUpdateHistoryAdmin: function (cb, args) {
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
			CONFIG["API_URN_UPDATE_HISTORY_DATA_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	daycareSettingsUpdateAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_SETTING_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	daycareSettingsShowAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_SETTING_SHOW_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	studentGenerateBillApprovedTableDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_STUDENT_GENERATE_BILL_APPROVED_TABLE_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	studentGenerateBillPaidTableDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_STUDENT_GENERATE_BILL_PAID_TABLE_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	approvedStudentBillAdmin: function (cb, args) {
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
			CONFIG["API_URN_APPROVED_STUDENT_BILL_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	studentGenerateBillShowAdmin: function (cb, args) {
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
			CONFIG["API_URN_STUDENT_GENERATE_BILL_SHOW_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getDaycareCollectionTableAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_REPORT_COLLECTION_TABLE_GET"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getDaycarePendingTableAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_REPORT_PENDING_TABLE_GET"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	collectStudentDaycareBillAdmin: function (cb, args) {
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
			CONFIG["API_URN_COLLECT_STUDENT_DAYCARE_BILL_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},


	daycareReportTableDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_REPORT_TABLE_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareEditReportAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_REPORT_EDIT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareShowReportAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_REPORT_SHOW_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareUpdateReportAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_REPORT_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareDeleteReportAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_REPORT_DESTROY_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	daycareRoutineTableDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_ROUTINE_TABLE_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareMoodTableDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_MOOD_TABLE_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareMoodDropdownAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_MOOD_DROPDOWN_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareEditMoodAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_MOOD_EDIT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareAddMoodAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_MOOD_STORE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareShowMoodAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_MOOD_SHOW_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareUpdateMoodAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_MOOD_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareDeleteMoodAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_MOOD_DESTROY_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	daycareRoutineDropdownAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_ROUTINE_DROPDOWN_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareEditRoutineAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_ROUTINE_EDIT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareAddRoutineAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_ROUTINE_STORE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareShowRoutineAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_ROUTINE_SHOW_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareUpdateRoutineAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_ROUTINE_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareDeleteRoutineAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_ROUTINE_DESTROY_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	daycareActivityTableDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_ACTIVITY_TABLE_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareActivityDropdownAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_ACTIVITY_DROPDOWN_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareEditActivityAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_ACTIVITY_EDIT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareAddActivityAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_ACTIVITY_STORE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareShowActivityAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_ACTIVITY_SHOW_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareUpdateActivityAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_ACTIVITY_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareDeleteActivityAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_ACTIVITY_DESTROY_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},


	daycareGetConfigAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_CONFIG_SHOW_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	daycareUpdateConfigAdmin: function (cb, args) {
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
			CONFIG["API_URN_DAYCARE_CONFIG_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
};
