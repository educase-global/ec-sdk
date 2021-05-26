// Info: Configuration file
'use strict';


// Export configration as key-value Map
module.exports = {

  // HTTP Limits
  TIMEOUT           : 6000, // In milliseconds (6 second). 0 means no timeout
  MAX_REDIRECTS     : 5, // Maximum number of redirects to follow. 0 means no redirects will be followed
  MAX_CONTENT_SIZE  : 1000000, // Max allowed size of the http response content in bytes (1MB)


  // Outgoing User-Agent
  USER_AGENT        : 'Test server 1.0',

  // Error Codes
  UNKNOWN_ERROR     : {
    'code': 'HTTTP_EXECUTE_ERROR',
    'message': 'Malformed URL/Request-Data'
  },

}
