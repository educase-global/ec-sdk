// Info: Test Cases
'use strict';

const APP_CONFIG = require('./app_config.json');
const auth_bearer_token = '4bad0c449091dedd008f0f0924d72bf0';

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
   {auth : auth_bearer_token,
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
  auth : auth_bearer_token,
  params:{}
}
);  */

EC_SDK.Enquiry.addEnquirySourcesAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token,
  params:{ source_name: 'Test17', status: 'Active' }
}
);



/* EC_SDK.Enquiry.deleteEnquirySourcesAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
  {auth : auth_bearer_token,
  params:{}}
); */


/* EC_SDK.Enquiry.getEnquirySourcesAdminList(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
  {auth : auth_bearer_token,
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
  auth : auth_bearer_token,
  params:{}
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
  auth : auth_bearer_token,
  params:{}
}
); */


// EC_SDK.Feedback.deleteFeedbackAdmin(
//   function(err, data){
//     if(err){
//       return console.log('something went wrong');
//     }
//     console.log('data', data)
//   },
//    {
//   auth : auth_bearer_token,
//   params:{
//     "id": "1"
//   }
// }
// );


/* EC_SDK.Feedback.replyFeedbackAdmin(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
   {
  auth : auth_bearer_token,
  params:{}
}
); */
