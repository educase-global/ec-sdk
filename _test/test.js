// Info: Test Cases
'use strict';

const APP_CONFIG = require('./app_config.json');
const auth_bearer_token_admin = 'f21f9fc0f5238cac6b0c7ec09e1a2d24';
const auth_bearer_token_parent = 'a8461e9dfdf37e47599fe059c8c28477';
// Dependencies
const EC_SDK = require('ec-sdk')(
  {},    // shared Library
  APP_CONFIG
);



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

/* EC_SDK.Feedback.getFeedbackListParent(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_parent,
  params:{}
}
); */


/* 
EC_SDK.Feedback.addFeedbackParent(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token_parent,
  params:{}
}
); */



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


/* EC_SDK.TeacherComment.editTeacherCommentAdmin(
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

/* EC_SDK.TeacherComment.updateTeacherCommentAdmin(
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


/* EC_SDK.TeacherComment.getTeacherCommentReplyParent(
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
