// Info: Boilerplate library. Contains functions related to Google's geo coding and google places apis
'use strict';

// Shared Dependencies (Managed by Loader)
var Lib = {};

// Private Dependencies - Parts of same library (Managed by Loader)
var GoogleGeoData;

// Exclusive Dependencies
var CONFIG = require('./config'); // Loader can override it with Custom-Config


/////////////////////////// Module-Loader START ////////////////////////////////

  /********************************************************************
  Load dependencies and configurations

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
  @param {Set} config - Custom configuration in key-value pairs

  @return nothing
  *********************************************************************/
  const loader = function(shared_libs, config_app){

    // Shared Dependencies (Must be loaded in memory already)
    Lib.Utils = shared_libs.Utils;
    Lib.HttpHandler = shared_libs.HttpHandler;
    Lib.ContactData =  shared_libs.ContactData;

    // Module Configuration
    CONFIG = require('./config')(config_app);

    // Private Dependencies
    Lib.GoogleGeoData = require('./google_geo_data')(Lib, CONFIG);

  };

//////////////////////////// Module-Loader END /////////////////////////////////



///////////////////////////// Module Exports START /////////////////////////////
module.exports = function(shared_libs, config){

  // Run Loader
  loader(shared_libs, config);

  // Return Public Funtions of this module
  return GoogleGeo;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
const GoogleGeo = { // Public functions accessible by other modules

  /********************************************************************
  Get Address Object from latitude and longitude
  @param {reference} instance - Request Instance object reference //TODO
  @param {Function} cb  - callback function

  @param {String} lat - Location latitude
  @param {String} lng - Location longitude

  @return {Map} - Address Object returned from server
  *********************************************************************/
  reverseGeoCoding: function(instance, cb, lat, lng){

    // http params construct
    var http_params = {

      latlng: lat +',' + lng,
      key: CONFIG.GOOGLE_API_KEY

    };

    // Http request initiated
    Lib.HttpHandler.fetchJSON(
      instance,
      function(err, http_status, http_response_headers, response_data){

        // Error caused by connectivity or server status //TODO: recognise network issues
        if(err){

          return cb([
            Lib.Utils.error(CONFIG.ERR.LOCATION_NOT_FOUND)
          ]); // Return error and exit

        };

        // Error caused by server response //TODO: 401 - login required/ 400- required params handle specific error codes accordingly
        if(http_status !== 200){
          return cb([Lib.Utils.error(CONFIG.ERR.LOCATION_NOT_FOUND)])
        }

        //Empty data returned from google apis
        if(response_data['results'].length === 0){
          return cb([Lib.Utils.error(CONFIG.ERR.LOCATION_NOT_FOUND)])
        }

        // Success
        return cb(false, Lib.GoogleGeoData.createAddressData(response_data, {lat:lat, lng:lng}));

      },
      CONFIG.GOOGLE_GEO_CODING_BASE_URL, //url
      'GET', // method
      http_params, // params
      'jsonp', // request_content_type
      null, // headers
      null // auth_type
    );

  },


  /********************************************************************
  Get latitude and longitude from geo codeing apis

  @param {reference} instance - Request Instance object reference //TODO
  @param {Function} cb  - callback function

  @param {String} search_string - Search string

  @return {Map} location - Location Object returned from server
    * @param {String} lat - latitude
    * @param {String} lng - longitude
  *********************************************************************/
  geoCoding: function(instance, cb, search_string){

    // http params
    var http_params = {

      address: search_string,
      key: CONFIG.GOOGLE_API_KEY

    };

    // Http request initiated
    Lib.HttpHandler.fetchJSON(
      instance,
      function(err, http_status, http_response_headers, response_data){

        // Error caused by connectivity or server status //TODO: recognise network issues
        if(err){

          return cb([
            Lib.Utils.error(CONFIG.ERR.LOCATION_NOT_FOUND)
          ]); // Return error and exit

        };

        // Error caused by server response //TODO: 401 - login required/ 400- required params handle specific error codes accordingly
        if(http_status !== 200){
          return cb([Lib.Utils.error(CONFIG.ERR.LOCATION_NOT_FOUND)])
        }


        //Empty data returned from google apis
        if(response_data['results'].length === 0){
          return cb([Lib.Utils.error(CONFIG.ERR.LOCATION_NOT_FOUND)])
        }

        // Success
        return cb(false, Lib.GoogleGeoData.createLocationData(response_data));

      },
      CONFIG.GOOGLE_GEO_CODING_BASE_URL, //url
      'GET',
      http_params,
      'jsonp', // request_content_type
      null, // headers
      null // auth_type
    );

  },


  /********************************************************************
  Address List by search string

  @param {reference} instance - Request Instance object reference //TODO
  @param {Function} cb  - callback function

  @param {String} search_string - Search string
  @param {String} search_session_token - Search token

  @return {Map} location - Location Object returned from server
    * @param {String} lat - latitude
    * @param {String} lng - longitude
  *********************************************************************/
  searchPlaces: function(instance, cb, search_string, search_token){

    // http params
    var http_params = {

      input: search_string,
      sessiontoken: search_token,
      key: CONFIG.GOOGLE_API_KEY

    };

    // Http request initiated
    Lib.HttpHandler.fetchJSON(
      instance,
      function(err, http_status, http_response_headers, response_data){

        // Error caused by connectivity or server status //TODO: recognise network issues
        if(err){

          return cb([
            Lib.Utils.error(CONFIG.ERR.LOCATION_NOT_FOUND)
          ]); // Return error and exit

        };

        // Error caused by server response //TODO: 401 - login required/ 400- required params handle specific error codes accordingly
        if(http_status !== 200){
          return cb([Lib.Utils.error(CONFIG.ERR.LOCATION_NOT_FOUND)])
        }


        //Empty data returned from google apis
        if(response_data['predictions'].length === 0){
          return cb([Lib.Utils.error(CONFIG.ERR.LOCATION_NOT_FOUND)])
        }

        // Success
        return cb(false, Lib.GoogleGeoData.createPlacesData(response_data['predictions']));

      },
      CONFIG.GOOGLE_PLACES_BASE_URL, //url
      'GET',
      http_params,
      'jsonp', // request_content_type
      null, // headers
      null // auth_type
    );

  },


  /********************************************************************
  Return search token for places api

  @param none

  @return {String} search_session_token - Search session token for places api
  *********************************************************************/
  searchPlaceToken: function(){

    return Lib.Utils.getUnixTimeInMilliSeconds();

  }

};///////////////////////////Public Functions END///////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _GoogleGeo = {  // Private methods accessible within this modules only
  // None
};/////////////////////////Private Functions END////////////////////////////////
