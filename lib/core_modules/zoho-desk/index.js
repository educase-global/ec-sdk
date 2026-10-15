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
	// GET zoho-desk-asap-token (Node, serverType "node")
	//
	// Signs the caller into the Zoho Desk ASAP mobile widget. No request params:
	// the caller is the authenticated app user (same bearer token as other APIs).
	//
	// The Zoho JWT secret lives only on the API server (env ZOHO_ASAP_JWT_SECRET).
	// It is shown once in Zoho Desk when the ASAP add-on is created and must not
	// be committed or sent to the app.
	//
	// Sign HS256. Claims:
	//   email           account email, or a stable synthetic address when the
	//                   account has none (parents are often phone-only):
	//                   sb-{userId}@users.schoolbridge.help
	//   email_verified  true
	//   not_before      now, milliseconds
	//   not_after       not_before + 5 minutes, milliseconds (Zoho rejects longer)
	//
	// Response the app reads: { status: "success", data: { token: "<jwt>" } }
	// A bare { token } is also accepted. The token is the only field the app uses.
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
