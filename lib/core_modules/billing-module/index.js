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
	return Billing;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const Billing = {
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

	/***************************** ADMIN SIDE BILLING MODULE VIEW API'S *****************************/

	getBillingAdminViewDashboardTotalBill: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_VIEW_DASHBOARD_TOTAL_BILL"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getBillingAdminViewDashboardRecentBill: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_VIEW_DASHBOARD_RECENT_BILL"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getBillingAdminViewDashboardMonthlyReport: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_VIEW_DASHBOARD_MONTHLY_REPORT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getBillingAdminViewDashboardCategoryReport: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_VIEW_DASHBOARD_CATEGORY_REPORT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	/***************************** ADMIN SIDE BILLING MODULE CATEGORY API'S *****************************/

	getBillingAdminCategoryAdd: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_CATEGORY_ADD"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminCategoryEdit: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_CATEGORY_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminCategoryUpdate: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_CATEGORY_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminCategoryDelete: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_CATEGORY_DELETE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminCategoryDeleteRow: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_CATEGORY_DELETE_ROW"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminCategoryList: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_CATEGORY_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminCategoryDropdown: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_CATEGORY_DROPDOWN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminCategorySubCategoryDropdown: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_CATEGORY_SUB_CATAGORY_DROPDOWN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminCategoryChangeStatus: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_CATEGORY_CHANGE_STATUS"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	/***************************** ADMIN SIDE BILLING MODULE REPORT API'S *****************************/

	getBillingAdminReportCategoryWise: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_REPORT_CATEGORY_WISE"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getBillingAdminReportCategoryWiseView: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_REPORT_CATEGORY_WISE_VIEW"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminReportCollected: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_REPORT_COLLECTED"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminReportCollectedExport: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_REPORT_COLLECTED_EXPORT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminReportPending: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_REPORT_PENDING"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminReportPendingExport: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_REPORT_PENDING_EXPORT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	/***************************** ADMIN SIDE BILLING MODULE SETTINGS API'S *****************************/

	getBillingAdminSettingsAddUpdate: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_SETTINGS_ADD_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminSettingsEdit: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_SETTINGS_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminSettingsDelete: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_SETTINGS_DELETE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminCollectBill: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_COLLECT_BILL"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

		/***************************** ADMIN SIDE BILLING MODULE CREATE BILL API'S *****************************/
		getBillingAdminSearchStudent: function (cb, args) {
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
				CONFIG["API_URN_BILLING_ADMIN_SEARCH_STUDENT"], // api urn
				"get", // method
				params, // request-params
				args["auth"] // auth
			);
		},
		getBillingAdminCreateBill: function (cb, args) {
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
				CONFIG["API_URN_BILLING_ADMIN_CREATE_BILL"], // api urn
				"post", // method
				params, // request-params
				args["auth"] // auth
			);
		},
		getBillingAdminGetInvoiceNumber: function (cb, args) {
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
				CONFIG["API_URN_BILLING_ADMIN_GET_INVOICE_NUMBER"], // api urn
				"get", // method
				params, // request-params
				args["auth"] // auth
			);
		},
		getBillingAdminShowBill: function (cb, args) {
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
				CONFIG["API_URN_BILLING_ADMIN_SHOW_BILL"], // api urn
				"get", // method
				params, // request-params
				args["auth"] // auth
			);
		},
		getBillingAdminShowBillDetail: function (cb, args) {
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
				CONFIG["API_URN_BILLING_ADMIN_SHOW_BILL_DETAIL"], // api urn
				"get", // method
				params, // request-params
				args["auth"] // auth
			);
		},
		getBillingAdminBillingTableData: function (cb, args) {
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
				CONFIG["API_URN_BILLING_ADMIN_BILLING_TABLE_DATA"], // api urn
				"get", // method
				params, // request-params
				args["auth"] // auth
			);
		},
		getBillingAdminBillingTableDataExport: function (cb, args) {
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
				CONFIG["API_URN_BILLING_ADMIN_BILLING_TABLE_DATA_EXPORT"], // api urn
				"get", // method
				params, // request-params
				args["auth"] // auth
			);
		},


		getBillingAdminCategoryAdd: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_CATEGORY_ADD"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminCategoryEdit: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_CATEGORY_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminCategoryUpdate: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_CATEGORY_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminCategoryDelete: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_CATEGORY_DELETE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminCategoryDeleteRow: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_CATEGORY_DELETE_ROW"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminCategoryList: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_CATEGORY_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminCategoryDropdown: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_CATEGORY_DROPDOWN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminCategorySubCategoryDropdown: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_CATEGORY_SUB_CATAGORY_DROPDOWN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingAdminCategoryChangeStatus: function (cb, args) {
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
			CONFIG["API_URN_BILLING_ADMIN_CATEGORY_CHANGE_STATUS"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	/*************************************************FRANCHISE SIDE *******************************************/ 

	getBillingFranchiseCategoryAdd: function (cb, args) {
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
			CONFIG["API_URN_BILLING_FRANCHISE_CATEGORY_ADD"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingFranchiseCategoryEdit: function (cb, args) {
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
			CONFIG["API_URN_BILLING_FRANCHISE_CATEGORY_EDIT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingFranchiseCategoryUpdate: function (cb, args) {
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
			CONFIG["API_URN_BILLING_FRANCHISE_CATEGORY_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingFranchiseCategoryDelete: function (cb, args) {
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
			CONFIG["API_URN_BILLING_FRANCHISE_CATEGORY_DELETE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingFranchiseCategoryDeleteRow: function (cb, args) {
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
			CONFIG["API_URN_BILLING_FRANCHISE_CATEGORY_DELETE_ROW"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingFranchiseCategoryList: function (cb, args) {
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
			CONFIG["API_URN_BILLING_FRANCHISE_CATEGORY_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingFranchiseCategoryDropdown: function (cb, args) {
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
			CONFIG["API_URN_BILLING_FRANCHISE_CATEGORY_DROPDOWN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingFranchiseCategorySubCategoryDropdown: function (cb, args) {
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
			CONFIG["API_URN_BILLING_FRANCHISE_CATEGORY_SUB_CATAGORY_DROPDOWN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getBillingFranchiseCategoryChangeStatus: function (cb, args) {
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
			CONFIG["API_URN_BILLING_FRANCHISE_CATEGORY_CHANGE_STATUS"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getParentsSideBillingTableData: function (cb, args) {
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
			CONFIG["API_URN_BILLING_PARENTS_SIDE_BILLING_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	/************************************************* PARENTS SIDE *******************************************/ 
	getParentsSideBillingShow: function (cb, args) {
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
			CONFIG["API_URN_BILLING_PARENTS_SIDE_BILLING_SHOW"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getFranchiseBillingExport: function (cb, args) {
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
			CONFIG["API_URN_BILLING_FRANCHISE_BILLING_EXPORT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
};
