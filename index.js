// Info: Javascript SDK for NoPOS User Service.
"use-strict"

const enquiry = require("./lib/core_modules/enquiry")

///////////////////////////// Module Exports START /////////////////////////////
module.exports = function (shared_libs, config) {
  // Run Loader
  let Lib = require("./lib/core/loader")(shared_libs, config)

  // Return Public Funtions of this module
  return EC_SDK(Lib)
} //////////////////////////// Module Exports END //////////////////////////////

///////////////////////////Public Functions START///////////////////////////////
const EC_SDK = function (lib) {
  return {
    Utils: lib.Utils,
    Customer: lib.Customer,
    Enquiry: lib.Enquiry,
    Feedback: lib.Feedback,
    TeacherComment: lib.TeacherComment,
    Authentication: lib.Authentication,
    MealCalendar: lib.MealCalendar,
    VirtualMeet: lib.VirtualMeet,
    Dropdown: lib.Dropdown,
    Attendance: lib.Attendance,
    Diary: lib.Diary,
    Insta: lib.Insta,
    Videos: lib.Videos,
    Gallery: lib.Gallery,
    Homework: lib.Homework,
    Student: lib.Student,
    Elearning: lib.Elearning,
    Staff: lib.Staff,
    Event: lib.Event,
    Holiday: lib.Holiday,
    Configuration: lib.Configuration,
    Birthday: lib.Birthday,
    Daycare: lib.Daycare,
    Fee: lib.Fee,
    ProgressReport: lib.ProgressReport,
    OurProgram: lib.OurProgram,
    AboutusSection: lib.AboutusSection,
    Testimonial: lib.Testimonial,
    Seo: lib.Seo,
    SettingAccount: lib.SettingAccount,
    PageContent: lib.PageContent,
    SmsEmail: lib.SmsEmail,
    YearManagement: lib.YearManagement,
    TimeTable: lib.TimeTable,
    Public: lib.Public
  }
}
///////////////////////////Public Functions ENDS////////////////////////////////
