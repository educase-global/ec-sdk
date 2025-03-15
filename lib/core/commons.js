// Info: Contains Project-Specific functions that are shared between different modules
"use strict";

/****************** Notes *********************
 * Dependencies must be loaded already in Global.Lib
 * Next Note
 ***********************************************/

// Shared Dependencies (Managed by Loader)
var Lib;
var CONFIG;

/////////////////////////// Module-Loader START ////////////////////////////////

/********************************************************************
  Module Constructor and Exporter

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules

  @return {Set} - Export Public Funtions of this module
  *********************************************************************/
module.exports = function (shared_libs, config) {
	// Shared Dependencies (Managed my Main Entry Module)
	Lib = shared_libs;
	CONFIG = config;

	// Export Public Funtions of this module
	return Commons;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START///////////////////////////////
const Commons = {
	/********************************************************************
  http handler that intracts with js-helper-http-axios
  @param {Function} cb  - callback function

  @param {String} api_urn  - api urn for request
  @param {String} http_method  - http request method
  @param {Set} http_params  - Key value pairs of parameters
  @param {Set} body - Key value pairs of parameters
  @param {String} bearer_token - Bearer Token

  @callback(err, response_data) - Request Callback.
  * @callback {Error} err - Http Error
  * @callback {Set} response_data - Response Data
  *********************************************************************/
	httpHandler: function (
		cb,
		api_urn,
		http_method,
		http_params,
		auth_bearer_token,
	) {

		// Http request initiated
		Lib.HttpHandler.fetchJSON(
			function (err, http_status, http_response_headers, response_data) {
				// Error caused by connectivity or server status //TODO: recognise network issues
				if (err) {
					return cb(err, http_status);
				}

				if (!Lib.Utils.isNullOrUndefined(response_data)) {
					// //Error caused by invalid data
					// if(!response_data['success']){
					//   return cb(true);
					// }

					// Success
					return cb(null, http_status, http_response_headers, response_data);
				}

				// Reach here means something is wrong
				return cb(true, http_status);
			},
			Lib.Commons.constructHttpURL(api_urn, http_params), //url
			http_method, // method
			http_params, // params
			null, // request_content_type
			auth_bearer_token // auth_type,
		);
	},

	/********************************************************************
  Constructs final url for http call

  @param api_urn {String} - api path

  @return url {String} - http url string
  *********************************************************************/
	constructHttpURL: function (api_urn, http_params = {}) {

		// // Prevent further execution if apiVersion is undefined
		// if (!apiVersion || typeof apiVersion !== "object") {
		// 	// console.error("apiVersion is not a valid object. Defaulting to PHP server.");
		// 	return CONFIG["API_URL_PROD"] + "/" + api_urn;
		// }

		// let base_url;

		// if (apiVersion.serverType === "node") {
		// 	// Use Node.js server for the request
		// 	base_url = CONFIG["API_URL_NODEJS_PROD"];
		// } else if (apiVersion.serverType === "php") {
		// 	// Use PHP server for the request
		// 	base_url = CONFIG["API_URL_PROD"];
		// } else {
		// 	// Default to PHP server if no serverType is provided or is invalid
		// 	// console.warn("Invalid or missing serverType. Defaulting to PHP server.");
		// 	base_url = CONFIG["API_URL_PROD"];
		// }

		    // Determine the base URL based on serverType
			const base_url = http_params.serverType === "node"
			? CONFIG["API_URL_NODEJS_PROD"]
			: CONFIG["API_URL_PROD"];

		return base_url + "/" + api_urn;
	},
}; ///////////////////////////Public Functions ENDS//////////////////////////////
