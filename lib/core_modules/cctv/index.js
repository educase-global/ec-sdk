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
	return Cctv;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const Cctv = {
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
	getCctvTableDataParent: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_GET_CCTV_TABLE_DATA_PARENT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvStoreAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_STORE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvEditAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_EDIT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvShowAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_SHOW_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvUpdateAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvDestroyAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_DESTROY_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	getCctvTableDataAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_TABLE_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvAssignStoreAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_ASSIGN_STORE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvAssignEditAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_ASSIGN_EDIT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvAssignShowAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_ASSIGN_SHOW_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvAssignUpdateAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_ASSIGN_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvAssignDestroyAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_ASSIGN_DESTROY_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	getCctvAssignTableDataAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_ASSIGN_TABLE_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	getPackTableDataAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_PACK_TABLE_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	getPackTableDataParent: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_PACK_TABLE_DATA_PARENT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	addPackDataAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_ADD_PACK_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	editPackDataAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_EDIT_PACK_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	updatePackDataAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_UPDATE_PACK_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	deletePackDataAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_DELETE_PACK_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	updateCCTVsettingsadmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_SETTINGS_UPDATE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	getCCTVsettingsadmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_SETTINGS_GET"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	getCCTVInvoiceTableDataadmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_INVOICE_TABLE_DATA_GET"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	getCCTVAccessTableDataadmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_ACCESS_TABLE_DATA_GET"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	updateCCTVAccessDataadmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_ACCESS_DATA_UPDATE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	updateCCTVWatchLogadmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_WATCH_LOG"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},
	getCCTVDetailParent: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_DETAIL"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},
	getCCTVDaycareAssignStudentsList: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_DAYCARE_ASSIGN_LIST"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},
	updateCCTVDaycareAssignStudentsList: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_UPDATE_DAYCARE_ASSIGN_LIST"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvDaycareAssignStoreAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_DAYCARE_ASSIGN_STORE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvDaycareAssignEditAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_DAYCARE_ASSIGN_EDIT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvDaycareAssignShowAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_DAYCARE_ASSIGN_SHOW_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvDaycareAssignUpdateAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_DAYCARE_ASSIGN_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvDaycareAssignDestroyAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_DAYCARE_ASSIGN_DESTROY_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	getCctvDaycareAssignTableDataAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_DAYCARE_ASSIGN_TABLE_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvDaycareTableDataParent: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_PARENT_CCTV_DAYCARE_TABLE_DATA_PARENT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvDaycareDetailParent: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_PARENT_CCTV_DAYCARE_DETAIL_PARENT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},
	cctvProviderDropdownAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_ADMIN_CCTV_PROVIDER_DROPDOWN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},
	cctvProviderListAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_ADMIN_CCTV_PROVIDER_LIST"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},
	cctvProviderAddAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_ADMIN_CCTV_PROVIDER_ADD"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvCreateUserAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_CREATE_USER_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvCreateChannelAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);

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
			CONFIG["API_URN_CCTV_CREATE_CHANNEL_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvCreateOrderAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);
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
			}
			, CONFIG["API_URN_CCTV_CREATE_ORDER_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvOrderPaymentFailAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);
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
			}
			, CONFIG["API_URN_CCTV_ORDER_PAYMENT_FAIL_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvOrderPaymentSuccessAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);
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
			}
			, CONFIG["API_URN_CCTV_ORDER_PAYMENT_SUCCESS_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvCamslotPriceAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);
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
			}
			, CONFIG["API_URN_CCTV_CAMSLOT_PRICE_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvInvoiceShowAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);
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
			}
			, CONFIG["API_URN_CCTV_INVOICE_SHOW_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvInvoiceCamncloudListAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);
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
			}
			, CONFIG["API_URN_CCTV_INVOICE_CAMNCLOUD_LIST_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvInvoiceGenerateCctvReceiptAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);
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
			}
			, CONFIG["API_URN_CCTV_INVOICE_GENERATE_CCTV_RECEIPT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvPackageAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);
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
			}
			, CONFIG["API_URN_CCTV_PACKAGE_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	cctvProcessPaymentParent: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['API_URN_LOGIN']);
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
			}
			, CONFIG["API_URN_CCTV_PROCESS_CCTV_PAYMENT_PARENT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	}
};
