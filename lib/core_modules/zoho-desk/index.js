// Info: Contains Core Functions Related to Zoho Desk (the ERP's help desk: support tickets)
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

// Every Zoho Desk read is per-user (the caller's own tickets), so noCache is
// forced on: the SDK's 5-minute GET cache is not keyed by user and
// survives reloads, which would hand one account's data to the next one that
// signs in on the same browser.
// On a failed call the HTTP status is passed along as the third argument (as
// Authentication does), so the UI can tell a 503 timeout from a definite failure.
const makeRequest = (cb, args, configKey) => {
	const params = args["params"];
	Lib.Commons.httpHandler(
		function (err, http_status, http_headers, data) {
			if (err) {
				return cb(err, null, http_status);
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
