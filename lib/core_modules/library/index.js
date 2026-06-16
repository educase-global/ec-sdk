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
	}
};
