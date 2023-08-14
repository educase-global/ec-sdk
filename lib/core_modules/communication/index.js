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
	return Communication;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const Communication = {
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
	staffCommunicationTableData: function (cb, args) {
		// Construct params
		let params = args["params"];
		// http call
		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_STAFF_COMMUNICATION_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	communicationTableDataAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
		// http call
		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_COMMUNICATION_TABLE_DATA_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	communicationShow: function (cb, args) {
		// Construct params
		let params = args["params"];
		// http call
		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_COMMUNICATION_SHOW"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	communicationTableDataParent: function (cb, args) {
		// Construct params
		let params = args["params"];
		// http call
		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_COMMUNICATION_TABLE_DATA_PARENT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	communicationShowParent: function (cb, args) {
		// Construct params
		let params = args["params"];
		// http call
		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_COMMUNICATION_SHOW_PARENT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	communicationCategoryList: function (cb, args) {
		// Construct params
		let params = args["params"];
		// http call
		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_COMMUNICATION_CATEGORY_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	communicationSubCategoryList: function (cb, args) {
		// Construct params
		let params = args["params"];
		// http call
		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_COMMUNICATION_SUB_CATEGORY_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	communicationGetCategoryFolder: function (cb, args) {
		// Construct params
		let params = args["params"];
		// http call
		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_COMMUNICATION_GET_CATEGORY_FOLDER"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	}
};
