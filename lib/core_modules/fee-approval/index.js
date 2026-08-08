// Info: Contains Core Functions Related to Franchise Fee Approval
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
	return FeeApproval;
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
const FeeApproval = {
	// GET franchise/fee-approval/approver-dropdown - Approver list for workflow configuration.
	FranchiseFeeApprovalApproverDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_APPROVER_DROPDOWN", "get");
	},

	// GET franchise/fee-approval/workflow-dropdown - Workflow list for request creation / filters.
	FranchiseFeeApprovalWorkflowDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_WORKFLOW_DROPDOWN", "get");
	},

	// GET franchise/fee-approval/audit-list - Audit trail entries.
	FranchiseFeeApprovalAuditList: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_AUDIT_LIST", "get");
	},

	// GET franchise/fee-approval/overview - Fee approval dashboard overview.
	FranchiseFeeApprovalOverview: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_OVERVIEW", "get");
	},

	// GET franchise/fee-approval/config-show - Fetch saved / drafted approval configuration.
	FranchiseFeeApprovalConfigShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_CONFIG_SHOW", "get");
	},

	// POST franchise/fee-approval/config-save-draft - Save approval configuration as draft.
	FranchiseFeeApprovalConfigSaveDraft: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_CONFIG_SAVE_DRAFT", "post");
	},

	// POST franchise/fee-approval/config-publish - Publish approval configuration.
	FranchiseFeeApprovalConfigPublish: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_CONFIG_PUBLISH", "post");
	},

	// GET franchise/fee-approval/config-branch-show - Fetch branch level approval configuration.
	FranchiseFeeApprovalConfigBranchShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_CONFIG_BRANCH_SHOW", "get");
	},

	// POST franchise/fee-approval/config-branch-update - Update branch level approval configuration.
	FranchiseFeeApprovalConfigBranchUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_CONFIG_BRANCH_UPDATE", "post");
	},

	// POST franchise/fee-approval/config-engine-update - Update approval engine configuration.
	FranchiseFeeApprovalConfigEngineUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_CONFIG_ENGINE_UPDATE", "post");
	},

	// POST franchise/fee-approval/config-event-update - Update approval event configuration.
	FranchiseFeeApprovalConfigEventUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_CONFIG_EVENT_UPDATE", "post");
	},

	// GET franchise/fee-approval/workflow-list - Approval workflows listing.
	FranchiseFeeApprovalWorkflowList: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_WORKFLOW_LIST", "get");
	},

	// GET franchise/fee-approval/workflow-show - Single approval workflow detail.
	FranchiseFeeApprovalWorkflowShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_WORKFLOW_SHOW", "get");
	},

	// POST franchise/fee-approval/workflow-store - Create a new approval workflow.
	FranchiseFeeApprovalWorkflowStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_WORKFLOW_STORE", "post");
	},

	// POST franchise/fee-approval/workflow-update - Update an existing approval workflow.
	FranchiseFeeApprovalWorkflowUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_WORKFLOW_UPDATE", "post");
	},

	// GET franchise/fee-approval/request-list - Approval requests listing.
	FranchiseFeeApprovalRequestList: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_REQUEST_LIST", "get");
	},

	// GET franchise/fee-approval/request-show - Single approval request detail.
	FranchiseFeeApprovalRequestShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_REQUEST_SHOW", "get");
	},

	// GET franchise/fee-approval/request-filter-options - Filter options for the request listing.
	FranchiseFeeApprovalRequestFilterOptions: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_REQUEST_FILTER_OPTIONS", "get");
	},

	// POST franchise/fee-approval/request-store - Create a new approval request.
	FranchiseFeeApprovalRequestStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_REQUEST_STORE", "post");
	},

	// POST franchise/fee-approval/request-action - Approve / reject a single request.
	FranchiseFeeApprovalRequestAction: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_REQUEST_ACTION", "post");
	},

	// POST franchise/fee-approval/request-bulk-action - Approve / reject multiple requests.
	FranchiseFeeApprovalRequestBulkAction: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_REQUEST_BULK_ACTION", "post");
	},

	// POST franchise/fee-approval/request-comment-store - Add a comment on a request.
	FranchiseFeeApprovalRequestCommentStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_FRANCHISE_FEE_APPROVAL_REQUEST_COMMENT_STORE", "post");
	},

	// GET fee-approval/request-list - Admin side approval requests listing.
	AdminFeeApprovalRequestList: function (cb, args) {
		makeRequest(cb, args, "API_URN_ADMIN_FEE_APPROVAL_REQUEST_LIST", "get");
	},

	// POST fee-approval/request-withdraw - Admin side withdraw of an approval request.
	AdminFeeApprovalRequestWithdraw: function (cb, args) {
		makeRequest(cb, args, "API_URN_ADMIN_FEE_APPROVAL_REQUEST_WITHDRAW", "post");
	},
};
///////////////////////////Public Functions ENDS////////////////////////////////
