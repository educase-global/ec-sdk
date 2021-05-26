// Info: Test Cases
'use strict';

const APP_CONFIG = require('./app_config.json');

// Dependencies
const EC_SDK = require('ec-sdk')(
  {},    // shared Library
  APP_CONFIG
);

EC_SDK.Customer.getBrandCustomersList(
  function(err, data){
    if(err){
      return console.log('something went wrong');
    }
    console.log('data', data)
  },
  {}
);
