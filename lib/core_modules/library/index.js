// Info: Contains Core Functions Related to Library
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

const makeRequest = (cb, args, configKey, method, no_cache) => {
	const params = args["params"];
	Lib.Commons.httpHandler(
		function (err, http_status, http_headers, data) {
			if (err) {
				return cb(err);
			}
			cb(false, data);
		},
		CONFIG[configKey],
		method,
		params,
		args["auth"],
		// no_cache ?? args["noCache"] // noCache
	);
};

///////////////////////////Public Functions START//////////////////////////////
const Library = {
	/*
	 * ======================
	 * LIBRARY DASHBOARD
	 * ======================
	 */

	// GET library-dashboard - Library dashboard overview.
	getLibraryDashboardAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_LIBRARY_DASHBOARD_ADMIN", "get");
	},

	/*
	 * ======================
	 * LIBRARY RACKS
	 * ======================
	 */

	// GET library-racks-list - Racks listing.
	getLibraryRacksAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_GET_LIBRARY_RACKS_ADMIN", "get");
	},

	// GET library-rack-dropdown - Rack list for dropdowns.
	getLibraryRacksDropdownAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_GET_LIBRARY_RACKS_DROPDOWN_ADMIN", "get");
	},

	// GET library-rack - Single rack detail for edit.
	editLibraryRackAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_EDIT_LIBRARY_RACK_ADMIN", "get");
	},

	// POST library-rack - Create a new rack.
	addLibraryRackAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_ADD_LIBRARY_RACK_ADMIN", "post");
	},

	// PUT library-rack - Update an existing rack.
	updateLibraryRackAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_UPDATE_LIBRARY_RACK_ADMIN", "put");
	},

	// DELETE library-rack - Delete a rack.
	deleteLibraryRackAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_DELETE_LIBRARY_RACK_ADMIN", "delete");
	},

	// GET library-rack-stats - Rack level statistics.
	getLibraryRacksStatsAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_GET_LIBRARY_RACKS_STATS_ADMIN", "get");
	},

	/*
	 * ======================
	 * LIBRARY SECTIONS
	 * ======================
	 */

	// GET library-sections-list - Sections listing.
	getLibrarySectionsAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_GET_LIBRARY_SECTIONS_ADMIN", "get");
	},

	// GET library-section-dropdown - Section list for dropdowns.
	getLibrarySectionsDropdownAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_GET_LIBRARY_SECTIONS_DROPDOWN_ADMIN", "get");
	},

	// GET library-section - Single section detail for edit.
	editLibrarySectionAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_EDIT_LIBRARY_SECTION_ADMIN", "get");
	},

	// POST library-section - Create a new section.
	addLibrarySectionAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_ADD_LIBRARY_SECTION_ADMIN", "post");
	},

	// PUT library-section - Update an existing section.
	updateLibrarySectionAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_UPDATE_LIBRARY_SECTION_ADMIN", "put");
	},

	// DELETE library-section - Delete a section.
	deleteLibrarySectionAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_DELETE_LIBRARY_SECTION_ADMIN", "delete");
	},

	/*
	 * ======================
	 * LIBRARY CATEGORIES
	 * ======================
	 */

	// GET library-categories-list - Categories listing.
	getLibraryCategoriesAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_GET_LIBRARY_CATEGORIES_ADMIN", "get");
	},

	// GET library-category-dropdown - Category list for dropdowns.
	getLibraryCategoriesDropdownAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_GET_LIBRARY_CATEGORIES_DROPDOWN_ADMIN", "get");
	},

	// GET library-category - Single category detail for edit.
	editLibraryCategoryAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_EDIT_LIBRARY_CATEGORY_ADMIN", "get");
	},

	// POST library-category - Create a new category.
	addLibraryCategoryAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_ADD_LIBRARY_CATEGORY_ADMIN", "post");
	},

	// PUT library-category - Update an existing category.
	updateLibraryCategoryAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_UPDATE_LIBRARY_CATEGORY_ADMIN", "put");
	},

	// DELETE library-category - Delete a category.
	deleteLibraryCategoryAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_DELETE_LIBRARY_CATEGORY_ADMIN", "delete");
	},

	/*
	 * ======================
	 * LIBRARY BOOKS
	 * ======================
	 */

	// POST library-book - Create a new book.
	addLibraryBookAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_ADD_LIBRARY_BOOK_ADMIN", "post");
	},

	// GET library-book-list - Books listing.
	getLibraryBooksAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_GET_LIBRARY_BOOKS_ADMIN", "get");
	},

	// GET library-book - Single book detail for edit.
	editLibraryBookAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_EDIT_LIBRARY_BOOK_ADMIN", "get");
	},

	// PUT library-book - Update an existing book.
	updateLibraryBookAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_UPDATE_LIBRARY_BOOK_ADMIN", "put");
	},

	// DELETE library-book - Delete a book.
	deleteLibraryBookAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_DELETE_LIBRARY_BOOK_ADMIN", "delete");
	},

	/*
	 * ======================
	 * LIBRARY BOOK COPIES
	 * ======================
	 */

	// POST library-book-copies - Create book copies.
	addLibraryBookCopiesAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_ADD_LIBRARY_BOOK_COPIES_ADMIN", "post");
	},

	// GET library-book-copies-list - Book copies listing.
	getLibraryBookCopiesAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_GET_LIBRARY_BOOK_COPIES_ADMIN", "get");
	},

	// GET library-book-copies - Single book copy detail for edit.
	editLibraryBookCopiesAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_EDIT_LIBRARY_BOOK_COPIES_ADMIN", "get");
	},

	// PUT library-book-copies - Update an existing book copy.
	updateLibraryBookCopiesAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_UPDATE_LIBRARY_BOOK_COPIES_ADMIN", "put");
	},

	// DELETE library-book-copies - Delete a book copy.
	deleteLibraryBookCopiesAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_DELETE_LIBRARY_BOOK_COPIES_ADMIN", "delete");
	},

	/*
	 * ======================
	 * ISSUE / RETURN
	 * ======================
	 */

	// POST library-book-issue - Issue a book copy to a student.
	issueLibraryBookAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_ISSUE_LIBRARY_BOOK_ADMIN", "post");
	},

	// GET library-issue-list - Issued books listing.
	getLibraryIssueListAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_GET_LIBRARY_ISSUE_LIST_ADMIN", "get");
	},

	// POST library-book-return - Return an issued book copy.
	returnLibraryBookAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_RETURN_LIBRARY_BOOK_ADMIN", "post");
	},

	// GET library-student-search - Student search for issue / return.
	getStudentSearchLibraryAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_GET_STUDENT_SEARCH_LIBRARY_ADMIN", "get");
	},

	// GET library-copy-search - Book copy search for issue / return.
	getBookSearchLibraryAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_GET_BOOK_SEARCH_LIBRARY_ADMIN", "get");
	},

	// GET library-issued-copy-details - Issued copy detail.
	getIssuedCopyDetailsLibraryAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_GET_ISSUED_COPY_DETAILS_LIBRARY_ADMIN", "get");
	},

	// GET library-book-issue-detail - Book detail for the issue screen.
	getLibraryBookIssueDetailAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_GET_LIBRARY_BOOK_ISSUE_DETAIL_ADMIN", "get");
	},

	// GET library-issue-book-search - Book search for issuing a book.
	getLibraryIssueBookSearchAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_GET_LIBRARY_ISSUE_BOOK_SEARCH_ADMIN", "get");
	},

	// GET library-book-return-detail - Book detail for the return screen.
	getLibraryBookReturnDetailAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_GET_LIBRARY_BOOK_RETURN_DETAIL_ADMIN", "get");
	},

	/*
	 * ======================
	 * CONFIGURATION
	 * ======================
	 */

	// GET library-config - Fetch library configuration.
	getConfigurationLibraryAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_LIBRARY_CONFIG_ADMIN", "get");
	},

	// PUT library-config - Update library configuration.
	updateConfigurationLibraryAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_LIBRARY_CONFIG_UPDATE_ADMIN", "put");
	},
};
///////////////////////////Public Functions ENDS////////////////////////////////
