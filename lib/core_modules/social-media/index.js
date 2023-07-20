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
	return SocialMedia;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const SocialMedia = {
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
	socialMediaLogin: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_MEDIA_LOGIN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	socialMediaCategoryListDataTable: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_POST_CATEGORY_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	socialMediaCategoryStore: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_POST_CATEGORY_STORE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	socialMediaCategoryEdit: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_POST_CATEGORY_EDIT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	socialMediaCategoryDropdown: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_POST_CATEGORY_DROPDOWN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	socialMediaCategoryUpdate: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_POST_CATEGORY_UPDATE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	socialMediaCategoryDelete: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_POST_CATEGORY_DESTROY"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	socialMediaHashtgListDataTable: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_POST_HASHTAG_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	socialMediaHashtgStore: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_POST_HASHTAG_STORE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	socialMediaHashtgEdit: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_POST_HASHTAG_EDIT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	socialMediaHashtgDropdown: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_POST_HASHTAG_DROPDOWN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	socialMediaHashtgUpdate: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_POST_HASHTAG_UPDATE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	socialMediaHashtgDelete: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_POST_HASHTAG_DESTROY"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	socialMediaPost: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_POST_STORE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	socialMediaPostList: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_POST_TABLE_DATA"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	socialMediaPostEdit: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_POST_EDIT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	socialMediaPostUpdate: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_POST_UPDATE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	socialMediaPostDelete: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_POST_DESTROY"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	socialMediaCheckConnection: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_MEDIA_CHECK_CONNECTION"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	socialMediaFbPageDropdown: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_MEDIA_FB_PAGE_DROPDOWN"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	socialMediaSetFbPage: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_MEDIA_SET_FB_PAGE"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	socialMediaLogout: function (cb, args) {
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
			CONFIG["API_URN_SOCIAL_MEDIA_LOGOUT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	}


};
