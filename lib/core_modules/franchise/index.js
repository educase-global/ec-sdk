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
			"post", // method
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
			"post", // method
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
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	franchiseSchoolChangeStatus: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_SCHOOL_CHANGE_STATUS"], // api urn
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseDeleteGeneralSettingsLogo: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DELETE_GENERAL_SETTINGS_LOGO"], // api urn
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCurricullumPdfStatusUpdate: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_PDF_CURRICULLUM_UPDATE_STATUS"], // api urn
			"post", // method
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
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCurricullumProviderTableData: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_CURRICULUM_PROVIDER_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCurricullumProviderContent: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_CURRICULUM_PROVIDER_CONTENT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCurricullumProviderCheckDemoDate: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_CURRICULUM_PROVIDER_CHECK_DEMO_DATE"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCurricullumProviderDemoRequest: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_CURRICULUM_PROVIDER_DEMO_REQUEST"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCurricullumIntegrateTableData: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_CURRICULUM_INTEGRATE_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCurricullumIntegrateTableData: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_CURRICULUM_INTEGRATE_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCurricullumIntegrateRequest: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_CURRICULUM_INTEGRATE_REQUEST"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCurricullumIntegrateAssignTableData: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_CURRICULUM_ASSIGN_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCurricullumIntegrateAssignStore: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_CURRICULUM_ASSIGN_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCurricullumIntegrateAssignSchoolDropdown: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CURRICULUM_ASSIGN_SCHOOL_DROPDOWN"], // api urn
			"get", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseOverviewStudentShowMultipleIdCard: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_OVERVIEW_SHOW_STUDENT_MULTIPLE"], // api urn
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryConvertEnquiry: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_CONVERT"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryFollowUpUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_FOLLOWUP_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryDropEnquiry: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_DROP"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseGuestEnquiryStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GUEST_ENQUIRY_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseGuestEnquiryInvestmentDropdown: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GUEST_ENQUIRY_INVESTMENT_DROPDOWN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryDropReasonStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_DROP_REASON_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryDropReasonEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_DROP_REASON_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryDropReasonUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_DROP_REASON_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryDropReasonDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_DROP_REASON_DESTORY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryDropReasonDetailShow: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_DROP_REASON_SHOW"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryDropReasonDetailTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_DROP_REASON_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryDropReasonDetailDropdown: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_DROP_REASON_DROPDOWN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryLeadStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_LEAD_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryLeadEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_LEAD_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryLeadEditAll: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_LEAD_ALL_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryLeadUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_LEAD_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryLeadDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_LEAD_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryLeadTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_LEAD_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	franchiseEnquiryLeadDropdown: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_ENQUIRY_LEAD_DROPDOWN"], // api urn
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseExportStudent: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_EXPORT_STUDENT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseExcelExportStudent: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_EXCEL_EXPORT_STUDENT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseExcelImportStudent: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_EXCEL_IMPORT_STUDENT"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseExcelImportStaff: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_EXCEL_IMPORT_STAFF"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseExcelExportStaff: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_EXCEL_EXPORT_STAFF"], // api urn
			"get", // method
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
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseExportStaff: function (cb, args) {

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
			CONFIG["API_URN_FRANCHISE_EXPORT_STAFF"], // api urn
			"get", // method
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
			"get", // method
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
			"get", // method
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
			"get", // method
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
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseExportPendingFeeReportData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_EXPORT_PENDING_FEE_REPORT_DATA"], // api urn
			"get", // method
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
			"get", // method
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
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseStudentFeeExportData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_STUDENT_FEE_DATA_EXPORT"], // api urn
			"get", // method
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
			"get", // method
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
			"get", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseSchoolTimeZoneDropdown: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_SCHOOL_TIMEZONE"], // api urn
			"get", // method
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
			"post", // method
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
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseSchoolSettingRestrictStatusChange: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_SCHOOL_CHANGE_RESTRICT_SETTING_STATUS"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseSchoolAccountSettingRestrictStatusChange: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_SCHOOL_CHANGE_RESTRICT_ACCOUNT_STATUS"], // api urn
			"post", // method
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
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseLoginPosterCoverDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_POSTER_COVER_DESTROY"], // api urn
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseCommunicationChangeStatus: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_CHANGE_STATUS"], // api urn
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"post", // method
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
			"post", // method
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
			"get", // method
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
			"get", // method
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
			"get", // method
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
			"get", // method
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
			"get", // method
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
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationTemplateStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_TEMPLATE_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationTemplateEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_TEMPLATE_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationTemplateUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_TEMPLATE_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationTemplateDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_TEMPLATE_DELETE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationTemplateGetTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_TEMPLATE_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseCommunicationTemplateDropdown: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_COMMUNICATION_TEMPLATE_DROPDOWN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseProductOrderTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_PRODUCT_ORDER_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseProductOrderShowData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_PRODUCT_ORDER_SHOW"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseProductOrderLotDelivered: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_PRODUCT_ORDER_LOT_DELIVERED"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseProductOrderLotDispatch: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_PRODUCT_ORDER_LOT_DISPATCH"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseProductOrderDestoryDispatch: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_PRODUCT_ORDER_DESTORY_DISPATCH"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseProductOrderDeliveryStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_PRODUCT_ORDER_DELIVERY_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseProductOrderLotStatusUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_PRODUCT_ORDER_LOT_STATUS_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseProductDeliveryShow: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_PRODUCT_DELIVERY_SHOW"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseProductAcceptOrderShow: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_PRODUCT_ACCEPT_ORDER_SHOW"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductStoreAdd: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_STORE_ADD"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductStoreEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_STORE_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductStoreUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_STORE_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductStoreDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_DELETE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductImageDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_IMAGE_DELETE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductVariantDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_VARIANT_DELETE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductUpdateInventory: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_UPDATE_INVENTORY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductDetail: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_SHOW"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductDropdownList: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_DROPDOWN_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductKitStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_KIT_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductKitStoreEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_KIT_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductKitStoreUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_KIT_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductKitStoreDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_KIT_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},


	FranchiseInventoryProductKitStoreImageDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_KIT_IMAGE_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductKitStoreItemDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_KIT_ITEM_DESTORY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductKitStoreDetail: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_KIT_SHOW"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductKitStoreTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_KIT_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseInventoryProductKitDropdown: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_INVENTORY_PRODUCT_KIT_DROPDOWN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseKitOrderRequestCancelOrder: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_KIT_ORDER_CANCEL_ORDER"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseKitOrderProductInvoiceTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_KIT_PRODUCT_INVOICE_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseKitOrderProductInvoiceDetailShow: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_KIT_PRODUCT_INVOICE_DETAIL_SHOW"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseKitOrderProductInvoiceDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_KIT_PRODUCT_INVOICE_DELETE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseKitOrderProductInvoiceStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_KIT_PRODUCT_INVOICE_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseKitOrderProductGetDetail: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_KIT_PRODUCT_GET_DETAIL"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseKitOrderProductKitDestory: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_KIT_PRODUCT_DESTORY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseKitOrderProductKitSkuGenerate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_KIT_PRODUCT_GENERATE_SKU"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseGstSettingsUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GST_SETTING_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseGstSettingsShow: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GST_SETTING_SHOW"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseGstSettingsDeleteLogo: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GST_SETTINGS_DELETE_LOGO"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseClassManagementClassStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseClassManagementClassShowDetail: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_SHOW"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseClassManagementClassEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseClassManagementClassUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseClassManagementClassDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_DELETE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseClassManagementClassTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseClassManagementClassChangeStatus: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_CHANGE_STATUS"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseClassManagementClassCategoryStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_CATEGORY_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseClassManagementClassCategoryEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_CATEGORY_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseClassManagementClassCategoryUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_CATEGORY_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseClassManagementClassCategoryDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_CATEGORY_DESTORY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseClassManagementClassCategoryTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_CATEGORY_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseClassManagementClassCategoryChangeStatus: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_CATEGORY_CHANGE_STATUS"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseClassManagementClassCategoryDropdown: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_CATEGORY_DROP_DOWN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseClassManagementSchoolClassCategoryUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CLASS_MANAGEMENT_SCHOOL_CLASS_CATEGORY_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseGlobalRightsStaffRightView: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GLOBAL_RIGHTS_STAFF_RIGHT_VIEW"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseGlobalRightsStaffRightUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GLOBAL_RIGHTS_STAFF_RIGHT_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseGlobalRightsStudentRightView: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GLOBAL_RIGHTS_STUDENT_RIGHT_VIEW"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseGlobalRightsStudentRightUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_GLOBAL_RIGHTS_STUDENT_RIGHT_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseGlobalDesignationStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DESIGNATION_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseGlobalDesignationEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DESIGNATION_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseGlobalDesignationUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DESIGNATION_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseGlobalDesignationDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DESIGNATION_DESTROY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseGlobalDesignationTableList: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DESIGNATION_TABLE_LIST_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseNotificationSettingsGet: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_NOTIFICATION_SETTINGS_GET"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseNotificationSettingsPost: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_NOTIFICATION_SETTINGS_POST"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	FranchiseGlobalDesignationDropdown: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_DESIGNATION_DROPDOWN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	// Fee Management Fee Type Section
	FranchiseFeeManagementFeeTypeStore: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_ADD_FEE_TYPE_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseFeeManagementViewFeeType: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_VIEW_FEE_TYPE"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseFeeManagementEditFeeType: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_EDIT_FEE_TYPE"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseFeeManagementUpdateFeeType: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_UPDATE_FEE_TYPE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseFeeManagementDeleteFeeType: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_DELETE_FEE_TYPE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseFeeManagementChangesFeeType: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_CHANGES_FEE_TYPE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseFeeManagementFeeTypeTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_FEE_TYPE_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseFeeManagementFeeTypeDropdown: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_DROPDOWN_FEE_TYPE"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	// Fee Management ClassConfiguration
	FranchiseFeeManagementClassConfigurationAdd: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_CLASS_CONFIGURATION_ADD"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseFeeManagementClassConfigurationView: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_CLASS_CONFIGURATION_VIEW"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseFeeManagementClassConfigurationEdit: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_CLASS_CONFIGURATION_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseFeeManagementClassConfigurationUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_CLASS_CONFIGURATION_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseFeeManagementClassConfigurationDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_CLASS_CONFIGURATION_DELETE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseFeeManagementClassConfigurationTableData: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_CLASS_CONFIGURATION_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseFeeManagementClassConfigurationDefault: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_CLASS_CONFIGURATION_DEFAULT_SET"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseFeeManagementClassConfigurationDropDownMenu: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_CLASS_CONFIGURATION_DROPDOWN_MENU"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	// Franchise Side Fee Configuration
	FranchiseFeeManagementFeeConfigurationAdd: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_FEE_CONFIGURATION_ADD"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseFeeManagementFeeConfigurationView: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_FEE_CONFIGURATION_VIEW"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseFeeManagementFeeConfigurationUpdate: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_FEE_CONFIGURATION_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseFeeManagementFeeConfigurationDelete: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_FEE_CONFIGURATION_DELETE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseFeeManagementFeeConfigurationList: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_FEE_CONFIGURATION_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	FranchiseFeeManagementFeeConfigurationCopy: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_FEE_MANAGEMENT_FEE_CONFIGURATION_COPY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
};
