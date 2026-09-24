// Info: Contains Core Functions Related to Payroll & Salary
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
	return PayrollSalary;
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
const PayrollSalary = {
	/*
	 * ======================
	 * BRANCH - DASHBOARD
	 * ======================
	 */

	// GET payroll-dashboard - Payroll dashboard overview.
	PayrollDashboard: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_DASHBOARD", "get");
	},

	/*
	 * ======================
	 * BRANCH - UNIT SETTINGS
	 * ======================
	 */

	// GET payroll-unit-settings-show - Payroll unit settings detail.
	PayrollUnitSettingsShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_UNIT_SETTINGS_SHOW", "get");
	},

	// POST payroll-unit-settings-update - Update payroll unit settings.
	PayrollUnitSettingsUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_UNIT_SETTINGS_UPDATE", "post");
	},

	// POST payroll-unit-settings-activate - Activate payroll for a unit.
	PayrollUnitSettingsActivate: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_UNIT_SETTINGS_ACTIVATE", "post");
	},

	// POST payroll-unit-settings-deactivate - Deactivate payroll for a unit.
	PayrollUnitSettingsDeactivate: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_UNIT_SETTINGS_DEACTIVATE", "post");
	},

	/*
	 * ======================
	 * BRANCH - STATUTORY CONFIG
	 * ======================
	 */

	// GET statutory-config-show - Statutory configuration detail.
	StatutoryConfigShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_STATUTORY_CONFIG_SHOW", "get");
	},

	// POST statutory-config-update - Update statutory configuration.
	StatutoryConfigUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_STATUTORY_CONFIG_UPDATE", "post");
	},

	// GET pt-slab-table-data - Paginated professional tax slab listing.
	PtSlabTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_PT_SLAB_TABLE_DATA", "get");
	},

	// POST pt-slab-store - Create / update a professional tax slab.
	PtSlabStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_PT_SLAB_STORE", "post");
	},

	// GET tds-precedence-show - TDS precedence detail.
	TdsPrecedenceShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_TDS_PRECEDENCE_SHOW", "get");
	},

	/*
	 * ======================
	 * BRANCH - SALARY COMPONENTS
	 * ======================
	 */

	// GET salary-component-table-data - Paginated salary components listing.
	SalaryComponentTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_COMPONENT_TABLE_DATA", "get");
	},

	// POST salary-component-store - Create / update a salary component.
	SalaryComponentStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_COMPONENT_STORE", "post");
	},

	// POST salary-component-change-status - Change salary component status.
	SalaryComponentChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_COMPONENT_CHANGE_STATUS", "post");
	},

	/*
	 * ======================
	 * BRANCH - SALARY STRUCTURES
	 * ======================
	 */

	// GET salary-structure-table-data - Paginated salary structures listing.
	SalaryStructureTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_STRUCTURE_TABLE_DATA", "get");
	},

	// GET salary-structure-show - Single salary structure detail for view / edit.
	SalaryStructureShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_STRUCTURE_SHOW", "get");
	},

	// POST salary-structure-store - Create / update a salary structure.
	SalaryStructureStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_STRUCTURE_STORE", "post");
	},

	// POST salary-structure-duplicate - Duplicate a salary structure.
	SalaryStructureDuplicate: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_STRUCTURE_DUPLICATE", "post");
	},

	// POST salary-structure-preview - Preview a salary structure breakup.
	SalaryStructurePreview: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_STRUCTURE_PREVIEW", "post");
	},

	// POST salary-structure-change-status - Change salary structure status.
	SalaryStructureChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_STRUCTURE_CHANGE_STATUS", "post");
	},

	// GET salary-structure-scope-designation-dropdown - Designation list for structure scope dropdown.
	SalaryStructureScopeDesignationDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_STRUCTURE_SCOPE_DESIGNATION_DROPDOWN", "get");
	},

	// GET salary-structure-scope-staff-dropdown - Staff list for structure scope dropdown.
	SalaryStructureScopeStaffDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_STRUCTURE_SCOPE_STAFF_DROPDOWN", "get");
	},

	/*
	 * ======================
	 * BRANCH - STAFF IDENTITY
	 * ======================
	 */

	// GET staff-identity-show - Staff payroll identity detail.
	StaffIdentityShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_IDENTITY_SHOW", "get");
	},

	// POST staff-identity-store - Create / update staff payroll identity.
	StaffIdentityStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_IDENTITY_STORE", "post");
	},

	// GET staff-identity-department-list - Department list for staff identity.
	StaffIdentityDepartmentList: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_IDENTITY_DEPARTMENT_LIST", "get");
	},

	/*
	 * ======================
	 * BRANCH - STAFF SALARY
	 * ======================
	 */

	// GET staff-salary-table-data - Paginated staff salary listing.
	StaffSalaryTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_SALARY_TABLE_DATA", "get");
	},

	// GET staff-salary-show - Single staff salary detail.
	StaffSalaryShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_SALARY_SHOW", "get");
	},

	// POST staff-salary-assign - Assign a salary to a staff.
	StaffSalaryAssign: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_SALARY_ASSIGN", "post");
	},

	// POST staff-salary-bulk-assign - Bulk assign salaries to staff.
	StaffSalaryBulkAssign: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_SALARY_BULK_ASSIGN", "post");
	},

	// POST staff-salary-bulk-preview - Preview a bulk salary assignment.
	StaffSalaryBulkPreview: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_SALARY_BULK_PREVIEW", "post");
	},

	// GET staff-salary-arrears-preview - Preview salary arrears.
	StaffSalaryArrearsPreview: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_SALARY_ARREARS_PREVIEW", "get");
	},

	// GET staff-salary-export - Export staff salary listing.
	StaffSalaryExport: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_SALARY_EXPORT", "get");
	},

	/*
	 * ======================
	 * BRANCH - YTD OPENING
	 * ======================
	 */

	// GET ytd-opening-table-data - Paginated YTD opening balances listing.
	YtdOpeningTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_YTD_OPENING_TABLE_DATA", "get");
	},

	// POST ytd-opening-store - Create / update YTD opening balances.
	YtdOpeningStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_YTD_OPENING_STORE", "post");
	},

	/*
	 * ======================
	 * BRANCH - SALARY ADVANCE
	 * ======================
	 */

	// GET salary-advance-table-data - Paginated salary advances listing.
	SalaryAdvanceTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_ADVANCE_TABLE_DATA", "get");
	},

	// POST salary-advance-store - Create a salary advance.
	SalaryAdvanceStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_ADVANCE_STORE", "post");
	},

	// POST salary-advance-close - Close a salary advance.
	SalaryAdvanceClose: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_ADVANCE_CLOSE", "post");
	},

	/*
	 * ======================
	 * BRANCH - SALARY RUN
	 * ======================
	 */

	// POST salary-run-create - Create a salary run.
	SalaryRunCreate: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_CREATE", "post");
	},

	// GET salary-run-show - Single salary run detail.
	SalaryRunShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_SHOW", "get");
	},

	// POST salary-run-compute - Compute a salary run.
	SalaryRunCompute: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_COMPUTE", "post");
	},

	// GET salary-run-review - Salary run review summary.
	SalaryRunReview: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_REVIEW", "get");
	},

	// POST salary-run-approve - Approve a salary run.
	SalaryRunApprove: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_APPROVE", "post");
	},

	// POST salary-run-send-back - Send back a salary run.
	SalaryRunSendBack: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_SEND_BACK", "post");
	},

	// POST salary-run-reopen - Reopen a salary run.
	SalaryRunReopen: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_REOPEN", "post");
	},

	// POST salary-run-mark-paid - Mark a salary run as paid.
	SalaryRunMarkPaid: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_MARK_PAID", "post");
	},

	// GET salary-run-input-table-data - Paginated salary run inputs listing.
	SalaryRunInputTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_INPUT_TABLE_DATA", "get");
	},

	// POST salary-run-input-update - Update salary run inputs.
	SalaryRunInputUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_INPUT_UPDATE", "post");
	},

	// GET salary-run-item-table-data - Paginated salary run items listing.
	SalaryRunItemTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_ITEM_TABLE_DATA", "get");
	},

	// GET salary-run-item-show - Single salary run item detail.
	SalaryRunItemShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_ITEM_SHOW", "get");
	},

	// GET salary-run-lop-days - LOP days for a salary run.
	SalaryRunLopDays: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_LOP_DAYS", "get");
	},

	// POST salary-run-exception-resolve - Resolve a salary run exception.
	SalaryRunExceptionResolve: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_EXCEPTION_RESOLVE", "post");
	},

	// POST salary-run-variance-acknowledge - Acknowledge a salary run variance.
	SalaryRunVarianceAcknowledge: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_VARIANCE_ACKNOWLEDGE", "post");
	},

	// GET staff-attendance-summary - Staff attendance summary for payroll.
	StaffAttendanceSummary: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_ATTENDANCE_SUMMARY", "get");
	},

	/*
	 * ======================
	 * BRANCH - PAYSLIPS
	 * ======================
	 */

	// GET payslip-table-data - Paginated payslips listing.
	PayslipTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYSLIP_TABLE_DATA", "get");
	},

	// GET payslip-show - Single payslip detail.
	PayslipShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYSLIP_SHOW", "get");
	},

	// GET payslip-download - Download a payslip.
	PayslipDownload: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYSLIP_DOWNLOAD", "get");
	},

	// POST payslip-email - Email a payslip.
	PayslipEmail: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYSLIP_EMAIL", "post");
	},

	// POST payslip-bulk-email - Bulk email payslips.
	PayslipBulkEmail: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYSLIP_BULK_EMAIL", "post");
	},

	// POST payslip-bulk-zip - Generate a bulk payslip zip.
	PayslipBulkZip: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYSLIP_BULK_ZIP", "post");
	},

	// GET payslip-bulk-zip-status - Bulk payslip zip generation status.
	PayslipBulkZipStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYSLIP_BULK_ZIP_STATUS", "get");
	},

	/*
	 * ======================
	 * BRANCH - SALARY TRANSFER SHEET
	 * ======================
	 */

	// GET salary-transfer-sheet - Salary transfer sheet.
	SalaryTransferSheet: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_TRANSFER_SHEET", "get");
	},

	// GET salary-transfer-sheet-export - Export salary transfer sheet.
	SalaryTransferSheetExport: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_TRANSFER_SHEET_EXPORT", "get");
	},

	/*
	 * ======================
	 * BRANCH - FNF SETTLEMENT
	 * ======================
	 */

	// GET fnf-settlement-table-data - Paginated FnF settlements listing.
	FnfSettlementTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FNF_SETTLEMENT_TABLE_DATA", "get");
	},

	// GET fnf-settlement-eligible-staff - Staff eligible for FnF settlement.
	FnfSettlementEligibleStaff: function (cb, args) {
		makeRequest(cb, args, "API_URN_FNF_SETTLEMENT_ELIGIBLE_STAFF", "get");
	},

	// GET fnf-settlement-preview - Preview an FnF settlement.
	FnfSettlementPreview: function (cb, args) {
		makeRequest(cb, args, "API_URN_FNF_SETTLEMENT_PREVIEW", "get");
	},

	// GET fnf-settlement-show - Single FnF settlement detail.
	FnfSettlementShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FNF_SETTLEMENT_SHOW", "get");
	},

	// POST fnf-settlement-store - Create / update an FnF settlement.
	FnfSettlementStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FNF_SETTLEMENT_STORE", "post");
	},

	// POST fnf-settlement-approve - Approve an FnF settlement.
	FnfSettlementApprove: function (cb, args) {
		makeRequest(cb, args, "API_URN_FNF_SETTLEMENT_APPROVE", "post");
	},

	// POST fnf-settlement-reopen - Reopen an FnF settlement.
	FnfSettlementReopen: function (cb, args) {
		makeRequest(cb, args, "API_URN_FNF_SETTLEMENT_REOPEN", "post");
	},

	// POST fnf-settlement-mark-paid - Mark an FnF settlement as paid.
	FnfSettlementMarkPaid: function (cb, args) {
		makeRequest(cb, args, "API_URN_FNF_SETTLEMENT_MARK_PAID", "post");
	},

	/*
	 * ======================
	 * BRANCH - REPORTS
	 * ======================
	 */

	// GET payroll-report-list - Available payroll reports list.
	PayrollReportList: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_REPORT_LIST", "get");
	},

	// GET payroll-report - Payroll report data.
	PayrollReport: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_REPORT", "get");
	},

	// GET payroll-report-export - Export a payroll report.
	PayrollReportExport: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_REPORT_EXPORT", "get");
	},

	/*
	 * ======================
	 * BRANCH - AUDIT LOG
	 * ======================
	 */

	// GET payroll-audit-log-table-data - Paginated payroll audit log listing.
	PayrollAuditLogTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_AUDIT_LOG_TABLE_DATA", "get");
	},

	// GET payroll-audit-log-filter-options - Payroll audit log filter options.
	PayrollAuditLogFilterOptions: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_AUDIT_LOG_FILTER_OPTIONS", "get");
	},

	// GET payroll-audit-log-export - Export payroll audit log.
	PayrollAuditLogExport: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_AUDIT_LOG_EXPORT", "get");
	},

	/*
	 * ======================
	 * FRANCHISE - DASHBOARD
	 * ======================
	 */

	// GET franchise/payroll-dashboard - Payroll dashboard overview.
	FranchisePayrollDashboard: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_DASHBOARD", "get");
	},

	/*
	 * ======================
	 * FRANCHISE - UNIT SETTINGS
	 * ======================
	 */

	// GET franchise/payroll-unit-settings-show - Payroll unit settings detail.
	FranchisePayrollUnitSettingsShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_UNIT_SETTINGS_SHOW", "get");
	},

	// GET franchise/payroll-unit-settings-table-data - Paginated payroll unit settings listing.
	FranchisePayrollUnitSettingsTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_UNIT_SETTINGS_TABLE_DATA", "get");
	},

	// POST franchise/payroll-unit-settings-update - Update payroll unit settings.
	FranchisePayrollUnitSettingsUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_UNIT_SETTINGS_UPDATE", "post");
	},

	// POST franchise/payroll-unit-settings-activate - Activate payroll for a unit.
	FranchisePayrollUnitSettingsActivate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_UNIT_SETTINGS_ACTIVATE", "post");
	},

	// POST franchise/payroll-unit-settings-deactivate - Deactivate payroll for a unit.
	FranchisePayrollUnitSettingsDeactivate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_UNIT_SETTINGS_DEACTIVATE", "post");
	},

	// POST franchise/payroll-unit-settings-ownership-update - Update payroll ownership of a unit.
	FranchisePayrollUnitSettingsOwnershipUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_UNIT_SETTINGS_OWNERSHIP_UPDATE", "post");
	},

	/*
	 * ======================
	 * FRANCHISE - STATUTORY CONFIG
	 * ======================
	 */

	// GET franchise/statutory-config-show - Statutory configuration detail.
	FranchiseStatutoryConfigShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STATUTORY_CONFIG_SHOW", "get");
	},

	// POST franchise/statutory-config-update - Update statutory configuration.
	FranchiseStatutoryConfigUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STATUTORY_CONFIG_UPDATE", "post");
	},

	// GET franchise/pt-slab-table-data - Paginated professional tax slab listing.
	FranchisePtSlabTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PT_SLAB_TABLE_DATA", "get");
	},

	// POST franchise/pt-slab-store - Create / update a professional tax slab.
	FranchisePtSlabStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PT_SLAB_STORE", "post");
	},

	// GET franchise/tds-precedence-show - TDS precedence detail.
	FranchiseTdsPrecedenceShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_TDS_PRECEDENCE_SHOW", "get");
	},

	/*
	 * ======================
	 * FRANCHISE - SALARY COMPONENTS
	 * ======================
	 */

	// GET franchise/salary-component-table-data - Paginated salary components listing.
	FranchiseSalaryComponentTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_COMPONENT_TABLE_DATA", "get");
	},

	// POST franchise/salary-component-store - Create / update a salary component.
	FranchiseSalaryComponentStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_COMPONENT_STORE", "post");
	},

	// POST franchise/salary-component-change-status - Change salary component status.
	FranchiseSalaryComponentChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_COMPONENT_CHANGE_STATUS", "post");
	},

	/*
	 * ======================
	 * FRANCHISE - SALARY STRUCTURES
	 * ======================
	 */

	// GET franchise/salary-structure-table-data - Paginated salary structures listing.
	FranchiseSalaryStructureTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_STRUCTURE_TABLE_DATA", "get");
	},

	// GET franchise/salary-structure-show - Single salary structure detail for view / edit.
	FranchiseSalaryStructureShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_STRUCTURE_SHOW", "get");
	},

	// POST franchise/salary-structure-store - Create / update a salary structure.
	FranchiseSalaryStructureStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_STRUCTURE_STORE", "post");
	},

	// POST franchise/salary-structure-duplicate - Duplicate a salary structure.
	FranchiseSalaryStructureDuplicate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_STRUCTURE_DUPLICATE", "post");
	},

	// POST franchise/salary-structure-preview - Preview a salary structure breakup.
	FranchiseSalaryStructurePreview: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_STRUCTURE_PREVIEW", "post");
	},

	// POST franchise/salary-structure-change-status - Change salary structure status.
	FranchiseSalaryStructureChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_STRUCTURE_CHANGE_STATUS", "post");
	},

	// GET franchise/salary-structure-scope-designation-dropdown - Designation list for structure scope dropdown.
	FranchiseSalaryStructureScopeDesignationDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_STRUCTURE_SCOPE_DESIGNATION_DROPDOWN", "get");
	},

	// GET franchise/salary-structure-scope-staff-dropdown - Staff list for structure scope dropdown.
	FranchiseSalaryStructureScopeStaffDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_STRUCTURE_SCOPE_STAFF_DROPDOWN", "get");
	},

	/*
	 * ======================
	 * FRANCHISE - STAFF IDENTITY
	 * ======================
	 */

	// GET franchise/staff-identity-show - Staff payroll identity detail.
	FranchiseStaffIdentityShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_IDENTITY_SHOW", "get");
	},

	// POST franchise/staff-identity-store - Create / update staff payroll identity.
	FranchiseStaffIdentityStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_IDENTITY_STORE", "post");
	},

	// GET franchise/staff-identity-department-list - Department list for staff identity.
	FranchiseStaffIdentityDepartmentList: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_IDENTITY_DEPARTMENT_LIST", "get");
	},

	/*
	 * ======================
	 * FRANCHISE - STAFF SALARY
	 * ======================
	 */

	// GET franchise/staff-salary-table-data - Paginated staff salary listing.
	FranchiseStaffSalaryTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_SALARY_TABLE_DATA", "get");
	},

	// GET franchise/staff-salary-show - Single staff salary detail.
	FranchiseStaffSalaryShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_SALARY_SHOW", "get");
	},

	// POST franchise/staff-salary-assign - Assign a salary to a staff.
	FranchiseStaffSalaryAssign: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_SALARY_ASSIGN", "post");
	},

	// POST franchise/staff-salary-bulk-assign - Bulk assign salaries to staff.
	FranchiseStaffSalaryBulkAssign: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_SALARY_BULK_ASSIGN", "post");
	},

	// POST franchise/staff-salary-bulk-preview - Preview a bulk salary assignment.
	FranchiseStaffSalaryBulkPreview: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_SALARY_BULK_PREVIEW", "post");
	},

	// GET franchise/staff-salary-arrears-preview - Preview salary arrears.
	FranchiseStaffSalaryArrearsPreview: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_SALARY_ARREARS_PREVIEW", "get");
	},

	// GET franchise/staff-salary-export - Export staff salary listing.
	FranchiseStaffSalaryExport: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_SALARY_EXPORT", "get");
	},

	/*
	 * ======================
	 * FRANCHISE - YTD OPENING
	 * ======================
	 */

	// GET franchise/ytd-opening-table-data - Paginated YTD opening balances listing.
	FranchiseYtdOpeningTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_YTD_OPENING_TABLE_DATA", "get");
	},

	// POST franchise/ytd-opening-store - Create / update YTD opening balances.
	FranchiseYtdOpeningStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_YTD_OPENING_STORE", "post");
	},

	/*
	 * ======================
	 * FRANCHISE - SALARY ADVANCE
	 * ======================
	 */

	// GET franchise/salary-advance-table-data - Paginated salary advances listing.
	FranchiseSalaryAdvanceTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_ADVANCE_TABLE_DATA", "get");
	},

	// POST franchise/salary-advance-store - Create a salary advance.
	FranchiseSalaryAdvanceStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_ADVANCE_STORE", "post");
	},

	// POST franchise/salary-advance-close - Close a salary advance.
	FranchiseSalaryAdvanceClose: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_ADVANCE_CLOSE", "post");
	},

	/*
	 * ======================
	 * FRANCHISE - SALARY RUN
	 * ======================
	 */

	// POST franchise/salary-run-create - Create a salary run.
	FranchiseSalaryRunCreate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_CREATE", "post");
	},

	// GET franchise/salary-run-show - Single salary run detail.
	FranchiseSalaryRunShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_SHOW", "get");
	},

	// POST franchise/salary-run-compute - Compute a salary run.
	FranchiseSalaryRunCompute: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_COMPUTE", "post");
	},

	// GET franchise/salary-run-review - Salary run review summary.
	FranchiseSalaryRunReview: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_REVIEW", "get");
	},

	// POST franchise/salary-run-approve - Approve a salary run.
	FranchiseSalaryRunApprove: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_APPROVE", "post");
	},

	// POST franchise/salary-run-send-back - Send back a salary run.
	FranchiseSalaryRunSendBack: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_SEND_BACK", "post");
	},

	// POST franchise/salary-run-reopen - Reopen a salary run.
	FranchiseSalaryRunReopen: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_REOPEN", "post");
	},

	// POST franchise/salary-run-mark-paid - Mark a salary run as paid.
	FranchiseSalaryRunMarkPaid: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_MARK_PAID", "post");
	},

	// GET franchise/salary-run-input-table-data - Paginated salary run inputs listing.
	FranchiseSalaryRunInputTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_INPUT_TABLE_DATA", "get");
	},

	// POST franchise/salary-run-input-update - Update salary run inputs.
	FranchiseSalaryRunInputUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_INPUT_UPDATE", "post");
	},

	// GET franchise/salary-run-item-table-data - Paginated salary run items listing.
	FranchiseSalaryRunItemTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_ITEM_TABLE_DATA", "get");
	},

	// GET franchise/salary-run-item-show - Single salary run item detail.
	FranchiseSalaryRunItemShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_ITEM_SHOW", "get");
	},

	// GET franchise/salary-run-lop-days - LOP days for a salary run.
	FranchiseSalaryRunLopDays: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_LOP_DAYS", "get");
	},

	// POST franchise/salary-run-exception-resolve - Resolve a salary run exception.
	FranchiseSalaryRunExceptionResolve: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_EXCEPTION_RESOLVE", "post");
	},

	// POST franchise/salary-run-variance-acknowledge - Acknowledge a salary run variance.
	FranchiseSalaryRunVarianceAcknowledge: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_VARIANCE_ACKNOWLEDGE", "post");
	},

	// GET franchise/staff-attendance-summary - Staff attendance summary for payroll.
	FranchiseStaffAttendanceSummary: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_ATTENDANCE_SUMMARY", "get");
	},

	/*
	 * ======================
	 * FRANCHISE - PAYSLIPS
	 * ======================
	 */

	// GET franchise/payslip-table-data - Paginated payslips listing.
	FranchisePayslipTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYSLIP_TABLE_DATA", "get");
	},

	// GET franchise/payslip-show - Single payslip detail.
	FranchisePayslipShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYSLIP_SHOW", "get");
	},

	// GET franchise/payslip-download - Download a payslip.
	FranchisePayslipDownload: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYSLIP_DOWNLOAD", "get");
	},

	// POST franchise/payslip-email - Email a payslip.
	FranchisePayslipEmail: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYSLIP_EMAIL", "post");
	},

	// POST franchise/payslip-bulk-email - Bulk email payslips.
	FranchisePayslipBulkEmail: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYSLIP_BULK_EMAIL", "post");
	},

	// POST franchise/payslip-bulk-zip - Generate a bulk payslip zip.
	FranchisePayslipBulkZip: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYSLIP_BULK_ZIP", "post");
	},

	// GET franchise/payslip-bulk-zip-status - Bulk payslip zip generation status.
	FranchisePayslipBulkZipStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYSLIP_BULK_ZIP_STATUS", "get");
	},

	/*
	 * ======================
	 * FRANCHISE - SALARY TRANSFER SHEET
	 * ======================
	 */

	// GET franchise/salary-transfer-sheet - Salary transfer sheet.
	FranchiseSalaryTransferSheet: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_TRANSFER_SHEET", "get");
	},

	// GET franchise/salary-transfer-sheet-export - Export salary transfer sheet.
	FranchiseSalaryTransferSheetExport: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_TRANSFER_SHEET_EXPORT", "get");
	},

	/*
	 * ======================
	 * FRANCHISE - FNF SETTLEMENT
	 * ======================
	 */

	// GET franchise/fnf-settlement-table-data - Paginated FnF settlements listing.
	FranchiseFnfSettlementTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FNF_SETTLEMENT_TABLE_DATA", "get");
	},

	// GET franchise/fnf-settlement-eligible-staff - Staff eligible for FnF settlement.
	FranchiseFnfSettlementEligibleStaff: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FNF_SETTLEMENT_ELIGIBLE_STAFF", "get");
	},

	// GET franchise/fnf-settlement-preview - Preview an FnF settlement.
	FranchiseFnfSettlementPreview: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FNF_SETTLEMENT_PREVIEW", "get");
	},

	// GET franchise/fnf-settlement-show - Single FnF settlement detail.
	FranchiseFnfSettlementShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FNF_SETTLEMENT_SHOW", "get");
	},

	// POST franchise/fnf-settlement-store - Create / update an FnF settlement.
	FranchiseFnfSettlementStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FNF_SETTLEMENT_STORE", "post");
	},

	// POST franchise/fnf-settlement-approve - Approve an FnF settlement.
	FranchiseFnfSettlementApprove: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FNF_SETTLEMENT_APPROVE", "post");
	},

	// POST franchise/fnf-settlement-reopen - Reopen an FnF settlement.
	FranchiseFnfSettlementReopen: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FNF_SETTLEMENT_REOPEN", "post");
	},

	// POST franchise/fnf-settlement-mark-paid - Mark an FnF settlement as paid.
	FranchiseFnfSettlementMarkPaid: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FNF_SETTLEMENT_MARK_PAID", "post");
	},

	/*
	 * ======================
	 * FRANCHISE - REPORTS
	 * ======================
	 */

	// GET franchise/payroll-report-list - Available payroll reports list.
	FranchisePayrollReportList: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_REPORT_LIST", "get");
	},

	// GET franchise/payroll-report - Payroll report data.
	FranchisePayrollReport: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_REPORT", "get");
	},

	// GET franchise/payroll-report-export - Export a payroll report.
	FranchisePayrollReportExport: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_REPORT_EXPORT", "get");
	},

	/*
	 * ======================
	 * FRANCHISE - AUDIT LOG
	 * ======================
	 */

	// GET franchise/payroll-audit-log-table-data - Paginated payroll audit log listing.
	FranchisePayrollAuditLogTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_AUDIT_LOG_TABLE_DATA", "get");
	},

	// GET franchise/payroll-audit-log-filter-options - Payroll audit log filter options.
	FranchisePayrollAuditLogFilterOptions: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_AUDIT_LOG_FILTER_OPTIONS", "get");
	},

	// GET franchise/payroll-audit-log-export - Export payroll audit log.
	FranchisePayrollAuditLogExport: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_AUDIT_LOG_EXPORT", "get");
	},

	/*
	 * ======================
	 * STAFF SELF-SERVICE
	 * ======================
	 * The server resolves staff_id from the bearer token — never send it.
	 */

	// GET staff/my-payslip-table-data - Own payslips listing.
	StaffMyPayslipTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_MY_PAYSLIP_TABLE_DATA", "get");
	},

	// GET staff/my-payslip-show - Own payslip detail.
	StaffMyPayslipShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_MY_PAYSLIP_SHOW", "get");
	},

	// GET staff/my-payslip-download - Download own payslip.
	StaffMyPayslipDownload: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_MY_PAYSLIP_DOWNLOAD", "get");
	},
};
///////////////////////////Public Functions END//////////////////////////////
