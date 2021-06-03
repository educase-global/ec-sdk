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
    API_URN_REPLY_FEEDBACK_ADMIN: "feedback-reply",
    API_URN_GET_FEEDBACK_LIST_PARENT: "student/feedback/list",
    API_URN_ADD_FEEDBACK_PARENT: "student/feedback/add"
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

    API_URN_GET_MEAL_CALENDAR_PARENT: "student/meal-calendar"
  }

  const config_teacherComment = {
    // Api urns

    API_URN_ADD_TEACHER_COMMENT: "teacher-comment-store",
    API_URN_DETAIL_TEACHER_COMMENT: "teacher-comment-show  ",
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
    API_URN_GET_ENQUIRY_LIST: "student-enquiry-table-data"
  }

  const config_meet = {
    // Api urns
    API_URN_GET_VIRTUAL_MEET_LIST_ADMIN: "meeting-table-data",
    API_URN_DELETE_VIRTUAL_MEET_ADMIN: "meeting-destroy",
    API_URN_EDIT_VIRTUAL_MEET_ADMIN: "meeting-edit",
    API_URN_UPDATE_VIRTUAL_MEET_ADMIN: "meeting-update",
    API_URN_ADD_VIRTUAL_MEET_ADMIN: "meeting-store",

    API_URN_GET_VIRTUAL_MEET_LIST_PARENT: "student/meeting/list"
  }

  const config_dropdown = {
    API_URN_GET_CLASS_DROPDOWN: "get-class-dropdown",
    API_URN_GET_SETION_DROPDOWN: "get-section-dropdown",
    API_URN_GET_STUDENT_DROPDOWN: "get-student-dropdown",
    API_URN_GET_FEE_TYPE_DROPDOWN: "get-fee-type-dropdown",
    API_URN_GET_ENQUIRY_SOURCE_DROPDOWN: "get-enquiry-source-dropdown",
    API_URN_GET_ENQUIRY_REASONS_DROPDOWN: "get-enquiry-reasons-dropdown",
    API_URN_GET_STUDENT_LIST: "get-student-list"
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
