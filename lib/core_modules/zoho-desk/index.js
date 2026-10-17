// Info: Contains Core Functions Related to Zoho Desk (the ERP's help desk: support tickets, replies and files)
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

// Every Zoho Desk read is per-user (the caller's own tickets, a form filled
// with their details), so noCache is forced on: the SDK's 5-minute GET cache is not keyed by user and
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

// Writes go out as multipart POSTs, like every other write in the SDK. Files sit
// in params under their own keys (attachment[0], attachment[1], ...).
const makeWrite = (cb, args, configKey) => {
	Lib.Commons.httpHandler(
		function (err, http_status, http_headers, data) {
			if (err) {
				return cb(err);
			}
			cb(false, data);
		},
		CONFIG[configKey], // api urn
		"post", // method
		args["params"], // request-params
		args["auth"] // auth
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

	// GET zoho-desk-ticket-form - The help desk's ticket form, with the signed-in account's own values filled in (params: login_url optional).
	getZohoDeskTicketForm: function (cb, args) {
		makeRequest(cb, args, "API_URN_ZOHO_DESK_TICKET_FORM");
	},

	// POST zoho-desk-ticket-store - Raises a help desk ticket (params: subject, description, login_url, the form's other keys, attachment[i] files).
	zohoDeskTicketStore: function (cb, args) {
		makeWrite(cb, args, "API_URN_ZOHO_DESK_TICKET_STORE");
	},

	// POST zoho-desk-ticket-comment-store - Adds the signed-in user's reply to one of their tickets (params: id, content, attachment[i] files).
	zohoDeskTicketCommentStore: function (cb, args) {
		makeWrite(cb, args, "API_URN_ZOHO_DESK_TICKET_COMMENT_STORE");
	},

	// POST help-desk-ask - Asks the help assistant a how-to question, answered from the ERP's help articles (params: question, history optional JSON string of the last turns).
	helpDeskAsk: function (cb, args) {
		makeWrite(cb, args, "API_URN_HELP_DESK_ASK");
	},
};
///////////////////////////Public Functions ENDS////////////////////////////////
