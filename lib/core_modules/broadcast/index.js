"use strict";

var Lib;
var CONFIG;

module.exports = function (shared_libs, config) {
	Lib = shared_libs;
	CONFIG = config;
	return Broadcast;
};

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

const Broadcast = {
	getBroadcastListAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_BROADCAST_LIST_ADMIN", "get");
	},
	getBroadcastListStaff: function (cb, args) {
		makeRequest(cb, args, "API_URN_BROADCAST_LIST_STAFF", "get");
	},
	getBroadcastListStudent: function (cb, args) {
		makeRequest(cb, args, "API_URN_BROADCAST_LIST_STUDENT", "get");
	},
	getBroadcastUnreadListAdmin: function (cb, args) {
		makeRequest(cb, args, "API_URN_BROADCAST_UNREAD_LIST_ADMIN", "get");
	},
	getBroadcastUnreadListStaff: function (cb, args) {
		makeRequest(cb, args, "API_URN_BROADCAST_UNREAD_LIST_STAFF", "get");
	},
	getBroadcastUnreadListStudent: function (cb, args) {
		makeRequest(cb, args, "API_URN_BROADCAST_UNREAD_LIST_STUDENT", "get");
	},
	getBroadcastById: function (cb, args) {
		makeRequest(cb, args, "API_URN_BROADCAST_SHOW_ADMIN", "get");
	},
	createBroadcast: function (cb, args) {
		makeRequest(cb, args, "API_URN_BROADCAST_STORE_ADMIN", "post");
	},
	updateBroadcast: function (cb, args) {
		makeRequest(cb, args, "API_URN_BROADCAST_UPDATE_ADMIN", "post");
	},
	deleteBroadcast: function (cb, args) {
		makeRequest(cb, args, "API_URN_BROADCAST_DESTROY_ADMIN", "post");
	},
	markBroadcastAsRead: function (cb, args) {
		makeRequest(cb, args, "API_URN_BROADCAST_MARK_AS_READ", "post");
	},

	// Backward compatibility for existing app wrapper names.
	getBroadcastList: function (cb, args) {
		makeRequest(cb, args, "API_URN_BROADCAST_LIST_ADMIN", "get");
	},
};
