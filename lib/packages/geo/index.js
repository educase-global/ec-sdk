// Info: Boilerplate library. Contains Geo Location related functions.
'use strict';

// Shared Dependencies (Managed by Loader)
var Lib = {};

// Private Dependencies - Parts of same library (Managed by Loader)
var GeoInput;
var GeoData;

// Exclusive Dependencies
var CONFIG = require('./config'); // Loader can override it with Custom-Config


/////////////////////////// Module-Loader START ////////////////////////////////

  /********************************************************************
  Load dependencies and configurations

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
  @param {Set} config - Custom configuration in key-value pairs

  @return nothing
  *********************************************************************/
  const loader = function(shared_libs, config){

    // Shared Dependencies (Must be loaded in memory already)
    Lib.Utils = shared_libs.Utils;
    Lib.Debug = shared_libs.Debug;

    // Override default configuration
    if( !Lib.Utils.isNullOrUndefined(config) ){
      Object.assign(CONFIG, config); // Merge custom configuration with defaults
    }

    // Private Dependencies
    GeoInput = require('./geo_input')(Lib, CONFIG);
    GeoData = require('./geo_data')(Lib, CONFIG);

  };

//////////////////////////// Module-Loader END /////////////////////////////////



///////////////////////////// Module Exports START /////////////////////////////
module.exports = function(shared_libs, config){

  // Run Loader
  loader(shared_libs, config);

  // Return Public Funtions of this module
  return Geo;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
var Geo = { // Public functions accessible by other modules

  /********************************************************************
  Return Earth's radius in Meteres

  // No Params

  @return {Number} - Earth's radius in Meteres
  *********************************************************************/
  earthRadius: function(){

    return CONFIG.EARTH_RADIUS;

  },


  /********************************************************************
  Calculate distance between two given geo-coodinates points (In meters)
  Ref: http://janmatuschek.de/LatitudeLongitudeBoundingCoordinates

  @param {Number} latitude_1    - Geo Location 1 - Latitude (In Radians)
  @param {Number} longitude_1   - Geo Location 1 - Longitude (In Radians)

  @param {Number} latitude_2    - Geo Location 2 - Latitude (In Radians)
  @param {Number} longitude_2   - Geo Location 2 - Longitude (In Radians)

  @return {Number} - Distance in meters
  *********************************************************************/
  calculateDistanceBetweenGeoCoordinates: function(latitude_1, longitude_1, latitude_2, longitude_2){

    // Calculate distance between 2 geo-coordinates
    var distance = Math.acos(
      Math.sin(latitude_1) * Math.sin(latitude_2) + Math.cos(latitude_1) * Math.cos(latitude_2) * Math.cos(longitude_1 - longitude_2)
    ) * CONFIG.EARTH_RADIUS;


    // Round-off decimals and return disctance
    return Lib.Utils.round(distance, 3); // Upto 3 decimals (precise to millimeter)

  },


  /********************************************************************
  Convert distance in Meters to Miles (Upto 3 Decimal)

  @param {Number} meters - Number in Meters

  @return {Number} - Number in Miles
  *********************************************************************/
  metersToMiles: function(meters){

    return Lib.Utils.round( (meters * 0.000621371192), 2 );

  },


  /********************************************************************
  Convert distance in Miles to Meters (Upto 1 Decimal)

  @param {Number} miles - Number in Meters

  @return {Number} - Number in Meters
  *********************************************************************/
  milesToMeters: function(miles){

    return Lib.Utils.round( (miles * 1609.344), 1 );

  },


  /********************************************************************
  Convert distance in Kilo-Meters to Meters (Upto 1 Decimal)

  @param {Number} kilometers - Number in Kilo-Meters

  @return {Number} - Number in Meters
  *********************************************************************/
  kmToMeters: function(kilometers){

    return Lib.Utils.round( (kilometers * 1000), 1 );

  },


  /********************************************************************
  Convert distance in Meters to Kilo-Meters (Upto 2 Decimal)

  @param {Number} meters - Number in Meters

  @return {Number} - Number in Kilo-Meters
  *********************************************************************/
  metersToKm: function(meters){

    return Lib.Utils.round( (meters / 1000), 2 );

  },


  /********************************************************************
  Convert value in Decimal Degrees (Angle) to Radians.
  Functions like sin, cos, etc take angles as input

  @param {Number} angle - Number in decimal degrees (Angle)

  @return {Number} - Number in Radians
  *********************************************************************/
  degreesToRadians: function(angle){

    return Lib.Utils.round(
      angle * (Math.PI / 180), // Degree to Radian
      CONFIG.DECIMAL_ROUNDOFF_RADIAN // Round off decimal
    );

  },


  /********************************************************************
  Convert value in Radians to Decimal Degrees (Angle).
  Functions like sin, cos, etc Return angles into Radians

  @param {Number} angle - Number in Radians (Angle)

  @return {Number} - Number in Decimal Degrees
  *********************************************************************/
  radiansToDegrees: function(angle){

    return Lib.Utils.round(
      angle * (180 / Math.PI), // Radian to Degree
      CONFIG.DECIMAL_ROUNDOFF_DEGREE // Round off decimal
    );

  },

}; // Close Public Functions

////////////////////////////Public Functions END////////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _Geo = { // Private functions accessible within this modules only
  // None
};/////////////////////////Private Functions END////////////////////////////////
