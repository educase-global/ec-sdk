// Info: Boilerplate library. Contains Functions related to currency and money operations
'use strict';

// Shared Dependencies (Managed by Loader)
var Lib = {};

// Exclusive Dependencies
var CONFIG = require('./config'); // Loader can override it with Custom-Config
const CURRENCY_CODES = require('./currency-codes.json');


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

  };

//////////////////////////// Module-Loader END /////////////////////////////////



///////////////////////////// Module Exports START /////////////////////////////
module.exports = function(shared_libs, config){

  // Run Loader
  loader(shared_libs, config);

  // Return Public Funtions of this module
  return Money;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
const Money = { // Public functions accessible by other modules

  /********************************************************************
  Override defaut Configrations

  @param {Map} custom_config - Custom configuration in key-value pairs

  @return {void}
  *********************************************************************/
  config: function(custom_config){

    // Override default configuration
    if( !Lib.Utils.isNullOrUndefined(custom_config) ){
      Object.assign(CONFIG, custom_config); // Merge custom configuration with defaults
    }

  },


  /********************************************************************
  Get currency symbol

  // No Params

  @return {String} currency_symbol - Currency Symbol
  *********************************************************************/
  getCurrencySymbol: function(){

    return CURRENCY_CODES[CONFIG.CURRENCY_CODE]['sym'];

  },


  /********************************************************************
  Round-off amount to correct decimal places

  @param {Number} amount - Amount in decimals

  @return {Number} rounded_amount - Amount with proper round off
  *********************************************************************/
  roundAmount: function(amount){

    return Lib.Utils.round(
      amount,
      CURRENCY_CODES[CONFIG.CURRENCY_CODE]['dec']
    );

  },


  /********************************************************************
  Format amount to correct decimal places.
  (Use this function For print only) (10 -> 10 | 10.6 -> 10.60)

  @param {Number} amount - Amount in decimals

  @return {String} formatted_amount - Amount trimmed to currency-specific decimal places with proper round off.
  *********************************************************************/
  formatAmount: function(amount){

    // Round
    var amt = Money.roundAmount(amount);

    // If Not a Whole number, add trailing zeros after decimal
    if( !Lib.Utils.isInteger(amt) ){
      return amt.toFixed( CURRENCY_CODES[CONFIG.CURRENCY_CODE]['dec'] ); // toFixed converts to string
    }

    // Return number as string
    return amt.toString();

  },


  /********************************************************************
  Round-off amount to closest minimum transactional-fraction
  (15.20 -> 15 | 15.68 -> 16)

  @param {Number} amount - Amount in decimals

  @return {Number} rounded_amount - Amount with proper round off
  *********************************************************************/
  getTransactionalAmount: function(amount){

    // Convert Decimal into Integer for arthhmetic (JS has otherwise errors in float maths)
    // Ref: https://stackoverflow.com/questions/588004/is-floating-point-math-broken
    var amt = _Money.convertToIntegerAmount(amount);
    var transactional_factor = _Money.convertToIntegerAmount(
      CURRENCY_CODES[CONFIG.CURRENCY_CODE]['tarf']
    );


    // Return
    return _Money.convertFromIntegerAmount( // Convert back to float from integer
      Math.round( amt / transactional_factor ) * transactional_factor
    );

  },


  /********************************************************************
  Sum of numbers
  Properly add floting point numbers
  Ref: https://stackoverflow.com/questions/588004/is-floating-point-math-broken

  @param {Number[]} amounts - Array of Amounts in decimals

  @return {Number} rounded_amount - Amount with proper round off
  *********************************************************************/
  sum: function(amounts){

    // Add all numbers after converting float to integer
    var total = amounts.reduce(function(sum, currValue){
      return sum + _Money.convertToIntegerAmount(currValue);
    },0);


    // Return total after converting integer back to float
    return _Money.convertFromIntegerAmount(total);

  },

};///////////////////////////Public Functions END///////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _Money = { // Private functions accessible within this modules only

  /********************************************************************
  Converts Main + Fractional corrency into Fractional Currencu
  15.20 -> 1520 | 15.1 -> 1510 (if 2 decimal)

  @param {Number} amount - Amount

  @return {Integer} new_amount - Amount in Fractional Currencu
  *********************************************************************/
  convertToIntegerAmount: function(amount){

    return amount * Number(`1e${CURRENCY_CODES[CONFIG.CURRENCY_CODE]['dec']}`);

  },


  /********************************************************************
  Converts Fractional Currencu to Main + Fractional corrency
  1520 -> 15.20 | 1510 -> 15.1  (if 2 decimal)

  @param {Integer} amount - Amount

  @return {Number} new_amount - Amount in  Main + Fractional corrency
  *********************************************************************/
  convertFromIntegerAmount: function(amount){

    return amount / Number(`1e${CURRENCY_CODES[CONFIG.CURRENCY_CODE]['dec']}`);

  },

};//////////////////////////Private Functions END///////////////////////////////
