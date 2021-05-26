// Info: Dependency Manager. Configration Loader.
'use strict';

/****************** Notes *********************
* Loads dependencies in Lib Object

* Next Note
***********************************************/

// Module outputs
var Lib = {};


/////////////////////////// Module-Loader START ////////////////////////////////

  /********************************************************************
  Load dependencies and configurations

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
  @param {Set} config_app - Custom configuration in key-value pairs

  @return nothing
  *********************************************************************/
  const loader = function(shared_libs, config_app){

    //////////////////////////////Configration START////////////////////////////

    // Set Configration for Debug Library
    const config_debug = {
      NO_CASUAL_LOGGING: config_app['NO_CASUAL_LOGGING'],
      NO_ERROR_LOGGING: config_app['NO_ERROR_LOGGING'],
      NO_TIME_AUDITING: config_app['NO_TIME_AUDITING']
    };


    // Set Configration for Google geo
    const config_geo_google = {
      GOOGLE_API_KEY:  config_app['GOOGLE_API_KEY']
    };

    // Set Configrations
    const http_config = {
	     'TIMEOUT': 400, // small value shoud cause timeout
       'TIMEOUT': 30000, // In milliseconds (3 second). 0 means no timeout
       'USER_AGENT': 'Test App 1.0' // Not used by browser
	  };

    // Set Configration for Money library
    const config_money = {}; //TODO

    // Set Configration for Org Module
    const config_customer = {

      // Api urns
      API_URN_GET_DATA_BY_SLUG_PUBLIC           : 'user/list',

    };

    // Set Configration for Shared Module
    const config_shared = {

      APP_ID                        : config_app['APP_ID'], // App ID for application

      API_PROD                      : config_app['API_PROD'], // Set as true to turn on Production Mode

      // Media Urls
      API_URL_DEFAULT_SB            : config_app['API_URL_DEFAULT_SB'],
      API_URL_DEFAULT_PROD          : config_app['API_URL_DEFAULT_PROD'],

      // Media Urls
      MEDIA_URL_SB                  : config_app['MEDIA_URL_SB'],
      MEDIA_URL_PROD                : config_app['MEDIA_URL_PROD'],

      // Api Urls
      API_URL_SB                    : config_app['API_URL_SB'],
      API_URL_PROD                  : config_app['API_URL_PROD'],

      //App platform
      APP_PLATFORM                  : config_app['APP_PLATFORM'],

    };


    //////////////////////////////Configration END//////////////////////////////



    ///////////////////////////Shared Dependency START//////////////////////////

      // Packages (Modules that are imported from outside this project)
      Lib.Utils = require('../packages/utils');
      Lib.HttpHandler = require('../packages/http-nodejs')(Lib, http_config);
      // Lib.Money = require('../packages/money')(Lib, config_money);
      // Lib.Geo = require('../packages/geo')(Lib, {});
      // Lib.GeoGoogle = require('../packages/geo-google')(Lib, {});

    ////////////////////////////Shared Dependency END///////////////////////////



    /////////////////////////////Project Modules START//////////////////////////

      // Internal Dependencies (Modules that are built inside this project)

      // Shared Internal Dependencies (Modules that are built inside this project)
      Lib.Commons = require('./commons')(Lib, config_shared);

      // Core Modules
      Lib.Customer = require('../core_modules/customer')(Lib, config_customer);

    /////////////////////////////Project Modules END//////////////////////////


  };

/////////////////////////// Module-Loader END ////////////////////////////////


///////////////////////////// Module Exports START /////////////////////////////
module.exports = function(shared_libs, config_app){

  // Run Loader
  loader(shared_libs, config_app);

  // Return Public Funtions of this module
  return Lib;

};//////////////////////////// Module Exports END //////////////////////////////
