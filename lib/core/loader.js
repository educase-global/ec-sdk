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
		API_URN_GET_TEACHER_SIGNATURE_LIST_ADMIN: "report-teacher-signature-table-data",

		API_URN_UPLOAD_SIGNATURE_ADMIN: "upload-signature",
		API_URN_GET_SIGNATURE_ADMIN: "get-signature",
		API_URN_GET_PROGRESS_REPORT_DROPDOWN_ADMIN: "get-progress-report-dropdown",

		API_URN_DELETE_PRINCIPAL_SIGNATURE_ADMIN: "delete-principal-signature",
		API_URN_DELETE_EXAM_INCHARGE_SIGNATURE_ADMIN: "delete-exam-incharge-signature",
		API_URN_DELETE_TEACHER_SIGNATURE_ADMIN: "report-teacher-signature-destroySignature",

		API_URN_PROGRESS_REPORT_CARD_SETTING_ADD_ADMIN: "progress-report-card-setting-add",
		API_URN_PROGRESS_REPORT_CARD_SETTING_GET_ADMIN: "progress-report-card-setting-get",

		API_URN_GET_STUDENT_REPORT_ADMIN: "student-report-data",
		API_URN_UPDATE_STUDENT_REPORT_ADMIN: "student-report-update",

		API_URN_PROGRESS_REPORT_TABLE_DATA_PARENT: "student/progress-report-table-data",
		API_URN_PROGRESS_REPORT_SHOW_PARENT: "student/progress-report-show",
		API_URN_PROGRESS_REPORT_CHANGE_STATUS: "progress-report-change-status",
		API_URN_PROGRESS_REPORT_SCHOOL_CHANGE_STATUS: "progress-report-school-change-status",

		API_URN_PROGRESS_REPORT_V3_TEMPLATE_STORE_ADMIN: "3/progress-report-template-store",
		API_URN_PROGRESS_REPORT_V3_TEMPLATE_EDIT_ADMIN: "3/progress-report-template-edit",
		API_URN_PROGRESS_REPORT_V3_TEMPLATE_SHOW_ADMIN: "3/progress-report-template-show",
		API_URN_PROGRESS_REPORT_V3_TEMPLATE_DESTROY_ADMIN: "3/progress-report-template-destroy",
		API_URN_PROGRESS_REPORT_V3_TEMPLATE_TABLE_DATA_ADMIN: "3/progress-report-template-table-data",
		API_URN_PROGRESS_REPORT_V3_TEMPLATE_COPY_ADMIN: "3/progress-report-template-copy",
		API_URN_PROGRESS_REPORT_V3_TEMPLATE_DROPDOWN_ADMIN: "3/progress-report-template-drop-down",

		API_URN_PROGRESS_REPORT_V3_STORE_ADMIN: "3/progress-report-store",
		API_URN_PROGRESS_REPORT_V3_EDIT_ADMIN: "3/progress-report-edit",
		API_URN_PROGRESS_REPORT_V3_UPDATE_ADMIN: "3/progress-report-update",
		API_URN_PROGRESS_REPORT_V3_DESTROY_ADMIN: "3/progress-report-destroy",
		API_URN_PROGRESS_REPORT_V3_DESTROY_STUDENT_DATA_ADMIN: "3/progress-report-destroy-student-data",
		API_URN_PROGRESS_REPORT_V3_TABLE_DATA_ADMIN: "3/progress-report-table-data",
		API_URN_PROGRESS_REPORT_V3_SHOW_ADMIN: "3/progress-report-show",
		API_URN_PROGRESS_REPORT_V3_VIEW_RESULT_ADMIN: "3/progress-report-view-result",
		API_URN_PROGRESS_REPORT_V3_VIEW_MULTIPLE_RESULT_ADMIN: "3/progress-report-view-multiple-result",
		API_URN_PROGRESS_REPORT_V3_GENERATE_CSV_ADMIN: "3/progress-report-generate-csv",
		API_URN_PROGRESS_REPORT_V3_IMPORT_CSV_ADMIN: "3/progress-report-import-csv",
		API_URN_PROGRESS_REPORT_V3_DATA_ADMIN: "3/student-report-data",
		API_URN_PROGRESS_REPORT_V3_SUBJECT_DATA_ADMIN: "3/progress-report-subject-data",
		API_URN_PROGRESS_REPORT_V3_CHANGE_STATUS_ADMIN: "3/progress-report-change-status",
		API_URN_PROGRESS_REPORT_V3_DROPDOWN_ADMIN: "3/get-progress-report-dropdown",
		API_URN_PROGRESS_REPORT_SUBJECT_DATA_ADD_ADMIN: "3/progress-report-subject-data-add",
		API_URN_PROGRESS_REPORT_V3_STUDENT_REPORT_UPDATE_ADMIN: "3/student-report-update",
		API_URN_PROGRESS_REPORT_V3_GENERATE_STUDENT_REPORT_ADMIN: "3/progress-report-generate-student-report",

		API_URN_PROGRESS_REPORT_V3_TEMPLATE_WITH_TEST_REPORT_STORE_ADMIN: "3/progress-report-template-with-test-report-store",
		API_URN_PROGRESS_REPORT_V3_TEMPLATE_WITH_TEST_REPORT_EDIT_ADMIN: "3/progress-report-template-with-test-report-edit",
		API_URN_PROGRESS_REPORT_V3_TEMPLATE_WITH_TEST_REPORT_SHOW_ADMIN: "3/progress-report-template-with-test-report-show",
		API_URN_PROGRESS_REPORT_V3_TEMPLATE_WITH_TEST_REPORT_COPY_ADMIN: "3/progress-report-template-with-test-report-copy",
		API_URN_PROGRESS_REPORT_V3_TEMPLATE_WITH_TEST_REPORT_DESTROY_ADMIN: "3/progress-report-template-with-test-report-destroy",
		API_URN_PROGRESS_REPORT_V3_TEMPLATE_WITH_TEST_REPORT_TABLE_DATA_ADMIN: "3/progress-report-template-with-test-report-table-data",
		API_URN_PROGRESS_REPORT_V3_TEMPLATE_WITH_TEST_REPORT_DROPDOWN_ADMIN: "3/progress-report-template-with-test-report-drop-down",

		API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_STORE_ADMIN: "3/progress-report-with-test-report-store",
		API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_EDIT_ADMIN: "3/progress-report-with-test-report-edit",
		API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_UPDATE_ADMIN: "3/progress-report-with-test-report-update",
		API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_DESTROY_ADMIN: "3/progress-report-with-test-report-destroy",
		API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_DESTROY_STUDENT_DATA_ADMIN: "3/progress-report-with-test-report-destroy-student-data",
		API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_TABLE_DATA_ADMIN: "3/progress-report-with-test-report-table-data",
		API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_SHOW_ADMIN: "3/progress-report-with-test-report-show",
		API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_VIEW_RESULT_ADMIN: "3/progress-report-with-test-report-view-result",
		API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_VIEW_MULTIPLE_RESULT_ADMIN: "3/progress-report-with-test-report-view-multiple-result",
		API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_CHANGE_STATUS_ADMIN: "3/progress-report-with-test-report-change-status",
		API_URN_PROGRESS_REPORT_V3_STUDENT_REPORT_GET_DATA_ADMIN: "3/progress-report-student-report-data",
		API_URN_PROGRESS_REPORT_V3_STUDENT_REPORT_DATA_UPDATE_ADMIN: "3/progress-report-student-report-update",
		API_URN_PROGRESS_REPORT_V3_WITH_TEST_REPORT_GENERATE_STUDENT_REPORT: "3/progress-report-with-test-report-generate-student-report",

		API_URN_PROGRESS_REPORT_PRE_SCHOOL_MULTI_STORE: "progress-report-multi-store",
		API_URN_PROGRESS_REPORT_PRE_SCHOOL_MULTI_EDIT: "progress-report-multi-edit",
		API_URN_PROGRESS_REPORT_PRE_SCHOOL_MULTI_UPDATE: "progress-report-multi-update",
		API_URN_PROGRESS_REPORT_PRE_SCHOOL_MULTI_TABLE_DATA: "progress-report-multi-table-data",
		API_URN_PROGRESS_REPORT_PRE_SCHOOL_MULTI_PAGER_GENERATE_CSV: "progress-report-multi-generate-csv",
		API_URN_PROGRESS_REPORT_PRE_SCHOOL_MULTI_PAGER_IMPORT_CSV: "progress-report-multi-import-csv",
		API_URN_PROGRESS_REPORT_PRE_SCHOOL_MULTI_PAGER_REPORT_DROPDOWN: "progress-report-multi-dropdown",
		API_URN_PROGRESS_REPORT_PRE_SCHOOL_MULTI_PAGER_REPORT_DELETE: "progress-report-multi-destroy",
		API_URN_PROGRESS_REPORT_PRE_SCHOOL_COPY_MULTI_PAGER_REPORT: "progress-report-multi-copy",
		API_URN_PROGRESS_REPORT_MULTI_PAGER_REPORT_VIEW_RE_GENERATE: "progress-report-multi-regenerate",
		API_URN_PROGRESS_REPORT_MULTI_PAGER_GRADE_DROPDOWN: "progress-report-multi-grade-dropdown",

		API_URN_PROGRESS_REPORT_MULTI_FILL_MARKS_SHOW: "progress-report-multi-fill-marks-show",
		API_URN_PROGRESS_REPORT_MULTI_FILL_MARKS_STORE: "progress-report-multi-fill-marks-store",
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
		API_URN_GET_SUBJECT_COMMUNICATION_LIST_ADMIN: "subject-communication-table-data",

		API_URN_ALLOCATE_STUDENT_ADMIN: "allocate-student-to-group",
		API_URN_DEALLOCATE_STUDENT_ADMIN: "deallocate-student-to-group",

		API_URN_GET_DIARY_STUDENT_LIST_ADMIN: "diary-student-list",
		API_URN_DIARY_DAYCARE_STUDENT_LIST_ADMIN: "diary-daycare-student-list",
		API_URN_GET_GROUP_SUBJECT_ADMIN: "get-group-subject",

		API_URN_GET_GROUP_PARENT: "student-group-list",
		API_URN_GET_GROUP_DETAIL_PARENT: "student-group-detail",
		API_URN_GET_SCHOOL_DIARY_LIST_PARENT: "school-diary/list",

		API_URN_SCHOOL_DIARY_SETTING_EDIT: "diary-setting-edit",
		API_URN_SCHOOL_DIARY_SETTING_ACTIVITIES: "diary-activities",
		API_URN_SCHOOL_DIARY_SETTING_SHOW: "diary-setting-show",
		API_URN_SCHOOL_DIARY_SETTING_DESTORY: "diary-setting-destroy",
		API_URN_SCHOOL_DIARY_SETTING_STORE: "diary-setting-store",
		API_URN_SCHOOL_DIARY_SETTING_CHANGE_STATUS: "diary-setting-change-status",

		API_URN_NEW_SCHOOL_DIARY_STORE: "new-diary-store",
		API_URN_NEW_SCHOOL_DIARY_UPDATE: "new-diary-update",
		API_URN_NEW_SCHOOL_DIARY_STUDENT_UPDATE: "new-diary-student-update",
		API_URN_NEW_SCHOOL_DIARY_GET_STUDENT_LIST: "new-diary-get-student-list",
		API_URN_NEW_SCHOOL_DIARY_EDIT: "new-diary-edit",
		API_URN_NEW_SCHOOL_DIARY_STUDENT_TABLE_DATA: "new-diary-student-table-data"
	};

	const config_attendance = {
		API_URN_GET_STUDENT_ATTENDANCE_DATA_ADMIN: "student-attendance-show",
		API_URN_UPDATE_STUDENT_ATTENDANCE_DATA_ADMIN: "student-attendance-store",
		API_URN_EXPORT_STAFF_ATTENDANCE_DATA_ADMIN: "export-staff-attendance",

		API_URN_GET_STAFF_ATTENDANCE_DATA_ADMIN: "staff-attendance-show",
		API_URN_UPDATE_STAFF_ATTENDANCE_DATA_ADMIN: "staff-attendance-store",
		API_URN_UPDATE_STAFF_ATTENDANCE_HISTORY_ADMIN: "staff-attendance-table-data",
		API_URN_STAFF_ATTENDANCE_HISTORY_LIST_ADMIN: "history-staff-attendance-table-data",

		API_URN_STAFF_MY_ATTENDANCE_ADMIN: "staff-my-attendance",
		API_URN_STAFF_ABSENTEE_FORM_ADMIN: "staff-absentee-form",
		API_URN_STAFF_ATTENDANCE_DESTROY_ADMIN: "staff-attendance-destroy",

		API_URN_GET_STUDENT_ATTENDANCE_REPORT_ADMIN: "student-attendance-report",
		API_URN_GET_STAFF_ATTENDANCE_REPORT_ADMIN: "staff-attendance-report",
		API_URN_STAFF_ATTENDANCE_MARK_IN_OUT: "staff-attendance-update-in-out",

		API_URN_GET_STUDENT_ATTENDANCE_HISTORY_ADMIN: "history-student-attendance-table-data",

		API_URN_ADD_HOUR_SETTINGS_ADMIN: "hour-setting-store",
		API_URN_EDIT_HOUR_SETTINGS_ADMIN: "hour-setting-edit",
		API_URN_UPDATE_HOUR_SETTINGS_ADMIN: "hour-setting-update",
		API_URN_DELETE_HOUR_SETTINGS_ADMIN: "hour-setting-destroy",
		API_URN_GET_HOUR_SETTINGS_LIST_ADMIN: "hour-setting-table-data",
		API_URN_V3_ADD_HOUR_SETTINGS_ADMIN: "3/hour-setting-store",
		API_URN_V3_GET_HOUR_SETTINGS_LIST_ADMIN: "3/hour-setting-table-data",
		API_URN_V3_DELETE_HOUR_SETTINGS_ADMIN: "3/hour-setting-destroy",

		API_URN_ADD_ATTENDANCE_SETTINGS_ADMIN: "weekly-holidays-store",
		API_URN_EDIT_ATTENDANCE_SETTINGS_ADMIN: "weekly-holidays-edit",
		API_URN_UPDATE_ATTENDANCE_SETTINGS_ADMIN: "weekly-holidays-update",
		API_URN_DELETE_ATTENDANCE_SETTINGS_ADMIN: "weekly-holidays-destroy",
		API_URN_GET_ATTENDANCE_SETTINGS_LIST_ADMIN: "weekly-holidays-table-data",
		API_URN_ADD_SCHOOL_MASKING: "school-mask-setting-store",
		API_URN_GET_SCHOOL_MASKING: "school-mask-setting-show",

		API_URN_GET_ABSENTEE_FORM_LIST_ADMIN: "absentee-form-table-data",
		API_URN_VIEW_ABSENTEE_FORM_ADMIN: "absentee-form-show",
		API_URN_ABSENTEE_FORM_REPLY_ADMIN: "absentee-form-reply",
		API_URN_GET_OVERALL_ATTENDANCE_ADMIN: "student-overall-attendance",

		API_URN_GET_ABSENT_LIST_PARENT: "student/absent/list",
		API_URN_ABSENT_FORM_PARENT: "student/absent/submit-leave",
		API_URN_GET_ATTENDANCE_HOMESCREEEN_PARENT: "attendance/homeScreen",

		API_URN_RFID_STUDENT_TABLE_DATA: "rfid-student-table-data",
		API_URN_RFID_STUDENT_STORE: "rfid-student-store",
		API_URN_RFID_STUDENT_MULTIPLE_STORE: "rfid-student-multiple-store",

		API_URN_RFID_STUDENT_DESTROY_ADMIN: "rfid-student-destroy",
		API_URN_RFID_STAFF_DESTROY_ADMIN: "rfid-staff-destroy",
		API_URN_RFID_STAFF_EXPORT_ADMIN: "staff-export-rfid",

		API_URN_RFID_STAFF_TABLE_DATA: "rfid-staff-table-data",
		API_URN_RFID_STAFF_STORE: "rfid-staff-store",
		API_URN_RFID_STAFF_MULTIPLE_STORE: "rfid-staff-multiple-store",
		API_URN_RFID_DEVICE_DROPDOWN: "rfid-device-dropdown",

		API_URN_ATTENDANCE_OVERVIEW_STUDENT_ADMIN: "student-attendance-overview",
		API_URN_ATTENDANCE_OVERVIEW_CLASS_SECTION_ADMIN: "student-attendance-class-section-wise-overview",
		API_URN_ATTENDANCE_OVERVIEW_STAFF_ADMIN: "staff-attendance-overview",
		API_URN_ATTENDANCE_OVERVIEW_SCHOOL_ADMIN: "school-overview",
		API_URN_ATTENDANCE_OVERVIEW_CLASS_ADMIN: "class-overview",
		API_URN_ATTENDANCE_OVERVIEW_STAFF_STATS_ADMIN: "staff-overview",
		API_URN_ATTENDANCE_UPDATE_IN_OUT_ADMIN: "student-attendance-update-in-out",

		API_URN_ATTENDANCE_STAFF_SETTING_UPDATE_ADMIN: "staff-attendance-setting-update",
		API_URN_ATTENDANCE_STAFF_SETTING_SHOW_ADMIN: "staff-attendance-setting-show",


		API_URN_MY_ATTENDANCE_STAFF__ADMIN: "my-staff-attendance",
		API_URN_MY_ATTENDANCE_STAFF_DETAIL__ADMIN: "my-staff-attendance-detail",

		API_URN_ATTENDANCE_WEEKLY_HOLIDAY_REMOVAL_STORE_ADMIN: "weekly-holiday-removal-store",
		API_URN_ATTENDANCE_WEEKLY_HOLIDAY_REMOVAL_EDIT_ADMIN: "weekly-holiday-removal-edit",
		API_URN_ATTENDANCE_WEEKLY_HOLIDAY_REMOVAL_DELETE_ADMIN: "weekly-holiday-removal-destroy",
		API_URN_ATTENDANCE_WEEKLY_HOLIDAY_REMOVAL_LIST_ADMIN: "weekly-holiday-removal-table-data",
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
		API_URN_SHOW_MEAL_CALENDAR_ADMIN: "meal-calendar-show",
		API_URN_GET_MEAL_CALENDAR_ADMIN: "meal-calendar-table-data",
		API_URN_GET_MEAL_ADMIN: "get-meal",
		API_URN_GET_MEAL_ALL_ADMIN: "get-meal-time-all",
		API_URN_UPDATE_HIDE_MEAL_TIME_ADMIN: "hide-meal-time",

		API_URN_ADD_MEAL_SETTING_ADMIN: "meal-setting-store",
		API_URN_EDIT_MEAL_SETTING_ADMIN: "meal-setting-edit",

		API_URN_GET_MEAL_CALENDAR_PARENT: "student/meal-calendar",
		API_URN_GET_MEAL_CALENDAR_MONTH_PARENT: "student/meal-calendar-month"
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
		API_URN_TEACHER_COMMENT_CHAT_END_ADMIN: "teacher-comment-chat-end",
		API_URN_TEACHER_COMMENT_READ_STATUS_ADMIN: "teacher-comment-read-status",

		API_URN_TEACHER_COMMENT_SETTING_STORE_ADMIN: "teacher-comment-setting-store",
		API_URN_TEACHER_COMMENT_SETTING_EDIT_ADMIN: "teacher-comment-setting-edit",

		API_URN_CLASS_TEACHER_DROPDOWN_PARENT: "parent/class-teacher-dropdown",
		API_URN_CLASS_TEACHER_COMMENT_STORE_PARENT: "parent/teacher-comment-store"
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
		API_URN_ENQUIRY_SOURCE_CHANGE_STATUS: "enquiry-source-change-status",
		API_URN_ENQUIRY_LEAD_STATUS_CHANGE_ADMIN: "enquiry-lead-status-change",

		API_URN_ENQUIRY_LEAD_STATUS_STORE_ADMIN: "enquiry-lead-status-store",
		API_URN_ENQUIRY_LEAD_STATUS_SHOW_ADMIN: "enquiry-lead-status-show",
		API_URN_ENQUIRY_LEAD_STATUS_EDIT_ADMIN: "enquiry-lead-status-edit",
		API_URN_ENQUIRY_LEAD_STATUS_UPDATE_ADMIN: "enquiry-lead-status-update",
		API_URN_ENQUIRY_LEAD_STATUS_TABLE_DATA_ADMIN: "enquiry-lead-status-table-data",
		API_URN_ENQUIRY_LEAD_STATUS_DESTROY_ADMIN: "enquiry-lead-status-destroy",

		API_URN_VEIW_STUDENT_ENQUIRY_FORM: "student-enquiry-form-view",
		API_URN_UPDATE_STUDENT_ENQUIRY_FORM: "student-enquiry-form-update",
		API_URN_ADD_GUEST_ADMISSION_ENQUIRY: "guest-admission-enquiry",

		API_URN_ENQUIRY_SETTING_UPDATE_ADMIN: "enquiry-setting-update",
		API_URN_ENQUIRY_SETTING_SHOW_ADMIN: "enquiry-setting-show",
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
		API_URN_VIRTUAL_MEETING_SHOW_PARENT: "student/meeting/show"
	};

	const config_student = {
		// Api urns
		API_URN_GET_STUDENT_LIST_ADMIN: "student-table-data",
		API_URN_ADD_STUDENT_ADMIN: "student-store",
		API_URN_GET_EX_STUDENT_ADMIN: "ex-student-table-data",
		API_URN_EX_STUDENT_DROPDOWN_ADMIN: "ex-student-drop-down",
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
		API_URN_STUDENT_APPLY_CLASS_FEE_ADMIN: "student-apply-class-fee",
		API_URN_STUDENT_CHANGE_PASSWORD_ADMIN: "student-change-password",
		API_URN_STUDENT_SHOW_MULTIPLE_ADMIN: "student-show-multiple",
		API_URN_MULTIPLE_STUDENT_CHANGE_DIVISION: "multi-student-change-division",
		API_URN_STUDENT_EXPORT_RFID_ADMIN: "student-export-rfid",
		API_URN_STUDENT_STATS_OVERVIEW_ADMIN: "student-stats-overview",
		API_URN_STUDENT_STATS_CLASSWISH_ADMIN: "student-stats-classwish",
		API_URN_EXPORT_STUDENT_FIELD_DROPDOWN_ADMIN: "export-student-field-dropdown",
		API_URN_EXPORT_UPDATE_STUDENT_LIST_ADMIN: "export-update-student-list",
		API_URN_IMPORT_UPDATE_STUDENT_CSV_ADMIN: "import-update-student-csv",
		API_URN_STUDENT_CHANGE_VERIFIED: "student-change-verified",

		API_URN_STUDENT_ID_CARD_SETTING_STORE: "card-setting-student-store",
		API_URN_FRANCHISE_STUDENT_ID_CARD_SETTING_STORE: "franchise/card-setting-student-store",
		API_URN_FRANCHISE_STUDENT_ID_CARD_SETTING_SHOW: "franchise/card-setting-student-show",
		API_URN_STUDENT_ID_CARD_SETTING_SHOW: "card-setting-student-show",

		API_URN_STUDENT_AMISSION_STORE: "admission-store",
		API_URN_STUDENT_AMISSION_DESTORY: "admission-destroy",
		API_URN_STUDENT_AMISSION_TABLE_LIST_DATA: "admission-table-data",
		API_URN_STUDENT_AMISSION_DETAIL_SHOW: "admission-show",
		API_URN_STUDENT_AMISSION_STATUS: "admission-change-status",
		API_URN_STUDENT_AMISSION_STUDENT_CHANGE_STATUS: "admission-student-change-status",
		API_URN_GET_STUDENT_AMISSION_RECEIPT_DATA: "get-admission-receipt-data",
		API_URN_STUDENT_AMISSION_FEE_COLLECT: "admission-collect",
		API_URN_STUDENT_AMISSION_SETTLEMENT_CONFIRMATION: "settlement-confirmation",
		API_URN_STUDENT_AMISSION_CONFIRMATION_ADD_STUDENT: "admission-add-student",
		API_URN_STUDENT_AMISSION_CONFIRMATION_DELETE_STUDENT: "admission-delete-student",

		API_URN_STUDENT_AMISSION_PARENT_ADMISSION_UPDATE_REMINDER_DATE: "parent/admission-update-reminder-date",
		API_URN_STUDENT_AMISSION_PARENT_GET_ADMISSION_DETAIL: "parent/get-admission-detail",
		API_URN_STUDENT_AMISSION_PARENT_ACCEPT_ADMISSION: 'parent/admission-accept',
		API_URN_STUDENT_AMISSION_PARENT_REJECT_ADMISSION: 'parent/admission-reject',

		API_URN_STUDENT_TC_FROM_SETTINGS_SHOW: "transfer-certificate-form-setting-show",
		API_URN_STUDENT_TC_FROM_SETTINGS_UPDATE: "transfer-certificate-form-setting-update"
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

		API_URN_ADD_DIGITAL_CONTENT: "digital-content-store",
		API_URN_GET_DIGITAL_CONTENT_LIST: "digital-content-table-data",
		API_URN_EDIT_DIGITAL_CONTENT: "digital-content-edit",
		API_URN_UPDATE_DIGITAL_CONTENT: "digital-content-update",
		API_URN_DELETE_DIGITAL_CONTENT: "digital-content-destroy",

		API_URN_E_LEARNING_DIGITAL_CONTENT: "student/elarning/digital-content"
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

	const config_activity_center = {
		API_URN_ADD_ACTIVITY_CENTER: "activity-center-add",
		API_URN_EDIT_ACTIVITY_CENTER: "activity-center-edit",
		API_URN_VIEW_ACTIVITY_CENTER: "activity-center-view",
		API_URN_UPDATE_ACTIVITY_CENTER: "activity-center-update",
		API_URN_DELETE_ACTIVITY_CENTER: "activity-center-destroy",
		API_URN_GET_ACTIVITY_CENTER_LIST: "activity-center-list",
		API_URN_GET_ACTIVITY_CENTER_DROPDOWN_LIST: "activity-center-dropdown",

		API_URN__ACTIVITY_CENTER_ALLOCATE_STUDENT: "activity-student-assign-add",
		API_URN__ACTIVITY_CENTER_DEALLOCATE_STUDENT: "activity-student-assign-delete",
		API_URN__ACTIVITY_CENTER_ALLOCATE_STUDENT_LIST: "activity-student-allocate-list",
		API_URN__ACTIVITY_CENTER_DEALLOCATE_STUDENT_LIST: "activity-student-deallocate-list",

		API_URN__ACTIVITY_CENTER_STUDENT_ATTENDANCE_LIST: "activity-student-attendance-list",
		API_URN__ACTIVITY_CENTER_STUDENT_ATTENDANCE_MARK: "activity-student-attendance-store",
	}

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
		API_URN_STUDENT_GENERATE_BILL_FORM_DATA_ADMIN: "student-generate-bill-form-data",
		API_URN_STUDENT_BILL_DATA_ADMIN: "get-student-bill-data",
		API_URN_STUDENT_GENERATE_BILL_PRINT_DATA_ADMIN: "student-generate-bill-print-data",

		API_URN_STUDENT_GENERATE_BILL_TABLE_DATA_ADMIN: "student-generate-bill-table-data",
		API_URN_STUDENT_GENERATE_BILL_APPROVED_TABLE_DATA_ADMIN: "student-generate-bill-approved-table-data",
		API_URN_STUDENT_GENERATE_BILL_PAID_TABLE_DATA_ADMIN: "student-generate-bill-paid-table-data",

		API_URN_DELETE_STUDENT_GENERATE_BILL_ADMIN: "delete-student-generate-bill",
		API_URN_DAYCARE_TIMING_STORE_UPDATE_ADMIN: "daycare-timing-store-update",
		API_URN_DAYCARE_TIMING_EDIT_ADMIN: "daycare-timing-edit",
		API_URN_DAYCARE_TABLE_DATA_PARENT: "student/daycare-table-data",
		API_URN_GET_DAYCARE_PACKAGE_PARENT: "student/get-daycare-package",

		API_URN_HISTORY_DATA_ADMIN: "student-in-out-history-table-data",
		API_URN_EDIT_HISTORY_DATA_ADMIN: "student-in-out-history-edit",
		API_URN_UPDATE_HISTORY_DATA_ADMIN: "student-in-out-history-update",
		API_URN_STUDENT_IN_OUT_HISTORY_DESTROY_ADMIN: "student-in-out-history-destroy",

		API_URN_DAYCARE_SETTING_UPDATE_ADMIN: "daycare-setting-update",
		API_URN_DAYCARE_SETTING_SHOW_ADMIN: "daycare-setting-show",
		API_URN_DAYCARE_SETTING_DELETE_LOGO_ADMIN: "daycare-setting-destroy-logo",
		API_URN_DAYCARE_SETTING_DELETE_SIGNATURE_ADMIN: "daycare-setting-destroy-signature",

		API_URN_APPROVED_STUDENT_BILL_ADMIN: "approved-student-bill",
		API_URN_STUDENT_GENERATE_BILL_SHOW_ADMIN: "student-generate-bill-show",
		API_URN_COLLECT_STUDENT_DAYCARE_BILL_ADMIN: "collect-student-daycare-bill",

		API_URN_DAYCARE_REPORT_COLLECTION_TABLE_GET: 'daycare-collection-report-table-data',
		API_URN_DAYCARE_REPORT_PENDING_TABLE_GET: 'daycare-pending-report-table-data',
		API_URN_DAYCARE_REPORT_COLLECTION_EXPORT: 'daycare-collection-report-export',

		API_URN_DAYCARE_REPORT_SHOW_ADMIN: "daycare-report-show",
		API_URN_DAYCARE_REPORT_EDIT_ADMIN: "daycare-report-edit",
		API_URN_DAYCARE_REPORT_UPDATE_ADMIN: "daycare-report-update",
		API_URN_DAYCARE_REPORT_DESTROY_ADMIN: "daycare-report-destroy",
		API_URN_DAYCARE_REPORT_TABLE_DATA_ADMIN: "daycare-report-table-data",

		API_URN_DAYCARE_MOOD_SHOW_ADMIN: "daycare-mood-show",
		API_URN_DAYCARE_MOOD_EDIT_ADMIN: "daycare-mood-edit",
		API_URN_DAYCARE_MOOD_STORE_ADMIN: "daycare-mood-store",
		API_URN_DAYCARE_MOOD_UPDATE_ADMIN: "daycare-mood-update",
		API_URN_DAYCARE_MOOD_DESTROY_ADMIN: "daycare-mood-destroy",
		API_URN_DAYCARE_MOOD_DROPDOWN_ADMIN: "daycare-mood-dropdown",
		API_URN_DAYCARE_MOOD_TABLE_DATA_ADMIN: "daycare-mood-table-data",

		API_URN_DAYCARE_ROUTINE_SHOW_ADMIN: "daycare-routine-show",
		API_URN_DAYCARE_ROUTINE_EDIT_ADMIN: "daycare-routine-edit",
		API_URN_DAYCARE_ROUTINE_STORE_ADMIN: "daycare-routine-store",
		API_URN_DAYCARE_ROUTINE_UPDATE_ADMIN: "daycare-routine-update",
		API_URN_DAYCARE_ROUTINE_DESTROY_ADMIN: "daycare-routine-destroy",
		API_URN_DAYCARE_ROUTINE_DROPDOWN_ADMIN: "daycare-routine-dropdown",
		API_URN_DAYCARE_ROUTINE_TABLE_DATA_ADMIN: "daycare-routine-table-data",

		API_URN_DAYCARE_CONFIG_UPDATE_ADMIN: "daycare-config-update",
		API_URN_DAYCARE_CONFIG_SHOW_ADMIN: "daycare-config-show",
		API_URN_DAYCARE_CONFIG_DELETE_LOGO_ADMIN: "daycare-config-delete-logo",

		API_URN_DAYCARE_ACTIVITY_SHOW_ADMIN: "daycare-activity-show",
		API_URN_DAYCARE_ACTIVITY_EDIT_ADMIN: "daycare-activity-edit",
		API_URN_DAYCARE_ACTIVITY_STORE_ADMIN: "daycare-activity-store",
		API_URN_DAYCARE_ACTIVITY_UPDATE_ADMIN: "daycare-activity-update",
		API_URN_DAYCARE_ACTIVITY_DESTROY_ADMIN: "daycare-activity-destroy",
		API_URN_DAYCARE_ACTIVITY_DROPDOWN_ADMIN: "daycare-activity-dropdown",
		API_URN_DAYCARE_ACTIVITY_TABLE_DATA_ADMIN: "daycare-activity-table-data",

		API_URN_DAYCARE_DAILY_REPORT_IMPORT_ADMIN: "daily-report-import",
		API_URN_DAYCARE_DAILY_REPORT_EXPORT_ADMIN: "daily-report-export",

		API_URN_DAYCARE_DAILY_REPORT_TEMPLATE_STORE_ADMIN: "daycare-daily-report-template-store",
		API_URN_DAYCARE_DAILY_REPORT_TEMPLATE_DROPDOWN_ADMIN: "daycare-daily-report-template-dropdown",
		API_URN_DAYCARE_DAILY_REPORT_TEMPLATE_TABLE_DATA_ADMIN: "daycare-daily-report-template-table-data",
		API_URN_DAYCARE_DAILY_REPORT_TEMPLATE_DESTROY_ADMIN: "daycare-daily-report-template-destroy",
		API_URN_DAYCARE_DAILY_REPORT_TEMPLATE_UPDATE_ADMIN: "daycare-daily-report-template-update",
		API_URN_DAYCARE_DAILY_REPORT_TEMPLATE_EDIT_ADMIN: "daycare-daily-report-template-edit",
		API_URN_DAYCARE_DAILY_REPORT_GENERATE_CSV_ADMIN: "daycare-daily-report-generate-csv",
		API_URN_DAYCARE_DAILY_REPORT_SHOW_ADMIN: "daycare-daily-report-show",
		API_URN_DAYCARE_DAILY_REPORT_DESTROY_ADMIN: "daycare-daily-report-destroy",
		API_URN_DAYCARE_DAILY_REPORT_TABLE_DATA_ADMIN: "daycare-daily-report-table-data",
		API_URN_DAYCARE_DAILY_REPORT_IMPORT_CSV_ADMIN: "daycare-daily-report-import-csv",
		API_URN_STUDENT_GENERATE_BILL_EDIT_ADMIN: "student-generate-bill-edit",
		API_URN_STUDENT_GENERATE_BILL_UPDATE_ADMIN: "student-generate-bill-update",

		API_URN_DAYCARE_BILL_PAID_TABLE_DATA_PARENT: "student/daycare-bill-paid-table-data",
		API_URN_DAYCARE_BILL_PENDING_TABLE_DATA_PARENT: "student/daycare-bill-pending-table-data",
		API_URN_DAYCARE_DAILY_REPORT_CHANGE_STATUS_ADMIN: "daycare-daily-report-change-status",
		API_URN_DAYCARE_DAILY_REPORT_TABLE_DATA_PARENT: "student/daily-report-table-data",

		API_URN_DAYCARE_CATEGORY_EXPORT_ADMIN: "daycare-category-export",
		API_URN_DAYCARE_CATEGORY_IMPORT_ADMIN: "daycare-category-import",

		API_URN_DAYCARE_GST_SETTING_SHOW: "daycare-gst-setting-show",
		API_URN_DAYCARE_GST_SETTING_UPDATE: "daycare-gst-setting-update",

		API_URN_DAYCARE_STUDENT_REPORT: "daycare-student-report",
		API_URN_DAYCARE_BILLING_REPORT: "daycare-billing-report-table-data",
		API_URN_DAYCARE_BILLING_REPORT_SHOW: "daycare-billing-report-show",

		API_URN_DAYCARE_COMPANY_STORE: "daycare-company-store",
		API_URN_DAYCARE_SHOW_COMPANY: "daycare-company-show",
		API_URN_DAYCARE_EDIT_COMPANY_DETAIL: "daycare-company-edit",
		API_URN_DAYCARE_UPDATE_COMPANY_DETAIL: "daycare-company-update",
		API_URN_DAYCARE_DELETE_COMPANY_DETAIL: "daycare-company-destroy",
		API_URN_DAYCARE_GET_COMPANY_LIST: "daycare-company-table-data",
		API_URN_DAYCARE_GET_COMPANY_DROPDOWN_LIST: "daycare-company-dropdown"
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
		API_URN_GET_STUDENT_MOTHER_BIRTHDAY: "get-student-mother-birthday",
		API_URN_GET_STUDENT_FATHER_BIRTHDAY: "get-student-father-birthday",
		API_URN_SEND_SMS_STUDENT_BIRTHDAY_ADMIN: "send-sms-student-birthday",
		API_URN_SEND_SMS_STUDENT_MOTHER_BIRTHDAY_ADMIN: "send-sms-student-mother-birthday",
		API_URN_SEND_SMS_STUDENT_FATHER_BIRTHDAY_ADMIN: "send-sms-student-father-birthday",
		API_URN_SEND_SMS_STAFF_BIRTHDAY_ADMIN: "send-sms-staff-birthday",
		API_URN_SEND_SMS_ENQUIRY_BIRTHDAY_ADMIN: "send-sms-enquiry-birthday",
		API_URN_STORE_SETTING_ADMIN: "birthday-setting-store",
		API_URN_SHOW_SETTING_ADMIN: "birthday-setting-show",
		API_URN_BIRTHDAY_DELETE_LOGO_ADMIN: "birthday-setting-delete-logo"
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
		API_URN_ADD_STUDENT_CUSTOMIZE_SCHEDULE_FEE: "add-student-customize-schedule-fee",
		API_URN_GET_STUDENT_LATE_FEE_SCHEDULE_ADMIN: "student-schedule-late-fee",
		API_URN_ADD_STUDENT_FEE_ADMIN: "student-fee-store",
		API_URN_ADD_STUDENT_FEE_LIST_ADMIN: "student-fee-table-data",

		API_URN_DELETE_STUDENT_FEE_LIST_ADMIN: "delete-student-fee-table-data",
		API_URN_STUDENT_FEE_COLLECTION_REPORT_ADMIN: "student-collection-fee-report",
		API_URN_STUDENT_FEE_PENDING_REPORT_ADMIN: "student-pending-fee-report",
		API_URN_STUDENT_FEE_INSTALLMENT_DATA_ADMIN: "student-installment-data",
		API_URN_STUDENT_FEE_PENDING_INSTALLMENT_EXPORT_ADMIN: "student-pending-installment-export",

		API_URN_STUDENT_RTE_FEE_TABLE_DATA_ADMIN: "student-rte-fee-table-data",

		API_URN_ADD_EXPENSES_ADMIN: "expenses-store",
		API_URN_EDIT_EXPENSES_ADMIN: "expenses-edit",
		API_URN_UPDATE_EXPENSES_ADMIN: "expenses-update",
		API_URN_DELETE_EXPENSES_ADMIN: "expenses-destroy",
		API_URN_GET_EXPENSES_LIST_ADMIN: "expenses-table-data",
		API_URN_EXPENSES_REPORT_DATA_ADMIN: "expenses-report-data",

		API_URN_ADD_EXPENSES_TYPE_ADMIN: "expenses-type-store",
		API_URN_EDIT_EXPENSES_TYPE_ADMIN: "expenses-type-edit",
		API_URN_UPDATE_EXPENSES_TYPE_ADMIN: "expenses-type-update",
		API_URN_DELETE_EXPENSES_TYPE_ADMIN: "expenses-type-destroy",
		API_URN_GET_EXPENSES_TYPE_LIST_ADMIN: "expenses-type-table-data",
		API_URN_GET_EXPENSES_TYPE_DROPDOWN_ADMIN: "expenses-type-dropdown",


		API_URN_ADD_UPDATE_FEE_SETTING_ADMIN: "fee-setting-update",
		API_URN_SHOW_FEE_SETTING_ADMIN: "fee-setting-show",
		API_URN_FEE_SETTING_DELETE_LOGO_ADMIN: "fee-setting-destroy-logo",
		API_URN_FEE_SETTING_DELETE_SIGNATURE_ADMIN: "fee-setting-destroy-signature",

		API_URN_STUDENT_FEE_RECEIPT_DATA_ADMIN: "student-fee-receipt-data",
		API_URN_STUDENT_FEE_DISCOUNT_EXPORT_ADMIN: "student-fee-discount-export",

		API_URN_DELETE_STUDENT_FEE_DETAILS_ADMIN: "delete-student-fee-details",
		API_URN_REMOVE_STUDENT_FEE_ADMIN: "remove-student-fee",
		API_URN_REMOVE_STUDENT_FEE_DETAILS_ADMIN: "remove-student-fee",

		API_URN_EMAIL_STUDENT_FEE_RECEIPT_ADMIN: "email-student-fee-receipt",
		API_URN_STUDENT_PRINT_CLASS_FEE_CONFIG_ADMIN: "student-print-class-fee-config",

		API_URN_PARENT_FEE_LIST_VIEW: "student/fee",
		API_URN_PARENT_FEE_EMAIL_RECEIPT_VIEW: "student/fee-email-receipt",
		API_URN_STUDENT_FEE_SCHEDULE_DEDUCT_LIST_ADMIN: "student-fee-schedule-deduct-list",
		API_URN_STUDENT_FEE_CHANGE_CHEQUE_STATUS_ADMIN: "student-fee-change-cheque-status",
		API_URN_FEE_TYPE_CHANGE_STATUS_ADMIN: "fee-type-change-status",
		API_URN_FEE_INSTALLMENT_DETAILS_PARENT: "student/fee-installment-details",

		API_URN_CLASS_CONFIG_TYPE_STORE_ADMIN: "class-config-type-store",
		API_URN_CLASS_CONFIG_TYPE_EDIT_ADMIN: "class-config-type-edit",
		API_URN_CLASS_CONFIG_TYPE_VIEW_ADMIN: "class-config-type-show",
		API_URN_CLASS_CONFIG_TYPE_UPDATE_ADMIN: "class-config-type-update",
		API_URN_CLASS_CONFIG_TYPE_DELETE_ADMIN: "class-config-type-destroy",
		API_URN_CLASS_CONFIG_TYPE_LIST_ADMIN: "class-config-type-table-data",
		API_URN_CLASS_CONFIG_TYPE_DROPDOWN: "class-config-type-drop-down",

		API_URN_FEE_DISCOUNT_STORE_ADMIN: "fee-discount-store",
		API_URN_FEE_DISCOUNT_EDIT_ADMIN: "fee-discount-edit",
		API_URN_FEE_DISCOUNT_VIEW_ADMIN: "fee-discount-show",
		API_URN_FEE_DISCOUNT_UPDATE_ADMIN: "fee-discount-update",
		API_URN_FEE_DISCOUNT_DELETE_ADMIN: "fee-discount-destroy",
		API_URN_FEE_DISCOUNT_LIST_ADMIN: "fee-discount-table-data",
		API_URN_FEE_DISCOUNT_DROPDOWN: "fee-discount-drop-down",

		API_URN_STUDENT_FEE_CONFIG_TYPE_DROPDOWN: "student-fee-config-Type-dropdown",
		API_URN_CHANGE_STUDENT_FEE_BY_CONFIG_TYPE: "change-student-fee-by-config-Type",
		API_URN_STUDENT_FEE_DISCOUNT_TABLE_DATA_ADMIN: "student-fee-discount-table-data",
		API_URN_FEE_DETAIL_REPORT_ADMIN: "collect-fee-report-data",
		API_URN_FEE_EXPORT_DETAIL_REPORT_ADMIN: "export-collect-fee-report-data",
		API_URN_CHANGE_MULTIPLE_STUDENT_FEE_BY_CONFIG_TYPE_ADMIN: "change-multiple-student-fee-by-config-type",
		API_URN_STUDENT_FEE_ADVANCE_INSTALLMENT_DETAIL_ADMIN: "student-fee-advance-installment-detail",

		API_URN_ONBOARDING_RAZORPAY_BUSINESS_ADMIN: "onboarding-razorpay-business",
		API_URN_ONBOARDING_RAZORPAY_OWNER_ADMIN: "onboarding-razorpay-owner",
		API_URN_ONBOARDING_RAZORPAY_BANK_DETAIL_ADMIN: "onboarding-razorpay-bank-detail",
		API_URN_ONBOARDING_RAZORPAY_UPLOAD_DOCUMENT_ADMIN: "onboarding-razorpay-upload-document",

		API_URN_ONBOARDING_EASEBUZZ_BUSINESS_ADMIN: "onboarding-easebuzz-business",

		API_URN_FEE_ADVANCE_INSTALLMENT_DETAIL_PARENT: "student/fee-advance-installment-detail",
		API_URN_DELETE_FEE_REPORT_DATA_ADMIN: "delete-fee-report-data",
		API_URN_STUDENT_FEE_STATUS_ADMIN: "student-fee-states",
		API_URN_STUDENT_FEE_EXPORT_ADMIN: "export-student-fee",

		API_URN_ADDITIONAL_FEE_CATEGORY_STORE_ADMIN: "additional-fee-category-store",
		API_URN_ADDITIONAL_FEE_CATEGORY_EDIT_ADMIN: "additional-fee-category-edit",
		API_URN_ADDITIONAL_FEE_CATEGORY_UPDATE_ADMIN: "additional-fee-category-update",
		API_URN_ADDITIONAL_FEE_CATEGORY_DESTROY_ADMIN: "additional-fee-category-destroy",
		API_URN_ADDITIONAL_FEE_CATEGORY_CHANGE_STATUS_ADMIN: "additional-fee-category-change-status",
		API_URN_ADDITIONAL_FEE_CATEGORY_TABLE_DATA_ADMIN: "additional-fee-category-table-data",
		API_URN_ADDITIONAL_FEE_CATEGORY_DROPDOWN_ADMIN: "additional-fee-category-dropdown",

		API_URN_ADDITIONAL_FEE_ASSIGN_ALLOCATE_STORE_ADMIN: "additional-fee-student-allocate-store",
		API_URN_ADDITIONAL_FEE_ASSIGN_ALLOCATE_LIST_ADMIN: "additional-fee-student-allocate-list",
		API_URN_ADDITIONAL_FEE_ASSIGN_DEALLOCATE_DESTROY_ADMIN: "additional-fee-student-deallocate-destroy",
		API_URN_ADDITIONAL_FEE_ASSIGN_DEALLOCATE_LIST_ADMIN: "additional-fee-student-deallocate-list",

		API_URN_ADDITIONAL_FEES_STORE_ADMIN: "additional-fee-store",
		API_URN_ADDITIONAL_FEES_UPDATE_ADMIN: "additional-fee-update",
		API_URN_ADDITIONAL_FEES_DESTROY_ADMIN: "additional-fee-destroy",
		API_URN_STUDENT_ADDITIONAL_RECURRING_FEE_DESTROY_ADMIN: "student-additional-recurring-fee-destroy",
		API_URN_ADDITIONAL_FEES_EDIT_ADMIN: "additional-fee-edit",
		API_URN_ADDITIONAL_FEES_TABLE_DATA_ADMIN: "additional-fee-table-data",
		API_URN_ADDITIONAL_FEE_STUDENT_ASSIGN_LIST_ADMIN: "additional-fee-student-assign-list",
		API_URN_ADDITIONAL_FEES_SHOW_ADMIN: "additional-fee-show",
		API_URN_ADDITIONAL_FEES_UPDATE_STUDENT_DATA_ADMIN: "additional-fee-update-student-data",
		API_URN_ADDITIONAL_FEES_DROPDOWN_ADMIN: "additional-fee-dropdown",
		API_URN_ADDITIONAL_FEES_CHANGE_STATUS_ADMIN: "additional-fee-change-status",

		API_URN_ADDITIONAL_FEES_VIEW_LIST_ADMIN: "additional-fee-view-table-data",
		API_URN_ADDITIONAL_FEES_VIEW_SHOW_ADMIN: "additional-fee-data",
		API_URN_ADDITIONAL_FEES_COLLECT_ADMIN: "additional-fee-collect",

		API_URN_ADDITIONAL_FEES_REPORT_TABLE_DATA_ADMIN: "additional-fee-report-table-data",
		API_URN_ADDITIONAL_FEES_SETTING_STORE_ADMIN: "additional-fee-setting-store",
		API_URN_ADDITIONAL_FEES_SETTING_SHOW_ADMIN: "additional-fee-setting-show",
		API_URN_ADDITIONAL_FEES_SETTING_DELETE_LOGO_ADMIN: "additional-fee-setting-destroy-logo",
		API_URN_ADDITIONAL_FEES_SETTING_DELETE_SIGNATURE_ADMIN: "additional-fee-setting-destroy-signature",

		API_URN_ADDITIONAL_FEES_REPORT_EXPORT_ADMIN: "additional-fee-report-export",
		API_URN_ADDITIONAL_FEES_STATES_SHOW_ADMIN: "additional-fee-states",

		API_URN_EXPENSES_REPORT_GENERATE_CSV_ADMIN: "expenses-report-generate-csv",
		API_URN_ADDITIONAL_FEE_TABLE_DATA_PARENT: "student/additional-fee-table-data",
		API_URN_ADDITIONAL_FEE_SHOW_PARENT: "student/additional-fee-show",
		API_URN_STUDENT_FEES_TRANSACTION_ADMIN: "student-fee-transaction",
		API_URN_CLASS_CONFIG_TYPE_MARK_DEFAULT_ADMIN: "class-config-type-mark-default",
		API_URN_EXPORT_FEE_TRANSACTION_CSV_ADMIN: "export-fee-transaction-csv",
		API_URN_OPENING_BALANCE_STORE_ADMIN: "opening-balance-store",
		API_URN_STUDENT_FEES_DETAIL_ADMIN: "student-fee-detail",
		API_URN_ALL_STUDENT_FEES_DETAIL_ADMIN: "all-student-fee-detail",
		API_URN_STUDENT_LAST_YEAR_OVERDUE_LIST_ADMIN: "student-last-year-overdue-list",
		API_URN_LAST_YEAR_OVERDUE_AMOUNT_UPDATE_ADMIN: "last-year-overdue-amount-update",
		API_URN_STUDENT_ADDITIONAL_PAID_FEE_TABLE_DATA_PARENT: "student/additional-paid-fee-table-data",

		API_URN_ADDITIONAL_FEE_RECURRING_UPDATE_ADMIN: "additional-fee-recurring-update",
		API_URN_ADDITIONAL_FEE_RECURRING_DESTROY_ADMIN: "additional-fee-recurring-destroy",
		API_URN_ADDITIONAL_FEES_RECURRING_TABLE_DATA_ADMIN: "additional-recurring-fee-table-data",
		API_URN_ADDITIONAL_FEES_STATUS_RESUME_ADMIN: "resume-additional-fee",
		API_URN_ADDITIONAL_FEES_EXPIRE_STATUS_ADMIN: "additional-fee-expire-status",
		API_URN_ADDITIONAL_FEE_RECURRING_SHOW_ADMIN: "additional-fee-recurring-show",
		API_URN_ADDITIONAL_FEE_RECURRING_EDIT_ADMIN: "additional-fee-recurring-edit",
		API_URN_ADDITIONAL_FEE_RECURRING_STUDENT_ASSIGN_LIST_ADMIN: "additional-fee-recurring-student-assign-list",
		API_URN_ADDITIONAL_FEE_RECURRING_CHANGE_STATUS_ADMIN: "additional-fee-recurring-change-status",
		API_URN_SEND_INSTALLMENT_PAYMENT_REQUEST_EMAIL_ADMIN: "send-installment-payment-request-email",

		API_MODULE_ACTIVATION_PAYMENT_LIST: "get-module-activation-list",
		API_MODULE_ACTIVATION_PAYMENT_VIEW: "module-activation-view",
		API_MODULE_ACTIVATION_PAYMENT_DROPDOWN_LIST: "get-module-activation-dropdown",
		API_MODULE_ACTIVATION_PAYMENT_STORE: "module-activation-store",
		API_MODULE_ACTIVATION_PAYMENT_STATUS_CHANGE: "module-activation-status-change",

		API_MODULE_EXPORT_STUDENT_FEE_CONFIGURATION_EXCEL: "export-student-fee-configuration-excel",
		API_MODULE_IMPORT_STUDENT_FEE_CONFIGURATION_EXCEL: "import-student-fee-configuration-excel",

		API_MODULE_EXPORT_STUDENT_FEE_COLLECTION_EXCEL: "export-student-fee-collection-excel",
		API_MODULE_IMPORT_STUDENT_FEE_COLLECTION_EXCEL: "import-student-fee-collection-excel",
		API_MODULE_EXPORT_STUDENT_FEE_COLLECTION_EXCEL_VERTICAL: "export-student-fee-collection-excel-vertical",
		API_MODULE_IMPORT_STUDENT_FEE_COLLECTION_EXCEL_VERTICAL: "import-student-fee-collection-excel-vertical",
		API_MODULE_EXPORT_STUDENT_FEE_REPORT_EXCEL_VERTICAL: "export-student-fee-report-excel-vertical",

		API_MODULE_STUDENT_FEE_SCHEDULE_SETTLEMENT: "student-schedule-settlement",
		API_MODULE_STUDENT_FEE_SCHEDULE_SETTLEMENT_DETAIL: "student-schedule-settlement-detail",
		API_MODULE_STUDENT_FEE_GENERATE_CONSOLIDATED_RECEIPT: "generate-consolidated-receipt",

		API_MODULE_STUDENT_FEE_MULTIPLE_ADDITIONAL_FEE_ALLOCATE: "multiple-additional-fee-student-allocate",

		API_MODULE_STUDENT_FEE_ADDITIONAL_FEE_VIEW_TABLE_DATA: "additional-student-fee-view-table-data",

		API_MODULE_STUDENT_ASSIGN_FEE_MULTIPLE_ADDITIONAL_FEE: "assign-fee-multiple-additional-fee"
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
		API_URN_EDIT_GENERAL_SETTINGS_DELETE_LOGO: "general-delete-logo",

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

		API_URN_GET_DESIGNATION_ATTRIBUTE_LIST_ADMIN: "designation-attribute-table-data",
		API_URN_DELETE_DESIGNATION_ATTRIBUTE_ADMIN: "designation-attribute-destroy",
		API_URN_EDIT_DESIGNATION_ATTRIBUTE_ADMIN: "designation-attribute-edit",
		API_URN_UPDATE_DESIGNATION_ATTRIBUTE_ADMIN: "designation-attribute-update",
		API_URN_ADD_DESIGNATION_ATTRIBUTE_ADMIN: "designation-attribute-store",
		API_URN_GET_DESIGNATION_ATTRIBUTE_LIST_JSON_ADMIN: "designation-attribute-list",

		API_URN_GET_STUDENT_ATTRIBUTE_LIST_ADMIN: "student-attribute-table-data",
		API_URN_DELETE_STUDENT_ATTRIBUTE_ADMIN: "student-attribute-destroy",
		API_URN_EDIT_STUDENT_ATTRIBUTE_ADMIN: "student-attribute-edit",
		API_URN_UPDATE_STUDENT_ATTRIBUTE_ADMIN: "student-attribute-update",
		API_URN_ADD_STUDENT_ATTRIBUTE_ADMIN: "student-attribute-store",
		API_URN_GET_STUDENT_ATTRIBUTE_LIST_JSON_ADMIN: "student-attribute-list",

		API_URN_SCHOOL_WEBSITE_SLIDER_ADD_ADMIN: "school-website-slider-add",
		API_URN_SCHOOL_WEBSITE_SLIDER_SHOW_ADMIN: "school-website-slider-show",

		API_URN_STUDENT_ENROLLMENT_SETTING_UPDATE_ADMIN: "student-enrollment-setting-update",
		API_URN_STUDENT_ENROLLMENT_SETTING_SHOW_ADMIN: "student-enrollment-setting-show",

		API_URN_TEAM_STORE: "team-store",
		API_URN_TEAM_EDIT: "team-edit",
		API_URN_TEAM_UPDATE: "team-update",
		API_URN_TEAM_DESTROY: "team-destroy",
		API_URN_TEAM_TABLE_DATA: "team-table-data",

		API_URN_TEAM_SCHOOL_STORE: "team-school-store",
		API_URN_TEAM_SCHOOL_EDIT: "team-school-edit",
		API_URN_TEAM_SCHOOL_UPDATE: "team-school-update",
		API_URN_TEAM_SCHOOL_DESTROY: "team-school-destroy",
		API_URN_TEAM_SCHOOL_TABLE_DATA: "team-school-table-data",

		API_URN_SCHOOL_GST_SETTING_UPDATE_ADMIN: "school/gst-setting-update",
		API_URN_SCHOOL_GST_SETTING_SHOW_ADMIN: "school/gst-setting-show",
	};

	const config_holiday = {
		API_URN_GET_HOLIDAY_CALENDAR_LIST_ADMIN: "holiday-calendar-table-data",
		API_URN_POST_HOLIDAY_CALENDAR_BULK_UPDATE_ADMIN: "holiday-calendar-franchise-bulk-store",
		API_URN_DELETE_HOLIDAY_CALENDAR_ADMIN: "holiday-calendar-destroy",
		API_URN_EDIT_HOLIDAY_CALENDAR_ADMIN: "holiday-calendar-edit",
		API_URN_UPDATE_HOLIDAY_CALENDAR_ADMIN: "holiday-calendar-update",
		API_URN_ADD_HOLIDAY_CALENDAR_ADMIN: "holiday-calendar-store",
		API_URN_GET_CALENDAR_ADMIN: "holiday-calendar-data",
		API_URN_FRANCHISE_HOLIDAY_CALENDAR_TABLE_DATA_ADMIN: "holiday-calendar-franchise-table-data",
		API_URN_IMPORT_HOLIDAY_ADMIN: 'holiday-calendar-import',
		API_URN_GET_HOLIDAY_CALENDAR_PARENT: "student/holiday-calendar/list",
		API_URN_HOLIDAY_CALENDAR_DROPDOWN: "holiday-calendar-dropdown",
		API_URN_GET_MERGE_HOLIDAY_CALENDAR_LIST_ADMIN: "merge-holiday-calendar-show",
		API_URN_UPDATE_MERGE_HOLIDAY_CALENDAR_ADMIN: "merge-holiday-calendar-update"
	};

	const config_dropdown = {
		API_URN_GET_ALL_CLASS_AND_SECTION_DROPDOWN: "get-all-class-section-dropdown",
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
		API_URN_GET_HOLIDAY_DATE: "get-holiday-date",
		API_URN_GET_CCTV_DROPDOWN: "get-cctv-dropdown",
		API_URN_GET_PRODUCT_CATEGORY_DROPDOWN: "get-category-dropdown",
		API_URN_GET_PRODUCT_VARIANT_DROPDOWN: "get-variant-dropdown",
		API_URN_GET_PRODUCT_OPTIONS_DROPDOWN: "get-option-dropdown",
		API_URN_GET_PRODUCT_MARKETPLACE_DROPDOWN: "get-product-dropdown",
		API_URN_GET_STUDENT_FEED: "get-student-feed",
		API_URN_GET_ENQUIRY_SOURCES_ENROLL_DROPDOWN: "get-enquiry-source-dropdown",
		API_URN_GET_ENQUIRY_CLASS_ENROLL_DROPDOWN: "get-enquiry-class-dropdown",
		API_URN_GET_ROYALTY_FEE_DROPDOWN: "royalty-feetype-dropdown",
		API_URN_GET_ROYALTY_COLLECTION_DROPDOWN: "royalty-collection-dropdown",
		API_URN_GET_ROYALTY_SETUP_DROPDOWN: "royalty-setup-dropdown",
		API_URN_GET_ENROLL_DATA: "/plugin/get-enroll-data",
		API_URN_GET_CURRICULLUM_CATEGORY_DATA: 'curriculum-category-dropdown',
		API_URN_GET_CURRICULLUM_TOPIC_DATA: 'curriculum-topic-dropdown',
		API_URN_GET_MODULE_LOG_PARENT: "student/get-module-log",
		API_URN_CALENDAR_EVENT_LIST: "calendar-event-list",
		API_URN_GET_DAYCARE_ALLOCATE_STUDENT_DROPDOWN: "get-daycare-allcate-student-dropdown",
		API_URN_GET_STAFF_DROPDOWN: "get-staff-dropdown",
		API_URN_GET_SCHOOL_YEAR_DROPDOWN: "school-year",
		API_URN_GET_CURRENT_USER_YEAR: "get-current-user-year",
		API_URN_UPDATE_CURRENT_USER_YEAR: "update-current-user-year",
		API_URN_NEW_GET_CLASS_DROPDOWN: "new-get-class-dropdown",
		API_URN_GET_BRANCHES_DROPDOWN: "get-branches",
		API_URN_GET_STAFF_DESIGNATION_DROPDOWN: "get-staff-designation",
		API_URN_NEW_GET_SECTION_DROPDOWN: "new-get-section-dropdown",
		API_URN_GOOGLE_DRIVE_TOKEN_UPDATE: "google-drive-token-update",
		API_URN_GET_CITY_DROPDOWN: "plugin/get-city-dropdwon",
		API_URN_GET_STATE_DROPDOWN: "plugin/get-state-dropdwon",
		API_URN_GET_SCHOOL_DROPDOWN: "plugin/get-school-dropdwon"
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

	const config_payroll = {
		// Api urns
		API_URN_ATTENDANCE_RULE_STORE: "payroll-attendance-rule-store",
		API_URN_ATTENDANCE_RULE_DETAIL_SHOW: "payroll-attendance-rule-show",
		API_URN_ATTENDANCE_RULE_DETAIL_EDIT: "payroll-attendance-rule-edit",
		API_URN_ATTENDANCE_RULE_DETAIL_UPDATE: "payroll-attendance-rule-update",
		API_URN_ATTENDANCE_RULE_DELETE: "payroll-attendance-rule-destroy",
		API_URN_ATTENDANCE_RULE_TABLE_DATA: "payroll-attendance-rule-table-data",
		API_URN_ATTENDANCE_RULE_DROPDOWN_DATA: "payroll-attendance-rule-dropdown",

		API_URN_ATTENDANCE_ASSIGN_STORE: "payroll-attendance-assign-store",
		API_URN_ATTENDANCE_ASSIGN_DETAIL_EDIT: "payroll-attendance-assign-edit",
		API_URN_ATTENDANCE_ASSIGN_DETAIL_UPDATE: "payroll-attendance-assign-update",
		API_URN_ATTENDANCE_ASSIGN_TABLE: "payroll-attendance-assign-table-data",
		API_URN_PAYROLL_ATTENDANCE_ASSIGN_STAFF_DROPDOWN: "payroll-attendance-assign-staff-dropdown",

		API_URN_LEAVE_RULE_STORE: "payroll-leave-rule-store",
		API_URN_LEAVE_RULE_EDIT: "payroll-leave-rule-edit",
		API_URN_LEAVE_RULE_UPDATE: "payroll-leave-rule-update",
		API_URN_LEAVE_RULE_DELETE: "payroll-leave-rule-destroy",
		API_URN_LEAVE_RULE_TABLE_DATA: "payroll-leave-rule-table-data",

		API_URN_LEAVE_TYPE_STORE: "payroll-leave-type-store",
		API_URN_LEAVE_TYPE_EDIT: "payroll-leave-type-edit",
		API_URN_LEAVE_TYPE_UPDATE: "payroll-leave-type-update",
		API_URN_LEAVE_TYPE_DESTROY: "payroll-leave-type-destroy",
		API_URN_LEAVE_TYPE_TABLE_DATA: "payroll-leave-type-table-data",
		API_URN_LEAVE_TYPE_DROP_DOWN: "payroll-leave-type-drop-down",

		API_URN_LEAVE_LOG_DATA_TABLE: "payroll-leave-log-table-data",

		API_URN_LEAVE_ASSIGN_STORE: "payroll-leave-assign-store",
		API_URN_LEAVE_ASSIGN_EDIT: "payroll-leave-assign-edit",
		API_URN_LEAVE_ASSIGN_UPDATE: "payroll-leave-assign-update",
		API_URN_LEAVE_ASSIGN_TABLE_DATA: "payroll-leave-assign-table-data",

		API_URN_PAYROLL_SALARY_STORE: "payroll-salary-store",
		API_URN_PAYROLL_SALARY_UPDATE: "payroll-salary-update",
		API_URN_PAYROLL_SALARY_TABLE_DATA: "payroll-salary-table-data",
		API_URN_PAYROLL_SALARY_DESTORY: "payroll-salary-destroy",
		API_URN_PAYROLL_SALARY_EDIT: "payroll-salary-edit",

		API_URN_PAYROLL_LEAVE_RULE_DROPDOWN: "payroll-leave-rule-dropdown",
		API_URN_PAYROLL_SALARY_DROPDOWN: "payroll-salary-dropdown",

		API_URN_PAYROLL_SALARY_ASSIGN_STORE: "payroll-salary-assign-store",
		API_URN_PAYROLL_SALARY_ASSIGN_TABLE_DATA: "payroll-salary-assign-table-data",
		API_URN_PAYROLL_SALARY_ASSIGN_EDIT: "payroll-salary-assign-edit",
		API_URN_PAYROLL_SALARY_ASSIGN_UPDATE: "payroll-salary-assign-update",
		API_URN_PAYROLL_SALARY_ASSIGN_DETAIL_SHOW: "payroll-salary-assign-show",
		API_URN_PAYROLL_SALARY_DEDUCTION_UPDATE: "payroll-salary-deduction-update",
		API_URN_PAYROLL_SALARY_DEDUCTION_DESTROY: "payroll-salary-deduction-destroy",
		API_URN_PAYROLL_SALARY_BULK_ASSIGN: "payroll-salary-assign-bulk-store",

		API_URN_PAYROLL_SALARY_COMPONENT_STORE: "payroll-salary-component-store",
		API_URN_PAYROLL_SALARY_COMPONENT_EDIT: "payroll-salary-component-edit",
		API_URN_PAYROLL_SALARY_COMPONENT_UPDATE: "payroll-salary-component-update",
		API_URN_PAYROLL_SALARY_COMPONENT_DELETE: "payroll-salary-component-destroy",
		API_URN_PAYROLL_SALARY_COMPONENT_EARNING_TABLE_DATA_LIST: "payroll-salary-earning-component-table-data",
		API_URN_PAYROLL_SALARY_COMPONENT_DEDUCTION_TABLE_DATA_LIST: "payroll-salary-deduction-component-table-data",
		API_URN_PAYROLL_SALARY_COMPONENT_DROPDOWN: "payroll-salary-component-dropdown",
		API_URN_PAYROLL_SALARY_COMPONENT_CHANGE_STATUS: "payroll-salary-component-change-status",

		API_URN_PAYROLL_SALARY_OVERVIEW_DATA: "payroll-salary-overview"
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
		API_URN_STAFF_STATS_OVERVIEW_ADMIN: "staff-stats-overview",
		API_URN_STAFF_STATS_DESIGNATION_WISE_ADMIN: "staff-stats-designationwish",
		API_URN_STAFF_SHOW_MULTIPLE_ADMIN: "staff-show-multiple",

		API_ID_CARD_SIGNATURE_STORE: "id-card-signature-store",
		API_ID_CARD_SIGNATURE_DELETE: "id-card-signature-delete",
		API_ID_CARD_SIGNATURE_VIEW: "id-card-signature-show",
		API_URN_STAFF_CHANGE_VERIFIED: "staff-change-verified",

		API_URN_EX_STAFF_POST_LEAVE_FROM: "staff-leave-form",
		API_URN_EX_STAFF_TABLE_DATA: "ex-staff-table-data",
		API_URN_EX_STAFF_DROPDOWN: "ex-staff-drop-down",

		API_URN_EX_STAFF_ID_CARD_SETTING_STORE: "card-setting-staff-store",
		API_URN_EX_STAFF_ID_CARD_SETTING_SHOW: "card-setting-staff-show",

		API_URN_STAFF_DATE_RESTRICTION_SETTINGS_SHOW: "staff-date-restriction-setting-show",
		API_URN_STAFF_DATE_RESTRICTION_SETTINGS_STORE: "staff-date-restriction-setting-store",
		API_URN_STAFF_EXPORT_ADMIN: "staff-export"
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
		API_URN_MANAGE_SCHOOL: "login-school",
		API_URN_FORGOT_PASSWORD: "forgot-password",
		API_URN_FORGOT_PASSWORD_VERIFY_OTP: "forgot-password-verify-otp",
		API_URN_FORGOT_RESET_PASSWORD: "forgot-reset-password",
		API_URN_STUDENT_KYC_UPDATE: "student-kyc-update",
		API_URN_GET_USERNAME: "get-username"
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
		API_GET_PAGE_SEO: "/app/get-page-seo",

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
		API_PROFILE_CHANGE_REQUEST_PENDING_TABLE_DATA: "profile-change-request-panding-table-data",
		API_PROFILE_CHANGE_REQUEST_EDIT: "profile-change-request-edit",
		API_PROFILE_CHANGE_REQUEST_STATUS: "profile-change-request-status",
		API_PROFILE_CHANGE_REQUEST_DESTROY: "profile-change-request-destroy",

		API_PROFILE_CHANGE_REQUEST_STAFF_TABLE_DATA: "profile-change-request-staff-table-data",
		API_PROFILE_CHANGE_REQUEST_STAFF_PENDING_TABLE_DATA: "profile-change-request-staff-pending-table-data",
		API_PROFILE_CHANGE_REQUEST_STAFF_EDIT: "profile-change-request-staff-edit",
		API_PROFILE_CHANGE_REQUEST_STAFF_STATUS: "profile-change-request-staff-status",
		API_PROFILE_CHANGE_REQUEST_STAFF_DESTROY: "profile-change-request-staff-destroy",

		API_USER_KYC_UPDATE: "staff-kyc-update"
	};

	const config_page_content = {
		API_URN_ADD_HOME_CONTENT: "home-content-store",
		API_URN_GET_HOME_CONTENT: "home-content-show",

		API_URN_ADD_ABOUTUS_CONTENT: "aboutus-content-store",
		API_URN_GET_ABOUTUS_CONTENT: "aboutus-content-show",

		API_URN_ADD_OUR_PROGRAM_CONTENT: "program-content-store",
		API_URN_GET_OUR_PROGRAM_CONTENT: "program-content-show",

		API_URN_GET_PAGE_CONTENT: "/app/get-page-content",
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

		API_URN_SEND_EMAIL_STUDENT: "send-email-student",
		API_URN_SEND_EMAIL_STUDENT_DRAFT: "send-email-draft",
		API_URN_GET_EMAIL_LOG_TABLE_DATA: "student-email-log-table-data",
		API_URN_GET_EMAIL_DETAIL_STUDENT: "get-email-detail-student",

		API_URN_MANAGE_SCHOOL_SMS_STORE_FRANCHISE: "franchise/manage-school-sms-store",
		API_URN_GET_MANAGE_SCHOOL_SMS_STORE_LIST_FRANCHISE: "franchise/manage-school-sms-list",

		API_URN_CREATE_WHATSAPP_TEMPLATE_ADMIN: "whatsapp-template-store",
		API_URN_DELETE_WHATSAPP_TEMPLATE_ADMIN: "whatsapp-template-destroy",
		API_URN_GET_WHATSAPP_TEMPLATE_LIST_ADMIN: "whatsapp-template-table-data",
		API_URN_GET_WHATSAPP_TEMPLATE_SYNC_ADMIN: "whatsapp-template-sync",

		API_URN__WHATSAPP_SETTING_STORE_ADMIN: "whatsapp-setting-store",
		API_URN__WHATSAPP_SETTING_SHOW_ADMIN: "whatsapp-setting-get",

		API_URN__WHATSAPP_BROADCAST_TABLE_LIST_ADMIN: "whatsapp-broadcast-table-data",
		API_URN__WHATSAPP_BROADCAST_CVS_GENERATE_ADMIN: "whatsapp-broadcast-csv-generate",
		API_URN__WHATSAPP_BROADCAST_CVS_IMPORT_ADMIN: "whatsapp-broadcast-csv-import",
		API_URN__WHATSAPP_BROADCAST_STATS_ADMIN: "whatsapp-broadcast-stats",
		API_URN__WHATSAPP_BROADCAST_EXPORT_ADMIN: "whatsapp-broadcast-export-details",

		API_URN__WHATSAPP_PHONE_VERIFY_CODE_ADMIN: "whatsapp-phone-verify-code",
		API_URN__WHATSAPP_PHONE_REQUEST_CODE_ADMIN: "whatsapp-phone-request-code",

		API_URN__WHATSAPP_MODULES_STORE_ADMIN: "whatsapp-module-store",
		API_URN__WHATSAPP_MODULES_SHOW_ADMIN: "whatsapp-module-show",
		API_URN__WHATSAPP_MODULES_LIBRARY_SHOW_ADMIN: "whatsapp-library-show",

		API_URN__WHATSAPP_LOG_LIST_SHOW_ADMIN: "whatsapp-log-list",

		API_URN_ENQUIRY_WHATSAPP_AUTOMATION_STORE: "enquiry-automation-store",
		API_URN_ENQUIRY_WHATSAPP_AUTOMATION_EDIT: "enquiry-automation-edit",
		API_URN_ENQUIRY_WHATSAPP_AUTOMATION_TEMPLATE_DROPDOWN: "enquiry-automation-template-dropdown",
		API_URN_ENQUIRY_WHATSAPP_AUTOMATION_UPDATE: "enquiry-automation-update",
		API_URN_ENQUIRY_WHATSAPP_AUTOMATION_TABLE_DATA: "enquiry-automation-table-data",
		API_URN_ENQUIRY_WHATSAPP_AUTOMATION_DELETE: "enquiry-automation-destroy",

		API_URN_WHATSAPP_CONVERSATION_LIST: "whatsapp-conversation-list",
		API_URN_WHATSAPP_CONVERSATION_DETAIL: "whatsapp-conversation-detail",
		API_URN_WHATSAPP_CONVERSATION_SEND_MESSAGE: "whatsapp-conversation-send-message",
		API_URN_WHATSAPP_CONVERSATION_SEND_TEMPLATE: "whatsapp-conversation-send-template",

		API_URN_WHATSAPP_USER_STORE: "whatsapp-user-store",
		API_URN_WHATSAPP_USER_UPDATE: "whatsapp-user-update",
		API_URN_WHATSAPP_USER_EDIT: "whatsapp-user-edit",
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

		API_URN_TIME_TABLE_TEMPLATE_BY_ID: "time-table-template-by-id",
		API_URN_TIME_TABLE_TEMPLATE_STORE_ADMIN: "time-table-template-store",
		API_URN_TIME_TABLE_TEMPLATE_EDIT_ADMIN: "time-table-template-edit",
		API_URN_TIME_TABLE_TEMPLATE_UPDATE_ADMIN: "time-table-template-update",
		API_URN_TIME_TABLE_TEMPLATE_DESTROY_ADMIN: "time-table-template-destroy",
		API_URN_TIME_TABLE_TEMPLATE_TABLE_DATA_ADMIN: "time-table-template-table-data",
		API_URN_TIME_TABLE_TEMPLATE_DROPDOWN_ADMIN: "time-table-template-drop-down",
		API_URN_TIME_TABLE_CALENDAR_DATA_ADMIN: "time-table-calendar-data",

		API_URN_TIME_TABLE_DATA_ADMIN: "student/time-table-data",
		API_URN_TIME_TABLE_DATA_ADMIN_MOB: "student/time-table-data-mobile"
	};

	const config_public = {
		API_URN_PUBLIC_GET_APP_DATA_ADMIN: "get-app-data",
		API_URN_APP_SCHOOL_SEARCH: "app/school-search",
		API_URN_APP_UPDATE_INFO: "app/update-info",
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
		API_URN_GET_SCHOOL_LIST_ADMIN: "app/school-list",
		API_URN_GET_SCHOOL_DETAIL_ADMIN: "app/school-detail",
		API_URN_GET_PAGE_WEBSITE: "page",

		API_URN_WEBSITE_TC_SCHOOL: "website-tc-school",
		API_URN_WEBSITE_TC_ACADEMIC_YEAR: "website-tc-academic-year",
		API_URN_WEBSITE_TC_CLASS: "website-tc-class",
		API_URN_WEBSITE_TC_SECTION: "website-tc-section",
		API_URN_WEBSITE_TC_STUDENT: "website-tc-student",
		API_URN_WEBSITE_TC_DETAIL: "website-tc-detail"
	};

	const config_our_centers = {
		API_URN_OUR_CENTERS_STATE_DROPDOWN: "our-centers-state-dropdown",
		API_URN_OUR_CENTERS_CITY_DROPDOWN: "our-centers-city-dropdown",
		API_URN_OUR_CENTERS_SCHOOL_DROPDOWN: "our-centers-school-dropdown",
		API_URN_OUR_CENTERS_SCHOOL_DETAILS: "our-centers-school-details"
	}

	const config_test_report = {
		API_URN_TESTS_STORE_ADMIN: "tests-store",
		API_URN_TESTS_SHOW_ADMIN: "tests-show",
		API_URN_TESTS_EDIT_ADMIN: "tests-edit",
		API_URN_TESTS_UPDATE_ADMIN: "tests-update",
		API_URN_TESTS_DESTROY_ADMIN: "tests-destroy",
		API_URN_TEST_REPORT_CHANGE_LEADERBOARD_STATUS_ADMIN: "test-report-change-leaderboard-status",
		API_URN_TESTS_TABLE_DATA_ADMIN: "tests-table-data",
		API_URN_TESTS_REPORT_DATA_UPDATE_ADMIN: "test-report-data-update",
		API_URN_STUDENT_TESTS_TABLE_DATA: "student/test-table-data",
		API_URN_STUDENT_TEST_LEADERBOARD_PARENT: "student/test-leaderboard",
		API_URN_TEST_REPORT_DROPDOWN_ADMIN: "test-report-dropdown",

		API_URN_EXAM_TYPE_STORE_ADMIN: "exam-type-store",
		API_URN_EXAM_TYPE_EDIT_ADMIN: "exam-type-edit",
		API_URN_EXAM_TYPE_UPDATE_ADMIN: "exam-type-update",
		API_URN_EXAM_TYPE_DESTROY_ADMIN: "exam-type-destroy",
		API_URN_EXAM_TYPE_TABLE_DATA_ADMIN: "exam-type-table-data",
		API_URN_TEST_REPORT_CHANGE_STATUS_ADMIN: "test-report-change-status",
		API_URN_TEST_REPORT_EXAM_TYPE_CHANGE_STATUS_ADMIN: "exam-type-change-status",

		API_URN_TEST_REPORT_RESULT_SETTING_STORE_ADMIN: "test-report-result-setting-store",
		API_URN_TEST_REPORT_RESULT_SETTING_EDIT_ADMIN: "test-report-result-setting-edit",
		API_URN_TEST_REPORT_RESULT_SETTING_UPDATE_ADMIN: "test-report-result-setting-update",
		API_URN_TEST_REPORT_RESULT_SETTING_DESTROY_ADMIN: "test-report-result-setting-destroy",
		API_URN_TEST_REPORT_RESULT_SETTING_TABLE_DATA_ADMIN: "test-report-result-setting-table-data"
	};

	const config_notification = {
		API_URN_SEND_STUDENT_NOTIFICATION: "send-student-notification"
	};

	const config_dashboard = {
		API_URN_GET_DASHBOARD_DATA: "dashboard",
		API_URN_GET_STAFF_DASHBOARD: "staff-dashboard",
		API_URN_GET_DASHBOARD_DATA_PARENT: "parent/dashboard",
		API_URN_FEE_DEFAULTER_LIST: "fee-defaulter-list",
		API_URN_EXPORT_FEE_DEFAULTER_LIST: "export-fee-defaulter",
		API_URN_FRANCHISE_DASHBOARD: "franchise-dashboard"
	};

	const config_cctv = {
		API_URN_GET_CCTV_TABLE_DATA_PARENT: "parent-cctv-table-data/list",

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

		API_URN_CCTV_PACK_TABLE_DATA_PARENT: 'parent-pack-table-data',
		API_URN_CCTV_PROCESS_CCTV_PAYMENT_PARENT: "process-cctv-payment",

		API_URN_CCTV_PACK_TABLE_DATA_ADMIN: 'pack-table-data',
		API_URN_CCTV_ADD_PACK_ADMIN: 'pack-store',
		API_URN_CCTV_EDIT_PACK_ADMIN: 'pack-edit',
		API_URN_CCTV_UPDATE_PACK_ADMIN: 'pack-update',
		API_URN_CCTV_DELETE_PACK_ADMIN: 'pack-destroy',

		API_URN_CCTV_SETTINGS_UPDATE: 'cctv-access-setting',
		API_URN_CCTV_SETTINGS_GET: 'cctv-assign-setting-show',
		API_URN_CCTV_ACCESS_SIGNATURE_DELETE: 'cctv-access-destroy-signature',
		API_URN_CCTV_ACCESS_LOGO_DELETE: 'cctv-access-destroy-logo',

		API_URN_CCTV_INVOICE_TABLE_DATA_GET: 'invoice-table-data',
		API_URN_CCTV_INVOICE_SHOW_ADMIN: "invoice-show",
		API_URN_CCTV_INVOICE_CAMNCLOUD_LIST_ADMIN: "invoice-camncloud-list",
		API_URN_CCTV_INVOICE_GENERATE_CCTV_RECEIPT_ADMIN: "genrate-cctv-receipt",

		API_URN_CCTV_ACCESS_TABLE_DATA_GET: 'cctv-assign-students-list',
		API_URN_CCTV_ACCESS_DATA_UPDATE: 'cctv-assign-student-store-update',

		API_URN_CCTV_WATCH_LOG: 'cctv-watch-store',
		API_URN_CCTV_DETAIL: 'parent-cctv-detail',

		API_URN_CCTV_DAYCARE_ASSIGN_STORE_ADMIN: "cctv-daycare-assign-store",
		API_URN_CCTV_DAYCARE_ASSIGN_EDIT_ADMIN: "cctv-daycare-assign-edit",
		API_URN_CCTV_DAYCARE_ASSIGN_SHOW_ADMIN: "cctv-daycare-assign-show",
		API_URN_CCTV_DAYCARE_ASSIGN_UPDATE_ADMIN: "cctv-daycare-assign-update",
		API_URN_CCTV_DAYCARE_ASSIGN_DESTROY_ADMIN: "cctv-daycare-assign-destroy",
		API_URN_CCTV_DAYCARE_ASSIGN_TABLE_DATA_ADMIN: "cctv-daycare-assign-table-data",

		API_URN_CCTV_DAYCARE_ASSIGN_LIST: 'cctv-daycare-assign-students-list',
		API_URN_CCTV_UPDATE_DAYCARE_ASSIGN_LIST: 'cctv-daycare-assign-student-store-update',

		API_URN_PARENT_CCTV_DAYCARE_TABLE_DATA_PARENT: "parent-cctv-daycare-table-data/list",
		API_URN_PARENT_CCTV_DAYCARE_DETAIL_PARENT: "parent-cctv-daycare-detail",

		API_URN_ADMIN_CCTV_PROVIDER_LIST: 'cctv-provider-list',
		API_URN_ADMIN_CCTV_PROVIDER_ADD: 'cctv-provider-store',
		API_URN_ADMIN_CCTV_PROVIDER_DROPDOWN: 'cctv-provider-drop-down',

		API_URN_CCTV_CREATE_USER_ADMIN: "cctv-create-user",
		API_URN_CCTV_CREATE_CHANNEL_ADMIN: "cctv-create-channel",
		API_URN_CCTV_CREATE_ORDER_ADMIN: "cctv-create-order",
		API_URN_CCTV_ORDER_PAYMENT_FAIL_ADMIN: "cctv-order-payment-fail",
		API_URN_CCTV_ORDER_PAYMENT_SUCCESS_ADMIN: "cctv-order-payment-success",
		API_URN_CCTV_CAMSLOT_PRICE_ADMIN: "cctv-camslot-price",
		API_URN_CCTV_PACKAGE_ADMIN: "cctv-package"
	};

	const config_franchise = {
		API_URN_FRANCHISE_SCHOOL_STORE: "school-store",
		API_URN_FRANCHISE_SCHOOL_TABLE_DATA: "school-table-data",
		API_URN_FRANCHISE_SCHOOL_EDIT_DATA: "school-edit",
		API_URN_FRANCHISE_SCHOOL_UPDATE_DATA: "school-update",
		API_URN_FRANCHISE_GET_CATEGORY_TABLE_DATA: "category-table-data",
		API_URN_FRANCHISE_EDIT_CATEGORY_DATA: "category-edit",
		API_URN_FRANCHISE_ADD_CATEGORY_DATA: "category-store",
		API_URN_FRANCHISE_UPDATE_CATEGORY_DATA: "category-update",
		API_URN_FRANCHISE_DELETE_CATEGORY_DATA: "category-destroy",
		API_URN_FRANCHISE_GET_VARIANT_TABLE_DATA: "variants-table-data",
		API_URN_FRANCHISE_EDIT_VARIANT_DATA: "variants-edit",
		API_URN_FRANCHISE_ADD_VARIANT_DATA: "variants-store",
		API_URN_FRANCHISE_UPDATE_VARIANT_DATA: "variants-update",
		API_URN_FRANCHISE_DELETE_VARIANT_DATA: "variants-destroy",
		API_URN_FRANCHISE_GET_OPTIONS_TABLE: "option-table-data",
		API_URN_FRANCHISE_EDIT_OPTIONS: "option-edit",
		API_URN_FRANCHISE_ADD_OPTIONS: "option-store",
		API_URN_FRANCHISE_UPDATE_OPTIONS: "option-update",
		API_URN_FRANCHISE_DELETE_OPTIONS: "option-destroy",
		API_URN_FRANCHISE_GET_PRODUCT_TABLE: "product-table-data",
		API_URN_FRANCHISE_EDIT_PRODUCT: "product-edit",
		API_URN_FRANCHISE_ADD_PRODUCT: "product-store",
		API_URN_FRANCHISE_UPDATE_PRODUCT: "product-update",
		API_URN_FRANCHISE_DELETE_PRODUCT: "product-destroy",
		API_URN_FRANCHISE_GET_PRODUCT_DETAILS: "product-show",
		API_URN_FRANCHISE_IMAGE_DESTROY_PRODUCT: "product-image-destroy",
		API_URN_FRANCHISE_VARIANT_DESTROY_PRODUCT: "product-variant-destroy",
		API_URN_FRANCHISE_GET_ORDER_TABLE: "order-request-table-data",
		API_URN_FRANCHISE_GET_ORDER_DETAILS: "order-request-show",
		API_URN_FRANCHISE_ORDER_REQUEST_CANCEL: "order-request-cancel",
		API_URN_FRANCHISE_UPDATE_ORDER_DETAIL: "delivery-store",
		API_URN_FRANCHISE_ORDER_LOT_DELIVERED: "order-lot-delivered",
		API_URN_FRANCHISE_ORDER_LOT_DISPATCH: "order-lot-dispatch",
		API_URN_FRANCHISE_ORDER_REQUEST_DESTROY: "order-request-destroy",
		API_URN_FRANCHISE_GET_GENERAL_SETTINGS: "franchise-general-edit",
		API_URN_FRANCHISE_DELETE_GENERAL_SETTINGS_LOGO: "franchise-general-destroy-logo",
		API_URN_FRANCHISE_UPDATE_GENERAL_SETTINGS: "franchise-general-update",
		API_URN_FRANCHISE_PRODUCT_UPDATE_INVENTORY: "product-update-inventory",
		API_URN_FRANCHISE_POSTER_COVER_DESTROY: "franchise-general-destroy",

		API_URN_FRANCHISE_GET_ENQUIRY_SOURCES_TABLE: "enquiry-source-table-data",
		API_URN_FRANCHISE_ADD_ENQUIRY_SOURCES: "enquiry-source-store",
		API_URN_FRANCHISE_UPDATE_ENQUIRY_SOURCES: "enquiry-source-update",
		API_URN_FRANCHISE_DELETE_ENQUIRY_SOURCES: "enquiry-source-destroy",
		API_URN_FRANCHISE_CHANGE_STATUS_ENQUIRY_SOURCES: "enquiry-source-change-status",

		API_URN_FRANCHISE_GET_ENQUIRY_CLASS_TABLE: "franchise-enquiry-class-table-data",
		API_URN_FRANCHISE_DELETE_ENQUIRY_CLASS: "franchise-enquiry-class-destroy",
		API_URN_FRANCHISE_ADD_ENQUIRY_CLASS: "franchise-enquiry-class-store",
		API_URN_FRANCHISE_UPDATE_ENQUIRY_CLASS: "franchise-enquiry-class-update",

		API_URN_FRANCHISE_GET_STUDENT_ENQUIRY_TABLE: "franchise-student-enquiry-table-data",
		API_URN_FRANCHISE_GET_EDIT_STUDENT_ENQUIRY: "franchise-student-enquiry-edit",
		API_URN_FRANCHISE_UPDATE_STUDENT_ENQUIRY: "franchise-student-enquiry-update",
		API_URN_FRANCHISE_ADD_STUDENT_ENQUIRY: "franchise-student-enquiry-store",
		API_URN_FRANCHISE_DELETE_STUDENT_ENQUIRY: "franchise-student-enquiry-destroy",

		API_URN_FRANCHISE_GET_FEETYPE_TABLE: "royalty-feetype-table-data",
		API_URN_FRANCHISE_GET_EDIT_FEETYPE: "royalty-feetype-edit",
		API_URN_FRANCHISE_UPDATE_FEETYPE: "royalty-feetype-update",
		API_URN_FRANCHISE_ADD_FEETYPE: "royalty-feetype-store",
		API_URN_FRANCHISE_DELETE_FEETYPE: "royalty-feetype-destroy",

		API_URN_FRANCHISE_GET_ROYALTY_SETUP_TABLE: "royalty-setup-table-data",
		API_URN_FRANCHISE_GET_EDIT_ROYALTY_SETUP: "royalty-setup-edit",
		API_URN_FRANCHISE_UPDATE_ROYALTY_SETUP: "royalty-setup-update",
		API_URN_FRANCHISE_ADD_ROYALTY_SETUP: "royalty-setup-store",
		API_URN_FRANCHISE_GET_ROYALTY_SETUP_DETAIL: "royalty-setup-show",
		API_URN_FRANCHISE_DELETE_ROYALTY_SETUP: "royalty-setup-destroy",


		API_URN_FRANCHISE_GET_ROYALTY_COLLECTION_TABLE: "royalty-collection-table-data",
		API_URN_FRANCHISE_GET_EDIT_ROYALTY_COLLECTION: "royalty-collection-edit",
		API_URN_FRANCHISE_UPDATE_ROYALTY_COLLECTION: "royalty-collection-update",
		API_URN_FRANCHISE_ADD_ROYALTY_COLLECTION: "royalty-collection-store",
		API_URN_FRANCHISE_GET_ROYALTY_COLLECTION_DETAIL: "royalty-collection-show",
		API_URN_FRANCHISE_DELETE_ROYALTY_COLLECTION: "royalty-collection-destroy",

		API_URN_FRANCHISE_GET_SCHOOL_ROYALTY_TABLE: "royalty-configuration-table-data",

		API_URN_FRANCHISE_GET_CURRICULLUM_CATEGORY_TABLE: 'curriculum-category-table-data',
		API_URN_FRANCHISE_ADD_CURRICULLUM_CATEGORY: 'curriculum-category-store',
		API_URN_FRANCHISE_GET_EDIT_CURRICULLUM_CATEGORY: 'curriculum-category-edit',
		API_URN_FRANCHISE_UPDATE_CURRICULLUM_CATEGORY: 'curriculum-category-update',
		API_URN_FRANCHISE_DELETE_CURRICULLUM_CATEGORY: 'curriculum-category-destroy',

		API_URN_FRANCHISE_GET_CURRICULLUM_TOPIC_TABLE: 'curriculum-topic-table-data',
		API_URN_FRANCHISE_ADD_CURRICULLUM_TOPIC: 'curriculum-topic-store',
		API_URN_FRANCHISE_GET_EDIT_CURRICULLUM_TOPIC: 'curriculum-topic-edit',
		API_URN_FRANCHISE_UPDATE_CURRICULLUM_TOPIC: 'curriculum-topic-update',
		API_URN_FRANCHISE_DELETE_CURRICULLUM_TOPIC: 'curriculum-topic-destroy',

		API_URN_FRANCHISE_GET_CURRICULLUM_TABLE: 'curriculum-table-data',
		API_URN_FRANCHISE_SHOW_CURRICULLUM: 'curriculum-show',
		API_URN_FRANCHISE_ADD_CURRICULLUM: 'curriculum-store',
		API_URN_FRANCHISE_GET_EDIT_CURRICULLUM: 'curriculum-edit',
		API_URN_FRANCHISE_UPDATE_CURRICULLUM: 'curriculum-update',
		API_URN_FRANCHISE_DELETE_CURRICULLUM: 'curriculum-destroy',
		API_URN_FRANCHISE_PDF_CURRICULLUM_UPDATE_STATUS: 'curriculum-update-status',

		API_URN_FRANCHISE_GET_ACCESS_CURRICULLUM_TABLE: 'curriculum-access-table-data',
		API_URN_FRANCHISE_CURRICULUM_ACCESS_UPDATE_END_DATE: "curriculum-access-update-end-date",

		API_URN_FRANCHISE_CURRICULUM_PROVIDER_TABLE_DATA: "franchise/curriculum-provider-table-data",
		API_URN_FRANCHISE_CURRICULUM_PROVIDER_CONTENT: "franchise/curriculum-provider-content",
		API_URN_FRANCHISE_CURRICULUM_PROVIDER_CHECK_DEMO_DATE: "franchise/curriculum-provider-check-demo-date",
		API_URN_FRANCHISE_CURRICULUM_PROVIDER_DEMO_REQUEST: "franchise/curriculum-provider-demo-request",
		API_URN_FRANCHISE_CURRICULUM_INTEGRATE_TABLE_DATA: "franchise/curriculum-integrate-table-data",
		API_URN_FRANCHISE_CURRICULUM_INTEGRATE_REQUEST: "franchise/curriculum-integrate-request",

		API_URN_FRANCHISE_CURRICULUM_ASSIGN_TABLE_DATA: "franchise/curriculum-assign-table-data",
		API_URN_FRANCHISE_CURRICULUM_ASSIGN_STORE: "franchise/curriculum-assign-school",
		API_URN_FRANCHISE_CURRICULUM_ASSIGN_SCHOOL_DROPDOWN: "franchise/curriculum-assign-school-dropdown",

		API_URN_FRANCHISE_GET_STAFF_TABLE: 'franchiser-staff-table-data',
		API_URN_FRANCHISE_SHOW_STAFF: 'franchiser-staff-show',
		API_URN_FRANCHISE_ADD_STAFF: 'franchiser-staff-store',
		API_URN_FRANCHISE_GET_EDIT_STAFF: 'franchiser-staff-edit',
		API_URN_FRANCHISE_UPDATE_STAFF: 'franchiser-staff-update',
		API_URN_FRANCHISE_DELETE_STAFF: 'franchiser-staff-destroy',
		API_URN_FRANCHISE_STAFF_DROPDOWN: "franchiser-staff-dropdown",

		API_URN_FRANCHISE_OVERVIEW_GET_STAFF_TABLE: 'franchise/staff-table-data',
		API_URN_FRANCHISE_OVERVIEW_SHOW_STAFF: 'franchise/staff-show',
		API_URN_FRANCHISE_OVERVIEW_ADD_STAFF: 'franchise/staff-store',
		API_URN_FRANCHISE_OVERVIEW_GET_EDIT_STAFF: 'franchise/staff-edit',
		API_URN_FRANCHISE_OVERVIEW_UPDATE_STAFF: 'franchise/staff-update',
		API_URN_FRANCHISE_OVERVIEW_DELETE_STAFF: 'franchise/staff-destroy',
		API_URN_FRANCHISE_OVERVIEW_CHANGE_STATUS_STAFF: 'franchise/staff-change-status',
		API_URN_FRANCHISE_EXPORT_STAFF: 'franchise/staff-export',
		API_URN_FRANCHISE_EXCEL_IMPORT_STAFF: 'franchise/staff-excel-import',
		API_URN_FRANCHISE_EXCEL_EXPORT_STAFF: 'franchise/staff-excel-export',

		API_URN_FRANCHISE_OVERVIEW_GET_STUDENT_TABLE: 'franchise/student-table-data',
		API_URN_FRANCHISE_OVERVIEW_SHOW_STUDENT: 'franchise/student-show',
		API_URN_FRANCHISE_OVERVIEW_SHOW_STUDENT_MULTIPLE: 'franchise/student-show-multiple',
		API_URN_FRANCHISE_OVERVIEW_ADD_STUDENT: 'franchise/student-store',
		API_URN_FRANCHISE_OVERVIEW_GET_EDIT_STUDENT: 'franchise/student-edit',
		API_URN_FRANCHISE_OVERVIEW_UPDATE_STUDENT: 'franchise/student-update',
		API_URN_FRANCHISE_OVERVIEW_DELETE_STUDENT: 'franchise/student-destroy',
		API_URN_FRANCHISE_OVERVIEW_CHANGE_STATUS_STUDENT: 'franchise/student-change-status',
		API_URN_FRANCHISE_EXPORT_STUDENT: 'franchise/student-export',
		API_URN_FRANCHISE_EXCEL_EXPORT_STUDENT: 'franchise/student-export-excel',
		API_URN_FRANCHISE_EXCEL_IMPORT_STUDENT: 'franchise/student-import-excel',

		API_URN_FRANCHISE_ENQUIRY_STORE: "franchise-enquiry-store",
		API_URN_FRANCHISE_ENQUIRY_EDIT: "franchise-enquiry-edit",
		API_URN_FRANCHISE_ENQUIRY_UPDATE: "franchise-enquiry-update",
		API_URN_FRANCHISE_ENQUIRY_DELETE: "franchise-enquiry-destroy",
		API_URN_FRANCHISE_ENQUIRY_SHOW: "franchise-enquiry-show",
		API_URN_FRANCHISE_ENQUIRY_TABLE_DATA: "franchise-enquiry-table-data",
		API_URN_FRANCHISE_ENQUIRY_CONVERT: "franchise-enquiry-convert-update",
		API_URN_FRANCHISE_ENQUIRY_FOLLOWUP_UPDATE: "franchise-enquiry-followup-update",
		API_URN_FRANCHISE_ENQUIRY_DROP: "franchise-enquiry-drop-update",
		API_URN_FRANCHISE_GUEST_ENQUIRY_STORE: "guest-franchise-enquiry",
		API_URN_FRANCHISE_GUEST_ENQUIRY_INVESTMENT_DROPDOWN: "get-franchise-investment-dropdown",

		API_URN_FRANCHISE_ENQUIRY_INVESTMENT_TYPE_STORE: "investment-type-store",
		API_URN_FRANCHISE_ENQUIRY_INVESTMENT_TYPE_EDIT: "investment-type-edit",
		API_URN_FRANCHISE_ENQUIRY_INVESTMENT_TYPE_UPDATE: "investment-type-update",
		API_URN_FRANCHISE_ENQUIRY_INVESTMENT_TYPE_DELETE: "investment-type-destroy",
		API_URN_FRANCHISE_ENQUIRY_INVESTMENT_TYPE_TABLE_DATA: "investment-type-table-data",
		API_URN_FRANCHISE_ENQUIRY_INVESTMENT_TYPE_DROPDOWN: "investment-type-dropdown",

		API_URN_FRANCHISE_ENQUIRY_DROP_REASON_STORE: "franchise-enquiry-reason-store",
		API_URN_FRANCHISE_ENQUIRY_DROP_REASON_EDIT: "franchise-enquiry-reason-edit",
		API_URN_FRANCHISE_ENQUIRY_DROP_REASON_UPDATE: "franchise-enquiry-reason-update",
		API_URN_FRANCHISE_ENQUIRY_DROP_REASON_DESTORY: "franchise-enquiry-reason-destroy",
		API_URN_FRANCHISE_ENQUIRY_DROP_REASON_SHOW: "franchise-enquiry-reason-show",
		API_URN_FRANCHISE_ENQUIRY_DROP_REASON_TABLE_DATA: "franchise-enquiry-reason-table-data",
		API_URN_FRANCHISE_ENQUIRY_DROP_REASON_DROPDOWN: "franchise-enquiry-reason-dropdown",

		API_URN_FRANCHISE_ENQUIRY_LEAD_STORE: "franchise-enquiry-lead-store",
		API_URN_FRANCHISE_ENQUIRY_LEAD_EDIT: "franchise-enquiry-lead-edit",
		API_URN_FRANCHISE_ENQUIRY_LEAD_ALL_EDIT: "franchise-enquiry-lead-all-edit",
		API_URN_FRANCHISE_ENQUIRY_LEAD_UPDATE: "franchise-enquiry-lead-update",
		API_URN_FRANCHISE_ENQUIRY_LEAD_DESTROY: "franchise-enquiry-lead-destroy",
		API_URN_FRANCHISE_ENQUIRY_LEAD_TABLE_DATA: "franchise-enquiry-lead-table-data",
		API_URN_FRANCHISE_ENQUIRY_LEAD_DROPDOWN: "franchise-enquiry-lead-dropdown",

		API_URN_FRANCHISE_OVERVIEW_GET_EX_STUDENT_TABLE: 'franchise/ex-student-table-data',
		API_URN_FRANCHISE_OVERVIEW_ADD_EX_STUDENT: 'franchise/ex-student-store',

		API_URN_FRANCHISE_OVERVIEW_GET_STUDENT_HISTORY_TABLE: 'franchise/student-delete-history',
		API_URN_FRANCHISE_OVERVIEW_RESTORE_STUDENT: 'franchise/student-restore',

		API_URN_FRANCHISE_STUDENT_COLLECTION_FEE_REPORT: "franchise/student-collection-fee-report",
		API_URN_FRANCHISE_STUDENT_PENDING_FEE_REPORT: "franchise/student-pending-fee-report",
		API_URN_FRANCHISE_COLLECT_FEE_REPORT_DATA: "franchise/collect-fee-report-data",
		API_URN_FRANCHISE_EXPORT_COLLECT_FEE_REPORT_DATA: "franchise/export-collect-fee-report-data",
		API_URN_FRANCHISE_DELETE_FEE_REPORT_DATA: "franchise/delete-fee-report-data",
		API_URN_FRANCHISE_STUDENT_FEE_TABLE_DATA: "franchise/student-fee-table-data",
		API_URN_FRANCHISE_STUDENT_FEE_PRINT_LIST: "franchise/student-fee-print-list",
		API_URN_FRANCHISE_STUDENT_PRINT_CLASS_FEE_CONFIG: "franchise/student-print-class-fee-config",
		API_URN_FRANCHISE_STUDENT_FEE_DISCOUNT_TABLE_DATA: "franchise/student-fee-discount-table-data",
		API_URN_FRANCHISE_STUDENT_FEE_STATES: "franchise/student-fee-states",

		API_URN_FRANCHISE_HOLIDAY_CALENDAR_STORE: "franchise/holiday-calendar-store",
		API_URN_FRANCHISE_HOLIDAY_CALENDAR_EDIT: "franchise/holiday-calendar-edit",
		API_URN_FRANCHISE_HOLIDAY_CALENDAR_UPDATE: "franchise/holiday-calendar-update",
		API_URN_FRANCHISE_HOLIDAY_CALENDAR_DESTROY: "franchise/holiday-calendar-destroy",
		API_URN_FRANCHISE_HOLIDAY_CALENDAR_TABLE_DATA: "franchise/holiday-calendar-table-data",
		API_URN_FRANCHISE_HOLIDAY_CALENDAR_DATA: "franchise/holiday-calendar-data",
		API_URN_FRANCHISE_HOLIDAY_CALENDAR_IMPORT: "franchise/holiday-calendar-import",

		API_URN_FRANCHISE_STUDENT_ENQUIRY_TYPE_STORE: "enquiry-type-store",
		API_URN_FRANCHISE_STUDENT_ENQUIRY_TYPE_SHOW: "enquiry-type-show",
		API_URN_FRANCHISE_STUDENT_ENQUIRY_TYPE_EDIT: "enquiry-type-edit",
		API_URN_FRANCHISE_STUDENT_ENQUIRY_TYPE_UPDATE: "enquiry-type-update",
		API_URN_FRANCHISE_STUDENT_ENQUIRY_TYPE_DESTROY: "enquiry-type-destroy",
		API_URN_FRANCHISE_STUDENT_ENQUIRY_TYPE_CHANGE_STATUS: "enquiry-type-change-status",
		API_URN_FRANCHISE_STUDENT_ENQUIRY_TYPE_TABLE_DATA: "enquiry-type-table-data",
		API_URN_FRANCHISE_STUDENT_ENQUIRY_TYPE_DROPDOWN: "enquiry-type-dropdown",

		API_URN_FRANCHISE_SCHOOL_TIER_STORE: "school-tier-store",
		API_URN_FRANCHISE_SCHOOL_TIER_SHOW: "school-tier-show",
		API_URN_FRANCHISE_SCHOOL_TIER_DESTROY: "school-tier-destroy",
		API_URN_FRANCHISE_SCHOOL_TIER_EDIT: "school-tier-edit",
		API_URN_FRANCHISE_SCHOOL_TIER_DROPDOWN: "school-tier-dropdown",
		API_URN_FRANCHISE_SCHOOL_TIER_UPDATE: "school-tier-update",
		API_URN_FRANCHISE_SCHOOL_TIER_TABLE_DATA: "school-tier-table-data",

		API_URN_FRANCHISE_SCHOOL_CHANGE_RESTRICT_SETTING_STATUS: "school-change-restrict-setting-status",
		API_URN_FRANCHISE_SCHOOL_CHANGE_RESTRICT_ACCOUNT_STATUS: "school-change-restrict-account-status",

		API_URN_FRANCHISE_COMMUNICATION_CATEGORY_STORE: "franchise/communication-category-store",
		API_URN_FRANCHISE_COMMUNICATION_CATEGORY_EDIT: "franchise/communication-category-edit",
		API_URN_FRANCHISE_COMMUNICATION_CATEGORY_UPDATE: "franchise/communication-category-update",
		API_URN_FRANCHISE_COMMUNICATION_CATEGORY_DESTROY: "franchise/communication-category-destroy",
		API_URN_FRANCHISE_COMMUNICATION_CATEGORY_TABLE_DATA: "franchise/communication-category-table-data",
		API_URN_FRANCHISE_COMMUNICATION_CATEGORY_DROPDOWN: "franchise/communication-category-dropdown",

		API_URN_FRANCHISE_COMMUNICATION_SUB_CATEGORY_STORE: "franchise/communication-sub-category-store",
		API_URN_FRANCHISE_COMMUNICATION_SUB_CATEGORY_EDIT: "franchise/communication-sub-category-edit",
		API_URN_FRANCHISE_COMMUNICATION_SUB_CATEGORY_UPDATE: "franchise/communication-sub-category-update",
		API_URN_FRANCHISE_COMMUNICATION_SUB_CATEGORY_DESTROY: "franchise/communication-sub-category-destroy",
		API_URN_FRANCHISE_COMMUNICATION_SUB_CATEGORY_TABLE_DATA: "franchise/communication-sub-category-table-data",
		API_URN_FRANCHISE_COMMUNICATION_SUB_CATEGORY_DROPDOWN: "franchise/communication-sub-category-dropdown",

		API_URN_FRANCHISE_COMMUNICATION_STORE: "franchise/communication-store",
		API_URN_FRANCHISE_COMMUNICATION_EDIT: "franchise/communication-edit",
		API_URN_FRANCHISE_COMMUNICATION_SHOW: "franchise/communication-show",
		API_URN_FRANCHISE_COMMUNICATION_TABLE_DATA: "franchise/communication-table-data",
		API_URN_FRANCHISE_COMMUNICATION_DESTROY: "franchise/communication-destroy",
		API_URN_FRANCHISE_COMMUNICATION_DESTROY_ATTACHMENT: "franchise/communication-destroy-attachment",
		API_URN_FRANCHISE_COMMUNICATION_DESTROY_SINGLE_BRANCH: "franchise/communication-destroy-single-branch",
		API_URN_FRANCHISE_COMMUNICATION_UPDATE: "franchise/communication-update",
		API_URN_FRANCHISE_COMMUNICATION_CATEGORY_SUBCATEGORY: "franchise/communication-category-subcategory",
		API_URN_FRANCHISE_COMMUNICATION_SETTING_STORE_GET: "franchise/communication-setting-store-get",

		API_URN_FRANCHISE_GET_STAFF_MODULE_RIGHT: 'franchiser-staff-module-right',
		API_URN_FRANCHISE_GET_STAFF_UPDATE_MODULE_RIGHT: 'franchiser-staff-update-module-right',

		API_URN_FRANCHISE_ADD_STAFF_DESIGNATION: 'franchiser-staff-designation-store',
		API_URN_FRANCHISE_EDIT_STAFF_DESIGNATION: 'franchiser-staff-designation-edit',
		API_URN_FRANCHISE_UPDATE_STAFF_DESIGNATION: 'franchiser-staff-designation-update',
		API_URN_FRANCHISE_DELETE_STAFF_DESIGNATION: "franchiser-staff-designation-destroy",
		API_URN_FRANCHISE_STAFF_DESIGNATION_TABLE_DATA: "franchiser-staff-designation-table-data",
		API_URN_FRANCHISE_STAFF_DESIGNATION_DROPDOWN: "franchiser-staff-designation-dropdown",

		API_URN_FRANCHISE_GET_ACADEMIC_YEAR_LIST: "franchise-academic-year-table-data",
		API_URN_FRANCHISE_EDIT_ACADEMIC_YEAR: "franchise-academic-year-edit",
		API_URN_FRANCHISE_UPDATE_ACADEMIC_YEAR: "franchise-academic-year-update",
		API_URN_FRANCHISE_DELETE_ACADEMIC_YEAR: "franchise-academic-year-destroy",
		API_URN_FRANCHISE_ADD_ACADEMIC_YEAR: "franchise-academic-year-store",
		API_URN_FRANCHISE_ACADEMIC_YEAR_DROPDOWN_LIST: "franchise-academic-year-drop-down",

		API_URN_FRANCHISE_GET_CURRENT_USER_YEAR: "get-current-franchiser-user-year",
		API_URN_FRANCHISE_UPDATE_CURRENT_USER_YEAR: "update-current-franchiser-user-year",

		API_URN_FRANCHISE_GET_ACADEMIC_YEAR: "change-franchiser-academic-year-show",
		API_URN_FRANCHISE_CHANGE_ACADEMIC_YEAR: "change-franchiser-academic-year-update",

		API_URN_FRANCHISE_INVENTORY_VENDOR_ADD: "franchise/inventory-vendor-add",
		API_URN_FRANCHISE_INVENTORY_VENDOR_UPDATE: "franchise/inventory-vendor-update",
		API_URN_FRANCHISE_INVENTORY_VENDOR_DELETE: "franchise/inventory-vendor-destroy",
		API_URN_FRANCHISE_INVENTORY_GET_VENDOR: "franchise/inventory-vendor-view",
		API_URN_FRANCHISE_INVENTORY_EDIT_VENDOR: "franchise/inventory-vendor-edit",
		API_URN_FRANCHISE_INVENTORY_VENDOR_DROPDOWN: "franchise/inventory-vendor-dropdown",
		API_URN_FRANCHISE_INVENTORY_GET_VENDOR_LIST: "franchise/inventory-vendor-list",

		API_URN_FRANCHISE_INVENTORY_ADD_PRODUCT: "franchise/inventory-product-add",
		API_URN_FRANCHISE_INVENTORY_EDIT_PRODUCT: "franchise/inventory-product-edit",
		API_URN_FRANCHISE_INVENTORY_UPDATE_PRODUCT: "franchise/inventory-product-update",
		API_URN_FRANCHISE_INVENTORY_PRODUCT_LIST: "franchise/inventory-product-list",

		API_URN_FRANCHISE_INVENTORY_STORE_ADD: "franchise/inventory-store-add",
		API_URN_FRANCHISE_INVENTORY_STORE_EDIT: "franchise/inventory-store-edit",
		API_URN_FRANCHISE_INVENTORY_GET_STORE_LIST: "franchise/inventory-store-list",
		API_URN_FRANCHISE_INVENTORY_DELETE_STORE: "franchise/inventory-store-destroy",
		API_URN_FRANCHISE_INVENTORY_UPDATE_STORE: "franchise/inventory-store-update",

		API_URN_FRANCHISE_INVENTORY_STORE_MANAGE_ADD_PRODUCT: "franchise/inventory-manage-product-add",
		API_URN_FRANCHISE_INVENTORY_STORE_MANAGE_EDIT_PRODUCT: "franchise/inventory-manage-product-edit",
		API_URN_FRANCHISE_INVENTORY_STORE_MANAGE_DELETE_PRODUCT: "franchise/inventory-manage-product-destroy",
		API_URN_FRANCHISE_INVENTORY_STORE_MANAGE_UPDATE_PRODUCT: "franchise/inventory-manage-product-update",
		API_URN_FRANCHISE_INVENTORY_STORE_MANAGE_LIST_PRODUCT: "franchise/inventory-manage-product-list",
		API_URN_FRANCHISE_INVENTORY_PRODUCT_DROPDOWN: "product-dropdown",
		API_URN_FRANCHISE_INVENTORY_STORE_DROPDOWN: "franchise/inventory-store-dropdown",

		API_URN_FRANCHISE_INVENTORY_PRODUCT_STORE_ADD: "franchise/product-store",
		API_URN_FRANCHISE_INVENTORY_PRODUCT_STORE_EDIT: "franchise/product-edit",
		API_URN_FRANCHISE_INVENTORY_PRODUCT_STORE_UPDATE: "franchise/product-update",
		API_URN_FRANCHISE_INVENTORY_PRODUCT_DELETE: "franchise/product-destroy",
		API_URN_FRANCHISE_INVENTORY_PRODUCT_IMAGE_DELETE: "franchise/product-image-destroy",
		API_URN_FRANCHISE_INVENTORY_PRODUCT_VARIANT_DELETE: "franchise/product-variant-destroy",
		API_URN_FRANCHISE_INVENTORY_PRODUCT_UPDATE_INVENTORY: "franchise/product-update-inventory",
		API_URN_FRANCHISE_INVENTORY_PRODUCT_SHOW: "franchise/product-show",
		API_URN_FRANCHISE_INVENTORY_PRODUCT_TABLE_DATA: "franchise/product-table-data",
		API_URN_FRANCHISE_INVENTORY_PRODUCT_DROPDOWN_LIST: "franchise/product-dropdown",

		API_URN_FRANCHISE_INVENTORY_PRODUCT_KIT_STORE: "franchise/product-kit-store",
		API_URN_FRANCHISE_INVENTORY_PRODUCT_KIT_EDIT: "franchise/product-kit-edit",
		API_URN_FRANCHISE_INVENTORY_PRODUCT_KIT_UPDATE: "franchise/product-kit-update",
		API_URN_FRANCHISE_INVENTORY_PRODUCT_KIT_DESTROY: "franchise/product-kit-destroy",
		API_URN_FRANCHISE_INVENTORY_PRODUCT_KIT_IMAGE_DESTROY: "franchise/product-kit-image-destroy",
		API_URN_FRANCHISE_INVENTORY_PRODUCT_KIT_ITEM_DESTORY: "franchise/product-kit-item-destroy",
		API_URN_FRANCHISE_INVENTORY_PRODUCT_KIT_SHOW: "franchise/product-kit-show",
		API_URN_FRANCHISE_INVENTORY_PRODUCT_KIT_TABLE_DATA: "franchise/product-kit-table-data",
		API_URN_FRANCHISE_INVENTORY_PRODUCT_KIT_DROPDOWN: "franchise/product-kit-dropdown",

		API_URN_FRANCHISE_MASK_SETTING_SHOW: "franchise/mask-setting-show",
		API_URN_FRANCHISE_MASK_SETTING_STORE: "franchise/mask-setting-store",

		API_URN_FRANCHISE_COMMUNICATION_TEMPLATE_STORE: "franchise/communication-template-store",
		API_URN_FRANCHISE_COMMUNICATION_TEMPLATE_EDIT: "franchise/communication-template-edit",
		API_URN_FRANCHISE_COMMUNICATION_TEMPLATE_UPDATE: "franchise/communication-template-update",
		API_URN_FRANCHISE_COMMUNICATION_TEMPLATE_DELETE: "franchise/communication-template-destroy",
		API_URN_FRANCHISE_COMMUNICATION_TEMPLATE_TABLE_DATA: "franchise/communication-template-table-data",
		API_URN_FRANCHISE_COMMUNICATION_TEMPLATE_DROPDOWN: "franchise/communication-template-dropdown",

		API_URN_FRANCHISE_PRODUCT_ORDER_TABLE_DATA: "franchise/order-table-data",
		API_URN_FRANCHISE_PRODUCT_ORDER_SHOW: "franchise/order-show",
		API_URN_FRANCHISE_PRODUCT_ORDER_LOT_DELIVERED: "franchise/order-lot-delivered",
		API_URN_FRANCHISE_PRODUCT_ORDER_LOT_DISPATCH: "franchise/order-lot-dispatch",
		API_URN_FRANCHISE_PRODUCT_ORDER_DESTORY_DISPATCH: "franchise/order-destroy",

		API_URN_FRANCHISE_PRODUCT_ORDER_DELIVERY_STORE: "franchise/delivery-store",
		API_URN_FRANCHISE_PRODUCT_ORDER_LOT_STATUS_UPDATE: "franchise/order-lot-status-update",
		API_URN_FRANCHISE_PRODUCT_DELIVERY_SHOW: "franchise/delivery-show",
		API_URN_FRANCHISE_PRODUCT_ACCEPT_ORDER_SHOW: "franchise/accept-order-show",

		API_URN_FRANCHISE_KIT_ORDER_CANCEL_ORDER: "franchise/order-cancel",

		API_URN_FRANCHISE_KIT_PRODUCT_INVOICE_TABLE_DATA: "franchise/product-invoice-table-data",
		API_URN_FRANCHISE_KIT_PRODUCT_INVOICE_DETAIL_SHOW: "franchise/product-invoice-show",
		API_URN_FRANCHISE_KIT_PRODUCT_INVOICE_DELETE: "franchise/product-invoice-destroy",
		API_URN_FRANCHISE_KIT_PRODUCT_INVOICE_STORE: "franchise/product-invoice-store",

		API_URN_FRANCHISE_KIT_PRODUCT_GET_DETAIL: "franchise/get-product-detail-kit",
		API_URN_FRANCHISE_KIT_PRODUCT_DESTORY: "franchise/product-kit-destroy",

		API_URN_FRANCHISE_KIT_PRODUCT_GENERATE_SKU: "franchise/generate-product-unique-sku",

		API_URN_FRANCHISE_GST_SETTING_UPDATE: "franchise/gst-setting-update",
		API_URN_FRANCHISE_GST_SETTING_SHOW: "franchise/gst-setting-show",
		API_URN_FRANCHISE_GST_SETTINGS_DELETE_LOGO: "franchise/gst-setting-delete-logo",

		API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_STORE: "franchise/class-store",
		API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_SHOW: "franchise/class-show",
		API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_EDIT: "franchise/class-edit",
		API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_UPDATE: "franchise/class-update",
		API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_DELETE: "franchise/class-destroy",
		API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_TABLE_DATA: "franchise/class-table-data",
		API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_CHANGE_STATUS: "franchise/class-change-status",

		API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_CATEGORY_STORE: "franchise/class-category-store",
		API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_CATEGORY_EDIT: "franchise/class-category-edit",
		API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_CATEGORY_UPDATE: "franchise/class-category-update",
		API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_CATEGORY_DESTORY: "franchise/class-category-destroy",
		API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_CATEGORY_TABLE_DATA: "franchise/class-category-table-data",
		API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_CATEGORY_CHANGE_STATUS: "franchise/class-category-change-status",
		API_URN_FRANCHISE_CLASS_MANAGEMENT_CLASS_CATEGORY_DROP_DOWN: "franchise/class-category-drop-down",
		API_URN_FRANCHISE_CLASS_MANAGEMENT_SCHOOL_CLASS_CATEGORY_UPDATE: "franchise/school-class-category-update",

		API_URN_FRANCHISE_GLOBAL_RIGHTS_STAFF_RIGHT_VIEW: "staff-module-right-global",
		API_URN_FRANCHISE_GLOBAL_RIGHTS_STAFF_RIGHT_UPDATE: "staff-update-module-right-global",

		API_URN_FRANCHISE_GLOBAL_RIGHTS_STUDENT_RIGHT_VIEW: "student-rights-global",
		API_URN_FRANCHISE_GLOBAL_RIGHTS_STUDENT_RIGHT_UPDATE: "student-rights-global-update",

		API_URN_FRANCHISE_DESIGNATION_STORE: "franchise/designation-store",
		API_URN_FRANCHISE_DESIGNATION_EDIT: "franchise/designation-edit",
		API_URN_FRANCHISE_DESIGNATION_UPDATE: "franchise/designation-update",
		API_URN_FRANCHISE_DESIGNATION_DESTROY: "franchise/designation-destroy",
		API_URN_FRANCHISE_DESIGNATION_TABLE_LIST_DATA: "franchise/designation-table-data",
		API_URN_FRANCHISE_DESIGNATION_DROPDOWN: "franchise/designation-dropdown",

		// Fee Management Fee Type Section
		API_URN_FRANCHISE_FEE_MANAGEMENT_ADD_FEE_TYPE_STORE: "franchise/fee-type-store",
		API_URN_FRANCHISE_FEE_MANAGEMENT_VIEW_FEE_TYPE: "franchise/fee-type-show?id",
		API_URN_FRANCHISE_FEE_MANAGEMENT_EDIT_FEE_TYPE: "franchise/fee-type-edit?id=&school_id=",
		API_URN_FRANCHISE_FEE_MANAGEMENT_UPDATE_FEE_TYPE: "franchise/fee-type-update",
		API_URN_FRANCHISE_FEE_MANAGEMENT_DELETE_FEE_TYPE: "franchise/fee-type-destroy",
		API_URN_FRANCHISE_FEE_MANAGEMENT_CHANGES_FEE_TYPE: "franchise/fee-type-change-status",
		API_URN_FRANCHISE_FEE_MANAGEMENT_FEE_TYPE_LIST: "franchise/fee-type-table-data",
		API_URN_FRANCHISE_FEE_MANAGEMENT_DROPDOWN_FEE_TYPE: "franchise/fee-type-dropdown",

		// Fee Management ClassConfiguration
		API_URN_FRANCHISE_FEE_MANAGEMENT_CLASS_CONFIGURATION_ADD: "franchise/class-config-type-store",
		API_URN_FRANCHISE_FEE_MANAGEMENT_CLASS_CONFIGURATION_VIEW: "/franchise/class-config-type-show",
		API_URN_FRANCHISE_FEE_MANAGEMENT_CLASS_CONFIGURATION_EDIT: "franchise/class-config-type-edit",
		API_URN_FRANCHISE_FEE_MANAGEMENT_CLASS_CONFIGURATION_UPDATE: "franchise/class-config-type-update",
		API_URN_FRANCHISE_FEE_MANAGEMENT_CLASS_CONFIGURATION_DELETE: "franchise/class-config-type-destroy",
		API_URN_FRANCHISE_FEE_MANAGEMENT_CLASS_CONFIGURATION_LIST: "franchise/class-config-type-table-data",
		API_URN_FRANCHISE_FEE_MANAGEMENT_CLASS_CONFIGURATION_DEFAULT_SET: "franchise/class-config-type-mark-default",
		API_URN_FRANCHISE_FEE_MANAGEMENT_CLASS_CONFIGURATION_DROPDOWN_MENU: "franchise/class-config-type-drop-down",

		// Fee Management FeeConfiguration
		API_URN_FRANCHISE_FEE_MANAGEMENT_FEE_CONFIGURATION_ADD: "franchise/fee-configuration-store",
		API_URN_FRANCHISE_FEE_MANAGEMENT_FEE_CONFIGURATION_VIEW: "franchise/fee-configuration-edit",
		API_URN_FRANCHISE_FEE_MANAGEMENT_FEE_CONFIGURATION_UPDATE: "franchise/fee-configuration-update",
		API_URN_FRANCHISE_FEE_MANAGEMENT_FEE_CONFIGURATION_DELETE: "franchise/fee-configuration-destroy",
		API_URN_FRANCHISE_FEE_MANAGEMENT_FEE_CONFIGURATION_LIST: "franchise/fee-configuration-table-data"
	};

	const config_certificate = {
		API_URN_CERTIFICATE_SETTINGS_STORE_ADMIN: "certificate-setting-store",
		API_URN_CERTIFICATE_SETTINGS_SHOW_ADMIN: "certificate-setting-show",
		API_URN_CERTIFICATE_SETTINGS_DELETE_LOGO_ADMIN: "certificate-setting-delete-logo",
	}

	const config_on_boarding = {
		API_URN_ONBOARDING_SETUP_SCHOOL: "setup-school",
		API_URN_ONBOARDING_EDUCASE: "onboarding-educase",
		API_URN_ONBOARDING_SETUP_FRANCHISE_SCHOOL: "setup-franchise-school",
	}

	const config_visitor_register = {
		API_URN_VISITOR_REGISTER_STORE_ADMIN: "visitor-register-store",
		API_URN_VISITOR_REGISTER_EDIT_ADMIN: "visitor-register-edit",
		API_URN_VISITOR_REGISTER_SHOW_ADMIN: "visitor-register-show",
		API_URN_VISITOR_REGISTER_UPDATE_ADMIN: "visitor-register-update",
		API_URN_VISITOR_REGISTER_TABLE_DATA_ADMIN: "visitor-register-table-data",
		API_URN_ALL_VISITOR_REGISTER_EXPORT: "visitor-register-export",
		API_URN_VISITOR_REGISTER_UPDATE_OUT_TIME_ADMIN: "visitor-register-update-out-time",
	}

	const config_kit_ordering = {
		API_URN_KIT_ORDERING_PRODUCT_LIST: "kitodering-product-table-data",
		API_URN_KIT_ORDERING_PRODUCT_SHOW: "kitodering-product-show",
		API_URN_KIT_ORDERING_CART_STORE: "cart-detail-store",
		API_URN_KIT_ORDERING_CART_SHOW: "cart-detail-show",
		API_URN_KIT_ORDERING_CART_UPDATE: "cart-detail-update",
		API_URN_KIT_ORDERING_CART_DESTROY: "cart-detail-destroy",
		API_URN_KIT_ORDERING_CART_LIST: "cart-detail-table-data",
		API_URN_KIT_ORDERING_ORDER_LIST: "order-table-data",
		API_URN_KIT_ORDERING_ORDER_STORE: "order-store",
		API_URN_KIT_ORDERING_ORDER_DETAIL: "order-show",
		API_URN_KIT_ORDER_PROPOSAL_DETAIL: "proposal-show",
		API_URN_KIT_ORDER_PROPOSAL_ACCEPT: "order-accept",
		API_URN_KIT_ORDER_PROPOSAL_REJECT: "order-reject",
		API_URN_KIT_ORDER_PROPOSAL_LIST: "proposal-table-data",
		API_URN_KIT_ORDERING_ORDER_CANCEL: "order-cancel",
		API_URN_KIT_ORDERING_ORDER_DESTROY: "order-destroy",
		API_URN_KIT_ORDERING_ASSIGN_STUDENT_ADMIN: "cart-assign-student",
		API_URN_KIT_ORDERING_CART_ASSIGN_STUDENT_DESTROY_ADMIN: "cart-assign-student-destroy",
		API_URN_KIT_ORDERING_CART_ASSIGN_STUDENT_LIST_ADMIN: "cart-assign-student-list",
		API_URN_KIT_PRODUCT_DETAIL_ADMIN: "admin/get-product-kit-detail",

		API_URN_KIT_ORDERING_ORDER_STORE_ADMIN: "admin/order-product-store",

		API_URN_ORDER_PRODUCT_KIT_STORE_ADMIN: "admin/order-product-kit-store",
		API_URN_ORDER_PRODUCT_KIT_SHOW_ADMIN: "admin/order-product-kit-show",
		API_URN_ORDER_PRODUCT_TABLE_DATA_ADMIN: "admin/order-table-data",
		API_URN_ORDER_PRODUCT_KIT_ORDER_CANCEL_ADMIN: "admin/order-cancel",

		API_URN_CART_ASSIGN_STUDENT_STORE_ADMIN: "admin/cart-assign-student",
		API_URN_CART_ASSIGN_STUDENT_DELETE_ADMIN: "admin/cart-assign-student-destroy",
		API_URN_CART_ASSIGN_STUDENT_LIST_ADMIN: "admin/cart-assign-student-list",

		API_URN_CART_DETAIL_STORE_ADMIN: "admin/cart-detail-store",
		API_URN_CART_DETAIL_SHOW_ADMIN: "admin/cart-detail-show",
		API_URN_CART_DETAIL_UPDATE_ADMIN: "admin/cart-detail-update",
		API_URN_CART_DETAIL_DELETE_ADMIN: "admin/cart-detail-destroy",
		API_URN_CART_DETAIL_TABLE_DATA_ADMIN: "admin/cart-detail-table-data",

		API_URN_PRODUCT_SHOW_ADMIN: "admin/product-show",
		API_URN_PRODUCT_TABLE_DATA_ADMIN: "admin/product-table-data",

		API_URN_PRODUCT_INVOICE_TABLE_DATA_ADMIN: "admin/product-invoice-table-data",

		API_URN_KIT_CART_DETAIL_STORE_ADMIN: "admin/kit-cart-detail-store",
		API_URN_KIT_CART_DETAIL_STORE_TABLE_DATA_ADMIN: "admin/kit-cart-detail-table-data",
		API_URN_KIT_CART_KIT_REMOVE_ADMIN: "admin/kit-cart-destroy",

		API_URN_ORDER_PRODUCT_KIT_STORE_PARENT: "parent/order-product-kit-store",
		API_URN_ORDER_PRODUCT_STORE_PARENT: "parent/order-product-store",
		API_URN_ORDER_PRODUCT_KIT_SHOW_PARENT: "parent/order-product-kit-show",
		API_URN_ORDER_TABLE_DATA_PARENT: "parent/order-table-data",
		API_URN_ORDER_CANCEL_PARENT: "parent/order-cancel",
		API_URN_ORDER_LIST_PARENT: "parent/order-cancel",

		API_URN_CART_DETAIL_STORE_PARENT: "parent/cart-detail-store",
		API_URN_CART_DETAIL_SHOW_PARENT: "parent/cart-detail-show",
		API_URN_CART_DETAIL_UPDATE_PARENT: "parent/cart-detail-update",
		API_URN_CART_DETAIL_DESTORY_PARENT: "parent/cart-detail-destroy",
		API_URN_CART_DETAIL_TABLE_DATA_PARENT: "parent/cart-detail-table-data",

		API_URN_KIT_CART_DETAIL_STORE_PARENT: "parent/kit-cart-detail-store",
		API_URN_KIT_CART_DETAIL_TABLE_DATA_PARENT: "parent/kit-cart-detail-table-data",
		API_URN_KIT_CART_PARENT_DESTROY: "parent/kit-cart-destroy",

		API_URN_PRODUCT_KIT_PRODUCT_SHOW_PARENT: "parent/product-show",
		API_URN_PRODUCT_TABLE_DATA_PARENT: "parent/product-table-data",

		API_URN_GET_PRODUCT_KIT_DETAIL_PARENT: "parent/get-product-kit-detail",
		API_URN_GET_PRODUCT_KIT_TABLE_DATA: "parent/product-kit-table-data",

		API_URN_GET_KIT_SETTING_STORE_FRANCHiSE: "franchise/kit-setting-store",
		API_URN_GET_KIT_SETTING_SHOW_FRANCHiSE: "franchise/kit-setting-show",

		API_URN_INVOICE_STATUS_CHANGE_FRANCHiSE: "franchise/product-invoice-status-change",
	}

	const config_curriculum = {
		API_URN_CURRICULLUM_GET_LIST: "curriculum-school-table-data",
		API_URN_CURRICULLUM_GET_ACCESS_LIST: "curriculum-school-access-table-data",
		API_URN_CURRICULLUM_UPDATE_ACCESS_LIST: "curriculum-school-active",
		API_URN_CURRICULLUM_SHOW: "curriculum-school-show",

		API_URN_CURRICULUM_ASSIGN_SCHOOL_TEACHER_TABLE_DATA: "school/curriculum-assign-table-data",
		API_URN_CURRICULUM_ASSIGN_SCHOOL_TEACHER: "school/curriculum-assign-teacher",
		API_URN_CURRICULUM_ASSIGN_SCHOOL_TEACHER_DROPDOWN: "school/curriculum-assign-teacher-dropdown",
		API_URN_ADMIN_CURRICULUM_ASSIGN_SCHOOL_TABLE_DATA: "school/curriculum-table-data",
		API_URN_STAFF_CURRICULUM_ASSIGN_SCHOOL_TABLE_DATA: "teacher/curriculum-table-data",
		API_URN_CURRICULUM_SHOW_IN_SCHOOL: "school/curriculum-show",

		API_URN_TEACHER_CURRICULUM_SESSION_START: "teacher/curriculum-session-start",
		API_URN_TEACHER_CURRICULUM_SESSION_END: "teacher/curriculum-session-end",
		API_URN_TEACHER_CURRICULUM_TABLE_DATA: "teacher/curriculum-table-data",

		API_URN_SCHOOL_CURRICULUM_DETAIL: "school/curriculum-detail"
	}

	const config_payment = {
		API_URN_PROCESS_FEE_PAYMENT: "process-fee-payment",
		API_URN_PROCESS_DAYCARE_PAYMENT: "process-daycare-payment",
		API_URN_PAYMENT_ORDER_STORE: "payment-order-store",
		API_URN_PAYMENT_GATEWAY_LIST: "payment-gateway-list",
		API_URN_PAYMENT_ORDER_SHOW: "payment-order-show",
		API_URN_PROCESS_PAYMENT_FAIL: "process-payment-fail",
		API_URN_FEE_PAYMENT_CHECK_PAST_INSTALLMENT: "fee-payment-cheeck-past-installment",
		API_URN_FEE_PROCESS_ADDITIONAL_FEE_PAYMENT: "process-additonal-fee-payment",
		API_URN_PAYMENT_GATEWAY_DETAIL: "payment-gateway-detail",

		API_URN_SCHOOL_PAYMENT_ORDER_STORE_ADMIN: "school-payment-order-store",
		API_URN_SCHOOL_PAYMENT_ORDER_SHOW_ADMIN: "school-payment-order-show",
		API_URN_SCHOOL_PROCESS_KIT_ORDERING_PAYMENT_ADMIN: "process-kit-ordering-payment",
		API_URN_SCHOOL_PROCESS_PAYMENT_FAIL_ADMIN: "school-process-payment-fail",
		API_URN_SCHOOL_PAYMENT_GATEWAY_LIST_ADMIN: "school-payment-gateway-list",
		API_URN_SCHOOL_PAYMENT_GATEWAY_DETAIL_ADMIN: "school-payment-gateway-detail",

		API_URN_SCHOOL_ADMISSION_PROCESS_PAYMENT: "process-admission-payment",

		API_URN_SCHOOL_ORDER_CREATE_PRODUCT_ORDER: "create-product-order",
		API_URN_SCHOOL_PROCESS_PRODUCT_ORDER_PAYMENT: "process-product-payment",

		API_URN_KIT_ORDER_CREATE_KIT_ORDER: "create-kit-order",
		API_URN_KIT_ORDER_KIT_PAYMENT_FAIL: "kit-payment-fail",
		API_URN_KIT_ORDER_PROCESS_KIT_PAYMENT: "process-kit-payment",

		API_URN_PARENT_CREATE_KIT_ORDER: "parent/create-kit-order",
		API_URN_PARENT_KIT_PAYEMENT_FAIL: "parent/kit-payment-fail",
		API_URN_PARENT_PROCESS_KIT_PAYEMENT: "parent/process-kit-payment",

		API_URN_PARENT_CREATE_PRODUCT_ORDER: "parent/create-product-order",
		API_URN_PARENT_PRODUCT_PAYEMENT_FAIL: "parent/product-payment-fail",
		API_URN_PARENT_PROCESS_PRODUCT_PAYEMENT: "parent/process-product-payment"
	}

	const config_guest_fee_payment = {
		API_URN_GUEST_FEE_PAYMENT_USER_DATA: "guest-fee-payment-user-data",
		API_URN_GUEST_FEE_PAYMENT_VERIFY_PHONE: "guest-fee-payment-verify-phone",
		API_URN_GUEST_FEE_PAYMENT_GATEWAY: "guest-fee-payment-gateway",
		API_URN_GUEST_FEE_PAYMENT_ORDER: "guest-fee-payment-order",
		API_URN_GUEST_FEE_PAYMENT_PROCESS: "guest-process-fee-payment",
		API_URN_GUEST_FEE_PAYMENT_FAIL: "guest-payment-fail"
	}

	const config_meeting_room = {
		API_URN_MEETING_ROOM_STORE_ADMIN: "meeting-room-store",
		API_URN_MEETING_ROOM_SHOW_DETAIL_ADMIN: "meeting-room-show",
		API_URN_MEETING_ROOM_DESTROY_ADMIN: "meeting-room-destroy",
		API_URN_MEETING_ROOM_TABLE_DATA_ADMIN: "meeting-room-table-data",
		API_URN_MEETING_ROOM_REPLY_ADMIN: "meeting-room-reply",
		API_URN_MEETING_ROOM_CHAT_END_ADMIN: "meeting-room-chat-end",
		API_URN_MEETING_ROOM_ASSIGN_STAFF_ADMIN: "meeting-room-assign-staff"
	}
	const config_transfer_certificate = {
		API_URN_TRANSFER_CERTIFICATE_STORE_ADMIN: "transfer-certificate-store",
		API_URN_TRANSFER_CERTIFICATE_EDIT_ADMIN: "transfer-certificate-edit",
		API_URN_TRANSFER_CERTIFICATE_UPDATE_ADMIN: "transfer-certificate-update",
		API_URN_TRANSFER_CERTIFICATE_DESTROY_ADMIN: "transfer-certificate-destroy",
		API_URN_TRANSFER_CERTIFICATE_TABLE_DATA_ADMIN: "transfer-certificate-table-data",
		API_URN_TRANSFER_CERTIFICATE_SIGNATURE_STORE_ADMIN: "transfer-certificate-signature-store",
		API_URN_TRANSFER_CERTIFICATE_SIGNATURE_EDIT_ADMIN: "transfer-certificate-signature-edit",
		API_URN_TC_TEACHER_SIGNATURE_STORE_ADMIN: "tc-teacher-signature-store",
		API_URN_TC_TEACHER_SIGNATURE_EDIT_ADMIN: "tc-teacher-signature-edit",
		API_URN_TC_TEACHER_SIGNATURE_UPDATE_ADMIN: "tc-teacher-signature-update",
		API_URN_TC_TEACHER_SIGNATURE_DESTROY_ADMIN: "tc-teacher-signature-destroy",
		API_URN_TC_PRINCIPAL_SIGNATURE_DELETE_ADMIN: "transfer-certificate-signature-destroy-principal",
		API_URN_TC_TEACHER_SIGNATURE_DELETE_ADMIN: "transfer-certificate-signature-destroy-teacher",
		API_URN_TC_CHECKED_SIGNATURE_DELETE_ADMIN: "transfer-certificate-signature-destroy-checked",
		API_URN_TC_TEACHER_SIGNATURE_TABLE_DATA_ADMIN: "tc-teacher-signature-table-data",
		API_URN_TC_TEACHER_SIGNATURE_SHOW_ADMIN: "tc-teacher-signature-show",
	}
	const config_bustracking = {
		API_URN_BUSTRACKING_BUS_STORE_ADMIN: "bus-store",
		API_URN_BUSTRACKING_BUS_EDIT_ADMIN: "bus-edit",
		API_URN_BUSTRACKING_BUS_UPDATE_ADMIN: "bus-update",
		API_URN_BUSTRACKING_BUS_DESTROY_ADMIN: "bus-destroy",
		API_URN_BUSTRACKING_BUS_TABLE_DATA_ADMIN: "bus-table-data",
		API_URN_BUSTRACKING_BUS_DROP_DOWN_ADMIN: "bus-drop-down",

		API_URN_BUSTRACKING_BUSROUTE_STORE_ADMIN: "bus-route-store",
		API_URN_BUSTRACKING_BUSROUTE_EDIT_ADMIN: "bus-route-edit",
		API_URN_BUSTRACKING_BUSROUTE_UPDATE_ADMIN: "bus-route-update",
		API_URN_BUSTRACKING_BUSROUTE_DESTROY_ADMIN: "bus-route-destroy",
		API_URN_BUSTRACKING_BUSROUTE_TABLE_DATA_ADMIN: "bus-route-table-data",
		API_URN_BUSTRACKING_BUS_ROUTE_DROP_DOWN_ADMIN: "bus-route-drop-down",

		API_URN_BUSTRACKING_BUS_ATTENDER_STORE_ADMIN: "assign-bus-driver-attender-store",
		API_URN_BUSTRACKING_BUS_ATTENDER_EDIT_ADMIN: "assign-bus-driver-attender-edit",
		API_URN_BUSTRACKING_BUS_ATTENDER_UPDATE_ADMIN: "assign-bus-driver-attender-update",
		API_URN_BUSTRACKING_BUS_ATTENDER_DESTROY_ADMIN: "assign-bus-driver-attender-destroy",
		API_URN_BUSTRACKING_BUS_ATTENDER_TABLE_DATA_ADMIN: "assign-bus-driver-attender-table-data",

		API_URN_BUSTRACKING_GET_ALLOCATE_STUDENT_ADMIN: "bus-student-allocate-table-data",
		API_URN_BUSTRACKING_ALLOCATE_STORE_STUDENT_ADMIN: "bus-student-allocate",
		API_URN_BUSTRACKING_ALLOCATE_EDIT_STUDENT_ADMIN: "bus-student-allocate-edit",
		API_URN_BUSTRACKING_ALLOCATE_UPDATE_STUDENT_ADMIN: "bus-student-allocate-update",
		API_URN_BUSTRACKING_DEALLOCATE_STORE_STUDENT_ADMIN: "bus-student-deallocate",

		API_URN_STAFF_DROPDOWN_ADMIN: "designated-staff-drop-down",
		API_URN_STOP_ROUTE_STORE_ADMIN: "bus-route-stop-store",
		API_URN_STOP_EDIT_ROUTE_ADMIN: "bus-route-stop-edit",
		API_URN_STOP_UPDATE_ROUTE_ADMIN: "bus-route-stop-update",
		API_URN_STOP_ROUTE_LIST_ADMIN: "bus-route-stop-table-data",
		API_URN_STOP_ROUTE_DROPDOWN_ADMIN: "bus-route-stop-drop-down",
		API_URN_STOP_ROUTE_DELETE_ADMIN: "bus-route-stop-destroy",
		API_URN_BUSTRACKING_BUS_ROUTE_STOP_GENERATE_CSV_ADMIN: "bus-route-stop-generate-csv",
		API_URN_BUSTRACKING_BUS_ROUTE_STOP_IMPORT_CSV_ADMIN: "bus-route-stop-import-csv",
		API_URN_BUSTRACKING_BUS_STAFF_DETAILS_ADMIN: "assign-bus-staff-details",

		API_URN_BUSTRACKING_BUS_ROUTE_ASSIGN_STUDENT_ADMIN: "bus-route-assign-student",
		API_URN_BUSTRACKING_BUS_ROUTE_ASSIGN_EDIT_STUDENT_ADMIN: "assigned-student-edit",
		API_URN_BUSTRACKING_BUS_ROUTE_ASSIGNED_STUDENT_ADMIN: "bus-route-assigned-student",
		API_URN_BUSTRACKING_BUS_ROUTE_ASSIGN_STUDENT_LIST_ADMIN: "bus-route-assign-student-list",
		API_URN_BUSTRACKING_BUS_ROUTE_ASSIGN_STUDENT_UPDATE_ADMIN: "assigned-student-update",
		API_URN_BUSTRACKING_ASSIGN_BUS_ROUTE_TABLE_ADMIN: "assign-bus-route-table-data",

		API_URN_BUSTRACKING_ASSIGN_STUDENT_TEMP_LIST_ADMIN: "bus-student-temp-assign-list",
		API_URN_BUSTRACKING_ASSIGNED_STUDENT_TEMP_LIST_ADMIN: "bus-student-temp-assigned-list",
		API_URN_BUSTRACKING_ASSIGN_STUDENT_TEMP_ALLOCATE_ADMIN: "bus-student-temp-assign",
		API_URN_BUSTRACKING_ASSIGN_STUDENT_TEMP_DEALLOCATE_ADMIN: "bus-student-temp-deallocate",
		API_URN_BUSTRACKING_ASSIGN_STUDENT_TEMP_DELETE_ALL: "bus-student-temp-delete",

		API_URN_BUSTRACKING_STUDENT_ATTENDANCE_PICKUP_FROM_STOP_ADMIN: "bus-student-attendance-pickup-from-stop",
		API_URN_BUSTRACKING_STUDENT_ATTENDANCE_DROPPED_AT_SCHOOL_ADMIN: "bus-student-attendance-dropped-at-school",

		API_URN_BUSTRACKING_STUDENT_ATTENDANCE_PICKUP_FROM_SCHOOL_ADMIN: "bus-student-attendance-pickup-from-school",
		API_URN_BUSTRACKING_STUDENT_ATTENDANCE_DROPPED_AT_STOP_ADMIN: "bus-student-attendance-dropped-at-stop",

		API_URN_BUSTRACKING_STUDENT_ATTENDANCE_GET_ROUTE_STOP_ADMIN: "get-route-stop",
		API_URN_BUSTRACKING_STUDENT_ATTENDANCE_GET_ROUTE_DETAILS_ADMIN: "get-route-details",

		API_URN_BUSTRACKING_STUDENT_ATTENDANCE_GET_DETAIL_ADMIN: "get-bus-attendance-detail",

		API_URN_BUSTRACKING_BUS_SYNC_ATTENDANCE_ADMIN: "bus-sync-attendance",

		API_URN_BUSTRACKING_BUS_JOURNEY_STORE_ADMIN: "bus-journey-store",
		API_URN_BUSTRACKING_BUS_JOURNEY_STOP_STATUS_ADMIN: "bus-stop-status",
		API_URN_BUSTRACKING_BUS_JOURNEY_END_ADMIN: "bus-journey-end",
		API_URN_BUSTRACKING_BUS_GET_TRACKING_LOCATION_GPS_DATA: "bus-tracking-location-gps-data",
		API_URN_BUSTRACKING_BUS_GET_TRACKING_STOPS_DATA: "bus-tracking-stops-data",

		API_URN_BUSTRACKING_BUS_JOURNEY_GET_DETAILS_PARENT: "student/get-journey-details",
		API_URN_BUSTRACKING_BUS_GET_ATTENDANCE_DETAILS_PARENT: "student/get-attendance-details"
	}

	const config_school_website = {
		API_URN_SCHOOL_WEBSITE_SLIDER_STATUS_ADMIN: "school-webiste-slider-status",
		API_URN_SCHOOL_WEBSITE_SLIDER_TABLE_DATA_ADMIN: "school-website-slider-table-data",
		API_URN_SCHOOL_WEBSITE_OUR_PROGRAM_STATUS_ADMIN: "school-webiste-ourprogram-status",
		API_URN_SCHOOL_WEBSITE_OUR_PROGRAM_TABLE_DATA_ADMIN: "school-website-ourprogram-table-data",
		API_URN_SCHOOL_WEBSITE_OFFER_STATUS_ADMIN: "school-webiste-offer-status",
		API_URN_SCHOOL_WEBSITE_OFFER_TABLE_DATA_ADMIN: "school-website-offer-table-data",
		API_URN_SCHOOL_WEBSITE_ABOUT_CONTENT_ADD_ADMIN: "school-webiste-aboutcontent-add",
		API_URN_SCHOOL_WEBSITE_ABOUT_CONTENT_SHOW_ADMIN: "school-website-aboutcontent-show"
	}

	const config_stats = {
		API_URN_GET_CLASS_STUDENT_STATS: "stats-class-student",
		API_URN_GET_DAYCARE_STUDENT_STATS: "stats-daycare-student",
		API_URN_GET_INSTA_ALERT_STATS: "stats-insta-alert",
		API_URN_GET_EVENTS_STATS: "stats-event",
		API_URN_GET_HOLIDAYS_STATS: "stats-holiday",
		API_URN_GET_VISITORS_STATS: "stats-visitor",
		API_URN_GET_SMS_STATS: "stats-sms",
		API_URN_GET_EMAIL_STATS: "stats-email",
	}

	const config_superadmin = {
		API_URN_FRANCHISE_STORE_SUPERADMIN: "superadmin/franchise-store",
		API_URN_FRANCHISE_DESTROY_SUPERADMIN: "superadmin/franchise-destroy",
		API_URN_FRANCHISE_UPDATE_SUPERADMIN: "superadmin/franchise-update",
		API_URN_FRANCHISE_ADD_SMS_SUPERADMIN: "superadmin/franchise-add-sms",
		API_URN_FRANCHISE_UPDATE_SMS_SUPERADMIN: "superadmin/franchise-update-sms",
		API_URN_FRANCHISE_STORE_SCHOOL_SUPERADMIN: "superadmin/franchise-store-school",
		API_URN_FRANCHISE_DELETE_SCHOOL_SUPERADMIN: "superadmin/franchise-delete-school",
		API_URN_FRANCHISE_SHOW_SUPERADMIN: "superadmin/franchise-show",
		API_URN_FRANCHISE_EDIT_SUPERADMIN: "superadmin/franchise-edit",
		API_URN_FRANCHISE_TABLE_DATA_SUPERADMIN: "superadmin/franchise-table-data",
		API_URN_FRANCHISE_STATUS_SUPERADMIN: "superadmin/franchise-status",
		API_URN_FRANCHISE_VERIFIED_STATUS_SUPERADMIN: "superadmin/franchise-verified-status",
		API_URN_FRANCHISE_EDIT_SCHOOL_SUPERADMIN: "superadmin/franchise-edit-school",
		API_URN_FRANCHISE_SCHOOL_TABLE_DATA_SUPERADMIN: "superadmin/franchise-school-table-data"
	}

	const config_website_pages = {
		API_URN_WEBSITE_PAGE_STORE: "website-page-store",
		API_URN_WEBSITE_PAGE_EDIT: "website-page-edit",
		API_URN_WEBSITE_PAGE_UPDATE: "website-page-update",
		API_URN_WEBSITE_PAGE_TABLE_DATA: "website-page-table-data"
	}

	const config_communication = {
		API_URN_STAFF_COMMUNICATION_TABLE_DATA: "staff/communication-table-data",
		API_URN_COMMUNICATION_TABLE_DATA_ADMIN: "communication-table-data",
		API_URN_COMMUNICATION_SHOW: "communication-show",
		API_URN_COMMUNICATION_TABLE_DATA_PARENT: "parent/communication-table-data",
		API_URN_COMMUNICATION_SHOW_PARENT: "parent/communication-show",
		API_URN_COMMUNICATION_CATEGORY_LIST: "communication-category-list",
		API_URN_COMMUNICATION_SUB_CATEGORY_LIST: "communication-sub-category-list",
		API_URN_COMMUNICATION_GET_CATEGORY_FOLDER: "communication-category-folder"
	}

	const config_social_media = {
		API_URN_SOCIAL_MEDIA_LOGIN: "social-login",
		API_URN_SOCIAL_POST_CATEGORY_TABLE_DATA: "post-category-table-data",
		API_URN_SOCIAL_POST_CATEGORY_STORE: "post-category-store",
		API_URN_SOCIAL_POST_CATEGORY_EDIT: "post-category-edit",
		API_URN_SOCIAL_POST_CATEGORY_DROPDOWN: "post-category-dropdown",
		API_URN_SOCIAL_POST_CATEGORY_UPDATE: "post-category-update",
		API_URN_SOCIAL_POST_CATEGORY_DESTROY: "post-category-destroy",
		API_URN_SOCIAL_POST_HASHTAG_TABLE_DATA: "post-hashtag-table-data",
		API_URN_SOCIAL_POST_HASHTAG_STORE: "post-hashtag-store",
		API_URN_SOCIAL_POST_HASHTAG_EDIT: "post-hashtag-edit",
		API_URN_SOCIAL_POST_HASHTAG_DROPDOWN: "post-hashtag-dropdown",
		API_URN_SOCIAL_POST_HASHTAG_UPDATE: "post-hashtag-update",
		API_URN_SOCIAL_POST_HASHTAG_DESTROY: "post-hashtag-destroy",
		API_URN_SOCIAL_POST_STORE: "post-store",
		API_URN_SOCIAL_POST_TABLE_DATA: "post-table-data",
		API_URN_SOCIAL_POST_EDIT: "post-edit",
		API_URN_SOCIAL_POST_UPDATE: "post-update",
		API_URN_SOCIAL_POST_DESTROY: "post-destroy",
		API_URN_SOCIAL_MEDIA_CHECK_CONNECTION: "connection-status",
		API_URN_SOCIAL_MEDIA_FB_PAGE_DROPDOWN: "page-dropdown",
		API_URN_SOCIAL_MEDIA_SET_FB_PAGE: "set-active-page",
		API_URN_SOCIAL_MEDIA_LOGOUT: "social-logout",
	}

	const exam_management = {
		//Category
		API_URN_EXAM_MANAGEMENT_CATEGORY_ADD: "exam-management-category-store",
		API_URN_EXAM_MANAGEMENT_CATEGORY_EDIT: "exam-management-category-edit",
		API_URN_EXAM_MANAGEMENT_CATEGORY_UPDATE: "exam-management-category-update",
		API_URN_EXAM_MANAGEMENT_CATEGORY_DELETE: "exam-management-category-destroy",
		API_URN_EXAM_MANAGEMENT_CATEGORY_LIST: "exam-management-category-table-data",
		API_URN_EXAM_MANAGEMENT_CATEGORY_DROPDOWN: "exam-management-category-dropdown",

		//TimeTable
		API_URN_EXAM_MANAGEMENT_TIMETABLE_ADD: "exam-management-timetable-store",
		API_URN_EXAM_MANAGEMENT_TIMETABLE_SHOW: "exam-management-timetable-show",
		API_URN_EXAM_MANAGEMENT_TIMETABLE_EDIT: "exam-management-timetable-edit",
		API_URN_EXAM_MANAGEMENT_TIMETABLE_UPDATE: "exam-management-timetable-store",
		API_URN_EXAM_MANAGEMENT_TIMETABLE_LIST: "exam-management-timetable-table-data",
		API_URN_EXAM_MANAGEMENT_TIMETABLE_DELETE: "exam-management-timetable-destroy",
		API_URN_EXAM_MANAGEMENT_TIMETABLE_DROPDOWN: "exam-management-timetable-dropdown",
		
		//Template
		API_URN_EXAM_MANAGEMENT_TEMPLATE_ADD: "exam-management-template-store",
		API_URN_EXAM_MANAGEMENT_TEMPLATE_SHOW: "exam-management-template-show",
		API_URN_EXAM_MANAGEMENT_TEMPLATE_EDIT: "exam-management-template-edit",
		API_URN_EXAM_MANAGEMENT_TEMPLATE_UPDATE: "exam-management-template-update",
		API_URN_EXAM_MANAGEMENT_TEMPLATE_DELETE: "exam-management-template-destroy",
		API_URN_EXAM_MANAGEMENT_TEMPLATE_LIST: "exam-management-template-table-data",
		API_URN_EXAM_MANAGEMENT_TEMPLATE_DROPDOWN: "exam-management-template-dropdown",

		//HallTicket
		API_URN_EXAM_MANAGEMENT_HALLTICKET_ADD: "exam-management-hallticket-store",
		API_URN_EXAM_MANAGEMENT_HALLTICKET_SHOW: "exam-management-hallticket-show",
		API_URN_EXAM_MANAGEMENT_HALLTICKET_EDIT: "exam-management-hallticket-edit",
		API_URN_EXAM_MANAGEMENT_HALLTICKET_UPDATE: "exam-management-hallticket-update",
		API_URN_EXAM_MANAGEMENT_HALLTICKET_DELETE: "exam-management-hallticket-destroy",
		API_URN_EXAM_MANAGEMENT_HALLTICKET_LIST: "exam-management-hallticket-table-data",
		API_URN_EXAM_MANAGEMENT_HALLTICKET_INSTALLMENT_DROPDOWN: "exam-management-hallticket-installment-dropdown",
		API_URN_EXAM_MANAGEMENT_HALLTICKET_STUDENT_LIST: "exam-management-hallticket-student-table-data",
		
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

	Lib.Bustracking = require("../core_modules/bustracking")(Lib, config_bustracking);
	Lib.Stats = require("../core_modules/stats")(Lib, config_stats);
	Lib.Enquiry = require("../core_modules/enquiry")(Lib, config_enquiry);

	Lib.TransferCertificate = require("../core_modules/transfer-certificate")(Lib, config_transfer_certificate);

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

	Lib.Notification = require("../core_modules/notification")(Lib, config_notification);

	Lib.Holiday = require("../core_modules/holiday")(Lib, config_holiday);

	Lib.Dropdown = require("../core_modules/dropdown")(Lib, config_dropdown);

	Lib.Attendance = require("../core_modules/attendance")(
		Lib,
		config_attendance
	);
	Lib.Curriculum = require("../core_modules/Curriculum")(
		Lib,
		config_curriculum
	);
	Lib.Certificate = require("../core_modules/certificate")(
		Lib,
		config_certificate
	);
	Lib.Diary = require("../core_modules/diary")(Lib, config_diary);

	Lib.Insta = require("../core_modules/insta")(Lib, config_insta);

	Lib.ActivityCenter = require("../core_modules/activity-center")(Lib, config_activity_center);

	Lib.Birthday = require("../core_modules/birthday")(Lib, config_birthday);

	Lib.Videos = require("../core_modules/videos")(Lib, config_videos);

	Lib.Payroll = require("../core_modules/payroll")(Lib, config_payroll);

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

	Lib.Franchise = require("../core_modules/franchise")(Lib, config_franchise);

	Lib.OnBoarding = require("../core_modules/onboarding")(Lib, config_on_boarding);

	Lib.VisitorRegister = require("../core_modules/visitor-register")(Lib, config_visitor_register);

	Lib.KitOrdering = require("../core_modules/kit-ordering")(Lib, config_kit_ordering);

	Lib.Payment = require("../core_modules/payment")(Lib, config_payment);

	Lib.MeetingRoom = require("../core_modules/meeting-room")(Lib, config_meeting_room);

	Lib.GuestFeePayment = require("../core_modules/guest-fee-payment")(Lib, config_guest_fee_payment);

	Lib.OurCenters = require("../core_modules/our-centers")(Lib, config_our_centers);

	Lib.SchoolWebsite = require("../core_modules/school-website")(Lib, config_school_website)

	Lib.Superadmin = require("../core_modules/superadmin")(Lib, config_superadmin)

	Lib.WebsitePages = require("../core_modules/website-pages")(Lib, config_website_pages)

	Lib.Communication = require("../core_modules/communication")(Lib, config_communication)

	Lib.SocialMedia = require("../core_modules/social-media")(Lib, config_social_media)
	
	Lib.ExamManagement = require("../core_modules/exam-management")(Lib, exam_management)
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
