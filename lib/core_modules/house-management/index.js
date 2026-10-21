// Info: Contains Core Functions Related to House Management (houses, house assignment, events, participants, judging, results, House Cup)
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
	return HouseManagement;
};

//////////////////////////// Module-Loader END /////////////////////////////////

// Every House Management API is on the Node server: callers pass serverType: "node" in params.
// Most reads are scoped to the caller's house roles (a House Head sees only their house, a judge only
// their own codes, My Access is the caller's own rights) and change while people work.
// The SDK's 5-minute GET cache is keyed by url + params, not by user, so those reads pass noCache;
// only the school-wide dropdowns (classes, blocks, categories, houses) use the cache.
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
const HouseManagement = {
	/*
	 * ======================
	 * SETTINGS
	 * ======================
	 */

	// GET house-setting-show - Every module setting: auto-assign, deadline lead times, coordinators, categories, blocks with classes and Activity In-Charge, points rule (one row per house). Coordinator only.
	getHouseSettingShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_SETTING_SHOW", "get", true);
	},

	// POST house-setting-update - Saves every module setting in one call (params: auto_assign_status, circular_due_days, participant_due_days, stage_due_days, coordinator_data, category_data, block_data, point_data; lists as JSON strings).
	houseSettingUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_SETTING_UPDATE", "post");
	},

	// GET house-class-dropdown - Every active class of the school, for the Settings block editor. Coordinator only.
	getHouseClassDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_CLASS_DROPDOWN", "get", false);
	},

	// GET house-block-dropdown - Blocks with their classes and Activity In-Charge, for in-charge rows, the event form and filters.
	getHouseBlockDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_BLOCK_DROPDOWN", "get", false);
	},

	// GET house-category-dropdown - Event categories with colours, for the event form and filters.
	getHouseCategoryDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_CATEGORY_DROPDOWN", "get", false);
	},

	/*
	 * ======================
	 * WHO IS WHO (ACCESS AND ROLE RIGHTS)
	 * ======================
	 */

	// GET house-access-show - The caller's House Management access, called at staff login: has_access, is_coordinator, is_judge, role_data, right_data, tab_data.
	getHouseAccessShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_ACCESS_SHOW", "get", true);
	},

	// GET house-role-right-list - The Roles & Rights matrix (5 roles x 11 sections). Coordinator only.
	getHouseRoleRightList: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_ROLE_RIGHT_LIST", "get", true);
	},

	// POST house-role-right-update - Saves Roles & Rights cells (params: right_data JSON). Locked cells never change; unlocked cells switch between view and none.
	houseRoleRightUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_ROLE_RIGHT_UPDATE", "post");
	},

	/*
	 * ======================
	 * HOUSES
	 * ======================
	 */

	// GET house-list - Houses with strength (boys/girls), House Head and Block In-Charges, and blocks still without a Block In-Charge.
	getHouseList: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_LIST", "get", true);
	},

	// GET house-dropdown - Every house's name and colour, for filters and pickers.
	getHouseDropdown: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_DROPDOWN", "get", false);
	},

	// POST house-store - Adds a house (params: house_name, motto, house_color, in_charge_data JSON).
	houseStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_STORE", "post");
	},

	// POST house-update - Renames / recolours a house (params: id, house_name, motto, house_color).
	houseUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_UPDATE", "post");
	},

	// POST house-in-charge-update - Replaces a house's House Head and Block In-Charges (params: id, in_charge_data JSON).
	houseInChargeUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_IN_CHARGE_UPDATE", "post");
	},

	// POST house-destroy - Deletes a house with no students and no event history (params: id).
	houseDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_DESTROY", "post");
	},

	/*
	 * ======================
	 * STUDENTS AND HOUSE ASSIGNMENT
	 * ======================
	 */

	// GET house-student-table-data - This year's students with house, block, events and the suggested house (params: page, perPage, search, house_id ('awaiting'), block_id, class_id, sex, status, order, dir).
	getHouseStudentTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_STUDENT_TABLE_DATA", "get", true);
	},

	// GET house-student-count - The Students tab stat cards: houses, students placed, awaiting, boys, girls.
	getHouseStudentCount: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_STUDENT_COUNT", "get", true);
	},

	// GET house-student-show - One student's house card with participation and wins (params: id = student_id).
	getHouseStudentShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_STUDENT_SHOW", "get", true);
	},

	// POST house-student-assign - Assigns houses permanently (params: student_ids JSON, assign_type suggested|manual, house_id for manual).
	houseStudentAssign: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_STUDENT_ASSIGN", "post");
	},

	/*
	 * ======================
	 * BULK UPLOAD
	 * ======================
	 */

	// POST house-student-import - Bulk house import, the library import's shape (params: mode validate|commit, fileName, rows, headers, columnMap as JSON strings).
	houseStudentImport: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_STUDENT_IMPORT", "post");
	},

	/*
	 * ======================
	 * EVENTS, SCORING PARAMETERS AND JUDGES
	 * ======================
	 */

	// GET house-event-table-data - The Events list (params: page, perPage, search, category_id, block_id, participation_type, event_status, order, dir).
	getHouseEventTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_TABLE_DATA", "get", true);
	},

	// GET house-event-count - The Events tab stat cards by status.
	getHouseEventCount: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_COUNT", "get", true);
	},

	// GET house-event-active-list - Dashboard 'Upcoming & In-progress events': not declared yet, earliest first (params: limit).
	getHouseEventActiveList: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_ACTIVE_LIST", "get", true);
	},

	// GET house-event-calendar-list - Calendar rows, one per day an event runs on (params: start_date, end_date, search, category_id, block_id, participation_type, event_status).
	getHouseEventCalendarList: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_CALENDAR_LIST", "get", true);
	},

	// GET house-event-upcoming-list - The next events on or after a date (params: from_date, limit).
	getHouseEventUpcomingList: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_UPCOMING_LIST", "get", true);
	},

	// POST house-event-store - Creates an event as a draft (params: event_name, category_id, description, participation_type, gender_type, block_id, team_size, event_date, end_date, start_time, end_time, venue, registration_deadline, staff_id).
	houseEventStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_STORE", "post");
	},

	// GET house-event-show - The event page: details, timeline, logistics, participants, updates, rubric, judges, results and permission flags (params: id).
	getHouseEventShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_SHOW", "get", true);
	},

	// POST house-event-update - Edits an event's details; only the fields sent change (params: id + any create field).
	houseEventUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_UPDATE", "post");
	},

	// POST house-event-logistics-update - Edits venue, facilities and notes (params: id, venue, facilities, notes).
	houseEventLogisticsUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_LOGISTICS_UPDATE", "post");
	},

	// POST house-event-circular-store - Uploads a circular file (params: id, circular_title, file).
	houseEventCircularStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_CIRCULAR_STORE", "post");
	},

	// POST house-event-circular-destroy - Removes a circular (params: id = circular id).
	houseEventCircularDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_CIRCULAR_DESTROY", "post");
	},

	// POST house-event-destroy - Deletes a draft event (params: id).
	houseEventDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_DESTROY", "post");
	},

	// POST house-event-rubric-update - Saves the scoring parameters and judges (params: id, parameter_data JSON, judge_data JSON, consolidation_type sum|average).
	houseEventRubricUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_RUBRIC_UPDATE", "post");
	},

	/*
	 * ======================
	 * EVENT IN-CHARGE AND STATUS
	 * ======================
	 */

	// POST house-event-change-status - Moves an event one step: circulated, in_progress, pending_results (params: id, event_status, skip_incomplete).
	houseEventChangeStatus: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_CHANGE_STATUS", "post");
	},

	/*
	 * ======================
	 * PARTICIPANTS
	 * ======================
	 */

	// GET house-event-participant-list - Every house's picks for an event (params: event_id).
	getHouseEventParticipantList: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_PARTICIPANT_LIST", "get", true);
	},

	// GET house-event-eligible-student-table-data - The Add Participants picker: eligible students of one house (params: event_id, house_id, page, perPage, search, class_id, block_id, status).
	getHouseEventEligibleStudentTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_ELIGIBLE_STUDENT_TABLE_DATA", "get", true);
	},

	// POST house-event-participant-update - Saves one house's picks (params: event_id, house_id, student_ids JSON).
	houseEventParticipantUpdate: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_PARTICIPANT_UPDATE", "post");
	},

	// GET house-event-interest-list - Students of the caller's house(s) who raised interest (params: event_id).
	getHouseEventInterestList: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_INTEREST_LIST", "get", true);
	},

	/*
	 * ======================
	 * JUDGING
	 * ======================
	 */

	// POST house-event-code-generate - Generates the judges' anonymous codes (params: id = event id).
	houseEventCodeGenerate: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_CODE_GENERATE", "post");
	},

	// GET house-judge-event-list - The events the logged-in staff member judges, with their own progress.
	getHouseJudgeEventList: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_JUDGE_EVENT_LIST", "get", true);
	},

	// GET house-judge-score-show - A judge's score sheet: codes and parameters, no names (params: event_id).
	getHouseJudgeScoreShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_JUDGE_SCORE_SHOW", "get", true);
	},

	// POST house-judge-score-store - Saves a judge's marks (params: event_id, score_data JSON).
	houseJudgeScoreStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_JUDGE_SCORE_STORE", "post");
	},

	// GET house-event-judging-show - Judging totals and ranking; reveal_identity=yes shows who each code is and the result prefill (params: event_id, consolidation_type, reveal_identity).
	getHouseEventJudgingShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_JUDGING_SHOW", "get", true);
	},

	/*
	 * ======================
	 * RESULTS
	 * ======================
	 */

	// POST house-event-result-declare - Declares the result position by position (params: event_id, result_data JSON).
	houseEventResultDeclare: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_RESULT_DECLARE", "post");
	},

	// POST house-event-result-correct - Coordinator's audited correction of a declared result (params: event_id, result_data JSON, reason).
	houseEventResultCorrect: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_RESULT_CORRECT", "post");
	},

	/*
	 * ======================
	 * LEADERBOARD AND DASHBOARD
	 * ======================
	 */

	// GET house-leaderboard-list - The House Cup: points, events won, runner-up finishes and points per category.
	getHouseLeaderboardList: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_LEADERBOARD_LIST", "get", true);
	},

	// GET house-result-table-data - The Results tab (params: page, perPage, search, event_id, category_id, house_id, result_status, start_date, end_date).
	getHouseResultTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_RESULT_TABLE_DATA", "get", true);
	},

	// GET house-top-performer-table-data - Top Performing Students (params: page, perPage, search, house_id, block_id, class_id, sex, category_id, rank_by).
	getHouseTopPerformerTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_TOP_PERFORMER_TABLE_DATA", "get", true);
	},

	// GET house-dashboard-show - The dashboard stat cards and house balance alerts.
	getHouseDashboardShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_DASHBOARD_SHOW", "get", true);
	},

	// GET house-dashboard-update-list - The dashboard Updates feed.
	getHouseDashboardUpdateList: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_DASHBOARD_UPDATE_LIST", "get", true);
	},

	/*
	 * ======================
	 * REPORTS
	 * ======================
	 */

	// GET house-participation-insight-show - Participation Insights: overall, per house, per category, per block.
	getHouseParticipationInsightShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_PARTICIPATION_INSIGHT_SHOW", "get", true);
	},

	// GET house-in-charge-report-list - The in-charge directory.
	getHouseInChargeReportList: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_IN_CHARGE_REPORT_LIST", "get", true);
	},

	// GET house-register-list - The house register: one row per event and house (params: house_id).
	getHouseRegisterList: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_REGISTER_LIST", "get", true);
	},

	// GET house-participation-overview-list - Students with a house and how many events each entered.
	getHouseParticipationOverviewList: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_PARTICIPATION_OVERVIEW_LIST", "get", true);
	},

	/*
	 * ======================
	 * MESSAGES
	 * ======================
	 */

	// GET house-announcement-table-data - House messages for the caller's houses (params: page, perPage, house_id).
	getHouseAnnouncementTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_ANNOUNCEMENT_TABLE_DATA", "get", true);
	},

	// POST house-announcement-store - Posts a house message (params: house_id, message, audience house_staff|all).
	houseAnnouncementStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_ANNOUNCEMENT_STORE", "post");
	},

	// GET house-event-message-table-data - An event's update log (params: event_id, page, perPage).
	getHouseEventMessageTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_MESSAGE_TABLE_DATA", "get", true);
	},

	// POST house-event-message-store - Posts an event update (params: event_id, message, audience house_staff|all).
	houseEventMessageStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_HOUSE_EVENT_MESSAGE_STORE", "post");
	},

	/*
	 * ======================
	 * PARENT SCREEN (STUDENT LOGIN)
	 * ======================
	 */

	// GET student/house-show - The student/parent house screen: house, rank, open events, results, house messages.
	getStudentHouseShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_STUDENT_HOUSE_SHOW", "get", true);
	},

	// POST student/house-event-interest-store - Raises interest in an open event (params: event_id).
	studentHouseEventInterestStore: function (cb, args) {
		makeRequest(cb, args, "API_URN_STUDENT_HOUSE_EVENT_INTEREST_STORE", "post");
	},

	// POST student/house-event-interest-destroy - Withdraws interest (params: event_id).
	studentHouseEventInterestDestroy: function (cb, args) {
		makeRequest(cb, args, "API_URN_STUDENT_HOUSE_EVENT_INTEREST_DESTROY", "post");
	}
};
///////////////////////////Public Functions ENDS////////////////////////////////
