// Info: Boilerplate library. Contains basic utility functions.
'use strict';
var moment = require('moment');

var file_types = {
  'png': 'image',
  'jpeg': 'image',
  'pdf': 'document',
  'doc': 'document',
  'mp4': 'video'
}


///////////////////////////Public Functions START//////////////////////////////
const Utils = module.exports = { // Public functions accessible by other modules

  /********************************************************************
  Copy of Util Functions from Node JS util lib
  Link: https://github.com/isaacs/core-util-is/blob/master/lib/util.js
  *********************************************************************/
  isNull: function (arg) {
    return arg === null;
  },

  isNullOrUndefined: function (arg) {
    return arg == null;
  },

  isUndefined: function (arg) {
    return arg === void 0;
  },

  isBoolean: function (arg) {
    return typeof arg === 'boolean';
  },

  isNumber: function (arg) {
    return typeof arg === 'number';
  },

  isString: function (arg) {
    return typeof arg === 'string';
  },


  /********************************************************************
  Advance type checks
  *********************************************************************/
  isObject: function (arg) {
    return typeof arg === 'object' && !Utils.isNull(arg); // (null is also an object)
  },

  isError: function (arg) {
    return typeof arg === 'object' && (arg instanceof Error); // This won't work if the error was thrown in a different window/frame/iframe than where the check is happening
  },


  /********************************************************************
  Basic Util Functions
  *********************************************************************/
  isEmptyString: function (str) {
    return str.length === 0;
  },

  isEmptyObject: function (obj) {
    return Object.keys(obj).length === 0;
  },

  // Whether value is null or undefined or '' or {} or []
  isEmpty: function (arg) {
    return (
      Utils.isNullOrUndefined(arg) || // Check for Null or Undefined
      Utils.isEmptyString(arg) || // Check for empty String (Bonus check for empty Array)
      (Utils.isObject(arg) && Utils.isEmptyObject(arg)) // Check for empty Object or Array
    );
  },

  // Whether an array contains a string (return 'true' if does otherwise 'false')
  inArray: function (arr, element) {
    return arr.indexOf(element) > -1;
  },


  /********************************************************************
  Custom Error

  @param {String | Integer | Object} err_obj - Error object
  * @param {String | Integer} code - Optional Error Code
  * @param {String} message - Error Message
  @param {String} [context] - ID for Handshaking

  @return - JSON Object
  *********************************************************************/
  error: function (err_obj, context) {

    var err = Error(err_obj['message']);
    err.code = err_obj['code'];
    err.name = err_obj['code'].toString(); // Instead of showing 'Error' as title in stack trace, show 'Error Code'.
    err.context = context || null;

    // Return Newly built Error
    return err;

  },

  /********************************************************************
    File Type
  
    @param {Strin} extention 
   
    @return - string - File Type
    *********************************************************************/

  getFileTypeByExtention: function (extention) {

    return file_types[extention] || false

  },


  /********************************************************************
  Null function - For optional callback functions

  None

  @return None
  *********************************************************************/
  nullFunc: function () { },


  /********************************************************************
  Return JSON object from flattened string

  @param {string} str - String to be converted into JSON

  @return - JSON Object
  *********************************************************************/
  stringToJSON: function (str) {

    // Convert flattened-json string into JSON
    if (!Utils.isNull(str)) { // Only if not null
      try { str = JSON.parse(str); } // Convert string -> JSON
      catch (e) { str = null; } // Set as null if invalid json
    }

    return str;

  },


  /********************************************************************
  Return reversed String
  Note: Only works for ASCII strings and some Unicodes

  @param {string} str - String to be reversed

  @return - Reversed string
  *********************************************************************/
  stringReverse: function (str) {

    return Array.from(str).reverse().join('');

  },


  /********************************************************************
  Split a String and remove Whitespaces

  @param {string} str - String to be Splited
  @param {string} delimiter - Delimiter for Split

  @return - Array of String
  *********************************************************************/
  splitWithTrim: function (str, delimiter) {

    return str.split(delimiter).map(function (item) {
      return item.trim();
    });

  },


  /********************************************************************
  Remove unwanted feilds of Object (By Ref)

  @param {Set} obj - JSON Object to be cleaned
  @param {string[]} whitelist - All the key other then these will be removed from JSON
  @param {string[]} blacklist - These keys will be removed from JSON

  @return - Sanatized Object
  *********************************************************************/
  sanitizeObject: function (obj, whitelist, blacklist) {

    // Return as null if obj is null or undefined or not-an-array
    if (
      Utils.isNullOrUndefined(obj) ||
      !Utils.isObject(obj)
    ) {
      return null;
    }


    // Create Shallow Copy of Object
    var new_obj = { ...obj };


    // Remove Blacklist keys from Object
    // Ref: https://stackoverflow.com/a/32535117
    if (blacklist) {

      blacklist.forEach(function (key) {
        delete new_obj[key]; // By Reference
      });

    }


    // Remove Non-Whitelist keys from Object
    // Ref: https://stackoverflow.com/a/38750895
    if (whitelist) {

      Object.keys(new_obj)
        .filter(key => !whitelist.includes(key))
        .forEach(key => delete new_obj[key]); // By Reference

    }


    // Return Clean JSON
    return new_obj;

  },


  /********************************************************************
  Sanatize each item of Array (By Ref)

  @param {Mixed[]} list - Array to be Cleaned
  @param {Function} sanatize_func - Array item sanatizer

  @return - Sanatized Object
  *********************************************************************/
  sanitizeArray: function (list, sanatize_func) {

    // Return as null if list is null or undefined or not-an-array
    if (
      Utils.isNullOrUndefined(list) ||
      !Array.isArray(list)
    ) {
      return null;
    }


    // Sanatize each item of array
    return list.map(function (item) {
      return sanatize_func(item);
    });

  },


  /********************************************************************
  Return cleaned string with only characters from specific regular expresion
  Remove all the dangerous characters excluding those who satisfy RegExp

  @param {string} str - String to be sanatized/cleaned
  @param {string} regx - The regular expression

  @return - Sanatized string
  *********************************************************************/
  sanitizeUsingRegx: function (str, regx) {

    // If null or undefined or zero-length, return value as-it-is
    if (Utils.isNullOrUndefined(str) || str.length == 0) {
      return str;
    }


    // Return Clean String
    return str.replace(regx, ''); // Clean and return

  },


  /********************************************************************
  Return cleaned Integer. Convert String/Decimals to a whole-number.

  @param {Unknown} num - Number to be cleaned

  @return {Number} - Sanitized number. Rounded to 'Floor' in case of decimal.
  *********************************************************************/
  sanitizeInteger: function (num) {

    // Convert to Integer
    var i = parseInt(Number(num)); // Convert String/Decimal or any type to equivalent Integer

    // Check if NaN in case of Alphabates String passed as number
    if (isNaN(i)) {
      return null; // Return Null in case it's not a number
    }
    else {
      return i; // Return clean Integer
    }

  },


  /********************************************************************
  Return cleaned Boolean. Convert String/Number to true/false

  @param {Unknown} bool - Boolean to be cleaned

  @return {Boolean} - Sanitized boolean value
  *********************************************************************/
  sanitizeBoolean: function (bool) {

    // Return
    return Boolean(Number(bool)); // Return string -> number -> boolean

  },


  /********************************************************************

  @param {string} text  - Search field to be validated
  @param {Number} minLength - minimum length of string to get text validated as true

  @return {boolean} - Returns true if size of string is greater than 2 else returns false 
  *********************************************************************/

  validateStringMinLength: function (text, minLength) {
    if (Utils.isNumber(text)) {
      text = text.toString();
    }
    return (text.length >= minLength);
  },


  /********************************************************************
  Return specific/current unix timestamp in seconds

  @param {string} [date] - (Optional) Date to be converted into unix timestamp. If not sent in param, then return current time

  @return {String} - Unix timestamp (Seconds)
  *********************************************************************/
  getUnixTime: function (date) {

    // Return Unix Timestamp equivalant of specific date in seconds
    return Math.floor(Utils.getUnixTimeInMilliSeconds(date) / 1000); // Convert Milli-Seconds to Seconds

  },


  /********************************************************************
  Return specific/current unix timestamp in Milli-Seconds

  @param {string} [date] - (Optional) Date to be converted into unix timestamp. If not sent in param, then return current time

  @return {String} - Unix timestamp (Milli-Seconds)
  *********************************************************************/
  getUnixTimeInMilliSeconds: function (date) {

    // Check if custom date is sent
    if (!Utils.isNullOrUndefined(date)) {
      return (new Date(date)); // Return Unix Timestamp equivalant of specific date in Milliseconds
    }
    else {
      return (new Date().getTime()); // Return Unix Timestamp equivalant of current time in Milliseconds
    }

  },


  /********************************************************************
  Round a Decimal number to specified number of digits after decimal
  Ref: https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
  Note: math.round() is more precise then Number.toFixed()

  @param {Number} num - Number to be rounded off
  @param {Number} digits_after_decimal - Number of digits after decimal

  @return {Number} - Rounded off number
  *********************************************************************/
  round: function (num, digits_after_decimal) {

    // If null or undefined, return value as-it-is
    if (Utils.isNullOrUndefined(num)) {
      return num;
    }

    // Calculate multiplier
    var multiplier = Number(`1e${digits_after_decimal}`); // 1e0 === 1, 1e1 === 10, 1e2 === 100

    // Return
    return Math.round(num * multiplier) / multiplier; // 123.456 = 123.45, 123.4 = 123.4

  },


  /********************************************************************
  Check if number is Integer (Whole Number)

  @param {Number} num - number to be checked

  @return {Boolean} - true if Integer (10.0 | 10)
  @return {Boolean} - false if Decimal number (10.7 | 0.7)
  *********************************************************************/
  isInteger: function (num) {

    // Return
    return num % 1 == 0;

  },

  /********************************************************************
  Break string into array with a delimiter
  (Inbuilt skips all empty elements and trim whitespaces and convert to lowercase)

  @param {String} delimiter - The boundary string
  @param {String} str - The input string. Can be NULL or Empty

  @return {Boolean} - false if input sring is null or ''
  @return {String[]} - Newly converted array of strings
  *********************************************************************/
  stringToArray: function (delimiter, str) {

    if (str.length > 0) { // If not empty string
      var arr = str.split(delimiter);        // Split into Array
      arr = arr.map(function (item) { return item.trim().toLowerCase() });    // Convert to lowercase and Trim white spaces including \n \t \r
      arr = arr.filter(Boolean);            // Remove Empty element from array in case string is null/''/0/false/undefined. (If you split an empty string, you get back a one-element array with 0 as the key and an empty string for the value.)
    }
    else {
      return false; //Empty string
    }


    // Check if resultant array is empty, then return false
    if (arr.length > 0) {
      return arr;
    }
    else {
      return false; // Empty array
    }

  },


  /********************************************************************
  Join 2 Arrays (or String) of 'key' and 'value' into one Object

  @param {String|Array} keys - Array with list of keys or single item string
  @param {String|Array} values - Array with list of values or single item string

  @return {Set} - Object with mearged key vale pairs
  *********************************************************************/
  keyValueToObject: function (keys, values) {

    var obj = {};

    if (!Array.isArray(keys)) { // If single item string
      obj[keys] = values;
    }
    else {
      keys.map(function (key, index) { obj[key] = values[index] }); // Create a Set from feilds-array with corrosponding values-array
    }

    return obj;

  },


  /********************************************************************
  Creates a new object by overriding keys of base-object with non-null keys of new-object
  Both Objects should be identical. Keys not present in base object won't be added to it

  @param {Set} base_obj - Base object
  @param {Set} new_objs - (... List) New object whose non-null keys will override base-object keys

  @return {Set} - Object with mearged data
  *********************************************************************/
  overrideObject: function (base_obj, ...new_objs) {

    // Create copy of base-object
    var { ...obj } = { ...base_obj };


    // Iterate each new-object
    new_objs.forEach(function (new_obj) {

      // Copy exclusive/Non-Null keys in New-Object
      for (let key in new_obj) {

        if (
          !(key in obj) || // Exclusive keys in New-Object (Keys which were not present in output-object)
          !Utils.isNull(new_obj[key]) // Non-Null key of New-Object
        ) {
          obj[key] = new_obj[key];
        }

      }

    });


    // Return new object
    return obj;

  },


  /********************************************************************
  Set a value for specific key of object (Only if value is not null or undefined)
  By Reference: Changes are made directly in orignal object

  @param {Set} obj - Object in which value is to be inserted
  @param {Set} key - Key to which this value is to be assigned
  @param {Mixed} new_val - New value

  @return {Set} obj - Updated Object
  *********************************************************************/
  setNonEmptyKey: function (obj, key, new_val) {

    // Set value if it's not null/undefined
    if (!Utils.isNullOrUndefined(new_val)) {
      obj[key] = new_val;
    }

    // Return Object
    return obj;

  },


  /********************************************************************
  Set a value with fallback value if it's null/undefined

  @param {Mixed} new_val - New value
  @param {Mixed} [fallback_val] - (Optional) Falback value. Auto null if not sent in param

  @return {Set} - Object with mearged data
  *********************************************************************/
  fallback: function (new_val, fallback_val) {

    // If fallback-value is not sent, set it as null
    if (Utils.isUndefined(fallback_val)) {
      fallback_val = null;
    }

    // Return new object
    return (!Utils.isNullOrUndefined(new_val) ? new_val : fallback_val);

  },


  /********************************************************************
  Check if All chracters in string are of valid charset and string has
  minimum and maximum length

  @param {String} str - The variable to be checked
  @param {Number} [min_length] - (Optional) Minimum required length this string must have
  @param {Number} [max_length] - (Optional) Maximum length this string can have

  @return {Boolean} - true on success
  @return {Boolean} - false if validation fails

  Note: Always check this function output against identic (===) FALSE to
  avoid mismatches with text 'false' or '0' or empty strings
  *********************************************************************/
  validateString: function (str, min_length, max_length) {

    // Null/Empty-String Allowed (Only if minimum length is specified)
    if (!Utils.isNullOrUndefined(min_length) && // sent in param
      min_length === 0 &&
      (str === null || str === ``)
    ) {
      return true;
    }


    // Check if string type
    if (typeof str !== 'string') {
      return false;
    }


    // Check Min and Max length limit
    var len = str.length; //Store var length

    // Check Min Length (Only if specified)
    if (!Utils.isNullOrUndefined(min_length) && len < min_length) {
      return false; // Less then minimum required length
    }

    // Check Max Length (Only if specified)
    if (!Utils.isNullOrUndefined(max_length) && len > max_length) {
      return false; // More then maximum allowed length
    }


    // Reach here means all validations passed
    return true; // Validation successful

  },


  /********************************************************************
  Check if All chracters in string statisfy particular regular expression
  and string has minimum and maximum length

  @param {String} str - The variable to be checked
  @param {String} regx - The regular expression (EX: '[a-z0-9]{6}')
  @param {Number} [min_length] - (Optional) Minimum required length this string must have
  @param {Number} [max_length] - (Optional) Maximum length this string can have

  @return {Boolean} - true on success
  @return {Boolean} - false if validation fails
  *********************************************************************/
  validateStringRegx: function (str, regx, min_length, max_length) {

    // Null/Empty-String Allowed (Onlu if minimum length is specified)
    if (!Utils.isNullOrUndefined(min_length) && // Sent in params
      min_length === 0 &&
      (str === null || str === ``)
    ) {
      return true;
    }


    // Check string against regular expression
    if (!regx.test(str)) {
      return false;
    }


    // Check Min and Max length limit
    var len = str.length; //Store var length

    // Check Min Length (Only if specified)
    if (!Utils.isNullOrUndefined(min_length) && len < min_length) {
      return false; // Less then minimum required length
    }

    // Check Max Length (Only if specified)
    if (!Utils.isNullOrUndefined(max_length) && len > max_length) {
      return false; // More then maximum allowed length
    }


    // Reach here means all validations passed
    return true; // Validation successful

  },


  /********************************************************************
  Check if Integer is within Minimum and maximum range (including min and max)

  @param {String} num - The variable to be checked
  @param {Number} [min_value] - (Optional) Minimum required value
  @param {Number} [max_value] - (Optional) Maximum allowed value (including)

  @return {Boolean} - true on success
  @return {Boolean} - false if validation fails
  *********************************************************************/
  validateNumber: function (num, min_value, max_value) {

    // Validate type
    if (typeof num !== 'number' || isNaN(num)) {
      return false;
    }

    // Check Minimum Value
    if (!Utils.isNullOrUndefined(min_value) && num < min_value) { // If Minimum value set in parameter
      return false;
    }

    // Check Maximum Value
    if (!Utils.isNullOrUndefined(max_value) && num > max_value) { // If Maximum value set in parameter
      return false;
    }

    // Reach here means all validations passed
    return true; // Validation successful

  },


  /********************************************************************
  Return Error-Object if required keys of object are missing or null

  @param {Object} obj - Object to be checked
  @param {String} [context] - (Optional) Request context
  @param {Object} required_config - List of required keys
  * @param {String} key - Key Name
  * * @param {Set} error - Custom-Error Object
  * * @param {Boolean} [not_null] - (Optional) `null` is not allowed
  @param {String|Object[]} required_keys - List of required keys. String: If always required. Object: If required only in presence of another key
  @param {Set} dependent_keys - List of keys which are required only if another key is present
  * @param {Set[]} - Parent Key Name as index
  * * @param {String[]} keys - Array of Dependent Keys Names
  * * @param {Boolean|Integer|String[]} [values] - (Optional) Array of possible values of dependent key. Null means any value

  @return {Error[]} response - Array of Error-Objects if required fields not sent
  @return {Boolean} response - false if valid data
  *********************************************************************/
  absenteeKeysCheckObject: function (
    obj, context, required_config,
    required_keys, dependent_keys = {}
  ) {

    // Initialize empty list of errors
    var errs = [];


    // Iterate through all dependent keys
    for (let key in dependent_keys) {

      // Only if this key is present in obj
      if (!Utils.isNullOrUndefined(obj[key])) {

        // Iterate all rules on this Key
        dependent_keys[key].forEach(function (rule) {

          // Test this Key's value against possible values
          if (
            Utils.isNullOrUndefined(rule['values']) || // Null means any value
            rule['values'].includes(obj[key]) // Matches a possible allowed value
          ) {
            required_keys = [...required_keys, ...rule['keys']]; // Add dependeny-Keys to list of required-Keys
          }

        });

      }

    }


    // Iterate through all required keys
    required_keys.forEach(function (key) {

      // Check if value is null or undefined
      if (
        Utils.isUndefined(obj[key]) || // Check for undefined
        (
          required_config[key]['not_null'] && // Only if null value is not allowed
          Utils.isNull(obj[key]) // Check for null
        )
      ) {
        errs.push( // Error found. Add Error Object to List of Errors
          Utils.error( // Cerate Error Object
            required_config[key]['error'],
            context
          )
        );
      }

    });

    // Return Error if any
    return errs.length ? errs : false; // If Error List has more then 0 items, then return error list. Otherwise, false.

  },


  /********************************************************************
  Return Error-Object if validations for an object failed

  @param {Object} obj - Object to be checked
  @param {String} [context] - (Optional) Request context
  @param {Object[]} validation_config - List of Validation Functions
  * @param {Function} [func] - Function to validate specific key(s)
  * @param {Object[]} params - List of params passed in validation function
  * @param {Set} error - Custom-Error Object
  @param {Object[]} invalidation_config - List of Invalidation Functions
  * @param {Function} [func] - Function to validate specific key(s)
  * @param {Object[]} params - List of params passed in validation function

  @return {Error[]} response - Array of Error-Objects if required fields not sent
  @return {Boolean} response - false if valid data
  *********************************************************************/
  invalidKeysCheckObject: function (
    obj, context,
    validation_config, invalidation_config
  ) {

    // Initialize empty list of errors
    var errs = [];


    // Iterate through all validation rules
    if (validation_config) { // If any validation rules are sent in param
      validation_config.forEach(function (validation_rule) {

        // Only validate if param(s) are not null
        if (
          validation_rule['params'].every(function (param) { // Only validate if every param is not-null
            return !Utils.isNullOrUndefined(obj[param])
          }) &&
          !Utils.isNullOrUndefined(validation_rule['func']) && // Only if function is not-null
          !validation_rule['func']( // Execute validation function with params
            ...validation_rule['params'].map(function (key) { // Iterate params - substitute 'key' with its value
              return obj[key]
            })
          )
        ) {
          errs.push( // Error found. Add Error Object to List of Errors
            Utils.error( // Cerate Error Object
              validation_rule['error'],
              context
            )
          );
        }

      });
    }


    // Iterate through all Invalidation rules
    if (invalidation_config) { // If any invalidation rules are sent in param
      invalidation_config.forEach(function (invalidation_rule) {

        // Only validate if param(s) are not null
        if (
          invalidation_rule['params'].every(function (param) { // Only validate if every param is not-null
            return !Utils.isNullOrUndefined(obj[param])
          }) &&
          !Utils.isNullOrUndefined(invalidation_rule['func']) // Only if function is not-null
        ) {

          let obj_errs = invalidation_rule['func']( // Execute invalidation function with params
            ...invalidation_rule['params'].map(function (key) { // Iterate params - substitute 'key' with its value
              return obj[key]
            })
          );


          // If Errors found, then merge it to full list of errors
          if (obj_errs) {
            errs = [...errs, ...obj_errs]
          }

        }

      });
    }

    // Return Error if any
    return errs.length ? errs : false; // If Error List has more then 0 items, then return error list. Otherwise, false.

  },


  /********************************************************************
  Does both required-keys-check and invalid-keys-check for an Object
  Only checks for invalid-keys if there are no keys absent

  @param {Object} obj - Object to be checked
  @param {String[]} required_keys - List of required keys
  @param {Set} dependent_keys - List of keys which are required only if another key is present
  @param {Function} require_check_func - Function to check required-keys
  @param {Function} invalidate_check_func - Function to check invalid-keys

  @return {Error[]} response - Array of Error-Objects if invalid data
  @return {Boolean} response - false if valid data
  *********************************************************************/
  checkObjectData: function (
    obj, required_keys, dependent_keys,
    require_check_func, invalidate_check_func
  ) {

    // Return after checking required params and validations
    return (
      require_check_func(obj, required_keys, dependent_keys) || // Return absentee-Keys-check errors if any
      invalidate_check_func(obj) // Return invalid-keys-check errors if no absentee-Keys-check errors
    );

  },


  /********************************************************************
  Check and return Errors in each Object in a array

  @param {Set[]} objs_list - List of Partiton Items
  @param {Function} new_obj_check_func - Function to check required-keys of Deep-Object

  @param {Integer} [min_length] - (Optional) Minimum Length of Objects list (Including)
  @param {Error} [min_length_error] - (Optional) Error for Minimum Length
  @param {Integer} [max_length] - (Optional) Maximum Length of Objects list (Including)
  @param {Error} [max_length_error] - (Optional) Error for Maximum Length

  @return {Error} response - Error-Object if invalid data
  @return {Boolean} response - false if valid data
  *********************************************************************/
  checkNewObjectsList: function (
    objs_list,
    new_obj_check_func,
    min_length, min_length_error,
    max_length, max_length_error
  ) {

    var errs = [];


    // Check for Min length of Objects List (if found then push respective error)
    if (
      !Utils.isNullOrUndefined(min_length) &&
      objs_list.length < min_length
    ) {
      errs.push(min_length_error);
    }

    // Check for Max length of Objects List (if found then push respective error)
    if (
      !Utils.isNullOrUndefined(max_length) &&
      objs_list.length > max_length
    ) {
      errs.push(max_length_error);
    }


    // Iterate each obj in objs_list
    for (let key in objs_list) {

      // Check error
      let obj_errs = new_obj_check_func(objs_list[key]);

      // If Errors found, then merge it to full list of errors
      if (obj_errs) {
        errs = [...errs, ...obj_errs]
      }

    }

    // Return Errors if any
    return errs.length ? errs : false; // If Error List has more then 0 items, then return error list. Otherwise, false.

  },


  /********************************************************************
  Check and return Errors in each Object in a array
  Automatically Check if New or Edit or No-Change in object based on 'cmd'

  @param {Set[]} objs_list - List of Partiton Items
  @param {Function} new_obj_check_func - Function to check New Object
  @param {Function} edit_obj_check_func - Function to check Edit Object

  @return {Error} response - Error-Object if invalid data
  @return {Boolean} response - false if valid data
  *********************************************************************/
  checkEditObjectsList: function (
    objs_list,
    new_obj_check_func, edit_obj_check_func
  ) {

    var errs = [];

    // Iterate each obj in objs_list
    for (let key in objs_list) {

      // Check error
      let obj_errs = false;
      if (objs_list[key]['command'] == 'new') {
        obj_errs = new_obj_check_func(objs_list[key]);
      }
      else { // Edit/No-Change
        obj_errs = edit_obj_check_func(objs_list[key]);
      }


      // If Errors found, then merge it to full list of errors
      if (obj_errs) {
        errs = [...errs, ...obj_errs]
      }

    }

    // Return Errors if any
    return errs.length ? errs : false; // If Error List has more then 0 items, then return error list. Otherwise, false.

  },

  /********************************************************************
  Convert CSV String to Data (CSv File Should have Header)

  @param {String} csv_data - CSV Data

  @return {Set[]} data - List of Objects
  *********************************************************************/
  convertCsvToData: function (csv_data) {

    // create lines from CSV
    var lines = csv_data.split("\n");


    // If 0 lines, means no data
    if (lines.length == 0) {
      return []; // Return Empty Array (no Data)
    }

    // Get header keys from 1st line of CSV
    var header = Utils.splitWithTrim(
      lines.shift(), // Get 1st item (0th Index) of Lines and remove it simultaneously
      ','
    );


    // iterate all lines and Return
    return lines.map(function (line) {

      // Convert line-string to array
      let data = Utils.splitWithTrim(line, ',');

      // Convert empty strings to undefined
      data = data.map(function (item) {
        return (Utils.isEmptyString(item) ? void 0 : item);
      });

      return Utils.keyValueToObject(header, data);

    });

  },

  /********************************************************************
  Return Human readable date

  @param {number} stamp - timestamp to be converted

  @return {string}  - human readable date
  *********************************************************************/

  convertToHumanReadableDate: function (stamp) {
    return moment(stamp * 1000).format("h:mm A Do MMM, YYYY")
  },

  /********************************************************************
    return a truncate string
  
    @param {string} str - string to be truncated
    @param {number} num - limit of string
  
    @return {string}  - truncated string
    *********************************************************************/

  truncateString: function (str, num) {
    if (str.length > num) {
      return (str.slice(0, num).concat("..."));
    } else {
      return str;
    }
  },

  /********************************************************************
    return a table is searchable or not
  
    @param {string} str - string to be applied condition for search
  
    @return {boolean}  - true if searchable
    *********************************************************************/

  tableIsSearchable: function (str) {
    if (str.length > 2) {
      return true;
    } else {
      return false;
    }
  },

  /********************************************************************
  return a conversion of a phonenumber
 
  @param {number} phoneNumber - phone number to be applied condition for conversion
  *********************************************************************/

  convertPhoneNumber: (phoneNumber) => {
    if (phoneNumber && isNaN(phoneNumber) === false && String(phoneNumber).length === 10) {
      const phoneNumberFirstPart = phoneNumber.substring(0, 2)
      const phoneNumberSecondPart = phoneNumber.substring(phoneNumber.length - 2, phoneNumber.length)
      return `${phoneNumberFirstPart}${"x".repeat(phoneNumber.length - 4)}${phoneNumberSecondPart}`
    } else {
      return ""
    }
  }

}; // Close Public Functions

////////////////////////////Public Functions END///////////////////////////////



//////////////////////////Private Functions START//////////////////////////////
    //None
///////////////////////////Private Functions END///////////////////////////////
