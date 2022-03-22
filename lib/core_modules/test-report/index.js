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
	return TestReport;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const TestReport = {
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

	testsStoreAdmin: function (cb, args) {
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
			CONFIG["API_URN_TESTS_STORE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	testsShowAdmin: function (cb, args) {
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
			CONFIG["API_URN_TESTS_SHOW_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	testsEditAdmin: function (cb, args) {
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
			CONFIG["API_URN_TESTS_EDIT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	testsUpdateAdmin: function (cb, args) {
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
			CONFIG["API_URN_TESTS_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	testsDestroyAdmin: function (cb, args) {
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
			CONFIG["API_URN_TESTS_DESTROY_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	testsTableDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_TESTS_TABLE_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	testsReportDataUpdateAdmin: function (cb, args) {
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
			CONFIG["API_URN_TESTS_REPORT_DATA_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	studentTestsTableDataAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// http call
		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
					// Success
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_STUDENT_TESTS_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	examTypeStoreAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// http call
		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
					// Success
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_EXAM_TYPE_STORE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	examTypeEditAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// http call
		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
					// Success
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_EXAM_TYPE_EDIT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	updateExamTypeAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// http call
		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
					// Success
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_EXAM_TYPE_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	deleteExamTypeAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// http call
		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
					// Success
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_EXAM_TYPE_DESTROY_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	examTypeTableDataAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// http call
		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
					// Success
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_EXAM_TYPE_TABLE_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	studentTestLeaderboardParent: function (cb, args) {
		// Construct params
		let params = args["params"];

		// http call
		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
					// Success
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_STUDENT_TEST_LEADERBOARD_PARENT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	testReportChangeStatusAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// http call
		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
					// Success
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_TEST_REPORT_CHANGE_STATUS_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	testReportExamTypeChangeStatusAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// http call
		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
					// Success
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_TEST_REPORT_EXAM_TYPE_CHANGE_STATUS_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
};
