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
    Videos: lib.Videos
  }
}
///////////////////////////Public Functions ENDS////////////////////////////////
