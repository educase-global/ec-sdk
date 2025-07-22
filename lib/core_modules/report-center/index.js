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
	return ReportCenter;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const ReportCenter = {
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
	getReportCenterListAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_URN_GET_FEEDBACK_LIST_ADMIN"])

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
			CONFIG["API_URN_GET_REPORT_CENTER_LIST_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	deleteReportCenterListAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_URN_GET_FEEDBACK_LIST_ADMIN"])

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
			CONFIG["API_URN_GET_REPORT_CENTER_LIST_FRANCHISE_DELETE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	//************** Franchise ****************//

	getReportCenterListFranchise: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_URN_GET_FEEDBACK_LIST_ADMIN"])

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
			CONFIG["API_URN_GET_REPORT_CENTER_LIST_FRANCHISE"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	deleteReportCenterListFranchise: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_URN_GET_FEEDBACK_LIST_ADMIN"])

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
			CONFIG["API_URN_GET_REPORT_CENTER_LIST_ADMIN_DELETE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	generateReportCenterFranchise: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_URN_GET_FEEDBACK_LIST_ADMIN"])

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
			CONFIG["API_URN_GET_REPORT_CENTER_GENERATE_REPORT_FRANCHISE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getReportCenterDropdownFranchise: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_URN_GET_FEEDBACK_LIST_ADMIN"])

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
			CONFIG["API_URN_GET_REPORT_CENTER_FRANCHISE_REPORT_DROPDOWN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getReportCenterReportDetailFranchise: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_URN_GET_FEEDBACK_LIST_ADMIN"])

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
			CONFIG["API_URN_GET_REPORT_CENTER_FRANCHISE_REPORT_DETAIL"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
};
