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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	staffDropDownAdmin: function (cb, args) {
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
			CONFIG["API_URN_STAFF_DROPDOWN_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	busStopImportCsv: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_ROUTE_STOP_IMPORT_CSV_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},
	busStopGenerateCsv: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_ROUTE_STOP_GENERATE_CSV_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	busStaffDetails: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_STAFF_DETAILS_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	busStopAddDetails: function (cb, args) {
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
			CONFIG["API_URN_STOP_ROUTE_STORE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},
	busStopEditDetails: function (cb, args) {
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
			CONFIG["API_URN_STOP_EDIT_ROUTE_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	busStopUpdateDetails: function (cb, args) {
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
			CONFIG["API_URN_STOP_UPDATE_ROUTE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},
	busStopDeleteDetails: function (cb, args) {
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
			CONFIG["API_URN_STOP_ROUTE_DELETE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},
	busStopListDetails: function (cb, args) {
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
			CONFIG["API_URN_STOP_ROUTE_LIST_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	busStopDropdownDetails: function (cb, args) {
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
			CONFIG["API_URN_STOP_ROUTE_DROPDOWN_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	busRouteAssignStudentStore: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_ROUTE_ASSIGN_STUDENT_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	busRouteAssignStudentEdit: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_ROUTE_ASSIGN_EDIT_STUDENT_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	busRouteAssignedStudentList: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_ROUTE_ASSIGNED_STUDENT_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	busRouteAssignStudentList: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_ROUTE_ASSIGN_STUDENT_LIST_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	busRouteAssignStudentUpdate: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_ROUTE_ASSIGN_STUDENT_UPDATE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},
	busRouteAssignStudentTableList: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_ASSIGN_BUS_ROUTE_TABLE_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},


	busRouteAssignStudentTempList: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_ASSIGN_STUDENT_TEMP_LIST_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	busRouteAssignedStudentTempList: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_ASSIGNED_STUDENT_TEMP_LIST_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	busRouteAssignStudentTempAllocate: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_ASSIGN_STUDENT_TEMP_ALLOCATE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},
	busRouteAssignStudentTempDeallocate: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_ASSIGN_STUDENT_TEMP_DEALLOCATE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},
	
	BusRouteAssignStudentTempDeleteAll: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_ASSIGN_STUDENT_TEMP_DELETE_ALL"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	StudentAttendancePickupStore: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_STUDENT_ATTENDANCE_PICKUP_FROM_STOP_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	StudentAttendanceDropAtSchool: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_STUDENT_ATTENDANCE_DROPPED_AT_SCHOOL_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	StudentAttendancePickupFromSchool: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_STUDENT_ATTENDANCE_PICKUP_FROM_SCHOOL_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	StudentAttendanceDropAtStop: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_STUDENT_ATTENDANCE_DROPPED_AT_STOP_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	StudentAttendanceGetRouteStop: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_STUDENT_ATTENDANCE_GET_ROUTE_STOP_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	StudentAttendanceGetRouteDETAILS: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_STUDENT_ATTENDANCE_GET_ROUTE_DETAILS_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	StudentAttendanceGetDetail: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_STUDENT_ATTENDANCE_GET_DETAIL_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	
	BusSyncAttendance: function (cb, args) {
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
			CONFIG["API_URN_BUSTRACKING_BUS_SYNC_ATTENDANCE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},
};
