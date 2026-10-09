// Info: Contains Core Functions Related to Zoho Desk (help desk widget sign-in and support tickets)
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
	return ZohoDesk;
};

//////////////////////////// Module-Loader END /////////////////////////////////

// Every Zoho Desk read is per-user (a sign-in token, the caller's own tickets),
// so noCache is forced on: the SDK's 5-minute GET cache is not keyed by user and
// survives reloads, which would hand one account's data to the next one that
// signs in on the same browser.
const makeRequest = (cb, args, configKey) => {
	const params = args["params"];
	Lib.Commons.httpHandler(
		function (err, http_status, http_headers, data) {
			if (err) {
				return cb(err);
			}
			cb(false, data);
		},
		CONFIG[configKey], // api urn
		"get", // method
		params, // request-params
		args["auth"], // auth
		true // noCache
	);
};

///////////////////////////Public Functions START//////////////////////////////
const ZohoDesk = {
	// GET zoho-desk-asap-token - Short-lived JWT the Zoho Desk ASAP widget exchanges for a signed-in session; no params (identity comes from the bearer token).
	getZohoDeskAsapToken: function (cb, args) {
		makeRequest(cb, args, "API_URN_ZOHO_DESK_ASAP_TOKEN");
	},

	// GET zoho-desk-ticket-table-data - The signed-in user's help desk tickets, paginated (params: page, perPage, status optional).
	getZohoDeskTicketTableData: function (cb, args) {
		makeRequest(cb, args, "API_URN_ZOHO_DESK_TICKET_TABLE_DATA");
	},

	// GET zoho-desk-ticket-show - One of the signed-in user's tickets with its conversation summaries (params: id).
	getZohoDeskTicketShow: function (cb, args) {
		makeRequest(cb, args, "API_URN_ZOHO_DESK_TICKET_SHOW");
	},
};
///////////////////////////Public Functions ENDS////////////////////////////////
