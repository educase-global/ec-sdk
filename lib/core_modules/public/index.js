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
	return Public;
};

const Public = {
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

	getAppDataAdmin: function (cb, args) {
		// Construct params
		const params = args["params"];
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
			CONFIG["API_URN_PUBLIC_GET_APP_DATA_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getAppNewsAdmin: function (cb, args) {
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
			CONFIG["API_URN_PUBLIC_GET_APP_NEWS_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getAppAlbumsAdmin: function (cb, args) {
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
			CONFIG["API_URN_PUBLIC_GET_APP_ALBUMS_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getAboutusSectionAdmin: function (cb, args) {
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
			CONFIG["API_URN_PUBLIC_GET_ABOUT_US_SECTION_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getTestimonialAdmin: function (cb, args) {
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
			CONFIG["API_URN_PUBLIC_GET_TESTIMONIAL_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getSliderAdmin: function (cb, args) {
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
			CONFIG["API_URN_PUBLIC_GET_SLIDER_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getProgramsAdmin: function (cb, args) {
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
			CONFIG["API_URN_PUBLIC_GET_OUR_PROGRAMS_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getContactusFormAdmin: function (cb, args) {
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
			CONFIG["API_URN_PUBLIC_CONTACTUS_FORM_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getEnrollFormAdmin: function (cb, args) {
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
			CONFIG["API_URN_PUBLIC_ENROLL_FORM_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getNewsDetailAdmin: function (cb, args) {
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
			CONFIG["API_URN_GET_NEWS_DETAIL_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getOurProgramDetailAdmin: function (cb, args) {
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
			CONFIG["API_URN_GET_OUR_PROGRAM_DETAIL_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getEventAdmin: function (cb, args) {
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
			CONFIG["API_URN_GET_EVENT_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getEventDetailAdmin: function (cb, args) {
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
			CONFIG["API_URN_GET_EVENT_DETAIL_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	appSchoolSearch: function (cb, args) {
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
			CONFIG["API_URN_APP_SCHOOL_SEARCH"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	appUpdateInfo: function (cb, args) {
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
			CONFIG["API_URN_APP_UPDATE_INFO"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	appSchoolList: function (cb, args) {
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
			CONFIG["API_URN_GET_SCHOOL_LIST_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	appSchoolDetail: function (cb, args) {
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
			CONFIG["API_URN_GET_SCHOOL_DETAIL_ADMIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	websiteTcSchool: function (cb, args) {
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
			CONFIG["API_URN_WEBSITE_TC_SCHOOL"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	websiteTcAcademicYear: function (cb, args) {
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
			CONFIG["API_URN_WEBSITE_TC_ACADEMIC_YEAR"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	websiteTcClass: function (cb, args) {
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
			CONFIG["API_URN_WEBSITE_TC_CLASS"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	websiteTcSection: function (cb, args) {
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
			CONFIG["API_URN_WEBSITE_TC_SECTION"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	websiteTcStudent: function (cb, args) {
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
			CONFIG["API_URN_WEBSITE_TC_STUDENT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	websiteTcDetail: function (cb, args) {
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
			CONFIG["API_URN_WEBSITE_TC_DETAIL"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
};
