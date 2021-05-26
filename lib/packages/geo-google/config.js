// Info: Configuration file
'use strict';

module.exports = function(config_app){

  return { // Export configration as key-value Set

    // Google Api key
    GOOGLE_API_KEY                    : config_app['GOOGLE_API_KEY'],

    GOOGLE_GEO_CODING_BASE_URL        : 'https://maps.googleapis.com/maps/api/geocode/json',
    GOOGLE_PLACES_BASE_URL            : 'https://maps.googleapis.com/maps/api/place/autocomplete/json',

    // Errors
    ERR : require('./config_err')(config_app)

  }

};
