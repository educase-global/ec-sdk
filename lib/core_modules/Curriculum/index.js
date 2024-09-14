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
	return Curriculum;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const Curriculum = {
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
	
	getCurriculumList: function (cb, args) {
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
			CONFIG["API_URN_CURRICULLUM_GET_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	getCurriculumAccessList: function (cb, args) {
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
			CONFIG["API_URN_CURRICULLUM_GET_ACCESS_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	showCurriculumData: function (cb, args) {
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
			CONFIG["API_URN_CURRICULLUM_SHOW"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	updateCurriculumAccessList: function (cb, args) {
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
			CONFIG["API_URN_CURRICULLUM_UPDATE_ACCESS_LIST"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},
	curriculumAssignedTeacherTableData: function (cb, args) {
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
			CONFIG["API_URN_CURRICULUM_ASSIGN_SCHOOL_TEACHER_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	getSchoolCurriculumList: function (cb, args) {
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
			CONFIG["API_URN_CURRICULUM_SCHOOL_CURRICULUM_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	showSchoolCurriculumChapter: function (cb, args) {
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
			CONFIG["API_URN_CURRICULUM_SCHOOL_CURRICULUM_CHAPTER_SHOW"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	showSchoolCurriculumTopicShow: function (cb, args) {
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
			CONFIG["API_URN_CURRICULUM_SCHOOL_CURRICULUM_TOPIC_SHOW"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	showSchoolCurriculumSubtopicShow: function (cb, args) {
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
			CONFIG["API_URN_CURRICULUM_SCHOOL_CURRICULUM_SUBTOPIC_SHOW"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	showSchoolCurriculumSubtopicContent: function (cb, args) {
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
			CONFIG["API_URN_CURRICULUM_SCHOOL_CURRICULUM_SUBTOPIC_CONTENT"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	curriculumAssignedToTeacher: function (cb, args) {
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
			CONFIG["API_URN_CURRICULUM_ASSIGN_SCHOOL_TEACHER"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},
	curriculumAssignedTeacherDropdown: function (cb, args) {
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
			CONFIG["API_URN_CURRICULUM_ASSIGN_SCHOOL_TEACHER_DROPDOWN"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	curriculumAssignSchoolTableData: function (cb, args) {
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
			CONFIG["API_URN_ADMIN_CURRICULUM_ASSIGN_SCHOOL_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	
	curriculumAssignTeacherTableData: function (cb, args) {
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
			CONFIG["API_URN_STAFF_CURRICULUM_ASSIGN_SCHOOL_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	curriculumDetailViewInSchool: function (cb, args) {
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
			CONFIG["API_URN_CURRICULUM_SHOW_IN_SCHOOL"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	curriculumTeacherSessionStart: function (cb, args) {
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
			CONFIG["API_URN_TEACHER_CURRICULUM_SESSION_START"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},
	
	curriculumTeacherSessionEnd: function (cb, args) {
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
			CONFIG["API_URN_TEACHER_CURRICULUM_SESSION_END"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},

	curriculumTeacherCurriculumTableData: function (cb, args) {
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
			CONFIG["API_URN_TEACHER_CURRICULUM_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},

	curriculumViewDetailAdmin: function (cb, args) {
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
			CONFIG["API_URN_SCHOOL_CURRICULUM_DETAIL"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	curriculumProviderCategory: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CURRICULUM_PROVIDER_CATEGORY"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	curriculumProviderCategoryList: function (cb, args) {
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
			CONFIG["API_URN_FRANCHISE_CURRICULUM_PROVIDER_CATEGORY_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	},
	curriculumTeacherEvaluation: function (cb, args) {
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
			CONFIG["API_URN_TEACHER_CURRICULUM_EVALUATION"], // api urn
			"post", // method
			params, // request-params
			args["auth"]
		);
	},
	curriculumStudentList: function (cb, args) {
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
			CONFIG["API_URN_TEACHER_CURRICULUM_STUDENT_LIST"], // api urn
			"get", // method
			params, // request-params
			args["auth"]
		);
	}
};
