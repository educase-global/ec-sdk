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

/* Payroll runs on the NODE service, so serverType is set here rather than asked of every
 * caller. A screen that forgot it would reach the PHP host, which has no payroll at all —
 * and the failure would look like a missing endpoint rather than a wrong base URL. */
const makeRequest = (cb, args, configKey, method) => {
	// Undefined / null params are dropped: the transport appends whatever it is given
	// to the form body, so an absent filter would otherwise be sent as the string
	// "undefined". A 0 is kept — school_id 0 is the head office, not an empty value.
	const params = { serverType: "node" };
	const supplied = args["params"] || {};
	for (const key in supplied) {
		if (supplied[key] !== undefined && supplied[key] !== null) {
			params[key] = supplied[key];
		}
	}

	/* A local payroll backend, when the app was started with one configured. It bypasses
	 * Commons rather than repointing API_URL_NODEJS_PROD, because that host is shared config:
	 * moving it for payroll would drag every other node-backed module to localhost too. */
	const local_base_url = CONFIG["API_URL_PAYROLL_LOCAL"];
	if (local_base_url) {
		Lib.HttpHandler.fetchJSON(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err, data, http_status);
				}
				cb(false, data, http_status);
			},
			local_base_url + "/" + CONFIG[configKey], method, params, null, args["auth"]
		);
		return;
	}

	Lib.Commons.httpHandler(
		function (err, http_status, http_headers, data) {
			if (err) {
				// The status travels with the error so a screen can tell "you do not have
				// access" (401/403) from "something broke", which the message alone cannot say.
				return cb(err, data, http_status);
			}
			cb(false, data, http_status);
		},
		CONFIG[configKey],
		method,
		params,
		args["auth"],
		// No caching: payroll reads are state a user is about to act on — run status,
		// month locks, approval stage. A five-minute stale read here means approving
		// a run that has already moved on.
		true
	);
};

///////////////////////////Public Functions START//////////////////////////////
const PayrollSalary = {
	/*
	 * ======================
	 * BRANCH SEAT — a school administering its own payroll
	 * ======================
	 */

	// POST fnf-settlement-approve
	FnfSettlementApprove: function (cb, args) {
		makeRequest(cb, args, "API_URN_FNF_SETTLEMENT_APPROVE", "post");
	},
	// GET fnf-settlement-eligible-staff
	FnfSettlementEligibleStaff: function (cb, args) {
		makeRequest(cb, args, "API_URN_FNF_SETTLEMENT_ELIGIBLE_STAFF", "get");
	},
	// POST fnf-settlement-mark-paid
	FnfSettlementMarkPaid: function (cb, args) {
		makeRequest(cb, args, "API_URN_FNF_SETTLEMENT_MARK_PAID", "post");
	},
	// GET fnf-settlement-preview
	FnfSettlementPreview: function (cb, args) {
		makeRequest(cb, args, "API_URN_FNF_SETTLEMENT_PREVIEW", "get");
	},
	// POST fnf-settlement-reopen
	FnfSettlementReopen: function (cb, args) {
		makeRequest(cb, args, "API_URN_FNF_SETTLEMENT_REOPEN", "post");
	},
	// GET fnf-settlement-show
	FnfSettlementShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FNF_SETTLEMENT_SHOW", "get");
	},
	// POST fnf-settlement-store
	FnfSettlementStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FNF_SETTLEMENT_STORE", "post");
	},
	// GET fnf-settlement-table-data
	FnfSettlementTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FNF_SETTLEMENT_TABLE_DATA", "get");
	},
	// GET payroll-audit-log-export
	PayrollAuditLogExport: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_AUDIT_LOG_EXPORT", "get");
	},
	// GET payroll-audit-log-filter-options
	PayrollAuditLogFilterOptions: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_AUDIT_LOG_FILTER_OPTIONS", "get");
	},
	// GET payroll-audit-log-table-data
	PayrollAuditLogTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_AUDIT_LOG_TABLE_DATA", "get");
	},
	// GET payroll-dashboard
	PayrollDashboard: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_DASHBOARD", "get");
	},
	// GET payroll-report
	PayrollReport: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_REPORT", "get");
	},
	// GET payroll-report-export
	PayrollReportExport: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_REPORT_EXPORT", "get");
	},
	// GET payroll-report-list
	PayrollReportList: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_REPORT_LIST", "get");
	},
	// POST payroll-unit-settings-activate
	PayrollUnitSettingsActivate: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_UNIT_SETTINGS_ACTIVATE", "post");
	},
	// POST payroll-unit-settings-deactivate
	PayrollUnitSettingsDeactivate: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_UNIT_SETTINGS_DEACTIVATE", "post");
	},
	// GET payroll-unit-settings-show
	PayrollUnitSettingsShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_UNIT_SETTINGS_SHOW", "get");
	},
	// POST payroll-unit-settings-update
	PayrollUnitSettingsUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYROLL_UNIT_SETTINGS_UPDATE", "post");
	},
	// POST payslip-bulk-email
	PayslipBulkEmail: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYSLIP_BULK_EMAIL", "post");
	},
	// POST payslip-bulk-zip
	PayslipBulkZip: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYSLIP_BULK_ZIP", "post");
	},
	// GET payslip-bulk-zip-status
	PayslipBulkZipStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYSLIP_BULK_ZIP_STATUS", "get");
	},
	// GET payslip-download
	PayslipDownload: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYSLIP_DOWNLOAD", "get");
	},
	// POST payslip-email
	PayslipEmail: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYSLIP_EMAIL", "post");
	},
	// GET payslip-show
	PayslipShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYSLIP_SHOW", "get");
	},
	// GET payslip-table-data
	PayslipTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_PAYSLIP_TABLE_DATA", "get");
	},
	// POST pt-slab-store
	PtSlabStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_PT_SLAB_STORE", "post");
	},
	// GET pt-slab-table-data
	PtSlabTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_PT_SLAB_TABLE_DATA", "get");
	},
	// POST salary-advance-close
	SalaryAdvanceClose: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_ADVANCE_CLOSE", "post");
	},
	// POST salary-advance-store
	SalaryAdvanceStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_ADVANCE_STORE", "post");
	},
	// GET salary-advance-table-data
	SalaryAdvanceTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_ADVANCE_TABLE_DATA", "get");
	},
	// POST salary-component-change-status
	SalaryComponentChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_COMPONENT_CHANGE_STATUS", "post");
	},
	// POST salary-component-store
	SalaryComponentStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_COMPONENT_STORE", "post");
	},
	// GET salary-component-table-data
	SalaryComponentTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_COMPONENT_TABLE_DATA", "get");
	},
	// POST salary-run-approve
	SalaryRunApprove: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_APPROVE", "post");
	},
	// POST salary-run-compute
	SalaryRunCompute: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_COMPUTE", "post");
	},
	// POST salary-run-create
	SalaryRunCreate: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_CREATE", "post");
	},
	// POST salary-run-exception-resolve
	SalaryRunExceptionResolve: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_EXCEPTION_RESOLVE", "post");
	},
	// GET salary-run-input-table-data
	SalaryRunInputTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_INPUT_TABLE_DATA", "get");
	},
	// POST salary-run-input-update
	SalaryRunInputUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_INPUT_UPDATE", "post");
	},
	// GET salary-run-item-show
	SalaryRunItemShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_ITEM_SHOW", "get");
	},
	// GET salary-run-item-table-data
	SalaryRunItemTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_ITEM_TABLE_DATA", "get");
	},
	// GET salary-run-lop-days
	SalaryRunLopDays: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_LOP_DAYS", "get");
	},
	// POST salary-run-mark-paid
	SalaryRunMarkPaid: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_MARK_PAID", "post");
	},
	// POST salary-run-reopen
	SalaryRunReopen: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_REOPEN", "post");
	},
	// GET salary-run-review
	SalaryRunReview: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_REVIEW", "get");
	},
	// POST salary-run-send-back
	SalaryRunSendBack: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_SEND_BACK", "post");
	},
	// GET salary-run-show
	SalaryRunShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_SHOW", "get");
	},
	// POST salary-run-variance-acknowledge
	SalaryRunVarianceAcknowledge: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_RUN_VARIANCE_ACKNOWLEDGE", "post");
	},
	// POST salary-structure-change-status
	SalaryStructureChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_STRUCTURE_CHANGE_STATUS", "post");
	},
	// POST salary-structure-duplicate
	SalaryStructureDuplicate: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_STRUCTURE_DUPLICATE", "post");
	},
	// POST salary-structure-preview
	SalaryStructurePreview: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_STRUCTURE_PREVIEW", "post");
	},
	// GET salary-structure-scope-designation-dropdown
	SalaryStructureScopeDesignationDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_STRUCTURE_SCOPE_DESIGNATION_DROPDOWN", "get");
	},
	// GET salary-structure-scope-staff-dropdown
	SalaryStructureScopeStaffDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_STRUCTURE_SCOPE_STAFF_DROPDOWN", "get");
	},
	// GET salary-structure-show
	SalaryStructureShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_STRUCTURE_SHOW", "get");
	},
	// POST salary-structure-store
	SalaryStructureStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_STRUCTURE_STORE", "post");
	},
	// GET salary-structure-table-data
	SalaryStructureTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_STRUCTURE_TABLE_DATA", "get");
	},
	// GET salary-transfer-sheet
	SalaryTransferSheet: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_TRANSFER_SHEET", "get");
	},
	// GET salary-transfer-sheet-export
	SalaryTransferSheetExport: function (cb, args) {
		makeRequest(cb, args, "API_URN_SALARY_TRANSFER_SHEET_EXPORT", "get");
	},
	// GET staff-attendance-summary
	StaffAttendanceSummary: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_ATTENDANCE_SUMMARY", "get");
	},
	// GET staff-identity-department-list
	StaffIdentityDepartmentList: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_IDENTITY_DEPARTMENT_LIST", "get");
	},
	// GET staff-identity-show
	StaffIdentityShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_IDENTITY_SHOW", "get");
	},
	// POST staff-identity-store
	StaffIdentityStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_IDENTITY_STORE", "post");
	},
	// GET staff-salary-arrears-preview
	StaffSalaryArrearsPreview: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_SALARY_ARREARS_PREVIEW", "get");
	},
	// POST staff-salary-assign
	StaffSalaryAssign: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_SALARY_ASSIGN", "post");
	},
	// POST staff-salary-bulk-assign
	StaffSalaryBulkAssign: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_SALARY_BULK_ASSIGN", "post");
	},
	// POST staff-salary-bulk-preview
	StaffSalaryBulkPreview: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_SALARY_BULK_PREVIEW", "post");
	},
	// GET staff-salary-export
	StaffSalaryExport: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_SALARY_EXPORT", "get");
	},
	// GET staff-salary-show
	StaffSalaryShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_SALARY_SHOW", "get");
	},
	// GET staff-salary-table-data
	StaffSalaryTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_SALARY_TABLE_DATA", "get");
	},
	// GET statutory-config-show
	StatutoryConfigShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_STATUTORY_CONFIG_SHOW", "get");
	},
	// POST statutory-config-update
	StatutoryConfigUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_STATUTORY_CONFIG_UPDATE", "post");
	},
	// GET tds-precedence-show
	TdsPrecedenceShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_TDS_PRECEDENCE_SHOW", "get");
	},
	// POST ytd-opening-store
	YtdOpeningStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_YTD_OPENING_STORE", "post");
	},
	// GET ytd-opening-table-data
	YtdOpeningTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_YTD_OPENING_TABLE_DATA", "get");
	},

	/*
	 * ======================
	 * FRANCHISE (HEAD OFFICE) SEAT — head office and the branches it manages
	 * ======================
	 */

	// POST franchise/fnf-settlement-approve
	FranchiseFnfSettlementApprove: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FNF_SETTLEMENT_APPROVE", "post");
	},
	// GET franchise/fnf-settlement-eligible-staff
	FranchiseFnfSettlementEligibleStaff: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FNF_SETTLEMENT_ELIGIBLE_STAFF", "get");
	},
	// POST franchise/fnf-settlement-mark-paid
	FranchiseFnfSettlementMarkPaid: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FNF_SETTLEMENT_MARK_PAID", "post");
	},
	// GET franchise/fnf-settlement-preview
	FranchiseFnfSettlementPreview: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FNF_SETTLEMENT_PREVIEW", "get");
	},
	// POST franchise/fnf-settlement-reopen
	FranchiseFnfSettlementReopen: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FNF_SETTLEMENT_REOPEN", "post");
	},
	// GET franchise/fnf-settlement-show
	FranchiseFnfSettlementShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FNF_SETTLEMENT_SHOW", "get");
	},
	// POST franchise/fnf-settlement-store
	FranchiseFnfSettlementStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FNF_SETTLEMENT_STORE", "post");
	},
	// GET franchise/fnf-settlement-table-data
	FranchiseFnfSettlementTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FNF_SETTLEMENT_TABLE_DATA", "get");
	},
	// GET franchise/payroll-audit-log-export
	FranchisePayrollAuditLogExport: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_AUDIT_LOG_EXPORT", "get");
	},
	// GET franchise/payroll-audit-log-filter-options
	FranchisePayrollAuditLogFilterOptions: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_AUDIT_LOG_FILTER_OPTIONS", "get");
	},
	// GET franchise/payroll-audit-log-table-data
	FranchisePayrollAuditLogTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_AUDIT_LOG_TABLE_DATA", "get");
	},
	// GET franchise/payroll-dashboard
	FranchisePayrollDashboard: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_DASHBOARD", "get");
	},
	// GET franchise/payroll-report
	FranchisePayrollReport: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_REPORT", "get");
	},
	// GET franchise/payroll-report-export
	FranchisePayrollReportExport: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_REPORT_EXPORT", "get");
	},
	// GET franchise/payroll-report-list
	FranchisePayrollReportList: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_REPORT_LIST", "get");
	},
	// POST franchise/payroll-unit-settings-activate
	FranchisePayrollUnitSettingsActivate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_UNIT_SETTINGS_ACTIVATE", "post");
	},
	// POST franchise/payroll-unit-settings-deactivate
	FranchisePayrollUnitSettingsDeactivate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_UNIT_SETTINGS_DEACTIVATE", "post");
	},
	// POST franchise/payroll-unit-settings-ownership-update
	FranchisePayrollUnitSettingsOwnershipUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_UNIT_SETTINGS_OWNERSHIP_UPDATE", "post");
	},
	// GET franchise/payroll-unit-settings-show
	FranchisePayrollUnitSettingsShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_UNIT_SETTINGS_SHOW", "get");
	},
	// GET franchise/payroll-unit-settings-table-data
	FranchisePayrollUnitSettingsTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_UNIT_SETTINGS_TABLE_DATA", "get");
	},
	// POST franchise/payroll-unit-settings-update
	FranchisePayrollUnitSettingsUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYROLL_UNIT_SETTINGS_UPDATE", "post");
	},
	// POST franchise/payslip-bulk-email
	FranchisePayslipBulkEmail: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYSLIP_BULK_EMAIL", "post");
	},
	// POST franchise/payslip-bulk-zip
	FranchisePayslipBulkZip: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYSLIP_BULK_ZIP", "post");
	},
	// GET franchise/payslip-bulk-zip-status
	FranchisePayslipBulkZipStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYSLIP_BULK_ZIP_STATUS", "get");
	},
	// GET franchise/payslip-download
	FranchisePayslipDownload: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYSLIP_DOWNLOAD", "get");
	},
	// POST franchise/payslip-email
	FranchisePayslipEmail: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYSLIP_EMAIL", "post");
	},
	// GET franchise/payslip-show
	FranchisePayslipShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYSLIP_SHOW", "get");
	},
	// GET franchise/payslip-table-data
	FranchisePayslipTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PAYSLIP_TABLE_DATA", "get");
	},
	// POST franchise/pt-slab-store
	FranchisePtSlabStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PT_SLAB_STORE", "post");
	},
	// GET franchise/pt-slab-table-data
	FranchisePtSlabTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_PT_SLAB_TABLE_DATA", "get");
	},
	// POST franchise/salary-advance-close
	FranchiseSalaryAdvanceClose: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_ADVANCE_CLOSE", "post");
	},
	// POST franchise/salary-advance-store
	FranchiseSalaryAdvanceStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_ADVANCE_STORE", "post");
	},
	// GET franchise/salary-advance-table-data
	FranchiseSalaryAdvanceTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_ADVANCE_TABLE_DATA", "get");
	},
	// POST franchise/salary-component-change-status
	FranchiseSalaryComponentChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_COMPONENT_CHANGE_STATUS", "post");
	},
	// POST franchise/salary-component-store
	FranchiseSalaryComponentStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_COMPONENT_STORE", "post");
	},
	// GET franchise/salary-component-table-data
	FranchiseSalaryComponentTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_COMPONENT_TABLE_DATA", "get");
	},
	// POST franchise/salary-run-approve
	FranchiseSalaryRunApprove: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_APPROVE", "post");
	},
	// POST franchise/salary-run-compute
	FranchiseSalaryRunCompute: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_COMPUTE", "post");
	},
	// POST franchise/salary-run-create
	FranchiseSalaryRunCreate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_CREATE", "post");
	},
	// POST franchise/salary-run-exception-resolve
	FranchiseSalaryRunExceptionResolve: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_EXCEPTION_RESOLVE", "post");
	},
	// GET franchise/salary-run-input-table-data
	FranchiseSalaryRunInputTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_INPUT_TABLE_DATA", "get");
	},
	// POST franchise/salary-run-input-update
	FranchiseSalaryRunInputUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_INPUT_UPDATE", "post");
	},
	// GET franchise/salary-run-item-show
	FranchiseSalaryRunItemShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_ITEM_SHOW", "get");
	},
	// GET franchise/salary-run-item-table-data
	FranchiseSalaryRunItemTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_ITEM_TABLE_DATA", "get");
	},
	// GET franchise/salary-run-lop-days
	FranchiseSalaryRunLopDays: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_LOP_DAYS", "get");
	},
	// POST franchise/salary-run-mark-paid
	FranchiseSalaryRunMarkPaid: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_MARK_PAID", "post");
	},
	// POST franchise/salary-run-reopen
	FranchiseSalaryRunReopen: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_REOPEN", "post");
	},
	// GET franchise/salary-run-review
	FranchiseSalaryRunReview: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_REVIEW", "get");
	},
	// POST franchise/salary-run-send-back
	FranchiseSalaryRunSendBack: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_SEND_BACK", "post");
	},
	// GET franchise/salary-run-show
	FranchiseSalaryRunShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_SHOW", "get");
	},
	// POST franchise/salary-run-variance-acknowledge
	FranchiseSalaryRunVarianceAcknowledge: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_RUN_VARIANCE_ACKNOWLEDGE", "post");
	},
	// POST franchise/salary-structure-change-status
	FranchiseSalaryStructureChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_STRUCTURE_CHANGE_STATUS", "post");
	},
	// POST franchise/salary-structure-duplicate
	FranchiseSalaryStructureDuplicate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_STRUCTURE_DUPLICATE", "post");
	},
	// POST franchise/salary-structure-preview
	FranchiseSalaryStructurePreview: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_STRUCTURE_PREVIEW", "post");
	},
	// GET franchise/salary-structure-scope-designation-dropdown
	FranchiseSalaryStructureScopeDesignationDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_STRUCTURE_SCOPE_DESIGNATION_DROPDOWN", "get");
	},
	// GET franchise/salary-structure-scope-staff-dropdown
	FranchiseSalaryStructureScopeStaffDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_STRUCTURE_SCOPE_STAFF_DROPDOWN", "get");
	},
	// GET franchise/salary-structure-show
	FranchiseSalaryStructureShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_STRUCTURE_SHOW", "get");
	},
	// POST franchise/salary-structure-store
	FranchiseSalaryStructureStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_STRUCTURE_STORE", "post");
	},
	// GET franchise/salary-structure-table-data
	FranchiseSalaryStructureTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_STRUCTURE_TABLE_DATA", "get");
	},
	// GET franchise/salary-transfer-sheet
	FranchiseSalaryTransferSheet: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_TRANSFER_SHEET", "get");
	},
	// GET franchise/salary-transfer-sheet-export
	FranchiseSalaryTransferSheetExport: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_SALARY_TRANSFER_SHEET_EXPORT", "get");
	},
	// GET franchise/staff-attendance-summary
	FranchiseStaffAttendanceSummary: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_ATTENDANCE_SUMMARY", "get");
	},
	// GET franchise/staff-identity-department-list
	FranchiseStaffIdentityDepartmentList: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_IDENTITY_DEPARTMENT_LIST", "get");
	},
	// GET franchise/staff-identity-show
	FranchiseStaffIdentityShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_IDENTITY_SHOW", "get");
	},
	// POST franchise/staff-identity-store
	FranchiseStaffIdentityStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_IDENTITY_STORE", "post");
	},
	// GET franchise/staff-salary-arrears-preview
	FranchiseStaffSalaryArrearsPreview: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_SALARY_ARREARS_PREVIEW", "get");
	},
	// POST franchise/staff-salary-assign
	FranchiseStaffSalaryAssign: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_SALARY_ASSIGN", "post");
	},
	// POST franchise/staff-salary-bulk-assign
	FranchiseStaffSalaryBulkAssign: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_SALARY_BULK_ASSIGN", "post");
	},
	// POST franchise/staff-salary-bulk-preview
	FranchiseStaffSalaryBulkPreview: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_SALARY_BULK_PREVIEW", "post");
	},
	// GET franchise/staff-salary-export
	FranchiseStaffSalaryExport: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_SALARY_EXPORT", "get");
	},
	// GET franchise/staff-salary-show
	FranchiseStaffSalaryShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_SALARY_SHOW", "get");
	},
	// GET franchise/staff-salary-table-data
	FranchiseStaffSalaryTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STAFF_SALARY_TABLE_DATA", "get");
	},
	// GET franchise/statutory-config-show
	FranchiseStatutoryConfigShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STATUTORY_CONFIG_SHOW", "get");
	},
	// POST franchise/statutory-config-update
	FranchiseStatutoryConfigUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_STATUTORY_CONFIG_UPDATE", "post");
	},
	// GET franchise/tds-precedence-show
	FranchiseTdsPrecedenceShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_TDS_PRECEDENCE_SHOW", "get");
	},
	// POST franchise/ytd-opening-store
	FranchiseYtdOpeningStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_YTD_OPENING_STORE", "post");
	},
	// GET franchise/ytd-opening-table-data
	FranchiseYtdOpeningTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_YTD_OPENING_TABLE_DATA", "get");
	},

	/*
	 * ======================
	 * STAFF SELF-SERVICE — identity comes from the token; never send a staff_id
	 * ======================
	 */

	// GET staff/my-payslip-download
	StaffMyPayslipDownload: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_MY_PAYSLIP_DOWNLOAD", "get");
	},
	// GET staff/my-payslip-show
	StaffMyPayslipShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_MY_PAYSLIP_SHOW", "get");
	},
	// GET staff/my-payslip-table-data
	StaffMyPayslipTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_STAFF_MY_PAYSLIP_TABLE_DATA", "get");
	},

};
///////////////////////////Public Functions END//////////////////////////////
