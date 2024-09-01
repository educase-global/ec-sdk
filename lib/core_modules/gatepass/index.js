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
	return GatePass;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const GatePass = {
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

	//CATEGORY
	gatePassSettingsUpdateAndAdd: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_GATE_PASS_SETTINGS_ADD_UPDATE_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	gatePassSettingsEdit: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_GATE_PASS_SETTINGS_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	gatePassIssuedGatePassAdd: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_GATE_PASS_ISSUED_GATE_PASS_ADD"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	
	gatePassIssuedGatePassEdit: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_GATE_PASS_ISSUED_GATE_PASS_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	gatePassIssuedGatePassGetStudentList: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_GATE_PASS_ISSUED_GATE_PASS_GET_STUDENT_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	gatePassIssuedGatePassShow: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_GATE_PASS_ISSUED_GATE_PASS_SHOW"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	gatePassIssuedGatePassUpdate: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_GATE_PASS_ISSUED_GATE_PASS_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	gatePassIssuedGatePassDelete: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_GATE_PASS_ISSUED_GATE_PASS_DELETE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	gatePassIssuedGatePassList: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_GATE_PASS_ISSUED_GATE_PASS_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	gatePassIssuedGatePassApprove: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_GATE_PASS_ISSUED_GATE_PASS_APPROVE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	gatePassIssuedGatePassMarkoutCheck: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_GATE_PASS_ISSUED_GATE_PASS_MARKOUT_CHECK"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	// Gate Pass Parent side
	gatePassParentSideAdd: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_GATE_PASS_PARENT_SIDE_ADD"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	gatePassParentSideEdit: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_GATE_PASS_PARENT_SIDE_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	gatePassParentSideShow: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_GATE_PASS_PARENT_SIDE_SHOW"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	gatePassParentSideUpdate: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_GATE_PASS_PARENT_SIDE_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	
	gatePassParentSideDelete: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_GATE_PASS_PARENT_SIDE_DELETE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	gatePassParentSideList: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_GATE_PASS_PARENT_SIDE_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	

};
