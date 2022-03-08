// Info: Dependency Manager. Configration Loader.
"use strict";

/****************** Notes *********************
* Loads dependencies in Lib Object

* Next Note
***********************************************/

// Module outputs
var Lib = {};

/////////////////////////// Module-Loader START ////////////////////////////////

/********************************************************************
  Load dependencies and configurations

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
  @param {Set} config_app - Custom configuration in key-value pairs

  @return nothing
  *********************************************************************/
const loader = function (shared_libs, config_app) {
	//////////////////////////////Configration START////////////////////////////

	// Set Configration for Debug Library
	const config_debug = {
		NO_CASUAL_LOGGING: config_app["NO_CASUAL_LOGGING"],
		NO_ERROR_LOGGING: config_app["NO_ERROR_LOGGING"],
		NO_TIME_AUDITING: config_app["NO_TIME_AUDITING"],
	};

	// Set Configration for Google geo
	const config_geo_google = {
		GOOGLE_API_KEY: config_app["GOOGLE_API_KEY"],
	};

	// Set Configrations
	const http_config = {
		TIMEOUT: 400, // small value shoud cause timeout
		TIMEOUT: 30000, // In milliseconds (3 second). 0 means no timeout
		USER_AGENT: "Test App 1.0", // Not used by browser
	};

	// Set Configration for Money library
	const config_money = {}; //TODO

	// Set Configration for Org Module

	const config_feedback = {
		// Api urns
		API_URN_GET_FEEDBACK_LIST_ADMIN: "feedback-table-data",
		API_URN_DELETE_FEEDBACK_ADMIN: "feedback-destroy",
		API_URN_GET_FEEDBACK_DETAIL_ADMIN: "/feedback-detail",
		API_URN_REPLY_FEEDBACK_ADMIN: "feedback-reply",
		API_URN_GET_FEEDBACK_LIST_PARENT: "student/feedback/list",
		API_URN_ADD_FEEDBACK_PARENT: "student/feedback/add",
		API_URN_GET_FEEDBACK_DETAIL_PARENT: "student/feedback/detail",
	};

	const config_homework = {
		API_URN_ADD_HOMEWORK_ADMIN: "homework-store",
		API_URN_EDIT_HOMEWORK_ADMIN: "homework-edit",
		API_URN_UPDATE_HOMEWORK_ADMIN: "homework-update",
		API_URN_DELETE_HOMEWORK_ADMIN: "homework-destroy",
		API_URN_DETAIL_HOMEWORK_LIST_ADMIN: "homework-show",
		API_URN_GET_HOMEWORK_LIST_ADMIN: "homework-table-data",
		API_URN_VERIFY_HOMEWORK_ADMIN: "homework-verify",
		API_URN_DELETE_STUDENT_HOMEWORK_ADMIN: "homework-delete-student",
		API_URN_DELETE_HOMEWORK_VERIFIED_ADMIN: "homework-delete-verified",

		API_URN_UPDATE_SEEN_UNSEEN_PARENT: "student/homework/update-log",
		API_URN_GET_HOMEWORK_DETAIL_PARENT: "student/homework/detail",
		API_URN_GET_HOMEWORK_LIST_PARENT: "student/homework/list",
		API_URN_SUBMIT_HOMEWORK_PARENT: "student/homework/submit",
	};

	const config_progress_report = {
		API_URN_ADD_PROGRESS_REPORT_ADMIN: "progress-report-store",
		API_URN_EDIT_PROGRESS_REPORT_ADMIN: "progress-report-edit",
		API_URN_UPDATE_PROGRESS_REPORT_ADMIN: "progress-report-update",
		API_URN_DELETE_PROGRESS_REPORT_ADMIN: "progress-report-destroy",
		API_URN_VIEW_PROGRESS_REPORT_ADMIN: "progress-report-show",
		API_URN_GET_PROGRESS_REPORT_LIST_ADMIN: "progress-report-table-data",
		API_URN_VIEW_RESULT_ADMIN: "progress-report-view-result",
		API_URN_GENERATE_CSV_PROGRESS_REPORT_ADMIN: "progress-report-generate-csv",
		API_URN_IMPORT_CSV_PROGRESS_REPORT_ADMIN: "progress-report-import-csv",

		APR_URN_ADD_PROGRESS_REPORT_SCHOOL_ADMIN: "progress-report-school-store",
		APR_URN_EDIT_PROGRESS_REPORT_SCHOOL_ADMIN: "progress-report-school-edit",
		APR_URN_DELETE_PROGRESS_REPORT_SCHOOL_ADMIN: "progress-report-school-destroy",
		API_URN_GET_PROGRESS_REPORT_SCHOOL_LIST_ADMIN: "progress-report-school-table-data",
		API_URN_VIEW_PROGRESS_REPORT_SCHOOL_ADMIN: "progress-report-school-show",
		API_URN_PROGRESS_REPORT_SCHOOL_VIEW_RESULT_ADMIN: "progress-report-school-view-result",
		API_URN_GENERATE_CSV_PROGRESS_REPORT_SCHOOL_ADMIN: "progress-report-school-generate-csv",
		API_URN_IMPORT_CSV_PROGRESS_REPORT_SCHOOL_ADMIN: "progress-report-school-import-csv",
		API_URN_GET_STUDENT_REPORT_SCHOOL_ADMIN: "student-report-school-data",
		API_URN_UPDATE_STUDENT_REPORT_SCHOOL_ADMIN: "student-report-school-update",
		API_URN_GET_PROGRESS_REPORT_SCHOOL_DROPDOWN_ADMIN: "get-progress-report-school-dropdown",

		API_URN_ADD_RESULT_SETTING_ADMIN: "report-result-setting-store",
		API_URN_EDIT_RESULT_SETTING_ADMIN: "report-result-setting-edit",
		API_URN_UPDATE_RESULT_SETTING_ADMIN: "report-result-setting-update",
		API_URN_DELETE_RESULT_SETTING_ADMIN: "report-result-setting-destroy",
		API_URN_GET_RESULT_SETTING_LIST_ADMIN: "report-result-setting-table-data",

		API_URN_ADD_TEACHER_SIGNATURE_ADMIN: "report-teacher-signature-store",
		API_URN_EDIT_TEACHER_SIGNATURE_ADMIN: "report-teacher-signature-edit",
		API_URN_UPDATE_TEACHER_SIGNATURE_ADMIN: "report-teacher-signature-update",
		API_URN_DELETE_TEACHER_SIGNATURE_ADMIN: "report-teacher-signature-destroy",
		API_URN_GET_TEACHER_SIGNATURE_LIST_ADMIN:
			"report-teacher-signature-table-data",

		API_URN_UPLOAD_SIGNATURE_ADMIN: "upload-signature",
		API_URN_GET_SIGNATURE_ADMIN: "get-signature",
		API_URN_GET_PROGRESS_REPORT_DROPDOWN_ADMIN: "get-progress-report-dropdown",

		API_URN_GET_STUDENT_REPORT_ADMIN: "student-report-data",
		API_URN_UPDATE_STUDENT_REPORT_ADMIN: "student-report-update",

		API_URN_PROGRESS_REPORT_TABLE_DATA_PARENT: "student/progress-report-table-data",
		API_URN_PROGRESS_REPORT_SHOW_PARENT: "student/progress-report-show",
	};

	const config_diary = {
		API_URN_ADD_DIARY_ADMIN: "diary-store",
		API_URN_EDIT_DIARY_ADMIN: "diary-edit",
		API_URN_UPDATE_DIARY_ADMIN: "diary-update",
		API_URN_DELETE_DIARY_ADMIN: "diary-destroy",
		API_URN_VIEW_DIARY_ADMIN: "diary-show",
		API_URN_GET_DIARY_LIST_ADMIN: "diary-table-data",

		API_URN_ADD_GROUP_ADMIN: "group-store",
		API_URN_EDIT_GROUP_ADMIN: "group-edit",
		API_URN_UPDATE_GROUP_ADMIN: "group-update",
		API_URN_DELETE_GROUP_ADMIN: "group-destroy",
		API_URN_VIEW_GROUP_ADMIN: "group-show",
		API_URN_GET_GROUP_LIST_ADMIN: "group-table-data",

		API_URN_ADD_SUBJECT_COMMUNICATION_ADMIN: "subject-communication-store",
		API_URN_EDIT_SUBJECT_COMMUNICATION_ADMIN: "subject-communication-edit",
		API_URN_UPDATE_SUBJECT_COMMUNICATION_ADMIN: "subject-communication-update",
		API_URN_DELETE_SUBJECT_COMMUNICATION_ADMIN: "subject-communication-destroy",
		API_URN_VIEW_SUBJECT_COMMUNICATION_ADMIN: "subject-communication-show",
		API_URN_GET_SUBJECT_COMMUNICATION_LIST_ADMIN:
			"subject-communication-table-data",

		API_URN_ALLOCATE_STUDENT_ADMIN: "allocate-student-to-group",
		API_URN_DEALLOCATE_STUDENT_ADMIN: "deallocate-student-to-group",

		API_URN_GET_DIARY_STUDENT_LIST_ADMIN: "diary-student-list",
		API_URN_GET_GROUP_SUBJECT_ADMIN: "get-group-subject",

		API_URN_GET_GROUP_PARENT: "student-group-list",
		API_URN_GET_GROUP_DETAIL_PARENT: "student-group-detail",
		API_URN_GET_SCHOOL_DIARY_LIST_PARENT: "school-diary/list",
	};

	const config_attendance = {
		API_URN_GET_STUDENT_ATTENDANCE_DATA_ADMIN: "student-attendance-show",
		API_URN_UPDATE_STUDENT_ATTENDANCE_DATA_ADMIN: "student-attendance-store",

		API_URN_GET_STAFF_ATTENDANCE_DATA_ADMIN: "staff-attendance-show",
		API_URN_UPDATE_STAFF_ATTENDANCE_DATA_ADMIN: "staff-attendance-store",
		API_URN_UPDATE_STAFF_ATTENDANCE_HISTORY_ADMIN:
			"staff-attendance-table-data",

		API_URN_STAFF_MY_ATTENDANCE_ADMIN: "staff-my-attendance",
		API_URN_STAFF_ABSENTEE_FORM_ADMIN: "staff-absentee-form",
		API_URN_STAFF_ATTENDANCE_DESTROY_ADMIN: "staff-attendance-destroy",

		API_URN_GET_STUDENT_ATTENDANCE_REPORT_ADMIN: "student-attendance-report",
		API_URN_GET_STAFF_ATTENDANCE_REPORT_ADMIN: "staff-attendance-report",
		API_URN_STAFF_ATTENDANCE_MARK_IN_OUT: "staff-attendance-update-in-out",

		API_URN_ADD_HOUR_SETTINGS_ADMIN: "hour-setting-store",
		API_URN_EDIT_HOUR_SETTINGS_ADMIN: "hour-setting-edit",
		API_URN_UPDATE_HOUR_SETTINGS_ADMIN: "hour-setting-update",
		API_URN_DELETE_HOUR_SETTINGS_ADMIN: "hour-setting-destroy",
		API_URN_GET_HOUR_SETTINGS_LIST_ADMIN: "hour-setting-table-data",

		API_URN_ADD_ATTENDANCE_SETTINGS_ADMIN: "weekly-holidays-store",
		API_URN_EDIT_ATTENDANCE_SETTINGS_ADMIN: "weekly-holidays-edit",
		API_URN_UPDATE_ATTENDANCE_SETTINGS_ADMIN: "weekly-holidays-update",
		API_URN_DELETE_ATTENDANCE_SETTINGS_ADMIN: "weekly-holidays-destroy",
		API_URN_GET_ATTENDANCE_SETTINGS_LIST_ADMIN: "weekly-holidays-table-data",

		API_URN_GET_ABSENTEE_FORM_LIST_ADMIN: "absentee-form-table-data",
		API_URN_VIEW_ABSENTEE_FORM_ADMIN: "absentee-form-show",

		API_URN_GET_OVERALL_ATTENDANCE_ADMIN: "student-overall-attendance",

		API_URN_GET_ABSENT_LIST_PARENT: "student/absent/list",
		API_URN_ABSENT_FORM_PARENT: "student/absent/submit-leave",
		API_URN_GET_ATTENDANCE_HOMESCREEEN_PARENT: "attendance/homeScreen",
	};

	const config_mealcalendar = {
		// Api urns MEAL MENU

		API_URN_ADD_MENU_NAME_ADMIN: "menu-name-store",
		API_URN_EDIT_MENU_NAME_ADMIN: "menu-name-edit",
		API_URN_UPDATE_MENU_NAME_ADMIN: "menu-name-update",
		API_URN_DELETE_MENU_NAME_ADMIN: "menu-name-destroy",
		API_URN_GET_MENU_NAME_ADMIN: "menu-name-table-data",

		// Api urns MEAL CALENDAR

		API_URN_ADD_MEAL_CALENDAR_ADMIN: "meal-calendar-store",
		API_URN_EDIT_MEAL_CALENDAR_ADMIN: "meal-calendar-edit",
		API_URN_UPDATE_MEAL_CALENDAR_ADMIN: "meal-calendar-update",
		API_URN_DELETE_MEAL_CALENDAR_ADMIN: "meal-calendar-destroy",
		API_URN_GET_MEAL_CALENDAR_ADMIN: "meal-calendar-table-data",
		API_URN_GET_MEAL_ADMIN: "get-meal",
		API_URN_GET_MEAL_ALL_ADMIN: "get-meal-time-all",
		API_URN_UPDATE_HIDE_MEAL_TIME_ADMIN: "hide-meal-time",

		API_URN_GET_MEAL_CALENDAR_PARENT: "student/meal-calendar",
		API_URN_GET_MEAL_CALENDAR_MONTH_PARENT: "student/meal-calendar-month",
	};

	const config_teacherComment = {
		// Api urns

		API_URN_ADD_TEACHER_COMMENT: "teacher-comment-store",
		API_URN_DETAIL_TEACHER_COMMENT: "teacher-comment-show",
		API_URN_REPLY_TEACHER_COMMENT: "teacher-comment-reply",
		API_URN_DELETE_TEACHER_COMMENT: "teacher-comment-destroy",
		API_URN_GET_TEACHER_COMMENT_LIST: "teacher-comment-table-data",
		API_URN_GET_TEACHER_COMMENT_LIST_PARENT: "student/teacher-comment/list",
		API_URN_GET_TEACHER_COMMENT_DETAIL_PARENT: "student/teacher-comment/detail",
		API_URN_TEACHER_COMMENT_REPLY_PARENT: "student/teacher-comment/add",
	};

	const config_enquiry = {
		// Api urns

		API_URN_ADD_ENQUIRY_SOURCES: "enquiry-source-store",
		API_URN_VIEW_ENQUIRY_SOURCES: "enquiry-source-show",
		API_URN_EDIT_ENQUIRY_SOURCES: "enquiry-source-edit",
		API_URN_UPDATE_ENQUIRY_SOURCES: "enquiry-source-update",
		API_URN_DELETE_ENQUIRY_SOURCES: "enquiry-source-destroy",
		API_URN_ENQUIRY_SOURCES_LIST: "enquiry-source-table-data",
		API_URN_ADD_ENQUIRY_REASON: "enquiry-reason-store",
		API_URN_VIEW_ENQUIRY_REASON: "enquiry-reason-show",
		API_URN_EDIT_ENQUIRY_REASON: "enquiry-reason-edit",
		API_URN_UPDATE_ENQUIRY_REASON: "enquiry-reason-update",
		API_URN_DELETE_ENQUIRY_REASON: "enquiry-reason-destroy",
		API_URN_ENQUIRY_REASON_LIST: "enquiry-reason-table-data",
		API_URN_ADD_ENQUIRY: "student-enquiry-store",
		API_URN_EDIT_ENQUIRY: "student-enquiry-edit",
		API_URN_UPDATE_ENQUIRY: "student-enquiry-update",
		API_URN_SHOW_ENQUIRY: "student-enquiry-show",
		API_URN_GET_ENQUIRY_LIST: "student-enquiry-table-data",
		API_URN_DELETE_ENQUIRY: "student-enquiry-destroy",
		API_URN_EXPORT_ENQUIRY: "export-enquiry-csv",
		API_URN_IMPORT_ENQUIRY: "import-enquiry-csv",
		API_URN_ENQUIRY_FOLLOWUP_UPDATE: "enquiry-followUp-trans",
		API_URN_ENQUIRY_CONVERT: "enquiry-convert",
		API_URN_ENQUIRY_DROP: "enquiry-drop",
		API_URN_ENQUIRY_SEND_SMS: "enquiry-send-sms",
		API_URN_ENQUIRY_SEND_EMAIL: "enquiry-send-email",
	};

	const config_meet = {
		// Api urns
		API_URN_GET_VIRTUAL_MEET_LIST_ADMIN: "meeting-table-data",
		API_URN_DELETE_VIRTUAL_MEET_ADMIN: "meeting-destroy",
		API_URN_EDIT_VIRTUAL_MEET_ADMIN: "meeting-edit",
		API_URN_UPDATE_VIRTUAL_MEET_ADMIN: "meeting-update",
		API_URN_ADD_VIRTUAL_MEET_ADMIN: "meeting-store",
		API_URN_VIEW_VIRTUAL_MEET_ADMIN: "meeting-show",

		API_URN_GET_VIRTUAL_MEET_LIST_PARENT: "student/meeting/list",
		API_URN_GET_ARCHIVED_VIRTUAL_MEET_LIST_PARENT:
			"student/meeting/list/archieved",
	};

	const config_student = {
		// Api urns
		API_URN_GET_STUDENT_LIST_ADMIN: "student-table-data",
		API_URN_ADD_STUDENT_ADMIN: "student-store",
		API_URN_GET_EX_STUDENT_ADMIN: "ex-student-table-data",
		API_URN_ADD_EX_STUDENT_ADMIN: "student-leave-form",
		API_URN_EDIT_STUDENT_ADMIN: "student-edit",
		API_URN_STUDENT_CHANGE_DIVISION_ADMIN: "student-change-division",
		API_URN_VIEW_STUDENT_ADMIN: "student-show",
		API_URN_UPDATE_STUDENT_ADMIN: "student-update",
		API_URN_VIEW_STUDENTS_RIGHTS: "student-rights",
		API_URN_UPDATE_STUDENTS_RIGHTS: "student-rights-update",
		API_URN_GET_STUDENT_DELETE_HISTORY_ADMIN: "student-delete-history",
		API_URN_RESTORE_STUDENT_ADMIN: "student-restore",
		API_URN_DELETE_STUDENT_ADMIN: "student-destroy",
		API_URN_STUDENT_GENERATE_QRCODE_ADMIN: "student-generate-qr-code",
		API_URN_STUDENT_DOCUMENT_DESTROY_ADMIN: "student-document-destroy",
		API_URN_STUDENT_CHANGE_STATUS_ADMIN: "student-change-status",
		API_URN_STUDENT_UPGRADE_ADMIN: "student-upgrade",
		API_URN_STUDENT_SEND_DETAIL_ADMIN: "student-send-detail",
		API_URN_STUDENT_IMPORT_CSV_ADMIN: "student-import-csv",
		API_URN_STUDENT_EXPORT_ALL_ADMIN: "student-export-all",
	};

	const config_e_learning = {
		API_URN_GET_CATEGORY_LIST_ADMIN: "tutorial-category-table-data",
		API_URN_DELETE_CATEGORY_ADMIN: "tutorial-category-destroy",
		API_URN_EDIT_CATEGORY_ADMIN: "tutorial-category-edit",
		API_URN_UPDATE_CATEGORY_ADMIN: "tutorial-category-update",
		API_URN_ADD_CATEGORY_ADMIN: "tutorial-category-store",
		API_URN_VIEW_CATEGORY_ADMIN: "tutorial-category-show",
		API_URN_DELETE_TUTORIAL_DOCUMENT_ADMIN: "tutorial-destroy-document",

		API_URN_GET_TUTORIAL_LIST_ADMIN: "tutorial-table-data",
		API_URN_DELETE_TUTORIAL_ADMIN: "tutorial-destroy",
		API_URN_EDIT_TUTORIAL_ADMIN: "tutorial-edit",
		API_URN_UPDATE_TUTORIAL_ADMIN: "tutorial-update",
		API_URN_ADD_TUTORIAL_ADMIN: "tutorial-store",
		API_URN_VIEW_TUTORIAL_ADMIN: "tutorial-show",

		API_URN_GET_ASSESSMENT_LIST_ADMIN: "assessment-table-data",
		API_URN_DELETE_ASSESSMENT_ADMIN: "assessment-destroy",
		API_URN_EDIT_ASSESSMENT_ADMIN: "assessment-edit",
		API_URN_UPDATE_ASSESSMENT_ADMIN: "assessment-update",
		API_URN_ADD_ASSESSMENT_ADMIN: "assessment-store",
		API_URN_VIEW_ASSESSMENT_ADMIN: "assessment-show",

		API_URN_GET_RESULT_SETTING_LIST_ADMIN: "result-setting-table-data",
		API_URN_DELETE_RESULT_SETTING_ADMIN: "result-setting-destroy",
		API_URN_EDIT_RESULT_SETTING_ADMIN: "result-setting-edit",
		API_URN_UPDATE_RESULT_SETTING_ADMIN: "result-setting-update",
		API_URN_ADD_RESULT_SETTING_ADMIN: "result-setting-store",
		API_URN_VIEW_RESULT_SETTING_ADMIN: "result-setting-show",

		API_URN_GET_ELEARNING_SUBJECT_LIST_PARENT: "student/elarning/subject",
		API_URN_GET_ELEARNING_CATEGORY_LIST_PARENT: "student/elarning/category",
		API_URN_GET_ELEARNING_VIDEO_LIST_PARENT: "student/elarning/video",

		API_URN_GET_ASSESSMENT_LIST_PARENT: "student/elarning/assessment",
		API_URN_GET_ASSESSMENT_QUESTIONS_LIST_PARENT:
			"student/elarning/assessment/questions",
		API_URN_GET_ASSESSMENT_START_PARENT: "student/elarning/assessment/start",
		API_URN_ASSESSMENT_SUBMIT_PARENT:
			"student/elarning/assessment/submit/question",
		API_URN_GET_ASSESSMENT_END_PARENT: "student/elarning/assessment/end",
		API_URN_CHECK_ASSESSMENT_STATUS_PARENT:
			"student/elarning/check/assessment/status",

		API_URN_GET_RESULT_FORMAT_ADMIN: "get-result-format",
		API_URN_UPDATE_RESULT_FORMAT_ADMIN: "update-result-format",

		API_URN_GET_ASSESSMENT_LEADERBOARD_ADMIN:
			"student/elarning/assessment/leaderboard",
		API_URN_STUDENT_ASSESSMENT_RESET_ADMIN: "student-assessment-reset",
	};

	const config_insta = {
		API_URN_GET_INSTA_CATEGORY_LIST_ADMIN: "insta-category-table-data",
		API_URN_DELETE_INSTA_CATEGORY_ADMIN: "insta-category-destroy",
		API_URN_EDIT_INSTA_CATEGORY_ADMIN: "insta-category-edit",
		API_URN_UPDATE_INSTA_CATEGORY_ADMIN: "insta-category-update",
		API_URN_ADD_INSTA_CATEGORY_ADMIN: "insta-category-store",

		API_URN_GET_INSTA_ALERT_LIST_ADMIN: "insta-alert-table-data",
		API_URN_DELETE_INSTA_ALERT_ADMIN: "insta-alert-destroy",
		API_URN_EDIT_INSTA_ALERT_ADMIN: "insta-alert-edit",
		API_URN_UPDATE_INSTA_ALERT_ADMIN: "insta-alert-update",
		API_URN_ADD_INSTA_ALERT_ADMIN: "insta-alert-store",
		API_URN_VIEW_INSTA_ALERT_ADMIN: "insta-alert-show",

		API_URN_GET_INSTA_ALERT_LIST_PARENT: "student/insta-alert/list",
	};

	const config_daycare = {
		API_URN_GET_DAYCARE_CATEGORY_LIST_ADMIN: "daycare-category-table-data",
		API_URN_DELETE_DAYCARE_CATEGORY_ADMIN: "daycare-category-destroy",
		API_URN_EDIT_DAYCARE_CATEGORY_ADMIN: "daycare-category-edit",
		API_URN_UPDATE_DAYCARE_CATEGORY_ADMIN: "daycare-category-update",
		API_URN_ADD_DAYCARE_CATEGORY_ADMIN: "daycare-category-store",
		API_URN_VIEW_DAYCARE_CATEGORY_ADMIN: "daycare-category-show",
		API_URN_DAYCARE_DROPDOWN_CATEGORY_ADMIN: "daycare-category-dropdown",

		API_URN_ALLOCATE_STUDENT_LIST_ADMIN: "allocate-student-table-data",
		API_URN_ALLOCATE_STUDENT_ADD_ADMIN: "allocate-student-store",
		API_URN_DEALLOCATE_STUDENT_LIST_ADMIN: "deallocate-student-table-data",
		API_URN_DEALLOCATE_STUDENT_DESTROY_ADMIN: "deallocate-student-destroy",

		API_URN_GET_DAYCARE_IN_LIST_ADMIN: "student-daycare-in-table-data",
		API_URN_GET_DAYCARE_OUT_LIST_ADMIN: "student-daycare-out-table-data",
		API_URN_DAYCARE_IN_STORE_ADMIN: "student-daycare-in-store",
		API_URN_DAYCARE_OUT_UPDATE_ADMIN: "student-daycare-out-update",

		API_URN_STUDENT_GENERATE_BILL_STORE_ADMIN: "student-generate-bill-store",
		API_URN_STUDENT_GENERATE_BILL_FORM_DATA_ADMIN:
			"student-generate-bill-form-data",
		API_URN_STUDENT_BILL_DATA_ADMIN: "get-student-bill-data",
		API_URN_STUDENT_GENERATE_BILL_TABLE_DATA_ADMIN:
			"student-generate-bill-table-data",
		API_URN_STUDENT_GENERATE_BILL_PRINT_DATA_ADMIN:
			"student-generate-bill-print-data",

		API_URN_DELETE_STUDENT_GENERATE_BILL_ADMIN: "delete-student-generate-bill",
		API_URN_DAYCARE_TIMING_STORE_UPDATE_ADMIN: "daycare-timing-store-update",
		API_URN_DAYCARE_TIMING_EDIT_ADMIN: "daycare-timing-edit",
		API_URN_DAYCARE_TABLE_DATA_ADMIN: "student/daycare-table-data",
		API_URN_GET_DAYCARE_PACKAGE_ADMIN: "student/get-daycare-package",

		API_URN_HISTORY_DATA_ADMIN: "student-in-out-history-table-data",
		API_URN_EDIT_HISTORY_DATA_ADMIN: "student-in-out-history-edit",
		API_URN_UPDATE_HISTORY_DATA_ADMIN: "student-in-out-history-update",
	};

	const config_events = {
		API_URN_GET_EVENT_CATEGORY_LIST_ADMIN: "event-category-table-data",
		API_URN_DELETE_EVENT_CATEGORY_ADMIN: "event-category-destroy",
		API_URN_EDIT_EVENT_CATEGORY_ADMIN: "event-category-edit",
		API_URN_UPDATE_EVENT_CATEGORY_ADMIN: "event-category-update",
		API_URN_ADD_EVENT_CATEGORY_ADMIN: "event-category-store",
		API_URN_GET_EVENT_CATEGORY_DROPDOWN_ADMIN: "get-event-category-dropdown",

		API_URN_GET_EVENT_LIST_ADMIN: "event-table-data",
		API_URN_DELETE_EVENT_ADMIN: "event-destroy",
		API_URN_EDIT_EVENT_ADMIN: "event-edit",
		API_URN_UPDATE_EVENT_ADMIN: "event-update",
		API_URN_ADD_EVENT_ADMIN: "event-store",
		API_URN_GET_EVENT_CALENDAR_ADMIN: "event-calendar",
		API_URN_VIEW_EVENT_ADMIN: "event-show",

		API_URN_GET_EVENT_PARENT: "student/event",
		API_URN_GET_EVENT_LIST_PARENT: "student/event-table-data",
		API_URN_GET_EVENT_DETAILS_PARENT: "student/event-details",
	};

	const config_birthday = {
		API_URN_GET_TEACHER_BIRTHDAY: "get-teacher-birthday",
		API_URN_GET_STUDENT_BIRTHDAY: "get-student-birthday",
		API_URN_GET_ENQUIRY_BIRTHDAY: "get-enquiry-birthday",
	};

	const config_fee = {
		API_URN_GET_FEE_TYPE_LIST_ADMIN: "fee-type-table-data",
		API_URN_DELETE_FEE_TYPE_ADMIN: "fee-type-destroy",
		API_URN_EDIT_FEE_TYPE_ADMIN: "fee-type-edit",
		API_URN_UPDATE_FEE_TYPE_ADMIN: "fee-type-update",
		API_URN_ADD_FEE_TYPE_ADMIN: "fee-type-store",
		API_URN_VIEW_FEE_TYPE_ADMIN: "fee-type-show",

		API_URN_GET_FEE_FINE_LIST_ADMIN: "fee-fine-table-data",
		API_URN_DELETE_FEE_FINE_ADMIN: "fee-fine-destroy",
		API_URN_EDIT_FEE_FINE_ADMIN: "fee-fine-edit",
		API_URN_UPDATE_FEE_FINE_ADMIN: "fee-fine-update",
		API_URN_ADD_FEE_FINE_ADMIN: "fee-fine-store",

		API_URN_GET_FEE_CONFIG_LIST_ADMIN: "fee-configuration-table-data",
		API_URN_DELETE_FEE_CONFIG_ADMIN: "fee-configuration-destroy",
		API_URN_EDIT_FEE_CONFIG_ADMIN: "fee-configuration-edit",
		API_URN_UPDATE_FEE_CONFIG_ADMIN: "fee-configuration-update",
		API_URN_ADD_FEE_CONFIG_ADMIN: "fee-configuration-store",

		API_URN_GET_STUDENT_FEE_ADMIN: "student-fee-show",
		API_URN_GET_STUDENT_FEE_PRINT_ADMIN: "student-fee-print-list",
		API_URN_GET_STUDENT_FEE_SCHEDULE_ADMIN: "student-fee-schedule-form-data",
		API_URN_ADD_STUDENT_CUSTOMIZE_SCHEDULE_FEE:
			"add-student-customize-schedule-fee",
		API_URN_GET_STUDENT_LATE_FEE_SCHEDULE_ADMIN: "student-schedule-late-fee",
		API_URN_ADD_STUDENT_FEE_ADMIN: "student-fee-store",
		API_URN_ADD_STUDENT_FEE_LIST_ADMIN: "student-fee-table-data",

		API_URN_DELETE_STUDENT_FEE_LIST_ADMIN: "delete-student-fee-table-data",
		API_URN_STUDENT_FEE_COLLECTION_REPORT_ADMIN:
			"student-collection-fee-report",
		API_URN_STUDENT_FEE_PENDING_REPORT_ADMIN: "student-pending-fee-report",

		API_URN_ADD_EXPENSES_ADMIN: "expenses-store",
		API_URN_EDIT_EXPENSES_ADMIN: "expenses-edit",
		API_URN_UPDATE_EXPENSES_ADMIN: "expenses-update",
		API_URN_DELETE_EXPENSES_ADMIN: "expenses-destroy",
		API_URN_GET_EXPENSES_LIST_ADMIN: "expenses-table-data",

		API_URN_ADD_EXPENSES_TYPE_ADMIN: "expenses-type-store",
		API_URN_EDIT_EXPENSES_TYPE_ADMIN: "expenses-type-edit",
		API_URN_UPDATE_EXPENSES_TYPE_ADMIN: "expenses-type-update",
		API_URN_DELETE_EXPENSES_TYPE_ADMIN: "expenses-type-destroy",
		API_URN_GET_EXPENSES_TYPE_LIST_ADMIN: "expenses-type-table-data",

		API_URN_ADD_UPDATE_FEE_SETTING_ADMIN: "fee-setting-update",
		API_URN_SHOW_FEE_SETTING_ADMIN: "fee-setting-show",

		API_URN_STUDENT_FEE_RECEIPT_DATA_ADMIN: "student-fee-receipt-data",

		API_URN_DELETE_STUDENT_FEE_DETAILS_ADMIN: "delete-student-fee-details",
		API_URN_REMOVE_STUDENT_FEE_ADMIN: "remove-student-fee",
		API_URN_REMOVE_STUDENT_FEE_DETAILS_ADMIN: "remove-student-fee",

		API_URN_EMAIL_STUDENT_FEE_RECEIPT_ADMIN: "email-student-fee-receipt",
		API_URN_STUDENT_PRINT_CLASS_FEE_CONFIG_ADMIN: "student-print-class-fee-config",

		API_URN_PARENT_FEE_LIST_VIEW: "student/fee",
		API_URN_PARENT_FEE_EMAIL_RECEIPT_VIEW: "student/fee-email-receipt",
		API_URN_STUDENT_FEE_SCHEDULE_DEDUCT_LIST_ADMIN: "student-fee-schedule-deduct-list",
		API_URN_STUDENT_FEE_CHANGE_CHEQUE_STATUS_ADMIN: "student-fee-change-cheque-status",
	};

	const config_configuration = {
		API_URN_GET_CLASS_LIST_ADMIN: "class-table-data",
		API_URN_DELETE_CLASS_ADMIN: "class-destroy",
		API_URN_EDIT_CLASS_ADMIN: "class-edit",
		API_URN_UPDATE_CLASS_ADMIN: "class-update",
		API_URN_ADD_CLASS_ADMIN: "class-store",
		API_URN_VIEW_CLASS_ADMIN: "class-show",
		API_URN_CLASS_CHANGE_STATUS_ADMIN: "class-change-status",

		API_URN_UPDATE_GENERAL_SETTINGS: "general-update",
		API_URN_EDIT_GENERAL_SETTINGS: "general-edit",

		API_URN_UPDATE_SOCIAL_LINKS: "social-links-update",
		API_URN_EDIT_SOCIAL_LINKS: "social-links-edit",

		API_URN_ADD_SMTP_ADMIN: "smtp-store",
		API_URN_VIEW_SMTP_ADMIN: "smtp-show",

		API_URN_ADD_HEADER_SCRIPT_ADMIN: "header-script-store",
		API_URN_VIEW_HEADER_SCRIPT_ADMIN: "header-script-show",

		API_URN_GET_NOTICEBOARD_LIST_ADMIN: "noticeboard-table-data",
		API_URN_DELETE_NOTICEBOARD_ADMIN: "noticeboard-destroy",
		API_URN_EDIT_NOTICEBOARD_ADMIN: "noticeboard-edit",
		API_URN_UPDATE_NOTICEBOARD_ADMIN: "noticeboard-update",
		API_URN_ADD_NOTICEBOARD_ADMIN: "noticeboard-store",

		API_URN_GET_SLIDER_LIST_ADMIN: "slider-table-data",
		API_URN_DELETE_SLIDER_ADMIN: "slider-destroy",
		API_URN_EDIT_SLIDER_ADMIN: "slider-edit",
		API_URN_UPDATE_SLIDER_ADMIN: "slider-update",
		API_URN_ADD_SLIDER_ADMIN: "slider-store",

		API_URN_GET_SECTION_LIST_ADMIN: "section-table-data",
		API_URN_DELETE_SECTION_ADMIN: "section-destroy",
		API_URN_EDIT_SECTION_ADMIN: "section-edit",
		API_URN_UPDATE_SECTION_ADMIN: "section-update",
		API_URN_ADD_SECTION_ADMIN: "section-store",
		API_URN_VIEW_SECTION_ADMIN: "section-show",

		API_URN_GET_SUBJECT_LIST_ADMIN: "subject-table-data",
		API_URN_DELETE_SUBJECT_ADMIN: "subject-destroy",
		API_URN_EDIT_SUBJECT_ADMIN: "subject-edit",
		API_URN_UPDATE_SUBJECT_ADMIN: "subject-update",
		API_URN_ADD_SUBJECT_ADMIN: "subject-store",
		API_URN_VIEW_SUBJECT_ADMIN: "subject-show",

		API_URN_GET_ACADEMIC_SYLLABUS_LIST_ADMIN: "academic-syllabus-table-data",
		API_URN_DELETE_ACADEMIC_SYLLABUS_ADMIN: "academic-syllabus-destroy",
		API_URN_EDIT_ACADEMIC_SYLLABUS_ADMIN: "academic-syllabus-edit",
		API_URN_UPDATE_ACADEMIC_SYLLABUS_ADMIN: "academic-syllabus-update",
		API_URN_ADD_ACADEMIC_SYLLABUS_ADMIN: "academic-syllabus-store",
		API_URN_VIEW_ACADEMIC_SYLLABUS_ADMIN: "academic-syllabus-show",

		API_URN_GET_DESIGNATION_LIST_ADMIN: "designation-table-data",
		API_URN_DELETE_DESIGNATION_ADMIN: "designation-destroy",
		API_URN_EDIT_DESIGNATION_ADMIN: "designation-edit",
		API_URN_UPDATE_DESIGNATION_ADMIN: "designation-update",
		API_URN_ADD_DESIGNATION_ADMIN: "designation-store",

		API_URN_GET_DESIGNATION_ATTRIBUTE_LIST_ADMIN:
			"designation-attribute-table-data",
		API_URN_DELETE_DESIGNATION_ATTRIBUTE_ADMIN: "designation-attribute-destroy",
		API_URN_EDIT_DESIGNATION_ATTRIBUTE_ADMIN: "designation-attribute-edit",
		API_URN_UPDATE_DESIGNATION_ATTRIBUTE_ADMIN: "designation-attribute-update",
		API_URN_ADD_DESIGNATION_ATTRIBUTE_ADMIN: "designation-attribute-store",
	};

	const config_holiday = {
		API_URN_GET_HOLIDAY_CALENDAR_LIST_ADMIN: "holiday-calendar-table-data",
		API_URN_DELETE_HOLIDAY_CALENDAR_ADMIN: "holiday-calendar-destroy",
		API_URN_EDIT_HOLIDAY_CALENDAR_ADMIN: "holiday-calendar-edit",
		API_URN_UPDATE_HOLIDAY_CALENDAR_ADMIN: "holiday-calendar-update",
		API_URN_ADD_HOLIDAY_CALENDAR_ADMIN: "holiday-calendar-store",
		API_URN_GET_CALENDAR_ADMIN: "holiday-calendar-data",

		API_URN_GET_HOLIDAY_CALENDAR_PARENT: "student/holiday-calendar/list",
	};

	const config_dropdown = {
		API_URN_GET_ALL_CLASS_AND_SECTION_DROPDOWN:
			"get-all-class-section-dropdown",
		API_URN_GET_CLASS_DROPDOWN: "get-class-dropdown",
		API_URN_GET_SETION_DROPDOWN: "get-section-dropdown",
		API_URN_GET_STUDENT_DROPDOWN: "get-student-dropdown",
		API_URN_GET_FEE_TYPE_DROPDOWN: "get-fee-type-dropdown",
		API_URN_GET_ENQUIRY_SOURCE_DROPDOWN: "get-enquiry-source-dropdown",
		API_URN_GET_ENQUIRY_REASONS_DROPDOWN: "get-enquiry-reasons-dropdown",
		API_URN_GET_STUDENT_LIST: "get-student-list",
		API_URN_GET_MEETING_TYPE_LIST: "get-meeting-type-dropdown",
		API_URN_GET_SUBJECT_DROPDOWN: "get-subject-dropdown",
		API_URN_GET_EVENT_CATEGORY_DROPDOWN: "get-event-category-dropdown",
		API_URN_GET_INSTA_CATEGORY_DROPDOWN: "get-insta-category-dropdown",
		API_URN_GET_LEARNING_CATEGORY_DROPDOWN: "get-learning-category-dropdown",
		API_URN_GET_LEARNING_TUTORIAL_DROPDOWN: "get-learning-tutorial-dropdown",
		API_URN_UPDATE_LOG: "student/update-log",
		API_URN_GET_TEACHER_DROPDOWN: "get-teacher-dropdown",
		API_URN_GET_FEE_FINE_TYPE_DROPDOWN: "get-fee-fine-type-dropdown",
		API_URN_GET_FEE_PAYMENT_MODE_DROPDOWN: "get-fee-payment-mode-dropdown",
		API_URN_GET_FEE_VIEW_STATUS_DROPDOWN: "get-fee-view-status-dropdown",
		API_URN_GET_FEE_PAYMENT_STATUS_DROPDOWN: "get-fee-payment-status-dropdown",
		API_URN_GET_ACTIVITY: "get-activity",
		API_URN_GET_TEACHER_SIGNATURE_DROPDOWN: "get-teacher-signature-dropdown",
		API_URN_GET_MEAL_MENU_DROPDOWN: "get-meal-menu-dropdown",
		API_URN_GET_ALL_STUDENT_DROPDOWN: "get-all-student-dropdown",
		API_URN_GET_EXAM_TYPE_DROPDOWN: "exam-type-dropdown",
		API_URN_GET_HOLIDAY_DATE: "get-holiday-date"
	};

	const config_videos = {
		// Api urns
		API_URN_GET_VIDEOS_LIST_ADMIN: "videos-table-data",
		API_URN_DELETE_VIDEOS_ADMIN: "videos-destroy",
		API_URN_EDIT_VIDEOS_ADMIN: "videos-edit",
		API_URN_UPDATE_VIDEOS_ADMIN: "videos-update",
		API_URN_ADD_VIDEOS_ADMIN: "videos-store",
		API_URN_VIEW_VIDEOS_ADMIN: "videos-show",

		API_URN_GET_VIDEOS_LIST_PARENT: "student/videos-list",
	};

	const config_gallery = {
		API_URN_GET_IMAGE_ADMIN: "get-gallery-image",
		API_URN_ADD_IMAGE_ADMIN: "gallery-image-upload",
		API_URN_DELETE_IMAGE_ADMIN: "delete-gallery-image",
		API_URN_UPDATE_IMAGE_ADMIN: "update-gallery-image-status",
		API_URN_GET_ALBUM_LIST_ADMIN: "gallery-table-data",
		API_URN_DELETE_ALBUM_ADMIN: "gallery-destroy",
		API_URN_EDIT_ALBUM_ADMIN: "gallery-edit",
		API_URN_UPDATE_ALBUM_ADMIN: "gallery-update",
		API_URN_ADD_ALBUM_ADMIN: "gallery-store",

		API_URN_GET_IMAGE_LIST_PARENT: "student/gallery-list",
		API_URN_GET_IMAGE_DETAILS_PARENT: "student/gallery-details",
	};

	const config_staff = {
		API_URN_GET_STAFF_LIST_ADMIN: "staff-table-data",
		API_URN_DELETE_STAFF_ADMIN: "staff-destroy",
		API_URN_EDIT_STAFF_ADMIN: "staff-edit",
		API_URN_UPDATE_STAFF_ADMIN: "staff-update",
		API_URN_ADD_STAFF_ADMIN: "staff-store",
		API_URN_VIEW_STAFF_ADMIN: "staff-show",
		API_URN_STAFF_IMPORT: "import-staff",
		API_URN_STAFF_GENERATE_IMPORT_CSV: "staff-generate-import-csv",
		API_URN_STAFF_GENERATE_QRCODE: "generate-qr-code",
		API_URN_STAFF_CHANGE_PASSWORD: "staff-change-password",
		API_URN_STUDENT_COPY_LIST: "student-table-data",
		API_URN_UPDATE_STAFF_ABSENTEE: "staff-absentee-update",
		API_URN_GET_STAFF_ABSENTEE_LIST: "staff-absentee-table-data",
		API_URN_VIEW_STAFF_ABSENTEE: "staff-absentee-view",
		API_URN_VIEW_STAFF_RIGHTS_ADMIN: "staff-module-right",
		API_URN_UPDATE_STAFF_RIGHTS_ADMIN: "staff-update-module-right",
		API_URN_DELETE_STAFF_DOCUMENT_ADMIN: "staff-destroy-document",
		API_URN_CHANGE_STAFF_STATUS_ADMIN: "staff-change-status",
		API_URN_STAFF_SEND_DETAIL_ADMIN: "staff-send-detail",
	};

	const config_auth = {
		API_URN_GUEST_LOGIN: "guest-login",
		API_URN_ADD_GUEST_USER: "add-guest",
		API_URN_VERIFY_GUEST_OTP: "verify-guest-otp",
		API_URN_ADMISSION_ENQUIRY: "admission-enquiry",
		API_URN_LOGIN: "login",
		API_URN_GET_USER_DATA: "get-user-data",
		API_URN_LOGOUT: "logout",
		API_URN_VERIFY_PASSWORD: "verify-password",
	};

	// Set Configration for Shared Module
	const config_shared = {
		APP_ID: config_app["APP_ID"], // App ID for application

		API_PROD: config_app["API_PROD"], // Set as true to turn on Production Mode

		// Media Urls
		API_URL_DEFAULT_SB: config_app["API_URL_DEFAULT_SB"],
		API_URL_DEFAULT_PROD: config_app["API_URL_DEFAULT_PROD"],

		// Media Urls
		MEDIA_URL_SB: config_app["MEDIA_URL_SB"],
		MEDIA_URL_PROD: config_app["MEDIA_URL_PROD"],

		// Api Urls
		API_URL_SB: config_app["API_URL_SB"],
		API_URL_PROD: config_app["API_URL_PROD"],

		//App platform
		APP_PLATFORM: config_app["APP_PLATFORM"],
	};

	const config_our_program = {
		API_PROGRAM_STORE: "our-program-store",
		API_PROGRAM_EDIT: "our-program-edit",
		API_PROGRAM_UPDATE: "our-program-update",
		API_PROGRAM_DESTROY: "our-program-destroy",
		API_PROGRAM_TABLE_DATA: "our-program-table-data",
	};

	const config_aboutus_section = {
		API_ABOUTUS_SECTION_STORE: "aboutus-section-store",
		API_ABOUTUS_SECTION_EDIT: "aboutus-section-edit",
		API_ABOUTUS_SECTION_UPDATE: "aboutus-section-update",
		API_ABOUTUS_SECTION_DESTROY: "aboutus-section-destroy",
		API_ABOUTUS_SECTION_TABLE_DATA: "aboutus-section-table-data",
	};

	const config_testimonial = {
		API_TESTIMONIAL_STORE: "testimonial-store",
		API_TESTIMONIAL_EDIT: "testimonial-edit",
		API_TESTIMONIAL_UPDATE: "testimonial-update",
		API_TESTIMONIAL_DESTROY: "testimonial-destroy",
		API_TESTIMONIAL_TABLE_DATA: "testimonial-table-data",
	};

	const config_seo = {
		API_SEO_STORE: "seo-store",
		API_SEO_SHOW: "seo-show",
	};

	const config_setting_account = {
		API_UPDATE_PROFILE: "update-my-profile",
		API_CHANGE_PASSWORD: "change-password",
		API_GET_MY_PROFILE: "get-my-profile",
	};

	const config_mobile_slider = {
		API_URN_ADD_MOBILE_SLIDER: "mobile-slider-store",
		API_URN_EDIT_MOBILE_SLIDER: "mobile-slider-edit",
		API_URN_UPDATE_MOBILE_SLIDER: "mobile-slider-update",
		API_URN_DESTROY_MOBILE_SLIDER: "mobile-slider-destroy",
		API_URN_TABLE_DATA_MOBILE_SLIDER: "mobile-slider-table-data",
	}

	const config_website_setting = {
		API_WEBSITE_SETTING_STORE: "website-setting-store",
		API_WEBSITE_SETTING_SHOW: "website-setting-show",
	};

	const config_offer = {
		API_OFFER_STORE: "offer-store",
		API_OFFER_EDIT: "offer-edit",
		API_OFFER_UPDATE: "offer-update",
		API_OFFER_DESTROY: "offer-destroy",
		API_OFFER_TABLE_DATA: "offer-table-data",
	};

	const config_profile_change_request = {
		API_PROFILE_CHANGE_REQUEST_TABLE_DATA: "profile-change-request-table-data",
		API_PROFILE_CHANGE_REQUEST_STATUS: "profile-change-request-status",
	};

	const config_page_content = {
		API_URN_ADD_HOME_CONTENT: "home-content-store",
		API_URN_GET_HOME_CONTENT: "home-content-show",

		API_URN_ADD_ABOUTUS_CONTENT: "aboutus-content-store",
		API_URN_GET_ABOUTUS_CONTENT: "aboutus-content-show",

		API_URN_ADD_OUR_PROGRAM_CONTENT: "program-content-store",
		API_URN_GET_OUR_PROGRAM_CONTENT: "program-content-show",
	};

	const config_sms_email = {
		API_URN_REGISTRATION_STUDENT_TABLE_DATA_ADMIN:
			"registration-student-table-data",
		API_URN_SEND_SMS_REGISTER_STUDENT_ADMIN: "send-sms-register-student",
		API_URN_REGISTER_STUDENT_TABLE_DATA_ADMIN: "register-student-table-data",

		API_URN_SEND_SMS_EMAIL_ANY_ADMIN: "send-sms-email-any",
		API_URN_SEND_SMS_EMAIL_STUDENT_ADMIN: "send-sms-email-student",
		API_URN_SEND_SMS_EMAIL_STAFF_ADMIN: "send-sms-email-staff",

		API_URN_EMAIL_SETTING_STORE_UPDATE_ADMIN: "email-setting-store-update",
		API_URN_EMAIL_SETTING_SHOW_ADMIN: "email-setting-show",

		API_URN_SMS_LOG_TABLE_DATA_ADMIN: "sms-log-table-data",
		API_URN_EMAIL_LOG_TABLE_DATA_ADMIN: "email-log-table-data",

		API_URN_SMS_SETTING_STORE_UPDATE_ADMIN: "sms-setting-store-update",
		API_URN_SMS_SETTING_SHOW_ADMIN: "sms-setting-show",

		API_URN_SMS_MODULE_LIST_ADMIN: "sms-module-list",
		API_URN_SMS_MODULE_STORE_UPDATE_ADMIN: "sms-module-store-update",
		API_URN_EMAIL_MODULE_STORE_UPDATE_ADMIN: "email-module-store-update",

		API_URN_REGISTRATION_STUDENT_UPDATE_ADMIN: "registration-student-update",

		API_URN_GET_SMS_PACKAGE_ADMIN: "get-sms-package",

		API_URN_BUY_SMS_PACKAGE_ADMIN: "buy-sms-package",

		API_URN_SMS_PAYMENT_FAIL_ADMIN: "sms-payment-fail",
		API_URN_SMS_PAYMENT_SUCCESS_ADMIN: "sms-payment-success",

		API_URN_SEND_SMS_EMAIL_ENQUIRY_ADMIN: "send-sms-email-enquiry",
		API_URN_SMS_TEMPLATE_DROPDOWN_ADMIN: "sms-template-dropdown",
		API_URN_SMS_TEMPLATE_DATA_ADMIN: "sms-template-data",
	};

	const config_year_management = {
		API_URN_ACADEMIC_YEAR_SHOW_ADMIN: "change-academic-year-show",
		API_URN_CHANGE_ACADEMIC_YEAR_UPDATE_ADMIN: "change-academic-year-update",

		API_URN_ACADEMIC_YEAR_LIST_ADMIN: "academic-year-table-data",
		API_URN_ACADEMIC_YEAR_STORE_ADMIN: "academic-year-store",
		API_URN_ACADEMIC_YEAR_EDIT_ADMIN: "academic-year-edit",
		API_URN_ACADEMIC_YEAR_UPDATE_ADMIN: "academic-year-update",
		API_URN_ACADEMIC_YEAR_DESTROY_ADMIN: "academic-year-destroy",

		API_URN_ACADEMIC_YEAR_DROPDOWN_ADMIN: "academic-year-drop-down",

		API_URN_MOVE_STUDENT_LIST_ADMIN: "move-student-list",
		API_URN_MOVE_STUDENT_UPDATE_ADMIN: "move-student-update",
	};

	const config_time_table = {
		API_URN_TIME_TABLE_STORE_ADMIN: "time-table-store",
		API_URN_TIME_TABLE_TABLE_DATA_ADMIN: "time-table-table-data",
		API_URN_TIME_TABLE_SHOW_ADMIN: "time-table-show",
		API_URN_TIME_TABLE_EDIT_ADMIN: "time-table-edit",
		API_URN_TIME_TABLE_UPDATE_ADMIN: "time-table-update",
		API_URN_TIME_TABLE_DESTROY_ADMIN: "time-table-destroy",

		API_URN_TIME_TABLE_DATA_ADMIN: "student/time-table-data",
	};

	const config_public = {
		API_URN_PUBLIC_GET_APP_DATA_ADMIN: "get-app-data",
		API_URN_PUBLIC_GET_APP_NEWS_ADMIN: "app/get-news",
		API_URN_PUBLIC_GET_APP_ALBUMS_ADMIN: "app/get-albums",
		API_URN_PUBLIC_GET_ABOUT_US_SECTION_ADMIN: "app/get-about-us-section",
		API_URN_PUBLIC_GET_TESTIMONIAL_ADMIN: "app/get-testimonials",
		API_URN_PUBLIC_GET_SLIDER_ADMIN: "app/get-slider",
		API_URN_PUBLIC_GET_OUR_PROGRAMS_ADMIN: "app/get-our-programs",
		API_URN_PUBLIC_CONTACTUS_FORM_ADMIN: "app/contactus-form",
		API_URN_PUBLIC_ENROLL_FORM_ADMIN: "app/enrol-form",
		API_URN_GET_NEWS_DETAIL_ADMIN: "app/get-news-detail",
		API_URN_GET_OUR_PROGRAM_DETAIL_ADMIN: "app/get-our-programs-detail",
		API_URN_GET_EVENT_ADMIN: "app/get-event",
		API_URN_GET_EVENT_DETAIL_ADMIN: "app/get-event-detail",
	};

	const config_test_report = {
		API_URN_TESTS_STORE_ADMIN: "tests-store",
		API_URN_TESTS_SHOW_ADMIN: "tests-show",
		API_URN_TESTS_EDIT_ADMIN: "tests-edit",
		API_URN_TESTS_UPDATE_ADMIN: "tests-update",
		API_URN_TESTS_DESTROY_ADMIN: "tests-destroy",
		API_URN_TESTS_TABLE_DATA_ADMIN: "tests-table-data",
		API_URN_TESTS_REPORT_DATA_UPDATE_ADMIN: "test-report-data-update",
		API_URN_STUDENT_TESTS_TABLE_DATA: "student/test-table-data",
		API_URN_STUDENT_TEST_LEADERBOARD_PARENT: "student/test-leaderboard",

		API_URN_EXAM_TYPE_STORE_ADMIN: "exam-type-store",
		API_URN_EXAM_TYPE_EDIT_ADMIN: "exam-type-edit",
		API_URN_EXAM_TYPE_UPDATE_ADMIN: "exam-type-update",
		API_URN_EXAM_TYPE_DESTROY_ADMIN: "exam-type-destroy",
		API_URN_EXAM_TYPE_TABLE_DATA_ADMIN: "exam-type-table-data",
	};

	const config_dashboard = {
		API_URN_GET_DASHBOARD_DATA: "dashboard",
		API_URN_GET_DASHBOARD_DATA_PARENT: "parent/dashboard"
	}

	const config_cctv = {
		API_URN_GET_CCTV_TABLE_DATA_PARENT: "student/cctv-table-data",

		API_URN_CCTV_STORE_ADMIN: "cctv-store",
		API_URN_CCTV_EDIT_ADMIN: "cctv-edit",
		API_URN_CCTV_SHOW_ADMIN: "cctv-show",
		API_URN_CCTV_UPDATE_ADMIN: "cctv-update",
		API_URN_CCTV_DESTROY_ADMIN: "cctv-destroy",
		API_URN_CCTV_TABLE_DATA_ADMIN: "cctv-table-data",

		API_URN_CCTV_ASSIGN_STORE_ADMIN: "cctv-assign-store",
		API_URN_CCTV_ASSIGN_EDIT_ADMIN: "cctv-assign-edit",
		API_URN_CCTV_ASSIGN_SHOW_ADMIN: "cctv-assign-show",
		API_URN_CCTV_ASSIGN_UPDATE_ADMIN: "cctv-assign-update",
		API_URN_CCTV_ASSIGN_DESTROY_ADMIN: "cctv-assign-destroy",
		API_URN_CCTV_ASSIGN_TABLE_DATA_ADMIN: "cctv-assign-table-data",
	}

	//////////////////////////////Configration END//////////////////////////////

	///////////////////////////Shared Dependency START//////////////////////////

	// Packages (Modules that are imported from outside this project)
	Lib.Utils = require("../packages/utils");
	Lib.HttpHandler = require("../packages/http-nodejs")(Lib, http_config);
	// Lib.Money = require('../packages/money')(Lib, config_money);
	// Lib.Geo = require('../packages/geo')(Lib, {});
	// Lib.GeoGoogle = require('../packages/geo-google')(Lib, {});

	////////////////////////////Shared Dependency END///////////////////////////

	/////////////////////////////Project Modules START//////////////////////////

	// Internal Dependencies (Modules that are built inside this project)

	// Shared Internal Dependencies (Modules that are built inside this project)
	Lib.Commons = require("./commons")(Lib, config_shared);

	// Core Modules

	Lib.ProgressReport = require("../core_modules/progress-report")(
		Lib,
		config_progress_report
	);

	Lib.Enquiry = require("../core_modules/enquiry")(Lib, config_enquiry);

	Lib.TeacherComment = require("../core_modules/teacher-comment")(
		Lib,
		config_teacherComment
	);

	Lib.Feedback = require("../core_modules/feedback")(Lib, config_feedback);

	Lib.Authentication = require("../core_modules/authentication")(
		Lib,
		config_auth
	);

	Lib.MealCalendar = require("../core_modules/meal-calendar")(
		Lib,
		config_mealcalendar
	);

	Lib.VirtualMeet = require("../core_modules/virtual-meet")(Lib, config_meet);

	Lib.Holiday = require("../core_modules/holiday")(Lib, config_holiday);

	Lib.Dropdown = require("../core_modules/dropdown")(Lib, config_dropdown);

	Lib.Attendance = require("../core_modules/attendance")(
		Lib,
		config_attendance
	);

	Lib.Diary = require("../core_modules/diary")(Lib, config_diary);

	Lib.Insta = require("../core_modules/insta")(Lib, config_insta);

	Lib.Birthday = require("../core_modules/birthday")(Lib, config_birthday);

	Lib.Videos = require("../core_modules/videos")(Lib, config_videos);

	Lib.Gallery = require("../core_modules/gallery")(Lib, config_gallery);

	Lib.Homework = require("../core_modules/homework")(Lib, config_homework);

	Lib.Elearning = require("../core_modules/e-learning")(Lib, config_e_learning);

	Lib.Staff = require("../core_modules/staff")(Lib, config_staff);

	Lib.Event = require("../core_modules/event")(Lib, config_events);

	Lib.Daycare = require("../core_modules/daycare")(Lib, config_daycare);

	Lib.Configuration = require("../core_modules/configuration")(
		Lib,
		config_configuration
	);

	Lib.Student = require("../core_modules/student")(Lib, config_student);

	Lib.Fee = require("../core_modules/fee")(Lib, config_fee);

	Lib.OurProgram = require("../core_modules/our-program")(
		Lib,
		config_our_program
	);

	Lib.AboutusSection = require("../core_modules/aboutus-section")(
		Lib,
		config_aboutus_section
	);

	Lib.Testimonial = require("../core_modules/testimonial")(
		Lib,
		config_testimonial
	);

	Lib.Seo = require("../core_modules/seo")(Lib, config_seo);

	Lib.SettingAccount = require("../core_modules/setting/account")(
		Lib,
		config_setting_account
	);

	Lib.PageContent = require("../core_modules/page-content")(
		Lib,
		config_page_content
	);

	Lib.SmsEmail = require("../core_modules/sms-email")(Lib, config_sms_email);

	Lib.YearManagement = require("../core_modules/year-management")(
		Lib,
		config_year_management
	);

	Lib.TimeTable = require("../core_modules/time-table")(Lib, config_time_table);

	Lib.Public = require("../core_modules/public")(Lib, config_public);

	Lib.TestReport = require("../core_modules/test-report")(
		Lib,
		config_test_report
	);

	Lib.ProfileChangeRequest = require("../core_modules/profile-change-request")(
		Lib,
		config_profile_change_request
	);

	Lib.Dashboard = require("../core_modules/dashboard")(Lib, config_dashboard);

	Lib.Offer = require("../core_modules/offer")(Lib, config_offer);

	Lib.WebsiteSetting = require("../core_modules/website-setting")(Lib, config_website_setting);

	Lib.MobileSlider = require("../core_modules/mobile-slider")(Lib, config_mobile_slider);

	Lib.Cctv = require("../core_modules/cctv")(Lib, config_cctv);

	/////////////////////////////Project Modules END//////////////////////////
};

/////////////////////////// Module-Loader END ////////////////////////////////

///////////////////////////// Module Exports START /////////////////////////////
module.exports = function (shared_libs, config_app) {
	// Run Loader
	loader(shared_libs, config_app);

	// Return Public Funtions of this module
	return Lib;
}; //////////////////////////// Module Exports END //////////////////////////////
