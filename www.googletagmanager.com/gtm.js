// Copyright 2012 Google Inc. All rights reserved.

(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');

(function() {

    var data = {
        "resource": {
            "version": "408",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "OnetrustActiveGroups"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "firstTimeSignupTeacher"
            }, {
                "function": "__cvt_10754089_1280",
                "vtp_userValueKey": "email"
            }, {
                "function": "__awec",
                "vtp_mode": "MANUAL",
                "vtp_email": ["macro", 4],
                "vtp_enableUserDataAutoMode": true
            }, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__cvt_10754089_716"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "userId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "userType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "schoolId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "registrationYear"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "registrationMonth"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "registrationWeek"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "registerDate"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 16],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*\\?(.*)", "value", "$1"]]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user-id"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "allowLinker", "value", "true"],
                    ["map", "fieldName", "customTask", "value", ["macro", 8]]
                ],
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", "2", "dimension", ["macro", 9]],
                    ["map", "index", "4", "dimension", ["macro", 10]],
                    ["map", "index", "5", "dimension", ["macro", 11]],
                    ["map", "index", "7", "dimension", ["macro", 12]],
                    ["map", "index", "8", "dimension", ["macro", 13]],
                    ["map", "index", "9", "dimension", ["macro", 14]],
                    ["map", "index", "10", "dimension", ["macro", 15]],
                    ["map", "index", "12", "dimension", "v1"],
                    ["map", "index", "23", "dimension", ["macro", 17]],
                    ["map", "index", "30", "dimension", ["macro", 18]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-40390561-4",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__e"
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 25],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*parent.*|.*Membership.*|.*membership.*|.*tutoring.*|.*Parent.*|.*child.*|.*growth\\-mindset.*", "value", "Parent Interest"]]
            }, {
                "function": "__d",
                "vtp_elementSelector": "#content \u003E article \u003E div.styles__Grid-a0scip-0.eWpMlS.styles__Layout-sc-16c98hh-0.zBcft.auto-margin \u003E div \u003E div \u003E ul *",
                "vtp_selectorType": "CSS"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 27],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*Parent.*", "value", "Parent Interest Blog"]]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 25],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*teacher.*|.*math\\-curriculum.*", "value", "Teacher Interest Page"]]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 25],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*teacher.*|.*teaching.*|.*Teaching.*|.*Teacher.*", "value", "Teacher Interest Blog"]]
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "allowLinker", "value", "true"],
                    ["map", "fieldName", "customTask", "value", ["macro", 8]]
                ],
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", "2", "dimension", ["macro", 9]],
                    ["map", "index", "4", "dimension", ["macro", 10]],
                    ["map", "index", "5", "dimension", ["macro", 11]],
                    ["map", "index", "7", "dimension", ["macro", 12]],
                    ["map", "index", "8", "dimension", ["macro", 13]],
                    ["map", "index", "9", "dimension", ["macro", 14]],
                    ["map", "index", "10", "dimension", ["macro", 15]],
                    ["map", "index", "23", "dimension", ["macro", 17]],
                    ["map", "index", "30", "dimension", ["macro", 18]],
                    ["map", "index", "24", "dimension", ["template", ["macro", 26], " | ", ["macro", 28]]],
                    ["map", "index", "25", "dimension", ["template", ["macro", 29], " | ", ["macro", 30]]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-40390561-4",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "view"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-40390561-5",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "type"
            }, {
                "function": "__cvt_10754089_715"
            }, {
                "function": "__cvt_10754089_714"
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "ubpv"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 40],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "([a-t]).*|([v-z]).*", "value", "$1"]]
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-40390561-4",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "funnelName",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "isPlayingFromHome",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "game",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 45],
                "vtp_map": ["list", ["map", "key", "1", "value", "Game Session"]]
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "allowLinker", "value", "true"],
                    ["map", "fieldName", "customTask", "value", ["macro", 8]]
                ],
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", "2", "dimension", ["macro", 9]],
                    ["map", "index", "4", "dimension", ["macro", 10]],
                    ["map", "index", "5", "dimension", ["macro", 11]],
                    ["map", "index", "7", "dimension", ["macro", 12]],
                    ["map", "index", "8", "dimension", ["macro", 13]],
                    ["map", "index", "9", "dimension", ["macro", 14]],
                    ["map", "index", "10", "dimension", ["macro", 15]],
                    ["map", "index", "12", "dimension", "v2"],
                    ["map", "index", "23", "dimension", ["macro", 17]],
                    ["map", "index", "30", "dimension", ["template", "user id: ", ["macro", 9], " | user-id: ", ["macro", 18]]],
                    ["map", "index", "36", "dimension", ["template", "user id: ", ["macro", 9], " | user-id: ", ["macro", 18]]],
                    ["map", "index", "37", "dimension", ["macro", 43]],
                    ["map", "index", "38", "dimension", ["macro", 44]],
                    ["map", "index", "39", "dimension", ["macro", 46]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-40390561-4",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 24],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "^Create my free parent account$", "value", "Parent Taking Action"]]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 24],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "^Sign up for your teacher account$|^Find your curriculum$", "value", "Parent Taking Action"]]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 24],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "^Contact our team$", "value", "Admin Taking Action"]]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 24],
                "vtp_map": ["list", ["map", "key", "Partner with Prodigy", "value", "School Leaders"],
                    ["map", "key", "Engage your students", "value", "Teachers"],
                    ["map", "key", "Make math fun", "value", "Parents"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 24],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "Make math fun", "value", "Parent Taking Action"]]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 24],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "Engage your students", "value", "Teacher Taking Action"]]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 24],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "Partner with Prodigy", "value", "Admin Taking Action"]]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 24],
                "vtp_map": ["list", ["map", "key", "Student", "value", "Student"]]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 24],
                "vtp_map": ["list", ["map", "key", "Teacher", "value", "Teacher"]]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 24],
                "vtp_map": ["list", ["map", "key", "Parent", "value", "Parent"]]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 24],
                "vtp_map": ["list", ["map", "key", "Admin", "value", "Admin"]]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 34],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*membership.*", "value", "Membership"],
                    ["map", "key", ".*tutoring.*", "value", "Tutoring"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "view"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 60],
                "vtp_defaultValue": "Step 1",
                "vtp_map": ["list", ["map", "key", "wizard_completed_step_1", "value", "Step 2"],
                    ["map", "key", "wizard_completed_step_2", "value", "Step 3"],
                    ["map", "key", "wizard_form_submit", "value", "Form Submit"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "hs-form-data.3.value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "hs-form-data.4.value"
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoTitle",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoStatus",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__cvt_10754089_526"
            }, {
                "function": "__cvt_10754089_1282",
                "vtp_eventID": ["macro", 66]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 34],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*\\\/rebrand\\-parent.*", "value", "Parent"]]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 34],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*\\\/rebrand\\-student.*", "value", "Student"]]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 34],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*\\\/rebrand\\-teacher.*", "value", "Teacher"]]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 34],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*\\\/rebrand\\-admin.*", "value", "Admin"]]
            }, {
                "function": "__cvt_10754089_717"
            }, {
                "function": "__cvt_10754089_1276"
            }, {
                "function": "__cvt_10754089_1277"
            }, {
                "function": "__cvt_10754089_1280",
                "vtp_userValueKey": "userId"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "_fbp"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "_fbc"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "memberPlanDl"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "purchaser_email"
            }, {
                "function": "__awec",
                "vtp_mode": "MANUAL",
                "vtp_email": ["macro", 79],
                "vtp_enableUserDataAutoMode": true
            }, {
                "function": "__cvt_10754089_719"
            }, {
                "function": "__cvt_10754089_1272"
            }, {
                "function": "__cvt_10754089_1274"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user_id"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "allowLinker", "value", "true"],
                    ["map", "fieldName", "customTask", "value", ["macro", 8]]
                ],
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", "2", "dimension", ["macro", 9]],
                    ["map", "index", "4", "dimension", ["macro", 10]],
                    ["map", "index", "5", "dimension", ["macro", 11]],
                    ["map", "index", "7", "dimension", ["macro", 12]],
                    ["map", "index", "8", "dimension", ["macro", 13]],
                    ["map", "index", "9", "dimension", ["macro", 14]],
                    ["map", "index", "10", "dimension", ["macro", 15]],
                    ["map", "index", "12", "dimension", "v3"],
                    ["map", "index", "23", "dimension", ["macro", 17]],
                    ["map", "index", "30", "dimension", ["template", "user id: ", ["macro", 9], " | user-id: ", ["macro", 18]]],
                    ["map", "index", "36", "dimension", ["template", "user id: ", ["macro", 9], " | user-id: ", ["macro", 18]]],
                    ["map", "index", "37", "dimension", ["macro", 43]],
                    ["map", "index", "38", "dimension", ["macro", 44]],
                    ["map", "index", "39", "dimension", ["macro", 46]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-40390561-4",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "userId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "memberTierDl"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 87],
                "vtp_map": ["list", ["map", "key", "1", "value", "LevelUp"],
                    ["map", "key", "2", "value", "Ultimate"]
                ]
            }, {
                "function": "__c",
                "vtp_value": ["template", ["macro", 88], "_", ["macro", 78]]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "memberCategoryDl"
            }, {
                "function": "__c",
                "vtp_value": ["template", ["macro", 90], "_", ["macro", 88], "_", ["macro", 78]]
            }, {
                "function": "__c",
                "vtp_value": ["template", ["macro", 90], "_", ["macro", 78]]
            }, {
                "function": "__c",
                "vtp_value": ["template", ["macro", 90], "_", ["macro", 88]]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "license_id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "multi_product"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "properties.experiment"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "properties.experiment_group"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_category"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_action"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_label"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 25],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*\\\/game-portal\\\/.*", "value", "Game Portal"],
                    ["map", "key", ".*\\\/mythical-epics\\\/.*", "value", "Mythical Epics"],
                    ["map", "key", ".*\\\/game-portal-videos\\\/.*", "value", "Prodigy Game Videos"],
                    ["map", "key", ".*pets.*", "value", "Pets"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "blog-categories"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var c=\"firstCTA\\x3d\",d=document.cookie.split(\";\"),b=0;b\u003Cd.length;b++){for(var a=d[b];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(c))return a.substring(c.length,a.length)}return null})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "category"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "identifier"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 34],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*parent.*", "value", "Parent"],
                    ["map", "key", ".*teacher.*", "value", "Teacher"]
                ]
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollThreshold",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "license_id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "currency"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 90],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "Math|MATH|math", "value", "sx90CLPh7MIDEJv8iogD"],
                    ["map", "key", "English|english|ENGLISH", "value", "rLyGCOTdnMMDEJv8iogD"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 88],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "Ultimate|ULTIMATE|ultimate", "value", "siUaCOfdnMMDEJv8iogD"],
                    ["map", "key", "LEVELUP|LevelUp|Levelup|levelup", "value", "GaQgCOrdnMMDEJv8iogD"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 91],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "MATH_LevelUp_premiumMonthly", "value", "keDPCPqnoMMDEJv8iogD"],
                    ["map", "key", "MATH_Ultimate_premiumMonthly", "value", "hyF3CPenoMMDEJv8iogD"],
                    ["map", "key", "MATH_Ultimate_premiumYearly", "value", "GtV8CP2noMMDEJv8iogD"],
                    ["map", "key", "MATH_LevelUp_premiumYearly", "value", "s-r6CPiooMMDEJv8iogD"],
                    ["map", "key", "MATH_LevelUp_premiumSixMonth", "value", "jYSOCP6ooMMDEJv8iogD"],
                    ["map", "key", "MATH_Ultimate_premiumSixMonth", "value", "CqElCPuooMMDEJv8iogD"],
                    ["map", "key", "ENGLISH_LevelUp_premiumMonthly", "value", "x8ByCISpoMMDEJv8iogD"],
                    ["map", "key", "ENGLISH_Ultimate_premiumMonthly", "value", "o_7yCIGpoMMDEJv8iogD"],
                    ["map", "key", "ENGLISH_Ultimate_premiumYearly", "value", "RBBUCIepoMMDEJv8iogD"],
                    ["map", "key", "ENGLISH_LevelUp_premiumYearly", "value", "AuxGCIqpoMMDEJv8iogD"],
                    ["map", "key", "ENGLISH_Ultimate_premiumSixMonth", "value", "a5qyCI2poMMDEJv8iogD"],
                    ["map", "key", "ENGLISH_LevelUp_premiumSixMonth", "value", "q3qvCJCpoMMDEJv8iogD"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 90],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "Math|MATH|math", "value", "math"],
                    ["map", "key", "English|english|ENGLISH", "value", "english"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 78],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "premiumMonthly", "value", "monthly"],
                    ["map", "key", "premiumYearly", "value", "yearly"],
                    ["map", "key", "premiumSixMonth", "value", "sixmonth"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 88],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "Ultimate|ULTIMATE|ultimate", "value", "ultimate"],
                    ["map", "key", "LEVELUP|LevelUp|Levelup|levelup", "value", "levelup"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 93],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "MATH_LevelUp", "value", "math_levelup"],
                    ["map", "key", "MATH_Ultimate", "value", "math_ultimate"],
                    ["map", "key", "ENGLISH_LevelUp", "value", "english_levelup"],
                    ["map", "key", "ENGLISH_Ultimate", "value", "english_ultimate"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 92],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "MATH_premiumMonthly", "value", "math_monthly"],
                    ["map", "key", "MATH_premiumYearly", "value", "math_yearly"],
                    ["map", "key", "MATH_premiumSixMonth", "value", "math_sixmonth"],
                    ["map", "key", "ENGLISH_premiumMonthly", "value", "english_monthly"],
                    ["map", "key", "ENGLISH_premiumYearly", "value", "english_yearly"],
                    ["map", "key", "ENGLISH_premiumSixMonth", "value", "english_sixmonth"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 89],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "LevelUp_premiumMonthly", "value", "levelup_monthly"],
                    ["map", "key", "Ultimate_premiumMonthly", "value", "ultimate_monthly"],
                    ["map", "key", "Ultimate_premiumYearly", "value", "ultimate_yearly"],
                    ["map", "key", "LevelUp_premiumYearly", "value", "levelup_yearly"],
                    ["map", "key", "LevelUp_premiumSixMonth", "value", "levelup_sixmonth"],
                    ["map", "key", "Ultimate_premiumSixMonth", "value", "ultimate_sixmonth"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 91],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "MATH_LevelUp_premiumMonthly", "value", "math_levelup_monthly"],
                    ["map", "key", "MATH_Ultimate_premiumMonthly", "value", "math_ultimate_monthly"],
                    ["map", "key", "MATH_Ultimate_premiumYearly", "value", "math_ultimate_yearly"],
                    ["map", "key", "MATH_LevelUp_premiumYearly", "value", "math_levelup_yearly"],
                    ["map", "key", "MATH_LevelUp_premiumSixMonth", "value", "math_levelup_sixmonth"],
                    ["map", "key", "MATH_Ultimate_premiumSixMonth", "value", "math_ultimate_sixmonth"],
                    ["map", "key", "ENGLISH_LevelUp_premiumMonthly", "value", "english_levelup_monthly"],
                    ["map", "key", "ENGLISH_Ultimate_premiumMonthly", "value", "english_ultimate_monthly"],
                    ["map", "key", "ENGLISH_Ultimate_premiumYearly", "value", "english_ultimate_yearly"],
                    ["map", "key", "ENGLISH_LevelUp_premiumYearly", "value", "english_levelup_yearly"],
                    ["map", "key", "ENGLISH_Ultimate_premiumSixMonth", "value", "english_ultimate_sixmonth"],
                    ["map", "key", "ENGLISH_LevelUp_premiumSixMonth", "value", "english_levelup_sixmonth"]
                ]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 23], 8, 16], ",a=b.closest(\".lp-code \\x3e div\");if(null!==a){b=a.id;a=a.getAttribute(\"data-section\");if(null!==a)return a;if(void 0!==b)switch(b){case \"pdg-math-hero\":return\"Hero\";case \"testimonial-wrapper\":return\"Testimonials\";case \"pricing-card-update\":return\"Pricing Cards\";case \"mythical-epics\":return\"Mythical Epics\";case \"lj-circles\":return\"Learning Journey Circles\";case \"lj-green-bg\":return\"Learning Journey - Green BG\";case \"exc-tools-section\":return\"Exclusive Tools\";\ncase \"pdg-orange-cta\":return\"Orange CTA\";case \"faq-section\":return\"FAQ\";default:return b}}})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "first-cta-click"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "toggleState"
            }, {
                "function": "__d",
                "vtp_elementId": "segment-script",
                "vtp_attributeName": "data-nonce",
                "vtp_selectorType": "ID"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "firstTimeSignupParent"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 25],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*\\\/premises\\\/.*", "value", "Student Login"],
                    ["map", "key", ".*\\\/parent\\\/.*", "value", "Parent Login"],
                    ["map", "key", ".*\\\/dashboard\\\/.*", "value", "Teacher Login"]
                ]
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "ClassroomCreationFirstTimein90days"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "discount_amount"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "stripe_customer_id"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(window.onpopstate=function(b){b=document.querySelectorAll('[class*\\x3d\"styles__Category-\"]').length;for(var d=document.querySelectorAll('[class*\\x3d\"styles__Category-\"]'),c=[],a=0;a\u003Cb;a++)c.push(d[a].innerText);return c})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "purchase_amount"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "purchased_membership"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "has_previous_account"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "plan"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "tier"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "category"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "cart_item"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return parseInt(window.sessionStorage.pv)})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "id"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "utm_campaign",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "utm_content",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "utm_medium",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "utm_source",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "noOfFloorsCompleted"
            }, {
                "function": "__v",
                "convert_true_to": "question-success",
                "convert_false_to": "question-failure",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "student-question-answered"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "petID"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "petName"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "dungeonName"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "dungeonBossDefeatedName"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "questZoneName"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "completedQuestId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "academyRunName"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "itemType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "itemId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "itemName"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "wheelId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "shopId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "shopType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "shopName"
            }, {
                "function": "__d",
                "vtp_elementSelector": "#district__c-9bf47271-2cad-44ac-a48c-12bbdb37b2ff",
                "vtp_selectorType": "CSS"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user-id"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "defaultPlanId",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "originalLocation"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 39],
                "vtp_map": ["list", ["map", "key", "play.prodigygame.com", "value", "In Game"],
                    ["map", "key", "www.prodigygame.com", "value", "On Site"],
                    ["map", "key", "get.prodigygame.com", "value", "landing page"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "member"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 166],
                "vtp_map": ["list", ["map", "key", "0", "value", "Non-Member"],
                    ["map", "key", "1", "value", "Member"],
                    ["map", "key", "true", "value", "Member"],
                    ["map", "key", "false", "value", "Non-Member"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "totalInCents"
            }, {
                "function": "__cvt_10754089_718"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventModel.user_data.email_test"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventModel.user_data.phone_number_test"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventModel.user_data.address.first_name_test"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventModel.user_data.address.last_name_test"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventModel.user_data.address.city  state(st)  eventModel.user_data.address.region  postal_code(zip)  eventModel.user_data.address.postal_code  country(country)  eventModel.user_data.address.country_test"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventModel.user_data.address.region_test"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventModel.user_data.address.postal_code_test"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventModel.user_data.address.country_test"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "assigned_membership"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "experiment"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "experiment_group"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "payment_type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "unassigned_memberships"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "segmentAnonymousId"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 34],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*\\\/pets\\\/(.*)\\\/", "value", "$1"]]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "OptimizelyExperimentID"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "OptimizelyVariantID"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "optimizely-experiment-name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "optimizely-experiment-variant"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "gtm.element.parentElement.parentElement.parentElement.parentElement.attributes.0.value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "memberPlanDl"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "memberTierDl"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "memberCategoryDl"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-40390561-12",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__cvt_10754089_1280",
                "vtp_userValueKey": "userType"
            }, {
                "function": "__cvt_10754089_1275"
            }, {
                "function": "__cvt_10754089_1276"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "purchaser_name"
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorMessage",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorLineNumber",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.newHistoryState",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__ctv"
            }, {
                "function": "__dbg"
            }, {
                "function": "__r"
            }, {
                "function": "__cid"
            }, {
                "function": "__hid"
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoProvider",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoDuration",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoPercent",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoVisible",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoCurrentTime",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollUnits",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollDirection",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.visibleRatio",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.visibleTime",
                "vtp_dataLayerVersion": 1
            }],
            "tags": [{
                "function": "__html",
                "priority": 9999,
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003Ewindow.dataLayer=window.dataLayer||[];window.dataLayer.push({originalLocation:document.location.protocol+\"\/\/\"+document.location.hostname+document.location.pathname+document.location.search});\u003C\/script\u003E  "],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 423
            }, {
                "function": "__baut",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_c_navTimingApi": false,
                "vtp_tagId": "25041169",
                "vtp_c_storeConvTrackCookies": true,
                "vtp_uetqName": "uetq",
                "vtp_c_disableAutoPageView": false,
                "vtp_c_removeQueryFromUrls": false,
                "vtp_eventType": "PAGE_LOAD",
                "tag_id": 8
            }, {
                "function": "__baut",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_p_currency": "USD",
                "vtp_eventCategory": "Signup",
                "vtp_uetqName": "uetq",
                "vtp_eventType": "CUSTOM",
                "vtp_eventLabel": "BingTR",
                "tag_id": 9
            }, {
                "function": "__baut",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_p_currency": "USD",
                "vtp_eventCategory": "Signup",
                "vtp_uetqName": "uetq",
                "vtp_eventType": "CUSTOM",
                "vtp_eventLabel": "BingPR",
                "tag_id": 10
            }, {
                "function": "__gclidw",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableCrossDomain": true,
                "vtp_enableUrlPassthrough": true,
                "vtp_acceptIncoming": true,
                "vtp_linkerDomains": "get.prodigygame.com, prodigygame.com",
                "vtp_enableCookieOverrides": false,
                "vtp_formDecoration": false,
                "vtp_urlPosition": "query",
                "vtp_enableCrossDomainFeature": true,
                "tag_id": 15
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": true,
                "vtp_cssProvidedEnhancedConversionValue": ["macro", 5],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "822263323",
                "vtp_conversionLabel": "GWIUCPTg7ZUBEJv8iogD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 16
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": true,
                "vtp_cssProvidedEnhancedConversionValue": ["macro", 5],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "822263323",
                "vtp_conversionLabel": "9bgZCOy3jJYBEJv8iogD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 18
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Button Click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "Admin Page Upper Button Click",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 28
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Button Click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "Admin Page Lower Button Click",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 29
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Video Play",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "Admin Page Video Start",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 30
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Video Play",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "Admin Page Video Completion",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 31
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "GA School Leader Lead Submission",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "submit",
                "vtp_eventLabel": "lp-pom-form",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 32
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "822263323",
                "vtp_conversionLabel": "w95yCNj2mJgBEJv8iogD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 41
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": true,
                "vtp_cssProvidedEnhancedConversionValue": ["macro", 5],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "822263323",
                "vtp_conversionLabel": "Ppy6CNfWspgBEJv8iogD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 50
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": true,
                "vtp_cssProvidedEnhancedConversionValue": ["macro", 5],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "822263323",
                "vtp_conversionLabel": "RQ8jCKDPspgBEJv8iogD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 51
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": true,
                "vtp_cssProvidedEnhancedConversionValue": ["macro", 5],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "822263323",
                "vtp_conversionLabel": "uokICKTo1pgBEJv8iogD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 52
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Button Click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "Home Page Watch Video",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 53
            }, {
                "function": "__baut",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_p_currency": "USD",
                "vtp_eventCategory": "Signup",
                "vtp_uetqName": "uetq",
                "vtp_eventType": "CUSTOM",
                "vtp_eventLabel": "BingTP",
                "tag_id": 54
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 31],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 62
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "CTA-click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "Math Coaching Pricing CTA",
                "vtp_eventLabel": ["macro", 33],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 87
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Hubspot Form Submission",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "Successful Lead Submission",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 93
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Form Field Personal Email Entered",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "Admin Personal Email Entered in Form",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 94
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Form Field School Changed",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "School Changed in Form",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 95
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Form Field District Changed",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "District Changed in Form",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 96
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 31],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 103
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Refer Button Click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "Refer Button Click",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 106
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Button Clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "Purchase Button Clicks",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 112
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventValue": "2",
                "vtp_eventCategory": "Register Complete",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "parent-freemium",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 167
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventValue": "20",
                "vtp_eventCategory": "Register Complete",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "teacher-freemium",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 169
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 173
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "session",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "session",
                "vtp_eventLabel": "parent",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 179
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "homepage-nav-click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "nav-click",
                "vtp_eventLabel": ["macro", 33],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 181
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "homepage-trending-banner-click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "cta-click",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 184
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventValue": "2",
                "vtp_eventCategory": "Register Complete",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 35],
                "vtp_eventAction": "parent-freemium",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 187
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Assessment Create",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "First Create",
                "vtp_eventLabel": ["macro", 36],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 197
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "parent",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 35],
                "vtp_eventAction": "child-attach",
                "vtp_eventLabel": "first-time",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 201
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 0, 0]],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "page", "value", ["macro", 37]],
                    ["map", "fieldName", "location", "value", ["macro", 38]]
                ],
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 31],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 203
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "CTA-click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "Request A Free Session CTA",
                "vtp_eventLabel": ["macro", 33],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 205
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "CTA-click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "See Pricing CTA",
                "vtp_eventLabel": ["macro", 33],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 207
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "reactivation",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "teacher",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 209
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "video",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "play",
                "vtp_eventLabel": ["macro", 16],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 217
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 31],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 222
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": true,
                "vtp_cssProvidedEnhancedConversionValue": ["macro", 5],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "822263323",
                "vtp_conversionLabel": "REauCOe1yd0BEJv8iogD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 229
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "teacher",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "onboarding",
                "vtp_eventLabel": "create-class",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 237
            }, {
                "function": "__bzi",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_id": "2390586",
                "tag_id": 238
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_event_type": "PageView",
                "vtp_twitter_pixel_id": "nzhds",
                "tag_id": 239
            }, {
                "function": "__sp",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_enableDynamicRemarketing": false,
                "vtp_customParams": ["list", ["map", "key", "page_w_fragment_query", "value", ["macro", 16]]],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "822263323",
                "vtp_customParamsFormat": "USER_SPECIFIED",
                "vtp_rdp": false,
                "vtp_enableOgtRmktParams": true,
                "vtp_enableUserId": true,
                "vtp_url": ["macro", 6],
                "vtp_enableRdpCheckbox": true,
                "vtp_enableConversionLinkingSettings": true,
                "tag_id": 244
            }, {
                "function": "__hjtc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_hotjar_site_id": "2022214",
                "tag_id": 246
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 31],
                "vtp_dimension": ["list", ["map", "index", "22", "dimension", ["template", ["macro", 25], " - ", ["macro", 41]]]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 248
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "publicsite",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 42],
                "vtp_eventAction": "nav-link-click",
                "vtp_eventLabel": ["macro", 24],
                "vtp_dimension": ["list", ["map", "index", "12", "dimension", "v1"]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 253
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 255
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 272
            }, {
                "function": "__gaawc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_fieldsToSet": ["list", ["map", "name", "page_clean", "value", ["template", ["macro", 39],
                    ["macro", 25]
                ]]],
                "vtp_sendPageView": true,
                "vtp_enableSendToServerContainer": false,
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": false,
                "tag_id": 274
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "parent: parent-app-split-control",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "parent-app-split-control",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 282
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "parent: parent-app-split-test",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "parent-app-split-test",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 284
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 31],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 286
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "student: student-ingame-split-control",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "student-ingame-split-control",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 324
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "student: student-ingame-split-test",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "student-ingame-split-test",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 326
            }, {
                "function": "__hjtc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_hotjar_site_id": "2150632",
                "tag_id": 328
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "infobar-cta",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "click",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 332
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "classroom activation",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "teacher-class-created",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 349
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "onboarding",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "teacher-onboarding-completed",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 351
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "assessments",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "teacher-assessment",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 352
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "teacher parent attach",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "teacher-parent-referral",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 353
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "reports",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "teacher-report-view",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 354
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "822263323",
                "vtp_conversionLabel": "aNAPCJHSwfsBEJv8iogD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 361
            }, {
                "function": "__bzi",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_id": "2992218",
                "tag_id": 363
            }, {
                "function": "__bzi",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_id": "2992218",
                "tag_id": 364
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "CTA Click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 47],
                "vtp_eventAction": ["macro", 24],
                "vtp_eventLabel": ["macro", 25],
                "vtp_dimension": ["list", ["map", "index", "27", "dimension", ["macro", 48]],
                    ["map", "index", "28", "dimension", ["macro", 49]],
                    ["map", "index", "29", "dimension", ["macro", 50]]
                ],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 378
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Support You Section",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 47],
                "vtp_eventAction": ["macro", 51],
                "vtp_eventLabel": ["macro", 24],
                "vtp_dimension": ["list", ["map", "index", "27", "dimension", ["macro", 52]],
                    ["map", "index", "28", "dimension", ["macro", 53]],
                    ["map", "index", "29", "dimension", ["macro", 54]]
                ],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 388
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Self Identifier",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 47],
                "vtp_eventAction": "Create Account",
                "vtp_eventLabel": ["macro", 24],
                "vtp_dimension": ["list", ["map", "index", "13", "dimension", ["macro", 55]],
                    ["map", "index", "14", "dimension", ["macro", 56]],
                    ["map", "index", "15", "dimension", ["macro", 57]],
                    ["map", "index", "16", "dimension", ["macro", 58]]
                ],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 397
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Product CTA",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 47],
                "vtp_eventAction": ["macro", 59],
                "vtp_eventLabel": ["macro", 24],
                "vtp_dimension": ["list", ["map", "index", "27", "dimension", "Parent Taking Action"]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 402
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Math Tutor",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 47],
                "vtp_eventAction": "Funnel",
                "vtp_eventLabel": ["macro", 61],
                "vtp_dimension": ["list", ["map", "index", "27", "dimension", "Parent Taking Action"]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 413
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Admin Form Submit",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 47],
                "vtp_eventAction": ["template", "School: ", ["macro", 62]],
                "vtp_eventLabel": ["template", "District: ", ["macro", 63]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 429
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "PDF Download",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 47],
                "vtp_eventAction": ["macro", 34],
                "vtp_eventLabel": ["macro", 25],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 431
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Membership Video",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 47],
                "vtp_eventAction": ["macro", 39],
                "vtp_eventLabel": ["macro", 65],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 435
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Outbound Link Click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 47],
                "vtp_eventAction": ["macro", 34],
                "vtp_eventLabel": ["macro", 25],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 437
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Unbounce Form Submit",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 47],
                "vtp_eventAction": ["macro", 25],
                "vtp_eventLabel": ["template", "variant - ", ["macro", 41]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 439
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 441
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Registration",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 47],
                "vtp_eventAction": "Teacher",
                "vtp_eventLabel": ["macro", 9],
                "vtp_dimension": ["list", ["map", "index", "33", "dimension", "Registered Teacher"],
                    ["map", "index", "35", "dimension", ["macro", 15]],
                    ["map", "index", "65", "dimension", ["macro", 67]]
                ],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 451
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Registration",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 47],
                "vtp_eventAction": "Parent",
                "vtp_eventLabel": ["macro", 9],
                "vtp_dimension": ["list", ["map", "index", "32", "dimension", "Registered Parent"],
                    ["map", "index", "35", "dimension", ["macro", 15]],
                    ["map", "index", "65", "dimension", ["macro", 67]]
                ],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 453
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Self Identifier",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 47],
                "vtp_eventAction": "Create Account",
                "vtp_eventLabel": ["template", ["macro", 68],
                    ["macro", 69],
                    ["macro", 70],
                    ["macro", 71]
                ],
                "vtp_dimension": ["list", ["map", "index", "13", "dimension", ["macro", 69]],
                    ["map", "index", "14", "dimension", ["macro", 70]],
                    ["map", "index", "15", "dimension", ["macro", 68]],
                    ["map", "index", "16", "dimension", ["macro", 71]]
                ],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 471
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "822263323",
                "vtp_conversionLabel": "T_xYCILK64wCEJv8iogD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 479
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "822263323",
                "vtp_conversionLabel": "GUd_CIPjxYwCEJv8iogD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 481
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "822263323",
                "vtp_conversionLabel": "wtC9CP7C54wCEJv8iogD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 483
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "822263323",
                "vtp_conversionLabel": "pFtNCNvV64wCEJv8iogD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 485
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "822263323",
                "vtp_conversionLabel": "2dR5CKfI54wCEJv8iogD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 487
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "822263323",
                "vtp_conversionLabel": "zzuuCM_Y64wCEJv8iogD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 489
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "Subscribe",
                "vtp_eventParameters": ["list", ["map", "name", "transport_url", "value", "https:\/\/track.prodigygame.com"],
                    ["map", "name", "first_party_collection", "value", "true"],
                    ["map", "name", "event_time", "value", ["macro", 72]],
                    ["map", "name", "item_name", "value", "parent-registration"],
                    ["map", "name", "quantity", "value", "1"],
                    ["map", "name", "x-fb-ud-subscription_id", "value", "parent registration"],
                    ["map", "name", "event_id", "value", ["macro", 66]],
                    ["map", "name", "user_data.email_address", "value", ["macro", 4]],
                    ["map", "name", "user_data.address.first_name", "value", ["macro", 73]],
                    ["map", "name", "user_data.address.last_name", "value", ["macro", 74]],
                    ["map", "name", "x-fb-ud-external_id", "value", ["macro", 75]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 513
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "Subscribe",
                "vtp_eventParameters": ["list", ["map", "name", "transport_url", "value", "https:\/\/track.prodigygame.com"],
                    ["map", "name", "first_party_collection", "value", "true"],
                    ["map", "name", "event_time", "value", ["macro", 72]],
                    ["map", "name", "item_name", "value", "teacher-registration"],
                    ["map", "name", "quantity", "value", "1"],
                    ["map", "name", "x-fb-ud-subscription_id", "value", "teacher registration"],
                    ["map", "name", "event_id", "value", ["macro", 66]],
                    ["map", "name", "user_data.email_address", "value", ["macro", 4]],
                    ["map", "name", "user_data.address.first_name", "value", ["macro", 73]],
                    ["map", "name", "user_data.address.last_name", "value", ["macro", 74]],
                    ["map", "name", "x-fb-ud-external_id", "value", ["macro", 75]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 517
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_eventName": "add_to_cart",
                "vtp_eventParameters": ["list", ["map", "name", "transport_url", "value", "https:\/\/track.prodigygame.com"],
                    ["map", "name", "x-fb-ck-fbp", "value", ["macro", 76]],
                    ["map", "name", "x-fb-ck-fbc", "value", ["macro", 77]],
                    ["map", "name", "event_time", "value", ["macro", 72]],
                    ["map", "name", "x-fb-cd-content_ids", "value", "Add To Cart"],
                    ["map", "name", "event_id", "value", ["macro", 66]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 522
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "teacher-registration",
                "vtp_eventParameters": ["list", ["map", "name", "transport_url", "value", "https:\/\/track.prodigygame.com"],
                    ["map", "name", "x-fb-ck-fbp", "value", ["macro", 76]],
                    ["map", "name", "x-fb-ck-fbc", "value", ["macro", 77]],
                    ["map", "name", "first_party_collection", "value", "true"],
                    ["map", "name", "event_time", "value", ["macro", 72]],
                    ["map", "name", "item_name", "value", "teacher-registration"],
                    ["map", "name", "quantity", "value", "1"],
                    ["map", "name", "event_id", "value", ["macro", 66]],
                    ["map", "name", "user_data.email_address", "value", ["macro", 4]],
                    ["map", "name", "user_data.address.first_name", "value", ["macro", 73]],
                    ["map", "name", "user_data.address.last_name", "value", ["macro", 74]],
                    ["map", "name", "x-fb-ud-external_id", "value", ["macro", 75]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 523
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "parent-registration",
                "vtp_eventParameters": ["list", ["map", "name", "transport_url", "value", "https:\/\/track.prodigygame.com"],
                    ["map", "name", "x-fb-ck-fbp", "value", ["macro", 76]],
                    ["map", "name", "x-fb-ck-fbc", "value", ["macro", 77]],
                    ["map", "name", "first_party_collection", "value", "true"],
                    ["map", "name", "event_time", "value", ["macro", 72]],
                    ["map", "name", "item_name", "value", "parent-registration"],
                    ["map", "name", "quantity", "value", "1"],
                    ["map", "name", "event_id", "value", ["macro", 66]],
                    ["map", "name", "user_data.email_address", "value", ["macro", 4]],
                    ["map", "name", "user_data.address.first_name", "value", ["macro", 73]],
                    ["map", "name", "user_data.address.last_name", "value", ["macro", 74]],
                    ["map", "name", "x-fb-ud-external_id", "value", ["macro", 75]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 524
            }, {
                "function": "__baut",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_p_currency": "USD",
                "vtp_eventCategory": "Purchase",
                "vtp_uetqName": "uetq",
                "vtp_customEventAction": "6-Month Membership",
                "vtp_eventType": "CUSTOM",
                "vtp_eventLabel": "Bing6MMP",
                "tag_id": 556
            }, {
                "function": "__baut",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_p_currency": "USD",
                "vtp_eventCategory": "Purchase",
                "vtp_uetqName": "uetq",
                "vtp_customEventAction": "Monthly Membership",
                "vtp_eventType": "CUSTOM",
                "vtp_eventLabel": "BingMMP",
                "tag_id": 557
            }, {
                "function": "__baut",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_p_currency": "USD",
                "vtp_eventCategory": "Purchase",
                "vtp_uetqName": "uetq",
                "vtp_customEventAction": "Yearly Membership",
                "vtp_eventType": "CUSTOM",
                "vtp_eventLabel": "BingYMP",
                "tag_id": 559
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": true,
                "vtp_cssProvidedEnhancedConversionValue": ["macro", 80],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "744949782",
                "vtp_conversionLabel": "V5glCNCUtswBEJaQnOMC",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 564
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "purchase",
                "vtp_eventParameters": ["list", ["map", "name", "transport_url", "value", "https:\/\/track.prodigygame.com"],
                    ["map", "name", "x-fb-ck-fbp", "value", ["macro", 76]],
                    ["map", "name", "x-fb-ck-fbc", "value", ["macro", 77]],
                    ["map", "name", "first_party_collection", "value", "true"],
                    ["map", "name", "event_time", "value", ["macro", 72]],
                    ["map", "name", "value", "value", ["macro", 81]],
                    ["map", "name", "x-fb-cd-content_ids", "value", "Six-month Membership"],
                    ["map", "name", "event_id", "value", ["macro", 66]],
                    ["map", "name", "currency", "value", "CAD"],
                    ["map", "name", "user_data.email_address", "value", ["macro", 79]],
                    ["map", "name", "user_data.address.first_name", "value", ["macro", 82]],
                    ["map", "name", "user_data.address.last_name", "value", ["macro", 83]],
                    ["map", "name", "x-fb-ud-external_id", "value", ["macro", 84]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 574
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "membership-purchase-monthly",
                "vtp_eventParameters": ["list", ["map", "name", "LTV", "value", "72.4"],
                    ["map", "name", "single-purchase-value", "value", "8.95"],
                    ["map", "name", "transport_url", "value", "https:\/\/track.prodigygame.com"],
                    ["map", "name", "x-fb-ck-fbp", "value", ["macro", 76]],
                    ["map", "name", "x-fb-ck-fbc", "value", ["macro", 77]],
                    ["map", "name", "first_party_collection", "value", "true"],
                    ["map", "name", "event_time", "value", ["macro", 72]],
                    ["map", "name", "value", "value", ["macro", 81]],
                    ["map", "name", "item_name", "value", "membership-monthly"],
                    ["map", "name", "quantity", "value", "1"],
                    ["map", "name", "x-fb-cd-content_ids", "value", "Monthly Membership"],
                    ["map", "name", "event_id", "value", ["macro", 66]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 577
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "purchase",
                "vtp_eventParameters": ["list", ["map", "name", "transport_url", "value", "https:\/\/track.prodigygame.com"],
                    ["map", "name", "x-fb-ck-fbp", "value", ["macro", 76]],
                    ["map", "name", "x-fb-ck-fbc", "value", ["macro", 77]],
                    ["map", "name", "first_party_collection", "value", "true"],
                    ["map", "name", "event_time", "value", ["macro", 72]],
                    ["map", "name", "value", "value", ["macro", 81]],
                    ["map", "name", "x-fb-cd-content_ids", "value", "Monthly Membership"],
                    ["map", "name", "event_id", "value", ["macro", 66]],
                    ["map", "name", "currency", "value", "CAD"],
                    ["map", "name", "user_data.email_address", "value", ["macro", 79]],
                    ["map", "name", "user_data.address.first_name", "value", ["macro", 82]],
                    ["map", "name", "user_data.address.last_name", "value", ["macro", 83]],
                    ["map", "name", "x-fb-ud-external_id", "value", ["macro", 84]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 578
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "purchase",
                "vtp_eventParameters": ["list", ["map", "name", "transport_url", "value", "https:\/\/track.prodigygame.com"],
                    ["map", "name", "x-fb-ck-fbp", "value", ["macro", 76]],
                    ["map", "name", "x-fb-ck-fbc", "value", ["macro", 77]],
                    ["map", "name", "first_party_collection", "value", "true"],
                    ["map", "name", "event_time", "value", ["macro", 72]],
                    ["map", "name", "value", "value", ["macro", 81]],
                    ["map", "name", "x-fb-cd-content_ids", "value", "Yearly Membership"],
                    ["map", "name", "event_id", "value", ["macro", 66]],
                    ["map", "name", "currency", "value", "USD"],
                    ["map", "name", "user_data.email_address", "value", ["macro", 79]],
                    ["map", "name", "user_data.address.first_name", "value", ["macro", 82]],
                    ["map", "name", "user_data.address.last_name", "value", ["macro", 83]],
                    ["map", "name", "x-fb-ud-external_id", "value", ["macro", 84]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 579
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "membership-purchase-yearly",
                "vtp_eventParameters": ["list", ["map", "name", "transport_url", "value", "https:\/\/track.prodigygame.com"],
                    ["map", "name", "x-fb-ck-fbp", "value", ["macro", 76]],
                    ["map", "name", "x-fb-ck-fbc", "value", ["macro", 77]],
                    ["map", "name", "first_party_collection", "value", "true"],
                    ["map", "name", "event_time", "value", ["macro", 72]],
                    ["map", "name", "value", "value", ["macro", 81]],
                    ["map", "name", "quantity", "value", "1"],
                    ["map", "name", "x-fb-cd-content_ids", "value", "Yearly Membership"],
                    ["map", "name", "event_id", "value", ["macro", 66]],
                    ["map", "name", "currency", "value", "CAD"]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 580
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": true,
                "vtp_cssProvidedEnhancedConversionValue": ["macro", 80],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "744949782",
                "vtp_conversionLabel": "SHZ7CMGGqcwBEJaQnOMC",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 582
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": true,
                "vtp_cssProvidedEnhancedConversionValue": ["macro", 80],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "744949782",
                "vtp_conversionLabel": "8R6yCNGbmswBEJaQnOMC",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 583
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventValue": ["macro", 81],
                "vtp_eventCategory": "Segment - Membership",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 85],
                "vtp_eventAction": "Purchase",
                "vtp_eventLabel": "sixMonths",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 584
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventValue": ["macro", 81],
                "vtp_eventCategory": "Segment - Membership",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 85],
                "vtp_eventAction": "Purchase",
                "vtp_eventLabel": "Monthly",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 585
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventValue": ["macro", 81],
                "vtp_eventCategory": "Segment - Membership",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 85],
                "vtp_eventAction": "Purchase",
                "vtp_eventLabel": "Yearly",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 586
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": true,
                "vtp_cssProvidedEnhancedConversionValue": ["macro", 80],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "822263323",
                "vtp_conversionLabel": "LFDiCKTGjJYBEJv8iogD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 587
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Purchase",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "6-Month Membership GTM",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 588
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": true,
                "vtp_cssProvidedEnhancedConversionValue": ["macro", 80],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "822263323",
                "vtp_conversionLabel": "UrcuCPjAjJYBEJv8iogD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 589
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Purchase",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "Monthly Membership GTM",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 590
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": true,
                "vtp_cssProvidedEnhancedConversionValue": ["macro", 80],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "822263323",
                "vtp_conversionLabel": "03_RCLfl_5UBEJv8iogD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 591
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Purchase",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "Yearly Membership GTM",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 592
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": true,
                "vtp_cssProvidedEnhancedConversionValue": ["macro", 5],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "822263323",
                "vtp_conversionLabel": "PWFVCN_RzeUCEJv8iogD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 616
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "TeacherLogin",
                "vtp_eventParameters": ["list", ["map", "name", "transport_url", "value", "https:\/\/track.prodigygame.com"],
                    ["map", "name", "x-fb-ck-fbp", "value", ["macro", 76]],
                    ["map", "name", "x-fb-ck-fbc", "value", ["macro", 77]],
                    ["map", "name", "first_party_collection", "value", "true"],
                    ["map", "name", "event_time", "value", ["macro", 72]],
                    ["map", "name", "item_name", "value", "TeacherLogin"],
                    ["map", "name", "quantity", "value", "1"],
                    ["map", "name", "event_id", "value", ["macro", 66]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 634
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "ClassroomCreation",
                "vtp_eventParameters": ["list", ["map", "name", "transport_url", "value", "https:\/\/track.prodigygame.com"],
                    ["map", "name", "x-fb-ck-fbp", "value", ["macro", 76]],
                    ["map", "name", "x-fb-ck-fbc", "value", ["macro", 77]],
                    ["map", "name", "first_party_collection", "value", "true"],
                    ["map", "name", "event_time", "value", ["macro", 72]],
                    ["map", "name", "item_name", "value", "ClassroomCreation"],
                    ["map", "name", "quantity", "value", "1"],
                    ["map", "name", "event_id", "value", ["macro", 66]],
                    ["map", "name", "lead_id", "value", ["macro", 86]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 638
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": true,
                "vtp_cssProvidedEnhancedConversionValue": ["macro", 80],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "822263323",
                "vtp_conversionLabel": "DD6CCIOcju8CEJv8iogD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 639
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Teacher Classroom Create",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 47],
                "vtp_eventAction": "First Time in 90 Days",
                "vtp_eventLabel": ["template", ["macro", 66], " - ", ["macro", 72]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 655
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "Segment",
                "vtp_useGA4SchemaForEcommerce": false,
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 31],
                "vtp_eventAction": ["template", "Purchase - ", ["macro", 88]],
                "vtp_eventLabel": ["macro", 78],
                "vtp_dimension": ["list", ["map", "index", "53", "dimension", ["macro", 89]],
                    ["map", "index", "52", "dimension", ["macro", 91]],
                    ["map", "index", "51", "dimension", ["macro", 92]],
                    ["map", "index", "50", "dimension", ["macro", 93]],
                    ["map", "index", "49", "dimension", ["macro", 88]],
                    ["map", "index", "48", "dimension", ["macro", 78]],
                    ["map", "index", "47", "dimension", ["macro", 90]],
                    ["map", "index", "54", "dimension", ["macro", 2]],
                    ["map", "index", "55", "dimension", ["macro", 94]],
                    ["map", "index", "56", "dimension", ["macro", 95]],
                    ["map", "index", "58", "dimension", ["macro", 96]],
                    ["map", "index", "59", "dimension", ["macro", 97]]
                ],
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 688
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_eventValue": ["macro", 98],
                "vtp_eventCategory": ["macro", 99],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 31],
                "vtp_eventAction": ["macro", 100],
                "vtp_eventLabel": ["macro", 101],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 699
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Scroll Tracking",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 31],
                "vtp_eventAction": "Blog",
                "vtp_eventLabel": "75%",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 778
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": ["template", "Game Portal - ", ["macro", 102]],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 31],
                "vtp_eventAction": "Button Click",
                "vtp_eventLabel": ["macro", 24],
                "vtp_dimension": ["list", ["map", "index", "40", "dimension", "Game Portal - User"],
                    ["map", "index", "41", "dimension", "Game Portal - Session"]
                ],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 788
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 791
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 793
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 795
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 798
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 801
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Blog Category Seen",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 47],
                "vtp_eventAction": ["macro", 103],
                "vtp_eventLabel": ["macro", 25],
                "vtp_dimension": ["list", ["map", "index", "42", "dimension", ["macro", 103]],
                    ["map", "index", "43", "dimension", ["macro", 103]]
                ],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 809
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventValue": ["macro", 81],
                "vtp_eventCategory": "Membership",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 31],
                "vtp_eventAction": "Purchase",
                "vtp_eventLabel": "Yearly",
                "vtp_dimension": ["list", ["map", "index", "45", "dimension", ["macro", 104]]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 815
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventValue": ["macro", 81],
                "vtp_eventCategory": "Membership",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 31],
                "vtp_eventAction": "Purchase",
                "vtp_eventLabel": "Monthly",
                "vtp_dimension": ["list", ["map", "index", "45", "dimension", ["macro", 104]]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 816
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventValue": ["macro", 81],
                "vtp_eventCategory": "Membership",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 31],
                "vtp_eventAction": "Purchase",
                "vtp_eventLabel": "sixMonths",
                "vtp_dimension": ["list", ["map", "index", "45", "dimension", ["macro", 104]]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 817
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Membership Buy Now Click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 31],
                "vtp_eventAction": ["macro", 105],
                "vtp_eventLabel": ["macro", 106],
                "vtp_dimension": ["list", ["map", "index", "44", "dimension", ["template", "Clicked CTA - ", ["macro", 106], " - ", ["macro", 105], " - ", ["macro", 25]]]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 836
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Registration Signup Link",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 31],
                "vtp_eventAction": ["macro", 107],
                "vtp_eventLabel": ["macro", 24],
                "vtp_dimension": ["list", ["map", "index", "44", "dimension", ["template", "Registration CTA - ", ["macro", 24], " - ", ["macro", 25]]]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 841
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "consent": ["list", "analytics_storage"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "CTA Click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 31],
                "vtp_eventAction": ["macro", 24],
                "vtp_eventLabel": ["template", ["macro", 25], " - Scroll Depth: ", ["macro", 108]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 853
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "consent": ["list", "analytics_storage"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "First CTA Click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 31],
                "vtp_eventAction": ["macro", 24],
                "vtp_eventLabel": ["macro", 25],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 861
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_orderId": ["macro", 109],
                "vtp_enableProductReporting": false,
                "vtp_cssProvidedEnhancedConversionValue": ["macro", 80],
                "vtp_enableShippingData": false,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_conversionValue": ["macro", 81],
                "vtp_enableEnhancedConversion": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "822263323",
                "vtp_currencyCode": ["macro", 110],
                "vtp_conversionLabel": ["macro", 111],
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 895
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_orderId": ["macro", 109],
                "vtp_enableProductReporting": false,
                "vtp_cssProvidedEnhancedConversionValue": ["macro", 80],
                "vtp_enableShippingData": false,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_conversionValue": ["macro", 81],
                "vtp_enableEnhancedConversion": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "822263323",
                "vtp_currencyCode": ["macro", 110],
                "vtp_conversionLabel": ["macro", 112],
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 896
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_orderId": ["macro", 109],
                "vtp_enableProductReporting": false,
                "vtp_cssProvidedEnhancedConversionValue": ["macro", 80],
                "vtp_enableShippingData": false,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_conversionValue": ["macro", 81],
                "vtp_enableEnhancedConversion": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "822263323",
                "vtp_currencyCode": ["macro", 110],
                "vtp_conversionLabel": ["macro", 113],
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 897
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": ["macro", 114],
                "vtp_eventParameters": ["list", ["map", "name", "transport_url", "value", "https:\/\/track.prodigygame.com"],
                    ["map", "name", "event_time", "value", ["macro", 72]],
                    ["map", "name", "value", "value", ["macro", 81]],
                    ["map", "name", "event_id", "value", ["macro", 66]],
                    ["map", "name", "currency", "value", ["macro", 110]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 906
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": ["macro", 115],
                "vtp_eventParameters": ["list", ["map", "name", "transport_url", "value", "https:\/\/track.prodigygame.com"],
                    ["map", "name", "event_time", "value", ["macro", 72]],
                    ["map", "name", "value", "value", ["macro", 81]],
                    ["map", "name", "event_id", "value", ["macro", 66]],
                    ["map", "name", "currency", "value", ["macro", 110]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 907
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": ["macro", 116],
                "vtp_eventParameters": ["list", ["map", "name", "transport_url", "value", "https:\/\/track.prodigygame.com"],
                    ["map", "name", "event_time", "value", ["macro", 72]],
                    ["map", "name", "value", "value", ["macro", 81]],
                    ["map", "name", "event_id", "value", ["macro", 66]],
                    ["map", "name", "currency", "value", ["macro", 110]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 908
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": ["macro", 117],
                "vtp_eventParameters": ["list", ["map", "name", "transport_url", "value", "https:\/\/track.prodigygame.com"],
                    ["map", "name", "event_time", "value", ["macro", 72]],
                    ["map", "name", "value", "value", ["macro", 81]],
                    ["map", "name", "event_id", "value", ["macro", 66]],
                    ["map", "name", "currency", "value", ["macro", 110]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 909
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": ["macro", 118],
                "vtp_eventParameters": ["list", ["map", "name", "transport_url", "value", "https:\/\/track.prodigygame.com"],
                    ["map", "name", "event_time", "value", ["macro", 72]],
                    ["map", "name", "value", "value", ["macro", 81]],
                    ["map", "name", "event_id", "value", ["macro", 66]],
                    ["map", "name", "currency", "value", ["macro", 110]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 910
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": ["macro", 119],
                "vtp_eventParameters": ["list", ["map", "name", "transport_url", "value", "https:\/\/track.prodigygame.com"],
                    ["map", "name", "event_time", "value", ["macro", 72]],
                    ["map", "name", "value", "value", ["macro", 81]],
                    ["map", "name", "event_id", "value", ["macro", 66]],
                    ["map", "name", "currency", "value", ["macro", 110]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 911
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": ["macro", 120],
                "vtp_eventParameters": ["list", ["map", "name", "transport_url", "value", "https:\/\/track.prodigygame.com"],
                    ["map", "name", "event_time", "value", ["macro", 72]],
                    ["map", "name", "value", "value", ["macro", 81]],
                    ["map", "name", "event_id", "value", ["macro", 66]],
                    ["map", "name", "currency", "value", ["macro", 110]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 912
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 934
            }, {
                "function": "__pntr",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_setCustomParams": false,
                "vtp_tagId": "2615536386153",
                "vtp_eventName": "pagevisit",
                "tag_id": 1103
            }, {
                "function": "__pntr",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_setCustomParams": false,
                "vtp_tagId": "2615536386153",
                "vtp_eventName": "signup",
                "vtp_lead_type": "Teacher",
                "tag_id": 1104
            }, {
                "function": "__pntr",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_setCustomParams": false,
                "vtp_tagId": "2615536386153",
                "vtp_eventName": "checkout",
                "tag_id": 1105
            }, {
                "function": "__pntr",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_setCustomParams": false,
                "vtp_tagId": "2615536386153",
                "vtp_eventName": "checkout",
                "tag_id": 1106
            }, {
                "function": "__pntr",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_setCustomParams": false,
                "vtp_tagId": "2615536386153",
                "vtp_eventName": "checkout",
                "tag_id": 1107
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Membership CTA Click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 31],
                "vtp_eventAction": ["macro", 34],
                "vtp_eventLabel": ["template", ["macro", 25], " - ", ["macro", 24]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 1109
            }, {
                "function": "__paused",
                "vtp_originalTagType": "gaawe",
                "tag_id": 1111
            }, {
                "function": "__cvt_10754089_235",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_event_type": "PAGE_VIEW",
                "vtp_pixel_id": "412aa9f7-a7c7-403a-bb21-6f69218ada3a",
                "vtp_page_url": ["macro", 6],
                "tag_id": 1112
            }, {
                "function": "__cvt_10754089_235",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_event_type": "SIGN_UP",
                "vtp_pixel_id": "412aa9f7-a7c7-403a-bb21-6f69218ada3a",
                "vtp_page_url": ["macro", 6],
                "tag_id": 1113
            }, {
                "function": "__cvt_10754089_235",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_event_type": "PURCHASE",
                "vtp_pixel_id": "412aa9f7-a7c7-403a-bb21-6f69218ada3a",
                "vtp_page_url": ["macro", 6],
                "tag_id": 1114
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "landing page link click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 31],
                "vtp_eventAction": ["macro", 121],
                "vtp_eventLabel": ["template", ["macro", 24], " - ", ["macro", 34]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 1117
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "landing page faq click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 31],
                "vtp_eventAction": ["macro", 24],
                "vtp_eventLabel": ["macro", 34],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 1119
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "self_identifier",
                "vtp_eventParameters": ["list", ["map", "name", "identifier", "value", ["macro", 106]],
                    ["map", "name", "click_text", "value", ["macro", 24]],
                    ["map", "name", "click_url", "value", ["macro", 34]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1128
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "consent": ["list", "analytics_storage"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_global_cta",
                "vtp_eventParameters": ["list", ["map", "name", "page_path", "value", ["macro", 25]],
                    ["map", "name", "click_text", "value", ["macro", 24]],
                    ["map", "name", "click_url", "value", ["macro", 34]],
                    ["map", "name", "scroll_depth", "value", ["template", ["macro", 108], "%"]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1130
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "consent": ["list", "analytics_storage"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_first_cta",
                "vtp_eventParameters": ["list", ["map", "name", "first_cta_click", "value", ["macro", 122]],
                    ["map", "name", "click_text", "value", ["macro", 24]],
                    ["map", "name", "page_path", "value", ["macro", 25]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1131
            }, {
                "function": "__paused",
                "vtp_originalTagType": "gaawe",
                "tag_id": 1133
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_membership",
                "vtp_eventParameters": ["list", ["map", "name", "click_text", "value", ["macro", 24]],
                    ["map", "name", "click_url", "value", ["macro", 34]],
                    ["map", "name", "page_path", "value", ["macro", 25]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1134
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_admin_page_lower_button",
                "vtp_eventParameters": ["list", ["map", "name", "click_text", "value", ["macro", 24]]],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1135
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_landing_page_link",
                "vtp_eventParameters": ["list", ["map", "name", "click_text", "value", ["macro", 24]],
                    ["map", "name", "click_url", "value", ["macro", 34]],
                    ["map", "name", "page_path", "value", ["macro", 25]],
                    ["map", "name", "page_url", "value", ["macro", 16]],
                    ["map", "name", "landing_page_link_location", "value", ["macro", 121]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1136
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_landing_page_faq",
                "vtp_eventParameters": ["list", ["map", "name", "click_text", "value", ["macro", 24]],
                    ["map", "name", "click_url", "value", ["macro", 34]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1137
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_game_portal_button",
                "vtp_eventParameters": ["list", ["map", "name", "click_text", "value", ["macro", 24]],
                    ["map", "name", "click_url", "value", ["macro", 34]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1138
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_buy_now_membership",
                "vtp_eventParameters": ["list", ["map", "name", "identifier", "value", ["macro", 106]],
                    ["map", "name", "page_path", "value", ["macro", 25]],
                    ["map", "name", "page_url", "value", ["macro", 16]],
                    ["map", "name", "membership_info_category", "value", ["macro", 90]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1139
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_admin_upper_button",
                "vtp_eventParameters": ["list", ["map", "name", "click_text", "value", ["macro", 24]],
                    ["map", "name", "click_url", "value", ["macro", 34]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1140
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_infobar",
                "vtp_eventParameters": ["list", ["map", "name", "click_text", "value", ["macro", 24]],
                    ["map", "name", "click_url", "value", ["macro", 34]],
                    ["map", "name", "page_path", "value", ["macro", 25]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1141
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_nav_link",
                "vtp_eventParameters": ["list", ["map", "name", "click_text", "value", ["macro", 24]]],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1142
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_homepage_nav",
                "vtp_eventParameters": ["list", ["map", "name", "click_id", "value", ["macro", 33]],
                    ["map", "name", "click_text", "value", ["macro", 24]],
                    ["map", "name", "click_url", "value", ["macro", 34]],
                    ["map", "name", "page_url", "value", ["macro", 16]],
                    ["map", "name", "page_path", "value", ["macro", 25]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1143
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_homepage_trending_banner",
                "vtp_eventParameters": ["list", ["map", "name", "click_text", "value", ["macro", 24]]],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1144
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_landing_page_pricing_cta",
                "vtp_eventParameters": ["list", ["map", "name", "clik_text", "value", ["macro", 24]],
                    ["map", "name", "click_url", "value", ["macro", 34]],
                    ["map", "name", "page_path", "value", ["macro", 25]],
                    ["map", "name", "page_url", "value", ["macro", 16]],
                    ["map", "name", "click_id", "value", ["macro", 33]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1145
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_partnership_refer_button",
                "vtp_eventParameters": ["list", ["map", "name", "click_text", "value", ["macro", 24]],
                    ["map", "name", "click_url", "value", ["macro", 34]],
                    ["map", "name", "page_path", "value", ["macro", 25]],
                    ["map", "name", "page_url", "value", ["macro", 16]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1146
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_request_free_session_cta",
                "vtp_eventParameters": ["list", ["map", "name", "click_id", "value", ["macro", 33]],
                    ["map", "name", "click_text", "value", ["macro", 24]],
                    ["map", "name", "click_url", "value", ["macro", 34]],
                    ["map", "name", "page_path", "value", ["macro", 25]],
                    ["map", "name", "page_url", "value", ["macro", 16]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1147
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_pricing_cta",
                "vtp_eventParameters": ["list", ["map", "name", "click_id", "value", ["macro", 33]],
                    ["map", "name", "click_text", "value", ["macro", 24]],
                    ["map", "name", "click_url", "value", ["macro", 34]],
                    ["map", "name", "page_path", "value", ["macro", 25]],
                    ["map", "name", "page_url", "value", ["macro", 16]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1148
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "product_cta",
                "vtp_eventParameters": ["list", ["map", "name", "product_type", "value", ["macro", 59]],
                    ["map", "name", "click_text", "value", ["macro", 24]],
                    ["map", "name", "page_path", "value", ["macro", 25]],
                    ["map", "name", "taking_action_parent", "value", "true"]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1149
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "self_identifier_image",
                "vtp_eventParameters": ["list", ["map", "name", "identifier", "value", ["macro", 106]],
                    ["map", "name", "click_text", "value", ["macro", 24]],
                    ["map", "name", "click_url", "value", ["macro", 34]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1150
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "support_you",
                "vtp_eventParameters": ["list", ["map", "name", "supporter", "value", ["macro", 51]],
                    ["map", "name", "click_text", "value", ["macro", 24]],
                    ["map", "name", "click_url", "value", ["macro", 34]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1151
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "teacher_reactivation",
                "vtp_eventParameters": ["list", ["map", "name", "registered_teacher", "value", "true"],
                    ["map", "name", "click_text", "value", ["macro", 24]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1152
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_membership_page_purchase_button",
                "vtp_eventParameters": ["list", ["map", "name", "click_url", "value", ["macro", 34]],
                    ["map", "name", "click_text", "value", ["macro", 24]],
                    ["map", "name", "page_path", "value", ["macro", 25]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1153
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_registration_signup_link",
                "vtp_eventParameters": ["list", ["map", "name", "click_text", "value", ["macro", 24]],
                    ["map", "name", "page_path", "value", ["macro", 25]],
                    ["map", "name", "signup_link", "value", ["macro", 107]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1154
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_userProperties": ["list", ["map", "name", "blog_category_array", "value", ["macro", 103]]],
                "vtp_eventName": "blog_category_seen",
                "vtp_eventParameters": ["list", ["map", "name", "blog_category_array", "value", ["macro", 103]],
                    ["map", "name", "page_path", "value", ["macro", 25]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1155
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "classroom_created",
                "vtp_eventParameters": ["list", ["map", "name", "event_id", "value", ["macro", 66]],
                    ["map", "name", "event_time", "value", ["macro", 72]],
                    ["map", "name", "click_text", "value", ["macro", 24]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1156
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "parent_new_session",
                "vtp_eventParameters": ["list", ["map", "name", "user_type", "value", ["macro", 10]],
                    ["map", "name", "page_path", "value", ["macro", 25]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1157
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "membership-purchase-6-month",
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1158
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "membership-purchase-yearly",
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1159
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "membership-purchase-monthly",
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1160
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "teacher_parent_referral",
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1161
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 0, 0]],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "pageview_membership_page",
                "vtp_eventParameters": ["list", ["map", "name", "page", "value", ["macro", 37]],
                    ["map", "name", "location", "value", ["macro", 38]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1162
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "pageview_parent_landing_page",
                "vtp_eventParameters": ["list", ["map", "name", "page_path", "value", ["macro", 25]]],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1163
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "school_leader_page_submission",
                "vtp_eventParameters": ["list", ["map", "name", "page_path", "value", ["macro", 25]]],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1164
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "teacher_onboarding_create_class",
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1165
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "pageview_unbounce",
                "vtp_eventParameters": ["list", ["map", "name", "page_path", "value", ["macro", 25]],
                    ["map", "name", "unbounce_variant", "value", ["macro", 41]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1166
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "unbounce_form_submit",
                "vtp_eventParameters": ["list", ["map", "name", "page_path", "value", ["macro", 25]]],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1167
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "funnel_math_tutor",
                "vtp_eventParameters": ["list", ["map", "name", "wizard_step", "value", ["macro", 61]],
                    ["map", "name", "taking_action_parent", "value", "true"]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1168
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_userProperties": ["list", ["map", "name", "taking_action_teacher", "value", ["macro", 49]],
                    ["map", "name", "taking_action_parent", "value", ["macro", 48]]
                ],
                "vtp_eventName": "GBD_styled_links",
                "vtp_eventParameters": ["list", ["map", "name", "click_text", "value", ["macro", 24]],
                    ["map", "name", "page_path", "value", ["macro", 25]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1169
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": true,
                "vtp_getEcommerceDataFrom": "dataLayer",
                "vtp_eventName": "segment_transaction",
                "vtp_eventParameters": ["list", ["map", "name", "membership_tier", "value", ["macro", 88]],
                    ["map", "name", "membership_plan", "value", ["macro", 78]],
                    ["map", "name", "membership_category", "value", ["macro", 90]],
                    ["map", "name", "membership_category_plan", "value", ["macro", 92]],
                    ["map", "name", "membership_category_tier", "value", ["macro", 93]],
                    ["map", "name", "membership_category_tier_plan", "value", ["macro", 91]],
                    ["map", "name", "membership_info_tier_plan", "value", ["macro", 89]],
                    ["map", "name", "license_id", "value", ["macro", 94]],
                    ["map", "name", "multi_product", "value", ["macro", 95]],
                    ["map", "name", "experiment", "value", ["macro", 96]],
                    ["map", "name", "experiment_group", "value", ["macro", 97]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1170
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "pageview_partnership_landing_page",
                "vtp_eventParameters": ["list", ["map", "name", "page_path", "value", ["macro", 25]]],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1171
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "teacher_onboarding_completion",
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1172
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "teacher_class_created",
                "vtp_eventParameters": ["list", ["map", "name", "registered_teacher", "value", "true"]],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1173
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "teacher_first_assessment_creation",
                "vtp_eventParameters": ["list", ["map", "name", "type", "value", ["macro", 36]],
                    ["map", "name", "registered_teacher", "value", "true"]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1174
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "teacher_assessment_created",
                "vtp_eventParameters": ["list", ["map", "name", "type", "value", ["macro", 36]],
                    ["map", "name", "registered_teacher", "value", "true"]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1175
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "teacher_report_viewed",
                "vtp_eventParameters": ["list", ["map", "name", "page_path", "value", ["macro", 25]],
                    ["map", "name", "registered_teacher", "value", "true"]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1176
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "form_school_changed",
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1177
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "signup_first_time_teacher",
                "vtp_eventParameters": ["list", ["map", "name", "userId", "value", ["macro", 9]],
                    ["map", "name", "registered_teacher", "value", "true"]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1178
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "signup_first_time_parent",
                "vtp_eventParameters": ["list", ["map", "name", "registerDate", "value", ["macro", 15]],
                    ["map", "name", "userId", "value", ["macro", 9]],
                    ["map", "name", "registered_parent", "value", "true"]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1179
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "form_personal_email_entered",
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1180
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "form_field_district_changed",
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1181
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "pageview_homepage",
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1182
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_banner",
                "vtp_eventParameters": ["list", ["map", "name", "click_text", "value", ["macro", 24]]],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1186
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 1204
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "Segment Test",
                "vtp_useGA4SchemaForEcommerce": false,
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 31],
                "vtp_eventAction": ["template", "Purchase - ", ["macro", 88], " - Test"],
                "vtp_eventLabel": ["template", ["macro", 78], " - Test"],
                "vtp_dimension": ["list", ["map", "index", "53", "dimension", ["macro", 89]],
                    ["map", "index", "52", "dimension", ["macro", 91]],
                    ["map", "index", "51", "dimension", ["macro", 92]],
                    ["map", "index", "50", "dimension", ["macro", 93]],
                    ["map", "index", "49", "dimension", ["macro", 88]],
                    ["map", "index", "48", "dimension", ["macro", 78]],
                    ["map", "index", "47", "dimension", ["macro", 90]],
                    ["map", "index", "54", "dimension", ["macro", 2]],
                    ["map", "index", "55", "dimension", ["macro", 94]],
                    ["map", "index", "56", "dimension", ["macro", 95]],
                    ["map", "index", "58", "dimension", ["macro", 96]],
                    ["map", "index", "59", "dimension", ["macro", 97]]
                ],
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 1216
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "click_monthly_or_yearly",
                "vtp_eventParameters": ["list", ["map", "name", "toggle_state", "value", ["macro", 123]],
                    ["map", "name", "page_url", "value", ["macro", 16]],
                    ["map", "name", "page_path", "value", ["macro", 25]]
                ],
                "vtp_measurementId": "G-MXZJXY3K57",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 1220
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 1233
            }, {
                "function": "__cl",
                "tag_id": 1290
            }, {
                "function": "__cl",
                "tag_id": 1291
            }, {
                "function": "__ytl",
                "vtp_captureComplete": false,
                "vtp_captureStart": true,
                "vtp_fixMissingApi": true,
                "vtp_triggerStartOption": "DOM_READY",
                "vtp_capturePause": false,
                "vtp_captureProgress": false,
                "vtp_uniqueTriggerId": "10754089_40",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 1292
            }, {
                "function": "__ytl",
                "vtp_captureComplete": true,
                "vtp_captureStart": false,
                "vtp_fixMissingApi": true,
                "vtp_triggerStartOption": "DOM_READY",
                "vtp_capturePause": false,
                "vtp_captureProgress": false,
                "vtp_uniqueTriggerId": "10754089_42",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 1293
            }, {
                "function": "__cl",
                "tag_id": 1294
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_146",
                "tag_id": 1295
            }, {
                "function": "__cl",
                "tag_id": 1296
            }, {
                "function": "__cl",
                "tag_id": 1297
            }, {
                "function": "__hl",
                "tag_id": 1298
            }, {
                "function": "__cl",
                "tag_id": 1299
            }, {
                "function": "__cl",
                "tag_id": 1300
            }, {
                "function": "__ytl",
                "vtp_captureComplete": false,
                "vtp_captureStart": true,
                "vtp_fixMissingApi": false,
                "vtp_triggerStartOption": "DOM_READY",
                "vtp_capturePause": false,
                "vtp_captureProgress": false,
                "vtp_uniqueTriggerId": "10754089_216",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 1301
            }, {
                "function": "__hl",
                "tag_id": 1302
            }, {
                "function": "__hl",
                "tag_id": 1303
            }, {
                "function": "__fsl",
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_236",
                "tag_id": 1304
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_252",
                "tag_id": 1305
            }, {
                "function": "__cl",
                "tag_id": 1306
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_333",
                "tag_id": 1307
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_334",
                "tag_id": 1308
            }, {
                "function": "__hl",
                "tag_id": 1309
            }, {
                "function": "__cl",
                "tag_id": 1310
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_386",
                "tag_id": 1311
            }, {
                "function": "__cl",
                "tag_id": 1312
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_401",
                "tag_id": 1313
            }, {
                "function": "__cl",
                "tag_id": 1314
            }, {
                "function": "__ytl",
                "vtp_captureComplete": true,
                "vtp_captureStart": true,
                "vtp_fixMissingApi": false,
                "vtp_triggerStartOption": "DOM_READY",
                "vtp_capturePause": false,
                "vtp_captureProgress": false,
                "vtp_uniqueTriggerId": "10754089_434",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 1315
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_436",
                "tag_id": 1316
            }, {
                "function": "__fsl",
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_438",
                "tag_id": 1317
            }, {
                "function": "__cl",
                "tag_id": 1318
            }, {
                "function": "__sdl",
                "vtp_verticalThresholdUnits": "PERCENT",
                "vtp_verticalThresholdsPercent": "25",
                "vtp_verticalThresholdOn": true,
                "vtp_triggerStartOption": "WINDOW_LOAD",
                "vtp_horizontalThresholdOn": false,
                "vtp_uniqueTriggerId": "10754089_478",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 1319
            }, {
                "function": "__sdl",
                "vtp_verticalThresholdUnits": "PERCENT",
                "vtp_verticalThresholdsPercent": "50",
                "vtp_verticalThresholdOn": true,
                "vtp_triggerStartOption": "WINDOW_LOAD",
                "vtp_horizontalThresholdOn": false,
                "vtp_uniqueTriggerId": "10754089_480",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 1320
            }, {
                "function": "__sdl",
                "vtp_verticalThresholdUnits": "PERCENT",
                "vtp_verticalThresholdsPercent": "75",
                "vtp_verticalThresholdOn": true,
                "vtp_triggerStartOption": "WINDOW_LOAD",
                "vtp_horizontalThresholdOn": false,
                "vtp_uniqueTriggerId": "10754089_482",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 1321
            }, {
                "function": "__ytl",
                "vtp_progressThresholdsPercent": "25",
                "vtp_captureComplete": false,
                "vtp_captureStart": false,
                "vtp_fixMissingApi": false,
                "vtp_triggerStartOption": "DOM_READY",
                "vtp_radioButtonGroup1": "PERCENTAGE",
                "vtp_capturePause": false,
                "vtp_captureProgress": true,
                "vtp_uniqueTriggerId": "10754089_484",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 1322
            }, {
                "function": "__ytl",
                "vtp_captureComplete": false,
                "vtp_captureStart": true,
                "vtp_fixMissingApi": false,
                "vtp_triggerStartOption": "DOM_READY",
                "vtp_capturePause": false,
                "vtp_captureProgress": false,
                "vtp_uniqueTriggerId": "10754089_486",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 1323
            }, {
                "function": "__ytl",
                "vtp_captureComplete": true,
                "vtp_captureStart": false,
                "vtp_fixMissingApi": false,
                "vtp_triggerStartOption": "DOM_READY",
                "vtp_capturePause": false,
                "vtp_captureProgress": false,
                "vtp_uniqueTriggerId": "10754089_488",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 1324
            }, {
                "function": "__ytl",
                "vtp_captureComplete": false,
                "vtp_captureStart": true,
                "vtp_fixMissingApi": false,
                "vtp_triggerStartOption": "DOM_READY",
                "vtp_capturePause": false,
                "vtp_captureProgress": false,
                "vtp_uniqueTriggerId": "10754089_533",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 1325
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "5000",
                "vtp_limit": "1",
                "vtp_uniqueTriggerId": "10754089_647",
                "tag_id": 1326
            }, {
                "function": "__sdl",
                "vtp_verticalThresholdUnits": "PERCENT",
                "vtp_verticalThresholdsPercent": "75",
                "vtp_verticalThresholdOn": true,
                "vtp_triggerStartOption": "WINDOW_LOAD",
                "vtp_horizontalThresholdOn": false,
                "vtp_uniqueTriggerId": "10754089_777",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 1327
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_787",
                "tag_id": 1328
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_792",
                "tag_id": 1329
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_794",
                "tag_id": 1330
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_796",
                "tag_id": 1331
            }, {
                "function": "__cl",
                "tag_id": 1332
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_800",
                "tag_id": 1333
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_840",
                "tag_id": 1334
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_852",
                "tag_id": 1335
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_860",
                "tag_id": 1336
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_925",
                "tag_id": 1337
            }, {
                "function": "__tg",
                "vtp_triggerIds": ["list", "10754089_984_170", "10754089_984_936"],
                "vtp_uniqueTriggerId": "10754089_984",
                "tag_id": 1338
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "10754089_984_170",
                "tag_id": 1339
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "10754089_984_936",
                "tag_id": 1341
            }, {
                "function": "__tg",
                "vtp_triggerIds": ["list", "10754089_990_227", "10754089_990_936"],
                "vtp_uniqueTriggerId": "10754089_990",
                "tag_id": 1342
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "10754089_990_227",
                "tag_id": 1343
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "10754089_990_936",
                "tag_id": 1345
            }, {
                "function": "__tg",
                "vtp_triggerIds": ["list", "10754089_1016_875", "10754089_1016_930"],
                "vtp_uniqueTriggerId": "10754089_1016",
                "tag_id": 1346
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "10754089_1016_875",
                "tag_id": 1347
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "10754089_1016_930",
                "tag_id": 1349
            }, {
                "function": "__tg",
                "vtp_triggerIds": ["list", "10754089_1032_792", "10754089_1032_936"],
                "vtp_uniqueTriggerId": "10754089_1032",
                "tag_id": 1350
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "10754089_1032_792",
                "tag_id": 1351
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "10754089_1032_936",
                "tag_id": 1353
            }, {
                "function": "__tg",
                "vtp_triggerIds": ["list", "10754089_1033_797", "10754089_1033_936"],
                "vtp_uniqueTriggerId": "10754089_1033",
                "tag_id": 1354
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "10754089_1033_797",
                "tag_id": 1355
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "10754089_1033_936",
                "tag_id": 1357
            }, {
                "function": "__tg",
                "vtp_triggerIds": ["list", "10754089_1034_794", "10754089_1034_936"],
                "vtp_uniqueTriggerId": "10754089_1034",
                "tag_id": 1358
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "10754089_1034_794",
                "tag_id": 1359
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "10754089_1034_936",
                "tag_id": 1361
            }, {
                "function": "__tg",
                "vtp_triggerIds": ["list", "10754089_1095_226", "10754089_1095_930"],
                "vtp_uniqueTriggerId": "10754089_1095",
                "tag_id": 1362
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "10754089_1095_226",
                "tag_id": 1363
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "10754089_1095_930",
                "tag_id": 1365
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "5000",
                "vtp_limit": "1",
                "vtp_uniqueTriggerId": "10754089_1096",
                "tag_id": 1366
            }, {
                "function": "__cl",
                "tag_id": 1367
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_1108",
                "tag_id": 1368
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_1116",
                "tag_id": 1369
            }, {
                "function": "__cl",
                "tag_id": 1370
            }, {
                "function": "__sdl",
                "vtp_verticalThresholdUnits": "PERCENT",
                "vtp_verticalThresholdsPercent": "25,50,75,100",
                "vtp_verticalThresholdOn": true,
                "vtp_triggerStartOption": "WINDOW_LOAD",
                "vtp_horizontalThresholdOn": false,
                "vtp_uniqueTriggerId": "10754089_1132",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 1371
            }, {
                "function": "__cl",
                "tag_id": 1372
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "10754089_1187",
                "tag_id": 1373
            }, {
                "function": "__evl",
                "vtp_elementId": "price-toggle",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": false,
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "ID",
                "vtp_onScreenRatio": "1",
                "vtp_uniqueTriggerId": "10754089_1225",
                "tag_id": 1374
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript id=\"ze-snippet\" data-gtmsrc=\"https:\/\/static.zdassets.com\/ekr\/snippet.js?key=5582a0e6-15fc-4a2e-9697-a5d3bc1c1b37\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 24
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": ["template", "\n\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"set\",\"autoConfig\",!1,\"1409254739369910\");fbq(\"init\",\"1409254739369910\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 58
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 365, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003Efbq(\"track\",\"Purchase\",{value:", ["escape", ["macro", 81], 8, 16], ",currency:\"USD\",content_ids:\"Six-month Membership\"},{eventID:\"", ["escape", ["macro", 66], 7], "\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 61
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 295, 0]],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 63
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 363, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Subscribe\",{subscription_sid:\"teacher registration\"},{eventID:\"", ["escape", ["macro", 66], 7], "\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 110
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 363, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Subscribe\",{subscription_sid:\"parent registration\"},{eventID:\"", ["escape", ["macro", 66], 7], "\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 111
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 295, 0]],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Subscribe\",{subscription_sid:\"teacher reactivation\"});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 210
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o4nt1\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o4nt1\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o4nt1\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 240
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function e(c){var d=decodeURIComponent(window.location.href),a={};d.replace(\/[?\u0026]+([^=\u0026]+)=([^\u0026]*)\/gi,function(m,k,l){a[k]=l.replace(\/\\+\/g,\" \")});for(var b in a)if(b==c)return a[b];return!1}function f(c,d){var a=new Date((new Date).getTime()+6048E5),b=window.location.host.split(\".\").slice(-2).join(\".\");document.cookie=\"sw.\"+c+\"\\x3d\"+encodeURIComponent(d)+\"; expires\\x3d\"+a.toUTCString()+\"; domain\\x3d\"+b}var g=e(\"infl_referral_campaign_id\"),h=e(\"infl_share_token\");g\u0026\u0026(f(\"influitiveReferralCampaignID\",\ng),console.log(\"influitiveReferralCampaignID captured!\"));h\u0026\u0026(f(\"influitiveShareToken\",h),console.log(\"influitiveShareToken captured!\"))})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 329
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};hj(\"tagRecording\",[\"btn-click-play-the-game\"]);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 336
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript async defer data-gtmsrc=\"https:\/\/static.cdn.prismic.io\/prismic.js?new=true\u0026amp;repo=prodigy-website\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 338
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 48, 0]],
                "once_per_event": true,
                "vtp_html": "ga(\u0026#39;lead\u0026#39;, \u0026#39;scheduled tutoring session\u0026#39;, \u0026#39;lead\u0026#39;, \u0026#39;0\u0026#39;);",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 358
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", " \u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\" src=\"https:\/\/js.adsrvr.org\/up_loader.1.1.0.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E\n        \u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\" type=\"text\/javascript\"\u003Ettd_dom_ready(function(){if(\"function\"===typeof TTDUniversalPixelApi){var a=new TTDUniversalPixelApi;a.init(\"v5502lz\",[\"qulgefx\"],\"https:\/\/insight.adsrvr.org\/track\/up\")}});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 380
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003Ewindow.addEventListener(\"message\",function(a){\"hsFormCallback\"===a.data.type\u0026\u0026\"onFormSubmit\"===a.data.eventName\u0026\u0026window.dataLayer.push({event:\"hubspot-form-success\",\"hs-form-guid\":a.data.id,\"hs-form-data\":a.data.data})});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 408
            }, {
                "function": "__html",
                "metadata": ["map"],
                "teardown_tags": ["list", ["tag", 364, 0]],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"firstTimeSignupParent\",cookieValue=\"true\",expirationTime=31536E3;expirationTime*=1E3;var date=new Date,dateTimeNow=date.getTime();date.setTime(dateTimeNow+expirationTime);date=date.toUTCString();document.cookie=cookieName+\"\\x3d\"+cookieValue+\"; SameSite\\x3dNone; Secure; expires\\x3d\"+date+\"; path\\x3d\/; domain\\x3d.\"+location.hostname.replace(\/^www\\.\/i,\"\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 444
            }, {
                "function": "__html",
                "metadata": ["map"],
                "teardown_tags": ["list", ["tag", 362, 0]],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"firstTimeSignupTeacher\",cookieValue=\"true\",expirationTime=31536E3;expirationTime*=1E3;var date=new Date,dateTimeNow=date.getTime();date.setTime(dateTimeNow+expirationTime);date=date.toUTCString();document.cookie=cookieName+\"\\x3d\"+cookieValue+\"; SameSite\\x3dNone; Secure; expires\\x3d\"+date+\"; path\\x3d\/; domain\\x3d.\"+location.hostname.replace(\/^www\\.\/i,\"\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 447
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Ciframe width=\"0\" height=\"0\" name=\"Trade Desk Tracking - Conversion Pixel - Parent Registration\" frameborder=\"0\" scrolling=\"no\" src=\"https:\/\/insight.adsrvr.org\/tags\/v5502lz\/kor8hdx\/iframe\"\u003E\u003C\/iframe\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 456
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Ciframe width=\"0\" height=\"0\" name=\"Trade Desk Tracking - Conversion Pixel - Teacher Registration\" frameborder=\"0\" scrolling=\"no\" src=\"https:\/\/insight.adsrvr.org\/tags\/v5502lz\/ze0riqz\/iframe\"\u003E\u003C\/iframe\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 457
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.activateOptimizelyWebExperiment\u0026\u0026window.activateOptimizelyWebExperiment();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 491
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 295, 0]],
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003Efbq(\"track\",\"AddToCart\",{content_ids:\"Add To Cart\"},{eventID:\"", ["escape", ["macro", 66], 7], "\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 528
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\n\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\" data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\" type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o4nt3\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o4nt3\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o4nt3\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 566
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 365, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003Efbq(\"track\",\"Purchase\",{value:", ["escape", ["macro", 81], 8, 16], ",currency:\"USD\",content_ids:\"Monthly Membership\"},{eventID:\"", ["escape", ["macro", 66], 7], "\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 571
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 365, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003Efbq(\"track\",\"Purchase\",{value:", ["escape", ["macro", 81], 8, 16], ",currency:\"USD\",content_ids:\"Yearly Membership\"},{eventID:\"", ["escape", ["macro", 66], 7], "\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 572
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Ciframe nonce=\"", ["escape", ["macro", 124], 3], "\" width=\"0\" height=\"0\" name=\"Trade Desk Tracking - Conversion Pixel - Purchase (6 Month Membership\" frameborder=\"0\" scrolling=\"no\" src=\"https:\/\/insight.adsrvr.org\/tags\/v5502lz\/2w9d0jx\/iframe\"\u003E\u003C\/iframe\u003E\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 593
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Ciframe nonce=\"", ["escape", ["macro", 124], 3], "\" width=\"0\" height=\"0\" name=\"Trade Desk Tracking - Conversion Pixel - Purchase (All)\" frameborder=\"0\" scrolling=\"no\" src=\"https:\/\/insight.adsrvr.org\/tags\/v5502lz\/932cgdg\/iframe\"\u003E\u003C\/iframe\u003E\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 594
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Ciframe nonce=\"", ["escape", ["macro", 124], 3], "\" width=\"0\" height=\"0\" name=\"Trade Desk Tracking - Conversion Pixel - Purchase (Monthly Membership)\" frameborder=\"0\" scrolling=\"no\" src=\"https:\/\/insight.adsrvr.org\/tags\/v5502lz\/2f7orvs\/iframe\"\u003E\u003C\/iframe\u003E\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 595
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Ciframe nonce=\"", ["escape", ["macro", 124], 3], "\" width=\"0\" height=\"0\" name=\"Trade Desk Tracking - Conversion Pixel - Purchase (Yearly Membership)\" frameborder=\"0\" scrolling=\"no\" src=\"https:\/\/insight.adsrvr.org\/tags\/v5502lz\/pf07l8i\/iframe\"\u003E\u003C\/iframe\u003E\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 596
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\n\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\" data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\" type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o4nt4\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o4nt4\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o4nt4\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 598
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\n\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\" data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\" type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o4nt2\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o4nt2\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o4nt2\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 599
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 363, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"", ["escape", ["macro", 126], 7], " - New\",{eventID:\"", ["escape", ["macro", 66], 7], "\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 633
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 295, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\" type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ClassroomCreation\",{lead_id:\"", ["escape", ["macro", 86], 7], "\"},{eventID:\"", ["escape", ["macro", 66], 7], "\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 637
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"Classroom Create First Time in 90 Days\"});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 650
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"ClassroomCreationFirstTimein90days\",cookieValue=\"false\",expirationTime=7776E3;expirationTime*=1E3;var date=new Date,dateTimeNow=date.getTime();date.setTime(dateTimeNow+expirationTime);date=date.toUTCString();document.cookie=cookieName+\"\\x3d\"+cookieValue+\"; SameSite\\x3dNone; Secure; expires\\x3d\"+date+\"; path\\x3d\/; domain\\x3d.\"+location.hostname.replace(\/^www\\.\/i,\"\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 651
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar influetiveCookie=\"influetiveFirstTimeSignupParent\",cookieValue=\"true\",expirationTime2=2592E3;expirationTime2*=1E3;var date2=new Date,dateTimeNow2=date2.getTime();date2.setTime(dateTimeNow2+expirationTime2);date2=date2.toUTCString();document.cookie=influetiveCookie+\"\\x3d\"+cookieValue+\"; SameSite\\x3dNone; Secure; expires\\x3d\"+date2+\"; path\\x3d\/; domain\\x3d.\"+location.hostname.replace(\/^www\\.\/i,\"\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 658
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003EdataLayer.push({ecommerce:null});dataLayer.push({event:\"segmentTransaction\",ecommerce:{purchase:{actionField:{id:\"", ["escape", ["macro", 109], 7], "\",affiliation:\"Prodigy Membership\",revenue:\"", ["escape", ["macro", 81], 7], "\",tax:\"0\",shipping:\"0\",coupon:\"", ["escape", ["macro", 128], 7], "\"},products:[{name:\"", ["escape", ["macro", 78], 7], "\",id:\"", ["escape", ["macro", 86], 7], "\",price:\"", ["escape", ["macro", 81], 7], "\",brand:\"Prodigy\",category:\"", ["escape", ["macro", 88], 7], "\",variant:\"", ["escape", ["macro", 129], 7], "\",quantity:1}]}}});\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 686
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\" src=\"https:\/\/unpkg.com\/web-vitals@2.1.2\/dist\/web-vitals.umd.js\"\u003E\u003C\/script\u003E \n\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003Ewindow.dataLayer=window.dataLayer||[];function sendToGTM(a,b,c){ononline=window.dataLayer.push({event:\"web-vitals\",event_category:\"Performance\",event_action:a.name,event_value:Math.round(\"CLS\"===a.name?1E3*a.delta:a.delta),event_label:a.id})}webVitals.getCLS(sendToGTM);webVitals.getFID(sendToGTM);webVitals.getLCP(sendToGTM);webVitals.getFCP(sendToGTM);webVitals.getTTFB(sendToGTM);\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 693
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ehj(\"event\",\"Purchase - Monthly\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 780
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ehj(\"event\",\"Purchase - 6 Month\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 781
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ehj(\"event\",\"Purchase - Yearly\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 782
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ehj(\"event\",\"Teacher Registration\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 784
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ehj(\"event\",\"Parent Registration\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 785
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efunction pushCategories(){var d=document.querySelectorAll('[class*\\x3d\"styles__Category-\"]').length,c=document.querySelectorAll('[class*\\x3d\"styles__Category-\"]'),b=sessionStorage.getItem(\"blogCatsSeen\");null==b\u0026\u0026(b=\"\");if(null!=b\u0026\u00260\u003Cb.length)for(var a=0;a\u003Cd;a++){if(!b.includes(c[a].innerText)){var e=sessionStorage.getItem(\"blogCatsSeen\").concat(\",\"+c[a].innerText);sessionStorage.setItem(\"blogCatsSeen\",e.toString())}}else for(a=0;a\u003Cd;a++)b.includes(c[a].innerText)||(null!=sessionStorage.getItem(\"blogCatsSeen\")?\nsessionStorage.setItem(\"blogCatsSeen\",sessionStorage.getItem(\"blogCatsSeen\").concat(\",\"+c[a].innerText)):sessionStorage.setItem(\"blogCatsSeen\",c[a].innerText));console.log(\"dlp\");window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:\"blogCategories\",\"blog-categories\":sessionStorage.getItem(\"blogCatsSeen\")})}window.onload=pushCategories();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 813
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar priceDetails=document.getElementById(\"pricing-details\"),adminTestimonials=document.getElementById(\"Admin-Testimonials\");adminTestimonials.classList+=\" removeThisElement\";var removeEl=document.querySelector(\".removeThisElement\");removeEl.parentNode.removeChild(removeEl);var lowerContent=adminTestimonials.outerHTML;priceDetails.insertAdjacentHTML(\"beforeBegin\",lowerContent);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 820
            }, {
                "function": "__html",
                "metadata": ["map"],
                "consent": ["list", "analytics_storage"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(d,g,e){for(var a=!1,h=d+\"\\x3d\",f=document.cookie.split(\";\"),c=0;c\u003Cf.length;c++){for(var b=f[c];\" \"==b.charAt(0);)b=b.substring(1,b.length);0==b.indexOf(h)\u0026\u0026(a=!0)}a||(a=\"\",e\u0026\u0026(a=new Date,a.setTime(a.getTime()+864E5*e),a=\"; expires\\x3d\"+a.toUTCString()),document.cookie=d+\"\\x3d\"+(g||\"\")+a+\"; path\\x3d\/\")}var cta_cookie=\"First CTA Click - \"+", ["escape", ["macro", 24], 8, 16], "+\" on \"+", ["escape", ["macro", 25], 8, 16], ";setCookie(\"firstCTA\",cta_cookie,1);\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 856
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efunction hideThis(a){a.style.display=\"none\"}var original_images=document.querySelectorAll(\".styles__Card-sc-1pevb1u-3\"),outer_element=document.querySelector(\".styles__Wrapper-sc-fazuw5-0\");original_images.forEach(hideThis);outer_element.innerHTML='\\x3cimg class\\x3d\"test-img-mobile\" src\\x3d\"\/\/cdn.optimizely.com\/img\/14073630164\/3eb8577acff7496da86811e0a417d7c9.png\"\\x3e\\x3cimg class\\x3d\"test-img-desktop\" src\\x3d\"\/\/cdn.optimizely.com\/img\/14073630164\/dd95d7d174f34e868d31781cfdb1b8aa.png\"\\x3e\\x3cstyle\\x3e@media (min-width:768px){.test-img-mobile {display: none;}.test-img-desktop{display: block;width: 100%;height: auto;}.styles__StyledContainer-sc-1pevb1u-1{padding: 70px 0 90px;width: 100vw;margin-right: 0 !important;text-align: center;margin-left: 0;display: flex;align-content: center;align-items: center;max-width: unset;}.dOIYLR{width:100vw;}}@media (max-width:768px){.test-img-mobile {display: none;display: block; width: 100%;height: auto;}.test-img-desktop {display: none;}.styles__StyledContainer-sc-1pevb1u-1{width:100%;}.styles__Columns-sc-1pevb1u-2{width:100vw;}}body{overflow-x: hidden;}\\x3c\/style\\x3e';\nwindow.dataLayer.push({event:\"Optimizely Test\",\"optimizely-experiment-name\":\"This Is Math - Testimonials\",\"optimizely-experiment-variant\":\"v1\"});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 865
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efunction hideThis(a){a.style.display=\"none\"}var original_images=document.querySelectorAll(\".styles__Card-sc-1pevb1u-3\"),outer_element=document.querySelector(\".styles__Wrapper-sc-fazuw5-0\");original_images.forEach(hideThis);outer_element.innerHTML='\\x3cimg class\\x3d\"test-img-mobile\" src\\x3d\"\/\/cdn.optimizely.com\/img\/14073630164\/67c47ee3d971455a959017ced4cb9e31.png\"\\x3e\\x3cimg class\\x3d\"test-img-desktop\" src\\x3d\"\/\/cdn.optimizely.com\/img\/14073630164\/88dc408787bc4c3ca1a8bdebfc3579b0.jpg\"\\x3e\\x3cstyle\\x3e@media (min-width:768px){.test-img-mobile {display: none;}.test-img-desktop{display: block;width: 100%;height: auto;}.styles__StyledContainer-sc-1pevb1u-1{padding: 70px 0 90px;width: 100vw;margin-right: 0 !important;text-align: center;margin-left: 0;display: flex;align-content: center;align-items: center;max-width: unset;}.dOIYLR{width:100vw;}}@media (max-width:768px){.test-img-mobile {display: none;display: block; width: 100%;height: auto;}.test-img-desktop {display: none;}.styles__StyledContainer-sc-1pevb1u-1{width:100%;}.styles__Columns-sc-1pevb1u-2{width:100vw;}}body{overflow-x: hidden;}\\x3c\/style\\x3e';\nwindow.dataLayer.push({event:\"Optimizely Test\",\"optimizely-experiment-name\":\"This Is Math - Testimonials\",\"optimizely-experiment-variant\":\"v2\"});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 866
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efunction hideThis(a){a.style.display=\"none\"}var original_images=document.querySelectorAll(\".styles__Card-sc-1pevb1u-3\"),outer_element=document.querySelector(\".styles__Wrapper-sc-fazuw5-0\");original_images.forEach(hideThis);outer_element.innerHTML='\\x3cimg class\\x3d\"test-img-mobile\" src\\x3d\"\/\/cdn.optimizely.com\/img\/14073630164\/ae956b9e8c914f56855aa1544b2f9ec9.png\"\\x3e\\x3cimg class\\x3d\"test-img-desktop\" src\\x3d\"\/\/cdn.optimizely.com\/img\/14073630164\/32d92a9606914efc8823cc5b011de621.png\"\\x3e\\x3cstyle\\x3e@media (min-width:768px){.test-img-mobile {display: none;}.test-img-desktop{display: block;width: 100%;height: auto;}.styles__StyledContainer-sc-1pevb1u-1{padding: 70px 0 90px;width: 100vw;margin-right: 0 !important;text-align: center;margin-left: 0;display: flex;align-content: center;align-items: center;max-width: unset;}.dOIYLR{width:100vw;}}@media (max-width:768px){.test-img-mobile {display: none;display: block; width: 100%;height: auto;}.test-img-desktop {display: none;}.styles__StyledContainer-sc-1pevb1u-1{width:100%;}.styles__Columns-sc-1pevb1u-2{width:100vw;}}body{overflow-x: hidden;}\\x3c\/style\\x3e';\nwindow.dataLayer.push({event:\"Optimizely Test\",\"optimizely-experiment-name\":\"This Is Math - Testimonials\",\"optimizely-experiment-variant\":\"v3\"});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 867
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 295, 1]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003Efbq(\"track\",\"", ["escape", ["macro", 114], 7], "\",{value:", ["escape", ["macro", 81], 8, 16], ",currency:\"USD\"},{eventID:\"", ["escape", ["macro", 66], 7], "\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 898
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 295, 1]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003Efbq(\"track\",\"", ["escape", ["macro", 115], 7], "\",{value:", ["escape", ["macro", 81], 8, 16], ",currency:\"", ["escape", ["macro", 110], 7], "\"},{eventID:\"", ["escape", ["macro", 66], 7], "\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 900
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 295, 1]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003Efbq(\"track\",\"", ["escape", ["macro", 116], 7], "\",{value:", ["escape", ["macro", 81], 8, 16], ",currency:\"USD\"},{eventID:\"", ["escape", ["macro", 66], 7], "\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 901
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 295, 1]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003Efbq(\"track\",\"", ["escape", ["macro", 117], 7], "\",{value:", ["escape", ["macro", 81], 8, 16], ",currency:\"USD\"},{eventID:\"", ["escape", ["macro", 66], 7], "\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 902
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 295, 1]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003Efbq(\"track\",\"", ["escape", ["macro", 118], 7], "\",{value:", ["escape", ["macro", 81], 8, 16], ",currency:\"USD\"},{eventID:\"", ["escape", ["macro", 66], 7], "\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 903
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 295, 1]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003Efbq(\"track\",\"", ["escape", ["macro", 119], 7], "\",{value:", ["escape", ["macro", 81], 8, 16], ",currency:\"USD\"},{eventID:\"", ["escape", ["macro", 66], 7], "\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 904
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 295, 1]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003Efbq(\"track\",\"", ["escape", ["macro", 120], 7], "\",{value:", ["escape", ["macro", 81], 8, 16], ",currency:\"USD\"},{eventID:\"", ["escape", ["macro", 66], 7], "\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 905
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\" type=\"text\/gtmscript\"\u003Eoptimizely.push({type:\"event\",eventName:\"first_time_parent_registration_gtm\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 916
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\" type=\"text\/gtmscript\"\u003Eoptimizely.push({type:\"event\",eventName:\"first_time_teacher_registration_gtm\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 917
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\" type=\"text\/gtmscript\"\u003Eoptimizely.push({type:\"event\",eventName:\"membership_purchase_all_gtm\",tags:{revenue:", ["escape", ["macro", 131], 8, 16], ",value:", ["escape", ["macro", 81], 8, 16], ",\"membership purchase\":", ["escape", ["macro", 132], 8, 16], ",previous_account:\"", ["escape", ["macro", 133], 7], "\",plan:\"", ["escape", ["macro", 78], 7], "\",category:\"", ["escape", ["macro", 90], 7], "\",tier:\"", ["escape", ["macro", 88], 7], "\",ctp:\"", ["escape", ["macro", 91], 7], "\"}});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 918
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003Eoptimizely.push({type:\"event\",eventName:\"checkout_flow_gtm\"});\u003C\/script\u003E\n  "],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 919
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar plan_output,tier_output,category_output,origPlanVar=", ["escape", ["macro", 134], 8, 16], ",origTierVar=", ["escape", ["macro", 135], 8, 16], ",origCatVar=", ["escape", ["macro", 136], 8, 16], ",cartItemVar=", ["escape", ["macro", 137], 8, 16], ";\nif(null==cartItemVar||void 0==cartItemVar)null==origPlanVar||void 0==origPlanVar?dataLayer.push({event:\"Membership Purchase Ready\"}):dataLayer.push({event:\"Membership Purchase Ready\",memberPlanDl:origPlanVar,memberTierDl:origTierVar,memberCategoryDl:origCatVar});else{var cart_item_plan=cartItemVar.billing_interval?cartItemVar.billing_interval:void 0,cart_item_category=cartItemVar.category?cartItemVar.category:void 0,cart_item_tier=cartItemVar.tier?cartItemVar.tier:void 0;switch(cart_item_plan){case 1:plan_output=\n\"premiumMonthly\";break;case 6:plan_output=\"premiumSixMonth\";break;case 12:plan_output=\"premiumYearly\"}dataLayer.push({event:\"Membership Purchase Ready\",memberPlanDl:plan_output,memberTierDl:cart_item_tier,memberCategoryDl:cart_item_category})};\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1209
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar $div=$(\".bill-yearly\"),observer=new MutationObserver(function(b){b.forEach(function(a){a=$(a.target).prop(a.attributeName);var c=a.replace(\" active\",\"\");-1!==a.indexOf(\"active\")\u0026\u0026dataLayer.push({event:\"priceToggleChange\",toggleState:c})})});observer.observe($div[0],{attributes:!0,attributeFilter:[\"class\"]});\u003C\/script\u003E  ",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1226
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar $div=$(\".bill-monthly\"),observer=new MutationObserver(function(b){b.forEach(function(a){a=$(a.target).prop(a.attributeName);var c=a.replace(\" active\",\"\");-1!==a.indexOf(\"active\")\u0026\u0026dataLayer.push({event:\"priceToggleChange\",toggleState:c})})});observer.observe($div[0],{attributes:!0,attributeFilter:[\"class\"]});\u003C\/script\u003E  ",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1227
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 363, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"teacher-registration\",{},{eventID:\"", ["escape", ["macro", 66], 7], "\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1246
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 363, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"parent-registration\",{},{eventID:\"", ["escape", ["macro", 66], 7], "\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1247
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003Eoptimizely.push({type:\"event\",eventName:\"", ["escape", ["macro", 126], 7], "\"});\u003C\/script\u003E\n  "],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 1248
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar pv=1;sessionStorage.pv?(pv+=1,sessionStorage.setItem(\"pv\",pv)):sessionStorage.pv||sessionStorage.setItem(\"pv\",pv);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1250
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003EdataLayer.push({event:\"", ["escape", ["macro", 126], 7], "\"});\u003C\/script\u003E\n  "],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 1254
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var g=\"parent_delay_registration\",b=5E3,c=1,a=1,d=(new Date).getTime(),h=function(){var e=(new Date).getTime();window.dataLayer.push({event:g,\"custom.timerCurrentTime\":e,\"custom.timerElapsedTime\":e-d,\"custom.timerStartTime\":d,\"custom.timerEventNumber\":a,\"custom.timerId\":f,\"custom.timerInterval\":b,\"custom.timerLimit\":c});a+=1;c\u003Ca\u0026\u0026window.clearInterval(f)},f=window.setInterval(h,b)})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1288
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var g=\"teacher_delay_registration\",b=5E3,c=1,a=1,d=(new Date).getTime(),h=function(){var e=(new Date).getTime();window.dataLayer.push({event:g,\"custom.timerCurrentTime\":e,\"custom.timerElapsedTime\":e-d,\"custom.timerStartTime\":d,\"custom.timerEventNumber\":a,\"custom.timerId\":f,\"custom.timerInterval\":b,\"custom.timerLimit\":c});a+=1;c\u003Ca\u0026\u0026window.clearInterval(f)},f=window.setInterval(h,b)})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1289
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"First Time Teacher Signup\"});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 448
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\n\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"set\",\"autoConfig\",!1,\"1409254739369910\");fbq(\"init\",\"1409254739369910\",{external_id:\"", ["escape", ["macro", 75], 7], "\"});fbq(\"track\",\"PageView\");\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 1257
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"First Time Parent Signup\"});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 449
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\n\u003Cscript nonce=\"", ["escape", ["macro", 124], 3], "\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"set\",\"autoConfig\",!1,\"1409254739369910\");fbq(\"init\",\"1409254739369910\",{external_id:\"", ["escape", ["macro", 84], 7], "\"});fbq(\"track\",\"PageView\");\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 1262
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.timer"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_647($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": ".*,C0004,.*|undefined|null"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": ".*"
            }, {
                "function": "_eq",
                "arg0": ["macro", 3],
                "arg1": "true"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "teacher_delay_registration"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "parent-registration"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "teacher-registration"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "upper-call-to-action"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.click"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": ".*,C0002,.*|undefined|null"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "lower-call-to-action"
            }, {
                "function": "_cn",
                "arg0": ["macro", 20],
                "arg1": "youtube.com\/watch?v=Qq9-yUFOPH8"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.video"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_40($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_42($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "sl-admin-submitted"
            }, {
                "function": "_cn",
                "arg0": ["macro", 21],
                "arg1": "lp-pom-form"
            }, {
                "function": "_cn",
                "arg0": ["macro", 21],
                "arg1": "submit"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "submit"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": ".*,C0003,.*|undefined|null"
            }, {
                "function": "_re",
                "arg0": ["macro", 16],
                "arg1": "dashboard\\?register=true"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "parent"
            }, {
                "function": "_cn",
                "arg0": ["macro", 22],
                "arg1": "register=true"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "teacher-reactivation"
            }, {
                "function": "_cn",
                "arg0": ["macro", 23],
                "arg1": "https:\/\/play.vidyard.com\/aPx6rBP9okf5DVweMkZC47.html?"
            }, {
                "function": "_cn",
                "arg0": ["macro", 24],
                "arg1": "Watch video"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "pages\/parents"
            }, {
                "function": "_sw",
                "arg0": ["macro", 32],
                "arg1": "free_session_"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "CTA-click"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "form-submit-success"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "form-field-email-forbidden"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "form-field-school-changed"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "form-field-district-changed"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "pages\/partnership"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "form-submit-attempt"
            }, {
                "function": "_cn",
                "arg0": ["macro", 34],
                "arg1": "\/Membership\/purchase?defaultPlanId="
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.linkClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_146($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.triggerGroup"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_984($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 10],
                "arg1": "parent"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "session"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "menu-item-link"
            }, {
                "function": "_cn",
                "arg0": ["macro", 33],
                "arg1": "coaching-btn-cta"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "teacher-first-assessment"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "parent-child-first-attach"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "\/Membership"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.historyChange"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "Membership"
            }, {
                "function": "_sw",
                "arg0": ["macro", 33],
                "arg1": "ctaFreeSessionRequest"
            }, {
                "function": "_sw",
                "arg0": ["macro", 33],
                "arg1": "ctaSeePricing"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_216($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 39],
                "arg1": "play.prodigygame.com"
            }, {
                "function": "_cn",
                "arg0": ["macro", 39],
                "arg1": "play."
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_533($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "\/main-en"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "\/in-en"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "\/in-en\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "\/dashboard\/#tutorial\/create-class"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.formSubmit"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_236($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "get.prodigygame.com"
            }, {
                "function": "_css",
                "arg0": ["macro", 23],
                "arg1": "header a"
            }, {
                "function": "_eq",
                "arg0": ["macro", 24],
                "arg1": "Play The Game"
            }, {
                "function": "_eq",
                "arg0": ["macro", 24],
                "arg1": "Log In"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "main-en"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_252($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "https:\/\/www.prodigygame.com\/Membership\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "manage"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "payment"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "review"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "assign"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "\/purchase\/complete\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "blog"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_990($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_1095($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_1016($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "parent-app-split-control"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "parent-app-split-test"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "sso.prodigygame.com"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "student-ingame-split-control"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "student-ingame-split-test"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "infobar-cta"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "teacher-class-created"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "teacher-onboarding-completed"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "teacher-assessment"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "teacher-parent-referral"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "teacher-report-view"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "\/tutoring\/public\/confirmation\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 7],
                "arg1": ".*StyledLink.*|.*button.*"
            }, {
                "function": "_re",
                "arg0": ["macro", 39],
                "arg1": "get.*|www.*"
            }, {
                "function": "_re",
                "arg0": ["macro", 24],
                "arg1": "play",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 24],
                "arg1": "login",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 24],
                "arg1": "log",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 24],
                "arg1": "undefined"
            }, {
                "function": "_cn",
                "arg0": ["macro", 24],
                "arg1": "null"
            }, {
                "function": "_cn",
                "arg0": ["macro", 24],
                "arg1": "\u003Cpicture\u003E"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "styles__InternalStyledLink"
            }, {
                "function": "_re",
                "arg0": ["macro", 24],
                "arg1": "Make math fun|Engage your students|Partner with Prodigy",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_386($|,)))"
            }, {
                "function": "_css",
                "arg0": ["macro", 23],
                "arg1": ".usertype-select-wrapper  *"
            }, {
                "function": "_css",
                "arg0": ["macro", 23],
                "arg1": "HTMLImageElement *"
            }, {
                "function": "_eq",
                "arg0": ["macro", 24],
                "arg1": "null"
            }, {
                "function": "_eq",
                "arg0": ["macro", 24],
                "arg1": "undefined"
            }, {
                "function": "_eq",
                "arg0": ["macro", 24],
                "arg1": "Student Teacher Parent Admin"
            }, {
                "function": "_eq",
                "arg0": ["macro", 24],
                "arg1": "student teacher parent admin"
            }, {
                "function": "_re",
                "arg0": ["macro", 24],
                "arg1": "^(student|teacher|parent|admin)$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 34],
                "arg1": ".*\\\/Membership\\\/purchase\\\/?\\?default.*|.*\\\/math\\-tutoring\\\/request\\\/.*",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_401($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 61],
                "arg1": ".*2|.*3|form submit",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "\/pages\/math-tutoring\/request\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "\/main-en\/admin\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "hubspot-form-success"
            }, {
                "function": "_cn",
                "arg0": ["macro", 34],
                "arg1": ".pdf"
            }, {
                "function": "_re",
                "arg0": ["macro", 64],
                "arg1": "Premium Membership",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_434($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 34],
                "arg1": "prodigygame.com"
            }, {
                "function": "_cn",
                "arg0": ["macro", 34],
                "arg1": "undefined"
            }, {
                "function": "_cn",
                "arg0": ["macro", 34],
                "arg1": "null"
            }, {
                "function": "_cn",
                "arg0": ["macro", 34],
                "arg1": "javascript"
            }, {
                "function": "_re",
                "arg0": ["macro", 34],
                "arg1": ".*"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_436($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 39],
                "arg1": "get."
            }, {
                "function": "_cn",
                "arg0": ["macro", 34],
                "arg1": "facebook"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_438($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "First Time Teacher Signup"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "First Time Parent Signup"
            }, {
                "function": "_re",
                "arg0": ["macro", 34],
                "arg1": ".*rebrand-(student|teacher|parent|admin).*",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 39],
                "arg1": "get"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.scrollDepth"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_478($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "https:\/\/get.prodigygame.com\/math-game\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_480($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_482($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_484($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_486($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_488($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "\/Memberships\/purchase\/cart"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.dom"
            }, {
                "function": "_cn",
                "arg0": ["macro", 78],
                "arg1": "premiumSixMonth"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "Membership Purchase Ready"
            }, {
                "function": "_cn",
                "arg0": ["macro", 78],
                "arg1": "premiumMonthly"
            }, {
                "function": "_cn",
                "arg0": ["macro", 78],
                "arg1": "premiumYearly"
            }, {
                "function": "_eq",
                "arg0": ["macro", 25],
                "arg1": "\/dashboard\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "parent"
            }, {
                "function": "_cn",
                "arg0": ["macro", 3],
                "arg1": "undefined"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "Loaded a Page"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "Classroom Create First Time in 90 Days"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "segmentTransaction"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "web-vitals"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_777($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "ExternalStyledLink"
            }, {
                "function": "_eq",
                "arg0": ["macro", 102],
                "arg1": "undefined"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "petslink"
            }, {
                "function": "_cn",
                "arg0": ["macro", 34],
                "arg1": "youtu.be"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_787($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "unstyled blog-post"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_796($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_1032($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_1034($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_1033($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_800($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 103],
                "arg1": "[A-Za-z0-9].*"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "blogCategories"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "Membership Buy Now Clicked"
            }, {
                "function": "_re",
                "arg0": ["macro", 34],
                "arg1": ".*\\\/parents\\\/signup\\\/.*|.*\\\/teachers\\\/signup\\\/.*"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_840($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 7],
                "arg1": "StyledButton|solid-on-dark-bg|solid-on-light-bg"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_852($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 104],
                "arg1": "^(undefined|null|0|false|NaN|)$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_860($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 34],
                "arg1": ".*((\\\/Memberships\\\/|\\\/memberships\\\/)$|((\\\/Memberships\\\/|\\\/memberships\\\/)math\\\/|english\\\/)$)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_1108($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "premiumMonthly([0-9]{0,3})-plan"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "premiumSixMonth([0-9]{0,3})-plan"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "premiumYearly([0-9]{0,3})-plan"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_1116($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "accordion-button"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_1132($|,)))"
            }, {
                "function": "_css",
                "arg0": ["macro", 23],
                "arg1": "div.ReactModalPortal button.styles__ProdigyWebsiteButton-sc-1cms38v-4"
            }, {
                "function": "_css",
                "arg0": ["macro", 23],
                "arg1": "div.ReactModalPortal a.styles__ExternalStyledLink-sc-14ylfm6-1"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_1187($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "Membership Continue To Payment"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "priceToggleChange"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "dashboard"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.load"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "prodigygame.com"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "\/Memberships\/math\/game\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "\\\/game\\\/(start|login|signup).*"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": ".*\\\/players\\\/.*|.*game-portal.*|.*mythical-epics.*|.*login.*"
            }, {
                "function": "_re",
                "arg0": ["macro", 39],
                "arg1": "(sso|math|english)"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "game-login-successful"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": ",C0002,"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "OneTrustGroupsUpdated"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": ",C0004,"
            }, {
                "function": "_cn",
                "arg0": ["macro", 34],
                "arg1": "pets"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_792($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "PlayBtn"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "brand-solid"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_794($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": ".*\\\/(purchase|parent|teacher)\\\/.*"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "zw=1"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "infl_referral_campaign_id"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "infl_share_token"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "solid-on-light-bg Play-jrAyFb jvAJZy ExternalStyledLink-kYaiSi bvUKgS"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_334($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "styles__StyledLink-sc-1sldbtm-0 ePOpBo styles__Play-sc-1gnqdp9-6 bfJqsm solid-on-light-bg"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_333($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "preview-prodigyeducationwebsitedevelop.gtsb.io"
            }, {
                "function": "_cn",
                "arg0": ["macro", 39],
                "arg1": "play"
            }, {
                "function": "_re",
                "arg0": ["macro", 16],
                "arg1": ".*\\\/Memberships\\\/math\\\/game\\\/.*|https\\:\\\/\\\/get\\.prodigygame\\.com\\\/math\\-game\\\/.*",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 39],
                "arg1": "www|get"
            }, {
                "function": "_eq",
                "arg0": ["macro", 125],
                "arg1": "true"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "parent_delay_registration"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "Teacher Login|Parent Login"
            }, {
                "function": "_cn",
                "arg0": ["macro", 127],
                "arg1": "false"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "Classroom Created"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "\/main-en\/blog\/reading-websites\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "\/main-en\/blog\/homeschool-curriculum\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "main-en\/blog\/is-prodigy-membership-worth-it\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "main-en\/blog\/classroom-management-strategies\/"
            }, {
                "function": "_ew",
                "arg0": ["macro", 25],
                "arg1": "main-en\/blog\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "\/blog\/parental-involvement-in-education\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "\/main-en\/blog\/educational-games-for-kids\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "main-en\/game-portal\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "\/main-en\/prodigy-level-up\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "main-en\/blog\/riddles-for-kids\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "pages\/teachers"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "\/main-en\/prodigy-ultimate\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "^\\S+(\\\/blog\\\/)+[a-z0-9]+(?:-[a-z0-9]+)*\\\/?$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 130],
                "arg1": "[A-Za-z1-9].*"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.historyChange-v2"
            }, {
                "function": "_eq",
                "arg0": ["macro", 130],
                "arg1": "undefined"
            }, {
                "function": "_re",
                "arg0": ["macro", 16],
                "arg1": ".*\\\/prodigy-member(s)?.*\\?tmu31522"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "\/main-en\/prodigy-member\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 17],
                "arg1": "mt-v1"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.init_consent"
            }, {
                "function": "_cn",
                "arg0": ["macro", 17],
                "arg1": "mt-v2"
            }, {
                "function": "_cn",
                "arg0": ["macro", 17],
                "arg1": "mt-v3"
            }, {
                "function": "_cn",
                "arg0": ["macro", 34],
                "arg1": "\/Memberships\/purchase"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "\/Memberships\/purchase"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_925($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "Membership Successfully Purchased"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.elementVisibility"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)10754089_1225($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": ".*parent.*|.*\\\/dashboard\\\/.*|.*\\\/premises.*"
            }, {
                "function": "_lt",
                "arg0": ["macro", 138],
                "arg1": "2"
            }],
            "rules": [
                [
                    ["if", 0, 1],
                    ["add", 1, 4, 45, 46, 146, 153, 295]
                ],
                [
                    ["if", 5],
                    ["unless", 4],
                    ["add", 2, 309, 333]
                ],
                [
                    ["if", 6],
                    ["add", 3, 6, 27, 33, 67, 301, 327, 360]
                ],
                [
                    ["if", 7],
                    ["add", 5, 28, 44, 66, 147, 154, 361]
                ],
                [
                    ["if", 8, 9],
                    ["add", 7, 168]
                ],
                [
                    ["if", 9, 11],
                    ["add", 8, 163]
                ],
                [
                    ["if", 12, 13, 14],
                    ["add", 9]
                ],
                [
                    ["if", 12, 13, 15],
                    ["add", 10]
                ],
                [
                    ["if", 16],
                    ["add", 11, 192]
                ],
                [
                    ["if", 17, 18, 19],
                    ["add", 12, 297]
                ],
                [
                    ["if", 21, 22],
                    ["add", 13]
                ],
                [
                    ["if", 22, 23, 24],
                    ["add", 14]
                ],
                [
                    ["if", 25],
                    ["add", 15, 17, 39, 42, 180, 300]
                ],
                [
                    ["if", 9, 26, 27],
                    ["add", 16]
                ],
                [
                    ["if", 22, 28],
                    ["add", 18, 191, 329]
                ],
                [
                    ["if", 29, 30],
                    ["add", 19, 173]
                ],
                [
                    ["if", 31],
                    ["add", 20]
                ],
                [
                    ["if", 32],
                    ["add", 21, 208]
                ],
                [
                    ["if", 33],
                    ["add", 22, 205]
                ],
                [
                    ["if", 34],
                    ["add", 23, 209]
                ],
                [
                    ["if", 22, 35],
                    ["add", 24, 199]
                ],
                [
                    ["if", 36],
                    ["add", 25, 174]
                ],
                [
                    ["if", 37, 38, 39],
                    ["add", 26, 181]
                ],
                [
                    ["if", 40, 41],
                    ["add", 29, 78]
                ],
                [
                    ["if", 42, 43],
                    ["add", 30, 185]
                ],
                [
                    ["if", 9, 44],
                    ["add", 31, 171]
                ],
                [
                    ["if", 9, 45],
                    ["add", 32, 172]
                ],
                [
                    ["if", 46],
                    ["add", 34, 202]
                ],
                [
                    ["if", 47],
                    ["add", 35]
                ],
                [
                    ["if", 48, 49],
                    ["add", 36, 52, 190]
                ],
                [
                    ["if", 22, 50],
                    ["add", 36, 52, 58, 190]
                ],
                [
                    ["if", 9, 51],
                    ["add", 37, 175]
                ],
                [
                    ["if", 9, 52],
                    ["add", 38, 176]
                ],
                [
                    ["if", 13, 53],
                    ["add", 40]
                ],
                [
                    ["if", 49, 57],
                    ["add", 41, 52, 210, 312]
                ],
                [
                    ["if", 49, 58],
                    ["add", 41, 52, 210]
                ],
                [
                    ["if", 22, 57],
                    ["add", 41, 50, 52, 58, 210, 283]
                ],
                [
                    ["if", 22, 59],
                    ["add", 41, 50, 52, 58, 210, 268]
                ],
                [
                    ["if", 60, 61, 62],
                    ["add", 43, 193]
                ],
                [
                    ["if", 22, 63],
                    ["add", 47, 48, 194, 50]
                ],
                [
                    ["if", 38, 64, 67, 68],
                    ["unless", 65, 66],
                    ["add", 49, 170]
                ],
                [
                    ["if", 22, 69],
                    ["unless", 70, 71, 72, 73, 74],
                    ["add", 50]
                ],
                [
                    ["if", 40, 76],
                    ["add", 51]
                ],
                [
                    ["if", 40, 77],
                    ["add", 51]
                ],
                [
                    ["if", 79],
                    ["add", 53]
                ],
                [
                    ["if", 80],
                    ["add", 54]
                ],
                [
                    ["if", 22, 81],
                    ["add", 55]
                ],
                [
                    ["if", 82],
                    ["add", 56]
                ],
                [
                    ["if", 83],
                    ["add", 57]
                ],
                [
                    ["if", 9, 84],
                    ["add", 59, 169]
                ],
                [
                    ["if", 85],
                    ["add", 60, 201]
                ],
                [
                    ["if", 86],
                    ["add", 61, 200]
                ],
                [
                    ["if", 87],
                    ["add", 62, 203]
                ],
                [
                    ["if", 88],
                    ["add", 63, 189]
                ],
                [
                    ["if", 89],
                    ["add", 64, 204]
                ],
                [
                    ["if", 49, 90],
                    ["add", 65]
                ],
                [
                    ["if", 9, 91, 92],
                    ["unless", 93, 94, 95, 96, 97, 98],
                    ["add", 68, 197]
                ],
                [
                    ["if", 38, 99, 100, 101],
                    ["add", 69, 179]
                ],
                [
                    ["if", 9, 102, 108],
                    ["unless", 103, 104, 105, 106, 107],
                    ["add", 70, 158]
                ],
                [
                    ["if", 38, 109, 110],
                    ["add", 71, 177]
                ],
                [
                    ["if", 30, 111],
                    ["add", 72, 196]
                ],
                [
                    ["if", 22, 112],
                    ["add", 72, 196]
                ],
                [
                    ["if", 113, 114],
                    ["add", 73]
                ],
                [
                    ["if", 9, 115],
                    ["add", 74]
                ],
                [
                    ["if", 13, 116, 117],
                    ["add", 75]
                ],
                [
                    ["if", 38, 122, 123],
                    ["unless", 118, 119, 120, 121],
                    ["add", 76]
                ],
                [
                    ["if", 61, 124, 126],
                    ["unless", 125],
                    ["add", 77, 195]
                ],
                [
                    ["if", 127],
                    ["add", 79, 89, 91, 206, 298, 311, 349, 355]
                ],
                [
                    ["if", 128],
                    ["add", 80, 88, 92, 207, 299, 310, 348, 356]
                ],
                [
                    ["if", 9, 102, 129],
                    ["unless", 104, 106, 107],
                    ["add", 81, 178]
                ],
                [
                    ["if", 130, 131, 132],
                    ["add", 82]
                ],
                [
                    ["if", 130, 131, 134],
                    ["add", 83]
                ],
                [
                    ["if", 130, 131, 135],
                    ["add", 84]
                ],
                [
                    ["if", 13, 130, 136],
                    ["add", 85]
                ],
                [
                    ["if", 13, 130, 137],
                    ["add", 86]
                ],
                [
                    ["if", 13, 130, 138],
                    ["add", 87]
                ],
                [
                    ["if", 139, 140],
                    ["add", 90, 313]
                ],
                [
                    ["if", 141, 142],
                    ["add", 93, 96, 97, 104, 107, 108, 130, 149, 186, 296, 317, 318, 321]
                ],
                [
                    ["if", 142, 143],
                    ["add", 94, 98, 99, 102, 105, 109, 110, 129, 148, 188, 314, 315, 318, 319]
                ],
                [
                    ["if", 142, 144],
                    ["add", 95, 100, 101, 103, 106, 111, 112, 128, 150, 187, 316, 318, 320, 322]
                ],
                [
                    ["if", 145, 147, 148],
                    ["unless", 146],
                    ["add", 113, 114]
                ],
                [
                    ["if", 149],
                    ["add", 115, 116, 117, 184, 324]
                ],
                [
                    ["if", 150],
                    ["add", 118, 198, 213]
                ],
                [
                    ["if", 151],
                    ["add", 119]
                ],
                [
                    ["if", 75, 131, 152],
                    ["add", 120]
                ],
                [
                    ["if", 38, 153, 157],
                    ["unless", 154, 155, 156],
                    ["add", 121, 166]
                ],
                [
                    ["if", 38, 158, 159],
                    ["unless", 154],
                    ["add", 122]
                ],
                [
                    ["if", 40, 160],
                    ["add", 123]
                ],
                [
                    ["if", 40, 161],
                    ["add", 124]
                ],
                [
                    ["if", 40, 162],
                    ["add", 125]
                ],
                [
                    ["if", 38, 156, 163],
                    ["unless", 154],
                    ["add", 126]
                ],
                [
                    ["if", 164, 165],
                    ["add", 127, 183]
                ],
                [
                    ["if", 166],
                    ["add", 131, 167]
                ],
                [
                    ["if", 38, 167, 168],
                    ["add", 132, 182]
                ],
                [
                    ["if", 38, 169, 170],
                    ["add", 133, 159]
                ],
                [
                    ["if", 38, 169, 171, 172],
                    ["add", 134, 160, 337]
                ],
                [
                    ["if", 142],
                    ["add", 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 212, 328, 341, 342, 343, 344, 345, 346, 347, 350]
                ],
                [
                    ["if", 22],
                    ["add", 145, 216, 217, 220, 221, 222, 223, 224, 225, 226, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 242, 243, 244, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 267, 270, 273, 276, 279, 282, 286, 287, 288, 289, 291, 292, 293]
                ],
                [
                    ["if", 38, 173, 174],
                    ["add", 151, 152, 162]
                ],
                [
                    ["if", 175],
                    ["add", 155, 330]
                ],
                [
                    ["if", 176],
                    ["add", 155, 331]
                ],
                [
                    ["if", 177],
                    ["add", 155, 332]
                ],
                [
                    ["if", 38, 130, 178],
                    ["add", 156, 164]
                ],
                [
                    ["if", 9, 130, 179],
                    ["add", 157, 165]
                ],
                [
                    ["if", 131, 180],
                    ["add", 161]
                ],
                [
                    ["if", 9, 181],
                    ["add", 211]
                ],
                [
                    ["if", 38, 182, 183],
                    ["add", 211]
                ],
                [
                    ["if", 184],
                    ["add", 212]
                ],
                [
                    ["if", 185],
                    ["add", 214]
                ],
                [
                    ["if", 3, 186],
                    ["add", 215]
                ],
                [
                    ["if", 140],
                    ["add", 218, 219, 227, 241, 248, 249, 250, 251]
                ],
                [
                    ["if", 187],
                    ["add", 245, 246, 247, 253, 290]
                ],
                [
                    ["if", 22, 188],
                    ["unless", 54, 133, 189, 190, 191, 192],
                    ["add", 252]
                ],
                [
                    ["if", 193],
                    ["add", 265]
                ],
                [
                    ["if", 194, 195],
                    ["add", 266, 269, 275, 278, 281]
                ],
                [
                    ["if", 22, 191],
                    ["add", 271],
                    ["block", 306]
                ],
                [
                    ["if", 195, 196],
                    ["add", 272, 284]
                ],
                [
                    ["if", 38, 197, 198],
                    ["unless", 154],
                    ["add", 274]
                ],
                [
                    ["if", 9, 199],
                    ["unless", 154],
                    ["add", 277]
                ],
                [
                    ["if", 38, 200, 201],
                    ["unless", 154],
                    ["add", 280]
                ],
                [
                    ["if", 22, 188, 202],
                    ["unless", 54, 133, 190, 191, 192],
                    ["add", 285]
                ],
                [
                    ["if", 22, 203],
                    ["add", 294]
                ],
                [
                    ["if", 22, 204, 205],
                    ["add", 302]
                ],
                [
                    ["if", 38, 206, 207],
                    ["add", 303]
                ],
                [
                    ["if", 38, 208, 209],
                    ["add", 303]
                ],
                [
                    ["if", 22, 210],
                    ["add", 304]
                ],
                [
                    ["if", 22, 90],
                    ["add", 305]
                ],
                [
                    ["if", 22],
                    ["unless", 211],
                    ["add", 306]
                ],
                [
                    ["if", 187, 213],
                    ["add", 307]
                ],
                [
                    ["if", 215],
                    ["unless", 214],
                    ["add", 308, 334]
                ],
                [
                    ["if", 216],
                    ["add", 323, 357]
                ],
                [
                    ["if", 218],
                    ["unless", 217],
                    ["add", 325]
                ],
                [
                    ["if", 218],
                    ["add", 326]
                ],
                [
                    ["if", 22, 219],
                    ["add", 329]
                ],
                [
                    ["if", 22, 220],
                    ["add", 329]
                ],
                [
                    ["if", 22, 221],
                    ["add", 329]
                ],
                [
                    ["if", 22, 222],
                    ["add", 329]
                ],
                [
                    ["if", 22, 223],
                    ["add", 329]
                ],
                [
                    ["if", 22, 224],
                    ["add", 329]
                ],
                [
                    ["if", 22, 225],
                    ["add", 329]
                ],
                [
                    ["if", 22, 226],
                    ["add", 329]
                ],
                [
                    ["if", 22, 227],
                    ["add", 329]
                ],
                [
                    ["if", 22, 228],
                    ["add", 329]
                ],
                [
                    ["if", 22, 229],
                    ["add", 329]
                ],
                [
                    ["if", 22, 230],
                    ["add", 329]
                ],
                [
                    ["if", 231, 232, 233],
                    ["add", 335]
                ],
                [
                    ["if", 22, 231, 232],
                    ["unless", 234],
                    ["add", 335]
                ],
                [
                    ["if", 22, 235],
                    ["add", 336]
                ],
                [
                    ["if", 236, 237, 238],
                    ["add", 338]
                ],
                [
                    ["if", 236, 238, 239],
                    ["add", 339]
                ],
                [
                    ["if", 236, 238, 240],
                    ["add", 340]
                ],
                [
                    ["if", 38, 241, 243],
                    ["unless", 242],
                    ["add", 351]
                ],
                [
                    ["if", 244],
                    ["add", 352]
                ],
                [
                    ["if", 245, 246],
                    ["add", 353, 354]
                ],
                [
                    ["if", 148, 247],
                    ["add", 358]
                ],
                [
                    ["if", 148, 248],
                    ["add", 359]
                ],
                [
                    ["if", 3],
                    ["unless", 2],
                    ["block", 1, 4, 15, 17, 42, 45, 46, 65, 82, 83, 84, 85, 86, 87, 90, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 107, 109, 111, 115, 116, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 146, 147, 148, 149, 150, 153, 154, 155, 161, 295, 296, 297, 300, 306, 307, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 326, 341, 342, 343, 344, 345, 346, 347]
                ],
                [
                    ["if", 3],
                    ["unless", 10],
                    ["block", 7, 8, 9, 10, 11, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40, 41, 43, 47, 48, 49, 50, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 81, 104, 105, 106, 108, 110, 112, 117, 118, 119, 120, 121, 122, 126, 127, 128, 129, 130, 131, 133, 134, 151, 156, 157, 158, 159, 160, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 208, 209, 210, 211, 213, 302, 303, 305, 325, 328, 330, 331, 332, 338, 339, 340, 350, 351, 357]
                ],
                [
                    ["if", 3],
                    ["unless", 20],
                    ["block", 12, 312, 329, 335, 336, 337]
                ],
                [
                    ["if", 22, 54],
                    ["block", 40]
                ],
                [
                    ["if", 13, 55, 56],
                    ["block", 40]
                ],
                [
                    ["if", 22, 75],
                    ["block", 50]
                ],
                [
                    ["if", 40, 78],
                    ["block", 51]
                ],
                [
                    ["if", 3, 133],
                    ["block", 82, 83, 84]
                ],
                [
                    ["if", 22, 212],
                    ["block", 306]
                ]
            ]
        },
        "runtime": [
                [50, "__cvt_10754089_1272", [46, "a"],
                    [41, "c", "d", "e", "f"],
                    [52, "b", ["require", "copyFromDataLayer"]],
                    [3, "c", ["b", "purchaser_name"]],
                    [3, "d", [2, [15, "c"], "split", [7, " "]]],
                    [22, [18, [17, [15, "d"], "length"], 2],
                        [46, [3, "e", [2, [15, "d"], "pop", [7]]],
                            [3, "f", [2, [15, "d"], "join", [7, " "]]],
                            [36, [15, "f"]]
                        ],
                        [46, [36, [16, [15, "d"], 0]]]
                    ],
                    [36, "none"]
                ],
                [50, "__cvt_10754089_1274", [46, "a"],
                    [41, "c", "d", "e"],
                    [52, "b", ["require", "copyFromDataLayer"]],
                    [3, "c", ["b", "purchaser_name"]],
                    [3, "d", [2, [15, "c"], "split", [7, " "]]],
                    [22, [18, [17, [15, "d"], "length"], 1],
                        [46, [3, "e", [2, [15, "d"], "pop", [7]]],
                            [36, [15, "e"]]
                        ],
                        [46, [36, ""]]
                    ]
                ],
                [50, "__cvt_10754089_1275", [46, "a"],
                    [41, "d", "e"],
                    [52, "b", ["require", "JSON"]],
                    [52, "c", ["require", "localStorage"]],
                    [3, "d", [2, [15, "c"], "getItem", [7, "ajs_user_traits"]]],
                    [22, [21, [15, "d"],
                            [45]
                        ],
                        [46, [3, "e", [2, [15, "b"], "parse", [7, [15, "d"]]]],
                            [22, [21, [15, "e"],
                                    [44]
                                ],
                                [46, [36, [17, [15, "e"], "name"]]],
                                [46, [36, [44]]]
                            ]
                        ],
                        [46, [36, [44]]]
                    ]
                ],
                [50, "__cvt_10754089_1276", [46, "a"],
                    [41, "d", "e", "f", "g", "h"],
                    [52, "b", ["require", "JSON"]],
                    [52, "c", ["require", "localStorage"]],
                    [3, "d", [2, [15, "c"], "getItem", [7, "ajs_user_traits"]]],
                    [22, [21, [15, "d"],
                            [45]
                        ],
                        [46, [3, "e", [2, [15, "b"], "parse", [7, [15, "d"]]]],
                            [22, [21, [15, "e"],
                                    [44]
                                ],
                                [46, [3, "f", [2, [17, [15, "e"], "name"], "split", [7, " "]]],
                                    [22, [18, [17, [15, "f"], "length"], 2],
                                        [46, [3, "g", [2, [15, "f"], "pop", [7]]],
                                            [3, "h", [2, [15, "f"], "join", [7, " "]]],
                                            [36, [15, "h"]]
                                        ],
                                        [46, [36, [16, [15, "f"], 0]]]
                                    ]
                                ],
                                [46, [36, [44]]]
                            ]
                        ],
                        [46, [36, [44]]]
                    ]
                ],
                [50, "__cvt_10754089_1277", [46, "a"],
                    [41, "d", "e", "f", "g"],
                    [52, "b", ["require", "JSON"]],
                    [52, "c", ["require", "localStorage"]],
                    [3, "d", [2, [15, "c"], "getItem", [7, "ajs_user_traits"]]],
                    [22, [21, [15, "d"],
                            [45]
                        ],
                        [46, [3, "e", [2, [15, "b"], "parse", [7, [15, "d"]]]],
                            [22, [21, [15, "e"],
                                    [44]
                                ],
                                [46, [3, "f", [2, [17, [15, "e"], "name"], "split", [7, " "]]],
                                    [22, [18, [17, [15, "f"], "length"], 1],
                                        [46, [3, "g", [2, [15, "f"], "pop", [7]]],
                                            [36, [15, "g"]]
                                        ],
                                        [46, [36, ""]]
                                    ]
                                ],
                                [46, [36, [44]]]
                            ]
                        ],
                        [46, [36, [44]]]
                    ]
                ],
                [50, "__cvt_10754089_1280", [46, "a"],
                    [41, "d", "e"],
                    [52, "b", ["require", "JSON"]],
                    [52, "c", ["require", "localStorage"]],
                    [3, "d", [2, [15, "c"], "getItem", [7, "ajs_user_traits"]]],
                    [22, [21, [15, "d"],
                            [45]
                        ],
                        [46, [3, "e", [2, [15, "b"], "parse", [7, [15, "d"]]]],
                            [22, [21, [15, "e"],
                                    [44]
                                ],
                                [46, [36, [16, [15, "e"],
                                    [17, [15, "a"], "userValueKey"]
                                ]]],
                                [46, [36, [44]]]
                            ]
                        ],
                        [46, [36, [44]]]
                    ]
                ],
                [50, "__cvt_10754089_1282", [46, "a"],
                    [41, "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"],
                    [52, "b", ["require", "JSON"]],
                    [52, "c", ["require", "localStorage"]],
                    [52, "d", ["require", "getCookieValues"]],
                    [3, "e", ""],
                    [3, "f", ["d", "_fbc"]],
                    [3, "e", [0, [15, "e"],
                        [0, "FBC:", [39, [12, [16, [15, "f"], 0],
                            [44]
                        ], "false", "true"]]
                    ]],
                    [3, "g", ["d", "_fbp"]],
                    [3, "e", [0, [15, "e"],
                        [0, ", FBP:", [39, [12, [16, [15, "g"], 0],
                            [44]
                        ], "false", "true"]]
                    ]],
                    [3, "h", [39, [30, [12, [17, [15, "a"], "eventID"],
                            [44]
                        ],
                        [12, [17, [15, "a"], "eventID"],
                            [45]
                        ]
                    ], "undefined", "true"]],
                    [3, "i", [2, [15, "c"], "getItem", [7, "ajs_user_traits"]]],
                    [3, "j", "false"],
                    [3, "k", "false"],
                    [3, "l", "false"],
                    [3, "m", "false"],
                    [22, [21, [15, "i"],
                            [45]
                        ],
                        [46, [3, "n", [2, [15, "b"], "parse", [7, [15, "i"]]]],
                            [22, [21, [15, "n"],
                                    [44]
                                ],
                                [46, [3, "o", [2, [17, [15, "n"], "name"], "split", [7, " "]]],
                                    [22, [18, [17, [15, "o"], "length"], 2],
                                        [46, [3, "l", [39, [12, [2, [15, "o"], "pop", [7]],
                                                [44]
                                            ], "false", "true"]],
                                            [3, "k", [39, [12, [2, [15, "o"], "join", [7, " "]],
                                                [44]
                                            ], "false", "true"]]
                                        ],
                                        [46, [3, "l", [39, [12, [2, [15, "o"], "pop", [7]],
                                                [44]
                                            ], "false", "true"]],
                                            [3, "k", [39, [12, [16, [15, "o"], 0],
                                                [44]
                                            ], "false", "true"]]
                                        ]
                                    ],
                                    [3, "m", [39, [12, [17, [15, "n"], "userId"],
                                        [44]
                                    ], "false", "true"]],
                                    [3, "j", [39, [12, [17, [15, "n"], "email"],
                                        [44]
                                    ], "false", "true"]]
                                ]
                            ]
                        ]
                    ],
                    [3, "e", [0, [15, "e"],
                        [0, [0, [0, [0, [0, [0, [0, [0, [0, ", email_address:", [15, "j"]], ", user_id:"],
                                        [15, "m"]
                                    ], ", first_name:"],
                                    [15, "k"]
                                ], ", last_name"],
                                [15, "l"]
                            ], ", event_id:"],
                            [15, "h"]
                        ]
                    ]],
                    [36, [15, "e"]]
                ],
                [50, "__cvt_10754089_235", [46, "a"],
                    [41, "b", "c", "d", "e", "f", "g", "h", "i", "j"],
                    [50, "k", [46],
                        [41, "n", "o", "p"],
                        [3, "n", [8]],
                        [3, "o", 0],
                        [42, [23, [15, "o"],
                                [17, [15, "arguments"], "length"]
                            ],
                            [35, [3, "o", [0, [15, "o"], 1]]], false, [46, [47, "p", [16, [15, "arguments"],
                                    [15, "o"]
                                ],
                                [46, [43, [15, "n"],
                                    [15, "p"],
                                    [16, [16, [15, "arguments"],
                                            [15, "o"]
                                        ],
                                        [15, "p"]
                                    ]
                                ]]
                            ]]
                        ],
                        [36, [15, "n"]]
                    ],
                    [50, "l", [46],
                        [41, "n"],
                        [3, "n", ["e", "snaptr"]],
                        [22, [15, "n"],
                            [46, [36, [15, "n"]]]
                        ],
                        ["j", "snaptr", [51, "", [7],
                            [41, "o"],
                            [3, "o", ["e", "snaptr.handleRequest"]],
                            [22, [15, "o"],
                                [46, ["c", "snaptr.handleRequest.apply", [45],
                                    [15, "arguments"]
                                ]],
                                [46, ["c", "snaptr.queue.push", [15, "arguments"]]]
                            ]
                        ]],
                        [36, ["e", "snaptr"]]
                    ],
                    [50, "m", [46],
                        [41, "n", "o", "p", "q"],
                        [3, "n", ["l"]],
                        ["f", "snaptr.queue"],
                        ["j", "snaptr.sendPixelByGTM", [15, "i"], true],
                        [43, [15, "a"], "integration", "gtm"],
                        ["b", "data = ", [15, "a"]],
                        [3, "o", [39, [17, [15, "a"], "additional_init_data"],
                            ["h", [17, [15, "a"], "additional_init_data"], "key", "value"],
                            [8]
                        ]],
                        [3, "p", ["k", [15, "a"],
                            [15, "o"]
                        ]],
                        ["b", "initData = ", [15, "p"]],
                        ["n", "init", [17, [15, "p"], "pixel_id"],
                            [15, "p"]
                        ],
                        ["n", "track", [17, [15, "p"], "pixel_id"],
                            [17, [15, "p"], "event_type"],
                            [15, "a"]
                        ],
                        [3, "q", "https://sc-static.net/scevent.min.js"],
                        ["g", [15, "q"],
                            [17, [15, "a"], "gtmOnSuccess"],
                            [17, [15, "a"], "gtmOnFailure"],
                            [15, "q"]
                        ]
                    ],
                    [3, "b", ["require", "logToConsole"]],
                    [3, "c", ["require", "callInWindow"]],
                    [3, "d", ["require", "callLater"]],
                    [3, "e", ["require", "copyFromWindow"]],
                    [3, "f", ["require", "createQueue"]],
                    [3, "g", ["require", "injectScript"]],
                    [3, "h", ["require", "makeTableMap"]],
                    [3, "i", ["require", "sendPixel"]],
                    [3, "j", ["require", "setInWindow"]],
                    ["m"]
                ],
                [50, "__cvt_10754089_526", [46, "a"],
                    [50, "h", [46],
                        [36, [30, ["b", "gtm.uniqueEventId"], "0"]]
                    ],
                    [50, "i", [46],
                        [41, "k"],
                        [3, "k", [2, [15, "g"], "getItem", [7, "gtmBrowserId"]]],
                        [22, [28, [15, "k"]],
                            [46, [3, "k", [0, ["e"],
                                    ["f", 100000, 999999]
                                ]],
                                [2, [15, "g"], "setItem", [7, "gtmBrowserId", [15, "k"]]]
                            ]
                        ],
                        [36, [15, "k"]]
                    ],
                    [50, "j", [46],
                        [41, "k"],
                        [3, "k", ["d", "gtmPageLoadId"]],
                        [22, [28, [15, "k"]],
                            [46, [3, "k", [0, ["e"],
                                    ["f", 100000, 999999]
                                ]],
                                ["c", "gtmPageLoadId", [15, "k"], false]
                            ]
                        ],
                        [36, [15, "k"]]
                    ],
                    [52, "b", ["require", "copyFromDataLayer"]],
                    [52, "c", ["require", "setInWindow"]],
                    [52, "d", ["require", "copyFromWindow"]],
                    [52, "e", ["require", "getTimestampMillis"]],
                    [52, "f", ["require", "generateRandom"]],
                    [52, "g", ["require", "localStorage"]],
                    [36, [0, [0, [0, ["i"], "_"],
                            ["j"]
                        ],
                        ["h"]
                    ]]
                ],
                [50, "__cvt_10754089_714", [46, "a"],
                    [52, "b", ["require", "copyFromDataLayer"]],
                    [52, "c", ["require", "getUrl"]],
                    [52, "d", ["b", "originalLocation"]],
                    [36, [30, [15, "d"],
                        [0, [0, [0, [0, ["c", "protocol"], "//"],
                                    ["c", "host"]
                                ],
                                ["c", "path"]
                            ],
                            ["c", "query"]
                        ]
                    ]]
                ],
                [50, "__cvt_10754089_715", [46, "a"],
                    [52, "b", ["require", "getUrl"]],
                    [36, [0, ["b", "path"],
                        ["b", "query"]
                    ]]
                ],
                [50, "__cvt_10754089_716", [46, "a"],
                    [36, [51, "", [7],
                        [41, "b"],
                        [3, "b", 19],
                        [36, [51, "", [7, "c"],
                            [2, [15, "c"], "set", [7, [0, "dimension", [15, "b"]],
                                [2, [15, "c"], "get", [7, "clientId"]]
                            ]]
                        ]]
                    ]]
                ],
                [50, "__cvt_10754089_717", [46, "a"],
                    [52, "b", ["require", "getTimestamp"]],
                    [52, "c", ["require", "Math"]],
                    [36, [2, [15, "c"], "round", [7, [10, ["b"], 1000]]]]
                ],
                [50, "__cvt_10754089_718", [46, "a"],
                    [52, "b", ["require", "copyFromDataLayer"]],
                    [52, "c", ["b", "totalInCents"]],
                    [22, [15, "c"],
                        [46, [36, [10, [15, "c"], 100]]]
                    ],
                    [36, [44]]
                ],
                [50, "__cvt_10754089_719", [46, "a"],
                    [52, "b", ["require", "copyFromDataLayer"]],
                    [52, "c", ["b", "purchase_amount"]],
                    [22, [15, "c"],
                        [46, [36, [10, [15, "c"], 100]]]
                    ],
                    [36, [44]]
                ],
                [50, "__awec", [46, "a"],
                    [50, "e", [46, "p", "q", "r"],
                        [22, [21, [16, [15, "q"],
                                    [15, "r"]
                                ],
                                [44]
                            ],
                            [46, [43, [15, "p"],
                                    [15, "r"],
                                    [16, [15, "q"],
                                        [15, "r"]
                                    ]
                                ],
                                [33, [15, "d"],
                                    [3, "d", [0, [15, "d"], 1]]
                                ]
                            ]
                        ]
                    ],
                    [50, "f", [46, "p"],
                        [3, "d", 0],
                        [52, "q", [8]],
                        ["e", [15, "q"],
                            [15, "p"], "first_name"
                        ],
                        ["e", [15, "q"],
                            [15, "p"], "last_name"
                        ],
                        ["e", [15, "q"],
                            [15, "p"], "street"
                        ],
                        ["e", [15, "q"],
                            [15, "p"], "sha256_first_name"
                        ],
                        ["e", [15, "q"],
                            [15, "p"], "sha256_last_name"
                        ],
                        ["e", [15, "q"],
                            [15, "p"], "sha256_street"
                        ],
                        ["e", [15, "q"],
                            [15, "p"], "city"
                        ],
                        ["e", [15, "q"],
                            [15, "p"], "region"
                        ],
                        ["e", [15, "q"],
                            [15, "p"], "country"
                        ],
                        ["e", [15, "q"],
                            [15, "p"], "postal_code"
                        ],
                        [22, [20, [15, "d"], 0],
                            [46, [36, [44]]],
                            [46, [36, [15, "q"]]]
                        ]
                    ],
                    [52, "b", ["require", "getType"]],
                    [41, "c"],
                    [3, "c", [8]],
                    [41, "d"],
                    [3, "d", 0],
                    [41, "g"],
                    [3, "g", [16, [15, "a"], "mode"]],
                    [38, [15, "g"],
                        [46, "CODE", "AUTO"],
                        [46, [5, [46, [52, "h", [7]],
                                [52, "i", [30, [16, [15, "a"], "dataSource"],
                                    [8]
                                ]],
                                ["e", [15, "c"],
                                    [15, "i"], "email"
                                ],
                                ["e", [15, "c"],
                                    [15, "i"], "phone_number"
                                ],
                                ["e", [15, "c"],
                                    [15, "i"], "sha256_email_address"
                                ],
                                ["e", [15, "c"],
                                    [15, "i"], "sha256_phone_number"
                                ],
                                [52, "j", [16, [15, "i"], "address"]],
                                [22, [20, ["b", [15, "j"]], "array"],
                                    [46, [66, "p", [15, "j"],
                                        [46, [53, [52, "q", ["f", [15, "p"]]],
                                            [22, [21, [15, "q"],
                                                    [44]
                                                ],
                                                [46, [2, [15, "h"], "push", [7, [15, "q"]]]]
                                            ]
                                        ]]
                                    ]],
                                    [46, [22, [15, "j"],
                                        [46, [53, [52, "p", ["f", [15, "j"]]],
                                            [22, [21, [15, "p"],
                                                    [44]
                                                ],
                                                [46, [2, [15, "h"], "push", [7, [15, "p"]]]]
                                            ]
                                        ]]
                                    ]]
                                ],
                                [22, [18, [17, [15, "h"], "length"], 0],
                                    [46, [43, [15, "c"], "address", [15, "h"]]]
                                ],
                                [4]
                            ]],
                            [5, [46, [52, "k", ["require", "internal.locateUserData"]],
                                [41, "l"],
                                [3, "l", [44]],
                                [22, [1, [16, [15, "a"], "enableElementBlocking"],
                                        [16, [15, "a"], "disabledElements"]
                                    ],
                                    [46, [53, [52, "p", [16, [15, "a"], "disabledElements"]],
                                        [3, "l", [7]],
                                        [65, "q", [15, "p"],
                                            [46, [2, [15, "l"], "push", [7, [16, [15, "q"], "column1"]]]]
                                        ]
                                    ]]
                                ],
                                [52, "m", ["k", [8, "excludeElementSelectors", [15, "l"]]]],
                                [52, "n", [1, [15, "m"],
                                    [16, [15, "m"], "elements"]
                                ]],
                                [22, [1, [15, "n"],
                                        [18, [17, [15, "n"], "length"], 0]
                                    ],
                                    [46, [53, [41, "p"],
                                        [3, "p", 0],
                                        [63, [7, "p"],
                                            [23, [15, "p"],
                                                [17, [15, "n"], "length"]
                                            ],
                                            [33, [15, "p"],
                                                [3, "p", [0, [15, "p"], 1]]
                                            ],
                                            [46, [53, [52, "q", [16, [15, "n"],
                                                    [15, "p"]
                                                ]],
                                                [22, [20, [16, [15, "q"], "type"], "email"],
                                                    [46, [43, [15, "c"], "email", [16, [15, "q"], "userData"]],
                                                        [4]
                                                    ]
                                                ]
                                            ]]
                                        ]
                                    ]]
                                ],
                                [4]
                            ]],
                            [9, [46, [3, "g", "MANUAL"],
                                ["e", [15, "c"],
                                    [15, "a"], "email"
                                ],
                                ["e", [15, "c"],
                                    [15, "a"], "phone_number"
                                ],
                                [52, "o", ["f", [15, "a"]]],
                                [22, [21, [15, "o"],
                                        [44]
                                    ],
                                    [46, [43, [15, "c"], "address", [7, [15, "o"]]]]
                                ]
                            ]]
                        ]
                    ],
                    [43, [15, "c"], "_tag_mode", [15, "g"]],
                    [36, [15, "c"]]
                ],
                [50, "__baut", [46, "a"],
                    [52, "b", ["require", "injectScript"]],
                    [52, "c", ["require", "callInWindow"]],
                    [52, "d", ["require", "makeTableMap"]],
                    [38, [17, [15, "a"], "eventType"],
                        [46, "PAGE_LOAD", "VARIABLE_REVENUE", "CUSTOM"],
                        [46, [5, [46, [43, [15, "a"], "eventType", "pageView"],
                                [4]
                            ]],
                            [5, [46, [43, [15, "a"], "eventType", "variableRevenue"],
                                [4]
                            ]],
                            [5, [46, [43, [15, "a"], "eventType", "custom"]]]
                        ]
                    ],
                    [22, [17, [15, "a"], "eventCategory"],
                        [46, [43, [15, "a"], "p_event_category", [17, [15, "a"], "eventCategory"]]]
                    ],
                    [22, [17, [15, "a"], "eventLabel"],
                        [46, [43, [15, "a"], "p_event_label", [17, [15, "a"], "eventLabel"]]]
                    ],
                    [22, [17, [15, "a"], "eventValue"],
                        [46, [43, [15, "a"], "p_event_value", [17, [15, "a"], "eventValue"]]]
                    ],
                    [22, [17, [15, "a"], "goalValue"],
                        [46, [43, [15, "a"], "p_revenue_value", [17, [15, "a"], "goalValue"]]]
                    ],
                    [52, "e", [51, "", [7],
                        [52, "i", [39, [30, [20, [17, [15, "a"], "eventType"], "pageView"],
                                [28, [17, [15, "a"], "customParamTable"]]
                            ],
                            [8],
                            ["d", [17, [15, "a"], "customParamTable"], "customParamName", "customParamValue"]
                        ]],
                        [52, "j", [8, "pageViewSpa", [7, "page_path", "page_title"], "variableRevenue", [7, "currency", "revenue_value"], "custom", [7, "event_category", "event_label", "event_value", "currency", "revenue_value"], "ecommerce", [7, "ecomm_prodid", "ecomm_pagetype", "ecomm_totalvalue", "ecomm_category"], "hotel", [7, "currency", "hct_base_price", "hct_booking_xref", "hct_checkin_date", "hct_checkout_date", "hct_length_of_stay", "hct_partner_hotel_id", "hct_total_price", "hct_pagetype"], "travel", [7, "travel_destid", "travel_originid", "travel_pagetype", "travel_startdate", "travel_enddate", "travel_totalvalue"]]],
                        [65, "k", [30, [16, [15, "j"],
                                    [17, [15, "a"], "eventType"]
                                ],
                                [7]
                            ],
                            [46, [43, [15, "i"],
                                [15, "k"],
                                [30, [16, [15, "i"],
                                        [15, "k"]
                                    ],
                                    [16, [15, "a"],
                                        [0, "p_", [15, "k"]]
                                    ]
                                ]
                            ]]
                        ],
                        [43, [15, "i"], "tpp", "1"],
                        [36, [15, "i"]]
                    ]],
                    [52, "f", [51, "", [7],
                        [52, "i", [39, [28, [17, [15, "a"], "customConfigTable"]],
                            [8],
                            ["d", [17, [15, "a"], "customConfigTable"], "customConfigName", "customConfigValue"]
                        ]],
                        [54, "k", [15, "i"],
                            [46, [22, [20, [16, [15, "i"],
                                    [15, "k"]
                                ], "true"],
                                [46, [43, [15, "i"],
                                    [15, "k"], true
                                ]],
                                [46, [22, [20, [16, [15, "i"],
                                        [15, "k"]
                                    ], "false"],
                                    [46, [43, [15, "i"],
                                        [15, "k"], false
                                    ]]
                                ]]
                            ]]
                        ],
                        [52, "j", [7, "navTimingApi", "enableAutoSpaTracking", "storeConvTrackCookies", "removeQueryFromUrls", "disableAutoPageView"]],
                        [65, "k", [15, "j"],
                            [46, [43, [15, "i"],
                                [15, "k"],
                                [30, [16, [15, "i"],
                                        [15, "k"]
                                    ],
                                    [16, [15, "a"],
                                        [0, "c_", [15, "k"]]
                                    ]
                                ]
                            ]]
                        ],
                        [43, [15, "i"], "ti", [17, [15, "a"], "tagId"]],
                        [43, [15, "i"], "tm", "gtm002"],
                        [36, [15, "i"]]
                    ]],
                    [52, "g", [51, "", [7],
                        [22, [20, [17, [15, "a"], "eventType"], "pageView"],
                            [46, [53, [52, "i", ["f"]],
                                ["c", "UET_init", [17, [15, "a"], "uetqName"],
                                    [15, "i"]
                                ],
                                ["c", "UET_push", [17, [15, "a"], "uetqName"], "pageLoad"]
                            ]],
                            [46, [53, [52, "i", ["e"]],
                                [22, [20, [17, [15, "a"], "eventType"], "pageViewSpa"],
                                    [46, ["c", "UET_push", [17, [15, "a"], "uetqName"], "event", "page_view", [15, "i"]]],
                                    [46, [53, [52, "j", [30, [30, [17, [15, "a"], "customEventAction"],
                                            [17, [15, "a"], "eventAction"]
                                        ], ""]],
                                        ["c", "UET_push", [17, [15, "a"], "uetqName"], "event", [15, "j"],
                                            [15, "i"]
                                        ]
                                    ]]
                                ]
                            ]]
                        ],
                        [2, [15, "a"], "gtmOnSuccess", [7]]
                    ]],
                    [52, "h", "https://bat.bing.com/bat.js"],
                    ["b", [15, "h"],
                        [15, "g"],
                        [17, [15, "a"], "gtmOnFailure"],
                        [15, "h"]
                    ]
                ],
                [50, "__bzi", [46, "a"],
                    [52, "b", ["require", "injectScript"]],
                    [52, "c", ["require", "setInWindow"]],
                    ["c", "_linkedin_data_partner_id", [17, [15, "a"], "id"]],
                    ["b", "https://snap.licdn.com/li.lms-analytics/insight.min.js", [17, [15, "a"], "gtmOnSuccess"],
                        [17, [15, "a"], "gtmOnFailure"]
                    ]
                ],
                [50, "__hjtc", [46, "a"],
                    [52, "b", ["require", "createArgumentsQueue"]],
                    [52, "c", ["require", "encodeUriComponent"]],
                    [52, "d", ["require", "injectScript"]],
                    [52, "e", ["require", "makeString"]],
                    [52, "f", ["require", "setInWindow"]],
                    ["b", "hj", "hj.q"],
                    [52, "g", [17, [15, "a"], "hotjar_site_id"]],
                    ["f", "_hjSettings", [8, "hjid", [15, "g"], "hjsv", 7, "scriptSource", "gtm"]],
                    ["d", [0, [0, "https://static.hotjar.com/c/hotjar-", ["c", ["e", [15, "g"]]]], ".js?sv=7"],
                        [17, [15, "a"], "gtmOnSuccess"],
                        [17, [15, "a"], "gtmOnFailure"]
                    ]
                ],
                [50, "__pntr", [46, "a"],
                    [52, "b", ["require", "copyFromWindow"]],
                    [52, "c", ["require", "createArgumentsQueue"]],
                    [52, "d", ["require", "injectScript"]],
                    [52, "e", ["require", "logToConsole"]],
                    [52, "f", ["require", "makeTableMap"]],
                    ["e", [0, "GTM PTag v1.4; tagId: ", [17, [15, "a"], "tagId"]]],
                    [52, "g", [28, ["b", "pintrk"]]],
                    [52, "h", ["c", "pintrk", "pintrk.queue"]],
                    [22, [15, "g"],
                        [46, [53, [52, "k", [8, "np", "gtm"]],
                            [22, [17, [15, "a"], "em"],
                                [46, [43, [15, "k"], "em", [17, [15, "a"], "em"]]]
                            ],
                            ["h", "load", [2, [17, [15, "a"], "tagId"], "toString", [7]],
                                [15, "k"]
                            ],
                            ["h", "page"]
                        ]],
                        [46, [22, [17, [15, "a"], "em"],
                            [46, [53, [52, "k", [8, "em", [17, [15, "a"], "em"]]],
                                ["h", "set", [15, "k"]]
                            ]]
                        ]]
                    ],
                    [22, [20, [17, [15, "a"], "eventName"], ""],
                        [46, [53, [52, "k", [8]],
                            ["h", "set", [15, "k"]]
                        ]]
                    ],
                    [52, "i", [51, "", [7],
                        [41, "k"],
                        [3, "k", [8]],
                        [22, [17, [15, "a"], "setCustomParams"],
                            [46, [3, "k", ["f", [17, [15, "a"], "values"], "name", "value"]]]
                        ],
                        [43, [15, "k"], "np", "gtm"],
                        [52, "l", [51, "", [7, "n"],
                            [22, [21, [16, [15, "a"],
                                        [15, "n"]
                                    ],
                                    [44]
                                ],
                                [46, [43, [15, "k"],
                                    [15, "n"],
                                    [16, [15, "a"],
                                        [15, "n"]
                                    ]
                                ]]
                            ]
                        ]],
                        [52, "m", [51, "", [7, "n"],
                            [22, [21, [16, [15, "a"],
                                        [15, "n"]
                                    ],
                                    [44]
                                ],
                                [46, [22, [20, [17, [15, "k"], "line_items"],
                                            [44]
                                        ],
                                        [46, [43, [15, "k"], "line_items", [7, [8]]]]
                                    ],
                                    [43, [16, [17, [15, "k"], "line_items"], 0],
                                        [15, "n"],
                                        [16, [15, "a"],
                                            [15, "n"]
                                        ]
                                    ]
                                ]
                            ]
                        ]],
                        [38, [17, [15, "a"], "eventName"],
                            [46, "watchvideo", "viewcategory", "custom", "signup", "lead", "search", "addtocart", "checkout", "pagevisit"],
                            [46, [5, [46]],
                                [5, [46]],
                                [5, [46, [4]]],
                                [5, [46]],
                                [5, [46, ["l", "lead_type"],
                                    [4]
                                ]],
                                [5, [46, ["l", "search_query"],
                                    [4]
                                ]],
                                [5, [46]],
                                [5, [46, ["l", "order_id"],
                                    ["l", "order_quantity"],
                                    ["l", "value"],
                                    ["l", "currency"]
                                ]],
                                [5, [46, ["m", "product_id"],
                                    ["m", "product_category"],
                                    [4]
                                ]],
                                [9, [46, [4]]]
                            ]
                        ],
                        [22, [21, [17, [15, "a"], "eventName"], ""],
                            [46, ["e", [0, "Firing Pinterest event: ", [17, [15, "a"], "eventName"]]],
                                ["e", "Event Data:"],
                                ["e", [15, "k"]],
                                ["h", "track", [17, [15, "a"], "eventName"],
                                    [15, "k"]
                                ]
                            ]
                        ],
                        [2, [15, "a"], "gtmOnSuccess", [7]]
                    ]],
                    [52, "j", [51, "", [7],
                        ["e", "Pinterest Error: Loading JS failed!"],
                        [2, [15, "a"], "gtmOnFailure", [7]]
                    ]],
                    ["d", "https://s.pinimg.com/ct/core.js", [15, "i"],
                        [15, "j"], "PinterestJS"
                    ]
                ],
                [50, "__r", [46, "a"],
                    [36, [13, [41, "$0"],
                        [3, "$0", ["require", "generateRandom"]],
                        ["$0", [30, [17, [15, "a"], "min"], 0],
                            [30, [17, [15, "a"], "max"], 2.147483647E9]
                        ]
                    ]]
                ],
                [50, "__twitter_website_tag", [46, "a"],
                    [50, "h", [46],
                        [41, "k"],
                        [3, "k", ["c", "twq"]],
                        [22, [15, "k"],
                            [46, [36, [15, "k"]]]
                        ],
                        ["g", "twq", [51, "", [7],
                            [52, "m", ["c", "twq.exe.apply"]],
                            [22, [15, "m"],
                                [46, ["b", "twq.exe.apply", [45],
                                    [15, "arguments"]
                                ]],
                                [46, ["b", "twq.queue.push", [15, "arguments"]]]
                            ]
                        ], true],
                        ["g", "twq.version", "1", true],
                        ["g", "twq.queue", [7], true],
                        [52, "l", [51, "", [7]]],
                        ["d", "https://static.ads-twitter.com/uwt.js", [15, "l"],
                            [15, "l"], "twitter_website_tag"
                        ],
                        [36, ["c", "twq"]]
                    ],
                    [52, "b", ["require", "callInWindow"]],
                    [52, "c", ["require", "copyFromWindow"]],
                    [52, "d", ["require", "injectScript"]],
                    [52, "e", ["require", "makeString"]],
                    [52, "f", ["require", "makeTableMap"]],
                    [52, "g", ["require", "setInWindow"]],
                    [41, "i"],
                    [3, "i", ["h"]],
                    ["i", "init", ["e", [17, [15, "a"], "twitter_pixel_id"]]],
                    [52, "j", ["f", [30, [17, [15, "a"], "event_parameters"],
                        [7]
                    ], "param_table_key_column", "param_table_value_column"]],
                    [22, [1, [15, "j"],
                            [2, [15, "j"], "hasOwnProperty", [7, "content_ids"]]
                        ],
                        [46, [53, [41, "k"],
                            [3, "k", [16, [15, "j"], "content_ids"]],
                            [3, "k", [2, [2, [15, "k"], "split", [7, "\""]], "join", [7, "'"]]],
                            [41, "l"],
                            [3, "l", [2, [2, [15, "k"], "slice", [7, [2, [15, "k"], "indexOf", [7, "["]],
                                [2, [15, "k"], "indexOf", [7, "]"]]
                            ]], "split", [7, ","]]],
                            [3, "l", [2, [15, "l"], "map", [7, [51, "", [7, "m"],
                                [36, [30, [16, [2, [15, "m"], "split", [7, "'"]], 1], ""]]
                            ]]]],
                            [43, [15, "j"], "content_ids", [15, "l"]]
                        ]]
                    ],
                    ["i", "track", ["e", [17, [15, "a"], "event_type"]],
                        [15, "j"]
                    ],
                    [2, [15, "a"], "gtmOnSuccess", [7]]
                ]

            ]

            ,
        "permissions": {
            "__cvt_10754089_1272": {
                "read_data_layer": {
                    "keyPatterns": ["purchaser_name"]
                }
            },
            "__cvt_10754089_1274": {
                "read_data_layer": {
                    "keyPatterns": ["purchaser_name"]
                }
            },
            "__cvt_10754089_1275": {
                "access_local_storage": {
                    "keys": [{
                        "key": "ajs_user_traits",
                        "read": true,
                        "write": false
                    }]
                }
            },
            "__cvt_10754089_1276": {
                "access_local_storage": {
                    "keys": [{
                        "key": "ajs_user_traits",
                        "read": true,
                        "write": false
                    }]
                }
            },
            "__cvt_10754089_1277": {
                "access_local_storage": {
                    "keys": [{
                        "key": "ajs_user_traits",
                        "read": true,
                        "write": false
                    }]
                }
            },
            "__cvt_10754089_1280": {
                "access_local_storage": {
                    "keys": [{
                        "key": "ajs_user_traits",
                        "read": true,
                        "write": false
                    }]
                }
            },
            "__cvt_10754089_1282": {
                "get_cookies": {
                    "cookieAccess": "specific",
                    "cookieNames": ["_fbc", "_fbp"]
                },
                "access_local_storage": {
                    "keys": [{
                        "key": "ajs_user_traits",
                        "read": true,
                        "write": false
                    }]
                }
            },
            "__cvt_10754089_235": {
                "inject_script": {
                    "urls": ["https:\/\/sc-static.net\/*", "https:\/\/tr.snapchat.com\/*"]
                },
                "logging": {
                    "environments": "debug"
                },
                "access_globals": {
                    "keys": [{
                        "key": "snaptr",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "snaptr.handleRequest",
                        "read": true,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "snaptr.handleRequest.apply",
                        "read": true,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "snaptr.queue",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "snaptr.queue.push",
                        "read": true,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "snaptr.sendPixelByGTM",
                        "read": true,
                        "write": true,
                        "execute": true
                    }]
                },
                "send_pixel": {
                    "allowedUrls": "specific",
                    "urls": ["https:\/\/tr.snapchat.com\/*"]
                }
            },
            "__cvt_10754089_526": {
                "read_data_layer": {
                    "keyPatterns": ["gtm.uniqueEventId"]
                },
                "access_globals": {
                    "keys": [{
                        "key": "gtmPageLoadId",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "access_local_storage": {
                    "keys": [{
                        "key": "gtmBrowserId",
                        "read": true,
                        "write": true
                    }]
                }
            },
            "__cvt_10754089_714": {
                "read_data_layer": {
                    "keyPatterns": ["originalLocation"]
                },
                "get_url": {
                    "urlParts": "any"
                }
            },
            "__cvt_10754089_715": {
                "get_url": {
                    "urlParts": "any"
                }
            },
            "__cvt_10754089_716": {},
            "__cvt_10754089_717": {},
            "__cvt_10754089_718": {
                "read_data_layer": {
                    "keyPatterns": ["totalInCents"]
                }
            },
            "__cvt_10754089_719": {
                "read_data_layer": {
                    "keyPatterns": ["purchase_amount"]
                }
            },
            "__awec": {
                "read_dom_elements": {
                    "selectors": [{
                        "type": "css",
                        "value": "*"
                    }]
                },
                "access_dom_element_property": {
                    "properties": [{
                        "property": "textContent",
                        "read": true,
                        "write": false
                    }, {
                        "property": "value",
                        "read": true,
                        "write": false
                    }, {
                        "property": "tagName",
                        "read": true,
                        "write": false
                    }, {
                        "property": "children",
                        "read": true,
                        "write": false
                    }, {
                        "property": "childElementCount",
                        "read": true,
                        "write": false
                    }]
                }
            },
            "__baut": {
                "inject_script": {
                    "urls": ["https:\/\/bat.bing.com\/bat.js"]
                },
                "access_globals": {
                    "keys": [{
                        "key": "UET_push",
                        "read": false,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "UET_init",
                        "read": false,
                        "write": false,
                        "execute": true
                    }]
                }
            },
            "__bzi": {
                "access_globals": {
                    "keys": [{
                        "key": "_linkedin_data_partner_id",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js"]
                }
            },
            "__hjtc": {
                "access_globals": {
                    "keys": [{
                        "key": "hj",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "hj.q",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_hjSettings",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/static.hotjar.com\/c\/hotjar-*"]
                }
            },
            "__pntr": {
                "access_globals": {
                    "keys": [{
                        "key": "pintrk",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "pintrk.queue",
                        "read": true,
                        "write": true,
                        "execute": true
                    }]
                },
                "logging": {
                    "environments": "debug"
                },
                "inject_script": {
                    "urls": ["https:\/\/s.pinimg.com\/ct\/core.js"]
                }
            },
            "__r": {},
            "__twitter_website_tag": {
                "access_globals": {
                    "keys": [{
                        "key": "twq",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "twq.exe",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "twq.queue",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "twq.queue.push",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "twq.version",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "twq.exe.apply",
                        "read": true,
                        "write": true,
                        "execute": true
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/static.ads-twitter.com\/uwt.js"]
                }
            }


        }

        ,
        "sandboxed_scripts": [
                "__cvt_10754089_1272", "__cvt_10754089_1274", "__cvt_10754089_1275", "__cvt_10754089_1276", "__cvt_10754089_1277", "__cvt_10754089_1280", "__cvt_10754089_1282", "__cvt_10754089_235", "__cvt_10754089_526", "__cvt_10754089_714", "__cvt_10754089_715", "__cvt_10754089_716", "__cvt_10754089_717", "__cvt_10754089_718", "__cvt_10754089_719"

            ]

            ,
        "security_groups": {
            "google": [
                "__awec",
                "__r"

            ],
            "nonGoogleScripts": [
                "__baut",
                "__bzi",
                "__hjtc",
                "__pntr",
                "__twitter_website_tag"

            ]


        }




    };

    var productSettings = {
        "AW-744949782": {
            "preAutoPii": true
        },
        "AW-822263323": {
            "preAutoPii": true
        }
    };

    (function() {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var C = this || self,
            D = function(n, v) {
                var w = n.split("."),
                    q = C;
                w[0] in q || "undefined" == typeof q.execScript || q.execScript("var " + w[0]);
                for (var t; w.length && (t = w.shift());) w.length || void 0 === v ? q = q[t] && q[t] !== Object.prototype[t] ? q[t] : q[t] = {} : q[t] = v
            };
        /*
         Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
        var E, F = function() {};
        (function() {
            function n(h, m) {
                h = h || "";
                m = m || {};
                for (var y in v) v.hasOwnProperty(y) && (m.N && (m["fix_" + y] = !0), m.G = m.G || m["fix_" + y]);
                var z = {
                        comment: /^\x3c!--/,
                        endTag: /^<\//,
                        atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                        startTag: /^</,
                        chars: /^[^<]/
                    },
                    e = {
                        comment: function() {
                            var a = h.indexOf("--\x3e");
                            if (0 <= a) return {
                                content: h.substr(4, a),
                                length: a + 3
                            }
                        },
                        endTag: function() {
                            var a = h.match(q);
                            if (a) return {
                                tagName: a[1],
                                length: a[0].length
                            }
                        },
                        atomicTag: function() {
                            var a = e.startTag();
                            if (a) {
                                var b = h.slice(a.length);
                                if (b.match(new RegExp("</\\s*" + a.tagName + "\\s*>", "i"))) {
                                    var c = b.match(new RegExp("([\\s\\S]*?)</\\s*" + a.tagName + "\\s*>", "i"));
                                    if (c) return {
                                        tagName: a.tagName,
                                        g: a.g,
                                        content: c[1],
                                        length: c[0].length + a.length
                                    }
                                }
                            }
                        },
                        startTag: function() {
                            var a = h.match(w);
                            if (a) {
                                var b = {};
                                a[2].replace(t, function(c, d, k, g, r) {
                                    var u = k || g || r || B.test(d) && d || null,
                                        l = document.createElement("div");
                                    l.innerHTML = u;
                                    b[d] = l.textContent || l.innerText || u
                                });
                                return {
                                    tagName: a[1],
                                    g: b,
                                    s: !!a[3],
                                    length: a[0].length
                                }
                            }
                        },
                        chars: function() {
                            var a = h.indexOf("<");
                            return {
                                length: 0 <= a ? a : h.length
                            }
                        }
                    },
                    f = function() {
                        for (var a in z)
                            if (z[a].test(h)) {
                                var b = e[a]();
                                return b ? (b.type = b.type || a, b.text = h.substr(0, b.length), h = h.slice(b.length), b) : null
                            }
                    };
                m.G && function() {
                    var a = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                        b = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,
                        c = [];
                    c.H = function() {
                        return this[this.length - 1]
                    };
                    c.v = function(l) {
                        var p = this.H();
                        return p && p.tagName && p.tagName.toUpperCase() === l.toUpperCase()
                    };
                    c.V = function(l) {
                        for (var p =
                                0, x; x = this[p]; p++)
                            if (x.tagName === l) return !0;
                        return !1
                    };
                    var d = function(l) {
                            l && "startTag" === l.type && (l.s = a.test(l.tagName) || l.s);
                            return l
                        },
                        k = f,
                        g = function() {
                            h = "</" + c.pop().tagName + ">" + h
                        },
                        r = {
                            startTag: function(l) {
                                var p = l.tagName;
                                "TR" === p.toUpperCase() && c.v("TABLE") ? (h = "<TBODY>" + h, u()) : m.oa && b.test(p) && c.V(p) ? c.v(p) ? g() : (h = "</" + l.tagName + ">" + h, u()) : l.s || c.push(l)
                            },
                            endTag: function(l) {
                                c.H() ? m.W && !c.v(l.tagName) ? g() : c.pop() : m.W && (k(), u())
                            }
                        },
                        u = function() {
                            var l = h,
                                p = d(k());
                            h = l;
                            if (p && r[p.type]) r[p.type](p)
                        };
                    f = function() {
                        u();
                        return d(k())
                    }
                }();
                return {
                    append: function(a) {
                        h += a
                    },
                    ea: f,
                    sa: function(a) {
                        for (var b;
                            (b = f()) && (!a[b.type] || !1 !== a[b.type](b)););
                    },
                    clear: function() {
                        var a = h;
                        h = "";
                        return a
                    },
                    ta: function() {
                        return h
                    },
                    stack: []
                }
            }
            var v = function() {
                    var h = {},
                        m = this.document.createElement("div");
                    m.innerHTML = "<P><I></P></I>";
                    h.va = "<P><I></P></I>" !== m.innerHTML;
                    m.innerHTML = "<P><i><P></P></i></P>";
                    h.ua = 2 === m.childNodes.length;
                    return h
                }(),
                w = /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                q = /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                t = /([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
                B = /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;
            n.supports = v;
            for (var A in v);
            E = n
        })();
        (function() {
            function n() {}

            function v(e) {
                return void 0 !== e && null !== e
            }

            function w(e, f, a) {
                var b, c = e && e.length || 0;
                for (b = 0; b < c; b++) f.call(a, e[b], b)
            }

            function q(e, f, a) {
                for (var b in e) e.hasOwnProperty(b) && f.call(a, b, e[b])
            }

            function t(e, f) {
                q(f, function(a, b) {
                    e[a] = b
                });
                return e
            }

            function B(e, f) {
                e = e || {};
                q(f, function(a, b) {
                    v(e[a]) || (e[a] = b)
                });
                return e
            }

            function A(e) {
                try {
                    return y.call(e)
                } catch (a) {
                    var f = [];
                    w(e, function(b) {
                        f.push(b)
                    });
                    return f
                }
            }
            var h = {
                    J: n,
                    K: n,
                    L: n,
                    M: n,
                    O: n,
                    P: function(e) {
                        return e
                    },
                    done: n,
                    error: function(e) {
                        throw e;
                    },
                    fa: !1
                },
                m = this;
            if (!m.postscribe) {
                var y = Array.prototype.slice,
                    z = function() {
                        function e(a, b, c) {
                            var d = "data-ps-" + b;
                            if (2 === arguments.length) {
                                var k = a.getAttribute(d);
                                return v(k) ? String(k) : k
                            }
                            v(c) && "" !== c ? a.setAttribute(d, c) : a.removeAttribute(d)
                        }

                        function f(a, b) {
                            var c = a.ownerDocument;
                            t(this, {
                                root: a,
                                options: b,
                                l: c.defaultView || c.parentWindow,
                                i: c,
                                o: E("", {
                                    N: !0
                                }),
                                u: [a],
                                B: "",
                                C: c.createElement(a.nodeName),
                                j: [],
                                h: []
                            });
                            e(this.C, "proxyof", 0)
                        }
                        f.prototype.write = function() {
                            [].push.apply(this.h, arguments);
                            for (var a; !this.m &&
                                this.h.length;) a = this.h.shift(), "function" === typeof a ? this.U(a) : this.D(a)
                        };
                        f.prototype.U = function(a) {
                            var b = {
                                type: "function",
                                value: a.name || a.toString()
                            };
                            this.A(b);
                            a.call(this.l, this.i);
                            this.I(b)
                        };
                        f.prototype.D = function(a) {
                            this.o.append(a);
                            for (var b, c = [], d, k;
                                (b = this.o.ea()) && !(d = b && "tagName" in b ? !!~b.tagName.toLowerCase().indexOf("script") : !1) && !(k = b && "tagName" in b ? !!~b.tagName.toLowerCase().indexOf("style") : !1);) c.push(b);
                            this.ka(c);
                            d && this.X(b);
                            k && this.Y(b)
                        };
                        f.prototype.ka = function(a) {
                            var b = this.R(a);
                            b.F && (b.Z = this.B + b.F, this.B += b.proxy, this.C.innerHTML = b.Z, this.ia())
                        };
                        f.prototype.R = function(a) {
                            var b = this.u.length,
                                c = [],
                                d = [],
                                k = [];
                            w(a, function(g) {
                                c.push(g.text);
                                if (g.g) {
                                    if (!/^noscript$/i.test(g.tagName)) {
                                        var r = b++;
                                        d.push(g.text.replace(/(\/?>)/, " data-ps-id=" + r + " $1"));
                                        "ps-script" !== g.g.id && "ps-style" !== g.g.id && k.push("atomicTag" === g.type ? "" : "<" + g.tagName + " data-ps-proxyof=" + r + (g.s ? " />" : ">"))
                                    }
                                } else d.push(g.text), k.push("endTag" === g.type ? g.text : "")
                            });
                            return {
                                wa: a,
                                raw: c.join(""),
                                F: d.join(""),
                                proxy: k.join("")
                            }
                        };
                        f.prototype.ia = function() {
                            for (var a, b = [this.C]; v(a = b.shift());) {
                                var c = 1 === a.nodeType;
                                if (!c || !e(a, "proxyof")) {
                                    c && (this.u[e(a, "id")] = a, e(a, "id", null));
                                    var d = a.parentNode && e(a.parentNode, "proxyof");
                                    d && this.u[d].appendChild(a)
                                }
                                b.unshift.apply(b, A(a.childNodes))
                            }
                        };
                        f.prototype.X = function(a) {
                            var b = this.o.clear();
                            b && this.h.unshift(b);
                            a.src = a.g.src || a.g.ma;
                            a.src && this.j.length ? this.m = a : this.A(a);
                            var c = this;
                            this.ja(a, function() {
                                c.I(a)
                            })
                        };
                        f.prototype.Y = function(a) {
                            var b = this.o.clear();
                            b && this.h.unshift(b);
                            a.type =
                                a.g.type || a.g.TYPE || "text/css";
                            this.la(a);
                            b && this.write()
                        };
                        f.prototype.la = function(a) {
                            var b = this.T(a);
                            this.ba(b);
                            a.content && (b.styleSheet && !b.sheet ? b.styleSheet.cssText = a.content : b.appendChild(this.i.createTextNode(a.content)))
                        };
                        f.prototype.T = function(a) {
                            var b = this.i.createElement(a.tagName);
                            b.setAttribute("type", a.type);
                            q(a.g, function(c, d) {
                                b.setAttribute(c, d)
                            });
                            return b
                        };
                        f.prototype.ba = function(a) {
                            this.D('<span id="ps-style"/>');
                            var b = this.i.getElementById("ps-style");
                            b.parentNode.replaceChild(a,
                                b)
                        };
                        f.prototype.A = function(a) {
                            a.ca = this.h;
                            this.h = [];
                            this.j.unshift(a)
                        };
                        f.prototype.I = function(a) {
                            a !== this.j[0] ? this.options.error({
                                message: "Bad script nesting or script finished twice"
                            }) : (this.j.shift(), this.write.apply(this, a.ca), !this.j.length && this.m && (this.A(this.m), this.m = null))
                        };
                        f.prototype.ja = function(a, b) {
                            var c = this.S(a),
                                d = this.ha(c),
                                k = this.options.J;
                            a.src && (c.src = a.src, this.ga(c, d ? k : function() {
                                b();
                                k()
                            }));
                            try {
                                this.aa(c), a.src && !d || b()
                            } catch (g) {
                                this.options.error(g), b()
                            }
                        };
                        f.prototype.S = function(a) {
                            var b =
                                this.i.createElement(a.tagName);
                            q(a.g, function(c, d) {
                                b.setAttribute(c, d)
                            });
                            a.content && (b.text = a.content);
                            return b
                        };
                        f.prototype.aa = function(a) {
                            this.D('<span id="ps-script"/>');
                            var b = this.i.getElementById("ps-script");
                            b.parentNode.replaceChild(a, b)
                        };
                        f.prototype.ga = function(a, b) {
                            function c() {
                                a = a.onload = a.onreadystatechange = a.onerror = null
                            }
                            var d = this.options.error;
                            t(a, {
                                onload: function() {
                                    c();
                                    b()
                                },
                                onreadystatechange: function() {
                                    /^(loaded|complete)$/.test(a.readyState) && (c(), b())
                                },
                                onerror: function() {
                                    var k = {
                                        message: "remote script failed " + a.src
                                    };
                                    c();
                                    d(k);
                                    b()
                                }
                            })
                        };
                        f.prototype.ha = function(a) {
                            return !/^script$/i.test(a.nodeName) || !!(this.options.fa && a.src && a.hasAttribute("async"))
                        };
                        return f
                    }();
                m.postscribe = function() {
                    function e() {
                        var d = b.shift(),
                            k;
                        d && (k = d[d.length - 1], k.K(), d.stream = f.apply(null, d), k.L())
                    }

                    function f(d, k, g) {
                        function r(x) {
                            x = g.P(x);
                            c.write(x);
                            g.M(x)
                        }
                        c = new z(d, g);
                        c.id = a++;
                        c.name = g.name || c.id;
                        var u = d.ownerDocument,
                            l = {
                                close: u.close,
                                open: u.open,
                                write: u.write,
                                writeln: u.writeln
                            };
                        t(u, {
                            close: n,
                            open: n,
                            write: function() {
                                return r(A(arguments).join(""))
                            },
                            writeln: function() {
                                return r(A(arguments).join("") + "\n")
                            }
                        });
                        var p = c.l.onerror || n;
                        c.l.onerror = function(x, G, H) {
                            g.error({
                                qa: x + " - " + G + ":" + H
                            });
                            p.apply(c.l, arguments)
                        };
                        c.write(k, function() {
                            t(u, l);
                            c.l.onerror = p;
                            g.done();
                            c = null;
                            e()
                        });
                        return c
                    }
                    var a = 0,
                        b = [],
                        c = null;
                    return t(function(d, k, g) {
                        "function" === typeof g && (g = {
                            done: g
                        });
                        g = B(g, h);
                        d = /^#/.test(d) ? m.document.getElementById(d.substr(1)) : d.pa ? d[0] : d;
                        var r = [d, k, g];
                        d.da = {
                            cancel: function() {
                                r.stream ? r.stream.abort() :
                                    r[1] = n
                            }
                        };
                        g.O(r);
                        b.push(r);
                        c || e();
                        return d.da
                    }, {
                        streams: {},
                        ra: b,
                        na: z
                    })
                }();
                F = m.postscribe
            }
        })();
        D("google_tag_manager_external.postscribe.installPostscribe", function() {
            var n = window.google_tag_manager;
            n && (n.postscribe || (n.postscribe = window.postscribe || F))
        });
        D("google_tag_manager_external.postscribe.getPostscribe", function() {
            return window.google_tag_manager.postscribe
        });
    }).call(this);
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ba, ca = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ea = function(a) {
            return a.raw = a
        },
        fa = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: ca(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ja = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ka;
    if ("function" == typeof Object.setPrototypeOf) ka = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                na = pa.a;
                break a
            } catch (a) {}
            na = !1
        }
        ka = na ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qa = ka,
        ra = function(a, b) {
            a.prototype = ja(b.prototype);
            a.prototype.constructor = a;
            if (qa) qa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Tm = b.prototype
        },
        sa = this || self,
        ta = function(a) {
            return a
        };
    var ua = function(a, b) {
        this.h = a;
        this.m = b
    };
    var va = function(a) {
            return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
        },
        wa = function() {
            this.B = {};
            this.D = !1;
            this.K = {}
        },
        xa = function(a, b) {
            var c = [],
                d;
            for (d in a.B)
                if (a.B.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                    case 1:
                        c.push(d);
                        break;
                    case 2:
                        c.push(a.get(d));
                        break;
                    case 3:
                        c.push([d, a.get(d)])
                }
            return c
        };
    wa.prototype.get = function(a) {
        return this.B["dust." + a]
    };
    wa.prototype.set = function(a, b) {
        this.D || (a = "dust." + a, this.K.hasOwnProperty(a) || (this.B[a] = b))
    };
    wa.prototype.has = function(a) {
        return this.B.hasOwnProperty("dust." + a)
    };
    var ya = function(a, b) {
        b = "dust." + b;
        a.D || a.K.hasOwnProperty(b) || delete a.B[b]
    };
    wa.prototype.xc = function() {
        this.D = !0
    };
    wa.prototype.Qf = function() {
        return this.D
    };
    var za = function(a) {
        this.m = new wa;
        this.h = [];
        this.B = !1;
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (va(b) ? this.h[Number(b)] = a[Number(b)] : this.m.set(b, a[b]))
    };
    ba = za.prototype;
    ba.toString = function(a) {
        if (a && 0 <= a.indexOf(this)) return "";
        for (var b = [], c = 0; c < this.h.length; c++) {
            var d = this.h[c];
            null === d || void 0 === d ? b.push("") : d instanceof za ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString())
        }
        return b.join(",")
    };
    ba.set = function(a, b) {
        if (!this.B)
            if ("length" === a) {
                if (!va(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.h.length = Number(b)
            } else va(a) ? this.h[Number(a)] = b : this.m.set(a, b)
    };
    ba.get = function(a) {
        return "length" === a ? this.length() : va(a) ? this.h[Number(a)] : this.m.get(a)
    };
    ba.length = function() {
        return this.h.length
    };
    ba.Tb = function() {
        for (var a = xa(this.m, 1), b = 0; b < this.h.length; b++) a.push(b + "");
        return new za(a)
    };
    var Aa = function(a, b) {
        va(b) ? delete a.h[Number(b)] : ya(a.m, b)
    };
    ba = za.prototype;
    ba.pop = function() {
        return this.h.pop()
    };
    ba.push = function(a) {
        return this.h.push.apply(this.h, Array.prototype.slice.call(arguments))
    };
    ba.shift = function() {
        return this.h.shift()
    };
    ba.splice = function(a, b, c) {
        return new za(this.h.splice.apply(this.h, arguments))
    };
    ba.unshift = function(a) {
        return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments))
    };
    ba.has = function(a) {
        return va(a) && this.h.hasOwnProperty(a) || this.m.has(a)
    };
    ba.xc = function() {
        this.B = !0;
        Object.freeze(this.h);
        this.m.xc()
    };
    ba.Qf = function() {
        return this.B
    };
    var Ba = function() {
        this.quota = {}
    };
    Ba.prototype.reset = function() {
        this.quota = {}
    };
    var Ca = function(a, b) {
        this.R = a;
        this.K = function(c, d, e) {
            return c.apply(d, e)
        };
        this.B = b;
        this.m = new wa;
        this.h = this.D = void 0
    };
    Ca.prototype.add = function(a, b) {
        Da(this, a, b, !1)
    };
    var Da = function(a, b, c, d) {
        if (!a.m.Qf())
            if (d) {
                var e = a.m;
                e.set(b, c);
                e.K["dust." + b] = !0
            } else a.m.set(b, c)
    };
    Ca.prototype.set = function(a, b) {
        this.m.Qf() || (!this.m.has(a) && this.B && this.B.has(a) ? this.B.set(a, b) : this.m.set(a, b))
    };
    Ca.prototype.get = function(a) {
        return this.m.has(a) ? this.m.get(a) : this.B ? this.B.get(a) : void 0
    };
    Ca.prototype.has = function(a) {
        return !!this.m.has(a) || !(!this.B || !this.B.has(a))
    };
    var Ea = function(a) {
        var b = new Ca(a.R, a);
        a.D && (b.D = a.D);
        b.K = a.K;
        b.h = a.h;
        return b
    };
    var Fa = function() {},
        Ga = function(a) {
            return "function" === typeof a
        },
        k = function(a) {
            return "string" === typeof a
        },
        Ia = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        Ka = Array.isArray,
        La = function(a, b) {
            if (a && Ka(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Ma = function(a, b) {
            if (!Ia(a) || !Ia(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Oa = function(a, b) {
            for (var c = new Na, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        m = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Pa = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Qa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ra = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Sa = function(a) {
            var b = [];
            if (Ka(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ta = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ua = function() {
            return new Date(Date.now())
        },
        Va = function() {
            return Ua().getTime()
        },
        Na = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Na.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Na.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Xa = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ya = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Za = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        $a = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        ab = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        bb = function(a, b) {
            var c = z;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <=
                    b.indexOf(d)) return
            }
            return d
        },
        cb = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        db = /^\w{1,9}$/,
        fb = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            m(a, function(d, e) {
                db.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        gb = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };
    var hb = function(a, b) {
        wa.call(this);
        this.R = a;
        this.sb = b
    };
    ra(hb, wa);
    hb.prototype.toString = function() {
        return this.R
    };
    hb.prototype.Tb = function() {
        return new za(xa(this, 1))
    };
    hb.prototype.h = function(a, b) {
        return this.sb.apply(new ib(this, a), Array.prototype.slice.call(arguments, 1))
    };
    hb.prototype.m = function(a, b) {
        try {
            return this.h.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    };
    var kb = function(a, b) {
            for (var c, d = 0; d < b.length && !(c = jb(a, b[d]), c instanceof ua); d++);
            return c
        },
        jb = function(a, b) {
            try {
                var c = a.get(String(b[0]));
                if (!(c && c instanceof hb)) throw Error("Attempting to execute non-function " + b[0] + ".");
                return c.h.apply(c, [a].concat(b.slice(1)))
            } catch (e) {
                var d = a.D;
                d && d(e, b.context ? {
                    id: b[0],
                    line: b.context.line
                } : null);
                throw e;
            }
        },
        ib = function(a, b) {
            this.m = a;
            this.h = b
        },
        C = function(a, b) {
            return Ka(b) ? jb(a.h, b) : b
        },
        F = function(a) {
            return a.m.R
        };
    var lb = function() {
        wa.call(this)
    };
    ra(lb, wa);
    lb.prototype.Tb = function() {
        return new za(xa(this, 1))
    };
    var mb = {
        map: function(a) {
            for (var b = new lb, c = 0; c < arguments.length - 1; c += 2) {
                var d = C(this, arguments[c]) + "",
                    e = C(this, arguments[c + 1]);
                b.set(d, e)
            }
            return b
        },
        list: function(a) {
            for (var b = new za, c = 0; c < arguments.length; c++) {
                var d = C(this, arguments[c]);
                b.push(d)
            }
            return b
        },
        fn: function(a, b, c) {
            var d = this.h,
                e = C(this, b);
            if (!(e instanceof za)) throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            return new hb(a, function() {
                return function(g) {
                    var h = Ea(d);
                    void 0 ===
                        h.h && (h.h = this.h.h);
                    for (var l = Array.prototype.slice.call(arguments, 0), n = 0; n < l.length; n++)
                        if (l[n] = C(this, l[n]), l[n] instanceof ua) return l[n];
                    for (var p = e.get("length"), q = 0; q < p; q++) q < l.length ? h.add(e.get(q), l[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new za(l));
                    var r = kb(h, f);
                    if (r instanceof ua) return "return" === r.h ? r.m : r
                }
            }())
        },
        control: function(a, b) {
            return new ua(a, C(this, b))
        },
        undefined: function() {}
    };
    var nb = function() {
            this.B = new Ba;
            this.h = new Ca(this.B)
        },
        ob = function(a, b, c) {
            var d = new hb(b, c);
            d.xc();
            a.h.set(b, d)
        },
        pb = function(a, b, c) {
            mb.hasOwnProperty(b) && ob(a, c || b, mb[b])
        };
    nb.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.m(c)
    };
    nb.prototype.m = function(a) {
        for (var b, c = 0; c < arguments.length; c++) b = jb(this.h, arguments[c]);
        return b
    };
    nb.prototype.D = function(a, b) {
        var c = Ea(this.h);
        c.h = a;
        for (var d, e = 1; e < arguments.length; e++) d = jb(c, arguments[e]);
        return d
    };

    function qb() {
        for (var a = rb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function sb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var rb, tb;

    function ub(a) {
        rb = rb || sb();
        tb = tb || qb();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                h = e ? a.charCodeAt(c + 2) : 0,
                l = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | h >> 6,
                q = h & 63;
            e || (q = 64, d || (p = 64));
            b.push(rb[l], rb[n], rb[p], rb[q])
        }
        return b.join("")
    }

    function vb(a) {
        function b(l) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = tb[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return l
        }
        rb = rb || sb();
        tb = tb || qb();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                h = b(64);
            if (64 === h && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    };
    var wb = {},
        xb = function(a, b) {
            wb[a] = wb[a] || [];
            wb[a][b] = !0
        },
        yb = function() {
            delete wb.GA4_EVENT
        },
        Ab = function(a) {
            var b = wb[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return ub(c.join("")).replace(/\.+$/, "")
        };
    var Bb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var Cb, Db = function() {
        if (void 0 === Cb) {
            var a = null,
                b = sa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ta,
                        createScript: ta,
                        createScriptURL: ta
                    })
                } catch (c) {
                    sa.console && sa.console.error(c.message)
                }
                Cb = a
            } else Cb = a
        }
        return Cb
    };
    var Eb = function(a) {
        this.h = a
    };
    Eb.prototype.toString = function() {
        return this.h + ""
    };
    var Fb = function(a) {
            return a instanceof Eb && a.constructor === Eb ? a.h : "type_error:TrustedResourceUrl"
        },
        Gb = {},
        Hb = function(a) {
            var b = a,
                c = Db(),
                d = c ? c.createScriptURL(b) : b;
            return new Eb(d, Gb)
        };
    var Ib = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var Jb, Kb;
    a: {
        for (var Lb = ["CLOSURE_FLAGS"], Mb = sa, Nb = 0; Nb < Lb.length; Nb++)
            if (Mb = Mb[Lb[Nb]], null == Mb) {
                Kb = null;
                break a
            }
        Kb = Mb
    }
    var Ob = Kb && Kb[610401301];
    Jb = null != Ob ? Ob : !1;

    function Pb() {
        var a = sa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var Qb, Rb = sa.navigator;
    Qb = Rb ? Rb.userAgentData || null : null;

    function Sb(a) {
        return Jb ? Qb ? Qb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }

    function Tb(a) {
        return -1 != Pb().indexOf(a)
    };

    function Ub() {
        return Jb ? !!Qb && 0 < Qb.brands.length : !1
    }

    function Vb() {
        return Ub() ? !1 : Tb("Opera")
    }

    function Wb() {
        return Tb("Firefox") || Tb("FxiOS")
    }

    function Xb() {
        return Ub() ? Sb("Chromium") : (Tb("Chrome") || Tb("CriOS")) && !(Ub() ? 0 : Tb("Edge")) || Tb("Silk")
    };
    var Yb = {},
        Zb = function(a) {
            this.h = a
        };
    Zb.prototype.toString = function() {
        return this.h.toString()
    };
    var $b = function(a) {
        return a instanceof Zb && a.constructor === Zb ? a.h : "type_error:SafeHtml"
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var ac = {};
    var bc = function() {},
        cc = function(a) {
            this.h = a
        };
    ra(cc, bc);
    cc.prototype.toString = function() {
        return this.h
    };

    function dc(a, b) {
        var c = [new cc(ec[0].toLowerCase(), ac)];
        if (0 === c.length) throw Error("");
        var d = c.map(function(f) {
                var g;
                if (f instanceof cc) g = f.h;
                else throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) {
                return 0 !== e.indexOf(f)
            })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    }

    function fc(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b) throw Error("");
    };
    (function() {
        return ""
    }).toString().indexOf("`");

    function gc(a) {
        var b = a = hc(a),
            c = Db(),
            d = c ? c.createHTML(b) : b;
        return new Zb(d, Yb)
    }

    function hc(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var z = window,
        H = document,
        ic = navigator,
        jc = H.currentScript && H.currentScript.src,
        kc = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        },
        lc = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        mc = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        nc = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function pc(a, b, c) {
        b && m(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var qc = function(a, b, c, d, e) {
            var f = H.createElement("script");
            pc(f, d, mc);
            f.type = "text/javascript";
            f.async = !0;
            var g;
            g = Hb(hc(a));
            f.src = Fb(g);
            var h, l, n, p = null == (n = (l = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(l, "script[nonce]");
            (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", h);
            lc(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var q = H.getElementsByTagName("script")[0] || H.body || H.head;
                q.parentNode.insertBefore(f, q)
            }
            return f
        },
        rc = function() {
            if (jc) {
                var a =
                    jc.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        sc = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var g = e,
                h = !1;
            g || (g = H.createElement("iframe"), h = !0);
            pc(g, c, nc);
            d && m(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            if (h) {
                var l = H.body && H.body.lastChild || H.body || H.head;
                l.parentNode.insertBefore(g, l)
            }
            lc(g, b);
            void 0 !== a && (g.src = a);
            return g
        },
        tc = function(a, b, c, d) {
            var e = new Image(1, 1);
            pc(e,
                d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a
        },
        uc = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        vc = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        I = function(a) {
            z.setTimeout(a, 0)
        },
        wc = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        xc = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " !=
                b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        yc = function(a) {
            var b = H.createElement("div"),
                c = b,
                d = gc("A<div>" + a + "</div>");
            1 === c.nodeType && fc(c);
            c.innerHTML = $b(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        zc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Ac = function(a) {
            var b;
            try {
                b = ic.sendBeacon && ic.sendBeacon(a)
            } catch (c) {
                xb("TAGGING", 15)
            }
            b || tc(a)
        },
        Bc = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Cc = function(a, b) {
            try {
                z.fetch(a, b)
            } catch (c) {}
        },
        Dc = function() {
            var a = z.performance;
            if (a && Ga(a.now)) return a.now()
        },
        Ec = function() {
            return z.performance || void 0
        };
    var Fc = function(a, b) {
            return C(this, a) && C(this, b)
        },
        Gc = function(a, b) {
            return C(this, a) === C(this, b)
        },
        Hc = function(a, b) {
            return C(this, a) || C(this, b)
        },
        Ic = function(a, b) {
            a = C(this, a);
            b = C(this, b);
            return -1 < String(a).indexOf(String(b))
        },
        Jc = function(a, b) {
            a = String(C(this, a));
            b = String(C(this, b));
            return a.substring(0, b.length) === b
        },
        Kc = function(a, b) {
            a = C(this, a);
            b = C(this, b);
            switch (a) {
                case "pageLocation":
                    var c = z.location.href;
                    b instanceof lb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                    return c
            }
        };
    var Mc = function() {
        this.h = new nb;
        Lc(this)
    };
    Mc.prototype.execute = function(a) {
        return this.h.m(a)
    };
    var Lc = function(a) {
        pb(a.h, "map");
        var b = function(c, d) {
            ob(a.h, c, d)
        };
        b("and", Fc);
        b("contains", Ic);
        b("equals", Gc);
        b("or", Hc);
        b("startsWith", Jc);
        b("variable", Kc)
    };
    var Nc = function() {
        this.map = new Map
    };
    Nc.prototype.set = function(a, b) {
        this.map.set(a, b)
    };
    Nc.prototype.get = function(a) {
        return this.map.get(a)
    };
    var Oc = function() {
        this.keys = [];
        this.values = []
    };
    Oc.prototype.set = function(a, b) {
        this.keys.push(a);
        this.values.push(b)
    };
    Oc.prototype.get = function(a) {
        var b = this.keys.indexOf(a);
        if (-1 < b) return this.values[b]
    };
    var Pc = function(a) {
        if (a instanceof Pc) return a;
        this.La = a
    };
    Pc.prototype.toString = function() {
        return String(this.La)
    };
    var Rc = function(a) {
        wa.call(this);
        this.h = a;
        this.set("then", Qc(this));
        this.set("catch", Qc(this, !0));
        this.set("finally", Qc(this, !1, !0))
    };
    ra(Rc, lb);
    var Qc = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new hb("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof hb || (d = void 0);
            e instanceof hb || (e = void 0);
            var f = Ea(this.h),
                g = function(l) {
                    return function(n) {
                        return c ? (l.h(f), a.h) : l.h(f, n)
                    }
                },
                h = a.h.then(d && g(d), e && g(e));
            return new Rc(h)
        })
    };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Sc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Tc = function(a) {
            if (null == a) return String(a);
            var b = Sc.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Uc = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Vc = function(a) {
            if (!a || "object" != Tc(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Uc(a, "constructor") && !Uc(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Uc(a, b)
        },
        K = function(a, b) {
            var c = b || ("array" == Tc(a) ? [] : {}),
                d;
            for (d in a)
                if (Uc(a, d)) {
                    var e = a[d];
                    "array" == Tc(e) ? ("array" != Tc(c[d]) && (c[d] = []), c[d] = K(e, c[d])) : Vc(e) ? (Vc(c[d]) || (c[d] = {}), c[d] = K(e, c[d])) : c[d] = e
                }
            return c
        };
    var Xc = function(a, b, c) {
            var d = Map ? new Nc : new Oc,
                e = function(g, h) {
                    for (var l = xa(g, 1), n = 0; n < l.length; n++) h[l[n]] = f(g.get(l[n]))
                },
                f = function(g) {
                    var h = d.get(g);
                    if (h) return h;
                    if (g instanceof za) {
                        var l = [];
                        d.set(g, l);
                        for (var n = g.Tb(), p = 0; p < n.length(); p++) l[n.get(p)] = f(g.get(n.get(p)));
                        return l
                    }
                    if (g instanceof Rc) return g.h;
                    if (g instanceof lb) {
                        var q = {};
                        d.set(g, q);
                        e(g, q);
                        return q
                    }
                    if (g instanceof hb) {
                        var r = function() {
                            for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++) u[v] = Wc(u[v], b, c);
                            var w =
                                new Ca(b ? b.R : new Ba);
                            b && (w.h = b.h);
                            return f(g.h.apply(g, [w].concat(u)))
                        };
                        d.set(g, r);
                        e(g, r);
                        return r
                    }
                    var t = !1;
                    switch (c) {
                        case 1:
                            t = !0;
                            break;
                        case 2:
                            t = !1;
                            break;
                        case 3:
                            t = !1;
                            break;
                        default:
                    }
                    if (g instanceof Pc && t) return g.La;
                    switch (typeof g) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                            return g;
                        case "object":
                            if (null === g) return null
                    }
                };
            return f(a)
        },
        Wc = function(a, b, c) {
            var d = Map ?
                new Nc : new Oc,
                e = function(g, h) {
                    for (var l in g) g.hasOwnProperty(l) && h.set(l, f(g[l]))
                },
                f = function(g) {
                    var h = d.get(g);
                    if (h) return h;
                    if (Ka(g) || Pa(g)) {
                        var l = new za([]);
                        d.set(g, l);
                        for (var n in g) g.hasOwnProperty(n) && l.set(n, f(g[n]));
                        return l
                    }
                    if (Vc(g)) {
                        var p = new lb;
                        d.set(g, p);
                        e(g, p);
                        return p
                    }
                    if ("function" === typeof g) {
                        var q = new hb("", function(x) {
                            for (var y = Array.prototype.slice.call(arguments, 0), A = 0; A < y.length; A++) y[A] = Xc(C(this, y[A]), b, c);
                            return f((0, this.h.K)(g, g, y))
                        });
                        d.set(g, q);
                        e(g, q);
                        return q
                    }
                    var v = typeof g;
                    if (null === g || "string" === v || "number" === v || "boolean" === v) return g;
                    var w = !1;
                    switch (c) {
                        case 1:
                            w = !0;
                            break;
                        case 2:
                            w = !1;
                            break;
                        default:
                    }
                    if (void 0 !== g && w) return new Pc(g)
                };
            return f(a)
        };
    var Yc = function(a) {
            for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
            return b
        },
        Zc = function(a) {
            if (void 0 === a || Ka(a) || Vc(a)) return !0;
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    return !0
            }
            return !1
        };
    var $c = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof za)
                    for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
                else c.push(arguments[e]);
            return new za(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.h(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
            return new za(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.h(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) &&
                    this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
            return new za(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a, b) {
            return this.push.apply(this,
                Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++) this.has(h) && (e = b.h(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--) this.has(h) && (e = b.h(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = Yc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : Aa(this, c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ?
                Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new za(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.h(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = Yc(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.h(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : Aa(this, d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
                1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var ad = {
            charAt: 1,
            concat: 1,
            indexOf: 1,
            lastIndexOf: 1,
            match: 1,
            replace: 1,
            search: 1,
            slice: 1,
            split: 1,
            substring: 1,
            toLowerCase: 1,
            toLocaleLowerCase: 1,
            toString: 1,
            toUpperCase: 1,
            toLocaleUpperCase: 1,
            trim: 1
        },
        bd = new ua("break"),
        cd = new ua("continue"),
        dd = function(a, b) {
            return C(this, a) + C(this, b)
        },
        ed = function(a, b) {
            return C(this, a) && C(this, b)
        },
        fd = function(a, b, c) {
            a = C(this, a);
            b = C(this, b);
            c = C(this, c);
            if (!(c instanceof za)) throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
                b + " of " + a + ".");
            var d = "number" === typeof a;
            if ("boolean" === typeof a || d) {
                if ("toString" === b) {
                    if (d && c.length()) {
                        var e = Xc(c.get(0));
                        try {
                            return a.toString(e)
                        } catch (r) {}
                    }
                    return a.toString()
                }
                throw Error("TypeError: " + a + "." + b + " is not a function.");
            }
            if ("string" === typeof a) {
                if (ad.hasOwnProperty(b)) {
                    var f = 2;
                    f = 1;
                    var g = Xc(c, void 0, f);
                    return Wc(a[b].apply(a, g), this.h)
                }
                throw Error("TypeError: " +
                    b + " is not a function");
            }
            if (a instanceof za) {
                if (a.has(b)) {
                    var h = a.get(b);
                    if (h instanceof hb) {
                        var l = Yc(c);
                        l.unshift(this.h);
                        return h.h.apply(h, l)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if (0 <= $c.supportedMethods.indexOf(b)) {
                    var n = Yc(c);
                    n.unshift(this.h);
                    return $c[b].apply(a, n)
                }
            }
            if (a instanceof hb || a instanceof lb) {
                if (a.has(b)) {
                    var p = a.get(b);
                    if (p instanceof hb) {
                        var q = Yc(c);
                        q.unshift(this.h);
                        return p.h.apply(p, q)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if ("toString" === b) return a instanceof
                hb ? a.R : a.toString();
                if ("hasOwnProperty" === b) return a.has.apply(a, Yc(c))
            }
            if (a instanceof Pc && "toString" === b) return a.toString();
            throw Error("TypeError: Object has no '" + b + "' property.");
        },
        gd = function(a, b) {
            a = C(this, a);
            if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
            var c = this.h;
            if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
            var d = C(this, b);
            c.set(a, d);
            return d
        },
        hd = function(a) {
            var b = Ea(this.h),
                c = kb(b, Array.prototype.slice.apply(arguments));
            if (c instanceof ua) return c
        },
        id = function() {
            return bd
        },
        jd = function(a) {
            for (var b = C(this, a), c = 0; c < b.length; c++) {
                var d = C(this, b[c]);
                if (d instanceof ua) return d
            }
        },
        kd = function(a) {
            for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) {
                    var e = C(this, arguments[c + 1]);
                    Da(b, d, e, !0)
                }
            }
        },
        ld = function() {
            return cd
        },
        md = function(a, b, c) {
            var d = new za;
            b = C(this, b);
            for (var e = 0; e < b.length; e++) d.push(b[e]);
            var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.h.add(a, C(this,
                f))
        },
        nd = function(a, b) {
            return C(this, a) / C(this, b)
        },
        od = function(a, b) {
            a = C(this, a);
            b = C(this, b);
            var c = a instanceof Pc,
                d = b instanceof Pc;
            return c || d ? c && d ? a.La == b.La : !1 : a == b
        },
        pd = function(a) {
            for (var b, c = 0; c < arguments.length; c++) b = C(this, arguments[c]);
            return b
        };

    function qd(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = kb(f, d);
            if (g instanceof ua) {
                if ("break" === g.h) break;
                if ("return" === g.h) return g
            }
        }
    }

    function rd(a, b, c) {
        if ("string" === typeof b) return qd(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof lb || b instanceof za || b instanceof hb) {
            var d = b.Tb(),
                e = d.length();
            return qd(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var sd = function(a, b, c) {
            a = C(this, a);
            b = C(this, b);
            c = C(this, c);
            var d = this.h;
            return rd(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        td = function(a, b, c) {
            a = C(this, a);
            b = C(this, b);
            c = C(this, c);
            var d = this.h;
            return rd(function(e) {
                var f = Ea(d);
                Da(f, a, e, !0);
                return f
            }, b, c)
        },
        ud = function(a, b, c) {
            a = C(this, a);
            b = C(this, b);
            c = C(this, c);
            var d = this.h;
            return rd(function(e) {
                var f = Ea(d);
                f.add(a, e);
                return f
            }, b, c)
        },
        wd = function(a, b, c) {
            a = C(this, a);
            b = C(this, b);
            c = C(this, c);
            var d = this.h;
            return vd(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        xd =
        function(a, b, c) {
            a = C(this, a);
            b = C(this, b);
            c = C(this, c);
            var d = this.h;
            return vd(function(e) {
                var f = Ea(d);
                Da(f, a, e, !0);
                return f
            }, b, c)
        },
        yd = function(a, b, c) {
            a = C(this, a);
            b = C(this, b);
            c = C(this, c);
            var d = this.h;
            return vd(function(e) {
                var f = Ea(d);
                f.add(a, e);
                return f
            }, b, c)
        };

    function vd(a, b, c) {
        if ("string" === typeof b) return qd(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof za) return qd(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        throw new TypeError("The value is not iterable.");
    }
    var zd = function(a, b, c, d) {
            function e(p, q) {
                for (var r = 0; r < f.length(); r++) {
                    var t = f.get(r);
                    q.add(t, p.get(t))
                }
            }
            var f = C(this, a);
            if (!(f instanceof za)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
            var g = this.h;
            d = C(this, d);
            var h = Ea(g);
            for (e(g, h); jb(h, b);) {
                var l = kb(h, d);
                if (l instanceof ua) {
                    if ("break" === l.h) break;
                    if ("return" === l.h) return l
                }
                var n = Ea(g);
                e(h, n);
                jb(n, c);
                h = n
            }
        },
        Bd = function(a) {
            a = C(this, a);
            var b = this.h,
                c = !1;
            if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
            return b.get(a)
        },
        Cd = function(a, b) {
            var c;
            a = C(this, a);
            b = C(this, b);
            if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
            if (a instanceof lb || a instanceof za || a instanceof hb) c = a.get(b);
            else if ("string" === typeof a) "length" === b ? c = a.length : va(b) && (c = a[b]);
            else if (a instanceof Pc) return;
            return c
        },
        Dd = function(a, b) {
            return C(this, a) > C(this,
                b)
        },
        Ed = function(a, b) {
            return C(this, a) >= C(this, b)
        },
        Fd = function(a, b) {
            a = C(this, a);
            b = C(this, b);
            a instanceof Pc && (a = a.La);
            b instanceof Pc && (b = b.La);
            return a === b
        },
        Gd = function(a, b) {
            return !Fd.call(this, a, b)
        },
        Hd = function(a, b, c) {
            var d = [];
            C(this, a) ? d = C(this, b) : c && (d = C(this, c));
            var e = kb(this.h, d);
            if (e instanceof ua) return e
        },
        Id = function(a, b) {
            return C(this, a) < C(this, b)
        },
        Jd = function(a, b) {
            return C(this, a) <= C(this, b)
        },
        Kd = function(a, b) {
            return C(this, a) % C(this, b)
        },
        Ld = function(a, b) {
            return C(this, a) * C(this, b)
        },
        Md = function(a) {
            return -C(this,
                a)
        },
        Nd = function(a) {
            return !C(this, a)
        },
        Od = function(a, b) {
            return !od.call(this, a, b)
        },
        Pd = function() {
            return null
        },
        Qd = function(a, b) {
            return C(this, a) || C(this, b)
        },
        Rd = function(a, b) {
            var c = C(this, a);
            C(this, b);
            return c
        },
        Sd = function(a) {
            return C(this, a)
        },
        Td = function(a) {
            return Array.prototype.slice.apply(arguments)
        },
        Ud = function(a) {
            return new ua("return", C(this, a))
        },
        Vd = function(a, b, c) {
            a = C(this, a);
            b = C(this, b);
            c = C(this, c);
            if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
            (a instanceof hb || a instanceof za || a instanceof lb) && a.set(b, c);
            return c
        },
        Wd = function(a, b) {
            return C(this, a) - C(this, b)
        },
        Xd = function(a, b, c) {
            a = C(this, a);
            var d = C(this, b),
                e = C(this, c);
            if (!Ka(d) || !Ka(e)) throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, h = 0; h < d.length; h++)
                if (g || a === C(this, d[h]))
                    if (f = C(this, e[h]), f instanceof ua) {
                        var l = f.h;
                        if ("break" === l) return;
                        if ("return" === l || "continue" === l) return f
                    } else g = !0;
            if (e.length === d.length + 1 && (f = C(this, e[e.length - 1]), f instanceof ua && ("return" === f.h || "continue" ===
                    f.h))) return f
        },
        Yd = function(a, b, c) {
            return C(this, a) ? C(this, b) : C(this, c)
        },
        Zd = function(a) {
            a = C(this, a);
            return a instanceof hb ? "function" : typeof a
        },
        $d = function(a) {
            for (var b = this.h, c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                "string" !== typeof d || b.add(d, void 0)
            }
        },
        ae = function(a, b, c, d) {
            var e = C(this, d);
            if (C(this, c)) {
                var f = kb(this.h, e);
                if (f instanceof ua) {
                    if ("break" === f.h) return;
                    if ("return" === f.h) return f
                }
            }
            for (; C(this, a);) {
                var g = kb(this.h, e);
                if (g instanceof ua) {
                    if ("break" === g.h) break;
                    if ("return" === g.h) return g
                }
                C(this,
                    b)
            }
        },
        be = function(a) {
            return ~Number(C(this, a))
        },
        ce = function(a, b) {
            return Number(C(this, a)) << Number(C(this, b))
        },
        de = function(a, b) {
            return Number(C(this, a)) >> Number(C(this, b))
        },
        ge = function(a, b) {
            return Number(C(this, a)) >>> Number(C(this, b))
        },
        he = function(a, b) {
            return Number(C(this, a)) & Number(C(this, b))
        },
        ie = function(a, b) {
            return Number(C(this, a)) ^ Number(C(this, b))
        },
        je = function(a, b) {
            return Number(C(this, a)) | Number(C(this, b))
        };
    var le = function() {
        this.h = new nb;
        ke(this)
    };
    le.prototype.execute = function(a) {
        return me(this.h.m(a))
    };
    var ne = function(a, b, c) {
            return me(a.h.D(b, c))
        },
        ke = function(a) {
            var b = function(d, e) {
                pb(a.h, d, String(e))
            };
            b("control", 49);
            b("fn", 51);
            b("list", 7);
            b("map", 8);
            b("undefined", 44);
            var c = function(d, e) {
                ob(a.h, String(d), e)
            };
            c(0, dd);
            c(1, ed);
            c(2, fd);
            c(3, gd);
            c(53, hd);
            c(4, id);
            c(5, jd);
            c(52, kd);
            c(6, ld);
            c(9, jd);
            c(50, md);
            c(10, nd);
            c(12, od);
            c(13, pd);
            c(47, sd);
            c(54, td);
            c(55, ud);
            c(63, zd);
            c(64, wd);
            c(65, xd);
            c(66, yd);
            c(15, Bd);
            c(16, Cd);
            c(17, Cd);
            c(18, Dd);
            c(19, Ed);
            c(20, Fd);
            c(21, Gd);
            c(22, Hd);
            c(23, Id);
            c(24, Jd);
            c(25, Kd);
            c(26, Ld);
            c(27,
                Md);
            c(28, Nd);
            c(29, Od);
            c(45, Pd);
            c(30, Qd);
            c(32, Rd);
            c(33, Rd);
            c(34, Sd);
            c(35, Sd);
            c(46, Td);
            c(36, Ud);
            c(43, Vd);
            c(37, Wd);
            c(38, Xd);
            c(39, Yd);
            c(40, Zd);
            c(41, $d);
            c(42, ae);
            c(58, be);
            c(57, ce);
            c(60, de);
            c(61, ge);
            c(56, he);
            c(62, ie);
            c(59, je)
        };

    function me(a) {
        if (a instanceof ua || a instanceof hb || a instanceof za || a instanceof lb || a instanceof Pc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
    };

    function oe(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    }

    function pe(a) {
        switch (a) {
            case 1:
                return "G";
            case 3:
                return "g";
            case 2:
                return "D";
            case 4:
                return "d";
            case 0:
                return "g";
            default:
                return "g"
        }
    }

    function qe(a, b) {
        var c = a[1] || 0,
            d = a[2] || 0,
            e = a[3] || 0,
            f = a[4] || 0;
        switch (b) {
            case 0:
                return "G1" + oe(c) + oe(d);
            case 1:
                return "G2" + pe(c) + pe(d);
            case 2:
                return "G2" + pe(c) + pe(d) + pe(e) + pe(f);
            default:
                return "g1--"
        }
    };
    var re = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Sj: a("consent"),
            ei: a("convert_case_to"),
            fi: a("convert_false_to"),
            gi: a("convert_null_to"),
            hi: a("convert_true_to"),
            ii: a("convert_undefined_to"),
            Bm: a("debug_mode_metadata"),
            Sb: a("function"),
            Vg: a("instance_name"),
            yk: a("live_only"),
            zk: a("malware_disabled"),
            Ak: a("metadata"),
            Dk: a("original_activity_id"),
            Im: a("original_vendor_template_id"),
            Hm: a("once_on_load"),
            Ck: a("once_per_event"),
            Yi: a("once_per_load"),
            Mm: a("priority_override"),
            Nm: a("respected_consent_types"),
            cj: a("setup_tags"),
            ne: a("tag_id"),
            ij: a("teardown_tags")
        }
    }();
    var se = [],
        te = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\v": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        ue = function(a) {
            return te[a]
        },
        ve = /[\x00\x22\x26\x27\x3c\x3e]/g;
    se[3] = function(a) {
        return String(a).replace(ve, ue)
    };
    var ze = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        Ae = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\v": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            "&": "\\x26",
            "'": "\\x27",
            "/": "\\/",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "\\": "\\\\",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            $: "\\x24",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            ":": "\\x3a",
            "?": "\\x3f",
            "[": "\\x5b",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d"
        },
        Be = function(a) {
            return Ae[a]
        };
    se[7] = function(a) {
        return String(a).replace(ze, Be)
    };
    se[8] = function(a) {
        if (null == a) return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(ze, Be) + "'"
        }
    };
    var Je = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Ke = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\v": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        Le = function(a) {
            return Ke[a]
        };
    se[16] = function(a) {
        return a
    };
    var Ne;
    var Oe = [],
        Pe = [],
        Qe = [],
        Re = [],
        Se = [],
        Te = {},
        Ue, Ve, Xe = function() {
            var a = We;
            Ve = Ve || a
        },
        Ye, Ze = [],
        $e = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        af = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Te[c],
                f = b && 2 === b.type && d.Gj && e && -1 !== Ze.indexOf(c),
                g = {},
                h = {},
                l;
            for (l in a) a.hasOwnProperty(l) && 0 === l.indexOf("vtp_") && (e && d && d.oj && d.oj(a[l]), e && (g[l] = a[l]), !e || f) && (h[l.substr(4)] =
                a[l]);
            e && d && d.nj && (g.vtp_gtmCachedValues = d.nj);
            if (b) {
                if (null == b.name) {
                    var n;
                    a: {
                        var p = b.index;
                        if (null == p) n = "";
                        else {
                            var q;
                            switch (b.type) {
                                case 2:
                                    q = Oe[p];
                                    break;
                                case 1:
                                    q = Re[p];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var r = q && q[re.Vg];
                            n = r ? String(r) : ""
                        }
                    }
                    b.name = n
                }
                e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name)
            }
            var t, u;
            e && (t = e(g));
            if (!e || f) u = Ne(c, h, b);
            f && t !== u && d && d.Gj(d.id, c);
            return e ? t : u
        },
        cf = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = bf(a[e], b, c));
            return d
        },
        bf = function(a, b,
            c) {
            if (Ka(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(bf(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = Oe[f];
                        if (!g || b.sh(g)) return;
                        c[f] = !0;
                        var h = String(g[re.Vg]);
                        try {
                            var l = cf(g, b, c);
                            l.vtp_gtmEventId = b.id;
                            b.priorityId && (l.vtp_gtmPriorityId = b.priorityId);
                            d = af(l, {
                                event: b,
                                index: f,
                                type: 2,
                                name: h
                            });
                            Ye && (d = Ye.Nk(d, l))
                        } catch (y) {
                            b.yj && b.yj(y, Number(f), h), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[bf(a[n],
                            b, c)] = bf(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = bf(a[q], b, c);
                            Ve && (p = p || r === Ve.xf);
                            d.push(r)
                        }
                        return Ve && p ? Ve.Ok(d) : d.join("");
                    case "escape":
                        d = bf(a[1], b, c);
                        if (Ve && Ka(a[1]) && "macro" === a[1][0] && Ve.yl(a)) return Ve.Ul(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) se[a[t]] && (d = se[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!Re[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            tj: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] =
                            a[1];
                        var w = df(v, b, c),
                            x = !!a[4];
                        return x || 2 !== w ? x !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        df = function(a, b, c) {
            try {
                return Ue(cf(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var ef = function(a, b, c) {
        var d;
        d = Error.call(this, c);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.h = a
    };
    ra(ef, Error);

    function ff(a, b) {
        if (Ka(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) ff(a[c], b[c])
        }
    };
    var gf = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.Ol = a;
        this.m = b;
        this.h = []
    };
    ra(gf, Error);
    var jf = function() {
        return function(a, b) {
            a instanceof gf || (a = new gf(a, hf));
            b && a.h.push(b);
            throw a;
        }
    };

    function hf(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--) Ia(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };
    var mf = function(a) {
            function b(r) {
                for (var t = 0; t < r.length; t++) d[r[t]] = !0
            }
            for (var c = [], d = [], e = kf(a), f = 0; f < Pe.length; f++) {
                var g = Pe[f],
                    h = lf(g, e);
                if (h) {
                    for (var l = g.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
                    b(g.block || [])
                } else null === h && b(g.block || []);
            }
            for (var p = [], q = 0; q < Re.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        lf = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var h = b(f[g]);
                if (2 === h) return null;
                if (1 === h) return !1
            }
            return !0
        },
        kf = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = df(Qe[c], a));
                return b[c]
            }
        };
    var nf = {
        Nk: function(a, b) {
            b[re.ei] && "string" === typeof a && (a = 1 == b[re.ei] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(re.gi) && null === a && (a = b[re.gi]);
            b.hasOwnProperty(re.ii) && void 0 === a && (a = b[re.ii]);
            b.hasOwnProperty(re.hi) && !0 === a && (a = b[re.hi]);
            b.hasOwnProperty(re.fi) && !1 === a && (a = b[re.fi]);
            return a
        }
    };
    var of = function() {
        this.h = {}
    };

    function pf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e].call(void 0, b, c, d), g += "."
                } catch (h) {
                    g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f) throw new ef(c, d, g);
            }
    }

    function qf(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.h[d],
                    f = a.h.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    pf(e, b, d, g);
                    pf(f, b, d, g)
                }
            }
        }
    };
    var tf = function() {
            var a = data.permissions || {},
                b = L.C,
                c = this;
            this.m = new of ;
            this.h = {};
            var d = {},
                e = qf(this.m, b, function() {
                    var f = arguments[0];
                    return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
                });
            m(a, function(f, g) {
                var h = {};
                m(g, function(l, n) {
                    var p = rf(l, n);
                    h[l] = p.assert;
                    d[l] || (d[l] = p.V)
                });
                c.h[f] = function(l, n) {
                    var p = h[l];
                    if (!p) throw sf(l, {}, "The requested permission " + l + " is not configured.");
                    var q = Array.prototype.slice.call(arguments, 0);
                    p.apply(void 0, q);
                    e.apply(void 0, q)
                }
            })
        },
        vf = function(a) {
            return uf.h[a] ||
                function() {}
        };

    function rf(a, b) {
        var c = $e(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = sf;
        try {
            return af(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new ef(e, {}, "Permission " + e + " is unknown.");
                },
                V: function() {
                    for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }

    function sf(a, b, c) {
        return new ef(a, b, c)
    };
    var wf = !1;
    var xf = {};
    xf.zm = Ra('');
    xf.Qk = Ra('');
    var yf = wf,
        zf = xf.Qk,
        Af = xf.zm;
    var Lf = /^[a-z$_][\w$]*$/i,
        Mf = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i,
        Nf = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = a,
                    e = b[c];
                if (!Mf.exec(e)) throw Error("Invalid key wildcard");
                var f = e.indexOf(".*"),
                    g = -1 !== f && f === e.length - 2,
                    h = g ? e.slice(0, e.length - 2) : e,
                    l;
                a: if (0 === d.length) l = !1;
                    else {
                        for (var n = d.split("."), p = 0; p < n.length; p++)
                            if (!Lf.exec(n[p])) {
                                l = !1;
                                break a
                            }
                        l = !0
                    }
                if (!l || h.length > d.length || !g && d.length != e.length ? 0 : g ? 0 === d.indexOf(h) && (d === h || "." == d.charAt(h.length)) : d === h) return !0
            }
            return !1
        };
    var Of = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function Pf(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var Qf = new Na;

    function Rf(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Qf.get(e);
            f || (f = new RegExp(b, d), Qf.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function Sf(a, b) {
        return 0 <= String(a).indexOf(String(b))
    }

    function Tf(a, b) {
        return String(a) === String(b)
    }

    function Uf(a, b) {
        return Number(a) >= Number(b)
    }

    function Vf(a, b) {
        return Number(a) <= Number(b)
    }

    function Wf(a, b) {
        return Number(a) > Number(b)
    }

    function Xf(a, b) {
        return Number(a) < Number(b)
    }

    function Yf(a, b) {
        return 0 === String(a).indexOf(String(b))
    };
    var Zf = function(a, b) {
            return a.length && b.length && a.lastIndexOf(b) === a.length - b.length
        },
        $f = function(a, b) {
            var c = "*" === b.charAt(b.length - 1) || "/" === b || "/*" === b;
            Zf(b, "/*") && (b = b.slice(0, -2));
            Zf(b, "?") && (b = b.slice(0, -1));
            var d = b.split("*");
            if (!c && 1 === d.length) return a === d[0];
            for (var e = -1, f = 0; f < d.length; f++) {
                var g = d[f];
                if (g) {
                    e = a.indexOf(g, e);
                    if (-1 === e || 0 === f && 0 !== e) return !1;
                    e += g.length
                }
            }
            if (c || e === a.length) return !0;
            var h = d[d.length - 1];
            return a.lastIndexOf(h) === a.length - h.length
        },
        ag = /^[a-z0-9-]+$/i,
        bg = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
        dg = function(a, b) {
            var c;
            if (!(c = !cg(a))) {
                var d;
                a: {
                    var e = a.hostname.split(".");
                    if (2 > e.length) d = !1;
                    else {
                        for (var f = 0; f < e.length; f++)
                            if (!ag.exec(e[f])) {
                                d = !1;
                                break a
                            }
                        d = !0
                    }
                }
                c = !d
            }
            if (c) return !1;
            for (var g = 0; g < b.length; g++) {
                var h;
                var l = a,
                    n = b[g];
                if (!bg.exec(n)) throw Error("Invalid Wildcard");
                var p = n.slice(8),
                    q = p.slice(0, p.indexOf("/")),
                    r;
                var t = l.hostname,
                    u = q;
                if (0 !== u.indexOf("*.")) r = t.toLowerCase() === u.toLowerCase();
                else {
                    u = u.slice(2);
                    var v = t.toLowerCase().indexOf(u.toLowerCase());
                    r = -1 === v ? !1 : t.length === u.length ?
                        !0 : t.length !== u.length + v ? !1 : "." === t[v - 1]
                }
                if (r) {
                    var w = p.slice(p.indexOf("/"));
                    h = $f(l.pathname + l.search, w) ? !0 : !1
                } else h = !1;
                if (h) return !0
            }
            return !1
        },
        cg = function(a) {
            return "https:" === a.protocol && (!a.port || "443" === a.port)
        };
    var eg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function fg(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a << 2 | b]
    };
    var gg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
        hg = {
            Fn: "function",
            DustMap: "Object",
            List: "Array"
        },
        M = function(a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = gg.exec(b[d]);
                if (!e) throw Error("Internal Error in " + a);
                var f = e[1],
                    g = "!" === e[2],
                    h = e[3],
                    l = c[d];
                if (null == l) {
                    if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
                } else if ("*" !== h) {
                    var n = typeof l;
                    l instanceof hb ? n = "Fn" : l instanceof za ? n = "List" : l instanceof lb ? n = "DustMap" : l instanceof Pc && (n = "OpaqueValue");
                    if (n != h) throw Error("Error in " + a + ". Argument " + f + " has type " + (hg[n] || n) + ", which does not match required type " + (hg[h] || h) + ".");
                }
            }
        };

    function ig(a) {
        return "" + a
    }

    function jg(a, b) {
        var c = [];
        return c
    };
    var kg = function(a, b) {
            var c = new hb(a, function() {
                for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = C(this, d[e]);
                return b.apply(this, d)
            });
            c.xc();
            return c
        },
        lg = function(a, b) {
            var c = new lb,
                d;
            for (d in b)
                if (b.hasOwnProperty(d)) {
                    var e = b[d];
                    Ga(e) ? c.set(d, kg(a + "_" + d, e)) : Vc(e) ? c.set(d, lg(a + "_" + d, e)) : (Ia(e) || k(e) || "boolean" === typeof e) && c.set(d, e)
                }
            c.xc();
            return c
        };
    var pg = function(a, b) {
        M(F(this), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new lb;
        return d = lg("AssertApiSubject", c)
    };
    var qg = function(a, b) {
        M(F(this), ["actual:?*", "message:?string"], arguments);
        if (a instanceof Rc) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new lb;
        return d = lg("AssertThatSubject", c)
    };

    function rg(a) {
        return function() {
            for (var b = [], c = this.h, d = 0; d < arguments.length; ++d) b.push(Xc(arguments[d], c));
            return Wc(a.apply(null, b))
        }
    }
    var tg = function() {
        for (var a = Math, b = sg, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = rg(a[e].bind(a)))
        }
        return c
    };
    var ug = function(a) {
        var b;
        return b
    };
    var vg = function(a) {
        var b;
        return b
    };
    var wg = function(a) {
        try {
            return encodeURI(a)
        } catch (b) {}
    };
    var xg = function(a) {
        try {
            return encodeURIComponent(a)
        } catch (b) {}
    };

    function yg(a, b) {
        var c = !1;
        return c
    }
    yg.I = "internal.evaluateBooleanExpression";
    var Dg = function(a) {
        M(F(this), ["message:?string"], arguments);
    };
    var Eg = function(a, b) {
        M(F(this), ["min:!number", "max:!number"], arguments);
        return Ma(a, b)
    };
    var N = function(a, b, c) {
        var d = a.h.h;
        if (!d) throw Error("Missing program state.");
        d.mj.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var Fg = function() {
        N(this, "read_container_data");
        var a = new lb;
        a.set("containerId", 'GTM-T7TSN5K');
        a.set("version", '408');
        a.set("environmentName", '');
        a.set("debugMode", yf);
        a.set("previewMode", Af);
        a.set("environmentMode", zf);
        a.xc();
        return a
    };
    var Gg = function() {
        return (new Date).getTime()
    };
    var Hg = function(a) {
        if (null === a) return "null";
        if (a instanceof za) return "array";
        if (a instanceof hb) return "function";
        if (a instanceof Pc) {
            a = a.La;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var Ig = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (yf || Af) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return Wc(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(Xc(c))
            })
        }
    };
    var Jg = function(a) {
        return Qa(Xc(a, this.h))
    };
    var Kg = function(a) {
        return Number(Xc(a, this.h))
    };
    var Lg = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var Mg = function(a, b, c) {
        var d = null,
            e = !1;
        M(F(this), ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"], arguments);
        d = new lb;
        for (var f = 0; f < a.length(); f++) {
            var g = a.get(f);
            g instanceof lb && g.has(b) && g.has(c) && (d.set(g.get(b), g.get(c)), e = !0)
        }
        return e ? d : null
    };
    var sg = "floor ceil round max min abs pow sqrt".split(" ");
    var Ng = function() {
            var a = {};
            return {
                al: function(b) {
                    return a.hasOwnProperty(b) ? a[b] : void 0
                },
                mm: function(b, c) {
                    a[b] = c
                },
                reset: function() {
                    a = {}
                }
            }
        },
        Og = function(a, b) {
            return function() {
                var c = Array.prototype.slice.call(arguments, 0);
                c.unshift(b);
                return hb.prototype.h.apply(a, c)
            }
        },
        Pg = function(a, b) {
            M(F(this), ["apiName:!string", "mock:?*"], arguments);
        };
    var Qg = {};
    Qg.keys = function(a) {
        return new za
    };
    Qg.values = function(a) {
        return new za
    };
    Qg.entries = function(a) {
        return new za
    };
    Qg.freeze = function(a) {
        return a
    };
    Qg.delete = function(a, b) {
        return !1
    };
    var Sg = function() {
        this.h = {};
        this.m = {};
    };
    Sg.prototype.get = function(a, b) {
        var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
        return c
    };
    Sg.prototype.add = function(a, b, c) {
        if (this.h.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
        if (this.m.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.h[a] = c ? void 0 : Ga(b) ? kg(a, b) : lg(a, b)
    };
    var Ug = function(a, b, c) {
        if (a.m.hasOwnProperty(b)) throw "Attempting to add a private function which already exists: " + b + ".";
        if (a.h.hasOwnProperty(b)) throw "Attempting to add a private function with an existing API name: " + b + ".";
        a.m[b] = Ga(c) ? kg(b, c) : lg(b, c)
    };

    function Tg(a, b) {
        var c = void 0;
        return c
    };

    function Vg() {
        var a = {};
        return a
    };
    var Xg = function(a) {
            return Wg ? H.querySelectorAll(a) : null
        },
        Yg = function(a, b) {
            if (!Wg) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!H.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Zg = !1;
    if (H.querySelectorAll) try {
        var $g = H.querySelectorAll(":root");
        $g && 1 == $g.length && $g[0] == H.documentElement && (Zg = !0)
    } catch (a) {}
    var Wg = Zg;
    var P = function(a) {
        xb("GTM", a)
    };
    var ah = function(a) {
            return null == a ? "" : k(a) ? Ta(String(a)) : "e0"
        },
        ch = function(a) {
            return a.replace(bh, "")
        },
        eh = function(a) {
            return dh(a.replace(/\s/g, ""))
        },
        dh = function(a) {
            return Ta(a.replace(fh, "").toLowerCase())
        },
        hh = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return gh.test(a) ? a : "e0"
        },
        jh = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (ih.test(c)) return c
            }
            return "e0"
        },
        mh = function(a,
            b) {
            window.Promise || b([]);
            Promise.all(a.map(function(c) {
                return c.value && -1 !== kh.indexOf(c.name) ? lh(c.value).then(function(d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function() {
                b(a)
            }).catch(function() {
                b([])
            })
        },
        lh = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (z.crypto && z.crypto.subtle) {
                if (nh.test(a)) return Promise.resolve(a);
                try {
                    var b = oh(a);
                    return z.crypto.subtle.digest("SHA-256", b).then(function(c) {
                        var d = Array.from(new Uint8Array(c)).map(function(e) {
                            return String.fromCharCode(e)
                        }).join("");
                        return z.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                    }).catch(function() {
                        return "e2"
                    })
                } catch (c) {
                    return Promise.resolve("e2")
                }
            } else return Promise.resolve("e1")
        },
        oh = function(a) {
            var b;
            if (z.TextEncoder) b = (new TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 |
                        e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        fh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        ih = /^\S+@\S+\.\S+$/,
        gh = /^\+\d{10,15}$/,
        bh = /[.~]/g,
        ph = /^[0-9A-Za-z_-]{43}$/,
        nh = /^[0-9A-Fa-f]{64}$/,
        qh = {},
        rh = (qh.email = "em", qh.phone_number = "pn", qh.first_name = "fn", qh.last_name = "ln", qh.street = "sa", qh.city = "ct", qh.region = "rg", qh.country = "co", qh.postal_code = "pc", qh.error_code = "ec", qh),
        sh = {},
        th = (sh.email = "sha256_email_address", sh.phone_number = "sha256_phone_number", sh.first_name = "sha256_first_name", sh.last_name =
            "sha256_last_name", sh.street = "sha256_street", sh),
        uh = function(a, b) {
            function c(t, u, v, w) {
                var x = ah(t);
                "" !== x && (nh.test(x) ? l.push({
                    name: u,
                    value: x,
                    index: w
                }) : l.push({
                    name: u,
                    value: v(x),
                    index: w
                }))
            }

            function d(t, u) {
                var v = t;
                if (k(v) || Ka(v)) {
                    v = Ka(t) ? t : [t];
                    for (var w = 0; w < v.length; ++w) {
                        var x = ah(v[w]),
                            y = nh.test(x);
                        u && !y && P(89);
                        !u && y && P(88)
                    }
                }
            }

            function e(t, u) {
                var v = t[u];
                d(v, !1);
                var w = th[u];
                t.hasOwnProperty(w) && (t.hasOwnProperty(u) && P(90), v = t[w], d(v, !0));
                return v
            }

            function f(t, u, v) {
                var w = e(t, u);
                w = Ka(w) ? w : [w];
                for (var x =
                        0; x < w.length; ++x) c(w[x], u, v)
            }

            function g(t, u, v, w) {
                var x = e(t, u);
                c(x, u, v, w)
            }

            function h(t) {
                return function(u) {
                    P(64);
                    return t(u)
                }
            }
            var l = [];
            if ("https:" === z.location.protocol) {
                f(a, "email", jh);
                f(a, "phone_number", hh);
                f(a, "first_name", h(eh));
                f(a, "last_name", h(eh));
                var n = a.home_address || {};
                f(n, "street", h(dh));
                f(n, "city", h(dh));
                f(n, "postal_code", h(ch));
                f(n, "region", h(dh));
                f(n, "country", h(ch));
                var p = a.address || {};
                p = Ka(p) ? p : [p];
                for (var q = 0; q < p.length; q++) {
                    var r = p[q];
                    g(r, "first_name", eh, q);
                    g(r, "last_name", eh, q);
                    g(r, "street", dh, q);
                    g(r, "city", dh, q);
                    g(r, "postal_code", ch, q);
                    g(r, "region", dh, q);
                    g(r, "country", ch, q)
                }
                mh(l, b)
            } else l.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), b(l)
        },
        vh = function(a, b) {
            uh(a, function(c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        h = c[f].value,
                        l = c[f].index,
                        n = rh[g];
                    n && h && (-1 === kh.indexOf(g) || /^e\d+$/.test(h) || ph.test(h) || nh.test(h)) && (void 0 !== l && (n += l), d.push(n + "." + h), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        },
        wh = function(a) {
            if (z.Promise) try {
                return new Promise(function(b) {
                    vh(a,
                        function(c, d) {
                            b({
                                Rf: c,
                                Sl: d
                            })
                        })
                })
            } catch (b) {}
        },
        kh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var R = {
            g: {
                ag: "ad_personalization",
                F: "ad_storage",
                Ve: "ad_user_data",
                O: "analytics_storage",
                Ua: "region",
                wd: "consent_updated",
                We: "wait_for_update",
                Wj: "ads",
                fg: "all",
                Xj: "play",
                Yj: "search",
                Zj: "youtube",
                ji: "app_remove",
                ki: "app_store_refund",
                li: "app_store_subscription_cancel",
                mi: "app_store_subscription_convert",
                ni: "app_store_subscription_renew",
                hg: "add_payment_info",
                ig: "add_shipping_info",
                Yb: "add_to_cart",
                Zb: "remove_from_cart",
                jg: "view_cart",
                Kb: "begin_checkout",
                ac: "select_item",
                ab: "view_item_list",
                tb: "select_promotion",
                cb: "view_promotion",
                Ca: "purchase",
                bc: "refund",
                Ha: "view_item",
                kg: "add_to_wishlist",
                bk: "exception",
                oi: "first_open",
                ri: "first_visit",
                la: "gtag.config",
                Ia: "gtag.get",
                si: "in_app_purchase",
                fc: "page_view",
                dk: "screen_view",
                ui: "session_start",
                ek: "timing_complete",
                fk: "track_social",
                yd: "user_engagement",
                ub: "gclid",
                ma: "ads_data_redaction",
                X: "allow_ad_personalization_signals",
                zd: "allow_custom_scripts",
                Ye: "allow_display_features",
                Ad: "allow_enhanced_conversions",
                vb: "allow_google_signals",
                Da: "allow_interest_groups",
                gk: "app_id",
                hk: "app_installer_id",
                ik: "app_name",
                jk: "app_version",
                hc: "auid",
                vi: "auto_detection_enabled",
                Lb: "aw_remarketing",
                Ze: "aw_remarketing_only",
                Bd: "discount",
                Cd: "aw_feed_country",
                Dd: "aw_feed_language",
                Z: "items",
                Ed: "aw_merchant_id",
                lg: "aw_basket_type",
                Mc: "campaign_content",
                Nc: "campaign_id",
                Oc: "campaign_medium",
                Pc: "campaign_name",
                Qc: "campaign",
                Rc: "campaign_source",
                Sc: "campaign_term",
                eb: "client_id",
                wi: "content_group",
                xi: "content_type",
                Ja: "conversion_cookie_prefix",
                Tc: "conversion_id",
                xa: "conversion_linker",
                Mb: "conversion_api",
                Na: "cookie_domain",
                Ea: "cookie_expires",
                Oa: "cookie_flags",
                ic: "cookie_name",
                Uc: "cookie_path",
                Ka: "cookie_prefix",
                hb: "cookie_update",
                wb: "country",
                sa: "currency",
                Fd: "customer_lifetime_value",
                jc: "custom_map",
                yi: "gcldc",
                zi: "debug_mode",
                aa: "developer_id",
                Ai: "disable_merchant_reported_purchases",
                kc: "dc_custom_params",
                mg: "dc_natural_search",
                af: "dynamic_event_settings",
                ng: "affiliation",
                Gd: "checkout_option",
                bf: "checkout_step",
                og: "coupon",
                Vc: "item_list_name",
                cf: "list_name",
                Bi: "promotions",
                Wc: "shipping",
                df: "tax",
                Hd: "engagement_time_msec",
                Xc: "enhanced_client_id",
                Yc: "enhanced_conversions",
                pg: "enhanced_conversions_automatic_settings",
                Id: "estimated_delivery_date",
                ef: "euid_logged_in_state",
                mc: "event_callback",
                kk: "event_category",
                xb: "event_developer_id_string",
                lk: "event_label",
                qg: "event",
                Jd: "event_settings",
                Kd: "event_timeout",
                mk: "description",
                nk: "fatal",
                Ci: "experiments",
                ff: "firebase_id",
                Ld: "first_party_collection",
                Md: "_x_20",
                Nb: "_x_19",
                rg: "fledge",
                sg: "flight_error_code",
                ug: "flight_error_message",
                Di: "fl_activity_category",
                Ei: "fl_activity_group",
                vg: "fl_advertiser_id",
                Fi: "fl_ar_dedupe",
                Gi: "fl_random_number",
                Hi: "tran",
                Ii: "u",
                Nd: "gac_gclid",
                nc: "gac_wbraid",
                wg: "gac_wbraid_multiple_conversions",
                xg: "ga_restrict_domain",
                hf: "ga_temp_client_id",
                Od: "gdpr_applies",
                yg: "geo_granularity",
                ib: "value_callback",
                Pa: "value_key",
                pk: "google_ono",
                jb: "google_signals",
                zg: "google_tld",
                Pd: "groups",
                Ag: "gsa_experiment_id",
                Bg: "iframe_state",
                Qd: "ignore_referrer",
                jf: "internal_traffic_results",
                oc: "is_legacy_converted",
                zb: "is_legacy_loaded",
                Rd: "is_passthrough",
                ya: "language",
                kf: "legacy_developer_id_string",
                za: "linker",
                qc: "accept_incoming",
                Ab: "decorate_forms",
                T: "domains",
                Ob: "url_position",
                Cg: "method",
                qk: "name",
                Zc: "new_customer",
                Dg: "non_interaction",
                Ji: "optimize_id",
                lf: "page_hostname",
                Pb: "page_path",
                Fa: "page_referrer",
                Bb: "page_title",
                Eg: "passengers",
                Fg: "phone_conversion_callback",
                Ki: "phone_conversion_country_code",
                Gg: "phone_conversion_css_class",
                Li: "phone_conversion_ids",
                Hg: "phone_conversion_number",
                Ig: "phone_conversion_options",
                sc: "quantity",
                ad: "redact_device_info",
                nf: "redact_enhanced_user_id",
                Mi: "redact_ga_client_id",
                Ni: "redact_user_id",
                Sd: "referral_exclusion_definition",
                Qb: "restricted_data_processing",
                Oi: "retoken",
                rk: "sample_rate",
                pf: "screen_name",
                Cb: "screen_resolution",
                Pi: "search_term",
                Qa: "send_page_view",
                Rb: "send_to",
                qf: "server_container_url",
                bd: "session_duration",
                Td: "session_engaged",
                rf: "session_engaged_time",
                kb: "session_id",
                Ud: "session_number",
                dd: "delivery_postal_code",
                Jg: "temporary_client_id",
                tf: "topmost_url",
                Qi: "tracking_id",
                uf: "traffic_type",
                na: "transaction_id",
                uc: "transport_url",
                Kg: "trip_type",
                vc: "update",
                lb: "url_passthrough",
                Wd: "_user_agent_architecture",
                Xd: "_user_agent_bitness",
                Yd: "_user_agent_full_version_list",
                Zd: "_user_agent_mobile",
                ae: "_user_agent_model",
                be: "_user_agent_platform",
                ce: "_user_agent_platform_version",
                de: "_user_agent_wow64",
                oa: "user_data",
                Lg: "user_data_auto_latency",
                Mg: "user_data_auto_meta",
                Ng: "user_data_auto_multi",
                Og: "user_data_auto_selectors",
                Pg: "user_data_auto_status",
                vf: "user_data_mode",
                wf: "user_data_settings",
                Aa: "user_id",
                Ra: "user_properties",
                Qg: "us_privacy_string",
                da: "value",
                wc: "wbraid",
                Rg: "wbraid_multiple_conversions",
                Vi: "_host_name",
                Wi: "_in_page_command",
                Xi: "_is_passthrough_cid",
                zf: "non_personalized_ads",
                me: "_sst_parameters",
                fb: "conversion_label",
                ia: "page_location",
                yb: "global_developer_id_string",
                Vd: "tc_privacy_string"
            }
        },
        xh = {},
        yh = Object.freeze((xh[R.g.X] = 1, xh[R.g.Ye] = 1, xh[R.g.Ad] = 1, xh[R.g.vb] = 1, xh[R.g.Z] = 1, xh[R.g.Na] = 1, xh[R.g.Ea] = 1, xh[R.g.Oa] = 1, xh[R.g.ic] = 1, xh[R.g.Uc] = 1, xh[R.g.Ka] = 1, xh[R.g.hb] = 1, xh[R.g.jc] = 1, xh[R.g.aa] = 1, xh[R.g.af] =
            1, xh[R.g.mc] = 1, xh[R.g.Jd] = 1, xh[R.g.Kd] = 1, xh[R.g.Ld] = 1, xh[R.g.xg] = 1, xh[R.g.jb] = 1, xh[R.g.zg] = 1, xh[R.g.Pd] = 1, xh[R.g.jf] = 1, xh[R.g.oc] = 1, xh[R.g.zb] = 1, xh[R.g.za] = 1, xh[R.g.nf] = 1, xh[R.g.Sd] = 1, xh[R.g.Qb] = 1, xh[R.g.Qa] = 1, xh[R.g.Rb] = 1, xh[R.g.qf] = 1, xh[R.g.bd] = 1, xh[R.g.rf] = 1, xh[R.g.dd] = 1, xh[R.g.uc] = 1, xh[R.g.vc] = 1, xh[R.g.wf] = 1, xh[R.g.Ra] = 1, xh[R.g.me] = 1, xh));
    Object.freeze([R.g.ia, R.g.Fa, R.g.Bb, R.g.ya, R.g.pf, R.g.Aa, R.g.ff, R.g.wi]);
    var zh = {},
        Ah = Object.freeze((zh[R.g.ji] = 1, zh[R.g.ki] = 1, zh[R.g.li] = 1, zh[R.g.mi] = 1, zh[R.g.ni] = 1, zh[R.g.oi] = 1, zh[R.g.ri] = 1, zh[R.g.si] = 1, zh[R.g.ui] = 1, zh[R.g.yd] = 1, zh)),
        Bh = {},
        Ch = Object.freeze((Bh[R.g.hg] = 1, Bh[R.g.ig] = 1, Bh[R.g.Yb] = 1, Bh[R.g.Zb] = 1, Bh[R.g.jg] = 1, Bh[R.g.Kb] = 1, Bh[R.g.ac] = 1, Bh[R.g.ab] = 1, Bh[R.g.tb] = 1, Bh[R.g.cb] = 1, Bh[R.g.Ca] = 1, Bh[R.g.bc] = 1, Bh[R.g.Ha] = 1, Bh[R.g.kg] = 1, Bh)),
        Dh = Object.freeze([R.g.X, R.g.vb, R.g.hb]),
        Eh = Object.freeze([].concat(Dh)),
        Fh = Object.freeze([R.g.Ea, R.g.Kd, R.g.bd, R.g.rf, R.g.Hd]),
        Gh = Object.freeze([].concat(Fh)),
        Hh = {},
        Ih = (Hh[R.g.F] = "1", Hh[R.g.O] = "2", Hh),
        Jh = {},
        Kh = Object.freeze((Jh[R.g.X] = 1, Jh[R.g.Ad] = 1, Jh[R.g.Da] = 1, Jh[R.g.Lb] = 1, Jh[R.g.Ze] = 1, Jh[R.g.Bd] = 1, Jh[R.g.Cd] = 1, Jh[R.g.Dd] = 1, Jh[R.g.Z] = 1, Jh[R.g.Ed] = 1, Jh[R.g.Ja] = 1, Jh[R.g.xa] = 1, Jh[R.g.Na] = 1, Jh[R.g.Ea] = 1, Jh[R.g.Oa] = 1, Jh[R.g.Ka] = 1, Jh[R.g.sa] = 1, Jh[R.g.Fd] = 1, Jh[R.g.aa] = 1, Jh[R.g.Ai] = 1, Jh[R.g.Yc] = 1, Jh[R.g.Id] = 1, Jh[R.g.ff] = 1, Jh[R.g.Ld] = 1, Jh[R.g.oc] = 1, Jh[R.g.zb] = 1, Jh[R.g.ya] = 1, Jh[R.g.Zc] = 1, Jh[R.g.ia] = 1, Jh[R.g.Fa] = 1, Jh[R.g.Fg] = 1, Jh[R.g.Gg] =
            1, Jh[R.g.Hg] = 1, Jh[R.g.Ig] = 1, Jh[R.g.Qb] = 1, Jh[R.g.Qa] = 1, Jh[R.g.Rb] = 1, Jh[R.g.qf] = 1, Jh[R.g.dd] = 1, Jh[R.g.na] = 1, Jh[R.g.uc] = 1, Jh[R.g.vc] = 1, Jh[R.g.lb] = 1, Jh[R.g.oa] = 1, Jh[R.g.Aa] = 1, Jh[R.g.da] = 1, Jh));
    Object.freeze(R.g);
    var Lh = {},
        Mh = z.google_tag_manager = z.google_tag_manager || {},
        Nh = Math.random();
    Lh.Xg = "36c0";
    Lh.ke = Number("0") || 0;
    Lh.ka = "dataLayer";
    Lh.Uj = "ChEI8MqlpAYQ67Dh56H12b3bARIkAJxZrBA+RWlz8yL48mJtpzvPoRdi9xmHb2RPxhaJMM12z1B7GgKBhA\x3d\x3d";
    var Oh = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        Ph = {
            __paused: 1,
            __tg: 1
        },
        Qh;
    for (Qh in Oh) Oh.hasOwnProperty(Qh) && (Ph[Qh] = 1);
    var Rh = Ra(""),
        Sh, Th = !1;
    Sh = Th;
    var Uh, Vh = !1;
    Uh = Vh;
    var Wh, Xh = !1;
    Wh = Xh;
    var Yh, Zh = !1;
    Yh = Zh;
    Lh.Xe = "www.googletagmanager.com";
    var $h = "" + Lh.Xe + (Sh ? "/gtag/js" : "/gtm.js"),
        ai = null,
        bi = null,
        ci = {},
        di = {},
        ei = {},
        fi = function() {
            var a = Mh.sequence || 1;
            Mh.sequence = a + 1;
            return a
        };
    Lh.Tj = "";
    var gi = "";
    Lh.Df = gi;
    var hi = new Na,
        ii = {},
        ji = {},
        mi = {
            name: Lh.ka,
            set: function(a, b) {
                K(cb(a, b), ii);
                ki()
            },
            get: function(a) {
                return li(a, 2)
            },
            reset: function() {
                hi = new Na;
                ii = {};
                ki()
            }
        },
        li = function(a, b) {
            return 2 != b ? hi.get(a) : ni(a)
        },
        ni = function(a, b) {
            var c = a.split(".");
            b = b || [];
            for (var d = ii, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        xi = function(a, b) {
            ji.hasOwnProperty(a) || (hi.set(a, b), K(cb(a, b), ii), ki())
        },
        yi = function() {
            for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
                    "gtm.blacklist", "tagTypeBlacklist"
                ], b = 0; b < a.length; b++) {
                var c = a[b],
                    d = li(c, 1);
                if (Ka(d) || Vc(d)) d = K(d);
                ji[c] = d
            }
        },
        ki = function(a) {
            m(ji, function(b, c) {
                hi.set(b, c);
                K(cb(b), ii);
                K(cb(b, c), ii);
                a && delete ji[b]
            })
        },
        zi = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? ni(a) : hi.get(a);
            "array" === Tc(d) || "object" === Tc(d) ? c = K(d) : c = d;
            return c
        };
    var Ai = [],
        Bi = function(a) {
            return void 0 == Ai[a] ? !1 : Ai[a]
        };
    var T = [];
    T[7] = !0;
    T[9] = !0;
    T[27] = !0;
    T[28] = !0;
    T[11] = !0;
    T[13] = !0;
    T[55] = !0;
    T[15] = !0;
    T[16] = !0;
    T[25] = !0;
    T[26] = !0;
    T[34] = !0;
    T[36] = !0;
    T[43] = !0;
    T[52] = !0;
    T[57] = !0;
    T[59] = !0;
    T[61] = !0;
    T[66] = !0;
    T[50] = !0;
    T[68] = !0;
    T[72] = !0;
    T[73] = !0, Ai[1] = !0;
    T[75] = !0;
    Ai[2] = !0;
    T[76] = !0;
    T[77] = !0;
    T[79] = !0;
    T[80] = !0;
    T[83] = !0;
    T[88] = !0;
    T[89] = !0;
    T[92] = !0;
    T[93] = !0;
    T[94] = !0;
    T[96] = !0;
    T[97] = !0;
    T[107] = !0;
    T[113] = !0;
    T[115] = !0;
    T[117] = !0;
    T[121] = !0;

    var V = function(a) {
        return !!T[a]
    };
    var Ci = function(a) {
        xb("HEALTH", a)
    };
    var Di;
    try {
        Di = JSON.parse(vb("eyIwIjoiVVMiLCIxIjoiVVMtT0siLCIyIjpmYWxzZSwiMyI6IiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6IiJ9"))
    } catch (a) {
        P(123), Ci(2), Di = {}
    }
    var Ei = function() {
            return Di["0"] || ""
        },
        Fi = function() {
            return Di["1"] || ""
        },
        Gi = function() {
            var a = !1;
            return a
        },
        Hi = function() {
            return !!Di["6"]
        },
        Ii = function() {
            var a = "";
            return a
        },
        Ji = function() {
            var a = !1;
            a = !!Di["5"];
            return a
        },
        Ki = function() {
            var a = "";
            return a
        };
    var Li, Mi = !1;

    function Ni() {
        Mi = !0;
        Li = productSettings, productSettings = void 0;
        Li = Li || {}
    }
    var Oi = function(a) {
        Mi || Ni();
        return Li[a]
    };
    var Pi = function() {
            var a = z.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        Qi = function(a) {
            if (H.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
            var c = z.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var h = g.indexOf("opacity(");
                    0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = z.getComputedStyle(d, null))
            }
            return !1
        };
    var Ri = function() {
            var a = H.body,
                b = H.documentElement || a && a.parentElement,
                c, d;
            if (H.compatMode && "BackCompat" !== H.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
            else {
                var e = function(f, g) {
                    return f && g ? Math.min(f, g) : Math.max(f, g)
                };
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
            }
            return {
                width: d,
                height: c
            }
        },
        Si = function(a) {
            var b = Ri(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                g = e.right - e.left;
            return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
                d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        };
    var Ti = [],
        Ui = !(!z.IntersectionObserver || !z.IntersectionObserverEntry),
        Vi = function(a, b, c) {
            for (var d = new z.IntersectionObserver(a, {
                    threshold: c
                }), e = 0; e < b.length; e++) d.observe(b[e]);
            for (var f = 0; f < Ti.length; f++)
                if (!Ti[f]) return Ti[f] = d, f;
            return Ti.push(d) - 1
        },
        Wi = function(a, b, c) {
            function d(h, l) {
                var n = {
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    },
                    p = {
                        boundingClientRect: h.getBoundingClientRect(),
                        intersectionRatio: l,
                        intersectionRect: n,
                        isIntersecting: 0 < l,
                        rootBounds: n,
                        target: h,
                        time: Va()
                    };
                I(function() {
                    return a(p)
                })
            }
            for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
            c.sort(function(h, l) {
                return h - l
            });
            return function() {
                for (var h = 0; h < b.length; h++) {
                    var l = Si(b[h]);
                    if (l > e[h])
                        for (; f[h] < c.length - 1 && l >= c[f[h] + 1];) d(b[h], l), f[h]++;
                    else if (l < e[h])
                        for (; 0 <= f[h] && l <= c[f[h]];) d(b[h], l), f[h]--;
                    e[h] = l
                }
            }
        },
        Xi = function(a, b, c) {
            for (var d = 0; d < c.length; d++) 1 < c[d] ? c[d] = 1 : 0 > c[d] && (c[d] = 0);
            if (Ui) {
                var e = !1;
                I(function() {
                    e ||
                        Wi(a, b, c)()
                });
                return Vi(function(f) {
                    e = !0;
                    for (var g = {
                            nd: 0
                        }; g.nd < f.length; g = {
                            nd: g.nd
                        }, g.nd++) I(function(h) {
                        return function() {
                            return a(f[h.nd])
                        }
                    }(g))
                }, b, c)
            }
            return z.setInterval(Wi(a, b, c), 1E3)
        },
        Yi = function(a) {
            Ui ? 0 <= a && a < Ti.length && Ti[a] && (Ti[a].disconnect(), Ti[a] = void 0) : z.clearInterval(a)
        };
    var Zi = /:[0-9]+$/,
        $i = /^\d+\.fls\.doubleclick\.net$/,
        aj = function(a, b, c, d) {
            for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
                var h = f[g].split("=");
                if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                    var l = h.slice(1).join("=");
                    if (!c) return d ? l : decodeURIComponent(l).replace(/\+/g, " ");
                    e.push(d ? l : decodeURIComponent(l).replace(/\+/g, " "))
                }
            }
            return c ? e : void 0
        },
        dj = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = bj(a.protocol) || bj(z.location.protocol);
            "port" === b ? a.port =
                String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(Zi, "").toLowerCase());
            return cj(a, b, c, d, e)
        },
        cj = function(a, b, c, d, e) {
            var f, g = bj(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = ej(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(Zi, "").toLowerCase();
                    if (c) {
                        var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length))
                    }
                    break;
                case "port":
                    f =
                        String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || xb("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var l = f.split("/");
                    0 <= (d || []).indexOf(l[l.length - 1]) && (l[l.length - 1] = "");
                    f = l.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = aj(f, e, !1));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        bj = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        ej = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        fj = function(a) {
            var b = H.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || xb("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(Zi, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        gj = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n :
                    p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = fj(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                h = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === h[0] && (h = h.substring(1));
            g = c(g);
            h = c(h);
            "" !== g && (g = "?" + g);
            "" !== h && (h = "#" + h);
            var l = "" + f + g + h;
            "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
            return l
        },
        hj = function(a) {
            var b = fj(z.location.href),
                c = dj(b, "host", !1);
            if (c && c.match($i)) {
                var d = dj(b,
                    "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };
    var jj = function(a, b, c) {
            var d = a.element,
                e = {
                    U: a.U,
                    type: a.ja,
                    tagName: d.tagName
                };
            b && (e.querySelector = ij(d));
            c && (e.isVisible = !Qi(d));
            return e
        },
        kj = function(a, b, c) {
            return jj({
                element: a.element,
                U: a.U,
                ja: "1"
            }, b, c)
        },
        lj = function(a) {
            var b = !!a.zc + "." + !!a.Ac;
            a && a.jd && a.jd.length && (b += "." + a.jd.join("."));
            a && a.Wa && (b += "." + a.Wa.email + "." + a.Wa.phone + "." + a.Wa.address);
            return b
        },
        oj = function(a) {
            if (0 != a.length) {
                var b;
                b = mj(a, function(c) {
                    return !nj.test(c.U)
                });
                b = mj(b, function(c) {
                    return "INPUT" === c.element.tagName.toUpperCase()
                });
                b = mj(b, function(c) {
                    return !Qi(c.element)
                });
                return b[0]
            }
        },
        pj = function(a, b) {
            if (!b || 0 === b.length) return a;
            for (var c = [], d = 0; d < a.length; d++) {
                for (var e = !0, f = 0; f < b.length; f++) {
                    var g = b[f];
                    if (g && Yg(a[d].element, g)) {
                        e = !1;
                        break
                    }
                }
                e && c.push(a[d])
            }
            return c
        },
        mj = function(a, b) {
            if (1 >= a.length) return a;
            var c = a.filter(b);
            return 0 == c.length ? a : c
        },
        ij = function(a) {
            var b;
            if (a === H.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] ===
                                        a) {
                                        e = g + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = ij(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        rj = function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = d.textContent;
                "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
                if (e) {
                    var f = e.match(qj);
                    if (f) {
                        var g = f[0],
                            h;
                        if (z.location) {
                            var l = cj(z.location, "host", !0);
                            h = 0 <= g.toLowerCase().indexOf(l)
                        } else h = !1;
                        h || b.push({
                            element: d,
                            U: g
                        })
                    }
                }
            }
            return b
        },
        vj = function() {
            var a = [],
                b = H.body;
            if (!b) return {
                elements: a,
                status: "4"
            };
            for (var c = b.querySelectorAll("*"),
                    d = 0; d < c.length && 1E4 > d; d++) {
                var e = c[d];
                if (!(0 <= sj.indexOf(e.tagName.toUpperCase())) && e.children instanceof HTMLCollection) {
                    for (var f = !1, g = 0; g < e.childElementCount && 1E4 > g; g++)
                        if (!(0 <= tj.indexOf(e.children[g].tagName.toUpperCase()))) {
                            f = !0;
                            break
                        }(!f || V(114) && -1 !== uj.indexOf(e.tagName)) && a.push(e)
                }
            }
            return {
                elements: a,
                status: 1E4 < c.length ? "2" : "1"
            }
        },
        wj = !0,
        xj = !1;
    xj = !0;
    var qj = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
        yj = /@(gmail|googlemail)\./i,
        nj = /support|noreply/i,
        sj = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
        tj = ["BR"],
        zj = {
            Cm: "1",
            Km: "2",
            Dm: "3",
            Fm: "4",
            Am: "5",
            Lm: "6",
            Gm: "7"
        },
        Aj = {},
        uj = ["INPUT", "SELECT"];
    var Tj = function(a) {
            a = a || {
                zc: !0,
                Ac: !0
            };
            a.Wa = a.Wa || {
                email: !0,
                phone: !1,
                address: !1
            };
            var b = lj(a),
                c = Aj[b];
            if (c && 200 > Va() - c.timestamp) return c.result;
            var d = vj(),
                e = d.status,
                f = [],
                g, h, l = [];
            if (!V(114)) {
                if (a.Wa && a.Wa.email) {
                    var n = rj(d.elements);
                    f = pj(n, a && a.jd);
                    g = oj(f);
                    10 < n.length && (e = "3")
                }!a.Sh && g && (f = [g]);
                for (var p = 0; p < f.length; p++) l.push(kj(f[p], a.zc, a.Ac));
                l = l.slice(0, 10)
            } else if (a.Wa) {}
            g && (h = kj(g, a.zc, a.Ac));
            var D = {
                elements: l,
                Lh: h,
                status: e
            };
            Aj[b] = {
                timestamp: Va(),
                result: D
            };
            return D
        },
        Uj = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.U.length + ":" + yj.test(a.U)
        };
    var Vj = function(a, b, c) {
            if (!c) return !1;
            var d = c.selector_type,
                e = String(c.value),
                f;
            if ("js_variable" === d) {
                e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                for (var g = e.split(","), h = 0; h < g.length; h++) {
                    var l = g[h].trim();
                    if (l) {
                        if (0 === l.indexOf("dataLayer.")) f = li(l.substring(10));
                        else {
                            var n = l.split(".");
                            f = z[n.shift()];
                            for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                        }
                        if (void 0 !== f) break
                    }
                }
            } else if ("css_selector" === d && Wg) {
                var q = Xg(e);
                if (q && 0 < q.length) {
                    f = [];
                    for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(xc(q[r]) ||
                        Ta(q[r].value));
                    f = 1 === f.length ? f[0] : f
                }
            }
            return f ? (a[b] = f, !0) : !1
        },
        Wj = function(a) {
            if (a) {
                var b = {},
                    c = !1;
                c = Vj(b, "email", a.email) || c;
                c = Vj(b, "phone_number", a.phone) || c;
                b.address = [];
                for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                    var f = {};
                    c = Vj(f, "first_name", d[e].first_name) || c;
                    c = Vj(f, "last_name", d[e].last_name) || c;
                    c = Vj(f, "street", d[e].street) || c;
                    c = Vj(f, "city", d[e].city) || c;
                    c = Vj(f, "region", d[e].region) || c;
                    c = Vj(f, "country", d[e].country) || c;
                    c = Vj(f, "postal_code", d[e].postal_code) || c;
                    b.address.push(f)
                }
                return c ?
                    b : void 0
            }
        },
        Xj = function(a) {
            return a.B[R.g.wf]
        },
        Yj = function(a) {
            var b = W(a, R.g.Yc) || {},
                c = !1;
            m(b, function(d, e) {
                var f = e.enhanced_conversions_mode;
                if ("automatic" === f || "manual" === f) c = !0
            });
            return c
        },
        Zj = function(a) {
            if (!Vc(a)) return !1;
            var b = a.mode;
            return "auto_detect" === b || "selectors" === b || "code" === b || !!a.enable_code
        },
        ak = function(a) {
            if (a) {
                if ("selectors" === a.mode || Vc(a.selectors)) return Wj(a.selectors);
                if ("auto_detect" === a.mode || Vc(a.auto_detect)) {
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = Tj({
                                zc: !1,
                                Ac: !1,
                                jd: c.exclude_element_selectors,
                                Wa: {
                                    email: !!c.email,
                                    phone: !!c.phone,
                                    address: !!c.address
                                }
                            }).elements,
                            e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) {
                                var g = d[f];
                                if ("1" === g.type) {
                                    e.email = g.U;
                                    break
                                }
                            }
                        b = e
                    } else b = void 0;
                    return b
                }
            }
        };
    var bk = function(a) {
            var b = a && a[R.g.pg];
            return b && b[R.g.vi]
        },
        ck = function() {
            return -1 !== ic.userAgent.toLowerCase().indexOf("firefox")
        },
        dk = function(a) {
            if (a && a.length) {
                for (var b = [], c = 0; c < a.length; ++c) {
                    var d = a[c];
                    d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) :
                        b.push("")
                }
                return b.join(",")
            }
        };
    var ek = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var fk = function(a) {
        fk[" "](a);
        return a
    };
    fk[" "] = function() {};
    var hk = function() {
        var a = gk,
            b = "qh";
        if (a.qh && a.hasOwnProperty(b)) return a.qh;
        var c = new a;
        return a.qh = c
    };
    var gk = function() {
        var a = {};
        this.h = function() {
            var b = ek.h,
                c = ek.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.m = function() {
            a[ek.h] = !0
        }
    };
    var ik = !1,
        jk = !1,
        kk = [],
        lk = {},
        mk = {},
        nk = {
            ad_storage: !1,
            ad_user_data: !1,
            ad_personalization: !1
        };

    function ok() {
        var a = kc("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            cps: {},
            default: pk,
            update: qk,
            declare: rk,
            implicit: sk,
            addListener: tk,
            notifyListeners: uk,
            setCps: vk,
            active: !1,
            usedDeclare: !1,
            usedDefault: !1,
            usedUpdate: !1,
            usedImplicit: !1,
            usedSetCps: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function wk(a, b, c, d) {
        return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
    }

    function rk(a, b, c, d, e) {
        var f = ok();
        f.active = !0;
        f.usedDeclare = !0;
        var g = f.entries,
            h = g[a] || {},
            l = h.declare_region,
            n = c && k(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (wk(n, l, d, e)) {
            var p = {
                region: h.region,
                declare_region: n,
                declare: "granted" === b,
                implicit: h.implicit,
                default: h.default,
                update: h.update,
                quiet: h.quiet
            };
            if ("" !== d || !1 !== h.declare) g[a] = p
        }
    }

    function sk(a, b) {
        var c = ok();
        c.active = !0;
        c.usedImplicit = !0;
        var d = c.entries,
            e = d[a] = d[a] || {};
        !1 !== e.implicit && (e.implicit = "granted" === b)
    }

    function pk(a, b, c, d, e, f) {
        var g = ok();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        xb("TAGGING", 19);
        if (void 0 == b) xb("TAGGING", 18);
        else {
            var h = g.entries,
                l = h[a] || {},
                n = l.region,
                p = c && k(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if (wk(p, n, d, e)) {
                var q = !!(f && 0 < f && void 0 === l.update),
                    r = {
                        region: p,
                        declare_region: l.declare_region,
                        implicit: l.implicit,
                        default: "granted" === b,
                        declare: l.declare,
                        update: l.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== l.default) h[a] =
                    r;
                q && z.setTimeout(function() {
                    if (h[a] === r && r.quiet) {
                        r.quiet = !1;
                        var t = [a];
                        if (Bi(4))
                            for (var u in lk) lk.hasOwnProperty(u) && lk[u] === a && t.push(u);
                        for (var v = 0; v < t.length; v++) xk(t[v]);
                        uk();
                        xb("TAGGING", 2)
                    }
                }, f)
            }
        }
    }

    function qk(a, b) {
        var c = ok();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = yk(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = yk(c, a),
                h = [a];
            if (Bi(4))
                for (var l in lk) lk.hasOwnProperty(l) && lk[l] === a && h.push(l);
            if (f.quiet) {
                f.quiet = !1;
                for (var n = 0; n < h.length; n++) xk(h[n])
            } else if (g !== d)
                for (var p = 0; p < h.length; p++) xk(h[p])
        }
    }

    function zk(a, b, c, d, e, f) {
        var g = a[b] || {},
            h = g.region,
            l = d && k(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (wk(l, h, e, f)) {
            var n = {
                enabled: "granted" === c,
                region: l
            };
            if ("" !== e || !1 !== g.enabled) return a[b] = n, !0
        }
        return !1
    }

    function vk(a, b, c, d, e) {
        var f = ok();
        zk(f.cps, a, b, c, d, e) && (f.usedSetCps = !0)
    }

    function tk(a, b) {
        kk.push({
            consentTypes: a,
            Vk: b
        })
    }

    function xk(a) {
        for (var b = 0; b < kk.length; ++b) {
            var c = kk[b];
            Ka(c.consentTypes) && -1 !== c.consentTypes.indexOf(a) && (c.Bj = !0)
        }
    }

    function uk(a, b) {
        for (var c = 0; c < kk.length; ++c) {
            var d = kk[c];
            if (d.Bj) {
                d.Bj = !1;
                try {
                    d.Vk({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function yk(a, b) {
        var c = a.entries,
            d = c[b] || {},
            e = d.update;
        if (void 0 !== e) return e ? 1 : 2;
        e = d.default;
        if (void 0 !== e) return e ? 1 : 2;
        if (Bi(4) && lk.hasOwnProperty(b)) {
            var f = c[lk[b]] || {};
            e = f.update;
            if (void 0 !== e) return e ? 1 : 2;
            e = f.default;
            if (void 0 !== e) return e ? 1 : 2
        }
        e = d.declare;
        return void 0 !== e ? e ? 1 : 2 : Bi(4) && (e = d.implicit, void 0 !== e) ? e ? 3 : 4 : Bi(3) && nk.hasOwnProperty(b) ? nk[b] ? 3 : 4 : 0
    }
    var Ak = function(a) {
            var b = ok();
            b.accessedAny = !0;
            switch (yk(b, a)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                case 4:
                    return !1;
                default:
                    return !0
            }
        },
        Bk = function(a) {
            var b = ok();
            b.accessedDefault = !0;
            switch ((b.entries[a] || {}).default) {
                case !0:
                    return 3;
                case !1:
                    return 2;
                default:
                    return 1
            }
        },
        Ck = function(a) {
            var b = ok();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Dk = function() {
            if (!hk().h()) return !1;
            var a = ok();
            a.accessedAny = !0;
            return a.active
        },
        Ek = function() {
            var a = ok();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        Fk = function(a,
            b) {
            ok().addListener(a, b)
        },
        Gk = function(a, b) {
            ok().notifyListeners(a, b)
        },
        Hk = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Ck(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Fk(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Ik = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var h = d[g];
                    Ak(h) && !e[h] && (f.push(h), e[h] = !0)
                }
                return f
            }
            var d = k(b) ? [b] : b,
                e = {};
            c().length !== d.length && Fk(d, function(f) {
                var g = c();
                0 < g.length && (f.consentTypes = g, a(f))
            })
        };

    function Jk() {}

    function Kk() {};
    var Lk = [R.g.F, R.g.O],
        Mk = [R.g.F, R.g.O, R.g.Ve, R.g.ag],
        Nk = {},
        Ok = (Nk[R.g.F] = 1, Nk[R.g.O] = 2, Nk[R.g.Ve] = 3, Nk[R.g.ag] = 4, Nk),
        Pk = {},
        Qk = (Pk[R.g.Wj] = "a", Pk[R.g.Yj] = "s", Pk[R.g.Zj] = "y", Pk[R.g.Xj] = "p", Pk),
        Rk = function(a) {
            for (var b = a[R.g.Ua], c = Array.isArray(b) ? b : [b], d = {
                    od: 0
                }; d.od < c.length; d = {
                    od: d.od
                }, ++d.od) m(a, function(e) {
                return function(f, g) {
                    if (f !== R.g.Ua) {
                        var h = c[e.od],
                            l = Ei(),
                            n = Fi();
                        jk = !0;
                        ik && xb("TAGGING", 20);
                        ok().declare(f, g, h, l, n)
                    }
                }
            }(d))
        },
        Sk = function(a) {
            var b = a[R.g.Ua];
            b && P(40);
            var c = a[R.g.We];
            c && P(41);
            for (var d =
                    Ka(b) ? b : [b], e = {
                        pd: 0
                    }; e.pd < d.length; e = {
                    pd: e.pd
                }, ++e.pd) m(a, function(f) {
                return function(g, h) {
                    if (g !== R.g.Ua && g !== R.g.We) {
                        var l = d[f.pd],
                            n = Number(c),
                            p = Ei(),
                            q = Fi();
                        ik = !0;
                        jk && xb("TAGGING", 20);
                        ok().default(g, h, l, p, q, n)
                    }
                }
            }(e))
        },
        Tk = function(a, b) {
            m(a, function(c, d) {
                ik = !0;
                jk && xb("TAGGING", 20);
                ok().update(c, d)
            });
            Gk(b.eventId, b.priorityId)
        },
        Uk = function(a) {
            for (var b = a[R.g.Ua], c = Array.isArray(b) ? b : [b], d = {
                    rd: 0
                }; d.rd < c.length; d = {
                    rd: d.rd
                }, ++d.rd) m(a, function(e) {
                return function(f, g) {
                    if (f !== R.g.Ua) {
                        var h = c[e.rd],
                            l = Ei(),
                            n = Fi();
                        ok().setCps(f, g, h, l, n)
                    }
                }
            }(d))
        },
        Vk = function(a) {
            for (var b = a[R.g.Ua], c = Array.isArray(b) ? b : [b], d = {
                    Hc: 0
                }; d.Hc < c.length; d = {
                    Hc: d.Hc
                }, ++d.Hc) a.hasOwnProperty(R.g.fg) && m(Qk, function(e) {
                return function(f) {
                    zk(mk, f, a[R.g.fg], c[e.Hc], Ei(), Fi())
                }
            }(d)), m(a, function(e) {
                return function(f, g) {
                    f !== R.g.Ua && f !== R.g.fg && zk(mk, f, g, c[e.Hc], Ei(), Fi())
                }
            }(d))
        },
        Wk = function() {
            var a = {},
                b;
            for (b in Ok)
                if (Ok.hasOwnProperty(b)) {
                    var c = Ok[b],
                        d, e = ok();
                    e.accessedAny = !0;
                    d = yk(e, b);
                    a[c] = d
                }
            var f = V(111) && Lk.every(Ak),
                g = V(104);
            return f ||
                g ? qe(a, 1) : qe(a, 0)
        },
        Xk = {},
        Yk = (Xk[R.g.F] = 0, Xk[R.g.O] = 1, Xk[R.g.Ve] = 2, Xk[R.g.ag] = 3, Xk);

    function Zk(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }
    var $k = function() {
            if (V(106)) {
                for (var a = "1", b = 0; b < Mk.length; b++) {
                    var c = a,
                        d, e = Mk[b],
                        f = lk[e];
                    d = void 0 === f ? 0 : Yk.hasOwnProperty(f) ? 12 | Yk[f] : 8;
                    var g = ok();
                    g.accessedAny = !0;
                    var h = g.entries[e] || {};
                    d = d << 2 | Zk(h.implicit);
                    a = c + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [d] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [Zk(h.declare) << 4 | Zk(h.default) << 2 | Zk(h.update)])
                }
                return a
            }
            for (var l = "G1", n = 0; n < Lk.length; n++) switch (Bk(Lk[n])) {
                case 3:
                    l += "1";
                    break;
                case 2:
                    l += "0";
                    break;
                case 1:
                    l += "-"
            }
            return l
        },
        al = function() {
            var a = ok(),
                b = a.cps,
                c = [],
                d;
            for (d in mk) mk.hasOwnProperty(d) && mk[d].enabled && (a.usedSetCps ? b.hasOwnProperty(d) && b[d].enabled && c.push(d) : c.push(d));
            for (var e = "", f = 0; f < c.length; f++) {
                var g = Qk[c[f]];
                g && (e += g)
            }
            return "" === e ? "-" : e
        },
        bl = function() {
            return Ak(R.g.Ve) ? Hi() || ok().usedSetCps : !1
        },
        cl = function(a, b) {
            Fk(a, b)
        },
        dl = function(a, b) {
            Ik(a, b)
        },
        el = function(a, b) {
            Hk(a, b)
        };
    var fl = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var gl = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var l = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    };
    var hl = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        il = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function jl(a) {
        return "null" !== a.origin
    };
    var ml = function(a, b, c, d) {
            return kl(d) ? gl(a, String(b || ll()), c) : []
        },
        pl = function(a, b, c, d, e) {
            if (kl(e)) {
                var f = nl(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = ol(f, function(g) {
                        return g.Jf
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = ol(f, function(g) {
                        return g.Fe
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function ql(a, b, c, d) {
        var e = ll(),
            f = window;
        jl(f) && (f.document.cookie = a);
        var g = ll();
        return e != g || void 0 != c && 0 <= ml(b, g, !1, d).indexOf(c)
    }
    var ul = function(a, b, c, d) {
            function e(w, x, y) {
                if (null == y) return delete h[x], w;
                h[x] = y;
                return w + "; " + x + "=" + y
            }

            function f(w, x) {
                if (null == x) return delete h[x], w;
                h[x] = !0;
                return w + "; " + x
            }
            if (!kl(c.Gb)) return 2;
            var g;
            void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = rl(b), g = a + "=" + b);
            var h = {};
            g = e(g, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            g = e(g, "expires", l);
            g = e(g, "max-age", c.Kl);
            g = e(g, "samesite",
                c.gm);
            c.im && (g = f(g, "secure"));
            var n = c.domain;
            if (n && "auto" === n.toLowerCase()) {
                for (var p = sl(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                    var u = "none" !== p[t] ? p[t] : void 0,
                        v = e(g, "domain", u);
                    v = f(v, c.flags);
                    try {
                        d && d(a, h)
                    } catch (w) {
                        q = w;
                        continue
                    }
                    r = !0;
                    if (!tl(u, c.path) && ql(v, a, b, c.Gb)) return 0
                }
                if (q && !r) throw q;
                return 1
            }
            n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
            g = f(g, c.flags);
            d && d(a, h);
            return tl(n, c.path) ? 1 : ql(g, a, b, c.Gb) ? 0 : 1
        },
        vl = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return ul(a,
                b, c)
        };

    function ol(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g],
                l = b(h);
            l === c ? d.push(h) : void 0 === f || l < f ? (e = [h], f = l) : l === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }

    function nl(a, b, c) {
        for (var d = [], e = ml(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var l = g.shift();
                l && (l = l.split("-"), d.push({
                    id: g.join("."),
                    Jf: 1 * l[0] || 1,
                    Fe: 1 * l[1] || 1
                }))
            }
        }
        return d
    }
    var rl = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        wl = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        xl = /(^|\.)doubleclick\.net$/i,
        tl = function(a, b) {
            return xl.test(window.document.location.hostname) || "/" === b && wl.test(a)
        },
        ll = function() {
            return jl(window) ? window.document.cookie : ""
        },
        sl = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            xl.test(e) || wl.test(e) || a.push("none");
            return a
        },
        kl = function(a) {
            return hk().h() && a && Dk() ? Ck(a) ? Ak(a) : !1 : !0
        };
    var yl = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ fl(a) & 2147483647) : String(b)
        },
        zl = function(a) {
            return [yl(a), Math.round(Va() / 1E3)].join(".")
        },
        Cl = function(a, b, c, d, e) {
            var f = Al(b);
            return pl(a, f, Bl(c), d, e)
        },
        Dl = function(a, b, c, d) {
            var e = "" + Al(c),
                f = Bl(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Al = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Bl = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };
    var El = function() {
        Mh.dedupe_gclid || (Mh.dedupe_gclid = "" + zl());
        return Mh.dedupe_gclid
    };
    var Fl = function() {
        var a = !1;
        return a
    };
    var Hl = function(a, b) {
            var c = Gl();
            c.pending || (c.pending = []);
            La(c.pending, function(d) {
                return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
            }) || c.pending.push({
                target: a,
                onLoad: b
            })
        },
        Il = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {};
            this.pending = []
        },
        Gl = function() {
            var a = kc("google_tag_data", {}),
                b = a.tidr;
            b || (b = new Il, a.tidr = b);
            return b
        };
    var L = {
            C: "GTM-T7TSN5K",
            Za: "10754089"
        },
        Jl = {
            zj: "GTM-T7TSN5K",
            Aj: "GTM-T7TSN5K"
        };
    L.yf = Ra("");
    var Kl = function() {
            return Jl.zj ? Jl.zj.split("|") : [L.C]
        },
        Ll = function() {
            return Jl.Aj ? Jl.Aj.split("|") : []
        },
        Ml = function(a) {
            var b = Gl();
            return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
        };

    function Nl() {
        var a = Gl();
        if (a.pending) {
            for (var b, c = [], d = !1, e = Kl(), f = Ll(), g = {}, h = 0; h < a.pending.length; g = {
                    Jc: g.Jc
                }, h++) g.Jc = a.pending[h], La(g.Jc.target.isDestination ? f : e, function(l) {
                return function(n) {
                    return n === l.Jc.target.ctid
                }
            }(g)) ? d || (b = g.Jc.onLoad, d = !0) : c.push(g.Jc);
            a.pending = c;
            if (b) try {
                b(L.Za || "_" + L.C)
            } catch (l) {}
        }
    }
    var Ol = function() {
            for (var a = Gl(), b = Kl(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                d ? (d.state = 2, d.containers = Kl(), d.destinations = Ll()) : a.container[b[c]] = {
                    state: 2,
                    containers: Kl(),
                    destinations: Ll()
                }
            }
            for (var e = Ll(), f = 0; f < e.length; f++) {
                var g = a.destination[e[f]];
                g && 0 === g.state && P(93);
                g ? (g.state = 2, g.containers = Kl(), g.destinations = Ll()) : a.destination[e[f]] = {
                    state: 2,
                    containers: Kl(),
                    destinations: Ll()
                }
            }
            Nl()
        },
        Pl = function(a) {
            return !!Gl().container[a]
        },
        Ql = function() {
            return {
                ctid: L.C,
                isDestination: L.yf
            }
        },
        Rl = function() {
            var a =
                Gl().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
            return !1
        },
        Sl = function() {
            var a = {};
            m(Gl().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        };
    var Tl = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        Ul = function(a) {
            var b = L.C.split("-")[0].toUpperCase(),
                c = {};
            c.ctid = L.C;
            c.am = Lh.ke;
            c.fm = Lh.Xg;
            c.Hl = L.yf ? 2 : 1;
            Sh ? (c.Vf = Tl[b], c.Vf || (c.Vf = 0)) : c.Vf = Yh ? 13 : 10;
            Wh ? c.Dh = 1 : Fl() ? c.Dh = 2 : c.Dh = 3;
            var d;
            var e = c.Vf,
                f = c.Dh;
            void 0 === e ? d = "" : (f || (f = 0), d = "" + fg(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e << 2 | f]);
            var g = c.Om,
                h = 4 + d + (g ? "" + fg(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [g] : ""),
                l, n = c.fm;
            l = n && eg.test(n) ?
                "" + fg(3, 2) + n : "";
            var p, q = c.am;
            p = q ? "" + fg(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [q] : "";
            var r;
            var t = c.ctid;
            if (t && a) {
                var u = t.split("-"),
                    v = u[0].toUpperCase();
                if ("GTM" !== v && "OPT" !== v) r = "";
                else {
                    var w = u[1];
                    r = "" + fg(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + w.length] + (c.Hl || 0) + w
                }
            } else r = "";
            return h + l + p + r
        };

    function Vl(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var Wl = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function Xl() {
        return Jb ? !!Qb && !!Qb.platform : !1
    }

    function Yl() {
        return Tb("iPhone") && !Tb("iPod") && !Tb("iPad")
    }

    function Zl() {
        Yl() || Tb("iPad") || Tb("iPod")
    };
    Vb();
    Ub() || Tb("Trident") || Tb("MSIE");
    Tb("Edge");
    !Tb("Gecko") || -1 != Pb().toLowerCase().indexOf("webkit") && !Tb("Edge") || Tb("Trident") || Tb("MSIE") || Tb("Edge"); - 1 != Pb().toLowerCase().indexOf("webkit") && !Tb("Edge") && Tb("Mobile");
    Xl() || Tb("Macintosh");
    Xl() || Tb("Windows");
    (Xl() ? "Linux" === Qb.platform : Tb("Linux")) || Xl() || Tb("CrOS");
    var $l = sa.navigator || null;
    $l && ($l.appVersion || "").indexOf("X11");
    Xl() || Tb("Android");
    Yl();
    Tb("iPad");
    Tb("iPod");
    Zl();
    Pb().toLowerCase().indexOf("kaios");
    var am = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (38 == g || 63 == g) {
                    var h = a.charCodeAt(e + f);
                    if (!h || 61 == h || 38 == h || 35 == h) return e
                }
                e += f + 1
            }
            return -1
        },
        bm = /#|$/,
        cm = function(a, b) {
            var c = a.search(bm),
                d = am(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        dm = /[?&]($|#)/,
        em = function(a, b, c) {
            for (var d, e = a.search(bm), f = 0, g, h = []; 0 <= (g = am(a, f, b, e));) h.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            h.push(a.slice(f));
            d = h.join("").replace(dm, "$1");
            var l, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                0 > r && (r = d.length);
                var t = d.indexOf("?"),
                    u;
                0 > t || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
                q = [d.slice(0, t), u, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                l = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else l = d;
            return l
        };
    var fm = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        fk(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        gm = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function hm(a) {
        if (!a || !H.head) return null;
        var b = im("META");
        H.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var jm = function() {
            if (z.top == z) return 0;
            var a = z.location.ancestorOrigins;
            return a ? a[a.length - 1] == z.location.origin ? 1 : 2 : fm(z.top) ? 1 : 2
        },
        im = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function km(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = im("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        h = Bb(g, e);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            Wl(e, "load", f);
            Wl(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Dm = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            gm(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            Cm(c, b)
        },
        Cm = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else km(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Em = function() {};
    var Fm = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Gm = function(a, b) {
            b = void 0 === b ? {} : b;
            this.m = a;
            this.h = null;
            this.K = {};
            this.sb = 0;
            var c;
            this.R = null != (c = b.sm) ? c : 500;
            var d;
            this.D = null != (d = b.Pm) ? d : !1;
            this.B = null
        };
    ra(Gm, Em);
    Gm.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.D
            },
            d = il(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.R && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.R));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Fm(c), c.internalBlockOnErrors = b.D, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Hm(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Gm.prototype.removeEventListener = function(a) {
        a && a.listenerId && Hm(this, "removeEventListener", null, a.listenerId)
    };
    var Jm = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var h = c;
            2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
            var l;
            if (0 === h)
                if (a.purpose && a.vendor) {
                    var n = Im(a.vendor.consents, void 0 === d ? "755" : d);
                    l = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Im(a.purpose.consents, b)
                } else l = !0;
            else l = 1 === h ? a.purpose && a.vendor ? Im(a.purpose.legitimateInterests,
                b) && Im(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return l
        },
        Im = function(a, b) {
            return !(!a || !a[b])
        },
        Hm = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.m.__tcfapi) {
                var e = a.m.__tcfapi;
                e(b, 2, c, d)
            } else if (Km(a)) {
                Lm(a);
                var f = ++a.sb;
                a.K[f] = c;
                if (a.h) {
                    var g = {};
                    a.h.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Km = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.m, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (h) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (h) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        Lm = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.K[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Wl(a.m, "message", a.B))
        },
        Mm = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Fm(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (Dm({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var Nm = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        Om = Vl('', 500);

    function Pm() {
        var a = Mh.tcf || {};
        return Mh.tcf = a
    }
    var Vm = function() {
        var a = Pm(),
            b = new Gm(z, {
                sm: -1
            });
        Qm(b) && Rm() && P(124);
        if (!Rm() && !a.active && Qm(b)) {
            a.active = !0;
            a.Sf = {};
            Sm();
            a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState) Tm(a), Um(a);
                    else {
                        var d;
                        a.gdprApplies = c.gdprApplies;
                        if (!1 === c.gdprApplies) {
                            var e = {},
                                f;
                            for (f in Nm) Nm.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                            var g = {},
                                h;
                            for (h in Nm)
                                if (Nm.hasOwnProperty(h))
                                    if ("1" ===
                                        h) {
                                        var l, n = c,
                                            p = !0;
                                        p = void 0 === p ? !1 : p;
                                        l = Mm(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Jm(n, "1", 0) : !1;
                                        g["1"] = l
                                    } else g[h] = Jm(c, h, Nm[h]);
                            d = g
                        }
                        d && (a.tcString = c.tcString || "tcempty", a.Sf = d, Um(a))
                    }
                })
            } catch (c) {
                Tm(a), Um(a)
            }
        }
    };

    function Tm(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function Sm() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = Om, a);
        Sk(b)
    }

    function Qm(a) {
        return "function" === typeof z.__tcfapi || "function" === typeof a.m.__tcfapi || null != Km(a) ? !0 : !1
    }
    var Rm = function() {
        return !0 !== z.gtag_enable_tcf_support
    };

    function Um(a) {
        var b = {},
            c = (b.ad_storage = a.Sf["1"] ? "granted" : "denied", b);
        Tk(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: Wm()
        })
    }
    var Wm = function() {
            var a = Pm();
            return a.active ? a.tcString || "" : ""
        },
        Xm = function() {
            var a = Pm();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        Ym = function(a) {
            if (!Nm.hasOwnProperty(String(a))) return !0;
            var b = Pm();
            return b.active && b.Sf ? !!b.Sf[String(a)] : !0
        };
    var Zm = function(a) {
            var b = String(a[re.Sb] || "").replace(/_/g, "");
            0 === b.indexOf("cvt") && (b = "cvt");
            return b
        },
        $m = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
    var an = {
            sampleRate: "0.005000",
            Pj: "",
            Oj: Number("5"),
            Um: Number("")
        },
        bn = [];

    function cn(a) {
        bn.push(a)
    }
    var dn = !1,
        en;
    if (!(en = $m)) {
        var fn = Math.random(),
            gn = an.sampleRate;
        en = fn < Number(gn)
    }
    var hn = en,
        jn = "https://www.googletagmanager.com/a?id=" + L.C,
        kn = void 0,
        ln = {},
        mn = void 0,
        nn = new function() {
            var a = 5;
            0 < an.Oj && (a = an.Oj);
            this.h = 0;
            this.B = [];
            this.m = a
        },
        on = 1E3;

    function pn(a) {
        var b = kn;
        if (void 0 === b) return "";
        for (var c = [jn], d = 0; d < bn.length; d++) {
            var e = bn[d]({
                eventId: b,
                Xb: !!a,
                Ij: function() {
                    dn = !0
                }
            });
            "&" === e[0] && c.push(e)
        }
        c.push("&z=0");
        return c.join("")
    }

    function qn() {
        mn && (z.clearTimeout(mn), mn = void 0);
        if (void 0 !== kn && rn) {
            var a;
            (a = ln[kn]) || (a = nn.h < nn.m ? !1 : 1E3 > Va() - nn.B[nn.h % nn.m]);
            if (a || 0 >= on--) P(1), ln[kn] = !0;
            else {
                var b = nn.h++ % nn.m;
                nn.B[b] = Va();
                var c = pn(!0);
                tc(c);
                if (dn) {
                    var d = c.replace("/a?", "/td?");
                    tc(d)
                }
                rn = dn = !1
            }
        }
    }
    var rn = !1;

    function sn(a) {
        ln[a] || (a !== kn && (qn(), kn = a), rn = !0, mn || (mn = z.setTimeout(qn, 500)), 2022 <= pn().length && qn())
    }
    var tn = Ma();

    function un() {
        tn = Ma()
    }

    function vn() {
        return ["&v=3&t=t", "&pid=" + tn].join("")
    };
    var wn = void 0;

    function xn(a) {
        var b = "";
        return b
    };
    var yn = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };
    Wb();
    Yl() || Tb("iPod");
    Tb("iPad");
    !Tb("Android") || Xb() || Wb() || Vb() || Tb("Silk");
    Xb();
    !Tb("Safari") || Xb() || (Ub() ? 0 : Tb("Coast")) || Vb() || (Ub() ? 0 : Tb("Edge")) || (Ub() ? Sb("Microsoft Edge") : Tb("Edg/")) || (Ub() ? Sb("Opera") : Tb("OPR")) || Wb() || Tb("Silk") || Tb("Android") || Zl();
    var zn = {},
        An = null,
        Bn = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!An) {
                An = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], l = 0; 5 > l; l++) {
                    var n = g.concat(h[l].split(""));
                    zn[l] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === An[q] && (An[q] = p)
                    }
                }
            }
            for (var r = zn[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var x = b[v],
                    y = b[v + 1],
                    A = b[v + 2],
                    B = r[x >> 2],
                    D = r[(x & 3) << 4 | y >> 4],
                    E = r[(y & 15) << 2 | A >> 6],
                    J = r[A & 63];
                t[w++] = "" + B + D + E + J
            }
            var G = 0,
                O = u;
            switch (b.length - v) {
                case 2:
                    G = b[v + 1], O = r[(G & 15) << 2] || u;
                case 1:
                    var Q = b[v];
                    t[w] = "" + r[Q >> 2] + r[(Q & 3) << 4 | G >> 4] + O + u
            }
            return t.join("")
        };
    var Cn = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Dn(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function En() {
        var a = z.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function Fn() {
        var a, b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function Gn(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function Hn() {
        var a = z;
        if (!Gn(a)) return null;
        var b = Dn(a);
        if (b.uach_promise) return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(Cn).then(function(d) {
            null != b.uach || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    };
    var In, Jn = function() {
            if (Gn(z) && (In = Va(), !Fn())) {
                var a = Hn();
                a && (a.then(function() {
                    P(95);
                }), a.catch(function() {
                    P(96)
                }))
            }
        },
        Ln = function(a) {
            var b = Kn.ym,
                c = function(g, h) {
                    try {
                        a(g, h)
                    } catch (l) {}
                },
                d = En();
            if (d) c(d);
            else {
                var e = Fn();
                if (e) {
                    b =
                        Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                    var f = z.setTimeout(function() {
                        c.Ce || (c.Ce = !0, P(106), c(null, Error("Timeout")))
                    }, b);
                    e.then(function(g) {
                        c.Ce || (c.Ce = !0, P(104), z.clearTimeout(f), c(g))
                    }).catch(function(g) {
                        c.Ce || (c.Ce = !0, P(105), z.clearTimeout(f), c(null, g))
                    })
                } else c(null)
            }
        },
        Mn = function(a, b) {
            a && (b.m[R.g.Wd] = a.architecture, b.m[R.g.Xd] = a.bitness, a.fullVersionList && (b.m[R.g.Yd] = a.fullVersionList.map(function(c) {
                    return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
                }).join("|")),
                b.m[R.g.Zd] = a.mobile ? "1" : "0", b.m[R.g.ae] = a.model, b.m[R.g.be] = a.platform, b.m[R.g.ce] = a.platformVersion, b.m[R.g.de] = a.wow64 ? "1" : "0")
        };

    function Nn(a, b, c, d) {
        var e, f = Number(null != a.Eb ? a.Eb : void 0);
        0 !== f && (e = new Date((b || Va()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Gb: d
        }
    };
    var On;
    var Sn = function() {
            var a = Pn,
                b = Qn,
                c = Rn(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                uc(H, "mousedown", d);
                uc(H, "keyup", d);
                uc(H, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Tn = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Rn().decorators.push(f)
        },
        Un = function(a, b, c) {
            for (var d = Rn().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    h;
                if (h = !c || g.forms) a: {
                    var l = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (l && (p || n !== H.location.hostname))
                        for (var q = 0; q < l.length; q++)
                            if (l[q] instanceof RegExp) {
                                if (l[q].test(n)) {
                                    h = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(l[q]) || p && 0 <= l[q].indexOf(n)) {
                        h = !0;
                        break a
                    }
                    h = !1
                }
                if (h) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Za(e, g.callback())
                }
            }
            return e
        };

    function Rn() {
        var a = kc("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Vn = /(.*?)\*(.*?)\*(.*)/,
        Wn = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Xn = /^(?:www\.|m\.|amp\.)+/,
        Yn = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Zn(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var ao = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(ub(String(d))))
            }
        var e = b.join("*");
        return ["1", $n(e), e].join("*")
    };

    function $n(a, b) {
        var c = [ic.userAgent, (new Date).getTimezoneOffset(), ic.userLanguage || ic.language, Math.floor(Va() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = On)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        On = d;
        for (var l = 4294967295, n = 0; n < c.length; n++) l = l >>> 8 ^ On[(l ^ c.charCodeAt(n)) & 255];
        return ((l ^ -1) >>> 0).toString(36)
    }

    function bo() {
        return function(a) {
            var b = fj(z.location.href),
                c = b.search.replace("?", ""),
                d = aj(c, "_gl", !1, !0) || "";
            a.query = co(d) || {};
            var e = dj(b, "fragment").match(Zn("_gl"));
            a.fragment = co(e && e[3] || "") || {}
        }
    }

    function eo(a, b) {
        var c = Zn(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var fo = function(a, b) {
            b || (b = "_gl");
            var c = Yn.exec(a);
            if (!c) return "";
            var d = c[1],
                e = eo(b, (c[2] || "").slice(1)),
                f = eo(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        go = function(a) {
            var b = bo(),
                c = Rn();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Za(d, e.query), a && Za(d, e.fragment));
            return d
        },
        co = function(a) {
            try {
                var b = ho(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = vb(d[e + 1]);
                        c[f] = g
                    }
                    xb("TAGGING", 6);
                    return c
                }
            } catch (h) {
                xb("TAGGING",
                    8)
            }
        };

    function ho(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Vn.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var h = g[3],
                    l;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === $n(h, p)) {
                            l = !0;
                            break a
                        }
                    l = !1
                }
                if (l) return h;
                xb("TAGGING", 7)
            }
        }
    }

    function io(a, b, c, d) {
        function e(p) {
            p = eo(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Yn.exec(c);
        if (!f) return "";
        var g = f[1],
            h = f[2] || "",
            l = f[3] || "",
            n = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : h = "?" + e(h.substring(1));
        return "" + g + h + l
    }

    function jo(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Un(b, 1, c),
            e = Un(b, 2, c),
            f = Un(b, 3, c);
        if ($a(d)) {
            var g = ao(d);
            c ? ko("_gl", g, a) : lo("_gl", g, a, !1)
        }
        if (!c && $a(e)) {
            var h = ao(e);
            lo("_gl", h, a, !0)
        }
        for (var l in f)
            if (f.hasOwnProperty(l)) a: {
                var n = l,
                    p = f[l],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        lo(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        ko(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && io(n, p, q)
            }
    }

    function lo(a, b, c, d) {
        if (c.href) {
            var e = io(a, b, c.href, void 0 === d ? !1 : d);
            Ib.test(e) && (c.href = e)
        }
    }

    function ko(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var h = e[g];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var l = H.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l)
                }
            } else if ("post" === d) {
                var n = io(a, b, c.action);
                Ib.test(n) && (c.action = n)
            }
        }
    }

    function Pn(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || jo(e, e.hostname)
            }
        } catch (g) {}
    }

    function Qn(a) {
        try {
            if (a.action) {
                var b = dj(fj(a.action), "host");
                jo(a, b)
            }
        } catch (c) {}
    }
    var mo = function(a, b, c, d) {
            Sn();
            Tn(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        no = function(a, b) {
            Sn();
            Tn(a, [cj(z.location, "host", !0)], b, !0, !0)
        },
        oo = function() {
            var a = H.location.hostname,
                b = Wn.exec(H.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var h = a.replace(Xn, ""),
                l = e.replace(Xn, ""),
                n;
            if (!(n = h === l)) {
                var p = "." + l;
                n = h.substring(h.length - p.length,
                    h.length) === p
            }
            return n
        },
        po = function(a, b) {
            return !1 === a ? !1 : a || b || oo()
        };
    var qo = ["1"],
        ro = {},
        so = {},
        uo = function(a) {
            return ro[to(a)]
        },
        yo = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = to(a.prefix);
            if (!ro[c])
                if (vo(c, a.path, a.domain)) {
                    if (Bi(1)) {
                        var d = so[to(a.prefix)];
                        wo(a, d ? d.id : void 0, d ? d.Ah : void 0)
                    }
                } else {
                    if (Bi(2)) {
                        var e = hj("auiddc");
                        if (e) {
                            xb("TAGGING", 17);
                            ro[c] = e;
                            return
                        }
                    }
                    if (b) {
                        var f = to(a.prefix),
                            g = zl();
                        if (0 === xo(f, g, a)) {
                            var h = kc("google_tag_data", {});
                            h._gcl_au || (h._gcl_au = g)
                        }
                        vo(c, a.path, a.domain)
                    }
                }
        };

    function wo(a, b, c) {
        var d = to(a.prefix),
            e = ro[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var h = e;
                    b && (h = e + "." + b + "." + (c ? c : Math.floor(Va() / 1E3)));
                    xo(d, h, a, 1E3 * g)
                }
            }
        }
    }

    function xo(a, b, c, d) {
        var e = Dl(b, "1", c.domain, c.path),
            f = Nn(c, d);
        f.Gb = "ad_storage";
        return vl(a, e, f)
    }

    function vo(a, b, c) {
        var d = Cl(a, b, c, qo, "ad_storage");
        if (!d) return !1;
        zo(a, d);
        return !0
    }

    function zo(a, b) {
        var c = b.split(".");
        5 === c.length ? (ro[a] = c.slice(0, 2).join("."), so[a] = {
            id: c.slice(2, 4).join("."),
            Ah: Number(c[4]) || 0
        }) : 3 === c.length ? so[a] = {
            id: c.slice(0, 2).join("."),
            Ah: Number(c[2]) || 0
        } : ro[a] = b
    }

    function to(a) {
        return (a || "_gcl") + "_au"
    }

    function Ao(a) {
        Dk() ? Hk(function() {
            Ak("ad_storage") ? a() : Ik(a, "ad_storage")
        }, ["ad_storage"]) : a()
    }

    function Bo(a) {
        var b = go(!0),
            c = to(a.prefix);
        Ao(function() {
            var d = b[c];
            if (d) {
                zo(c, d);
                var e = 1E3 * Number(ro[c].split(".")[1]);
                if (e) {
                    xb("TAGGING", 16);
                    var f = Nn(a, e);
                    f.Gb = "ad_storage";
                    var g = Dl(d, "1", a.domain, a.path);
                    vl(c, g, f)
                }
            }
        })
    }

    function Co(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {},
                h = Cl(a, e.path, e.domain, qo, "ad_storage");
            h && (g[a] = h);
            return g
        };
        Ao(function() {
            mo(f, b, c, d)
        })
    };
    var Do = function(a) {
        for (var b = [], c = H.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Vh: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };

    function Eo(a, b) {
        var c = Do(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Vh] || (d[c[e].Vh] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    fa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Vh].push(g)
            }
        }
        return d
    };
    var Fo = /^\w+$/,
        Go = /^[\w-]+$/,
        Ho = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        Io = function() {
            return hk().h() && Dk() ? Ak("ad_storage") : !0
        },
        Jo = function(a, b) {
            Ck("ad_storage") ? Io() ? a() : Ik(a, "ad_storage") : b ? xb("TAGGING", 3) : Hk(function() {
                Jo(a, !0)
            }, ["ad_storage"])
        },
        Lo = function(a) {
            return Ko(a).map(function(b) {
                return b.fa
            })
        },
        Ko = function(a) {
            var b = [];
            if (!jl(z) || !H.cookie) return b;
            var c = ml(a, H.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Pe: d.Pe
                }, e++) {
                var f = Mo(c[e]);
                if (null != f) {
                    var g = f,
                        h = g.version;
                    d.Pe = g.fa;
                    var l = g.timestamp,
                        n = g.labels,
                        p = La(b, function(q) {
                            return function(r) {
                                return r.fa === q.Pe
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, l), p.labels = No(p.labels, n || [])) : b.push({
                        version: h,
                        fa: d.Pe,
                        timestamp: l,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return Oo(b)
        };

    function No(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function Po(a) {
        return a && "string" == typeof a && a.match(Fo) ? a : "_gcl"
    }
    var Ro = function() {
            var a = fj(z.location.href),
                b = dj(a, "query", !1, void 0, "gclid"),
                c = dj(a, "query", !1, void 0, "gclsrc"),
                d = dj(a, "query", !1, void 0, "wbraid"),
                e = dj(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || aj(f, "gclid", !1);
                c = c || aj(f, "gclsrc", !1);
                d = d || aj(f, "wbraid", !1)
            }
            return Qo(b, c, e, d)
        },
        Qo = function(a, b, c, d) {
            var e = {},
                f = function(g, h) {
                    e[h] || (e[h] = []);
                    e[h].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Go.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(Go)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        To = function(a) {
            var b = Ro();
            Jo(function() {
                So(b, !1, a)
            })
        };

    function So(a, b, c, d, e) {
        function f(w, x) {
            var y = Uo(w, g);
            y && (vl(y, x, h), l = !0)
        }
        c = c || {};
        e = e || [];
        var g = Po(c.prefix);
        d = d || Va();
        var h = Nn(c, d, !0);
        h.Gb = "ad_storage";
        var l = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var x = ["GCL", n, w];
                0 < e.length && x.push(e.join("."));
                return x.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!l && a.gb) {
            var q = a.gb[0],
                r = Uo("gb", g),
                t = !1;
            if (!b)
                for (var u = Ko(r), v = 0; v < u.length; v++) u[v].fa === q && u[v].labels &&
                    0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }
    var Wo = function(a, b) {
            var c = go(!0);
            Jo(function() {
                for (var d = Po(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Ho[f]) {
                        var g = Uo(f, d),
                            h = c[g];
                        if (h) {
                            var l = Math.min(Vo(h), Va()),
                                n;
                            b: {
                                var p = l;
                                if (jl(z))
                                    for (var q = ml(g, H.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (Vo(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var t = Nn(b, l, !0);
                                t.Gb = "ad_storage";
                                vl(g, h, t)
                            }
                        }
                    }
                }
                So(Qo(c.gclid, c.gclsrc), !1, b)
            })
        },
        Uo = function(a, b) {
            var c = Ho[a];
            if (void 0 !== c) return b + c
        },
        Vo = function(a) {
            return 0 !== Xo(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function Mo(a) {
        var b = Xo(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            fa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function Xo(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Go.test(a[2]) ? [] : a
    }
    var Yo = function(a, b, c, d, e) {
            if (Ka(b) && jl(z)) {
                var f = Po(e),
                    g = function() {
                        for (var h = {}, l = 0; l < a.length; ++l) {
                            var n = Uo(a[l], f);
                            if (n) {
                                var p = ml(n, H.cookie, void 0, "ad_storage");
                                p.length && (h[n] = p.sort()[p.length - 1])
                            }
                        }
                        return h
                    };
                Jo(function() {
                    mo(g, b, c, d)
                })
            }
        },
        Oo = function(a) {
            return a.filter(function(b) {
                return Go.test(b.fa)
            })
        },
        Zo = function(a, b) {
            if (jl(z)) {
                for (var c = Po(b.prefix), d = {}, e = 0; e < a.length; e++) Ho[a[e]] && (d[a[e]] = Ho[a[e]]);
                Jo(function() {
                    m(d, function(f, g) {
                        var h = ml(c + g, H.cookie, void 0, "ad_storage");
                        h.sort(function(t,
                            u) {
                            return Vo(u) - Vo(t)
                        });
                        if (h.length) {
                            var l = h[0],
                                n = Vo(l),
                                p = 0 !== Xo(l.split(".")).length ? l.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== Xo(l.split(".")).length ? l.split(".")[2] : void 0;
                            q[f] = [r];
                            So(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function $o(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var ap = function(a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }
            if (Dk()) {
                var c = Ro();
                if ($o(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    no(function() {
                        return d
                    }, 3);
                    no(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        bp = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!Io()) return e;
            var f = Ko(a);
            if (!f.length) return e;
            for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var h = f[0],
                    l = f[0].timestamp,
                    n = [h.version, Math.round(l /
                        1E3), h.fa].concat(h.labels || [], [b]).join("."),
                    p = Nn(c, l, !0);
                p.Gb = "ad_storage";
                vl(a, n, p)
            }
            return e
        };

    function cp(a, b) {
        var c = Po(b),
            d = Uo(a, c);
        if (!d) return 0;
        for (var e = Ko(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function dp(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var ep = function(a) {
        var b = Math.max(cp("aw", a), dp(Io() ? Eo() : {}));
        return Math.max(cp("gb", a), dp(Io() ? Eo("_gac_gb", !0) : {})) > b
    };
    var fp = function(a, b) {
            var c = a && !Ak(R.g.F);
            return b && c ? "0" : b
        },
        ip = function(a) {
            function b(u) {
                var v;
                Mh.reported_gclid || (Mh.reported_gclid = {});
                v = Mh.reported_gclid;
                var w, x = g;
                w = !g || Dk() && !Ak(R.g.F) ? l + (u ? "gcu" : "gcs") : l + "." + (f.prefix || "_gcl") + (u ? "gcu" : "gcs");
                if (!v[w]) {
                    v[w] = !0;
                    var y = [],
                        A = {},
                        B = function(aa, U) {
                            U && (y.push(aa + "=" + encodeURIComponent(U)), A[aa] = !0)
                        },
                        D = "https://www.google.com";
                    if (Dk()) {
                        var E = Ak(R.g.F);
                        B("gcs", Wk());
                        u && B("gcu", "1");
                        (V(106) || Ek()) && B("gcd", $k());
                        B("rnd", El());
                        if ((!l || n && "aw.ds" !== n) && Ak(R.g.F)) {
                            var J = Lo("_gcl_aw");
                            B("gclaw", J.join("."))
                        }
                        B("url", String(z.location).split(/[?#]/)[0]);
                        B("dclid", fp(d, p));
                        E || (D = "https://pagead2.googlesyndication.com")
                    }
                    V(109) && (bl() && B("dma_cps", al()), Hi() && B("dma", "1"));
                    B("gdpr_consent", Wm());
                    B("gdpr", Xm());
                    "1" === go(!1)._up && B("gtm_up", "1");
                    B("gclid", fp(d, l));
                    B("gclsrc", n);
                    if (!(A.gclid || A.dclid || A.gclaw) && (B("gbraid", fp(d, q)), !A.gbraid && Dk() && Ak(R.g.F))) {
                        var G =
                            Lo("_gcl_gb");
                        0 < G.length && B("gclgb", G.join("."))
                    }
                    B("gtm", Ul(!e));
                    g && Ak(R.g.F) && (yo(f || {}), x && B("auid", uo(f.prefix) || ""));
                    hp || a.sj && B("did", a.sj);
                    a.Of && B("gdid", a.Of);
                    a.Kf && B("edid", a.Kf);
                    var O = V(64) ? En() : null;
                    if (O) {
                        var Q = function(aa, U) {
                            y.push(aa + "=" + encodeURIComponent(U));
                            A[aa] = !0
                        };
                        Q("uaa", O.architecture);
                        Q("uab", O.bitness);
                        O.fullVersionList && Q("uafvl", O.fullVersionList.map(function(aa) {
                            return encodeURIComponent(aa.brand || "") + ";" + encodeURIComponent(aa.version || "")
                        }).join("|"));
                        Q("uam", O.model);
                        Q("uap",
                            O.platform);
                        Q("uapv", O.platformVersion);
                        Q("uaw", O.wow64 ? "1" : "0")
                    }
                    var da = D + "/pagead/landing?" + y.join("&");
                    Ac(da)
                }
            }
            var c = !!a.If,
                d = !!a.Ie,
                e = a.Th,
                f = void 0 === a.yc ? {} : a.yc,
                g = void 0 === a.Be ? !0 : a.Be,
                h = Ro(),
                l = h.gclid || "",
                n = h.gclsrc,
                p = h.dclid || "",
                q = h.gbraid || "",
                r = !c && ((!l || n && "aw.ds" !== n ? !1 : !0) || q),
                t = Dk();
            if (r || t) t ? el(function() {
                b();
                Ak(R.g.F) || dl(function(u) {
                    return b(!0, u.consentEventId, u.consentPriorityId)
                }, R.g.F)
            }, [R.g.F]) : b()
        },
        gp = function(a) {
            var b = String(z.location).split(/[?#]/)[0],
                c = Lh.Uj || z._CONSENT_MODE_SALT;
            return a ? c ? String(fl(b + a + c)) : "0" : ""
        },
        hp = !1;
    var jp = /[A-Z]+/,
        kp = /\s/,
        lp = function(a, b) {
            if (k(a)) {
                a = Ta(a);
                var c = a.indexOf("-");
                if (!(0 > c)) {
                    var d = a.substring(0, c);
                    if (jp.test(d)) {
                        var e = a.substring(c + 1),
                            f;
                        if (b && V(120)) {
                            var g = function(n) {
                                var p = n.indexOf("/");
                                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
                            };
                            f = g(e);
                            if ("DC" === d && 2 === f.length) {
                                var h = g(f[1]);
                                2 === h.length && (f[1] = h[0], f.push(h[1]))
                            }
                        } else {
                            f = e.split("/");
                            for (var l = 0; l < f.length; l++)
                                if (!f[l] || kp.test(f[l]) && ("AW" !== d || 1 !== l)) return
                        }
                        return {
                            id: a,
                            prefix: d,
                            ba: d + "-" + f[0],
                            J: f
                        }
                    }
                }
            }
        },
        np = function(a,
            b) {
            for (var c = {}, d = 0; d < a.length; ++d) {
                var e = lp(a[d], b);
                e && (c[e.id] = e)
            }
            mp(c);
            var f = [];
            m(c, function(g, h) {
                f.push(h)
            });
            return f
        };

    function mp(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.J[1] && b.push(d.ba)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var op = function(a, b, c, d) {
        var e = rc(),
            f;
        if (1 === e) a: {
            var g = $h;g = g.toLowerCase();
            for (var h = "https://" + g, l = "http://" + g, n = 1, p = H.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (0 === r.indexOf(l)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === r.indexOf(h) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };
    var qp = function(a, b, c) {
            if (z[a.functionName]) return b.Hh && I(b.Hh), z[a.functionName];
            var d = pp();
            z[a.functionName] = d;
            if (a.Gf)
                for (var e = 0; e < a.Gf.length; e++) z[a.Gf[e]] = z[a.Gf[e]] || pp();
            a.Pf && void 0 === z[a.Pf] && (z[a.Pf] = c);
            qc(op("https://", "http://", a.Rh), b.Hh, b.Nl);
            return d
        },
        pp = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        rp = {
            functionName: "_googWcmImpl",
            Pf: "_googWcmAk",
            Rh: "www.gstatic.com/wcm/loader.js"
        },
        sp = {
            functionName: "_gaPhoneImpl",
            Pf: "ga_wpid",
            Rh: "www.gstatic.com/gaphone/loader.js"
        },
        tp = {
            Rj: "",
            Fk: "5"
        },
        up = {
            functionName: "_googCallTrackingImpl",
            Gf: [sp.functionName, rp.functionName],
            Rh: "www.gstatic.com/call-tracking/call-tracking_" + (tp.Rj || tp.Fk) + ".js"
        },
        vp = {},
        wp = function(a, b, c, d) {
            P(22);
            if (c) {
                d = d || {};
                var e = qp(rp, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.Fb && (f.autoreplace = c);
                e(2, d.Fb, f, c, 0, Ua(), d.options)
            }
        },
        xp = function(a, b, c, d) {
            P(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Ua()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    vp[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.J.length ? (e.adData = {
                            ak: g.J[0],
                            cl: g.J[1]
                        }, vp[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.ba
                        }, vp[g.id] = !0))
                }(e.gaData || e.adData) && qp(up, d)(d.Fb, e, d.options)
            }
        },
        yp = function() {
            var a = !1;
            return a
        },
        zp = function(a, b) {
            if (a)
                if (Fl()) {} else {
                    if (k(a)) {
                        var c =
                            lp(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = W(b, R.g.Li);
                    if (f && Ka(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var h = lp(f[g]);
                            h && (d.push(h), (a.id === h.id || a.id === a.ba && a.ba === h.ba) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var l = W(b, R.g.Hg),
                            n;
                        if (l) {
                            Ka(l) ? n = l : n = [l];
                            var p = W(b, R.g.Fg),
                                q = W(b, R.g.Gg),
                                r = W(b, R.g.Ig),
                                t = W(b, R.g.Ki),
                                u = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var w = 0; w < n.length; w++)
                                if (w < v)
                                    if (d) xp(d, n[w], t, {
                                        Fb: u,
                                        options: r
                                    });
                                    else if ("AW" === a.prefix && a.J[1]) yp() ? xp([a], n[w], t || "US", {
                                Fb: u,
                                options: r
                            }) : wp(a.J[0], a.J[1], n[w], {
                                Fb: u,
                                options: r
                            });
                            else if ("UA" === a.prefix)
                                if (yp()) xp([a], n[w], t || "US", {
                                    Fb: u
                                });
                                else {
                                    var x = a.ba,
                                        y = n[w],
                                        A = {
                                            Fb: u
                                        };
                                    P(23);
                                    if (y) {
                                        A = A || {};
                                        var B = qp(sp, A, x),
                                            D = {};
                                        void 0 !== A.Fb ? D.receiver = A.Fb : D.replace = y;
                                        D.ga_wpid = x;
                                        D.destination = y;
                                        B(2, Ua(), D)
                                    }
                                }
                        }
                    }
                }
        };
    var Ap = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.h = c;
        this.m = {};
        this.metadata = K(c.eventMetadata || {});
        this.isAborted = !1
    };
    Ap.prototype.copyToHitData = function(a, b) {
        var c = W(this.h, a);
        void 0 !== c ? this.m[a] = c : void 0 !== b && (this.m[a] = b)
    };
    var Bp = function(a, b, c) {
        var d = Oi(a.target.ba);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };

    function Cp(a) {
        return {
            getDestinationId: function() {
                return a.target.ba
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.m[b]
            },
            setHitData: function(b, c) {
                a.m[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.m[b] && (a.m[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return W(a.h, b)
            },
            Nf: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.m)
            }
        }
    };
    var Ep = function(a) {
            var b = Dp[a.target.ba];
            if (!a.isAborted && b)
                for (var c = Cp(a), d = 0; d < b.length; ++d) {
                    try {
                        b[d](c)
                    } catch (e) {
                        a.isAborted = !0
                    }
                    if (a.isAborted) break
                }
        },
        Fp = function(a, b) {
            var c = Dp[a];
            c || (c = Dp[a] = []);
            c.push(b)
        },
        Dp = {};
    var Ip = function(a) {
            a = a || {};
            var b;
            if (!Dk() || Ak(Gp)) {
                (b = Hp(a)) || (b = zl());
                var c = a,
                    d = to(c.prefix);
                wo(c, b);
                delete ro[d];
                delete so[d];
                vo(d, c.path, c.domain);
                return Hp(a)
            }
        },
        Hp = function(a) {
            if (!Dk() || Ak(Gp)) {
                a = a || {};
                yo(a, !1);
                var b = so[to(Po(a.prefix))];
                if (b && !(18E5 < Va() - 1E3 * b.Ah)) {
                    var c = b.id,
                        d = c.split(".");
                    if (2 === d.length && !(864E5 < Va() - 1E3 * (Number(d[1]) || 0))) return c
                }
            }
        },
        Gp = R.g.F;
    var Jp = function(a, b) {
            var c = Mh.joined_auid = Mh.joined_auid || {},
                d = (a || "_gcl") + "." + b;
            if (c[d]) return !0;
            c[d] = !0;
            return !1
        },
        Kp = function() {
            var a = fj(z.location.href).search.replace("?", "");
            return "1" === aj(a, "gad", !1, !0)
        },
        Lp = function(a) {
            var b = [];
            m(a, function(c, d) {
                d = Oo(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].fa);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        Np = function(a, b, c) {
            if ("aw" === a || "dc" === a || "gb" === a) {
                var d = hj("gcl" + a);
                if (d) return d.split(".")
            }
            var e = Po(b);
            if ("_gcl" == e) {
                c = void 0 === c ? !0 :
                    c;
                var f = !Ak(Mp) && c,
                    g;
                g = Ro()[a] || [];
                if (0 < g.length) return f ? ["0"] : g
            }
            var h = Uo(a, e);
            return h ? Lo(h) : []
        },
        Op = function(a, b) {
            Ck(Mp) ? Ak(Mp) ? a() : Ik(a, Mp) : b ? P(42) : el(function() {
                Op(a, !0)
            }, [Mp])
        },
        Mp = R.g.F,
        Pp = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        Qp = /^www.googleadservices.com$/,
        Rp = function(a, b) {
            return Np("aw", a, b)
        },
        Sp = function(a, b) {
            return Np("dc", a, b)
        },
        Tp = function(a) {
            var b = hj("gac");
            return b ? !Ak(Mp) && a ? "0" : decodeURIComponent(b) : Lp(Io() ? Eo() : {})
        },
        Up = function(a) {
            var b = hj("gacgb");
            return b ? !Ak(Mp) && a ? "0" : decodeURIComponent(b) :
                Lp(Io() ? Eo("_gac_gb", !0) : {})
        },
        Vp = function(a) {
            var b = Ro(),
                c = [],
                d = b.gclid,
                e = b.dclid,
                f = b.gclsrc || "aw",
                g = V(93) && Kp();
            !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({
                fa: d,
                we: f
            });
            e && c.push({
                fa: e,
                we: "ds"
            });
            0 === c.length && b.gbraid && c.push({
                fa: b.gbraid,
                we: "gb"
            });
            V(77) && 0 === c.length && "aw.ds" === f && c.push({
                fa: "",
                we: "aw.ds"
            });
            Op(function() {
                yo(a);
                var h = uo(a.prefix);
                if (h) {
                    var l = ["auid=" + h];
                    if (V(15)) {
                        var n = H.referrer ? dj(fj(H.referrer), "host") : "";
                        0 === c.length && (V(88) ? Pp.test(n) || Qp.test(n) : Pp.test(n)) && c.push({
                            fa: "",
                            we: ""
                        });
                        if (0 === c.length && !g) return;
                        n && l.push("ref=" + encodeURIComponent(n));
                        var p = 1 === jm() ? z.top.location.href : z.location.href;
                        p = p.replace(/[\?#].*$/, "");
                        l.push("url=" + encodeURIComponent(p));
                        l.push("tft=" + Va());
                        var q = Dc();
                        void 0 !== q && l.push("tfd=" + Math.round(q));
                        if (V(76)) {
                            var r = jm();
                            l.push("frm=" + r)
                        }
                        g && l.push("gad=1")
                    }
                    if (0 < c.length)
                        for (var t = 0; t < c.length; t++) {
                            var u = c[t],
                                v = u.fa,
                                w = u.we;
                            if (!Jp(a.prefix, w + "." + v)) {
                                var x = "https://adservice.google.com/pagead/regclk?" + l.join("&");
                                "" !== v ? x = "gb" === w ? x + "&wbraid=" + v : x + "&gclid=" + v + "&gclsrc=" +
                                    w : "aw.ds" === w && (x += "&gclsrc=aw.ds");
                                Ac(x)
                            }
                        } else if (g && !Jp(a.prefix, "gad")) {
                            var y = "https://adservice.google.com/pagead/regclk?" + l.join("&");
                            Ac(y)
                        }
                }
            })
        },
        Wp = function(a) {
            return hj("gclaw") || hj("gac") || 0 < (Ro().aw || []).length ? !1 : 0 < (Ro().gb || []).length ? !0 : ep(a)
        };
    var Xp = function(a, b, c, d, e, f, g, h, l, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.K = d;
            this.m = e;
            this.D = f;
            this.R = g;
            this.B = h;
            this.eventMetadata = l;
            this.P = n;
            this.W = p;
            this.isGtmEvent = q
        },
        W = function(a, b, c) {
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.K[b]) return a.K[b];
            if (void 0 !== a.m[b]) return a.m[b];
            hn && Yp(a, a.D[b], a.R[b]) && (P(71), P(79));
            return void 0 !== a.D[b] ? a.D[b] : void 0 !== a.B[b] ? a.B[b] : c
        },
        Zp = function(a) {
            function b(g) {
                for (var h = Object.keys(g), l = 0; l < h.length; ++l) c[h[l]] = 1
            }
            var c = {};
            b(a.h);
            b(a.K);
            b(a.m);
            b(a.D);
            if (hn)
                for (var d = Object.keys(a.R), e = 0; e < d.length; e++) {
                    var f = d[e];
                    if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                        P(71);
                        P(80);
                        break
                    }
                }
            return Object.keys(c)
        },
        $p = function(a, b, c) {
            function d(l) {
                Vc(l) && m(l, function(n, p) {
                    f = !0;
                    e[n] = p
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.B[b]), d(a.D[b]), d(a.m[b]), d(a.K[b]));
            c && 2 !== c || d(a.h[b]);
            if (hn) {
                var g = f,
                    h = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.B[b]), d(a.R[b]), d(a.m[b]), d(a.K[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== g || Yp(a, e, h)) P(71), P(81);
                f = g;
                e = h
            }
            return f ?
                e : void 0
        },
        aq = function(a) {
            var b = [R.g.Qc, R.g.Mc, R.g.Nc, R.g.Oc, R.g.Pc, R.g.Rc, R.g.Sc],
                c = {},
                d = !1,
                e = function(h) {
                    for (var l = 0; l < b.length; l++) void 0 !== h[b[l]] && (c[b[l]] = h[b[l]], d = !0);
                    return d
                };
            if (e(a.h) || e(a.K) || e(a.m)) return c;
            e(a.D);
            if (hn) {
                var f = c,
                    g = d;
                c = {};
                d = !1;
                e(a.R);
                Yp(a, c, f) && (P(71), P(82));
                c = f;
                d = g
            }
            if (d) return c;
            e(a.B);
            return c
        },
        Yp = function(a, b, c) {
            if (!hn) return !1;
            try {
                if (b === c) return !1;
                var d = Tc(b);
                if (d !== Tc(c) || !(Vc(b) && Vc(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e =
                            0; e < b.length; e++)
                        if (Yp(a, b[e], c[e])) return !0
                } else {
                    for (var f in c)
                        if (!b.hasOwnProperty(f)) return !0;
                    for (var g in b)
                        if (!c.hasOwnProperty(g) || Yp(a, b[g], c[g])) return !0
                }
            } catch (h) {
                P(72)
            }
            return !1
        },
        bq = function(a, b) {
            this.Tg = a;
            this.uk = b;
            this.D = {};
            this.he = {};
            this.h = {};
            this.K = {};
            this.m = {};
            this.fe = {};
            this.B = {};
            this.xd = function() {};
            this.sb = function() {};
            this.R = !1
        },
        cq = function(a, b) {
            a.D = b;
            return a
        },
        dq = function(a, b) {
            a.he = b;
            return a
        },
        eq = function(a, b) {
            a.h = b;
            return a
        },
        fq = function(a, b) {
            a.K = b;
            return a
        },
        gq = function(a, b) {
            a.m =
                b;
            return a
        },
        hq = function(a, b) {
            a.fe = b;
            return a
        },
        iq = function(a, b) {
            a.B = b || {};
            return a
        },
        jq = function(a, b) {
            a.xd = b;
            return a
        },
        kq = function(a, b) {
            a.sb = b;
            return a
        },
        lq = function(a, b) {
            a.R = b;
            return a
        },
        mq = function(a) {
            return new Xp(a.Tg, a.uk, a.D, a.he, a.h, a.K, a.m, a.fe, a.B, a.xd, a.sb, a.R)
        };
    var oq = function(a, b) {
            var c = a.Ch,
                d = a.Wh;
            a.hh && (po(c[R.g.qc], !!c[R.g.T]) && (Wo(nq, b), V(73) && Bo(b)), To(b), Zo(nq, b), Vp(b));
            c[R.g.T] && (Yo(nq, c[R.g.T], c[R.g.Ob], !!c[R.g.Ab], b.prefix), V(73) && (Co(to(b.prefix), c[R.g.T], c[R.g.Ob], !!c[R.g.Ab], b), Co("FPAU", c[R.g.T], c[R.g.Ob], !!c[R.g.Ab], b)));
            d && ap(nq)
        },
        pq = function(a, b, c, d) {
            var e = a.Xh,
                f = a.callback,
                g = a.Fh;
            if ("function" === typeof f)
                if (e === R.g.ub && void 0 === g) {
                    var h = d(b.prefix, c);
                    0 === h.length ? f(void 0) : 1 === h.length ? f(h[0]) : f(h)
                } else e === R.g.hc ? (P(65), yo(b, !1), f(uo(b.prefix))) :
                    f(g)
        },
        nq = ["aw", "dc", "gb"];

    function qq(a) {
        var b = W(a.h, R.g.zb),
            c = W(a.h, R.g.oc);
        V(107) && b && !c ? (a.eventName !== R.g.la && a.eventName !== R.g.yd && P(131), a.isAborted = !0) : !b && c && (P(132), a.isAborted = !0)
    };
    var rq = function() {
        var a = ic && ic.userAgent || "";
        if (0 > a.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)) return !1;
        var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
        if ("" === b) return !1;
        for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
            if (void 0 === c[e]) return !0;
            if (d[e] != c[e]) return Number(d[e]) > Number(c[e])
        }
        return d.length >= c.length
    };

    function sq() {
        return "attribution-reporting"
    }

    function tq(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var uq = !1;

    function vq() {
        if (tq("join-ad-interest-group") && Ga(ic.joinAdInterestGroup)) return !0;
        uq || (hm('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), uq = !0);
        return tq("join-ad-interest-group") && Ga(ic.joinAdInterestGroup)
    }

    function wq(a, b) {
        var c = void 0;
        try {
            c = H.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Va() - d) {
                xb("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= H.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                xb("TAGGING", 10);
                return
            }
        } catch (e) {}
        sc(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Va()
        }, c)
    }

    function xq() {
        return "https://td.doubleclick.net"
    };
    var yq = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        zq = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        Aq = /^\d+\.fls\.doubleclick\.net$/,
        Bq = /;gac=([^;?]+)/,
        Cq = /;gacgb=([^;?]+)/,
        Dq = /;gclaw=([^;?]+)/,
        Eq = /;gclgb=([^;?]+)/;

    function Fq(a, b) {
        if (Aq.test(H.location.host)) {
            var c = H.location.href.match(b);
            return c && 2 == c.length && c[1].match(yq) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].fa);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var Gq = function(a, b, c) {
        var d = Io() ? Eo("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g;
        for (g in d) {
            var h = bp("_gac_gb_" + g, a, b, c);
            f = f || 0 !== h.length && h.some(function(l) {
                return 1 === l
            });
            e.push(g + ":" + h.join(","))
        }
        return {
            Yk: f ? e.join(";") : "",
            Xk: Fq(d, Cq)
        }
    };

    function Hq(a, b, c) {
        if (Aq.test(H.location.host)) {
            var d = H.location.href.match(c);
            if (d && 2 == d.length && d[1].match(zq)) return [{
                fa: d[1]
            }]
        } else return Ko((a || "_gcl") + b);
        return []
    }
    var Iq = function(a) {
            return Hq(a, "_aw", Dq).map(function(b) {
                return b.fa
            }).join(".")
        },
        Jq = function(a) {
            return Hq(a, "_gb", Eq).map(function(b) {
                return b.fa
            }).join(".")
        },
        Kq = function(a, b) {
            var c = bp((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var Lq = function() {
        if (Ga(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var Mq = function(a) {
            if (null != a) {
                var b = String(a).substring(0, 512),
                    c = b.indexOf("#");
                return -1 == c ? b : b.substring(0, c)
            }
            return ""
        },
        Nq = function() {
            var a = H.title;
            if (void 0 == a || "" == a) return "";
            var b = function(d) {
                try {
                    return decodeURIComponent(d), !0
                } catch (e) {
                    return !1
                }
            };
            a = encodeURIComponent(a);
            for (var c = 256; !b(a.substr(0, c));) c--;
            return decodeURIComponent(a.substr(0, c))
        },
        Oq = function(a) {
            a.metadata.speculative_in_message || (a.metadata.speculative = !1)
        },
        Pq = function(a, b) {
            Ka(b) || (b = [b]);
            return 0 <= b.indexOf(a.metadata.hit_type)
        },
        Qq = function(a) {
            var b = a.target.J[0];
            if (b) {
                a.m[R.g.Tc] = b;
                var c = a.target.J[1];
                c && (a.m[R.g.fb] = c)
            } else a.isAborted = !0
        },
        Rq = function(a) {
            if (Pq(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])) {
                var b = a.m[R.g.fb],
                    c = !0 === W(a.h, R.g.Ze);
                c && (a.metadata.remarketing_only = !0);
                switch (a.metadata.hit_type) {
                    case "conversion":
                        !c && b && Oq(a);
                        ck() && (a.metadata.is_gcp_conversion = !0);
                        break;
                    case "user_data_lead":
                    case "user_data_web":
                        !c && b && (a.isAborted = !0);
                        break;
                    case "remarketing":
                        !c && b || Oq(a)
                }
                a.m[R.g.Vi] = a.metadata.is_gcp_conversion ?
                    "www.google.com" : "www.googleadservices.com"
            }
        },
        Sq = function(a) {
            Pq(a, ["conversion", "remarketing"])
        },
        Tq = function(a) {
            if (Pq(a, ["conversion", "remarketing"])) {
                var b = jm();
                a.m[R.g.Bg] = b;
                var c = W(a.h, R.g.ia);
                c || (c = 1 === b ? z.top.location.href : z.location.href);
                a.m[R.g.ia] = Mq(c);
                a.copyToHitData(R.g.Fa, H.referrer);
                a.m[R.g.Bb] = Nq();
                a.copyToHitData(R.g.ya);
                var d = Pi();
                a.m[R.g.Cb] = d.width + "x" + d.height;
                if (V(86)) {
                    for (var e, f = z, g = f; f && f != f.parent;) f = f.parent, fm(f) && (g = f);
                    e = g;
                    var h;
                    var l = e.location.href;
                    if (e === e.top) h = {
                        url: l,
                        zl: !0
                    };
                    else {
                        var n = !1,
                            p = e.document;
                        p && p.referrer && (l = p.referrer, e.parent === e.top && (n = !0));
                        var q = e.location.ancestorOrigins;
                        if (q) {
                            var r = q[q.length - 1];
                            r && -1 === l.indexOf(r) && (n = !1, l = r)
                        }
                        h = {
                            url: l,
                            zl: n
                        }
                    }
                    var t = h;
                    t.url && c !== t.url && (a.m[R.g.tf] = Mq(t.url))
                }
            }
        },
        Uq = function(a) {
            Pq(a, ["conversion", "remarketing"]) && (a.copyToHitData(R.g.na), a.copyToHitData(R.g.da), a.copyToHitData(R.g.sa), "remarketing" === a.metadata.hit_type && a.copyToHitData(R.g.Aa))
        },
        Vq = function(a) {
            if (V(13))
                if (!Gn(z)) P(87);
                else if (void 0 !== In) {
                P(85);
                var b = En();
                b ? Mn(b, a) : P(86)
            }
        },
        Yq = function(a) {
            Pq(a, ["conversion"]) && (!0 === z._gtmpcm || rq() ? a.m[R.g.Mb] = "2" : V(7) && (Wq || tq(sq()) || (hm('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Wq = !0), Xq || (Xq = !0, hm('A+xK4jmZTgh1KBVry/UZKUE3h6Dr9HPPioFS4KNCzify+KEoOii7z/goKS2zgbAOwhpZ1GZllpdz7XviivJM9gcAAACFeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiQXR0cmlidXRpb25SZXBvcnRpbmdDcm9zc0FwcFdlYiIsImV4cGlyeSI6MTcwNzI2Mzk5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d')), tq(sq()) && (a.m[R.g.Mb] = "1")))
        },
        Zq = function(a) {
            Pq(a, ["conversion", "remarketing"]) && V(9) && Ak(R.g.F) && !1 !== W(a.h, R.g.Da) && !1 !== W(a.h, R.g.X) && !1 !== W(a.h, R.g.Lb) && !1 !== W(a.h, R.g.Qa) && vq() && (a.m[R.g.rg] = "1", a.metadata.send_fledge_experiment = !0)
        },
        $q = function(a) {
            var b = function(d) {
                return W(a.h, d)
            };
            a.metadata.conversion_linker_enabled = !1 !== b(R.g.xa);
            var c = {
                prefix: b(R.g.Ja) || b(R.g.Ka),
                domain: b(R.g.Na),
                Eb: b(R.g.Ea),
                flags: b(R.g.Oa)
            };
            a.metadata.cookie_options = c;
            a.metadata.redact_ads_data = null != b(R.g.ma) && !1 !== b(R.g.ma);
            a.metadata.allow_ad_personalization = !1 !== b(R.g.X)
        },
        ar = function(a) {
            if (Bp(a, "ccd_add_1p_data", !1) && Ak(R.g.F)) {
                var b = Xj(a.h);
                if (Zj(b)) {
                    var c = W(a.h, R.g.oa);
                    null === c ? a.metadata.user_data_from_code = null : (b.enable_code && Vc(c) && (a.metadata.user_data_from_code =
                        c), Vc(b.selectors) && (a.metadata.user_data_from_manual = Wj(b.selectors)))
                }
            }
        },
        br = function(a) {
            var b = !a.metadata.send_user_data_hit && Pq(a, ["conversion", "user_data_web"]),
                c = !Bp(a, "ccd_add_1p_data", !1) && Pq(a, "user_data_lead");
            if ((b || c) && Ak(R.g.F)) {
                var d = "conversion" === a.metadata.hit_type,
                    e = a.h,
                    f = void 0,
                    g = W(e, R.g.oa);
                if (d) {
                    var h = (W(e, R.g.Yc) || {})[a.m[R.g.fb]];
                    if (!0 === W(e, R.g.Ad) || h) {
                        var l;
                        var n;
                        if (h) b: {
                            switch (h.enhanced_conversions_mode) {
                                case "manual":
                                    if (g && Vc(g)) {
                                        n = g;
                                        break b
                                    }
                                    var p = h.enhanced_conversions_manual_var;
                                    n = void 0 !== p ? p : z.enhanced_conversion_data;
                                    break b;
                                case "automatic":
                                    n = Wj(h[R.g.pg]);
                                    break b
                            }
                            n = void 0
                        }
                        else n = z.enhanced_conversion_data;
                        var q = n,
                            r = (h || {}).enhanced_conversions_mode,
                            t;
                        if (q) {
                            if ("manual" === r) switch (q._tag_mode) {
                                case "CODE":
                                    t = "c";
                                    break;
                                case "AUTO":
                                    t = "a";
                                    break;
                                case "MANUAL":
                                    t = "m";
                                    break;
                                default:
                                    t = "c"
                            } else t = "automatic" === r ? bk(h) ? "a" : "m" : "c";
                            l = {
                                U: q,
                                Nj: t
                            }
                        } else l = {
                            U: q,
                            Nj: void 0
                        };
                        var u = l,
                            v = u.Nj;
                        f = u.U;
                        a.m[R.g.vf] = v
                    }
                } else {
                    if (V(115) || a.metadata.is_config_command || !a.h.isGtmEvent && !Yj(a.h)) return;
                    Zj(Xj(a.h)) && null !== g && (Vc(g) ? f = g : f = ak(Xj(a.h)), f && Oq(a))
                }
                a.metadata.user_data = f
            }
        },
        cr = function(a) {
            Pq(a, ["conversion", "remarketing"]) && (a.h.isGtmEvent ? "conversion" !== a.metadata.hit_type && a.eventName && (a.m[R.g.qg] = a.eventName) : a.m[R.g.qg] = a.eventName, m(a.h.h, function(b, c) {
                Kh[b.split(".")[0]] || (a.m[b] = c)
            }))
        },
        dr = function(a) {
            if (a.eventName === R.g.la && (a.metadata.is_config_command = !0, Pq(a, "conversion") && (a.metadata.speculative = !0), !Pq(a, "remarketing") || !1 !== W(a.h, R.g.Lb) && !1 !== W(a.h, R.g.Qa) || (a.metadata.speculative = !0), Pq(a, "landing_page"))) {
                var b = W(a.h, R.g.hb),
                    c = W(a.h, R.g.za) || {},
                    d = W(a.h, R.g.lb),
                    e = a.metadata.conversion_linker_enabled,
                    f = a.metadata.cookie_options;
                oq({
                    hh: e,
                    pj: b,
                    Ch: c,
                    Wh: d
                }, f);
                zp(a.target, a.h);
                ip({
                    If: !1,
                    Ie: a.metadata.redact_ads_data,
                    Th: a.target.id,
                    eventId: a.h.eventId,
                    priorityId: a.h.priorityId,
                    yc: e ? f : void 0,
                    Be: e,
                    sj: a.m[R.g.kf],
                    Of: a.m[R.g.yb],
                    Kf: a.m[R.g.xb]
                });
                a.isAborted = !0
            }
        },
        er = function(a) {
            if (!Bp(a, "hasPreAutoPiiCcdRule", !1)) {
                var b = V(50);
                if ((!V(49) || b || a.h.isGtmEvent) && Pq(a, "conversion") && Ak(R.g.F)) {
                    var c =
                        (W(a.h, R.g.Yc) || {})[a.m[R.g.fb]],
                        d = a.m[R.g.Tc],
                        e;
                    if (!(e = bk(c)))
                        if (Ji() && wj)
                            if (xj) e = !0;
                            else {
                                var f = Oi("AW-" + d);
                                e = !!f && !!f.preAutoPii
                            }
                    else e = !1;
                    if (e) {
                        var g = Va(),
                            h = Tj({
                                zc: !0,
                                Ac: !0,
                                Sh: !0
                            });
                        if (0 !== h.elements.length) {
                            for (var l = [], n = 0; n < h.elements.length; ++n) {
                                var p = h.elements[n];
                                l.push(p.querySelector + "*" + Uj(p) + "*" + p.type)
                            }
                            a.m[R.g.Ng] = l.join("~");
                            var q = h.Lh;
                            q && (a.m[R.g.Og] = q.querySelector, a.m[R.g.Mg] = Uj(q));
                            a.m[R.g.Lg] = String(Va() - g);
                            a.m[R.g.Pg] = h.status
                        }
                    }
                }
            }
        },
        fr = function(a) {
            if (a.eventName === R.g.Ia && !a.h.isGtmEvent) {
                if (!a.metadata.consent_updated &&
                    Pq(a, "conversion")) {
                    var b = W(a.h, R.g.ib);
                    if ("function" !== typeof b) return;
                    var c = String(W(a.h, R.g.Pa)),
                        d = a.m[c],
                        e = W(a.h, c);
                    c === R.g.ub || c === R.g.hc ? pq({
                        Xh: c,
                        callback: b,
                        Fh: e
                    }, a.metadata.cookie_options, a.metadata.redact_ads_data, Rp) : b(d || e)
                }
                a.isAborted = !0
            }
        },
        gr = function(a) {
            if (Pq(a, "conversion") && Ak(R.g.F) && (a.m[R.g.wc] || a.m[R.g.nc])) {
                var b = a.m[R.g.fb],
                    c = K(a.metadata.cookie_options),
                    d = Po(c.prefix);
                c.prefix = "_gcl" === d ? "" : d;
                if (a.m[R.g.wc]) {
                    var e = Kq(b, c);
                    e && (a.m[R.g.Rg] = e)
                }
                if (a.m[R.g.nc]) {
                    var f = Gq(b, c).Yk;
                    f &&
                        (a.m[R.g.wg] = f)
                }
            }
        },
        hr = function(a) {
            var b = V(4),
                c = a.h,
                d, e, f;
            if (!b) {
                var g = $p(c, R.g.aa);
                d = fb(Vc(g) ? g : {})
            }
            var h = $p(c, R.g.aa, 1),
                l = $p(c, R.g.aa, 2);
            e = fb(Vc(h) ? h : {}, ".");
            f = fb(Vc(l) ? l : {}, ".");
            b || (a.m[R.g.kf] = d);
            a.m[R.g.yb] = e;
            a.m[R.g.xb] = f
        },
        ir = function(a) {
            if (Pq(a, ["conversion", "remarketing"])) {
                var b = "conversion" === a.metadata.hit_type;
                b && a.eventName !== R.g.Ca || (a.copyToHitData(R.g.Z), b && (a.copyToHitData(R.g.Ed), a.copyToHitData(R.g.Cd), a.copyToHitData(R.g.Dd), a.copyToHitData(R.g.Bd), a.m[R.g.lg] = a.eventName))
            }
        },
        jr =
        function(a) {
            if (Pq(a, ["conversion", "remarketing"])) {
                var b = a.h,
                    c = W(b, R.g.Qb);
                if (!0 === c || !1 === c) a.m[R.g.Qb] = c;
                var d = W(b, R.g.X);
                if (!0 === d || !1 === d) a.m[R.g.zf] = !d;
                !1 === d && Pq(a, "remarketing") && (a.isAborted = !0)
            }
        },
        kr = function(a) {
            Pq(a, "conversion") && (a.copyToHitData(R.g.Zc), a.copyToHitData(R.g.Fd), a.copyToHitData(R.g.dd), a.copyToHitData(R.g.Id), a.copyToHitData(R.g.wb), a.copyToHitData(R.g.Wc))
        },
        lr = function(a) {
            Ep(a);
        },
        mr = function(a) {
            if (Pq(a, ["conversion", "remarketing"]) && z.__gsaExp && z.__gsaExp.id) {
                var b = z.__gsaExp.id;
                if (Ga(b)) try {
                    var c = Number(b());
                    isNaN(c) || (a.m[R.g.Ag] = c)
                } catch (d) {}
            }
        },
        nr = function(a) {
            if (Pq(a, ["conversion", "remarketing"])) {
                var b = Lq();
                void 0 !== b && (a.m[R.g.Qg] = b || "error");
                var c = Xm();
                c && (a.m[R.g.Od] = c);
                var d = Wm();
                d && (a.m[R.g.Vd] = d)
            }
        },
        or = function(a) {
            Pq(a, ["conversion"]) && "1" === go(!1)._up && (a.m[R.g.Rd] = !0)
        },
        pr = function(a) {
            Pq(a, ["conversion"]) && (a.metadata.redact_click_ids = !!a.metadata.redact_ads_data && !Ak(R.g.F))
        },
        qr = function(a) {
            if (Pq(a, ["conversion", "user_data_lead", "user_data_web"]) && Ak(R.g.F) && a.metadata.conversion_linker_enabled) {
                var b = a.metadata.cookie_options,
                    c = Po(b.prefix);
                "_gcl" === c && (c = "");
                var d = c;
                if (Aq.test(H.location.host) ? Dq.test(H.location.href) || Bq.test(H.location.href) : !ep(d)) {
                    var e = Iq(c);
                    e && (a.m[R.g.ub] = e);
                    if (!c) {
                        var f = Fq(Io() ? Eo() : {}, Bq);
                        f && (a.m[R.g.Nd] = f)
                    }
                } else {
                    var g = Jq(c);
                    g && (a.m[R.g.wc] = g);
                    if (!c) {
                        var h = a.m[R.g.fb];
                        b = K(b);
                        b.prefix = c;
                        var l = Gq(h, b, !0).Xk;
                        l && (a.m[R.g.nc] = l)
                    }
                }
            }
        },
        rr = function(a) {
            if (Pq(a, ["conversion",
                    "remarketing", "user_data_lead", "user_data_web"
                ]) && a.metadata.conversion_linker_enabled && Ak(R.g.F)) {
                var b = !V(3);
                if ("remarketing" !== a.metadata.hit_type || b) {
                    var c = a.metadata.cookie_options;
                    yo(c, "conversion" === a.metadata.hit_type && a.eventName !== R.g.Ia);
                    a.m[R.g.hc] = uo(c.prefix)
                }
            }
        },
        sr = function(a) {
            if (Pq(a, ["conversion"])) {
                var b = Hp(a.metadata.cookie_options);
                if (b && !a.m[R.g.na]) {
                    var c = zl(a.m[R.g.fb]);
                    a.m[R.g.na] = c
                }
                b && (a.m[R.g.kb] = b, a.metadata.send_ccm_parallel_ping = !0)
            }
        },
        tr = function(a) {
            var b = !Ak(R.g.F);
            switch (a.metadata.hit_type) {
                case "user_data_lead":
                case "user_data_web":
                    a.isAborted = !(!b && !a.metadata.consent_updated);
                    break;
                case "remarketing":
                    a.isAborted = b;
                    break;
                case "conversion":
                    a.metadata.consent_updated && (a.m[R.g.wd] = !0)
            }
        },
        ur = function(a) {
            Pq(a, ["conversion"]) && a.h.eventMetadata.is_external_event && (a.m[R.g.Wi] = !0)
        },
        vr = function(a) {
            var b;
            if ("gtag.config" !== a.eventName && a.metadata.send_user_data_hit) switch (a.metadata.hit_type) {
                case "user_data_web":
                    b = 97;
                    Oq(a);
                    break;
                case "user_data_lead":
                    b = 98;
                    Oq(a);
                    break;
                case "conversion":
                    b = 99
            }!a.metadata.speculative && b && P(b);
            !0 === a.metadata.speculative &&
                (a.isAborted = !0)
        },
        Wq = !1,
        Xq = !1;
    var wr = {
        H: {
            Zh: "ads_conversion_hit",
            cg: "container_execute_start",
            bi: "container_setup_end",
            dg: "container_setup_start",
            ai: "container_execute_end",
            di: "container_yield_end",
            eg: "container_yield_start",
            Ri: "event_execute_end",
            Si: "event_setup_end",
            ee: "event_setup_start",
            Ti: "ga4_conversion_hit",
            ie: "page_load",
            Jm: "pageview",
            Ub: "snippet_load",
            dj: "tag_callback_error",
            ej: "tag_callback_failure",
            fj: "tag_callback_success",
            gj: "tag_execute_end",
            fd: "tag_execute_start"
        }
    };
    var xr = !1,
        yr = "L S Y E EC TC HTC".split(" "),
        zr = ["S", "E"],
        Ar = ["TS", "TE"];
    var bs = function(a) {},
        cs = function(a) {},
        ds = function() {},
        es = function(a, b) {},
        fs = function(a, b) {},
        Br = function(a, b, c, d, e, f) {
            var g;
            g = void 0 === g ? !1 : g;
            var h = {};
            return h
        },
        Cr = function(a) {
            var b = !1;
            return b
        },
        Dr = function(a, b) {},
        gs = function() {
            var a = {};
            return a
        },
        Vr = function(a) {
            a = void 0 === a ? !0 : a;
            var b = {};
            return b
        },
        hs = function() {},
        is = function(a, b, c) {},
        js = function() {
            var a = Br("PAGEVIEW", L.C);
            if (Mr(a.entryName,
                    "mark")[0]) {
                var b = Ec();
                b.clearMarks(a.entryName);
                b.clearMeasures("GTM-" + L.C + ":" + wr.H.ie + ":to:PAGEVIEW")
            }
            var c = Br(wr.H.ie, L.C);
            Cr(a) && Dr(a, c)
        };
    var ks = function(a, b) {
        var c = z,
            d, e = c.GooglebQhCsO;
        e || (e = {}, c.GooglebQhCsO = e);
        d = e;
        if (d[a]) return !1;
        d[a] = [];
        d[a][0] = b;
        return !0
    };
    var ls = function(a, b, c) {
        var d = cm(a, "fmt");
        if (b) {
            var e = cm(a, "random"),
                f = cm(a, "label") || "";
            if (!e) return !1;
            var g = Bn(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!ks(g, b)) return !1
        }
        d && 4 != d && (a = em(a, "rfmt", d));
        var h = em(a, "fmt", 4);
        qc(h, function() {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b())
        }, void 0, c, H.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var ms = function(a) {
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = a[c],
                    e = void 0;
                if (d.hasOwnProperty("google_business_vertical")) {
                    e = d.google_business_vertical;
                    var f = {};
                    b[e] = b[e] || (f.google_business_vertical = e, f)
                } else e = "", b.hasOwnProperty(e) || (b[e] = {});
                var g = b[e],
                    h;
                for (h in d) "google_business_vertical" !== h && (h in g || (g[h] = []), g[h].push(d[h]))
            }
            return Object.keys(b).map(function(l) {
                return b[l]
            })
        },
        ns = function(a) {
            if (!a || !a.length) return [];
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                if (d) {
                    var e = {};
                    b.push((e.id =
                        d.id, e.origin = d.origin, e.destination = d.destination, e.start_date = d.start_date, e.end_date = d.end_date, e.location_id = d.location_id, e.google_business_vertical = d.google_business_vertical, e))
                }
            }
            return b
        },
        os = function(a) {
            if (!a || !a.length) return [];
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && b.push({
                    item_id: d.id,
                    quantity: d.quantity,
                    value: d.price,
                    start_date: d.start_date,
                    end_date: d.end_date
                })
            }
            return b
        },
        qs = function(a) {
            if (!a) return "";
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = [];
                d && (e.push(ps(d.value)), e.push(ps(d.quantity)),
                    e.push(ps(d.item_id)), e.push(ps(d.start_date)), e.push(ps(d.end_date)), b.push("(" + e.join("*") + ")"))
            }
            return 0 < b.length ? b.join("") : ""
        },
        ps = function(a) {
            return "number" !== typeof a && "string" !== typeof a ? "" : a.toString()
        },
        ss = function(a, b) {
            var c = rs(b);
            return "" + a + (a && c ? ";" : "") + c
        },
        rs = function(a) {
            if (!a || "object" !== typeof a || "function" === typeof a.join) return "";
            var b = [];
            m(a, function(c, d) {
                var e, f;
                if (Ka(d)) {
                    for (var g = [], h = 0; h < d.length; ++h) {
                        var l = ts(d[h]);
                        void 0 != l && g.push(l)
                    }
                    f = 0 !== g.length ? g.join(",") : void 0
                } else f =
                    ts(d);
                e = f;
                var n = ts(c);
                n && void 0 != e && b.push(n + "=" + e)
            });
            return b.join(";")
        },
        ts = function(a) {
            var b = typeof a;
            if (null != a && "object" !== b && "function" !== b) return String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
        },
        us = function(a, b) {
            var c = [],
                d = function(f, g) {
                    null != g && "" !== g && (!0 === g && (g = 1), !1 === g && (g = 0), c.push(f + "=" + encodeURIComponent(g)))
                },
                e = a.metadata.hit_type;
            "conversion" !== e && "remarketing" !== e || d("random", a.metadata.event_start_timestamp_ms);
            m(b, d);
            return c.join("&")
        },
        vs = function(a, b) {
            var c =
                a.metadata.hit_type,
                d = a.m[R.g.Tc],
                e = Ak(R.g.F),
                f = [],
                g, h = a.h.P,
                l, n = Fl() ? 2 : 3,
                p = 0,
                q = function(w) {
                    f.push(w);
                    w.qb && p++
                };
            switch (c) {
                case "conversion":
                    l = "pagead/conversion";
                    var r = "";
                    e ? a.metadata.is_gcp_conversion ? (g = "https://www.google.com/", l = "pagead/1p-conversion") : g = "https://www.googleadservices.com/" : g = "https://pagead2.googlesyndication.com/";
                    a.metadata.is_gcp_conversion && (r = "&gcp=1&sscte=1&ct_cookie_present=1");
                    q({
                        Db: "" + g + l + "/" + d + "/?" + us(a, b) + r,
                        format: n,
                        qb: !0,
                        attributes: V(89) ? {
                            attributionsrc: ""
                        } : void 0
                    });
                    a.metadata.send_ccm_parallel_ping && q({
                        Db: "" + g + "ccm/conversion/" + d + "/?" + us(a, b) + r,
                        format: 2,
                        qb: !0
                    });
                    a.metadata.is_gcp_conversion && (r = "&gcp=1&ct_cookie_present=1", q({
                        Db: "" + (e ? "https://googleads.g.doubleclick.net/" : g) + "pagead/viewthroughconversion/" + d + "/?" + us(a, b) + r,
                        format: n,
                        qb: !0
                    }));
                    break;
                case "remarketing":
                    var t = b.data || "",
                        u = ms(ns(a.m[R.g.Z]));
                    if (u.length) {
                        for (var v = 0; v < u.length; v++) b.data = ss(t, u[v]), q({
                                Db: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + us(a, b),
                                format: n,
                                qb: !0
                            }),
                            a.metadata.send_fledge_experiment && q({
                                Db: xq() + "/td/rul/" + d + "?" + us(a, b),
                                format: 4,
                                qb: !1
                            }), a.metadata.event_start_timestamp_ms += 1;
                        a.metadata.send_fledge_experiment = !1
                    } else q({
                        Db: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + us(a, b),
                        format: n,
                        qb: !0
                    });
                    break;
                case "user_data_lead":
                    q({
                        Db: "https://google.com/pagead/form-data/" + d + "?" + us(a, b),
                        format: 1,
                        qb: !0
                    });
                    break;
                case "user_data_web":
                    q({
                        Db: "https://google.com/ccm/form-data/" + d + "?" + us(a, b),
                        format: 1,
                        qb: !0
                    })
            }
            1 < f.length && Ga(a.h.P) &&
                (h = gb(a.h.P, p));
            Fl() || "conversion" !== c && "remarketing" !== c || !a.metadata.send_fledge_experiment || q({
                Db: xq() + "/td/rul/" + d + "?" + us(a, b),
                format: 4,
                qb: !1
            });
            return {
                P: h,
                ql: f
            }
        },
        ws = function(a, b, c, d, e, f) {
            cs(c);
            var g = function() {
                e && e()
            };
            switch (b) {
                case 1:
                    Ac(a);
                    e && e();
                    break;
                case 2:
                    tc(a, g, void 0, f);
                    break;
                case 3:
                    var h = !1;
                    try {
                        h = ls(a, g, f)
                    } catch (p) {
                        h = !1
                    }
                    h || ws(a, 2, c, d, g, f);
                    break;
                case 4:
                    var l = "AW-" + c.m[R.g.Tc],
                        n = c.m[R.g.fb];
                    n && (l = l + "/" + n);
                    wq(a, l)
            }
        },
        xs = {},
        ys = (xs[R.g.wd] = "gcu", xs[R.g.ub] = "gclaw", xs[R.g.hc] = "auid", xs[R.g.Bd] =
            "dscnt", xs[R.g.Cd] = "fcntr", xs[R.g.Dd] = "flng", xs[R.g.Ed] = "mid", xs[R.g.lg] = "bttype", xs[R.g.fb] = "label", xs[R.g.Mb] = "capi", xs[R.g.sa] = "currency_code", xs[R.g.Fd] = "vdltv", xs[R.g.zi] = "_dbg", xs[R.g.Id] = "oedeld", xs[R.g.xb] = "edid", xs[R.g.rg] = "fledge", xs[R.g.Nd] = "gac", xs[R.g.nc] = "gacgb", xs[R.g.wg] = "gacmcov", xs[R.g.Od] = "gdpr", xs[R.g.yb] = "gdid", xs[R.g.Ag] = "gsaexp", xs[R.g.Bg] = "frm", xs[R.g.Rd] = "gtm_up", xs[R.g.kf] = "did", xs[R.g.Zc] = void 0, xs[R.g.Bb] = "tiba", xs[R.g.Qb] = "rdp", xs[R.g.kb] = "ecsid", xs[R.g.dd] = "delopc", xs[R.g.Vd] =
            "gdpr_consent", xs[R.g.na] = "oid", xs[R.g.Lg] = "ec_lat", xs[R.g.Mg] = "ec_meta", xs[R.g.Ng] = "ec_m", xs[R.g.Og] = "ec_sel", xs[R.g.Pg] = "ec_s", xs[R.g.vf] = "ec_mode", xs[R.g.Aa] = "userId", xs[R.g.Qg] = "us_privacy", xs[R.g.da] = "value", xs[R.g.wc] = "gclgb", xs[R.g.Rg] = "mcov", xs[R.g.Vi] = "hn", xs[R.g.Wi] = "gtm_ee", xs[R.g.zf] = "npa", xs[R.g.Tc] = null, xs[R.g.Cb] = null, xs[R.g.ya] = null, xs[R.g.Z] = null, xs[R.g.ia] = null, xs[R.g.Fa] = null, xs[R.g.tf] = null, xs),
        As = function(a) {
            zs(a, function(b) {
                for (var c = vs(a, b), d = c.P, e = c.ql, f = 0; f < e.length; f++) {
                    var g =
                        e[f];
                    ws(g.Db, g.format, a, b, g.qb ? d : void 0, g.attributes)
                }
            })
        },
        zs = function(a, b) {
            var c = a.metadata.hit_type,
                d = {},
                e = {},
                f = [],
                g = a.metadata.event_start_timestamp_ms;
            if ("conversion" === c || "remarketing" === c) d.cv = "11", d.fst = g, d.fmt = 3, d.bg = "ffffff", d.guid = "ON", d.async = "1";
            d.gtm = Ul();
            Dk() && (V(104) || "remarketing" !== c) && (d.gcs = Wk(), V(106) || "remarketing" !== c && Ek()) && (d.gcd = $k());
            V(109) && (bl() && (d.dma_cps = al()), Hi() && (d.dma = "1"));
            if (a.m[R.g.Cb]) {
                var h = a.m[R.g.Cb].split("x");
                2 === h.length && (d.u_w = h[0], d.u_h = h[1])
            }
            if (a.m[R.g.ya]) {
                var l =
                    a.m[R.g.ya];
                2 === l.length ? d.hl = l : 5 === l.length && (d.hl = l.substring(0, 2), d.gl = l.substring(3, 5))
            }
            var n = a.metadata.redact_click_ids,
                p = function(w, x) {
                    var y = a.m[x];
                    y && (d[w] = n ? gj(y) : y)
                };
            p("url", R.g.ia);
            p("ref", R.g.Fa);
            p("top", R.g.tf);
            V(13) && (ys[R.g.Wd] = "uaa", ys[R.g.Xd] = "uab", ys[R.g.Yd] = "uafvl", ys[R.g.Zd] = "uamb", ys[R.g.ae] = "uam", ys[R.g.be] = "uap", ys[R.g.ce] = "uapv", ys[R.g.de] = "uaw");
            m(a.m, function(w, x) {
                if (ys.hasOwnProperty(w)) {
                    var y = ys[w];
                    y && (d[y] = x)
                } else e[w] = x
            });
            var q = a.m[R.g.Zc];
            void 0 != q && "" !== q && (d.vdnc =
                String(q));
            var r = a.m[R.g.Wc];
            void 0 !== r && (d.shf = r);
            var t = a.m[R.g.wb];
            void 0 !== t && (d.delc = t);
            d.data = rs(e);
            var u = a.m[R.g.Z];
            u && "conversion" === c && (d.iedeld = dk(u), d.item = qs(os(u)));
            if (("conversion" === c || "user_data_lead" === c || "user_data_web" === c) && a.metadata.user_data && (!V(68) || Ak(R.g.F))) {
                var v = wh(a.metadata.user_data);
                v && f.push(v.then(function(w) {
                    d.em = w.Rf;
                    if ("user_data_web" === c && 0 < w.Sl) {
                        var x = Ip(a.metadata.cookie_options);
                        d.ecsid = x
                    }
                }))
            }
            if (f.length) try {
                Promise.all(f).then(function() {
                    b(d)
                });
                return
            } catch (w) {}
            b(d)
        };
    var Bs = function() {
            this.h = {}
        },
        Cs = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        Ds = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        Fs = function(a, b, c, d) {
            if (!Dk()) {
                Es(a, b, c, d);
                return
            }
            el(function() {
                Ak(R.g.F) ? Es(a, b, c, d) : d && d()
            }, [R.g.F]);
        };
    var Gs = function(a, b, c) {
            c = void 0 === c ? !0 : c;
            var d = {
                    gclgb: function() {
                        return Np("gb", b, c).join(".")
                    },
                    gacgb: function() {
                        return Up(c)
                    },
                    gclaw: function() {
                        return Rp(b, c).join(".")
                    },
                    gac: function() {
                        return Tp(c)
                    }
                },
                e = Wp(b),
                f = e ? "gclgb" : "gclaw",
                g = e ? "gacgb" : "gac",
                h = d[g],
                l = (0, d[f])(),
                n = "_gcl" !== b ? "" : h();
            l && Cs(a, f, l);
            n && Cs(a, g, n)
        },
        Es = function(a, b, c, d) {
            c = c || {};
            var e = c.yc || {},
                f = new Bs;
            vh(b, function(g, h) {
                Cs(f, "em", g);
                Cs(f, "gtm", Ul());
                Dk() && (Cs(f, "gcs", Wk()), Cs(f, "gcd", $k()));
                V(109) && (bl() && Cs(f, "dma_cps", al()), Hi() && Cs(f,
                    "dma", "1"));
                Gs(f, Po(e.prefix), c.Ie);
                Cs(f, "auid", uo(e.prefix));
                if (0 < h) {
                    var l = Ip(e);
                    Cs(f, "ecsid", l)
                }
                var n = Ds(f);
                Ac("https://google.com/pagead/form-data/" + a + "?" + n);
                Ac("https://google.com/ccm/form-data/" + a + "?" + n);
                d && d()
            })
        };

    function Hs(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return fj("" + c + b).href
        }
    }

    function Is() {
        return !!Lh.Df && "SGTM_TOKEN" !== Lh.Df.split("@@").join("")
    }

    function Js(a) {
        for (var b = Ks(), c = fa(b), d = c.next(); !d.done; d = c.next()) {
            var e = W(a, d.value);
            if (e) return e
        }
    }

    function Ks() {
        var a = [];
        V(113) && a.push(R.g.qf);
        a.push(R.g.uc);
        return a
    };
    var Ms = function(a, b, c, d) {
            if (!Ls() && !Pl(a)) {
                var e = c ? "/gtag/js" : "/gtm.js",
                    f = "?id=" + encodeURIComponent(a) + "&l=" + Lh.ka,
                    g = 0 === a.indexOf("GTM-");
                g || (f += "&cx=c");
                var h = Is();
                h && (f += "&sign=" + Lh.Df);
                var l = Uh || Wh ? Hs(b, e + f) : void 0;
                if (!l) {
                    var n = Lh.Xe + e;
                    h && jc && g && (n = jc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    l = op("https://", "http://", n + f)
                }
                var p = Ql();
                Gl().container[a] = {
                    state: 1,
                    context: d,
                    parent: p
                };
                Hl({
                    ctid: a,
                    isDestination: !1
                });
                qc(l)
            }
        },
        Ns = function(a, b, c, d) {
            var e;
            if (e = !Ls()) {
                var f = Gl().destination[a];
                e = !(f && f.state)
            }
            if (e)
                if (Rl()) Gl().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: Ql()
                }, Hl({
                    ctid: a,
                    isDestination: !0
                }, d), P(91);
                else {
                    var g = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Lh.ka + "&cx=c";
                    Is() && (g += "&sign=" + Lh.Df);
                    var h = Uh || Wh ? Hs(b, g) : void 0;
                    h || (h = op("https://", "http://", Lh.Xe + g));
                    Gl().destination[a] = {
                        state: 1,
                        context: c,
                        parent: Ql()
                    };
                    Hl({
                        ctid: a,
                        isDestination: !0
                    }, d);
                    qc(h)
                }
        };

    function Ls() {
        if (Fl()) {
            return !0
        }
        return !1
    };
    var Ps = function(a, b) {
            Os(a).entity.push(b)
        },
        Qs = function() {
            var a = Os(L.Za || "_" + L.C);
            return a.event ? a.event : []
        };

    function Os(a) {
        var b, c = Mh.r;
        c || (c = {
            container: {}
        }, Mh.r = c);
        b = c;
        var d = b.container[a];
        d || (d = {
            entity: [],
            event: []
        }, b.container[a] = d);
        return d
    };
    var Rs = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Ss = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Ts = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Us = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        Xs = function(a) {
            var b = li("gtm.allowlist") || li("gtm.whitelist");
            b && P(9);
            Sh && (b = ["google", "gtagfl", "lcl", "zone"]);
            Vs() && (Sh ?
                P(116) : P(117), Ws && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
            var c = b && ab(Sa(b), Ss),
                d = li("gtm.blocklist") || li("gtm.blacklist");
            d || (d = li("tagTypeBlacklist")) && P(3);
            d ? P(8) : d = [];
            Vs() && (d = Sa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Sa(d).indexOf("google") && P(2);
            var e = d && ab(Sa(d), Ts),
                f = {};
            return function(g) {
                var h = g && g[re.Sb];
                if (!h || "string" != typeof h) return !0;
                h = h.replace(/^_*/, "");
                if (void 0 !== f[h]) return f[h];
                var l = di[h] || [],
                    n = a(h, l);
                if (V(117)) {
                    var p;
                    p = Os(L.Za || "_" + L.C).entity;
                    for (var q = 0; q < p.length; q++) try {
                        n = n && p[q](h, l)
                    } catch (y) {
                        n = !1
                    }
                }
                if (b) {
                    var r;
                    if (r = n) a: {
                        if (0 > c.indexOf(h))
                            if (l && 0 < l.length)
                                for (var t = 0; t < l.length; t++) {
                                    if (0 > c.indexOf(l[t])) {
                                        P(11);
                                        r = !1;
                                        break a
                                    }
                                } else {
                                    r = !1;
                                    break a
                                }
                        r = !0
                    }
                    n = r
                }
                var u = !1;
                if (d) {
                    var v = 0 <= e.indexOf(h);
                    if (v) u = v;
                    else {
                        var w = Oa(e, l || []);
                        w && P(10);
                        u = w
                    }
                }
                var x = !n || u;
                x || !(0 <= l.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Oa(e, Us));
                return f[h] = x
            }
        },
        Ws = !1;
    var Vs = function() {
        return Rs.test(z.location && z.location.hostname)
    };
    var Ys = "",
        Zs = [];

    function $s(a) {
        var b = "";
        Ys && (b = "&dl=" + encodeURIComponent(Ys));
        0 < Zs.length && (b += "&tdp=" + Zs.join("."));
        a.Xb && (Ys = "", Zs.length = 0, b && a.Ij());
        return b
    };
    var at = [];

    function bt(a) {
        if (!at.length) return "";
        var b = "&tdc=" + at.join("!");
        a.Xb && (a.Ij(), at.length = 0);
        return b
    };
    var ct = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        dt = {},
        et = Object.freeze((dt[R.g.Qa] = !0, dt)),
        ft = 0 <= H.location.search.indexOf("?gtm_diagnostics=") || 0 <= H.location.search.indexOf("&gtm_diagnostics="),
        ht = function(a, b, c) {
            if (hn && "config" === a && !(1 < lp(b).J.length)) {
                var d, e = kc("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = K(c.D);
                K(c.h, f);
                var g = [],
                    h;
                for (h in d) {
                    var l = gt(d[h], f);
                    l.length && (ft && console.log(l), g.push(h))
                }
                g.length && (g.length && hn && at.push(b + "*" + g.join(".")), xb("TAGGING", ct[H.readyState] ||
                    14));
                d[b] = f
            }
        };

    function it(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function gt(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var t = r[q];
                return void 0 === t ? et[q] : t
            },
            f;
        for (f in it(a, b)) {
            var g = (d ? d + "." : "") + f,
                h = e(f, a),
                l = e(f, b),
                n = "object" === Tc(h) || "array" === Tc(h),
                p = "object" === Tc(l) || "array" === Tc(l);
            if (n && p) gt(h, l, c, g);
            else if (n || p || h !== l) c[g] = !0
        }
        return Object.keys(c)
    };
    var jt = !1,
        kt = 0,
        lt = [];

    function mt(a) {
        if (!jt) {
            var b = H.createEventObject,
                c = "complete" == H.readyState,
                d = "interactive" == H.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                jt = !0;
                for (var e = 0; e < lt.length; e++) I(lt[e])
            }
            lt.push = function() {
                for (var f = 0; f < arguments.length; f++) I(arguments[f]);
                return 0
            }
        }
    }

    function nt() {
        if (!jt && 140 > kt) {
            kt++;
            try {
                H.documentElement.doScroll("left"), mt()
            } catch (a) {
                z.setTimeout(nt, 50)
            }
        }
    }
    var ot = function(a) {
        jt ? a() : lt.push(a)
    };
    var qt = function(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: L.C
        }
    };

    function rt(a, b) {
        if (data.entities && data.entities[a]) return data.entities[a][b]
    };
    var tt = function(a, b) {
            this.h = !1;
            this.D = [];
            this.K = {
                tags: []
            };
            this.R = !1;
            this.m = this.B = 0;
            st(this, a, b)
        },
        ut = function(a, b, c, d) {
            if (Ph.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Vc(d) && (e = K(d, e));
            e.id = c;
            e.status = "timeout";
            return a.K.tags.push(e) - 1
        },
        vt = function(a, b, c, d) {
            var e = a.K.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        wt = function(a) {
            if (!a.h) {
                for (var b = a.D, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.D.length = 0
            }
        },
        st = function(a, b, c) {
            void 0 !== b && a.Ff(b);
            c && z.setTimeout(function() {
                return wt(a)
            }, Number(c))
        };
    tt.prototype.Ff = function(a) {
        var b = this,
            c = Ya(function() {
                return I(function() {
                    a(L.C, b.K)
                })
            });
        this.h ? c() : this.D.push(c)
    };
    var xt = function(a) {
            a.B++;
            return Ya(function() {
                a.m++;
                a.R && a.m >= a.B && wt(a)
            })
        },
        zt = function(a) {
            a.R = !0;
            a.m >= a.B && wt(a)
        };
    var At = {},
        Ct = function() {
            return z[Bt()]
        },
        Dt = !1;
    var Et = function(a) {
            z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
            var b = z.GoogleAnalyticsObject;
            if (z[b]) z.hasOwnProperty(b);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Ua());
                z[b] = c
            }
            return z[b]
        },
        Ft = function(a) {
            if (Dk()) {
                var b = Ct();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function Bt() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var Gt = function(a) {},
        Ht = function(a, b) {
            return function() {
                var c = Ct(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            h = f.get("hitCallback"),
                            l = 0 > g.indexOf("&tid=" + b);
                        l && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        l && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var Mt = {},
        Nt = {};

    function Ot(a, b) {
        if (hn) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            Mt[a] = "&e=" + c + "&eid=" + a;
            sn(a)
        }
    }

    function Pt(a) {
        var b = a.eventId,
            c = a.Xb;
        if (!Mt[b]) return "";
        var d = Nt[b] ? "" : "&es=1";
        d += Mt[b];
        c && (Nt[b] = !0);
        return d
    };
    var Qt = {};

    function Rt(a, b) {
        hn && (Qt[a] = Qt[a] || {}, Qt[a][b] = (Qt[a][b] || 0) + 1)
    }

    function St(a) {
        for (var b = a.eventId, c = a.Xb, d = Object.entries(Qt[b] || {}), e = [], f = 0; f < d.length; f++) {
            var g = fa(d[f]),
                h = g.next().value,
                l = g.next().value;
            e.push("" + h + l)
        }
        c && delete Qt[b];
        return e.length ? "&md=" + e.join(".") : ""
    };
    var Tt = {},
        Ut = {
            aev: "1",
            c: "2",
            jsm: "3",
            v: "4",
            j: "5",
            smm: "6",
            rmm: "7",
            input: "8"
        };

    function nu(a, b, c) {
        if (hn) {
            Tt[a] = Tt[a] || [];
            var d = Ut[b] || "0",
                e;
            e = c instanceof z.Element ? "1" : c instanceof z.Event ? "2" : c instanceof z.RegExp ? "3" : c === z ? "4" : c === H ? "5" : c instanceof z.Promise ? "6" : c instanceof z.Storage ? "7" : c instanceof z.Date ? "8" : c instanceof z.History ? "9" : c instanceof z.Performance ? "a" : c === z.crypto ? "b" : c instanceof z.Location ? "c" : c instanceof z.Navigator ? "d" : "object" !== typeof c || Vc(c) ? "0" : "e";
            Tt[a].push("" + d + e)
        }
    }

    function Bu(a) {
        var b = a.eventId,
            c = Tt[b] || [];
        if (!c.length) return "";
        a.Xb && delete Tt[b];
        return "&pcr=" + c.join(".")
    };
    var Cu = {},
        Du = {};

    function Eu(a, b, c) {
        if (hn && b) {
            var d = Zm(b);
            Cu[a] = Cu[a] || [];
            Cu[a].push(c + d);
            var e = b["function"];
            if (!e) throw Error("Error: No function name given for function call.");
            var f = (Te[e] ? "1" : "2") + d;
            Du[a] = Du[a] || [];
            Du[a].push(f);
            sn(a)
        }
    }

    function Fu(a) {
        var b = a.eventId,
            c = a.Xb,
            d = "",
            e = Cu[b] || [];
        e.length && (d += "&tr=" + e.join("."));
        var f = Du[b] || [];
        f.length && (d += "&ti=" + f.join("."));
        c && (delete Cu[b], delete Du[b]);
        return d
    };

    function Gu(a, b, c, d) {
        var e = Re[a],
            f = Hu(a, b, c, d);
        if (!f) return null;
        var g = bf(e[re.cj], c, []);
        if (g && g.length) {
            var h = g[0];
            f = Gu(h.index, {
                P: f,
                W: 1 === h.tj ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Hu(a, b, c, d) {
        function e() {
            if (f[re.zk]) h();
            else {
                var w = cf(f, c, []),
                    x = w[re.Sj];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!Ak(x[y])) {
                            h();
                            return
                        }
                var A = ut(c.Vb, String(f[re.Sb]), Number(f[re.ne]), w[re.Ak]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var G = Va() - J;
                        Eu(c.id, Re[a], "5");
                        vt(c.Vb, A, "success", G);
                        V(70) && is(c, f, wr.H.fj);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var G = Va() - J;
                        Eu(c.id, Re[a], "6");
                        vt(c.Vb, A, "failure", G);
                        V(70) && is(c, f, wr.H.ej);
                        h()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                Eu(c.id, f, "1");
                var D = function() {
                    Ci(3);
                    var G = Va() - J;
                    Eu(c.id, f, "7");
                    vt(c.Vb, A, "exception", G);
                    V(70) && is(c, f, wr.H.dj);
                    B || (B = !0, h())
                };
                if (V(70)) {
                    var E = Br(wr.H.fd, L.C, c.id, Number(f[re.ne]), c.name, Zm(f));
                    Cr(E)
                }
                var J = Va();
                try {
                    af(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (G) {
                    D(G)
                }
                V(70) && is(c, f, wr.H.gj)
            }
        }
        var f = Re[a],
            g = b.P,
            h = b.W,
            l = b.terminate;
        if (c.sh(f)) return null;
        var n = bf(f[re.ij], c, []);
        if (n && n.length) {
            var p = n[0],
                q = Gu(p.index, {
                    P: g,
                    W: h,
                    terminate: l
                }, c, d);
            if (!q) return null;
            g = q;
            h = 2 === p.tj ? l : q
        }
        if (f[re.Yi] || f[re.Ck]) {
            var r = f[re.Yi] ? Se : c.om,
                t = g,
                u = h;
            if (!r[a]) {
                e = Ya(e);
                var v = Iu(a, r, e);
                g = v.P;
                h = v.W
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function Iu(a, b, c) {
        var d = [],
            e = [];
        b[a] = Ju(d, e, c);
        return {
            P: function() {
                b[a] = Ku;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            W: function() {
                b[a] = Lu;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Ju(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Ku(a) {
        a()
    }

    function Lu(a, b) {
        b()
    };
    var Nu = function(a, b) {
            return 1 === arguments.length ? Mu("set", a) : Mu("set", a, b)
        },
        Ou = function(a, b) {
            return 1 === arguments.length ? Mu("config", a) : Mu("config", a, b)
        },
        Pu = function(a, b, c) {
            c = c || {};
            c[R.g.Rb] = a;
            return Mu("event", b, c)
        };

    function Mu(a) {
        return arguments
    }
    var Qu = function() {
        this.h = [];
        this.m = []
    };
    Qu.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.m.length; f++) try {
            this.m[f](e)
        } catch (g) {}
    };
    Qu.prototype.listen = function(a) {
        this.m.push(a)
    };
    Qu.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    Qu.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var Su = function(a, b, c) {
            Ru().enqueue(a, b, c)
        },
        Uu = function() {
            var a = Tu;
            Ru().listen(a)
        };

    function Ru() {
        var a = Mh.mb;
        a || (a = new Qu, Mh.mb = a);
        return a
    }
    var bv = function(a) {
            var b = Mh.zones;
            return b ? b.getIsAllowedFn(Kl(), a) : function() {
                return !0
            }
        },
        cv = function(a) {
            var b = Mh.zones;
            return b ? b.isActive(Kl(), a) : !0
        };
    var fv = function(a, b) {
        for (var c = [], d = 0; d < Re.length; d++)
            if (a[d]) {
                var e = Re[d];
                var f = xt(b.Vb);
                try {
                    var g = Gu(d, {
                        P: f,
                        W: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = e["function"];
                        if (!h) throw "Error: No function name given for function call.";
                        var l = Te[h];
                        c.push({
                            Kj: d,
                            Cj: (l ? l.priorityOverride || 0 : 0) || rt(e[re.Sb], 1) || 0,
                            execute: g
                        })
                    } else dv(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(ev);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return 0 < c.length
    };

    function ev(a, b) {
        var c, d = b.Cj,
            e = a.Cj;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Kj,
                h = b.Kj;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }

    function dv(a, b) {
        if (hn) {
            var c = function(d) {
                var e = b.sh(Re[d]) ? "3" : "4",
                    f = bf(Re[d][re.cj], b, []);
                f && f.length && c(f[0].index);
                Eu(b.id, Re[d], e);
                var g = bf(Re[d][re.ij], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var iv = !1,
        gv;
    var ov = function(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        V(70) && es(b, d);
        if ("gtm.js" === d) {
            if (iv) return !1;
            iv = !0
        }
        var e, f = !1,
            g = cv(b);
        if (V(130))
            for (var h = Qs(), l = 0; g && l < h.length; l++) g = (0, h[l])(d, b);
        if (g) e = bv(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
            f = !0;
            e = bv(Number.MAX_SAFE_INTEGER)
        }
        Ot(b, d);
        var n = a.eventCallback,
            p = a.eventTimeout,
            q = {
                id: b,
                priorityId: c,
                name: d,
                sh: Xs(e),
                om: [],
                yj: function() {
                    P(6);
                    Ci(0)
                },
                nj: kv(),
                oj: lv(b),
                Vb: new tt(function() {
                    if (V(70)) {}
                    n && n.apply(n, [].slice.call(arguments, 0))
                }, p)
            };
        V(119) && (q.Gj = Rt);
        var r = mf(q);
        f && (r = mv(r));
        V(70) && fs(b, d);
        var t = fv(r, q),
            u = !1;
        zt(q.Vb);
        "gtm.js" !== d && "gtm.sync" !== d || Gt(L.C);
        return nv(r, t) || u
    };

    function lv(a) {
        return function(b) {
            Zc(b) || nu(a, "input", b)
        }
    }

    function kv() {
        var a = {};
        a.event = zi("event", 1);
        a.ecommerce = zi("ecommerce", 1);
        a.gtm = zi("gtm");
        a.eventModel = zi("eventModel");
        return a
    }

    function mv(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(Re[c][re.Sb]);
                if (Oh[d] || void 0 !== Re[c][re.Dk] || ei[d] || rt(d, 2)) b[c] = !0
            }
        return b
    }

    function nv(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Re[c] && !Ph[String(Re[c][re.Sb])]) return !0;
        return !1
    }
    var pv = {};

    function qv(a, b, c) {
        hn && void 0 !== a && (pv[a] = pv[a] || [], pv[a].push(c + b), sn(a))
    }

    function rv(a) {
        var b = a.eventId,
            c = a.Xb,
            d = "",
            e = pv[b] || [];
        e.length && (d += "&epr=" + e.join("."));
        c && delete pv[b];
        return d
    };
    var tv = function(a, b, c, d) {
            var e = lp(c, d.isGtmEvent);
            e && sv.push("event", [b, a], e, d)
        },
        uv = function(a, b, c, d) {
            var e = lp(c, d.isGtmEvent);
            e && sv.push("get", [a, b], e, d)
        },
        wv = function(a) {
            var b = lp(a, !0),
                c;
            b ? c = vv(sv, b).h : c = {};
            return c
        },
        xv = function() {
            this.status = 1;
            this.K = {};
            this.h = {};
            this.m = {};
            this.R = null;
            this.D = {};
            this.B = !1
        },
        yv = function(a, b, c, d) {
            var e = Va();
            this.type = a;
            this.B = e;
            this.h = b;
            this.m = c;
            this.messageContext = d
        },
        zv = function() {
            this.m = {};
            this.B = {};
            this.h = []
        },
        vv = function(a, b) {
            var c = b.ba;
            return a.m[c] = a.m[c] || new xv
        },
        Av = function(a, b, c, d) {
            if (d.h) {
                var e = vv(a, d.h),
                    f = e.R;
                if (f) {
                    var g = K(c),
                        h = K(e.K[d.h.id]),
                        l = K(e.D),
                        n = K(e.h),
                        p = K(a.B),
                        q = {};
                    if (hn) try {
                        q = K(ii)
                    } catch (v) {
                        P(72)
                    }
                    var r = d.h.prefix,
                        t = function(v) {
                            qv(d.messageContext.eventId, r, v);
                            var w = g[R.g.mc];
                            w && I(w)
                        },
                        u = mq(lq(kq(jq(iq(gq(fq(hq(eq(dq(cq(new bq(d.messageContext.eventId, d.messageContext.priorityId), g), h), l), n), p), q), d.messageContext.eventMetadata), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("2")
                            }
                        }), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("3")
                            }
                        }), !!d.messageContext.isGtmEvent));
                    try {
                        qv(d.messageContext.eventId, r, "1"), ht(d.type, d.h.id, u), f(d.h.id, b, d.B, u)
                    } catch (v) {
                        qv(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    zv.prototype.register = function(a, b, c) {
        var d = vv(this, a);
        3 !== d.status && (d.R = b, d.status = 3, c && (K(d.h, c), d.h = c), this.flush())
    };
    zv.prototype.push = function(a, b, c, d) {
        void 0 !== c && (1 === vv(this, c).status && (vv(this, c).status = 2, this.push("require", [{}], c, {})), vv(this, c).B && (d.deferrable = !1));
        this.h.push(new yv(a, c, b, d));
        d.deferrable || this.flush()
    };
    zv.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            var f = this.h[0],
                g = f.h;
            if (f.messageContext.deferrable) !g || vv(this, g).B ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== vv(this, g).status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        m(f.m[0], function(r, t) {
                            K(cb(r, t), b.B)
                        });
                        break;
                    case "config":
                        var h = vv(this, g);
                        e.Hb = {};
                        m(f.m[0], function(r) {
                            return function(t, u) {
                                K(cb(t, u), r.Hb)
                            }
                        }(e));
                        var l = !!e.Hb[R.g.vc];
                        delete e.Hb[R.g.vc];
                        var n = g.ba === g.id;
                        l || (n ? h.D = {} : h.K[g.id] = {});
                        h.B && l || Av(this, R.g.la, e.Hb, f);
                        h.B = !0;
                        n ? K(e.Hb, h.D) : (K(e.Hb, h.K[g.id]), P(70));
                        d = !0;
                        break;
                    case "event":
                        e.Oe = {};
                        m(f.m[0], function(r) {
                            return function(t, u) {
                                K(cb(t, u), r.Oe)
                            }
                        }(e));
                        Av(this, f.m[1], e.Oe, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[R.g.Pa] = f.m[0], p[R.g.ib] = f.m[1], p);
                        Av(this, R.g.Ia, q, f)
                }
                this.h.shift();
                Bv(this, f)
            }
            e = {
                Hb: e.Hb,
                Oe: e.Oe
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var Bv = function(a, b) {
            if ("require" !== b.type)
                if (b.h)
                    for (var c = vv(a, b.h).m[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.m)
                        if (a.m.hasOwnProperty(e)) {
                            var f = a.m[e];
                            if (f && f.m)
                                for (var g = f.m[b.type] || [], h = 0; h < g.length; h++) g[h]()
                        }
        },
        Cv = function(a, b) {
            var c = sv,
                d = K(b);
            K(vv(c, a).h, d);
            vv(c, a).h = d
        },
        sv = new zv;
    var uf;
    var Dv = {},
        Ev = {},
        Fv = function(a, b) {
            for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                    Te: e.Te,
                    Qe: e.Qe
                }, f++) {
                var g = a[f];
                if (0 <= g.indexOf("-")) e.Te = lp(g, b), e.Te && (La(Ll(), function(q) {
                    return function(r) {
                        return q.Te.ba === r
                    }
                }(e)) ? c.push(g) : d.push(g));
                else {
                    var h = Dv[g] || [];
                    e.Qe = {};
                    h.forEach(function(q) {
                        return function(r) {
                            return q.Qe[r] = !0
                        }
                    }(e));
                    for (var l = Kl(), n = 0; n < l.length; n++)
                        if (e.Qe[l[n]]) {
                            c = c.concat(Ll());
                            break
                        }
                    var p = Ev[g] || [];
                    p.length && (c = c.concat(p))
                }
            }
            return {
                Jl: c,
                Ml: d
            }
        },
        Gv = function(a) {
            m(Dv, function(b, c) {
                var d =
                    c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        Hv = function(a) {
            m(Ev, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var Iv = "HA GF G UA AW DC MC".split(" "),
        Jv = !1,
        Kv = !1;

    function Lv(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: fi()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Mv = void 0,
        Nv = void 0;

    function Ov(a, b, c) {
        var d = K(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        var e = K(b);
        K(c, e);
        Su(Ou(Kl()[0], e), a.eventId, d)
    }

    function Pv(a) {
        for (var b = Ks(), c = fa(b), d = c.next(); !d.done; d = c.next()) {
            var e = d.value,
                f = a && a[e] || sv.B[e];
            if (f) return f
        }
    }
    var Qv = {
            config: function(a, b) {
                var c = V(122),
                    d = Lv(a, b);
                if (!(2 > a.length) && k(a[1])) {
                    var e = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !Vc(a[2]) || 3 < a.length) return;
                        e = a[2]
                    }
                    var f = lp(a[1], b.isGtmEvent);
                    if (f) {
                        var g, h, l;
                        a: {
                            if (!L.yf) {
                                var n = Ml(Ql());
                                if (n && n.parent && n.context && 1 === n.context.source && 0 !== n.parent.ctid.indexOf("GTM-")) {
                                    var p = n.parent,
                                        q = p.isDestination;
                                    l = {
                                        Pl: Ml(p),
                                        Il: q
                                    };
                                    break a
                                }
                            }
                            l = void 0
                        }
                        var r = l;
                        r && (g = r.Pl, h = r.Il);
                        Ot(d.eventId, "gtag.config");
                        var t = f.ba,
                            u = f.id !== t;
                        if (u ? -1 === Ll().indexOf(t) : -1 === Kl().indexOf(t)) {
                            if (!(c &&
                                    b.inheritParentConfig || V(61) && e[R.g.zb])) {
                                var v = Pv(e);
                                if (u) Ns(t, v, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                                    var w = e;
                                    Mv ? Ov(b, w, Mv) : Nv || (Nv = K(w))
                                } else Ms(t, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (g && (P(128), h && P(130), c && b.inheritParentConfig)) {
                                var x = e;
                                Nv ? Ov(b, Nv, x) : !x[R.g.vc] && Rh && Mv || (Mv = K(x));
                                return
                            }
                            if (Rh && !u && !e[R.g.vc]) {
                                var y = Kv;
                                Kv = !0;
                                if (y) return
                            }
                            Jv || P(43);
                            if (!b.noTargetGroup)
                                if (u) {
                                    Hv(f.id);
                                    var A = f.id,
                                        B = e[R.g.Pd] || "default";
                                    B = String(B).split(",");
                                    for (var D = 0; D < B.length; D++) {
                                        var E = Ev[B[D]] || [];
                                        Ev[B[D]] = E;
                                        0 > E.indexOf(A) && E.push(A)
                                    }
                                } else {
                                    Gv(f.id);
                                    var J = f.id,
                                        G = e[R.g.Pd] || "default";
                                    G = G.toString().split(",");
                                    for (var O = 0; O < G.length; O++) {
                                        var Q = Dv[G[O]] || [];
                                        Dv[G[O]] = Q;
                                        0 > Q.indexOf(J) && Q.push(J)
                                    }
                                }
                            delete e[R.g.Pd];
                            var da = b.eventMetadata || {};
                            da.hasOwnProperty("is_external_event") || (da.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = da;
                            delete e[R.g.mc];
                            for (var aa = u ? [f.id] : Ll(), U = 0; U <
                                aa.length; U++) {
                                var S = e,
                                    ma = K(b),
                                    ha = lp(aa[U], ma.isGtmEvent);
                                ha && sv.push("config", [S], ha, ma)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    P(39);
                    var c = Lv(a, b),
                        d = a[1];
                    "default" === d ? Sk(a[2]) : "update" === d ? Tk(a[2], c) : "declare" === d ? b.fromContainerExecution && Rk(a[2]) : "core_platform_services" === d && Uk(a[2])
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && k(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!Vc(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = K(e), e[R.g.mc] && (g.eventCallback =
                        e[R.g.mc]), e[R.g.Kd] && (g.eventTimeout = e[R.g.Kd]));
                    var h = Lv(a, b),
                        l = h.eventId,
                        n = h.priorityId;
                    g["gtm.uniqueEventId"] = l;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[R.g.Rb];
                    void 0 === r && (r = li(R.g.Rb, 2), void 0 === r && (r = "default"));
                    if (k(r) || Ka(r)) {
                        var t;
                        b.isGtmEvent && V(120) ? t = k(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
                        var u = Fv(t, b.isGtmEvent),
                            v = u.Jl,
                            w = u.Ml;
                        if (w.length)
                            for (var x = Pv(q), y = 0; y < w.length; y++) {
                                var A = lp(w[y], b.isGtmEvent);
                                A && Ns(A.ba, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = np(v, b.isGtmEvent)
                    } else p = void 0;
                    var B = p;
                    if (B) {
                        Ot(l, c);
                        for (var D = [], E = 0; E < B.length; E++) {
                            var J = B[E],
                                G = K(b);
                            if (-1 !== Iv.indexOf(J.prefix)) {
                                var O = K(d),
                                    Q = G.eventMetadata || {};
                                Q.hasOwnProperty("is_external_event") || (Q.is_external_event = !G.fromContainerExecution);
                                G.eventMetadata = Q;
                                delete O[R.g.mc];
                                tv(c, O, J.id, G)
                            }
                            D.push(J.id)
                        }
                        g.eventModel = g.eventModel || {};
                        0 < B.length ? g.eventModel[R.g.Rb] = D.join() : delete g.eventModel[R.g.Rb];
                        Jv || P(43);
                        void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                P(53);
                if (4 === a.length && k(a[1]) && k(a[2]) && Ga(a[3])) {
                    var c = lp(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        Jv || P(43);
                        var f = Pv();
                        if (!La(Ll(), function(h) {
                                return c.ba === h
                            })) Ns(c.ba, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== Iv.indexOf(c.prefix)) {
                            Lv(a, b);
                            var g = {};
                            Jk(K((g[R.g.Pa] = d, g[R.g.ib] = e, g)));
                            uv(d, function(h) {
                                    I(function() {
                                        return e(h)
                                    })
                                },
                                c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    Jv = !0;
                    var c = Lv(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function(a) {
                if (3 === a.length && k(a[1]) && Ga(a[2])) {
                    var b = a[1],
                        c = a[2],
                        d = uf.m;
                    d.h[b] ? d.h[b].push(c) : d.h[b] = [c];
                    if (P(74), "all" === a[1]) {
                        P(75);
                        var e = !1;
                        try {
                            e = a[2](L.C, "unknown", {})
                        } catch (f) {}
                        e || P(76)
                    }
                } else {
                    P(73);
                }
            },
            set: function(a, b) {
                var c;
                2 == a.length && Vc(a[1]) ? c = K(a[1]) : 3 == a.length && k(a[1]) && (c = {}, Vc(a[2]) || Ka(a[2]) ? c[a[1]] = K(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = Lv(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    K(c);
                    var g = K(c);
                    sv.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    V(30) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        Rv = {
            policy: !0
        };
    var Sv = function(a) {
            var b = z[Lh.ka].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        Tv = function(a) {
            var b = z[Lh.ka],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var Uv = !1,
        Vv = [];

    function Wv() {
        if (!Uv) {
            Uv = !0;
            for (var a = 0; a < Vv.length; a++) I(Vv[a])
        }
    }
    var Xv = function(a) {
        Uv ? I(a) : Vv.push(a)
    };
    var nw = function(a) {
        if (mw(a)) return a;
        this.h = a
    };
    nw.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var mw = function(a) {
        return !a || "object" !== Tc(a) || Vc(a) ? !1 : "getUntrustedMessageValue" in a
    };
    nw.prototype.getUntrustedMessageValue = nw.prototype.getUntrustedMessageValue;
    var ow = 0,
        pw = {},
        qw = [],
        rw = [],
        sw = !1,
        tw = !1;

    function uw(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var vw = function(a) {
            return z[Lh.ka].push(a)
        },
        ww = function(a, b, c) {
            a.eventCallback = b;
            c && (a.eventTimeout = c);
            return vw(a)
        },
        xw = function(a, b) {
            var c = Mh[Lh.ka],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = z.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (z.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function yw(a, b) {
        var c = a._clear || b.overwriteModelFields;
        m(a, function(e, f) {
            "_clear" !== e && (c && xi(e), xi(e, f))
        });
        ai || (ai = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = fi(), a["gtm.uniqueEventId"] = d, xi("gtm.uniqueEventId", d));
        return ov(a)
    }

    function zw(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Pa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function Aw() {
        var a;
        if (rw.length) a = rw.shift();
        else if (qw.length) a = qw.shift();
        else return;
        var b;
        var c = a;
        if (sw || !zw(c.message)) b = c;
        else {
            sw = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = fi());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                h = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            qw.unshift(h, c);
            if (hn && L.C) {
                var l, n = Ml(Ql());
                l = n && n.context;
                var p, q = fj(z.location.href);
                p = q.hostname + q.pathname;
                var r = l && l.fromContainerExecution,
                    t = l && l.source,
                    u = L.C,
                    v = L.Za,
                    w = L.yf;
                hn && (Ys || (Ys = p), Zs.push(u + ";" + v + ";" + (r ? 1 : 0) + ";" + (t || 0) + ";" + (w ? 1 : 0)))
            }
            b = f
        }
        return b
    }

    function Bw() {
        for (var a = !1, b; !tw && (b = Aw());) {
            tw = !0;
            delete ii.eventModel;
            ki();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) tw = !1;
            else {
                e.fromContainerExecution && yi();
                try {
                    if (Ga(d)) try {
                        d.call(mi)
                    } catch (x) {} else if (Ka(d)) {
                        var f = d;
                        if (k(f[0])) {
                            var g = f[0].split("."),
                                h = g.pop(),
                                l = f.slice(1),
                                n = li(g.join("."), 2);
                            if (null != n) try {
                                n[h].apply(n, l)
                            } catch (x) {}
                        }
                    } else {
                        var p = void 0,
                            q = !1;
                        if (Pa(d)) {
                            a: {
                                if (d.length && k(d[0])) {
                                    var r = Qv[d[0]];
                                    if (r && (!e.fromContainerExecution || !Rv[d[0]])) {
                                        p = r(d, e);
                                        break a
                                    }
                                }
                                p = void 0
                            }(q = p &&
                                "set" === d[0] && !!p.event) && P(101)
                        }
                        else p = d;
                        if (p) {
                            var t = yw(p, e);
                            a = t || a;
                            q && t && P(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && ki(!0);
                    var u = d["gtm.uniqueEventId"];
                    if ("number" === typeof u) {
                        for (var v = pw[String(u)] || [], w = 0; w < v.length; w++) rw.push(Cw(v[w]));
                        v.length && rw.sort(uw);
                        delete pw[String(u)];
                        u > ow && (ow = u)
                    }
                    tw = !1
                }
            }
        }
        return !a
    }

    function Dw() {
        var a = Ew();
        var e = Bw();
        try {
            Sv(L.C)
        } catch (f) {}
        return e
    }

    function Tu(a) {
        if (ow < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            pw[b] = pw[b] || [];
            pw[b].push(a)
        } else rw.push(Cw(a)), rw.sort(uw), I(function() {
            tw || Bw()
        })
    }

    function Cw(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var Fw = function() {
            function a(f) {
                var g = {};
                if (mw(f)) {
                    var h = f;
                    f = mw(h) ? h.getUntrustedMessageValue() : void 0;
                    g.fromContainerExecution = !0
                }
                return {
                    message: f,
                    messageContext: g
                }
            }
            var b = kc(Lh.ka, []),
                c = Mh[Lh.ka] = Mh[Lh.ka] || {};
            !0 === c.pruned && P(83);
            pw = Ru().get();
            Uu();
            ot(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var f = {};
                    b.push((f.event = "gtm.dom", f))
                }
            });
            Xv(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var f = {};
                    b.push((f.event = "gtm.load", f))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (0 < Mh.SANDBOXED_JS_SEMAPHORE) {
                    f = [];
                    for (var g = 0; g < arguments.length; g++) f[g] = new nw(arguments[g])
                } else f = [].slice.call(arguments, 0);
                var h = f.map(function(q) {
                    return a(q)
                });
                qw.push.apply(qw, h);
                var l = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (P(4), c.pruned = !0; this.length > n;) this.shift();
                var p = "boolean" !== typeof l || l;
                return Bw() && p
            };
            var e = b.slice(0).map(function(f) {
                return a(f)
            });
            qw.push.apply(qw, e);
            Ew() && (ds(), I(Dw))
        },
        Ew = function() {
            var a = !0;
            return a
        };

    function Gw(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Va();
        return b < c + 3E5 && b > c - 9E5
    }

    function Hw(a) {
        return a && 0 === a.indexOf("pending:") ? Gw(a.substr(8)) : !1
    };
    var Qw = function(a) {
            var b = Ll().filter(function(aa) {
                return 0 === aa.indexOf("G-")
            });
            if (b.length) {
                var c = {},
                    d = function(aa, U) {
                        void 0 !== U && void 0 === c[aa] && (c[aa] = U)
                    },
                    e = {},
                    f = function(aa, U) {
                        void 0 !== U && void 0 === e[aa] && (e[aa] = U)
                    },
                    g = a.hitPayload;
                if ("string" !== typeof g) P(126);
                else {
                    for (var h = {}, l = [], n = [], p = [], q = [], r = g.split("&"), t = 0; t < r.length; ++t) {
                        var u = r[t].split("="),
                            v = u[0] || "",
                            w = decodeURIComponent(u[1] || "");
                        if ("" !== v && "" !== w)
                            if (Iw[v] && !h[v]) h[v] = w;
                            else if (Jw[v]) f(Jw[v], w);
                        else {
                            var x = Kw(v);
                            if (x) d(x, w);
                            else {
                                var y =
                                    v.match(Lw);
                                if (y) {
                                    var A = Number(y[1]) - 1;
                                    0 <= A && 200 > A && !q[A] && (q[A] = w)
                                } else Mw(v, w, l, n, p)
                            }
                        }
                    }
                    var B = Nw(h),
                        D = B.nl,
                        E = B.kl,
                        J = B.ml,
                        G = B.ol,
                        O;
                    if (h.pa || h.promoa || l.length || p.length) O = Ow(h, l, p);
                    O && h.tr && f(R.g.da, h.tr);
                    var Q;
                    O === R.g.tb || O === R.g.cb ? Q = l : O === R.g.ab ? (Pw(p, q), Q = Array.prototype.concat.apply([], p)) : O && (Q = n);
                    Q && Q.length && f(R.g.Z, Q.filter(function(aa) {
                        return !!aa
                    }));
                    if (D || O) {
                        d(R.g.kk, E);
                        d(R.g.lk, J);
                        d(R.g.da, G);
                        d(R.g.Ye, a.allowAdFeatures);
                        d(R.g.X, a.allowAdPersonalizationSignals);
                        d(R.g.Na, a.cookieDomain);
                        d(R.g.Ea, a.cookieExpires);
                        d(R.g.Oa, a.cookieFlags);
                        d(R.g.Uc, a.cookiePath);
                        d(R.g.Ka, "_ga" === a.cookieName ? void 0 : a.cookieName);
                        d(R.g.hb, a.cookieUpdate);
                        d(R.g.oc, !0);
                        D && D !== O && vw(Pu(b, D, c));
                        var da = K(c);
                        K(e, da);
                        O && vw(Pu(b, O, da))
                    } else P(126)
                }
            }
        },
        Pw = function(a, b) {
            for (var c = 0; c < a.length; ++c) {
                var d = b[c];
                if (d)
                    for (var e = 0; e < a[c].length; ++e) a[c][e] && (a[c][e][R.g.Vc] = d)
            }
        },
        Ow = function(a, b, c) {
            var d = Rw[a.pa];
            d || ("click" === a.promoa ? d = R.g.tb : b.length ? d = R.g.cb : c.length && (d = R.g.ab));
            return d
        },
        Nw = function(a) {
            var b, c, d,
                e;
            switch (a.t) {
                case "event":
                    b = a.ea;
                    c = a.ec;
                    d = a.el;
                    e = a.ev;
                    break;
                case "pageview":
                    b = R.g.fc;
                    break;
                case "screenview":
                    b = R.g.dk;
                    break;
                case "timing":
                    b = R.g.ek;
                    c = a.utc;
                    d = a.utl;
                    e = a.utt;
                    break;
                case "exception":
                    b = R.g.bk;
                    break;
                case "social":
                    b = R.g.fk
            }
            return {
                nl: b,
                kl: c,
                ml: d,
                ol: e
            }
        },
        Yw = function(a) {
            var b, c, d, e = a.match(Sw);
            if (e) return b = Number(e[1]) - 1, c = Tw[e[2]], {
                wh: b,
                xh: c,
                yh: "promotion"
            };
            var f = a.match(Uw);
            if (f) return d = "product", b = Number(f[1]) - 1, Vw[f[2]] ? c = Vw[f[2]] : c = Ww(f[2]), {
                wh: b,
                xh: c,
                yh: d
            };
            var g = a.match(Xw);
            if (g) {
                d =
                    "impression";
                var h = Number(g[1]) - 1;
                b = Number(g[2]) - 1;
                var l = g[3];
                Vw[l] ? c = Vw[l] : c = Ww(l);
                return {
                    wh: b,
                    xh: c,
                    yh: d,
                    sl: h
                }
            }
            return {}
        },
        Mw = function(a, b, c, d, e) {
            var f = Yw(a),
                g = f.wh,
                h = f.xh,
                l = f.yh,
                n = f.sl;
            if (!(!h || !l || void 0 === g || 0 > g || 200 <= g)) {
                var p;
                switch (l) {
                    case "promotion":
                        p = c;
                        break;
                    case "product":
                        p = d;
                        break;
                    case "impression":
                        if (0 > n || 200 <= n) return;
                        p = e
                }
                p && ("impression" !== l ? (p[g] || (p[g] = {}), p[g][h] || (p[g][h] = b)) : void 0 !== n && (p[n] || (p[n] = []), p[n][g] || (p[n][g] = {}), p[n][g][h] || (p[n][g][h] = b)))
            }
        },
        Kw = function(a) {
            if (Zw[a]) return Zw[a];
            var b = Ww(a);
            if (b) return b;
            var c = a.match($w);
            if (c) return "ua_content_group_" + Number(c[1])
        },
        Ww = function(a) {
            var b = a.match(ax),
                c;
            if (b) {
                if ("cd" === b[1]) c = "ua_dimension";
                else if ("cm" === b[1]) c = "ua_metric";
                else return;
                var d = Number(b[2]);
                if (1 <= d && 200 >= d) return c + "_" + d
            }
        },
        bx = function() {
            var a = kc("google_tag_data", {}),
                b = a.slq && a.slq[L.C] && a.slq[L.C].q;
            if (Ka(b)) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    Vc(d) && Qw(d)
                }
                b.length = 0;
                b.push = function() {
                    for (var e = 0; e < arguments.length; e++) {
                        var f = arguments[e];
                        Vc(f) && Qw(f)
                    }
                    return 0
                }
            }
        },
        Zw = {
            aid: R.g.gk,
            aiid: R.g.hk,
            an: R.g.ik,
            av: R.g.jk,
            cc: R.g.Mc,
            cd: R.g.pf,
            ci: R.g.Nc,
            cid: R.g.eb,
            ck: R.g.Sc,
            cm: R.g.Oc,
            cn: R.g.Pc,
            cs: R.g.Rc,
            cu: R.g.sa,
            dh: R.g.lf,
            dl: R.g.ia,
            dp: R.g.Pb,
            dr: R.g.Fa,
            dt: R.g.Bb,
            exd: R.g.mk,
            exf: R.g.nk,
            sf: R.g.rk,
            sr: R.g.Cb,
            uid: R.g.Aa,
            ul: R.g.ya,
            utv: R.g.qk
        },
        Jw = {
            col: R.g.Gd,
            cos: R.g.bf,
            pal: R.g.Vc,
            ta: R.g.ng,
            tcc: R.g.og,
            ti: R.g.na,
            ts: R.g.Wc,
            tt: R.g.df
        },
        Rw = {
            add: R.g.Yb,
            checkout: R.g.Kb,
            checkout_option: R.g.Gd,
            click: R.g.ac,
            detail: R.g.Ha,
            purchase: R.g.Ca,
            refund: R.g.bc,
            remove: R.g.Zb
        },
        Tw = {
            cr: "creative_name",
            id: "promotion_id",
            nm: "promotion_name",
            ps: "creative_slot"
        },
        Vw = {
            br: "item_brand",
            ca: "item_category",
            cc: "coupon",
            id: "item_id",
            nm: "item_name",
            pr: "price",
            ps: "index",
            qt: "quantity",
            va: "item_variant"
        },
        Iw = {
            ea: 1,
            ec: 1,
            el: 1,
            ev: 1,
            pa: 1,
            promoa: 1,
            t: 1,
            tr: 1,
            utc: 1,
            utl: 1,
            utt: 1
        },
        ax = /^(cd|cm)([1-9][0-9]{0,2})$/,
        $w = /^cg([1-5])$/,
        Sw = /^promo([1-9][0-9]{0,2})(id|cr|nm|ps)$/,
        Uw = /^pr([0-9]{0,3})([a-z]{2}[0-9]{0,3})$/,
        Xw = /^il([0-9]{0,3})pi([0-9]{0,3})([a-z]{2}[0-9]{0,3})$/,
        Lw = /^il([1-9][0-9]{0,2})nm$/;
    var We = {};
    We.xf = new String("undefined");
    var cx = function(a) {
        this.h = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === We.xf ? b : a[d]);
            return c.join("")
        }
    };
    cx.prototype.toString = function() {
        return this.h("undefined")
    };
    cx.prototype.valueOf = cx.prototype.toString;
    We.Gk = cx;
    We.Wg = {};
    We.Ok = function(a) {
        return new cx(a)
    };
    var dx = {};
    We.Yl = function(a, b) {
        var c = fi();
        dx[c] = [a, b];
        return c
    };
    We.qj = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = dx[c];
            if (d && "function" === typeof d[b]) d[b]();
            dx[c] = void 0
        }
    };
    We.yl = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    We.Ul = function(a) {
        if (a === We.xf) return a;
        var b = fi();
        We.Wg[b] = a;
        return 'google_tag_manager["' + L.C + '"].macro(' + b + ")"
    };
    We.Ll = function(a, b, c) {
        a instanceof We.Gk && (a = a.h(We.Yl(b, c)), b = Fa);
        return {
            rl: a,
            P: b
        }
    };
    var ex = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Bc(a, "className"),
                "gtm.elementId": a["for"] || wc(a, "id") || "",
                "gtm.elementTarget": a.formTarget || Bc(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Bc(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        fx = function(a) {
            Mh.hasOwnProperty("autoEventsSettings") || (Mh.autoEventsSettings = {});
            var b = Mh.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        gx = function(a, b, c) {
            fx(a)[b] = c
        },
        hx = function(a, b, c, d) {
            var e = fx(a),
                f = Xa(e, b, d);
            e[b] = c(f)
        },
        ix = function(a, b, c) {
            var d = fx(a);
            return Xa(d, b, c)
        },
        jx = function(a) {
            return "string" === typeof a ? a : String(fi())
        };
    var kx = ["input", "select", "textarea"],
        lx = ["button", "hidden", "image", "reset", "submit"],
        mx = function(a) {
            var b = a.tagName.toLowerCase();
            return 0 > kx.indexOf(b) || "input" === b && 0 <= lx.indexOf(a.type.toLowerCase()) ? !1 : !0
        },
        nx = function(a) {
            return a.form ? a.form.tagName ? a.form : H.getElementById(a.form) : zc(a, ["form"], 100)
        },
        ox = function(a, b, c) {
            if (!a.elements) return 0;
            for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
                var g = a.elements[e];
                if (mx(g)) {
                    if (g.dataset[c] === d) return f;
                    f++
                }
            }
            return 0
        };
    var px = !!z.MutationObserver,
        qx = void 0,
        rx = function(a) {
            if (!qx) {
                var b = function() {
                    var c = H.body;
                    if (c)
                        if (px)(new MutationObserver(function() {
                            for (var e = 0; e < qx.length; e++) I(qx[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            uc(c, "DOMNodeInserted", function() {
                                d || (d = !0, I(function() {
                                    d = !1;
                                    for (var e = 0; e < qx.length; e++) I(qx[e])
                                }))
                            })
                        }
                };
                qx = [];
                H.body ? b() : I(b)
            }
            qx.push(a)
        };
    var Cx = function(a, b, c) {
        function d() {
            var g = a();
            f += e ? (Va() - e) * g.playbackRate / 1E3 : 0;
            e = Va()
        }
        var e = 0,
            f = 0;
        return {
            createEvent: function(g, h, l) {
                var n = a(),
                    p = n.lh,
                    q = void 0 !== l ? Math.round(l) : void 0 !== h ? Math.round(n.lh * h) : Math.round(n.rj),
                    r = void 0 !== h ? Math.round(100 * h) : 0 >= p ? 0 : Math.round(q / p * 100),
                    t = H.hidden ? !1 : .5 <= Si(c);
                d();
                var u = void 0;
                void 0 !== b && (u = [b]);
                var v = ex(c, "gtm.video", u);
                v["gtm.videoProvider"] = "youtube";
                v["gtm.videoStatus"] = g;
                v["gtm.videoUrl"] = n.url;
                v["gtm.videoTitle"] = n.title;
                v["gtm.videoDuration"] =
                    Math.round(p);
                v["gtm.videoCurrentTime"] = Math.round(q);
                v["gtm.videoElapsedTime"] = Math.round(f);
                v["gtm.videoPercent"] = r;
                v["gtm.videoVisible"] = t;
                return v
            },
            Hj: function() {
                e = Va()
            },
            gd: function() {
                d()
            }
        }
    };
    var Dx = z.clearTimeout,
        Ex = z.setTimeout,
        Fx = function(a, b, c, d) {
            if (Fl()) {
                b && I(b)
            } else return qc(a, b, c, d)
        },
        Gx = function() {
            return new Date
        },
        Hx = function() {
            return z.location.href
        },
        Ix = function(a) {
            return dj(fj(a), "fragment")
        },
        Jx = function(a) {
            return ej(fj(a))
        },
        Kx = function(a, b) {
            return li(a, b || 2)
        },
        Lx = function(a, b, c) {
            return b ? ww(a, b, c) : vw(a)
        },
        Mx = function(a, b) {
            z[a] = b
        },
        X = function(a, b, c) {
            b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        Nx = function(a, b, c) {
            return ml(a, b, void 0 === c ? !0 : !!c)
        },
        Ox = function(a, b, c) {
            return 0 === vl(a, b, c)
        },
        Px = function(a, b) {
            if (Fl()) {
                b && I(b)
            } else sc(a, b)
        },
        Qx = function(a) {
            return !!ix(a, "init", !1)
        },
        Rx = function(a) {
            gx(a, "init", !0)
        },
        Sx = function(a, b, c) {
            Zc(a) || nu(c, b, a)
        };
    var Tx = We.Ll;

    function py(a, b) {
        function c(g) {
            var h = fj(g),
                l = dj(h, "protocol"),
                n = dj(h, "host", !0),
                p = dj(h, "port"),
                q = dj(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" === l && "80" === p || "https" === l && "443" === p) l = "web", p = "default";
            return [l, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function qy(a) {
        return ry(a) ? 1 : 0
    }

    function ry(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = K(a, {});
                K({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (qy(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return Sf(b, c);
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < Of.length; g++) {
                            var h = Of[g];
                            if (b[h]) {
                                f = b[h](c);
                                break a
                            }
                        }
                    } catch (l) {}
                    f = !1
                }
                return f;
            case "_ew":
                return Pf(b, c);
            case "_eq":
                return Tf(b, c);
            case "_ge":
                return Uf(b, c);
            case "_gt":
                return Wf(b, c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Vf(b, c);
            case "_lt":
                return Xf(b, c);
            case "_re":
                return Rf(b, c, a.ignore_case);
            case "_sw":
                return Yf(b, c);
            case "_um":
                return py(b, c)
        }
        return !1
    };

    function sy() {
        var a = ["&cv=408", "&rv=" + Lh.Xg, "&tc=" + Re.filter(function(b) {
            return b
        }).length];
        Lh.ke && a.push("&x=" + Lh.ke);
        return a.join("")
    };

    function ty() {
        function a(c, d) {
            var e = Ab(d);
            e && b.push(c + "=" + e)
        }
        var b = [];
        a("&u", "GTM");
        a("&ut", "TAGGING");
        a("&h", "HEALTH");
        return b.join("")
    };

    function uy(a, b) {
        var c = this;
    }
    uy.M = "addConsentListener";
    var vy;
    var wy = function(a) {
        for (var b = 0; b < a.length; ++b)
            if (vy) try {
                a[b]()
            } catch (c) {
                P(77)
            } else a[b]()
    };

    function xy(a, b, c) {
        var d = this,
            e;
        return e
    }
    xy.I = "internal.addDataLayerEventListener";

    function yy(a, b, c) {}
    yy.M = "addDocumentEventListener";

    function zy(a, b, c, d) {}
    zy.M = "addElementEventListener";

    function Ay(a) {}
    Ay.M = "addEventCallback";

    function Ey(a) {}
    Ey.I = "internal.addFormAbandonmentListener";

    function Fy(a, b, c, d) {}
    Fy.I = "internal.addFormData";
    var Gy = {},
        Hy = [],
        Iy = {},
        Jy = 0,
        Ky = 0;

    function Ry(a, b) {}
    Ry.I = "internal.addFormInteractionListener";

    function Yy(a, b) {}
    Yy.I = "internal.addFormSubmitListener";

    function cz(a) {}
    cz.I = "internal.addGaSendListener";
    var dz = {},
        ez = [];
    var lz = function(a, b) {};
    lz.I = "internal.addHistoryChangeListener";

    function mz(a, b, c) {}
    mz.M = "addWindowEventListener";

    function nz(a, b) {
        return !0
    }
    nz.M = "aliasInWindow";

    function oz(a, b, c) {}
    oz.I = "internal.appendRemoteConfigParameter";

    function pz() {
        var a = 2;
        return a
    };

    function qz(a, b) {
        var c;
        M(F(this), ["path:!string"], [a]);
        N(this, "access_globals", "execute", a);
        for (var d = a.split("."), e = z, f = e[d[0]], g = 1; f && g < d.length; g++)
            if (e = f, f = f[d[g]], e === z || e === H) return;
        if ("function" !== Tc(f)) return;
        for (var h = pz(), l = [], n = 1; n < arguments.length; n++) l.push(Xc(arguments[n], this.h, h));
        var p = (0, this.h.K)(f, e, l);
        c = Wc(p, this.h, h);
        void 0 === c && void 0 !== p && P(45);
        return c
    }
    qz.M = "callInWindow";

    function rz(a) {
        M(F(this), ["fn:!Fn"], arguments);
        var b = this.h;
        I(function() {
            a instanceof hb && a.m(b)
        });
    }
    rz.M = "callLater";

    function sz(a) {}
    sz.I = "callOnDomReady";

    function tz(a) {}
    tz.I = "callOnWindowLoad";

    function uz(a) {
        var b;
        return b
    }
    uz.I = "internal.computeGtmParameter";

    function vz(a, b) {
        var c;
        M(F(this), ["key:!string", "dataLayerVersion:?number"], arguments), N(this, "read_data_layer", a), c = 2 !== (b || 2) ? li(a, 1) : ni(a, [z, H]);
        var d = Wc(c, this.h, pz());
        void 0 === d && void 0 !== c && P(45);
        return d
    }
    vz.M = "copyFromDataLayer";

    function wz(a) {
        var b;
        M(F(this), ["path:!string"], arguments);
        N(this, "access_globals", "read", a);
        var c = a.split("."),
            d = bb(c, [z, H]);
        if (!d) return;
        var e = d[c[c.length - 1]];
        b = Wc(e, this.h, pz());
        void 0 === b && void 0 !== e && P(45);
        return b
    }
    wz.M = "copyFromWindow";

    function xz(a, b) {
        var c;
        return c
    }
    xz.I = "internal.copyPreHit";

    function yz(a, b) {
        var c = null,
            d = pz();
        M(F(this), ["functionPath:!string", "arrayPath:!string"], arguments);
        N(this, "access_globals", "readwrite", a);
        N(this, "access_globals", "readwrite", b);
        var e = [z, H],
            f = a.split("."),
            g = bb(f, e),
            h = f[f.length - 1];
        if (void 0 === g) throw Error("Path " + a + " does not exist.");
        var l = g[h];
        if (l && !Ga(l)) return null;
        if (l) return Wc(l, this.h, d);
        var n;
        l = function() {
            if (!Ga(n.push)) throw Error("Object at " + b + " in window is not an array.");
            n.push.call(n, arguments)
        };
        g[h] = l;
        var p = b.split("."),
            q = bb(p, e),
            r = p[p.length - 1];
        if (void 0 === q) throw Error("Path " + p + " does not exist.");
        n = q[r];
        void 0 === n && (n = [], q[r] = n);
        c = function() {
            l.apply(l, Array.prototype.slice.call(arguments, 0))
        };
        return Wc(c, this.h, d)
    }
    yz.M = "createArgumentsQueue";

    function zz(a) {
        var b;
        M(F(this), ["path:!string"], arguments);
        N(this, "access_globals", "readwrite", a);
        var c = a.split("."),
            d = bb(c, [z, H]),
            e = c[c.length - 1];
        if (void 0 === d) throw Error("Path " + a + " does not exist.");
        var f = d[e];
        void 0 === f && (f = [], d[e] = f);
        b = function() {
            if (!Ga(f.push)) throw Error("Object at " + a + " in window is not an array.");
            f.push.apply(f, Array.prototype.slice.call(arguments, 0))
        };
        return Wc(b, this.h,
            pz())
    }
    zz.M = "createQueue";

    function Az(a, b) {
        var c = null;
        return c
    }
    Az.I = "internal.createRegex";

    function Bz(a) {
        if (!a) return {};
        var b = a.Uk;
        return qt(b.type, b.index, b.name)
    }

    function Cz(a) {
        return a ? {
            originatingEntity: Bz(a)
        } : {}
    };

    function Dz(a) {}
    Dz.I = "internal.declareConsentState";
    var Ez = {},
        Fz = [],
        Gz = {},
        Hz = 0,
        Iz = 0;

    function Oz(a, b) {
        var c = this;
        return b
    }
    Oz.I = "internal.enableAutoEventOnFormInteraction";

    function Tz(a, b) {
        var c = this;
        return b
    }
    Tz.I = "internal.enableAutoEventOnFormSubmit";

    function Yz() {
        var a = this;
    }
    Yz.I = "internal.enableAutoEventOnGaSend";
    var Zz = {},
        $z = [];

    function gA(a, b) {
        var c = this;
        return b
    }
    gA.I = "internal.enableAutoEventOnHistoryChange";

    function kA(a, b) {
        var c = this;
        return b
    }
    kA.I = "internal.enableAutoEventOnLinkClick";
    var lA, mA;

    function vA(a, b) {
        var c = this;
        return b
    }
    vA.I = "internal.enableAutoEventOnScroll";
    var ec = ea(["data-gtm-yt-inspected-"]),
        wA = ["www.youtube.com", "www.youtube-nocookie.com"],
        xA, yA = !1;

    function IA(a, b) {
        var c = this;
        return b
    }
    IA.I = "internal.enableAutoEventOnYouTubeActivity";
    var JA;

    function KA(a) {
        var b = !1;
        return b
    }
    KA.I = "internal.evaluateMatchingRules";

    function UA(a, b) {
        var c = !1;
        return c
    }
    UA.I = "internal.evaluatePredicates";
    var VA = function(a) {
        var b;
        return b
    };

    function WA(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        M(F(this), ["name:!string", "decode:?boolean"], arguments), N(this, "get_cookies", a), c = Wc(ml(a, void 0, !!b), this.h);
        return c
    }
    WA.M = "getCookieValues";

    function XA() {
        return Ei()
    }
    XA.I = "internal.getCountryCode";

    function YA() {
        var a = [];
        return Wc(a)
    }
    YA.I = "internal.getDestinationIds";

    function ZA(a) {
        var b = null;
        return b
    }
    ZA.M = "getElementById";
    var $A = {};
    $A.deferGaGamLink = V(129);
    $A.enableAddFormDataApi = V(127);
    $A.enableAdsConversionValidation = V(83);
    $A.enableAdsHistoryChangeEvents = V(36);
    $A.enableAutoPiiOnPhoneAndAddress = V(114);
    $A.enableCcdAutoRedaction = V(92);
    $A.enableCcdEventEditingAndCreation = V(26);
    $A.enableCcdPreAutoPiiDetection = V(49);
    $A.enableCcdUserData = V(16);
    $A.enableConsentDisclosureActivity = V(124);
    $A.enableDeferAllEnhancedMeasurement = V(126);
    $A.enableEesPagePath = V(43);
    $A.enableEuidAutoMode = V(37);
    $A.enableFormSkipValidation = V(116);
    $A.enableGa4OnoRemarketing = V(34);
    $A.enableRemoveFormDataApi = V(128);
    $A.includeQueryInEesPagePath = V(57);
    $A.pixieSetCorePlatformServices = V(105);
    $A.useEnableAutoEventOnFormApis = V(91);
    $A.autoPiiEligible = Ji();

    function aB() {
        return Wc($A)
    }
    aB.I = "internal.getFlags";

    function bB(a, b) {
        var c;
        return c
    }
    bB.I = "internal.getProductSettingsParameter";

    function cB(a, b) {
        var c;
        return c
    }
    cB.M = "getQueryParameters";

    function dB(a, b) {
        var c;
        return c
    }
    dB.M = "getReferrerQueryParameters";

    function eB(a) {
        var b = "";
        return b
    }
    eB.M = "getReferrerUrl";

    function fB() {
        return Fi()
    }
    fB.I = "internal.getRegionCode";

    function gB(a, b) {
        var c;
        return c
    }
    gB.I = "internal.getRemoteConfigParameter";

    function hB(a) {
        var b = "";
        M(F(this), ["component:?string"], arguments), N(this, "get_url", a), b = dj(fj(z.location.href), a);
        return b
    }
    hB.M = "getUrl";

    function iB() {
        N(this, "get_user_agent");
        return ic.userAgent
    }
    iB.M = "getUserAgent";

    function wB() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var xB = function() {
            var a = wB();
            a.hid = a.hid || Ma();
            return a.hid
        },
        yB = function(a, b) {
            var c = wB();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var VB = function() {
            var a = !0;
            Ym(7) && Ym(9) && Ym(10) || (a = !1);
            return a
        },
        WB = function() {
            var a = !0;
            Ym(3) && Ym(4) || (a = !1);
            return a
        };
    var wC = window,
        xC = document,
        yC = function(a) {
            var b = wC._gaUserPrefs;
            if (b && b.ioo && b.ioo() || xC.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === wC["ga-disable-" + a]) return !0;
            try {
                var c = wC.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = gl("AMP_TOKEN", String(xC.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return xC.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function EC(a) {
        m(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[R.g.Ra] || {};
        m(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var NC = function(a, b) {};

    function MC(a, b) {
        var c = function() {};
        return c
    }

    function OC(a, b, c) {};
    var PC = function(a, b) {
            var c;
            c = b ? [nr, or, qr, ar, er, sr, fr, rr, lr, br, vr, gr, pr, Zq, tr, Vq] : [qq, $q, Qq, cr, Rq, Sq, Tq, Uq, hr, ir, kr, mr, dr, jr, Yq, ur];
            for (var d = 0; d < c.length && (c[d](a), !a.isAborted); d++);
        },
        QC = function(a, b, c, d) {
            var e = new Ap(b, c, d);
            e.metadata.hit_type = a;
            e.metadata.speculative = !0;
            e.metadata.event_start_timestamp_ms = Va();
            e.metadata.speculative_in_message = d.eventMetadata.speculative;
            return e
        },
        RC = function(a) {
            var b = a.indexOf("/"),
                c = 3 <= b,
                d = a.substring(3, c ? b : a.length);
            return {
                id: a,
                prefix: "AW",
                ba: "AW-" + d,
                J: [d, c ?
                    a.substring(b + 1) : void 0
                ]
            }
        },
        SC = function(a, b, c, d) {
            function e() {
                for (var q = 0; q < g.length; q++) {
                    var r = g[q];
                    r.isAborted || (PC(g[q], !0), r.metadata.speculative || r.isAborted || As(r))
                }
            }
            var f = lp(a, d.isGtmEvent);
            V(120) || !f && d.isGtmEvent && (f = RC(a));
            if (f) {
                var g = [];
                if (d.eventMetadata.hit_type_override) {
                    var h = d.eventMetadata.hit_type_override;
                    Array.isArray(h) || (h = [h]);
                    for (var l = 0; l < h.length; l++) {
                        var n = QC(h[l], f, b, d);
                        n.metadata.speculative = !1;
                        g.push(n)
                    }
                } else b === R.g.la && g.push(QC("landing_page", f, b, d)), g.push(QC("conversion",
                    f, b, d)), g.push(QC("user_data_lead", f, b, d)), g.push(QC("user_data_web", f, b, d)), g.push(QC("remarketing", f, b, d));
                for (var p = 0; p < g.length; p++) PC(g[p], !1);
                el(function() {
                    for (var q = [], r = [], t = 0; t < g.length; t++) {
                        var u = g[t];
                        q.push(u.isAborted);
                        r.push(u.metadata.speculative)
                    }
                    e();
                    Ak(R.g.F) || dl(function(v) {
                        for (var w = v.consentEventId, x = v.consentPriorityId, y = 0; y < g.length; y++) {
                            var A = g[y];
                            A.metadata.consent_updated = !0;
                            A.metadata.speculative = r[y];
                            A.metadata.event_start_timestamp_ms = Va();
                            A.isAborted = q[y];
                            A.metadata.consent_event_id =
                                w;
                            A.metadata.consent_priority_id = x
                        }
                        e()
                    }, [R.g.F])
                }, [R.g.F])
            }
        };
    var GD = function(a, b) {
            if (!b.isGtmEvent) {
                var c = W(b, R.g.Pa),
                    d = W(b, R.g.ib),
                    e = W(b, c);
                if (void 0 === e) {
                    var f = void 0;
                    DD.hasOwnProperty(c) ? f = DD[c] : ED.hasOwnProperty(c) && (f = ED[c]);
                    1 === f && (f = FD(c));
                    k(f) ? Ct()(function() {
                        var g = Ct().getByName(a).get(f);
                        d(g)
                    }) : d(void 0)
                } else d(e)
            }
        },
        HD = function(a, b) {
            var c = a[R.g.Ob],
                d = b + ".",
                e = a[R.g.T] || "",
                f = void 0 === c ? !!a.use_anchor : "fragment" === c,
                g = !!a[R.g.Ab];
            e = String(e).replace(/\s+/g, "").split(",");
            var h = Ct();
            h(d + "require", "linker");
            h(d + "linker:autoLink", e, f, g)
        },
        LD = function(a,
            b, c) {
            if (Dk() && (!c.isGtmEvent || !ID[a])) {
                var d = !Ak(R.g.O),
                    e = function(f) {
                        var g, h, l = Ct(),
                            n = JD(b, "", c),
                            p, q = n.createOnlyFields._useUp;
                        if (c.isGtmEvent || KD(b, n.createOnlyFields)) {
                            c.isGtmEvent && (g = "gtm" + fi(), h = n.createOnlyFields, n.gtmTrackerName && (h.name = g));
                            l(function() {
                                var t = l.getByName(b);
                                t && (p = t.get("clientId"));
                                c.isGtmEvent || l.remove(b)
                            });
                            l("create", a, c.isGtmEvent ? h : n.createOnlyFields);
                            d && Ak(R.g.O) && (d = !1, l(function() {
                                var t = Ct().getByName(c.isGtmEvent ? g : b);
                                !t || t.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&sst.gcut"] = Ih[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&sst.gcut"] = Ih[f]), t.set(n.fieldsToSet), c.isGtmEvent ? t.send("pageview") : t.send("pageview", n.fieldsToSend))
                            }));
                            c.isGtmEvent && l(function() {
                                l.remove(g)
                            })
                        }
                    };
                dl(function() {
                    return e(R.g.O)
                }, R.g.O);
                dl(function() {
                        return e(R.g.F)
                    },
                    R.g.F);
                c.isGtmEvent && (ID[a] = !0)
            }
        },
        MD = function(a, b) {
            Is() && b && (a[R.g.Nb] = b)
        },
        VD = function(a, b, c) {
            function d() {
                var G = W(c, R.g.jc);
                h(function() {
                    if (!c.isGtmEvent && Vc(G)) {
                        var O = u.fieldsToSend,
                            Q = l().getByName(n),
                            da;
                        for (da in G)
                            if (G.hasOwnProperty(da) && /^(dimension|metric)\d+$/.test(da) && void 0 != G[da]) {
                                var aa = Q.get(FD(G[da]));
                                ND(O, da, aa)
                            }
                    }
                })
            }

            function e() {
                if (u.displayfeatures) {
                    var G = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: G
                    })
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                h = c.isGtmEvent ? Et(W(c, "gaFunctionName")) : Et();
            if (Ga(h)) {
                var l = Ct,
                    n;
                c.isGtmEvent ? n = W(c, "name") || W(c, "gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
                var p = function(G) {
                        var O = [].slice.call(arguments, 0);
                        O[0] = n ? n + "." + O[0] : "" + O[0];
                        h.apply(window, O)
                    },
                    q = function(G) {
                        var O = function(ma, ha) {
                                for (var ia = 0; ha && ia < ha.length; ia++) p(ma, ha[ia])
                            },
                            Q = c.isGtmEvent,
                            da = Q ? OD(u) : PD(b, c);
                        if (da) {
                            var aa = {};
                            MD(aa, G);
                            p("require", "ec", "ec.js", aa);
                            Q && da.ih && p("set", "&cu", da.ih);
                            var U = da.action;
                            if (Q || "impressions" === U)
                                if (O("ec:addImpression",
                                        da.xj), !Q) return;
                            if ("promo_click" === U || "promo_view" === U || Q && da.He) {
                                var S = da.He;
                                O("ec:addPromo", S);
                                if (S && 0 < S.length && "promo_click" === U) {
                                    Q ? p("ec:setAction", U, da.nb) : p("ec:setAction", U);
                                    return
                                }
                                if (!Q) return
                            }
                            "promo_view" !== U && "impressions" !== U && (O("ec:addProduct", da.Ec), p("ec:setAction", U, da.nb))
                        }
                    },
                    r = function(G) {
                        if (G) {
                            var O = {};
                            if (Vc(G))
                                for (var Q in QD) QD.hasOwnProperty(Q) && RD(QD[Q], Q, G[Q], O);
                            MD(O, x);
                            p("require", "linkid", O)
                        }
                    },
                    t = function() {
                        if (Fl()) {} else {
                            var G =
                                W(c, R.g.Ji);
                            G && (p("require", G, {
                                dataLayer: Lh.ka
                            }), p("require", "render"))
                        }
                    },
                    u = JD(n, b, c),
                    v = function(G, O, Q) {
                        Q && (O = "" + O);
                        u.fieldsToSend[G] = O
                    };
                !c.isGtmEvent && KD(n, u.createOnlyFields) && (h(function() {
                    l() && l().remove(n)
                }), SD[n] = !1);
                h("create", f, u.createOnlyFields);
                if (u.createOnlyFields[R.g.Nb] && !c.isGtmEvent) {
                    var w = Uh || Wh ? Hs(u.createOnlyFields[R.g.Nb], "/analytics.js") : void 0;
                    w && (g = w)
                }
                var x = c.isGtmEvent ? u.fieldsToSet[R.g.Nb] : u.createOnlyFields[R.g.Nb];
                if (x) {
                    var y = c.isGtmEvent ? u.fieldsToSet[R.g.Md] : u.createOnlyFields[R.g.Md];
                    y && !SD[n] && (SD[n] = !0, h(Ht(n, y)))
                }
                c.isGtmEvent ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), r(u.linkAttribution));
                var A = u[R.g.za];
                A && A[R.g.T] && HD(A, n);
                p("set", u.fieldsToSet);
                if (c.isGtmEvent) {
                    if (u.enableLinkId) {
                        var B = {};
                        MD(B, x);
                        p("require", "linkid", "linkid.js", B)
                    }
                    Dk() && LD(f, n, c)
                }
                if (b === R.g.fc)
                    if (c.isGtmEvent) {
                        e();
                        if (u.remarketingLists) {
                            var D = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", {
                                cookieName: D
                            })
                        }
                        q(x);
                        p("send", "pageview");
                        u.createOnlyFields._useUp && Ft(n +
                            ".")
                    } else t(), p("send", "pageview", u.fieldsToSend);
                else b === R.g.la ? (t(), zp(f, c), W(c, R.g.lb) && (ap(["aw", "dc"]), Ft(n + ".")), 0 != u.sendPageView && p("send", "pageview", u.fieldsToSend), LD(f, n, c)) : b === R.g.Ia ? GD(n, c) : "screen_view" === b ? p("send", "screenview", u.fieldsToSend) : "timing_complete" === b ? (u.fieldsToSend.hitType = "timing", v("timingCategory", u.eventCategory, !0), c.isGtmEvent ? v("timingVar", u.timingVar, !0) : v("timingVar", u.name, !0), v("timingValue", Qa(u.value)), void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0), p("send", u.fieldsToSend)) : "exception" === b ? p("send", "exception", u.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (u.fieldsToSend.hitType = "social", v("socialNetwork", u.socialNetwork, !0), v("socialAction", u.socialAction, !0), v("socialTarget", u.socialTarget, !0)) : ((c.isGtmEvent || TD[b]) && q(x), c.isGtmEvent && e(), u.fieldsToSend.hitType = "event", v("eventCategory", u.eventCategory, !0), v("eventAction", u.eventAction || b, !0), void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0), void 0 !== u.value &&
                    v("eventValue", Qa(u.value))), p("send", u.fieldsToSend));
                if (!UD && !c.isGtmEvent) {
                    UD = !0;
                    var E = function() {
                            c.W()
                        },
                        J = function() {
                            l().loaded || E()
                        };
                    Fl() ? I(J) : qc(g, J, E)
                }
            } else I(c.W)
        },
        WD = function(a, b, c, d) {
            el(function() {
                VD(a, b, d)
            }, [R.g.O, R.g.F])
        },
        YD = function(a) {
            function b(e) {
                function f(h, l) {
                    for (var n = 0; n < l.length; n++) {
                        var p = l[n];
                        if (e[p]) {
                            g[h] = e[p];
                            break
                        }
                    }
                }
                var g = K(e);
                f("id", ["id", "item_id", "promotion_id"]);
                f("name", ["name", "item_name", "promotion_name"]);
                f("brand", ["brand", "item_brand"]);
                f("variant", ["variant",
                    "item_variant"
                ]);
                f("list", ["list_name", "item_list_name"]);
                f("position", ["list_position", "creative_slot", "index"]);
                (function() {
                    if (e.category) g.category = e.category;
                    else {
                        for (var h = "", l = 0; l < XD.length; l++) void 0 !== e[XD[l]] && (h && (h += "/"), h += e[XD[l]]);
                        h && (g.category = h)
                    }
                })();
                f("listPosition", ["list_position"]);
                f("creative", ["creative_name"]);
                f("list", ["list_name"]);
                f("position", ["list_position", "creative_slot"]);
                return g
            }
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && Vc(a[d]) && c.push(b(a[d]));
            return c.length ? c :
                void 0
        },
        ZD = function(a) {
            return Ak(a)
        },
        $D = !1;
    var UD, SD = {},
        ID = {},
        aE = {},
        bE = Object.freeze((aE.page_hostname = 1, aE[R.g.X] = 1, aE[R.g.vb] = 1, aE[R.g.Na] = 1, aE[R.g.Ea] = 1, aE[R.g.Oa] = 1, aE[R.g.ic] = 1, aE[R.g.Uc] = 1, aE[R.g.Ka] = 1, aE[R.g.hb] = 1, aE[R.g.ia] = 1, aE[R.g.Pb] = 1, aE[R.g.Fa] = 1, aE[R.g.Bb] = 1, aE)),
        cE = {},
        DD = Object.freeze((cE.client_storage = "storage", cE.sample_rate = 1, cE.site_speed_sample_rate = 1, cE.store_gac = 1, cE.use_amp_client_id =
            1, cE[R.g.eb] = 1, cE[R.g.xa] = "storeGac", cE[R.g.Na] = 1, cE[R.g.Ea] = 1, cE[R.g.Oa] = 1, cE[R.g.ic] = 1, cE[R.g.Uc] = 1, cE[R.g.hb] = 1, cE)),
        dE = {},
        eE = Object.freeze((dE._cs = 1, dE._useUp = 1, dE.allowAnchor = 1, dE.allowLinker = 1, dE.alwaysSendReferrer = 1, dE.clientId = 1, dE.cookieDomain = 1, dE.cookieExpires = 1, dE.cookieFlags = 1, dE.cookieName = 1, dE.cookiePath = 1, dE.cookieUpdate = 1, dE.legacyCookieDomain = 1, dE.legacyHistoryImport = 1, dE.name = 1, dE.sampleRate = 1, dE.siteSpeedSampleRate = 1, dE.storage = 1, dE.storeGac = 1, dE.useAmpClientId = 1, dE._cd2l = 1, dE)),
        fE = Object.freeze({
            anonymize_ip: 1
        }),
        gE = {},
        ED = Object.freeze((gE.campaign = {
                content: "campaignContent",
                id: "campaignId",
                medium: "campaignMedium",
                name: "campaignName",
                source: "campaignSource",
                term: "campaignKeyword"
            }, gE.app_id = 1, gE.app_installer_id = 1, gE.app_name = 1, gE.app_version = 1, gE.description = "exDescription", gE.fatal = "exFatal", gE.language = 1, gE.page_hostname = "hostname", gE.transport_type = "transport", gE[R.g.sa] = "currencyCode", gE[R.g.Dg] = 1, gE[R.g.ia] = "location", gE[R.g.Pb] = "page", gE[R.g.Fa] = "referrer", gE[R.g.Bb] =
            "title", gE[R.g.pf] = 1, gE[R.g.Aa] = 1, gE)),
        hE = {},
        iE = Object.freeze((hE.content_id = 1, hE.event_action = 1, hE.event_category = 1, hE.event_label = 1, hE.link_attribution = 1, hE.name = 1, hE[R.g.za] = 1, hE[R.g.Cg] = 1, hE[R.g.Qa] = 1, hE[R.g.da] = 1, hE)),
        jE = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        XD = Object.freeze(["item_category",
            "item_category2", "item_category3", "item_category4", "item_category5"
        ]),
        kE = {},
        QD = Object.freeze((kE.levels = 1, kE[R.g.Ea] = "duration", kE[R.g.ic] = 1, kE)),
        lE = {},
        mE = Object.freeze((lE.anonymize_ip = 1, lE.fatal = 1, lE.send_page_view = 1, lE.store_gac = 1, lE.use_amp_client_id = 1, lE[R.g.xa] = 1, lE[R.g.Dg] = 1, lE)),
        RD = function(a, b, c, d) {
            if (void 0 !== c)
                if (mE[b] && (c = Ra(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[FD(b)] = c;
                else if (k(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        FD = function(a) {
            return a &&
                k(a) ? a.replace(/(_[a-z])/g, function(b) {
                    return b[1].toUpperCase()
                }) : a
        },
        nE = {},
        TD = Object.freeze((nE.checkout_progress = 1, nE.select_content = 1, nE.set_checkout_option = 1, nE[R.g.Yb] = 1, nE[R.g.Zb] = 1, nE[R.g.Kb] = 1, nE[R.g.ac] = 1, nE[R.g.ab] = 1, nE[R.g.tb] = 1, nE[R.g.cb] = 1, nE[R.g.Ca] = 1, nE[R.g.bc] = 1, nE[R.g.Ha] = 1, nE)),
        oE = {},
        pE = Object.freeze((oE.checkout_progress = 1, oE.set_checkout_option = 1, oE[R.g.hg] = 1, oE[R.g.ig] = 1, oE[R.g.Yb] = 1, oE[R.g.Zb] = 1, oE[R.g.jg] = 1, oE[R.g.Kb] = 1, oE[R.g.Ca] = 1, oE[R.g.bc] = 1, oE[R.g.kg] = 1, oE)),
        qE = {},
        rE = Object.freeze((qE.generate_lead =
            1, qE.login = 1, qE.search = 1, qE.select_content = 1, qE.share = 1, qE.sign_up = 1, qE.view_search_results = 1, qE[R.g.ac] = 1, qE[R.g.ab] = 1, qE[R.g.tb] = 1, qE[R.g.cb] = 1, qE[R.g.Ha] = 1, qE)),
        sE = function(a) {
            var b = "general";
            pE[a] ? b = "ecommerce" : rE[a] ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        tE = {},
        uE = Object.freeze((tE.view_search_results = 1, tE[R.g.ab] = 1, tE[R.g.cb] = 1, tE[R.g.Ha] = 1, tE)),
        ND = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        vE = function(a) {
            if (Ka(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e =
                            d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        JD = function(a, b, c) {
            var d = function(Q) {
                    return W(c, Q)
                },
                e = {},
                f = {},
                g = {},
                h = {},
                l = vE(d(R.g.Ci));
            !c.isGtmEvent && l && ND(f, "exp", l);
            g["&gtm"] = Ul(!0);
            c.isGtmEvent || (g._no_slc = !0);
            Dk() && (h._cs = ZD);
            var n = d(R.g.jc);
            if (!c.isGtmEvent && Vc(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                        var q = d(String(n[p]));
                        void 0 !== q && ND(f, p, q)
                    }
            for (var r = !c.isGtmEvent, t = Zp(c), u = 0; u <
                t.length; ++u) {
                var v = t[u];
                if (c.isGtmEvent) {
                    var w = d(v);
                    jE.hasOwnProperty(v) ? e[v] = w : eE.hasOwnProperty(v) ? h[v] = w : g[v] = w
                } else {
                    var x = void 0;
                    x = v !== R.g.aa ? d(v) : $p(c, v);
                    if (iE.hasOwnProperty(v)) RD(iE[v], v, x, e);
                    else if (fE.hasOwnProperty(v)) RD(fE[v], v, x, g);
                    else if (ED.hasOwnProperty(v)) RD(ED[v], v, x, f);
                    else if (DD.hasOwnProperty(v)) RD(DD[v], v, x, h);
                    else if (/^(dimension|metric|content_group)\d+$/.test(v)) RD(1, v, x, f);
                    else if (v === R.g.aa) {
                        if (!$D) {
                            var y = fb(x);
                            y && (f["&did"] = y)
                        }
                        var A = void 0,
                            B = void 0;
                        b === R.g.la ? A = fb($p(c,
                            v), ".") : (A = fb($p(c, v, 1), "."), B = fb($p(c, v, 2), "."));
                        A && (f["&gdid"] = A);
                        B && (f["&edid"] = B)
                    } else v === R.g.Ka && 0 > t.indexOf(R.g.ic) && (h.cookieName = x + "_ga");
                    V(96) && bE[v] && (c.m.hasOwnProperty(v) || b === R.g.la && c.h.hasOwnProperty(v)) && (r = !1)
                }
            }
            V(96) && r && (f["&jsscut"] = "1");
            !1 !== d(R.g.Ye) && !1 !== d(R.g.vb) && VB() || (g.allowAdFeatures = !1);
            !1 !== d(R.g.X) && WB() || (g.allowAdPersonalizationSignals = !1);
            !c.isGtmEvent && d(R.g.lb) && (h._useUp = !0);
            if (c.isGtmEvent) {
                h.name = h.name || e.gtmTrackerName;
                var D = g.hitCallback;
                g.hitCallback = function() {
                    Ga(D) &&
                        D();
                    c.P()
                }
            } else {
                ND(h, "cookieDomain", "auto");
                ND(g, "forceSSL", !0);
                ND(e, "eventCategory", sE(b));
                uE[b] && ND(f, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? ND(e, "eventLabel", d(R.g.Cg)) : "search" === b || "view_search_results" === b ? ND(e, "eventLabel", d(R.g.Pi)) : "select_content" === b && ND(e, "eventLabel", d(R.g.xi));
                var E = e[R.g.za] || {},
                    J = E[R.g.qc];
                J || 0 != J && E[R.g.T] ? h.allowLinker = !0 : !1 === J && ND(h, "useAmpClientId", !1);
                f.hitCallback = c.P;
                h.name = a
            }
            Dk() && (g["&gcs"] = Wk(), V(106) && (g["&gcd"] = $k()), Ak(R.g.O) || (h.storage =
                "none"), Ak(R.g.F) || (g.allowAdFeatures = !1, h.storeGac = !1));
            V(109) && (bl() && (g["&dma_cps"] = al()), Hi() && (g["&dma"] = "1"));
            var G = Js(c) || d(R.g.Nb),
                O = d(R.g.Md);
            G && (c.isGtmEvent || (h[R.g.Nb] = G), h._cd2l = !0);
            O && !c.isGtmEvent && (h[R.g.Md] = O);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = h;
            return e
        },
        OD = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.ih = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.xj = "impressions" === b.translateIfKeyEquals ?
                    YD(d) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.He = "promoView" === b.translateIfKeyEquals ? YD(e) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.He = "promoClick" === b.translateIfKeyEquals ? YD(f) : f;
                c.nb = b.promoClick.actionField;
                return c
            }
            for (var g in b)
                if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                    c.action = g;
                    var h = b[g].products;
                    c.Ec = "products" === b.translateIfKeyEquals ? YD(h) :
                        h;
                    c.nb = b[g].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        PD = function(a, b) {
            function c(u) {
                return {
                    id: d(R.g.na),
                    affiliation: d(R.g.ng),
                    revenue: d(R.g.da),
                    tax: d(R.g.df),
                    shipping: d(R.g.Wc),
                    coupon: d(R.g.og),
                    list: d(R.g.cf) || d(R.g.Vc) || u
                }
            }
            for (var d = function(u) {
                    return W(b, u)
                }, e = d(R.g.Z), f, g = 0; e && g < e.length && !(f = e[g][R.g.cf] || e[g][R.g.Vc]); g++);
            var h = d(R.g.jc);
            if (Vc(h))
                for (var l = 0; e && l < e.length; ++l) {
                    var n = e[l],
                        p;
                    for (p in h) h.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != h[p] && ND(n, p,
                        n[h[p]])
                }
            var q = null,
                r = d(R.g.Bi);
            if (a === R.g.Ca || a === R.g.bc) q = {
                action: a,
                nb: c(),
                Ec: YD(e)
            };
            else if (a === R.g.Yb) q = {
                action: "add",
                nb: c(),
                Ec: YD(e)
            };
            else if (a === R.g.Zb) q = {
                action: "remove",
                nb: c(),
                Ec: YD(e)
            };
            else if (a === R.g.Ha) q = {
                action: "detail",
                nb: c(f),
                Ec: YD(e)
            };
            else if (a === R.g.ab) q = {
                action: "impressions",
                xj: YD(e)
            };
            else if (a === R.g.cb) q = {
                action: "promo_view",
                He: YD(r) || YD(e)
            };
            else if ("select_content" === a && r && 0 < r.length || a === R.g.tb) q = {
                action: "promo_click",
                He: YD(r) || YD(e)
            };
            else if ("select_content" === a || a === R.g.ac) q = {
                action: "click",
                nb: {
                    list: d(R.g.cf) || d(R.g.Vc) || f
                },
                Ec: YD(e)
            };
            else if (a === R.g.Kb || "checkout_progress" === a) {
                var t = {
                    step: a === R.g.Kb ? 1 : d(R.g.bf),
                    option: d(R.g.Gd)
                };
                q = {
                    action: "checkout",
                    Ec: YD(e),
                    nb: K(c(), t)
                }
            } else "set_checkout_option" === a && (q = {
                action: "checkout_option",
                nb: {
                    step: d(R.g.bf),
                    option: d(R.g.Gd)
                }
            });
            q && (q.ih = d(R.g.sa));
            return q
        },
        wE = {},
        KD = function(a, b) {
            var c = wE[a];
            wE[a] = K(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };
    var xE = MC;
    var yE = function(a, b, c) {
        for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]))
    };

    function zE(a, b, c) {
        var d = this;
    }
    zE.I = "internal.gtagConfig";

    function AE() {
        var a = {};
        return a
    };

    function CE(a, b) {}
    CE.M = "gtagSet";

    function DE(a, b) {}
    DE.M = "injectHiddenIframe";
    var EE = {};
    var FE = function(a, b, c, d, e, f) {
        f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [
            [c],
            [d]
        ], qc(a, function() {
            for (var g = e[f][0], h = 0; h < g.length; h++) I(g[h]);
            g.push = function(l) {
                I(l);
                return 0
            }
        }, function() {
            for (var g = e[f][1], h = 0; h < g.length; h++) I(g[h]);
            e[f] = null
        }, b)) : qc(a, c, d, b)
    };

    function GE(a, b, c, d) {
        if (!Fl()) {
            M(F(this), ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"], arguments);
            N(this, "inject_script", a);
            var e = this.h;
            FE(a, void 0, function() {
                b && b.m(e)
            }, function() {
                c && c.m(e)
            }, EE, d)
        }
    }
    var HE = Object.freeze({
            dl: 1,
            id: 1
        }),
        IE = {};

    function JE(a, b, c, d) {}
    GE.M = "injectScript";
    JE.I = "internal.injectScript";

    function KE(a) {
        var b = !0;
        return b
    }
    KE.M = "isConsentGranted";
    var LE = function() {
        var a = Ig(function(b) {
            this.h.h.log("error", b)
        });
        a.M = "JSON";
        return a
    };
    var ME = function(a) {
        this.containerId = a
    };

    function NE(a, b) {
        var c = this,
            d = null;
        return d
    }
    NE.I = "internal.loadGoogleTag";
    var OE = function() {
            try {
                var a = z.localStorage;
                a.setItem("localstorage.test", "localstorage.test");
                a.removeItem("localstorage.test");
                return !0
            } catch (b) {}
            return !1
        },
        PE = {
            getItem: function(a) {
                var b = null;
                a = String(a), N(this, "access_local_storage", "read", a), b = z.localStorage.getItem(a);
                return b
            },
            setItem: function(a,
                b) {
                a = String(a);
                N(this, "access_local_storage", "write", a);
                try {
                    return z.localStorage.setItem(a, String(b)), !0
                } catch (c) {}
                return !1
            },
            removeItem: function(a) {
                a = String(a), N(this, "access_local_storage", "write", a), z.localStorage.removeItem(a);
            }
        };
    var QE = ["textContent", "value", "tagName", "children", "childElementCount"];

    function RE(a) {
        var b;
        N(this, "read_dom_elements", "css", "*");
        for (var c = 0; c < QE.length; c++) N(this, "access_dom_element_property", H.body, "read", QE[c]);
        var d = Xc(a) || {},
            e = Tj({
                zc: !!d.includeSelector,
                Ac: !!d.includeVisibility,
                jd: d.excludeElementSelectors,
                Wa: d.fieldFilters,
                Sh: !!d.selectMultipleElements
            });
        b = new lb;
        var f = new za;
        b.set("elements", f);
        for (var g = e.elements, h = 0; h < g.length; h++) f.push(SE(g[h]));
        void 0 !== e.Lh && b.set("preferredEmailElement",
            SE(e.Lh));
        b.set("status", e.status);
        return b
    }
    var SE = function(a) {
        var b = new lb;
        b.set("userData", a.U);
        b.set("tagName", a.tagName);
        void 0 !== a.querySelector && b.set("querySelector", a.querySelector);
        void 0 !== a.isVisible && b.set("isVisible", a.isVisible);
        if (V(114)) {} else switch (a.type) {
            case "1":
                b.set("type", "email")
        }
        return b
    };
    RE.I = "internal.locateUserData";

    function TE() {
        try {
            N(this, "logging")
        } catch (c) {
            return
        }
        if (!console) return;
        for (var a = Array.prototype.slice.call(arguments, 0), b = 0; b < a.length; b++) a[b] = Xc(a[b], this.h);
        console.log.apply(console, a);
    }
    TE.M = "logToConsole";

    function UE(a) {
        var b = void 0;
        return b
    }
    UE.M = "parseUrl";

    function VE(a) {}
    VE.I = "internal.processAsNewEvent";

    function WE(a, b) {
        var c = !1;
        return c
    }
    WE.M = "queryPermission";

    function XE() {
        var a = "";
        return a
    }
    XE.M = "readCharacterSet";

    function YE() {
        var a = "";
        return a
    }
    YE.M = "readTitle";

    function ZE(a, b) {
        var c = this;
    }
    ZE.I = "internal.registerCcdCallback";
    var $E = Object.freeze(["config", "event", "get", "set"]);

    function aF(a, b, c) {}
    aF.I = "internal.registerGtagCommandListener";

    function bF(a, b) {
        var c = !1;
        return c
    }
    bF.I = "internal.removeDataLayerEventListener";

    function cF(a, b) {}
    cF.I = "internal.removeFormData";

    function dF() {}
    dF.M = "resetDataLayer";

    function eF(a, b, c, d) {}
    eF.I = "internal.sendGtagEvent";

    function fF(a, b, c) {
        M(F(this), ["url:!string", "onSuccess:?Fn", "onFailure:?Fn"], arguments);
        N(this, "send_pixel", a);
        var d = this.h;
        tc(a, function() {
            b instanceof hb && b.m(d)
        }, function() {
            c instanceof hb && c.m(d)
        });
    }
    fF.M = "sendPixel";

    function gF(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    }
    gF.M = "setCookie";

    function hF(a, b) {}
    hF.M = "setCorePlatformServices";

    function iF(a) {}
    iF.M = "setDefaultConsentState";

    function jF(a, b) {}
    jF.I = "internal.setDelegatedConsentType";

    function kF(a, b, c) {
        M(F(this), ["path:!string", "value:?*", "overrideExisting:?boolean"], arguments);
        N(this, "access_globals", "readwrite", a);
        var d = a.split("."),
            e = bb(d, [z, H]),
            f = d.pop();
        if (e && (void 0 === e[f] || c)) return e[f] = Xc(b, this.h, pz()), !0;
        return !1
    }
    kF.M = "setInWindow";

    function lF(a, b, c) {}
    lF.I = "internal.setProductSettingsParameter";

    function mF(a, b, c) {}
    mF.I = "internal.setRemoteConfigParameter";

    function nF(a, b, c, d) {
        var e = this;
    }
    nF.M = "sha256";

    function oF(a, b, c) {}
    oF.I = "internal.sortRemoteConfigParameters";
    var pF = {},
        qF = {};
    pF.M = "templateStorage";
    pF.getItem = function(a) {
        var b = null;
        return b
    };
    pF.setItem = function(a, b) {};
    pF.removeItem = function(a) {};
    pF.clear = function() {};

    function rF(a, b) {
        var c = !1;
        return c
    }
    rF.I = "internal.testRegex";
    var sF = function(a) {
        var b;
        return b
    };

    function tF(a) {}
    tF.M = "updateConsentState";
    var uF = function() {
        var a = new Sg,
            b = function(d) {
                return Ug(a, d.I, d)
            },
            c = function(d) {
                return a.add(d.M, d)
            };
        c(uy);
        c(Ay);
        c(nz);
        c(qz);
        c(rz);
        c(vz);
        c(wz);
        c(yz);
        c(LE());
        c(zz);
        c(WA);
        c(cB);
        c(dB);
        c(eB);
        c(hB);
        c(CE);
        c(DE);
        c(GE);
        c(KE);
        c(TE);
        c(UE);
        c(WE);
        c(XE);
        c(YE);
        c(fF);
        c(gF);
        c(iF);
        c(kF);
        c(nF);
        c(pF);
        c(tF);
        a.add("Math", tg());
        a.add("Object", Qg);
        a.add("TestHelper", Vg());
        a.add("assertApi", pg);
        a.add("assertThat", qg);
        a.add("decodeUri", ug);
        a.add("decodeUriComponent", vg);
        a.add("encodeUri", wg);
        a.add("encodeUriComponent", xg);
        a.add("fail", Dg);
        a.add("generateRandom", Eg);
        a.add("getContainerVersion", Fg);
        a.add("getTimestamp", Gg);
        a.add("getTimestampMillis", Gg);
        a.add("getType", Hg);
        a.add("makeInteger", Jg);
        a.add("makeNumber", Kg);
        a.add("makeString", Lg);
        a.add("makeTableMap", Mg);
        a.add("mock", Pg);
        a.add("fromBase64", VA, !("atob" in z));
        a.add("localStorage", PE, !OE());
        a.add("toBase64", sF, !("btoa" in z));
        b(xy);
        b(Ry);
        b(Yy);
        b(cz);
        b(lz);
        b(oz);
        b(tz);
        b(xz);
        b(Az);
        b(Dz);
        b(Oz);
        b(Tz);
        b(Yz);
        b(gA);
        b(kA);
        b(vA);
        b(IA);
        b(yg);
        b(KA);
        b(XA);
        b(YA);
        b(aB);
        b(bB);
        b(fB);
        b(gB);
        b(zE);
        b(JE);
        b(NE);
        b(RE);
        b(VE);
        b(ZE);
        b(aF);
        b(bF);
        b(eF);
        b(jF);
        b(lF);
        b(mF);
        b(oF);
        b(rF);
        Ug(a, "internal.GtagSchema", AE());

        V(105) && c(hF);
        V(127) && b(Fy);
        V(128) && b(cF);
        return function(d) {
            var e;
            if (a.h.hasOwnProperty(d)) e = a.get(d, this);
            else {
                var f;
                if (f = a.m.hasOwnProperty(d)) {
                    var g = !1,
                        h = this.h.h;
                    if (h) {
                        var l = h.xe();
                        if (l) {
                            0 !== l.indexOf("__cvt_") && (g = !0);
                        }
                    } else g = !0;
                    f = g
                }
                if (f) {
                    var n = a.m.hasOwnProperty(d) ? a.m[d] : void 0;
                    e = n
                } else throw Error(d + " is not a valid API name.");
            }
            return e
        }
    };
    var vF = function() {
            return !1
        },
        wF = function() {
            var a = {};
            return function(b, c, d) {}
        };
    var xF;

    function yF() {
        var a = xF;
        return function(b, c, d) {
            var e = d && d.event;
            zF(c);
            var f = new lb;
            m(c, function(q, r) {
                var t = Wc(r);
                void 0 === t && void 0 !== r && P(44);
                f.set(q, t)
            });
            a.h.h.D = jf();
            var g = {
                mj: vf(b),
                eventId: void 0 !== e ? e.id : void 0,
                priorityId: void 0 !== e ? e.priorityId : void 0,
                Ff: void 0 !== e ? function(q) {
                    return e.Vb.Ff(q)
                } : void 0,
                xe: function() {
                    return b
                },
                log: function() {},
                Uk: {
                    index: d && d.index,
                    type: d && d.type,
                    name: d && d.name
                },
                bm: c.reportPermissionFailure
            };
            if (vF()) {
                var h = wF(),
                    l = void 0,
                    n = void 0;
                g.Ya = {
                    Uh: [],
                    oe: {},
                    ob: function(q, r,
                        t) {
                        1 === r && (l = q);
                        7 === r && (n = t);
                        h(q, r, t)
                    },
                    Eh: Ng()
                };
                g.log = function(q, r) {
                    if (l) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        h(l, 4, {
                            level: q,
                            source: n,
                            message: t
                        })
                    }
                }
            }
            var p = ne(a, g, [b, f]);
            a.h.h.D = void 0;
            p instanceof ua && "return" === p.h && (p = p.m);
            return Xc(p)
        }
    }

    function zF(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Ga(b) && (a.gtmOnSuccess = function() {
            I(b)
        });
        Ga(c) && (a.gtmOnFailure = function() {
            I(c)
        })
    }

    function AF() {
        xF.h.h.K = function(a, b, c) {
            Mh.SANDBOXED_JS_SEMAPHORE = Mh.SANDBOXED_JS_SEMAPHORE || 0;
            Mh.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                Mh.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function BF(a) {
        void 0 !== a && m(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                di[e] = di[e] || [];
                di[e].push(b)
            }
        })
    };
    var CF = encodeURI,
        Y = encodeURIComponent,
        FF = function(a, b, c) {
            tc(a, b, c)
        },
        PF = function(a, b) {
            if (!a) return !1;
            var c = dj(fj(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        QF = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) &&
                a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Z = {
        o: {}
    };

    Z.o.sdl = ["google"],
        function() {
            function a() {
                return !!(Object.keys(l("horiz.pix")).length || Object.keys(l("horiz.pct")).length || Object.keys(l("vert.pix")).length || Object.keys(l("vert.pct")).length)
            }

            function b(y) {
                for (var A = [], B = y.split(","), D = 0; D < B.length; D++) {
                    var E = Number(B[D]);
                    if (isNaN(E)) return [];
                    p.test(B[D]) || A.push(E)
                }
                return A
            }

            function c() {
                var y = 0,
                    A = 0;
                return function() {
                    var B = Ri(),
                        D = B.height;
                    y = Math.max(v.scrollLeft + B.width, y);
                    A = Math.max(v.scrollTop + D, A);
                    return {
                        jh: y,
                        kh: A
                    }
                }
            }

            function d() {
                t = X("self");
                u = t.document;
                v = u.scrollingElement || u.body && u.body.parentNode;
                x = c()
            }

            function e(y, A, B, D) {
                var E = l(A),
                    J = {},
                    G;
                for (G in E) {
                    J.Lc = G;
                    if (E.hasOwnProperty(J.Lc)) {
                        var O = Number(J.Lc);
                        y < O || (Lx({
                            event: "gtm.scrollDepth",
                            "gtm.scrollThreshold": O,
                            "gtm.scrollUnits": B.toLowerCase(),
                            "gtm.scrollDirection": D,
                            "gtm.triggers": E[J.Lc].join(",")
                        }), hx("sdl", A, function(Q) {
                            return function(da) {
                                delete da[Q.Lc];
                                return da
                            }
                        }(J), {}))
                    }
                    J = {
                        Lc: J.Lc
                    }
                }
            }

            function f() {
                var y = x(),
                    A = y.jh,
                    B = y.kh,
                    D = A / v.scrollWidth * 100,
                    E = B / v.scrollHeight * 100;
                e(A, "horiz.pix",
                    q.Bf, r.Ui);
                e(D, "horiz.pct", q.Af, r.Ui);
                e(B, "vert.pix", q.Bf, r.jj);
                e(E, "vert.pct", q.Af, r.jj);
                gx("sdl", "pending", !1)
            }

            function g() {
                var y = 250,
                    A = !1;
                u.scrollingElement && u.documentElement && t.addEventListener && (y = 50, A = !0);
                var B = 0,
                    D = !1,
                    E = function() {
                        D ? B = Ex(E, y) : (B = 0, f(), Qx("sdl") && !a() && (vc(t, "scroll", J), vc(t, "resize", J), gx("sdl", "init", !1)));
                        D = !1
                    },
                    J = function() {
                        A && x();
                        B ? D = !0 : (B = Ex(E, y), gx("sdl", "pending", !0))
                    };
                return J
            }

            function h(y, A, B) {
                if (A) {
                    var D = b(String(y));
                    hx("sdl", B, function(E) {
                        for (var J = 0; J < D.length; J++) {
                            var G =
                                String(D[J]);
                            E.hasOwnProperty(G) || (E[G] = []);
                            E[G].push(A)
                        }
                        return E
                    }, {})
                }
            }

            function l(y) {
                return ix("sdl", y, {})
            }

            function n(y) {
                I(y.vtp_gtmOnSuccess);
                var A = y.vtp_uniqueTriggerId,
                    B = y.vtp_horizontalThresholdsPixels,
                    D = y.vtp_horizontalThresholdsPercent,
                    E = y.vtp_verticalThresholdUnits,
                    J = y.vtp_verticalThresholdsPixels,
                    G = y.vtp_verticalThresholdsPercent;
                switch (y.vtp_horizontalThresholdUnits) {
                    case q.Bf:
                        h(B, A, "horiz.pix");
                        break;
                    case q.Af:
                        h(D, A, "horiz.pct")
                }
                switch (E) {
                    case q.Bf:
                        h(J, A, "vert.pix");
                        break;
                    case q.Af:
                        h(G,
                            A, "vert.pct")
                }
                Qx("sdl") ? ix("sdl", "pending") || (w || (d(), w = !0), I(function() {
                    return f()
                })) : (d(), w = !0, v && (Rx("sdl"), gx("sdl", "pending", !0), I(function() {
                    f();
                    if (a()) {
                        var O = g();
                        uc(t, "scroll", O);
                        uc(t, "resize", O)
                    } else gx("sdl", "init", !1)
                })))
            }
            var p = /^\s*$/,
                q = {
                    Af: "PERCENT",
                    Bf: "PIXELS"
                },
                r = {
                    jj: "vertical",
                    Ui: "horizontal"
                },
                t, u, v, w = !1,
                x;
            (function(y) {
                Z.__sdl = y;
                Z.__sdl.s = "sdl";
                Z.__sdl.isVendorTemplate = !0;
                Z.__sdl.priorityOverride = 0;
                Z.__sdl.isInfrastructure = !1
            })(function(y) {
                y.vtp_triggerStartOption ? n(y) : Xv(function() {
                    n(y)
                })
            })
        }();

    Z.o.jsm = ["customScripts"],
        function() {
            (function(a) {
                Z.__jsm = a;
                Z.__jsm.s = "jsm";
                Z.__jsm.isVendorTemplate = !0;
                Z.__jsm.priorityOverride = 0;
                Z.__jsm.isInfrastructure = !1
            })(function(a) {
                if (void 0 !== a.vtp_javascript) {
                    var b = a.vtp_javascript;
                    try {
                        var c = X("google_tag_manager");
                        var d = c && c.e && c.e(b);
                        Sx(d, "jsm", a.vtp_gtmEventId);
                        return d
                    } catch (e) {}
                }
            })
        }();
    Z.o.c = ["google"],
        function() {
            (function(a) {
                Z.__c = a;
                Z.__c.s = "c";
                Z.__c.isVendorTemplate = !0;
                Z.__c.priorityOverride = 0;
                Z.__c.isInfrastructure = !1
            })(function(a) {
                Sx(a.vtp_value, "c", a.vtp_gtmEventId);
                return a.vtp_value
            })
        }();
    Z.o.d = ["google"],
        function() {
            (function(a) {
                Z.__d = a;
                Z.__d.s = "d";
                Z.__d.isVendorTemplate = !0;
                Z.__d.priorityOverride = 0;
                Z.__d.isInfrastructure = !1
            })(function(a) {
                var b = null,
                    c = null,
                    d = a.vtp_attributeName;
                if ("CSS" == a.vtp_selectorType) try {
                    var e = Xg(a.vtp_elementSelector);
                    e && 0 < e.length && (b = e[0])
                } catch (f) {
                    b = null
                } else b = H.getElementById(a.vtp_elementId);
                b && (d ? c = function() {
                    if (b instanceof HTMLInputElement) {
                        var f = b;
                        if ("value" === d) return f.value;
                        if ("checked" === d && ("radio" === f.type || "checkbox" === f.type)) return f.checked
                    }
                    return wc(b,
                        d)
                }() : c = xc(b));
                return Ta(String(b && c))
            })
        }();
    Z.o.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.s = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
                Z.__e.isInfrastructure = !1
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Z.o.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.s = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0;
                Z.__f.isInfrastructure = !1
            })(function(a) {
                var b = Kx("gtm.referrer", 1) || H.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? dj(fj(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Jx(String(b)) : String(b)
            })
        }();
    Z.o.cl = ["google"],
        function() {
            function a(b) {
                var c = b.target;
                if (c) {
                    var d = ex(c, "gtm.click");
                    Lx(d)
                }
            }(function(b) {
                Z.__cl = b;
                Z.__cl.s = "cl";
                Z.__cl.isVendorTemplate = !0;
                Z.__cl.priorityOverride = 0;
                Z.__cl.isInfrastructure = !1
            })(function(b) {
                if (!Qx("cl")) {
                    var c = X("document");
                    uc(c, "click", a, !0);
                    Rx("cl")
                }
                I(b.vtp_gtmOnSuccess)
            })
        }();
    Z.o.k = ["google"],
        function() {
            (function(a) {
                Z.__k = a;
                Z.__k.s = "k";
                Z.__k.isVendorTemplate = !0;
                Z.__k.priorityOverride = 0;
                Z.__k.isInfrastructure = !1
            })(function(a) {
                return Nx(a.vtp_name, Kx("gtm.cookie", 1), !!a.vtp_decodeCookie)[0]
            })
        }();
    Z.o.access_globals = ["google"],
        function() {
            function a(b, c, d) {
                var e = {
                    key: d,
                    read: !1,
                    write: !1,
                    execute: !1
                };
                switch (c) {
                    case "read":
                        e.read = !0;
                        break;
                    case "write":
                        e.write = !0;
                        break;
                    case "readwrite":
                        e.read = e.write = !0;
                        break;
                    case "execute":
                        e.execute = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " request " + c);
                }
                return e
            }(function(b) {
                Z.__access_globals = b;
                Z.__access_globals.s = "access_globals";
                Z.__access_globals.isVendorTemplate = !0;
                Z.__access_globals.priorityOverride = 0;
                Z.__access_globals.isInfrastructure = !1
            })(function(b) {
                for (var c =
                        b.vtp_keys || [], d = b.vtp_createPermissionError, e = [], f = [], g = [], h = 0; h < c.length; h++) {
                    var l = c[h],
                        n = l.key;
                    l.read && e.push(n);
                    l.write && f.push(n);
                    l.execute && g.push(n)
                }
                return {
                    assert: function(p, q, r) {
                        if (!k(r)) throw d(p, {}, "Key must be a string.");
                        if ("read" === q) {
                            if (-1 < e.indexOf(r)) return
                        } else if ("write" === q) {
                            if (-1 < f.indexOf(r)) return
                        } else if ("readwrite" === q) {
                            if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return
                        } else if ("execute" === q) {
                            if (-1 < g.indexOf(r)) return
                        } else throw d(p, {}, "Operation must be either 'read', 'write', or 'execute', was " +
                            q);
                        throw d(p, {}, "Prohibited " + q + " on global variable: " + r + ".");
                    },
                    V: a
                }
            })
        }();
    Z.o.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.s = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0;
                Z.__u.isInfrastructure = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Kx("gtm.url", 1)) || Hx();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return Jx(String(c));
                var e = fj(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        h = b[a("vtp_queryKey").toString()] || "",
                        l = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? Ka(h) ? n = h : n = String(h).replace(/\s+/g, "").split(",") : n = [String(h)];
                    for (var p = 0; p < n.length; p++) {
                        var q = dj(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!l || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = dj(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    Z.o.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.s = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0;
                Z.__v.isInfrastructure = !1
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = Kx(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                Sx(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();

    Z.o.ytl = ["google"],
        function() {
            function a() {
                var u = Math.round(1E9 * Math.random()) + "";
                return H.getElementById(u) ? a() : u
            }

            function b(u, v) {
                if (!u) return !1;
                for (var w = 0; w < p.length; w++)
                    if (0 <= u.indexOf("//" + p[w] + "/" + v)) return !0;
                return !1
            }

            function c(u, v) {
                var w = u.getAttribute("src");
                if (b(w, "embed/")) {
                    if (0 < w.indexOf("enablejsapi=1")) return !0;
                    if (v) {
                        var x = u.setAttribute,
                            y;
                        var A = -1 !== w.indexOf("?") ? "&" : "?";
                        if (-1 < w.indexOf("origin=")) y = w + A + "enablejsapi=1";
                        else {
                            if (!r) {
                                var B = X("document");
                                r = B.location.protocol + "//" + B.location.hostname;
                                B.location.port && (r += ":" + B.location.port)
                            }
                            y = w + A + "enablejsapi=1&origin=" + encodeURIComponent(r)
                        }
                        x.call(u, "src", y);
                        return !0
                    }
                }
                return !1
            }

            function d(u, v) {
                if (!u.getAttribute("data-gtm-yt-inspected-" + v.pb) && (u.setAttribute("data-gtm-yt-inspected-" + v.pb, "true"), c(u, v.ve))) {
                    u.id || (u.id = a());
                    var w = X("YT"),
                        x = w.get(u.id);
                    x || (x = new w.Player(u.id));
                    var y = f(x, v),
                        A = {},
                        B;
                    for (B in y) A.vd = B, y.hasOwnProperty(A.vd) && x.addEventListener(A.vd, function(D) {
                        return function(E) {
                            return y[D.vd](E.data)
                        }
                    }(A)), A = {
                        vd: A.vd
                    }
                }
            }

            function e(u) {
                I(function() {
                    function v() {
                        for (var x =
                                w.getElementsByTagName("iframe"), y = x.length, A = 0; A < y; A++) d(x[A], u)
                    }
                    var w = X("document");
                    v();
                    rx(v)
                })
            }

            function f(u, v) {
                var w, x;

                function y() {
                    da = Cx(function() {
                        return {
                            url: S,
                            title: ma,
                            lh: U,
                            rj: u.getCurrentTime(),
                            playbackRate: ha
                        }
                    }, v.pb, u.getIframe());
                    U = 0;
                    ma = S = "";
                    ha = 1;
                    return A
                }

                function A(la) {
                    switch (la) {
                        case q.PLAYING:
                            U = Math.round(u.getDuration());
                            S = u.getVideoUrl();
                            if (u.getVideoData) {
                                var Ja = u.getVideoData();
                                ma = Ja ? Ja.title : ""
                            }
                            ha = u.getPlaybackRate();
                            v.gh ? Lx(da.createEvent("start")) : da.gd();
                            aa = l(v.Nh, v.Mh, u.getDuration());
                            return B(la);
                        default:
                            return A
                    }
                }

                function B() {
                    ia = u.getCurrentTime();
                    Ha = Gx().getTime();
                    da.Hj();
                    Q();
                    return D
                }

                function D(la) {
                    var Ja;
                    switch (la) {
                        case q.ENDED:
                            return J(la);
                        case q.PAUSED:
                            Ja = "pause";
                        case q.BUFFERING:
                            var eb = u.getCurrentTime() - ia;
                            Ja = 1 < Math.abs((Gx().getTime() - Ha) / 1E3 * ha - eb) ? "seek" : Ja || "buffering";
                            u.getCurrentTime() && (v.fh ? Lx(da.createEvent(Ja)) : da.gd());
                            O();
                            return E;
                        case q.UNSTARTED:
                            return y(la);
                        default:
                            return D
                    }
                }

                function E(la) {
                    switch (la) {
                        case q.ENDED:
                            return J(la);
                        case q.PLAYING:
                            return B(la);
                        case q.UNSTARTED:
                            return y(la);
                        default:
                            return E
                    }
                }

                function J() {
                    for (; x;) {
                        var la = w;
                        Dx(x);
                        la()
                    }
                    v.eh && Lx(da.createEvent("complete", 1));
                    return y(q.UNSTARTED)
                }

                function G() {}

                function O() {
                    x && (Dx(x), x = 0, w = G)
                }

                function Q() {
                    if (aa.length && 0 !== ha) {
                        var la = -1,
                            Ja;
                        do {
                            Ja = aa[0];
                            if (Ja.Ba > u.getDuration()) return;
                            la = (Ja.Ba - u.getCurrentTime()) / ha;
                            if (0 > la && (aa.shift(), 0 === aa.length)) return
                        } while (0 > la);
                        w = function() {
                            x = 0;
                            w = G;
                            0 < aa.length && aa[0].Ba === Ja.Ba && (aa.shift(), Lx(da.createEvent("progress", Ja.Ge, Ja.Je)));
                            Q()
                        };
                        x = Ex(w, 1E3 *
                            la)
                    }
                }
                var da, aa = [],
                    U, S, ma, ha, ia, Ha, Wa = y(q.UNSTARTED);
                x = 0;
                w = G;
                return {
                    onStateChange: function(la) {
                        Wa = Wa(la)
                    },
                    onPlaybackRateChange: function(la) {
                        ia = u.getCurrentTime();
                        Ha = Gx().getTime();
                        da.gd();
                        ha = la;
                        O();
                        Q()
                    }
                }
            }

            function g(u) {
                for (var v = u.split(","), w = v.length, x = [], y = 0; y < w; y++) {
                    var A = parseInt(v[y], 10);
                    isNaN(A) || 100 < A || 0 > A || x.push(A / 100)
                }
                x.sort(function(B, D) {
                    return B - D
                });
                return x
            }

            function h(u) {
                for (var v = u.split(","), w = v.length, x = [], y = 0; y < w; y++) {
                    var A = parseInt(v[y], 10);
                    isNaN(A) || 0 > A || x.push(A)
                }
                x.sort(function(B,
                    D) {
                    return B - D
                });
                return x
            }

            function l(u, v, w) {
                var x = u.map(function(B) {
                    return {
                        Ba: B,
                        Je: B,
                        Ge: void 0
                    }
                });
                if (!v.length) return x;
                var y = v.map(function(B) {
                    return {
                        Ba: B * w,
                        Je: void 0,
                        Ge: B
                    }
                });
                if (!x.length) return y;
                var A = x.concat(y);
                A.sort(function(B, D) {
                    return B.Ba - D.Ba
                });
                return A
            }

            function n(u) {
                var v = !!u.vtp_captureStart,
                    w = !!u.vtp_captureComplete,
                    x = !!u.vtp_capturePause,
                    y = g(u.vtp_progressThresholdsPercent + ""),
                    A = h(u.vtp_progressThresholdsTimeInSeconds + ""),
                    B = !!u.vtp_fixMissingApi;
                if (v || w || x || y.length || A.length) {
                    var D = {
                            gh: v,
                            eh: w,
                            fh: x,
                            Mh: y,
                            Nh: A,
                            ve: B,
                            pb: void 0 === u.vtp_uniqueTriggerId ? "" : u.vtp_uniqueTriggerId
                        },
                        E = X("YT"),
                        J = function() {
                            e(D)
                        };
                    I(u.vtp_gtmOnSuccess);
                    if (E) E.ready && E.ready(J);
                    else {
                        var G = X("onYouTubeIframeAPIReady");
                        Mx("onYouTubeIframeAPIReady", function() {
                            G && G();
                            J()
                        });
                        I(function() {
                            for (var O = X("document"), Q = O.getElementsByTagName("script"), da = Q.length, aa = 0; aa < da; aa++) {
                                var U = Q[aa].getAttribute("src");
                                if (b(U, "iframe_api") || b(U, "player_api")) return
                            }
                            for (var S = O.getElementsByTagName("iframe"), ma = S.length, ha = 0; ha <
                                ma; ha++)
                                if (!t && c(S[ha], D.ve)) {
                                    Fx("https://www.youtube.com/iframe_api");
                                    t = !0;
                                    break
                                }
                        })
                    }
                } else I(u.vtp_gtmOnSuccess)
            }
            var p = ["www.youtube.com", "www.youtube-nocookie.com"],
                q = {
                    UNSTARTED: -1,
                    ENDED: 0,
                    PLAYING: 1,
                    PAUSED: 2,
                    BUFFERING: 3,
                    CUED: 5
                },
                r, t = !1;
            (function(u) {
                Z.__ytl = u;
                Z.__ytl.s = "ytl";
                Z.__ytl.isVendorTemplate = !0;
                Z.__ytl.priorityOverride = 0;
                Z.__ytl.isInfrastructure = !1
            })(function(u) {
                u.vtp_triggerStartOption ? n(u) : ot(function() {
                    n(u)
                })
            })
        }();

    Z.o.access_local_storage = ["google"],
        function() {
            function a(b, c, d) {
                var e = {
                    key: d,
                    read: !1,
                    write: !1
                };
                switch (c) {
                    case "read":
                        e.read = !0;
                        break;
                    case "write":
                        e.write = !0;
                        break;
                    case "readwrite":
                        e.read = e.write = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " request " + c);
                }
                return e
            }(function(b) {
                Z.__access_local_storage = b;
                Z.__access_local_storage.s = "access_local_storage";
                Z.__access_local_storage.isVendorTemplate = !0;
                Z.__access_local_storage.priorityOverride = 0;
                Z.__access_local_storage.isInfrastructure = !1
            })(function(b) {
                for (var c =
                        b.vtp_keys || [], d = b.vtp_createPermissionError, e = [], f = [], g = 0; g < c.length; g++) {
                    var h = c[g],
                        l = h.key;
                    h.read && e.push(l);
                    h.write && f.push(l)
                }
                return {
                    assert: function(n, p, q) {
                        if (!k(q)) throw d(n, {}, "Key must be a string.");
                        if ("read" === p) {
                            if (-1 < e.indexOf(q)) return
                        } else if ("write" === p) {
                            if (-1 < f.indexOf(q)) return
                        } else if ("readwrite" === p) {
                            if (-1 < f.indexOf(q) && -1 < e.indexOf(q)) return
                        } else throw d(n, {}, "Operation must be either 'read', 'write', or 'readwrite', was " + p);
                        throw d(n, {}, "Prohibited " + p + " on local storage key: " +
                            q + ".");
                    },
                    V: a
                }
            })
        }();
    Z.o.cid = ["google"],
        function() {
            (function(a) {
                Z.__cid = a;
                Z.__cid.s = "cid";
                Z.__cid.isVendorTemplate = !0;
                Z.__cid.priorityOverride = 0;
                Z.__cid.isInfrastructure = !1
            })(function() {
                return L.C
            })
        }();
    Z.o.gclidw = ["google"],
        function() {
            var a = ["aw", "dc", "gf", "ha", "gb"];
            (function(b) {
                Z.__gclidw = b;
                Z.__gclidw.s = "gclidw";
                Z.__gclidw.isVendorTemplate = !0;
                Z.__gclidw.priorityOverride = 100;
                Z.__gclidw.isInfrastructure = !1
            })(function(b) {
                I(b.vtp_gtmOnSuccess);
                var c, d, e, f;
                b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain, f = b.vtp_cookieFlags);
                var g = {
                    prefix: e,
                    path: c,
                    domain: d,
                    flags: f
                };
                !b.vtp_enableCrossDomainFeature || b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming || !b.vtp_enableCrossDomain &&
                    !oo() || (Wo(a, g), V(73) && Bo(g));
                To(g);
                Zo(["aw", "dc"], g);
                Vp(g);
                if (b.vtp_enableCrossDomainFeature && b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                    var h = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                    Yo(a, h, b.vtp_urlPosition, !!b.vtp_formDecoration, g.prefix);
                    V(73) && (Co(to(g.prefix), h, b.vtp_urlPosition, !!b.vtp_formDecoration, g), Co("FPAU", h, b.vtp_urlPosition, !!b.vtp_formDecoration, g))
                }
                var l = Kx(R.g.ma);
                ip({
                    eventId: b.vtp_gtmEventId,
                    priorityId: b.vtp_gtmPriorityId,
                    If: !1,
                    Ie: void 0 != l && !1 !== l,
                    yc: g,
                    Be: !0
                });
                b.vtp_enableUrlPassthrough && ap(["aw", "dc", "gb"])
            })
        }();

    Z.o.aev = ["google"],
        function() {
            function a(r, t, u, v, w) {
                w || (w = "element");
                var x = t + "." + u,
                    y;
                if (n.hasOwnProperty(x)) y = n[x];
                else {
                    var A = r[w];
                    if (A && (y = v(A), n[x] = y, p.push(x), 35 < p.length)) {
                        var B = p.shift();
                        delete n[B]
                    }
                }
                return y
            }

            function b(r, t, u) {
                var v = r[q[t]];
                return void 0 !== v ? v : u
            }

            function c(r, t) {
                if (!r) return !1;
                var u = d(Hx());
                Ka(t) || (t = String(t || "").replace(/\s+/g, "").split(","));
                for (var v = [u], w = 0; w < t.length; w++) {
                    var x = t[w];
                    if (x.hasOwnProperty("is_regex"))
                        if (x.is_regex) try {
                            x = new RegExp(x.domain)
                        } catch (B) {
                            continue
                        } else x =
                            x.domain;
                    var y = d(r);
                    if (x instanceof RegExp) {
                        if (x.test(y)) return !1
                    } else {
                        var A = x;
                        if (0 != A.length) {
                            if (0 <= y.indexOf(A)) return !1;
                            v.push(d(A))
                        }
                    }
                }
                return !PF(r, v)
            }

            function d(r) {
                l.test(r) || (r = "http://" + r);
                return dj(fj(r), "HOST", !0)
            }

            function e(r, t, u, v) {
                switch (r) {
                    case "SUBMIT_TEXT":
                        return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
                    case "LENGTH":
                        var w = a(t, u, "FORM." + r, g);
                        return void 0 === w ? v : w;
                    case "INTERACTED_FIELD_ID":
                        return h(t, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return h(t, "name", v);
                    case "INTERACTED_FIELD_TYPE":
                        return h(t,
                            "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var x = t.interactedFormFieldPosition;
                        return void 0 === x ? v : x;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var y = t.interactSequenceNumber;
                        return void 0 === y ? v : y;
                    default:
                        return v
                }
            }

            function f(r) {
                switch (r.tagName.toLowerCase()) {
                    case "input":
                        return wc(r, "value");
                    case "button":
                        return xc(r);
                    default:
                        return null
                }
            }

            function g(r) {
                if ("form" === r.tagName.toLowerCase() && r.elements) {
                    for (var t = 0, u = 0; u < r.elements.length; u++) mx(r.elements[u]) && t++;
                    return t
                }
            }

            function h(r, t, u) {
                var v = r.interactedFormField;
                return v && wc(v, t) || u
            }
            var l = /^https?:\/\//i,
                n = {},
                p = [],
                q = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(r) {
                Z.__aev = r;
                Z.__aev.s = "aev";
                Z.__aev.isVendorTemplate = !0;
                Z.__aev.priorityOverride = 0;
                Z.__aev.isInfrastructure = !1
            })(function(r) {
                var t =
                    r.vtp_gtmEventId,
                    u = r.vtp_defaultValue,
                    v = r.vtp_varType,
                    w = r.vtp_gtmCachedValues.gtm;
                switch (v) {
                    case "TAG_NAME":
                        var x = w.element;
                        return x && x.tagName || u;
                    case "TEXT":
                        return a(w, t, v, xc) || u;
                    case "URL":
                        var y;
                        a: {
                            var A = String(w.elementUrl || u || ""),
                                B = fj(A),
                                D = String(r.vtp_component || "URL");
                            switch (D) {
                                case "URL":
                                    y = A;
                                    break a;
                                case "IS_OUTBOUND":
                                    y = c(A, r.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    y = dj(B, D, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey)
                            }
                        }
                        return y;
                    case "ATTRIBUTE":
                        var E;
                        if (void 0 === r.vtp_attribute) E = b(w,
                            v, u);
                        else {
                            var J = w.element;
                            E = J && wc(J, r.vtp_attribute) || u || ""
                        }
                        return E;
                    case "MD":
                        var G = r.vtp_mdValue,
                            O = a(w, t, "MD", yx);
                        return G && O ? Bx(O, G) || u : O || u;
                    case "FORM":
                        return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, u);
                    default:
                        var Q = b(w, v, u);
                        Sx(Q, "aev", r.vtp_gtmEventId);
                        return Q
                }
            })
        }();
    Z.o.read_data_layer = ["google"],
        function() {
            function a(b, c) {
                return {
                    key: c
                }
            }(function(b) {
                Z.__read_data_layer = b;
                Z.__read_data_layer.s = "read_data_layer";
                Z.__read_data_layer.isVendorTemplate = !0;
                Z.__read_data_layer.priorityOverride = 0;
                Z.__read_data_layer.isInfrastructure = !1
            })(function(b) {
                var c = b.vtp_keyPatterns || [],
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!k(f)) throw d(e, {}, "Keys must be strings.");
                        try {
                            if (Nf(f, c)) return
                        } catch (g) {
                            throw d(e, {}, "Invalid key filter.");
                        }
                        throw d(e, {}, "Prohibited read from data layer variable: " +
                            f + ".");
                    },
                    V: a
                }
            })
        }();
    Z.o.hl = ["google"],
        function() {
            function a(f) {
                return f.target && f.target.location && f.target.location.href ? f.target.location.href : Hx()
            }

            function b(f, g) {
                uc(f, "hashchange", function(h) {
                    var l = a(h);
                    g({
                        source: "hashchange",
                        state: null,
                        url: Jx(l),
                        N: Ix(l)
                    })
                })
            }

            function c(f, g) {
                uc(f, "popstate", function(h) {
                    var l = a(h);
                    g({
                        source: "popstate",
                        state: h.state,
                        url: Jx(l),
                        N: Ix(l)
                    })
                })
            }

            function d(f, g, h) {
                var l = g.history,
                    n = l[f];
                if (Ga(n)) try {
                    l[f] = function(p, q, r) {
                        n.apply(l, [].slice.call(arguments, 0));
                        h({
                            source: f,
                            state: p,
                            url: Jx(Hx()),
                            N: Ix(Hx())
                        })
                    }
                } catch (p) {}
            }

            function e() {
                var f = {
                    source: null,
                    state: X("history").state || null,
                    url: Jx(Hx()),
                    N: Ix(Hx())
                };
                return function(g) {
                    var h = f,
                        l = {};
                    l[h.source] = !0;
                    l[g.source] = !0;
                    if (!l.popstate || !l.hashchange || h.N != g.N) {
                        var n = {
                            event: "gtm.historyChange",
                            "gtm.historyChangeSource": g.source,
                            "gtm.oldUrlFragment": f.N,
                            "gtm.newUrlFragment": g.N,
                            "gtm.oldHistoryState": f.state,
                            "gtm.newHistoryState": g.state,
                            "gtm.oldUrl": f.url,
                            "gtm.newUrl": g.url
                        };
                        f = g;
                        Lx(n)
                    }
                }
            }(function(f) {
                Z.__hl = f;
                Z.__hl.s = "hl";
                Z.__hl.isVendorTemplate = !0;
                Z.__hl.priorityOverride = 0;
                Z.__hl.isInfrastructure = !1
            })(function(f) {
                var g = X("self");
                if (!Qx("hl")) {
                    var h = e();
                    b(g, h);
                    c(g, h);
                    d("pushState", g, h);
                    d("replaceState", g, h);
                    Rx("hl")
                }
                I(f.vtp_gtmOnSuccess)
            })
        }();
    Z.o.fsl = [],
        function() {
            function a() {
                var e = X("document"),
                    f = c(),
                    g = HTMLFormElement.prototype.submit;
                uc(e, "click", function(h) {
                    var l = h.target;
                    if (l && (l = zc(l, ["button", "input"], 100)) && ("submit" == l.type || "image" == l.type) && l.name && wc(l, "value")) {
                        var n;
                        l.form ? l.form.tagName ? n = l.form : n = H.getElementById(l.form) : n = zc(l, ["form"], 100);
                        n && f.store(n, l)
                    }
                }, !1);
                uc(e, "submit", function(h) {
                    var l = h.target;
                    if (!l) return h.returnValue;
                    var n = h.defaultPrevented || !1 === h.returnValue,
                        p = b(l) && !n,
                        q = f.get(l),
                        r = !0;
                    if (d(l, function() {
                            if (r) {
                                var t;
                                q && (t = e.createElement("input"), t.type = "hidden", t.name = q.name, t.value = q.value, l.appendChild(t));
                                g.call(l);
                                t && l.removeChild(t)
                            }
                        }, n, p, q)) r = !1;
                    else return n || (h.preventDefault && h.preventDefault(), h.returnValue = !1), !1;
                    return h.returnValue
                }, !1);
                HTMLFormElement.prototype.submit = function() {
                    var h = this,
                        l = b(h),
                        n = !0;
                    d(h, function() {
                        n && g.call(h)
                    }, !1, l) && (g.call(h), n = !1)
                }
            }

            function b(e) {
                var f = e.target;
                return f && "_self" !== f && "_parent" !== f && "_top" !== f ? !1 : !0
            }

            function c() {
                var e = [],
                    f = function(g) {
                        return La(e, function(h) {
                            return h.form ===
                                g
                        })
                    };
                return {
                    store: function(g, h) {
                        var l = f(g);
                        l ? l.button = h : e.push({
                            form: g,
                            button: h
                        })
                    },
                    get: function(g) {
                        var h = f(g);
                        return h ? h.button : null
                    }
                }
            }

            function d(e, f, g, h, l) {
                var n = ix("fsl", g ? "nv.mwt" : "mwt", 0),
                    p;
                p = g ? ix("fsl", "nv.ids", []) : ix("fsl", "ids", []);
                if (!p.length) return !0;
                var q = ex(e, "gtm.formSubmit", p),
                    r = e.action;
                r && r.tagName && (r = e.cloneNode(!1).action);
                q["gtm.elementUrl"] = r;
                P(121);
                "https://www.facebook.com/tr/" === r && P(122);
                if (V(79) && "https://www.facebook.com/tr/" === r) return !0;
                l && (q["gtm.formSubmitElement"] =
                    l);
                if (h && n) {
                    if (!Lx(q, xw(f, n), n)) return !1
                } else Lx(q, function() {}, n || 2E3);
                return !0
            }(function(e) {
                Z.__fsl = e;
                Z.__fsl.s = "fsl";
                Z.__fsl.isVendorTemplate = !0;
                Z.__fsl.priorityOverride = 0;
                Z.__fsl.isInfrastructure = !1
            })(function(e) {
                var f = e.vtp_waitForTags,
                    g = e.vtp_checkValidation,
                    h = Number(e.vtp_waitForTagsTimeout);
                if (!h || 0 >= h) h = 2E3;
                var l = e.vtp_uniqueTriggerId || "0";
                if (f) {
                    var n = function(q) {
                        return Math.max(h, q)
                    };
                    hx("fsl", "mwt", n, 0);
                    g || hx("fsl", "nv.mwt", n, 0)
                }
                var p = function(q) {
                    q.push(l);
                    return q
                };
                hx("fsl", "ids", p, []);
                g || hx("fsl", "nv.ids", p, []);
                Qx("fsl") || (a(), Rx("fsl"));
                I(e.vtp_gtmOnSuccess)
            })
        }();
    Z.o.smm = ["google"],
        function() {
            (function(a) {
                Z.__smm = a;
                Z.__smm.s = "smm";
                Z.__smm.isVendorTemplate = !0;
                Z.__smm.priorityOverride = 0;
                Z.__smm.isInfrastructure = !1
            })(function(a) {
                var b = a.vtp_input,
                    c = QF(a.vtp_map, "key", "value") || {},
                    d = c.hasOwnProperty(b) ? c[b] : a.vtp_defaultValue;
                Sx(d, "smm", a.vtp_gtmEventId);
                return d
            })
        }();
    Z.o.paused = [],
        function() {
            (function(a) {
                Z.__paused = a;
                Z.__paused.s = "paused";
                Z.__paused.isVendorTemplate = !0;
                Z.__paused.priorityOverride = 0;
                Z.__paused.isInfrastructure = !1
            })(function(a) {
                I(a.vtp_gtmOnFailure)
            })
        }();


    Z.o.lcl = [],
        function() {
            function a() {
                var c = X("document"),
                    d = 0,
                    e = function(f) {
                        var g = f.target;
                        if (g && 3 !== f.which && !(f.th || f.timeStamp && f.timeStamp === d)) {
                            d = f.timeStamp;
                            g = zc(g, ["a", "area"], 100);
                            if (!g) return f.returnValue;
                            var h = f.defaultPrevented || !1 === f.returnValue,
                                l = ix("lcl", h ? "nv.mwt" : "mwt", 0),
                                n;
                            n = h ? ix("lcl", "nv.ids", []) : ix("lcl", "ids", []);
                            if (n.length) {
                                var p = ex(g, "gtm.linkClick", n);
                                if (b(f, g, c) && !h && l && g.href) {
                                    var q = !!La(String(Bc(g, "rel") || "").split(" "), function(v) {
                                            return "noreferrer" === v.toLowerCase()
                                        }),
                                        r = X((Bc(g, "target") || "_self").substring(1)),
                                        t = !0,
                                        u = xw(function() {
                                            var v;
                                            if (v = t && r) {
                                                var w;
                                                a: if (q) {
                                                    var x;
                                                    try {
                                                        x = new MouseEvent(f.type, {
                                                            bubbles: !0
                                                        })
                                                    } catch (y) {
                                                        if (!c.createEvent) {
                                                            w = !1;
                                                            break a
                                                        }
                                                        x = c.createEvent("MouseEvents");
                                                        x.initEvent(f.type, !0, !0)
                                                    }
                                                    x.th = !0;
                                                    f.target.dispatchEvent(x);
                                                    w = !0
                                                } else w = !1;
                                                v = !w
                                            }
                                            v && (r.location.href = Bc(g, "href"))
                                        }, l);
                                    if (Lx(p, u, l)) t = !1;
                                    else return f.preventDefault && f.preventDefault(), f.returnValue = !1
                                } else Lx(p, function() {}, l || 2E3);
                                return !0
                            }
                        }
                    };
                uc(c, "click", e, !1);
                uc(c, "auxclick", e, !1)
            }

            function b(c, d, e) {
                if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
                var f = Bc(d, "href"),
                    g = f.indexOf("#"),
                    h = Bc(d, "target");
                if (h && "_self" !== h && "_parent" !== h && "_top" !== h || 0 === g) return !1;
                if (0 < g) {
                    var l = Jx(f),
                        n = Jx(e.location);
                    return l !== n
                }
                return !0
            }(function(c) {
                Z.__lcl = c;
                Z.__lcl.s = "lcl";
                Z.__lcl.isVendorTemplate = !0;
                Z.__lcl.priorityOverride = 0;
                Z.__lcl.isInfrastructure = !1
            })(function(c) {
                var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
                    e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
                    f = Number(c.vtp_waitForTagsTimeout);
                if (!f || 0 >= f) f = 2E3;
                var g = c.vtp_uniqueTriggerId || "0";
                if (d) {
                    var h = function(n) {
                        return Math.max(f, n)
                    };
                    hx("lcl", "mwt", h, 0);
                    e || hx("lcl", "nv.mwt", h, 0)
                }
                var l = function(n) {
                    n.push(g);
                    return n
                };
                hx("lcl", "ids", l, []);
                e || hx("lcl", "nv.ids", l, []);
                Qx("lcl") || (a(), Rx("lcl"));
                I(c.vtp_gtmOnSuccess)
            })
        }();
    Z.o.evl = ["google"],
        function() {
            function a() {
                var f = Number(Kx("gtm.start")) || 0;
                return Gx().getTime() - f
            }

            function b(f, g, h, l) {
                function n() {
                    if (!Qi(f.target)) {
                        g.has(d.Cf) || g.set(d.Cf, "" + a());
                        g.has(d.Sg) || g.set(d.Sg, "" + a());
                        var q = 0;
                        g.has(d.Ef) && (q = Number(g.get(d.Ef)));
                        q += 100;
                        g.set(d.Ef, "" + q);
                        if (q >= h) {
                            var r = ex(f.target, "gtm.elementVisibility", [g.h]),
                                t = Si(f.target);
                            r["gtm.visibleRatio"] = Math.round(1E3 * t) / 10;
                            r["gtm.visibleTime"] = h;
                            r["gtm.visibleFirstTime"] = Number(g.get(d.Sg));
                            r["gtm.visibleLastTime"] = Number(g.get(d.Cf));
                            Lx(r);
                            l()
                        }
                    }
                }
                if (!g.has(d.je) && (0 == h && n(), !g.has(d.ed))) {
                    var p = X("self").setInterval(n, 100);
                    g.set(d.je, p)
                }
            }

            function c(f) {
                f.has(d.je) && (X("self").clearInterval(Number(f.get(d.je))), f.m(d.je))
            }
            var d = {
                    je: "polling-id-",
                    Sg: "first-on-screen-",
                    Cf: "recent-on-screen-",
                    Ef: "total-visible-time-",
                    ed: "has-fired-"
                },
                e = function(f, g) {
                    this.element = f;
                    this.h = g
                };
            e.prototype.has = function(f) {
                return !!this.element.getAttribute("data-gtm-vis-" + f + this.h)
            };
            e.prototype.get = function(f) {
                return this.element.getAttribute("data-gtm-vis-" +
                    f + this.h)
            };
            e.prototype.set = function(f, g) {
                this.element.setAttribute("data-gtm-vis-" + f + this.h, g)
            };
            e.prototype.m = function(f) {
                this.element.removeAttribute("data-gtm-vis-" + f + this.h)
            };
            (function(f) {
                Z.__evl = f;
                Z.__evl.s = "evl";
                Z.__evl.isVendorTemplate = !0;
                Z.__evl.priorityOverride = 0;
                Z.__evl.isInfrastructure = !1
            })(function(f) {
                function g() {
                    var x = !1,
                        y = null;
                    if ("CSS" === l) {
                        try {
                            y = Xg(n)
                        } catch (J) {}
                        x = !!y && v.length != y.length
                    } else if ("ID" === l) {
                        var A = H.getElementById(n);
                        A && (y = [A], x = 1 != v.length || v[0] !== A)
                    }
                    y || (y = [], x = 0 < v.length);
                    if (x) {
                        for (var B = 0; B < v.length; B++) {
                            var D = new e(v[B], t);
                            c(D)
                        }
                        v = [];
                        for (var E = 0; E < y.length; E++) v.push(y[E]);
                        0 <= w && Yi(w);
                        0 < v.length && (w = Xi(h, v, [r]))
                    }
                }

                function h(x) {
                    var y = new e(x.target, t);
                    x.intersectionRatio >= r ? y.has(d.ed) || b(x, y, q, "ONCE" === u ? function() {
                        for (var A = 0; A < v.length; A++) {
                            var B = new e(v[A], t);
                            B.set(d.ed, "1");
                            c(B)
                        }
                        Yi(w);
                        if (p && qx)
                            for (var D = 0; D < qx.length; D++) qx[D] === g && qx.splice(D, 1)
                    } : function() {
                        y.set(d.ed, "1");
                        c(y)
                    }) : (c(y), "MANY_PER_ELEMENT" === u && y.has(d.ed) && (y.m(d.ed), y.m(d.Ef)), y.m(d.Cf))
                }
                var l =
                    f.vtp_selectorType,
                    n;
                "ID" === l ? n = String(f.vtp_elementId) : "CSS" === l && (n = String(f.vtp_elementSelector));
                var p = !!f.vtp_useDomChangeListener,
                    q = f.vtp_useOnScreenDuration && Number(f.vtp_onScreenDuration) || 0,
                    r = (Number(f.vtp_onScreenRatio) || 50) / 100,
                    t = f.vtp_uniqueTriggerId,
                    u = f.vtp_firingFrequency,
                    v = [],
                    w = -1;
                g();
                p && rx(g);
                I(f.vtp_gtmOnSuccess)
            })
        }();

    Z.o.gaawc = ["google"],
        function() {
            (function(a) {
                Z.__gaawc = a;
                Z.__gaawc.s = "gaawc";
                Z.__gaawc.isVendorTemplate = !0;
                Z.__gaawc.priorityOverride = 10;
                Z.__gaawc.isInfrastructure = !1
            })(function(a) {
                var b = String(a.vtp_measurementId);
                if (!k(b) || 0 >= b.indexOf("-")) I(a.vtp_gtmOnFailure);
                else {
                    var c = QF(a.vtp_fieldsToSet, "name", "value") || {};
                    if (c.hasOwnProperty(R.g.Ra) || a.vtp_userProperties) {
                        var d = c[R.g.Ra] || {};
                        K(QF(a.vtp_userProperties, "name", "value"), d);
                        c[R.g.Ra] = d
                    }
                    a.vtp_enableSendToServerContainer && a.vtp_serverContainerUrl &&
                        (c[R.g.uc] = a.vtp_serverContainerUrl, c[R.g.Ld] = !0);
                    var e = a.vtp_userDataVariable;
                    e && (c[R.g.oa] = e);
                    yE(c, Dh, function(f) {
                        return Ra(f)
                    });
                    yE(c, Fh, function(f) {
                        return Number(f)
                    });
                    c.send_page_view = a.vtp_sendPageView;
                    Su(Ou(b, c), a.vtp_gtmEventId, {
                        noTargetGroup: !0,
                        originatingEntity: qt(1, a.vtp_gtmEntityIndex, a.vtp_gtmEntityName)
                    });
                    I(a.vtp_gtmOnSuccess)
                }
            })
        }();
    Z.o.gaawe = ["google"],
        function() {
            function a(f, g, h) {
                for (var l = 0; l < g.length; l++) f.hasOwnProperty(g[l]) && (f[g[l]] = h(f[g[l]]))
            }

            function b(f, g, h) {
                var l = {},
                    n = function(u, v) {
                        l[u] = l[u] || v
                    },
                    p = function(u, v, w) {
                        w = void 0 === w ? !1 : w;
                        c.push(6);
                        if (u) {
                            l.items = l.items || [];
                            for (var x = {}, y = 0; y < u.length; x = {
                                    Ic: x.Ic
                                }, y++) x.Ic = {}, m(u[y], function(B) {
                                return function(D, E) {
                                    w && "id" === D ? B.Ic.promotion_id = E : w && "name" === D ? B.Ic.promotion_name = E : B.Ic[D] = E
                                }
                            }(x)), l.items.push(x.Ic)
                        }
                        if (v)
                            for (var A in v) d.hasOwnProperty(A) ? n(d[A], v[A]) : n(A,
                                v[A])
                    },
                    q;
                "dataLayer" === f.vtp_getEcommerceDataFrom ? (q = f.vtp_gtmCachedValues.eventModel) || (q = f.vtp_gtmCachedValues.ecommerce) : (q = f.vtp_ecommerceMacroData, Vc(q) && q.ecommerce && !q.items && (q = q.ecommerce));
                if (Vc(q)) {
                    var r = !1,
                        t;
                    for (t in q) q.hasOwnProperty(t) && (r || (c.push(5), r = !0), "currencyCode" === t ? n("currency", q.currencyCode) : "impressions" === t && g === R.g.ab ? p(q.impressions, null) : "promoClick" === t && g === R.g.tb ? p(q.promoClick.promotions, q.promoClick.actionField, !0) : "promoView" === t && g === R.g.cb ? p(q.promoView.promotions,
                        q.promoView.actionField, !0) : e.hasOwnProperty(t) ? g === e[t] && p(q[t].products, q[t].actionField) : l[t] = q[t]);
                    K(l, h)
                }
            }
            var c = [],
                d = {
                    id: "transaction_id",
                    revenue: "value",
                    list: "item_list_name"
                },
                e = {
                    click: "select_item",
                    detail: "view_item",
                    add: "add_to_cart",
                    remove: "remove_from_cart",
                    checkout: "begin_checkout",
                    checkout_option: "checkout_option",
                    purchase: "purchase",
                    refund: "refund"
                };
            (function(f) {
                Z.__gaawe = f;
                Z.__gaawe.s = "gaawe";
                Z.__gaawe.isVendorTemplate = !0;
                Z.__gaawe.priorityOverride = 0;
                Z.__gaawe.isInfrastructure = !1
            })(function(f) {
                var g;
                g = f.vtp_migratedToV2 ? String(f.vtp_measurementIdOverride) : String(f.vtp_measurementIdOverride || f.vtp_measurementId);
                if (k(g) && 0 === g.indexOf("G-")) {
                    var h = String(f.vtp_eventName),
                        l = {};
                    c = [];
                    f.vtp_sendEcommerceData && (Ch.hasOwnProperty(h) || "checkout_option" === h) && b(f, h, l);
                    var n = f.vtp_eventSettingsVariable;
                    if (n)
                        for (var p in n) n.hasOwnProperty(p) && (l[p] = n[p]);
                    if (f.vtp_eventSettingsTable) {
                        var q = QF(f.vtp_eventSettingsTable, "parameter", "parameterValue"),
                            r;
                        for (r in q) l[r] = q[r]
                    }
                    var t = QF(f.vtp_eventParameters, "name",
                            "value"),
                        u;
                    for (u in t) t.hasOwnProperty(u) && (l[u] = t[u]);
                    var v = f.vtp_userDataVariable;
                    v && (l[R.g.oa] = v);
                    if (l.hasOwnProperty(R.g.Ra) || f.vtp_userProperties) {
                        var w = l[R.g.Ra] || {};
                        K(QF(f.vtp_userProperties, "name", "value"), w);
                        l[R.g.Ra] = w
                    }
                    var x = {
                        originatingEntity: qt(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName)
                    };
                    if (0 < c.length) {
                        var y = {};
                        x.eventMetadata = (y.event_usage = c, y)
                    }
                    a(l, Dh, function(B) {
                        return Ra(B)
                    });
                    a(l, Fh, function(B) {
                        return Number(B)
                    });
                    var A = f.vtp_gtmEventId;
                    x.noGtmEvent = !0;
                    Su(Pu(g, h, l), A, x);
                    I(f.vtp_gtmOnSuccess)
                } else I(f.vtp_gtmOnFailure)
            })
        }();

    Z.o.ctv = ["google"],
        function() {
            (function(a) {
                Z.__ctv = a;
                Z.__ctv.s = "ctv";
                Z.__ctv.isVendorTemplate = !0;
                Z.__ctv.priorityOverride = 0;
                Z.__ctv.isInfrastructure = !1
            })(function() {
                return "408"
            })
        }();

    Z.o.send_pixel = ["google"],
        function() {
            function a(b, c) {
                return {
                    url: c
                }
            }(function(b) {
                Z.__send_pixel = b;
                Z.__send_pixel.s = "send_pixel";
                Z.__send_pixel.isVendorTemplate = !0;
                Z.__send_pixel.priorityOverride = 0;
                Z.__send_pixel.isInfrastructure = !1
            })(function(b) {
                var c = b.vtp_allowedUrls || "specific",
                    d = b.vtp_urls || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g) {
                        if (!k(g)) throw e(f, {}, "URL must be a string.");
                        try {
                            if ("any" === c && cg(fj(g)) || "specific" === c && dg(fj(g), d)) return
                        } catch (h) {
                            throw e(f, {}, "Invalid URL filter.");
                        }
                        throw e(f, {}, "Prohibited URL: " + g + ".");
                    },
                    V: a
                }
            })
        }();



    Z.o.sp = ["google"],
        function() {
            (function(a) {
                Z.__sp = a;
                Z.__sp.s = "sp";
                Z.__sp.isVendorTemplate = !0;
                Z.__sp.priorityOverride = 0;
                Z.__sp.isInfrastructure = !1
            })(function(a) {
                var b, c = {};
                "DATA_LAYER" == a.vtp_customParamsFormat ? c = a.vtp_dataLayerVariable : "USER_SPECIFIED" == a.vtp_customParamsFormat && (c = QF(a.vtp_customParams, "key", "value"));
                b = Vc(c) ? c : {};
                b[R.g.Ze] = !0;
                if (a.vtp_enableConversionLinkingSettings) {
                    var d = !a.hasOwnProperty("vtp_enableConversionLinker") || !!a.vtp_enableConversionLinker;
                    b[R.g.Ja] = a.vtp_conversionCookiePrefix;
                    b[R.g.xa] = d
                }
                a.vtp_enableDynamicRemarketing && (a.vtp_eventValue && (b[R.g.da] = a.vtp_eventValue), a.vtp_eventItems && (b[R.g.Z] = a.vtp_eventItems));
                a.vtp_rdp && (b[R.g.Qb] = !0);
                a.vtp_userId && (b[R.g.Aa] = a.vtp_userId);
                b[R.g.Da] = Kx(R.g.Da), b[R.g.X] = Kx(R.g.X), b[R.g.Lb] = Kx(R.g.Lb), b[R.g.Qa] = Kx(R.g.Qa);
                var e = mq(lq(kq(jq(cq(new bq(a.vtp_gtmEventId, a.vtp_gtmPriorityId), b), a.vtp_gtmOnSuccess), a.vtp_gtmOnFailure), !0)),
                    f = "AW-" + a.vtp_conversionId;
                a.vtp_conversionLabel && (f += "/" + a.vtp_conversionLabel);
                e.eventMetadata.hit_type_override = "remarketing";
                SC(f, a.vtp_eventName || "", Date.now(), e)
            })
        }();

    Z.o.tg = ["google"],
        function() {
            function a(g) {
                f.push(g);
                1 < f.length || I(function() {
                    var h = f.join(",");
                    f = [];
                    Lx({
                        event: "gtm.triggerGroup",
                        "gtm.triggers": h
                    })
                })
            }

            function b(g, h) {
                var l = c[h],
                    n = l.indexOf(g); - 1 !== n && (l.splice(n, 1), l.length || a(h))
            }
            var c = {},
                d = {},
                e = [],
                f = [];
            (function(g) {
                Z.__tg = g;
                Z.__tg.s = "tg";
                Z.__tg.isVendorTemplate = !0;
                Z.__tg.priorityOverride = 0;
                Z.__tg.isInfrastructure = !1
            })(function(g) {
                I(g.vtp_gtmOnSuccess);
                var h = g.vtp_uniqueTriggerId,
                    l = g.vtp_triggerIds,
                    n = g.vtp_firingId;
                if (g.vtp_isListeningTag) {
                    var p = d[n];
                    p ? b(n, p) : e.push(n)
                } else {
                    c[h] = l;
                    for (var q = 0, r; r = l[q]; q++) d[r] = h;
                    for (var t = 0; t < e.length; t++) b(e[t], h)
                }
            })
        }();
    Z.o.tl = ["google"],
        function() {
            function a(b) {
                return function() {
                    if (b.Bh && b.Gh >= b.Bh) b.rh && X("self").clearInterval(b.rh);
                    else {
                        b.Gh++;
                        var c = Gx().getTime();
                        Lx({
                            event: b.eventName,
                            "gtm.timerId": b.rh,
                            "gtm.timerEventNumber": b.Gh,
                            "gtm.timerInterval": b.interval,
                            "gtm.timerLimit": b.Bh,
                            "gtm.timerStartTime": b.Jj,
                            "gtm.timerCurrentTime": c,
                            "gtm.timerElapsedTime": c - b.Jj,
                            "gtm.triggers": b.xm
                        })
                    }
                }
            }(function(b) {
                Z.__tl = b;
                Z.__tl.s = "tl";
                Z.__tl.isVendorTemplate = !0;
                Z.__tl.priorityOverride = 0;
                Z.__tl.isInfrastructure = !1
            })(function(b) {
                I(b.vtp_gtmOnSuccess);
                if (!isNaN(b.vtp_interval)) {
                    var c = {
                        eventName: b.vtp_eventName,
                        Gh: 0,
                        interval: Number(b.vtp_interval),
                        Bh: isNaN(b.vtp_limit) ? 0 : Number(b.vtp_limit),
                        xm: String(b.vtp_uniqueTriggerId || "0"),
                        Jj: Gx().getTime()
                    };
                    c.rh = X("self").setInterval(a(c), 0 > Number(b.vtp_interval) ? 0 : Number(b.vtp_interval))
                }
            })
        }();

    Z.o.ua = ["google"],
        function() {
            function a(l, n) {
                for (var p in l)
                    if (!h[p] && l.hasOwnProperty(p)) {
                        var q = g[p] ? Ra(l[p]) : l[p];
                        "anonymizeIp" != p || q || (q = void 0);
                        n[p] = q
                    }
            }

            function b(l) {
                var n = {};
                l.vtp_gaSettings && K(QF(l.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
                K(QF(l.vtp_fieldsToSet, "fieldName", "value"), n);
                Ra(n.urlPassthrough) && (n._useUp = !0);
                l.vtp_transportUrl && (n._x_19 = l.vtp_transportUrl);
                return n
            }

            function c(l, n) {
                return void 0 === n ? n : l(n)
            }

            function d(l, n, p) {
                var q =
                    function(O, Q, da) {
                        for (var aa in O)
                            if (r.hasOwnProperty(aa)) {
                                var U = da[Q] || {};
                                U.actionField = U.actionField || {};
                                U.actionField[r[aa]] = O[aa];
                                da[Q] = U
                            }
                    },
                    r = {
                        transaction_id: "id",
                        affiliation: "affiliation",
                        value: "revenue",
                        tax: "tax",
                        shipping: "shipping",
                        coupon: "coupon",
                        item_list_name: "list"
                    },
                    t = {},
                    u = (t[R.g.ac] = "click", t[R.g.Ha] = "detail", t[R.g.Yb] = "add", t[R.g.Zb] = "remove", t[R.g.Kb] = "checkout", t[R.g.Ca] = "purchase", t[R.g.bc] = "refund", t),
                    v;
                if (l.vtp_useEcommerceDataLayer) {
                    var w = !1;
                    l.vtp_useGA4SchemaForEcommerce && (v = l.vtp_gtmCachedValues.eventModel,
                        w = !!v);
                    w || (v = Kx("ecommerce", 1))
                } else l.vtp_ecommerceMacroData && (v = l.vtp_ecommerceMacroData.ecommerce, !v && l.vtp_useGA4SchemaForEcommerce && (v = l.vtp_ecommerceMacroData));
                if (!Vc(v)) return;
                v = Object(v);
                var x = {},
                    y = v.currencyCode;
                l.vtp_useGA4SchemaForEcommerce && (y = y || v.currency);
                var A = Xa(n, "currencyCode", y);
                A && (x.currencyCode = A);
                v.impressions &&
                    (x.impressions = v.impressions);
                v.promoView && (x.promoView = v.promoView);
                if (l.vtp_useGA4SchemaForEcommerce) {
                    if (p === R.g.ab && !v.impressions) v.items && (x.impressions = v.items, x.translateIfKeyEquals = "impressions");
                    else if (p === R.g.cb && !v.promoView) v.promoView = {}, v.items && (x.promoView = {}, x.promoView.promotions = v.items, x.translateIfKeyEquals = "promoView");
                    else if (p === R.g.tb && !v.promoClick) v.promoClick = {}, v.items && (x.promoClick = {}, x.promoClick.promotions = v.items, x.translateIfKeyEquals = "promoClick", q(v, "promoClick",
                        x));
                    else if (u.hasOwnProperty(p)) {
                        var B = u[p];
                        !v[B] && v.items && (x[B] = {}, x[B].products = v.items, x.translateIfKeyEquals = "products", q(v, B, x))
                    }
                    var D = x.translateIfKeyEquals;
                    if ("promoClick" === D || "products" === D) return x
                }
                if (v.promoClick) return x.promoClick = v.promoClick, x;
                for (var E = "detail checkout checkout_option click add remove purchase refund".split(" "), J = 0; J < E.length; J++) {
                    var G = v[E[J]];
                    if (G) return x[E[J]] = G, x
                }
                l.vtp_useGA4SchemaForEcommerce && u.hasOwnProperty(p) && q(v, u[p], x);
                return x;
            }

            function e(l, n) {
                if (!f) {
                    var p = l.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                    l.vtp_useInternalVersion && !l.vtp_useDebugVersion && (p = "internal/" + p);
                    f = !0;
                    var q = l.vtp_gtmOnFailure,
                        r = Uh || Wh ? Hs(n._x_19, "/analytics.js") : void 0,
                        t = op("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
                    Fx("analytics.js" === p && r ? r : t, function() {
                        var u = Ct();
                        u && u.loaded || q();
                    }, q)
                }
            }
            var f, g = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                h = {
                    urlPassthrough: !0
                };
            (function(l) {
                Z.__ua = l;
                Z.__ua.s = "ua";
                Z.__ua.isVendorTemplate = !0;
                Z.__ua.priorityOverride = 0;
                Z.__ua.isInfrastructure = !1
            })(function(l) {
                function n() {
                    if (l.vtp_doubleClick || "DISPLAY_FEATURES" == l.vtp_advertisingFeaturesType) v.displayfeatures = !0
                }
                var p = {},
                    q = {},
                    r = {};
                if (l.vtp_gaSettings) {
                    var t = l.vtp_gaSettings;
                    K(QF(t.vtp_contentGroup, "index", "group"), p);
                    K(QF(t.vtp_dimension, "index", "dimension"), q);
                    K(QF(t.vtp_metric, "index", "metric"), r);
                    var u = K(t);
                    u.vtp_fieldsToSet = void 0;
                    u.vtp_contentGroup = void 0;
                    u.vtp_dimension = void 0;
                    u.vtp_metric = void 0;
                    l = K(l, u)
                }
                K(QF(l.vtp_contentGroup, "index", "group"), p);
                K(QF(l.vtp_dimension, "index", "dimension"), q);
                K(QF(l.vtp_metric, "index", "metric"), r);
                var v = b(l),
                    w = String(l.vtp_trackingId || ""),
                    x = "",
                    y = "",
                    A = "";
                l.vtp_setTrackerName &&
                    "string" == typeof l.vtp_trackerName ? "" !== l.vtp_trackerName && (A = l.vtp_trackerName, y = A + ".") : (A = "gtm" + fi(), y = A + ".");
                var B = function(ha, ia) {
                    for (var Ha in ia) ia.hasOwnProperty(Ha) && (v[ha + Ha] = ia[Ha])
                };
                B("contentGroup", p);
                B("dimension", q);
                B("metric", r);
                l.vtp_enableEcommerce && (x = l.vtp_gtmCachedValues.event, v.gtmEcommerceData = d(l, v, x));
                if ("TRACK_EVENT" === l.vtp_trackType) x = "track_event", n(), v.eventCategory = String(l.vtp_eventCategory), v.eventAction = String(l.vtp_eventAction), v.eventLabel = c(String, l.vtp_eventLabel),
                    v.value = c(Qa, l.vtp_eventValue);
                else if ("TRACK_PAGEVIEW" == l.vtp_trackType) {
                    if (x = R.g.fc, n(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == l.vtp_advertisingFeaturesType && (v.remarketingLists = !0), l.vtp_autoLinkDomains) {
                        var D = {};
                        D[R.g.T] = l.vtp_autoLinkDomains;
                        D.use_anchor = l.vtp_useHashAutoLink;
                        D[R.g.Ab] = l.vtp_decorateFormsAutoLink;
                        v[R.g.za] = D
                    }
                } else "TRACK_SOCIAL" === l.vtp_trackType ? (x = "track_social", v.socialNetwork = String(l.vtp_socialNetwork), v.socialAction = String(l.vtp_socialAction), v.socialTarget = String(l.vtp_socialActionTarget)) :
                    "TRACK_TIMING" == l.vtp_trackType && (x = "timing_complete", v.eventCategory = String(l.vtp_timingCategory), v.timingVar = String(l.vtp_timingVar), v.value = Qa(l.vtp_timingValue), v.eventLabel = c(String, l.vtp_timingLabel));
                l.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
                l.vtp_enableLinkId && (v.enableLinkId = !0);
                var E = {};
                a(v, E);
                v.name || (E.gtmTrackerName = A);
                E.gaFunctionName = l.vtp_functionName;
                void 0 !== l.vtp_nonInteraction && (E.nonInteraction = l.vtp_nonInteraction);
                var J = mq(lq(kq(jq(cq(new bq(l.vtp_gtmEventId, l.vtp_gtmPriorityId),
                    E), l.vtp_gtmOnSuccess), l.vtp_gtmOnFailure), !0));
                WD(w, x, Date.now(), J);
                var G = Et(l.vtp_functionName);
                if (Ga(G)) {
                    var O = function(ha) {
                        var ia = [].slice.call(arguments, 0);
                        ia[0] = y + ia[0];
                        G.apply(window, ia)
                    };
                    if ("TRACK_TRANSACTION" == l.vtp_trackType) {} else if ("DECORATE_LINK" == l.vtp_trackType) {} else if ("DECORATE_FORM" == l.vtp_trackType) {} else if ("TRACK_DATA" == l.vtp_trackType) {}
                    e(l, v)
                } else I(l.vtp_gtmOnFailure)
            })
        }();
    Z.o.get_url = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    component: c,
                    queryKey: d
                }
            }(function(b) {
                Z.__get_url = b;
                Z.__get_url.s = "get_url";
                Z.__get_url.isVendorTemplate = !0;
                Z.__get_url.priorityOverride = 0;
                Z.__get_url.isInfrastructure = !1
            })(function(b) {
                var c = "any" === b.vtp_urlParts ? null : [];
                c && (b.vtp_protocol && c.push("protocol"), b.vtp_host && c.push("host"), b.vtp_port && c.push("port"), b.vtp_path && c.push("path"), b.vtp_extension && c.push("extension"), b.vtp_query && c.push("query"), b.vtp_fragment && c.push("fragment"));
                var d = c && "any" !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null,
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g, h) {
                        if (g) {
                            if (!k(g)) throw e(f, {}, "URL component must be a string.");
                            if (c && 0 > c.indexOf(g)) throw e(f, {}, "Prohibited URL component: " + g);
                            if ("query" === g && d) {
                                if (!h) throw e(f, {}, "Prohibited from getting entire URL query when query keys are specified.");
                                if (!k(h)) throw e(f, {}, "Query key must be a string.");
                                if (0 > d.indexOf(h)) throw e(f, {}, "Prohibited query key: " + h);
                            }
                        } else if (c) throw e(f, {},
                            "Prohibited from getting entire URL when components are specified.");
                    },
                    V: a
                }
            })
        }();
    Z.o.inject_script = ["google"],
        function() {
            function a(b, c) {
                return {
                    url: c
                }
            }(function(b) {
                Z.__inject_script = b;
                Z.__inject_script.s = "inject_script";
                Z.__inject_script.isVendorTemplate = !0;
                Z.__inject_script.priorityOverride = 0;
                Z.__inject_script.isInfrastructure = !1
            })(function(b) {
                var c = b.vtp_urls || [],
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!k(f)) throw d(e, {}, "Script URL must be a string.");
                        try {
                            if (dg(fj(f), c)) return
                        } catch (g) {
                            throw d(e, {}, "Invalid script URL filter.");
                        }
                        throw d(e, {}, "Prohibited script URL: " +
                            f);
                    },
                    V: a
                }
            })
        }();
    Z.o.gas = ["google"],
        function() {
            (function(a) {
                Z.__gas = a;
                Z.__gas.s = "gas";
                Z.__gas.isVendorTemplate = !0;
                Z.__gas.priorityOverride = 0;
                Z.__gas.isInfrastructure = !1
            })(function(a) {
                var b = K(a),
                    c = b;
                c[re.Sb] = null;
                c[re.Vg] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();
    Z.o.awct = ["google"],
        function() {
            function a(c, d, e) {
                return function(f, g, h) {
                    d[f] = "DATA_LAYER" === e ? Kx(h) : c[g]
                }
            }

            function b(c) {
                if (c.vtp_enableEnhancedConversion) {
                    var d = c.vtp_cssProvidedEnhancedConversionValue || c.vtp_enhancedConversionObject;
                    if (d) return {
                        enhanced_conversions_mode: "manual",
                        enhanced_conversions_manual_var: d
                    }
                }
            }(function(c) {
                Z.__awct = c;
                Z.__awct.s = "awct";
                Z.__awct.isVendorTemplate = !0;
                Z.__awct.priorityOverride = 0;
                Z.__awct.isInfrastructure = !1
            })(function(c) {
                var d = !c.hasOwnProperty("vtp_enableConversionLinker") ||
                    !!c.vtp_enableConversionLinker,
                    e = !!c.vtp_enableEnhancedConversions || !!c.vtp_enableEnhancedConversion,
                    f = QF(c.vtp_customVariables, "varName", "value") || {},
                    g = {},
                    h = (g[R.g.da] = c.vtp_conversionValue || 0, g[R.g.sa] = c.vtp_currencyCode, g[R.g.na] = c.vtp_orderId, g[R.g.Ja] = c.vtp_conversionCookiePrefix, g[R.g.xa] = d, g[R.g.Ad] = e, g[R.g.ma] = Kx(R.g.ma), g[R.g.aa] = Kx("developer_id"), g);
                h[R.g.Da] = Kx(R.g.Da), h[R.g.X] = Kx(R.g.X), h[R.g.Lb] = Kx(R.g.Lb), h[R.g.Qa] = Kx(R.g.Qa);
                c.vtp_rdp && (h[R.g.Qb] = !0);
                if (c.vtp_enableCustomParams)
                    for (var l in f) Kh.hasOwnProperty(l) || (h[l] = f[l]);
                if (c.vtp_enableProductReporting) {
                    var n = a(c, h, c.vtp_productReportingDataSource);
                    n(R.g.Ed, "vtp_awMerchantId", "aw_merchant_id");
                    n(R.g.Cd, "vtp_awFeedCountry", "aw_feed_country");
                    n(R.g.Dd, "vtp_awFeedLanguage", "aw_feed_language");
                    n(R.g.Bd, "vtp_discount", "discount");
                    n(R.g.Z, "vtp_items", "items")
                }
                c.vtp_enableShippingData && (h[R.g.dd] = c.vtp_deliveryPostalCode, h[R.g.Id] = c.vtp_estimatedDeliveryDate, h[R.g.wb] =
                    c.vtp_deliveryCountry, h[R.g.Wc] = c.vtp_shippingFee);
                c.vtp_transportUrl && (h[R.g.uc] = c.vtp_transportUrl);
                if (c.vtp_enableNewCustomerReporting) {
                    var p = a(c, h, c.vtp_newCustomerReportingDataSource);
                    p(R.g.Zc, "vtp_awNewCustomer", "new_customer");
                    p(R.g.Fd, "vtp_awCustomerLTV", "customer_lifetime_value")
                }
                var q = b(c);
                if (q) {
                    var r = {};
                    h[R.g.Yc] = (r[c.vtp_conversionLabel] = q, r)
                }
                var t = "AW-" + c.vtp_conversionId,
                    u = t + "/" + c.vtp_conversionLabel;
                if (V(123)) {
                    Ns(t, c.vtp_transportUrl, {
                        source: 6,
                        fromContainerExecution: !0
                    }, function(y) {
                        Ps(y,
                            function(A) {
                                return !!{
                                    e: !0,
                                    c: !0,
                                    cid: !0,
                                    gct: !0,
                                    rep: !0,
                                    ogt_cons_disc: !0,
                                    ccd_ads_first: !0,
                                    ccd_ads_last: !0,
                                    ccd_fl_first: !0,
                                    ccd_fl_last: !0,
                                    ccd_ga_first: !0,
                                    ccd_ga_last: !0,
                                    ccd_mc_first: !0,
                                    ccd_mc_last: !0
                                }[A]
                            })
                    });
                    var v = {},
                        w = {
                            eventMetadata: (v.hit_type_override = "conversion", v),
                            noGtmEvent: !0,
                            isGtmEvent: !0
                        };
                    Su(Pu(u, R.g.Ca, h), c.vtp_gtmEventId, w);
                    I(c.vtp_gtmOnSuccess)
                } else {
                    var x = mq(lq(kq(jq(cq(new bq(c.vtp_gtmEventId, c.vtp_gtmPriorityId), h), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure), !0));
                    x.eventMetadata.hit_type_override =
                        "conversion";
                    SC(u, R.g.Ca, Date.now(), x)
                }
            })
        }();
    Z.o.read_dom_elements = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    type: c,
                    value: d
                }
            }(function(b) {
                Z.__read_dom_elements = b;
                Z.__read_dom_elements.s = "read_dom_elements";
                Z.__read_dom_elements.isVendorTemplate = !0;
                Z.__read_dom_elements.priorityOverride = 0;
                Z.__read_dom_elements.isInfrastructure = !1
            })(function(b) {
                for (var c = b.vtp_selectors || [], d = b.vtp_createPermissionError, e = [], f = [], g = 0; g < c.length; g++) {
                    var h = c[g];
                    switch (h.type) {
                        case "id":
                            e.push(h.value);
                            break;
                        case "css":
                            f.push(h.value)
                    }
                }
                return {
                    assert: function(l,
                        n, p) {
                        switch (n) {
                            case "id":
                                if (-1 < e.indexOf(p)) return;
                                break;
                            case "css":
                                if (-1 < f.indexOf(p)) return;
                                break;
                            default:
                                throw d(l, {}, "Unknown selector type " + n + ".");
                        }
                        throw d(l, {}, "Prohibited selector value " + p + " for selector type " + n + ".");
                    },
                    V: a
                }
            })
        }();
    Z.o.remm = ["google"],
        function() {
            (function(a) {
                Z.__remm = a;
                Z.__remm.s = "remm";
                Z.__remm.isVendorTemplate = !0;
                Z.__remm.priorityOverride = 0;
                Z.__remm.isInfrastructure = !1
            })(function(a) {
                for (var b = a.vtp_input, c = a.vtp_map || [], d = a.vtp_fullMatch, e = a.vtp_ignoreCase ? "gi" : "g", f = a.vtp_defaultValue, g = 0; g < c.length; g++) {
                    var h = c[g].key || "";
                    d && (h = "^" + h + "$");
                    var l = new RegExp(h, e);
                    if (l.test(b)) {
                        var n = c[g].value;
                        a.vtp_replaceAfterMatch && (n = String(b).replace(l, n));
                        f = n;
                        break
                    }
                }
                Sx(f, "remm", a.vtp_gtmEventId);
                return f
            })
        }();

    Z.o.logging = ["google"],
        function() {
            function a() {
                return {}
            }(function(b) {
                Z.__logging = b;
                Z.__logging.s = "logging";
                Z.__logging.isVendorTemplate = !0;
                Z.__logging.priorityOverride = 0;
                Z.__logging.isInfrastructure = !1
            })(function(b) {
                var c = b.vtp_environments || "debug",
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e) {
                        var f;
                        if (f = "all" !== c && !0) {
                            var g = !1;
                            f = !g
                        }
                        if (f) throw d(e, {}, "Logging is not enabled in all environments");
                    },
                    V: a
                }
            })
        }();


    Z.o.hid = ["google"],
        function() {
            (function(a) {
                Z.__hid = a;
                Z.__hid.s = "hid";
                Z.__hid.isVendorTemplate = !0;
                Z.__hid.priorityOverride = 0;
                Z.__hid.isInfrastructure = !1
            })(function() {
                return We.xf
            })
        }();

    Z.o.html = ["customScripts"],
        function() {
            function a(d, e, f, g) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var h = e.shift(),
                                l = a(d, e, f, g);
                            if ("SCRIPT" == String(h.nodeName).toUpperCase() && "text/gtmscript" == h.type) {
                                var n = H.createElement("script");
                                n.async = !1;
                                n.type = "text/javascript";
                                n.id = h.id;
                                n.text = h.text || h.textContent || h.innerHTML || "";
                                h.charset && (n.charset = h.charset);
                                var p = h.getAttribute("data-gtmsrc");
                                p && (n.src = p, lc(n, l));
                                d.insertBefore(n, null);
                                p || l()
                            } else if (h.innerHTML && 0 <= h.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var q = []; h.firstChild;) q.push(h.removeChild(h.firstChild));
                                d.insertBefore(h, null);
                                a(h, q, l, g)()
                            } else d.insertBefore(h, null), l()
                        } else f()
                    } catch (r) {
                        I(g)
                    }
                }
            }

            function b(d) {
                if (H.body) {
                    var e = d.vtp_gtmOnFailure,
                        f = Tx(d.vtp_html, d.vtp_gtmOnSuccess, e),
                        g = f.rl,
                        h = f.P;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? c(g, h, e) : a(H.body, yc(g), h, e)()
                } else Ex(function() {
                    b(d)
                }, 200)
            }
            var c = function(d, e, f) {
                ot(function() {
                    var g = google_tag_manager_external.postscribe.getPostscribe(),
                        h = {
                            done: e
                        },
                        l = H.createElement("div");
                    l.style.display = "none";
                    l.style.visibility = "hidden";
                    H.body.appendChild(l);
                    try {
                        g(l, d, h)
                    } catch (n) {
                        I(f)
                    }
                })
            };
            Z.__html = b;
            Z.__html.s =
                "html";
            Z.__html.isVendorTemplate = !0;
            Z.__html.priorityOverride = 0;
            Z.__html.isInfrastructure = !1
        }();
    Z.o.dbg = ["google"],
        function() {
            (function(a) {
                Z.__dbg = a;
                Z.__dbg.s = "dbg";
                Z.__dbg.isVendorTemplate = !0;
                Z.__dbg.priorityOverride = 0;
                Z.__dbg.isInfrastructure = !1
            })(function() {
                return !1
            })
        }();
    Z.o.access_dom_element_property = ["google"],
        function() {
            function a(b, c, d, e) {
                var f = {
                    property: e,
                    read: !1,
                    write: !1
                };
                switch (d) {
                    case "read":
                        f.read = !0;
                        break;
                    case "write":
                        f.write = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " operation " + d);
                }
                return f
            }(function(b) {
                Z.__access_dom_element_property = b;
                Z.__access_dom_element_property.s = "access_dom_element_property";
                Z.__access_dom_element_property.isVendorTemplate = !0;
                Z.__access_dom_element_property.priorityOverride = 0;
                Z.__access_dom_element_property.isInfrastructure = !1
            })(function(b) {
                for (var c = b.vtp_properties || [], d = b.vtp_createPermissionError, e = [], f = [], g = 0; g < c.length; g++) {
                    var h = c[g],
                        l = h.property;
                    h.read && e.push(l);
                    h.write && f.push(l)
                }
                return {
                    assert: function(n, p, q, r) {
                        if (!k(r)) throw d(n, {}, "Property must be a string.");
                        if ("read" === q) {
                            if (-1 < e.indexOf(r)) return
                        } else if ("write" === q) {
                            if (-1 < f.indexOf(r)) return
                        } else throw d(n, {}, "Operation must be either 'read' or 'write', was " + q);
                        throw d(n, {}, "Prohibited " + q + " on " + p.tagName + " property " + r + ".");
                    },
                    V: a
                }
            })
        }();



    Z.o.get_cookies = ["google"],
        function() {
            function a(b, c) {
                return {
                    name: c
                }
            }(function(b) {
                Z.__get_cookies = b;
                Z.__get_cookies.s = "get_cookies";
                Z.__get_cookies.isVendorTemplate = !0;
                Z.__get_cookies.priorityOverride = 0;
                Z.__get_cookies.isInfrastructure = !1
            })(function(b) {
                var c = b.vtp_cookieAccess || "specific",
                    d = b.vtp_cookieNames || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g) {
                        if (!k(g)) throw e(f, {}, "Cookie name must be a string.");
                        if ("any" !== c && !("specific" === c && 0 <= d.indexOf(g))) throw e(f, {}, 'Access to cookie "' +
                            g + '" is prohibited.');
                    },
                    V: a
                }
            })
        }();
    var ZG = {};
    ZG.macro = function(a) {
        if (We.Wg.hasOwnProperty(a)) return We.Wg[a]
    }, ZG.onHtmlSuccess = We.qj(!0), ZG.onHtmlFailure = We.qj(!1);
    ZG.dataLayer = mi;
    ZG.callback = function(a) {
        ci.hasOwnProperty(a) && Ga(ci[a]) && ci[a]();
        delete ci[a]
    };
    ZG.bootstrap = 0;
    ZG._spx = !1;

    function $G() {
        Mh[L.C] = Mh[L.C] || ZG;
        L.Za && (Mh["ctid_" + L.Za] = ZG);
        Ol();
        Rl() || m(Sl(), function(a, b) {
            Ns(a, b.transportUrl, b.context);
            P(92)
        });
        Za(di, Z.o);
        Xe();
        Ye = nf
    }
    (function(a) {
        function b() {
            l = H.documentElement.getAttribute("data-tag-assistant-present");
            Gw(l) && (h = g.sk)
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (H.referrer) {
                var d = fj(H.referrer);
                c = "cct.google" === cj(d, "host")
            }
            if (!c) {
                var e = ml("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0, qc("https://cct.google/taggy/agent.js"))
        }
        if (Yh) a();
        else {
            var f = function(u) {
                    var v = "GTM",
                        w = "GTM";
                    Sh ? (v = "OGT", w = "GTAG") : Yh && (w = v = "OPT");
                    var x = z["google.tagmanager.debugui2.queue"];
                    x || (x = [],
                        z["google.tagmanager.debugui2.queue"] = x, qc("https://" + Lh.Xe + "/debug/bootstrap?id=" + L.C + "&src=" + w + "&cond=" + u + "&gtm=" + Ul()));
                    var y = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: jc,
                            containerProduct: v,
                            debug: !1,
                            id: L.C,
                            destinations: Ll()
                        }
                    };
                    y.data.resume = function() {
                        a()
                    };
                    Lh.Tj && (y.data.initialPublish = !0);
                    x.push(y)
                },
                g = {
                    Em: 1,
                    tk: 2,
                    Ek: 3,
                    Vj: 4,
                    sk: 5
                },
                h = void 0,
                l = void 0,
                n = dj(z.location, "query", !1, void 0, "gtm_debug");
            Gw(n) && (h = g.tk);
            if (!h && H.referrer) {
                var p = fj(H.referrer);
                "tagassistant.google.com" === cj(p, "host") && (h = g.Ek)
            }
            if (!h) {
                var q =
                    ml("__TAG_ASSISTANT");
                q.length && q[0].length && (h = g.Vj)
            }
            h || b();
            if (!h && Hw(l)) {
                var r = function() {
                        if (t) return !0;
                        t = !0;
                        b();
                        h && jc ? f(h) : a()
                    },
                    t = !1;
                uc(H, "TADebugSignal", function() {
                    r()
                }, !1);
                z.setTimeout(function() {
                    r()
                }, 200)
            } else h && jc ? f(h) : a()
        }
    })(function() {
        if (V(70)) {}
        hk().m();
        Vm();
        if (L.Za ? Mh["ctid_" + L.Za] : Mh[L.C]) {
            var b = Mh.zones;
            b && b.unregisterChild(Kl());
        } else {
            (V(11) || V(13) || V(55) || V(48)) && Jn();
            for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) Oe.push(d[e]);
            for (var f = c.tags || [], g = 0; g < f.length; g++) Re.push(f[g]);
            for (var h = c.predicates || [], l = 0; l < h.length; l++) Qe.push(h[l]);
            for (var n = c.rules || [], p = 0; p < n.length; p++) {
                for (var q = n[p], r = {}, t = 0; t < q.length; t++) r[q[t][0]] = Array.prototype.slice.call(q[t], 1);
                Pe.push(r)
            }
            Te = Z;
            Ue = qy;
            uf = new tf;
            var u = data.sandboxed_scripts,
                v = data.security_groups,
                w = data.infra;
            a: {
                var x = data.runtime || [],
                    y = data.runtime_lines;xF = new le;AF();Ne = yF();
                var A = xF,
                    B = uF();ob(A.h, "require", B);
                for (var D = [], E = 0; E < x.length; E++) {
                    var J = x[E];
                    if (!Ka(J) || 3 > J.length) {
                        if (0 === J.length) continue;
                        break a
                    }
                    y && y[E] && y[E].length && ff(J, y[E]);
                    try {
                        xF.execute(J), V(119) && hn && 50 === J[0] && D.push(J[1])
                    } catch (Ad) {}
                }
                V(119) && (Ze = D)
            }
            if (void 0 !== u)
                for (var G = ["sandboxedScripts"], O = 0; O < u.length; O++) {
                    var Q = u[O].replace(/^_*/, "");
                    di[Q] =
                        G
                }
            BF(v);
            if (void 0 !== w)
                for (var da = 0; da < w.length; da++) ei[w[da]] = !0;
            $G();
            if (V(102)) {
                for (var aa = Di["7"], U = aa ? aa.split("|") : [], S = {}, ma = 0; ma < U.length; ma++) S[U[ma]] = !0;
                for (var ha = 0; ha < Mk.length; ha++) {
                    var ia = Mk[ha],
                        Ha = S[ia] ? "granted" : "denied";
                    ok().implicit(ia, Ha)
                }
            }
            Fw();
            jt = !1;
            kt = 0;
            if ("interactive" == H.readyState && !H.createEventObject || "complete" == H.readyState) mt();
            else {
                uc(H, "DOMContentLoaded", mt);
                uc(H, "readystatechange", mt);
                if (H.createEventObject && H.documentElement.doScroll) {
                    var Wa = !0;
                    try {
                        Wa = !z.frameElement
                    } catch (Ad) {}
                    Wa &&
                        nt()
                }
                uc(z, "load", mt)
            }
            Uv = !1;
            "complete" === H.readyState ? Wv() : uc(z, "load", Wv);
            hn && (cn(vn), z.setInterval(un, 864E5));
            cn(sy);
            V(119) && cn(St);
            cn(Pt);
            cn(ty);
            cn(Bu);
            cn(xn);
            cn(bt);
            cn($s);
            cn(Fu);
            cn(rv);

            google_tag_manager_external.postscribe.installPostscribe();
            bx();
            Ci(1);
            bi = Va();
            ZG.bootstrap = bi;
            if (V(70)) {}
        }
    });


})()