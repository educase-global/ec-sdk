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
	return KitOrdering;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const KitOrdering = {
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
	kitOrderingProductList: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_KIT_ORDERING_PRODUCT_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	kitOrderingProductShow: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_KIT_ORDERING_PRODUCT_SHOW"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	kitOrderingCartStore: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_KIT_ORDERING_CART_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	kitOrderingCartShow: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_KIT_ORDERING_CART_SHOW"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	kitOrderingCartUpdate: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_KIT_ORDERING_CART_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	kitOrderingCartDestroy: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_KIT_ORDERING_CART_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	kitOrderingCartList: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_KIT_ORDERING_CART_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	kitCartOrderList: function (cb, args) {
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
			CONFIG["API_URN_KIT_ORDERING_ORDER_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	kitCartOrderStore: function (cb, args) {
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
			CONFIG["API_URN_KIT_ORDERING_ORDER_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	kitCartOrderStoreAdmin: function (cb, args) {
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
			CONFIG["API_URN_KIT_ORDERING_ORDER_STORE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	kitCartOrderShow: function (cb, args) {
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
			CONFIG["API_URN_KIT_ORDERING_ORDER_DETAIL"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	KitOrderProposalDetail: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_KIT_ORDER_PROPOSAL_DETAIL"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	kitOrderProposalAccept: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_KIT_ORDER_PROPOSAL_ACCEPT"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	kitOrderProposalReject: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_KIT_ORDER_PROPOSAL_REJECT"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	kitOrderProposalList: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_KIT_ORDER_PROPOSAL_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	kitOrderingOrderCancel: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_KIT_ORDERING_ORDER_CANCEL"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	kitOrderingOrderDestroy: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_KIT_ORDERING_ORDER_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	kitOrderingAssignStudentAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_KIT_ORDERING_ASSIGN_STUDENT_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	kitOrderingAssignStudentDestroyAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_KIT_ORDERING_CART_ASSIGN_STUDENT_DESTROY_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	kitOrderingAssignStudentListAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_KIT_ORDERING_CART_ASSIGN_STUDENT_LIST_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	kitOrderingProductDetailAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_KIT_PRODUCT_DETAIL_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	orderProductKitStoreAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_ORDER_PRODUCT_KIT_STORE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	orderProductKitShowAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_ORDER_PRODUCT_KIT_SHOW_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	orderProductKitTableDataAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_ORDER_PRODUCT_TABLE_DATA_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	cartAssignStudentStoreAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_CART_ASSIGN_STUDENT_STORE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	cartAssignStudentDeleteAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_CART_ASSIGN_STUDENT_DELETE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	cartAssignStudentListAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_CART_ASSIGN_STUDENT_LIST_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	cartDetailStoreAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_CART_DETAIL_STORE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	cartDetailShowAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_CART_DETAIL_SHOW_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	cartDetailUpdateAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_CART_DETAIL_UPDATE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	cartDetailDeleteAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_CART_DETAIL_DELETE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	cartDetailtableDataAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_CART_DETAIL_TABLE_DATA_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	productShowAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_PRODUCT_SHOW_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	productTableListDataAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_PRODUCT_TABLE_DATA_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	}
};