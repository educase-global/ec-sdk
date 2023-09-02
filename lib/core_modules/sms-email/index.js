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
	return SmsEmail;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const SmsEmail = {
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
	registrationStudentTableDataAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_REGISTRATION_STUDENT_TABLE_DATA_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	sendSmsRegisterStudentAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_SEND_SMS_REGISTER_STUDENT_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	registerStudentTableDataAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_REGISTER_STUDENT_TABLE_DATA_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	sendSmsEmailAnyAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_SEND_SMS_EMAIL_ANY_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	sendSmsEmailStudentAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_SEND_SMS_EMAIL_STUDENT_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	sendSmsEmailStaffAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_SEND_SMS_EMAIL_STAFF_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	emailSettingStoreUpdateAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_EMAIL_SETTING_STORE_UPDATE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	emailSettingShowAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_EMAIL_SETTING_SHOW_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	smsLogTableDataAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_SMS_LOG_TABLE_DATA_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	emailLogTableDataAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_EMAIL_LOG_TABLE_DATA_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	smsSettingStoreUpdateAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_SMS_SETTING_STORE_UPDATE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	smsSettingShowAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_EMAIL_SETTING_SHOW_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	smsModuleListAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_SMS_MODULE_LIST_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	smsModuleStoreUpdateAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_SMS_MODULE_STORE_UPDATE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	emailModuleStoreUpdateAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];
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
			CONFIG["API_URN_EMAIL_MODULE_STORE_UPDATE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	registrationStudentUpdateAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_REGISTRATION_STUDENT_UPDATE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getSmsPackageAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_GET_SMS_PACKAGE_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	smsPaymentFailAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_SMS_PAYMENT_FAIL_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	smsPaymentSuccessAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_SMS_PAYMENT_SUCCESS_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	sendSmsEmailEnquiryAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_SEND_SMS_EMAIL_ENQUIRY_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	smsTemplateDropdownAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_SMS_TEMPLATE_DROPDOWN_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	smsTemplateDataAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_SMS_TEMPLATE_DATA_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	buySmsPackageAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_BUY_SMS_PACKAGE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	sendEmailStudent: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_SEND_EMAIL_STUDENT"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	sendEmailStudentDraft: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_SEND_EMAIL_STUDENT_DRAFT"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getEmailLogTableData: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_GET_EMAIL_LOG_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getStudentEmailDetail: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_GET_EMAIL_DETAIL_STUDENT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getAllocateSmsListFranchise: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_GET_MANAGE_SCHOOL_SMS_STORE_LIST_FRANCHISE"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	allocateSmsSchoolFranchise: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_MANAGE_SCHOOL_SMS_STORE_FRANCHISE"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	whatsAppCreateTemplate: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_CREATE_WHATSAPP_TEMPLATE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	whatsAppDeleteTemplate: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_DELETE_WHATSAPP_TEMPLATE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	whatsAppTemplateList: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_GET_WHATSAPP_TEMPLATE_LIST_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	whatsAppSettingStore: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN__WHATSAPP_SETTING_STORE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	whatsAppSettingShow: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN__WHATSAPP_SETTING_SHOW_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	whatsAppBroadcastTableList: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN__WHATSAPP_BROADCAST_TABLE_LIST_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	whatsAppBroadcastCvsGenerate: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN__WHATSAPP_BROADCAST_CVS_GENERATE_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	whatsAppBroadcastCvsImport: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN__WHATSAPP_BROADCAST_CVS_IMPORT_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	whatsAppTemplateSync: function (cb, args) {
		// Construct params
		let params = args["params"];

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
			CONFIG["API_URN_GET_WHATSAPP_TEMPLATE_SYNC_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	}

};
