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
	 * ADMIN - SETTINGS - GENERAL PREFERENCE
	 * ======================
	 */

	// GET attendance-leave-general-preference-show - General preference settings detail.
	AttendanceLeaveGeneralPreferenceShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_GENERAL_PREFERENCE_SHOW", "get");
	},

	// POST attendance-leave-general-preference-set-cutover - Set the cutover month / year.
	AttendanceLeaveGeneralPreferenceSetCutover: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_GENERAL_PREFERENCE_SET_CUTOVER", "put");
	},

	// POST attendance-leave-general-preference-update - Update general preference settings.
	AttendanceLeaveGeneralPreferenceUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_GENERAL_PREFERENCE_UPDATE", "put");
	},

	/*
	 * ======================
	 * ADMIN - RULES - ATTENDANCE
	 * ======================
	 */

	// GET attendance-leave-attendance-rule-table-data - Paginated attendance rules listing.
	AttendanceLeaveAttendanceRuleTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_ATTENDANCE_RULE_TABLE_DATA", "get");
	},

	// GET attendance-leave-attendance-rule-show - Single attendance rule detail for view / edit.
	AttendanceLeaveAttendanceRuleShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_ATTENDANCE_RULE_SHOW", "get");
	},

	// POST attendance-leave-attendance-rule-store - Create a new attendance rule.
	AttendanceLeaveAttendanceRuleStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_ATTENDANCE_RULE_STORE", "post");
	},

	// POST attendance-leave-attendance-rule-update - Update an existing attendance rule.
	AttendanceLeaveAttendanceRuleUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_ATTENDANCE_RULE_UPDATE", "put");
	},

	// POST attendance-leave-attendance-rule-clone - Duplicate an attendance rule.
	AttendanceLeaveAttendanceRuleClone: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_ATTENDANCE_RULE_CLONE", "post");
	},

	// POST attendance-leave-attendance-rule-deactivate - Activate / deactivate an attendance rule.
	AttendanceLeaveAttendanceRuleDeactivate: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_ATTENDANCE_RULE_DEACTIVATE", "post");
	},

	// PUT attendance-leave-attendance-rule-set-status - Activate / inactivate an attendance rule (params: id, status: 'active'|'inactive', confirm: true when inactivating, school_id).
	AttendanceLeaveAttendanceRuleSetStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_ATTENDANCE_RULE_SET_STATUS", "put");
	},

	// PUT attendance-leave-attendance-rule-set-default - Set an attendance rule as the default.
	AttendanceLeaveAttendanceRuleSetDefault: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_ATTENDANCE_RULE_SET_DEFAULT", "put");
	},

	// GET attendance-leave-attendance-rule-version-history - Version history of an attendance rule.
	AttendanceLeaveAttendanceRuleVersionHistory: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_ATTENDANCE_RULE_VERSION_HISTORY", "get");
	},

	/*
	 * ======================
	 * ADMIN - RULES - LEAVE
	 * ======================
	 */

	// GET attendance-leave-leave-rule-table-data - Paginated leave rules listing.
	AttendanceLeaveLeaveRuleTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LEAVE_RULE_TABLE_DATA", "get");
	},

	// GET attendance-leave-leave-rule-show - Single leave rule detail for view / edit.
	AttendanceLeaveLeaveRuleShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LEAVE_RULE_SHOW", "get");
	},

	// POST attendance-leave-leave-rule-store - Create a new leave rule.
	AttendanceLeaveLeaveRuleStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LEAVE_RULE_STORE", "post");
	},

	// POST attendance-leave-leave-rule-update - Update an existing leave rule.
	AttendanceLeaveLeaveRuleUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LEAVE_RULE_UPDATE", "put");
	},

	// POST attendance-leave-leave-rule-deactivate - Activate / deactivate a leave rule.
	AttendanceLeaveLeaveRuleDeactivate: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LEAVE_RULE_DEACTIVATE", "post");
	},

	// PUT attendance-leave-leave-rule-set-status - Activate / inactivate a leave rule (params: id, status: 'active'|'inactive', confirm: true when inactivating, school_id).
	AttendanceLeaveLeaveRuleSetStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LEAVE_RULE_SET_STATUS", "put");
	},

	// PUT attendance-leave-leave-rule-set-default - Set a leave rule as the default.
	AttendanceLeaveLeaveRuleSetDefault: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LEAVE_RULE_SET_DEFAULT", "put");
	},

	// GET attendance-leave-leave-rule-version-history - Version history of a leave rule.
	AttendanceLeaveLeaveRuleVersionHistory: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LEAVE_RULE_VERSION_HISTORY", "get");
	},

	// GET attendance-leave-leave-type-options - Leave type options for dropdowns.
	AttendanceLeaveLeaveTypeOptions: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LEAVE_TYPE_OPTIONS", "get");
	},

	// GET attendance-leave-leave-type-master-list - Master list of leave types.
	AttendanceLeaveLeaveTypeMasterList: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LEAVE_TYPE_MASTER_LIST", "get");
	},

	// POST attendance-leave-leave-type-master-store - Create a master leave type.
	AttendanceLeaveLeaveTypeMasterStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LEAVE_TYPE_MASTER_STORE", "post");
	},

	// PUT attendance-leave-leave-type-master-update - Update a master leave type.
	AttendanceLeaveLeaveTypeMasterUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LEAVE_TYPE_MASTER_UPDATE", "put");
	},

	// DELETE attendance-leave-leave-type-master-destroy - Delete a master leave type.
	AttendanceLeaveLeaveTypeMasterDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LEAVE_TYPE_MASTER_DESTROY", "delete");
	},

	/*
	 * ======================
	 * ADMIN - RULES - ASSIGNMENT
	 * ======================
	 */

	// GET attendance-leave-rule-assignment-table-data - Paginated rule assignments listing.
	AttendanceLeaveRuleAssignmentTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_RULE_ASSIGNMENT_TABLE_DATA", "get");
	},

	// GET attendance-leave-rule-assignment-coverage-counts - Assignment coverage counts (assigned / unassigned) for the rules assignment tab.
	AttendanceLeaveRuleAssignmentCoverageCounts: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_RULE_ASSIGNMENT_COVERAGE_COUNTS", "get");
	},

	// GET attendance-leave-rule-options - Rule options for dropdowns (params: rule_type, school_id).
	AttendanceLeaveRuleOptions: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_RULE_OPTIONS", "get");
	},

	// POST attendance-leave-rule-assignment-store - Assign a rule to the selected scope.
	AttendanceLeaveRuleAssignmentStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_RULE_ASSIGNMENT_STORE", "post");
	},

	// PUT attendance-leave-rule-assignment-bulk-store - Bulk assign a rule to multiple staff.
	AttendanceLeaveRuleAssignmentBulkStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_RULE_ASSIGNMENT_BULK_STORE", "put");
	},

	/*
	 * ======================
	 * ADMIN - REPORTS - MONTHLY GRID
	 * ======================
	 */

	// GET attendance-leave-monthly-grid - Monthly attendance grid (params: month, year, designation_id for category filter).
	AttendanceLeaveMonthlyGrid: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_MONTHLY_GRID", "get");
	},

	// PUT attendance-leave-bulk-update-status - Bulk update attendance status for a day range.
	AttendanceLeaveBulkUpdateStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_BULK_UPDATE_STATUS", "put");
	},

	/*
	 * ======================
	 * ADMIN - REPORTS - MONTH LOCK
	 * ======================
	 */

	// GET attendance-leave-month-lock-list - Month lock listing.
	AttendanceLeaveMonthLockList: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_MONTH_LOCK_LIST", "get");
	},

	// PUT attendance-leave-month-lock-lock - Lock a month.
	AttendanceLeaveMonthLockLock: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_MONTH_LOCK_LOCK", "put");
	},

	// PUT attendance-leave-month-lock-unlock - Reopen a locked month (requires reopen_reason).
	AttendanceLeaveMonthLockUnlock: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_MONTH_LOCK_UNLOCK", "put");
	},

	// GET attendance-leave-month-options - Month options for dropdowns.
	AttendanceLeaveMonthOptions: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_MONTH_OPTIONS", "get");
	},

	/*
	 * ======================
	 * ADMIN - REPORTS - LOP SUMMARY
	 * ======================
	 */

	// GET attendance-leave-lop-summary - LOP summary per staff per month (params: month, year).
	AttendanceLeaveLopSummary: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LOP_SUMMARY", "get");
	},

	// GET attendance-leave-lop-summary-export - Export the LOP summary.
	AttendanceLeaveLopSummaryExport: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LOP_SUMMARY_EXPORT", "get");
	},

	/*
	 * ======================
	 * ADMIN - REPORTS - OPENING BALANCES
	 * ======================
	 */

	// GET attendance-leave-opening-balance-table-data - Opening balances listing (params: leave_year).
	AttendanceLeaveOpeningBalanceTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_OPENING_BALANCE_TABLE_DATA", "get");
	},

	// POST attendance-leave-opening-balance-store - Create an opening balance entry.
	AttendanceLeaveOpeningBalanceStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_OPENING_BALANCE_STORE", "post");
	},

	// PUT attendance-leave-opening-balance-bulk-store - Bulk create opening balance entries.
	AttendanceLeaveOpeningBalanceBulkStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_OPENING_BALANCE_BULK_STORE", "post");
	},

	/*
	 * ======================
	 * ADMIN - MANAGE - DAILY MARKING
	 * ======================
	 */

	// GET attendance-leave-daily-roster - Daily attendance roster for a day.
	AttendanceLeaveDailyRoster: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_DAILY_ROSTER", "get");
	},

	// PUT attendance-leave-mark-attendance - Mark attendance for a single staff.
	AttendanceLeaveMarkAttendance: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_MARK_ATTENDANCE", "put");
	},

	// PUT attendance-leave-mark-all-present - Mark all staff present for a day.
	AttendanceLeaveMarkAllPresent: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_MARK_ALL_PRESENT", "put");
	},

	// PUT attendance-leave-mark-remaining-present - Mark remaining unmarked staff present for a day.
	AttendanceLeaveMarkRemainingPresent: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_MARK_REMAINING_PRESENT", "put");
	},

	// PUT attendance-leave-attendance-clear - Clear marked attendance.
	AttendanceLeaveAttendanceClear: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_ATTENDANCE_CLEAR", "put");
	},

	/*
	 * ======================
	 * ADMIN - MANAGE - REGULARISATION
	 * ======================
	 */

	// GET attendance-leave-regularisation-request-table-data - Regularisation requests listing (params: status, page, perPage).
	AttendanceLeaveRegularisationRequestTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_REGULARISATION_REQUEST_TABLE_DATA", "get");
	},

	// PUT attendance-leave-regularisation-request-approve - Approve a regularisation request.
	AttendanceLeaveRegularisationRequestApprove: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_REGULARISATION_REQUEST_APPROVE", "put");
	},

	// PUT attendance-leave-regularization-request-reject - Reject a regularisation request.
	AttendanceLeaveRegularisationRequestReject: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_REGULARISATION_REQUEST_REJECT", "put");
	},

	// PUT attendance-leave-regularisation-request-bulk-approve - Bulk approve regularisation requests.
	AttendanceLeaveRegularisationRequestBulkApprove: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_REGULARISATION_REQUEST_BULK_APPROVE", "put");
	},

	// POST attendance-leave-regularisation-request-store - Create a regularisation request.
	AttendanceLeaveRegularisationRequestStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_REGULARISATION_REQUEST_STORE", "post");
	},

	/*
	 * ======================
	 * ADMIN - MANAGE - LEAVE APPROVAL
	 * ======================
	 */

	// GET attendance-leave-leave-application-table-data - Leave applications listing (params: status, page, perPage).
	AttendanceLeaveLeaveApplicationTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LEAVE_APPLICATION_TABLE_DATA", "get");
	},

	// PUT attendance-leave-leave-application-bulk-approve - Bulk approve leave applications.
	AttendanceLeaveLeaveApplicationBulkApprove: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LEAVE_APPLICATION_BULK_APPROVE", "put");
	},

	// PUT attendance-leave-leave-application-approve - Approve a leave application.
	AttendanceLeaveLeaveApplicationApprove: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LEAVE_APPLICATION_APPROVE", "put");
	},

	// PUT attendance-leave-leave-application-reject - Reject a leave application.
	AttendanceLeaveLeaveApplicationReject: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LEAVE_APPLICATION_REJECT", "put");
	},

	// POST attendance-leave-leave-application-store - Create a leave application.
	AttendanceLeaveLeaveApplicationStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LEAVE_APPLICATION_STORE", "post");
	},

	// PUT attendance-leave-leave-application-cancel - Cancel a leave application.
	AttendanceLeaveLeaveApplicationCancel: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_LEAVE_APPLICATION_CANCEL", "put");
	},

	/*
	 * ======================
	 * ADMIN - APPROVAL MATRIX
	 * ======================
	 */

	// GET attendance-leave-approval-right-table-data - Approval rights listing (params: school_id).
	AttendanceLeaveApprovalRightTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_APPROVAL_RIGHT_TABLE_DATA", "get");
	},

	// POST attendance-leave-approval-right-store - Create an approval right.
	AttendanceLeaveApprovalRightStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_APPROVAL_RIGHT_STORE", "post");
	},

	// PUT attendance-leave-approval-right-activate - Activate an approval right.
	AttendanceLeaveApprovalRightActivate: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_APPROVAL_RIGHT_ACTIVATE", "put");
	},

	// GET attendance-leave-approval-config-show - Approval config detail (fallback approver, levels).
	AttendanceLeaveApprovalConfigShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_APPROVAL_CONFIG_SHOW", "get");
	},

	// PUT attendance-leave-approval-config-update - Update approval config (fallback approver, levels).
	AttendanceLeaveApprovalConfigUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_APPROVAL_CONFIG_UPDATE", "put");
	},

	// DELETE attendance-leave-approval-right-destroy - Delete an approval right (param: id).
	AttendanceLeaveApprovalRightDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_APPROVAL_RIGHT_DESTROY", "delete");
	},

	/*
	 * ======================
	 * ADMIN - ATTENDANCE IMPORT
	 * ======================
	 */

	// GET attendance-leave-import-template - Download the attendance import template.
	AttendanceLeaveImportTemplate: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_IMPORT_TEMPLATE", "get");
	},

	// POST attendance-leave-import-preview - Preview an attendance import file (school_id, attendance_file).
	AttendanceLeaveImportPreview: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_IMPORT_PREVIEW", "post");
	},

	// POST attendance-leave-import-commit - Commit an attendance import file (school_id, attendance_file).
	AttendanceLeaveImportCommit: function (cb, args) {
		makeRequest(cb, args, "API_URN_ATTENDANCE_LEAVE_IMPORT_COMMIT", "post");
	},

	/*
	 * ======================
	 * FRANCHISE - SETTINGS - GENERAL PREFERENCE
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
	 * FRANCHISE - RULES - ATTENDANCE
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

	// PUT franchise/attendance-leave-attendance-rule-set-status - Activate / inactivate an attendance rule (params: id, status: 'active'|'inactive', confirm: true when inactivating, school_id).
	FranchiseAttendanceLeaveAttendanceRuleSetStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_ATTENDANCE_RULE_SET_STATUS", "put");
	},

	// PUT franchise/attendance-leave-attendance-rule-set-default - Set an attendance rule as the default.
	FranchiseAttendanceLeaveAttendanceRuleSetDefault: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_ATTENDANCE_RULE_SET_DEFAULT", "put");
	},

	// GET franchise/attendance-leave-attendance-rule-version-history - Version history of an attendance rule.
	FranchiseAttendanceLeaveAttendanceRuleVersionHistory: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_ATTENDANCE_RULE_VERSION_HISTORY", "get");
	},

	/*
	 * ======================
	 * FRANCHISE - RULES - LEAVE
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

	// PUT franchise/attendance-leave-leave-rule-set-status - Activate / inactivate a leave rule (params: id, status: 'active'|'inactive', confirm: true when inactivating, school_id).
	FranchiseAttendanceLeaveLeaveRuleSetStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LEAVE_RULE_SET_STATUS", "put");
	},

	// PUT franchise/attendance-leave-leave-rule-set-default - Set a leave rule as the default.
	FranchiseAttendanceLeaveLeaveRuleSetDefault: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LEAVE_RULE_SET_DEFAULT", "put");
	},

	// GET franchise/attendance-leave-leave-rule-version-history - Version history of a leave rule.
	FranchiseAttendanceLeaveLeaveRuleVersionHistory: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LEAVE_RULE_VERSION_HISTORY", "get");
	},

	// GET franchise/attendance-leave-leave-type-options - Leave type options for dropdowns.
	FranchiseAttendanceLeaveLeaveTypeOptions: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LEAVE_TYPE_OPTIONS", "get");
	},

	// GET franchise/attendance-leave-leave-type-master-list - Master list of leave types.
	FranchiseAttendanceLeaveLeaveTypeMasterList: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LEAVE_TYPE_MASTER_LIST", "get");
	},

	// POST franchise/attendance-leave-leave-type-master-store - Create a master leave type.
	FranchiseAttendanceLeaveLeaveTypeMasterStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LEAVE_TYPE_MASTER_STORE", "post");
	},

	// PUT franchise/attendance-leave-leave-type-master-update - Update a master leave type.
	FranchiseAttendanceLeaveLeaveTypeMasterUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LEAVE_TYPE_MASTER_UPDATE", "put");
	},

	// DELETE franchise/attendance-leave-leave-type-master-destroy - Delete a master leave type.
	FranchiseAttendanceLeaveLeaveTypeMasterDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LEAVE_TYPE_MASTER_DESTROY", "delete");
	},

	/*
	 * ======================
	 * FRANCHISE - RULES - ASSIGNMENT
	 * ======================
	 */

	// GET franchise/attendance-leave-rule-assignment-table-data - Paginated rule assignments listing.
	FranchiseAttendanceLeaveRuleAssignmentTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_RULE_ASSIGNMENT_TABLE_DATA", "get");
	},

	// GET franchise/attendance-leave-rule-assignment-coverage-counts - Assignment coverage counts (assigned / unassigned) for the rules assignment tab.
	FranchiseAttendanceLeaveRuleAssignmentCoverageCounts: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_RULE_ASSIGNMENT_COVERAGE_COUNTS", "get");
	},

	// GET franchise/attendance-leave-rule-options - Rule options for dropdowns (params: rule_type, school_id).
	FranchiseAttendanceLeaveRuleOptions: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_RULE_OPTIONS", "get");
	},

	// POST franchise/attendance-leave-rule-assignment-store - Assign a rule to the selected scope.
	FranchiseAttendanceLeaveRuleAssignmentStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_RULE_ASSIGNMENT_STORE", "post");
	},

	// PUT franchise/attendance-leave-rule-assignment-bulk-store - Bulk assign a rule to multiple staff.
	FranchiseAttendanceLeaveRuleAssignmentBulkStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_RULE_ASSIGNMENT_BULK_STORE", "put");
	},

	/*
	 * ======================
	 * FRANCHISE - REPORTS - MONTHLY GRID
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
	 * FRANCHISE - REPORTS - MONTH LOCK
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

	// GET franchise/attendance-leave-month-options - Month options for dropdowns.
	FranchiseAttendanceLeaveMonthOptions: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_MONTH_OPTIONS", "get");
	},

	/*
	 * ======================
	 * FRANCHISE - REPORTS - LOP SUMMARY
	 * ======================
	 */

	// GET franchise/attendance-leave-lop-summary - LOP summary per staff per month (params: month, year).
	FranchiseAttendanceLeaveLopSummary: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LOP_SUMMARY", "get");
	},

	// GET franchise/attendance-leave-lop-summary-export - Export the LOP summary.
	FranchiseAttendanceLeaveLopSummaryExport: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LOP_SUMMARY_EXPORT", "get");
	},

	/*
	 * ======================
	 * FRANCHISE - REPORTS - OPENING BALANCES
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

	// PUT franchise/attendance-leave-opening-balance-bulk-store - Bulk create opening balance entries.
	FranchiseAttendanceLeaveOpeningBalanceBulkStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_OPENING_BALANCE_BULK_STORE", "post");
	},

	/*
	 * ======================
	 * FRANCHISE - MANAGE - DAILY MARKING
	 * ======================
	 */

	// GET franchise/attendance-leave-daily-roster - Daily attendance roster for a day.
	FranchiseAttendanceLeaveDailyRoster: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_DAILY_ROSTER", "get");
	},

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

	// PUT franchise/attendance-leave-attendance-clear - Clear marked attendance.
	FranchiseAttendanceLeaveAttendanceClear: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_ATTENDANCE_CLEAR", "put");
	},

	/*
	 * ======================
	 * FRANCHISE - MANAGE - REGULARISATION
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
	 * FRANCHISE - MANAGE - LEAVE APPROVAL
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

	// PUT franchise/attendance-leave-leave-application-cancel - Cancel a leave application.
	FranchiseAttendanceLeaveLeaveApplicationCancel: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_LEAVE_APPLICATION_CANCEL", "put");
	},

	/*
	 * ======================
	 * FRANCHISE - APPROVAL MATRIX
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

	// PUT franchise/attendance-leave-approval-right-activate - Activate an approval right.
	FranchiseAttendanceLeaveApprovalRightActivate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_APPROVAL_RIGHT_ACTIVATE", "put");
	},

	// GET franchise/attendance-leave-approval-config-show - Approval config detail (fallback approver, levels).
	FranchiseAttendanceLeaveApprovalConfigShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_ATTENDANCE_LEAVE_APPROVAL_CONFIG_SHOW", "get");
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
	 * FRANCHISE - ATTENDANCE IMPORT
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
