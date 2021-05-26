// Info: Javascript SDK for NoPOS User Service.
'use-strict'


///////////////////////////// Module Exports START /////////////////////////////
module.exports = function(shared_libs, config){

  // Run Loader
  let Lib = require('./lib/core/loader')(shared_libs, config);

  // Return Public Funtions of this module
  return EC_SDK(Lib);

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
const EC_SDK =  function(lib){

  return {
    Utils: lib.Utils,
    Customer: lib.Customer
  };

}
///////////////////////////Public Functions ENDS////////////////////////////////
