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

	/*
	 * ======================
	 * FRANCHISE - DESIGN TYPE
	 * ======================
	 */

	// GET franchise/dynamic-design-type-table-data - Paginated franchise design types listing.
	FranchiseDynamicDesignTypeTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_DYNAMIC_DESIGN_TYPE_TABLE_DATA", "get");
	},

	// GET franchise/dynamic-design-type-dropdown - Franchise design type options for dropdowns.
	FranchiseDynamicDesignTypeDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_DYNAMIC_DESIGN_TYPE_DROPDOWN", "get");
	},

	// POST franchise/dynamic-design-type-store - Create a new franchise design type.
	FranchiseDynamicDesignTypeStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_DYNAMIC_DESIGN_TYPE_STORE", "post");
	},

	// POST franchise/dynamic-design-type-update - Rename an existing franchise design type.
	FranchiseDynamicDesignTypeUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_DYNAMIC_DESIGN_TYPE_UPDATE", "post");
	},

	// POST franchise/dynamic-design-type-destroy - Delete franchise design types (params: type_id as id or array).
	FranchiseDynamicDesignTypeDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_DYNAMIC_DESIGN_TYPE_DESTROY", "post");
	},

	/*
	 * ======================
	 * FRANCHISE - DESIGN TEMPLATE
	 * ======================
	 */

	// GET franchise/dynamic-design-template-table-data - Paginated franchise design templates listing (params: scope, status, sort).
	FranchiseDynamicDesignTemplateTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_DYNAMIC_DESIGN_TEMPLATE_TABLE_DATA", "get");
	},

	// GET franchise/dynamic-design-template-show - Single franchise design template detail with its design document.
	FranchiseDynamicDesignTemplateShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_DYNAMIC_DESIGN_TEMPLATE_SHOW", "get");
	},

	// POST franchise/dynamic-design-template-store - Create a franchise design template (always saved as a draft).
	FranchiseDynamicDesignTemplateStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_DYNAMIC_DESIGN_TEMPLATE_STORE", "post");
	},

	// POST franchise/dynamic-design-template-update - Update a franchise design template draft.
	FranchiseDynamicDesignTemplateUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_DYNAMIC_DESIGN_TEMPLATE_UPDATE", "post");
	},

	// POST franchise/dynamic-design-template-publish - Publish a draft down to the branches its scope resolves to (one-way).
	FranchiseDynamicDesignTemplatePublish: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_DYNAMIC_DESIGN_TEMPLATE_PUBLISH", "post");
	},

	// POST franchise/dynamic-design-template-clone - Copy a design template back to a fresh draft.
	FranchiseDynamicDesignTemplateClone: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_DYNAMIC_DESIGN_TEMPLATE_CLONE", "post");
	},

	// POST franchise/dynamic-design-template-destroy - Delete franchise design templates (params: template_id as id or array).
	FranchiseDynamicDesignTemplateDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_DYNAMIC_DESIGN_TEMPLATE_DESTROY", "post");
	},

	/*
	 * ======================
	 * FRANCHISE - SCOPE & BRANCHES
	 * ======================
	 */

	// GET franchise/dynamic-design-branch-dropdown - Branches a scope currently resolves to (params: scope, scope_ref_ids).
	FranchiseDynamicDesignBranchDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_DYNAMIC_DESIGN_BRANCH_DROPDOWN", "get");
	},

	// GET franchise/dynamic-design-template-branch-table-data - Branches a published design template reached.
	FranchiseDynamicDesignTemplateBranchTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_DYNAMIC_DESIGN_TEMPLATE_BRANCH_TABLE_DATA", "get");
	},

	/*
	 * ======================
	 * FRANCHISE - IMAGE LIBRARY
	 * ======================
	 */

	// POST franchise/dynamic-design-image-upload - Upload an image to the franchise design image library.
	FranchiseDynamicDesignImageUpload: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_DYNAMIC_DESIGN_IMAGE_UPLOAD", "post");
	},

	// GET franchise/dynamic-design-image-table-data - Paginated franchise design images listing.
	FranchiseDynamicDesignImageTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_DYNAMIC_DESIGN_IMAGE_TABLE_DATA", "get");
	},

	// POST franchise/dynamic-design-image-destroy - Delete an image from the franchise design image library.
	FranchiseDynamicDesignImageDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_DYNAMIC_DESIGN_IMAGE_DESTROY", "post");
	},
};
///////////////////////////Public Functions ENDS////////////////////////////////
