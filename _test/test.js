// Info: Test Cases
"use strict"

const APP_CONFIG = require("./app_config.json")
const auth_bearer_token_admin = "ec104a5f341be2d4377f35b7df5cacf8"
const auth_bearer_token_parent = "ec104a5f341be2d4377f35b7df5cacf8"
// Dependencies
const EC_SDK = require("ec-sdk")(
  {}, // shared Library
  APP_CONFIG
)

// Test Report api function
// EC_SDK.TestReport.testsEditAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {
//       id: "1"
//     }
//   }
// );

// Test Report api function
// EC_SDK.TestReport.testsStoreAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {
//       class_id: "1",
//       section_id: "2",
//       subject_id: "2",
//       exam_date: "1626287400",
//       exam_type: "Mid Exam",
//       total_marks: "100"
//     }
//   }
// );

// // get Activity api function
// EC_SDK.Dropdown.getActivity(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {

//     }
//   }
// );

// SmsEmail api function
// EC_SDK.SmsEmail.smsSettingShowAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {

//     }
//   }
// );

// SmsEmail api function
// EC_SDK.SmsEmail.smsSettingStoreUpdateAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {
//       sms_gateway_id: "2"
//     }
//   }
// );

// Public module api testing function
// EC_SDK.Public.getAppDataAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     // auth: auth_bearer_token_admin,
//     params: {
//       appId: "https://demo.schoolbridge.in/",
//     }
//   }
// );

// Public module api testing function
// EC_SDK.Public.getEnrollFormAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {
//       appId: "4ede9289372b466b19809974938e78af",
//       login_user_id: "1",
//       classId: "1",
//       enquiryType: "1",
//       childName: "fdsfsd",
//       fatherName: "hgf",
//       fatherMobile: "7777770000",
//       dob: "26-04-1992"
//     }
//   }
// );

// Public module api testing function
// EC_SDK.Public.getEnrollFormAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {
//       appId: "4ede9289372b466b19809974938e78af",
//       login_user_id: "1",
//       classId: "1",
//       enquiryType: "1",
//       childName: "fdsfsd",
//       fatherName: "hgf",
//       fatherMobile: "7777770000",
//       dob: "26-04-1992"
//     }
//   }
// );

// Public module api testing function
// EC_SDK.Public.getContactusFormAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {
//       appId: "4ede9289372b466b19809974938e78af",
//       name: "test",
//       email: "sampro2692@gmail.com",
//       subject: "ted",
//       message: "fdsfsd"
//     }
//   }
// );

// Public module api testing function
// EC_SDK.Public.getProgramsAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {
//       appId: "4ede9289372b466b19809974938e78af",
//       perPage: 10,
//       page: 0
//     }
//   }
// );

// Public module api testing function
// EC_SDK.Public.getSliderAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {
//       appId: "4ede9289372b466b19809974938e78af",
//       perPage: 10,
//       page: 0
//     }
//   }
// );

// Public module api testing function
// EC_SDK.Public.getTestimonialAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {
//       appId: "4ede9289372b466b19809974938e78af",
//       perPage: 10,
//       page: 0
//     }
//   }
// );

// Public module api testing function
// EC_SDK.Public.getAboutusSectionAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {
//       appId: "4ede9289372b466b19809974938e78af",
//       perPage: 10,
//       page: 0
//     }
//   }
// );

// Public module api testing function
// EC_SDK.Public.getAppAlbumsAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {
//       appId: "4ede9289372b466b19809974938e78af",
//       perPage: 10,
//       page: 0
//     }
//   }
// );

// Public module api testing function
// EC_SDK.Public.getAppNewsAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {
//       appId: "4ede9289372b466b19809974938e78af",
//       perPage: 10,
//       page: 0
//     }
//   }
// );


// EC_SDK.Fee.parentFeeListView(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {
      
//     }
//   }
// );

// EC_SDK.Fee.removeStudentFeeAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {
//       student_fee_id: JSON.stringify([4])
//     }
//   }
// );

// authentication module api testing function
// EC_SDK.Authentication.admissionEnquiryParent(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {
//       class_id: 1,
//       source_id: 1,
//       student_name: "fd",
//       father_name: "fds",
//       dob: "26-04-1992",
//       gender: "boy",
//       father_mobile: "7444411" 
//     }
//   }
// );

// fees module api testing function
// EC_SDK.Fee.emailStudentFeeReceiptAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {
//       student_fee_id: 1
//     }
//   }
// );

// fees module api testing function
// EC_SDK.Fee.deleteStudentFeeDetailsAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {
//       student_fee_id: 1
//     }
//   }
// );

// Time Table Api function
// EC_SDK.TimeTable.timeTableTableDataAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {

//     }
//   }
// );

// Year Management Api function
// EC_SDK.YearManagement.academicYearShowAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {

//     }
//   }
// );

// SmsEmail api function
// EC_SDK.SmsEmail.registrationStudentTableDataAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {
//       perPage: 10,
//       page: 0,
//     }
//   }
// );

// page content api function
// EC_SDK.PageContent.getHomeContent(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {

//     }
//   }
// );

// dropdown get fee fine type api function
// EC_SDK.Dropdown.getFeeFineTypeDropdown(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     auth: auth_bearer_token_admin,
//     params: {

//     }
//   }
// );

// setting's account  function
// EC_SDK.SettingAccount.getMyProfile(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     params: {}
//   }
// );


// Student generate qr code admin function
// EC_SDK.Student.studentGenerateQrCodeAdmin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     params: {}
//   }
// );

// Out seo store function
// EC_SDK.Seo.seoStore(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     params: {}
//   }
// );


// Out testmonial store function
// EC_SDK.Testimonial.testmonialStore(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     params: {}
//   }
// );


// Out aboutus section store function
// EC_SDK.AboutusSection.aboutusSectionStore(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     params: {

//     }
//   }
// );

// Our program table data function
// EC_SDK.OurProgram.ourProgramTableData(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     params: {
//       perPage : "10",
//       page : "0"
//     }
//   }
// );


// Our program destroy function
// EC_SDK.OurProgram.ourProgramDestroy(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     params: {

//     }
//   }
// );


// Our program update function
// EC_SDK.OurProgram.ourProgramUpdate(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     params: {

//     }
//   }
// );


// Our program edit function
// EC_SDK.OurProgram.ourProgramEdit(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     params: {
//       id : "1"
//     }
//   }
// );


// Our program store function
// EC_SDK.OurProgram.ourProgramStore(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     params: {

//     }
//   }
// );

/* Authentication (login) FUNCTION*/

// EC_SDK.Authentication.userLogin(
//   function (err, data) {
//     if (err) {
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//   {
//     params: {
//       username: "sanketschool@gmail.com",
//       password: "11223344",
//       unique_device_id: "web"
//     }
//   }
// );

// EC_SDK.Authentication.guestLogin(
//   function(err, data){
//     if(err){
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//    {
//   params:{
    
//   }
// }
// );

// EC_SDK.Authentication.addGuestUser(
//   function(err, d4ata){
//     if(err){
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//    {
//   params:{
//     unique_device_id: 'fd7da17cded7606e',
//     school_id: 6,
//     phone: '7874523676',
//     authentication_key: 'd24f7f77c9bb591ac1d99f7ede655e9d',
//   }
// }
// ); 

// EC_SDK.Authentication.verifyGuestOtp(
//   function(err, data){
//     if(err){
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//    {
//   params:{
//     otp: '814356',
//     phone: '7874523676',
//     school_id: 6,
//     authentication_key: 'd24f7f77c9bb591ac1d99f7ede655e9d',
//   }
// }
// ); 

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

//  console.log(EC_SDK.Attendance.getStudentAttendanceStatusList())

// console.log(EC_SDK.Attendance.getStaffAttendanceStatusList())

// console.log(EC_SDK.Utils.searchStringAuthentication("ab"));

// console.log(EC_SDK.Utils.searchStringAuthentication(1234));

// console.log(EC_SDK.Utils.convertToHumanReadableDate(1625462766*1000));
