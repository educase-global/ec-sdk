// Info: Contains Core Functions Related to Attendance & Leave Approval
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
	return AttendanceLeaveApproval;
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
const AttendanceLeaveApproval = {
	/*
	 * ======================
	 * SETTINGS - GENERAL PREFERENCE
	 * ======================
	 */

	// GET franchise/attendance-leave-general-preference-show - General preference settings detail.
	FranchiseAttendanceLeaveGeneralPreferenceShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_GENERAL_PREFERENCE_SHOW", "get");
	},

	// POST franchise/attendance-leave-general-preference-set-cutover - Set the cutover month / year.
	FranchiseAttendanceLeaveGeneralPreferenceSetCutover: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_GENERAL_PREFERENCE_SET_CUTOVER", "put");
	},

	// POST franchise/attendance-leave-general-preference-update - Update general preference settings.
	FranchiseAttendanceLeaveGeneralPreferenceUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_GENERAL_PREFERENCE_UPDATE", "put");
	},

	/*
	 * ======================
	 * RULES - ATTENDANCE
	 * ======================
	 */

	// GET franchise/attendance-leave-attendance-rule-table-data - Paginated attendance rules listing.
	FranchiseAttendanceLeaveAttendanceRuleTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_ATTENDANCE_RULE_TABLE_DATA", "get");
	},

	// GET franchise/attendance-leave-attendance-rule-show - Single attendance rule detail for view / edit.
	FranchiseAttendanceLeaveAttendanceRuleShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_ATTENDANCE_RULE_SHOW", "get");
	},

	// POST franchise/attendance-leave-attendance-rule-store - Create a new attendance rule.
	FranchiseAttendanceLeaveAttendanceRuleStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_ATTENDANCE_RULE_STORE", "post");
	},

	// POST franchise/attendance-leave-attendance-rule-update - Update an existing attendance rule.
	FranchiseAttendanceLeaveAttendanceRuleUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_ATTENDANCE_RULE_UPDATE", "put");
	},

	// POST franchise/attendance-leave-attendance-rule-clone - Duplicate an attendance rule.
	FranchiseAttendanceLeaveAttendanceRuleClone: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_ATTENDANCE_RULE_CLONE", "post");
	},

	// POST franchise/attendance-leave-attendance-rule-deactivate - Activate / deactivate an attendance rule.
	FranchiseAttendanceLeaveAttendanceRuleDeactivate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_ATTENDANCE_RULE_DEACTIVATE", "post");
	},

	/*
	 * ======================
	 * RULES - LEAVE
	 * ======================
	 */

	// GET franchise/attendance-leave-leave-rule-table-data - Paginated leave rules listing.
	FranchiseAttendanceLeaveLeaveRuleTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LEAVE_RULE_TABLE_DATA", "get");
	},

	// GET franchise/attendance-leave-leave-rule-show - Single leave rule detail for view / edit.
	FranchiseAttendanceLeaveLeaveRuleShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LEAVE_RULE_SHOW", "get");
	},

	// POST franchise/attendance-leave-leave-rule-store - Create a new leave rule.
	FranchiseAttendanceLeaveLeaveRuleStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LEAVE_RULE_STORE", "post");
	},

	// POST franchise/attendance-leave-leave-rule-update - Update an existing leave rule.
	FranchiseAttendanceLeaveLeaveRuleUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LEAVE_RULE_UPDATE", "put");
	},

	// POST franchise/attendance-leave-leave-rule-deactivate - Activate / deactivate a leave rule.
	FranchiseAttendanceLeaveLeaveRuleDeactivate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LEAVE_RULE_DEACTIVATE", "post");
	},

	/*
	 * ======================
	 * RULES - ASSIGNMENT
	 * ======================
	 */

	// POST franchise/attendance-leave-rule-assignment-store - Assign a rule to the selected scope.
	FranchiseAttendanceLeaveRuleAssignmentStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_RULE_ASSIGNMENT_STORE", "post");
	},
};
///////////////////////////Public Functions ENDS////////////////////////////////
