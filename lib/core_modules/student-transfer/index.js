"use strict";

var Lib;
var CONFIG;

module.exports = function (shared_libs, config) {
    Lib = shared_libs;
    CONFIG = config;
    return StudentTransfer;
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

const StudentTransfer = {
    // Franchise Student Transfer
    getFranchiseStudentTransferTableData: function (cb, args) {
        makeRequest(cb, args, "API_URN_FRANCHISE_STUDENT_TRANSFER_TABLE_DATA", "get");
    },
    acceptFranchiseStudentTransfer: function (cb, args) {
        makeRequest(cb, args, "API_URN_FRANCHISE_STUDENT_TRANSFER_ACCEPT", "post");
    },
    rejectFranchiseStudentTransfer: function (cb, args) {
        makeRequest(cb, args, "API_URN_FRANCHISE_STUDENT_TRANSFER_REJECT", "post");
    },

    // Franchise Student Transfer Setting
    storeFranchiseStudentTransferSetting: function (cb, args) {
        makeRequest(cb, args, "API_URN_FRANCHISE_STUDENT_TRANSFER_SETTING_STORE", "post");
    },
    updateFranchiseStudentTransferSetting: function (cb, args) {
        makeRequest(cb, args, "API_URN_FRANCHISE_STUDENT_TRANSFER_SETTING_UPDATE", "post");
    },
    getFranchiseStudentTransferSettingDetails: function (cb, args) {
        makeRequest(cb, args, "API_URN_FRANCHISE_STUDENT_TRANSFER_SETTING_DETAILS", "get");
    },

    // Franchise Student Transfer Policy
    getFranchiseStudentTransferPolicyTableData: function (cb, args) {
        makeRequest(cb, args, "API_URN_FRANCHISE_STUDENT_TRANSFER_POLICY_TABLE_DATA", "get");
    },
    showFranchiseStudentTransferPolicy: function (cb, args) {
        makeRequest(cb, args, "API_URN_FRANCHISE_STUDENT_TRANSFER_POLICY_SHOW", "get");
    },
    storeFranchiseStudentTransferPolicy: function (cb, args) {
        makeRequest(cb, args, "API_URN_FRANCHISE_STUDENT_TRANSFER_POLICY_STORE", "post");
    },
    updateFranchiseStudentTransferPolicy: function (cb, args) {
        makeRequest(cb, args, "API_URN_FRANCHISE_STUDENT_TRANSFER_POLICY_UPDATE", "post");
    },
    deleteFranchiseStudentTransferPolicy: function (cb, args) {
        makeRequest(cb, args, "API_URN_FRANCHISE_STUDENT_TRANSFER_POLICY_DELETE", "post");
    },
    addFranchiseStudentTransferPolicyTerms: function (cb, args) {
        makeRequest(cb, args, "API_URN_FRANCHISE_STUDENT_TRANSFER_POLICY_ADD_TERMS", "post");
    },
    deleteFranchiseStudentTransferPolicyTerms: function (cb, args) {
        makeRequest(cb, args, "API_URN_FRANCHISE_STUDENT_TRANSFER_POLICY_DELETE_TERMS", "post");
    },

    // Admin Student Transfer
    getAdminStudentTransferTableData: function (cb, args) {
        makeRequest(cb, args, "API_URN_ADMIN_STUDENT_TRANSFER_TABLE_DATA", "get");
    },
    showAdminStudentTransfer: function (cb, args) {
        makeRequest(cb, args, "API_URN_ADMIN_STUDENT_TRANSFER_SHOW", "get");
    },
    storeAdminStudentTransfer: function (cb, args) {
        makeRequest(cb, args, "API_URN_ADMIN_STUDENT_TRANSFER_STORE", "post");
    },
};
