// Info: Test Cases
'use strict';

const APP_CONFIG = require('./app_config.json');
const auth_bearer_token = '4bad0c449091dedd008f0f0924d72bf0';

// Dependencies
const EC_SDK = require('ec-sdk')(
  {},    // shared Library
  APP_CONFIG
);



 
 /* EC_SDK.Enquiry.getEnquiryList(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
  {auth : auth_bearer_token}
);     */


 /* EC_SDK.Enquiry.viewEnquirySources(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
  {
    auth : auth_bearer_token ,
  }
);  */



 EC_SDK.Enquiry.addEnquirySources(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
  {auth : auth_bearer_token}
);  



/* EC_SDK.Enquiry.deleteEnquirySources(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
  {auth : auth_bearer_token}
); */


/* EC_SDK.Enquiry.getEnquirySourcesList(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
  {auth : auth_bearer_token}
); */


/* EC_SDK.Enquiry.updateEnquirySources(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
  {auth : auth_bearer_token}
); */


/* FEEDBACK MODULE HELPER FUNCTIONS


/* EC_SDK.Feedback.getFeedbackList(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
  {auth : auth_bearer_token}
); */


/* EC_SDK.Feedback.deleteFeedback(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
  {auth : auth_bearer_token}
);
 */

/* EC_SDK.Feedback.replyFeedback(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
  {auth : auth_bearer_token}
); */
 
