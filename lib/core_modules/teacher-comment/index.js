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
	return TeacherComment;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const TeacherComment = {
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
	getTeacherCommentListAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_URN_GET_TEACHER_COMMENT_LIST"])

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
			CONFIG["API_URN_GET_TEACHER_COMMENT_LIST"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	deleteTeacherCommentAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_URN_DELETE_TEACHER_COMMENT"])

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
			CONFIG["API_URN_DELETE_TEACHER_COMMENT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	addTeacherCommentAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_URN_ADD_TEACHER_COMMENT"])

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
			CONFIG["API_URN_ADD_TEACHER_COMMENT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	detailTeacherCommentAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_URN_DETAIL_TEACHER_COMMENT"])

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
			CONFIG["API_URN_DETAIL_TEACHER_COMMENT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	replyTeacherCommentAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_URN_REPLY_TEACHER_COMMENT"])

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
			CONFIG["API_URN_REPLY_TEACHER_COMMENT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getTeacherCommentListParent: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_URN_GET_TEACHER_COMMENT_LIST_PARENT"])

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
			CONFIG["API_URN_GET_TEACHER_COMMENT_LIST_PARENT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getTeacherCommentDetailParent: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_URN_GET_TEACHER_COMMENT_DETAIL_PARENT"])

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
			CONFIG["API_URN_GET_TEACHER_COMMENT_DETAIL_PARENT"], // api urn
			"GET", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	TeacherCommentReplyParent: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_URN_TEACHER_COMMENT_REPLY_PARENT"])

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
			CONFIG["API_URN_TEACHER_COMMENT_REPLY_PARENT"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	teacherCommentChatEndAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_URN_TEACHER_COMMENT_REPLY_PARENT"])

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
			CONFIG["API_URN_TEACHER_COMMENT_CHAT_END_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	teacherCommentReadStatusAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		// console.log(CONFIG["API_URN_TEACHER_COMMENT_REPLY_PARENT"])

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
			CONFIG["API_URN_TEACHER_COMMENT_READ_STATUS_ADMIN"], // api urn
			"POST", // method
			params, // request-params
			args["auth"] // auth
		);
	},
};
