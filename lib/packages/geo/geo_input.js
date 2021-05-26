// Info: Contains Functions Related to Geo Cleanup and Validations
'use strict';

// Shared Dependencies (Managed by Main Entry Module & Loader)
var Lib;

// Exclusive Dependencies
var CONFIG; // (Managed by Main Entry Module & Loader)


/////////////////////////// Module-Loader START ////////////////////////////////

  /********************************************************************
  Load dependencies and configurations

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
  @param {Set} config - Custom configuration in key-value pairs

  @return nothing
  *********************************************************************/
  const loader = function(shared_libs, config){

    // Shared Dependencies (Managed my Main Entry Module)
    Lib = shared_libs;

    // Configuration (Managed my Main Entry Module)
    CONFIG = config;

  };

//////////////////////////// Module-Loader END /////////////////////////////////



//////////////////////////////Module Exports START//////////////////////////////
module.exports = function(shared_libs, config){

  // Run Loader
  loader(shared_libs, config);

  // Return Public Funtions of this module
  return GeoInput;

};/////////////////////////////Module Exports END///////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
const GeoInput = { // Public functions accessible by other modules

  /********************************************************************
  Rounded-off Trailing decimals in latitude (Value in Degrees)

  @param {Number} coordinate - Coordinate to be cleaned/roundedoff

  @return {Number} - Rounded-Off value
  *********************************************************************/
  sanitizeLatitude: function(coordinate){

    // Round-off Number
    return Lib.Utils.round(coordinate, CONFIG.DECIMAL_ROUNDOFF_DEGREE);

  },


  /********************************************************************
  Rounded-off Trailing decimals in longitude (Value in Degrees)

  @param {Number} coordinate - Coordinate to be cleaned/roundedoff

  @return {Number} - Rounded-Off value
  *********************************************************************/
  sanitizeLongitude: function(coordinate){

    // Round-off Number
    return Lib.Utils.round(coordinate, CONFIG.DECIMAL_ROUNDOFF_DEGREE);

  },


  /********************************************************************
  Check if Map Latitude value is in valid range (Value in Degrees)

  @param {Number} coordinate - Coordinate to be validated

  @return {Boolean} - Latitude value is valid
  @return {Boolean} - Latitude value is invalid
  *********************************************************************/
  validateLatitude: function(coordinate){

    // Check if within limits
    return Lib.Utils.validateNumber(coordinate, -90, 90); // The valid range of latitude in degrees is -90 and +90

  },


  /********************************************************************
  Check if Map Longitude value is in valid range (Value in Degrees)

  @param {Number} coordinate - Coordinate to be validated

  @return {Boolean} - Longitude value is valid
  @return {Boolean} - Longitude value is invalid
  *********************************************************************/
  validateLongitude: function(coordinate){

    // Check if within limits
    return Lib.Utils.validateNumber(coordinate, -180, 180); // The valid range of longitude in degrees is -180 and +180

  },


  /********************************************************************
  Rounded-off Trailing decimals in latitude (Value in Radians)

  @param {Number} coordinate - Coordinate to be cleaned/roundedoff

  @return {Number} - Rounded-Off value
  *********************************************************************/
  sanitizeLatitudeRadian: function(coordinate){

    // Round-off Number
    return Lib.Utils.round(coordinate, CONFIG.DECIMAL_ROUNDOFF_RADIAN);

  },


  /********************************************************************
  Rounded-off Trailing decimals in longitude (Value in Radians)

  @param {Number} coordinate - Coordinate to be cleaned/roundedoff

  @return {Number} - Rounded-Off value
  *********************************************************************/
  sanitizeLongitudeRadian: function(coordinate){

    // Round-off Number
    return Lib.Utils.round(coordinate, CONFIG.DECIMAL_ROUNDOFF_RADIAN);

  },


  /********************************************************************
  Check if Map Latitude value is in valid range (Value in Radians)

  @param {Number} coordinate - Coordinate to be validated

  @return {Boolean} - Latitude value is valid
  @return {Boolean} - Latitude value is invalid
  *********************************************************************/
  validateLatitudeRadian: function(coordinate){

    // Check if within limits
    return Lib.Utils.validateNumber( coordinate, -(Math.PI / 2), (Math.PI / 2) ); // The valid range of latitude in radians is -pi/2 to +pi/2

  },


  /********************************************************************
  Check if Map Longitude value is in valid range (Value in Radians)

  @param {Number} coordinate - Coordinate to be validated

  @return {Boolean} - Longitude value is valid
  @return {Boolean} - Longitude value is invalid
  *********************************************************************/
  validateLongitudeRadian: function(coordinate){

    // Check if within limits
    return Lib.Utils.validateNumber( coordinate, -(Math.PI), (Math.PI) ); // The valid range of longitude in radians is -pi and +pi

  },

};///////////////////////////Public Functions END//////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _GeoInput = {  // Private methods accessible within this modules only
  // None
};/////////////////////////Private Functions END////////////////////////////////
