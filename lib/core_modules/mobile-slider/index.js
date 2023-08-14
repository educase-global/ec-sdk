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
	return MobileSlider;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const MobileSlider = {
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
	addMobileSlider: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_SEO_STORE"])

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
			CONFIG["API_URN_ADD_MOBILE_SLIDER"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	editMobileSlider: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_SEO_SHOW"])

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
			CONFIG["API_URN_EDIT_MOBILE_SLIDER"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	updateMobileSlider: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_SEO_SHOW"])

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
			CONFIG["API_URN_UPDATE_MOBILE_SLIDER"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	deleteMobileSlider: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_SEO_SHOW"])

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
			CONFIG["API_URN_DESTROY_MOBILE_SLIDER"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	mobileSliderList: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_SEO_SHOW"])

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
			CONFIG["API_URN_TABLE_DATA_MOBILE_SLIDER"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
};
