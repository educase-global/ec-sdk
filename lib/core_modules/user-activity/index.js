// Info: Contains Core Functions Related to User Activity / Device Tracking
"use strict";

// Shared Dependencies (Managed by Loader)
var Lib;

// Exclusive Dependencies
var CONFIG; // Module Configration (Managed by Loader)

/////////////////////////// Module-Loader START ////////////////////////////////

module.exports = function (shared_libs, config) {
	// Shared Dependencies (Managed by Main Entry Module)
	Lib = shared_libs;

	// Module Configuration
	CONFIG = config;

	// Export Public Funtions of this module
	return UserActivity;
};

//////////////////////////// Module-Loader END /////////////////////////////////

const makeRequest = (cb, args, configKey, method) => {
	const params = args["params"];
	Lib.Commons.httpHandler(
		function (err, http_status, http_headers, data) {
			if (err) {
				return cb(err);
			}
			cb(false, data);
		},
		CONFIG[configKey],
		method,
		params,
		args["auth"]
	);
};

///////////////////////////Public Functions START//////////////////////////////
const UserActivity = {
	// POST /v2/user-activity/device-track - Called right after a successful login.
	deviceTrack: function (cb, args) {
		makeRequest(cb, args, "API_URN_USER_ACTIVITY_DEVICE_TRACK", "post");
	},

	// POST /v2/user-activity/update - Heartbeat while the user stays logged in.
	update: function (cb, args) {
		makeRequest(cb, args, "API_URN_USER_ACTIVITY_UPDATE", "post");
	},

	// POST /v2/user-activity/logout - Called on logout (body: device_id).
	logout: function (cb, args) {
		makeRequest(cb, args, "API_URN_USER_ACTIVITY_LOGOUT", "post");
	},
};
///////////////////////////Public Functions ENDS////////////////////////////////
