// Info: Contains Core Functions Related to Support Desk (tickets between a franchiser's HQ and its branches)
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
	// Shared Dependencies (Managed by Main Entry Module)
	Lib = shared_libs;

	// Module Configuration
	CONFIG = config;

	// Export Public Funtions of this module
	return SupportDesk;
};

//////////////////////////// Module-Loader END /////////////////////////////////

// Every Support Desk read is per-user and changes under other people's hands (a ticket
// thread, the counts), so noCache is forced on, as in zoho-desk:
// the SDK's 5-minute GET cache is not keyed by user and survives reloads, which would
// show one login's tickets to the next one on the same browser and hide new replies.
const makeRequest = (cb, args, configKey) => {
	const params = args["params"];
	Lib.Commons.httpHandler(
		function (err, http_status, http_headers, data) {
			if (err) {
				return cb(err);
			}
			cb(false, data);
		},
		CONFIG[configKey], // api urn
		"get", // method
		params, // request-params
		args["auth"], // auth
		true // noCache
	);
};

// Writes go out as multipart POSTs, like every other write in the SDK. Files sit in
// params under their own keys (attachment[0], attachment[1], ..., field_<field_key>).
const makeWrite = (cb, args, configKey) => {
	Lib.Commons.httpHandler(
		function (err, http_status, http_headers, data) {
			if (err) {
				return cb(err);
			}
			cb(false, data);
		},
		CONFIG[configKey], // api urn
		"post", // method
		args["params"], // request-params
		args["auth"] // auth
	);
};

///////////////////////////Public Functions START//////////////////////////////
const SupportDesk = {
	/*
	 * ======================
	 * CONTEXT AND DASHBOARD
	 * ======================
	 */

	// GET franchise/support-desk-context - Who the signed-in HQ user is on the desk, their tabs, the policy and option lists.
	getSupportDeskContextFranchise: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_CONTEXT_FRANCHISE");
	},

	// GET support-desk-context - The same for a branch login.
	getSupportDeskContextAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_CONTEXT_ADMIN");
	},

	// GET franchise/support-desk-dashboard - Role-specific dashboard (franchiser admin / team lead / team member).
	getSupportDeskDashboardFranchise: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_DASHBOARD_FRANCHISE");
	},

	// GET support-desk-dashboard - Branch dashboard.
	getSupportDeskDashboardAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_DASHBOARD_ADMIN");
	},

	/*
	 * ======================
	 * TICKETS
	 * ======================
	 */

	// GET franchise/support-desk-ticket-table-data - Paginated tickets (params: view, status, priority, category_id, tier_id, school_id, search, page, perPage).
	getSupportDeskTicketTableDataFranchise: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_TICKET_TABLE_DATA_FRANCHISE");
	},

	// GET support-desk-ticket-table-data - Paginated tickets of the branch (params: view, status, priority, category_id, search, page, perPage).
	getSupportDeskTicketTableDataAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_TICKET_TABLE_DATA_ADMIN");
	},

	// GET franchise/support-desk-ticket-view-counts - Count of every list view and team queue.
	getSupportDeskTicketViewCountsFranchise: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_TICKET_VIEW_COUNTS_FRANCHISE");
	},

	// GET support-desk-ticket-view-counts - Count of every branch list view.
	getSupportDeskTicketViewCountsAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_TICKET_VIEW_COUNTS_ADMIN");
	},

	// GET franchise/support-desk-ticket-show - One ticket with its thread, actions and options (params: id).
	getSupportDeskTicketShowFranchise: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_TICKET_SHOW_FRANCHISE");
	},

	// GET support-desk-ticket-show - One branch ticket (params: id).
	getSupportDeskTicketShowAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_TICKET_SHOW_ADMIN");
	},

	// GET franchise/support-desk-raise-form - A category's ticket form and where it goes (params: category_id, school_id).
	getSupportDeskRaiseFormFranchise: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_RAISE_FORM_FRANCHISE");
	},

	// GET support-desk-raise-form - A category's ticket form and the HQ team it routes to (params: category_id).
	getSupportDeskRaiseFormAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_RAISE_FORM_ADMIN");
	},

	// GET franchise/support-desk-student-dropdown - A branch's students for a Student field (params: school_id, search).
	getSupportDeskStudentDropdownFranchise: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_STUDENT_DROPDOWN_FRANCHISE");
	},

	// GET support-desk-student-dropdown - The branch's own students (params: search).
	getSupportDeskStudentDropdownAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_STUDENT_DROPDOWN_ADMIN");
	},

	// POST franchise/support-desk-ticket-store - HQ raises a ticket for a branch (params: school_id, category_id, subject, description, priority, fields, attachment[i], field_<key>).
	supportDeskTicketStoreFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_STORE_FRANCHISE");
	},

	// POST support-desk-ticket-store - The branch raises a ticket for HQ (params: category_id, subject, description, priority, fields, attachment[i], field_<key>).
	supportDeskTicketStoreAdmin: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_STORE_ADMIN");
	},

	// POST franchise/support-desk-ticket-entry-store - Reply or internal note (params: id, mode, body, after, attachment[i]).
	supportDeskTicketEntryStoreFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_ENTRY_STORE_FRANCHISE");
	},

	// POST support-desk-ticket-entry-store - Reply or branch note (params: id, mode, body, after, attachment[i]).
	supportDeskTicketEntryStoreAdmin: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_ENTRY_STORE_ADMIN");
	},

	// POST franchise/support-desk-ticket-assign - Pick up, assign or unassign (params: id, assignee_user_id; blank = unassign).
	supportDeskTicketAssignFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_ASSIGN_FRANCHISE");
	},

	// POST support-desk-ticket-assign - Pick up, assign or unassign an HQ request (params: id, assignee_user_id).
	supportDeskTicketAssignAdmin: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_ASSIGN_ADMIN");
	},

	// POST franchise/support-desk-ticket-priority-update - Change priority (params: id, priority).
	supportDeskTicketPriorityUpdateFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_PRIORITY_UPDATE_FRANCHISE");
	},

	// POST support-desk-ticket-priority-update - Change priority (params: id, priority).
	supportDeskTicketPriorityUpdateAdmin: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_PRIORITY_UPDATE_ADMIN");
	},

	// POST franchise/support-desk-ticket-team-update - Move a branch ticket to another HQ team (params: id, team_id).
	supportDeskTicketTeamUpdateFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_TEAM_UPDATE_FRANCHISE");
	},

	// POST franchise/support-desk-ticket-start - Mark In Progress (params: id).
	supportDeskTicketStartFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_START_FRANCHISE");
	},

	// POST support-desk-ticket-start - Mark In Progress (params: id).
	supportDeskTicketStartAdmin: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_START_ADMIN");
	},

	// POST franchise/support-desk-ticket-wait - Set Waiting for Branch / HQ (params: id).
	supportDeskTicketWaitFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_WAIT_FRANCHISE");
	},

	// POST support-desk-ticket-wait - Set Waiting for Franchiser (params: id).
	supportDeskTicketWaitAdmin: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_WAIT_ADMIN");
	},

	// POST franchise/support-desk-ticket-resolve - Resolve with a summary (params: id, summary).
	supportDeskTicketResolveFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_RESOLVE_FRANCHISE");
	},

	// POST support-desk-ticket-resolve - Resolve with a summary (params: id, summary).
	supportDeskTicketResolveAdmin: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_RESOLVE_ADMIN");
	},

	// POST franchise/support-desk-ticket-confirm - Confirm the resolution and close (params: id).
	supportDeskTicketConfirmFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_CONFIRM_FRANCHISE");
	},

	// POST support-desk-ticket-confirm - Confirm the resolution and close (params: id).
	supportDeskTicketConfirmAdmin: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_CONFIRM_ADMIN");
	},

	// POST franchise/support-desk-ticket-reopen - Reopen a resolved ticket (params: id, reason).
	supportDeskTicketReopenFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_REOPEN_FRANCHISE");
	},

	// POST support-desk-ticket-reopen - Reopen a resolved ticket (params: id, reason).
	supportDeskTicketReopenAdmin: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_REOPEN_ADMIN");
	},

	// POST franchise/support-desk-ticket-cancel - Cancel (params: id, reason, note).
	supportDeskTicketCancelFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_CANCEL_FRANCHISE");
	},

	// POST support-desk-ticket-cancel - Cancel (params: id, reason, note).
	supportDeskTicketCancelAdmin: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TICKET_CANCEL_ADMIN");
	},

	/*
	 * ======================
	 * ACTIVITY LOG
	 * ======================
	 */

	// GET franchise/support-desk-activity-table-data - Activity feed, 40 per page (params: range, type, school_id, search, page, perPage).
	getSupportDeskActivityTableDataFranchise: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_ACTIVITY_TABLE_DATA_FRANCHISE");
	},

	// GET support-desk-activity-table-data - Branch activity feed (params: range, type, search, page, perPage).
	getSupportDeskActivityTableDataAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_ACTIVITY_TABLE_DATA_ADMIN");
	},

	// GET franchise/support-desk-activity-export - The feed's rows for CSV (params: range, type, school_id, search).
	getSupportDeskActivityExportFranchise: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_ACTIVITY_EXPORT_FRANCHISE");
	},

	// GET support-desk-activity-export - The branch feed's rows for CSV (params: range, type, search).
	getSupportDeskActivityExportAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_ACTIVITY_EXPORT_ADMIN");
	},

	/*
	 * ======================
	 * REPORTS (franchise)
	 * ======================
	 */

	// GET franchise/support-desk-report - KPIs, chart, tables (params: range 7d | 30d | 90d).
	getSupportDeskReportFranchise: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_REPORT_FRANCHISE");
	},

	// GET franchise/support-desk-report-export - The range's tickets for CSV (params: range).
	getSupportDeskReportExportFranchise: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_REPORT_EXPORT_FRANCHISE");
	},

	/*
	 * ======================
	 * CONFIGURATION — CATEGORIES (franchise)
	 * ======================
	 */

	// GET franchise/support-desk-category-list - Categories with routing, form and ticket counts.
	getSupportDeskCategoryListFranchise: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_CATEGORY_LIST_FRANCHISE");
	},

	// GET franchise/support-desk-category-show - One category for the editor (params: id).
	getSupportDeskCategoryShowFranchise: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_CATEGORY_SHOW_FRANCHISE");
	},

	// POST franchise/support-desk-category-store - Add a category from the create form (starts switched off).
	supportDeskCategoryStoreFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_CATEGORY_STORE_FRANCHISE");
	},

	// POST franchise/support-desk-category-update - Save the editor (params: id, name, description, icon, raised_by, team_id, default_priority, fields).
	supportDeskCategoryUpdateFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_CATEGORY_UPDATE_FRANCHISE");
	},

	// POST franchise/support-desk-category-change-status - Switch on / off (params: id, is_active 0 | 1).
	supportDeskCategoryChangeStatusFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_CATEGORY_CHANGE_STATUS_FRANCHISE");
	},

	// POST franchise/support-desk-category-destroy - Delete an unused category (params: id).
	supportDeskCategoryDestroyFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_CATEGORY_DESTROY_FRANCHISE");
	},

	// POST franchise/support-desk-category-team-update - Route a category to a team (params: id, team_id).
	supportDeskCategoryTeamUpdateFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_CATEGORY_TEAM_UPDATE_FRANCHISE");
	},

	/*
	 * ======================
	 * CONFIGURATION — TEAMS (franchise)
	 * ======================
	 */

	// GET franchise/support-desk-hq-user-dropdown - HQ users a team can include.
	getSupportDeskHqUserDropdownFranchise: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_HQ_USER_DROPDOWN_FRANCHISE");
	},

	// GET franchise/support-desk-team-list - Teams with lead, members, categories and open counts.
	getSupportDeskTeamListFranchise: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_TEAM_LIST_FRANCHISE");
	},

	// GET franchise/support-desk-team-show - One team for the detail screen (params: id).
	getSupportDeskTeamShowFranchise: function (cb, args) {
		makeRequest(cb, args, "API_URN_SUPPORT_DESK_TEAM_SHOW_FRANCHISE");
	},

	// POST franchise/support-desk-team-store - Add a team (params: name, lead_user_id, member_user_ids, assign_mode).
	supportDeskTeamStoreFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TEAM_STORE_FRANCHISE");
	},

	// POST franchise/support-desk-team-update - Rename a team (params: id, name).
	supportDeskTeamUpdateFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TEAM_UPDATE_FRANCHISE");
	},

	// POST franchise/support-desk-team-destroy - Delete an unused team (params: id).
	supportDeskTeamDestroyFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TEAM_DESTROY_FRANCHISE");
	},

	// POST franchise/support-desk-team-member-store - Add a person (params: id, user_id).
	supportDeskTeamMemberStoreFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TEAM_MEMBER_STORE_FRANCHISE");
	},

	// POST franchise/support-desk-team-member-destroy - Remove a person (params: id, user_id).
	supportDeskTeamMemberDestroyFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TEAM_MEMBER_DESTROY_FRANCHISE");
	},

	// POST franchise/support-desk-team-lead-update - Make someone the lead (params: id, user_id).
	supportDeskTeamLeadUpdateFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TEAM_LEAD_UPDATE_FRANCHISE");
	},

	// POST franchise/support-desk-team-assign-mode-update - Lead assigns / Auto-assign (params: id, assign_mode manual | round).
	supportDeskTeamAssignModeUpdateFranchise: function (cb, args) {
		makeWrite(cb, args, "API_URN_SUPPORT_DESK_TEAM_ASSIGN_MODE_UPDATE_FRANCHISE");
	},
};
///////////////////////////Public Functions ENDS////////////////////////////////
