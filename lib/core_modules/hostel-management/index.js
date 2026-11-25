// Info: Contains Core Functions Related to Hostel Management (settings, masters, setup wizard, class groups, hostels, blocks and floors)
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
	return HostelManagement;
};

//////////////////////////// Module-Loader END /////////////////////////////////

// Every Hostel Management API is on the Node server: callers pass serverType: "node" in params.
// Reads are scoped to the login's seat, hostel role and branch, so they pass noCache;
// only the static meta and route map use the SDK's 5-minute GET cache.
const makeRequest = (cb, args, configKey, method, noCache) => {
	Lib.Commons.httpHandler(
		function (err, http_status, http_headers, data) {
			if (err) {
				return cb(err);
			}
			cb(false, data);
		},
		CONFIG[configKey], // api urn
		method, // method
		args["params"], // request-params
		args["auth"], // auth
		noCache // noCache
	);
};

///////////////////////////Public Functions START//////////////////////////////
const HostelManagement = {
	/*
	 * ======================
	 * ADMIN - CORE (ROLE SWITCHER AND META)
	 * ======================
	 */

	// GET hostel-my-roles - Roles the login holds, its default role and the branches it can pick; feeds the role switcher (params: hostel_role).
	getHostelMyRoles: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_MY_ROLES", "get", true);
	},

	// GET hostel-meta - Static enums for every form: roles, the 10 tabs, settings groups, genders, billing periods, statuses, limits.
	getHostelMeta: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_META", "get", false);
	},

	// GET hostel-route-map - The module's 10 tabs, their screens and the APIs each screen calls.
	getHostelRouteMap: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ROUTE_MAP", "get", false);
	},

	/*
	 * ======================
	 * ADMIN - SETTINGS
	 * ======================
	 */

	// GET hostel-settings-show - Effective settings of a branch, every group or one (params: group, school_id).
	getHostelSettingsShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_SETTINGS_SHOW", "get", true);
	},

	// POST hostel-settings-update - Partial update of one settings group (params: group + any of that group's fields, school_id).
	hostelSettingsUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_SETTINGS_UPDATE", "post");
	},

	// POST hostel-settings-reset - Drops a branch's own settings so it follows Head Office again (params: school_id for Head Office).
	hostelSettingsReset: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_SETTINGS_RESET", "post");
	},

	// GET hostel-branch-mode-list - Each branch's management mode (Head-office-managed or Self-managed).
	getHostelBranchModeList: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_BRANCH_MODE_LIST", "get", true);
	},

	/*
	 * ======================
	 * ADMIN - LEAVE TYPES
	 * ======================
	 */

	// GET hostel-leave-type-list - Leave types and their approval chain visible to the caller (inherited + own).
	getHostelLeaveTypeList: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_LEAVE_TYPE_LIST", "get", true);
	},

	// POST hostel-leave-type-store - Creates a leave type, or edits one when id is sent (params: id, name, description, requires_parent_approval, parent_approval_only_if_student, requires_warden_approval, requires_hostel_admin_approval, hostel_admin_after_days, max_duration_hours, sort_order, status).
	hostelLeaveTypeStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_LEAVE_TYPE_STORE", "post");
	},

	// POST hostel-leave-type-change-status - Activates / deactivates a leave type (params: id, status 0|1).
	hostelLeaveTypeChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_LEAVE_TYPE_CHANGE_STATUS", "post");
	},

	// POST hostel-leave-type-destroy - Deletes a leave type of the caller's own tier (params: id).
	hostelLeaveTypeDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_LEAVE_TYPE_DESTROY", "post");
	},

	/*
	 * ======================
	 * ADMIN - ROLL CALL SESSIONS
	 * ======================
	 */

	// GET hostel-rollcall-session-list - Roll call sessions of one hostel (params: hostel_id).
	getHostelRollcallSessionList: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ROLLCALL_SESSION_LIST", "get", true);
	},

	// POST hostel-rollcall-session-store - Creates a roll call session, or edits one when id is sent (params: id, hostel_id, name, session_time, window_before_minutes, window_after_minutes, is_night, sort_order, status).
	hostelRollcallSessionStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ROLLCALL_SESSION_STORE", "post");
	},

	// POST hostel-rollcall-session-change-status - Activates / deactivates a roll call session (params: id, status 0|1).
	hostelRollcallSessionChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ROLLCALL_SESSION_CHANGE_STATUS", "post");
	},

	// POST hostel-rollcall-session-destroy - Deletes a roll call session (params: id).
	hostelRollcallSessionDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ROLLCALL_SESSION_DESTROY", "post");
	},

	/*
	 * ======================
	 * ADMIN - MASTERS - ROOM TYPES
	 * ======================
	 */

	// GET hostel-room-type-table-data - Room types visible to the caller, with usage (params: page, perPage, search, status, order, dir, hostel_id, block_id).
	getHostelRoomTypeTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ROOM_TYPE_TABLE_DATA", "get", true);
	},

	// GET hostel-room-type-show - One room type (params: id).
	getHostelRoomTypeShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ROOM_TYPE_SHOW", "get", true);
	},

	// GET hostel-room-type-dropdown - Active room types for room forms (params: include_inactive).
	getHostelRoomTypeDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ROOM_TYPE_DROPDOWN", "get", true);
	},

	// POST hostel-room-type-store - Creates a room type (params: name, default_beds, amenities JSON, description, status).
	hostelRoomTypeStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ROOM_TYPE_STORE", "post");
	},

	// POST hostel-room-type-update - Edits a room type; only the fields sent change (params: id + any create field).
	hostelRoomTypeUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ROOM_TYPE_UPDATE", "post");
	},

	// POST hostel-room-type-change-status - Activates / deactivates a room type (params: id, status 0|1).
	hostelRoomTypeChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ROOM_TYPE_CHANGE_STATUS", "post");
	},

	// POST hostel-room-type-destroy - Deletes an unused room type of the caller's own tier (params: id).
	hostelRoomTypeDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ROOM_TYPE_DESTROY", "post");
	},

	/*
	 * ======================
	 * ADMIN - MASTERS - HOSTEL ITEMS
	 * ======================
	 */

	// GET hostel-item-table-data - Items issued at check-in, with stock (params: page, perPage, search, status, category, stock_source, is_returnable, order, dir).
	getHostelItemTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ITEM_TABLE_DATA", "get", true);
	},

	// GET hostel-item-show - One item and who holds it now (params: id).
	getHostelItemShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ITEM_SHOW", "get", true);
	},

	// GET hostel-item-dropdown - Active items with current availability, for the check-in screen.
	getHostelItemDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ITEM_DROPDOWN", "get", true);
	},

	// GET hostel-product-dropdown - Franchise inventory products an item can be linked to (params: search).
	getHostelProductDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_PRODUCT_DROPDOWN", "get", true);
	},

	// POST hostel-item-store - Creates an item with opening stock (params: name, category, stock_source inventory|hostel_stock, product_id, product_label, opening_qty, replacement_charge, is_returnable, description, status).
	hostelItemStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ITEM_STORE", "post");
	},

	// POST hostel-item-update - Edits an item and receives stock with add_qty; only the fields sent change (params: id, add_qty + any create field except opening_qty).
	hostelItemUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ITEM_UPDATE", "post");
	},

	// POST hostel-item-change-status - Activates / deactivates an item (params: id, status 0|1).
	hostelItemChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ITEM_CHANGE_STATUS", "post");
	},

	// POST hostel-item-destroy - Deletes an item of the caller's own tier that was never issued (params: id).
	hostelItemDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ITEM_DESTROY", "post");
	},

	/*
	 * ======================
	 * ADMIN - MASTERS - MEAL PLANS
	 * ======================
	 */

	// GET hostel-meal-plan-table-data - Meal plans visible to the caller, with usage (params: page, perPage, search, status, food_preference, kind, order, dir).
	getHostelMealPlanTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_MEAL_PLAN_TABLE_DATA", "get", true);
	},

	// GET hostel-meal-plan-show - One meal plan (params: id).
	getHostelMealPlanShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_MEAL_PLAN_SHOW", "get", true);
	},

	// GET hostel-meal-plan-dropdown - Active meal plans for forms (params: kind hostel|lunch).
	getHostelMealPlanDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_MEAL_PLAN_DROPDOWN", "get", true);
	},

	// POST hostel-meal-plan-store - Creates a meal plan (params: name, food_preference, kind hostel|lunch, meal_slots JSON, description, status).
	hostelMealPlanStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_MEAL_PLAN_STORE", "post");
	},

	// POST hostel-meal-plan-update - Edits a meal plan; only the fields sent change (params: id, name, food_preference, kind, meal_slots JSON, description).
	hostelMealPlanUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_MEAL_PLAN_UPDATE", "post");
	},

	// POST hostel-meal-plan-change-status - Activates / deactivates a meal plan (params: id, status 0|1).
	hostelMealPlanChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_MEAL_PLAN_CHANGE_STATUS", "post");
	},

	// POST hostel-meal-plan-destroy - Deletes an unused meal plan of the caller's own tier (params: id).
	hostelMealPlanDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_MEAL_PLAN_DESTROY", "post");
	},

	/*
	 * ======================
	 * ADMIN - MASTERS - ACTIVITY TYPES
	 * ======================
	 */

	// GET hostel-activity-type-table-data - Activity types visible to the caller, with usage (params: page, perPage, search, status, order, dir).
	getHostelActivityTypeTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ACTIVITY_TYPE_TABLE_DATA", "get", true);
	},

	// GET hostel-activity-type-show - One activity type (params: id).
	getHostelActivityTypeShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ACTIVITY_TYPE_SHOW", "get", true);
	},

	// GET hostel-activity-type-dropdown - Active activity types for forms.
	getHostelActivityTypeDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ACTIVITY_TYPE_DROPDOWN", "get", true);
	},

	// POST hostel-activity-type-store - Creates an activity type (params: name, description, sort_order, status).
	hostelActivityTypeStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ACTIVITY_TYPE_STORE", "post");
	},

	// POST hostel-activity-type-update - Edits an activity type; only the fields sent change (params: id, name, description, sort_order).
	hostelActivityTypeUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ACTIVITY_TYPE_UPDATE", "post");
	},

	// POST hostel-activity-type-change-status - Activates / deactivates an activity type (params: id, status 0|1).
	hostelActivityTypeChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ACTIVITY_TYPE_CHANGE_STATUS", "post");
	},

	// POST hostel-activity-type-destroy - Deletes an unused activity type of the caller's own tier (params: id).
	hostelActivityTypeDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_ACTIVITY_TYPE_DESTROY", "post");
	},

	/*
	 * ======================
	 * ADMIN - SETUP WIZARD
	 * ======================
	 */

	// POST hostel-setup-wizard-preview - Expands blocks, floors and room ranges into rooms and beds per floor and reports problems; writes nothing (params: blocks JSON).
	hostelSetupWizardPreview: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_SETUP_WIZARD_PREVIEW", "post");
	},

	// POST hostel-setup-wizard-publish - Creates the hostel with its blocks, floors, rooms and beds in one transaction and publishes it (params: name, gender, warden_staff_ids JSON, eligible_class_ids JSON, auto_allocate_rules JSON, billing_period, address, contact_number, description, blocks JSON).
	hostelSetupWizardPublish: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_SETUP_WIZARD_PUBLISH", "post");
	},

	/*
	 * ======================
	 * ADMIN - CLASS GROUPS
	 * ======================
	 */

	// GET hostel-class-dropdown - Every class of the branch with the class group it already belongs to.
	getHostelClassDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_CLASS_DROPDOWN", "get", true);
	},

	// GET hostel-class-group-table-data - Class groups of the branch (params: page, perPage, search, status, order, dir).
	getHostelClassGroupTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_CLASS_GROUP_TABLE_DATA", "get", true);
	},

	// GET hostel-class-group-show - One class group (params: id).
	getHostelClassGroupShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_CLASS_GROUP_SHOW", "get", true);
	},

	// POST hostel-class-group-store - Creates a class group (params: name, class_ids JSON, status).
	hostelClassGroupStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_CLASS_GROUP_STORE", "post");
	},

	// POST hostel-class-group-update - Renames a class group or replaces its classes (params: id, name, class_ids JSON, status).
	hostelClassGroupUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_CLASS_GROUP_UPDATE", "post");
	},

	// POST hostel-class-group-change-status - Activates / deactivates a class group (params: id, status 0|1).
	hostelClassGroupChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_CLASS_GROUP_CHANGE_STATUS", "post");
	},

	// POST hostel-class-group-destroy - Deletes a class group and frees its classes (params: id).
	hostelClassGroupDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_CLASS_GROUP_DESTROY", "post");
	},

	/*
	 * ======================
	 * ADMIN - HOSTELS
	 * ======================
	 */

	// GET hostel-staff-dropdown - Active staff of the branch with where each is already assigned (params: search, purpose warden|mess_manager|in_charge).
	getHostelStaffDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_STAFF_DROPDOWN", "get", true);
	},

	// GET hostel-table-data - Hostel cards with capacity, occupied, vacant and reserved, plus a summary (params: page, perPage, search, status, gender, order, dir).
	getHostelTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_TABLE_DATA", "get", true);
	},

	// GET hostel-show - One hostel: card fields, blocks with floors and room layout, wardens, roll call sessions and the setup checklist (params: id).
	getHostelShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_SHOW", "get", true);
	},

	// GET hostel-dropdown - Hostels in the caller's scope (params: status).
	getHostelDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_DROPDOWN", "get", true);
	},

	// POST hostel-store - Creates a hostel (params: name, code, gender boys|girls|coed, warden_staff_ids JSON, eligible_class_ids JSON, auto_allocate_rules JSON, billing_period, address, contact_number, description, status).
	hostelStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_STORE", "post");
	},

	// POST hostel-update - Edits a hostel; only the fields sent change (params: id + any create field except status).
	hostelUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_UPDATE", "post");
	},

	// POST hostel-change-status - Activates / deactivates a hostel (params: id, status 0|1).
	hostelChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_CHANGE_STATUS", "post");
	},

	// POST hostel-publish - Publishes a hostel so allocation opens (params: id).
	hostelPublish: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_PUBLISH", "post");
	},

	// POST hostel-destroy - Deletes a hostel that has no rooms (params: id).
	hostelDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_DESTROY", "post");
	},

	/*
	 * ======================
	 * ADMIN - BLOCKS AND FLOORS
	 * ======================
	 */

	// GET hostel-block-list - Blocks of a hostel with floors, room layout, counts and block wardens (params: hostel_id).
	getHostelBlockList: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_BLOCK_LIST", "get", true);
	},

	// GET hostel-block-show - One block (params: id).
	getHostelBlockShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_BLOCK_SHOW", "get", true);
	},

	// POST hostel-block-store - Creates a block and its floors (params: hostel_id, name, floor_count, gender boys|girls, ground_label, warden_staff_ids JSON, sort_order, status).
	hostelBlockStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_BLOCK_STORE", "post");
	},

	// POST hostel-block-update - Edits a block; only the fields sent change (params: id, name, gender, floor_count, ground_label, warden_staff_ids JSON, sort_order).
	hostelBlockUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_BLOCK_UPDATE", "post");
	},

	// POST hostel-block-change-status - Activates / deactivates a block (params: id, status 0|1).
	hostelBlockChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_BLOCK_CHANGE_STATUS", "post");
	},

	// POST hostel-block-destroy - Deletes an empty block with its floors (params: id).
	hostelBlockDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_BLOCK_DESTROY", "post");
	},

	// POST hostel-floor-store - Adds a floor to a block (params: block_id, label, level_no, sort_order).
	hostelFloorStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_FLOOR_STORE", "post");
	},

	// POST hostel-floor-update - Renames / reorders a floor (params: id, label, sort_order).
	hostelFloorUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_FLOOR_UPDATE", "post");
	},

	// POST hostel-floor-destroy - Deletes an empty floor (params: id).
	hostelFloorDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOSTEL_FLOOR_DESTROY", "post");
	},

	/*
	 * ======================
	 * FRANCHISE - CORE (ROLE SWITCHER AND META)
	 * Head Office twins under franchise/: school_id acts on one branch, omitted = the franchise tier.
	 * ======================
	 */

	// GET franchise/hostel-my-roles - Head Office twin of getHostelMyRoles.
	getFranchiseHostelMyRoles: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_MY_ROLES", "get", true);
	},

	// GET franchise/hostel-meta - Head Office twin of getHostelMeta.
	getFranchiseHostelMeta: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_META", "get", false);
	},

	// GET franchise/hostel-route-map - Head Office twin of getHostelRouteMap.
	getFranchiseHostelRouteMap: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ROUTE_MAP", "get", false);
	},

	// GET franchise/hostel-branch-dropdown - Branches the Head Office login can act on. Head Office only.
	getFranchiseHostelBranchDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_BRANCH_DROPDOWN", "get", true);
	},

	/*
	 * ======================
	 * FRANCHISE - SETTINGS
	 * ======================
	 */

	// GET franchise/hostel-settings-show - Head Office twin of getHostelSettingsShow.
	getFranchiseHostelSettingsShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_SETTINGS_SHOW", "get", true);
	},

	// POST franchise/hostel-settings-update - Head Office twin of hostelSettingsUpdate.
	franchiseHostelSettingsUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_SETTINGS_UPDATE", "post");
	},

	// POST franchise/hostel-settings-reset - Head Office twin of hostelSettingsReset.
	franchiseHostelSettingsReset: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_SETTINGS_RESET", "post");
	},

	// GET franchise/hostel-branch-mode-list - Head Office twin of getHostelBranchModeList.
	getFranchiseHostelBranchModeList: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_BRANCH_MODE_LIST", "get", true);
	},

	// POST franchise/hostel-branch-mode-update - Makes a branch Head-office-managed or Self-managed (params: school_id, mode ho|self, owner_name, include_in_reports, reason). Head Office only.
	franchiseHostelBranchModeUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_BRANCH_MODE_UPDATE", "post");
	},

	/*
	 * ======================
	 * FRANCHISE - LEAVE TYPES
	 * ======================
	 */

	// GET franchise/hostel-leave-type-list - Head Office twin of getHostelLeaveTypeList.
	getFranchiseHostelLeaveTypeList: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_LEAVE_TYPE_LIST", "get", true);
	},

	// POST franchise/hostel-leave-type-store - Head Office twin of hostelLeaveTypeStore.
	franchiseHostelLeaveTypeStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_LEAVE_TYPE_STORE", "post");
	},

	// POST franchise/hostel-leave-type-change-status - Head Office twin of hostelLeaveTypeChangeStatus.
	franchiseHostelLeaveTypeChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_LEAVE_TYPE_CHANGE_STATUS", "post");
	},

	// POST franchise/hostel-leave-type-destroy - Head Office twin of hostelLeaveTypeDestroy.
	franchiseHostelLeaveTypeDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_LEAVE_TYPE_DESTROY", "post");
	},

	/*
	 * ======================
	 * FRANCHISE - ROLL CALL SESSIONS
	 * ======================
	 */

	// GET franchise/hostel-rollcall-session-list - Head Office twin of getHostelRollcallSessionList.
	getFranchiseHostelRollcallSessionList: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ROLLCALL_SESSION_LIST", "get", true);
	},

	// POST franchise/hostel-rollcall-session-store - Head Office twin of hostelRollcallSessionStore.
	franchiseHostelRollcallSessionStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ROLLCALL_SESSION_STORE", "post");
	},

	// POST franchise/hostel-rollcall-session-change-status - Head Office twin of hostelRollcallSessionChangeStatus.
	franchiseHostelRollcallSessionChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ROLLCALL_SESSION_CHANGE_STATUS", "post");
	},

	// POST franchise/hostel-rollcall-session-destroy - Head Office twin of hostelRollcallSessionDestroy.
	franchiseHostelRollcallSessionDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ROLLCALL_SESSION_DESTROY", "post");
	},

	/*
	 * ======================
	 * FRANCHISE - MASTERS - ROOM TYPES
	 * ======================
	 */

	// GET franchise/hostel-room-type-table-data - Head Office twin of getHostelRoomTypeTableData.
	getFranchiseHostelRoomTypeTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ROOM_TYPE_TABLE_DATA", "get", true);
	},

	// GET franchise/hostel-room-type-show - Head Office twin of getHostelRoomTypeShow.
	getFranchiseHostelRoomTypeShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ROOM_TYPE_SHOW", "get", true);
	},

	// GET franchise/hostel-room-type-dropdown - Head Office twin of getHostelRoomTypeDropdown.
	getFranchiseHostelRoomTypeDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ROOM_TYPE_DROPDOWN", "get", true);
	},

	// POST franchise/hostel-room-type-store - Head Office twin of hostelRoomTypeStore.
	franchiseHostelRoomTypeStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ROOM_TYPE_STORE", "post");
	},

	// POST franchise/hostel-room-type-update - Head Office twin of hostelRoomTypeUpdate.
	franchiseHostelRoomTypeUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ROOM_TYPE_UPDATE", "post");
	},

	// POST franchise/hostel-room-type-change-status - Head Office twin of hostelRoomTypeChangeStatus.
	franchiseHostelRoomTypeChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ROOM_TYPE_CHANGE_STATUS", "post");
	},

	// POST franchise/hostel-room-type-destroy - Head Office twin of hostelRoomTypeDestroy.
	franchiseHostelRoomTypeDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ROOM_TYPE_DESTROY", "post");
	},

	/*
	 * ======================
	 * FRANCHISE - MASTERS - HOSTEL ITEMS
	 * ======================
	 */

	// GET franchise/hostel-item-table-data - Head Office twin of getHostelItemTableData.
	getFranchiseHostelItemTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ITEM_TABLE_DATA", "get", true);
	},

	// GET franchise/hostel-item-show - Head Office twin of getHostelItemShow.
	getFranchiseHostelItemShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ITEM_SHOW", "get", true);
	},

	// GET franchise/hostel-item-dropdown - Head Office twin of getHostelItemDropdown.
	getFranchiseHostelItemDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ITEM_DROPDOWN", "get", true);
	},

	// GET franchise/hostel-product-dropdown - Head Office twin of getHostelProductDropdown.
	getFranchiseHostelProductDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_PRODUCT_DROPDOWN", "get", true);
	},

	// POST franchise/hostel-item-store - Head Office twin of hostelItemStore.
	franchiseHostelItemStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ITEM_STORE", "post");
	},

	// POST franchise/hostel-item-update - Head Office twin of hostelItemUpdate.
	franchiseHostelItemUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ITEM_UPDATE", "post");
	},

	// POST franchise/hostel-item-change-status - Head Office twin of hostelItemChangeStatus.
	franchiseHostelItemChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ITEM_CHANGE_STATUS", "post");
	},

	// POST franchise/hostel-item-destroy - Head Office twin of hostelItemDestroy.
	franchiseHostelItemDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ITEM_DESTROY", "post");
	},

	/*
	 * ======================
	 * FRANCHISE - MASTERS - MEAL PLANS
	 * ======================
	 */

	// GET franchise/hostel-meal-plan-table-data - Head Office twin of getHostelMealPlanTableData.
	getFranchiseHostelMealPlanTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_MEAL_PLAN_TABLE_DATA", "get", true);
	},

	// GET franchise/hostel-meal-plan-show - Head Office twin of getHostelMealPlanShow.
	getFranchiseHostelMealPlanShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_MEAL_PLAN_SHOW", "get", true);
	},

	// GET franchise/hostel-meal-plan-dropdown - Head Office twin of getHostelMealPlanDropdown.
	getFranchiseHostelMealPlanDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_MEAL_PLAN_DROPDOWN", "get", true);
	},

	// POST franchise/hostel-meal-plan-store - Head Office twin of hostelMealPlanStore.
	franchiseHostelMealPlanStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_MEAL_PLAN_STORE", "post");
	},

	// POST franchise/hostel-meal-plan-update - Head Office twin of hostelMealPlanUpdate.
	franchiseHostelMealPlanUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_MEAL_PLAN_UPDATE", "post");
	},

	// POST franchise/hostel-meal-plan-change-status - Head Office twin of hostelMealPlanChangeStatus.
	franchiseHostelMealPlanChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_MEAL_PLAN_CHANGE_STATUS", "post");
	},

	// POST franchise/hostel-meal-plan-destroy - Head Office twin of hostelMealPlanDestroy.
	franchiseHostelMealPlanDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_MEAL_PLAN_DESTROY", "post");
	},

	/*
	 * ======================
	 * FRANCHISE - MASTERS - ACTIVITY TYPES
	 * ======================
	 */

	// GET franchise/hostel-activity-type-table-data - Head Office twin of getHostelActivityTypeTableData.
	getFranchiseHostelActivityTypeTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ACTIVITY_TYPE_TABLE_DATA", "get", true);
	},

	// GET franchise/hostel-activity-type-show - Head Office twin of getHostelActivityTypeShow.
	getFranchiseHostelActivityTypeShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ACTIVITY_TYPE_SHOW", "get", true);
	},

	// GET franchise/hostel-activity-type-dropdown - Head Office twin of getHostelActivityTypeDropdown.
	getFranchiseHostelActivityTypeDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ACTIVITY_TYPE_DROPDOWN", "get", true);
	},

	// POST franchise/hostel-activity-type-store - Head Office twin of hostelActivityTypeStore.
	franchiseHostelActivityTypeStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ACTIVITY_TYPE_STORE", "post");
	},

	// POST franchise/hostel-activity-type-update - Head Office twin of hostelActivityTypeUpdate.
	franchiseHostelActivityTypeUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ACTIVITY_TYPE_UPDATE", "post");
	},

	// POST franchise/hostel-activity-type-change-status - Head Office twin of hostelActivityTypeChangeStatus.
	franchiseHostelActivityTypeChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ACTIVITY_TYPE_CHANGE_STATUS", "post");
	},

	// POST franchise/hostel-activity-type-destroy - Head Office twin of hostelActivityTypeDestroy.
	franchiseHostelActivityTypeDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_ACTIVITY_TYPE_DESTROY", "post");
	},

	/*
	 * ======================
	 * FRANCHISE - SETUP WIZARD
	 * ======================
	 */

	// POST franchise/hostel-setup-wizard-preview - Head Office twin of hostelSetupWizardPreview.
	franchiseHostelSetupWizardPreview: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_SETUP_WIZARD_PREVIEW", "post");
	},

	// POST franchise/hostel-setup-wizard-publish - Head Office twin of hostelSetupWizardPublish.
	franchiseHostelSetupWizardPublish: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_SETUP_WIZARD_PUBLISH", "post");
	},

	/*
	 * ======================
	 * FRANCHISE - CLASS GROUPS
	 * ======================
	 */

	// GET franchise/hostel-class-dropdown - Head Office twin of getHostelClassDropdown.
	getFranchiseHostelClassDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_CLASS_DROPDOWN", "get", true);
	},

	// GET franchise/hostel-class-group-table-data - Head Office twin of getHostelClassGroupTableData.
	getFranchiseHostelClassGroupTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_CLASS_GROUP_TABLE_DATA", "get", true);
	},

	// GET franchise/hostel-class-group-show - Head Office twin of getHostelClassGroupShow.
	getFranchiseHostelClassGroupShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_CLASS_GROUP_SHOW", "get", true);
	},

	// POST franchise/hostel-class-group-store - Head Office twin of hostelClassGroupStore.
	franchiseHostelClassGroupStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_CLASS_GROUP_STORE", "post");
	},

	// POST franchise/hostel-class-group-update - Head Office twin of hostelClassGroupUpdate.
	franchiseHostelClassGroupUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_CLASS_GROUP_UPDATE", "post");
	},

	// POST franchise/hostel-class-group-change-status - Head Office twin of hostelClassGroupChangeStatus.
	franchiseHostelClassGroupChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_CLASS_GROUP_CHANGE_STATUS", "post");
	},

	// POST franchise/hostel-class-group-destroy - Head Office twin of hostelClassGroupDestroy.
	franchiseHostelClassGroupDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_CLASS_GROUP_DESTROY", "post");
	},

	/*
	 * ======================
	 * FRANCHISE - HOSTELS
	 * ======================
	 */

	// GET franchise/hostel-staff-dropdown - Head Office twin of getHostelStaffDropdown.
	getFranchiseHostelStaffDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_STAFF_DROPDOWN", "get", true);
	},

	// GET franchise/hostel-table-data - Head Office twin of getHostelTableData.
	getFranchiseHostelTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_TABLE_DATA", "get", true);
	},

	// GET franchise/hostel-show - Head Office twin of getHostelShow.
	getFranchiseHostelShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_SHOW", "get", true);
	},

	// GET franchise/hostel-dropdown - Head Office twin of getHostelDropdown.
	getFranchiseHostelDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_DROPDOWN", "get", true);
	},

	// POST franchise/hostel-store - Head Office twin of hostelStore.
	franchiseHostelStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_STORE", "post");
	},

	// POST franchise/hostel-update - Head Office twin of hostelUpdate.
	franchiseHostelUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_UPDATE", "post");
	},

	// POST franchise/hostel-change-status - Head Office twin of hostelChangeStatus.
	franchiseHostelChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_CHANGE_STATUS", "post");
	},

	// POST franchise/hostel-publish - Head Office twin of hostelPublish.
	franchiseHostelPublish: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_PUBLISH", "post");
	},

	// POST franchise/hostel-destroy - Head Office twin of hostelDestroy.
	franchiseHostelDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_DESTROY", "post");
	},

	/*
	 * ======================
	 * FRANCHISE - BLOCKS AND FLOORS
	 * ======================
	 */

	// GET franchise/hostel-block-list - Head Office twin of getHostelBlockList.
	getFranchiseHostelBlockList: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_BLOCK_LIST", "get", true);
	},

	// GET franchise/hostel-block-show - Head Office twin of getHostelBlockShow.
	getFranchiseHostelBlockShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_BLOCK_SHOW", "get", true);
	},

	// POST franchise/hostel-block-store - Head Office twin of hostelBlockStore.
	franchiseHostelBlockStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_BLOCK_STORE", "post");
	},

	// POST franchise/hostel-block-update - Head Office twin of hostelBlockUpdate.
	franchiseHostelBlockUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_BLOCK_UPDATE", "post");
	},

	// POST franchise/hostel-block-change-status - Head Office twin of hostelBlockChangeStatus.
	franchiseHostelBlockChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_BLOCK_CHANGE_STATUS", "post");
	},

	// POST franchise/hostel-block-destroy - Head Office twin of hostelBlockDestroy.
	franchiseHostelBlockDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_BLOCK_DESTROY", "post");
	},

	// POST franchise/hostel-floor-store - Head Office twin of hostelFloorStore.
	franchiseHostelFloorStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_FLOOR_STORE", "post");
	},

	// POST franchise/hostel-floor-update - Head Office twin of hostelFloorUpdate.
	franchiseHostelFloorUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_FLOOR_UPDATE", "post");
	},

	// POST franchise/hostel-floor-destroy - Head Office twin of hostelFloorDestroy.
	franchiseHostelFloorDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_HOSTEL_FLOOR_DESTROY", "post");
	}
};
///////////////////////////Public Functions ENDS////////////////////////////////
