// Info: Contains functions related to Google's geo coding and google places apis
"use strict";

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
const loader = function (shared_libs, config) {
	// Shared Dependencies (Managed my Main Entry Module)
	Lib = shared_libs;

	// Configuration (Managed my Main Entry Module)
	CONFIG = config;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////// Module Exports START /////////////////////////////
module.exports = function (shared_libs, config) {
	// Run Loader
	loader(shared_libs, config);

	// Return Public Funtions of this module
	return GoogleGeoData;
}; //////////////////////////// Module Exports END //////////////////////////////

///////////////////////////Public Functions START///////////////////////////////
const GoogleGeoData = {
	// Public functions accessible by other modules

	/********************************************************************
  Return Location Data Object

  @param {Set} geo_code_data - Geo code data returned from google apis

  @return {Set} location - Location Data Object in key-value
  *********************************************************************/
	createLocationData: function (geo_code_data) {
		return Lib.ContactData.createAddressData({
			address_id: null,
			title: null,
			type: null,
			country: null,
			sub_division: null,
			locality: null,
			line1: null,
			line2: null,
			postal_code: null,
			extra: null,
			latitude: geo_code_data["results"][0]["geometry"]["location"]["lat"],
			longitude: geo_code_data["results"][0]["geometry"]["location"]["lng"],
		});
	},

	/********************************************************************
  Return Places List Object

  @param {Set} places_data - Places data returned from google places apis

  @return {Array} places - Location Data Object in Array
  *********************************************************************/
	createPlacesData: function (places_data) {
		return places_data.map(function (address) {
			// console.log("test6 createPlacesData address ", address);

			console.log(
				"test6 ",
				Lib.ContactData.createAddressData({
					address_id: null,
					title: null,
					type: null,
					country: null,
					sub_division: null,
					locality: null,
					line1: address["description"],
					line2: null,
					postal_code: null,
					extra: null,
					latitude: null,
					longitude: null,
				})
			);

			return Lib.ContactData.createAddressData({
				address_id: null,
				title: null,
				type: null,
				country: null,
				sub_division: null,
				locality: null,
				line1: address["description"],
				line2: null,
				postal_code: null,
				extra: null,
				latitude: null,
				longitude: null,
			});
		});
	},

	/********************************************************************
  Return Address data object

  @param {Set} geo_code_data - Geo code data returned from google apis
  @param {Set} location - map of lat and long
  * @param {String} lat - latitude of location
  * @param {String} long - longitude of location

  @return {Set} address - Address Data Object in key-value
  *********************************************************************/
	createAddressData: function (geo_code_data, location) {
		// To collect country code
		let country_code = null;

		// Final address data to be returned //TODO: detech country and translate accordingly
		let address_data = GoogleGeoData.createAddressDataUS(
			geo_code_data["results"][0]["address_components"],
			location
		);

		return address_data;
	},

	/********************************************************************
  Return US Address data object

  @param {Set} geo_code_data - Geo code data returned from google apis
  @param {Set} location - map of lat and long
  * @param {String} lat - latitude of location
  * @param {String} long - longitude of location

  @return {Set} address - Address Data Object in key-value
  *********************************************************************/
	createAddressDataUS: function (geo_code_data, location) {
		var geo_data = {};

		var address_line1 = [];
		var address_line2;
		var address_locality;
		var address_sub_division;
		var address_country;
		var address_postal_code;
		var address_latitude = location.lat;
		var address_longitude = location.lng;

		geo_code_data.map(function (address) {
			if (
				address["types"].includes("street_number") &&
				!Lib.Utils.isNullOrUndefined(address["long_name"])
			) {
				address_line1.push(address["long_name"]);
			} else if (
				address["types"].includes("premise") &&
				!Lib.Utils.isNullOrUndefined(address["long_name"])
			) {
				address_line1.push(address["long_name"]);
			}

			if (
				address["types"].includes("route") &&
				!Lib.Utils.isNullOrUndefined(address["long_name"])
			) {
				address_line1.push(address["long_name"]);
			} else if (
				address["types"].includes("neighborhood") &&
				!Lib.Utils.isNullOrUndefined(address["long_name"])
			) {
				address_line1.push(address["long_name"]);
			}

			if (
				address["types"].includes("sublocality_level_2") &&
				!Lib.Utils.isNullOrUndefined(address["long_name"])
			) {
				address_line1.push(address["long_name"]);
			} else if (
				address["types"].includes("sublocality_level_1") &&
				!Lib.Utils.isNullOrUndefined(address["long_name"])
			) {
				address_line1.push(address["long_name"]);
			}

			if (
				address["types"].includes("locality") &&
				!Lib.Utils.isNullOrUndefined(address["long_name"])
			) {
				address_locality = address["long_name"];
			}

			// if(
			//   address['types'].includes('administrative_area_level_2') &&
			//   !Lib.Utils.isNullOrUndefined(address['long_name'])
			// ){
			//   address_locality = address['long_name'];
			// }

			if (
				address["types"].includes("administrative_area_level_1") &&
				!Lib.Utils.isNullOrUndefined(address["long_name"])
			) {
				address_sub_division = address["short_name"];
			}

			if (
				address["types"].includes("country") &&
				!Lib.Utils.isNullOrUndefined(address["long_name"])
			) {
				address_country = address["long_name"];
			}

			if (
				address["types"].includes("postal_code") &&
				!Lib.Utils.isNullOrUndefined(address["long_name"])
			) {
				address_postal_code = address["long_name"];
			}
		});

		address_line1 = address_line1.join(", ");

		return Lib.ContactData.createAddressData({
			address_id: null,
			title: null,
			type: null,
			country: address_country,
			sub_division: address_sub_division,
			locality: address_locality,
			line1: address_line1,
			line2: address_line2,
			postal_code: address_postal_code,
			extra: null,
			latitude: address_latitude,
			longitude: address_longitude,
		});
	},
}; ///////////////////////////Public Functions END///////////////////////////////

//////////////////////////Private Functions START///////////////////////////////
const _GoogleGeoData = {
	// Private methods accessible within this modules only
	// None
}; /////////////////////////Private Functions END////////////////////////////////
