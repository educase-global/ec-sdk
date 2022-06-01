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
	return Franchise;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const Franchise = {
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
	franchiseSchoolStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_SCHOOL_STORE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	franchiseSchoolUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_SCHOOL_UPDATE_DATA"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseSchoolTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_SCHOOL_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	franchiseSchoolEditData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_SCHOOL_EDIT_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},


	//MarketPlace
	FranchiseGetCategory: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_CATEGORY_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseEditCategory: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_EDIT_CATEGORY_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAddCategory: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ADD_CATEGORY_DATA"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateCategory: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_CATEGORY_DATA"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteCategory: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DELETE_CATEGORY_DATA"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseGetVariant: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_VARIANT_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseEditVariant: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_EDIT_VARIANT_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAddVariant: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ADD_VARIANT_DATA"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateVariant: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_VARIANT_DATA"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteVariant: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DELETE_VARIANT_DATA"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseGetOptions: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_OPTIONS_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseEditOptions: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_EDIT_OPTIONS"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAddOptions: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ADD_OPTIONS"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateOptions: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_OPTIONS"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteOptions: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DELETE_OPTIONS"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseGetProductList: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_PRODUCT_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseGetProductDetails: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_PRODUCT_DETAILS"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseEditProduct: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_EDIT_PRODUCT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAddProduct: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ADD_PRODUCT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateProduct: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_PRODUCT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteProduct: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DELETE_PRODUCT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseGetOrderList: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_ORDER_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseGetOrderDetail: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_ORDER_DETAILS"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateOrderDetail: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_ORDER_DETAIL"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	//MarketPlaceEnd

	//Settings Start
	FranchiseGetGeneralSettings: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_GENERAL_SETTINGS"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateGeneralSettings: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_GENERAL_SETTINGS"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	
	//Enquiry Starts
	FranchiseGetEnquirySourcesTable: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_ENQUIRY_SOURCES_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAddEnquirySources: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ADD_ENQUIRY_SOURCES"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateEnquirySources: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_ENQUIRY_SOURCES"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteEnquirySources: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DELETE_ENQUIRY_SOURCES"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseChangeEnquirySourcesStatus: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CHANGE_STATUS_ENQUIRY_SOURCES"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseGetEnquiryClassTable: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_ENQUIRY_CLASS_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteEnquiryClass: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DELETE_ENQUIRY_CLASS"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAddEnquiryClass: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ADD_ENQUIRY_CLASS"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateEnquiryClass: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_ENQUIRY_CLASS"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseGetStudentEnquiryTable: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_STUDENT_ENQUIRY_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseEditStudentEnquiry: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_EDIT_STUDENT_ENQUIRY"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateStudentEnquiry: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_STUDENT_ENQUIRY"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAddStudentEnquiry: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ADD_STUDENT_ENQUIRY"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteStudentEnquiry: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DELETE_STUDENT_ENQUIRY"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseAddFeetype: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ADD_FEETYPE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseEditFeetype: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_EDIT_FEETYPE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteFeetype: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DELETE_FEETYPE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateFeetype: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_FEETYPE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseListFeetype: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_FEETYPE_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseAddRoyaltySetup: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_ADD_ROYALTY_SETUP"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseEditRoyaltySetup: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_EDIT_ROYALTY_SETUP"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseViewRoyaltySetup: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_ROYALTY_SETUP_DETAIL"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteRoyaltySetup: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_DELETE_ROYALTY_SETUP"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateRoyaltySetup: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_UPDATE_ROYALTY_SETUP"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseListRoyaltySetup: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_ROYALTY_SETUP_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

		
	FranchiseAddRoyaltyCollection: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_ADD_ROYALTY_COLLECTION"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseEditRoyaltyCollection: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_EDIT_ROYALTY_COLLECTION"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseViewRoyaltyCollection: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_ROYALTY_COLLECTION_DETAIL"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteRoyaltyCollection: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_DELETE_ROYALTY_COLLECTION"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateRoyaltyCollection: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_UPDATE_ROYALTY_COLLECTION"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseListRoyaltyCollection: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_ROYALTY_COLLECTION_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseListSchoolRoyalty: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_SCHOOL_ROYALTY_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCurricullumCategoryList: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_CURRICULLUM_CATEGORY_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumCategoryAdd: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_ADD_CURRICULLUM_CATEGORY"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumCategoryEdit: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_EDIT_CURRICULLUM_CATEGORY"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumCategoryUpdate: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_UPDATE_CURRICULLUM_CATEGORY"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumCategoryDelete: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_DELETE_CURRICULLUM_CATEGORY"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumTopicList: function (cb, args) {
		
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
			CONFIG["API_URN_FRANCHISE_GET_CURRICULLUM_TOPIC_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumTopicAdd: function (cb, args) {
		
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
			CONFIG["API_URN_FRANCHISE_ADD_CURRICULLUM_TOPIC"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumTopicEdit: function (cb, args) {
		
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
			CONFIG["API_URN_FRANCHISE_GET_EDIT_CURRICULLUM_TOPIC"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumTopicUpdate: function (cb, args) {
		
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
			CONFIG["API_URN_FRANCHISE_UPDATE_CURRICULLUM_TOPIC"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumTopicDelete: function (cb, args) {
		
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
			CONFIG["API_URN_FRANCHISE_DELETE_CURRICULLUM_TOPIC"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

};
