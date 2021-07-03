// Info: Test Cases
"use strict"

const APP_CONFIG = require("./app_config.json")
const auth_bearer_token_admin = "74913506d95f760dd54136e2ccac0792"
const auth_bearer_token_parent = "1869a90d096dfda42466e92b00bd9800"
// Dependencies
const EC_SDK = require("ec-sdk")(
  {}, // shared Library
  APP_CONFIG
)

/* Authentication (login) FUNCTION*/

/* EC_SDK.Authentication.userLogin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  params:{
    username : "sanketschool@gmail.com",
    password : "11223344",
    unique_device_id : "web"
  }
}
);    
 */

/* EC_SDK.Authentication.guestLogin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  params:{
    
  }
}
); */

/* EC_SDK.Authentication.addguestUser(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  params:{
    
  }
}
); */

/* EC_SDK.Authentication.verifyGuestOTP(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  params:{
    
  }
}
); */

/* ENQUIRY MODULE HELPER FUNCTIONS



 /* EC_SDK.Enquiry.getEnquiryListAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {auth : auth_bearer_token_admin,
  params:{}
}
);     */

/* EC_SDK.Enquiry.viewEnquirySourcesAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
  {
  auth : auth_bearer_token_admin,
  params:{
    id : "1"
  }
}
);  */

/* EC_SDK.Enquiry.addEnquirySourcesAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{ source_name: 'Test17', status: 'Active' }
}
); */

/* EC_SDK.Enquiry.deleteEnquirySourcesAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
  {
    auth : auth_bearer_token_admin,
  params:{id : "1"}
}
);  */

/* EC_SDK.Enquiry.getEnquirySourcesAdminList(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
  {auth : auth_bearer_token_admin,
  params:{}}
); */

/* EC_SDK.Enquiry.updateEnquirySourcesAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
  {
  auth : auth_bearer_token_admin,
  params:{
    source_name : "Test1",
    status : "Active",
    id: "1"
  }
}
); */

/* EC_SDK.Enquiry.addEnquiryReasonAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{ source_name: 'Test17', status: 'Active' }
}
); */

/* EC_SDK.Enquiry.deleteEnquiryReasonAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
  {
    auth : auth_bearer_token_admin,
  params:{id : "1"}
}
);  */

/* EC_SDK.Enquiry.getEnquiryReasonAdminList(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
  {auth : auth_bearer_token_admin,
  params:{}}
); */

/* EC_SDK.Enquiry.updateEnquiryReasonAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
  {
  auth : auth_bearer_token_admin,
  params:{
    source_name : "Test1",
    status : "Active",
    id: "1"
  }
}
); */

/* EC_SDK.Enquiry.addEnquiryAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{ source_name: 'Test17', status: 'Active' }
}
); */

/* EC_SDK.Enquiry.showEnquiryAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{ source_name: 'Test17', status: 'Active' }
}
); */

/* EC_SDK.Enquiry.editEnquiryAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{ source_name: 'Test17', status: 'Active' }
}
); */

/* EC_SDK.Enquiry.generateImportEnquiryAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{ source_name: 'Test17', status: 'Active' }
}
); */

// EC_SDK.Enquiry.exportEnquiryAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log("something went wrong")
//     }
//     console.log("data", data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: { source_name: "Test17", status: "Active" }
//   }
// )

// EC_SDK.Enquiry.importEnquiryAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log("something went wrong")
//     }
//     console.log("data", data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: { source_name: "Test17", status: "Active" }
//   }
// )

/* FEEDBACK MODULE HELPER FUNCTIONS




/* EC_SDK.Feedback.getFeedbackListAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{}
}
); */

/* EC_SDK.Feedback.getFeedbackDetailAdmin(
  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }
    console.log("data", data)
  },
  {
    auth: auth_bearer_token_admin,
    params: {}
  }
) */

/* EC_SDK.Feedback.deleteFeedbackAdmin(
   function(err, data){
     if(err){
       return console.log('something went wrong');
     }
     console.log('data', data)
   },
    {
   auth : auth_bearer_token_admin,
   params:{
     "id": "1"
   }
 }
 );

 */
/* EC_SDK.Feedback.replyFeedbackAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{}
}
); */

/* EC_SDK.Feedback.getFeedbackDetailParent(
  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }
    console.log("data", data)
  },
  {
    auth: auth_bearer_token_parent,
    params: {}
  }
)
 */

// EC_SDK.Feedback.addFeedbackParent(
//   function(err, data){
//     if(err){
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//    {
//   auth : auth_bearer_token_parent,
//   params:{}
// }
// );

/* TEACHER COMMENT HELPER FUNCTIONS */

/* EC_SDK.TeacherComment.getTeacherCommentListAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{}
}
);  */

/* EC_SDK.TeacherComment.deleteTeacherCommentAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{
    id : "1"
  }
}
);   */

/* EC_SDK.TeacherComment. addTeacherCommentAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{
    class_id : "1",
    section_id : "1",
    student_id : "1"
  }
}
);  */

/* EC_SDK.TeacherComment.detailTeacherCommentAdmin(
  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }
    console.log("data", data)
  },
  {
    auth: auth_bearer_token_admin,
    params: {
      class_id: "1",
      section_id: "1",
      student_id: "1"
    }
  }
) */

/* EC_SDK.TeacherComment.replyTeacherCommentAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{
      class_id : "1",
    section_id : "1",
    student_id : "1",
    comment : "ok",
    id : "1"
  }
}
);  */

/* EC_SDK.TeacherComment.TeacherCommentReplyParent(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_parent,
  params:{
    teacher_comment_id : "1",
    reply_comment : "test"
  }
}
);  */

/* EC_SDK.TeacherComment.getTeacherCommentListParent(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_parent,
  params:{

  }
}
);  */

/* EC_SDK.TeacherComment.getTeacherCommentDetailParent(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_parent,
  params:{
    teacher_comment_id : "1"
  }
}
);  */

///////////////////////////// END /////////////////////////////////

/* Meal calendar helper functions */

/* EC_SDK.MealCalendar.getMenuNameAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{}
}
);  */

/* EC_SDK.MealCalendar.addMenuNameAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{}
}
);  */

/* EC_SDK.MealCalendar.editMenuNameAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{
    id : "2"
  }
}
);  */

/* EC_SDK.MealCalendar.updateMenuNameAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{}
}
);  */

/* EC_SDK.MealCalendar.deleteMenuNameAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{
    id : "1"
  }
}
);  */

/* EC_SDK.MealCalendar.getMealCalendarAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{
    perPage : "10",
    page : "1",
    search : ""
  }
}
);   */

/* EC_SDK.MealCalendar.addMealCalendarAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{
    
  }
}
);  */

/* 
EC_SDK.MealCalendar.editMealCalendarAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{
    
  }
}
);  */

/* EC_SDK.MealCalendar.updateMealCalendarAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{
    
  }
}
);  */

/* EC_SDK.MealCalendar.deleteMealCalendarAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{
    id : "1"
  }
}
);  */

/* EC_SDK.MealCalendar.getMealCalendarParent(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_parent,
  params:{
    date : "09-02-2021"
  }
}
);    */

///////////////////////////// END /////////////////////////////////

/* Virtual meet helper Functions */

/* EC_SDK.VirtualMeet.addVirtualMeetAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{
    
  }
}
);  */

/* EC_SDK.VirtualMeet.editVirtualMeetAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{
    id : "1"
  }
}
); 
 */

/* EC_SDK.VirtualMeet.updateVirtualMeetAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{
    
  }
}
); 
 */

/* EC_SDK.VirtualMeet.deleteVirtualMeetAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{
    id : "1"
  }
}
);  */

/* EC_SDK.VirtualMeet.getVirtualMeetListParent(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_parent,
  params:{
    
  }
}
);  */

///////////////////////////// END /////////////////////////////////

/* DROPDOWN HELPER FUNCTIONS */

/* EC_SDK.Dropdown.getClassDropdown(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{
    
  }
}
); */

/* EC_SDK.Dropdown.getSectionDropdown(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{
    
  }
}
); */

/* EC_SDK.Dropdown.getStudentDropdown(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{
    
  }
}
); */

/* EC_SDK.Dropdown.getFeeTypeDropdown(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{
    
  }
}
); */

/* EC_SDK.Dropdown.getEnquirySourcesDropdown(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{
    
  }
}
); */

/* EC_SDK.Enquiry.editEnquiryReasonAdmin(
  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }
    console.log("data", data)
  },
  {
    auth: "6e38f5334913f0f1a4fd00bc889b387f",
    params: {
      id: "1"
    }
  }
) */

/* EC_SDK.Dropdown.getStudentList(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_admin,
  params:{
    
  }
}
); */

// Attendance Helper Functions

/* EC_SDK.Attendance.getStudentAttendanceDataAdmin(
  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }
    // console.log("data", data)
  },
  {
    auth: auth_bearer_token_admin,
    params: {}
  }
)

EC_SDK.Attendance.updateStudentAttendanceDataAdmin(
  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }
    // console.log("data", data)
  },
  {
    auth: auth_bearer_token_admin,
    params: {}
  }
)

EC_SDK.Attendance.getStaffAttendanceDataAdmin(
  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }
    // console.log("data", data)
  },
  {
    auth: auth_bearer_token_admin,
    params: {}
  }
)

EC_SDK.Attendance.updateStaffAttendanceDataAdmin(
  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }
    // console.log("data", data)
  },
  {
    auth: auth_bearer_token_admin,
    params: {}
  }
)

EC_SDK.Attendance.getStudentAttendanceReportAdmin(
  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }
    // console.log("data", data)
  },
  {
    auth: auth_bearer_token_admin,
    params: {}
  }
)

EC_SDK.Attendance.getStaffAttendanceReportAdmin(
  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }
    // console.log("data", data)
  },
  {
    auth: auth_bearer_token_admin,
    params: {}
  }
)

EC_SDK.Attendance.getHourSettingsListAdmin(
  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }
    // console.log("data", data)
  },
  {
    auth: auth_bearer_token_admin,
    params: {}
  }
)

EC_SDK.Attendance.addHourSettingsAdmin(
  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }
    // console.log("data", data)
  },
  {
    auth: auth_bearer_token_admin,
    params: {}
  }
)

EC_SDK.Attendance.deleteHourSettingsAdmin(
  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }
    // console.log("data", data)
  },
  {
    auth: auth_bearer_token_admin,
    params: {}
  }
)

EC_SDK.Attendance.getAttendanceSettingsListAdmin(
  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }
    // console.log("data", data)
  },
  {
    auth: auth_bearer_token_admin,
    params: {}
  }
)

EC_SDK.Attendance.addAttendanceSettingsAdmin(
  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }
    // console.log("data", data)
  },
  {
    auth: auth_bearer_token_admin,
    params: {}
  }
)

EC_SDK.Attendance.deleteAttendanceSettingsAdmin(
  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }
    // console.log("data", data)
  },
  {
    auth: auth_bearer_token_admin,
    params: {}
  }
)

EC_SDK.Attendance.getAbsenteeFormListAdmin(
  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }
    // console.log("data", data)
  },
  {
    auth: auth_bearer_token_admin,
    params: {}
  }
)

EC_SDK.Attendance.viewAbsenteeFormAdmin(
  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }
    // console.log("data", data)
  },
  {
    auth: auth_bearer_token_admin,
    params: {}
  }
)

EC_SDK.Attendance.getAbsentListParent(
  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }
    // console.log("data", data)
  },
  {
    auth: auth_bearer_token_admin,
    params: {}
  }
)

EC_SDK.Attendance.getAttendanceHomescreentParent(
  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }
    // console.log("data", data)
  },
  {
    auth: auth_bearer_token_admin,
    params: {}
  }
)

EC_SDK.Attendance.postAbsentFormParent(

  function (err, data) {
    if (err) {
      return console.log("something went wrong")
    }

    // console.log("data", data)

  },
  {
    auth: auth_bearer_token_admin,
    params: {}
  }
)
 */

// EC_SDK.Homework.updateHomeworkAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log("something went wrong")
//     }

//     // console.log("data", data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {}
//   }
// )

// EC_SDK.Event.getEventCalendarAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log("something went wrong")
//     }

//     // console.log("data", data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {}
//   }
// )

// EC_SDK.Daycare.getDaycareCategoryListAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log("something went wrong")
//     }

//     // console.log("data", data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {}
//   }


console.log(EC_SDK.Attendance.getStudentAttendanceStatusList())

console.log(EC_SDK.Attendance.getStaffAttendanceStatusList())

// console.log(EC_SDK.Utils.searchStringAuthentication("ab"));

// console.log(EC_SDK.Utils.searchStringAuthentication(1234));

// console.log(EC_SDK.Utils.convertToHumanReadableDate("2021-06-17 13:01:10"));