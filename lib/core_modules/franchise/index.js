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
			CONFIG["API_URN_FRANCHISE_SCHOOL_STORE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	franchiseSchoolUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_SCHOOL_UPDATE_DATA"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseSchoolTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_SCHOOL_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	franchiseSchoolEditData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_SCHOOL_EDIT_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},


	//MarketPlace
	FranchiseGetCategory: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_CATEGORY_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseEditCategory: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_EDIT_CATEGORY_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAddCategory: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ADD_CATEGORY_DATA"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateCategory: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_CATEGORY_DATA"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteCategory: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DELETE_CATEGORY_DATA"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseGetVariant: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_VARIANT_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseEditVariant: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_EDIT_VARIANT_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAddVariant: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ADD_VARIANT_DATA"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateVariant: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_VARIANT_DATA"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteVariant: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DELETE_VARIANT_DATA"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseGetOptions: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_OPTIONS_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseEditOptions: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_EDIT_OPTIONS"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAddOptions: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ADD_OPTIONS"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateOptions: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_OPTIONS"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteOptions: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DELETE_OPTIONS"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseGetProductList: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_PRODUCT_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseGetProductDetails: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_PRODUCT_DETAILS"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseEditProduct: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_EDIT_PRODUCT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAddProduct: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ADD_PRODUCT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateProduct: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_PRODUCT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteProduct: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DELETE_PRODUCT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseGetOrderList: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_ORDER_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseGetOrderDetail: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_ORDER_DETAILS"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateOrderDetail: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_ORDER_DETAIL"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	//MarketPlaceEnd

	//Settings Start
	FranchiseGetGeneralSettings: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_GENERAL_SETTINGS"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateGeneralSettings: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_GENERAL_SETTINGS"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	//Enquiry Starts
	FranchiseGetEnquirySourcesTable: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_ENQUIRY_SOURCES_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAddEnquirySources: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ADD_ENQUIRY_SOURCES"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateEnquirySources: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_ENQUIRY_SOURCES"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteEnquirySources: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DELETE_ENQUIRY_SOURCES"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseChangeEnquirySourcesStatus: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CHANGE_STATUS_ENQUIRY_SOURCES"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseGetEnquiryClassTable: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_ENQUIRY_CLASS_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteEnquiryClass: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DELETE_ENQUIRY_CLASS"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAddEnquiryClass: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ADD_ENQUIRY_CLASS"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateEnquiryClass: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_ENQUIRY_CLASS"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseGetStudentEnquiryTable: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_STUDENT_ENQUIRY_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseEditStudentEnquiry: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_EDIT_STUDENT_ENQUIRY"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateStudentEnquiry: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_STUDENT_ENQUIRY"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAddStudentEnquiry: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ADD_STUDENT_ENQUIRY"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteStudentEnquiry: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DELETE_STUDENT_ENQUIRY"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseAddFeetype: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ADD_FEETYPE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseEditFeetype: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_EDIT_FEETYPE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteFeetype: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DELETE_FEETYPE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateFeetype: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_FEETYPE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseListFeetype: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_FEETYPE_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseAddRoyaltySetup: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_ADD_ROYALTY_SETUP"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseEditRoyaltySetup: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_EDIT_ROYALTY_SETUP"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseViewRoyaltySetup: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_ROYALTY_SETUP_DETAIL"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteRoyaltySetup: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_DELETE_ROYALTY_SETUP"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateRoyaltySetup: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_UPDATE_ROYALTY_SETUP"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseListRoyaltySetup: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_ROYALTY_SETUP_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},


	FranchiseAddRoyaltyCollection: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_ADD_ROYALTY_COLLECTION"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseEditRoyaltyCollection: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_EDIT_ROYALTY_COLLECTION"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseViewRoyaltyCollection: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_ROYALTY_COLLECTION_DETAIL"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteRoyaltyCollection: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_DELETE_ROYALTY_COLLECTION"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseUpdateRoyaltyCollection: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_UPDATE_ROYALTY_COLLECTION"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseListRoyaltyCollection: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_ROYALTY_COLLECTION_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseListSchoolRoyalty: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_SCHOOL_ROYALTY_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCurricullumCategoryList: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_CURRICULLUM_CATEGORY_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumCategoryAdd: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_ADD_CURRICULLUM_CATEGORY"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumCategoryEdit: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_EDIT_CURRICULLUM_CATEGORY"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumCategoryUpdate: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_UPDATE_CURRICULLUM_CATEGORY"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumCategoryDelete: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_DELETE_CURRICULLUM_CATEGORY"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumTopicList: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_CURRICULLUM_TOPIC_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumTopicAdd: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_ADD_CURRICULLUM_TOPIC"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumTopicEdit: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_EDIT_CURRICULLUM_TOPIC"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumTopicUpdate: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_UPDATE_CURRICULLUM_TOPIC"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumTopicDelete: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_DELETE_CURRICULLUM_TOPIC"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCurricullumAccessList: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_ACCESS_CURRICULLUM_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCurricullumAccessUpdateEndDate: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_CURRICULUM_ACCESS_UPDATE_END_DATE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCurricullumList: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_CURRICULLUM_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumShow: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_SHOW_CURRICULLUM"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumAdd: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_ADD_CURRICULLUM"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumEdit: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_EDIT_CURRICULLUM"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumUpdate: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_UPDATE_CURRICULLUM"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumDelete: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_DELETE_CURRICULLUM"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseStaffList: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_STAFF_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseStaffShow: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_SHOW_STAFF"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseStaffAdd: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_ADD_STAFF"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseStaffEdit: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_GET_EDIT_STAFF"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseStaffUpdate: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_UPDATE_STAFF"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseStaffDelete: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_DELETE_STAFF"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseOverviewStaffList: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_GET_STAFF_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStaffShow: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_SHOW_STAFF"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStaffAdd: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_ADD_STAFF"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStaffEdit: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_GET_EDIT_STAFF"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStaffUpdate: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_UPDATE_STAFF"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStaffDelete: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_DELETE_STAFF"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseOverviewStudentList: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_GET_STUDENT_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStudentShow: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_SHOW_STUDENT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStudentAdd: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_ADD_STUDENT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStudentEdit: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_GET_EDIT_STUDENT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStudentUpdate: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_UPDATE_STUDENT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStudentDelete: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_DELETE_STUDENT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_STORE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_EDIT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_UPDATE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_DELETE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryShow: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_SHOW"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryList: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryInvestmentTypeStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_INVESTMENT_TYPE_STORE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryInvestmentTypeEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_INVESTMENT_TYPE_EDIT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryInvestmentTypeUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_INVESTMENT_TYPE_UPDATE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryInvestmentTypeDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_INVESTMENT_TYPE_DELETE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryInvestmentTypeList: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_INVESTMENT_TYPE_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryInvestmentTypeDropdown: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_INVESTMENT_TYPE_DROPDOWN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	}
};
