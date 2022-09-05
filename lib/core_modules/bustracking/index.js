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
	return busTracking;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const busTracking = {
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
    BusRouteDropdownAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_ROUTE_DROP_DOWN_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
    },
	
  	BusDropdownAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_DROP_DOWN_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	BusStoreAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_STORE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	BusEditAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_EDIT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	BusUpdateAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	BusDeleteAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_DESTROY_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	getBusTableDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_TABLE_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},


	BusAttenderStoreAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_ATTENDER_STORE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	BusAttenderEditAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_ATTENDER_EDIT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	BusAttenderUpdateAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_ATTENDER_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	BusAttenderDeleteAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_ATTENDER_DESTROY_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	getBusAttenderTableDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_ATTENDER_TABLE_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},


	BusRouteStoreAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUSROUTE_STORE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	BusRouteEditAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUSROUTE_EDIT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	BusRouteUpdateAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUSROUTE_UPDATE_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	BusRouteDeleteAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUSROUTE_DESTROY_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	getBusRouteTableDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUSROUTE_TABLE_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},

	
	AllocateStudentUpdateAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_ALLOCATE_UPDATE_STUDENT_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},
	DeAllocateStudentAddAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_DEALLOCATE_STORE_STUDENT_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},
	AllocateStudentAddAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_ALLOCATE_STORE_STUDENT_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"]
		);
	},

	getStudentAllocateTableDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_GET_ALLOCATE_STUDENT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},
	editStudentAllocateTableDataAdmin: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_ALLOCATE_EDIT_STUDENT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"]
		);
	},
};
