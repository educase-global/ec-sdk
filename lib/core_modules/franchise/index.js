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
	FranchiseStaffDropdown: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_STAFF_DROPDOWN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseOverviewStaffList: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_GET_STAFF_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStaffShow: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_SHOW_STAFF"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStaffAdd: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_ADD_STAFF"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStaffEdit: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_GET_EDIT_STAFF"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStaffUpdate: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_UPDATE_STAFF"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStaffDelete: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_DELETE_STAFF"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseOverviewStudentList: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_GET_STUDENT_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStudentShow: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_SHOW_STUDENT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStudentAdd: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_ADD_STUDENT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStudentEdit: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_GET_EDIT_STUDENT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStudentUpdate: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_UPDATE_STUDENT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStudentDelete: function (cb, args) {

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
	},


	FranchiseOverviewExStudentList: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_GET_EX_STUDENT_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewExStudentAdd: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_ADD_EX_STUDENT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseOverviewStudentHistoryList: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_GET_STUDENT_HISTORY_TABLE"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewRestoreStudent: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_RESTORE_STUDENT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseOverviewStatusChangeStudent: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_CHANGE_STATUS_STUDENT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStatusChangeStaff: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_CHANGE_STATUS_STAFF"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseStudentCollectionFeeReport: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_STUDENT_COLLECTION_FEE_REPORT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseStudentPendingFeeReport: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_STUDENT_PENDING_FEE_REPORT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCollectFeeReportData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COLLECT_FEE_REPORT_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseExportCollectFeeReportData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_EXPORT_COLLECT_FEE_REPORT_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseDeleteFeeReportData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DELETE_FEE_REPORT_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseStudentFeeTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_STUDENT_FEE_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseStudentFeePrintList: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_STUDENT_FEE_PRINT_LIST"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseStudentPrintClassFeeConfig: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_STUDENT_PRINT_CLASS_FEE_CONFIG"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseStudentFeeDiscountTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_STUDENT_FEE_DISCOUNT_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseStudentFeeStates: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_STUDENT_FEE_STATES"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseImageDestroyProduct: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_IMAGE_DESTROY_PRODUCT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseVariantDestroyProduct: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_VARIANT_DESTROY_PRODUCT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseOrderRequestCancel: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ORDER_REQUEST_CANCEL"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseOrderLotDelivered: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ORDER_LOT_DELIVERED"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseOrderLotDispatch: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ORDER_LOT_DISPATCH"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseOrderRequestDestroy: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ORDER_REQUEST_DESTROY"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseHolidayCalendarStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_HOLIDAY_CALENDAR_STORE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseHolidayCalendarEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_HOLIDAY_CALENDAR_EDIT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseHolidayCalendarUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_HOLIDAY_CALENDAR_UPDATE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseHolidayCalendarDestroy: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_HOLIDAY_CALENDAR_DESTROY"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseHolidayCalendarTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_HOLIDAY_CALENDAR_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseHolidayCalendarData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_HOLIDAY_CALENDAR_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseStudentEnquiryTypeStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_STUDENT_ENQUIRY_TYPE_STORE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseStudentEnquiryTypeShow: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_STUDENT_ENQUIRY_TYPE_SHOW"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseStudentEnquiryTypeEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_STUDENT_ENQUIRY_TYPE_EDIT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseStudentEnquiryTypeUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_STUDENT_ENQUIRY_TYPE_UPDATE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseStudentEnquiryTypeDestroy: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_STUDENT_ENQUIRY_TYPE_DESTROY"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseStudentEnquiryTypeChangeStatus: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_STUDENT_ENQUIRY_TYPE_CHANGE_STATUS"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseStudentEnquiryTypeTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_STUDENT_ENQUIRY_TYPE_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseStudentEnquiryTypeDropdown: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_STUDENT_ENQUIRY_TYPE_DROPDOWN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseHolidayCalendarImport: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_HOLIDAY_CALENDAR_IMPORT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseSchoolTierStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_SCHOOL_TIER_STORE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseSchoolTierShow: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_SCHOOL_TIER_SHOW"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseSchoolTierDestroy: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_SCHOOL_TIER_DESTROY"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseSchoolTierEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_SCHOOL_TIER_EDIT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseSchoolTierDropdown: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_SCHOOL_TIER_DROPDOWN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseSchoolTierUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_SCHOOL_TIER_UPDATE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseSchoolTierTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_SCHOOL_TIER_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseProductUpdateInventory: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_PRODUCT_UPDATE_INVENTORY"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationCategoryStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_CATEGORY_STORE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationCategoryEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_CATEGORY_EDIT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationCategoryUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_CATEGORY_UPDATE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationCategoryDestroy: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_CATEGORY_DESTROY"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationCategoryTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_CATEGORY_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationCategoryDropdown: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_CATEGORY_DROPDOWN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_STORE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_EDIT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationShow: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_SHOW"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationDestroy: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_DESTROY"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCommunicationDestroyAttachment: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_DESTROY_ATTACHMENT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationDestroySingleBranch: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_DESTROY_SINGLE_BRANCH"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_UPDATE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationSubCategoryStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_SUB_CATEGORY_STORE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationSubCategoryEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_SUB_CATEGORY_EDIT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationSubCategoryUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_SUB_CATEGORY_UPDATE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationSubCategoryDestroy: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_SUB_CATEGORY_DESTROY"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationSubCategoryTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_SUB_CATEGORY_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationSubCategoryDropdown: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_SUB_CATEGORY_DROPDOWN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseStaffModuleRight: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_STAFF_MODULE_RIGHT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseStaffUpdateModuleRight: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_STAFF_UPDATE_MODULE_RIGHT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCommunicationCategorySubcategory: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_CATEGORY_SUBCATEGORY"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationSettingStoreGet: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_SETTING_STORE_GET"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseDesignationList: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_STAFF_DESIGNATION_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseDesignationAdd: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ADD_STAFF_DESIGNATION"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseDesignationEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_EDIT_STAFF_DESIGNATION"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseDesignationUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_STAFF_DESIGNATION"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseDesignationDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DELETE_STAFF_DESIGNATION"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseDesignationDropown: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_STAFF_DESIGNATION_DROPDOWN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAcademicYearList: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_ACADEMIC_YEAR_LIST"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAcademicYearEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_EDIT_ACADEMIC_YEAR"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAcademicYearUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_ACADEMIC_YEAR"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAcademicYearDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DELETE_ACADEMIC_YEAR"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAcademicYearAdd: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ADD_ACADEMIC_YEAR"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAcademicYearDropDownList: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ACADEMIC_YEAR_DROPDOWN_LIST"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCurrentUserYear: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_CURRENT_USER_YEAR"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseUpdateCurrentUserYear: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_UPDATE_CURRENT_USER_YEAR"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseAcademicYear: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GET_ACADEMIC_YEAR"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseChangeAcademicYear: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CHANGE_ACADEMIC_YEAR"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	//Inventory
	FranchiseInventoryVendorAdd: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_VENDOR_ADD"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryVendorUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_VENDOR_UPDATE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryVendorDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_VENDOR_DELETE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryGetVendor: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_GET_VENDOR"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryEditVendor: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_EDIT_VENDOR"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryGetVendorDropdownList: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_VENDOR_DROPDOWN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryGetVendorList: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_GET_VENDOR_LIST"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductAdd: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_ADD_PRODUCT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_EDIT_PRODUCT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_UPDATE_PRODUCT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryGetProductList: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_LIST"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryStoreAdd: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_STORE_ADD"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryStoreEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_STORE_EDIT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryGetStoreList: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_GET_STORE_LIST"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryDeleteStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_DELETE_STORE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryUpdateStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_UPDATE_STORE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryStoreManageAddProduct: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_STORE_MANAGE_ADD_PRODUCT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryStoreManageEditProduct: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_STORE_MANAGE_EDIT_PRODUCT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryStoreManageDeleteProduct: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_STORE_MANAGE_DELETE_PRODUCT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryStoreManageUpdateProduct: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_STORE_MANAGE_UPDATE_PRODUCT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryStoreManageGetProductList: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_STORE_MANAGE_LIST_PRODUCT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryGetProductDropdown: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_DROPDOWN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryGetProductDropdown: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_DROPDOWN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryGetStoreDropdown: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_STORE_DROPDOWN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseMaskSettingsShow: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_MASK_SETTING_SHOW"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseMaskSettingStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_MASK_SETTING_STORE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
};
