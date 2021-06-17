// Info: Dependency Manager. Configration Loader.
"use strict"

/****************** Notes *********************
* Loads dependencies in Lib Object

* Next Note
***********************************************/

// Module outputs
var Lib = {}

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
    NO_TIME_AUDITING: config_app["NO_TIME_AUDITING"]
  }

  // Set Configration for Google geo
  const config_geo_google = {
    GOOGLE_API_KEY: config_app["GOOGLE_API_KEY"]
  }

  // Set Configrations
  const http_config = {
    TIMEOUT: 400, // small value shoud cause timeout
    TIMEOUT: 30000, // In milliseconds (3 second). 0 means no timeout
    USER_AGENT: "Test App 1.0" // Not used by browser
  }

  // Set Configration for Money library
  const config_money = {} //TODO

  // Set Configration for Org Module

  const config_feedback = {
    // Api urns
    API_URN_GET_FEEDBACK_LIST_ADMIN: "feedback-table-data",
    API_URN_DELETE_FEEDBACK_ADMIN: "feedback-destroy",
    API_URN_GET_FEEDBACK_DETAIL_ADMIN: "/feedback-detail",
    API_URN_REPLY_FEEDBACK_ADMIN: "feedback-reply",
    API_URN_GET_FEEDBACK_LIST_PARENT: "student/feedback/list",
    API_URN_ADD_FEEDBACK_PARENT: "student/feedback/add",
    API_URN_GET_FEEDBACK_DETAIL_PARENT: "student/feedback/detail"
  }

  const config_homework = {
    API_URN_ADD_HOMEWORK_ADMIN: "homework-store",
    API_URN_EDIT_HOMEWORK_ADMIN: "homework-edit",
    API_URN_UPDATE_HOMEWORK_ADMIN: "homework-update",
    API_URN_DELETE_HOMEWORK_ADMIN: "homework-destroy",
    API_URN_DETAIL_HOMEWORK_ADMIN: "homework-show",
    API_URN_GET_HOMEWORK_LIST_ADMIN: "homework-table-data",

    API_URN_GET_HOMEWORK_DETAIL_PARENT: "student/homework/detail",
    API_URN_GET_HOMEWORK_LIST_PARENT: "student/homework/list",
    API_URN_SUBMIT_HOMEWORK_PARENT: "student/homework/submit"
  }

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
    API_URN_GET_SCHOOL_DIARY_LIST_PARENT: "school-diary/list"
  }

  const config_attendance = {
    API_URN_GET_STUDENT_ATTENDANCE_DATA_ADMIN: "student-attendance-show",
    API_URN_UPDATE_STUDENT_ATTENDANCE_DATA_ADMIN: "student-attendance-store",

    API_URN_GET_STAFF_ATTENDANCE_DATA_ADMIN: "staff-attendance-show",
    API_URN_UPDATE_STAFF_ATTENDANCE_DATA_ADMIN: "staff-attendance-store",

    API_URN_GET_STUDENT_ATTENDANCE_REPORT_ADMIN: "student-attendance-report",
    API_URN_GET_STAFF_ATTENDANCE_REPORT_ADMIN: "staff-attendance-report",

    API_URN_GET_HOUR_SETTINGS_LIST_ADMIN: "hour-setting-table-data",
    API_URN_ADD_HOUR_SETTINGS__ADMIN: "hour-setting-store",
    API_URN_DELETE_HOUR_SETTINGS_ADMIN: "hour-setting-destroy",

    API_URN_GET_ATTENDANCE_SETTINGS_LIST_ADMIN: "weekly-holidays-table-data",
    API_URN_ADD_ATTENDANCE_SETTINGS__ADMIN: "weekly-holidays-store",
    API_URN_DELETE_ATTENDANCE_SETTINGS_ADMIN: "weekly-holidays-destroy",

    API_URN_GET_ABSENTEE_FORM_LIST_ADMIN: "absentee-form-table-data",
    API_URN_VIEW_ABSENTEE_FORM_ADMIN: "absentee-form-show",

    API_URN_GET_ABSENT_LIST_PARENT: "student/absent/list",
    API_URN_ABSENT_FORM_PARENT: "student/absent/submit-leave",
    API_URN_GET_ATTENDANCE_HOMESCREEEN_PARENT: "attendance/homeScreen"
  }

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

    API_URN_GET_MEAL_CALENDAR_PARENT: "student/meal-calendar"
  }

  const config_teacherComment = {
    // Api urns

    API_URN_ADD_TEACHER_COMMENT: "teacher-comment-store",
    API_URN_DETAIL_TEACHER_COMMENT: "teacher-comment-show",
    API_URN_REPLY_TEACHER_COMMENT: "teacher-comment-reply",
    API_URN_DELETE_TEACHER_COMMENT: "teacher-comment-destroy",
    API_URN_GET_TEACHER_COMMENT_LIST: "teacher-comment-table-data",
    API_URN_GET_TEACHER_COMMENT_LIST_PARENT: "student/teacher-comment/list",
    API_URN_GET_TEACHER_COMMENT_DETAIL_PARENT: "student/teacher-comment/detail",
    API_URN_TEACHER_COMMENT_REPLY_PARENT: "student/teacher-comment/add"
  }

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
    API_URN_GENERATE_IMPORT_ENQUIRY: "export-enquiry-csv",
    API_URN_EXPORT_ENQUIRY: "export-enquiry-csv",
    API_URN_IMPORT_ENQUIRY: "import-enquiry-csv",
    API_URN_ENQUIRY_FOLLOWUP_UPDATE: "enquiry-followUp-trans"
  }

  const config_meet = {
    // Api urns
    API_URN_GET_VIRTUAL_MEET_LIST_ADMIN: "meeting-table-data",
    API_URN_DELETE_VIRTUAL_MEET_ADMIN: "meeting-destroy",
    API_URN_EDIT_VIRTUAL_MEET_ADMIN: "meeting-edit",
    API_URN_UPDATE_VIRTUAL_MEET_ADMIN: "meeting-update",
    API_URN_ADD_VIRTUAL_MEET_ADMIN: "meeting-store",
    API_URN_VIEW_VIRTUAL_MEET_ADMIN: "meeting-show",

    API_URN_GET_VIRTUAL_MEET_LIST_PARENT: "student/meeting/list"
  }

  const config_student = {
    // Api urns
    API_URN_GET_STUDENT_LIST_ADMIN: "student-table-data",
    API_URN_DELETE_STUDENT_ADMIN: "student-destroy",
    API_URN_EDIT_STUDENT_ADMIN: "student-edit",
    API_URN_UPDATE_STUDENT_ADMIN: "student-update",
    API_URN_ADD_STUDENT_ADMIN: "student-store",
    API_URN_VIEW_STUDENT_ADMIN: "student-show"
  }

  const config_e_learning = {
    API_URN_GET_CATEGORY_LIST_ADMIN: "tutorial-categoty-table-data",
    API_URN_DELETE_CATEGORY_ADMIN: "tutorial-categoty-destroy",
    API_URN_EDIT_CATEGORY_ADMIN: "tutorial-categoty-edit",
    API_URN_UPDATE_CATEGORY_ADMIN: "tutorial-categoty-update",
    API_URN_ADD_CATEGORY_ADMIN: "tutorial-categoty-store",
    API_URN_VIEW_CATEGORY_ADMIN: "tutorial-categoty-show",

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
      "student/elarning/check/assessment/status"
  }

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

    API_URN_GET_INSTA_ALERT_LIST_PARENT: "student/insta-alert/list"
  }

  const config_events = {

    API_URN_GET_EVENT_CATEGORY_LIST_ADMIN: "event-category-table-data",
    API_URN_DELETE_EVENT_CATEGORY_ADMIN: "event-category-destroy",
    API_URN_EDIT_EVENT_CATEGORY_ADMIN: "event-category-edit",
    API_URN_UPDATE_EVENT_CATEGORY_ADMIN: "event-category-update",
    API_URN_ADD_EVENT_CATEGORY_ADMIN: "event-category-store",
    API_URN_GET_EVENT_CATEGORY_DROPDOWN_ADMIN: "get-insta-category-dropdown",


    API_URN_GET_EVENT_LIST_ADMIN: "event-table-data",
    API_URN_DELETE_EVENT_ADMIN: "event-destroy",
    API_URN_EDIT_EVENT_ADMIN: "event-edit",
    API_URN_UPDATE_EVENT_ADMIN: "event-update",
    API_URN_ADD_EVENT_ADMIN: "event-store",
    API_URN_GET_EVENT_CALENDAR_ADMIN: "event-calendar",

    API_URN_GET_EVENT_PARENT: "student/event"


  }

  const config_dropdown = {
    API_URN_GET_CLASS_DROPDOWN: "get-class-dropdown",
    API_URN_GET_SETION_DROPDOWN: "get-section-dropdown",
    API_URN_GET_STUDENT_DROPDOWN: "get-student-dropdown",
    API_URN_GET_FEE_TYPE_DROPDOWN: "get-fee-type-dropdown",
    API_URN_GET_ENQUIRY_SOURCE_DROPDOWN: "get-enquiry-source-dropdown",
    API_URN_GET_ENQUIRY_REASONS_DROPDOWN: "get-enquiry-reasons-dropdown",
    API_URN_GET_STUDENT_LIST: "get-student-list",
    API_URN_GET_MEETING_TYPE_LIST: "get-meeting-type-dropdown"
  }

  const config_videos = {
    // Api urns
    API_URN_GET_VIDEOS_LIST_ADMIN: "videos-table-data",
    API_URN_DELETE_VIDEOS_ADMIN: "videos-destroy",
    API_URN_EDIT_VIDEOS_ADMIN: "videos-edit",
    API_URN_UPDATE_VIDEOS_ADMIN: "videos-update",
    API_URN_ADD_VIDEOS_ADMIN: "videos-store",

    API_URN_GET_VIDEOS_LIST_PARENT: "student/videos-list"
  }

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
    API_URN_GET_IMAGE_DETAILS_PARENT: "student/gallery-details"
  }

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
    API_URN_STUDENT_COPY_LIST: "student-table-data"
  }

  const config_auth = {
    API_URN_LOGIN: "login",
    API_URN_GUEST_LOGIN: "guest-login",
    API_URN_ADD_GUEST_USER: "guest-login",
    API_URN_VERIFY_GUEST_OTP: "verify-guest-otp"
  }

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
    APP_PLATFORM: config_app["APP_PLATFORM"]
  }

  //////////////////////////////Configration END//////////////////////////////

  ///////////////////////////Shared Dependency START//////////////////////////

  // Packages (Modules that are imported from outside this project)
  Lib.Utils = require("../packages/utils")
  Lib.HttpHandler = require("../packages/http-nodejs")(Lib, http_config)
  // Lib.Money = require('../packages/money')(Lib, config_money);
  // Lib.Geo = require('../packages/geo')(Lib, {});
  // Lib.GeoGoogle = require('../packages/geo-google')(Lib, {});

  ////////////////////////////Shared Dependency END///////////////////////////

  /////////////////////////////Project Modules START//////////////////////////

  // Internal Dependencies (Modules that are built inside this project)

  // Shared Internal Dependencies (Modules that are built inside this project)
  Lib.Commons = require("./commons")(Lib, config_shared)

  // Core Modules

  Lib.Enquiry = require("../core_modules/enquiry")(Lib, config_enquiry)

  Lib.TeacherComment = require("../core_modules/teacher-comment")(
    Lib,
    config_teacherComment
  )

  Lib.Feedback = require("../core_modules/feedback")(Lib, config_feedback)

  Lib.Authentication = require("../core_modules/authentication")(
    Lib,
    config_auth
  )

  Lib.MealCalendar = require("../core_modules/meal-calendar")(
    Lib,
    config_mealcalendar
  )

  Lib.VirtualMeet = require("../core_modules/virtual-meet")(Lib, config_meet)

  Lib.Dropdown = require("../core_modules/dropdown")(Lib, config_dropdown)

  Lib.Attendance = require("../core_modules/attendance")(Lib, config_attendance)

  Lib.Diary = require("../core_modules/diary")(Lib, config_diary)

  Lib.Insta = require("../core_modules/insta")(Lib, config_insta)

  Lib.Videos = require("../core_modules/videos")(Lib, config_videos)

  Lib.Gallery = require("../core_modules/gallery")(Lib, config_gallery)

  Lib.Homework = require("../core_modules/homework")(Lib, config_homework)

  Lib.Elearning = require("../core_modules/e-learning")(Lib, config_e_learning)

  Lib.Staff = require("../core_modules/staff")(Lib, config_staff)

  Lib.Event = require("../core_modules/event")(Lib, config_events)

  Lib.Student = require("../core_modules/student")(Lib, config_student)
  /////////////////////////////Project Modules END//////////////////////////
}

/////////////////////////// Module-Loader END ////////////////////////////////

///////////////////////////// Module Exports START /////////////////////////////
module.exports = function (shared_libs, config_app) {
  // Run Loader
  loader(shared_libs, config_app)

  // Return Public Funtions of this module
  return Lib
} //////////////////////////// Module Exports END //////////////////////////////
