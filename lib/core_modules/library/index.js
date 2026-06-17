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
	return Library;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const Library = {

	/*
	 * ======================
	 * LIBRARY DASHBOARD
	 * ======================
	 */

	getLibraryDashboardAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) return cb(err);

				cb(false, data);
			},
			CONFIG["API_URN_LIBRARY_DASHBOARD_ADMIN"],
			"get",
			params,
			args["auth"],
			null
		);
	},

	/*
	 * ======================
	 * LIBRARY RACKS
	 * ======================
	 */

	getLibraryRacksAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) return cb(err);

				cb(false, data);
			},
			CONFIG["API_URN_GET_LIBRARY_RACKS_ADMIN"],
			"get",
			params,
			args["auth"],
			null
		);
	},

	getLibraryRacksDropdownAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) return cb(err);

				cb(false, data);
			},
			CONFIG["API_URN_GET_LIBRARY_RACKS_DROPDOWN_ADMIN"],
			"get",
			params,
			args["auth"],
			null
		);
	},

	editLibraryRackAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) return cb(err);

				cb(false, data);
			},
			CONFIG["API_URN_EDIT_LIBRARY_RACK_ADMIN"],
			"get",
			params,
			args["auth"]
		);
	},

	addLibraryRackAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) return cb(err);

				cb(false, data);
			},
			CONFIG["API_URN_ADD_LIBRARY_RACK_ADMIN"],
			"post",
			params,
			args["auth"]
		);
	},

	updateLibraryRackAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) return cb(err);

				cb(false, data);
			},
			CONFIG["API_URN_UPDATE_LIBRARY_RACK_ADMIN"],
			"put",
			params,
			args["auth"]
		);
	},

	deleteLibraryRackAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) return cb(err);

				cb(false, data);
			},
			CONFIG["API_URN_DELETE_LIBRARY_RACK_ADMIN"],
			"delete",
			params,
			args["auth"]
		);
	},

	getLibraryRacksStatsAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) return cb(err);

				cb(false, data);
			},
			CONFIG["API_URN_GET_LIBRARY_RACKS_STATS_ADMIN"],
			"get",
			params,
			args["auth"],
			null
		);
	},

	/*
	 * ======================
	 * LIBRARY SECTIONS
	 * ======================
	 */

	getLibrarySectionsAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) return cb(err);

				cb(false, data);
			},
			CONFIG["API_URN_GET_LIBRARY_SECTIONS_ADMIN"],
			"get",
			params,
			args["auth"],
			null
		);
	},

	getLibrarySectionsDropdownAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) return cb(err);

				cb(false, data);
			},
			CONFIG["API_URN_GET_LIBRARY_SECTIONS_DROPDOWN_ADMIN"],
			"get",
			params,
			args["auth"],
			null
		);
	},

	editLibrarySectionAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) return cb(err);

				cb(false, data);
			},
			CONFIG["API_URN_EDIT_LIBRARY_SECTION_ADMIN"],
			"get",
			params,
			args["auth"]
		);
	},

	addLibrarySectionAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) return cb(err);

				cb(false, data);
			},
			CONFIG["API_URN_ADD_LIBRARY_SECTION_ADMIN"],
			"post",
			params,
			args["auth"]
		);
	},

	updateLibrarySectionAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) return cb(err);

				cb(false, data);
			},
			CONFIG["API_URN_UPDATE_LIBRARY_SECTION_ADMIN"],
			"put",
			params,
			args["auth"]
		);
	},

	deleteLibrarySectionAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) return cb(err);

				cb(false, data);
			},
			CONFIG["API_URN_DELETE_LIBRARY_SECTION_ADMIN"],
			"delete",
			params,
			args["auth"]
		);
	},

	/*
	 * ======================
	 * LIBRARY CATEGORIES
	 * ======================
	 */

	getLibraryCategoriesAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) return cb(err);

				cb(false, data);
			},
			CONFIG["API_URN_GET_LIBRARY_CATEGORIES_ADMIN"],
			"get",
			params,
			args["auth"],
			null
		);
	},

	editLibraryCategoryAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) return cb(err);

				cb(false, data);
			},
			CONFIG["API_URN_EDIT_LIBRARY_CATEGORY_ADMIN"],
			"get",
			params,
			args["auth"]
		);
	},

	addLibraryCategoryAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) return cb(err);

				cb(false, data);
			},
			CONFIG["API_URN_ADD_LIBRARY_CATEGORY_ADMIN"],
			"post",
			params,
			args["auth"]
		);
	},

	updateLibraryCategoryAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) return cb(err);

				cb(false, data);
			},
			CONFIG["API_URN_UPDATE_LIBRARY_CATEGORY_ADMIN"],
			"put",
			params,
			args["auth"]
		);
	},

	deleteLibraryCategoryAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) return cb(err);

				cb(false, data);
			},
			CONFIG["API_URN_DELETE_LIBRARY_CATEGORY_ADMIN"],
			"delete",
			params,
			args["auth"]
		);
	},

	addLibraryBookAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err);
				}

				cb(false, data);
			},
			CONFIG["API_URN_ADD_LIBRARY_BOOK_ADMIN"],
			"post",
			params,
			args["auth"]
		);
	},

	getLibraryBooksAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err);
				}

				cb(false, data);
			},
			CONFIG["API_URN_GET_LIBRARY_BOOKS_ADMIN"],
			"get",
			params,
			args["auth"],
			null
		);
	},

	editLibraryBookAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err);
				}

				cb(false, data);
			},
			CONFIG["API_URN_EDIT_LIBRARY_BOOK_ADMIN"],
			"get",
			params,
			args["auth"]
		);
	},

	updateLibraryBookAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err);
				}

				cb(false, data);
			},
			CONFIG["API_URN_UPDATE_LIBRARY_BOOK_ADMIN"],
			"put",
			params,
			args["auth"]
		);
	},

	deleteLibraryBookAdmin: function (cb, args) {
		let params = args["params"];

		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err);
				}

				cb(false, data);
			},
			CONFIG["API_URN_DELETE_LIBRARY_BOOK_ADMIN"],
			"delete",
			params,
			args["auth"]
		);
	},

	addLibraryBookCopiesAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err);
				}

				cb(
					false,
					data
				);
			},
			CONFIG["API_URN_ADD_LIBRARY_BOOK_COPIES_ADMIN"],
			"post",
			params,
			args["auth"]
		);
	},

	getLibraryBookCopiesAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err);
				}

				cb(
					false,
					data
				);
			},
			CONFIG["API_URN_GET_LIBRARY_BOOK_COPIES_ADMIN"],
			"get",
			params,
			args["auth"],
			null
		);
	},

	editLibraryBookCopiesAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err);
				}

				cb(
					false,
					data
				);
			},
			CONFIG["API_URN_EDIT_LIBRARY_BOOK_COPIES_ADMIN"],
			"get",
			params,
			args["auth"]
		);
	},

	updateLibraryBookCopiesAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err);
				}

				cb(
					false,
					data
				);
			},
			CONFIG["API_URN_UPDATE_LIBRARY_BOOK_COPIES_ADMIN"],
			"put",
			params,
			args["auth"]
		);
	},

	deleteLibraryBookCopiesAdmin: function (cb, args) {
		// Construct params
		let params = args["params"];

		Lib.Commons.httpHandler(
			// callback
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err);
				}

				cb(
					false,
					data
				);
			},
			CONFIG["API_URN_DELETE_LIBRARY_BOOK_COPIES_ADMIN"],
			"delete",
			params,
			args["auth"]
		);
	},

	/*
	* ======================
	* ISSUE / RETURN
	* ======================
	*/

	issueLibraryBookAdmin: function (cb, args) {
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
			CONFIG["API_URN_ISSUE_LIBRARY_BOOK_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getLibraryIssueListAdmin: function (cb, args) {
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
			CONFIG["API_URN_GET_LIBRARY_ISSUE_LIST_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"], // auth
			null
		);
	},

	returnLibraryBookAdmin: function (cb, args) {
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
			CONFIG["API_URN_RETURN_LIBRARY_BOOK_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getStudentSearchLibraryAdmin: function (cb, args) {
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
			CONFIG["API_URN_GET_STUDENT_SEARCH_LIBRARY_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"], // auth
			null
		);
	},
	
	getBookSearchLibraryAdmin: function (cb, args) {
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
			CONFIG["API_URN_GET_BOOK_SEARCH_LIBRARY_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"], // auth
			null
		);
	},
	
	getIssuedCopyDetailsLibraryAdmin: function (cb, args) {
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
			CONFIG["API_URN_GET_ISSUED_COPY_DETAILS_LIBRARY_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"], // auth
			null
		);
	},
	
	getConfigurationLibraryAdmin: function (cb, args) {
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
			CONFIG["API_URN_LIBRARY_CONFIG_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"], // auth
			null
		);
	},
	
	updateConfigurationLibraryAdmin: function (cb, args) {
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
			CONFIG["API_URN_LIBRARY_CONFIG_UPDATE_ADMIN"], // api urn
			"put", // method
			params, // request-params
			args["auth"], // auth
			null
		);
	},
};
