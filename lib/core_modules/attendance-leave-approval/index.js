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

	// GET franchise/attendance-leave-rule-assignment-table-data - Paginated rule assignments listing.
	FranchiseAttendanceLeaveRuleAssignmentTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_RULE_ASSIGNMENT_TABLE_DATA", "get");
	},

	// POST franchise/attendance-leave-rule-assignment-store - Assign a rule to the selected scope.
	FranchiseAttendanceLeaveRuleAssignmentStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_RULE_ASSIGNMENT_STORE", "post");
	},

	/*
	 * ======================
	 * REPORTS - MONTHLY GRID
	 * ======================
	 */

	// GET franchise/attendance-leave-monthly-grid - Monthly attendance grid (params: month, year, designation_id for category filter).
	FranchiseAttendanceLeaveMonthlyGrid: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_MONTHLY_GRID", "get");
	},

	// PUT franchise/attendance-leave-bulk-update-status - Bulk update attendance status for a day range.
	FranchiseAttendanceLeaveBulkUpdateStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_BULK_UPDATE_STATUS", "put");
	},

	/*
	 * ======================
	 * REPORTS - MONTH LOCK
	 * ======================
	 */

	// GET franchise/attendance-leave-month-lock-list - Month lock listing.
	FranchiseAttendanceLeaveMonthLockList: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_MONTH_LOCK_LIST", "get");
	},

	// PUT franchise/attendance-leave-month-lock-lock - Lock a month.
	FranchiseAttendanceLeaveMonthLockLock: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_MONTH_LOCK_LOCK", "put");
	},

	// PUT franchise/attendance-leave-month-lock-unlock - Reopen a locked month (requires reopen_reason).
	FranchiseAttendanceLeaveMonthLockUnlock: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_MONTH_LOCK_UNLOCK", "put");
	},

	/*
	 * ======================
	 * REPORTS - LOP SUMMARY
	 * ======================
	 */

	// GET franchise/attendance-leave-lop-summary - LOP summary per staff per month (params: month, year).
	FranchiseAttendanceLeaveLopSummary: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LOP_SUMMARY", "get");
	},

	/*
	 * ======================
	 * REPORTS - OPENING BALANCES
	 * ======================
	 */

	// GET franchise/attendance-leave-opening-balance-table-data - Opening balances listing (params: leave_year).
	FranchiseAttendanceLeaveOpeningBalanceTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_OPENING_BALANCE_TABLE_DATA", "get");
	},

	// POST franchise/attendance-leave-opening-balance-store - Create an opening balance entry.
	FranchiseAttendanceLeaveOpeningBalanceStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_OPENING_BALANCE_STORE", "post");
	},

	/*
	 * ======================
	 * MANAGE - DAILY MARKING
	 * ======================
	 */

	// PUT franchise/attendance-leave-mark-attendance - Mark attendance for a single staff.
	FranchiseAttendanceLeaveMarkAttendance: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_MARK_ATTENDANCE", "put");
	},

	// PUT franchise/attendance-leave-mark-all-present - Mark all staff present for a day.
	FranchiseAttendanceLeaveMarkAllPresent: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_MARK_ALL_PRESENT", "put");
	},

	// PUT franchise/attendance-leave-mark-remaining-present - Mark remaining unmarked staff present for a day.
	FranchiseAttendanceLeaveMarkRemainingPresent: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_MARK_REMAINING_PRESENT", "put");
	},

	/*
	 * ======================
	 * MANAGE - REGULARISATION
	 * ======================
	 */

	// GET franchise/attendance-leave-regularisation-request-table-data - Regularisation requests listing (params: status, page, perPage).
	FranchiseAttendanceLeaveRegularisationRequestTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_REGULARISATION_REQUEST_TABLE_DATA", "get");
	},

	// PUT franchise/attendance-leave-regularisation-request-approve - Approve a regularisation request.
	FranchiseAttendanceLeaveRegularisationRequestApprove: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_REGULARISATION_REQUEST_APPROVE", "put");
	},

	// PUT franchise/attendance-leave-regularization-request-reject - Reject a regularisation request.
	FranchiseAttendanceLeaveRegularisationRequestReject: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_REGULARISATION_REQUEST_REJECT", "put");
	},

	// PUT franchise/attendance-leave-regularisation-request-bulk-approve - Bulk approve regularisation requests.
	FranchiseAttendanceLeaveRegularisationRequestBulkApprove: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_REGULARISATION_REQUEST_BULK_APPROVE", "put");
	},

	// POST franchise/attendance-leave-regularisation-request-store - Create a regularisation request.
	FranchiseAttendanceLeaveRegularisationRequestStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_REGULARISATION_REQUEST_STORE", "post");
	},

	/*
	 * ======================
	 * MANAGE - LEAVE APPROVAL
	 * ======================
	 */

	// GET franchise/attendance-leave-leave-application-table-data - Leave applications listing (params: status, page, perPage).
	FranchiseAttendanceLeaveLeaveApplicationTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LEAVE_APPLICATION_TABLE_DATA", "get");
	},

	// PUT franchise/attendance-leave-leave-application-bulk-approve - Bulk approve leave applications.
	FranchiseAttendanceLeaveLeaveApplicationBulkApprove: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LEAVE_APPLICATION_BULK_APPROVE", "put");
	},

	// PUT franchise/attendance-leave-leave-application-approve - Approve a leave application.
	FranchiseAttendanceLeaveLeaveApplicationApprove: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LEAVE_APPLICATION_APPROVE", "put");
	},

	// PUT franchise/attendance-leave-leave-application-reject - Reject a leave application.
	FranchiseAttendanceLeaveLeaveApplicationReject: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LEAVE_APPLICATION_REJECT", "put");
	},

	// POST franchise/attendance-leave-leave-application-store - Create a leave application.
	FranchiseAttendanceLeaveLeaveApplicationStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LEAVE_APPLICATION_STORE", "post");
	},

	/*
	 * ======================
	 * APPROVAL MATRIX
	 * ======================
	 */

	// GET franchise/attendance-leave-approval-right-table-data - Approval rights listing (params: school_id).
	FranchiseAttendanceLeaveApprovalRightTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_APPROVAL_RIGHT_TABLE_DATA", "get");
	},

	// POST franchise/attendance-leave-approval-right-store - Create an approval right.
	FranchiseAttendanceLeaveApprovalRightStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_APPROVAL_RIGHT_STORE", "post");
	},

	// PUT franchise/attendance-leave-approval-config-update - Update approval config (fallback approver, levels).
	FranchiseAttendanceLeaveApprovalConfigUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_APPROVAL_CONFIG_UPDATE", "put");
	},

	// DELETE franchise/attendance-leave-approval-right-destroy - Delete an approval right (param: id).
	FranchiseAttendanceLeaveApprovalRightDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_APPROVAL_RIGHT_DESTROY", "delete");
	},

	/*
	 * ======================
	 * ATTENDANCE IMPORT
	 * ======================
	 */

	// GET franchise/attendance-leave-import-template - Download the attendance import template.
	FranchiseAttendanceLeaveImportTemplate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_IMPORT_TEMPLATE", "get");
	},

	// POST franchise/attendance-leave-import-preview - Preview an attendance import file (school_id, attendance_file).
	FranchiseAttendanceLeaveImportPreview: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_IMPORT_PREVIEW", "post");
	},

	// POST franchise/attendance-leave-import-commit - Commit an attendance import file (school_id, attendance_file).
	FranchiseAttendanceLeaveImportCommit: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_IMPORT_COMMIT", "post");
	},
};
///////////////////////////Public Functions ENDS////////////////////////////////
