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
	return Authentication;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const Authentication = {
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
	userLogin: function (cb, args) {
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
			CONFIG["API_URN_LOGIN"], // api urn
			"post", // method
			params // request-params
			// auth
		);
	},

	userLogout: function (cb, args) {
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
			CONFIG["API_URN_LOGOUT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	guestLogin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['guest-login']);

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
			CONFIG["API_URN_GUEST_LOGIN"], // api urn
			"get", // method
			params // request-params
			// auth
		);
	},

	getUserdata: function (cb, args) {
		// Construct params
		let params = args["params"];
		let noCache = args["noCache"] || false
		// console.log(CONFIG['guest-login']);

		// http call
		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err, null, http_status); // Return error and exit
				}

				// Success
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_GET_USER_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"], // auth
			noCache
		);
	},
	manageSchool: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['guest-login']);

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
			CONFIG["API_URN_MANAGE_SCHOOL"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	addGuestUser: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['guest-login']);

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
			CONFIG["API_URN_ADD_GUEST_USER"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	verifyGuestOtp: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['verify-guest-otp']);

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
			CONFIG["API_URN_VERIFY_GUEST_OTP"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	admissionEnquiryParent: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['admission-enquiry']);

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
			CONFIG["API_URN_ADMISSION_ENQUIRY"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	verifyPassword: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['admission-enquiry']);

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
			CONFIG["API_URN_VERIFY_PASSWORD"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	forgotPassword: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['admission-enquiry']);

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
			CONFIG["API_URN_FORGOT_PASSWORD"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	forgotPasswordVerifyOtp: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['admission-enquiry']);

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
			CONFIG["API_URN_FORGOT_PASSWORD_VERIFY_OTP"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	forgotResetPassword: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['admission-enquiry']);

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
			CONFIG["API_URN_FORGOT_RESET_PASSWORD"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	studentKycUpdate: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['admission-enquiry']);

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
			CONFIG["API_URN_STUDENT_KYC_UPDATE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	getUsername: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG['admission-enquiry']);

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
			CONFIG["API_URN_GET_USERNAME"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
};
