// Info: Contains Core Functions Related to Customer
'use strict';

// Shared Dependencies (Managed by Loader)
var Lib;

// Exclusive Dependencies
var CONFIG; // Module Configration (Managed by Loader)


/////////////////////////// Module-Loader START ////////////////////////////////

  /********************************************************************
  Module Constructor and Exporter

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
  @param {Set} config - Module configuration in key-value pairs

  @return {Set[]} - Sub-Modules in specific Sequence
  *********************************************************************/
  module.exports = function(shared_libs, config){

    // Shared Dependencies (Managed my Main Entry Module)
    Lib = shared_libs;

    // Module Configuration
    CONFIG = config;

    // Export Public Funtions of this module
    return Dropdown;

  }

//////////////////////////// Module-Loader END /////////////////////////////////


///////////////////////////Public Functions START//////////////////////////////
const Dropdown = { // Public functions accessible by other modules

  /********************************************************************
  Get Brand Customers List
  @param {Function} cb - Callback function to be invoked once async execution of this function is finished

  @param {Set} args - Array List of Parameters
  * @param {String} auth -  Authentication
  * @param {String} org_id -  Org ID
  * @param {String} brand_id -  Brand ID
  * @param {Number} start - Start Pagination Key

  @return - Thru Callback

  @callback(err, customers list, page data) - Request Callback.
  * @callback {Error} err - Http Error
  * @callback {Set} c_l - Customers List
  * @callback {Set} pg_d - Page data
  *********************************************************************/
  getClassDropdown: function(cb, args){

    // Construct params
    let params = {};

    console.log(CONFIG['API_URN_GET_CLASS_DROPDOWN']);

    // http call
    Lib.Commons.httpHandler(
      // callback
      function(err, http_status, http_headers, data){

        if(err){
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );

      },
      CONFIG['API_URN_GET_CLASS_DROPDOWN'], // api urn
      'GET', // method
      params, // request-params
      args['auth'] // auth
    )
  },

  getsectionDropdown: function(cb, args){

    // Construct params
    let params = {};

    console.log(CONFIG['API_URN_GET_SETION_DROPDOWN']);

    // http call
    Lib.Commons.httpHandler(
      // callback
      function(err, http_status, http_headers, data){

        if(err){
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );

      },
      CONFIG['API_URN_GET_SETION_DROPDOWN'], // api urn
      'GET', // method
      params, // request-params
      args['auth'] // auth
    )
  },

  getStudentDropdown: function(cb, args){

    // Construct params
    let params = {};

    console.log(CONFIG['API_URN_GET_STUDENT_DROPDOWN']);

    // http call
    Lib.Commons.httpHandler(
      // callback
      function(err, http_status, http_headers, data){

        if(err){
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );

      },
      CONFIG['API_URN_GET_STUDENT_DROPDOWN'], // api urn
      'GET', // method
      params, // request-params
      args['auth'] // auth
    )
  },

  getFeeTypeDropdown: function(cb, args){

    // Construct params
    let params = {};

    console.log(CONFIG['API_URN_GET_FEE_TYPE_DROPDOWN']);

    // http call
    Lib.Commons.httpHandler(
      // callback
      function(err, http_status, http_headers, data){

        if(err){
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );

      },
      CONFIG['API_URN_GET_FEE_TYPE_DROPDOWN'], // api urn
      'GET', // method
      params, // request-params
      args['auth'] // auth
    )
  },

  getEnquirySourceDropdown: function(cb, args){

    // Construct params
    let params = {};

    console.log(CONFIG['API_URN_GET_ENQUIRY_SOURCE_DROPDOWN']);

    // http call
    Lib.Commons.httpHandler(
      // callback
      function(err, http_status, http_headers, data){

        if(err){
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );

      },
      CONFIG['API_URN_GET_ENQUIRY_SOURCE_DROPDOWN'], // api urn
      'GET', // method
      params, // request-params
      args['auth'] // auth
    )
  },

  getEnquiryRasonsDropdown: function(cb, args){

    // Construct params
    let params = {};

    console.log(CONFIG['API_URN_GET_ENQUIRY_REASONS_DROPDOWN']);

    // http call
    Lib.Commons.httpHandler(
      // callback
      function(err, http_status, http_headers, data){

        if(err){
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );

      },
      CONFIG['API_URN_GET_ENQUIRY_REASONS_DROPDOWN'], // api urn
      'GET', // method
      params, // request-params
      args['auth'] // auth
    )
  },

  getStudentList: function(cb, args){

    // Construct params
    let params = {};

    console.log(CONFIG['API_URN_GET_STUDENT_LIST']);

    // http call
    Lib.Commons.httpHandler(
      // callback
      function(err, http_status, http_headers, data){

        if(err){
          return cb(err); // Return error and exit
        }

        // Success
        cb(
          false, // null in case of no error
          data
        );

      },
      CONFIG['API_URN_GET_STUDENT_LIST'], // api urn
      'GET', // method
      params, // request-params
      args['auth'] // auth
    )
  },

}