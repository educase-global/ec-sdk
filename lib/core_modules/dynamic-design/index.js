// Info: Contains Core Functions Related to Dynamic Design
"use strict";

// Shared Dependencies (Managed by Loader)
var Lib;

// Exclusive Dependencies
var CONFIG; // Module Configration (Managed by Loader)

/////////////////////////// Module-Loader START ////////////////////////////////

module.exports = function (shared_libs, config) {
	// Shared Dependencies (Managed by Main Entry Module)
	Lib = shared_libs;

	// Module Configuration
	CONFIG = config;

	// Export Public Funtions of this module
	return DynamicDesign;
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
const DynamicDesign = {
	/*
	 * ======================
	 * DESIGN TYPE
	 * ======================
	 */

	// GET dynamic-design-type-table-data - Paginated design types listing.
	DynamicDesignTypeTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_DYNAMIC_DESIGN_TYPE_TABLE_DATA", "get");
	},

	// GET dynamic-design-type-dropdown - Design type options for dropdowns.
	DynamicDesignTypeDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_DYNAMIC_DESIGN_TYPE_DROPDOWN", "get");
	},

	// POST dynamic-design-type-store - Create a new design type.
	DynamicDesignTypeStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_DYNAMIC_DESIGN_TYPE_STORE", "post");
	},

	// POST dynamic-design-type-update - Update an existing design type.
	DynamicDesignTypeUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_DYNAMIC_DESIGN_TYPE_UPDATE", "post");
	},

	// POST dynamic-design-type-destroy - Delete a design type.
	DynamicDesignTypeDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_DYNAMIC_DESIGN_TYPE_DESTROY", "post");
	},

	/*
	 * ======================
	 * DESIGN TEMPLATE
	 * ======================
	 */

	// GET dynamic-design-template-table-data - Paginated design templates listing.
	DynamicDesignTemplateTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_DYNAMIC_DESIGN_TEMPLATE_TABLE_DATA", "get");
	},

	// GET dynamic-design-template-dropdown - Design template options for dropdowns.
	DynamicDesignTemplateDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_DYNAMIC_DESIGN_TEMPLATE_DROPDOWN", "get");
	},

	// GET dynamic-design-template-show - Single design template detail for view / edit.
	DynamicDesignTemplateShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_DYNAMIC_DESIGN_TEMPLATE_SHOW", "get");
	},

	// POST dynamic-design-template-store - Create a new design template.
	DynamicDesignTemplateStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_DYNAMIC_DESIGN_TEMPLATE_STORE", "post");
	},

	// POST dynamic-design-template-update - Update an existing design template.
	DynamicDesignTemplateUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_DYNAMIC_DESIGN_TEMPLATE_UPDATE", "post");
	},

	// POST dynamic-design-template-destroy - Delete a design template.
	DynamicDesignTemplateDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_DYNAMIC_DESIGN_TEMPLATE_DESTROY", "post");
	},

	/*
	 * ======================
	 * IMAGE LIBRARY
	 * ======================
	 */

	// POST dynamic-design-image-upload - Upload an image to the design image library.
	DynamicDesignImageUpload: function (cb, args) {
		makeRequest(cb, args, "API_URN_DYNAMIC_DESIGN_IMAGE_UPLOAD", "post");
	},

	// GET dynamic-design-image-table-data - Paginated design images listing.
	DynamicDesignImageTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_DYNAMIC_DESIGN_IMAGE_TABLE_DATA", "get");
	},

	// POST dynamic-design-image-destroy - Delete an image from the design image library.
	DynamicDesignImageDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_DYNAMIC_DESIGN_IMAGE_DESTROY", "post");
	},

	/*
	 * ======================
	 * MERGE FIELDS
	 * ======================
	 */

	// GET dynamic-design-student-fields - Student merge fields available to a design template.
	DynamicDesignStudentFields: function (cb, args) {
		makeRequest(cb, args, "API_URN_DYNAMIC_DESIGN_STUDENT_FIELDS", "get");
	},

	// GET dynamic-design-staff-fields - Staff merge fields available to a design template.
	DynamicDesignStaffFields: function (cb, args) {
		makeRequest(cb, args, "API_URN_DYNAMIC_DESIGN_STAFF_FIELDS", "get");
	},
};
///////////////////////////Public Functions ENDS////////////////////////////////
