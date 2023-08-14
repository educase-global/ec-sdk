// Info: Contains Core Functions Related to Customer
"use strict";

// Shared Dependencies (Managed by Loader)
var Lib;

// Exclusive Dependencies
var CONFIG; // Module Configration (Managed by Loader)

var studentStatus = [
	{
		statusId: "0",
		statusValue: "Undefined",
	},
	{
		statusId: "1",
		statusValue: "Present",
	},
	{
		statusId: "2",
		statusValue: "Absent",
	},
];

var staffStatus = [
	{
		statusId: "0",
		statusValue: "Undefined",
	},
	{
		statusId: "1",
		statusValue: "Present",
	},
	{
		statusId: "2",
		statusValue: "Full Leave",
	},
	{
		statusId: "3",
		statusValue: "Half Leave",
	},
];

/////////////////////////// Module-Loader START ////////////////////////////////

/********************************************************************
  Module Constructor and Exporter

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
  @param {Set} config - Module configuration in key-value pairs

  @return {Set[]} - Sub-Modules in specific Sequence
  *********************************************************************/
module.exports = function (shared_libs, config) {
	// Shared Dependencies (Managed my Main Entry Module)
	Lib = shared_libs;

	// Module Configuration
	CONFIG = config;

	// Export Public Funtions of this module
	return Attendance;
};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////Public Functions START//////////////////////////////
const Attendance = {
	// Public functions accessible by other modules

	/********************************************************************
  Get Brand Customers List
  @param {Function} cb - Callback function to be invoked once async execution of this function is finished

  @param {Set} args - Array List of Parameters
  * @param {String} auth -  Authentication
  * @param {String} org_id -  Org ID
  * @param {String} brand_id -  Brand ID
  * @param {Number} start - Start Pagination Key

  @return - Thru Callback

  @callback(err, customers list, page data) - Request Callback.
  * @callback {Error} err - Http Error
  * @callback {Set} c_l - Customers List
  * @callback {Set} pg_d - Page data
 
 *********************************************************************/
	getStudentAttendanceDataAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_GET_STUDENT_ATTENDANCE_DATA_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	updateStudentAttendanceDataAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_UPDATE_STUDENT_ATTENDANCE_DATA_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	updateStaffAttendanceMarkInOutAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_STAFF_ATTENDANCE_MARK_IN_OUT"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getStaffAttendanceDataAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_GET_STAFF_ATTENDANCE_DATA_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getStudentOverallAttendanceStatsAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_GET_OVERALL_ATTENDANCE_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getStaffAttendanceHistoryAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_UPDATE_STAFF_ATTENDANCE_HISTORY_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getStaffAttendanceHistoryListAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_STAFF_ATTENDANCE_HISTORY_LIST_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	updateStaffAttendanceDataAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_UPDATE_STAFF_ATTENDANCE_DATA_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getStudentAttendanceReportAdmin: function (cb, args) {
		let params = args["params"];

		// console.log(CONFIG["API_URN_GET_STUDENT_ATTENDANCE_REPORT_ADMIN"]);
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_GET_STUDENT_ATTENDANCE_REPORT_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getStaffAttendanceReportAdmin: function (cb, args) {
		let params = args["params"];

		// console.log(CONFIG["API_URN_GET_STAFF_ATTENDANCE_REPORT_ADMIN"]);
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_GET_STAFF_ATTENDANCE_REPORT_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getHourSettingsListAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_GET_HOUR_SETTINGS_LIST_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	addHourSettingsAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_ADD_HOUR_SETTINGS_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	editHourSettingsAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_EDIT_HOUR_SETTINGS_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	updateHourSettingsAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_UPDATE_HOUR_SETTINGS_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	deleteHourSettingsAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_DELETE_HOUR_SETTINGS_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getAttendanceSettingsListAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_GET_ATTENDANCE_SETTINGS_LIST_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	addAttendanceSettingsAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_ADD_ATTENDANCE_SETTINGS_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	editAttendanceSettingsAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_EDIT_ATTENDANCE_SETTINGS_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	updateAttendanceSettingsAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_UPDATE_ATTENDANCE_SETTINGS_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	addSchoolMaskingAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_ADD_SCHOOL_MASKING"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getSchoolMaskingAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_GET_SCHOOL_MASKING"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	deleteAttendanceSettingsAdmin: function (cb, args) {
		let params = args["params"];

		// console.log(CONFIG["API_URN_DELETE_ATTENDANCE_SETTINGS_ADMIN"]);
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_DELETE_ATTENDANCE_SETTINGS_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getAbsenteeFormListAdmin: function (cb, args) {
		let params = args["params"];

		// console.log(CONFIG["API_URN_GET_ABSENTEE_FORM_LIST_ADMIN"]);
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_GET_ABSENTEE_FORM_LIST_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	viewAbsenteeFormAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_VIEW_ABSENTEE_FORM_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	absenteeFormReplyAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_ABSENTEE_FORM_REPLY_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getAbsentListParent: function (cb, args) {
		let params = args["params"];

		// console.log(CONFIG["API_URN_GET_ABSENT_LIST_PARENT"]);
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_GET_ABSENT_LIST_PARENT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getAttendanceHomescreentParent: function (cb, args) {
		let params = args["params"];

		// console.log(CONFIG["API_URN_GET_ATTENDANCE_HOMESCREEEN_PARENT"]);
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_GET_ATTENDANCE_HOMESCREEEN_PARENT"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	postAbsentFormParent: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_ABSENT_FORM_PARENT"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	staffMyAttendanceAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_STAFF_MY_ATTENDANCE_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	staffAbsenteeFormAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_STAFF_ABSENTEE_FORM_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	staffAttendanceDestroyAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_STAFF_ATTENDANCE_DESTROY_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	staffExportAttendanceAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_EXPORT_STAFF_ATTENDANCE_DATA_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getStudentAttendanceStatusList: function () {
		return studentStatus;
	},

	getStaffAttendanceStatusList: function () {
		return staffStatus;
	},

	rfidStudentTableData: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_RFID_STUDENT_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	rfidStaffTableData: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_RFID_STAFF_TABLE_DATA"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	rfidStudentStore: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_RFID_STUDENT_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	rfidStaffStore: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_RFID_STAFF_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	rfidStudentMultipleStore: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_RFID_STUDENT_MULTIPLE_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	rfidStaffMultipleStore: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_RFID_STAFF_MULTIPLE_STORE"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	rfidDeviceDropdown: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_RFID_DEVICE_DROPDOWN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	studentAttendanceOverview: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_ATTENDANCE_OVERVIEW_STUDENT_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	staffAttendanceOverview: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_ATTENDANCE_OVERVIEW_STAFF_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	schoolAttendanceOverview: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_ATTENDANCE_OVERVIEW_SCHOOL_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	classAttendanceOverview: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_ATTENDANCE_OVERVIEW_CLASS_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	staffStatsAttendanceOverview: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_ATTENDANCE_OVERVIEW_STAFF_STATS_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	addHourSettingV3Admin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_V3_ADD_HOUR_SETTINGS_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	getHourSettingListV3Admin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_V3_GET_HOUR_SETTINGS_LIST_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	deleteHourSettingV3Admin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_V3_DELETE_HOUR_SETTINGS_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	rfidStudentDestroyAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_RFID_STUDENT_DESTROY_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	rfidStaffDestroyAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_RFID_STAFF_DESTROY_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	rfidStaffExportAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_RFID_STAFF_EXPORT_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	attendanceUpdateInOutAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_ATTENDANCE_UPDATE_IN_OUT_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	attendanceStaffSettingUpdateAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_ATTENDANCE_STAFF_SETTING_UPDATE_ADMIN"], // api urn
			"post", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	attendanceStaffSettingShowAdmin: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_ATTENDANCE_STAFF_SETTING_SHOW_ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},

	myStaffAttendance: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_MY_ATTENDANCE_STAFF__ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	},
	myStaffAttendanceDetail: function (cb, args) {
		let params = args["params"];
		Lib.Commons.httpHandler(
			function (err, http_status, http_headers, data) {
				if (err) {
					return cb(err); // Return error and exit
				}
				cb(
					false, // null in case of no error
					data
				);
			},
			CONFIG["API_URN_MY_ATTENDANCE_STAFF_DETAIL__ADMIN"], // api urn
			"get", // method
			params, // request-params
			args["auth"] // auth
		);
	}
};
