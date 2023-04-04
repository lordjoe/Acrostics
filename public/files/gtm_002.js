// Copyright 2012 Google Inc. All rights reserved.
(function (w, g) {
    w[g] = w[g] || {};
    w[g].e = function (s) {
        return eval(s);
    };
})(window, 'google_tag_manager');
(function () {

    var data = {
        "resource": {
            "version": "460",

            "macros": [{"function": "__e"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.pageType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "viewport.scrollTop"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "viewport.height"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "viewport.width"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){if(\"object\"!==typeof window.nytAnalytics)return\"\";var a=", ["escape", ["macro", 1], 8, 16], "||\"\";a=a.toLowerCase();window.nytAnalytics.comScorePage=window.nytAnalytics.comScorePage||1;if(!a||\"oak\"===a||\"article\"===a){a=window.nytAnalytics.comScorePage;var c=", ["escape", ["macro", 2], 8, 16], ",b=", ["escape", ["macro", 3], 8, 16], ",d=768\u003E", ["escape", ["macro", 4], 8, 16], ";b=d?4*b:2*b;window.nytAnalytics.comScorePage=Math.floor(c\/b)+1;return window.nytAnalytics.comScorePage!==a?\"track\":\"\"}})();"]
            }, {"function": "__k", "vtp_decodeCookie": false, "vtp_name": "NYT-T"}, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "nyt-purr"
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {"function": "__j", "vtp_name": "location.search"}, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.name"
            }, {"function": "__jsm", "vtp_javascript": ["template", "(function(){return!1})();"]}, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return!0})();"]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 11],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": ["macro", 12],
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "test-whitelist", "value", ["macro", 13]], ["map", "key", "article-complete", "value", ["macro", 13]], ["map", "key", "lire-modal", "value", ["macro", 13]], ["map", "key", "LogIn", "value", ["macro", 13]], ["map", "key", "welcome ad", "value", ["macro", 13]], ["map", "key", "review", "value", ["macro", 13]], ["map", "key", "Programs", "value", ["macro", 13]], ["map", "key", "vi-beta-tools", "value", ["macro", 13]], ["map", "key", "inline-message", "value", ["macro", 13]], ["map", "key", "newsletters", "value", ["macro", 13]], ["map", "key", "video-player-share", "value", ["macro", 13]], ["map", "key", "gateway", "value", ["macro", 13]], ["map", "key", "audio-player", "value", ["macro", 13]], ["map", "key", "share-tools", "value", ["macro", 13]], ["map", "key", "comments", "value", ["macro", 13]], ["map", "key", "acm", "value", ["macro", 13]], ["map", "key", "video-player", "value", ["macro", 13]], ["map", "key", "first-scroll", "value", ["macro", 13]], ["map", "key", "^games-prototype.*", "value", ["macro", 13]], ["map", "key", "[M|m]odal", "value", ["macro", 13]], ["map", "key", "settings", "value", ["macro", 13]], ["map", "key", "Puzzle", "value", ["macro", 13]], ["map", "key", "general", "value", ["macro", 13]], ["map", "key", "gameplay", "value", ["macro", 13]], ["map", "key", "^interactive.*", "value", ["macro", 13]], ["map", "key", "out_bound_clicks", "value", ["macro", 13]], ["map", "key", "tap-story", "value", ["macro", 13]]]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.ga.eventCategory"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 15], 8, 16], "||", ["escape", ["macro", 11], 8, 16], ";return\"object\"===typeof window.nytAnalytics.gaEvent\u0026\u0026\"object\"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026\"function\"===typeof window.nytAnalytics.gaEvent[a].category\u0026\u0026window.nytAnalytics.gaEvent[a].category()||", ["escape", ["macro", 16], 8, 16], "||a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.url"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "gclid",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "dclid",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "application.name"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "query",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 18], 8, 16], "||document.location.protocol+\"\/\/\"+document.location.host+document.location.pathname,a=\"\";", ["escape", ["macro", 19], 8, 16], "\u0026\u0026(a+=\"?gclid\\x3d\"+", ["escape", ["macro", 19], 8, 16], ");", ["escape", ["macro", 20], 8, 16], "\u0026\u0026(a+=(\"\"===a?\"?\":\"\\x26\")+\"dclid\\x3d\"+", ["escape", ["macro", 20], 8, 16], ");\"nyt-help\"===", ["escape", ["macro", 21], 8, 16], "\u0026\u0026", ["escape", ["macro", 22], 8, 16], "\u0026\u0026(a+=(\"\"===a?\"?\":\"\\x26\")+\"query\\x3d\"+", ["escape", ["macro", 22], 8, 16], ");return\"\"===a?b:b+a})();"]
            }, {"function": "__j", "vtp_name": "nytAnalytics.campaignMap.campaignSource"}, {
                "function": "__j",
                "vtp_name": "nytAnalytics.campaignMap.campaignMedium"
            }, {"function": "__j", "vtp_name": "nytAnalytics.campaignMap.campaignName"}, {
                "function": "__j",
                "vtp_name": "nytAnalytics.campaignMap.campaignContent"
            }, {"function": "__j", "vtp_name": "nytAnalytics.campaignMap.campaignKeyword"}, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 29],
                "vtp_name": "referrer.url"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 30], 8, 16], "\u0026\u0026\"null\"!==", ["escape", ["macro", 30], 8, 16], "?", ["escape", ["macro", 30], 8, 16], ":", ["escape", ["macro", 29], 8, 16], "})();"]
            }, {"function": "__c", "vtp_value": "1"}, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.CG?nytAnalytics.pagemeta.CG.toLowerCase():\"null\"})();"]
            }, {"function": "__c", "vtp_value": "2"}, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.SCG?nytAnalytics.pagemeta.SCG.toLowerCase():\"null\"})();"]
            }, {"function": "__c", "vtp_value": "3"}, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.PT?nytAnalytics.pagemeta.PT.toLowerCase():\"null\"})();"]
            }, {"function": "__c", "vtp_value": "4"}, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.PST?nytAnalytics.pagemeta.PST.toLowerCase():\"null\"})();"]
            }, {"function": "__c", "vtp_value": "1"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.url"
            }, {"function": "__c", "vtp_value": "2"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 12],
                "vtp_name": "asset.is_refresh"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a;(a=document.location.href)\u0026\u0026\"string\"===typeof a\u0026\u0026(a=a.replace(\/=[!#\\$%'\\*\\+\\-\\\/=\\?\\^_`\\{\\|\\}~;\\.,\"\\(\\),:;\u003C\u003E\\[\\\\\\]\\w]+(@|%40)[^.]+\\.[^\u0026]+\/g,\"\\x3demail_block\"));if(", ["escape", ["macro", 43], 8, 16], "){var b=-1\u003Ca.indexOf(\"?\")?\"\\x26\":\"?\";a+=b+\"WT.z_jog\\x3d1\"}return a})();"]
            }, {"function": "__c", "vtp_value": "3"}, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.location.search;", ["escape", ["macro", 43], 8, 16], "\u0026\u0026(connector=-1\u003CcleanURL.indexOf(\"?\")?\"\\x26\":\"?\",a+=connector+\"WT.z_jog\\x3d1\");return a})();"]
            }, {"function": "__c", "vtp_value": "4"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.section"
            }, {"function": "__c", "vtp_value": "5"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.paid_post"
            }, {"function": "__c", "vtp_value": "6"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.name"
            }, {"function": "__c", "vtp_value": "7"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.pagetype"
            }, {"function": "__c", "vtp_value": "8"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.region"
            }, {"function": "__c", "vtp_value": "9"}, {"function": "__c", "vtp_value": "10"}, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return nytAnalytics.derivedReferrer.source?nytAnalytics.derivedReferrer.source:\"null\"})();"]
            }, {"function": "__c", "vtp_value": "11"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.collection"
            }, {"function": "__c", "vtp_value": "12"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.subsection"
            }, {"function": "__c", "vtp_value": "13"}, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=nytAnalytics.derivedReferrer.subchannel?nytAnalytics.derivedReferrer.subchannel:\"null\";return a})();"]
            }, {"function": "__c", "vtp_value": "14"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "asset.derivedDesk"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 67], 8, 16], "?", ["escape", ["macro", 67], 8, 16], ":\"null\";return a})();"]
            }, {"function": "__c", "vtp_value": "15"}, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=nytAnalytics.derivedReferrer.type?nytAnalytics.derivedReferrer.type:\"null\";return a})();"]
            }, {"function": "__c", "vtp_value": "16"}, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=nytAnalytics.derivedReferrer.channel?nytAnalytics.derivedReferrer.channel:\"null\";return a})();"]
            }, {"function": "__c", "vtp_value": "17"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.id"
            }, {"function": "__c", "vtp_value": "18"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.authors"
            }, {"function": "__c", "vtp_value": "19"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.headline"
            }, {"function": "__c", "vtp_value": "20"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.kicker"
            }, {"function": "__c", "vtp_value": "21"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.pageType"
            }, {"function": "__c", "vtp_value": "22"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.printPublishDate"
            }, {"function": "__c", "vtp_value": "23"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.section"
            }, {"function": "__c", "vtp_value": "24"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.gatewayViewed"
            }, {"function": "__c", "vtp_value": "25"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.subsection"
            }, {"function": "__c", "vtp_value": "26"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.publishedTimestamp"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 92], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 92], 8, 16], ",\"year\"):\"null\"})();"]
            }, {"function": "__c", "vtp_value": "27"}, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 92], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 92], 8, 16], ",\"date\"):\"null\"})();"]
            }, {"function": "__c", "vtp_value": "28"}, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 92], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 92], 8, 16], ",\"day\"):\"null\"})();"]
            }, {"function": "__c", "vtp_value": "29"}, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 92], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 92], 8, 16], ",\"hours\"):\"null\"})();"]
            }, {"function": "__c", "vtp_value": "30"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "null",
                "vtp_name": "asset.lastUpdatedTimestamp"
            }, {"function": "__c", "vtp_value": "31"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.characterCount"
            }, {"function": "__c", "vtp_value": "32"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.collectionName"
            }, {"function": "__c", "vtp_value": "33"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.collectionType"
            }, {"function": "__c", "vtp_value": "34"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.contentTone"
            }, {"function": "__c", "vtp_value": "35"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.series"
            }, {"function": "__c", "vtp_value": "36"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "asset.slug"
            }, {"function": "__c", "vtp_value": "37"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.wordCount"
            }, {"function": "__c", "vtp_value": "38"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.desk"
            }, {"function": "__c", "vtp_value": "39"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.typeOfMaterials"
            }, {"function": "__c", "vtp_value": "40"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.sourceNewsOrg"
            }, {"function": "__c", "vtp_value": "41"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.sourceUSvsIntl"
            }, {"function": "__c", "vtp_value": "42"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "application.name"
            }, {"function": "__c", "vtp_value": "43"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.desFacets"
            }, {"function": "__c", "vtp_value": "44"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.orgFacets"
            }, {"function": "__c", "vtp_value": "45"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.perFacets"
            }, {"function": "__c", "vtp_value": "46"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.geoFacets"
            }, {"function": "__c", "vtp_value": "47"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.paidPostParameter"
            }, {"function": "__c", "vtp_value": "48"}, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 92], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 92], 8, 16], ",\"month\"):\"null\"})();"]
            }, {"function": "__c", "vtp_value": "49"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.wordCount"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return 100\u003E", ["escape", ["macro", 139], 8, 16], "?\"blurb_under_100\":400\u003E", ["escape", ["macro", 139], 8, 16], "?\"super_short_100_399\":800\u003E", ["escape", ["macro", 139], 8, 16], "?\"short_400_799\":1200\u003E", ["escape", ["macro", 139], 8, 16], "?\"medium_800_1199\":1600\u003E=", ["escape", ["macro", 139], 8, 16], "?\"long_1200_1600\":1600\u003C", ["escape", ["macro", 139], 8, 16], "?\"heave_over_1600\":\"\"})();"]
            }, {"function": "__c", "vtp_value": "50"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.pageSubType"
            }, {"function": "__c", "vtp_value": "51"}, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 21], 8, 16], "})();"]
            }, {"function": "__c", "vtp_value": "52"}, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.querySelector('meta[name\\x3d\"applicationName\"]');return a?a.content:\"\"})();"]
            }, {"function": "__c", "vtp_value": "53"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.originatingDesk"
            }, {"function": "__c", "vtp_value": "54"}, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 67], 8, 16], "?", ["escape", ["macro", 67], 8, 16], ":\"null\";return a})();"]
            }, {"function": "__c", "vtp_value": "55"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.isLoggedIn"
            }, {"function": "__c", "vtp_value": "56"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.type"
            }, {"function": "__c", "vtp_value": "57"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.type"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"sub\"===", ["escape", ["macro", 156], 8, 16], "?1:0})();"]
            }, {"function": "__c", "vtp_value": "58"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.regiId"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 159], 8, 16], "?1:0})();"]
            }, {"function": "__c", "vtp_value": "59"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.regiId"
            }, {"function": "__c", "vtp_value": "60"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.regiId"
            }, {"function": "__c", "vtp_value": "61"}, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "nyt-m"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var g=function(b,a){if((b=(new RegExp(b+\"\\x3d([il]{1}).([^\\x26]+)\")).exec(a))\u0026\u00263\u003C=b.length)switch(b[1]){case \"i\":return parseInt(b[2],10);case \"l\":return b[2].split(\".\").slice(1).map(function(a){return parseInt(a,10)})}return null},a,d={},e=", ["escape", ["macro", 166], 8, 16], ";if(e){var c=[\"v\",\"t\"];for(a=0;a\u003Cc.length;a++){var f=g(c[a],e);null!==f\u0026\u0026(d[c[a]]=f)}}return d})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof ", ["escape", ["macro", 167], 8, 16], "?", ["escape", ["macro", 167], 8, 16], ".v:\"\"})();"]
            }, {"function": "__c", "vtp_value": ["macro", 168]}, {
                "function": "__c",
                "vtp_value": "62"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.edition"
            }, {"function": "__c", "vtp_value": "63"}, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "nyt-a"
            }, {"function": "__c", "vtp_value": ["macro", 173]}, {
                "function": "__c",
                "vtp_value": "64"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.isLoggedIn"
            }, {"function": "__c", "vtp_value": "65"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.type"
            }, {"function": "__c", "vtp_value": "66"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.DMA"
            }, {"function": "__c", "vtp_value": "67"}, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"sub\"===", ["escape", ["macro", 156], 8, 16], "?1:0})();"]
            }, {"function": "__c", "vtp_value": "68"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.channels"
            }, {"function": "__c", "vtp_value": "69"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.savedArticles"
            }, {"function": "__c", "vtp_value": "72"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.creative"
            }, {"function": "__c", "vtp_value": "73"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.flight"
            }, {"function": "__c", "vtp_value": "74"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.slideshow.length"
            }, {"function": "__c", "vtp_value": "75"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.slideshow.currentEntry"
            }, {"function": "__c", "vtp_value": "76"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.slideshow.title"
            }, {"function": "__c", "vtp_value": "79"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.search.process"
            }, {"function": "__c", "vtp_value": "80"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.search.mood"
            }, {"function": "__c", "vtp_value": "81"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.originalURL"
            }, {"function": "__c", "vtp_value": "82"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.campaignInternal"
            }, {"function": "__c", "vtp_value": "83"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.campaignInternal"
            }, {"function": "__c", "vtp_value": "84"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "application.beta"
            }, {"function": "__c", "vtp_value": "85"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.audioFranchise"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.mData.series"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 211],
                "vtp_name": "video.mData.series"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 11],
                "vtp_defaultValue": ["macro", 210],
                "vtp_map": ["list", ["map", "key", "audio-player", "value", ["macro", 212]]]
            }, {"function": "__c", "vtp_value": "86"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.regiCreateDate"
            }, {"function": "__c", "vtp_value": "87"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.newsletter.subscriber"
            }, {"function": "__c", "vtp_value": "88"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "search.era"
            }, {"function": "__c", "vtp_value": "89"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "search.genre"
            }, {"function": "__c", "vtp_value": "90"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "search.subgenre"
            }, {"function": "__c", "vtp_value": "91"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.newsletter.subscribeDate"
            }, {"function": "__c", "vtp_value": "92"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.offerID"
            }, {"function": "__c", "vtp_value": "93"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscription.stopped"
            }, {"function": "__c", "vtp_value": "94"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscription.corp"
            }, {"function": "__c", "vtp_value": "95"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscriptions.purchaseDate"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscriptions.activeSubscriberSince"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 233], 8, 16], "||", ["escape", ["macro", 234], 8, 16], ";try{var b=nytAnalytics.formatDates(a,\"dateAlone\")}catch(c){}return b})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 235],
                "vtp_name": "user.subscriptions.purchaseDate"
            }, {"function": "__c", "vtp_value": "96"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscriptions.activeBundles.0"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 238],
                "vtp_name": "user.subscriptions.bundle"
            }, {"function": "__c", "vtp_value": "97"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.bundeFilter"
            }, {"function": "__c", "vtp_value": "98"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.payflowType"
            }, {"function": "__c", "vtp_value": "99"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "market.firstSubLanding"
            }, {"function": "__c", "vtp_value": "100"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.IntGraphics"
            }, {"function": "__c", "vtp_value": "101"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.multiLingual"
            }, {"function": "__c", "vtp_value": "102"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.save_type"
            }, {"function": "__c", "vtp_value": "104"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.well.guideTitle"
            }, {"function": "__c", "vtp_value": "105"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.well.cardPosition"
            }, {"function": "__c", "vtp_value": "109"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.realEstateChannel"
            }, {"function": "__c", "vtp_value": "110"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.realEstatePageType"
            }, {"function": "__c", "vtp_value": "111"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.realEstateModuleID"
            }, {"function": "__c", "vtp_value": "112"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.realEstateModuleType"
            }, {"function": "__c", "vtp_value": "113"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.realEstateModuleItemID"
            }, {"function": "__c", "vtp_value": "114"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.payflowsProduct"
            }, {"function": "__c", "vtp_value": "116"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "payflows.region"
            }, {"function": "__c", "vtp_value": "117"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "payflows.rate"
            }, {"function": "__c", "vtp_value": "118"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.story_form"
            }, {"function": "__c", "vtp_value": "119"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.spotlights"
            }, {"function": "__c", "vtp_value": "120"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.krux_segment"
            }, {"function": "__c", "vtp_value": "121"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.print_section"
            }, {"function": "__c", "vtp_value": "122"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.referrer"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 281],
                "vtp_name": "video.referrer"
            }, {"function": "__c", "vtp_value": "123"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.contentId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 284],
                "vtp_name": "video.contentId"
            }, {"function": "__c", "vtp_value": "124"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.mData.videoAdDuration"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 287],
                "vtp_name": "video.mData.videoAdDuration"
            }, {"function": "__c", "vtp_value": "125"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.mData.videoAdPosition"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 290],
                "vtp_name": "video.mData.videoAdPosition"
            }, {"function": "__c", "vtp_value": "126"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.mData.videoDuration"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 293],
                "vtp_name": "video.mData.videoDuration"
            }, {"function": "__c", "vtp_value": "127"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.durationGroup"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 296],
                "vtp_name": "video.durationGroup"
            }, {"function": "__c", "vtp_value": "128"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.https_test"
            }, {"function": "__c", "vtp_value": "129"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking.sessionStart"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=new Date(", ["escape", ["macro", 301], 8, 16], ");return a=a.getHours()})();"]
            }, {"function": "__c", "vtp_value": "130"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.www_testID"
            }, {"function": "__c", "vtp_value": "131"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.mobileweb_testID"
            }, {"function": "__c", "vtp_value": "132"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.qa_dimension_three"
            }, {"function": "__c", "vtp_value": "133"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "do.we.need.this"
            }, {"function": "__c", "vtp_value": "134"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.qa_dimension_four"
            }, {"function": "__c", "vtp_value": "135"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "asset.column"
            }, {"function": "__c", "vtp_value": "136"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.optimizely"
            }, {"function": "__c", "vtp_value": "137"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.optimizely"
            }, {"function": "__c", "vtp_value": "138"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "media.mData.videoFranchise"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 320],
                "vtp_name": "video.mData.videoFranchise"
            }, {"function": "__c", "vtp_value": "139"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.mData.videoSection"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 323],
                "vtp_name": "video.mData.videoSection"
            }, {"function": "__c", "vtp_value": "140"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.adblock_enabled"
            }, {"function": "__c", "vtp_value": "141"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.mData.videoPrimaryPlaylistId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 328],
                "vtp_name": "video.mData.videoPrimaryPlaylistId"
            }, {"function": "__c", "vtp_value": "142"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.mData.videoPrimaryPlaylistName"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 331],
                "vtp_name": "video.mData.videoPrimaryPlaylistName"
            }, {"function": "__c", "vtp_value": "143"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.listing.id"
            }, {"function": "__c", "vtp_value": "144"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.listing.price"
            }, {"function": "__c", "vtp_value": "145"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.buildingID"
            }, {"function": "__c", "vtp_value": "146"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.new"
            }, {"function": "__c", "vtp_value": "147"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.reduced"
            }, {"function": "__c", "vtp_value": "148"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.open_house"
            }, {"function": "__c", "vtp_value": "149"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "newsletter.interface"
            }, {"function": "__c", "vtp_value": "150"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "newsletter.subinterface"
            }, {"function": "__c", "vtp_value": "154"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.campaignID_ecommerce"
            }, {"function": "__c", "vtp_value": "160"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.url_path_filter"
            }, {"function": "__c", "vtp_value": "162"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.url"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 354],
                "vtp_name": "video.url"
            }, {"function": "__c", "vtp_value": "163"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.mData.videoType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 357],
                "vtp_name": "video.mData.videoType"
            }, {"function": "__c", "vtp_value": "164"}, {
                "function": "__c",
                "vtp_value": ["macro", 173]
            }, {"function": "__c", "vtp_value": "166"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.missing_paper.eligibility"
            }, {"function": "__c", "vtp_value": "167"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.missing_paper.resolution_type"
            }, {"function": "__c", "vtp_value": "168"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.missing_paper.redelivery_request"
            }, {"function": "__c", "vtp_value": "169"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.missing_paper.user_state"
            }, {"function": "__c", "vtp_value": "172"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.program.breakpoint.initial"
            }, {"function": "__c", "vtp_value": "173"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 370],
                "vtp_name": "presentation.program.breakpoint.rendered"
            }, {"function": "__c", "vtp_value": "179"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.contentId"
            }, {"function": "__c", "vtp_value": "180"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoName"
            }, {"function": "__c", "vtp_value": "181"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoType"
            }, {"function": "__c", "vtp_value": "182"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.section"
            }, {"function": "__c", "vtp_value": "183"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.subSection"
            }, {"function": "__c", "vtp_value": "184"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.duration"
            }, {"function": "__c", "vtp_value": "185"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.durationGroup"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){notprod=!document.location.hostname.match(\/nytimes\\.com\/)||!!document.location.hostname.match(\/test\\.|dev\\.|stg\\.\/);switch(", ["escape", ["macro", 21], 8, 16], "){case \"nyt-help\":return\"UA-58630905-28\";default:return notprod?\"UA-58630905-7\":\"UA-58630905-2\"}})();"]
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "cookieName", "value", "walley"], ["map", "fieldName", "location", "value", ["macro", 23]], ["map", "fieldName", "campaignSource", "value", ["macro", 24]], ["map", "fieldName", "campaignMedium", "value", ["macro", 25]], ["map", "fieldName", "campaignName", "value", ["macro", 26]], ["map", "fieldName", "campaignContent", "value", ["macro", 27]], ["map", "fieldName", "campaignKeyword", "value", ["macro", 28]], ["map", "fieldName", "referrer", "value", ["macro", 31]], ["map", "fieldName", "anonymizeIp", "value", "true"]],
                "vtp_useHashAutoLink": false,
                "vtp_contentGroup": ["list", ["map", "index", ["macro", 32], "group", ["macro", 33]], ["map", "index", ["macro", 34], "group", ["macro", 35]], ["map", "index", ["macro", 36], "group", ["macro", 37]], ["map", "index", ["macro", 38], "group", ["macro", 39]]],
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 40], "dimension", ["macro", 41]], ["map", "index", ["macro", 42], "dimension", ["macro", 44]], ["map", "index", ["macro", 45], "dimension", ["macro", 46]], ["map", "index", ["macro", 47], "dimension", ["macro", 48]], ["map", "index", ["macro", 49], "dimension", ["macro", 50]], ["map", "index", ["macro", 51], "dimension", ["macro", 52]], ["map", "index", ["macro", 53], "dimension", ["macro", 54]], ["map", "index", ["macro", 55], "dimension", ["macro", 56]], ["map", "index", ["macro", 57], "dimension", ["macro", 57]], ["map", "index", ["macro", 58], "dimension", ["macro", 59]], ["map", "index", ["macro", 60], "dimension", ["macro", 61]], ["map", "index", ["macro", 62], "dimension", ["macro", 63]], ["map", "index", ["macro", 64], "dimension", ["macro", 65]], ["map", "index", ["macro", 66], "dimension", ["macro", 68]], ["map", "index", ["macro", 69], "dimension", ["macro", 70]], ["map", "index", ["macro", 71], "dimension", ["macro", 72]], ["map", "index", ["macro", 73], "dimension", ["macro", 74]], ["map", "index", ["macro", 75], "dimension", ["macro", 76]], ["map", "index", ["macro", 77], "dimension", ["macro", 78]], ["map", "index", ["macro", 79], "dimension", ["macro", 80]], ["map", "index", ["macro", 81], "dimension", ["macro", 82]], ["map", "index", ["macro", 83], "dimension", ["macro", 84]], ["map", "index", ["macro", 85], "dimension", ["macro", 86]], ["map", "index", ["macro", 87], "dimension", ["macro", 88]], ["map", "index", ["macro", 89], "dimension", ["macro", 90]], ["map", "index", ["macro", 91], "dimension", ["macro", 93]], ["map", "index", ["macro", 94], "dimension", ["macro", 95]], ["map", "index", ["macro", 96], "dimension", ["macro", 97]], ["map", "index", ["macro", 98], "dimension", ["macro", 99]], ["map", "index", ["macro", 100], "dimension", ["macro", 101]], ["map", "index", ["macro", 102], "dimension", ["macro", 103]], ["map", "index", ["macro", 104], "dimension", ["macro", 105]], ["map", "index", ["macro", 106], "dimension", ["macro", 107]], ["map", "index", ["macro", 108], "dimension", ["macro", 109]], ["map", "index", ["macro", 110], "dimension", ["macro", 111]], ["map", "index", ["macro", 112], "dimension", ["macro", 113]], ["map", "index", ["macro", 114], "dimension", ["macro", 115]], ["map", "index", ["macro", 116], "dimension", ["macro", 117]], ["map", "index", ["macro", 118], "dimension", ["macro", 119]], ["map", "index", ["macro", 120], "dimension", ["macro", 121]], ["map", "index", ["macro", 122], "dimension", ["macro", 123]], ["map", "index", ["macro", 124], "dimension", ["macro", 125]], ["map", "index", ["macro", 126], "dimension", ["macro", 127]], ["map", "index", ["macro", 128], "dimension", ["macro", 129]], ["map", "index", ["macro", 130], "dimension", ["macro", 131]], ["map", "index", ["macro", 132], "dimension", ["macro", 133]], ["map", "index", ["macro", 134], "dimension", ["macro", 135]], ["map", "index", ["macro", 136], "dimension", ["macro", 137]], ["map", "index", ["macro", 138], "dimension", ["macro", 140]], ["map", "index", ["macro", 141], "dimension", ["macro", 142]], ["map", "index", ["macro", 143], "dimension", ["macro", 144]], ["map", "index", ["macro", 145], "dimension", ["macro", 146]], ["map", "index", ["macro", 147], "dimension", ["macro", 148]], ["map", "index", ["macro", 149], "dimension", ["macro", 150]], ["map", "index", ["macro", 151], "dimension", ["macro", 152]], ["map", "index", ["macro", 153], "dimension", ["macro", 154]], ["map", "index", ["macro", 155], "dimension", ["macro", 157]], ["map", "index", ["macro", 158], "dimension", ["macro", 160]], ["map", "index", ["macro", 161], "dimension", ["macro", 162]], ["map", "index", ["macro", 163], "dimension", ["macro", 164]], ["map", "index", ["macro", 165], "dimension", ["macro", 169]], ["map", "index", ["macro", 170], "dimension", ["macro", 171]], ["map", "index", ["macro", 172], "dimension", ["macro", 174]], ["map", "index", ["macro", 175], "dimension", ["macro", 176]], ["map", "index", ["macro", 177], "dimension", ["macro", 178]], ["map", "index", ["macro", 179], "dimension", ["macro", 180]], ["map", "index", ["macro", 181], "dimension", ["macro", 182]], ["map", "index", ["macro", 183], "dimension", ["macro", 184]], ["map", "index", ["macro", 185], "dimension", ["macro", 186]], ["map", "index", ["macro", 187], "dimension", ["macro", 188]], ["map", "index", ["macro", 189], "dimension", ["macro", 190]], ["map", "index", ["macro", 191], "dimension", ["macro", 192]], ["map", "index", ["macro", 193], "dimension", ["macro", 194]], ["map", "index", ["macro", 195], "dimension", ["macro", 196]], ["map", "index", ["macro", 197], "dimension", ["macro", 198]], ["map", "index", ["macro", 199], "dimension", ["macro", 200]], ["map", "index", ["macro", 201], "dimension", ["macro", 202]], ["map", "index", ["macro", 203], "dimension", ["macro", 204]], ["map", "index", ["macro", 205], "dimension", ["macro", 206]], ["map", "index", ["macro", 207], "dimension", ["macro", 208]], ["map", "index", ["macro", 209], "dimension", ["macro", 213]], ["map", "index", ["macro", 214], "dimension", ["macro", 215]], ["map", "index", ["macro", 216], "dimension", ["macro", 217]], ["map", "index", ["macro", 218], "dimension", ["macro", 219]], ["map", "index", ["macro", 220], "dimension", ["macro", 221]], ["map", "index", ["macro", 222], "dimension", ["macro", 223]], ["map", "index", ["macro", 224], "dimension", ["macro", 225]], ["map", "index", ["macro", 226], "dimension", ["macro", 227]], ["map", "index", ["macro", 228], "dimension", ["macro", 229]], ["map", "index", ["macro", 230], "dimension", ["macro", 231]], ["map", "index", ["macro", 232], "dimension", ["macro", 236]], ["map", "index", ["macro", 237], "dimension", ["macro", 239]], ["map", "index", ["macro", 240], "dimension", ["macro", 241]], ["map", "index", ["macro", 242], "dimension", ["macro", 243]], ["map", "index", ["macro", 244], "dimension", ["macro", 245]], ["map", "index", ["macro", 246], "dimension", ["macro", 247]], ["map", "index", ["macro", 248], "dimension", ["macro", 249]], ["map", "index", ["macro", 250], "dimension", ["macro", 251]], ["map", "index", ["macro", 252], "dimension", ["macro", 253]], ["map", "index", ["macro", 254], "dimension", ["macro", 255]], ["map", "index", ["macro", 256], "dimension", ["macro", 257]], ["map", "index", ["macro", 258], "dimension", ["macro", 259]], ["map", "index", ["macro", 260], "dimension", ["macro", 261]], ["map", "index", ["macro", 262], "dimension", ["macro", 263]], ["map", "index", ["macro", 264], "dimension", ["macro", 265]], ["map", "index", ["macro", 266], "dimension", ["macro", 267]], ["map", "index", ["macro", 268], "dimension", ["macro", 269]], ["map", "index", ["macro", 270], "dimension", ["macro", 271]], ["map", "index", ["macro", 272], "dimension", ["macro", 273]], ["map", "index", ["macro", 274], "dimension", ["macro", 275]], ["map", "index", ["macro", 276], "dimension", ["macro", 277]], ["map", "index", ["macro", 278], "dimension", ["macro", 279]], ["map", "index", ["macro", 280], "dimension", ["macro", 282]], ["map", "index", ["macro", 283], "dimension", ["macro", 285]], ["map", "index", ["macro", 286], "dimension", ["macro", 288]], ["map", "index", ["macro", 289], "dimension", ["macro", 291]], ["map", "index", ["macro", 292], "dimension", ["macro", 294]], ["map", "index", ["macro", 295], "dimension", ["macro", 297]], ["map", "index", ["macro", 298], "dimension", ["macro", 299]], ["map", "index", ["macro", 300], "dimension", ["macro", 302]], ["map", "index", ["macro", 303], "dimension", ["macro", 304]], ["map", "index", ["macro", 305], "dimension", ["macro", 306]], ["map", "index", ["macro", 307], "dimension", ["macro", 308]], ["map", "index", ["macro", 309], "dimension", ["macro", 310]], ["map", "index", ["macro", 311], "dimension", ["macro", 312]], ["map", "index", ["macro", 313], "dimension", ["macro", 314]], ["map", "index", ["macro", 315], "dimension", ["macro", 316]], ["map", "index", ["macro", 317], "dimension", ["macro", 318]], ["map", "index", ["macro", 319], "dimension", ["macro", 321]], ["map", "index", ["macro", 322], "dimension", ["macro", 324]], ["map", "index", ["macro", 325], "dimension", ["macro", 326]], ["map", "index", ["macro", 327], "dimension", ["macro", 329]], ["map", "index", ["macro", 330], "dimension", ["macro", 332]], ["map", "index", ["macro", 333], "dimension", ["macro", 334]], ["map", "index", ["macro", 335], "dimension", ["macro", 336]], ["map", "index", ["macro", 337], "dimension", ["macro", 338]], ["map", "index", ["macro", 339], "dimension", ["macro", 340]], ["map", "index", ["macro", 341], "dimension", ["macro", 342]], ["map", "index", ["macro", 343], "dimension", ["macro", 344]], ["map", "index", ["macro", 345], "dimension", ["macro", 346]], ["map", "index", ["macro", 347], "dimension", ["macro", 348]], ["map", "index", ["macro", 349], "dimension", ["macro", 350]], ["map", "index", ["macro", 351], "dimension", ["macro", 352]], ["map", "index", ["macro", 353], "dimension", ["macro", 355]], ["map", "index", ["macro", 356], "dimension", ["macro", 358]], ["map", "index", ["macro", 359], "dimension", ["macro", 360]], ["map", "index", ["macro", 361], "dimension", ["macro", 362]], ["map", "index", ["macro", 363], "dimension", ["macro", 364]], ["map", "index", ["macro", 365], "dimension", ["macro", 366]], ["map", "index", ["macro", 367], "dimension", ["macro", 368]], ["map", "index", ["macro", 369], "dimension", ["macro", 370]], ["map", "index", ["macro", 371], "dimension", ["macro", 372]], ["map", "index", ["macro", 373], "dimension", ["macro", 374]], ["map", "index", ["macro", 375], "dimension", ["macro", 376]], ["map", "index", ["macro", 377], "dimension", ["macro", 378]], ["map", "index", ["macro", 379], "dimension", ["macro", 380]], ["map", "index", ["macro", 381], "dimension", ["macro", 382]], ["map", "index", ["macro", 383], "dimension", ["macro", 384]], ["map", "index", ["macro", 385], "dimension", ["macro", 386]]],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 387],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "module.ga.eventAction"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.module.element.name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.element.name"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 15], 8, 16], "||", ["escape", ["macro", 11], 8, 16], ";return\"object\"===typeof window.nytAnalytics.gaEvent\u0026\u0026\"object\"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026\"function\"===typeof window.nytAnalytics.gaEvent[a].action\u0026\u0026window.nytAnalytics.gaEvent[a].action()||", ["escape", ["macro", 389], 8, 16], "||", ["escape", ["macro", 390], 8, 16], "||", ["escape", ["macro", 391], 8, 16], "})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.ga.eventLabel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.region"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.element.label"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.label"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 15], 8, 16], "||", ["escape", ["macro", 11], 8, 16], ";return\"object\"===typeof window.nytAnalytics.gaEvent\u0026\u0026\"object\"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026\"function\"===typeof window.nytAnalytics.gaEvent[a].label\u0026\u0026window.nytAnalytics.gaEvent[a].label()||", ["escape", ["macro", 393], 8, 16], "||", ["escape", ["macro", 394], 8, 16], "||", ["escape", ["macro", 395], 8, 16], "||", ["escape", ["macro", 396], 8, 16], "})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.ga.eventValue"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 15], 8, 16], "||", ["escape", ["macro", 11], 8, 16], ";return\"object\"===typeof window.nytAnalytics.gaEvent\u0026\u0026\"object\"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026\"function\"===typeof window.nytAnalytics.gaEvent[a].value\u0026\u0026window.nytAnalytics.gaEvent[a].value()||", ["escape", ["macro", 398], 8, 16], "})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var c=", ["escape", ["macro", 395], 8, 16], ",a=", ["escape", ["macro", 391], 8, 16], ",b=", ["escape", ["macro", 11], 8, 16], ";if(\"share-tools\"===b\u0026\u0026a){if(-1\u003Ca.indexOf(\"facebook\"))return 14;if(-1\u003Ca.indexOf(\"twitter\"))return 15;if(-1\u003Ca.indexOf(\"email\"))return 16;if(-1\u003Ca.indexOf(\"pinterest\"))return 17;if(-1\u003Ca.indexOf(\"linkedin\"))return 18;if(-1\u003Ca.indexOf(\"google\"))return 19;if(-1\u003Ca.indexOf(\"reddit\"))return 20;if(-1\u003Ca.indexOf(\"whatsapp\"))return 21;if(-1\u003Ca.indexOf(\"save\"))return 22;if(-1\u003Ca.indexOf(\"permalink\"))return 23}if(\"newsletters\"===\nb\u0026\u0026\"subscribe\"===a)return-1\u003Cc.indexOf(\"opt in\")?10:6;if(\"comments\"===b){if(\"submit-new\"===a)return 11;if(\"submit-reply\"===a)return 33}return\"\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return 1})();"]
            }, {"function": "__e"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.eventName"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 403],
                "vtp_name": "video.eventName"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){window.nytAnalytics=window.nytAnalytics||{};window.nytAnalytics.videoNonInteractions=window.nytAnalytics.videoNonInteractions||{\"cherry-api-request-error\":!0,\"fw-admanager-load-error\":!0,\"qos-library-load-failure\":!0,\"rendition-not-found\":!0,\"player-load\":!0,\"video-inview\":!0,\"imax-countdown-pause\":!0,\"imax-countdown-complete\":!0};return\"mediaEvent\"===", ["escape", ["macro", 402], 8, 16], "?window.nytAnalytics.videoNonInteractions[", ["escape", ["macro", 403], 8, 16], "]||!1:window.nytAnalytics.videoNonInteractions[", ["escape", ["macro", 404], 8, 16], "]||\n!1})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.mData.videoDeliveryMethod"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "media.version"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoDeliveryMethod"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 407],
                "vtp_name": "video.version"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"mediaEvent\"===", ["escape", ["macro", 402], 8, 16], "?(\"live\"===", ["escape", ["macro", 406], 8, 16], "?\"Live | \":\"Video | \")+", ["escape", ["macro", 407], 8, 16], ":(\"live\"===", ["escape", ["macro", 408], 8, 16], "?\"Live | \":\"Video | \")+", ["escape", ["macro", 409], 8, 16], "})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){window.nytAnalytics=window.nytAnalytics||{};window.nytAnalytics.videoActions=window.nytAnalytics.videoActions||{\"ad-complete\":\"ad complete\",\"ad-pause\":\"ad pause\",\"ad-resume\":\"ad resume\",\"ad-start\":\"ad start\",\"exit-fullscreen\":\"exit fullscreen\",\"go-fullscreen\":\"go fullscreen\",\"hd-off\":\"hd off\",\"hd-on\":\"hd on\",pause:\"pause\",resume:\"resume\",\"skip-ad\":\"ad skip\",\"video-load\":\"video load\",\"video-inview\":\"video inview\",\"auto-play-next\":\"autoplay next\",\"auto-play-start\":\"autoplay start\",\"percent-25-viewed\":\"viewed: 25%\",\n\"percent-50-viewed\":\"viewed: 50%\",\"percent-75-viewed\":\"viewed: 75%\",\"3-seconds-viewed\":\"3-seconds-viewed\",\"30-seconds-viewed\":\"30-seconds-viewed\",\"360-drag-start\":\"360-drag-start\",\"360-drag-stop\":\"360-drag-stop\",\"360-compass-click\":\"360-compass-click\",\"share-embed\":\"share: embed\",\"share-facebook\":\"share: facebook\",\"share-twitter\":\"share: twitter\",seek:\"seek\",\"user-play\":\"user play\",\"video-complete\":\"viewed:100%\",\"media-error\":\"media-error\",\"cherry-api-request-error\":\"cherry-api-request-error\",\"fw-admanager-load-error\":\"fw-admanager-load-error\",\n\"qos-library-load-failure\":\"qos-library-load-failure\",\"rendition-not-found\":\"rendition-not-found\",\"player-load\":\"player load\",\"imax-countdown-pause\":\"imax-countdown-pause\",\"imax-countdown-complete\":\"imax-countdown-complete\"};return\"mediaEvent\"===", ["escape", ["macro", 402], 8, 16], "?window.nytAnalytics.videoActions[", ["escape", ["macro", 403], 8, 16], "]||", ["escape", ["macro", 403], 8, 16], ":window.nytAnalytics.videoActions[", ["escape", ["macro", 404], 8, 16], "]||", ["escape", ["macro", 404], 8, 16], "})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "media.mData.videoName"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 412],
                "vtp_name": "video.mData.videoName"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"mediaEvent\"===", ["escape", ["macro", 402], 8, 16], "?decodeURIComponent(", ["escape", ["macro", 412], 8, 16], "):decodeURIComponent(", ["escape", ["macro", 413], 8, 16], ")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){window.nytAnalytics=window.nytAnalytics||{};window.nytAnalytics.videoCustomMetrics=window.nytAnalytics.videoCustomMetrics||{\"auto-play-next\":32,\"auto-play-start\":31,\"percent-25-viewed\":24,\"percent-50-viewed\":25,\"percent-75-viewed\":26,\"3-seconds-viewed\":42,\"30-seconds-viewed\":43,\"360-drag-start\":58,\"360-drag-stop\":59,\"360-compass-click\":60,\"share-embed\":4,\"share-facebook\":4,\"share-twitter\":4,\"user-play\":1,\"video-complete\":3,\"user-play-audio\":34,\"percent-25-heard\":35,\"percent-50-heard\":36,\n\"percent-75-heard\":37,\"audio-complete\":38,\"audio-inview\":63};return window.nytAnalytics.videoCustomMetrics[", ["escape", ["macro", 404], 8, 16], "]||\"\"})();"]
            }, {"function": "__r"}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData.gaAction"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.subscriberInfo.condensedBundleCodes"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.tracking.lastKnownType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData.hit.hitType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.eventValue"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.eventCategory"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.metric0Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.metric1Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.metric2Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.eventAction"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.eventLabel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "eventData.hit.dimension0Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.dimension0Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "eventData.hit.dimension1Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.dimension1Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "eventData.hit.dimension2Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.dimension2Value"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "register",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {"function": "__c", "vtp_value": "nzcub"}, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 11],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": ["macro", 12],
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "dock", "value", ["macro", 13]], ["map", "key", "gateway", "value", ["macro", 13]]]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "media.state"
            }, {"function": "__aev", "vtp_varType": "TEXT"}, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {"function": "__jsm", "vtp_javascript": ["template", "(function(){return!0})();"]}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.subscriberInfo.verizonSchool"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 173],
                "vtp_name": "session.etAgentId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.propensity.engagementLevel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking.adv"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.propensity.p"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.propensity.c1"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.propensity.c2"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.propensity.c3"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.watSegs"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "DL.user.retentionSegment"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "DL.user.subscriberInfo.coreDigiBundle"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "DL.user.subscriberInfo.coreHDBundle"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "gtm.newUrlFragment"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "gtm.oldUrlFragment"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "user.id"
            }, {"function": "__cid"}, {"function": "__ctv"}, {
                "function": "__c",
                "vtp_value": "Production"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"", ["escape", ["macro", 458], 7], "-", ["escape", ["macro", 459], 7], "-", ["escape", ["macro", 460], 7], "\"})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData.trigger"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.module.context"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.module.element.label"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.label"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.slug"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.module.progress"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "newsletter"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "module"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.module"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData"
            }, {"function": "__jsm", "vtp_javascript": ["template", "(function(){return{}})();"]}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 473],
                "vtp_name": "viewport"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 473],
                "vtp_name": "pageview.performance"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "presentation"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "5000",
                "vtp_name": "pageview.heartbeat.heartbeatInterval"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return navigator.userAgent.match(\/Googlebot|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video\/i)?1:0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.progress.timeInGame"
            }, {
                "function": "__u",
                "vtp_stripWww": false,
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.sectionContent"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.subsection"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.headline"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.authors"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return 1;if(", ["escape", ["macro", 11], 8, 16], "||", ["escape", ["macro", 462], 8, 16], "===\"module\")return 1;if(", ["escape", ["macro", 480], 8, 16], ".indexOf(\"alpha\")\u003E-1)return 1;return 0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "card"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "block"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "pageview.ad"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 488],
                "vtp_name": "ad"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "integration"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "container"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 473],
                "vtp_name": "package"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 473],
                "vtp_name": "item"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "addon"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 11],
                "vtp_defaultValue": ["macro", 12],
                "vtp_map": ["list", ["map", "key", "gateway", "value", ["macro", 13]], ["map", "key", "article_complete", "value", ["macro", 13]], ["map", "key", "mini-modal", "value", ["macro", 13]], ["map", "key", "game-modal", "value", ["macro", 13]], ["map", "key", "regiwall", "value", ["macro", 13]], ["map", "key", "bar1", "value", ["macro", 13]], ["map", "key", "growl", "value", ["macro", 13]], ["map", "key", "meter", "value", ["macro", 13]]]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "impression_id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 473],
                "vtp_name": "media"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 497],
                "vtp_name": "video"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "abtest.test"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "abtest.variant"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "slideshow"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 460],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": "https:\/\/a.et.stg.nytimes.com",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "Production", "value", "https:\/\/a.et.nytimes.com"]]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 21], 8, 16], "||(document.querySelector(\"meta[name\\x3dsourceApp]\")||{}).content;a||(a=\/parenting\\.\/.test(document.location.host)?\"nyt-parenting\":\/^\\\/puzzles\\\/?|^\\\/crosswords\\\/?\/.test(document.location.pathname)?\"games-crosswords\":\/dg-cookie-policy\/.test(document.location.pathname)||\/help.nytimes.com\/.test(document.location.host)?\"help\":\"nyt-vi\");return a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 473],
                "vtp_name": "abtest"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 473],
                "vtp_name": "asset"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 473],
                "vtp_name": "session"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 473],
                "vtp_name": "user"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "version"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return{asset:", ["escape", ["macro", 505], 8, 16], ",session:", ["escape", ["macro", 506], 8, 16], ",user:", ["escape", ["macro", 507], 8, 16], ",version:", ["escape", ["macro", 508], 8, 16], "}})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "application.releaseVersion"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "allocs"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 511],
                "vtp_name": "abtest.batch"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return nyt_et.get_pageview_id()})();"]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 460],
                "vtp_defaultValue": "https:\/\/et.stg.nytimes.com\/",
                "vtp_map": ["list", ["map", "key", "Production", "value", "https:\/\/et.nytimes.com\/"]]
            }, {"function": "__v", "vtp_name": "gtm.elementUrl", "vtp_dataLayerVersion": 1}, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof window.navigator\u0026\u0026\"string\"===typeof window.navigator.userAgent\u0026\u0026\/iP(ad|hone|od)\/.test(window.navigator.userAgent)?1:0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.subscriberInfo"
            }, {
                "function": "__k",
                "convert_undefined_to": ["macro", 12],
                "vtp_decodeCookie": false,
                "vtp_name": "MUMST"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "payload"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.subscriberInfo.b2bSubscription"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.subscriberInfo.childSubscription"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.subscriberInfo.gatewayHitLM"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.subscriberInfo.giftSubscriptionRecipient"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscriberInfo.newsletterList"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.tracking.a14dv"
            }, {"function": "__v", "vtp_name": "gtm.element", "vtp_dataLayerVersion": 1}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscriberInfo.condensedBundleCodes"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.offers.0.id"
            }, {"function": "__jsm", "vtp_javascript": ["template", "(function(){return[]})();"]}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 529],
                "vtp_name": "capture.others"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "referrer.url"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "application.environment"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.characterCount"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.collectionName"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.collectionType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.contentTone"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.desk"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.edition"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.kicker"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.lastUpdatedTimestamp"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.originatingDesk"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.printPublishDate"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.section"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.series"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.sourceNewsOrg"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.sourceUSvsIntl"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.desFacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.geoFacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.orgFacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.perFacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.typeOfMaterials"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.channel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.collection"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.region"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.pagetype"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.source"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.subchannel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.paidPostParameter"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.pageSubType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.isLoggedIn"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.DMA"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.isLoggedIn"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 284],
                "vtp_name": "video.contentId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 296],
                "vtp_name": "video.durationGroup"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 287],
                "vtp_name": "video.mData.videoAdDuration"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoAdPosition"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoDuration"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoFranchise"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoPrimaryPlaylistId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoPrimaryPlaylistName"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoSection"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.referrer"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.url"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 18], 8, 16], "||document.location.protocol+\"\/\/\"+document.location.host+document.location.pathname})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "pageview.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 577],
                "vtp_name": "interaction.dfp_page_view_id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "error.type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "error.errors"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 580], 8, 16], "||{};return JSON.stringify(a).substr(0,128)})();"]
            }, {"function": "__c", "vtp_value": "70"}, {"function": "__c", "vtp_value": "71"}, {
                "function": "__c",
                "vtp_value": "77"
            }, {"function": "__c", "vtp_value": "78"}, {"function": "__c", "vtp_value": "103"}, {
                "function": "__c",
                "vtp_value": "106"
            }, {"function": "__c", "vtp_value": "107"}, {"function": "__c", "vtp_value": "108"}, {
                "function": "__c",
                "vtp_value": "115"
            }, {"function": "__c", "vtp_value": "151"}, {"function": "__c", "vtp_value": "152"}, {
                "function": "__c",
                "vtp_value": "153"
            }, {"function": "__c", "vtp_value": "155"}, {"function": "__c", "vtp_value": "156"}, {
                "function": "__c",
                "vtp_value": "157"
            }, {"function": "__c", "vtp_value": "158"}, {"function": "__c", "vtp_value": "159"}, {
                "function": "__c",
                "vtp_value": "160"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return Date.now()})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking.pageIndex"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking.avgSessionTime"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking.sessionIndex"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.tracking.firstReferrer"
            }, {"function": "__k", "vtp_decodeCookie": true, "vtp_name": "b2b_cig_opt"}, {
                "function": "__k",
                "vtp_decodeCookie": true,
                "vtp_name": "edu_cig_opt"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.nytdOtherData"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\/OS 10_3_3.*CriOS\\\/[\\d\\.]+ Mobile\/.test(navigator.userAgent)?1:0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "card.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "pageview.heartbeat"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.tracking.activeDays"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "asset.column"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "asset.geofacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 615],
                "vtp_name": "asset.geoFacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.subscriptions"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.nytdOtherData.subscriptions.0.bundle"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.metric0Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.metric2Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData.hit.customMetrics"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData.hit.customMetric"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.metric1Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.region"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=navigator.userAgent;if(!\/.*(iphone|ipad|ipod|silk).*$\/i.test(a)\u0026\u0026(a=\/Mac OS X (\\d+)[_\\.](\\d+)([_\\.](\\d+))?\/.exec(a))\u0026\u00265\u003C=a.length){var b=parseInt(a[1],10);return 10\u003Eb||10===b\u0026\u00269\u003E=parseInt(a[2],10)?1:0}return 0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 418],
                "vtp_name": "abtest.url"
            }, {"function": "__c", "vtp_value": "nzcu0"}, {
                "function": "__d",
                "vtp_elementSelector": "html",
                "vtp_attributeName": "data-nyt-ab",
                "vtp_selectorType": "CSS"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return encodeURIComponent(", ["escape", ["macro", 418], 8, 16], ")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return encodeURIComponent(", ["escape", ["macro", 29], 8, 16], ")})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.emotions"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "presentation.program.breakpoint.initial"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 632],
                "vtp_name": "presentation.program.breakpoint.rendered"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return!!(window\u0026\u0026window.NYTD\u0026\u0026window.NYTD.Abra)})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.subscriptions.subscriberType"
            }, {"function": "__jsm", "vtp_javascript": ["template", "(function(){return!1})();"]}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.actioniq"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.actioniq.audience_split_ids"
            }, {"function": "__jsm", "vtp_javascript": ["template", "(function(){return!1})();"]}, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "c1_val"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "c2_val"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "c3_val"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "c4_val"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "c5_val"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "referrer",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {"function": "__r"}, {"function": "__hid"}],
            "tags": [{
                "function": "__html",
                "priority": 2000,
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var c=window.nytAnalytics=window.nytAnalytics||{},h=function(a){return 10\u003Ea?\"0\"+a:a},m=\"Sunday Monday Tuesday Wednesday Thursday Friday Saturday\".split(\" \"),n=\"January February March April May June July August September October November December\".split(\" \");c.formattedDates=c.formattedDates||{};c.formatDates=function(a,b){var d=this.formattedDates;if(!a||!b)return\"\";if(\"undefined\"===typeof d[a]){var e=new Date(a);if(\"Invalid Date\"==e)return\"\";var l=e,p=l.setTime;var f=e;var k=-5;if(10\u003E\nf.getUTCMonth()\u0026\u00262\u003Cf.getUTCMonth())k=-4;else if(2===f.getUTCMonth()){var g=new Date(f.getUTCFullYear(),2,8,-5);g=0===g.getUTCDay()?8:15-g.getUTCDay();if(f.getUTCDate()\u003Eg||f.getUTCDate()===g\u0026\u00266\u003Cf.getUTCHours())k=-4}else 10===f.getUTCMonth()\u0026\u0026(f.getUTCFullYear(),g=0===g.getUTCDay()?1:8-g.getUTCDay(),f.getUTCDate()\u003Cg||f.getUTCDate()===g\u0026\u00267\u003Ef.getUTCHours())\u0026\u0026(k=-4);f=k;p.call(l,a+36E5*f);d[a]={year:e.getUTCFullYear(),date:[e.getUTCFullYear(),h(e.getUTCMonth()+1),h(e.getUTCDate()),h(e.getUTCHours())].join(\"-\"),\ndateAlone:[e.getUTCFullYear(),h(e.getUTCMonth()+1),h(e.getUTCDate())].join(\"-\"),day:m[e.getUTCDay()],hours:h(e.getUTCHours()),month:n[e.getUTCMonth()]}}return d[a][b]};c.resetPage=function(){this.currQuartile=this.maxQuartile=0;this.scrollComplete=this.scrollStart=!1;this.activeTime=0;this.maxViewport={}};c.resetPage();c.hitQuartile=function(a){var b=this.getData(\"viewport.documentHeight\")||document.getElementById(\"app\").clientHeight;b\/=4;this.currQuartile=25*Math.floor(a\/b);return this.currQuartile\u003E\nthis.maxQuartile?(this.maxQuartile=this.currQuartile,!0):!1};c.getMaxViewport=function(a){var b=this.maxViewport;if(!b.scrollTop||!b.height||!b.width||(a.scrollTop+a.height)*a.width\u003E(b.scrollTop+b.height)*b.width)this.maxViewport=JSON.parse(JSON.stringify(a));return this.maxViewport};c.pagemeta=function(){var a,b={},d=document.getElementsByTagName(\"meta\");for(a=d.length-1;0\u003C=a;a--)b[d[a].name]=d[a].content;return b}();c.heartbeat=function(a){this.activeTime=this.activeTime||0;this.activeTime+=a.heartbeatInterval;\n(a=a.heartbeatInterval\u0026\u0026(3E4\u003E=this.activeTime||12E4\u003E=this.activeTime\u0026\u00260===this.activeTime%(2*a.heartbeatInterval)||3E5\u003E=this.activeTime\u0026\u00260===this.activeTime%(4*a.heartbeatInterval)||3E5\u003Cthis.activeTime\u0026\u002618E5\u003E=this.activeTime\u0026\u00260===this.activeTime%(6*a.heartbeatInterval)))\u0026\u0026\"function\"==typeof nyt_et\u0026\u0026nyt_et(\"send\",{subject:\"page_update\",activeTime:this.activeTime,gtm:", ["escape", ["macro", 461], 8, 16], "})};c.interaction=function(a){if(\"function\"===typeof nyt_et){var b={subject:\"interaction\",gtm:", ["escape", ["macro", 461], 8, 16], "};\na.eventData\u0026\u0026(b.eventData=a.eventData);a.module\u0026\u0026(b.module=a.module,\"object\"===typeof b.module.element\u0026\u0026\"undefined\"!==typeof b.module.element.label\u0026\u0026(b.module.element.label=b.module.element.label.toString()));a.card\u0026\u0026(b.card=JSON.parse(JSON.stringify(a.card)),\"string\"===typeof b.card.index\u0026\u0026(\/^\\d+$\/.test(b.card.index)?b.card.index=parseInt(b.card.index,10):\/\\w+\/.test(b.card.index)\u0026\u0026(b.card.index=null)));a.block\u0026\u0026(b.block=a.block);a.newsletter\u0026\u0026(b.newsletter=a.newsletter);a.ad\u0026\u0026(b.ad=a.ad);a[\"package\"]\u0026\u0026\n(b[\"package\"]=a[\"package\"]);a.item\u0026\u0026(b.item=a.item);a.impression_id\u0026\u0026(b.impression_id=a.impression_id);nyt_et(\"send\",JSON.parse(JSON.stringify(b)))}};c.performance=function(a){\"function\"==typeof nyt_et\u0026\u0026(a={subject:\"page_update\",performance:a.performance,gtm:", ["escape", ["macro", 461], 8, 16], "},c.exitPriority?(a.eventData={type:\"ob_click\"},nyt_et(\"send\",a)):nyt_et(a))};c.impression=function(a,b){var d={event:\"impression\"},e=!1;a.module\u0026\u0026(d.module=JSON.parse(JSON.stringify(a.module)),e=!0);a.card\u0026\u0026(d.card=JSON.parse(JSON.stringify(a.card)),\n\"string\"===typeof d.card.index\u0026\u0026(\/^\\d+$\/.test(d.card.index)?d.card.index=parseInt(d.card.index,10):\/\\w+\/.test(d.card.index)\u0026\u0026(d.card.index=null)),e=!0);a.block\u0026\u0026(d.block=JSON.parse(JSON.stringify(a.block)),e=!0);a.eventData\u0026\u0026(d.eventData=JSON.parse(JSON.stringify(a.eventData)),e=!0);a.ad\u0026\u0026(d.ad=JSON.parse(JSON.stringify(a.ad)),e=!0);a.newsletter\u0026\u0026(d.newsletter=JSON.parse(JSON.stringify(a.newsletter)),e=!0);a.container\u0026\u0026(d.container=JSON.parse(JSON.stringify(a.container)),e=!0);a[\"package\"]\u0026\u0026(d[\"package\"]=\nJSON.parse(JSON.stringify(a[\"package\"])),e=!0);a.item\u0026\u0026(d.item=JSON.parse(JSON.stringify(a.item)),e=!0);a.integration\u0026\u0026(d.integration=JSON.parse(JSON.stringify(a.integration)),e=!0);a.addon\u0026\u0026(d.addon=JSON.parse(JSON.stringify(a.addon)),e=!0);b\u0026\u0026(d.priority=!0);\"function\"==typeof nyt_et\u0026\u0026e\u0026\u0026(d.subject=\"impression\",d.gtm=", ["escape", ["macro", 461], 8, 16], ",b?nyt_et(\"soon\",d):nyt_et(d));dataLayer.push({module:void 0,card:void 0,block:void 0,eventData:void 0,ad:void 0,pageview:{ad:void 0},newsletter:void 0,container:void 0,\n\"package\":void 0,item:void 0,integration:void 0,addon:void 0})};c.scrolling=function(a){a=a.viewport;var b=a.scrollTop+a.height,d=!1;a.activeTime=this.activeTime;c.scrollStart||(d=c.scrollStart=!0,dataLayer.push({event:\"gaScrollEvent\",eventData:{gaAction:\"scroll_start\"}}));c.hitQuartile(b)\u0026\u0026100===c.maxQuartile\u0026\u0026dataLayer.push({event:\"gaScrollEvent\",eventData:{gaAction:\"page_complete\"}});\"function\"==typeof nyt_et\u0026\u0026(nyt_et({subject:\"page_update\",viewport:a,gtm:", ["escape", ["macro", 461], 8, 16], "}),d\u0026\u0026nyt_et(\"send\",\n{subject:\"interaction\",gtm:", ["escape", ["macro", 461], 8, 16], ",eventData:{trigger:\"module\",type:\"scroll\"},module:{name:\"scroll\",element:{name:\"first-scroll\"}}}))};c.slideshow=function(a){var b={};a.slideshow\u0026\u0026(\"function\"==typeof nyt_et\u0026\u0026(b.slideshowObj=JSON.parse(JSON.stringify(a.slideshow)),b.subject=\"page_update\",b.gtm=", ["escape", ["macro", 461], 8, 16], ",nyt_et(\"send\",b)),dataLayer.push({slideshow:null}))};c.getData=function(a){return(a=google_tag_manager[", ["escape", ["macro", 458], 8, 16], "].dataLayer.get(a))?\"object\"!==typeof a?a:JSON.parse(JSON.stringify(a)):\n\"\"};c.gaEvent={};c.gaEvent[\"see more\"]={category:function(){return c.getData(\"presentation.pageType\")+\" - \"+c.getData(\"interaction.type\")},action:function(){return c.getData(\"interaction.module.context\")+\" - \"+c.getData(\"interaction.module.name\")},label:function(){return c.getData(\"interaction.module.slug\")},value:function(){return\"\"}};c.gaEvent[\"see more\"]={category:function(){return c.getData(\"presentation.pageType\")+\" - \"+c.getData(\"interaction.type\")},action:function(){return c.getData(\"interaction.module.context\")+\n\" - \"+c.getData(\"interaction.module.name\")},label:function(){return c.getData(\"interaction.module.slug\")},value:function(){return\"\"}};c.gaEvent[\"games-prototype-spelling-bee\"]={value:function(){return c.getData(\"interaction.module.progress.timeInGame\")},label:function(){return c.getData(\"interaction.module.progress.guess\")}}})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 18
            }, {
                "function": "__html",
                "priority": 1000,
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E!function(d){function x(){var f,a;if(a=d.crypto||d.msCrypto)a=a.getRandomValues(new Uint8Array(18));else for(a=[];18\u003Ea.length;)a.push(256*Math.random()^255\u0026(f=f||+new Date)),f=Math.floor(f\/256);return btoa(String.fromCharCode.apply(String,a)).replace(\/\\+\/g,\"-\").replace(\/\\\/\/g,\"_\")}var r,t,p,B,l,q,u=[],m={pv_id:\"\",ctx_id:\"\",intra:!1,force_xhr:!1,store_last_response:!1},C=\"object\"==typeof d.navigator\u0026\u0026\"string\"==typeof d.navigator.userAgent\u0026\u0026\/iP(ad|hone|od)\/.test(d.navigator.userAgent),y=\"object\"==typeof d.navigator\u0026\u0026\nd.navigator.sendBeacon,D=y?C?\"xhr_ios\":\"beacon\":\"xhr\";if(d.nyt_et)try{console.warn(\"et2 snippet should only load once per page\")}catch(f){}else d.nyt_et=function(){function f(v){var b,g,k,n,e;u.length\u0026\u0026(b=r+\"track\",g=JSON.stringify(u),k=m.force_xhr,n=m.store_last_response,!k\u0026\u0026(\"beacon\"===D||y\u0026\u0026v)?(k=d.navigator.sendBeacon(b,g),n\u0026\u0026(q=k)):((e=\"undefined\"!=typeof XMLHttpRequest?new XMLHttpRequest:new ActiveXObject(\"Microsoft.XMLHTTP\")).open(\"POST\",b),e.withCredentials=!0,e.setRequestHeader(\"Accept\",\n\"*\/*\"),\"string\"==typeof g?e.setRequestHeader(\"Content-Type\",\"text\/plain;charset\\x3dUTF-8\"):\"[object Blob]\"==={}.toString.call(g)\u0026\u0026g.type\u0026\u0026e.setRequestHeader(\"Content-Type\",g.type),n\u0026\u0026!e.onload\u0026\u0026(e.onload=function(){q=e.response},e.onerror=function(z){q=!1}),e.send(g)),u.length=0,clearTimeout(l),l=null)}var a,A,w,c=arguments;if(\"string\"==typeof c[0]\u0026\u0026\/init\/.test(c[0])\u0026\u0026(m=function(v,b){var g=\"\",k=\"\",n=!1,e=!1,z=!1;if(\"string\"==typeof v\u0026\u0026\"init\"==v\u0026\u0026\"object\"==typeof b\u0026\u0026(\"boolean\"==typeof b.intranet\u0026\u0026\nb.intranet\u0026\u0026(n=!0),\"boolean\"==typeof b.force_xhr\u0026\u0026b.force_xhr\u0026\u0026(e=!0),\"boolean\"==typeof b.store_last_response\u0026\u0026b.store_last_response\u0026\u0026(z=!0),\"string\"==typeof b.pv_id_override\u0026\u0026\"string\"==typeof b.ctx_id_override))if(24\u003C=b.pv_id_override.length\u0026\u002624\u003C=b.ctx_id_override.length)g=b.pv_id_override,k=b.ctx_id_override;else try{console.warn(\"override id(s) must be \\x3e\\x3d 24 chars long\")}catch(E){}return{pv_id:g,ctx_id:k,intra:n,store_last_response:z,force_xhr:e}}(c[0],c[3]),p=m.pv_id||x(),\"init\"==c[0]\u0026\u0026\n!t)){if(t=m.ctx_id||x(),\"string\"!=typeof c[1]||!\/^http\/.test(c[1]))throw Error(\"init must include an et host url\");if(r=String(c[1]).replace(\/([^\\\/])$\/,\"$1\/\"),\"string\"!=typeof c[2])throw Error(\"init must include a source app name\");B=c[2]}var h=c.length-1;(a=c[h]\u0026\u0026\"object\"==typeof c[h]?c[h]:a)||\/init\/.test(c[0])?a\u0026\u0026!a.subject\u0026\u0026console.warn(\"event data {} must include a subject\"):console.warn(\"when invoked without 'init' or 'pageinit', nyt_et() must include a event data\");r\u0026\u0026a\u0026\u0026a.subject\u0026\u0026(h=a.subject,\ndelete a.subject,w=\"page_exit\"==h||\"ob_click\"==(a.eventData||{}).type,A=\"page\"==h||\"page_soft\"==h?p:x(),u.push({context_id:t,pageview_id:p,event_id:A,client_lib:\"v1.3.0\",sourceApp:B,intranet:m.intra?1:void 0,subject:h,how:w\u0026\u0026C\u0026\u0026y?\"beacon_ios\":D,client_ts:+new Date,data:JSON.parse(JSON.stringify(a))}),\"send\"==c[0]||A==p||w?f(w):(\"soon\"==c[0]\u0026\u0026(clearTimeout(l),l=setTimeout(f,200)),l=l||setTimeout(f,5500)))},d.nyt_et.get_pageview_id=function(){return p},d.nyt_et.get_context_id=function(){return t},d.nyt_et.get_host=\nfunction(){return r},d.nyt_et.get_last_send_response=function(){var f=q;return f\u0026\u0026(q=null),f}}(window);\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Enyt_et.get_pageview_id()||nyt_et(\"init\",", ["escape", ["macro", 502], 8, 16], ",", ["escape", ["macro", 503], 8, 16], ",{subject:\"page\",canonicalUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,articleId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,pubpEventId:(document.querySelector(\"meta[name\\x3dpubp_event_id]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 31], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),gtm:", ["escape", ["macro", 461], 8, 16], ",\nis_iframe:window.top!=window});nytAnalytics=window.nytAnalytics||{};nytAnalytics.et2_pageview_id=nyt_et.get_pageview_id();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 146
            }, {
                "function": "__html",
                "priority": 1000,
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){if(window.nyt_et){nytAnalytics=window.nytAnalytics||{};var a={subject:\"page_soft\",canonicalUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,articleId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,pubpEventId:(document.querySelector(\"meta[name\\x3dpubp_event_id]\")||{}).content,url:location.href,referrer:", ["escape", ["macro", 31], 8, 16], "||void 0,client_tz_offset:(new Date).getTimezoneOffset(),sourceApp:", ["escape", ["macro", 503], 8, 16], ",\ngtm:", ["escape", ["macro", 461], 8, 16], ",is_iframe:window.top!=window};nytAnalytics.et2_pageview_id===nyt_et.get_pageview_id()?nyt_et(\"pageinit\",", ["escape", ["macro", 502], 8, 16], ",a):nyt_et(a);nytAnalytics.et2_pageview_id=nyt_et.get_pageview_id()}})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 157
            }, {
                "function": "__html",
                "priority": 1,
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){if(window.nyt_et){var a={};3\u003CparseInt(navigator.appVersion,10)\u0026\u0026(\"Microsoft Internet Explorer\"===navigator.appName\u0026\u0026document.body?a.size=document.body.offsetWidth+\"x\"+document.body.offsetHeight:\"Netscape\"===navigator.appName\u0026\u0026(a.size=window.innerWidth+\"x\"+window.innerHeight));var b=new Date;a.timeZone=b.getTimezoneOffset()\/60*-1;a.timeZoneHour=b.getHours();window.matchMedia\u0026\u0026(!0===window.matchMedia(\"(orientation: portrait)\").matches?a.orientation=\"port\":!0===window.matchMedia(\"(orientation: landscape)\").matches\u0026\u0026\n(a.orientation=\"land\"));a.language=\"Netscape\"===navigator.appName?navigator.language:navigator.userLanguage;b=\"undefined\"!==typeof window.ethereum||\"undefined\"!==typeof window.web3;nyt_et({subject:\"page_update\",browser:a,cryptowallet:b,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 31], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),canonicalUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,articleId:(document.querySelector(\"meta[name\\x3darticleid]\")||\n{}).content,pubpEventId:(document.querySelector(\"meta[name\\x3dpubp_event_id]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,referrer:\"", ["escape", ["macro", 31], 7], "\",gtm:", ["escape", ["macro", 461], 8, 16], ",is_iframe:window.top!=window})}})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 156
            }, {
                "function": "__csm",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_clientId": "3005403",
                "tag_id": 12
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["macro", 17],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 388],
                "vtp_eventAction": ["macro", 392],
                "vtp_eventLabel": ["macro", 397],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_eventValue": ["macro", 399],
                "vtp_metric": ["list", ["map", "index", ["macro", 400], "metric", ["macro", 401]]],
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 387],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 36
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": ["macro", 405],
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["macro", 410],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 388],
                "vtp_eventAction": ["macro", 411],
                "vtp_eventLabel": ["macro", 414],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 415], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 387],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 37
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 107, 0]],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_gaSettings": ["macro", 388],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 387],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 38
            }, {
                "function": "__img",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/www.nytimes.com\/svc\/comscore\/pvc.html",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 416],
                "tag_id": 46
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "teardown_tags": ["list", ["tag", 104, 0]],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "scroll",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_enableLinkId": false,
                "vtp_gaSettings": ["macro", 388],
                "vtp_eventAction": ["macro", 417],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 387],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 52
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u17", "value", ["macro", 418]], ["map", "key", "u5", "value", ["macro", 419]], ["map", "key", "u18", "value", ["macro", 420]]],
                "vtp_enableConversionLinker": true,
                "vtp_enhancedUserData": false,
                "vtp_groupTag": "allpa0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "nyti-0",
                "vtp_ordinalType": "UNIQUE",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalUnique": "1",
                "vtp_number": ["macro", 416],
                "vtp_url": ["macro", 10],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 115
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "teardown_tags": ["list", ["tag", 104, 0]],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventValue": ["macro", 422],
                "vtp_eventCategory": ["macro", 423],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_metric": ["list", ["map", "index", ["macro", 424], "metric", "1"], ["map", "index", ["macro", 425], "metric", "1"], ["map", "index", ["macro", 426], "metric", "1"]],
                "vtp_gaSettings": ["macro", 388],
                "vtp_eventAction": ["macro", 427],
                "vtp_eventLabel": ["macro", 428],
                "vtp_dimension": ["list", ["map", "index", ["macro", 429], "dimension", ["macro", 430]], ["map", "index", ["macro", 431], "dimension", ["macro", 432]], ["map", "index", ["macro", 433], "dimension", ["macro", 434]], ["map", "index", ["macro", 81], "dimension", ["macro", 82]]],
                "vtp_trackingId": ["macro", 387],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 118
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u9", "value", ["macro", 418]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "newsl0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "nyti-0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 416],
                "vtp_url": ["macro", 10],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 121
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u17", "value", ["macro", 418]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "conve0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "regi0",
                "vtp_ordinalType": "UNIQUE",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalUnique": "1",
                "vtp_number": ["macro", 416],
                "vtp_url": ["macro", 10],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 133
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_event_type": "Signup",
                "vtp_twitter_pixel_id": ["macro", 436],
                "tag_id": 136
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_event_type": "CompleteRegistration",
                "vtp_twitter_pixel_id": "nzcu8",
                "tag_id": 137
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u17", "value", ["macro", 418]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "remar0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "gatew0",
                "vtp_ordinalType": "UNIQUE",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalUnique": "1",
                "vtp_number": ["macro", 416],
                "vtp_url": ["macro", 10],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 138
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "1008590664",
                "vtp_conversionLabel": "15HpCJzjkogBEMi-9-AD",
                "vtp_url": ["macro", 10],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 153
            }, {
                "function": "__gclidw",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableCrossDomain": false,
                "vtp_enableCookieOverrides": false,
                "vtp_enableCrossDomainFeature": true,
                "tag_id": 159
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "registration",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 388],
                "vtp_eventAction": "register",
                "vtp_eventLabel": ["macro", 435],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 163
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_eventValue": ["macro", 399],
                "vtp_eventCategory": ["macro", 17],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_metric": ["list", ["map", "index", ["macro", 400], "metric", ["macro", 401]]],
                "vtp_gaSettings": ["macro", 388],
                "vtp_eventAction": "impression",
                "vtp_eventLabel": ["macro", 397],
                "vtp_trackingId": ["macro", 387],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 165
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "conve0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "refty",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 416],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1223
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "conve0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "msgnup",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 416],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1226
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "podcstq",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 416],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1230
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "necovidl",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 416],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1233
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "dailylp",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 416],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1235
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "fsslp",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 416],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1238
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "conve0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "nwpplay",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 416],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1245
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "nwplp",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 416],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1246
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "conve0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "nwpasg",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 416],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1250
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "swylp",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 416],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1258
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "conve0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "swyasg",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 416],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1260
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "conve0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "swyplay",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 416],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1261
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "newsl0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "cvidsch",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 416],
                "vtp_url": ["macro", 10],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1265
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": true,
                "vtp_activityTag": "audiolp",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 416],
                "vtp_url": ["macro", 10],
                "vtp_useImageTagIsTrue": true,
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 1274
            }, {
                "function": "__img",
                "metadata": ["map"],
                "teardown_tags": ["list", ["tag", 106, 0]],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/www.facebook.com\/tr?id=365162923822779\u0026ev=RSVPSub",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 416],
                "tag_id": 1292
            }, {
                "function": "__img",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/insight.adsrvr.org\/track\/pxl\/?adv=bomn82o\u0026ct=0:s2f54xh\u0026fmt=3\u0026ttl=43200",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 416],
                "tag_id": 1304
            }, {
                "function": "__img",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/insight.adsrvr.org\/track\/pxl\/?adv=bomn82o\u0026ct=0:2ptdgug\u0026fmt=3\u0026ttl=43200",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 416],
                "tag_id": 1305
            }, {
                "function": "__img",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/a.et.nytimes.com\/track\/q?subject=noscript\u0026sourceApp=nyt-vi\u0026client_ts=0",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 416],
                "tag_id": 1340
            }, {
                "function": "__img",
                "metadata": ["map"],
                "teardown_tags": ["list", ["tag", 106, 0]],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/www.facebook.com\/tr?id=592202027582499\u0026ev=GPV",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 416],
                "tag_id": 1368
            }, {
                "function": "__img",
                "metadata": ["map"],
                "teardown_tags": ["list", ["tag", 106, 0]],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/www.facebook.com\/tr?id=592202027582499\u0026ev=GPV2",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 416],
                "tag_id": 1371
            }, {
                "function": "__img",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/pubads.g.doubleclick.net\/activity;dc_iu=\/29390238\/DFPAudiencePixel;ord=1;dc_seg=7264762918?",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 416],
                "tag_id": 1378
            }, {
                "function": "__img",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/pubads.g.doubleclick.net\/activity;dc_iu=\/29390238\/DFPAudiencePixel;ord=1;dc_seg=7515628355?",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 416],
                "tag_id": 1398
            }, {
                "function": "__zone",
                "once_per_event": true,
                "vtp_childContainers": ["list", ["map", "publicId", "GTM-N5P6T9S", "nickname", "NYT - Zone - Marketing POC Pixels"]],
                "vtp_boundaries": ["list", ["zb", "_re", ["macro", 435], ".*", false, false], ["zb", "_sw", ["macro", 6], "out", true, false], ["zb", "_re", ["macro", 7], "^.{4}[ep]", true, false]],
                "vtp_enableTypeRestrictions": true,
                "vtp_whitelistedTypes": ["list", ["map", "typeId", "hl"], ["map", "typeId", "ehl"], ["map", "typeId", "sdl"], ["map", "typeId", "fsl"], ["map", "typeId", "cl"], ["map", "typeId", "tg"], ["map", "typeId", "tl"], ["map", "typeId", "ecl"], ["map", "typeId", "jel"], ["map", "typeId", "ytl"], ["map", "typeId", "lcl"], ["map", "typeId", "evl"], ["map", "typeId", "vis"], ["map", "typeId", "ctv"], ["map", "typeId", "remm"], ["map", "typeId", "smm"], ["map", "typeId", "c"], ["map", "typeId", "d"], ["map", "typeId", "e"], ["map", "typeId", "f"], ["map", "typeId", "j"], ["map", "typeId", "k"], ["map", "typeId", "r"], ["map", "typeId", "u"], ["map", "typeId", "v"], ["map", "typeId", "uv"], ["map", "typeId", "dbg"], ["map", "typeId", "ev"], ["map", "typeId", "cid"], ["map", "typeId", "aev"], ["map", "typeId", "gas"], ["map", "typeId", "img"]],
                "vtp_enableConfiguration": false,
                "tag_id": 1399
            }, {
                "function": "__zone",
                "once_per_event": true,
                "vtp_childContainers": ["list", ["map", "publicId", "GTM-K8KT2QC", "nickname", "NYT - Zone - MLP Vendor Tags"]],
                "vtp_boundaries": ["list", ["zb", "_sw", ["macro", 8], "\/subscription\/games", false, false]],
                "vtp_enableTypeRestrictions": false,
                "vtp_enableConfiguration": false,
                "tag_id": 1400
            }, {"function": "__hl", "tag_id": 1401}, {"function": "__hl", "tag_id": 1402}, {
                "function": "__hl",
                "tag_id": 1403
            }, {"function": "__hl", "tag_id": 1404}, {"function": "__hl", "tag_id": 1405}, {
                "function": "__hl",
                "tag_id": 1406
            }, {"function": "__hl", "tag_id": 1407}, {"function": "__hl", "tag_id": 1408}, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "2703797_1249",
                "tag_id": 1409
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "2703797_1251",
                "tag_id": 1410
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "2703797_1252",
                "tag_id": 1411
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "2703797_1259",
                "tag_id": 1412
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "2703797_1316",
                "tag_id": 1413
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "100",
                "vtp_uniqueTriggerId": "2703797_1331",
                "tag_id": 1414
            }, {
                "function": "__html",
                "metadata": ["map"],
                "teardown_tags": ["list", ["tag", 106, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.facebookPixel=function(f){function p(b){b=b||{};var a=b.pixelName||\"PageView\";b=h(b,e);fbq(\"track\",a,b)}function h(b,a){var c;b=b||{};a=a||{};for(c in a)b[c]=a[c]\u0026\u0026\"object\"===typeof a[c]?b[c]\u0026\u0026\"object\"===typeof b[c]?h(b[c],a[c]):h({},a[c]):a[c];return b}function q(b){for(var a=2166136261,c=0;c\u003Cb.length;++c)a^=b.charCodeAt(c),a+=(a\u003C\u003C1)+(a\u003C\u003C4)+(a\u003C\u003C7)+(a\u003C\u003C8)+(a\u003C\u003C24);return a\u003E\u003E\u003E0}f=", ["escape", ["macro", 156], 8, 16], ";var m=", ["escape", ["macro", 443], 8, 16], ",k=", ["escape", ["macro", 444], 8, 16], ",e={ad:", ["escape", ["macro", 445], 8, 16], ",articleId:", ["escape", ["macro", 446], 8, 16], "||\n\"\",fbk:localStorage.getItem(\"kxsegs\")||\"\",pScore:", ["escape", ["macro", 447], 8, 16], ",c1Score:", ["escape", ["macro", 448], 8, 16], ",c2Score:", ["escape", ["macro", 449], 8, 16], ",c3Score:", ["escape", ["macro", 450], 8, 16], ",sourceApp:", ["escape", ["macro", 21], 8, 16], "||\"nyt-vi\",watSegs:", ["escape", ["macro", 451], 8, 16], ",fbBrowser:\/\\\/FBIOS\/i.test(navigator.userAgent),content_ids:[q(window.location.pathname)],content_type:\"product\",content_category:nytAnalytics.pagemeta[\"dfp-ad-unit-path\"]||\"\",userAgent:navigator.userAgent,mc:", ["escape", ["macro", 168], 8, 16], "||\"\",referrer:", ["escape", ["macro", 31], 8, 16], ",\npageType:", ["escape", ["macro", 1], 8, 16], "};f\u0026\u0026\"anon\"!==f.toLowerCase()\u0026\u0026(e.userType=f,e.retentionRiskSegment=", ["escape", ["macro", 452], 8, 16], ",e.bundleCoreDigi=", ["escape", ["macro", 453], 8, 16], ",e.bundleCoreHD=", ["escape", ["macro", 454], 8, 16], ");m\u0026\u0026(e.agentID=m);\"number\"==typeof k\u0026\u00260\u003Ck\u0026\u0026(e.engagementLevel=k);window.fbq\u0026\u0026window.nytfbqInitialized||(window.nytfbqInitialized=!0,function(b){!function(a,c,n,r,d,g,l){a.fbq||(d=a.fbq=function(){d.callMethod?d.callMethod.apply(d,arguments):d.queue.push(arguments)},a._fbq||(a._fbq=d),d.push=d,d.loaded=\n!0,d.version=\"2.0\",d.queue=[],g=c.createElement(n),g.async=!0,g.src=r,l=c.getElementsByTagName(n)[0],l.parentNode.insertBefore(g,l))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"592202027582499\")}());return{fire:p}}();", ["escape", ["macro", 435], 8, 16], "\u0026\u0026window.facebookPixel.fire({pixelName:\"CompleteRegistration\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 6
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E\"object\"===typeof window.dataLayer\u0026\u0026window.dataLayer.push({video:\"\",asset:\"\",viewport:\"\"});\"object\"===typeof window.nytAnalytics\u0026\u0026window.nytAnalytics.resetPage();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 10
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function etEventModuleInteraction(){var eventObj={},modData={};eventObj.assetUrl=", ["escape", ["macro", 18], 8, 16], ";eventObj.url=document.location.href;eventObj.subject=\"module-interactions\";modData={\"action\":\"", ["escape", ["macro", 463], 7], "\",\"context\":\"", ["escape", ["macro", 464], 7], "\",\"module\":\"", ["escape", ["macro", 15], 7], "\",\"eventName\":\"", ["escape", ["macro", 390], 7], "\",\"elementLabel\":\"", ["escape", ["macro", 465], 7], "\",\"label\":\"", ["escape", ["macro", 466], 7], "\",\"pgtype\":\"", ["escape", ["macro", 1], 7], "\",\"region\":\"", ["escape", ["macro", 394], 7], "\",\"slug\":\"", ["escape", ["macro", 467], 7], "\"};if(", ["escape", ["macro", 468], 8, 16], ")modData.progress=\nJSON.stringify(", ["escape", ["macro", 468], 8, 16], ");if(", ["escape", ["macro", 469], 8, 16], ")modData.newsletter=JSON.stringify(", ["escape", ["macro", 469], 8, 16], ");eventObj.moduleData=JSON.stringify(modData);if(typeof nyt_et===\"function\"){var et2ModData=JSON.parse(JSON.stringify({subject:\"interaction\",gtm:", ["escape", ["macro", 461], 8, 16], ",module:", ["escape", ["macro", 470], 8, 16], "||", ["escape", ["macro", 471], 8, 16], ",eventData:", ["escape", ["macro", 472], 8, 16], "||{type:", ["escape", ["macro", 463], 8, 16], ",pagetype:", ["escape", ["macro", 1], 8, 16], ",legacy:1}}));if(!et2ModData.eventData.pagetype\u0026\u0026", ["escape", ["macro", 1], 8, 16], ")et2ModData.eventData.pagetype=\n", ["escape", ["macro", 1], 8, 16], ";if(", ["escape", ["macro", 469], 8, 16], ")et2ModData.newsletter=JSON.parse(JSON.stringify(", ["escape", ["macro", 469], 8, 16], "));nyt_et(\"send\",et2ModData)}})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 34
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"scrolling_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.scrolling({viewport:", ["escape", ["macro", 474], 8, 16], ",performance:", ["escape", ["macro", 475], 8, 16], ",presentation:", ["escape", ["macro", 476], 8, 16], ",assetUrl:", ["escape", ["macro", 18], 8, 16], "});(function(){var a=document.querySelector(\"#scrolling_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 40
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"heartbeat_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.heartbeat({viewport:", ["escape", ["macro", 474], 8, 16], ",heartbeatInterval:", ["escape", ["macro", 477], 8, 16], ",performance:", ["escape", ["macro", 475], 8, 16], ",presentation:", ["escape", ["macro", 476], 8, 16], "});(function(){var a=document.querySelector(\"#heartbeat_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 41
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"addtrackingparams_temp\" type=\"text\/gtmscript\"\u003E(function(){var c=function(a,b){var c=a\u0026\u0026a.length;if(c\u0026\u0026\"function\"===typeof b)if(\"function\"===typeof a.forEach)a.forEach(b);else if(\"function\"===typeof b)for(;c;)c--,b(a[c])},d=function(a,b){b=(-1\u003Ca.indexOf(\"?\")?\"\\x26\":\"?\")+b;return a=-1\u003Ca.indexOf(\"#\")?a.replace(\"#\",b+\"#\"):a+b};c(document.querySelectorAll(\"section[data-block-tracking-id]:not(.gtm-tagged)\"),function(a){var b=\"\";a.classList.add(\"gtm-tagged\");b=a.dataset\u0026\u0026a.dataset.blockTrackingId||\"\";c(a.querySelectorAll(\":not(header) \\x3e a\"),function(a){a.href=\nd(a.href,\"action\\x3dclick\\x26module\\x3d\"+encodeURIComponent(b)+\"\\x26pgtype\\x3d\"+", ["escape", ["macro", 1], 8, 16], ")})});c(document.querySelectorAll(\"#recirc-more-in:not(.gtm-tagged), div[class^\\x3delementStyles-moreInContent]:not(.gtm-tagged)\"),function(a){var b=a.parentNode.querySelector(\"h2\");b=b?b.textContent:\"\";b=b.replace(\/\u003C!\\-\\-[^\u003E]*\\-\\-\u003E\/g,\"\");b=b.replace(\"More in \",\"\");a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dMoreInSection\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3d\"+\nb)})});c(document.querySelectorAll(\"div[class^\\x3dTrending-trending]:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"li a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dTrending\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3dTrending\")})});c(document.querySelectorAll(\"#recirc-collection:not(.gtm-tagged)\"),function(a){var b=a.parentNode.querySelector(\"h2\");b=b?b.textContent:\"\";b=b.replace(\/\u003C!\\-\\-[^\u003E]*\\-\\-\u003E\/g,\"\");a.classList.add(\"gtm-tagged\");\nc(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dAssociated\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3d\"+b)})});c(document.querySelectorAll(\"#recirc-follow-channel:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");var b=a.parentNode.querySelector(\"h2\");b=b?b.textContent:\"\";b=b.replace(\/\u003C!\\-\\-[^\u003E]*\\-\\-\u003E\/g,\"\");c(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dFollow\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3d\"+\nb)})});c(document.querySelectorAll(\"div[class^\\x3dRecirculation-lonelyTrending]:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dLonely%20Trending\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3dTrending\")})});c(document.querySelectorAll(\"div[class^\\x3delementStyles-relatedcoverage]\"),function(a){c(a.querySelectorAll(\"article a\"),function(a){a.classList.add(\"gtm-tagged\");\na.href=d(a.href,\"action\\x3dclick\\x26module\\x3dRelatedCoverage\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3dRelated\")})});var e=document.querySelector(\"nav[class^\\x3dRibbon-ribbon]:not(.gtm-tagged)\");if(e){var f=\"Ribbon\";e.classList.add(\"gtm-tagged\");c(e.querySelectorAll(\"a:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");a.href=d(a.href,\"action\\x3dclick\\x26module\\x3d\"+encodeURIComponent(f)+\"\\x26pgtype\\x3d\"+", ["escape", ["macro", 1], 8, 16], ")})}c(document.querySelectorAll(\"div[class^\\x3delementStyles-editorContent]:not(.gtm-tagged)\"),\nfunction(a){a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3deditorContent\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3dTrending\")})});c(document.querySelectorAll(\".StoryBodyCompanionColumn aside\"),function(a){c(a.querySelectorAll(\"article a:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");a.href=d(a.href,\"action\\x3dclick\\x26module\\x3deditorContent\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dCompanionColumn\\x26contentCollection\\x3dTrending\")})});\n(function(){var a=document.querySelector(\"#addtrackingparams_temp\");a\u0026\u0026(a.outerHTML=\"\")})()})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 44
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer.push({video:\"\",asset:\"\"});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 45
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E\"object\"===typeof nytAnalytics\u0026\u0026(nytAnalytics.activeTime=nytAnalytics.activeTime||0,nytAnalytics.activeTime=1E3*", ["escape", ["macro", 479], 8, 16], ");\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 54
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.parent===window\u0026\u0026function(){function d(){var a;return a=(a=unescape(document.cookie).match(\"NYT-Edition\\x3d([^;]+)\"))\u0026\u0026a[1]\u0026\u0026-1!==a[1].indexOf(\"edition|GLOBAL\")?\"international.nytimes.com\":\/^\\\/(games|crosswords|puzzles)\/.test(document.location.pathname)?\"games.nytimes.com\":\"nytimes.com\"}function b(){var a;regex=\/(^.*)(nytimes.com.*)\/;return a=", ["escape", ["macro", 18], 8, 16], "\u0026\u0026", ["escape", ["macro", 18], 8, 16], ".match(regex)[2]}function c(){var a=[];\"Homepage\"===", ["escape", ["macro", 1], 8, 16], "?a.push(\"Homepage\"):(", ["escape", ["macro", 481], 8, 16], "\u0026\u0026\na.push(", ["escape", ["macro", 481], 8, 16], "),", ["escape", ["macro", 482], 8, 16], "\u0026\u0026a.push(", ["escape", ["macro", 482], 8, 16], "),", ["escape", ["macro", 67], 8, 16], "\u0026\u0026a.push(", ["escape", ["macro", 67], 8, 16], "),\/parenting\\.\/.test(document.location.host)\u0026\u0026a.push(\"parenting\"),0===a.length\u0026\u0026\/\\\/202\\d\\\/\\d\\d\\\/\\d\\d\\\/us\\\/elections\\\/results\/.test(document.location.href)\u0026\u0026(a.push(\"us\"),a.push(\"Elections\")));return a.join(\",\")}if(\"object\"==typeof window._sf_async_config\u0026\u0026\"object\"==typeof pSUPERFLY\u0026\u0026\"function\"==typeof pSUPERFLY.virtualPage)pSUPERFLY.virtualPage({sections:c(),path:b(),\ntitle:", ["escape", ["macro", 483], 8, 16], "||document.title});else{window._sf_async_config={uid:16698,domain:d(),pingServer:\"pnytimes.chartbeat.net\",useCanonical:!0,path:b(),title:", ["escape", ["macro", 483], 8, 16], "||document.title};_cbq=window._cbq=window._cbq||[];switch(", ["escape", ["macro", 156], 8, 16], "){case \"sub\":_cbq.push([\"_acct\",\"paid\"]);break;case \"anon\":_cbq.push([\"_acct\",\"anon\"]);break;case \"regi\":_cbq.push([\"_acct\",\"lgdin\"])}try{window._sf_async_config.sections=c()}catch(a){}try{window._sf_async_config.authors=Array.isArray(", ["escape", ["macro", 484], 8, 16], ")\u0026\u0026\n", ["escape", ["macro", 484], 8, 16], ".join(\",\")}catch(a){}window._sf_endpt=(new Date).getTime();firstScript=document.getElementsByTagName(\"script\")[0];cbScript=document.createElement(\"script\");cbScript.async=!0;cbScript.src=\"https:\/\/static.chartbeat.com\/js\/chartbeat.js\";firstScript.parentNode.insertBefore(cbScript,firstScript)}}();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 68
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 0, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"impression_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.impression({module:", ["escape", ["macro", 470], 8, 16], ",card:", ["escape", ["macro", 486], 8, 16], ",block:", ["escape", ["macro", 487], 8, 16], ",eventData:", ["escape", ["macro", 472], 8, 16], ",newsletter:", ["escape", ["macro", 469], 8, 16], ",ad:", ["escape", ["macro", 489], 8, 16], ",integration:", ["escape", ["macro", 490], 8, 16], ",container:", ["escape", ["macro", 491], 8, 16], ",\"package\":", ["escape", ["macro", 492], 8, 16], ",item:", ["escape", ["macro", 493], 8, 16], ",addon:", ["escape", ["macro", 494], 8, 16], "},", ["escape", ["macro", 495], 8, 16], ");(function(){var a=document.querySelector(\"#impression_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 107
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"interaction_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.interaction({module:", ["escape", ["macro", 470], 8, 16], ",card:", ["escape", ["macro", 486], 8, 16], ",block:", ["escape", ["macro", 487], 8, 16], ",ad:", ["escape", ["macro", 489], 8, 16], ",newsletter:", ["escape", ["macro", 469], 8, 16], ",eventData:", ["escape", ["macro", 472], 8, 16], ",assetUrl:", ["escape", ["macro", 18], 8, 16], ",impression_id:", ["escape", ["macro", 496], 8, 16], ",\"package\":", ["escape", ["macro", 492], 8, 16], ",item:", ["escape", ["macro", 493], 8, 16], "});dataLayer.push({module:void 0,card:void 0,block:void 0,newsletter:void 0,eventData:void 0,ad:void 0,pageview:{ad:void 0},\"package\":void 0,item:void 0,impression_id:void 0});\n(function(){var a=document.querySelector(\"#interaction_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 109
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function c(d,a){var b=document.createElement(\"script\");b.type=\"text\/javascript\";a\u0026\u0026(b.onload=a,b.onerror=a);a=document.getElementsByTagName(\"head\")[0];a.appendChild(b);b.src=d}c(\"https:\/\/a1.nyt.com\/analytics\/show-ads.js\",function(){window.nyt_et\u0026\u0026nyt_et({subject:\"page_update\",adBlockEnabled:!1!==window.adBlockDetected})})})();\u003C\/script\u003E  ",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 112
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){try{var c=a.ns_,d=a.nyt_streamingAnalytics=a.nyt_streamingAnalytics||new c.ReducedRequirementsStreamingAnalytics({publisherId:\"3005403\"});a=", ["escape", ["macro", 498], 8, 16], "||{};var b=a.eventName,f=\"live\"===a.mData.videoDeliveryMethod,h=g(a);\"pause\"!==b\u0026\u0026\"video-complete\"!==b\u0026\u0026\"ad-pause\"!==b\u0026\u0026\"ad-complete\"!==b||d.stop();if(\"auto-play-start\"===b||\"user-play\"===b||\"resume\"===b)return k(h,f);if(\"ad-start\"===b)return l(a);var k=function(a,m){var b=c.ReducedRequirementsStreamingAnalytics.ContentType,e=\nb.ShortFormOnDemand;m\u0026\u0026(e=b.Live);d.playVideoContentPart(a,e)},l=function(b){var a=c.ReducedRequirementsStreamingAnalytics.AdType;d.playVideoContentPart({ns_st_cl:b.videoDuration},a.LinearOnDemandMidRoll)},g=function(b){var a=b.mData||{};return{ns_st_ci:b.contentId||\"*null\",ns_st_cl:a.videoDuration||\"*null\",ns_st_pu:a.videoFranchise||\"*null\",ns_st_pr:decodeURIComponent(a?a.videoName||\"*null\":\"*null\"),c3:b.contentCollection,ns_st_tpr:\"*null\",ns_st_ep:\"*null\",ns_st_tep:\"*null\",ns_st_sn:\"*null\",ns_st_en:\"*null\",\nns_st_ge:a.videoType||\"*null\",ns_st_ia:1,ns_st_ddt:\"*null\",ns_st_tdt:\"*null\",ns_st_st:\"*null\",c4:\"*null\",c6:\"*null\",ns_st_ce:\"*null\"}}}catch(e){console.log(\"gracefully failed to load comscore.\")}})(window);\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 113
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript data-gtmsrc=\"\/\/a1.nyt.com\/analytics\/comscore-streaming.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 114
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){function f(){if(\"MozAppearance\"in document.documentElement.style){var a=indexedDB.open(\"test\");a.onerror=c;a.onsuccess=d;return!0}}function e(a){b.nyt_et\u0026\u0026nyt_et({subject:\"page_update\",isIncognito:a})}var c,d;b.nyt_et\u0026\u0026function(a,g){c=a||function(){};d=g||function(){};b.webkitRequestFileSystem?(b.webkitRequestFileSystem(b.TEMPORARY,1,d,c),a=!0):a=void 0;if(!(a=a||f()))a:if(0\u003CObject.prototype.toString.call(b.HTMLElement).indexOf(\"Constructor\")||\"[object SafariRemoteNotification]\"===(!b.safari||\nsafari.pushNotification).toString()||b.localStorage\u0026\u0026\/Safari\/.test(b.navigator.userAgent)){try{b.openDatabase(null,null,null,null)}catch(h){c();a=!0;break a}try{localStorage.length||(localStorage.x=1,localStorage.removeItem(\"x\")),d()}catch(h){navigator.cookieEnabled?c():d()}a=!0}else a=void 0;a||(b.indexedDB||!b.PointerEvent\u0026\u0026!b.MSPointerEvent?a=void 0:(c(),a=!0));a||d()}(function(){e(!0)},function(){e(!1)})})(window);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 120
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){nyt_et(\"soon\",{subject:\"ab_alloc\",allocs:[{name:", ["escape", ["macro", 499], 8, 16], ",variant:", ["escape", ["macro", 500], 8, 16], "}],gtm:", ["escape", ["macro", 461], 8, 16], "})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 123
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){var d=\"a.nytimes.com\",e=", ["escape", ["macro", 31], 8, 16], "||encodeURIComponent(document.referrer),f=", ["escape", ["macro", 18], 8, 16], "||encodeURIComponent(document.location.href),a=new XMLHttpRequest;a.withCredentials=!0;a.open(\"GET\",\"https:\/\/\"+d+\"\/svc\/nyt\/data-layer?sourceApp\\x3d\"+", ["escape", ["macro", 21], 8, 16], "+\"\\x26caller_id\\x3d\"+", ["escape", ["macro", 21], 8, 16], "+\"-gtm\\x26referrer\\x3d\"+e+\"\\x26assetUrl\\x3d\"+f+\"\\x26jkcd\\x3d\"+Date.now(),!0);a.onload=function(){var c=JSON.parse(a.responseText);c.event=\"pageDataReady\";window[b].push(c)};\na.addEventListener(\"error\",function(){window[b].push({event:\"pageDataReady\"})});a.send()})(\"dataLayer\");\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 124
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 59, 0]],
                "teardown_tags": ["list", ["tag", 106, 0]],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=setInterval(function(){window.facebookPixel\u0026\u0026window.facebookPixel.fire\u0026\u0026(window.facebookPixel.fire({pixelName:\"NewsletterSignup\"}),clearInterval(a))},1E3)})();\u003C\/script\u003E  ",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 134
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\" id=\"media_temp\"\u003E(function(){var a=JSON.parse(JSON.stringify(", ["escape", ["macro", 497], 8, 16], "));a.subject=\"media\";a.gtm=", ["escape", ["macro", 461], 8, 16], ";nyt_et(\"soon\",a);dataLayer.push({media:null});if(a=document.querySelector(\"#media_temp\"))a.outerHTML=\"\"})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 140
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003EnytAnalytics.slideshow({slideshow:", ["escape", ["macro", 501], 8, 16], "});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 141
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar event=", ["escape", ["macro", 504], 8, 16], ";event.subject=\"ab_expose\";event.gtm=", ["escape", ["macro", 461], 8, 16], ";(function(){nyt_et(\"soon\",event)})();dataLayer.push({abtest:null});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 147
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.nyt_et\u0026\u0026nyt_et(\"soon\",{subject:\"page_update\",jsonKidd:", ["escape", ["macro", 509], 8, 16], ",canonicalUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,assetId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 31], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),sourceApp:", ["escape", ["macro", 503], 8, 16], ",gtm:", ["escape", ["macro", 461], 8, 16], ",presentation:", ["escape", ["macro", 476], 8, 16], ",\nweb_app:{releaseVersion:", ["escape", ["macro", 510], 8, 16], "}})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 154
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 1, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,c){a\u0026\u0026a.length\u0026\u0026(nyt_et(\"soon\",{subject:\"ab_alloc\",allocs:a}),a=window.google_tag_manager[", ["escape", ["macro", 458], 8, 16], "],a.dataLayer.set(\"abtest\",void 0),a.dataLayer.set(\"allocs\",void 0))})(", ["escape", ["macro", 512], 8, 16], ",", ["escape", ["macro", 513], 8, 16], ",", ["escape", ["macro", 514], 8, 16], ");\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 171
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript id=\"gtm_beforeunload_temp\" type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"beforeunload\",function(){window.dataLayer.push({event:\"beforeunload\"});nytAnalytics.exitPriority=!0});(function(){var a=document.querySelector(\"#gtm_beforeunload_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 172
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Enyt_et.get_pageview_id()\u0026\u0026nyt_et(\"send\",{subject:\"page_exit\",assetUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,assetId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 31], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),activeTime:(window.nytAnalytics||{}).activeTime,exit:!0,gtm:", ["escape", ["macro", 461], 8, 16], "});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 173
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.iterateSettings={apiKey:\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoiNWMwOThiM2QxNjU0YzEwMDAxMmM2OGY5IiwiaWF0IjoxNTQ0MTI5MzQxfQ.UI13nEXGs0udbZxhjyFLruAEed42XwFO4fZlCqOgY1o\"};\n(function(a,d,f,g,h){function e(){b=d.createElement(f);b.id=g;b.async=1;b.src=\"https:\/\/platform.iteratehq.com\/loader.js\";k.parentNode.insertBefore(b,k)}if(!d.getElementById(g)){a.IterateObjectName=h;var c=function(){c.c(arguments)};c.q=[];c.c=function(l){c.q.push(l)};a[h]=c;var b,k=d.getElementsByTagName(f)[0];\"complete\"===d.readyState?e():a.attachEvent?a.attachEvent(\"onload\",e):a.addEventListener(\"load\",e,!1)}})(window,document,\"script\",\"iterate-js\",\"Iterate\");\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etry{if(window.Iterate\u0026\u0026\"function\"===typeof Iterate){var subscriberInfo=\"", ["escape", ["macro", 517], 7], "\",uType=\"", ["escape", ["macro", 156], 7], "\",eduSubscriber=\"object\"===typeof subscriberInfo?subscriberInfo.eduSubscriber:\"\",userType=\"string\"===typeof uType?uType:\"\",surveyTriggerCookie=\"", ["escape", ["macro", 518], 7], "\",params={eduSubscriber:eduSubscriber,userType:userType};surveyTriggerCookie?(params.external_id=\"", ["escape", ["macro", 159], 7], "\",params.agentId=\"", ["escape", ["macro", 173], 7], "\",Iterate(\"identify\",params),Iterate(\"install\",surveyTriggerCookie)):\nIterate(\"identify\",params)}}catch(a){console.log(a)};\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 175
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript id=\"gtm_postMessage_tmp\" type=\"text\/gtmscript\"\u003E(function(){function b(a){var b={pageDataReady:!0,scrollComplete:!0,heartbeat:!0,moduleInteraction:!0,trackVirtualPage:!0,dynamicElementsLoaded:!0,videoEvent:!0,mediaEvent:!0,impression:!0,performance:!0,error:!0,\"ab-alloc\":!0,\"ab-expose\":!0,\"send-direct\":!0};\"object\"===typeof a.data\u0026\u0026\"string\"===typeof a.data.event\u0026\u0026b[a.data.event]\u0026\u0026(\/nytimes.com\/.test(a.origin)\u0026\u0026dataLayer.push(a.data),\/googlesyndication.com\/.test(a.origin)\u0026\u0026(a=JSON.parse(JSON.stringify(a.data)),\"moduleInteraction\"===a.event\u0026\u0026(delete a.event,\na.subject=\"dfp-ad-events\",a={event:\"send-direct\",payload:a}),dataLayer.push(a)))}window.addEventListener(\"message\",b,!1)})();(function(){var b=document.querySelector(\"#gtm_postMessage_tmp\");b\u0026\u0026b.parentNode.removeChild(b)})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 176
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"et2-send-direct\" type=\"text\/gtmscript\"\u003E\"function\"===typeof nyt_et\u0026\u0026nyt_et(\"send\",", ["escape", ["macro", 519], 8, 16], ");(function(a){a.parentNode.removeChild(a)})(document.getElementById(\"et2-send-direct\"));\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 179
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 0, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"performance_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.performance({performance:", ["escape", ["macro", 475], 8, 16], "});(function(){var a=document.querySelector(\"#performance_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 182
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,b,c,d,e,f){a.ddjskey=e;a.ddoptions=f||null;a=b.createElement(c);b=b.getElementsByTagName(c)[0];a.async=1;a.src=d;b.parentNode.insertBefore(a,b)}(window,document,\"script\",\"https:\/\/dd.nytimes.com\/tags.js\",\"499AE34129FA4E4FABC31582C3075D\",{endpoint:\"https:\/\/dd.nytimes.com\/js\/\"});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 183
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a=\"script\";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"e1c4c748-041c-4910-989a-1847d8a95fb2\");snaptr(\"track\",\"Login\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 184
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\" id=\"et_mediaevent_temp\"\u003E(function(){var a=JSON.parse(JSON.stringify(", ["escape", ["macro", 497], 8, 16], "));\"object\"===typeof a\u0026\u0026\"video-player\"==a.module\u0026\u0026\"function\"==typeof nyt_et\u0026\u0026(a.subject=\"interaction\",nyt_et(\"send\",a));if(a=document.querySelector(\"#et_mediaevent_temp\"))a.outerHTML=\"\"})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 185
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=", ["escape", ["macro", 159], 8, 16], "||\"\",c=", ["escape", ["macro", 395], 8, 16], "||\"\",a={};b\u0026\u0026(a.regi_id=b);c\u0026\u0026(a.playaction=c);a[\"WT.tx_e\"]=\"s\";a[\"WT.si_n\"]=\"MiniGame\";a[\"WT.si_x\"]=\"2\";a[\"WT.si_p\"]=\"GameLoad\";ORA.click({data:a})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1208
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"infinity_marketing_temp\" type=\"text\/gtmscript\"\u003E(function(){var b=", ["escape", ["macro", 159], 8, 16], "||\"\",a={},c=", ["escape", ["macro", 520], 8, 16], "||\"\",d=", ["escape", ["macro", 521], 8, 16], "||\"\",e=", ["escape", ["macro", 419], 8, 16], "||\"\",f=", ["escape", ["macro", 522], 8, 16], "||\"\",g=", ["escape", ["macro", 442], 8, 16], "||\"\",h=", ["escape", ["macro", 523], 8, 16], "||\"\",k=", ["escape", ["macro", 524], 8, 16], "||\"\",l=", ["escape", ["macro", 525], 8, 16], "||\"\";b\u0026\u0026(a.regi_id=b);a[\"WT.tx_e\"]=\"v\";a[\"WT.si_n\"]=\"MiniGame\";a[\"WT.si_x\"]=\"1\";a[\"WT.si_p\"]=\"GamePage\";c\u0026\u0026(a.b2bsub=c);d\u0026\u0026(a.chldsub=d);e\u0026\u0026(a.condensebundle=e);f\u0026\u0026(a.gtwayHITLM=f);g\u0026\u0026(a.vrzschl=g);h\u0026\u0026(a.giftrecp=h);k\u0026\u0026(a.newletterlist=\nk);l\u0026\u0026(a.a14dv=l);ORA.view({data:a})})();(function(){var b=document.querySelector(\"#infinity_marketing_temp\");b\u0026\u0026(b.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1210
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a=\"script\";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"874326db-7dc3-49c4-a8b2-8e29732a9ff7\");snaptr(\"track\",\"Login\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1216
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){dataLayer.push({event:\"podcast_link\"})})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1248
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=", ["escape", ["macro", 526], 8, 16], ";a.referrerPolicy=\"no-referrer-when-downgrade\"})();\u003C\/script\u003E "],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1315
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/c.oracleinfinity.io\/acs\/account\/cialth61ui\/js\/main\/odc.js?_ora.context=analytics:production\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1318
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"infinity_marketing_temp\" type=\"text\/gtmscript\"\u003E(function(){var b=", ["escape", ["macro", 159], 8, 16], "||\"\",a={},c=", ["escape", ["macro", 18], 8, 16], "||\"\",d=", ["escape", ["macro", 520], 8, 16], "||\"\",e=", ["escape", ["macro", 521], 8, 16], "||\"\",f=", ["escape", ["macro", 527], 8, 16], "||\"\",g=", ["escape", ["macro", 522], 8, 16], "||\"\",h=", ["escape", ["macro", 442], 8, 16], "||\"\",k=", ["escape", ["macro", 523], 8, 16], "||\"\",l=", ["escape", ["macro", 524], 8, 16], "||\"\",m=", ["escape", ["macro", 525], 8, 16], "||\"\";offerID=", ["escape", ["macro", 528], 8, 16], "||\"\";b\u0026\u0026(a.regi_id=b);a[\"WT.tx_e\"]=\"v\";a[\"WT.si_n\"]=\"Registration Flow\";a[\"WT.si_x\"]=\"1\";a[\"WT.si_p\"]=\"Thank You\";c\u0026\u0026(a[\"asset.url\"]=c);d\u0026\u0026(a.b2bsub=d);e\u0026\u0026(a.chldsub=e);f\u0026\u0026\n(a.condensebundle=f);g\u0026\u0026(a.gtwayHITLM=g);h\u0026\u0026(a.vrzschl=h);k\u0026\u0026(a.giftrecp=k);l\u0026\u0026(a.newletterlist=l);m\u0026\u0026(a.a14dv=m);offerID\u0026\u0026(a[\"WT.offerID\"]=offerID);ORA.view({data:a})})();(function(){var b=document.querySelector(\"#infinity_marketing_temp\");b\u0026\u0026(b.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1320
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ecapture_others=", ["escape", ["macro", 530], 8, 16], ";container_id=", ["escape", ["macro", 458], 8, 16], ";send_to_et={subject:\"page_update\"};if(Array.isArray(capture_others)\u0026\u00260\u003Ccapture_others.length){for(var i=0;i\u003Ccapture_others.length;i++)send_to_et[capture_others[i]]=google_tag_manager[container_id].dataLayer.get(capture_others[i]);nyt_et(send_to_et)}dataLayer.push({capture:{others:void 0}});\u003C\/script\u003E "],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1328
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=1008590664,google_conversion_label=\"8HYJCL-Mht0CEMi-9-AD\",google_remarketing_only=!1,google_allow_ad_personalization_signals=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1349
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript data-gtmsrc=\"\/\/static.ads-twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o70re\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o70re\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o70re\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1350
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"infinity_marketing_temp\" type=\"text\/gtmscript\"\u003E(function(){var b=", ["escape", ["macro", 159], 8, 16], "||\"\",a={},c=", ["escape", ["macro", 18], 8, 16], "||\"\",d=", ["escape", ["macro", 520], 8, 16], "||\"\",e=", ["escape", ["macro", 521], 8, 16], "||\"\",f=", ["escape", ["macro", 527], 8, 16], "||\"\",g=", ["escape", ["macro", 522], 8, 16], "||\"\",h=", ["escape", ["macro", 442], 8, 16], "||\"\",k=", ["escape", ["macro", 523], 8, 16], "||\"\",l=", ["escape", ["macro", 524], 8, 16], "||\"\",m=", ["escape", ["macro", 525], 8, 16], "||\"\";offerID=", ["escape", ["macro", 528], 8, 16], "||\"\";b\u0026\u0026(a.regi_id=b);a[\"WT.tx_e\"]=\"s\";a[\"WT.si_n\"]=\"PUMA\";a[\"WT.si_x\"]=\"2\";a[\"WT.si_p\"]=\"Thank You\";c\u0026\u0026(a[\"asset.url\"]=c);d\u0026\u0026(a.b2bsub=d);e\u0026\u0026(a.chldsub=e);f\u0026\u0026(a.condensebundle=\nf);g\u0026\u0026(a.gtwayHITLM=g);h\u0026\u0026(a.vrzschl=h);k\u0026\u0026(a.giftrecp=k);l\u0026\u0026(a.newletterlist=l);m\u0026\u0026(a.a14dv=m);offerID\u0026\u0026(a[\"WT.offerID\"]=offerID);ORA.view({data:a})})();(function(){var b=document.querySelector(\"#infinity_marketing_temp\");b\u0026\u0026(b.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1360
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"infinity_marketing_temp\" type=\"text\/gtmscript\"\u003E(function(){var b=", ["escape", ["macro", 159], 8, 16], "||\"\",a={},c=", ["escape", ["macro", 18], 8, 16], "||\"\",d=", ["escape", ["macro", 520], 8, 16], "||\"\",e=", ["escape", ["macro", 521], 8, 16], "||\"\",f=", ["escape", ["macro", 527], 8, 16], "||\"\",g=", ["escape", ["macro", 522], 8, 16], "||\"\",h=", ["escape", ["macro", 442], 8, 16], "||\"\",k=", ["escape", ["macro", 523], 8, 16], "||\"\",l=", ["escape", ["macro", 524], 8, 16], "||\"\",m=", ["escape", ["macro", 525], 8, 16], "||\"\";offerID=", ["escape", ["macro", 528], 8, 16], "||\"\";b\u0026\u0026(a.regi_id=b);a[\"WT.tx_e\"]=\"v\";a[\"WT.si_n\"]=\"PUMA\";a[\"WT.si_x\"]=\"1\";a[\"WT.si_p\"]=\"Offer View\";c\u0026\u0026(a[\"asset.url\"]=c);d\u0026\u0026(a.b2bsub=d);e\u0026\u0026(a.chldsub=e);f\u0026\u0026(a.condensebundle=\nf);g\u0026\u0026(a.gtwayHITLM=g);h\u0026\u0026(a.vrzschl=h);k\u0026\u0026(a.giftrecp=k);l\u0026\u0026(a.newletterlist=l);m\u0026\u0026(a.a14dv=m);offerID\u0026\u0026(a[\"WT.offerID\"]=offerID);ORA.view({data:a})})();(function(){var b=document.querySelector(\"#infinity_marketing_temp\");b\u0026\u0026(b.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1362
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript async data-gtmsrc=\"https:\/\/cdn.brandmetrics.com\/tag\/85a1ebf79602421aa1c2c2f24d32cb6c\/nyt.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1373
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){dataLayer.push({module:void 0,card:void 0,block:void 0,eventData:void 0,ad:void 0,pageview:{ad:void 0}})})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 119
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var g=function(a){return\"string\"===typeof a?a.toLowerCase():a},n=function(a){if(!a)return{};a=decodeURI(a);try{return a='{\"'+a.replace(\/[\u0026]+\/g,\"\\x26\").replace(\/([\\?\u0026][^=]+)([\u0026]|$)\/g,\"$1\\x3d$2\").replace(\/(^\\?|\u0026$)\/g,\"\").replace(\/\u0026\/g,'\",\"').replace(\/=\/g,'\":\"')+'\"}',JSON.parse(a)}catch(c){return{}}},m=function(){var a=window.navigator.userAgent,c=", ["escape", ["macro", 31], 8, 16], "||document.referrer,e=document.location.href,b=n(document.location.search);-1\u003Cc.indexOf(\"?\")\u0026\u0026n(c.substr(c.indexOf(\"?\")));var d=\nc,f=\"src smid nl nrx partner campaignid mcid meid\".split(\" \"),h=\/^[^:]*:\\\/\\\/([^\\\/]*)\/,m=f.length,k;for(k=0;k\u003Cm;k++)if(b[f[k]]){var l=f[k];break}e=l?b[l]:\"\"!==d\u0026\u0026d.match(h)?d.match(h)[1]||\"\":\"\"===d\u0026\u0026\/\\.app\/.test(e)?\"NYT Mobile Apps\":\/FBIOS\/.test(a)?\"FBIOS\":\/FBAN\/.test(a)?\"FBAN\":\"\";l=r(e,b);d=e;a=b;f=c;h=\"NYT Mobile Apps\"===d||\"cur\"===a.smtyp||!!a.nl||\"sms\"===a.src||a.smprod\u0026\u0026a.smprod.indexOf\u0026\u0026(-1\u003Ca.smprod.indexOf(\"nytnow\")||-1\u003Ca.smprod.indexOf(\"tools\"))||a.partner\u0026\u0026a.partner.indexOf\u0026\u0026(-1\u003Ca.partner.indexOf(\"rss\")||\n-1\u003Ca.partner.indexOf(\"socialFlow\"))||!!a.nrx||d\u0026\u0026d.indexOf\u0026\u0026-1\u003Cd.indexOf(\"nytimes.com\")||g(d)===g(\"SafariPush\");a.mcid||a.meid||\"pay\"===a.smtyp||\/aud_dev\/.test(a[\"WT.mc_id\"])||\/paid.outbrain.com\/.test(f)?d=\"paid\":h?d=\"owned\":(p.test(d)\u0026\u0026d.indexOf(\"nytimes.com\"),d=\"earned\");a=e;f=\/naver|aol|lycos|search.netscape|cnn|mamma|terra|search.virgilio|alice|eniro|yahoo|aol|about|voila|baidu|yandex|wp|online.onetcenter|yam|rambler|daum|msn|bing|ask|altavista|alltheweb|bing|najdi|aol|seznam|search|duckduckgo|mynet|ekolay|pchome|kvasir|sesam|ozu|szukacz|google\/;\nh=\/\\.(facebook|twitter|reddit|pinterest|getpocket|stumbleupon|myspace|fark|digg|linkedin|plus.url.google|disqus|quora|yelp|meetup|goodreads|weibo|tumblr|instagram|urbanspoon|weebly|youtube|ycombinator|vk|meneame)\\.\/;c=f.test(a)?\"search\":q(a)||h.test(a)||\"t.co\"===a?\"social\":\/nytimes.com|nytnow.com\/.test(a)||\"NYT Mobile Apps\"===a?\"internal\":!b.moc\u0026\u0026!b.meid||null!==c\u0026\u0026\"\"!==c?(b.mcid||b.mc)\u0026\u0026null!==a?\"marketing_campaign\":b.nl||b.emc?\"newsletter\":null===a?null:g(a)===g(\"SafariPush\")||\"sms\"===a?\"notifications\":\n\"referring_links\":\"marketing_email\";b=e;b=\"string\"===typeof b\u0026\u0026\"SafariPush\"===b?b.toLowerCase():b;return{source:b,subchannel:l,type:d,channel:c}},p=\/.*\\..*\/,q=function(a){if(a){var c=\/^(fb\\-|tw\\-|pin\\-|pi\\-|pinterest\\-|re\\-|go\\-|li\\-|in\\-|kk\\-|ln\\-|wc\\-)\/;a=a\u0026\u0026a.match\u0026\u0026a.match(c);if(Array.isArray(a))return a[1]}},r=function(a,c){if(c.meid)return\"marketing email\";if(c.nl||c.emc)return\"Newsletter\";if(\"FBAN\"===a||\"FBIOS\"===a)return\"facebook\";if(\"NYT Mobile Apps\"==a)return a;if(\"sms\"===a)return\"sms notifications\";\nif(g(a)===g(\"SafariPush\"))return\"safari notifications\";if(p.test(a)){var e=\"stumbleupon typepad blogspot digg disqus facebook fark getpocket google linkedin Social pinterest quora reddit scoop slashdot twitter techmeme tinyurl vk\".split(\" \");var b={stumbleupon:\/corp.stumbleupon.com|stumbleupon.com\/,typepad:\/delong.typepad.com|economistsview.typepad.com\/,blogspot:\/digbysblog.blogspot.com\/,digg:\/digg.com\/,disqus:\/disqus.com\/,facebook:\/facebook.com|fb-nytdining|fb-nytimes|fb-nytmetro\u0026smtyp=cur|fb-nytopinion|fb-nytpolitics|fb-nytvideo|fb-share|fb-share?utm_hp_ref=parents|l.facebook.com|lm.facebook.com|m.facebook.com|www.facebook.com\/,\nfark:\/fark.com\/,getpocket:\/getpocket.com\/,google:\/go-share|gp-nytimes|plus.url.google.com\/,linkedin:\/li-nytimes|li-share|linkedin.com|lnkd.in\/,Social:\/netvibes.com|news.ycombinator.com|nythealth|nytimesarts|nytimesphoto|nytpolitics|nytscience|paper.li|pl-share\/,pinterest:\/pi-nytimes|pin-share|pinterest.com\/,quora:\/quora.com\/,reddit:\/re-share|re-share\/,scoop:\/scoop.it\/,slashdot:\/slashdot.org\/,twitter:\/t.co$|tw-bna|tw-dealbook|tw-nytdavidbrooks|tw-nytfashion|tw-nytfood|tw-nythealth|tw-nytimes|tw-nytimesbits|tw-nytimesbusiness|tw-nytimeskrugman|tw-nytimesmap|tw-nytimesmusic|tw-nytimesscience|tw-nytimestech|tw-nytimestheater|tw-nytimestravel|tw-nytimeswell|tw-nytimesworld|tw-nytmag|tw-nytmedia|tw-nytmetro|tw-nytmovies|tw-nytnational|tw-nytopinion|tw-nytstyles|tw-nytvideo|tw-share|tw-tmagazine|tw-upshotnyt\/,\ntechmeme:\/techmeme.com\/,tinyurl:\/tinyurl.com\/,vk:\/vk.com\/};ln=e.length;for(i=i=0;i\u003Cln;i++)if(b[e[i]].test(a))return rollup=e[i];return a}e={\"fb-\":\"facebook\",\"tw-\":\"twitter\",\"pin-\":\"pinterest\",\"pi-\":\"pinterest\",\"pinterest-\":\"pinterest\",\"re-\":\"reddit\",\"go-\":\"googleplus\",\"li-\":\"linkedin\",\"in-\":\"instagram\",\"kk-\":\"kakao\",\"ln-\":\"line\",\"wc-\":\"wechat\"};return e[q(a)]};window.nytAnalytics=window.nytAnalytics||{};nytAnalytics.derivedReferrer=m()})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 70
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.nyt_et\u0026\u0026nyt_et(\"send\",{subject:\"mt_expose\",vendor:\"FB\"})})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1387
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 105, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var h=\"src|smprod|emc|smid|nl|partner|nrx|WT.mc_id|oc|CMP|mc|meid\",l=new RegExp(\"\\\\|(\"+h+\")\\x3d\",\"g\"),m=function(a){return function(c,b){var f=a.indexOf(c),e=a.indexOf(b);return f\u003Ee?1:f\u003Ce?-1:0}}(h.split(\"|\")),n=function(a,f){var b={campaignSource:a,campaignMedium:\"notifications\",campaignContent:c(f,\"msgid\")};\"sms\"===a.toLowerCase()\u0026\u0026(b.campaignName=f.subid);return b},c=function(a,c,b){return\"object\"===typeof a\u0026\u0026a.hasOwnProperty(c)?a[c]:b?b:\"\"},k=function(a){if(!a)return{};a=decodeURI(a);\ntry{return a='{\"'+a.replace(\/[\u0026]+\/g,\"\\x26\").replace(\/([\\?\u0026][^=]+)([\u0026]|$)\/g,\"$1\\x3d$2\").replace(\/(^\\?|\u0026$)\/g,\"\").replace(\/\u0026\/g,'\",\"').replace(\/=\/g,'\":\"')+'\"}',JSON.parse(a)}catch(f){return{}}};h=function(){var a,f=", ["escape", ["macro", 21], 8, 16], ",b={},g=", ["escape", ["macro", 31], 8, 16], ";var e=document.location.search||\"\";if(g\u0026\u0026\/.*\\.nytimes\\.com\/.test(g)||!e)return b;var d=k(e);if(a=e.replace(\/\\?|\u0026\/g,\"|\").match(l)){a=a.map(function(a){return a.replace(\/[\\|=]\/g,\"\")}).sort(m);d=k(e);b.campaignName=c(d,\"subid\");b.campaignContent=\nc(d,\"subid1\");b.campaignKeyword=c(d,\"subid2\")||c(d,\"ad-keywords\");e=a.shift();\"src\"===e\u0026\u0026\"safaripush\"!==c(d,e)\u0026\u0026\"sms\"!==c(d,e)\u0026\u0026(e=a.shift());if(\"smprod\"===e\u0026\u0026\"eta1\"===c(d,\"emc\")||\"emc\"===e\u0026\u0026\"eta1\"!==c(d,e)\u0026\u0026\"edit_na\"!==c(d,e)||\"smid\"===e\u0026\u0026\"\"!==c(d,\"nrx\"))e=a.shift();\"mc\"===e\u0026\u0026\"\"===c(d,\"mcid\")\u0026\u0026(e=a.shift());if(e)switch(a=c(d,e),e){case \"src\":b=n(a,d);break;case \"nl\":b={campaignSource:a,campaignMedium:\"email\",campaignName:c(d,\"emc\"),campaignContent:c(d,\"em_pos\")};break;case \"smid\":b={campaignSource:a,\ncampaignMedium:\"social\",campaignName:c(d,\"smtyp\"),campaignContent:c(d,\"smvar\")};break;case \"smprod\":b={campaignSource:function(){if(g){var a=g.match(\/https?:\\\/\\\/([^\/]*)\/);return a?a[1]:g}return\"nyt-fb-native-external-iframe\"===f?\"m.facebook.com\":\"null\"}(),campaignMedium:\"social\",campaignName:c(d,\"smid\"),campaignContent:a};break;case \"partner\":b.campaignSource=a;b.campaignMedium=\"rss\"===a.toLowerCase()?\"RSS\":\"partner\";break;case \"emc\":b=\"edit_na\"===a?{campaignName:c(d,\"emc\"),campaignContent:c(d,\"empos\"),\ncampaignSource:\"Breaking News\",campaignMedium:\"email\"}:{campaignSource:\"nytnow\",campaignMedium:\"email share\",campaignName:\"share tool\"};break;case \"nrx\":b.campaignSource=a;b.campaignMedium=\"Vanity URL\";break;case \"WT.mc_id\":b.campaignSource=a;b.campaignMedium=\"Marketing Campaigns\";break;case \"oc\":b.campaignSource=a;b.campaignMedium=\"Marketing Campaigns\";break;case \"CMP\":b.campaignSource=a;b.campaignMedium=\"Marketing Campaigns\";break;case \"mc\":b.campaignSource=c(d,\"mcid\");b.campaignMedium=a;break;\ncase \"meid\":b.campaignSource=a,b.campaignMedium=\"marketing email\",b.campaignName=c(d,\"moc\"),b.campaignContent=c(d,\"rid\"),b.campaignKeyword=c(d,\"dt\")}}return b};nytAnalytics=window.nytAnalytics||{};nytAnalytics.campaignMap=h()})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 66
            }],
            "predicates": [{"function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.historyChange"}, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {"function": "_eq", "arg0": ["macro", 5], "arg1": "track"}, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "scrollComplete"
            }, {"function": "_sw", "arg0": ["macro", 6], "arg1": "out"}, {
                "function": "_re",
                "arg0": ["macro", 7],
                "arg1": "^.{5}s"
            }, {"function": "_eq", "arg0": ["macro", 8], "arg1": "\/section\/learning"}, {
                "function": "_re",
                "arg0": ["macro", 7],
                "arg1": "^.{4}e"
            }, {"function": "_re", "arg0": ["macro", 7], "arg1": "^.{4}p"}, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": ".*"
            }, {
                "function": "_re",
                "arg0": ["macro", 9],
                "arg1": "\\w+\\%40\\w+\\.\\w+|\\w+\\@\\w+\\.\\w+"
            }, {"function": "_eq", "arg0": ["macro", 14], "arg1": "true"}, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "moduleInteraction"
            }, {"function": "_sw", "arg0": ["macro", 8], "arg1": "\/real-estate\/"}, {
                "function": "_re",
                "arg0": ["macro", 8],
                "arg1": "^\\\/(games|crosswords|puzzles)\\\/.*wordle"
            }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "videoEvent"}, {
                "function": "_re",
                "arg0": ["macro", 8],
                "arg1": "^\\\/(real-estate|paidpost)\\\/"
            }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "mediaEvent"}, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "pageDataReady"
            }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "gaScrollEvent"}, {
                "function": "_eq",
                "arg0": ["macro", 421],
                "arg1": "event"
            }, {"function": "_re", "arg0": ["macro", 0], "arg1": "gaEvent"}, {
                "function": "_eq",
                "arg0": ["macro", 11],
                "arg1": "newsletters"
            }, {"function": "_eq", "arg0": ["macro", 391], "arg1": "subscribe"}, {
                "function": "_eq",
                "arg0": ["macro", 435],
                "arg1": "undefined"
            }, {"function": "_eq", "arg0": ["macro", 11], "arg1": "gateway"}, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "impression"
            }, {"function": "_eq", "arg0": ["macro", 437], "arg1": "true"}, {
                "function": "_eq",
                "arg0": ["macro", 8],
                "arg1": "\/share"
            }, {
                "function": "_cn",
                "arg0": ["macro", 395],
                "arg1": "referral-advocate-landing-page"
            }, {"function": "_eq", "arg0": ["macro", 8], "arg1": "\/newsletters\/morning-briefing"}, {
                "function": "_ew",
                "arg0": ["macro", 8],
                "arg1": "\/podcasts\/daily-newsletter-quarantine-virus.html"
            }, {"function": "_eq", "arg0": ["macro", 8], "arg1": "\/news-event\/coronavirus"}, {
                "function": "_cn",
                "arg0": ["macro", 90],
                "arg1": "The Daily"
            }, {"function": "_cn", "arg0": ["macro", 418], "arg1": "\/the-daily"}, {
                "function": "_cn",
                "arg0": ["macro", 418],
                "arg1": "universal\/introducing-father-soldier-son-a-film-from-the-times-and-netflix.html"
            }, {"function": "_cn", "arg0": ["macro", 403], "arg1": "user-play"}, {
                "function": "_cn",
                "arg0": ["macro", 8],
                "arg1": "podcasts\/nice-white-parents-serial"
            }, {"function": "_cn", "arg0": ["macro", 438], "arg1": "playing"}, {
                "function": "_re",
                "arg0": ["macro", 439],
                "arg1": "Via.*(Apple Podcasts|Spotify|Google)"
            }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.linkClick"}, {
                "function": "_re",
                "arg0": ["macro", 440],
                "arg1": "(^$|((^|,)2703797_1249($|,)))"
            }, {"function": "_re", "arg0": ["macro", 440], "arg1": "(^$|((^|,)2703797_1251($|,)))"}, {
                "function": "_re",
                "arg0": ["macro", 440],
                "arg1": "(^$|((^|,)2703797_1252($|,)))"
            }, {"function": "_cn", "arg0": ["macro", 8], "arg1": "opinion\/sway-kara"}, {
                "function": "_re",
                "arg0": ["macro", 439],
                "arg1": "Apple Podcasts|Spotify|Google|Stitcher"
            }, {"function": "_re", "arg0": ["macro", 440], "arg1": "(^$|((^|,)2703797_1259($|,)))"}, {
                "function": "_cn",
                "arg0": ["macro", 8],
                "arg1": "\/newsletters\/coronavirus-schools-briefing"
            }, {"function": "_cn", "arg0": ["macro", 8], "arg1": "\/spotlight\/podcasts"}, {
                "function": "_cn",
                "arg0": ["macro", 8],
                "arg1": "books\/review\/podcast"
            }, {"function": "_cn", "arg0": ["macro", 8], "arg1": "modern-love-podcast"}, {
                "function": "_cn",
                "arg0": ["macro", 8],
                "arg1": "podcasts\/still-processing"
            }, {
                "function": "_re",
                "arg0": ["macro", 8],
                "arg1": "((podcasts|column)\/.*rabbit-hole)|rabbit-hole-podcast"
            }, {"function": "_cn", "arg0": ["macro", 11], "arg1": "live_events_modal"}, {
                "function": "_cn",
                "arg0": ["macro", 396],
                "arg1": "rsvp-success"
            }, {"function": "_eq", "arg0": ["macro", 441], "arg1": "true"}, {
                "function": "_cn",
                "arg0": ["macro", 418],
                "arg1": "games\/wordle"
            }, {"function": "_re", "arg0": ["macro", 7], "arg1": ".*"}, {
                "function": "_cn",
                "arg0": ["macro", 442],
                "arg1": "false"
            }, {"function": "_re", "arg0": ["macro", 7], "arg1": "^.{8}s"}, {
                "function": "_cn",
                "arg0": ["macro", 418],
                "arg1": "\/spelling-bee"
            }, {"function": "_eq", "arg0": ["macro", 455], "arg1": "commentsContainer"}, {
                "function": "_eq",
                "arg0": ["macro", 456],
                "arg1": "commentsContainer"
            }, {
                "function": "_re",
                "arg0": ["macro", 462],
                "arg1": "module|card|block|ad|package|item",
                "ignore_case": true
            }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "heartbeat"}, {
                "function": "_eq",
                "arg0": ["macro", 478],
                "arg1": "1"
            }, {"function": "_gt", "arg0": ["macro", 479], "arg1": "0"}, {
                "function": "_sw",
                "arg0": ["macro", 480],
                "arg1": "myaccount"
            }, {"function": "_eq", "arg0": ["macro", 485], "arg1": "1"}, {
                "function": "_eq",
                "arg0": ["macro", 462],
                "arg1": "slideshow"
            }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "allocation"}, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "trackVirtualPage"
            }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "ab-expose"}, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "ab-alloc"
            }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "beforeunload"}, {
                "function": "_re",
                "arg0": ["macro", 515],
                "arg1": "http.+"
            }, {"function": "_eq", "arg0": ["macro", 516], "arg1": "1"}, {
                "function": "_re",
                "arg0": ["macro", 440],
                "arg1": "(^$|((^|,)2703797_1331($|,)))"
            }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.load"}, {
                "function": "_eq",
                "arg0": ["macro", 8],
                "arg1": "\/interactive\/2020\/08\/27\/arts\/design\/jackson-heights-queens-virtual-walk-tour.html"
            }, {
                "function": "_eq",
                "arg0": ["macro", 8],
                "arg1": "\/interactive\/2020\/10\/12\/style\/faze-3d-house-tour.html"
            }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "send-direct"}, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "performance"
            }, {"function": "_cn", "arg0": ["macro", 480], "arg1": "myaccount.nytimes.com"}, {
                "function": "_sw",
                "arg0": ["macro", 8],
                "arg1": "\/crosswords\/game\/mini"
            }, {"function": "_re", "arg0": ["macro", 0], "arg1": "moduleInteraction"}, {
                "function": "_cn",
                "arg0": ["macro", 418],
                "arg1": "\/crosswords\/game\/mini"
            }, {"function": "_re", "arg0": ["macro", 0], "arg1": "ora.load"}, {
                "function": "_sw",
                "arg0": ["macro", 8],
                "arg1": "\/games"
            }, {"function": "_sw", "arg0": ["macro", 8], "arg1": "\/crosswords"}, {
                "function": "_re",
                "arg0": ["macro", 515],
                "arg1": "https:\\\/\\\/(?:\\w+\\.)?nytimes.com\\\/",
                "ignore_case": true
            }, {"function": "_re", "arg0": ["macro", 440], "arg1": "(^$|((^|,)2703797_1316($|,)))"}, {
                "function": "_cn",
                "arg0": ["macro", 8],
                "arg1": "get-started\/free-access"
            }, {"function": "_re", "arg0": ["macro", 0], "arg1": "pageDataReady"}, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "sendPageUpdate"
            }, {"function": "_cn", "arg0": ["macro", 395], "arg1": "activate"}, {
                "function": "_cn",
                "arg0": ["macro", 391],
                "arg1": "trial redeemed"
            }, {"function": "_cn", "arg0": ["macro", 8], "arg1": "\/welcome"}, {
                "function": "_cn",
                "arg0": ["macro", 8],
                "arg1": "\/share"
            }, {"function": "_cn", "arg0": ["macro", 8], "arg1": "\/newsletter"}],
            "rules": [[["if", 0], ["add", 4, 60, 65]], [["if", 1], ["add", 4, 43, 44, 0, 1, 3, 82, 85, 88, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58]], [["if", 2, 3], ["add", 4, 8]], [["if", 11, 12], ["add", 5]], [["if", 12, 13], ["add", 5]], [["if", 15], ["add", 6, 71]], [["if", 16, 17], ["add", 6]], [["if", 18], ["add", 7, 10, 36, 44, 64, 67, 70, 72, 73, 80, 103]], [["if", 19], ["add", 9]], [["if", 20, 21], ["add", 11]], [["if", 12, 22, 23], ["add", 12, 14, 17, 18, 76]], [["if", 18], ["unless", 24], ["add", 13, 15, 19, 37, 59, 89, 96, 99, 100]], [["if", 25, 26], ["add", 16]], [["if", 26, 27], ["add", 20]], [["if", 13, 26], ["add", 20]], [["if", 12, 28, 29], ["add", 21]], [["if", 12, 23, 30], ["add", 22]], [["if", 18, 31], ["add", 23]], [["if", 18, 32], ["add", 24]], [["if", 18, 33, 34], ["add", 25, 34]], [["if", 18, 35], ["add", 26]], [["if", 17, 36, 37, 38], ["add", 27]], [["if", 18, 37], ["add", 28, 34]], [["if", 37, 39, 40, 41], ["add", 29, 94]], [["if", 18, 44], ["add", 30, 34]], [["if", 40, 44, 45, 46], ["add", 31]], [["if", 17, 36, 38, 44], ["add", 32]], [["if", 12, 22, 23, 47], ["add", 33]], [["if", 18, 48], ["add", 34]], [["if", 18, 49], ["add", 34]], [["if", 18, 50], ["add", 34]], [["if", 18, 51], ["add", 34]], [["if", 18, 52], ["add", 34]], [["if", 12, 53, 54], ["add", 35]], [["if", 1], ["unless", 55], ["add", 38]], [["if", 18, 56, 57, 58], ["add", 39, 41]], [["if", 18, 60], ["add", 40, 42]], [["if", 12], ["add", 61]], [["if", 3], ["add", 62, 64]], [["if", 64], ["add", 63]], [["if", 12, 66], ["add", 66]], [["if", 26, 68], ["unless", 69], ["add", 68]], [["if", 12, 63], ["add", 69], ["block", 61]], [["if", 70], ["add", 74]], [["if", 71], ["add", 75, 3, 2]], [["if", 17], ["add", 77, 90]], [["if", 26, 69], ["add", 78]], [["if", 72], ["add", 79]], [["if", 73], ["add", 81]], [["if", 74], ["add", 83]], [["if", 40, 75, 76, 77], ["add", 83]], [["if", 78], ["add", 84]], [["if", 81], ["add", 86]], [["if", 82], ["add", 87]], [["if", 84, 85], ["add", 91]], [["if", 86, 87], ["add", 92]], [["if", 18, 88], ["unless", 24], ["add", 93]], [["if", 18, 89], ["unless", 24], ["add", 93]], [["if", 40, 90, 91], ["add", 95]], [["if", 18, 92], ["add", 96]], [["if", 84, 93], ["add", 96]], [["if", 87], ["unless", 24], ["add", 97]], [["if", 94], ["add", 98]], [["if", 12, 95, 96], ["add", 101]], [["if", 87, 92], ["unless", 97, 98, 99], ["add", 102]], [["if", 1, 4], ["block", 4]], [["if", 0, 4], ["block", 4]], [["if", 1, 5], ["block", 4]], [["if", 0, 5], ["block", 4]], [["if", 1, 6], ["block", 4]], [["if", 0, 6], ["block", 4]], [["if", 0, 7], ["block", 4]], [["if", 0, 8], ["block", 4]], [["if", 1, 7], ["block", 4]], [["if", 1, 8], ["block", 4]], [["if", 4, 9], ["block", 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 59, 67, 71, 72, 76, 89, 91, 92, 93, 96, 97, 99, 100, 101, 102, 103]], [["if", 6, 9], ["block", 4, 8, 14, 15, 17, 35, 59, 71, 72, 76, 89, 100]], [["if", 7, 9], ["block", 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 59, 67, 71, 72, 76, 89, 91, 92, 93, 96, 97, 99, 100, 101, 102, 103]], [["if", 8, 9], ["block", 4, 8, 14, 15, 17, 35, 39, 40, 41, 42, 59, 71, 72, 76, 89, 93, 99, 100]], [["if", 5, 9], ["block", 4, 8, 71, 72]], [["if", 9, 10], ["block", 5, 6, 7, 9, 10, 11, 12, 13, 16, 17, 20, 33, 36, 37, 103]], [["if", 9, 14], ["block", 5, 6, 7, 9, 11, 19, 20, 63]], [["if", 4, 40, 42], ["block", 29, 31]], [["if", 7, 40, 43], ["block", 29, 31]], [["if", 9, 59], ["block", 39, 41, 42]], [["if", 0, 61], ["block", 60]], [["if", 0, 62], ["block", 60]], [["if", 9, 65], ["block", 64]], [["if", 9, 67], ["block", 67]], [["if", 78, 79], ["block", 84]], [["if", 78, 80], ["block", 84]], [["if", 7, 78], ["block", 84]], [["if", 67, 78], ["block", 84]], [["if", 1, 83], ["block", 88]], [["if", 1, 14], ["block", 88]]]
        },
        "runtime": [[50, "__csm", [46, "a"], [41, "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "o"], [50, "l", [46, "p", "q"], [41, "r", "s", "t", "u"], [3, "r", ["f"]], [3, "s", [2, [30, [15, "q"], ""], "split", [7, "&"]]], [3, "q", ""], [3, "t", 0], [42, [23, [15, "t"], [17, [15, "s"], "length"]], [33, [15, "t"], [3, "t", [0, [15, "t"], 1]]], false, [46, [22, [16, [15, "s"], [15, "t"]], [46, [3, "u", [2, [16, [15, "s"], [15, "t"]], "split", [7, "="]]], [22, [16, [15, "u"], 0], [46, [3, "q", [0, [15, "q"], [0, [0, [0, "&", ["c", [16, [15, "u"], 0]]], "="], [39, [16, [15, "u"], 1], ["c", [16, [15, "u"], 1]], ""]]]]]]]]]], [36, [0, [0, [0, [0, [0, [0, [0, [0, [0, [0, [0, [0, "https://sb.scorecardresearch.com/b?c1=2&c2=", ["c", [15, "p"]]], "&ns__t="], [15, "r"]], "&ns_c="], [30, ["i"], ""]], "&c8="], ["c", [30, ["j"], ""]]], [15, "q"]], "&c7="], ["c", ["g"]]], "&c9="], ["c", ["e"]]]]], [50, "m", [46, "p"], [41, "q"], [22, [18, [17, [15, "p"], "length"], 2048], [46, [3, "q", [2, [2, [15, "p"], "substring", [7, 0, 2040]], "lastIndexOf", [7, "&"]]], [3, "p", [0, [0, [2, [15, "p"], "substring", [7, 0, [15, "q"]]], "&ns_cut="], ["c", [2, [15, "p"], "substring", [7, [0, [15, "q"], 1]]]]]], [3, "p", [2, [15, "p"], "substring", [7, 0, 2048]]]]], [36, [15, "p"]]], [50, "n", [46], [41, "p"], [3, "p", [0, [0, "https://sb.scorecardresearch.com/c2/", ["c", [17, [15, "a"], "clientId"]]], "/cs.js"]], ["h", [15, "p"], [17, [15, "a"], "gtmOnSuccess"], [17, [15, "a"], "gtmOnFailure"]]], [3, "b", ["require", "callOnWindowLoad"]], [3, "c", ["require", "encodeUriComponent"]], [3, "d", ["require", "getCookieValues"]], [3, "e", ["require", "getReferrerUrl"]], [3, "f", ["require", "getTimestampMillis"]], [3, "g", ["require", "getUrl"]], [3, "h", ["require", "injectScript"]], [3, "i", ["require", "readCharacterSet"]], [3, "j", ["require", "readTitle"]], [3, "k", ["require", "sendPixel"]], [3, "o", [2, ["d", "comScore", true], "join", [7, "&"]]], ["k", ["m", ["l", [17, [15, "a"], "clientId"], [15, "o"]]]], ["b", [15, "n"]]], [50, "__twitter_website_tag", [46, "a"], [50, "h", [46], [41, "k"], [3, "k", ["c", "twq"]], [22, [15, "k"], [46, [36, [15, "k"]]]], ["g", "twq", [51, "", [7], [52, "m", ["c", "twq.exe.apply"]], [22, [15, "m"], [46, ["b", "twq.exe.apply", [45], [15, "arguments"]]], [46, ["b", "twq.queue.push", [15, "arguments"]]]]], true], ["g", "twq.version", "1", true], ["g", "twq.queue", [7], true], [52, "l", [51, "", [7]]], ["d", "https://static.ads-twitter.com/uwt.js", [15, "l"], [15, "l"], "twitter_website_tag"], [36, ["c", "twq"]]], [52, "b", ["require", "callInWindow"]], [52, "c", ["require", "copyFromWindow"]], [52, "d", ["require", "injectScript"]], [52, "e", ["require", "makeString"]], [52, "f", ["require", "makeTableMap"]], [52, "g", ["require", "setInWindow"]], [41, "i"], [3, "i", ["h"]], ["i", "init", ["e", [17, [15, "a"], "twitter_pixel_id"]]], [52, "j", ["f", [30, [17, [15, "a"], "event_parameters"], [7]], "param_table_key_column", "param_table_value_column"]], [22, [1, [15, "j"], [2, [15, "j"], "hasOwnProperty", [7, "content_ids"]]], [46, [53, [41, "k"], [3, "k", [16, [15, "j"], "content_ids"]], [3, "k", [2, [2, [15, "k"], "split", [7, "\""]], "join", [7, "'"]]], [41, "l"], [3, "l", [2, [2, [15, "k"], "slice", [7, [2, [15, "k"], "indexOf", [7, "["]], [2, [15, "k"], "indexOf", [7, "]"]]]], "split", [7, ","]]], [3, "l", [2, [15, "l"], "map", [7, [51, "", [7, "m"], [36, [30, [16, [2, [15, "m"], "split", [7, "'"]], 1], ""]]]]]], [43, [15, "j"], "content_ids", [15, "l"]]]]], ["i", "track", ["e", [17, [15, "a"], "event_type"]], [15, "j"]], [2, [15, "a"], "gtmOnSuccess", [7]]]]
        ,
        "permissions": {
            "__csm": {
                "send_pixel": {"urls": ["https:\/\/sb.scorecardresearch.com\/b?*"]},
                "inject_script": {"urls": ["https:\/\/sb.scorecardresearch.com\/c2\/*"]},
                "get_cookies": {"cookieAccess": "any"},
                "get_url": {"urlParts": "any"},
                "get_referrer": {"urlParts": "any"},
                "read_character_set": {},
                "read_title": {},
                "process_dom_events": {"targets": [{"targetType": "window", "eventName": "load"}]}
            },
            "__twitter_website_tag": {
                "access_globals": {
                    "keys": [{
                        "key": "twq",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {"key": "twq.exe", "read": true, "write": true, "execute": true}, {
                        "key": "twq.queue",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {"key": "twq.queue.push", "read": true, "write": true, "execute": true}, {
                        "key": "twq.version",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {"key": "twq.exe.apply", "read": true, "write": true, "execute": true}]
                }, "inject_script": {"urls": ["https:\/\/static.ads-twitter.com\/uwt.js"]}
            }
        }

        ,
        "security_groups": {
            "nonGoogleScripts": ["__csm", "__twitter_website_tag"]
        }


    };

    var productSettings = {
        "AW-1008590664": {"preAutoPii": true},
        "AW-1055525830": {"preAutoPii": true}
    };


    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var da, ea = function (a) {
        var b = 0;
        return function () {
            return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
        }
    }, fa = function (a) {
        return a.raw = a
    }, ha = "function" == typeof Object.create ? Object.create : function (a) {
        var b = function () {
        };
        b.prototype = a;
        return new b
    }, ia;
    if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf; else {
        var ja;
        a:{
            var la = {a: !0}, ma = {};
            try {
                ma.__proto__ = la;
                ja = ma.a;
                break a
            } catch (a) {
            }
            ja = !1
        }
        ia = ja ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var na = ia, oa = function (a, b) {
        a.prototype = ha(b.prototype);
        a.prototype.constructor = a;
        if (na) na(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
        } else a[c] = b[c];
        a.Ml = b.prototype
    }, qa = this || self, ra = function (a) {
        return a
    };
    var sa = function (a, b) {
        this.h = a;
        this.B = b
    };
    var ta = function (a) {
        return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
    }, ua = function () {
        this.D = {};
        this.H = !1;
        this.N = {}
    }, va = function (a, b) {
        var c = [], d;
        for (d in a.D) if (a.D.hasOwnProperty(d)) switch (d = d.substr(5), b) {
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
    ua.prototype.get = function (a) {
        return this.D["dust." + a]
    };
    ua.prototype.set = function (a, b) {
        this.H || (a = "dust." + a, this.N.hasOwnProperty(a) || (this.D[a] = b))
    };
    ua.prototype.has = function (a) {
        return this.D.hasOwnProperty("dust." + a)
    };
    var wa = function (a, b) {
        b = "dust." + b;
        a.H || a.N.hasOwnProperty(b) || delete a.D[b]
    };
    ua.prototype.Qb = function () {
        this.H = !0
    };
    ua.prototype.He = function () {
        return this.H
    };
    var xa = function (a) {
        this.B = new ua;
        this.h = [];
        this.D = !1;
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (ta(b) ? this.h[Number(b)] = a[Number(b)] : this.B.set(b, a[b]))
    };
    da = xa.prototype;
    da.toString = function (a) {
        if (a && 0 <= a.indexOf(this)) return "";
        for (var b = [], c = 0; c < this.h.length; c++) {
            var d = this.h[c];
            null === d || void 0 === d ? b.push("") : d instanceof xa ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString())
        }
        return b.join(",")
    };
    da.set = function (a, b) {
        if (!this.D) if ("length" === a) {
            if (!ta(b)) throw Error("RangeError: Length property must be a valid integer.");
            this.h.length = Number(b)
        } else ta(a) ? this.h[Number(a)] = b : this.B.set(a, b)
    };
    da.get = function (a) {
        return "length" === a ? this.length() : ta(a) ? this.h[Number(a)] : this.B.get(a)
    };
    da.length = function () {
        return this.h.length
    };
    da.Pb = function () {
        for (var a = va(this.B, 1), b = 0; b < this.h.length; b++) a.push(b + "");
        return new xa(a)
    };
    var ya = function (a, b) {
        ta(b) ? delete a.h[Number(b)] : wa(a.B, b)
    };
    da = xa.prototype;
    da.pop = function () {
        return this.h.pop()
    };
    da.push = function (a) {
        return this.h.push.apply(this.h, Array.prototype.slice.call(arguments))
    };
    da.shift = function () {
        return this.h.shift()
    };
    da.splice = function (a, b, c) {
        return new xa(this.h.splice.apply(this.h, arguments))
    };
    da.unshift = function (a) {
        return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments))
    };
    da.has = function (a) {
        return ta(a) && this.h.hasOwnProperty(a) || this.B.has(a)
    };
    da.Qb = function () {
        this.D = !0;
        Object.freeze(this.h);
        this.B.Qb()
    };
    da.He = function () {
        return this.D
    };
    var za = function () {
        this.quota = {}
    };
    za.prototype.reset = function () {
        this.quota = {}
    };
    var Aa = function (a, b) {
        this.U = a;
        this.N = function (c, d, e) {
            return c.apply(d, e)
        };
        this.D = b;
        this.B = new ua;
        this.h = this.H = void 0
    };
    Aa.prototype.add = function (a, b) {
        Ba(this, a, b, !1)
    };
    var Ba = function (a, b, c, d) {
        if (!a.B.He()) if (d) {
            var e = a.B;
            e.set(b, c);
            e.N["dust." + b] = !0
        } else a.B.set(b, c)
    };
    Aa.prototype.set = function (a, b) {
        this.B.He() || (!this.B.has(a) && this.D && this.D.has(a) ? this.D.set(a, b) : this.B.set(a, b))
    };
    Aa.prototype.get = function (a) {
        return this.B.has(a) ? this.B.get(a) : this.D ? this.D.get(a) : void 0
    };
    Aa.prototype.has = function (a) {
        return !!this.B.has(a) || !(!this.D || !this.D.has(a))
    };
    var Ca = function (a) {
        var b = new Aa(a.U, a);
        a.H && (b.H = a.H);
        b.N = a.N;
        b.h = a.h;
        return b
    };
    var Da = function () {
        }, Ea = function (a) {
            return "function" === typeof a
        }, k = function (a) {
            return "string" === typeof a
        }, Ga = function (a) {
            return "number" === typeof a && !isNaN(a)
        }, Ia = Array.isArray, Ka = function (a, b) {
            if (a && Ia(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c]
        }, La = function (a, b) {
            if (!Ga(a) || !Ga(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        }, Na = function (a, b) {
            for (var c = new Ma, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
            return !1
        }, m = function (a,
                         b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        }, Oa = function (a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        }, Pa = function (a) {
            return Math.round(Number(a)) || 0
        }, Qa = function (a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        }, Ra = function (a) {
            var b = [];
            if (Ia(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        }, Sa = function (a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        }, Ta = function () {
            return new Date(Date.now())
        },
        Ua = function () {
            return Ta().getTime()
        }, Ma = function () {
            this.prefix = "gtm.";
            this.values = {}
        };
    Ma.prototype.set = function (a, b) {
        this.values[this.prefix + a] = b
    };
    Ma.prototype.get = function (a) {
        return this.values[this.prefix + a]
    };
    var Va = function (a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }, Xa = function (a) {
        var b = a;
        return function () {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {
                }
            }
        }
    }, Ya = function (a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    }, Za = function (a) {
        for (var b in a) if (a.hasOwnProperty(b)) return !0;
        return !1
    }, $a = function (a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c
    }, bb = function (a, b) {
        var c = z;
        b = b || [];
        for (var d = c, e = 0; e < a.length - 1; e++) {
            if (!d.hasOwnProperty(a[e])) return;
            d = d[a[e]];
            if (0 <=
                b.indexOf(d)) return
        }
        return d
    }, cb = function (a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }, db = /^\w{1,9}$/, eb = function (a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        m(a, function (d, e) {
            db.test(d) && e && c.push(d)
        });
        return c.join(b)
    }, fb = function (a, b) {
        function c() {
            ++d === b && (e(), e = null, c.done = !0)
        }

        var d = 0, e = a;
        c.done = !1;
        return c
    };
    var gb = function (a, b) {
        ua.call(this);
        this.U = a;
        this.fb = b
    };
    oa(gb, ua);
    gb.prototype.toString = function () {
        return this.U
    };
    gb.prototype.Pb = function () {
        return new xa(va(this, 1))
    };
    gb.prototype.h = function (a, b) {
        return this.fb.apply(new hb(this, a), Array.prototype.slice.call(arguments, 1))
    };
    gb.prototype.B = function (a, b) {
        try {
            return this.h.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {
        }
    };
    var jb = function (a, b) {
        for (var c, d = 0; d < b.length && !(c = ib(a, b[d]), c instanceof sa); d++) ;
        return c
    }, ib = function (a, b) {
        try {
            var c = a.get(String(b[0]));
            if (!(c && c instanceof gb)) throw Error("Attempting to execute non-function " + b[0] + ".");
            return c.h.apply(c, [a].concat(b.slice(1)))
        } catch (e) {
            var d = a.H;
            d && d(e, b.context ? {id: b[0], line: b.context.line} : null);
            throw e;
        }
    }, hb = function (a, b) {
        this.B = a;
        this.h = b
    }, E = function (a, b) {
        return Ia(b) ? ib(a.h, b) : b
    }, F = function (a) {
        return a.B.U
    };
    var kb = function () {
        ua.call(this)
    };
    oa(kb, ua);
    kb.prototype.Pb = function () {
        return new xa(va(this, 1))
    };
    var lb = {
        map: function (a) {
            for (var b = new kb, c = 0; c < arguments.length - 1; c += 2) {
                var d = E(this, arguments[c]) + "", e = E(this, arguments[c + 1]);
                b.set(d, e)
            }
            return b
        }, list: function (a) {
            for (var b = new xa, c = 0; c < arguments.length; c++) {
                var d = E(this, arguments[c]);
                b.push(d)
            }
            return b
        }, fn: function (a, b, c) {
            var d = this.h, e = E(this, b);
            if (!(e instanceof xa)) throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            return new gb(a, function () {
                return function (g) {
                    var h = Ca(d);
                    void 0 ===
                    h.h && (h.h = this.h.h);
                    for (var l = Array.prototype.slice.call(arguments, 0), n = 0; n < l.length; n++) if (l[n] = E(this, l[n]), l[n] instanceof sa) return l[n];
                    for (var p = e.get("length"), q = 0; q < p; q++) q < l.length ? h.add(e.get(q), l[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new xa(l));
                    var r = jb(h, f);
                    if (r instanceof sa) return "return" === r.h ? r.B : r
                }
            }())
        }, control: function (a, b) {
            return new sa(a, E(this, b))
        }, undefined: function () {
        }
    };
    var mb = function () {
        this.D = new za;
        this.h = new Aa(this.D)
    }, nb = function (a, b, c) {
        var d = new gb(b, c);
        d.Qb();
        a.h.set(b, d)
    }, ob = function (a, b, c) {
        lb.hasOwnProperty(b) && nb(a, c || b, lb[b])
    };
    mb.prototype.execute = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.B(c)
    };
    mb.prototype.B = function (a) {
        for (var b, c = 0; c < arguments.length; c++) b = ib(this.h, arguments[c]);
        return b
    };
    mb.prototype.H = function (a, b) {
        var c = Ca(this.h);
        c.h = a;
        for (var d, e = 1; e < arguments.length; e++) d = ib(c, arguments[e]);
        return d
    };

    function pb() {
        for (var a = qb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function rb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }

    var qb, sb;

    function tb(a) {
        qb = qb || rb();
        sb = sb || pb();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length, e = c + 2 < a.length, f = a.charCodeAt(c), g = d ? a.charCodeAt(c + 1) : 0,
                h = e ? a.charCodeAt(c + 2) : 0, l = f >> 2, n = (f & 3) << 4 | g >> 4, p = (g & 15) << 2 | h >> 6,
                q = h & 63;
            e || (q = 64, d || (p = 64));
            b.push(qb[l], qb[n], qb[p], qb[q])
        }
        return b.join("")
    }

    function ub(a) {
        function b(l) {
            for (; d < a.length;) {
                var n = a.charAt(d++), p = sb[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return l
        }

        qb = qb || rb();
        sb = sb || pb();
        for (var c = "", d = 0; ;) {
            var e = b(-1), f = b(0), g = b(64), h = b(64);
            if (64 === h && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    };var vb = {}, wb = function (a, b) {
        vb[a] = vb[a] || [];
        vb[a][b] = !0
    }, xb = function () {
        delete vb.GA4_EVENT
    }, yb = function (a) {
        var b = vb[a];
        if (!b || 0 === b.length) return "";
        for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
        0 < d && c.push(String.fromCharCode(d));
        return tb(c.join("")).replace(/\.+$/, "")
    };
    var zb = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1
    };
    var Ab, Bb = function () {
        if (void 0 === Ab) {
            var a = null, b = qa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {createHTML: ra, createScript: ra, createScriptURL: ra})
                } catch (c) {
                    qa.console && qa.console.error(c.message)
                }
                Ab = a
            } else Ab = a
        }
        return Ab
    };
    var Db = function (a, b) {
        this.h = b === Cb ? a : ""
    };
    Db.prototype.toString = function () {
        return this.h + ""
    };
    var Eb = function (a) {
        return a instanceof Db && a.constructor === Db ? a.h : "type_error:TrustedResourceUrl"
    }, Cb = {}, Fb = function (a) {
        var b = a, c = Bb(), d = c ? c.createScriptURL(b) : b;
        return new Db(d, Cb)
    };
    var Gb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var Hb, Ib;
    a:{
        for (var Jb = ["CLOSURE_FLAGS"], Kb = qa, Lb = 0; Lb < Jb.length; Lb++) if (Kb = Kb[Jb[Lb]], null == Kb) {
            Ib = null;
            break a
        }
        Ib = Kb
    }
    var Mb = Ib && Ib[610401301];
    Hb = null != Mb ? Mb : !1;

    function Nb() {
        var a = qa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }

    var Ob, Pb = qa.navigator;
    Ob = Pb ? Pb.userAgentData || null : null;

    function Qb(a) {
        return Hb ? Ob ? Ob.brands.some(function (b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }

    function Rb(a) {
        return -1 != Nb().indexOf(a)
    };

    function Sb() {
        return Hb ? !!Ob && 0 < Ob.brands.length : !1
    }

    function Tb() {
        return Sb() ? !1 : Rb("Opera")
    }

    function Ub() {
        return Rb("Firefox") || Rb("FxiOS")
    }

    function Vb() {
        return Sb() ? Qb("Chromium") : (Rb("Chrome") || Rb("CriOS")) && !(Sb() ? 0 : Rb("Edge")) || Rb("Silk")
    };var Wb = {}, Xb = function (a, b) {
        this.h = b === Wb ? a : ""
    };
    Xb.prototype.toString = function () {
        return this.h.toString()
    };/*

 SPDX-License-Identifier: Apache-2.0
*/
    var Yb = {};
    var Zb = function () {
    }, $b = function (a) {
        this.h = a
    };
    oa($b, Zb);
    $b.prototype.toString = function () {
        return this.h
    };

    function ac(a, b) {
        if (void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase()) throw Error("");
            if ("style" === a.tagName.toLowerCase()) throw Error("");
        }
        a.innerHTML = b instanceof Xb && b.constructor === Xb ? b.h : "type_error:SafeHtml"
    }

    function bc(a, b) {
        var c = [new $b(cc[0].toLowerCase(), Yb)];
        if (0 === c.length) throw Error("");
        var d = c.map(function (f) {
            var g;
            if (f instanceof $b) g = f.h; else throw Error("");
            return g
        }), e = b.toLowerCase();
        if (d.every(function (f) {
            return 0 !== e.indexOf(f)
        })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    };

    function dc(a) {
        var b = a = ec(a), c = Bb(), d = c ? c.createHTML(b) : b;
        return new Xb(d, Wb)
    }

    function ec(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };var fc = {}, z = window, I = document, gc = navigator, hc = I.currentScript && I.currentScript.src,
        ic = function (a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        }, jc = function (a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
                a.readyState in {loaded: 1, complete: 1} && (a.onreadystatechange = null, b())
            })
        }, kc = {async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1},
        lc = {onload: 1, src: 1, width: 1, height: 1, style: 1};

    function mc(a, b, c) {
        b && m(b, function (d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }

    var nc = function (a, b, c, d, e) {
        var f = I.createElement("script");
        mc(f, d, kc);
        f.type = "text/javascript";
        f.async = !0;
        var g;
        g = Fb(ec(a));
        f.src = Eb(g);
        var h, l, n,
            p = null == (n = (l = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(l, "script[nonce]");
        (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", h);
        jc(f, b);
        c && (f.onerror = c);
        if (e) e.appendChild(f); else {
            var q = I.getElementsByTagName("script")[0] || I.body || I.head;
            q.parentNode.insertBefore(f, q)
        }
        return f
    }, oc = function () {
        if (hc) {
            var a =
                hc.toLowerCase();
            if (0 === a.indexOf("https://")) return 2;
            if (0 === a.indexOf("http://")) return 3
        }
        return 1
    }, pc = function (a, b, c, d, e) {
        var f;
        f = void 0 === f ? !0 : f;
        var g = e, h = !1;
        g || (g = I.createElement("iframe"), h = !0);
        mc(g, c, lc);
        d && m(d, function (n, p) {
            g.dataset[n] = p
        });
        f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
        if (h) {
            var l = I.body && I.body.lastChild || I.body || I.head;
            l.parentNode.insertBefore(g, l)
        }
        jc(g, b);
        void 0 !== a && (g.src = a);
        return g
    }, qc = function (a, b, c) {
        var d = new Image(1, 1);
        d.onload =
            function () {
                d.onload = null;
                b && b()
            };
        d.onerror = function () {
            d.onerror = null;
            c && c()
        };
        d.src = a
    }, rc = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, sc = function (a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }, J = function (a) {
        z.setTimeout(a, 0)
    }, tc = function (a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }, uc = function (a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,
            ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }, vc = function (a) {
        var b = I.createElement("div");
        ac(b, dc("A<div>" + a + "</div>"));
        b = b.lastChild;
        for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
        return c
    }, wc = function (a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()]) return f;
            f = f.parentElement
        }
        return null
    }, yc = function (a) {
        var b;
        try {
            b = gc.sendBeacon && gc.sendBeacon(a)
        } catch (c) {
            wb("TAGGING", 15)
        }
        b || qc(a)
    }, zc = function (a,
                      b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c
    }, Ac = function () {
        var a = z.performance;
        if (a && Ea(a.now)) return a.now()
    }, Bc = function () {
        return z.performance || void 0
    };
    var Cc = function (a, b) {
        return E(this, a) && E(this, b)
    }, Dc = function (a, b) {
        return E(this, a) === E(this, b)
    }, Ec = function (a, b) {
        return E(this, a) || E(this, b)
    }, Fc = function (a, b) {
        a = E(this, a);
        b = E(this, b);
        return -1 < String(a).indexOf(String(b))
    }, Gc = function (a, b) {
        a = String(E(this, a));
        b = String(E(this, b));
        return a.substring(0, b.length) === b
    }, Hc = function (a, b) {
        a = E(this, a);
        b = E(this, b);
        switch (a) {
            case "pageLocation":
                var c = z.location.href;
                b instanceof kb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                return c
        }
    };
    var Jc = function () {
        this.h = new mb;
        Ic(this)
    };
    Jc.prototype.execute = function (a) {
        return this.h.B(a)
    };
    var Ic = function (a) {
        ob(a.h, "map");
        var b = function (c, d) {
            nb(a.h, c, d)
        };
        b("and", Cc);
        b("contains", Fc);
        b("equals", Dc);
        b("or", Ec);
        b("startsWith", Gc);
        b("variable", Hc)
    };
    var Kc = function (a) {
        if (a instanceof Kc) return a;
        this.Da = a
    };
    Kc.prototype.toString = function () {
        return String(this.Da)
    };
    var Mc = function (a) {
        ua.call(this);
        this.h = a;
        this.set("then", Lc(this));
        this.set("catch", Lc(this, !0));
        this.set("finally", Lc(this, !1, !0))
    };
    oa(Mc, kb);
    var Lc = function (a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new gb("", function (d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof gb || (d = void 0);
            e instanceof gb || (e = void 0);
            var f = Ca(this.h), g = function (l) {
                return function (n) {
                    return c ? (l.h(f), a.h) : l.h(f, n)
                }
            }, h = a.h.then(d && g(d), e && g(e));
            return new Mc(h)
        })
    };/*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Nc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, Oc = function (a) {
        if (null == a) return String(a);
        var b = Nc.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }, Pc = function (a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }, Qc = function (a) {
        if (!a || "object" != Oc(a) || a.nodeType || a == a.window) return !1;
        try {
            if (a.constructor && !Pc(a, "constructor") && !Pc(a.constructor.prototype, "isPrototypeOf")) return !1
        } catch (c) {
            return !1
        }
        for (var b in a) ;
        return void 0 ===
            b || Pc(a, b)
    }, K = function (a, b) {
        var c = b || ("array" == Oc(a) ? [] : {}), d;
        for (d in a) if (Pc(a, d)) {
            var e = a[d];
            "array" == Oc(e) ? ("array" != Oc(c[d]) && (c[d] = []), c[d] = K(e, c[d])) : Qc(e) ? (Qc(c[d]) || (c[d] = {}), c[d] = K(e, c[d])) : c[d] = e
        }
        return c
    };
    var Sc = function (a, b, c) {
        var d = [], e = [], f = function (h, l) {
            for (var n = va(h, 1), p = 0; p < n.length; p++) l[n[p]] = g(h.get(n[p]))
        }, g = function (h) {
            var l = d.indexOf(h);
            if (-1 < l) return e[l];
            if (h instanceof xa) {
                var n = [];
                d.push(h);
                e.push(n);
                for (var p = h.Pb(), q = 0; q < p.length(); q++) n[p.get(q)] = g(h.get(p.get(q)));
                return n
            }
            if (h instanceof Mc) return h.h;
            if (h instanceof kb) {
                var r = {};
                d.push(h);
                e.push(r);
                f(h, r);
                return r
            }
            if (h instanceof gb) {
                var t = function () {
                    for (var v = Array.prototype.slice.call(arguments, 0), w = 0; w < v.length; w++) v[w] = Rc(v[w],
                        b, c);
                    var y = new Aa(b ? b.U : new za);
                    b && (y.h = b.h);
                    return g(h.h.apply(h, [y].concat(v)))
                };
                d.push(h);
                e.push(t);
                f(h, t);
                return t
            }
            var u = !1;
            switch (c) {
                case 1:
                    u = !0;
                    break;
                case 2:
                    u = !1;
                    break;
                case 3:
                    u = !1;
                    break;
                default:
            }
            if (h instanceof Kc && u) return h.Da;
            switch (typeof h) {
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                    return h;
                case "object":
                    if (null === h) return null
            }
        };
        return g(a)
    }, Rc = function (a,
                      b, c) {
        var d = [], e = [], f = function (h, l) {
            for (var n in h) h.hasOwnProperty(n) && l.set(n, g(h[n]))
        }, g = function (h) {
            var l = d.indexOf(h);
            if (-1 < l) return e[l];
            if (Ia(h) || Oa(h)) {
                var n = new xa([]);
                d.push(h);
                e.push(n);
                for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
                return n
            }
            if (Qc(h)) {
                var q = new kb;
                d.push(h);
                e.push(q);
                f(h, q);
                return q
            }
            if ("function" === typeof h) {
                var r = new gb("", function (x) {
                    for (var A = Array.prototype.slice.call(arguments, 0), B = 0; B < A.length; B++) A[B] = Sc(E(this, A[B]), b, c);
                    return g((0, this.h.N)(h, h, A))
                });
                d.push(h);
                e.push(r);
                f(h, r);
                return r
            }
            var w = typeof h;
            if (null === h || "string" === w || "number" === w || "boolean" === w) return h;
            var y = !1;
            switch (c) {
                case 1:
                    y =
                        !0;
                    break;
                case 2:
                    y = !1;
                    break;
                default:
            }
            if (void 0 !== h && y) return new Kc(h)
        };
        return g(a)
    };
    var Tc = function (a) {
        for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
        return b
    }, Uc = function (a) {
        if (void 0 === a || Ia(a) || Qc(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var Vc = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function (a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++) if (arguments[e] instanceof xa) for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g)); else c.push(arguments[e]);
            return new xa(c)
        },
        every: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
            d < c; d++) if (this.has(d) && !b.h(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function (a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
            return new xa(d)
        },
        forEach: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.h(a, this.get(d), d, this)
        },
        hasOwnProperty: function (a, b) {
            return this.has(b)
        },
        indexOf: function (a, b, c) {
            var d = this.length(), e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++) if (this.has(f) &&
                this.get(f) === b) return f;
            return -1
        },
        join: function (a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function (a, b, c) {
            var d = this.length(), e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--) if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function (a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
            return new xa(d)
        },
        pop: function () {
            return this.pop()
        },
        push: function (a, b) {
            return this.push.apply(this,
                Array.prototype.slice.call(arguments, 1))
        },
        reduce: function (a, b, c) {
            var d = this.length(), e, f = 0;
            if (void 0 !== c) e = c; else {
                if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++) if (this.has(g)) {
                    e = this.get(g);
                    f = g + 1;
                    break
                }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++) this.has(h) && (e = b.h(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function (a, b, c) {
            var d = this.length(), e, f = d - 1;
            if (void 0 !== c) e = c; else {
                if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++) if (this.has(d - g)) {
                    e = this.get(d - g);
                    f = d - (g + 1);
                    break
                }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--) this.has(h) && (e = b.h(a, e, this.get(h), h, this));
            return e
        },
        reverse: function () {
            for (var a = Tc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : ya(this, c);
            return this
        },
        shift: function () {
            return this.shift()
        },
        slice: function (a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ?
                Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new xa(e)
        },
        some: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) if (this.has(d) && b.h(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function (a, b) {
            var c = Tc(this);
            void 0 === b ? c.sort() : c.sort(function (e, f) {
                return Number(b.h(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : ya(this, d);
            return this
        },
        splice: function (a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
                1, arguments.length - 1))
        },
        toString: function () {
            return this.toString()
        },
        unshift: function (a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var Wc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
        Xc = new sa("break"), Yc = new sa("continue"), Zc = function (a, b) {
            return E(this, a) + E(this, b)
        }, $c = function (a, b) {
            return E(this, a) && E(this, b)
        }, ad = function (a, b, c) {
            a = E(this, a);
            b = E(this, b);
            c = E(this, c);
            if (!(c instanceof xa)) throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
                b + " of " + a + ".");
            var d = "number" === typeof a;
            if ("boolean" === typeof a || d) {
                if ("toString" === b) {
                    if (d && c.length()) {
                        var e = Sc(c.get(0));
                        try {
                            return a.toString(e)
                        } catch (q) {
                        }
                    }
                    return a.toString()
                }
                throw Error("TypeError: " + a + "." + b + " is not a function.");
            }
            if ("string" === typeof a) {
                if (0 <= Wc.indexOf(b)) {
                    var f = Sc(c);
                    return Rc(a[b].apply(a, f), this.h)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if (a instanceof xa) {
                if (a.has(b)) {
                    var g = a.get(b);
                    if (g instanceof gb) {
                        var h = Tc(c);
                        h.unshift(this.h);
                        return g.h.apply(g, h)
                    }
                    throw Error("TypeError: " +
                        b + " is not a function");
                }
                if (0 <= Vc.supportedMethods.indexOf(b)) {
                    var l = Tc(c);
                    l.unshift(this.h);
                    return Vc[b].apply(a, l)
                }
            }
            if (a instanceof gb || a instanceof kb) {
                if (a.has(b)) {
                    var n = a.get(b);
                    if (n instanceof gb) {
                        var p = Tc(c);
                        p.unshift(this.h);
                        return n.h.apply(n, p)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if ("toString" === b) return a instanceof gb ? a.U : a.toString();
                if ("hasOwnProperty" === b) return a.has.apply(a, Tc(c))
            }
            if (a instanceof Kc && "toString" === b) return a.toString();
            throw Error("TypeError: Object has no '" +
                b + "' property.");
        }, bd = function (a, b) {
            a = E(this, a);
            if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
            var c = this.h;
            if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
            var d = E(this, b);
            c.set(a, d);
            return d
        }, cd = function (a) {
            var b = Ca(this.h), c = jb(b, Array.prototype.slice.apply(arguments));
            if (c instanceof sa) return c
        }, dd = function () {
            return Xc
        }, ed = function (a) {
            for (var b = E(this, a), c = 0; c < b.length; c++) {
                var d = E(this, b[c]);
                if (d instanceof sa) return d
            }
        }, fd = function (a) {
            for (var b =
                this.h, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) {
                    var e = E(this, arguments[c + 1]);
                    Ba(b, d, e, !0)
                }
            }
        }, gd = function () {
            return Yc
        }, hd = function (a, b, c) {
            var d = new xa;
            b = E(this, b);
            for (var e = 0; e < b.length; e++) d.push(b[e]);
            var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.h.add(a, E(this, f))
        }, id = function (a, b) {
            return E(this, a) / E(this, b)
        }, jd = function (a, b) {
            a = E(this, a);
            b = E(this, b);
            var c = a instanceof Kc, d = b instanceof Kc;
            return c || d ? c && d ? a.Da == b.Da : !1 : a ==
                b
        }, kd = function (a) {
            for (var b, c = 0; c < arguments.length; c++) b = E(this, arguments[c]);
            return b
        };

    function ld(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)), g = jb(f, d);
            if (g instanceof sa) {
                if ("break" === g.h) break;
                if ("return" === g.h) return g
            }
        }
    }

    function md(a, b, c) {
        if ("string" === typeof b) return ld(a, function () {
            return b.length
        }, function (f) {
            return f
        }, c);
        if (b instanceof kb || b instanceof xa || b instanceof gb) {
            var d = b.Pb(), e = d.length();
            return ld(a, function () {
                return e
            }, function (f) {
                return d.get(f)
            }, c)
        }
    }

    var nd = function (a, b, c) {
        a = E(this, a);
        b = E(this, b);
        c = E(this, c);
        var d = this.h;
        return md(function (e) {
            d.set(a, e);
            return d
        }, b, c)
    }, od = function (a, b, c) {
        a = E(this, a);
        b = E(this, b);
        c = E(this, c);
        var d = this.h;
        return md(function (e) {
            var f = Ca(d);
            Ba(f, a, e, !0);
            return f
        }, b, c)
    }, pd = function (a, b, c) {
        a = E(this, a);
        b = E(this, b);
        c = E(this, c);
        var d = this.h;
        return md(function (e) {
            var f = Ca(d);
            f.add(a, e);
            return f
        }, b, c)
    }, rd = function (a, b, c) {
        a = E(this, a);
        b = E(this, b);
        c = E(this, c);
        var d = this.h;
        return qd(function (e) {
            d.set(a, e);
            return d
        }, b, c)
    }, sd =
        function (a, b, c) {
            a = E(this, a);
            b = E(this, b);
            c = E(this, c);
            var d = this.h;
            return qd(function (e) {
                var f = Ca(d);
                Ba(f, a, e, !0);
                return f
            }, b, c)
        }, td = function (a, b, c) {
        a = E(this, a);
        b = E(this, b);
        c = E(this, c);
        var d = this.h;
        return qd(function (e) {
            var f = Ca(d);
            f.add(a, e);
            return f
        }, b, c)
    };

    function qd(a, b, c) {
        if ("string" === typeof b) return ld(a, function () {
            return b.length
        }, function (d) {
            return b[d]
        }, c);
        if (b instanceof xa) return ld(a, function () {
            return b.length()
        }, function (d) {
            return b.get(d)
        }, c);
        throw new TypeError("The value is not iterable.");
    }

    var ud = function (a, b, c, d) {
        function e(p, q) {
            for (var r = 0; r < f.length(); r++) {
                var t = f.get(r);
                q.add(t, p.get(t))
            }
        }

        var f = E(this, a);
        if (!(f instanceof xa)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
        var g = this.h;
        d = E(this, d);
        var h = Ca(g);
        for (e(g, h); ib(h, b);) {
            var l = jb(h, d);
            if (l instanceof sa) {
                if ("break" === l.h) break;
                if ("return" === l.h) return l
            }
            var n = Ca(g);
            e(h, n);
            ib(n, c);
            h = n
        }
    }, vd = function (a) {
        a = E(this, a);
        var b = this.h, c = !1;
        if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
        return b.get(a)
    }, wd = function (a, b) {
        var c;
        a = E(this, a);
        b = E(this, b);
        if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
        if (a instanceof kb || a instanceof xa || a instanceof gb) c = a.get(b); else if ("string" === typeof a) "length" === b ? c = a.length : ta(b) && (c = a[b]); else if (a instanceof Kc) return;
        return c
    }, xd = function (a, b) {
        return E(this, a) > E(this,
            b)
    }, yd = function (a, b) {
        return E(this, a) >= E(this, b)
    }, zd = function (a, b) {
        a = E(this, a);
        b = E(this, b);
        a instanceof Kc && (a = a.Da);
        b instanceof Kc && (b = b.Da);
        return a === b
    }, Ad = function (a, b) {
        return !zd.call(this, a, b)
    }, Bd = function (a, b, c) {
        var d = [];
        E(this, a) ? d = E(this, b) : c && (d = E(this, c));
        var e = jb(this.h, d);
        if (e instanceof sa) return e
    }, Cd = function (a, b) {
        return E(this, a) < E(this, b)
    }, Dd = function (a, b) {
        return E(this, a) <= E(this, b)
    }, Ed = function (a, b) {
        return E(this, a) % E(this, b)
    }, Fd = function (a, b) {
        return E(this, a) * E(this, b)
    }, Gd = function (a) {
        return -E(this,
            a)
    }, Hd = function (a) {
        return !E(this, a)
    }, Id = function (a, b) {
        return !jd.call(this, a, b)
    }, Jd = function () {
        return null
    }, Kd = function (a, b) {
        return E(this, a) || E(this, b)
    }, Ld = function (a, b) {
        var c = E(this, a);
        E(this, b);
        return c
    }, Md = function (a) {
        return E(this, a)
    }, Nd = function (a) {
        return Array.prototype.slice.apply(arguments)
    }, Rd = function (a) {
        return new sa("return", E(this, a))
    }, Sd = function (a, b, c) {
        a = E(this, a);
        b = E(this, b);
        c = E(this, c);
        if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
        (a instanceof
            gb || a instanceof xa || a instanceof kb) && a.set(b, c);
        return c
    }, Td = function (a, b) {
        return E(this, a) - E(this, b)
    }, Ud = function (a, b, c) {
        a = E(this, a);
        var d = E(this, b), e = E(this, c);
        if (!Ia(d) || !Ia(e)) throw Error("Error: Malformed switch instruction.");
        for (var f, g = !1, h = 0; h < d.length; h++) if (g || a === E(this, d[h])) if (f = E(this, e[h]), f instanceof sa) {
            var l = f.h;
            if ("break" === l) return;
            if ("return" === l || "continue" === l) return f
        } else g = !0;
        if (e.length === d.length + 1 && (f = E(this, e[e.length - 1]), f instanceof sa && ("return" === f.h || "continue" ===
            f.h))) return f
    }, Vd = function (a, b, c) {
        return E(this, a) ? E(this, b) : E(this, c)
    }, Wd = function (a) {
        a = E(this, a);
        return a instanceof gb ? "function" : typeof a
    }, Xd = function (a) {
        for (var b = this.h, c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            "string" !== typeof d || b.add(d, void 0)
        }
    }, Yd = function (a, b, c, d) {
        var e = E(this, d);
        if (E(this, c)) {
            var f = jb(this.h, e);
            if (f instanceof sa) {
                if ("break" === f.h) return;
                if ("return" === f.h) return f
            }
        }
        for (; E(this, a);) {
            var g = jb(this.h, e);
            if (g instanceof sa) {
                if ("break" === g.h) break;
                if ("return" === g.h) return g
            }
            E(this,
                b)
        }
    }, Zd = function (a) {
        return ~Number(E(this, a))
    }, $d = function (a, b) {
        return Number(E(this, a)) << Number(E(this, b))
    }, ae = function (a, b) {
        return Number(E(this, a)) >> Number(E(this, b))
    }, be = function (a, b) {
        return Number(E(this, a)) >>> Number(E(this, b))
    }, ce = function (a, b) {
        return Number(E(this, a)) & Number(E(this, b))
    }, de = function (a, b) {
        return Number(E(this, a)) ^ Number(E(this, b))
    }, ee = function (a, b) {
        return Number(E(this, a)) | Number(E(this, b))
    };
    var ge = function () {
        this.h = new mb;
        fe(this)
    };
    ge.prototype.execute = function (a) {
        return he(this.h.B(a))
    };
    var ie = function (a, b, c) {
        return he(a.h.H(b, c))
    }, fe = function (a) {
        var b = function (d, e) {
            ob(a.h, d, String(e))
        };
        b("control", 49);
        b("fn", 51);
        b("list", 7);
        b("map", 8);
        b("undefined", 44);
        var c = function (d, e) {
            nb(a.h, String(d), e)
        };
        c(0, Zc);
        c(1, $c);
        c(2, ad);
        c(3, bd);
        c(53, cd);
        c(4, dd);
        c(5, ed);
        c(52, fd);
        c(6, gd);
        c(9, ed);
        c(50, hd);
        c(10, id);
        c(12, jd);
        c(13, kd);
        c(47, nd);
        c(54, od);
        c(55, pd);
        c(63, ud);
        c(64, rd);
        c(65, sd);
        c(66, td);
        c(15, vd);
        c(16, wd);
        c(17, wd);
        c(18, xd);
        c(19, yd);
        c(20, zd);
        c(21, Ad);
        c(22, Bd);
        c(23, Cd);
        c(24, Dd);
        c(25, Ed);
        c(26, Fd);
        c(27,
            Gd);
        c(28, Hd);
        c(29, Id);
        c(45, Jd);
        c(30, Kd);
        c(32, Ld);
        c(33, Ld);
        c(34, Md);
        c(35, Md);
        c(46, Nd);
        c(36, Rd);
        c(43, Sd);
        c(37, Td);
        c(38, Ud);
        c(39, Vd);
        c(40, Wd);
        c(41, Xd);
        c(42, Yd);
        c(58, Zd);
        c(57, $d);
        c(60, ae);
        c(61, be);
        c(56, ce);
        c(62, de);
        c(59, ee)
    };

    function he(a) {
        if (a instanceof sa || a instanceof gb || a instanceof xa || a instanceof kb || a instanceof Kc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
    };var je = function () {
        var a = function (b) {
            return {
                toString: function () {
                    return b
                }
            }
        };
        return {
            Ji: a("consent"),
            Eg: a("convert_case_to"),
            Fg: a("convert_false_to"),
            Gg: a("convert_null_to"),
            Hg: a("convert_true_to"),
            Ig: a("convert_undefined_to"),
            Al: a("debug_mode_metadata"),
            Wa: a("function"),
            Cf: a("instance_name"),
            yj: a("live_only"),
            zj: a("malware_disabled"),
            Aj: a("metadata"),
            Dj: a("original_activity_id"),
            El: a("original_vendor_template_id"),
            Dl: a("once_on_load"),
            Cj: a("once_per_event"),
            Jh: a("once_per_load"),
            Gl: a("priority_override"),
            Hl: a("respected_consent_types"),
            Nh: a("setup_tags"),
            Bb: a("tag_id"),
            Sh: a("teardown_tags")
        }
    }();
    var ke = [], le = {
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
    }, me = function (a) {
        return le[a]
    }, ne = /[\x00\x22\x26\x27\x3c\x3e]/g;
    var re = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g, se = {
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
    }, te = function (a) {
        return se[a]
    };
    ke[7] = function (a) {
        return String(a).replace(re, te)
    };
    ke[8] = function (a) {
        if (null == a) return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(re, te) + "'"
        }
    };
    var Be = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Ce = {
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
        }, De = function (a) {
            return Ce[a]
        };
    ke[16] = function (a) {
        return a
    };
    var Fe;
    var Ge = [], Ie = [], Je = [], Ke = [], Le = [], Me = {}, Ne, Oe, Qe = function () {
        var a = Pe;
        Oe = Oe || a
    }, Re, Se = function (a, b) {
        var c = {};
        c["function"] = "__" + a;
        for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    }, Te = function (a, b) {
        var c = a["function"], d = b && b.event;
        if (!c) throw Error("Error: No function name given for function call.");
        var e = Me[c], f = {}, g;
        for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e && d && d.Xh && d.Xh(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]);
        e && d && d.Wh && (f.vtp_gtmCachedValues = d.Wh);
        if (b) {
            if (null ==
                b.name) {
                var h;
                a:{
                    var l = b.index;
                    if (null == l) h = ""; else {
                        var n;
                        switch (b.type) {
                            case 2:
                                n = Ge[l];
                                break;
                            case 1:
                                n = Ke[l];
                                break;
                            default:
                                h = "";
                                break a
                        }
                        var p = n && n[je.Cf];
                        h = p ? String(p) : ""
                    }
                }
                b.name = h
            }
            e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
        }
        return void 0 !== e ? e(f) : Fe(c, f, b)
    }, Ve = function (a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a) a.hasOwnProperty(e) && (d[e] = Ue(a[e], b, c));
        return d
    }, Ue = function (a, b, c) {
        if (Ia(a)) {
            var d;
            switch (a[0]) {
                case "function_id":
                    return a[1];
                case "list":
                    d = [];
                    for (var e = 1; e < a.length; e++) d.push(Ue(a[e],
                        b, c));
                    return d;
                case "macro":
                    var f = a[1];
                    if (c[f]) return;
                    var g = Ge[f];
                    if (!g || b.Yf(g)) return;
                    c[f] = !0;
                    var h = String(g[je.Cf]);
                    try {
                        var l = Ve(g, b, c);
                        l.vtp_gtmEventId = b.id;
                        b.priorityId && (l.vtp_gtmPriorityId = b.priorityId);
                        d = Te(l, {event: b, index: f, type: 2, name: h});
                        Re && (d = Re.Qj(d, l))
                    } catch (x) {
                        b.ii && b.ii(x, Number(f), h), d = !1
                    }
                    c[f] = !1;
                    return d;
                case "map":
                    d = {};
                    for (var n = 1; n < a.length; n += 2) d[Ue(a[n], b, c)] = Ue(a[n + 1], b, c);
                    return d;
                case "template":
                    d = [];
                    for (var p = !1, q = 1; q < a.length; q++) {
                        var r = Ue(a[q], b, c);
                        Oe && (p = p || r === Oe.se);
                        d.push(r)
                    }
                    return Oe && p ? Oe.Tj(d) : d.join("");
                case "escape":
                    d = Ue(a[1], b, c);
                    if (Oe && Ia(a[1]) && "macro" === a[1][0] && Oe.xk(a)) return Oe.Rk(d);
                    d = String(d);
                    for (var t = 2; t < a.length; t++) ke[a[t]] && (d = ke[a[t]](d));
                    return d;
                case "tag":
                    var u = a[1];
                    if (!Ke[u]) throw Error("Unable to resolve tag reference " + u + ".");
                    return d = {ci: a[2], index: u};
                case "zb":
                    var v = {arg0: a[2], arg1: a[3], ignore_case: a[5]};
                    v["function"] = a[1];
                    var w = We(v, b, c), y = !!a[4];
                    return y || 2 !== w ? y !== (1 === w) : null;
                default:
                    throw Error("Attempting to expand unknown Value type: " +
                        a[0] + ".");
            }
        }
        return a
    }, We = function (a, b, c) {
        try {
            return Ne(Ve(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    };
    var Xe = function (a, b, c) {
        var d;
        d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.B = a;
        this.h = c
    };
    oa(Xe, Error);

    function Ye(a, b) {
        if (Ia(a)) {
            Object.defineProperty(a, "context", {value: {line: b[0]}});
            for (var c = 1; c < a.length; c++) Ye(a[c], b[c])
        }
    };var Ze = function (a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.Nk = a;
        this.B = b;
        this.h = []
    };
    oa(Ze, Error);
    var af = function () {
        return function (a, b) {
            a instanceof Ze || (a = new Ze(a, $e));
            b && a.h.push(b);
            throw a;
        }
    };

    function $e(a) {
        if (!a.length) return a;
        a.push({id: "main", line: 0});
        for (var b = a.length - 1; 0 < b; b--) Ga(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };var df = function (a) {
        function b(r) {
            for (var t = 0; t < r.length; t++) d[r[t]] = !0
        }

        for (var c = [], d = [], e = bf(a), f = 0; f < Ie.length; f++) {
            var g = Ie[f], h = cf(g, e);
            if (h) {
                for (var l = g.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
                b(g.block || [])
            } else null === h && b(g.block || []);
        }
        for (var p = [], q = 0; q < Ke.length; q++) c[q] && !d[q] && (p[q] = !0);
        return p
    }, cf = function (a, b) {
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
    }, bf = function (a) {
        var b = [];
        return function (c) {
            void 0 === b[c] && (b[c] = We(Je[c], a));
            return b[c]
        }
    };
    var ef = {
        Qj: function (a, b) {
            b[je.Eg] && "string" === typeof a && (a = 1 == b[je.Eg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(je.Gg) && null === a && (a = b[je.Gg]);
            b.hasOwnProperty(je.Ig) && void 0 === a && (a = b[je.Ig]);
            b.hasOwnProperty(je.Hg) && !0 === a && (a = b[je.Hg]);
            b.hasOwnProperty(je.Fg) && !1 === a && (a = b[je.Fg]);
            return a
        }
    };
    var ff = function () {
        this.h = {}
    };

    function gf(a, b, c, d) {
        if (a) for (var e = 0; e < a.length; e++) {
            var f = void 0, g = "A policy function denied the permission request";
            try {
                f = a[e].call(void 0, b, c, d), g += "."
            } catch (h) {
                g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
            }
            if (!f) throw new Xe(c, d, g);
        }
    }

    function hf(a, b, c) {
        return function () {
            var d = arguments[0];
            if (d) {
                var e = a.h[d], f = a.h.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    gf(e, b, d, g);
                    gf(f, b, d, g)
                }
            }
        }
    };var lf = function () {
        var a = data.permissions || {}, b = L.F, c = this;
        this.B = new ff;
        this.h = {};
        var d = {}, e = hf(this.B, b, function () {
            var f = arguments[0];
            return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
        });
        m(a, function (f, g) {
            var h = {};
            m(g, function (l, n) {
                var p = jf(l, n);
                h[l] = p.assert;
                d[l] || (d[l] = p.ba)
            });
            c.h[f] = function (l, n) {
                var p = h[l];
                if (!p) throw kf(l, {}, "The requested permission " + l + " is not configured.");
                var q = Array.prototype.slice.call(arguments, 0);
                p.apply(void 0, q);
                e.apply(void 0, q)
            }
        })
    }, nf =
        function (a) {
            return mf.h[a] || function () {
            }
        };

    function jf(a, b) {
        var c = Se(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = kf;
        try {
            return Te(c)
        } catch (d) {
            return {
                assert: function (e) {
                    throw new Xe(e, {}, "Permission " + e + " is unknown.");
                }, ba: function () {
                    for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }

    function kf(a, b, c) {
        return new Xe(a, b, c)
    };var of = !1;
    var pf = {};
    pf.zl = Qa('false');
    pf.Wj = Qa('true');
    var qf = of, rf = pf.Wj, sf = pf.zl;
    var Jf = /:[0-9]+$/, Kf = /^\d+\.fls\.doubleclick\.net$/, Lf = function (a, b, c, d) {
            for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
                var h = f[g].split("=");
                if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                    var l = h.slice(1).join("=");
                    if (!c) return d ? l : decodeURIComponent(l).replace(/\+/g, " ");
                    e.push(d ? l : decodeURIComponent(l).replace(/\+/g, " "))
                }
            }
            return c ? e : void 0
        }, Of = function (a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = Mf(a.protocol) || Mf(z.location.protocol);
            "port" === b ? a.port =
                String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(Jf, "").toLowerCase());
            return Nf(a, b, c, d, e)
        }, Nf = function (a, b, c, d, e) {
            var f, g = Mf(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = Pf(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(Jf, "").toLowerCase();
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
                    a.pathname || a.hostname || wb("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var l = f.split("/");
                    0 <= (d || []).indexOf(l[l.length - 1]) && (l[l.length - 1] = "");
                    f = l.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = Lf(f, e, !1));
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
        Mf = function (a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        }, Pf = function (a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        }, Qf = function (a) {
            var b = I.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || wb("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(Jf, "");
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
        }, Rf = function (a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n :
                    p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function (p) {
                    return void 0 !== p
                }).join("&")
            }

            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "), e = Qf(a),
                f = a.split(/[?#]/)[0], g = e.search, h = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === h[0] && (h = h.substring(1));
            g = c(g);
            h = c(h);
            "" !== g && (g = "?" + g);
            "" !== h && (h = "#" + h);
            var l = "" + f + g + h;
            "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
            return l
        }, Uf = function (a) {
            var b = Qf(z.location.href), c = Of(b, "host", !1);
            if (c && c.match(Kf)) {
                var d = Of(b,
                    "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };
    var Vf = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function Wf(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }

    var Xf = new Ma;

    function Yf(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d, f = Xf.get(e);
            f || (f = new RegExp(b, d), Xf.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function Zf(a, b) {
        return 0 <= String(a).indexOf(String(b))
    }

    function $f(a, b) {
        return String(a) === String(b)
    }

    function ag(a, b) {
        return Number(a) >= Number(b)
    }

    function bg(a, b) {
        return Number(a) <= Number(b)
    }

    function cg(a, b) {
        return Number(a) > Number(b)
    }

    function dg(a, b) {
        return Number(a) < Number(b)
    }

    function eg(a, b) {
        return 0 === String(a).indexOf(String(b))
    }

    function fg(a, b) {
        function c(g) {
            var h = Qf(g), l = Of(h, "protocol"), n = Of(h, "host", !0), p = Of(h, "port"),
                q = Of(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" === l && "80" === p || "https" === l && "443" === p) l = "web", p = "default";
            return [l, n, p, q]
        }

        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
        return !0
    };
    var gg = function (a, b) {
            return a.length && b.length && a.lastIndexOf(b) === a.length - b.length
        }, hg = function (a, b) {
            var c = "*" === b.charAt(b.length - 1) || "/" === b || "/*" === b;
            gg(b, "/*") && (b = b.slice(0, -2));
            gg(b, "?") && (b = b.slice(0, -1));
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
        }, ig = /^[a-z0-9-]+$/i, jg = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
        lg = function (a, b) {
            var c;
            if (!(c = !kg(a))) {
                var d;
                a:{
                    var e = a.hostname.split(".");
                    if (2 > e.length) d = !1; else {
                        for (var f = 0; f < e.length; f++) if (!ig.exec(e[f])) {
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
                var l = a, n = b[g];
                if (!jg.exec(n)) throw Error("Invalid Wildcard");
                var p = n.slice(8), q = p.slice(0, p.indexOf("/")), r;
                var t = l.hostname, u = q;
                if (0 !== u.indexOf("*.")) r = t.toLowerCase() === u.toLowerCase(); else {
                    u = u.slice(2);
                    var v = t.toLowerCase().indexOf(u.toLowerCase());
                    r = -1 === v ? !1 : t.length === u.length ?
                        !0 : t.length !== u.length + v ? !1 : "." === t[v - 1]
                }
                if (r) {
                    var w = p.slice(p.indexOf("/"));
                    h = hg(l.pathname + l.search, w) ? !0 : !1
                } else h = !1;
                if (h) return !0
            }
            return !1
        }, kg = function (a) {
            return "https:" === a.protocol && (!a.port || "443" === a.port)
        };
    var mg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function ng(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a << 2 | b]
    };var og = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
        pg = {Fn: "function", DustMap: "Object", List: "Array"}, M = function (a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = og.exec(b[d]);
                if (!e) throw Error("Internal Error in " + a);
                var f = e[1], g = "!" === e[2], h = e[3], l = c[d];
                if (null == l) {
                    if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
                } else if ("*" !== h) {
                    var n = typeof l;
                    l instanceof gb ? n = "Fn" : l instanceof xa ? n = "List" : l instanceof kb ? n = "DustMap" : l instanceof Kc && (n = "OpaqueValue");
                    if (n != h) throw Error("Error in " + a + ". Argument " + f + " has type " + (pg[n] || n) + ", which does not match required type " + (pg[h] || h) + ".");
                }
            }
        };

    function qg(a) {
        if (a instanceof kb) return a.toString();
        if (a instanceof xa) return "[" + a.toString() + "]";
        if (a instanceof gb) return a.toString() + "()";
        if (k(a)) return '"' + a + '"';
        return "" + a
    }

    function rg(a, b) {
        var c = [];
        var d = [], e = [], f = function () {
            return 0 === e.length ? "" : "Property " + e.join(".") + ": "
        }, g = function (h, l) {
            if (0 <= d.indexOf(l)) c.push(f() + "Expected value contained a cycle."); else if (h !== l) if (l instanceof xa) if (h instanceof xa) if (h.length() !== l.length()) c.push(f() + "Expected array to contain " + l.length() + " item(s), actually " + h.length() + "."); else for (var n = 0; n < l.length(); n++) e.push(n), d.push(l), g(h.get(n), l.get(n)), d.pop(), e.pop(); else c.push(f() + "Expected to be an array, actually " +
                qg(h) + "."); else if (l instanceof kb) if (h instanceof kb) {
                for (var p = va(h, 1), q = {}, r = 0; r < p.length; r++) q[p[r]] = !0;
                for (var t = va(l, 1), u = [], v = 0; v < t.length; v++) {
                    var w = t[v];
                    q[w] ? (u.push(w), q[w] = !1) : c.push(f() + 'Expected property "' + w + '" was not found in actual.')
                }
                for (var y = 0; y < p.length; y++) q[p[y]] && c.push(f() + 'Unexpected property "' + p[y] + '" found in actual.');
                for (var x = 0; x < u.length; x++) {
                    var A = u[x];
                    e.push(A);
                    d.push(l);
                    g(h.get(A), l.get(A));
                    d.pop();
                    e.pop()
                }
            } else c.push(f() + "Expected to be an object, actually " +
                qg(h) + "."); else c.push(f() + "Expected " + qg(l) + ", actually " + qg(h) + ".")
        };
        g(a, b);
        return c
    };var sg = function (a, b) {
        var c = new gb(a, function () {
            for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = E(this, d[e]);
            var f = this.h.h;
            f && f.Ra && (f.Ra.ed[a] = f.Ra.ed[a] || [], f.Ra.ed[a].push(d));
            return b.apply(this, d)
        });
        c.Qb();
        return c
    }, tg = function (a, b) {
        var c = new kb, d;
        for (d in b) if (b.hasOwnProperty(d)) {
            var e = b[d];
            Ea(e) ? c.set(d, sg(a + "_" + d, e)) : (Ga(e) || k(e) || "boolean" === typeof e) && c.set(d, e)
        }
        c.Qb();
        return c
    };
    var ug = function (a, b) {
        M(F(this), ["apiName:!string", "message:?string"], arguments);
        var c = {}, d = new kb;
        return d = tg("AssertApiSubject", c)
    };
    var vg = function (a, b) {
        M(F(this), ["actual:?*", "message:?string"], arguments);
        if (a instanceof Mc) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {}, d = new kb;
        return d = tg("AssertThatSubject", c)
    };

    function wg(a) {
        return function () {
            for (var b = [], c = this.h, d = 0; d < arguments.length; ++d) b.push(Sc(arguments[d], c));
            return Rc(a.apply(null, b))
        }
    }

    var yg = function () {
        for (var a = Math, b = xg, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = wg(a[e].bind(a)))
        }
        return c
    };

    function zg(a, b) {
        var c = null;
        return c
    }

    zg.O = "internal.createRegExp";
    var Ag = function (a) {
        var b;
        return b
    };
    var Bg = function (a) {
        var b;
        return b
    };
    var Cg = function (a) {
        return encodeURI(a)
    };
    var Dg = function (a) {
        return encodeURIComponent(a)
    };

    function Eg(a, b) {
        var c = !1;
        return c
    }

    Eg.O = "internal.evaluateBooleanExpression";
    var Jg = function (a) {
        M(F(this), ["message:?string"], arguments);
    };
    var Kg = function (a, b) {
        M(F(this), ["min:!number", "max:!number"], arguments);
        return La(a, b)
    };
    var N = function (a, b, c) {
        var d = a.h.h;
        if (!d) throw Error("Missing program state.");
        d.Oj.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var Lg = function () {
        N(this, "read_container_data");
        var a = new kb;
        a.set("containerId", 'GTM-P528B3');
        a.set("version", '460');
        a.set("environmentName", 'Production');
        a.set("debugMode", qf);
        a.set("previewMode", sf);
        a.set("environmentMode", rf);
        a.Qb();
        return a
    };
    var Mg = function () {
        return (new Date).getTime()
    };
    var Ng = function (a) {
        if (null === a) return "null";
        if (a instanceof xa) return "array";
        if (a instanceof gb) return "function";
        if (a instanceof Kc) {
            a = a.Da;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var Og = function (a) {
        function b(c) {
            return function (d) {
                try {
                    return c(d)
                } catch (e) {
                    (qf || sf) && a.call(this, e.message)
                }
            }
        }

        return {
            parse: b(function (c) {
                return Rc(JSON.parse(c))
            }), stringify: b(function (c) {
                return JSON.stringify(Sc(c))
            })
        }
    };
    var Pg = function (a) {
        return Pa(Sc(a, this.h))
    };
    var Qg = function (a) {
        return Number(Sc(a, this.h))
    };
    var Rg = function (a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var Sg = function (a, b, c) {
        var d = null, e = !1;
        M(F(this), ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"], arguments);
        d = new kb;
        for (var f = 0; f < a.length(); f++) {
            var g = a.get(f);
            g instanceof kb && g.has(b) && g.has(c) && (d.set(g.get(b), g.get(c)), e = !0)
        }
        return e ? d : null
    };
    var xg = "floor ceil round max min abs pow sqrt".split(" ");
    var Tg = function () {
        var a = {};
        return {
            jk: function (b) {
                return a.hasOwnProperty(b) ? a[b] : void 0
            }, pl: function (b, c) {
                a[b] = c
            }, reset: function () {
                a = {}
            }
        }
    }, Ug = function (a, b) {
        return function () {
            var c = Array.prototype.slice.call(arguments, 0);
            c.unshift(b);
            return gb.prototype.h.apply(a, c)
        }
    }, Vg = function (a, b) {
        M(F(this), ["apiName:!string", "mock:?*"], arguments);
    };
    var Wg = {};
    Wg.keys = function (a) {
        return new xa
    };
    Wg.values = function (a) {
        return new xa
    };
    Wg.entries = function (a) {
        return new xa
    };
    Wg.freeze = function (a) {
        return a
    };
    Wg.delete = function (a, b) {
        return !1
    };
    var Yg = function () {
        this.h = {};
        this.B = {};
    };
    Yg.prototype.get = function (a, b) {
        var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
        c = Zg(a, b) || c;
        return c
    };
    Yg.prototype.add = function (a, b, c) {
        if (this.h.hasOwnProperty(a)) throw"Attempting to add a function which already exists: " + a + ".";
        if (this.B.hasOwnProperty(a)) throw"Attempting to add an API with an existing private API name: " + a + ".";
        this.h[a] = c ? void 0 : Ea(b) ? sg(a, b) : tg(a, b)
    };

    function Zg(a, b) {
        var c = void 0;
        var d = b.h.h;
        d && d.Ra && (c = d.Ra.hg.jk(a));
        return c
    };

    function $g() {
        var a = {};
        return a
    };

    function ah(a, b) {
        var c = !1;
        return c
    }

    ah.O = "internal.testRegExp";
    var ch = function (a) {
        return bh ? I.querySelectorAll(a) : null
    }, dh = function (a, b) {
        if (!bh) return null;
        if (Element.prototype.closest) try {
            return a.closest(b)
        } catch (e) {
            return null
        }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
            d = a;
        if (!I.documentElement.contains(d)) return null;
        do {
            try {
                if (c.call(d, b)) return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);
        return null
    }, eh = !1;
    if (I.querySelectorAll) try {
        var fh = I.querySelectorAll(":root");
        fh && 1 == fh.length && fh[0] == I.documentElement && (eh = !0)
    } catch (a) {
    }
    var bh = eh;
    var Q = function (a) {
        wb("GTM", a)
    };
    var gh = function (a) {
            return null == a ? "" : k(a) ? Sa(String(a)) : "e0"
        }, ih = function (a) {
            return a.replace(hh, "")
        }, kh = function (a) {
            return jh(a.replace(/\s/g, ""))
        }, jh = function (a) {
            return Sa(a.replace(lh, "").toLowerCase())
        }, nh = function (a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return mh.test(a) ? a : "e0"
        }, ph = function (a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (oh.test(c)) return c
            }
            return "e0"
        }, sh = function (a,
                          b) {
            window.Promise || b([]);
            Promise.all(a.map(function (c) {
                return c.value && -1 !== qh.indexOf(c.name) ? rh(c.value).then(function (d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function () {
                b(a)
            }).catch(function () {
                b([])
            })
        }, rh = function (a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (z.crypto && z.crypto.subtle) {
                if (th.test(a)) return Promise.resolve(a);
                try {
                    var b = uh(a);
                    return z.crypto.subtle.digest("SHA-256", b).then(function (c) {
                        var d = Array.from(new Uint8Array(c)).map(function (e) {
                            return String.fromCharCode(e)
                        }).join("");
                        return z.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                    }).catch(function () {
                        return "e2"
                    })
                } catch (c) {
                    return Promise.resolve("e2")
                }
            } else return Promise.resolve("e1")
        }, uh = function (a) {
            var b;
            if (z.TextEncoder) b = (new TextEncoder("utf-8")).encode(a); else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 |
                        e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        }, lh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g, oh = /^\S+@\S+\.\S+$/, mh = /^\+\d{10,15}$/, hh = /[.~]/g,
        vh = /^[0-9A-Za-z_-]{43}$/, th = /^[0-9A-Fa-f]{64}$/, wh = {},
        xh = (wh.email = "em", wh.phone_number = "pn", wh.first_name = "fn", wh.last_name = "ln", wh.street = "sa", wh.city = "ct", wh.region = "rg", wh.country = "co", wh.postal_code = "pc", wh.error_code = "ec", wh),
        yh = {},
        zh = (yh.email = "sha256_email_address", yh.phone_number = "sha256_phone_number", yh.first_name = "sha256_first_name", yh.last_name =
            "sha256_last_name", yh.street = "sha256_street", yh), Ah = function (a, b) {
            function c(t, u, v, w) {
                var y = gh(t);
                "" !== y && (th.test(y) ? l.push({name: u, value: y, index: w}) : l.push({name: u, value: v(y), index: w}))
            }

            function d(t, u) {
                var v = t;
                if (k(v) || Ia(v)) {
                    v = Ia(t) ? t : [t];
                    for (var w = 0; w < v.length; ++w) {
                        var y = gh(v[w]), x = th.test(y);
                        u && !x && Q(89);
                        !u && x && Q(88)
                    }
                }
            }

            function e(t, u) {
                var v = t[u];
                d(v, !1);
                var w = zh[u];
                t.hasOwnProperty(w) && (t.hasOwnProperty(u) && Q(90), v = t[w], d(v, !0));
                return v
            }

            function f(t, u, v) {
                var w = e(t, u);
                w = Ia(w) ? w : [w];
                for (var y =
                    0; y < w.length; ++y) c(w[y], u, v)
            }

            function g(t, u, v, w) {
                var y = e(t, u);
                c(y, u, v, w)
            }

            function h(t) {
                return function (u) {
                    Q(64);
                    return t(u)
                }
            }

            var l = [];
            if ("https:" === z.location.protocol) {
                f(a, "email", ph);
                f(a, "phone_number", nh);
                f(a, "first_name", h(kh));
                f(a, "last_name", h(kh));
                var n = a.home_address || {};
                f(n, "street", h(jh));
                f(n, "city", h(jh));
                f(n, "postal_code", h(ih));
                f(n, "region", h(jh));
                f(n, "country", h(ih));
                var p = a.address || {};
                p = Ia(p) ? p : [p];
                for (var q = 0; q < p.length; q++) {
                    var r = p[q];
                    g(r, "first_name", kh, q);
                    g(r, "last_name", kh, q);
                    g(r, "street", jh, q);
                    g(r, "city", jh, q);
                    g(r, "postal_code", ih, q);
                    g(r, "region", jh, q);
                    g(r, "country", ih, q)
                }
                sh(l, b)
            } else l.push({name: "error_code", value: "e3", index: void 0}), b(l)
        }, Bh = function (a, b) {
            Ah(a, function (c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name, h = c[f].value, l = c[f].index, n = xh[g];
                    n && h && (-1 === qh.indexOf(g) || /^e\d+$/.test(h) || vh.test(h) || th.test(h)) && (void 0 !== l && (n += l), d.push(n + "." + h), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        }, Ch = function (a) {
            if (z.Promise) try {
                return new Promise(function (b) {
                    Bh(a,
                        function (c, d) {
                            b({lg: c, Qk: d})
                        })
                })
            } catch (b) {
            }
        }, qh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var T = {
            g: {
                K: "ad_storage",
                W: "analytics_storage",
                Re: "region",
                Ag: "consent_updated",
                Se: "wait_for_update",
                Ni: "app_remove",
                Oi: "app_store_refund",
                Pi: "app_store_subscription_cancel",
                Qi: "app_store_subscription_convert",
                Ri: "app_store_subscription_renew",
                Jg: "add_payment_info",
                Kg: "add_shipping_info",
                Fc: "add_to_cart",
                Gc: "remove_from_cart",
                Lg: "view_cart",
                Yb: "begin_checkout",
                Hc: "select_item",
                Gb: "view_item_list",
                Zb: "select_promotion",
                Hb: "view_promotion",
                Ia: "purchase",
                Ic: "refund",
                Ja: "view_item",
                Mg: "add_to_wishlist",
                Si: "first_open",
                Ti: "first_visit",
                Fa: "gtag.config",
                Ka: "gtag.get",
                Ui: "in_app_purchase",
                Jc: "page_view",
                Vi: "session_start",
                Xe: "user_engagement",
                ac: "gclid",
                oa: "ads_data_redaction",
                da: "allow_ad_personalization_signals",
                Ye: "allow_custom_scripts",
                Wi: "allow_display_features",
                Md: "allow_enhanced_conversions",
                Ib: "allow_google_signals",
                Ga: "allow_interest_groups",
                Nd: "auid",
                Xi: "auto_detection_enabled",
                Jb: "aw_remarketing",
                Ze: "aw_remarketing_only",
                Od: "discount",
                Pd: "aw_feed_country",
                Qd: "aw_feed_language",
                ja: "items",
                Rd: "aw_merchant_id",
                Ng: "aw_basket_type",
                Sd: "campaign_content",
                Td: "campaign_id",
                Ud: "campaign_medium",
                Vd: "campaign_name",
                Kc: "campaign",
                Wd: "campaign_source",
                Xd: "campaign_term",
                ub: "client_id",
                Yi: "content_group",
                Zi: "content_type",
                La: "conversion_cookie_prefix",
                Lc: "conversion_id",
                ya: "conversion_linker",
                Mc: "conversion_api",
                vb: "cookie_domain",
                Sa: "cookie_expires",
                wb: "cookie_flags",
                Nc: "cookie_name",
                af: "cookie_path",
                jb: "cookie_prefix",
                bc: "cookie_update",
                Oc: "country",
                sa: "currency",
                Yd: "customer_lifetime_value",
                Pc: "custom_map",
                aj: "debug_mode",
                fa: "developer_id",
                bj: "disable_merchant_reported_purchases",
                cj: "dc_custom_params",
                dj: "dc_natural_search",
                bf: "dynamic_event_settings",
                ej: "affiliation",
                Og: "checkout_option",
                Pg: "checkout_step",
                fj: "coupon",
                cf: "item_list_name",
                df: "list_name",
                gj: "promotions",
                Zd: "shipping",
                Qg: "tax",
                ae: "engagement_time_msec",
                Qc: "enhanced_client_id",
                Rc: "enhanced_conversions",
                Rg: "enhanced_conversions_automatic_settings",
                be: "estimated_delivery_date",
                ef: "euid_logged_in_state",
                cc: "event_callback",
                fc: "event_developer_id_string",
                Sg: "event",
                ce: "event_settings",
                de: "event_timeout",
                ij: "experiments",
                ff: "firebase_id",
                ee: "first_party_collection",
                fe: "_x_20",
                Kb: "_x_19",
                Tg: "fledge",
                Ug: "flight_error_code",
                Vg: "flight_error_message",
                Wg: "gac_gclid",
                he: "gac_wbraid",
                Xg: "gac_wbraid_multiple_conversions",
                hf: "ga_restrict_domain",
                jf: "ga_temp_client_id",
                Yg: "gdpr_applies",
                Zg: "geo_granularity",
                xb: "value_callback",
                kb: "value_key",
                Bl: "google_ono",
                lb: "google_signals",
                ie: "google_tld",
                je: "groups",
                ah: "gsa_experiment_id",
                bh: "iframe_state",
                ke: "ignore_referrer",
                kf: "internal_traffic_results",
                me: "is_legacy_loaded",
                dh: "is_passthrough",
                Ta: "language",
                lf: "legacy_developer_id_string",
                za: "linker",
                ic: "accept_incoming",
                Lb: "decorate_forms",
                V: "domains",
                jc: "url_position",
                eh: "method",
                Sc: "new_customer",
                fh: "non_interaction",
                jj: "optimize_id",
                gh: "page_hostname",
                Tc: "page_path",
                Ua: "page_referrer",
                kc: "page_title",
                hh: "passengers",
                ih: "phone_conversion_callback",
                kj: "phone_conversion_country_code",
                jh: "phone_conversion_css_class",
                lj: "phone_conversion_ids",
                kh: "phone_conversion_number",
                lh: "phone_conversion_options",
                mh: "quantity",
                Uc: "redact_device_info",
                nf: "redact_enhanced_user_id",
                mj: "redact_ga_client_id",
                nj: "redact_user_id",
                ne: "referral_exclusion_definition",
                Mb: "restricted_data_processing",
                oj: "retoken",
                nh: "screen_name",
                Nb: "screen_resolution",
                pj: "search_term",
                Na: "send_page_view",
                Ob: "send_to",
                Vc: "session_duration",
                oe: "session_engaged",
                pf: "session_engaged_time",
                yb: "session_id",
                pe: "session_number",
                Wc: "delivery_postal_code",
                ph: "temporary_client_id",
                qh: "topmost_url",
                qj: "tracking_id",
                qf: "traffic_type",
                Va: "transaction_id",
                va: "transport_url",
                rh: "trip_type",
                Xc: "update",
                zb: "url_passthrough",
                rf: "_user_agent_architecture",
                sf: "_user_agent_bitness",
                tf: "_user_agent_full_version_list",
                uf: "_user_agent_mobile",
                vf: "_user_agent_model",
                wf: "_user_agent_platform",
                xf: "_user_agent_platform_version",
                yf: "_user_agent_wow64",
                wa: "user_data",
                sh: "user_data_auto_latency",
                th: "user_data_auto_meta",
                uh: "user_data_auto_multi",
                vh: "user_data_auto_selectors",
                wh: "user_data_auto_status",
                xh: "user_data_mode",
                zf: "user_data_settings",
                Aa: "user_id",
                Oa: "user_properties",
                yh: "us_privacy_string",
                qa: "value",
                qe: "wbraid",
                zh: "wbraid_multiple_conversions",
                Fh: "_host_name",
                Gh: "_in_page_command",
                Hh: "_is_passthrough_cid",
                Ih: "non_personalized_ads",
                dd: "_sst_parameters",
                ib: "conversion_label",
                Ma: "page_location",
                hc: "global_developer_id_string",
                oh: "tc_privacy_string"
            }
        }, Dh = {},
        Eh = Object.freeze((Dh[T.g.da] = 1, Dh[T.g.Md] = 1, Dh[T.g.Ib] = 1, Dh[T.g.ja] = 1, Dh[T.g.vb] = 1, Dh[T.g.Sa] = 1, Dh[T.g.wb] = 1, Dh[T.g.Nc] = 1, Dh[T.g.af] = 1, Dh[T.g.jb] = 1, Dh[T.g.bc] =
            1, Dh[T.g.Pc] = 1, Dh[T.g.fa] = 1, Dh[T.g.bf] = 1, Dh[T.g.cc] = 1, Dh[T.g.ce] = 1, Dh[T.g.de] = 1, Dh[T.g.ee] = 1, Dh[T.g.hf] = 1, Dh[T.g.lb] = 1, Dh[T.g.ie] = 1, Dh[T.g.je] = 1, Dh[T.g.kf] = 1, Dh[T.g.me] = 1, Dh[T.g.za] = 1, Dh[T.g.nf] = 1, Dh[T.g.ne] = 1, Dh[T.g.Mb] = 1, Dh[T.g.Na] = 1, Dh[T.g.Ob] = 1, Dh[T.g.Vc] = 1, Dh[T.g.pf] = 1, Dh[T.g.Wc] = 1, Dh[T.g.va] = 1, Dh[T.g.Xc] = 1, Dh[T.g.zf] = 1, Dh[T.g.Oa] = 1, Dh[T.g.dd] = 1, Dh));
    Object.freeze([T.g.Ma, T.g.Ua, T.g.kc, T.g.Ta, T.g.nh, T.g.Aa, T.g.ff, T.g.Yi]);
    var Fh = {},
        Gh = Object.freeze((Fh[T.g.Ni] = 1, Fh[T.g.Oi] = 1, Fh[T.g.Pi] = 1, Fh[T.g.Qi] = 1, Fh[T.g.Ri] = 1, Fh[T.g.Si] = 1, Fh[T.g.Ti] = 1, Fh[T.g.Ui] = 1, Fh[T.g.Vi] = 1, Fh[T.g.Xe] = 1, Fh)),
        Hh = {},
        Ih = Object.freeze((Hh[T.g.Jg] = 1, Hh[T.g.Kg] = 1, Hh[T.g.Fc] = 1, Hh[T.g.Gc] = 1, Hh[T.g.Lg] = 1, Hh[T.g.Yb] = 1, Hh[T.g.Hc] = 1, Hh[T.g.Gb] = 1, Hh[T.g.Zb] = 1, Hh[T.g.Hb] = 1, Hh[T.g.Ia] = 1, Hh[T.g.Ic] = 1, Hh[T.g.Ja] = 1, Hh[T.g.Mg] = 1, Hh)),
        Jh = Object.freeze([T.g.da, T.g.Ib, T.g.bc]), Kh = Object.freeze([].concat(Jh)),
        Lh = Object.freeze([T.g.Sa, T.g.de, T.g.Vc, T.g.pf, T.g.ae]),
        Mh = Object.freeze([].concat(Lh)), Nh = {}, Vh = (Nh[T.g.K] = "1", Nh[T.g.W] = "2", Nh), Wh = {},
        Xh = Object.freeze((Wh[T.g.da] = 1, Wh[T.g.Md] = 1, Wh[T.g.Ga] = 1, Wh[T.g.Jb] = 1, Wh[T.g.Ze] = 1, Wh[T.g.Od] = 1, Wh[T.g.Pd] = 1, Wh[T.g.Qd] = 1, Wh[T.g.ja] = 1, Wh[T.g.Rd] = 1, Wh[T.g.La] = 1, Wh[T.g.ya] = 1, Wh[T.g.vb] = 1, Wh[T.g.Sa] = 1, Wh[T.g.wb] = 1, Wh[T.g.jb] = 1, Wh[T.g.sa] = 1, Wh[T.g.Yd] = 1, Wh[T.g.fa] = 1, Wh[T.g.bj] = 1, Wh[T.g.Rc] = 1, Wh[T.g.be] = 1, Wh[T.g.ff] = 1, Wh[T.g.ee] = 1, Wh[T.g.me] = 1, Wh[T.g.Ta] = 1, Wh[T.g.Sc] = 1, Wh[T.g.Ma] = 1, Wh[T.g.Ua] = 1, Wh[T.g.ih] = 1, Wh[T.g.jh] = 1,
            Wh[T.g.kh] = 1, Wh[T.g.lh] = 1, Wh[T.g.Mb] = 1, Wh[T.g.Na] = 1, Wh[T.g.Ob] = 1, Wh[T.g.Wc] = 1, Wh[T.g.Va] = 1, Wh[T.g.va] = 1, Wh[T.g.Xc] = 1, Wh[T.g.zb] = 1, Wh[T.g.wa] = 1, Wh[T.g.Aa] = 1, Wh[T.g.qa] = 1, Wh));
    Object.freeze(T.g);
    var Yh = {}, Zh = z.google_tag_manager = z.google_tag_manager || {}, $h = Math.random();
    Yh.nc = "32m0";
    Yh.cd = Number("0") || 0;
    Yh.ka = "dataLayer";
    Yh.Li = "ChEIgIDnnwYQps2Cj8PNw6PUARIjAB9tGWZW2RCZPsgA0O3oqPkY3t1MJfgxkdzd7nV45qZQQcAaAqmm";
    var ai = {
        __cl: !0,
        __ecl: !0,
        __ehl: !0,
        __evl: !0,
        __fal: !0,
        __fil: !0,
        __fsl: !0,
        __hl: !0,
        __jel: !0,
        __lcl: !0,
        __sdl: !0,
        __tl: !0,
        __ytl: !0
    }, bi = {__paused: !0, __tg: !0}, ci;
    for (ci in ai) ai.hasOwnProperty(ci) && (bi[ci] = !0);
    var di = Qa(""), ei, fi = !1;
    ei = fi;
    var gi, hi = !1;
    gi = hi;
    var ii, ji = !1;
    ii = ji;
    var ki, li = !1;
    ki = li;
    Yh.Ld = "www.googletagmanager.com";
    var mi = "" + Yh.Ld + (ei ? "/gtag/js" : "/gtm.js"), ni = null, oi = null, pi = {}, qi = {}, ri = {},
        si = function () {
            var a = Zh.sequence || 1;
            Zh.sequence = a + 1;
            return a
        };
    Yh.Ki = "";
    var ti = "";
    Yh.we = ti;
    var ui = new Ma, vi = {}, wi = {}, zi = {
        name: Yh.ka, set: function (a, b) {
            K(cb(a, b), vi);
            xi()
        }, get: function (a) {
            return yi(a, 2)
        }, reset: function () {
            ui = new Ma;
            vi = {};
            xi()
        }
    }, yi = function (a, b) {
        return 2 != b ? ui.get(a) : Ai(a)
    }, Ai = function (a, b) {
        var c = a.split(".");
        b = b || [];
        for (var d = vi, e = 0; e < c.length; e++) {
            if (null === d) return !1;
            if (void 0 === d) break;
            d = d[c[e]];
            if (-1 !== b.indexOf(d)) return
        }
        return d
    }, Bi = function (a, b) {
        wi.hasOwnProperty(a) || (ui.set(a, b), K(cb(a, b), vi), xi())
    }, Ci = function () {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
            "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b], d = yi(c, 1);
            if (Ia(d) || Qc(d)) d = K(d);
            wi[c] = d
        }
    }, xi = function (a) {
        m(wi, function (b, c) {
            ui.set(b, c);
            K(cb(b), vi);
            K(cb(b, c), vi);
            a && delete wi[b]
        })
    }, Di = function (a, b) {
        var c, d = 1 !== (void 0 === b ? 2 : b) ? Ai(a) : ui.get(a);
        "array" === Oc(d) || "object" === Oc(d) ? c = K(d) : c = d;
        return c
    };
    var Ei = new function (a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var Fi = function (a) {
        Fi[" "](a);
        return a
    };
    Fi[" "] = function () {
    };
    var Hi = function () {
        var a = Gi, b = "Wf";
        if (a.Wf && a.hasOwnProperty(b)) return a.Wf;
        var c = new a;
        return a.Wf = c
    };
    var Gi = function () {
        var a = {};
        this.h = function () {
            var b = Ei.h, c = Ei.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.B = function () {
            a[Ei.h] = !0
        }
    };
    var Ii = [];

    function Ji() {
        var a = ic("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Ki,
            update: Li,
            addListener: Mi,
            notifyListeners: Ni,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function Ki(a, b, c, d, e, f) {
        var g = Ji();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries, l = h[a] || {}, n = l.region, p = c && k(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === l.update),
                    r = {region: p, initial: "granted" === b, update: l.update, quiet: q};
                if ("" !== d || !1 !== l.initial) h[a] = r;
                q && z.setTimeout(function () {
                    h[a] === r && r.quiet && (r.quiet = !1, Oi(a), Ni(), wb("TAGGING",
                        2))
                }, f)
            }
        }
    }

    function Li(a, b) {
        var c = Ji();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Pi(c, a), e = c.entries, f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Pi(c, a);
            f.quiet ? (f.quiet = !1, Oi(a)) : g !== d && Oi(a)
        }
    }

    function Mi(a, b) {
        Ii.push({Lf: a, ck: b})
    }

    function Oi(a) {
        for (var b = 0; b < Ii.length; ++b) {
            var c = Ii[b];
            Ia(c.Lf) && -1 !== c.Lf.indexOf(a) && (c.mi = !0)
        }
    }

    function Ni(a, b) {
        for (var c = 0; c < Ii.length; ++c) {
            var d = Ii[c];
            if (d.mi) {
                d.mi = !1;
                try {
                    d.ck({consentEventId: a, consentPriorityId: b})
                } catch (e) {
                }
            }
        }
    }

    function Pi(a, b) {
        var c = a.entries[b] || {};
        return void 0 !== c.update ? c.update : c.initial
    }

    var Qi = function (a) {
        var b = Ji();
        b.accessedAny = !0;
        return Pi(b, a)
    }, Ri = function (a) {
        var b = Ji();
        b.accessedDefault = !0;
        return (b.entries[a] || {}).initial
    }, Si = function (a) {
        var b = Ji();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }, Ti = function () {
        if (!Hi().h()) return !1;
        var a = Ji();
        a.accessedAny = !0;
        return a.active
    }, Ui = function () {
        var a = Ji();
        a.accessedDefault = !0;
        return a.usedDefault
    }, Vi = function (a, b) {
        Ji().addListener(a, b)
    }, Wi = function (a, b) {
        Ji().notifyListeners(a, b)
    }, Xi = function (a, b) {
        function c() {
            for (var e = 0; e < b.length; e++) if (!Si(b[e])) return !0;
            return !1
        }

        if (c()) {
            var d = !1;
            Vi(b, function (e) {
                d || c() || (d = !0, a(e))
            })
        } else a({})
    }, Yi = function (a, b) {
        function c() {
            for (var f = [], g = 0; g < d.length; g++) {
                var h = d[g];
                !1 === Qi(h) || e[h] || (f.push(h), e[h] = !0)
            }
            return f
        }

        var d = k(b) ? [b] : b, e = {};
        c().length !== d.length && Vi(d, function (f) {
            var g = c();
            0 < g.length && (f.Lf = g, a(f))
        })
    };
    var Zi = function (a) {
        var b = 1, c, d, e;
        if (a) for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var $i = function (a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="), h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var l = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    };
    var aj = function (a, b) {
        var c = function () {
        };
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }, bj = function (a) {
        var b = a;
        return function () {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function cj(a) {
        return "null" !== a.origin
    };var fj = function (a, b, c, d) {
        return dj(d) ? $i(a, String(b || ej()), c) : []
    }, ij = function (a, b, c, d, e) {
        if (dj(e)) {
            var f = gj(a, d, e);
            if (1 === f.length) return f[0].id;
            if (0 !== f.length) {
                f = hj(f, function (g) {
                    return g.Ce
                }, b);
                if (1 === f.length) return f[0].id;
                f = hj(f, function (g) {
                    return g.xd
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };

    function jj(a, b, c, d) {
        var e = ej(), f = window;
        cj(f) && (f.document.cookie = a);
        var g = ej();
        return e != g || void 0 != c && 0 <= fj(b, g, !1, d).indexOf(c)
    }

    var nj = function (a, b, c, d) {
        function e(w, y, x) {
            if (null == x) return delete h[y], w;
            h[y] = x;
            return w + "; " + y + "=" + x
        }

        function f(w, y) {
            if (null == y) return delete h[y], w;
            h[y] = !0;
            return w + "; " + y
        }

        if (!dj(c.qb)) return 2;
        var g;
        void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = kj(b), g = a + "=" + b);
        var h = {};
        g = e(g, "path", c.path);
        var l;
        c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
        g = e(g, "expires", l);
        g = e(g, "max-age", c.Jk);
        g = e(g, "samesite",
            c.fl);
        c.jl && (g = f(g, "secure"));
        var n = c.domain;
        if (n && "auto" === n.toLowerCase()) {
            for (var p = lj(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                var u = "none" !== p[t] ? p[t] : void 0, v = e(g, "domain", u);
                v = f(v, c.flags);
                try {
                    d && d(a, h)
                } catch (w) {
                    q = w;
                    continue
                }
                r = !0;
                if (!mj(u, c.path) && jj(v, a, b, c.qb)) return 0
            }
            if (q && !r) throw q;
            return 1
        }
        n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, h);
        return mj(n, c.path) ? 1 : jj(g, a, b, c.qb) ? 0 : 1
    }, oj = function (a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return nj(a,
            b, c)
    };

    function hj(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g], l = b(h);
            l === c ? d.push(h) : void 0 === f || l < f ? (e = [h], f = l) : l === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }

    function gj(a, b, c) {
        for (var d = [], e = fj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."), h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var l = g.shift();
                l && (l = l.split("-"), d.push({id: g.join("."), Ce: 1 * l[0] || 1, xd: 1 * l[1] || 1}))
            }
        }
        return d
    }

    var kj = function (a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }, pj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, qj = /(^|\.)doubleclick\.net$/i, mj = function (a, b) {
        return qj.test(window.document.location.hostname) || "/" === b && pj.test(a)
    }, ej = function () {
        return cj(window) ? window.document.cookie : ""
    }, lj = function () {
        var a = [], b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
        var e = window.document.location.hostname;
        qj.test(e) || pj.test(e) || a.push("none");
        return a
    }, dj = function (a) {
        if (!Hi().h() || !a || !Ti()) return !0;
        if (!Si(a)) return !1;
        var b = Qi(a);
        return null == b ? !0 : !!b
    };
    var rj = function (a) {
        var b = Math.round(2147483647 * Math.random());
        return a ? String(b ^ Zi(a) & 2147483647) : String(b)
    }, sj = function (a) {
        return [rj(a), Math.round(Ua() / 1E3)].join(".")
    }, vj = function (a, b, c, d, e) {
        var f = tj(b);
        return ij(a, f, uj(c), d, e)
    }, wj = function (a, b, c, d) {
        var e = "" + tj(c), f = uj(d);
        1 < f && (e += "-" + f);
        return [b, e, a].join(".")
    }, tj = function (a) {
        if (!a) return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }, uj = function (a) {
        if (!a || "/" === a) return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length -
            1
    };

    function xj(a, b, c, d) {
        var e, f = Number(null != a.Db ? a.Db : void 0);
        0 !== f && (e = new Date((b || Ua()) + 1E3 * (f || 7776E3)));
        return {path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: e, qb: d}
    };var yj;
    var Cj = function () {
        var a = zj, b = Aj, c = Bj(), d = function (g) {
            a(g.target || g.srcElement || {})
        }, e = function (g) {
            b(g.target || g.srcElement || {})
        };
        if (!c.init) {
            rc(I, "mousedown", d);
            rc(I, "keyup", d);
            rc(I, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function () {
                b(this);
                f.call(this)
            };
            c.init = !0
        }
    }, Dj = function (a, b, c, d, e) {
        var f = {callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e};
        Bj().decorators.push(f)
    }, Ej = function (a, b, c) {
        for (var d = Bj().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g =
                d[f], h;
            if (h = !c || g.forms) a:{
                var l = g.domains, n = a, p = !!g.sameHost;
                if (l && (p || n !== I.location.hostname)) for (var q = 0; q < l.length; q++) if (l[q] instanceof RegExp) {
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
                r === b && Ya(e, g.callback())
            }
        }
        return e
    };

    function Bj() {
        var a = ic("google_tag_data", {}), b = a.gl;
        b && b.decorators || (b = {decorators: []}, a.gl = b);
        return b
    };var Fj = /(.*?)\*(.*?)\*(.*)/, Gj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Hj = /^(?:www\.|m\.|amp\.)+/, Ij = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Jj(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }

    var Lj = function (a) {
        var b = [], c;
        for (c in a) if (a.hasOwnProperty(c)) {
            var d = a[c];
            void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(tb(String(d))))
        }
        var e = b.join("*");
        return ["1", Kj(e), e].join("*")
    };

    function Kj(a, b) {
        var c = [gc.userAgent, (new Date).getTimezoneOffset(), gc.userLanguage || gc.language, Math.floor(Ua() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = yj)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        yj = d;
        for (var l = 4294967295, n = 0; n < c.length; n++) l = l >>> 8 ^ yj[(l ^ c.charCodeAt(n)) & 255];
        return ((l ^ -1) >>> 0).toString(36)
    }

    function Mj() {
        return function (a) {
            var b = Qf(z.location.href), c = b.search.replace("?", ""), d = Lf(c, "_gl", !1, !0) || "";
            a.query = Nj(d) || {};
            var e = Of(b, "fragment").match(Jj("_gl"));
            a.fragment = Nj(e && e[3] || "") || {}
        }
    }

    function Oj(a, b) {
        var c = Jj(a).exec(b), d = b;
        if (c) {
            var e = c[2], f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }

    var Pj = function (a, b) {
        b || (b = "_gl");
        var c = Ij.exec(a);
        if (!c) return "";
        var d = c[1], e = Oj(b, (c[2] || "").slice(1)), f = Oj(b, (c[3] || "").slice(1));
        e.length && (e = "?" + e);
        f.length && (f = "#" + f);
        return "" + d + e + f
    }, Qj = function (a) {
        var b = Mj(), c = Bj();
        c.data || (c.data = {query: {}, fragment: {}}, b(c.data));
        var d = {}, e = c.data;
        e && (Ya(d, e.query), a && Ya(d, e.fragment));
        return d
    }, Nj = function (a) {
        try {
            var b = Rj(a, 3);
            if (void 0 !== b) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e], g = ub(d[e + 1]);
                    c[f] = g
                }
                wb("TAGGING", 6);
                return c
            }
        } catch (h) {
            wb("TAGGING",
                8)
        }
    };

    function Rj(a, b) {
        if (a) {
            var c;
            a:{
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Fj.exec(d);
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
                var h = g[3], l;
                a:{
                    for (var n = g[2], p = 0; p < b; ++p) if (n === Kj(h, p)) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                if (l) return h;
                wb("TAGGING", 7)
            }
        }
    }

    function Sj(a, b, c, d) {
        function e(p) {
            p = Oj(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }

        d = void 0 === d ? !1 : d;
        var f = Ij.exec(c);
        if (!f) return "";
        var g = f[1], h = f[2] || "", l = f[3] || "", n = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : h = "?" + e(h.substring(1));
        return "" + g + h + l
    }

    function Tj(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(), d = Ej(b, 1, c), e = Ej(b, 2, c), f = Ej(b, 3, c);
        if (Za(d)) {
            var g = Lj(d);
            c ? Uj("_gl", g, a) : Vj("_gl", g, a, !1)
        }
        if (!c && Za(e)) {
            var h = Lj(e);
            Vj("_gl", h, a, !0)
        }
        for (var l in f) if (f.hasOwnProperty(l)) a:{
            var n = l, p = f[l], q = a;
            if (q.tagName) {
                if ("a" === q.tagName.toLowerCase()) {
                    Vj(n, p, q);
                    break a
                }
                if ("form" === q.tagName.toLowerCase()) {
                    Uj(n, p, q);
                    break a
                }
            }
            "string" == typeof q && Sj(n, p, q)
        }
    }

    function Vj(a, b, c, d) {
        if (c.href) {
            var e = Sj(a, b, c.href, void 0 === d ? !1 : d);
            Gb.test(e) && (c.href = e)
        }
    }

    function Uj(a, b, c) {
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
                    var l = I.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l)
                }
            } else if ("post" === d) {
                var n = Sj(a, b, c.action);
                Gb.test(n) && (c.action = n)
            }
        }
    }

    function zj(a) {
        try {
            var b;
            a:{
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
                "http:" !== f && "https:" !== f || Tj(e, e.hostname)
            }
        } catch (g) {
        }
    }

    function Aj(a) {
        try {
            if (a.action) {
                var b = Of(Qf(a.action), "host");
                Tj(a, b)
            }
        } catch (c) {
        }
    }

    var Wj = function (a, b, c, d) {
        Cj();
        Dj(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    }, Xj = function (a, b) {
        Cj();
        Dj(a, [Nf(z.location, "host", !0)], b, !0, !0)
    }, Yj = function () {
        var a = I.location.hostname, b = Gj.exec(I.referrer);
        if (!b) return !1;
        var c = b[2], d = b[1], e = "";
        if (c) {
            var f = c.split("/"), g = f[1];
            e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (0 === d.indexOf("xn--")) return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var h = a.replace(Hj, ""), l = e.replace(Hj, ""), n;
        if (!(n = h === l)) {
            var p = "." + l;
            n = h.substring(h.length - p.length,
                h.length) === p
        }
        return n
    }, Zj = function (a, b) {
        return !1 === a ? !1 : a || b || Yj()
    };
    var ak = {}, bk = function (a) {
        return void 0 == ak[a] ? !1 : ak[a]
    };
    var ck = ["1"], dk = {}, ek = {}, jk = function (a, b) {
        b = void 0 === b ? !0 : b;
        var c = fk(a.prefix);
        if (!dk[c]) if (gk(c, a.path, a.domain)) {
            if (bk("enable_auid_cross_domain")) {
                var d = ek[fk(a.prefix)];
                hk(a, d ? d.id : void 0, d ? d.eg : void 0)
            }
        } else {
            if (bk("enable_auid_fl_iframe")) {
                var e = Uf("auiddc");
                if (e) {
                    wb("TAGGING", 17);
                    dk[c] = e;
                    return
                }
            }
            if (b) {
                var f = fk(a.prefix), g = sj();
                if (0 === ik(f, g, a)) {
                    var h = ic("google_tag_data", {});
                    h._gcl_au || (h._gcl_au = g)
                }
                gk(c, a.path, a.domain)
            }
        }
    };

    function hk(a, b, c) {
        var d = fk(a.prefix), e = dk[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var h = e;
                    b && (h = e + "." + b + "." + (c ? c : Math.floor(Ua() / 1E3)));
                    ik(d, h, a, 1E3 * g)
                }
            }
        }
    }

    function ik(a, b, c, d) {
        var e = wj(b, "1", c.domain, c.path), f = xj(c, d);
        f.qb = "ad_storage";
        return oj(a, e, f)
    }

    function gk(a, b, c) {
        var d = vj(a, b, c, ck, "ad_storage");
        if (!d) return !1;
        kk(a, d);
        return !0
    }

    function kk(a, b) {
        var c = b.split(".");
        5 === c.length ? (dk[a] = c.slice(0, 2).join("."), ek[a] = {
            id: c.slice(2, 4).join("."),
            eg: Number(c[4]) || 0
        }) : 3 === c.length ? ek[a] = {id: c.slice(0, 2).join("."), eg: Number(c[2]) || 0} : dk[a] = b
    }

    function fk(a) {
        return (a || "_gcl") + "_au"
    }

    function lk(a) {
        Ti() || a();
        Xi(function () {
            Qi("ad_storage") && a();
            Yi(a, "ad_storage")
        }, ["ad_storage"])
    }

    function mk(a) {
        var b = Qj(!0), c = fk(a.prefix);
        lk(function () {
            var d = b[c];
            if (d) {
                kk(c, d);
                var e = 1E3 * Number(dk[c].split(".")[1]);
                if (e) {
                    wb("TAGGING", 16);
                    var f = xj(a, e);
                    f.qb = "ad_storage";
                    var g = wj(d, "1", a.domain, a.path);
                    oj(c, g, f)
                }
            }
        })
    }

    function nk(a, b, c, d) {
        d = d || {};
        var e = function () {
            var f = fk(d.prefix), g = {}, h = vj(f, d.path, d.domain, ck, "ad_storage");
            if (!h) return g;
            g[f] = h;
            return g
        };
        lk(function () {
            Wj(e, a, b, c)
        })
    };var ok = [];
    ok[7] = !0;
    ok[9] = !0;
    ok[27] = !0;
    ok[11] = !0;
    ok[13] = !0;
    ok[15] = !0;
    ok[16] = !0;
    ok[25] = !0;
    ok[36] = !0;
    ok[38] = !0;
    ok[40] = !0;
    ok[43] = !0;
    ok[45] = !0;
    ok[52] = !0;
    ok[57] = !0;
    ok[58] = !0;
    ok[60] = !0;
    ok[61] = !0;
    ok[68] = !0;
    ok[69] = !0;
    ok[72] = !0;
    ok[76] = !0;
    ok[77] = !0;

    ok[83] = !0;
    ok[84] = !0;
    var U = function (a) {
        return !!ok[a]
    };
    var qk = pk();

    function pk() {
        if (!U(87)) return {};
        try {
            return JSON.parse(atob("eyIwIjoiVVMiLCIxIjoiVVMtV0EiLCIyIjpmYWxzZSwiMyI6IiIsIjQiOiIiLCI1Ijp0cnVlfQ"))
        } catch (a) {
            return Q(123), {}
        }
    }

    var rk = {Sj: "US", Vk: "US-WA", uk: "true", dk: ""}, sk = function () {
        var a;
        return U(87) ? null != (a = qk["0"]) ? a : "" : rk.Sj
    }, tk = function () {
        var a;
        return U(87) ? null != (a = qk["1"]) ? a : "" : rk.Vk
    }, uk = function () {
        var a = "";
        return a
    }, vk = function () {
        var a = !1;
        var b;
        a = U(87) ? null != (b = qk["5"]) ? b : !1 : "true" === rk.uk;
        return a
    };
    var wk, xk = !1;

    function yk() {
        xk = !0;
        wk = productSettings, productSettings = void 0;
        wk = wk || {}
    }

    var zk = function (a) {
        xk || yk();
        return wk[a]
    };
    var Ak = function () {
        var a = z.screen;
        return {width: a ? a.width : 0, height: a ? a.height : 0}
    }, Bk = function (a) {
        if (I.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
        var c = z.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity, g = e.filter;
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
    var Lk = function (a, b, c) {
        if (a) {
            var d = a.element, e = {eb: a.eb, tagName: d.tagName, type: 1};
            b && (e.querySelector = Kk(d));
            c && (e.isVisible = !Bk(d));
            return e
        }
    }, Ok = function (a) {
        if (0 != a.length) {
            var b;
            b = Mk(a, function (c) {
                return !Nk.test(c.eb)
            });
            b = Mk(b, function (c) {
                return "INPUT" === c.element.tagName.toUpperCase()
            });
            b = Mk(b, function (c) {
                return !Bk(c.element)
            });
            return b[0]
        }
    }, Mk = function (a, b) {
        if (1 >= a.length) return a;
        var c = a.filter(b);
        return 0 == c.length ? a : c
    }, Kk = function (a) {
        var b;
        if (a === I.body) b = "body"; else {
            var c;
            if (a.id) c = "#" + a.id;
            else {
                var d;
                if (a.parentElement) {
                    var e;
                    a:{
                        var f = a.parentElement;
                        if (f) {
                            for (var g = 0; g < f.childElementCount; g++) if (f.children[g] === a) {
                                e = g + 1;
                                break a
                            }
                            e = -1
                        } else e = 1
                    }
                    d = Kk(a.parentElement) + ">:nth-child(" + e + ")"
                } else d = "";
                c = d
            }
            b = c
        }
        return b
    }, Pk = !0, Qk = !1;
    var Rk = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i, Sk = /@(gmail|googlemail)\./i, Nk = /support|noreply/i,
        Tk = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "), Uk = ["BR"], Vk = {}, Wk = function (a) {
            a = a || {vc: !0, wc: !0};
            a.nb = a.nb || {email: !0, phone: !0, address: !0};
            var b, c = a, d = !!c.vc + "." + !!c.wc;
            c && c.jd && c.jd.length && (d += "." + c.jd.join("."));
            c && c.nb && (d += "." + c.nb.email + "." + c.nb.phone + "." + c.nb.address);
            b = d;
            var e = Vk[b];
            if (e && 200 > Ua() - e.timestamp) return e.result;
            var f;
            var g = [], h = I.body;
            if (h) {
                for (var l = h.querySelectorAll("*"),
                         n = 0; n < l.length && 1E4 > n; n++) {
                    var p = l[n];
                    if (!(0 <= Tk.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                        for (var q = !1, r = 0; r < p.childElementCount && 1E4 > r; r++) if (!(0 <= Uk.indexOf(p.children[r].tagName.toUpperCase()))) {
                            q = !0;
                            break
                        }
                        q || g.push(p)
                    }
                }
                f = {elements: g, status: 1E4 < l.length ? "2" : "1"}
            } else f = {elements: g, status: "4"};
            var t = f, u = t.status, v = [], w;
            if (a.nb && a.nb.email) {
                for (var y = t.elements, x = [], A = 0; A < y.length; A++) {
                    var B = y[A], C = B.textContent;
                    "INPUT" === B.tagName.toUpperCase() && B.value && (C = B.value);
                    if (C) {
                        var D = C.match(Rk);
                        if (D) {
                            var H = D[0], G;
                            if (z.location) {
                                var O = Nf(z.location, "host", !0);
                                G = 0 <= H.toLowerCase().indexOf(O)
                            } else G = !1;
                            G || x.push({element: B, eb: H})
                        }
                    }
                }
                var R = a && a.jd;
                if (R && 0 !== R.length) {
                    for (var aa = [], pa = 0; pa < x.length; pa++) {
                        for (var P = !0, S = 0; S < R.length; S++) {
                            var ka = R[S];
                            if (ka && dh(x[pa].element, ka)) {
                                P = !1;
                                break
                            }
                        }
                        P && aa.push(x[pa])
                    }
                    v = aa
                } else v = x;
                w = Ok(v);
                10 < x.length && (u = "3")
            }
            var ca = [];
            !a.vi && w && (v = [w]);
            for (var ba = 0; ba < v.length; ba++) ca.push(Lk(v[ba], a.vc, a.wc));
            var Fa = {
                elements: ca.slice(0, 10), og: Lk(w,
                    a.vc, a.wc), status: u
            };
            Vk[b] = {timestamp: Ua(), result: Fa};
            return Fa
        }, Xk = function (a) {
            return a.tagName + ":" + a.isVisible + ":" + a.eb.length + ":" + Sk.test(a.eb)
        };
    var Yk = function (a, b, c) {
        if (!c) return !1;
        var d = c.selector_type, e = String(c.value), f;
        if ("js_variable" === d) {
            e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
            for (var g = e.split(","), h = 0; h < g.length; h++) {
                var l = g[h].trim();
                if (l) {
                    if (0 === l.indexOf("dataLayer.")) f = yi(l.substring(10)); else {
                        var n = l.split(".");
                        f = z[n.shift()];
                        for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                    }
                    if (void 0 !== f) break
                }
            }
        } else if ("css_selector" === d && bh) {
            var q = ch(e);
            if (q && 0 < q.length) {
                f = [];
                for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(uc(q[r]) ||
                    Sa(q[r].value));
                f = 1 === f.length ? f[0] : f
            }
        }
        return f ? (a[b] = f, !0) : !1
    }, Zk = function (a) {
        if (a) {
            var b = {}, c = !1;
            c = Yk(b, "email", a.email) || c;
            c = Yk(b, "phone_number", a.phone) || c;
            b.address = [];
            for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                var f = {};
                c = Yk(f, "first_name", d[e].first_name) || c;
                c = Yk(f, "last_name", d[e].last_name) || c;
                c = Yk(f, "street", d[e].street) || c;
                c = Yk(f, "city", d[e].city) || c;
                c = Yk(f, "region", d[e].region) || c;
                c = Yk(f, "country", d[e].country) || c;
                c = Yk(f, "postal_code", d[e].postal_code) || c;
                b.address.push(f)
            }
            return c ?
                b : void 0
        }
    }, $k = function (a) {
        return a.D[T.g.zf]
    }, al = function (a) {
        var b = V(a, T.g.Rc) || {}, c = !1;
        m(b, function (d, e) {
            var f = e.enhanced_conversions_mode;
            if ("automatic" === f || "manual" === f) c = !0
        });
        return c
    }, bl = function (a) {
        if (!Qc(a)) return !1;
        var b = a.mode;
        return "auto_detect" === b || "selectors" === b || "code" === b || !!a.enable_code
    }, cl = function (a) {
        if (a) {
            if ("selectors" === a.mode || Qc(a.selectors)) return Zk(a.selectors);
            if ("auto_detect" === a.mode || Qc(a.auto_detect)) {
                var b;
                var c = a.auto_detect;
                if (c) {
                    var d = Wk({
                        vc: !1, wc: !1, jd: c.exclude_element_selectors,
                        nb: {email: !!c.email, phone: !!c.phone, address: !!c.address}
                    }).elements, e = {};
                    if (0 < d.length) for (var f = 0; f < d.length; f++) {
                        var g = d[f];
                        if (1 === g.type) {
                            e.email = g.eb;
                            break
                        }
                    }
                    b = e
                } else b = void 0;
                return b
            }
        }
    };
    var dl = function (a) {
        var b = a && a[T.g.Rg];
        return b && b[T.g.Xi]
    }, el = function () {
        return -1 !== gc.userAgent.toLowerCase().indexOf("firefox")
    }, fl = function (a) {
        if (a && a.length) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) :
                    b.push("")
            }
            return b.join(",")
        }
    };

    function gl() {
    }

    function hl() {
    };

    function il(a) {
        for (var b = [], c = 0; c < jl.length; c++) {
            var d = a(jl[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }

    var jl = [T.g.K, T.g.W], kl = function (a) {
        var b = a[T.g.Re];
        b && Q(40);
        var c = a[T.g.Se];
        c && Q(41);
        for (var d = Ia(b) ? b : [b], e = {Bc: 0}; e.Bc < d.length; e = {Bc: e.Bc}, ++e.Bc) m(a, function (f) {
            return function (g, h) {
                if (g !== T.g.Re && g !== T.g.Se) {
                    var l = d[f.Bc], n = sk(), p = tk();
                    Ji().set(g, h, l, n, p, c)
                }
            }
        }(e))
    }, ll = function (a, b) {
        m(a, function (c, d) {
            Ji().update(c, d)
        });
        Wi(b.eventId, b.priorityId)
    }, ml = function (a) {
        var b = Qi(a);
        return void 0 != b ? b : !0
    }, nl = function () {
        return "G1" + il(Qi)
    }, ol = function (a, b) {
        Vi(a, b)
    }, pl = function (a, b) {
        Yi(a, b)
    }, ql = function (a,
                      b) {
        Xi(a, b)
    };
    var rl = function () {
        Zh.dedupe_gclid || (Zh.dedupe_gclid = "" + sj());
        return Zh.dedupe_gclid
    };
    var sl = function () {
        var a = !1;
        return a
    };
    var L = {F: "GTM-P528B3", hb: "2703797"}, tl = {ki: "GTM-P528B3", li: "GTM-P528B3"};
    L.Df = Qa("");
    var ul = function () {
        return tl.ki ? tl.ki.split("|") : [L.F]
    }, vl = function () {
        return tl.li ? tl.li.split("|") : []
    }, Nl = function () {
        this.container = {};
        this.destination = {};
        this.canonical = {}
    }, Pl = function () {
        for (var a = Ol(), b = ul(), c = 0; c < b.length; c++) {
            var d = a.container[b[c]];
            !d || Ga(d) ? a.container[b[c]] = {state: 2} : d.state = 2
        }
        for (var e = vl(), f = 0; f < e.length; f++) {
            var g = a.destination[e[f]];
            g && 0 === g.state && Q(93);
            g ? g.state = 2 : a.destination[e[f]] = {state: 2}
        }
        a.canonical[L.hb] = 2
    }, Ql = function (a) {
        return !!Ol().container[a]
    }, Rl = function () {
        var a =
            Ol().container, b;
        for (b in a) if (a.hasOwnProperty(b)) {
            var c = a[b];
            if (Ga(c)) {
                if (1 === c) return !0
            } else if (1 === c.state) return !0
        }
        return !1
    }, Sl = function () {
        var a = {};
        m(Ol().destination, function (b, c) {
            0 === c.state && (a[b] = c)
        });
        return a
    };

    function Ol() {
        var a = Zh.tidr;
        a || (a = new Nl, Zh.tidr = a);
        return a
    }

    var Tl = {"": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", GT: "t", HA: "h", MC: "m", GTM: "g", OPT: "o"},
        Ul = {UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7}, Vl = function (a) {
            var b = L.F.split("-"), c = b[0].toUpperCase();
            if (U(45)) {
                var d = {};
                d.Uj = L.F;
                d.Zk = Yh.cd;
                d.bl = Yh.nc;
                d.Hk = L.Df ? 2 : 1;
                ei ? (d.Me = Ul[c], d.Me || (d.Me = 0)) : d.Me = ki ? 13 : 10;
                ii ? d.gg = 1 : sl() ? d.gg = 2 : d.gg = 3;
                var e;
                var f = d.Me, g = d.gg;
                void 0 === f ? e = "" : (g || (g = 0), e = "" + ng(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f << 2 | g]);
                var h = d.Il, l = 4 + e + (h ? "" + ng(2,
                    1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h] : ""), n, p = d.bl;
                n = p && mg.test(p) ? "" + ng(3, 2) + p : "";
                var q, r = d.Zk;
                q = r ? "" + ng(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[r] : "";
                var t;
                var u = d.Uj;
                if (u && a) {
                    var v = u.split("-"), w = v[0].toUpperCase();
                    if ("GTM" !== w && "OPT" !== w) t = ""; else {
                        var y = v[1];
                        t = "" + ng(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1 + y.length] + (d.Hk || 0) + y
                    }
                } else t = "";
                return l + n + q + t
            }
            var x = Tl[c] || "i", A = a && "GTM" === c ? b[1] : "OPT" ===
            c ? b[1] : "", B = "w";
            ei && (B = sl() ? "s" : "o");
            gi ? ("w" === B && (B = "x"), "o" === B && (B = "q")) : ii ? ("w" === B && (B = "y"), "o" === B && (B = "r")) : ki && (B = "z");
            return "2" + B + x + (4 === Yh.nc.length ? Yh.nc.slice(1) : Yh.nc) + A
        };

    function Wl(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };var Xl = function (a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function Yl() {
        return Hb ? !!Ob && !!Ob.platform : !1
    }

    function Zl() {
        return Rb("iPhone") && !Rb("iPod") && !Rb("iPad")
    }

    function $l() {
        Zl() || Rb("iPad") || Rb("iPod")
    };Tb();
    Sb() || Rb("Trident") || Rb("MSIE");
    Rb("Edge");
    !Rb("Gecko") || -1 != Nb().toLowerCase().indexOf("webkit") && !Rb("Edge") || Rb("Trident") || Rb("MSIE") || Rb("Edge");
    -1 != Nb().toLowerCase().indexOf("webkit") && !Rb("Edge") && Rb("Mobile");
    Yl() || Rb("Macintosh");
    Yl() || Rb("Windows");
    (Yl() ? "Linux" === Ob.platform : Rb("Linux")) || Yl() || Rb("CrOS");
    var am = qa.navigator || null;
    am && (am.appVersion || "").indexOf("X11");
    Yl() || Rb("Android");
    Zl();
    Rb("iPad");
    Rb("iPod");
    $l();
    Nb().toLowerCase().indexOf("kaios");
    var bm = function (a, b, c, d) {
        for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
            var g = a.charCodeAt(e - 1);
            if (38 == g || 63 == g) {
                var h = a.charCodeAt(e + f);
                if (!h || 61 == h || 38 == h || 35 == h) return e
            }
            e += f + 1
        }
        return -1
    }, cm = /#|$/, dm = function (a, b) {
        var c = a.search(cm), d = bm(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }, em = /[?&]($|#)/, fm = function (a, b, c) {
        for (var d, e = a.search(cm), f = 0, g, h = []; 0 <= (g = bm(a, f, b, e));) h.push(a.substring(f,
            g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
        h.push(a.slice(f));
        d = h.join("").replace(em, "$1");
        var l, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
        var p = b + n;
        if (p) {
            var q, r = d.indexOf("#");
            0 > r && (r = d.length);
            var t = d.indexOf("?"), u;
            0 > t || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
            q = [d.slice(0, t), u, d.slice(r)];
            var v = q[1];
            q[1] = p ? v ? v + "&" + p : p : v;
            l = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
        } else l = d;
        return l
    };
    var gm = function (a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a:{
                try {
                    Fi(a.foo);
                    b = !0;
                    break a
                } catch (c) {
                }
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }, hm = function (a, b) {
        if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };

    function im(a) {
        if (!a || !I.head) return null;
        var b = jm("META");
        I.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }

    var km = function () {
        if (z.top == z) return 0;
        var a = z.location.ancestorOrigins;
        return a ? a[a.length - 1] == z.location.origin ? 1 : 2 : gm(z.top) ? 1 : 2
    }, jm = function (a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };

    function lm(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = jm("IMG", a.document);
        if (c) {
            var f = function () {
                if (c) {
                    var g = a.google_image_requests, h = zb(g, e);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            Xl(e, "load", f);
            Xl(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }

    var nm = function (a) {
        var b;
        b = void 0 === b ? !1 : b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
        hm(a, function (d, e) {
            d && (c += "&" + e + "=" + encodeURIComponent(d))
        });
        mm(c, b)
    }, mm = function (a, b) {
        var c = window, d;
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? !1 : d;
        if (c.fetch) {
            var e = {keepalive: !0, credentials: "include", redirect: "follow", method: "get", mode: "no-cors"};
            d && (e.mode = "cors", e.headers = {"Attribution-Reporting-Eligible": "event-source"});
            c.fetch(a, e)
        } else lm(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
    };
    var om = function () {
    };
    var pm = function (a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }, qm = function (a, b) {
        b = void 0 === b ? {} : b;
        this.B = a;
        this.h = null;
        this.N = {};
        this.fb = 0;
        var c;
        this.U = null != (c = b.ul) ? c : 500;
        var d;
        this.H = null != (d = b.Jl) ? d : !1;
        this.D = null
    };
    oa(qm, om);
    qm.prototype.addEventListener = function (a) {
        var b = this, c = {internalBlockOnErrors: this.H}, d = bj(function () {
            return a(c)
        }), e = 0;
        -1 !== this.U && (e = setTimeout(function () {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.U));
        var f = function (g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = pm(c), c.internalBlockOnErrors = b.H, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            rm(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    qm.prototype.removeEventListener = function (a) {
        a && a.listenerId && rm(this, "removeEventListener", null, a.listenerId)
    };
    var tm = function (a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a:{
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
        if (0 === h) if (a.purpose && a.vendor) {
            var n = sm(a.vendor.consents, void 0 === d ? "755" : d);
            l = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && sm(a.purpose.consents, b)
        } else l = !0; else l = 1 === h ? a.purpose && a.vendor ? sm(a.purpose.legitimateInterests,
            b) && sm(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return l
    }, sm = function (a, b) {
        return !(!a || !a[b])
    }, rm = function (a, b, c, d) {
        c || (c = function () {
        });
        if ("function" === typeof a.B.__tcfapi) {
            var e = a.B.__tcfapi;
            e(b, 2, c, d)
        } else if (um(a)) {
            vm(a);
            var f = ++a.fb;
            a.N[f] = c;
            if (a.h) {
                var g = {};
                a.h.postMessage((g.__tcfapiCall = {command: b, version: 2, callId: f, parameter: d}, g), "*")
            }
        } else c({}, !1)
    }, um = function (a) {
        if (a.h) return a.h;
        var b;
        a:{
            for (var c = a.B, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames.__tcfapiLocator)
                } catch (h) {
                    e =
                        !1
                }
                if (e) {
                    b = c;
                    break a
                }
                var f;
                b:{
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break b
                        }
                    } catch (h) {
                    }
                    f = null
                }
                if (!(c = f)) break
            }
            b = null
        }
        a.h = b;
        return a.h
    }, vm = function (a) {
        a.D || (a.D = function (b) {
            try {
                var c;
                c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.N[c.callId](c.returnValue, c.success)
            } catch (d) {
            }
        }, Xl(a.B, "message", a.D))
    }, wm = function (a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = pm(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
            (nm({e: String(a.internalErrorState)}), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    };
    var xm = {1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3}, ym = Wl('', 500);

    function zm() {
        var a = Zh.tcf || {};
        return Zh.tcf = a
    }

    var Dm = function () {
        var a = zm(), b = new qm(z, {ul: -1});
        if (!0 === z.gtag_enable_tcf_support && !a.active && ("function" === typeof z.__tcfapi || "function" === typeof b.B.__tcfapi || null != um(b))) {
            a.active = !0;
            a.Ie = {};
            Am();
            a.tcString = "tcunavailable";
            try {
                b.addEventListener(function (c) {
                    if (0 !== c.internalErrorState) Bm(a), Cm(a); else {
                        var d;
                        a.gdprApplies = c.gdprApplies;
                        if (!1 === c.gdprApplies) {
                            var e = {}, f;
                            for (f in xm) xm.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if ("tcloaded" === c.eventStatus || "useractioncomplete" ===
                            c.eventStatus || "cmpuishown" === c.eventStatus) {
                            var g = {}, h;
                            for (h in xm) if (xm.hasOwnProperty(h)) if ("1" === h) {
                                var l, n = c, p = !0;
                                p = void 0 === p ? !1 : p;
                                l = wm(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : tm(n, "1", 0) : !1;
                                g["1"] = l
                            } else g[h] = tm(c, h, xm[h]);
                            d = g
                        }
                        d && (a.tcString = c.tcString || "tcempty", a.Ie = d, Cm(a))
                    }
                })
            } catch (c) {
                Bm(a), Cm(a)
            }
        }
    };

    function Bm(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function Am() {
        var a = {}, b = (a.ad_storage = "denied", a.wait_for_update = ym, a);
        kl(b)
    }

    function Cm(a) {
        var b = {}, c = (b.ad_storage = a.Ie["1"] ? "granted" : "denied", b);
        ll(c, {eventId: 0}, {gdprApplies: a ? a.gdprApplies : void 0, tcString: Em()})
    }

    var Em = function () {
        var a = zm();
        return a.active ? a.tcString || "" : ""
    }, Fm = function () {
        var a = zm();
        return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
    }, Gm = function (a) {
        if (!xm.hasOwnProperty(String(a))) return !0;
        var b = zm();
        return b.active && b.Ie ? !!b.Ie[String(a)] : !0
    };
    var Hm = function (a) {
        var b = String(a[je.Wa] || "").replace(/_/g, "");
        0 === b.indexOf("cvt") && (b = "cvt");
        return b
    }, Im = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
    var Jm = ["L", "S", "Y"], Km = ["S", "E"], Lm = {sampleRate: "0.005000", Gi: "", Fi: Number("5"), Ei: Number("")},
        Mm;
    if (!(Mm = Im)) {
        var Nm = Math.random(), Om = Lm.sampleRate;
        Mm = Nm < Om
    }
    var Pm = Mm, Qm = "https://www.googletagmanager.com/a?id=" + L.F + "&cv=460",
        Rm = {label: L.F + " Container", children: [{label: "Initialization", children: []}]};

    function Sm() {
        return [Qm, "&v=3&t=t", "&pid=" + La(), "&rv=" + Yh.nc].join("")
    }

    var Tm = Sm();

    function Um() {
        Tm = Sm()
    }

    var Vm = {}, Wm = "", Xm = "", Ym = "", Zm = "", $m = [], an = "", bn = {}, cn = !1, dn = {}, en = {}, fn = {},
        gn = "", hn = void 0, jn = {}, kn = {}, ln = void 0, mn = 5;
    0 < Lm.Fi && (mn = Lm.Fi);
    var nn = function (a, b) {
        for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
        return {
            yk: function () {
                return c < a ? !1 : Ua() - d[c % a] < b
            }, Wk: function () {
                var f = c++ % a;
                d[f] = Ua()
            }
        }
    }(mn, 1E3), on = 1E3, pn = "";

    function qn(a) {
        var b = hn;
        if (void 0 === b) return "";
        var c = yb("GTM"), d = yb("TAGGING"), e = yb("HEALTH"), f = Tm, g = Vm[b] ? "" : "&es=1", h = jn[b], l = rn(b),
            n = sn(), p = Wm, q = Xm, r = gn, t = tn(a), u = Ym, v = Zm, w;
        return [f, g, h, l, c ? "&u=" + c : "", d ? "&ut=" + d : "", e ? "&h=" + e : "", n, p, q, r, t, u, v, w, an ? "&dl=" + encodeURIComponent(an) : "", 0 < $m.length ? "&tdp=" + $m.join(".") : "", Yh.cd ?
            "&x=" + Yh.cd : "", "&z=0"].join("")
    }

    function vn() {
        ln && (z.clearTimeout(ln), ln = void 0);
        if (void 0 !== hn && (!Vm[hn] || Wm || Xm)) if (kn[hn] || nn.yk() || 0 >= on--) Q(1), kn[hn] = !0; else {
            nn.Wk();
            var a = qn(!0);
            qc(a);
            if (Zm || an && 0 < $m.length) {
                var b = a.replace("/a?", "/td?");
                qc(b)
            }
            Vm[hn] = !0;
            an = Zm = Ym = gn = Xm = Wm = "";
            $m = []
        }
    }

    function wn() {
        ln || (ln = z.setTimeout(vn, 500))
    }

    function xn(a) {
        return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*"
    }

    function yn() {
        2022 <= qn().length && vn()
    }

    function sn() {
        return "&tc=" + Ke.filter(function (a) {
            return a
        }).length
    }

    var An = function (a, b) {
        if (Pm && !kn[a] && hn !== a) {
            vn();
            hn = a;
            Ym = Wm = "";
            jn[a] = "&e=" + xn(b) + "&eid=" + a;
            wn();
        }
    }, Bn = function (a, b, c, d) {
        if (Pm && b) {
            var e = Hm(b), f = c + e;
            if (!kn[a]) {
                a !== hn && (vn(), hn = a);
                Wm = Wm ? Wm + "." + f : "&tr=" + f;
                var g = b["function"];
                if (!g) throw Error("Error: No function name given for function call.");
                var h = (Me[g] ? "1" : "2") + e;
                Ym = Ym ? Ym + "." + h : "&ti=" + h;
                wn();
                yn()
            }
        }
    }, Cn = function (a, b, c) {
        if (Pm && a && a[je.Bb]) {
            var d = b + "." + a[je.Bb];
            fn[d] = c;
            "html" == Hm(a) && pn == d && (Wm += ":" + Math.floor(c))
        }
    };

    function tn(a) {
    }

    function rn(a) {
    }

    var Jn = function (a, b, c) {
        if (Pm && void 0 !== a && !kn[a]) {
            a !== hn && (vn(), hn = a);
            var d = c + b;
            Xm = Xm ? Xm + "." + d : "&epr=" + d;
            wn();
            yn()
        }
    }, Kn = function (a, b, c) {
    }, un = void 0;
    var Ln = function (a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };
    Ub();
    Zl() || Rb("iPod");
    Rb("iPad");
    !Rb("Android") || Vb() || Ub() || Tb() || Rb("Silk");
    Vb();
    !Rb("Safari") || Vb() || (Sb() ? 0 : Rb("Coast")) || Tb() || (Sb() ? 0 : Rb("Edge")) || (Sb() ? Qb("Microsoft Edge") : Rb("Edg/")) || (Sb() ? Qb("Opera") : Rb("OPR")) || Ub() || Rb("Silk") || Rb("Android") || $l();
    var Mn = {}, Nn = null, On = function (a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        var f = 4;
        void 0 === f && (f = 0);
        if (!Nn) {
            Nn = {};
            for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], l = 0; 5 > l; l++) {
                var n = g.concat(h[l].split(""));
                Mn[l] = n;
                for (var p = 0; p < n.length; p++) {
                    var q = n[p];
                    void 0 === Nn[q] && (Nn[q] = p)
                }
            }
        }
        for (var r = Mn[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
            var y = b[v],
                x = b[v + 1], A = b[v + 2], B = r[y >> 2], C = r[(y & 3) << 4 | x >> 4], D = r[(x & 15) << 2 | A >> 6],
                H = r[A & 63];
            t[w++] = "" + B + C + D + H
        }
        var G = 0, O = u;
        switch (b.length - v) {
            case 2:
                G = b[v + 1], O = r[(G & 15) << 2] || u;
            case 1:
                var R = b[v];
                t[w] = "" + r[R >> 2] + r[(R & 3) << 4 | G >> 4] + O + u
        }
        return t.join("")
    };
    var Pn = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Qn(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function Rn() {
        var a = z.google_tag_data, b;
        if (null != a && a.uach) {
            var c = a.uach, d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function Sn() {
        var a, b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function Tn(a) {
        var b, c;
        return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function Un() {
        var a = z;
        if (!Tn(a)) return null;
        var b = Qn(a);
        if (b.uach_promise) return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(Pn).then(function (d) {
            null != b.uach || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    };
    var Vn, Wn = function () {
        if (Tn(z) && (Vn = Ua(), !Sn())) {
            var a = Un();
            a && (a.then(function () {
                Q(95);
            }), a.catch(function () {
                Q(96)
            }))
        }
    }, Yn = function (a) {
        var b = Xn.yl, c = function (g, h) {
            try {
                a(g, h)
            } catch (l) {
            }
        }, d = Rn();
        if (d) c(d); else {
            var e = Sn();
            if (e) {
                b =
                    Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                var f = z.setTimeout(function () {
                    c.ud || (c.ud = !0, Q(106), c(null, Error("Timeout")))
                }, b);
                e.then(function (g) {
                    c.ud || (c.ud = !0, Q(104), z.clearTimeout(f), c(g))
                }).catch(function (g) {
                    c.ud || (c.ud = !0, Q(105), z.clearTimeout(f), c(null, g))
                })
            } else c(null)
        }
    }, Zn = function (a, b) {
        a && (b.C[T.g.rf] = a.architecture, b.C[T.g.sf] = a.bitness, a.fullVersionList && (b.C[T.g.tf] = a.fullVersionList.map(function (c) {
            return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
        }).join("|")),
            b.C[T.g.uf] = a.mobile ? "1" : "0", b.C[T.g.vf] = a.model, b.C[T.g.wf] = a.platform, b.C[T.g.xf] = a.platformVersion, b.C[T.g.yf] = a.wow64 ? "1" : "0")
    };
    var $n = function (a) {
        for (var b = [], c = I.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({xg: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0})
        }
        b.sort(function (g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };

    function ao(a, b) {
        var c = $n(a), d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].xg] || (d[c[e].xg] = []);
                var g = {version: f[0], timestamp: 1E3 * Number(f[1]), ia: f[2]};
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].xg].push(g)
            }
        }
        return d
    };var bo = /^\w+$/, co = /^[\w-]+$/, eo = {aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb"},
        fo = function () {
            if (!Hi().h() || !Ti()) return !0;
            var a = Qi("ad_storage");
            return null == a ? !0 : !!a
        }, go = function (a, b) {
            Si("ad_storage") ? fo() ? a() : Yi(a, "ad_storage") : b ? wb("TAGGING", 3) : Xi(function () {
                go(a, !0)
            }, ["ad_storage"])
        }, io = function (a) {
            return ho(a).map(function (b) {
                return b.ia
            })
        }, ho = function (a) {
            var b = [];
            if (!cj(z) || !I.cookie) return b;
            var c = fj(a, I.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d =
                {Gd: d.Gd}, e++) {
                var f = jo(c[e]);
                if (null != f) {
                    var g = f, h = g.version;
                    d.Gd = g.ia;
                    var l = g.timestamp, n = g.labels, p = Ka(b, function (q) {
                        return function (r) {
                            return r.ia === q.Gd
                        }
                    }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, l), p.labels = ko(p.labels, n || [])) : b.push({
                        version: h,
                        ia: d.Gd,
                        timestamp: l,
                        labels: n
                    })
                }
            }
            b.sort(function (q, r) {
                return r.timestamp - q.timestamp
            });
            return lo(b)
        };

    function ko(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function mo(a) {
        return a && "string" == typeof a && a.match(bo) ? a : "_gcl"
    }

    var oo = function () {
        var a = Qf(z.location.href), b = Of(a, "query", !1, void 0, "gclid"), c = Of(a, "query", !1, void 0, "gclsrc"),
            d = Of(a, "query", !1, void 0, "wbraid"), e = Of(a, "query", !1, void 0, "dclid");
        if (!b || !c || !d) {
            var f = a.hash.replace("#", "");
            b = b || Lf(f, "gclid", !1);
            c = c || Lf(f, "gclsrc", !1);
            d = d || Lf(f, "wbraid", !1)
        }
        return no(b, c, e, d)
    }, no = function (a, b, c, d) {
        var e = {}, f = function (g, h) {
            e[h] || (e[h] = []);
            e[h].push(g)
        };
        e.gclid = a;
        e.gclsrc = b;
        e.dclid = c;
        void 0 !== d && co.test(d) && (e.gbraid = d, f(d, "gb"));
        if (void 0 !== a && a.match(co)) switch (b) {
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
    }, qo = function (a) {
        var b = oo();
        go(function () {
            po(b, !1, a)
        })
    };

    function po(a, b, c, d, e) {
        function f(w, y) {
            var x = ro(w, g);
            x && (oj(x, y, h), l = !0)
        }

        c = c || {};
        e = e || [];
        var g = mo(c.prefix);
        d = d || Ua();
        var h = xj(c, d, !0);
        h.qb = "ad_storage";
        var l = !1, n = Math.round(d / 1E3), p = function (w) {
            var y = ["GCL", n, w];
            0 < e.length && y.push(e.join("."));
            return y.join(".")
        };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!l && a.gb) {
            var q = a.gb[0], r = ro("gb", g), t = !1;
            if (!b) for (var u = ho(r), v = 0; v < u.length; v++) u[v].ia === q && u[v].labels &&
            0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }

    var to = function (a, b) {
        var c = Qj(!0);
        go(function () {
            for (var d = mo(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== eo[f]) {
                    var g = ro(f, d), h = c[g];
                    if (h) {
                        var l = Math.min(so(h), Ua()), n;
                        b:{
                            var p = l;
                            if (cj(z)) for (var q = fj(g, I.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r) if (so(q[r]) > p) {
                                n = !0;
                                break b
                            }
                            n = !1
                        }
                        if (!n) {
                            var t = xj(b, l, !0);
                            t.qb = "ad_storage";
                            oj(g, h, t)
                        }
                    }
                }
            }
            po(no(c.gclid, c.gclsrc), !1, b)
        })
    }, ro = function (a, b) {
        var c = eo[a];
        if (void 0 !== c) return b + c
    }, so = function (a) {
        return 0 !== uo(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
            0) : 0
    };

    function jo(a) {
        var b = uo(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            ia: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function uo(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !co.test(a[2]) ? [] : a
    }

    var vo = function (a, b, c, d, e) {
        if (Ia(b) && cj(z)) {
            var f = mo(e), g = function () {
                for (var h = {}, l = 0; l < a.length; ++l) {
                    var n = ro(a[l], f);
                    if (n) {
                        var p = fj(n, I.cookie, void 0, "ad_storage");
                        p.length && (h[n] = p.sort()[p.length - 1])
                    }
                }
                return h
            };
            go(function () {
                Wj(g, b, c, d)
            })
        }
    }, lo = function (a) {
        return a.filter(function (b) {
            return co.test(b.ia)
        })
    }, wo = function (a, b) {
        if (cj(z)) {
            for (var c = mo(b.prefix), d = {}, e = 0; e < a.length; e++) eo[a[e]] && (d[a[e]] = eo[a[e]]);
            go(function () {
                m(d, function (f, g) {
                    var h = fj(c + g, I.cookie, void 0, "ad_storage");
                    h.sort(function (t,
                                     u) {
                        return so(u) - so(t)
                    });
                    if (h.length) {
                        var l = h[0], n = so(l), p = 0 !== uo(l.split(".")).length ? l.split(".").slice(3) : [], q = {},
                            r;
                        r = 0 !== uo(l.split(".")).length ? l.split(".")[2] : void 0;
                        q[f] = [r];
                        po(q, !0, b, n, p)
                    }
                })
            })
        }
    };

    function xo(a, b) {
        for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
        return !1
    }

    var yo = function (a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }

        if (Ti()) {
            var c = oo();
            if (xo(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                Xj(function () {
                    return d
                }, 3);
                Xj(function () {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    }, zo = function (a, b, c, d) {
        var e = [];
        c = c || {};
        if (!fo()) return e;
        var f = ho(a);
        if (!f.length) return e;
        for (var g = 0; g < f.length; g++) -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
        if (d) return e;
        if (1 !== e[0]) {
            var h = f[0], l = f[0].timestamp, n = [h.version, Math.round(l /
                1E3), h.ia].concat(h.labels || [], [b]).join("."), p = xj(c, l, !0);
            p.qb = "ad_storage";
            oj(a, n, p)
        }
        return e
    };

    function Ao(a, b) {
        var c = mo(b), d = ro(a, c);
        if (!d) return 0;
        for (var e = ho(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Bo(a) {
        var b = 0, c;
        for (c in a) for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }

    var Co = function (a) {
        var b = Math.max(Ao("aw", a), Bo(fo() ? ao() : {}));
        return Math.max(Ao("gb", a), Bo(fo() ? ao("_gac_gb", !0) : {})) > b
    };
    var Do = function (a, b) {
        var c = a && !ml(T.g.K);
        return b && c ? "0" : b
    }, Go = function (a) {
        function b(u) {
            var v;
            Zh.reported_gclid || (Zh.reported_gclid = {});
            v = Zh.reported_gclid;
            var w, y = g;
            w = !g || Ti() && !ml(T.g.K) ? l + (u ? "gcu" : "gcs") : l + "." + (f.prefix || "_gcl") + (u ? "gcu" : "gcs");
            if (!v[w]) {
                v[w] = !0;
                var x = [], A = {}, B = function (pa, P) {
                    P && (x.push(pa + "=" + encodeURIComponent(P)), A[pa] = !0)
                }, C = "https://www.google.com";
                if (Ti()) {
                    var D = ml(T.g.K);
                    B("gcs", nl());
                    u && B("gcu", "1");
                    Ui() && B("gcd", "G1" + il(Ri));
                    B("rnd", rl());
                    if ((!l || n && "aw.ds" !== n) && ml(T.g.K)) {
                        var H = io("_gcl_aw");
                        B("gclaw", H.join("."))
                    }
                    B("url", String(z.location).split(/[?#]/)[0]);
                    B("dclid", Do(d, p));
                    D || (C = "https://pagead2.googlesyndication.com")
                }
                B("gdpr_consent", Em());
                B("gdpr", Fm());
                "1" === Qj(!1)._up && B("gtm_up", "1");
                B("gclid", Do(d, l));
                B("gclsrc", n);
                if (!(A.gclid || A.dclid || A.gclaw) && (B("gbraid", Do(d, q)), !A.gbraid && Ti() && ml(T.g.K))) {
                    var G = io("_gcl_gb");
                    0 < G.length && B("gclgb", G.join("."))
                }
                B("gtm",
                    Vl(!e));
                g && ml(T.g.K) && (jk(f || {}), y && B("auid", dk[fk(f.prefix)] || ""));
                Fo || a.bi && B("did", a.bi);
                a.Uf && B("gdid", a.Uf);
                a.Qf && B("edid", a.Qf);
                var O = U(64) ? Rn() : null;
                if (O) {
                    var R = function (pa, P) {
                        x.push(pa + "=" + encodeURIComponent(P));
                        A[pa] = !0
                    };
                    R("uaa", O.architecture);
                    R("uab", O.bitness);
                    O.fullVersionList && R("uafvl", O.fullVersionList.map(function (pa) {
                        return encodeURIComponent(pa.brand || "") + ";" + encodeURIComponent(pa.version || "")
                    }).join("|"));
                    R("uam", O.model);
                    R("uap", O.platform);
                    R("uapv", O.platformVersion);
                    R("uaw",
                        O.wow64 ? "1" : "0")
                }
                var aa = C + "/pagead/landing?" + x.join("&");
                yc(aa)
            }
        }

        var c = !!a.Kf, d = !!a.Le, e = a.ca, f = void 0 === a.sc ? {} : a.sc, g = void 0 === a.Ge ? !0 : a.Ge,
            h = oo(), l = h.gclid || "", n = h.gclsrc, p = h.dclid || "", q = h.gbraid || "",
            r = !c && ((!l || n && "aw.ds" !== n ? !1 : !0) || q), t = Ti();
        if (r || t) t ? ql(function () {
            b();
            ml(T.g.K) || pl(function (u) {
                return b(!0, u.consentEventId, u.consentPriorityId)
            }, T.g.K)
        }, [T.g.K]) : b()
    }, Eo = function (a) {
        var b = String(z.location).split(/[?#]/)[0], c = Yh.Li || z._CONSENT_MODE_SALT;
        return a ? c ? String(Zi(b + a + c)) : "0" : ""
    }, Fo =
        !1;
    var Ho = /[A-Z]+/, Io = /\s/, Jo = function (a) {
        if (k(a)) {
            a = Sa(a);
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if (Ho.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++) if (!d[e] || Io.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                    return {id: a, prefix: c, X: c + "-" + d[0], P: d}
                }
            }
        }
    }, Lo = function (a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            var d = Jo(a[c]);
            d && (b[d.id] = d)
        }
        Ko(b);
        var e = [];
        m(b, function (f, g) {
            e.push(g)
        });
        return e
    };

    function Ko(a) {
        var b = [], c;
        for (c in a) if (a.hasOwnProperty(c)) {
            var d = a[c];
            "AW" === d.prefix && d.P[1] && b.push(d.X)
        }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };var Mo = function (a, b, c, d) {
        var e = oc(), f;
        if (1 === e) a:{
            var g = mi;
            g = g.toLowerCase();
            for (var h = "https://" + g, l = "http://" + g, n = 1, p = I.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
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
        } else f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };
    var Oo = function (a, b, c) {
            if (z[a.functionName]) return b.jg && J(b.jg), z[a.functionName];
            var d = No();
            z[a.functionName] = d;
            if (a.ze) for (var e = 0; e < a.ze.length; e++) z[a.ze[e]] = z[a.ze[e]] || No();
            a.Fe && void 0 === z[a.Fe] && (z[a.Fe] = c);
            nc(Mo("https://", "http://", a.vg), b.jg, b.Mk);
            return d
        }, No = function () {
            var a = function () {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        }, Po = {functionName: "_googWcmImpl", Fe: "_googWcmAk", vg: "www.gstatic.com/wcm/loader.js"},
        Qo = {functionName: "_gaPhoneImpl", Fe: "ga_wpid", vg: "www.gstatic.com/gaphone/loader.js"},
        Ro = {Ii: "", Fj: "5"}, So = {
            functionName: "_googCallTrackingImpl",
            ze: [Qo.functionName, Po.functionName],
            vg: "www.gstatic.com/call-tracking/call-tracking_" + (Ro.Ii || Ro.Fj) + ".js"
        }, To = {}, Uo = function (a, b, c, d) {
            Q(22);
            if (c) {
                d = d || {};
                var e = Oo(Po, d, a), f = {ak: a, cl: b};
                void 0 === d.pb && (f.autoreplace = c);
                e(2, d.pb, f, c, 0, Ta(), d.options)
            }
        }, Vo = function (a, b, c, d) {
            Q(21);
            if (b && c) {
                d = d || {};
                for (var e = {countryNameCode: c, destinationNumber: b, retrievalTime: Ta()}, f = 0; f < a.length; f++) {
                    var g = a[f];
                    To[g.id] ||
                    (g && "AW" === g.prefix && !e.adData && 2 <= g.P.length ? (e.adData = {
                        ak: g.P[0],
                        cl: g.P[1]
                    }, To[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {gaWpid: g.X}, To[g.id] = !0))
                }
                (e.gaData || e.adData) && Oo(So, d)(d.pb, e, d.options)
            }
        }, Wo = function () {
            var a = !1;
            return a
        }, Xo = function (a, b) {
            if (a) if (sl()) {
            } else {
                if (k(a)) {
                    var c =
                        Jo(a);
                    if (!c) return;
                    a = c
                }
                var d = void 0, e = !1, f = V(b, T.g.lj);
                if (f && Ia(f)) {
                    d = [];
                    for (var g = 0; g < f.length; g++) {
                        var h = Jo(f[g]);
                        h && (d.push(h), (a.id === h.id || a.id === a.X && a.X === h.X) && (e = !0))
                    }
                }
                if (!d || e) {
                    var l = V(b, T.g.kh), n;
                    if (l) {
                        Ia(l) ? n = l : n = [l];
                        var p = V(b, T.g.ih), q = V(b, T.g.jh), r = V(b, T.g.lh), t = V(b, T.g.kj), u = p || q, v = 1;
                        "UA" !== a.prefix || d || (v = 5);
                        for (var w = 0; w < n.length; w++) if (w < v) if (d) Vo(d, n[w], t, {
                            pb: u,
                            options: r
                        }); else if ("AW" === a.prefix && a.P[1]) Wo() ? Vo([a], n[w], t || "US", {
                            pb: u,
                            options: r
                        }) : Uo(a.P[0], a.P[1], n[w], {pb: u, options: r});
                        else if ("UA" === a.prefix) if (Wo()) Vo([a], n[w], t || "US", {pb: u}); else {
                            var y = a.X, x = n[w], A = {pb: u};
                            Q(23);
                            if (x) {
                                A = A || {};
                                var B = Oo(Qo, A, y), C = {};
                                void 0 !== A.pb ? C.receiver = A.pb : C.replace = x;
                                C.ga_wpid = y;
                                C.destination = x;
                                B(2, Ta(), C)
                            }
                        }
                    }
                }
            }
        };
    var Yo = function (a, b, c) {
        this.target = a;
        this.eventName = b;
        this.s = c;
        this.C = {};
        this.metadata = K(c.eventMetadata || {});
        this.M = !1
    }, Zo = function (a, b, c) {
        var d = V(a.s, b);
        void 0 !== d ? a.C[b] = d : void 0 !== c && (a.C[b] = c)
    }, $o = function (a, b, c) {
        var d = zk(a.target.X);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };

    function ap(a) {
        return {
            getDestinationId: function () {
                return a.target.X
            }, getEventName: function () {
                return a.eventName
            }, setEventName: function (b) {
                return void (a.eventName = b)
            }, getHitData: function (b) {
                return a.C[b]
            }, setHitData: function (b, c) {
                return void (a.C[b] = c)
            }, setHitDataIfNotDefined: function (b, c) {
                void 0 === a.C[b] && (a.C[b] = c)
            }, copyToHitData: function (b, c) {
                Zo(a, b, c)
            }, getMetadata: function (b) {
                return a.metadata[b]
            }, setMetadata: function (b, c) {
                return void (a.metadata[b] = c)
            }, abort: function () {
                return void (a.M = !0)
            }, getProcessedEvent: function () {
                return a
            },
            getFromEventContext: function (b) {
                return V(a.s, b)
            }
        }
    };var cp = function (a) {
        var b = bp[a.target.X];
        if (!a.M && b) for (var c = ap(a), d = 0; d < b.length; ++d) {
            try {
                b[d](c)
            } catch (e) {
                a.M = !0
            }
            if (a.M) break
        }
    }, dp = function (a, b) {
        var c = bp[a];
        c || (c = bp[a] = []);
        c.push(b)
    }, bp = {};
    var gp = function (a) {
        a = a || {};
        var b;
        if (!Ti() || Qi(ep)) {
            (b = fp(a)) || (b = sj());
            var c = a, d = fk(c.prefix);
            hk(c, b);
            delete dk[d];
            delete ek[d];
            gk(d, c.path, c.domain);
            return fp(a)
        }
    }, fp = function (a) {
        if (!Ti() || Qi(ep)) {
            a = a || {};
            jk(a, !1);
            var b = ek[fk(mo(a.prefix))];
            if (b && !(18E5 < Ua() - 1E3 * b.eg)) {
                var c = b.id, d = c.split(".");
                if (2 === d.length && !(864E5 < Ua() - 1E3 * (Number(d[1]) || 0))) return c
            }
        }
    }, ep = T.g.K;
    var hp = function (a) {
            var b = [];
            m(a, function (c, d) {
                d = lo(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].ia);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        }, jp = function (a, b, c) {
            if ("aw" === a || "dc" === a || "gb" === a) {
                var d = Uf("gcl" + a);
                if (d) return d.split(".")
            }
            var e = mo(b);
            if ("_gcl" == e) {
                c = void 0 === c ? !0 : c;
                var f = !ml(ip) && c, g;
                g = oo()[a] || [];
                if (0 < g.length) return f ? ["0"] : g
            }
            var h = ro(a, e);
            return h ? io(h) : []
        }, kp = function (a, b) {
            Si(ip) ? ml(ip) ? a() : Yi(a, ip) : b ? Q(42) : ql(function () {
                kp(a, !0)
            }, [ip])
        }, ip = T.g.K, lp = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        mp = function (a, b) {
            return jp("aw", a, b)
        }, np = function (a, b) {
            return jp("dc", a, b)
        }, op = function (a) {
            var b = Uf("gac");
            return b ? !ml(ip) && a ? "0" : decodeURIComponent(b) : hp(fo() ? ao() : {})
        }, pp = function (a) {
            var b = Uf("gacgb");
            return b ? !ml(ip) && a ? "0" : decodeURIComponent(b) : hp(fo() ? ao("_gac_gb", !0) : {})
        }, qp = function (a) {
            var b = oo(), c = [], d = b.gclid, e = b.dclid, f = b.gclsrc || "aw";
            !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({ia: d, nd: f});
            e && c.push({ia: e, nd: "ds"});
            0 === c.length && b.gbraid && c.push({ia: b.gbraid, nd: "gb"});
            U(77) && 0 === c.length &&
            "aw.ds" === f && c.push({ia: "", nd: "aw.ds"});
            kp(function () {
                jk(a);
                var g = dk[fk(a.prefix)];
                if (g) {
                    var h = ["auid=" + g];
                    if (U(15)) {
                        var l = I.referrer ? Of(Qf(I.referrer), "host") : "";
                        0 === c.length && lp.test(l) && c.push({ia: "", nd: ""});
                        if (0 === c.length) return;
                        l && h.push("ref=" + encodeURIComponent(l));
                        var n = 1 === km() ? z.top.location.href : z.location.href;
                        n = n.replace(/[\?#].*$/, "");
                        h.push("url=" + encodeURIComponent(n));
                        h.push("tft=" + Ua());
                        var p = Ac();
                        void 0 !== p && h.push("tfd=" + Math.round(p));
                        if (U(76)) {
                            var q = km();
                            h.push("frm=" + q)
                        }
                    }
                    if (0 <
                        c.length) for (var r = Zh.joined_auid = Zh.joined_auid || {}, t = 0; t < c.length; t++) {
                        var u = c[t], v = u.ia, w = u.nd, y = (a.prefix || "_gcl") + "." + w + "." + v;
                        if (!r[y]) {
                            var x = "https://adservice.google.com/pagead/regclk?" + h.join("&");
                            "" !== v ? x = "gb" === w ? x + "&wbraid=" + v : x + "&gclid=" + v + "&gclsrc=" + w : "aw.ds" === w && (x += "&gclsrc=aw.ds");
                            yc(x);
                            r[y] = !0
                        }
                    }
                }
            })
        }, rp = function (a) {
            return Uf("gclaw") || Uf("gac") || 0 < (oo().aw || []).length ? !1 : 0 < (oo().gb || []).length ? !0 : Co(a)
        };
    var sp = function (a, b, c, d, e, f, g, h, l, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.N = d;
            this.B = e;
            this.H = f;
            this.U = g;
            this.D = h;
            this.eventMetadata = l;
            this.aa = n;
            this.Z = p;
            this.J = q
        }, V = function (a, b, c) {
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.N[b]) return a.N[b];
            if (void 0 !== a.B[b]) return a.B[b];
            Pm && tp(a, a.H[b], a.U[b]) && (Q(71), Q(79));
            return void 0 !== a.H[b] ? a.H[b] : void 0 !== a.D[b] ? a.D[b] : c
        }, up = function (a) {
            function b(g) {
                for (var h = Object.keys(g), l = 0; l < h.length; ++l) c[h[l]] = 1
            }

            var c = {};
            b(a.h);
            b(a.N);
            b(a.B);
            b(a.H);
            if (Pm) for (var d = Object.keys(a.U), e = 0; e < d.length; e++) {
                var f = d[e];
                if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                    Q(71);
                    Q(80);
                    break
                }
            }
            return Object.keys(c)
        }, vp = function (a, b, c) {
            function d(l) {
                Qc(l) && m(l, function (n, p) {
                    f = !0;
                    e[n] = p
                })
            }

            var e = {}, f = !1;
            c && 1 !== c || (d(a.D[b]), d(a.H[b]), d(a.B[b]), d(a.N[b]));
            c && 2 !== c || d(a.h[b]);
            if (Pm) {
                var g = f, h = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.D[b]), d(a.U[b]), d(a.B[b]), d(a.N[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== g || tp(a, e, h)) Q(71), Q(81);
                f = g;
                e = h
            }
            return f ? e : void 0
        },
        wp = function (a) {
            var b = [T.g.Kc, T.g.Sd, T.g.Td, T.g.Ud, T.g.Vd, T.g.Wd, T.g.Xd], c = {}, d = !1, e = function (h) {
                for (var l = 0; l < b.length; l++) void 0 !== h[b[l]] && (c[b[l]] = h[b[l]], d = !0);
                return d
            };
            if (e(a.h) || e(a.N) || e(a.B)) return c;
            e(a.H);
            if (Pm) {
                var f = c, g = d;
                c = {};
                d = !1;
                e(a.U);
                tp(a, c, f) && (Q(71), Q(82));
                c = f;
                d = g
            }
            if (d) return c;
            e(a.D);
            return c
        }, tp = function (a, b, c) {
            if (!Pm) return !1;
            try {
                if (b === c) return !1;
                var d = Oc(b);
                if (d !== Oc(c) || !(Qc(b) && Qc(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e = 0; e < b.length; e++) if (tp(a,
                        b[e], c[e])) return !0
                } else {
                    for (var f in c) if (!b.hasOwnProperty(f)) return !0;
                    for (var g in b) if (!c.hasOwnProperty(g) || tp(a, b[g], c[g])) return !0
                }
            } catch (h) {
                Q(72)
            }
            return !1
        }, xp = function (a, b) {
            this.tj = a;
            this.uj = b;
            this.H = {};
            this.Dh = {};
            this.h = {};
            this.N = {};
            this.B = {};
            this.Zc = {};
            this.D = {};
            this.Ec = function () {
            };
            this.fb = function () {
            };
            this.U = !1
        }, yp = function (a, b) {
            a.H = b;
            return a
        }, zp = function (a, b) {
            a.Dh = b;
            return a
        }, Ap = function (a, b) {
            a.h = b;
            return a
        }, Bp = function (a, b) {
            a.N = b;
            return a
        }, Cp = function (a, b) {
            a.B = b;
            return a
        }, Dp = function (a,
                          b) {
            a.Zc = b;
            return a
        }, Ep = function (a, b) {
            a.D = b || {};
            return a
        }, Fp = function (a, b) {
            a.Ec = b;
            return a
        }, Gp = function (a, b) {
            a.fb = b;
            return a
        }, Hp = function (a) {
            a.U = !0;
            return a
        }, Ip = function (a) {
            return new sp(a.tj, a.uj, a.H, a.Dh, a.h, a.N, a.B, a.Zc, a.D, a.Ec, a.fb, a.U)
        };
    var Kp = function (a, b) {
        var c = a.hi, d = a.Ai;
        a.Yh && (Zj(c[T.g.ic], !!c[T.g.V]) && (to(Jp, b), U(73) && mk(b)), qo(b), wo(Jp, b), qp(b));
        c[T.g.V] && (vo(Jp, c[T.g.V], c[T.g.jc], !!c[T.g.Lb], b.prefix), U(73) && nk(c[T.g.V], c[T.g.jc], !!c[T.g.Lb], b));
        d && yo(Jp)
    }, Lp = function (a, b, c, d) {
        var e = a.Di, f = a.callback, g = a.ji;
        if ("function" === typeof f) if (e === T.g.ac && void 0 === g) {
            var h = d(b.prefix, c);
            0 === h.length ? f(void 0) : 1 === h.length ? f(h[0]) : f(h)
        } else e === T.g.Nd ? (Q(65), jk(b, !1), f(dk[fk(b.prefix)])) : f(g)
    }, Jp = ["aw", "dc", "gb"];
    var Mp = function () {
        var a = gc && gc.userAgent || "";
        if (0 > a.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)) return !1;
        var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
        if ("" === b) return !1;
        for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
            if (void 0 === c[e]) return !0;
            if (d[e] != c[e]) return Number(d[e]) > Number(c[e])
        }
        return d.length >= c.length
    };

    function Np() {
        return "attribution-reporting"
    }

    function Op(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };var Pp = !1;

    function Qp() {
        if (Op("join-ad-interest-group") && Ea(gc.joinAdInterestGroup)) return !0;
        Pp || (im('A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Pp = !0);
        return Op("join-ad-interest-group") && Ea(gc.joinAdInterestGroup)
    }

    function Rp(a, b) {
        var c = void 0;
        try {
            c = I.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {
        }
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ua() - d) {
                wb("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= I.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                wb("TAGGING", 10);
                return
            }
        } catch (e) {
        }
        pc(a, void 0, {allow: "join-ad-interest-group"}, {taggingId: b, loadTime: Ua()}, c)
    }

    function Sp() {
        return U(60) ? "https://td.doubleclick.net" : "https://googleads.g.doubleclick.net"
    };var Tp = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        Up = /^~?[\w-]+(?:\.~?[\w-]+)*$/, Vp = /^\d+\.fls\.doubleclick\.net$/, Wp = /;gac=([^;?]+)/,
        Xp = /;gacgb=([^;?]+)/, Yp = /;gclaw=([^;?]+)/, Zp = /;gclgb=([^;?]+)/;

    function $p(a, b) {
        if (Vp.test(I.location.host)) {
            var c = I.location.href.match(b);
            return c && 2 == c.length && c[1].match(Tp) ? decodeURIComponent(c[1]) : ""
        }
        var d = [], e;
        for (e in a) {
            for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].ia);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }

    var aq = function (a, b, c) {
        var d = fo() ? ao("_gac_gb", !0) : {}, e = [], f = !1, g;
        for (g in d) {
            var h = zo("_gac_gb_" + g, a, b, c);
            f = f || 0 !== h.length && h.some(function (l) {
                return 1 === l
            });
            e.push(g + ":" + h.join(","))
        }
        return {gk: f ? e.join(";") : "", fk: $p(d, Xp)}
    };

    function bq(a, b, c) {
        if (Vp.test(I.location.host)) {
            var d = I.location.href.match(c);
            if (d && 2 == d.length && d[1].match(Up)) return [{ia: d[1]}]
        } else return ho((a || "_gcl") + b);
        return []
    }

    var cq = function (a) {
        return bq(a, "_aw", Yp).map(function (b) {
            return b.ia
        }).join(".")
    }, dq = function (a) {
        return bq(a, "_gb", Zp).map(function (b) {
            return b.ia
        }).join(".")
    }, eq = function (a, b) {
        var c = zo((b && b.prefix || "_gcl") + "_gb", a, b);
        return 0 === c.length || c.every(function (d) {
            return 0 === d
        }) ? "" : c.join(".")
    };
    var fq = function () {
        if (Ea(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function (b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {
            }
            return a
        }
    };
    var gq = function (a) {
            if (null != a) {
                var b = String(a).substring(0, 512), c = b.indexOf("#");
                return -1 == c ? b : b.substring(0, c)
            }
            return ""
        }, hq = function () {
            var a = I.title;
            if (void 0 == a || "" == a) return "";
            var b = function (d) {
                try {
                    return decodeURIComponent(d), !0
                } catch (e) {
                    return !1
                }
            };
            a = encodeURIComponent(a);
            for (var c = 256; !b(a.substr(0, c));) c--;
            return decodeURIComponent(a.substr(0, c))
        }, iq = function (a) {
            a.metadata.speculative_in_message || (a.metadata.speculative = !1)
        }, jq = function (a, b) {
            Ia(b) || (b = [b]);
            return 0 <= b.indexOf(a.metadata.hit_type)
        },
        kq = function (a) {
            var b = a.target.P[0];
            if (b) {
                a.C[T.g.Lc] = b;
                var c = a.target.P[1];
                c && (a.C[T.g.ib] = c)
            } else a.M = !0
        }, lq = function (a) {
            if (jq(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])) {
                var b = a.C[T.g.ib], c = !0 === V(a.s, T.g.Ze);
                c && (a.metadata.remarketing_only = !0);
                switch (a.metadata.hit_type) {
                    case "conversion":
                        !c && b && iq(a);
                        el() && (a.metadata.is_gcp_conversion = !0);
                        break;
                    case "user_data_lead":
                    case "user_data_web":
                        !c && b && (a.M = !0);
                        break;
                    case "remarketing":
                        !c && b || iq(a)
                }
                a.C[T.g.Fh] = a.metadata.is_gcp_conversion ?
                    "www.google.com" : "www.googleadservices.com"
            }
        }, mq = function (a) {
            jq(a, ["conversion", "remarketing"])
        }, nq = function (a) {
            if (jq(a, ["conversion", "remarketing"])) {
                var b = km();
                a.C[T.g.bh] = b;
                var c = V(a.s, T.g.Ma);
                c || (c = 1 === b ? z.top.location.href : z.location.href);
                a.C[T.g.Ma] = gq(c);
                Zo(a, T.g.Ua, I.referrer);
                a.C[T.g.kc] = hq();
                Zo(a, T.g.Ta);
                var d = Ak();
                a.C[T.g.Nb] = d.width + "x" + d.height;
                if (U(86)) {
                    for (var e, f = z, g = f; f && f != f.parent;) f = f.parent, gm(f) && (g = f);
                    e = g;
                    var h;
                    var l = e.location.href;
                    if (e === e.top) h = {url: l, zk: !0}; else {
                        var n =
                            !1, p = e.document;
                        p && p.referrer && (l = p.referrer, e.parent === e.top && (n = !0));
                        var q = e.location.ancestorOrigins;
                        if (q) {
                            var r = q[q.length - 1];
                            r && -1 === l.indexOf(r) && (n = !1, l = r)
                        }
                        h = {url: l, zk: n}
                    }
                    var t = h;
                    t.url && c !== t.url && (a.C[T.g.qh] = gq(t.url))
                }
            }
        }, oq = function (a) {
            jq(a, ["conversion", "remarketing"]) && (Zo(a, T.g.Va), Zo(a, T.g.qa), Zo(a, T.g.sa), "remarketing" === a.metadata.hit_type && Zo(a, T.g.Aa))
        }, pq = function (a) {
            if (U(13)) if (!Tn(z)) Q(87); else if (void 0 !== Vn) {
                Q(85);
                var b = Rn();
                b ? Zn(b, a) : Q(86)
            }
        }, rq = function (a) {
            jq(a, ["conversion"]) &&
            (!0 === z._gtmpcm || Mp() ? a.C[T.g.Mc] = "2" : U(7) && (qq || Op(Np()) || (im('A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), qq = !0), Op(Np()) && (a.C[T.g.Mc] = "1")))
        }, sq = function (a) {
            jq(a, ["conversion", "remarketing"]) && U(9) && ml(T.g.K) && !1 !== V(a.s, T.g.Ga) && !1 !== V(a.s, T.g.da) && !1 !== V(a.s, T.g.Jb) && !1 !== V(a.s, T.g.Na) && Qp() && (a.C[T.g.Tg] = "1", a.metadata.send_fledge_experiment = !0)
        }, tq = function (a) {
            var b = function (d) {
                return V(a.s, d)
            };
            a.metadata.conversion_linker_enabled = !1 !== b(T.g.ya);
            var c = {
                prefix: b(T.g.La) || b(T.g.jb),
                domain: b(T.g.vb), Db: b(T.g.Sa), flags: b(T.g.wb)
            };
            a.metadata.cookie_options = c;
            a.metadata.redact_ads_data = null != b(T.g.oa) && !1 !== b(T.g.oa);
            a.metadata.allow_ad_personalization = !1 !== b(T.g.da)
        }, uq = function (a) {
            if ($o(a, "ccd_add_1p_data", !1) && ml(T.g.K)) {
                var b = $k(a.s);
                if (bl(b)) {
                    if (b.enable_code) {
                        var c = V(a.s, T.g.wa);
                        if (Qc(c) || null === c) a.metadata.user_data_from_code = c
                    }
                    Qc(b.selectors) && (a.metadata.user_data_from_manual = Zk(b.selectors))
                }
            }
        }, vq = function (a) {
            var b = !a.metadata.send_user_data_hit && jq(a, ["conversion", "user_data_web"]),
                c = !$o(a, "ccd_add_1p_data", !1) && jq(a, "user_data_lead");
            if ((b || c) && ml(T.g.K)) {
                var d = "conversion" === a.metadata.hit_type, e = a.s, f = void 0, g = V(e, T.g.wa);
                if (d) {
                    var h = (V(e, T.g.Rc) || {})[a.C[T.g.ib]];
                    if (!0 === V(e, T.g.Md) || h) {
                        var l;
                        var n;
                        if (h) b:{
                            switch (h.enhanced_conversions_mode) {
                                case "manual":
                                    if (g && Qc(g)) {
                                        n = g;
                                        break b
                                    }
                                    var p = h.enhanced_conversions_manual_var;
                                    n = void 0 !== p ? p : z.enhanced_conversion_data;
                                    break b;
                                case "automatic":
                                    n = Zk(h[T.g.Rg]);
                                    break b
                            }
                            n = void 0
                        } else n = z.enhanced_conversion_data;
                        var q = n, r = (h || {}).enhanced_conversions_mode,
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
                            } else t = "automatic" === r ? dl(h) ? "a" : "m" : "c";
                            l = {eb: q, Ci: t}
                        } else l = {eb: q, Ci: void 0};
                        var u = l, v = u.Ci;
                        f = u.eb;
                        a.C[T.g.xh] = v
                    }
                } else {
                    if (a.metadata.is_config_command || !a.s.J && !al(a.s)) return;
                    bl($k(a.s)) && null !== g && (Qc(g) ? f = g : f = cl($k(a.s)), f && iq(a))
                }
                a.metadata.user_data = f
            }
        }, wq = function (a) {
            jq(a, ["conversion", "remarketing"]) && (a.s.J ? "conversion" !== a.metadata.hit_type && a.eventName && (a.C[T.g.Sg] =
                a.eventName) : a.C[T.g.Sg] = a.eventName, m(a.s.h, function (b, c) {
                Xh[b.split(".")[0]] || (a.C[b] = c)
            }))
        }, xq = function (a) {
            if (a.eventName === T.g.Fa && (a.metadata.is_config_command = !0, jq(a, "conversion") && (a.metadata.speculative = !0), !jq(a, "remarketing") || !1 !== V(a.s, T.g.Jb) && !1 !== V(a.s, T.g.Na) || (a.metadata.speculative = !0), jq(a, "landing_page"))) {
                var b = V(a.s, T.g.bc), c = V(a.s, T.g.za) || {}, d = V(a.s, T.g.zb),
                    e = a.metadata.conversion_linker_enabled, f = a.metadata.cookie_options;
                Kp({Yh: e, Rj: b, hi: c, Ai: d}, f);
                Xo(a.target, a.s);
                Go({
                    Kf: !1,
                    Le: a.metadata.redact_ads_data,
                    ca: a.target.id,
                    eventId: a.s.eventId,
                    priorityId: a.s.priorityId,
                    sc: e ? f : void 0,
                    Ge: e,
                    bi: a.C[T.g.lf],
                    Uf: a.C[T.g.hc],
                    Qf: a.C[T.g.fc]
                });
                a.M = !0
            }
        }, yq = function (a) {
            if (!$o(a, "hasPreAutoPiiCcdRule", !1)) {
                var b = U(50);
                if ((!U(49) || b || a.s.J) && jq(a, "conversion") && ml(T.g.K)) {
                    var c = (V(a.s, T.g.Rc) || {})[a.C[T.g.ib]], d = a.C[T.g.Lc], e;
                    if (!(e = dl(c))) if (vk() && Pk) if (Qk) e = !0; else {
                        var f = zk("AW-" + d);
                        e = !!f && !!f.preAutoPii
                    } else e = !1;
                    if (e) {
                        var g = Ua(), h = Wk({vc: !0, wc: !0, vi: !0});
                        if (0 !== h.elements.length) {
                            for (var l =
                                [], n = 0; n < h.elements.length; ++n) {
                                var p = h.elements[n];
                                l.push(p.querySelector + "*" + Xk(p) + "*" + p.type)
                            }
                            a.C[T.g.uh] = l.join("~");
                            var q = h.og;
                            q && (a.C[T.g.vh] = q.querySelector, a.C[T.g.th] = Xk(q));
                            a.C[T.g.sh] = String(Ua() - g);
                            a.C[T.g.wh] = h.status
                        }
                    }
                }
            }
        }, zq = function (a) {
            if (a.eventName === T.g.Ka && !a.s.J) {
                if (!a.metadata.consent_updated && jq(a, "conversion")) {
                    var b = V(a.s, T.g.xb);
                    if ("function" !== typeof b) return;
                    var c = String(V(a.s, T.g.kb)), d = a.C[c], e = V(a.s, c);
                    c === T.g.ac || c === T.g.Nd ? Lp({Di: c, callback: b, ji: e}, a.metadata.cookie_options,
                        a.metadata.redact_ads_data, mp) : b(d || e)
                }
                a.M = !0
            }
        }, Aq = function (a) {
            if (jq(a, "conversion") && ml(T.g.K) && (a.C[T.g.qe] || a.C[T.g.he])) {
                var b = a.C[T.g.ib], c = K(a.metadata.cookie_options), d = mo(c.prefix);
                c.prefix = "_gcl" === d ? "" : d;
                if (a.C[T.g.qe]) {
                    var e = eq(b, c);
                    e && (a.C[T.g.zh] = e)
                }
                if (a.C[T.g.he]) {
                    var f = aq(b, c).gk;
                    f && (a.C[T.g.Xg] = f)
                }
            }
        }, Bq = function (a) {
            var b = U(4), c = a.s, d, e, f;
            if (!b) {
                var g = vp(c, T.g.fa);
                d = eb(Qc(g) ? g : {})
            }
            var h = vp(c, T.g.fa, 1), l = vp(c, T.g.fa, 2);
            e = eb(Qc(h) ? h : {}, ".");
            f = eb(Qc(l) ? l : {}, ".");
            b || (a.C[T.g.lf] = d);
            a.C[T.g.hc] =
                e;
            a.C[T.g.fc] = f
        }, Cq = function (a) {
            if (jq(a, ["conversion", "remarketing"])) {
                var b = "conversion" === a.metadata.hit_type;
                b && a.eventName !== T.g.Ia || (Zo(a, T.g.ja), b && (Zo(a, T.g.Rd), Zo(a, T.g.Pd), Zo(a, T.g.Qd), Zo(a, T.g.Od), a.C[T.g.Ng] = a.eventName))
            }
        }, Dq = function (a) {
            if (jq(a, ["conversion", "remarketing"])) {
                var b = a.s, c = V(b, T.g.Mb);
                if (!0 === c || !1 === c) a.C[T.g.Mb] = c;
                var d = V(b, T.g.da);
                if (!0 === d || !1 === d) a.C[T.g.Ih] = !d;
                !1 === d && jq(a, "remarketing") && (a.M = !0)
            }
        }, Eq = function (a) {
            jq(a, "conversion") && (Zo(a, T.g.Sc), Zo(a, T.g.Yd), Zo(a,
                T.g.Wc), Zo(a, T.g.be), Zo(a, T.g.Oc), Zo(a, T.g.Zd))
        }, Fq = function (a) {
            cp(a);
        }, Gq = function (a) {
            if (jq(a, ["conversion", "remarketing"]) && z.__gsaExp && z.__gsaExp.id) {
                var b = z.__gsaExp.id;
                if (Ea(b)) try {
                    var c = Number(b());
                    isNaN(c) || (a.C[T.g.ah] = c)
                } catch (d) {
                }
            }
        }, Hq = function (a) {
            if (jq(a, ["conversion", "remarketing"])) {
                var b = fq();
                void 0 !== b && (a.C[T.g.yh] = b || "error");
                var c = Fm();
                c && (a.C[T.g.Yg] = c);
                var d = Em();
                d && (a.C[T.g.oh] = d)
            }
        }, Iq = function (a) {
            jq(a,
                ["conversion"]) && "1" === Qj(!1)._up && (a.C[T.g.dh] = !0)
        }, Jq = function (a) {
            jq(a, ["conversion"]) && (a.metadata.redact_click_ids = !!a.metadata.redact_ads_data && !ml(T.g.K))
        }, Kq = function (a) {
            if (jq(a, ["conversion", "user_data_lead", "user_data_web"]) && ml(T.g.K) && a.metadata.conversion_linker_enabled) {
                var b = a.metadata.cookie_options, c = mo(b.prefix);
                "_gcl" === c && (c = "");
                var d = c;
                if (Vp.test(I.location.host) ? Yp.test(I.location.href) || Wp.test(I.location.href) : !Co(d)) {
                    var e = cq(c);
                    e && (a.C[T.g.ac] = e);
                    if (!c) {
                        var f = $p(fo() ? ao() :
                            {}, Wp);
                        f && (a.C[T.g.Wg] = f)
                    }
                } else {
                    var g = dq(c);
                    g && (a.C[T.g.qe] = g);
                    if (!c) {
                        var h = a.C[T.g.ib];
                        b = K(b);
                        b.prefix = c;
                        var l = aq(h, b, !0).fk;
                        l && (a.C[T.g.he] = l)
                    }
                }
            }
        }, Lq = function (a) {
            if (jq(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"]) && a.metadata.conversion_linker_enabled && ml(T.g.K)) {
                var b = !U(3);
                if ("remarketing" !== a.metadata.hit_type || b) {
                    var c = a.metadata.cookie_options;
                    jk(c, "conversion" === a.metadata.hit_type && a.eventName !== T.g.Ka);
                    a.C[T.g.Nd] = dk[fk(c.prefix)]
                }
            }
        }, Mq = function (a) {
            if (jq(a, ["conversion"])) {
                var b =
                    fp(a.metadata.cookie_options);
                if (b && !a.C[T.g.Va]) {
                    var c = sj(a.C[T.g.ib]);
                    a.C[T.g.Va] = c
                }
                b && (a.C[T.g.yb] = b, a.metadata.send_ccm_parallel_ping = !0)
            }
        }, Nq = function (a) {
            var b = !ml(T.g.K);
            switch (a.metadata.hit_type) {
                case "user_data_lead":
                case "user_data_web":
                    a.M = !(!b && !a.metadata.consent_updated);
                    break;
                case "remarketing":
                    a.M = b;
                    break;
                case "conversion":
                    a.metadata.consent_updated && (a.C[T.g.Ag] = !0)
            }
        }, Oq = function (a) {
            jq(a, ["conversion"]) && a.s.eventMetadata.is_external_event && (a.C[T.g.Gh] = !0)
        }, Pq = function (a) {
            var b;
            if ("gtag.config" !== a.eventName && a.metadata.send_user_data_hit) switch (a.metadata.hit_type) {
                case "user_data_web":
                    b = 97;
                    iq(a);
                    break;
                case "user_data_lead":
                    b = 98;
                    iq(a);
                    break;
                case "conversion":
                    b = 99
            }
            !a.metadata.speculative && b && Q(b);
            !0 === a.metadata.speculative && (a.M = !0)
        }, qq = !1;
    var Qq = function (a) {
        if (ml(T.g.K)) return a;
        a = a.replace(/&url=([^&#]+)/, function (b, c) {
            var d = Rf(decodeURIComponent(c));
            return "&url=" + encodeURIComponent(d)
        });
        return a = a.replace(/&ref=([^&#]+)/, function (b, c) {
            var d = Rf(decodeURIComponent(c));
            return "&ref=" + encodeURIComponent(d)
        })
    };
    var Rq = {
        I: {
            zg: "ads_conversion_hit",
            Te: "container_execute_start",
            Cg: "container_setup_end",
            Ue: "container_setup_start",
            Bg: "container_execute_end",
            Dg: "container_yield_end",
            Ve: "container_yield_start",
            Ah: "event_execute_end",
            Bh: "event_setup_end",
            Yc: "event_setup_start",
            Ch: "ga4_conversion_hit",
            ad: "page_load",
            Fl: "pageview",
            Ab: "snippet_load",
            Oh: "tag_callback_error",
            Ph: "tag_callback_failure",
            Qh: "tag_callback_success",
            Rh: "tag_execute_end",
            oc: "tag_execute_start"
        }
    };
    var Sq = !1, Tq, Uq = "L S Y E TC HTC".split(" "), Vq = ["S", "E"], Wq = ["TS", "TE"];
    var sr = function (a, b, c, d, e, f) {
        var g;
        g = void 0 === g ? !1 : g;
        var h = {};
        return h
    }, tr = function (a) {
        var b = !1;
        return b
    }, ur = function (a, b) {
    }, vr = function () {
        var a = {};
        return a
    }, lr = function (a) {
        a = void 0 === a ? !0 : a;
        var b = {};
        return b
    }, wr = function () {
    }, xr = function (a, b, c) {
    }, yr = function (a) {
        Bc() && Bc().mark(L.F + "_" + a + "_start")
    }, zr = function (a) {
        if (Bc()) {
            var b =
                Bc(), c = L.F + "_" + a + "_start", d = L.F + "_" + a + "_duration";
            b.measure(d, c);
            var e = Bc().getEntriesByName(d)[0];
            b.clearMarks(c);
            b.clearMeasures(d);
            var f = Zh._p || {};
            void 0 === f[a] && (f[a] = e.duration, Zh._p = f);
            return e.duration
        }
    }, Ar = function () {
        var a = sr("PAGEVIEW", L.F);
        if (dr(a.Ya, "mark")[0]) {
            var b = Bc();
            b.clearMarks(a.Ya);
            b.clearMeasures("GTM-" + L.F + ":" + Rq.I.ad + ":to:PAGEVIEW")
        }
        var c = sr(Rq.I.ad, L.F);
        tr(a) && ur(a, c)
    };
    var Br = function (a, b) {
        var c = z, d, e = c.GooglebQhCsO;
        e || (e = {}, c.GooglebQhCsO = e);
        d = e;
        if (d[a]) return !1;
        d[a] = [];
        d[a][0] = b;
        return !0
    };
    var Cr = function (a, b) {
        var c = dm(a, "fmt");
        if (b) {
            var d = dm(a, "random"), e = dm(a, "label") || "";
            if (!d) return !1;
            var f = On(decodeURIComponent(e.replace(/\+/g, " ")) + ":" + decodeURIComponent(d.replace(/\+/g, " ")));
            if (!Br(f, b)) return !1
        }
        c && 4 != c && (a = fm(a, "rfmt", c));
        var g = fm(a, "fmt", 4);
        nc(g, function () {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b())
        }, void 0, void 0, I.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Dr = function (a) {
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = a[c], e = void 0;
                if (d.hasOwnProperty("google_business_vertical")) {
                    e = d.google_business_vertical;
                    var f = {};
                    b[e] = b[e] || (f.google_business_vertical = e, f)
                } else e = "", b.hasOwnProperty(e) || (b[e] = {});
                var g = b[e], h;
                for (h in d) "google_business_vertical" !== h && (h in g || (g[h] = []), g[h].push(d[h]))
            }
            return Object.keys(b).map(function (l) {
                return b[l]
            })
        }, Er = function (a) {
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
        }, Fr = function (a) {
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
        }, Hr = function (a) {
            if (!a) return "";
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c], e = [];
                d && (e.push(Gr(d.value)), e.push(Gr(d.quantity)),
                    e.push(Gr(d.item_id)), e.push(Gr(d.start_date)), e.push(Gr(d.end_date)), b.push("(" + e.join("*") + ")"))
            }
            return 0 < b.length ? b.join("") : ""
        }, Gr = function (a) {
            return "number" !== typeof a && "string" !== typeof a ? "" : a.toString()
        }, Jr = function (a, b) {
            var c = Ir(b);
            return "" + a + (a && c ? ";" : "") + c
        }, Ir = function (a) {
            if (!a || "object" !== typeof a || "function" === typeof a.join) return "";
            var b = [];
            m(a, function (c, d) {
                var e, f;
                if (Ia(d)) {
                    for (var g = [], h = 0; h < d.length; ++h) {
                        var l = Kr(d[h]);
                        void 0 != l && g.push(l)
                    }
                    f = 0 !== g.length ? g.join(",") : void 0
                } else f =
                    Kr(d);
                e = f;
                var n = Kr(c);
                n && void 0 != e && b.push(n + "=" + e)
            });
            return b.join(";")
        }, Kr = function (a) {
            var b = typeof a;
            if (null != a && "object" !== b && "function" !== b) return String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
        }, Lr = function (a, b) {
            var c = [], d = function (f, g) {
                null != g && "" !== g && (!0 === g && (g = 1), !1 === g && (g = 0), c.push(f + "=" + encodeURIComponent(g)))
            }, e = a.metadata.hit_type;
            "conversion" !== e && "remarketing" !== e || d("random", a.metadata.event_start_timestamp_ms);
            m(b, d);
            return c.join("&")
        }, Mr = function (a, b) {
            var c =
                    a.metadata.hit_type, d = a.C[T.g.Lc], e = ml(T.g.K), f = [], g, h = a.s.aa, l, n = sl() ? 2 : 3, p = 0,
                q = function (w) {
                    f.push(w);
                    w.cb && p++
                };
            switch (c) {
                case "conversion":
                    l = "pagead/conversion";
                    var r = "";
                    e ? a.metadata.is_gcp_conversion ? (g = "https://www.google.com/", l = "pagead/1p-conversion") : g = "https://www.googleadservices.com/" : g = "https://pagead2.googlesyndication.com/";
                    a.metadata.is_gcp_conversion && (r = "&gcp=1&sscte=1&ct_cookie_present=1");
                    q({ob: "" + g + l + "/" + d + "/?" + Lr(a, b) + r, format: n, cb: !0});
                    a.metadata.send_ccm_parallel_ping && q({
                        ob: "" +
                            g + "ccm/conversion/" + d + "/?" + Lr(a, b) + r, format: 2, cb: !0
                    });
                    a.metadata.is_gcp_conversion && (r = "&gcp=1&ct_cookie_present=1", q({
                        ob: "" + (e ? "https://googleads.g.doubleclick.net/" : g) + "pagead/viewthroughconversion/" + d + "/?" + Lr(a, b) + r,
                        format: n,
                        cb: !0
                    }));
                    break;
                case "remarketing":
                    var t = b.data || "", u = Dr(Er(a.C[T.g.ja]));
                    if (u.length) {
                        for (var v = 0; v < u.length; v++) b.data = Jr(t, u[v]), q({
                            ob: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + Lr(a, b),
                            format: n,
                            cb: !0
                        }), a.metadata.send_fledge_experiment && q({
                            ob: Sp() +
                                "/td/rul/" + d + "?" + Lr(a, b), format: 4, cb: !1
                        }), a.metadata.event_start_timestamp_ms += 1;
                        a.metadata.send_fledge_experiment = !1
                    } else q({
                        ob: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + Lr(a, b),
                        format: n,
                        cb: !0
                    });
                    break;
                case "user_data_lead":
                    q({ob: "https://google.com/pagead/form-data/" + d + "?" + Lr(a, b), format: 1, cb: !0});
                    break;
                case "user_data_web":
                    q({ob: "https://google.com/ccm/form-data/" + d + "?" + Lr(a, b), format: 1, cb: !0})
            }
            1 < f.length && Ea(a.s.aa) && (h = fb(a.s.aa, p));
            sl() || "conversion" !== c && "remarketing" !==
            c || !a.metadata.send_fledge_experiment || q({ob: Sp() + "/td/rul/" + d + "?" + Lr(a, b), format: 4, cb: !1});
            return {aa: h, rk: f}
        }, Nr = function (a, b, c, d, e) {
            if (U(70)) {
                var f = sr(Rq.I.zg, L.hb, c.s.eventId, void 0, c.eventName);
                tr(f) && ur(f)
            }
            var g = function () {
                e && e()
            };
            switch (b) {
                case 1:
                    yc(a);
                    e && e();
                    break;
                case 2:
                    qc(a, g);
                    break;
                case 3:
                    var h = !1;
                    try {
                        h = Cr(a, g)
                    } catch (p) {
                        h = !1
                    }
                    h || Nr(a, 2, c, d, g);
                    break;
                case 4:
                    var l = "AW-" + c.C[T.g.Lc], n = c.C[T.g.ib];
                    n && (l = l + "/" + n);
                    Rp(a, l)
            }
        }, Or = {}, Pr = (Or[T.g.Ag] = "gcu", Or[T.g.ac] = "gclaw", Or[T.g.Nd] = "auid", Or[T.g.Od] =
            "dscnt", Or[T.g.Pd] = "fcntr", Or[T.g.Qd] = "flng", Or[T.g.Rd] = "mid", Or[T.g.Ng] = "bttype", Or[T.g.ib] = "label", Or[T.g.Mc] = "capi", Or[T.g.sa] = "currency_code", Or[T.g.Yd] = "vdltv", Or[T.g.aj] = "_dbg", Or[T.g.be] = "oedeld", Or[T.g.fc] = "edid", Or[T.g.Tg] = "fledge", Or[T.g.Wg] = "gac", Or[T.g.he] = "gacgb", Or[T.g.Xg] = "gacmcov", Or[T.g.Yg] = "gdpr", Or[T.g.hc] = "gdid", Or[T.g.ah] = "gsaexp", Or[T.g.bh] = "frm", Or[T.g.dh] = "gtm_up", Or[T.g.lf] = "did", Or[T.g.Sc] = void 0, Or[T.g.Ma] = "url", Or[T.g.Ua] = "ref", Or[T.g.kc] = "tiba", Or[T.g.Mb] = "rdp", Or[T.g.yb] =
            "ecsid", Or[T.g.Wc] = "delopc", Or[T.g.oh] = "gdpr_consent", Or[T.g.qh] = "top", Or[T.g.Va] = "oid", Or[T.g.sh] = "ec_lat", Or[T.g.th] = "ec_meta", Or[T.g.uh] = "ec_m", Or[T.g.vh] = "ec_sel", Or[T.g.wh] = "ec_s", Or[T.g.xh] = "ec_mode", Or[T.g.Aa] = "userId", Or[T.g.yh] = "us_privacy", Or[T.g.qa] = "value", Or[T.g.qe] = "gclgb", Or[T.g.zh] = "mcov", Or[T.g.Fh] = "hn", Or[T.g.Gh] = "gtm_ee", Or[T.g.Ih] = "npa", Or[T.g.Lc] = null, Or[T.g.Nb] = null, Or[T.g.Ta] = null, Or[T.g.ja] = null, Or),
        Rr = function (a) {
            Qr(a, function (b) {
                for (var c = Mr(a, b), d = c.aa, e = c.rk, f = 0; f < e.length; f++) {
                    var g =
                        e[f], h = g.ob, l = g.format, n = g.cb, p = a.metadata.redact_ads_data ? Qq(h) : h;
                    Nr(p, l, a, b, n ? d : void 0)
                }
            })
        }, Qr = function (a, b) {
            var c = a.metadata.hit_type, d = {}, e = {}, f = [], g = a.metadata.event_start_timestamp_ms;
            if ("conversion" === c || "remarketing" === c) d.cv = "11", d.fst = g, d.fmt = 3, d.bg = "ffffff", d.guid = "ON", d.async = "1";
            d.gtm = Vl();
            Ti() && "remarketing" !== c && (d.gcs = nl(), Ui() && (d.gcd = "G1" + il(Ri)));
            if (a.C[T.g.Nb]) {
                var h = a.C[T.g.Nb].split("x");
                2 === h.length && (d.u_w = h[0], d.u_h = h[1])
            }
            if (a.C[T.g.Ta]) {
                var l = a.C[T.g.Ta];
                2 === l.length ? d.hl =
                    l : 5 === l.length && (d.hl = l.substring(0, 2), d.gl = l.substring(3, 5))
            }
            U(13) && (Pr[T.g.rf] = "uaa", Pr[T.g.sf] = "uab", Pr[T.g.tf] = "uafvl", Pr[T.g.uf] = "uamb", Pr[T.g.vf] = "uam", Pr[T.g.wf] = "uap", Pr[T.g.xf] = "uapv", Pr[T.g.yf] = "uaw");
            m(a.C, function (u, v) {
                if (Pr.hasOwnProperty(u)) {
                    var w = Pr[u];
                    w && (d[w] = v)
                } else e[u] = v
            });
            var n = a.C[T.g.Sc];
            void 0 != n && "" !== n && (d.vdnc = String(n));
            var p = a.C[T.g.Zd];
            void 0 !== p && (d.shf = p);
            var q = a.C[T.g.Oc];
            void 0 !== q && (d.delc = q);
            d.data = Ir(e);
            var r = a.C[T.g.ja];
            r && "conversion" === c && (d.iedeld = fl(r), d.item =
                Hr(Fr(r)));
            if (("conversion" === c || "user_data_lead" === c || "user_data_web" === c) && a.metadata.user_data && (!U(68) || ml(T.g.K))) {
                var t = Ch(a.metadata.user_data);
                t && f.push(t.then(function (u) {
                    d.em = u.lg;
                    if ("user_data_web" === c && 0 < u.Qk) {
                        var v = gp(a.metadata.cookie_options);
                        d.ecsid = v
                    }
                }))
            }
            if (f.length) try {
                Promise.all(f).then(function () {
                    b(d)
                });
                return
            } catch (u) {
            }
            b(d)
        };
    var Sr = function () {
        this.h = {}
    }, Tr = function (a, b, c) {
        null != c && (a.h[b] = c)
    }, Ur = function (a) {
        return Object.keys(a.h).map(function (b) {
            return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
        }).join("&")
    }, Wr = function (a, b, c, d) {
        if (!Ti()) {
            Vr(a, b, c, d);
            return
        }
        ql(function () {
            ml(T.g.K) ? Vr(a, b, c, d) : d && d()
        }, [T.g.K]);
    };
    var Xr = function (a, b, c) {
        c = void 0 === c ? !0 : c;
        var d = {
                gclgb: function () {
                    return jp("gb", b, c).join(".")
                }, gacgb: function () {
                    return pp(c)
                }, gclaw: function () {
                    return mp(b, c).join(".")
                }, gac: function () {
                    return op(c)
                }
            }, e = rp(b), f = e ? "gclgb" : "gclaw", g = e ? "gacgb" : "gac", h = d[g], l = (0, d[f])(),
            n = "_gcl" !== b ? "" : h();
        l && Tr(a, f, l);
        n && Tr(a, g, n)
    }, Vr = function (a, b, c, d) {
        c = c || {};
        var e = c.sc || {}, f = new Sr;
        Bh(b, function (g, h) {
            Tr(f, "em", g);
            Tr(f, "gtm", Vl());
            Ti() && (Tr(f, "gcs", nl()), Tr(f, "gcd", "G1" + il(Ri)));
            Xr(f, mo(e.prefix), c.Le);
            Tr(f, "auid", dk[fk(e.prefix)]);
            if (0 < h) {
                var l = gp(e);
                Tr(f, "ecsid", l)
            }
            var n = Ur(f);
            yc("https://google.com/pagead/form-data/" + a + "?" + n);
            yc("https://google.com/ccm/form-data/" + a + "?" + n);
            d && d()
        })
    };

    function Yr(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Qf("" + c + b).href
        }
    }

    function Zr() {
        return !!Yh.we && "SGTM_TOKEN" !== Yh.we.split("@@").join("")
    };var as = function (a, b, c, d) {
        if (!$r() && !Ql(a)) {
            var e = c ? "/gtag/js" : "/gtm.js", f = "?id=" + encodeURIComponent(a) + "&l=" + Yh.ka,
                g = 0 === a.indexOf("GTM-");
            g || (f += "&cx=c");
            var h = Zr();
            h && (f += "&sign=" + Yh.we);
            var l = gi || ii ? Yr(b, e + f) : void 0;
            if (!l) {
                var n = Yh.Ld + e;
                h && hc && g && (n = hc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                l = Mo("https://", "http://", n + f)
            }
            Ol().container[a] = {state: 1, context: d};
            nc(l)
        }
    }, bs = function (a, b, c) {
        var d;
        if (d = !$r()) {
            var e = Ol().destination[a];
            d = !(e && e.state)
        }
        if (d) if (Rl()) Ol().destination[a] = {
            state: 0,
            transportUrl: b, context: c
        }, Q(91); else {
            var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Yh.ka + "&cx=c";
            Zr() && (f += "&sign=" + Yh.we);
            var g = gi || ii ? Yr(b, f) : void 0;
            g || (g = Mo("https://", "http://", Yh.Ld + f));
            Ol().destination[a] = {state: 1, context: c};
            nc(g)
        }
    };

    function $r() {
        if (sl()) {
            return !0
        }
        return !1
    };var cs = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), ds = {
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
        }, es = {
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
        }, fs = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        is = function (a) {
            var b = yi("gtm.allowlist") || yi("gtm.whitelist");
            b && Q(9);
            ei && (b = ["google", "gtagfl", "lcl", "zone"]);
            gs() && (ei ?
                Q(116) : Q(117), hs && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
            var c = b && $a(Ra(b), ds), d = yi("gtm.blocklist") || yi("gtm.blacklist");
            d || (d = yi("tagTypeBlacklist")) && Q(3);
            d ? Q(8) : d = [];
            gs() && (d = Ra(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ra(d).indexOf("google") && Q(2);
            var e = d && $a(Ra(d), es), f = {};
            return function (g) {
                var h = g && g[je.Wa];
                if (!h || "string" != typeof h) return !0;
                h = h.replace(/^_*/, "");
                if (void 0 !== f[h]) return f[h];
                var l = qi[h] ||
                    [], n = a(h, l);
                if (b) {
                    var p;
                    if (p = n) a:{
                        if (0 > c.indexOf(h)) if (l && 0 < l.length) for (var q = 0; q < l.length; q++) {
                            if (0 > c.indexOf(l[q])) {
                                Q(11);
                                p = !1;
                                break a
                            }
                        } else {
                            p = !1;
                            break a
                        }
                        p = !0
                    }
                    n = p
                }
                var r = !1;
                if (d) {
                    var t = 0 <= e.indexOf(h);
                    if (t) r = t; else {
                        var u = Na(e, l || []);
                        u && Q(10);
                        r = u
                    }
                }
                var v = !n || r;
                v || !(0 <= l.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Na(e, fs));
                return f[h] = v
            }
        }, hs = !1;
    var gs = function () {
        return cs.test(z.location && z.location.hostname)
    };
    var js = {initialized: 11, complete: 12, interactive: 13}, ks = {}, ls = Object.freeze((ks[T.g.Na] = !0, ks)),
        ms = 0 <= I.location.search.indexOf("?gtm_diagnostics=") || 0 <= I.location.search.indexOf("&gtm_diagnostics="),
        os = function (a, b, c) {
            if (Pm && "config" === a && !(1 < Jo(b).P.length)) {
                var d, e = ic("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = K(c.H);
                K(c.h, f);
                var g = [], h;
                for (h in d) {
                    var l = ns(d[h], f);
                    l.length && (ms && console.log(l), g.push(h))
                }
                if (g.length) {
                    if (g.length) {
                        var n = b + "*" + g.join(".");
                        Zm = Zm ? Zm + "!" + n : "&tdc=" + n
                    }
                    wb("TAGGING",
                        js[I.readyState] || 14)
                }
                d[b] = f
            }
        };

    function ps(a, b) {
        var c = {}, d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function ns(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function (q, r) {
            var t = r[q];
            return void 0 === t ? ls[q] : t
        }, f;
        for (f in ps(a, b)) {
            var g = (d ? d + "." : "") + f, h = e(f, a), l = e(f, b), n = "object" === Oc(h) || "array" === Oc(h),
                p = "object" === Oc(l) || "array" === Oc(l);
            if (n && p) ns(h, l, c, g); else if (n || p || h !== l) c[g] = !0
        }
        return Object.keys(c)
    };var qs = !1, rs = 0, ss = [];

    function ts(a) {
        if (!qs) {
            var b = I.createEventObject, c = "complete" == I.readyState, d = "interactive" == I.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                qs = !0;
                for (var e = 0; e < ss.length; e++) J(ss[e])
            }
            ss.push = function () {
                for (var f = 0; f < arguments.length; f++) J(arguments[f]);
                return 0
            }
        }
    }

    function us() {
        if (!qs && 140 > rs) {
            rs++;
            try {
                I.documentElement.doScroll("left"), ts()
            } catch (a) {
                z.setTimeout(us, 50)
            }
        }
    }

    var vs = function (a) {
        qs ? a() : ss.push(a)
    };
    var xs = function (a, b, c) {
        return {entityType: a, indexInOriginContainer: b, nameInOriginContainer: c, originContainerId: L.F}
    };
    var zs = function (a, b) {
        this.h = !1;
        this.H = [];
        this.N = {tags: []};
        this.U = !1;
        this.B = this.D = 0;
        ys(this, a, b)
    }, As = function (a, b, c, d) {
        if (bi.hasOwnProperty(b) || "__zone" === b) return -1;
        var e = {};
        Qc(d) && (e = K(d, e));
        e.id = c;
        e.status = "timeout";
        return a.N.tags.push(e) - 1
    }, Bs = function (a, b, c, d) {
        var e = a.N.tags[b];
        e && (e.status = c, e.executionTime = d)
    }, Cs = function (a) {
        if (!a.h) {
            for (var b = a.H, c = 0; c < b.length; c++) b[c]();
            a.h = !0;
            a.H.length = 0
        }
    }, ys = function (a, b, c) {
        void 0 !== b && a.ye(b);
        c && z.setTimeout(function () {
            return Cs(a)
        }, Number(c))
    };
    zs.prototype.ye = function (a) {
        var b = this, c = Xa(function () {
            return J(function () {
                a(L.F, b.N)
            })
        });
        this.h ? c() : this.H.push(c)
    };
    var Ds = function (a) {
        a.D++;
        return Xa(function () {
            a.B++;
            a.U && a.B >= a.D && Cs(a)
        })
    }, Es = function (a) {
        a.U = !0;
        a.B >= a.D && Cs(a)
    };
    var Fs = {}, Gs = function () {
        return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject]
    }, Hs = !1;
    var Is = function (a) {
        z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
        var b = z.GoogleAnalyticsObject;
        if (z[b]) z.hasOwnProperty(b); else {
            var c = function () {
                c.q = c.q || [];
                c.q.push(arguments)
            };
            c.l = Number(Ta());
            z[b] = c
        }
        return z[b]
    }, Js = function (a) {
        if (Ti()) {
            var b = Gs();
            b(a + "require", "linker");
            b(a + "linker:passthrough", !0)
        }
    };

    function Ks() {
        return z.GoogleAnalyticsObject || "ga"
    }

    var Ls = function (a) {
    }, Ms = function (a, b) {
        return function () {
            var c = Gs(), d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function (f) {
                    var g = f.get("hitPayload"), h = f.get("hitCallback"), l = 0 > g.indexOf("&tid=" + b);
                    l && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                    e(f);
                    l && (f.set("hitPayload",
                        g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                })
            }
        }
    };

    function Rs(a, b, c, d) {
        var e = Ke[a], f = Ss(a, b, c, d);
        if (!f) return null;
        var g = Ue(e[je.Nh], c, []);
        if (g && g.length) {
            var h = g[0];
            f = Rs(h.index, {aa: f, Z: 1 === h.ci ? b.terminate : f, terminate: b.terminate}, c, d)
        }
        return f
    }

    function Ss(a, b, c, d) {
        function e() {
            if (f[je.zj]) h(); else {
                var w = Ve(f, c, []), y = w[je.Ji];
                if (null != y) for (var x = 0; x < y.length; x++) if (!ml(y[x])) {
                    h();
                    return
                }
                var A = As(c.Cb, String(f[je.Wa]), Number(f[je.Bb]), w[je.Aj]), B = !1;
                w.vtp_gtmOnSuccess = function () {
                    if (!B) {
                        B = !0;
                        var G = Ua() - H;
                        Bn(c.id, Ke[a], "5", G);
                        Bs(c.Cb, A, "success", G);
                        U(70) && xr(c, f, Rq.I.Qh);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function () {
                    if (!B) {
                        B = !0;
                        var G = Ua() - H;
                        Bn(c.id, Ke[a], "6", G);
                        Bs(c.Cb, A, "failure", G);
                        U(70) && xr(c, f, Rq.I.Ph);
                        h()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                Bn(c.id, f, "1");
                var C = function () {
                    var G = Ua() - H;
                    Bn(c.id, f, "7", G);
                    Bs(c.Cb, A, "exception", G);
                    U(70) && xr(c, f, Rq.I.Oh);
                    B || (B = !0, h())
                };
                if (U(70)) {
                    var D = sr(Rq.I.oc, L.F, c.id, Number(f[je.Bb]), c.name, Hm(f));
                    tr(D)
                }
                var H = Ua();
                try {
                    Te(w, {event: c, index: a, type: 1})
                } catch (G) {
                    C(G)
                }
                U(70) && xr(c, f, Rq.I.Rh)
            }
        }

        var f = Ke[a], g = b.aa, h = b.Z, l = b.terminate;
        if (c.Yf(f)) return null;
        var n = Ue(f[je.Sh], c, []);
        if (n && n.length) {
            var p = n[0], q = Rs(p.index, {aa: g, Z: h, terminate: l}, c, d);
            if (!q) return null;
            g = q;
            h = 2 === p.ci ? l : q
        }
        if (f[je.Jh] || f[je.Cj]) {
            var r = f[je.Jh] ? Le : c.ql, t = g, u = h;
            if (!r[a]) {
                e = Xa(e);
                var v = Ts(a, r, e);
                g =
                    v.aa;
                h = v.Z
            }
            return function () {
                r[a](t, u)
            }
        }
        return e
    }

    function Ts(a, b, c) {
        var d = [], e = [];
        b[a] = Us(d, e, c);
        return {
            aa: function () {
                b[a] = Vs;
                for (var f = 0; f < d.length; f++) d[f]()
            }, Z: function () {
                b[a] = Ws;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Us(a, b, c) {
        return function (d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Vs(a) {
        a()
    }

    function Ws(a, b) {
        b()
    };var Ys = function (a, b) {
        return 1 === arguments.length ? Xs("set", a) : Xs("set", a, b)
    }, Zs = function (a, b) {
        return 1 === arguments.length ? Xs("config", a) : Xs("config", a, b)
    }, $s = function (a, b, c) {
        c = c || {};
        c[T.g.Ob] = a;
        return Xs("event", b, c)
    };

    function Xs(a) {
        return arguments
    }

    var at = function () {
        this.h = [];
        this.B = []
    };
    at.prototype.enqueue = function (a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {message: a, notBeforeEventId: b, priorityId: d, messageContext: c};
        this.h.push(e);
        for (var f = 0; f < this.B.length; f++) try {
            this.B[f](e)
        } catch (g) {
        }
    };
    at.prototype.listen = function (a) {
        this.B.push(a)
    };
    at.prototype.get = function () {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b], d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    at.prototype.prune = function (a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var ct = function (a, b, c) {
        bt().enqueue(a, b, c)
    }, et = function () {
        var a = dt;
        bt().listen(a)
    };

    function bt() {
        var a = Zh.mb;
        a || (a = new at, Zh.mb = a);
        return a
    }

    var gt = function () {
            var a = Zh.zones;
            a || (a = Zh.zones = new ft);
            return a
        }, ht = {zone: !0, cn: !0, css: !0, ew: !0, eq: !0, ge: !0, gt: !0, lc: !0, le: !0, lt: !0, re: !0, sw: !0, um: !0},
        it = {cl: ["ecl"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"]}, ft = function () {
            this.h = {};
            this.B = {};
            this.D = 0
        };
    da = ft.prototype;
    da.isActive = function (a, b) {
        for (var c, d = 0; d < a.length && !(c = this.h[a[d]]); d++) ;
        if (!c) return !0;
        if (!this.isActive([c.ng], b)) return !1;
        for (var e = 0; e < c.Dd.length; e++) if (this.B[c.Dd[e]].uc(b)) return !0;
        return !1
    };
    da.getIsAllowedFn = function (a, b) {
        if (!this.isActive(a,
            b)) return function () {
            return !1
        };
        for (var c, d = 0; d < a.length && !(c = this.h[a[d]]); d++) ;
        if (!c) return function () {
            return !0
        };
        for (var e = [], f = 0; f < c.Dd.length; f++) {
            var g = this.B[c.Dd[f]];
            g.uc(b) && e.push(g)
        }
        if (!e.length) return function () {
            return !1
        };
        var h = this.getIsAllowedFn([c.ng], b);
        return function (l, n) {
            n = n || [];
            if (!h(l, n)) return !1;
            for (var p = 0; p < e.length; ++p) if (e[p].D(l, n)) return !0;
            return !1
        }
    };
    da.unregisterChild = function (a) {
        for (var b = 0; b < a.length; b++) delete this.h[a[b]]
    };
    da.createZone = function (a, b) {
        var c = String(++this.D);
        this.B[c] = new jt(a, b);
        return c
    };
    da.updateZone = function (a, b, c) {
        var d = this.B[a];
        d && d.H(b, c)
    };
    da.registerChild = function (a, b, c) {
        var d = this.h[a];
        if (!d && Zh[a] || !d && Ql(a) || d && d.ng !== b) return !1;
        if (d) return d.Dd.push(c), !1;
        this.h[a] = {ng: b, Dd: [c]};
        return !0
    };
    var jt = function (a, b) {
        this.h = [{eventId: a, uc: !0}];
        this.B = null;
        if (b) {
            this.B = {};
            for (var c = 0; c < b.length; c++) this.B[b[c]] = !0
        }
    };
    jt.prototype.H = function (a, b) {
        var c = this.h[this.h.length - 1];
        a <= c.eventId || c.uc !== b && this.h.push({eventId: a, uc: b})
    };
    jt.prototype.uc = function (a) {
        for (var b =
            this.h.length - 1; 0 <= b; b--) if (this.h[b].eventId <= a) return this.h[b].uc;
        return !1
    };
    jt.prototype.D = function (a, b) {
        b = b || [];
        if (!this.B || ht[a] || this.B[a]) return !0;
        for (var c = 0; c < b.length; ++c) if (this.B[b[c]]) return !0;
        return !1
    };
    var kt = function (a, b, c, d, e) {
        var f = gt();
        c = c && $a(c, it);
        for (var g = f.createZone(a, c), h = 0; h < b.length; h++) {
            var l = String(b[h]);
            if (f.registerChild(l, L.F, g)) {
                var n = a, p = d, q = e;
                if (0 === l.indexOf("GTM-")) as(l, void 0, !1, {source: 1, fromContainerExecution: !0}); else {
                    var r = Xs("js", Ta());
                    as(l, void 0, !0, {
                        source: 1,
                        fromContainerExecution: !0
                    });
                    var t = {originatingEntity: q};
                    ct(r, n, t);
                    ct(Zs(l, p), n, t)
                }
            }
        }
        return g
    }, lt = function (a, b, c) {
        gt().updateZone(a, b, c)
    };
    var mt = function (a) {
        var b = Zh.zones;
        return b ? b.getIsAllowedFn(ul(), a) : function () {
            return !0
        }
    }, nt = function (a) {
        var b = Zh.zones;
        return b ? b.isActive(ul(), a) : !0
    };
    var qt = function (a, b) {
        for (var c = [], d = 0; d < Ke.length; d++) if (a[d]) {
            var e = Ke[d];
            if (e[je.yj]) continue;
            var f = Ds(b.Cb);
            try {
                var g = Rs(d, {aa: f, Z: f, terminate: f}, b, d);
                if (g) {
                    var h = c, l = h.push, n = d, p = e["function"];
                    if (!p) throw"Error: No function name given for function call.";
                    var q = Me[p];
                    l.call(h, {yi: n, ni: q ? q.priorityOverride || 0 : 0, execute: g})
                } else ot(d, b), f()
            } catch (t) {
                f()
            }
        }
        c.sort(pt);
        for (var r = 0; r < c.length; r++) c[r].execute();
        return 0 < c.length
    };

    function pt(a, b) {
        var c, d = b.ni, e = a.ni;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c; else {
            var g = a.yi, h = b.yi;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }

    function ot(a, b) {
        if (Pm) {
            var c = function (d) {
                var e = b.Yf(Ke[d]) ? "3" : "4", f = Ue(Ke[d][je.Nh], b, []);
                f && f.length && c(f[0].index);
                Bn(b.id, Ke[d], e);
                var g = Ue(Ke[d][je.Sh], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }

    var Wt = !1, rt;
    var bu = function (a) {
        var b = Ua(), c = a["gtm.uniqueEventId"], d = a["gtm.priorityId"], e = a.event;
        if (U(70)) {
            var f = sr(Rq.I.Yc, L.F, c, void 0, e);
            tr(f)
        }
        if ("gtm.js" === e) {
            if (Wt) return !1;
            Wt = !0;
        }
        var l, n = !1;
        if (nt(c)) l = mt(c); else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
            n = !0;
            l = mt(Number.MAX_SAFE_INTEGER)
        }
        An(c,
            e);
        var p = a.eventCallback, q = a.eventTimeout, r = {
            id: c, priorityId: d, name: e, Yf: is(l), ql: [], ii: function () {
                Q(6);
                wb("HEALTH", 0)
            }, Wh: Yt(), Xh: Zt(c), Cb: new zs(function () {
                if (U(70)) {
                    var x = sr(Rq.I.Ah, L.F, c, void 0, e);
                    if (tr(x)) {
                        var A = sr(Rq.I.Yc, L.F, c, void 0, e);
                        ur(x, A)
                    }
                    if ("gtm.load" === e) {
                        var B = sr(Rq.I.Bg, L.F);
                        if (tr(B)) {
                            var C = sr(Rq.I.Te, L.F);
                            ur(B, C)
                        }
                        wr();
                    }
                }
                p && p.apply(p, [].slice.call(arguments, 0))
            }, q)
        }, t = df(r);
        n && (t = $t(t));
        if (U(70)) {
            var u = sr(Rq.I.Bh, L.F, c, void 0, e);
            if (tr(u)) {
                var v = sr(Rq.I.Yc, L.F, c, void 0, e);
                ur(u, v)
            }
        }
        var w = qt(t, r), y = !1;
        Es(r.Cb);
        "gtm.js" !== e && "gtm.sync" !== e || Ls(L.F);
        return au(t, w) || y
    };

    function Zt(a) {
        return function (b) {
            Pm && (Uc(b) || Kn(a, "input", b))
        }
    }

    function Yt() {
        var a = {};
        a.event = Di("event", 1);
        a.ecommerce = Di("ecommerce", 1);
        a.gtm = Di("gtm");
        a.eventModel = Di("eventModel");
        return a
    }

    function $t(a) {
        for (var b = [], c = 0; c < a.length; c++) if (a[c]) {
            var d = String(Ke[c][je.Wa]);
            if (ai[d] || void 0 !== Ke[c][je.Dj] || ri[d]) b[c] = !0;
            U(58) || 0 !== Ke[c][je.Wa].indexOf("__ccd") && 0 !== Ke[c][je.Wa].indexOf("__ogt") && "__set_product_settings" !== Ke[c][je.Wa] || (b[c] = !0)
        }
        return b
    }

    function au(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++) if (a[c] && Ke[c] && !bi[String(Ke[c][je.Wa])]) return !0;
        return !1
    }

    var du = function (a, b, c, d) {
        cu.push("event", [b, a], c, d)
    }, eu = function (a, b, c, d) {
        cu.push("get", [a, b], c, d)
    }, fu = function () {
        this.status = 1;
        this.N = {};
        this.h = {};
        this.B = {};
        this.U = null;
        this.H = {};
        this.D = !1
    }, gu = function (a, b, c, d) {
        var e = Ua();
        this.type = a;
        this.B = e;
        this.ca = b || "";
        this.h = c;
        this.messageContext = d
    }, hu = function () {
        this.B = {};
        this.D = {};
        this.h = []
    }, iu = function (a, b) {
        var c = Jo(b);
        return a.B[c.X] = a.B[c.X] || new fu
    }, ju = function (a, b, c, d) {
        if (d.ca) {
            var e = iu(a, d.ca), f = e.U;
            if (f) {
                var g = K(c), h = K(e.N[d.ca]), l = K(e.H), n = K(e.h),
                    p = K(a.D), q = {};
                if (Pm) try {
                    q = K(vi)
                } catch (v) {
                    Q(72)
                }
                var r = Jo(d.ca).prefix, t = function (v) {
                        Jn(d.messageContext.eventId, r, v);
                        var w = g[T.g.cc];
                        w && J(w)
                    },
                    u = Ip(Gp(Fp(Ep(Cp(Bp(Dp(Ap(zp(yp(new xp(d.messageContext.eventId, d.messageContext.priorityId), g), h), l), n), p), q), d.messageContext.eventMetadata), function () {
                        if (t) {
                            var v = t;
                            t = void 0;
                            v("2")
                        }
                    }), function () {
                        if (t) {
                            var v = t;
                            t = void 0;
                            v("3")
                        }
                    }));
                try {
                    Jn(d.messageContext.eventId, r, "1"), os(d.type, d.ca, u), f(d.ca, b, d.B, u)
                } catch (v) {
                    Jn(d.messageContext.eventId, r, "4")
                }
            }
        }
    };
    hu.prototype.register = function (a, b, c) {
        var d = iu(this, a);
        3 !== d.status && (d.U = b, d.status = 3, c && (K(d.h, c), d.h = c), this.flush())
    };
    hu.prototype.push = function (a, b, c, d) {
        if (void 0 !== c) {
            if (!Jo(c)) return;
            if (c) {
                var e = Jo(c);
                e && 1 === iu(this, c).status && (iu(this, c).status = 2, this.push("require", [{}], e.X, {}))
            }
            iu(this, c).D && (d.deferrable = !1)
        }
        this.h.push(new gu(a, c, b, d));
        d.deferrable || this.flush()
    };
    hu.prototype.flush = function (a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            var f = this.h[0];
            if (f.messageContext.deferrable) !f.ca || iu(this, f.ca).D ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift(); else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = iu(this, f.ca);
                        if (3 !== g.status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        m(f.h[0], function (r, t) {
                            K(cb(r, t), b.D)
                        });
                        break;
                    case "config":
                        g = iu(this, f.ca);
                        e.rb = {};
                        m(f.h[0], function (r) {
                            return function (t, u) {
                                K(cb(t, u), r.rb)
                            }
                        }(e));
                        var h = !!e.rb[T.g.Xc];
                        delete e.rb[T.g.Xc];
                        var l = Jo(f.ca), n = l.X === l.id;
                        h || (n ? g.H = {} : g.N[f.ca] = {});
                        g.D && h || ju(this, T.g.Fa, e.rb, f);
                        g.D = !0;
                        n ? K(e.rb, g.H) : (K(e.rb, g.N[f.ca]), Q(70));
                        d = !0;
                        break;
                    case "event":
                        g = iu(this, f.ca);
                        e.Fd = {};
                        m(f.h[0], function (r) {
                            return function (t, u) {
                                K(cb(t, u), r.Fd)
                            }
                        }(e));
                        ju(this, f.h[1], e.Fd, f);
                        break;
                    case "get":
                        g = iu(this, f.ca);
                        var p = {}, q = (p[T.g.kb] = f.h[0], p[T.g.xb] = f.h[1], p);
                        ju(this, T.g.Ka, q, f)
                }
                this.h.shift();
                ku(this, f)
            }
            e = {rb: e.rb, Fd: e.Fd}
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var ku = function (a, b) {
        if ("require" !== b.type) if (b.ca) for (var c = iu(a, b.ca).B[b.type] || [], d = 0; d < c.length; d++) c[d](); else for (var e in a.B) if (a.B.hasOwnProperty(e)) {
            var f = a.B[e];
            if (f && f.B) for (var g = f.B[b.type] || [], h = 0; h < g.length; h++) g[h]()
        }
    }, lu = function (a, b) {
        var c = cu, d = K(b);
        K(iu(c, a).h, d);
        iu(c, a).h = d
    }, cu = new hu;
    var mf;
    var mu = {}, nu = {}, ou = function (a) {
        for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {Kd: d.Kd, Hd: d.Hd}, e++) {
            var f = a[e];
            if (0 <= f.indexOf("-")) d.Kd = Jo(f), d.Kd && (Ka(vl(), function (p) {
                return function (q) {
                    return p.Kd.X === q
                }
            }(d)) ? b.push(f) : c.push(f)); else {
                var g = mu[f] || [];
                d.Hd = {};
                g.forEach(function (p) {
                    return function (q) {
                        return p.Hd[q] = !0
                    }
                }(d));
                for (var h = ul(), l = 0; l < h.length; l++) if (d.Hd[h[l]]) {
                    b = b.concat(vl());
                    break
                }
                var n = nu[f] || [];
                n.length && (b = b.concat(n))
            }
        }
        return {Ik: b, Lk: c}
    }, pu = function (a) {
        m(mu, function (b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    }, qu = function (a) {
        m(nu, function (b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    };
    var ru = "HA GF G UA AW DC MC".split(" "), su = !1, tu = !1;

    function uu(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {value: si()});
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {eventId: b.eventId, priorityId: b.priorityId}
    }

    var vu = {
        config: function (a, b) {
            var c = uu(a, b);
            if (!(2 > a.length) && k(a[1])) {
                var d = {};
                if (2 < a.length) {
                    if (void 0 != a[2] && !Qc(a[2]) || 3 < a.length) return;
                    d = a[2]
                }
                var e = Jo(a[1]);
                if (e) {
                    An(c.eventId, "gtag.config");
                    var f = e.X, g = e.id !== f;
                    if (g ? -1 === vl().indexOf(f) : -1 === ul().indexOf(f)) {
                        if (!U(61) || !d[T.g.me]) {
                            var h = d[T.g.va] || cu.D[T.g.va];
                            g ? bs(f, h, {
                                source: 2,
                                fromContainerExecution: b.fromContainerExecution
                            }) : as(f, h, !0, {source: 2, fromContainerExecution: b.fromContainerExecution})
                        }
                    } else {
                        if (di && !g && !d[T.g.Xc]) {
                            var l = tu;
                            tu = !0;
                            if (l) return
                        }
                        su || Q(43);
                        if (!b.noTargetGroup) if (g) {
                            qu(e.id);
                            var n = e.id, p = d[T.g.je] || "default";
                            p = String(p).split(",");
                            for (var q = 0; q < p.length; q++) {
                                var r = nu[p[q]] || [];
                                nu[p[q]] = r;
                                0 > r.indexOf(n) && r.push(n)
                            }
                        } else {
                            pu(e.id);
                            var t = e.id, u = d[T.g.je] || "default";
                            u = u.toString().split(",");
                            for (var v = 0; v < u.length; v++) {
                                var w = mu[u[v]] || [];
                                mu[u[v]] = w;
                                0 > w.indexOf(t) && w.push(t)
                            }
                        }
                        delete d[T.g.je];
                        var y = b.eventMetadata || {};
                        y.hasOwnProperty("is_external_event") || (y.is_external_event = !b.fromContainerExecution);
                        b.eventMetadata =
                            y;
                        delete d[T.g.cc];
                        for (var x = g ? [e.id] : vl(), A = 0; A < x.length; A++) {
                            var B = K(b);
                            cu.push("config", [d], x[A], B)
                        }
                    }
                }
            }
        }, consent: function (a, b) {
            if (3 === a.length) {
                Q(39);
                var c = uu(a, b), d = a[1];
                "default" === d ? kl(a[2]) : "update" === d && ll(a[2], c)
            }
        }, event: function (a, b) {
            var c = a[1];
            if (!(2 > a.length) && k(c)) {
                var d;
                if (2 < a.length) {
                    if (!Qc(a[2]) && void 0 != a[2] || 3 < a.length) return;
                    d = a[2]
                }
                var e = d, f = {}, g = (f.event = c, f);
                e && (g.eventModel = K(e), e[T.g.cc] && (g.eventCallback = e[T.g.cc]), e[T.g.de] && (g.eventTimeout = e[T.g.de]));
                var h = uu(a, b), l = h.eventId,
                    n = h.priorityId;
                g["gtm.uniqueEventId"] = l;
                n && (g["gtm.priorityId"] = n);
                if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                var p;
                var q = d, r = q && q[T.g.Ob];
                void 0 === r && (r = yi(T.g.Ob, 2), void 0 === r && (r = "default"));
                if (k(r) || Ia(r)) {
                    var t = r.toString().replace(/\s+/g, "").split(","), u = ou(t), v = u.Ik, w = u.Lk;
                    if (w.length) for (var y = q && q[T.g.va] || cu.D[T.g.va], x = 0; x < w.length; x++) {
                        var A = Jo(w[x]);
                        A && bs(A.X, y, {source: 3, fromContainerExecution: b.fromContainerExecution})
                    }
                    p = Lo(v)
                } else p = void 0;
                var B = p;
                if (B) {
                    An(l,
                        c);
                    for (var C = [], D = 0; D < B.length; D++) {
                        var H = B[D], G = K(b);
                        if (-1 !== ru.indexOf(H.prefix)) {
                            var O = K(d), R = G.eventMetadata || {};
                            R.hasOwnProperty("is_external_event") || (R.is_external_event = !G.fromContainerExecution);
                            G.eventMetadata = R;
                            delete O[T.g.cc];
                            du(c, O, H.id, G)
                        }
                        C.push(H.id)
                    }
                    g.eventModel = g.eventModel || {};
                    0 < B.length ? g.eventModel[T.g.Ob] = C.join() : delete g.eventModel[T.g.Ob];
                    su || Q(43);
                    return b.noGtmEvent ? void 0 : g
                }
            }
        }, get: function (a, b) {
            Q(53);
            if (4 === a.length && k(a[1]) && k(a[2]) && Ea(a[3])) {
                var c = Jo(a[1]), d = String(a[2]),
                    e = a[3];
                if (c) {
                    su || Q(43);
                    var f = cu.D[T.g.va];
                    if (!Ka(vl(), function (h) {
                        return c.X === h
                    })) bs(c.X, f, {
                        source: 4,
                        fromContainerExecution: b.fromContainerExecution
                    }); else if (-1 !== ru.indexOf(c.prefix)) {
                        uu(a, b);
                        var g = {};
                        gl(K((g[T.g.kb] = d, g[T.g.xb] = e, g)));
                        eu(d, function (h) {
                            J(function () {
                                return e(h)
                            })
                        }, c.id, b)
                    }
                }
            }
        }, js: function (a, b) {
            if (2 == a.length && a[1].getTime) {
                su = !0;
                var c = uu(a, b), d = c.eventId, e = c.priorityId, f = {};
                return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
            }
        }, policy: function (a) {
            if (3 ===
                a.length && k(a[1]) && Ea(a[2])) {
                var b = a[1], c = a[2], d = mf.B;
                d.h[b] ? d.h[b].push(c) : d.h[b] = [c];
                if (Q(74), "all" === a[1]) {
                    Q(75);
                    var e = !1;
                    try {
                        e = a[2](L.F, "unknown", {})
                    } catch (f) {
                    }
                    e || Q(76)
                }
            } else {
                Q(73);
            }
        }, set: function (a, b) {
            var c;
            2 == a.length && Qc(a[1]) ? c = K(a[1]) : 3 == a.length && k(a[1]) &&
                (c = {}, Qc(a[2]) || Ia(a[2]) ? c[a[1]] = K(a[2]) : c[a[1]] = a[2]);
            if (c) {
                var d = uu(a, b), e = d.eventId, f = d.priorityId;
                K(c);
                var g = K(c);
                cu.push("set", [g], void 0, b);
                c["gtm.uniqueEventId"] = e;
                f && (c["gtm.priorityId"] = f);
                U(30) && delete c.event;
                b.overwriteModelFields = !0;
                return c
            }
        }
    }, wu = {policy: !0};
    var xu = function (a) {
        var b = z[Yh.ka].hide;
        if (b && void 0 !== b[a] && b.end) {
            b[a] = !1;
            var c = !0, d;
            for (d in b) if (b.hasOwnProperty(d) && !0 === b[d]) {
                c = !1;
                break
            }
            c && (b.end(), b.end = null)
        }
    }, yu = function (a) {
        var b = z[Yh.ka], c = b && b.hide;
        c && c.end && (c[a] = !0)
    };
    var zu = !1, Au = [];

    function Bu() {
        if (!zu) {
            zu = !0;
            for (var a = 0; a < Au.length; a++) J(Au[a])
        }
    }

    var Cu = function (a) {
        zu ? J(a) : Au.push(a)
    };
    var Tu = function (a) {
        if (Su(a)) return a;
        this.Da = a
    };
    Tu.prototype.getUntrustedMessageValue = function () {
        return this.Da
    };
    var Su = function (a) {
        return !a || "object" !== Oc(a) || Qc(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Tu.prototype.getUntrustedMessageValue = Tu.prototype.getUntrustedMessageValue;
    var Uu = 0, Vu = {}, Wu = [], Xu = [], Yu = !1, Zu = !1;

    function $u(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }

    var av = function (a) {
        return z[Yh.ka].push(a)
    }, bv = function (a, b, c) {
        a.eventCallback = b;
        c && (a.eventTimeout = c);
        return av(a)
    }, cv = function (a, b) {
        var c = Zh[Yh.ka], d = c ? c.subscribers : 1, e = 0, f = !1, g = void 0;
        b && (g = z.setTimeout(function () {
            f || (f = !0, a());
            g = void 0
        }, b));
        return function () {
            ++e === d && (g && (z.clearTimeout(g), g = void 0), f || (a(), f = !0))
        }
    };

    function dv(a, b) {
        var c = a._clear || b.overwriteModelFields;
        m(a, function (e, f) {
            "_clear" !== e && (c && Bi(e), Bi(e, f))
        });
        ni || (ni = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = si(), a["gtm.uniqueEventId"] = d, Bi("gtm.uniqueEventId", d));
        return bu(a)
    }

    function ev(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Oa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function fv() {
        var a;
        if (Xu.length) a = Xu.shift(); else if (Wu.length) a = Wu.shift(); else return;
        var b;
        var c = a;
        if (Yu || !ev(c.message)) b = c; else {
            Yu = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = si());
            var e = {}, f = {
                message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                messageContext: {eventId: d - 2}
            }, g = {}, h = {
                message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                messageContext: {eventId: d - 1}
            };
            Wu.unshift(h, c);
            if (Pm && L.F) {
                var l;
                if (L.Df) {
                    var n = L.F, p = Ol().destination[n];
                    l = p && p.context
                } else {
                    var q = L.F, r = Ol().container[q];
                    l = r && r.context
                }
                var t = l, u, v = Qf(z.location.href);
                u = v.hostname + v.pathname;
                var w = t && t.fromContainerExecution, y = t && t.source, x = L.F, A = L.hb, B = L.Df;
                an || (an = u);
                $m.push(x + ";" + A + ";" + (w ? 1 : 0) + ";" + (y || 0) + ";" + (B ? 1 : 0))
            }
            b = f
        }
        return b
    }

    function gv() {
        for (var a = !1, b; !Zu && (b = fv());) {
            Zu = !0;
            delete vi.eventModel;
            xi();
            var c = b, d = c.message, e = c.messageContext;
            if (null == d) Zu = !1; else {
                e.fromContainerExecution && Ci();
                try {
                    if (Ea(d)) try {
                        d.call(zi)
                    } catch (y) {
                    } else if (Ia(d)) {
                        var f = d;
                        if (k(f[0])) {
                            var g = f[0].split("."), h = g.pop(), l = f.slice(1), n = yi(g.join("."), 2);
                            if (null != n) try {
                                n[h].apply(n, l)
                            } catch (y) {
                            }
                        }
                    } else {
                        var p = void 0, q = !1;
                        if (Oa(d)) {
                            a:{
                                if (d.length &&
                                    k(d[0])) {
                                    var r = vu[d[0]];
                                    if (r && (!e.fromContainerExecution || !wu[d[0]])) {
                                        p = r(d, e);
                                        break a
                                    }
                                }
                                p = void 0
                            }
                            (q = p && "set" === d[0] && !!p.event) && Q(101)
                        } else p = d;
                        if (p) {
                            var t = dv(p, e);
                            a = t || a;
                            q && t && Q(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && xi(!0);
                    var u = d["gtm.uniqueEventId"];
                    if ("number" === typeof u) {
                        for (var v = Vu[String(u)] || [], w = 0; w < v.length; w++) Xu.push(hv(v[w]));
                        v.length && Xu.sort($u);
                        delete Vu[String(u)];
                        u > Uu && (Uu = u)
                    }
                    Zu = !1
                }
            }
        }
        return !a
    }

    function iv() {
        if (U(70)) {
            var b = sr(Rq.I.Te, L.F);
            tr(b);
            if (jv()) {
                var c = sr(Rq.I.Dg, L.F);
                if (tr(c)) {
                    var d = sr(Rq.I.Ve, L.F);
                    ur(c, d)
                }
            }
        }
        var e = gv();
        try {
            xu(L.F)
        } catch (f) {
        }
        return e
    }

    function dt(a) {
        if (Uu < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Vu[b] = Vu[b] || [];
            Vu[b].push(a)
        } else Xu.push(hv(a)), Xu.sort($u), J(function () {
            Zu || gv()
        })
    }

    function hv(a) {
        return {message: a.message, messageContext: a.messageContext}
    }

    var kv = function () {
        function a(g) {
            var h = {};
            if (Su(g)) {
                var l = g;
                g = Su(l) ? l.getUntrustedMessageValue() : void 0;
                h.fromContainerExecution = !0
            }
            return {message: g, messageContext: h}
        }

        var b = ic(Yh.ka, []), c = Zh[Yh.ka] = Zh[Yh.ka] || {};
        !0 === c.pruned && Q(83);
        Vu = bt().get();
        et();
        vs(function () {
            if (!c.gtmDom) {
                c.gtmDom = !0;
                var g = {};
                b.push((g.event = "gtm.dom", g))
            }
        });
        Cu(function () {
            if (!c.gtmLoad) {
                c.gtmLoad = !0;
                var g = {};
                b.push((g.event = "gtm.load", g))
            }
        });
        c.subscribers = (c.subscribers || 0) + 1;
        var d = b.push;
        b.push = function () {
            var g;
            if (0 < Zh.SANDBOXED_JS_SEMAPHORE) {
                g =
                    [];
                for (var h = 0; h < arguments.length; h++) g[h] = new Tu(arguments[h])
            } else g = [].slice.call(arguments, 0);
            var l = g.map(function (r) {
                return a(r)
            });
            Wu.push.apply(Wu, l);
            var n = d.apply(b, g), p = Math.max(100, Number("1000") || 300);
            if (this.length > p) for (Q(4), c.pruned = !0; this.length > p;) this.shift();
            var q = "boolean" !== typeof n || n;
            return gv() && q
        };
        var e = b.slice(0).map(function (g) {
            return a(g)
        });
        Wu.push.apply(Wu, e);
        if (jv()) {
            if (U(70)) {
                var f = sr(Rq.I.Ve, L.F);
                tr(f)
            }
            J(iv)
        }
    }, jv = function () {
        var a = !0;
        return a
    };

    function lv(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a), c = Ua();
        return b < c + 3E5 && b > c - 9E5
    }

    function mv(a) {
        return a && 0 === a.indexOf("pending:") ? lv(a.substr(8)) : !1
    };var Pe = {};
    Pe.se = new String("undefined");
    var nv = function (a) {
        this.h = function (b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Pe.se ? b : a[d]);
            return c.join("")
        }
    };
    nv.prototype.toString = function () {
        return this.h("undefined")
    };
    nv.prototype.valueOf = nv.prototype.toString;
    Pe.Gj = nv;
    Pe.Ef = {};
    Pe.Tj = function (a) {
        return new nv(a)
    };
    var ov = {};
    Pe.Xk = function (a, b) {
        var c = si();
        ov[c] = [a, b];
        return c
    };
    Pe.Zh = function (a) {
        var b = a ? 0 : 1;
        return function (c) {
            var d = ov[c];
            if (d && "function" === typeof d[b]) d[b]();
            ov[c] = void 0
        }
    };
    Pe.xk = function (a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    Pe.Rk = function (a) {
        if (a === Pe.se) return a;
        var b = si();
        Pe.Ef[b] = a;
        return 'google_tag_manager["' + L.F + '"].macro(' + b + ")"
    };
    Pe.Kk = function (a, b, c) {
        a instanceof Pe.Gj && (a = a.h(Pe.Xk(b, c)), b = Da);
        return {sk: a, aa: b}
    };
    var pv = function (a, b, c) {
        var d = {
            event: b,
            "gtm.element": a,
            "gtm.elementClasses": zc(a, "className"),
            "gtm.elementId": a["for"] || tc(a, "id") || "",
            "gtm.elementTarget": a.formTarget || zc(a, "target") || ""
        };
        c && (d["gtm.triggers"] = c.join(","));
        d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || zc(a, "href") || a.src || a.code || a.codebase || "";
        return d
    }, qv = function (a) {
        Zh.hasOwnProperty("autoEventsSettings") || (Zh.autoEventsSettings = {});
        var b = Zh.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] =
            {});
        return b[a]
    }, rv = function (a, b, c) {
        qv(a)[b] = c
    }, sv = function (a, b, c, d) {
        var e = qv(a), f = Va(e, b, d);
        e[b] = c(f)
    }, tv = function (a, b, c) {
        var d = qv(a);
        return Va(d, b, c)
    }, uv = function (a) {
        return "string" === typeof a ? a : String(si())
    };
    var Ov = z.clearTimeout, Pv = z.setTimeout, W = function (a, b, c, d) {
            if (sl()) {
                b && J(b)
            } else return nc(a, b, c, d)
        }, Qv = function () {
            return new Date
        }, Rv = function () {
            return z.location.href
        }, Sv = function (a) {
            return Of(Qf(a), "fragment")
        }, Tv = function (a) {
            return Pf(Qf(a))
        }, Uv = function (a, b) {
            return yi(a, b || 2)
        }, Vv = function (a, b, c) {
            return b ? bv(a, b, c) : av(a)
        }, Wv = function (a, b) {
            z[a] = b
        }, X = function (a, b, c) {
            b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        Xv = function (a, b, c) {
            return fj(a, b, void 0 === c ? !0 : !!c)
        }, Yv = function (a, b, c) {
            return 0 === oj(a, b, c)
        }, Zv = function (a, b) {
            if (sl()) {
                b && J(b)
            } else pc(a, b)
        }, $v = function (a) {
            return !!tv(a, "init", !1)
        }, aw = function (a) {
            rv(a, "init", !0)
        }, bw = function (a, b, c) {
            Pm && (Uc(a) || Kn(c, b, a))
        };

    var cw = Pe.Kk;

    function zw(a) {
        return Aw(a) ? 1 : 0
    }

    function Aw(a) {
        var b = a.arg0, c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = K(a, {});
                K({arg1: c[d], any_of: void 0}, e);
                if (zw(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return Zf(b, c);
            case "_css":
                var f;
                a:{
                    if (b) try {
                        for (var g = 0; g < Vf.length; g++) {
                            var h = Vf[g];
                            if (b[h]) {
                                f = b[h](c);
                                break a
                            }
                        }
                    } catch (l) {
                    }
                    f = !1
                }
                return f;
            case "_ew":
                return Wf(b, c);
            case "_eq":
                return $f(b, c);
            case "_ge":
                return ag(b, c);
            case "_gt":
                return cg(b, c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return bg(b, c);
            case "_lt":
                return dg(b, c);
            case "_re":
                return Yf(b, c, a.ignore_case);
            case "_sw":
                return eg(b, c);
            case "_um":
                return fg(b, c)
        }
        return !1
    };

    function Bw(a, b) {
        var c = this;
    }

    Bw.R = "addConsentListener";
    var Cw;
    var Dw = function (a) {
        for (var b = 0; b < a.length; ++b) if (Cw) try {
            a[b]()
        } catch (c) {
            Q(77)
        } else a[b]()
    };

    function Ew(a, b, c) {
        var d = this, e;
        return e
    }

    Ew.O = "internal.addDataLayerEventListener";

    function Fw(a, b, c) {
    }

    Fw.R = "addDocumentEventListener";

    function Gw(a, b, c, d) {
    }

    Gw.R = "addElementEventListener";

    function Hw(a) {
    }

    Hw.R = "addEventCallback";

    function Lw(a) {
    }

    Lw.O = "internal.addFormAbandonmentListener";
    var Mw = {}, Nw = [], Ow = {}, Pw = 0, Qw = 0;

    function Xw(a, b) {
    }

    Xw.O = "internal.addFormInteractionListener";

    function dx(a, b) {
    }

    dx.O = "internal.addFormSubmitListener";

    function ix(a) {
    }

    ix.O = "internal.addGaSendListener";
    var jx = {}, kx = [];
    var rx = function (a, b) {
    };
    rx.O = "internal.addHistoryChangeListener";

    function sx(a, b, c) {
    }

    sx.R = "addWindowEventListener";

    function tx(a, b) {
        return !0
    }

    tx.R = "aliasInWindow";

    function ux(a, b, c) {
    }

    ux.O = "internal.appendRemoteConfigParameter";

    function vx() {
        var a = 2;
        return a
    };

    function wx(a, b) {
        var c;
        M(F(this), ["path:!string"], [a]);
        N(this, "access_globals", "execute", a);
        for (var d = a.split("."), e = z, f = e[d[0]], g = 1; f && g < d.length; g++) if (e = f, f = f[d[g]], e === z || e === I) return;
        if ("function" !== Oc(f)) return;
        for (var h = vx(), l = [], n = 1; n < arguments.length; n++) l.push(Sc(arguments[n], this.h, h));
        var p = (0, this.h.N)(f, e, l);
        c = Rc(p, this.h, h);
        void 0 === c && void 0 !== p && Q(45);
        return c
    }

    wx.R = "callInWindow";

    function xx(a) {
    }

    xx.R = "callLater";

    function yx(a) {
    }

    yx.O = "callOnDomReady";

    function zx(a) {
        M(F(this), ["listener:!Fn"], arguments), N(this, "process_dom_events", "window", "load"), Cu(Sc(a));
    }

    zx.O = "callOnWindowLoad";

    function Ax(a) {
        var b;
        return b
    }

    Ax.O = "internal.computeGtmParameter";

    function Bx(a, b) {
        var c;
        var d = Rc(c, this.h, vx());
        void 0 === d && void 0 !== c && Q(45);
        return d
    }

    Bx.R = "copyFromDataLayer";

    function Cx(a) {
        var b;
        M(F(this), ["path:!string"], arguments);
        N(this, "access_globals", "read", a);
        var c = a.split("."), d = bb(c, [z, I]);
        if (!d) return;
        var e = d[c[c.length - 1]];
        b = Rc(e, this.h, vx());
        void 0 === b && void 0 !== e && Q(45);
        return b
    }

    Cx.R = "copyFromWindow";

    function Dx(a, b) {
        var c;
        return c
    }

    Dx.O = "internal.copyPreHit";

    function Ex(a, b) {
        var c = null, d = vx();
        return Rc(c, this.h, d)
    }

    Ex.R = "createArgumentsQueue";

    function Fx(a) {
        var b;
        return Rc(b, this.h,
            vx())
    }

    Fx.R = "createQueue";
    var Gx = {}, Hx = [], Ix = {}, Jx = 0, Kx = 0;

    function Qx(a, b) {
        var c = this;
        return b
    }

    Qx.O = "internal.enableAutoEventOnFormInteraction";

    function Vx(a, b) {
        var c = this;
        return b
    }

    Vx.O = "internal.enableAutoEventOnFormSubmit";

    function $x() {
        var a = this;
    }

    $x.O = "internal.enableAutoEventOnGaSend";
    var ay = {}, by = [];

    function iy(a, b) {
        var c = this;
        return b
    }

    iy.O = "internal.enableAutoEventOnHistoryChange";

    function my(a, b) {
        var c = this;
        return b
    }

    my.O = "internal.enableAutoEventOnLinkClick";
    var ny, oy;

    function xy(a, b) {
        var c = this;
        return b
    }

    xy.O = "internal.enableAutoEventOnScroll";
    var cc = fa(["data-gtm-yt-inspected-"]), yy = ["www.youtube.com", "www.youtube-nocookie.com"], zy, Ay = !1;

    function Ky(a, b) {
        var c = this;
        return b
    }

    Ky.O = "internal.enableAutoEventOnYouTubeActivity";
    var Ly;

    function My(a) {
        var b = !1;
        return b
    }

    My.O = "internal.evaluateMatchingRules";

    function Wy(a, b) {
        var c = !1;
        return c
    }

    Wy.O = "internal.evaluatePredicates";
    var Xy = function (a) {
        var b;
        return b
    };

    function Yy(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        M(F(this), ["name:!string", "decode:?boolean"], arguments), N(this, "get_cookies", a), c = Rc(fj(a, void 0, !!b), this.h);
        return c
    }

    Yy.R = "getCookieValues";

    function Zy() {
        return sk()
    }

    Zy.O = "internal.getCountryCode";

    function $y() {
        var a = [];
        return Rc(a)
    }

    $y.O = "internal.getDestinationIds";

    function az(a) {
        var b = null;
        return b
    }

    az.R = "getElementById";
    var bz = {};
    bz.enableAdsConversionValidation = U(83);
    bz.enableAdsHistoryChangeEvents = U(36);
    bz.enableAlwaysSendFormStart = U(38);
    bz.enableCcdEmForm = U(82);
    bz.enableCcdEnhancedMeasurement = U(41);
    bz.enableCcdEventBlocking = U(40);
    bz.enableCcdEventEditingAndCreation = U(26);
    bz.enableCcdGaConversions = U(39);
    bz.enableCcdPreAutoPiiDetection = U(49);
    bz.enableCcdUserData = U(16);
    bz.enableEesPagePath = U(43);
    bz.enableEuidAutoMode = U(37);
    bz.enableGa4OnoRemarketing = U(34);
    bz.enableGaGamWindowSet = U(67);
    bz.enableRegExpSandboxApis = U(84);
    bz.includeQueryInEesPagePath = U(57);
    bz.pixieWebSetDeclaredConsentState = U(85);
    bz.autoPiiEligible = vk();

    function cz() {
        return Rc(bz)
    }

    cz.O = "internal.getFlags";

    function dz(a, b) {
        var c;
        return c
    }

    dz.O = "internal.getProductSettingsParameter";

    function ez(a, b) {
        var c;
        return c
    }

    ez.R = "getQueryParameters";

    function fz(a, b) {
        var c;
        return c
    }

    fz.R = "getReferrerQueryParameters";

    function gz(a) {
        var b = "";
        M(F(this), ["component:?string"], arguments), N(this, "get_referrer", a), b = Nf(Qf(I.referrer), a);
        return b
    }

    gz.R = "getReferrerUrl";

    function hz() {
        return tk()
    }

    hz.O = "internal.getRegionCode";

    function iz(a, b) {
        var c;
        return c
    }

    iz.O = "internal.getRemoteConfigParameter";

    function jz(a) {
        var b = "";
        M(F(this), ["component:?string"], arguments), N(this, "get_url", a), b = Of(Qf(z.location.href), a);
        return b
    }

    jz.R = "getUrl";

    function kz() {
        N(this, "get_user_agent");
        return gc.userAgent
    }

    kz.R = "getUserAgent";

    function lz(a) {
        if (!a) return {};
        var b = a.bk;
        return xs(b.type, b.index, b.name)
    }

    function mz(a) {
        return a ? {originatingEntity: lz(a)} : {}
    };

    function oz(a, b) {
    }

    oz.R = "gtagSet";

    function pz(a, b) {
    }

    pz.R = "injectHiddenIframe";
    var qz = {};
    var rz = function (a, b, c, d, e, f) {
        f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [[c], [d]], nc(a, function () {
            for (var g = e[f][0], h = 0; h < g.length; h++) J(g[h]);
            g.push = function (l) {
                J(l);
                return 0
            }
        }, function () {
            for (var g = e[f][1], h = 0; h < g.length; h++) J(g[h]);
            e[f] = null
        }, b)) : nc(a, c, d, b)
    };

    function sz(a, b, c, d) {
        if (!sl()) {
            M(F(this), ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"], arguments);
            N(this, "inject_script", a);
            var e = this.h;
            rz(a, void 0, function () {
                b && b.B(e)
            }, function () {
                c && c.B(e)
            }, qz, d)
        }
    }

    var tz = Object.freeze({dl: 1, id: 1}), uz = {};

    function vz(a, b, c, d) {
    }

    sz.R = "injectScript";
    vz.O = "internal.injectScript";

    function wz(a) {
        var b = !0;
        return b
    }

    wz.R = "isConsentGranted";
    var xz = function () {
        var a = Og(function (b) {
            this.h.h.log("error", b)
        });
        a.R = "JSON";
        return a
    };
    var yz = function () {
        return !1
    }, zz = {
        getItem: function (a) {
            var b = null;
            return b
        }, setItem: function (a,
                              b) {
            return !1
        }, removeItem: function (a) {
        }
    };
    var Az = ["textContent", "value", "tagName", "children", "childElementCount"];

    function Bz(a) {
        var b;
        return b
    }

    Bz.O = "internal.locateUserData";

    function Dz() {
    }

    Dz.R = "logToConsole";

    function Ez(a) {
        var b = void 0;
        return b
    }

    Ez.R = "parseUrl";

    function Fz(a) {
    }

    Fz.O = "internal.processAsNewEvent";

    function Gz(a, b) {
        var c = !1;
        return c
    }

    Gz.R = "queryPermission";

    function Hz() {
        var a = "";
        N(this, "read_character_set"), a = I.characterSet || "";
        return a
    }

    Hz.R = "readCharacterSet";

    function Iz() {
        var a = "";
        N(this, "read_title"), a = I.title || "";
        return a
    }

    Iz.R = "readTitle";

    function Jz(a, b) {
        var c = this;
    }

    Jz.O = "internal.registerCcdCallback";
    var Kz = Object.freeze(["config", "event", "get", "set"]);

    function Lz(a, b, c) {
    }

    Lz.O = "internal.registerGtagCommandListener";

    function Mz(a, b) {
        var c = !1;
        return c
    }

    Mz.O = "internal.removeDataLayerEventListener";

    function Nz() {
    }

    Nz.R = "resetDataLayer";

    function cA() {
        return z.gaGlobal = z.gaGlobal || {}
    }

    var dA = function () {
        var a = cA();
        a.hid = a.hid || La();
        return a.hid
    }, eA = function (a, b) {
        var c = cA();
        if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
    };
    var AA = function () {
        var a = !0;
        Gm(7) && Gm(9) && Gm(10) || (a = !1);
        return a
    }, BA = function () {
        var a = !0;
        Gm(3) && Gm(4) || (a = !1);
        return a
    };
    var bB = window, cB = document, dB = function (a) {
        var b = bB._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === bB["ga-disable-" + a]) return !0;
        try {
            var c = bB.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
        } catch (f) {
        }
        for (var d = $i("AMP_TOKEN", String(cB.cookie), !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return !0;
        return cB.getElementById("__gaOptOutExtension") ? !0 : !1
    };

    function lB(a) {
        m(a, function (c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[T.g.Oa] || {};
        m(b, function (c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };var vB = function (a, b) {
    };

    function uB(a, b) {
        var c = function () {
        };
        return c
    }

    function wB(a, b, c) {
    };
    var xB = function (a, b) {
        var c;
        c = b ? [Hq, Iq, Kq, uq, yq, Mq, zq, Lq, Fq, vq, Pq, Aq, Jq, sq, Nq, pq] : [tq, kq, wq, lq, mq, nq, oq, Bq, Cq, Eq, Gq, xq, Dq, rq, Oq];
        for (var d = 0; d < c.length && (c[d](a), !a.M); d++) ;
    }, yB = function (a, b, c, d) {
        var e = new Yo(b, c, d);
        e.metadata.hit_type = a;
        e.metadata.speculative = !0;
        e.metadata.event_start_timestamp_ms = Ua();
        e.metadata.speculative_in_message = d.eventMetadata.speculative;
        return e
    }, zB = function (a) {
        var b = a.indexOf("/"), c = 3 <= b, d = a.substring(3, c ? b : a.length);
        return {
            id: a, prefix: "AW", X: "AW-" + d, P: [d, c ? a.substring(b +
                1) : void 0]
        }
    }, AB = function (a, b, c, d) {
        function e() {
            for (var q = 0; q < g.length; q++) {
                var r = g[q];
                r.M || (xB(g[q], !0), r.metadata.speculative || r.M || Rr(r))
            }
        }

        var f = Jo(a);
        !f && d.J && (f = zB(a));
        if (f) {
            var g = [];
            if (d.eventMetadata.hit_type_override) {
                var h = d.eventMetadata.hit_type_override;
                Array.isArray(h) || (h = [h]);
                for (var l = 0; l < h.length; l++) {
                    var n = yB(h[l], f, b, d);
                    n.metadata.speculative = !1;
                    g.push(n)
                }
            } else b === T.g.Fa && g.push(yB("landing_page", f, b, d)), g.push(yB("conversion", f, b, d)), g.push(yB("user_data_lead", f, b, d)), g.push(yB("user_data_web",
                f, b, d)), g.push(yB("remarketing", f, b, d));
            for (var p = 0; p < g.length; p++) xB(g[p], !1);
            Xi(function () {
                for (var q = [], r = [], t = 0; t < g.length; t++) {
                    var u = g[t];
                    q.push(u.M);
                    r.push(u.metadata.speculative)
                }
                e();
                Qi(T.g.K) || Yi(function (v) {
                    for (var w = v.consentEventId, y = v.consentPriorityId, x = 0; x < g.length; x++) {
                        var A = g[x];
                        A.metadata.consent_updated = !0;
                        A.metadata.speculative = r[x];
                        A.metadata.event_start_timestamp_ms = Ua();
                        A.M = q[x];
                        A.metadata.consent_event_id = w;
                        A.metadata.consent_priority_id = y
                    }
                    e()
                }, [T.g.K])
            }, [T.g.K])
        }
    };
    var CB = function () {
        var a = Zh.floc;
        if (a) {
            var b = a.ts, c = a.floc;
            if (b && c && 1E3 > Ua() - b) return Promise.resolve(c)
        }
        try {
            return Promise.race([I.interestCohort().then(function (d) {
                Zh.floc = {ts: Ua(), floc: d};
                return d
            }), new Promise(function (d) {
                z.setTimeout(function () {
                    return d()
                }, BB)
            })]).catch(function () {
            })
        } catch (d) {
        }
    }, BB = Number("200"), DB = !1;
    var FB = function () {
            if (!EB && !Op(Np())) {
                if (!im('A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9')) return !1;
                EB = !0
            }
            if (Op(Np())) return !0;
            return !1
        }, JB = function (a, b) {
            function c() {
                var q = a.s.J ? V(a.s, "oref") : Pf(Qf(z.location.href));
                GB(q) && (0, a.metadata.add_parameter)("~oref", !d && f ? Rf(q) : q);
                cp(a);
                if (a.M) J(a.s.Z); else {
                    for (var r = [], t = a.metadata.parameter_order, u = 0; u < t.length; ++u) {
                        var v = t[u];
                        r.push(v + "=" + a.C[v])
                    }
                    var w = n + r.join(";") + "?";
                    a.metadata.send_as_iframe ? pc(w, a.s.aa) : qc(w, a.s.aa, a.s.Z);
                    if (a.metadata.attribution_reporting_experiment) {
                        var y = "https://ad.doubleclick.net/activity;register_conversion=1;" + r.join(";") + "?",
                            x = {headers: {"Attribution-Reporting-Eligible": "trigger"}, keepalive: !0};
                        try {
                            z.fetch(y, x)
                        } catch (B) {
                        }
                    }
                    if (U(27) && d && !1 !== V(a.s, T.g.Ga) && !1 !== V(a.s, T.g.da) && Qp()) {
                        var A = Sp() + "/td/fls/rul/activityi;fledge=1;" + r.join(";") + "?";
                        Rp(A, e.target.id)
                    }
                }
            }

            HB(a);
            var d = a.metadata.consent_ad_storage,
                e = a.metadata.parsed_target, f = a.metadata.redact_ads_data, g = !0 === V(a.s, T.g.Ye);
            if (sl() && g) {
                g = !1
            }
            a.metadata.consent_updated = b;
            a.metadata.promises = [];
            a.metadata.send_as_iframe = g && d;
            for (var h = 0; h < IB.length; ++h) IB[h](a);
            var l = e.target.P[0],
                n = d ? a.metadata.send_as_iframe ? "https://" + l + ".fls.doubleclick.net/activityi;" : "https://ad.doubleclick.net/activity;" : "https://ade.googlesyndication.com/ddm/activity/",
                p = a.metadata.promises;
            if (p.length) try {
                Promise.all(p).then(function () {
                    return c()
                });
                return
            } catch (q) {
            }
            c()
        }, GB = function (a) {
            return !(void 0 === a || 0 === (a + "").length)
        }, KB = function (a) {
            var b = V(a.s, T.g.dj);
            if (Qc(b) && b.exclusion_parameters && b.engines) if (sl()) {
            } else {
                var c = a.metadata.conversion_linker_enabled, d = a.metadata.cookie_options, e = function () {
                    var f = {config: b, gtm: Vl()};
                    c && (jk(d), f.auiddc = dk[fk(d.prefix)]);
                    void 0 === z.__dc_ns_processor && (z.__dc_ns_processor =
                        []);
                    z.__dc_ns_processor.push(f);
                    nc("https://www.googletagmanager.com/dclk/ns/v1.js")
                };
                a.metadata.consent_ad_storage ? e() : Yi(e, T.g.K)
            }
        }, HB = function (a) {
            var b = ml(T.g.K);
            a.metadata.consent_ad_storage = b;
            var c = V(a.s, T.g.oa), d = a.s.J;
            a.metadata.redact_ads_data = void 0 != c && !1 !== c && (!d || !b)
        }, NB = function (a, b, c, d) {
            var e;
            a:{
                var f = Jo(a);
                if (f && (1 === f.P.length || 3 === f.P.length)) {
                    var g = f.P[1] || "", h = f.P[2], l = "", n = 1;
                    if (h) {
                        var p = h.split("+");
                        if (2 !== p.length) {
                            e = void 0;
                            break a
                        }
                        l = p[0];
                        n = LB[p[1].toLowerCase()]
                    }
                    if (n) {
                        e = {
                            target: f,
                            Hj: g, Ij: l, Be: n
                        };
                        break a
                    }
                }
                e = void 0
            }
            var q = e;
            if (q) {
                var r = new Yo(q.target, b, d);
                r.metadata.parsed_target = q;
                for (var t = 0; t < MB.length && (MB[t](r), !r.M); ++t) ;
            } else J(d.Z)
        }, MB = [function (a) {
            a.metadata.conversion_linker_enabled = !1 !== V(a.s, T.g.ya)
        }, function (a) {
            var b = {
                prefix: V(a.s, T.g.La) || V(a.s, T.g.jb),
                domain: V(a.s, T.g.vb),
                Db: V(a.s, T.g.Sa),
                flags: V(a.s, T.g.wb)
            };
            a.metadata.cookie_options = b
        }, HB, function (a) {
            if (a.eventName === T.g.Ka && !a.s.J) {
                var b = {callback: V(a.s, T.g.xb), ji: V(a.s, V(a.s, T.g.kb)), Di: V(a.s, T.g.kb)};
                Lp(b,
                    a.metadata.cookie_options, a.metadata.redact_ads_data, np);
                a.M = !0;
                J(a.s.aa)
            }
        }, function (a) {
            if (a.eventName === T.g.Fa && !a.s.J) {
                var b = a.metadata.conversion_linker_enabled, c = a.metadata.cookie_options, d = a.metadata.redact_ads_data;
                Kp({Yh: b, Rj: V(a.s, T.g.bc), hi: V(a.s, T.g.za) || {}, Ai: V(a.s, T.g.zb)}, c);
                KB(a);
                var e = a.metadata.parsed_target.target, f = eb(vp(a.s, T.g.fa, 2), "."), g = eb(vp(a.s, T.g.fa, 1), ".");
                Go({
                    Kf: !0,
                    sc: b ? c : void 0,
                    Qf: f,
                    eventId: a.s.eventId,
                    Uf: g,
                    Ge: b,
                    priorityId: a.s.priorityId,
                    Le: d,
                    ca: 1 < e.P.length ? e.id : ""
                });
                a.M = !0;
                J(a.s.aa)
            }
        }, function (a) {
            Ti() ? ql(function () {
                JB(a);
                ml(T.g.K) || pl(function () {
                    a.M = !1;
                    JB(a, !0)
                }, T.g.K)
            }, [T.g.K]) : JB(a)
        }], IB = [function (a) {
            var b = {}, c = V(a.s, T.g.cj);
            Qc(c) && m(c, function (g, h) {
                null != h && (b[g] = h)
            });
            var d = [], e = function (g, h, l) {
                b.hasOwnProperty(g) || (h = String(h), l || (h = encodeURIComponent(h)), a.C[g] = h, d.push(g))
            }, f = a.metadata.parsed_target;
            e("src", f.target.P[0]);
            e("type", f.Hj);
            e("cat", f.Ij);
            m(b, function (g, h) {
                g = encodeURIComponent(g);
                h = encodeURIComponent(h);
                a.C[g] = h;
                d.push(g)
            });
            a.metadata.add_parameter =
                e;
            a.metadata.parameter_order = d
        }, function (a) {
            var b = a.metadata.add_parameter, c = a.metadata.parsed_target;
            switch (c.Be) {
                case 2:
                    b("ord", La(1E11, 1E13));
                    return;
                case 3:
                    b("ord", "1");
                    b("num", La(1E11, 1E13));
                    return;
                case 4:
                    var d = V(a.s, T.g.yb);
                    GB(d) && b("ord", d);
                    return
            }
            var e = 5 === c.Be ? "1" : V(a.s, T.g.mh), f = V(a.s, T.g.qa), g = V(a.s, T.g.Va);
            GB(e) && b("qty", e);
            GB(f) && b("cost", f);
            GB(g) && b("ord", g)
        }, function (a) {
            if (a.s.J) {
                var b = a.metadata.add_parameter, c = V(a.s, "u"), d = V(a.s, "tran");
                GB(c) && b("u", c);
                GB(d) && b("tran", d)
            }
        }, function (a) {
            (0, a.metadata.add_parameter)("gtm",
                Vl())
        }, function (a) {
            if (Ti()) {
                var b = a.metadata.add_parameter;
                b("gcs", nl());
                a.metadata.consent_updated && b("gcu", 1)
            }
        }, function (a) {
            var b = a.metadata.add_parameter, c = Em(), d = Fm();
            c && b("gdpr_consent", c);
            d && b("gdpr", d)
        }, function (a) {
            "1" === Qj(!1)._up && (0, a.metadata.add_parameter)("gtm_up", "1")
        }, function (a) {
            !1 === V(a.s, T.g.da) && (0, a.metadata.add_parameter)("npa", 1)
        }, function (a) {
            if (a.metadata.conversion_linker_enabled) {
                var b = a.metadata.add_parameter, c = a.metadata.cookie_options, d = a.metadata.redact_ads_data,
                    e = np(c.prefix,
                        d), f = !1;
                e && e.length && (b("gcldc", e.join(".")), f = !0);
                if (a.metadata.send_as_iframe) {
                    var g = "_gcl" !== mo(c.prefix);
                    if (f || !rp(c.prefix)) {
                        var h = mp(c.prefix, d);
                        h && h.length && (b("gclaw", h.join(".")), Q(59));
                        var l = op(d);
                        l && (g || b("gac", l))
                    } else {
                        var n = jp("gb", c.prefix, d);
                        n.length && b("gclgb", n.join("."));
                        if (!g) {
                            var p = pp(d);
                            p && b("gacgb", p)
                        }
                    }
                }
                jk(c);
                var q = dk[fk(c.prefix)];
                q && b("auiddc", q)
            }
        }, function (a) {
            function b(p, q, r) {
                GB(r) && f.push(p + q + ":" + encodeURIComponent(r + ""))
            }

            var c = a.metadata.parsed_target;
            if (5 === c.Be || 6 ===
                c.Be) {
                var d = a.s.J, e = V(a.s, T.g.ja) || [];
                if (Ia(e)) {
                    for (var f = [], g = 0; g < e.length; g++) {
                        var h = e[g], l = g + 1;
                        b("i", l, h.id);
                        b("p", l, h.price);
                        b("q", l, h.quantity);
                        b("c", l, d ? h[T.g.Oc] : V(a.s, T.g.Oc));
                        b("l", l, d ? h[T.g.Ta] : V(a.s, T.g.Ta));
                        d && b("a", l, h.accountId)
                    }
                    var n = f.join("|");
                    GB(n) && (0, a.metadata.add_parameter)("prd", n, !0)
                }
            }
        }, function (a) {
            var b = V(a.s, T.g.Pc), c = {};
            Qc(b) && m(b, function (h, l) {
                k(l) && OB.test(h) && (c[h] = l)
            });
            for (var d = up(a.s), e = 0; e < d.length; e++) {
                var f = d[e];
                OB.test(f) && (c[f] = f)
            }
            var g = a.metadata.add_parameter;
            m(c, function (h, l) {
                var n = V(a.s, l);
                g(h, n)
            })
        }, function (a) {
            var b = a.metadata.add_parameter, c = eb(vp(a.s, T.g.fa, 1), ".");
            GB(c) && b("gdid", c);
            var d = eb(vp(a.s, T.g.fa, 2), ".");
            GB(d) && b("edid", d)
        }, function (a) {
            var b = a.metadata.consent_ad_storage && FB();
            if (a.metadata.attribution_reporting_experiment = b) {
                var c = a.metadata.add_parameter;
                c("ps", 1);
                c("pcor", La())
            }
        }, function (a) {
            if (a.s.J) {
                var b = V(a.s, T.g.wa);
                if (Qc(b)) {
                    var c = Ch(b);
                    if (c) {
                        var d = a.metadata.add_parameter;
                        a.metadata.promises.push(c.then(function (e) {
                            GB(e.lg) && d("em",
                                e.lg, !0)
                        }))
                    }
                }
            }
        }, function (a) {
        },
            function (a) {
                if (U(55)) if (!Tn(z)) Q(87); else if (void 0 !== Vn) {
                    Q(85);
                    var b = Rn();
                    if (b) {
                        var c = a.metadata.add_parameter;
                        c("uaa", b.architecture);
                        c("uab", b.bitness);
                        b.fullVersionList && c("uafvl", b.fullVersionList.map(function (d) {
                            return encodeURIComponent(d.brand || "") + ";" + encodeURIComponent(d.version || "")
                        }).join("|"));
                        c("uam", b.model);
                        c("uamb", b.mobile ? "1" : "0");
                        c("uap", b.platform);
                        c("uapv", b.platformVersion);
                        c("uaw", b.wow64 ? "1" : "0")
                    } else Q(86)
                }
            }], LB = {"": 1, standard: 2, unique: 3, per_session: 4, transactions: 5, items_sold: 6},
        OB = /^u([1-9]\d?|100)$/, EB = !1;
    var eC = function (a, b) {
        if (!b.J) {
            var c = V(b, T.g.kb), d = V(b, T.g.xb), e = V(b, c);
            if (void 0 === e) {
                var f = void 0;
                bC.hasOwnProperty(c) ? f = bC[c] : cC.hasOwnProperty(c) && (f = cC[c]);
                1 === f && (f = dC(c));
                k(f) ? Gs()(function () {
                    var g = Gs().getByName(a).get(f);
                    d(g)
                }) : d(void 0)
            } else d(e)
        }
    }, fC = function (a, b) {
        var c = a[T.g.jc], d = b + ".", e = a[T.g.V] || "", f = void 0 === c ? !!a.use_anchor : "fragment" === c,
            g = !!a[T.g.Lb];
        e = String(e).replace(/\s+/g, "").split(",");
        var h = Gs();
        h(d + "require", "linker");
        h(d + "linker:autoLink", e, f, g)
    }, jC = function (a, b, c) {
        if (Ti() &&
            (!c.J || !gC[a])) {
            var d = !ml(T.g.W), e = function (f) {
                var g, h, l = Gs(), n = hC(b, "", c), p, q = n.createOnlyFields._useUp;
                if (c.J || iC(b, n.createOnlyFields)) {
                    c.J && (g = "gtm" + si(), h = n.createOnlyFields, n.gtmTrackerName && (h.name = g));
                    l(function () {
                        var t = l.getByName(b);
                        t && (p = t.get("clientId"));
                        c.J || l.remove(b)
                    });
                    l("create", a, c.J ? h : n.createOnlyFields);
                    d &&
                    ml(T.g.W) && (d = !1, l(function () {
                        var t = Gs().getByName(c.J ? g : b);
                        !t || t.get("clientId") == p && q || (c.J ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&gcut"] = Vh[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&gcut"] = Vh[f]), t.set(n.fieldsToSet), c.J ? t.send("pageview") : t.send("pageview", n.fieldsToSend))
                    }));
                    c.J && l(function () {
                        l.remove(g)
                    })
                }
            };
            pl(function () {
                return e(T.g.W)
            }, T.g.W);
            pl(function () {
                return e(T.g.K)
            }, T.g.K);
            c.J && (gC[a] = !0)
        }
    }, kC = function (a, b) {
        Zr() && b && (a[T.g.Kb] = b)
    }, tC = function (a, b, c) {
        function d() {
            var G = V(c,
                T.g.Pc);
            h(function () {
                if (!c.J && Qc(G)) {
                    var O = u.fieldsToSend, R = l().getByName(n), aa;
                    for (aa in G) if (G.hasOwnProperty(aa) && /^(dimension|metric)\d+$/.test(aa) && void 0 != G[aa]) {
                        var pa = R.get(dC(G[aa]));
                        lC(O, aa, pa)
                    }
                }
            })
        }

        function e() {
            if (u.displayfeatures) {
                var G = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                p("require", "displayfeatures", void 0, {cookieName: G})
            }
        }

        var f = a, g = "https://www.google-analytics.com/analytics.js", h = c.J ? Is(V(c, "gaFunctionName")) : Is();
        if (Ea(h)) {
            var l = Gs, n;
            c.J ? n = V(c, "name") || V(c, "gtmTrackerName") :
                n = "gtag_" + f.split("-").join("_");
            var p = function (G) {
                var O = [].slice.call(arguments, 0);
                O[0] = n ? n + "." + O[0] : "" + O[0];
                h.apply(window, O)
            }, q = function (G) {
                var O = function (ka, ca) {
                    for (var ba = 0; ca && ba < ca.length; ba++) p(ka, ca[ba])
                }, R = c.J, aa = R ? mC(u) : nC(b, c);
                if (aa) {
                    var pa = {};
                    kC(pa, G);
                    p("require", "ec", "ec.js", pa);
                    R && aa.Mf && p("set", "&cu", aa.Mf);
                    var P = aa.action;
                    if (R || "impressions" === P) if (O("ec:addImpression", aa.gi), !R) return;
                    if ("promo_click" === P || "promo_view" === P || R && aa.zd) {
                        var S = aa.zd;
                        O("ec:addPromo", S);
                        if (S && 0 < S.length &&
                            "promo_click" === P) {
                            R ? p("ec:setAction", P, aa.Xa) : p("ec:setAction", P);
                            return
                        }
                        if (!R) return
                    }
                    "promo_view" !== P && "impressions" !== P && (O("ec:addProduct", aa.Sb), p("ec:setAction", P, aa.Xa))
                }
            }, r = function (G) {
                if (G) {
                    var O = {};
                    if (Qc(G)) for (var R in oC) oC.hasOwnProperty(R) && pC(oC[R], R, G[R], O);
                    kC(O, y);
                    p("require", "linkid", O)
                }
            }, t = function () {
                if (sl()) {
                } else {
                    var G = V(c, T.g.jj);
                    G && (p("require", G, {dataLayer: Yh.ka}), p("require", "render"))
                }
            }, u = hC(n,
                b, c), v = function (G, O, R) {
                R && (O = "" + O);
                u.fieldsToSend[G] = O
            };
            !c.J && iC(n, u.createOnlyFields) && (h(function () {
                l() && l().remove(n)
            }), qC[n] = !1);
            h("create", f, u.createOnlyFields);
            if (u.createOnlyFields[T.g.Kb] && !c.J) {
                var w = gi || ii ? Yr(u.createOnlyFields[T.g.Kb], "/analytics.js") : void 0;
                w && (g = w)
            }
            var y = c.J ? u.fieldsToSet[T.g.Kb] : u.createOnlyFields[T.g.Kb];
            if (y) {
                var x = c.J ? u.fieldsToSet[T.g.fe] : u.createOnlyFields[T.g.fe];
                x && !qC[n] && (qC[n] = !0, h(Ms(n, x)))
            }
            c.J ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(),
                r(u.linkAttribution));
            var A = u[T.g.za];
            A && A[T.g.V] && fC(A, n);
            p("set", u.fieldsToSet);
            if (c.J) {
                if (u.enableLinkId) {
                    var B = {};
                    kC(B, y);
                    p("require", "linkid", "linkid.js", B)
                }
                Ti() && jC(f, n, c)
            }
            if (b === T.g.Jc) if (c.J) {
                e();
                if (u.remarketingLists) {
                    var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "adfeatures", {cookieName: C})
                }
                q(y);
                p("send", "pageview");
                u.createOnlyFields._useUp && Js(n + ".")
            } else t(), p("send", "pageview", u.fieldsToSend); else b === T.g.Fa ? (t(), Xo(f, c), V(c, T.g.zb) && (yo(["aw", "dc"]), Js(n + ".")), 0 != u.sendPageView &&
            p("send", "pageview", u.fieldsToSend), jC(f, n, c)) : b === T.g.Ka ? eC(n, c) : "screen_view" === b ? p("send", "screenview", u.fieldsToSend) : "timing_complete" === b ? (u.fieldsToSend.hitType = "timing", v("timingCategory", u.eventCategory, !0), c.J ? v("timingVar", u.timingVar, !0) : v("timingVar", u.name, !0), v("timingValue", Pa(u.value)), void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0), p("send", u.fieldsToSend)) : "exception" === b ? p("send", "exception", u.fieldsToSend) : "" === b && c.J || ("track_social" === b && c.J ? (u.fieldsToSend.hitType =
                "social", v("socialNetwork", u.socialNetwork, !0), v("socialAction", u.socialAction, !0), v("socialTarget", u.socialTarget, !0)) : ((c.J || rC[b]) && q(y), c.J && e(), u.fieldsToSend.hitType = "event", v("eventCategory", u.eventCategory, !0), v("eventAction", u.eventAction || b, !0), void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0), void 0 !== u.value && v("eventValue", Pa(u.value))), p("send", u.fieldsToSend));
            if (!sC && !c.J) {
                sC = !0;
                var D = function () {
                    c.Z()
                }, H = function () {
                    l().loaded || D()
                };
                sl() ? J(H) : nc(g, H, D)
            }
        } else J(c.Z)
    }, uC = function (a,
                      b, c, d) {
        ql(function () {
            tC(a, b, d)
        }, [T.g.W, T.g.K])
    }, wC = function (a) {
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
            f("variant", ["variant", "item_variant"]);
            f("list", ["list_name", "item_list_name"]);
            f("position", ["list_position", "creative_slot", "index"]);
            (function () {
                if (e.category) g.category = e.category; else {
                    for (var h = "", l = 0; l <
                    vC.length; l++) void 0 !== e[vC[l]] && (h && (h += "/"), h += e[vC[l]]);
                    h && (g.category = h)
                }
            })();
            f("listPosition", ["list_position"]);
            f("creative", ["creative_name"]);
            f("list", ["list_name"]);
            f("position", ["list_position", "creative_slot"]);
            return g
        }

        for (var c = [], d = 0; a && d < a.length; d++) a[d] && Qc(a[d]) && c.push(b(a[d]));
        return c.length ? c : void 0
    }, xC = function (a) {
        return ml(a)
    }, yC = !1;
    var sC, qC = {}, gC = {}, zC = {}, bC = Object.freeze((zC.client_storage =
            "storage", zC.sample_rate = 1, zC.site_speed_sample_rate = 1, zC.store_gac = 1, zC.use_amp_client_id = 1, zC[T.g.ub] = 1, zC[T.g.ya] = "storeGac", zC[T.g.vb] = 1, zC[T.g.Sa] = 1, zC[T.g.wb] = 1, zC[T.g.Nc] = 1, zC[T.g.af] = 1, zC[T.g.bc] = 1, zC)),
        AC = {},
        BC = Object.freeze((AC._cs = 1, AC._useUp = 1, AC.allowAnchor = 1, AC.allowLinker = 1, AC.alwaysSendReferrer = 1, AC.clientId = 1, AC.cookieDomain = 1, AC.cookieExpires = 1, AC.cookieFlags = 1, AC.cookieName = 1, AC.cookiePath = 1, AC.cookieUpdate = 1, AC.legacyCookieDomain = 1, AC.legacyHistoryImport = 1, AC.name = 1, AC.sampleRate =
            1, AC.siteSpeedSampleRate = 1, AC.storage = 1, AC.storeGac = 1, AC.useAmpClientId = 1, AC._cd2l = 1, AC)),
        CC = Object.freeze({anonymize_ip: 1}), DC = {}, cC = Object.freeze((DC.campaign = {
            content: "campaignContent",
            id: "campaignId",
            medium: "campaignMedium",
            name: "campaignName",
            source: "campaignSource",
            term: "campaignKeyword"
        }, DC.app_id = 1, DC.app_installer_id = 1, DC.app_name = 1, DC.app_version = 1, DC.description = "exDescription", DC.fatal = "exFatal", DC.language = 1, DC.page_hostname = "hostname", DC.transport_type = "transport", DC[T.g.sa] = "currencyCode",
            DC[T.g.fh] = 1, DC[T.g.Ma] = "location", DC[T.g.Tc] = "page", DC[T.g.Ua] = "referrer", DC[T.g.kc] = "title", DC[T.g.nh] = 1, DC[T.g.Aa] = 1, DC)),
        EC = {},
        FC = Object.freeze((EC.content_id = 1, EC.event_action = 1, EC.event_category = 1, EC.event_label = 1, EC.link_attribution = 1, EC.name = 1, EC[T.g.za] = 1, EC[T.g.eh] = 1, EC[T.g.Na] = 1, EC[T.g.qa] = 1, EC)),
        GC = Object.freeze({
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
        vC = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
        HC = {}, oC = Object.freeze((HC.levels = 1, HC[T.g.Sa] = "duration", HC[T.g.Nc] = 1, HC)), IC = {},
        JC = Object.freeze((IC.anonymize_ip = 1, IC.fatal = 1, IC.send_page_view = 1, IC.store_gac = 1, IC.use_amp_client_id = 1, IC[T.g.ya] = 1, IC[T.g.fh] = 1, IC)),
        pC = function (a, b, c, d) {
            if (void 0 !== c) if (JC[b] && (c = Qa(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[dC(b)] = c; else if (k(a)) d[a] =
                c; else for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        }, dC = function (a) {
            return a && k(a) ? a.replace(/(_[a-z])/g, function (b) {
                return b[1].toUpperCase()
            }) : a
        }, KC = {},
        rC = Object.freeze((KC.checkout_progress = 1, KC.select_content = 1, KC.set_checkout_option = 1, KC[T.g.Fc] = 1, KC[T.g.Gc] = 1, KC[T.g.Yb] = 1, KC[T.g.Hc] = 1, KC[T.g.Gb] = 1, KC[T.g.Zb] = 1, KC[T.g.Hb] = 1, KC[T.g.Ia] = 1, KC[T.g.Ic] = 1, KC[T.g.Ja] = 1, KC)),
        LC = {},
        MC = Object.freeze((LC.checkout_progress = 1, LC.set_checkout_option = 1, LC[T.g.Jg] = 1, LC[T.g.Kg] = 1, LC[T.g.Fc] =
            1, LC[T.g.Gc] = 1, LC[T.g.Lg] = 1, LC[T.g.Yb] = 1, LC[T.g.Ia] = 1, LC[T.g.Ic] = 1, LC[T.g.Mg] = 1, LC)),
        NC = {},
        OC = Object.freeze((NC.generate_lead = 1, NC.login = 1, NC.search = 1, NC.select_content = 1, NC.share = 1, NC.sign_up = 1, NC.view_search_results = 1, NC[T.g.Hc] = 1, NC[T.g.Gb] = 1, NC[T.g.Zb] = 1, NC[T.g.Hb] = 1, NC[T.g.Ja] = 1, NC)),
        PC = function (a) {
            var b = "general";
            MC[a] ? b = "ecommerce" : OC[a] ? b = "engagement" : "exception" === a && (b = "error");
            return b
        }, QC = {},
        RC = Object.freeze((QC.view_search_results = 1, QC[T.g.Gb] = 1, QC[T.g.Hb] = 1, QC[T.g.Ja] = 1, QC)),
        lC = function (a,
                       b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        }, SC = function (a) {
            if (Ia(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id, f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        }, hC = function (a, b, c) {
            var d = function (O) {
                return V(c, O)
            }, e = {}, f = {}, g = {}, h = {}, l = SC(d(T.g.ij));
            !c.J && l && lC(f, "exp", l);
            g["&gtm"] = Vl(!0);
            U(69) && !c.J && (g._no_slc = !0);
            Ti() && (h._cs = xC);
            var n = d(T.g.Pc);
            if (!c.J && Qc(n)) for (var p in n) if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) &&
                void 0 != n[p]) {
                var q = d(String(n[p]));
                void 0 !== q && lC(f, p, q)
            }
            for (var r = up(c), t = 0; t < r.length; ++t) {
                var u = r[t];
                if (c.J) {
                    var v = d(u);
                    GC.hasOwnProperty(u) ? e[u] = v : BC.hasOwnProperty(u) ? h[u] = v : g[u] = v
                } else {
                    var w = void 0;
                    w = u !== T.g.fa ? d(u) : vp(c, u);
                    if (FC.hasOwnProperty(u)) pC(FC[u], u, w, e); else if (CC.hasOwnProperty(u)) pC(CC[u], u, w, g); else if (cC.hasOwnProperty(u)) pC(cC[u], u, w, f); else if (bC.hasOwnProperty(u)) pC(bC[u], u, w, h); else if (/^(dimension|metric|content_group)\d+$/.test(u)) pC(1, u, w, f); else if (u === T.g.fa) {
                        if (!yC) {
                            var y =
                                eb(w);
                            y && (f["&did"] = y)
                        }
                        var x = void 0, A = void 0;
                        b === T.g.Fa ? x = eb(vp(c, u), ".") : (x = eb(vp(c, u, 1), "."), A = eb(vp(c, u, 2), "."));
                        x && (f["&gdid"] = x);
                        A && (f["&edid"] = A)
                    } else u === T.g.jb && 0 > r.indexOf(T.g.Nc) && (h.cookieName = w + "_ga")
                }
            }
            !1 !== d(T.g.Wi) && !1 !== d(T.g.Ib) && AA() || (g.allowAdFeatures = !1);
            !1 !== d(T.g.da) && BA() || (g.allowAdPersonalizationSignals = !1);
            !c.J && d(T.g.zb) && (h._useUp = !0);
            if (c.J) {
                h.name = h.name || e.gtmTrackerName;
                var B = g.hitCallback;
                g.hitCallback = function () {
                    Ea(B) && B();
                    c.aa()
                }
            } else {
                lC(h, "cookieDomain", "auto");
                lC(g, "forceSSL", !0);
                lC(e, "eventCategory", PC(b));
                RC[b] && lC(f, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? lC(e, "eventLabel", d(T.g.eh)) : "search" === b || "view_search_results" === b ? lC(e, "eventLabel", d(T.g.pj)) : "select_content" === b && lC(e, "eventLabel", d(T.g.Zi));
                var C = e[T.g.za] || {}, D = C[T.g.ic];
                D || 0 != D && C[T.g.V] ? h.allowLinker = !0 : !1 === D && lC(h, "useAmpClientId", !1);
                f.hitCallback = c.aa;
                h.name = a
            }
            Ti() && (g["&gcs"] = nl(), ml(T.g.W) || (h.storage = "none"), ml(T.g.K) || (g.allowAdFeatures = !1, h.storeGac = !1));
            var H =
                d(T.g.va) || d(T.g.Kb), G = d(T.g.fe);
            H && (c.J || (h[T.g.Kb] = H), h._cd2l = !0);
            G && !c.J && (h[T.g.fe] = G);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = h;
            return e
        }, mC = function (a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.Mf = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.gi = "impressions" === b.translateIfKeyEquals ? wC(d) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.zd = "promoView" === b.translateIfKeyEquals ? wC(e) : e
            }
            if (b.promoClick) {
                c.action =
                    "promo_click";
                var f = b.promoClick.promotions;
                c.zd = "promoClick" === b.translateIfKeyEquals ? wC(f) : f;
                c.Xa = b.promoClick.actionField;
                return c
            }
            for (var g in b) if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                c.action = g;
                var h = b[g].products;
                c.Sb = "products" === b.translateIfKeyEquals ? wC(h) : h;
                c.Xa = b[g].actionField;
                break
            }
            return Object.keys(c).length ? c : null
        }, nC = function (a, b) {
            function c(u) {
                return {
                    id: d(T.g.Va), affiliation: d(T.g.ej), revenue: d(T.g.qa),
                    tax: d(T.g.Qg), shipping: d(T.g.Zd), coupon: d(T.g.fj), list: d(T.g.df) || d(T.g.cf) || u
                }
            }

            for (var d = function (u) {
                return V(b, u)
            }, e = d(T.g.ja), f, g = 0; e && g < e.length && !(f = e[g][T.g.df] || e[g][T.g.cf]); g++) ;
            var h = d(T.g.Pc);
            if (Qc(h)) for (var l = 0; e && l < e.length; ++l) {
                var n = e[l], p;
                for (p in h) h.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != h[p] && lC(n, p, n[h[p]])
            }
            var q = null, r = d(T.g.gj);
            if (a === T.g.Ia || a === T.g.Ic) q = {
                action: a,
                Xa: c(),
                Sb: wC(e)
            }; else if (a === T.g.Fc) q = {action: "add", Xa: c(), Sb: wC(e)}; else if (a === T.g.Gc) q =
                {action: "remove", Xa: c(), Sb: wC(e)}; else if (a === T.g.Ja) q = {
                action: "detail",
                Xa: c(f),
                Sb: wC(e)
            }; else if (a === T.g.Gb) q = {
                action: "impressions",
                gi: wC(e)
            }; else if (a === T.g.Hb) q = {
                action: "promo_view",
                zd: wC(r) || wC(e)
            }; else if ("select_content" === a && r && 0 < r.length || a === T.g.Zb) q = {
                action: "promo_click",
                zd: wC(r) || wC(e)
            }; else if ("select_content" === a || a === T.g.Hc) q = {
                action: "click",
                Xa: {list: d(T.g.df) || d(T.g.cf) || f},
                Sb: wC(e)
            }; else if (a === T.g.Yb || "checkout_progress" === a) {
                var t = {step: a === T.g.Yb ? 1 : d(T.g.Pg), option: d(T.g.Og)};
                q =
                    {action: "checkout", Sb: wC(e), Xa: K(c(), t)}
            } else "set_checkout_option" === a && (q = {
                action: "checkout_option",
                Xa: {step: d(T.g.Pg), option: d(T.g.Og)}
            });
            q && (q.Mf = d(T.g.sa));
            return q
        }, TC = {}, iC = function (a, b) {
            var c = TC[a];
            TC[a] = K(b);
            if (!c) return !1;
            for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };
    var UC = uB;
    var VC = function (a, b, c) {
        for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]))
    };

    function WC(a, b, c, d) {
    }

    WC.O = "internal.sendGtagEvent";

    function XC(a, b, c) {
        M(F(this), ["url:!string", "onSuccess:?Fn", "onFailure:?Fn"], arguments);
        N(this, "send_pixel", a);
        var d = this.h;
        qc(a, function () {
            b instanceof gb && b.B(d)
        }, function () {
            c instanceof gb && c.B(d)
        });
    }

    XC.R = "sendPixel";

    function YC(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    }

    YC.R = "setCookie";

    function ZC(a) {
        M(F(this), ["consentSettings:!DustMap"], arguments);
        for (var b = a.Pb(), c = b.length(), d = 0; d < c; d++) {
            var e = b.get(d);
            e === T.g.Re || U(17) && e === T.g.Se || N(this, "access_consent", e, "write")
        }
        var f = this.h.h, g = f.eventId, h = mz(f), l = Xs("consent", "default", Sc(a));
        ct(l, g, h)
    }

    ZC.R = "setDefaultConsentState";

    function $C(a, b, c) {
        M(F(this), ["path:!string", "value:?*", "overrideExisting:?boolean"], arguments);
        N(this, "access_globals", "readwrite", a);
        var d = a.split("."), e = bb(d, [z, I]), f = d.pop();
        if (e && (void 0 === e[f] || c)) return e[f] = Sc(b, this.h, vx()), !0;
        return !1
    }

    $C.R = "setInWindow";

    function aD(a, b, c) {
    }

    aD.O = "internal.setProductSettingsParameter";

    function bD(a, b, c) {
    }

    bD.O = "internal.setRemoteConfigParameter";

    function cD(a, b, c, d) {
        var e = this;
    }

    cD.R = "sha256";

    function dD(a, b, c) {
    }

    dD.O = "internal.sortRemoteConfigParameters";
    var eD = {}, fD = {};
    eD.R = "templateStorage";
    eD.getItem = function (a) {
        var b = null;
        return b
    };
    eD.setItem = function (a, b) {
    };
    eD.removeItem = function (a) {
    };
    eD.clear = function () {
    };
    var gD = function (a) {
        var b;
        return b
    };

    function hD(a) {
        M(F(this), ["consentSettings:!DustMap"], arguments);
        var b = Sc(a), c;
        for (c in b) b.hasOwnProperty(c) && N(this, "access_consent", c, "write");
        var d = this.h.h;
        ct(Xs("consent", "update", b), d.eventId, mz(d))
    }

    hD.R = "updateConsentState";
    var iD = function () {
        var a = new Yg, b = function (d) {
            var e = d.O;
            if (a.B.hasOwnProperty(e)) throw"Attempting to add a private function which already exists: " + e + ".";
            if (a.h.hasOwnProperty(e)) throw"Attempting to add a private function with an existing API name: " + e + ".";
            a.B[e] = Ea(d) ? sg(e, d) : tg(e, d)
        }, c = function (d) {
            return a.add(d.R, d)
        };
        c(Bw);
        c(Hw);
        c(tx);
        c(wx);
        c(xx);
        c(Bx);
        c(Cx);
        c(Ex);
        c(xz());
        c(Fx);
        c(Yy);
        c(ez);
        c(fz);
        c(gz);
        c(jz);
        c(oz);
        c(pz);
        c(sz);
        c(wz);
        c(Dz);
        c(Ez);
        c(Gz);
        c(Hz);
        c(Iz);
        c(XC);
        c(YC);
        c(ZC);
        c($C);
        c(cD);
        c(eD);
        c(hD);
        a.add("Math", yg());
        a.add("Object", Wg);
        a.add("TestHelper", $g());
        a.add("assertApi", ug);
        a.add("assertThat", vg);
        a.add("decodeUri", Ag);
        a.add("decodeUriComponent", Bg);
        a.add("encodeUri", Cg);
        a.add("encodeUriComponent", Dg);
        a.add("fail", Jg);
        a.add("generateRandom", Kg);
        a.add("getContainerVersion", Lg);
        a.add("getTimestamp", Mg);
        a.add("getTimestampMillis", Mg);
        a.add("getType", Ng);
        a.add("makeInteger", Pg);
        a.add("makeNumber", Qg);
        a.add("makeString", Rg);
        a.add("makeTableMap", Sg);
        a.add("mock", Vg);
        a.add("fromBase64",
            Xy, !("atob" in z));
        a.add("localStorage", zz, !yz());
        a.add("toBase64", gD, !("btoa" in z));
        b(Ew);
        b(Xw);
        b(dx);
        b(ix);
        b(rx);
        b(ux);
        b(zx);
        b(Dx);
        b(Qx);
        b(Vx);
        b($x);
        b(iy);
        b(my);
        b(xy);
        b(Ky);
        b(Eg);
        b(My);
        b(Zy);
        b($y);
        b(cz);
        b(dz);
        b(hz);
        b(iz);
        b(vz);
        b(Bz);
        b(Fz);
        b(Jz);
        b(Lz);
        b(Mz);
        b(WC);
        b(aD);
        b(bD);
        b(dD);
        U(84) && (b(zg), b(ah));
        return function (d) {
            var e;
            if (a.h.hasOwnProperty(d)) e = a.get(d, this); else {
                var f;
                if (f = a.B.hasOwnProperty(d)) {
                    var g = !1, h = this.h.h;
                    if (h) {
                        var l = h.od();
                        if (l) {
                            0 !== l.indexOf("__cvt_") && (g = !0);
                        }
                    } else {
                    }
                    f = g
                }
                if (f) {
                    var n = a.B.hasOwnProperty(d) ? a.B[d] : void 0;
                    n = Zg(d, this) || n;
                    e = n
                } else throw Error(d + " is not a valid API name.");
            }
            return e
        }
    };
    var jD = function () {
        var a = Zh.consumeTestResult;
        if (a && Ea(a)) return !0;
        return !1
    }, kD = function () {
        var a = {};
        return function (b, c, d) {
            if (!jD()) return;
            var e = a[b] || {testName: b, status: c, logMessages: [], elapsedTime: 0};
            a[b] = e;
            switch (c) {
                case 4:
                    e.logMessages.push(d);
                    break;
                case 3:
                    d && (e.error = d);
                    break;
                case 5:
                    e.returnValue = d
            }
            if (2 === c || 3 === c) {
                e.status = c;
                var f = Zh.consumeTestResult;
                f && f(e)
            }
        }
    };
    var lD;

    function mD() {
        var a = lD;
        return function (b, c, d) {
            var e = d && d.event;
            nD(c);
            var f = new kb;
            m(c, function (q, r) {
                var t = Rc(r);
                void 0 === t && void 0 !== r && Q(44);
                f.set(q, t)
            });
            a.h.h.H = af();
            var g = {
                Oj: nf(b),
                eventId: void 0 !== e ? e.id : void 0,
                priorityId: void 0 !== e ? e.priorityId : void 0,
                ye: void 0 !== e ? function (q) {
                    return e.Cb.ye(q)
                } : void 0,
                od: function () {
                    return b
                },
                log: function () {
                },
                bk: {index: d && d.index, type: d && d.type, name: d && d.name}
            };
            if (jD()) {
                var h = kD(), l = void 0, n = void 0;
                g.Ra = {
                    wg: [], ed: {}, Za: function (q, r, t) {
                        1 === r && (l = q);
                        7 === r && (n =
                            t);
                        h(q, r, t)
                    }, hg: Tg()
                };
                g.log = function (q, r) {
                    if (l) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        h(l, 4, {level: q, source: n, message: t})
                    }
                }
            }
            var p = ie(a, g, [b, f]);
            a.h.h.H = void 0;
            p instanceof sa && "return" === p.h && (p = p.B);
            return Sc(p)
        }
    }

    function nD(a) {
        var b = a.gtmOnSuccess, c = a.gtmOnFailure;
        Ea(b) && (a.gtmOnSuccess = function () {
            J(b)
        });
        Ea(c) && (a.gtmOnFailure = function () {
            J(c)
        })
    }

    function oD() {
        lD.h.h.N = function (a, b, c) {
            Zh.SANDBOXED_JS_SEMAPHORE = Zh.SANDBOXED_JS_SEMAPHORE || 0;
            Zh.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                Zh.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function pD(a) {
        void 0 !== a && m(a, function (b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                qi[e] = qi[e] || [];
                qi[e].push(b)
            }
        })
    };var qD = encodeURI, Y = encodeURIComponent, rD = function (a, b, c) {
        qc(a, b, c)
    }, sD = function (a, b) {
        if (!a) return !1;
        var c = Of(Qf(a), "host");
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
    }, tD = function (a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };
    var Z = {m: {}};

    Z.m.jsm = ["customScripts"], function () {
        (function (a) {
            Z.__jsm = a;
            Z.__jsm.o = "jsm";
            Z.__jsm.isVendorTemplate = !0;
            Z.__jsm.priorityOverride = 0;
            Z.__jsm.isInfrastructure = !1
        })(function (a) {
            if (void 0 !== a.vtp_javascript) {
                var b = a.vtp_javascript;
                try {
                    var c = X("google_tag_manager");
                    var d = c && c.e && c.e(b);
                    bw(d, "jsm", a.vtp_gtmEventId);
                    return d
                } catch (e) {
                }
            }
        })
    }();
    Z.m.flc = [], function () {
        (function (a) {
            Z.__flc = a;
            Z.__flc.o = "flc";
            Z.__flc.isVendorTemplate = !0;
            Z.__flc.priorityOverride = 0;
            Z.__flc.isInfrastructure = !1
        })(function (a) {
            var b = !a.hasOwnProperty("vtp_enableConversionLinker") || !!a.vtp_enableConversionLinker,
                c = tD(a.vtp_customVariable || [], "key", "value") || {}, d = {},
                e = (d[T.g.oa] = Uv(T.g.oa), d[T.g.Ye] = !0 === a.vtp_useImageTag ? !1 : !0, d[T.g.La] = a.vtp_conversionCookiePrefix || void 0, d[T.g.ya] = b, d[T.g.yb] = a.vtp_sessionId, d.oref = a.vtp_useImageTag ? void 0 : a.vtp_url, d.tran = a.vtp_transactionVariable,
                    d.u = a.vtp_userVariable, d[T.g.wa] = a.vtp_userDataVariable, d);
            U(27) && (e[T.g.Ga] = Uv(T.g.Ga), e[T.g.da] = Uv(T.g.da));
            for (var f in c) c.hasOwnProperty(f) && (e[f] = c[f]);
            var g = "DC-" + a.vtp_advertiserId + "/" + a.vtp_groupTag + "/" + (a.vtp_activityTag + "+" + ({
                    UNIQUE: "unique",
                    SESSION: "per_session"
                }[a.vtp_ordinalType] || "standard")),
                h = Ip(Hp(Gp(Fp(yp(new xp(a.vtp_gtmEventId, a.vtp_gtmPriorityId), e), a.vtp_gtmOnSuccess), a.vtp_gtmOnFailure)));
            NB(g, "", Date.now(), h)
        })
    }();
    Z.m.c = ["google"], function () {
        (function (a) {
            Z.__c = a;
            Z.__c.o = "c";
            Z.__c.isVendorTemplate = !0;
            Z.__c.priorityOverride = 0;
            Z.__c.isInfrastructure = !1
        })(function (a) {
            bw(a.vtp_value, "c", a.vtp_gtmEventId);
            return a.vtp_value
        })
    }();

    Z.m.d = ["google"], function () {
        (function (a) {
            Z.__d = a;
            Z.__d.o = "d";
            Z.__d.isVendorTemplate = !0;
            Z.__d.priorityOverride = 0;
            Z.__d.isInfrastructure = !1
        })(function (a) {
            var b = null, c = null, d = a.vtp_attributeName;
            if ("CSS" == a.vtp_selectorType) try {
                var e = ch(a.vtp_elementSelector);
                e && 0 < e.length && (b = e[0])
            } catch (f) {
                b = null
            } else b = I.getElementById(a.vtp_elementId);
            b && (d ? c = function () {
                if (b instanceof HTMLInputElement) {
                    var f = b;
                    if ("value" === d) return f.value;
                    if ("checked" === d && ("radio" === f.type || "checkbox" === f.type)) return f.checked
                }
                return tc(b,
                    d)
            }() : c = uc(b));
            return Sa(String(b && c))
        })
    }();
    Z.m.e = ["google"], function () {
        (function (a) {
            Z.__e = a;
            Z.__e.o = "e";
            Z.__e.isVendorTemplate = !0;
            Z.__e.priorityOverride = 0;
            Z.__e.isInfrastructure = !1
        })(function (a) {
            return String(a.vtp_gtmCachedValues.event)
        })
    }();
    Z.m.f = ["google"], function () {
        (function (a) {
            Z.__f = a;
            Z.__f.o = "f";
            Z.__f.isVendorTemplate = !0;
            Z.__f.priorityOverride = 0;
            Z.__f.isInfrastructure = !1
        })(function (a) {
            var b = Uv("gtm.referrer", 1) || I.referrer;
            return b ? a.vtp_component && "URL" != a.vtp_component ? Of(Qf(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Tv(String(b)) : String(b)
        })
    }();
    Z.m.j = ["google"], function () {
        (function (a) {
            Z.__j = a;
            Z.__j.o = "j";
            Z.__j.isVendorTemplate = !0;
            Z.__j.priorityOverride = 0;
            Z.__j.isInfrastructure = !1
        })(function (a) {
            for (var b = String(a.vtp_name).split("."), c = X(b.shift()), d = 0; d < b.length; d++) c = c && c[b[d]];
            bw(c, "j", a.vtp_gtmEventId);
            return c
        })
    }();
    Z.m.k = ["google"], function () {
        (function (a) {
            Z.__k = a;
            Z.__k.o = "k";
            Z.__k.isVendorTemplate = !0;
            Z.__k.priorityOverride = 0;
            Z.__k.isInfrastructure = !1
        })(function (a) {
            return Xv(a.vtp_name, Uv("gtm.cookie", 1), !!a.vtp_decodeCookie)[0]
        })
    }();
    Z.m.access_globals = ["google"], function () {
        function a(b, c, d) {
            var e = {key: d, read: !1, write: !1, execute: !1};
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
        }

        (function (b) {
            Z.__access_globals = b;
            Z.__access_globals.o = "access_globals";
            Z.__access_globals.isVendorTemplate = !0;
            Z.__access_globals.priorityOverride = 0;
            Z.__access_globals.isInfrastructure = !1
        })(function (b) {
            for (var c =
                b.vtp_keys || [], d = b.vtp_createPermissionError, e = [], f = [], g = [], h = 0; h < c.length; h++) {
                var l = c[h], n = l.key;
                l.read && e.push(n);
                l.write && f.push(n);
                l.execute && g.push(n)
            }
            return {
                assert: function (p, q, r) {
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
                }, ba: a
            }
        })
    }();
    Z.m.r = ["google"], function () {
        (function (a) {
            Z.__r = a;
            Z.__r.o = "r";
            Z.__r.isVendorTemplate = !0;
            Z.__r.priorityOverride = 0;
            Z.__r.isInfrastructure = !1
        })(function (a) {
            return La(a.vtp_min, a.vtp_max)
        })
    }();
    Z.m.u = ["google"], function () {
        var a = function (b) {
            return {
                toString: function () {
                    return b
                }
            }
        };
        (function (b) {
            Z.__u = b;
            Z.__u.o = "u";
            Z.__u.isVendorTemplate = !0;
            Z.__u.priorityOverride = 0;
            Z.__u.isInfrastructure = !1
        })(function (b) {
            var c;
            c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Uv("gtm.url", 1)) || Rv();
            var d = b[a("vtp_component")];
            if (!d || "URL" == d) return Tv(String(c));
            var e = Qf(String(c)), f;
            if ("QUERY" === d) a:{
                var g = b[a("vtp_multiQueryKeys").toString()], h = b[a("vtp_queryKey").toString()] || "",
                    l = b[a("vtp_ignoreEmptyQueryParam").toString()],
                    n;
                g ? Ia(h) ? n = h : n = String(h).replace(/\s+/g, "").split(",") : n = [String(h)];
                for (var p = 0; p < n.length; p++) {
                    var q = Of(e, "QUERY", void 0, void 0, n[p]);
                    if (void 0 != q && (!l || "" !== q)) {
                        f = q;
                        break a
                    }
                }
                f = void 0
            } else f = Of(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
            return f
        })
    }();
    Z.m.v = ["google"], function () {
        (function (a) {
            Z.__v = a;
            Z.__v.o = "v";
            Z.__v.isVendorTemplate = !0;
            Z.__v.priorityOverride = 0;
            Z.__v.isInfrastructure = !1
        })(function (a) {
            var b = a.vtp_name;
            if (!b || !b.replace) return !1;
            var c = Uv(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1), d = void 0 !== c ? c : a.vtp_defaultValue;
            bw(d, "v", a.vtp_gtmEventId);
            return d
        })
    }();

    Z.m.get_referrer = ["google"], function () {
        function a(b, c, d) {
            return {component: c, queryKey: d}
        }

        (function (b) {
            Z.__get_referrer = b;
            Z.__get_referrer.o = "get_referrer";
            Z.__get_referrer.isVendorTemplate = !0;
            Z.__get_referrer.priorityOverride = 0;
            Z.__get_referrer.isInfrastructure = !1
        })(function (b) {
            var c = "any" === b.vtp_urlParts ? null : [];
            c && (b.vtp_protocol && c.push("protocol"), b.vtp_host && c.push("host"), b.vtp_port && c.push("port"), b.vtp_path && c.push("path"), b.vtp_extension && c.push("extension"), b.vtp_query && c.push("query"));
            var d = c && "any" !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null, e = b.vtp_createPermissionError;
            return {
                assert: function (f, g, h) {
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
                }, ba: a
            }
        })
    }();

    Z.m.cid = ["google"], function () {
        (function (a) {
            Z.__cid = a;
            Z.__cid.o = "cid";
            Z.__cid.isVendorTemplate = !0;
            Z.__cid.priorityOverride = 0;
            Z.__cid.isInfrastructure = !1
        })(function () {
            return L.F
        })
    }();
    Z.m.gclidw = ["google"], function () {
        var a = ["aw", "dc", "gf", "ha", "gb"];
        (function (b) {
            Z.__gclidw = b;
            Z.__gclidw.o = "gclidw";
            Z.__gclidw.isVendorTemplate = !0;
            Z.__gclidw.priorityOverride = 100;
            Z.__gclidw.isInfrastructure = !1
        })(function (b) {
            J(b.vtp_gtmOnSuccess);
            var c, d, e, f;
            b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain, f = b.vtp_cookieFlags);
            var g = {prefix: e, path: c, domain: d, flags: f};
            !b.vtp_enableCrossDomainFeature || b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming || !b.vtp_enableCrossDomain &&
            !Yj() || (to(a, g), U(73) && mk(g));
            qo(g);
            wo(["aw", "dc"], g);
            qp(g);
            if (b.vtp_enableCrossDomainFeature && b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                var h = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                vo(a, h, b.vtp_urlPosition, !!b.vtp_formDecoration, g.prefix);
                U(73) && nk(h, b.vtp_urlPosition, !!b.vtp_formDecoration, g)
            }
            var l = Uv(T.g.oa);
            Go({
                eventId: b.vtp_gtmEventId,
                priorityId: b.vtp_gtmPriorityId,
                Kf: !1,
                Le: void 0 != l && !1 !== l,
                sc: g,
                Ge: !0
            });
            b.vtp_enableUrlPassthrough && yo(["aw", "dc", "gb"])
        })
    }();
    Z.m.read_title = ["google"], function () {
        (function (a) {
            Z.__read_title = a;
            Z.__read_title.o = "read_title";
            Z.__read_title.isVendorTemplate = !0;
            Z.__read_title.priorityOverride = 0;
            Z.__read_title.isInfrastructure = !1
        })(function () {
            return {
                assert: function () {
                }, ba: function () {
                    return {}
                }
            }
        })
    }();
    Z.m.process_dom_events = ["google"], function () {
        function a(b, c, d) {
            return {targetType: c, eventName: d}
        }

        (function (b) {
            Z.__process_dom_events = b;
            Z.__process_dom_events.o = "process_dom_events";
            Z.__process_dom_events.isVendorTemplate = !0;
            Z.__process_dom_events.priorityOverride = 0;
            Z.__process_dom_events.isInfrastructure = !1
        })(function (b) {
            for (var c = b.vtp_targets || [], d = b.vtp_createPermissionError, e = {}, f = 0; f < c.length; f++) {
                var g = c[f];
                e[g.targetType] = e[g.targetType] || [];
                e[g.targetType].push(g.eventName)
            }
            return {
                assert: function (h,
                                  l, n) {
                    if (!e[l]) throw d(h, {}, "Prohibited event target " + l + ".");
                    if (-1 === e[l].indexOf(n)) throw d(h, {}, "Prohibited listener registration for DOM event " + n + ".");
                }, ba: a
            }
        })
    }();
    Z.m.aev = ["google"], function () {
        function a(r, t, u, v, w) {
            w || (w = "element");
            var y = t + "." + u, x;
            if (n.hasOwnProperty(y)) x = n[y]; else {
                var A = r[w];
                if (A && (x = v(A), n[y] = x, p.push(y), 35 < p.length)) {
                    var B = p.shift();
                    delete n[B]
                }
            }
            return x
        }

        function b(r, t, u) {
            var v = r[q[t]];
            return void 0 !== v ? v : u
        }

        function c(r, t) {
            if (!r) return !1;
            var u = d(Rv());
            Ia(t) || (t = String(t || "").replace(/\s+/g, "").split(","));
            for (var v = [u], w = 0; w < t.length; w++) {
                var y = t[w];
                if (y.hasOwnProperty("is_regex")) if (y.is_regex) try {
                    y = new RegExp(y.domain)
                } catch (B) {
                    continue
                } else y =
                    y.domain;
                var x = d(r);
                if (y instanceof RegExp) {
                    if (y.test(x)) return !1
                } else {
                    var A = y;
                    if (0 != A.length) {
                        if (0 <= x.indexOf(A)) return !1;
                        v.push(d(A))
                    }
                }
            }
            return !sD(r, v)
        }

        function d(r) {
            l.test(r) || (r = "http://" + r);
            return Of(Qf(r), "HOST", !0)
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
                    var y = t.interactedFormFieldPosition;
                    return void 0 === y ? v : y;
                case "INTERACT_SEQUENCE_NUMBER":
                    var x = t.interactSequenceNumber;
                    return void 0 === x ? v : x;
                default:
                    return v
            }
        }

        function f(r) {
            switch (r.tagName.toLowerCase()) {
                case "input":
                    return tc(r, "value");
                case "button":
                    return uc(r);
                default:
                    return null
            }
        }

        function g(r) {
            if ("form" === r.tagName.toLowerCase() && r.elements) {
                for (var t = 0, u = 0; u < r.elements.length; u++) xv(r.elements[u]) && t++;
                return t
            }
        }

        function h(r, t, u) {
            var v = r.interactedFormField;
            return v && tc(v, t) || u
        }

        var l = /^https?:\/\//i, n = {}, p = [], q = {
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
        (function (r) {
            Z.__aev = r;
            Z.__aev.o = "aev";
            Z.__aev.isVendorTemplate = !0;
            Z.__aev.priorityOverride = 0;
            Z.__aev.isInfrastructure = !1
        })(function (r) {
            var t =
                r.vtp_gtmEventId, u = r.vtp_defaultValue, v = r.vtp_varType, w = r.vtp_gtmCachedValues.gtm;
            switch (v) {
                case "TAG_NAME":
                    var y = w.element;
                    return y && y.tagName || u;
                case "TEXT":
                    return a(w, t, v, uc) || u;
                case "URL":
                    var x;
                    a:{
                        var A = String(w.elementUrl || u || ""), B = Qf(A), C = String(r.vtp_component || "URL");
                        switch (C) {
                            case "URL":
                                x = A;
                                break a;
                            case "IS_OUTBOUND":
                                x = c(A, r.vtp_affiliatedDomains);
                                break a;
                            default:
                                x = Of(B, C, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey)
                        }
                    }
                    return x;
                case "ATTRIBUTE":
                    var D;
                    if (void 0 === r.vtp_attribute) D = b(w,
                        v, u); else {
                        var H = w.element;
                        D = H && tc(H, r.vtp_attribute) || u || ""
                    }
                    return D;
                case "MD":
                    var G = r.vtp_mdValue, O = a(w, t, "MD", Jv);
                    return G && O ? Mv(O, G) || u : O || u;
                case "FORM":
                    return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, u);
                default:
                    var R = b(w, v, u);
                    bw(R, "aev", r.vtp_gtmEventId);
                    return R
            }
        })
    }();
    Z.m.hl = ["google"], function () {
        function a(f) {
            return f.target && f.target.location && f.target.location.href ? f.target.location.href : Rv()
        }

        function b(f, g) {
            rc(f, "hashchange", function (h) {
                var l = a(h);
                g({source: "hashchange", state: null, url: Tv(l), T: Sv(l)})
            })
        }

        function c(f, g) {
            rc(f, "popstate", function (h) {
                var l = a(h);
                g({source: "popstate", state: h.state, url: Tv(l), T: Sv(l)})
            })
        }

        function d(f, g, h) {
            var l = g.history, n = l[f];
            if (Ea(n)) try {
                l[f] = function (p, q, r) {
                    n.apply(l, [].slice.call(arguments, 0));
                    h({
                        source: f, state: p, url: Tv(Rv()),
                        T: Sv(Rv())
                    })
                }
            } catch (p) {
            }
        }

        function e() {
            var f = {source: null, state: X("history").state || null, url: Tv(Rv()), T: Sv(Rv())};
            return function (g) {
                var h = f, l = {};
                l[h.source] = !0;
                l[g.source] = !0;
                if (!l.popstate || !l.hashchange || h.T != g.T) {
                    var n = {
                        event: "gtm.historyChange",
                        "gtm.historyChangeSource": g.source,
                        "gtm.oldUrlFragment": f.T,
                        "gtm.newUrlFragment": g.T,
                        "gtm.oldHistoryState": f.state,
                        "gtm.newHistoryState": g.state,
                        "gtm.oldUrl": f.url,
                        "gtm.newUrl": g.url
                    };
                    f = g;
                    Vv(n)
                }
            }
        }

        (function (f) {
            Z.__hl = f;
            Z.__hl.o = "hl";
            Z.__hl.isVendorTemplate =
                !0;
            Z.__hl.priorityOverride = 0;
            Z.__hl.isInfrastructure = !1
        })(function (f) {
            var g = X("self");
            if (!$v("hl")) {
                var h = e();
                b(g, h);
                c(g, h);
                d("pushState", g, h);
                d("replaceState", g, h);
                aw("hl")
            }
            J(f.vtp_gtmOnSuccess)
        })
    }();
    Z.m.smm = ["google"], function () {
        (function (a) {
            Z.__smm = a;
            Z.__smm.o = "smm";
            Z.__smm.isVendorTemplate = !0;
            Z.__smm.priorityOverride = 0;
            Z.__smm.isInfrastructure = !1
        })(function (a) {
            var b = a.vtp_input, c = tD(a.vtp_map, "key", "value") || {},
                d = c.hasOwnProperty(b) ? c[b] : a.vtp_defaultValue;
            bw(d, "smm", a.vtp_gtmEventId);
            return d
        })
    }();


    Z.m.lcl = [], function () {
        function a() {
            var c = X("document"), d = 0, e = function (f) {
                var g = f.target;
                if (g && 3 !== f.which && !(f.Zf || f.timeStamp && f.timeStamp === d)) {
                    d = f.timeStamp;
                    g = wc(g, ["a", "area"], 100);
                    if (!g) return f.returnValue;
                    var h = f.defaultPrevented || !1 === f.returnValue, l = tv("lcl", h ? "nv.mwt" : "mwt", 0), n;
                    n = h ? tv("lcl", "nv.ids", []) : tv("lcl", "ids", []);
                    if (n.length) {
                        var p = pv(g, "gtm.linkClick", n);
                        if (b(f, g, c) && !h && l && g.href) {
                            var q = !!Ka(String(zc(g, "rel") || "").split(" "), function (v) {
                                    return "noreferrer" === v.toLowerCase()
                                }),
                                r = X((zc(g, "target") || "_self").substring(1)), t = !0, u = cv(function () {
                                    var v;
                                    if (v = t && r) {
                                        var w;
                                        a:if (q) {
                                            var y;
                                            try {
                                                y = new MouseEvent(f.type, {bubbles: !0})
                                            } catch (x) {
                                                if (!c.createEvent) {
                                                    w = !1;
                                                    break a
                                                }
                                                y = c.createEvent("MouseEvents");
                                                y.initEvent(f.type, !0, !0)
                                            }
                                            y.Zf = !0;
                                            f.target.dispatchEvent(y);
                                            w = !0
                                        } else w = !1;
                                        v = !w
                                    }
                                    v && (r.location.href = zc(g, "href"))
                                }, l);
                            if (Vv(p, u, l)) t = !1; else return f.preventDefault && f.preventDefault(), f.returnValue = !1
                        } else Vv(p, function () {
                        }, l || 2E3);
                        return !0
                    }
                }
            };
            rc(c, "click", e, !1);
            rc(c, "auxclick", e, !1)
        }

        function b(c, d, e) {
            if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
            var f = zc(d, "href"), g = f.indexOf("#"), h = zc(d, "target");
            if (h && "_self" !== h && "_parent" !== h && "_top" !== h || 0 === g) return !1;
            if (0 < g) {
                var l = Tv(f), n = Tv(e.location);
                return l !== n
            }
            return !0
        }

        (function (c) {
            Z.__lcl = c;
            Z.__lcl.o = "lcl";
            Z.__lcl.isVendorTemplate = !0;
            Z.__lcl.priorityOverride = 0;
            Z.__lcl.isInfrastructure = !1
        })(function (c) {
            var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
                e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
                f = Number(c.vtp_waitForTagsTimeout);
            if (!f || 0 >= f) f = 2E3;
            var g = c.vtp_uniqueTriggerId || "0";
            if (d) {
                var h = function (n) {
                    return Math.max(f, n)
                };
                sv("lcl", "mwt", h, 0);
                e || sv("lcl", "nv.mwt", h, 0)
            }
            var l = function (n) {
                n.push(g);
                return n
            };
            sv("lcl", "ids", l, []);
            e || sv("lcl", "nv.ids", l, []);
            $v("lcl") || (a(), aw("lcl"));
            J(c.vtp_gtmOnSuccess)
        })
    }();

    Z.m.ctv = ["google"], function () {
        (function (a) {
            Z.__ctv = a;
            Z.__ctv.o = "ctv";
            Z.__ctv.isVendorTemplate = !0;
            Z.__ctv.priorityOverride = 0;
            Z.__ctv.isInfrastructure = !1
        })(function () {
            return "460"
        })
    }();

    Z.m.send_pixel = ["google"], function () {
        function a(b, c) {
            return {url: c}
        }

        (function (b) {
            Z.__send_pixel = b;
            Z.__send_pixel.o = "send_pixel";
            Z.__send_pixel.isVendorTemplate = !0;
            Z.__send_pixel.priorityOverride = 0;
            Z.__send_pixel.isInfrastructure = !1
        })(function (b) {
            var c = b.vtp_allowedUrls || "specific", d = b.vtp_urls || [], e = b.vtp_createPermissionError;
            return {
                assert: function (f, g) {
                    if (!k(g)) throw e(f, {}, "URL must be a string.");
                    try {
                        if ("any" === c && kg(Qf(g)) || "specific" === c && lg(Qf(g), d)) return
                    } catch (h) {
                        throw e(f, {}, "Invalid URL filter.");
                    }
                    throw e(f, {}, "Prohibited URL: " + g + ".");
                }, ba: a
            }
        })
    }();


    Z.m.ua = ["google"], function () {
        function a(l, n) {
            for (var p in l) if (!h[p] && l.hasOwnProperty(p)) {
                var q = g[p] ? Qa(l[p]) : l[p];
                "anonymizeIp" != p || q || (q = void 0);
                n[p] = q
            }
        }

        function b(l) {
            var n = {};
            l.vtp_gaSettings && K(tD(l.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
            K(tD(l.vtp_fieldsToSet, "fieldName", "value"), n);
            Qa(n.urlPassthrough) && (n._useUp = !0);
            l.vtp_transportUrl && (n._x_19 = l.vtp_transportUrl);
            return n
        }

        function c(l, n) {
            return void 0 === n ? n : l(n)
        }

        function d(l, n, p) {
        }

        function e(l, n) {
            if (!f) {
                var p = l.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                l.vtp_useInternalVersion && !l.vtp_useDebugVersion && (p = "internal/" + p);
                f = !0;
                var q = l.vtp_gtmOnFailure, r = gi || ii ? Yr(n._x_19, "/analytics.js") : void 0,
                    t = Mo("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
                W("analytics.js" === p && r ? r : t, function () {
                    var u = Gs();
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
        }, h = {urlPassthrough: !0};
        (function (l) {
            Z.__ua = l;
            Z.__ua.o = "ua";
            Z.__ua.isVendorTemplate = !0;
            Z.__ua.priorityOverride = 0;
            Z.__ua.isInfrastructure = !1
        })(function (l) {
            function n() {
                if (l.vtp_doubleClick || "DISPLAY_FEATURES" == l.vtp_advertisingFeaturesType) v.displayfeatures =
                    !0
            }

            var p = {}, q = {}, r = {};
            if (l.vtp_gaSettings) {
                var t = l.vtp_gaSettings;
                K(tD(t.vtp_contentGroup, "index", "group"), p);
                K(tD(t.vtp_dimension, "index", "dimension"), q);
                K(tD(t.vtp_metric, "index", "metric"), r);
                var u = K(t);
                u.vtp_fieldsToSet = void 0;
                u.vtp_contentGroup = void 0;
                u.vtp_dimension = void 0;
                u.vtp_metric = void 0;
                l = K(l, u)
            }
            K(tD(l.vtp_contentGroup, "index", "group"), p);
            K(tD(l.vtp_dimension, "index", "dimension"), q);
            K(tD(l.vtp_metric, "index", "metric"), r);
            var v = b(l), w = String(l.vtp_trackingId || ""), y = "", x = "", A = "";
            l.vtp_setTrackerName &&
            "string" == typeof l.vtp_trackerName ? "" !== l.vtp_trackerName && (A = l.vtp_trackerName, x = A + ".") : (A = "gtm" + si(), x = A + ".");
            var B = function (ca, ba) {
                for (var Fa in ba) ba.hasOwnProperty(Fa) && (v[ca + Fa] = ba[Fa])
            };
            B("contentGroup", p);
            B("dimension", q);
            B("metric", r);
            l.vtp_enableEcommerce && (y = l.vtp_gtmCachedValues.event, v.gtmEcommerceData = d(l, v, y));
            if ("TRACK_EVENT" === l.vtp_trackType) y = "track_event", n(), v.eventCategory = String(l.vtp_eventCategory), v.eventAction = String(l.vtp_eventAction), v.eventLabel = c(String, l.vtp_eventLabel),
                v.value = c(Pa, l.vtp_eventValue); else if ("TRACK_PAGEVIEW" == l.vtp_trackType) {
                if (y = T.g.Jc, n(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == l.vtp_advertisingFeaturesType && (v.remarketingLists = !0), l.vtp_autoLinkDomains) {
                    var C = {};
                    C[T.g.V] = l.vtp_autoLinkDomains;
                    C.use_anchor = l.vtp_useHashAutoLink;
                    C[T.g.Lb] = l.vtp_decorateFormsAutoLink;
                    v[T.g.za] = C
                }
            } else "TRACK_SOCIAL" === l.vtp_trackType ? (y = "track_social", v.socialNetwork = String(l.vtp_socialNetwork), v.socialAction = String(l.vtp_socialAction), v.socialTarget = String(l.vtp_socialActionTarget)) :
                "TRACK_TIMING" == l.vtp_trackType && (y = "timing_complete", v.eventCategory = String(l.vtp_timingCategory), v.timingVar = String(l.vtp_timingVar), v.value = Pa(l.vtp_timingValue), v.eventLabel = c(String, l.vtp_timingLabel));
            l.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
            l.vtp_enableLinkId && (v.enableLinkId = !0);
            var D = {};
            a(v, D);
            v.name || (D.gtmTrackerName = A);
            D.gaFunctionName = l.vtp_functionName;
            void 0 !== l.vtp_nonInteraction && (D.nonInteraction = l.vtp_nonInteraction);
            var H = Ip(Hp(Gp(Fp(yp(new xp(l.vtp_gtmEventId, l.vtp_gtmPriorityId),
                D), l.vtp_gtmOnSuccess), l.vtp_gtmOnFailure)));
            uC(w, y, Date.now(), H);
            var G = Is(l.vtp_functionName);
            if (Ea(G)) {
                var O = function (ca) {
                    var ba = [].slice.call(arguments, 0);
                    ba[0] = x + ba[0];
                    G.apply(window, ba)
                };
                if ("TRACK_TRANSACTION" == l.vtp_trackType) {
                } else if ("DECORATE_LINK" == l.vtp_trackType) {
                } else if ("DECORATE_FORM" == l.vtp_trackType) {
                } else if ("TRACK_DATA" == l.vtp_trackType) {
                }
                e(l, v)
            } else J(l.vtp_gtmOnFailure)
        })
    }();
    Z.m.get_url = ["google"], function () {
        function a(b, c, d) {
            return {component: c, queryKey: d}
        }

        (function (b) {
            Z.__get_url = b;
            Z.__get_url.o = "get_url";
            Z.__get_url.isVendorTemplate = !0;
            Z.__get_url.priorityOverride = 0;
            Z.__get_url.isInfrastructure = !1
        })(function (b) {
            var c = "any" === b.vtp_urlParts ? null : [];
            c && (b.vtp_protocol && c.push("protocol"), b.vtp_host && c.push("host"), b.vtp_port && c.push("port"), b.vtp_path && c.push("path"), b.vtp_extension && c.push("extension"), b.vtp_query && c.push("query"), b.vtp_fragment && c.push("fragment"));
            var d = c && "any" !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null, e = b.vtp_createPermissionError;
            return {
                assert: function (f, g, h) {
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
                }, ba: a
            }
        })
    }();
    Z.m.inject_script = ["google"], function () {
        function a(b, c) {
            return {url: c}
        }

        (function (b) {
            Z.__inject_script = b;
            Z.__inject_script.o = "inject_script";
            Z.__inject_script.isVendorTemplate = !0;
            Z.__inject_script.priorityOverride = 0;
            Z.__inject_script.isInfrastructure = !1
        })(function (b) {
            var c = b.vtp_urls || [], d = b.vtp_createPermissionError;
            return {
                assert: function (e, f) {
                    if (!k(f)) throw d(e, {}, "Script URL must be a string.");
                    try {
                        if (lg(Qf(f), c)) return
                    } catch (g) {
                        throw d(e, {}, "Invalid script URL filter.");
                    }
                    throw d(e, {}, "Prohibited script URL: " +
                        f);
                }, ba: a
            }
        })
    }();
    Z.m.gas = ["google"], function () {
        (function (a) {
            Z.__gas = a;
            Z.__gas.o = "gas";
            Z.__gas.isVendorTemplate = !0;
            Z.__gas.priorityOverride = 0;
            Z.__gas.isInfrastructure = !1
        })(function (a) {
            var b = K(a), c = b;
            c[je.Wa] = null;
            c[je.Cf] = null;
            var d = b = c;
            d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
            var e = d.vtp_cookieDomain;
            void 0 !== e && (d.vtp_fieldsToSet.push({fieldName: "cookieDomain", value: e}), delete d.vtp_cookieDomain);
            return b
        })
    }();
    Z.m.awct = ["google"], function () {
        function a(b, c, d) {
            return function (e, f, g) {
                c[e] = "DATA_LAYER" === d ? Uv(g) : b[f]
            }
        }

        (function (b) {
            Z.__awct = b;
            Z.__awct.o = "awct";
            Z.__awct.isVendorTemplate = !0;
            Z.__awct.priorityOverride = 0;
            Z.__awct.isInfrastructure = !1
        })(function (b) {
            var c = !b.hasOwnProperty("vtp_enableConversionLinker") || !!b.vtp_enableConversionLinker,
                d = !!b.vtp_enableEnhancedConversions || !!b.vtp_enableEnhancedConversion,
                e = tD(b.vtp_customVariables, "varName", "value") || {}, f = {},
                g = (f[T.g.qa] = b.vtp_conversionValue || 0, f[T.g.sa] =
                    b.vtp_currencyCode, f[T.g.Va] = b.vtp_orderId, f[T.g.La] = b.vtp_conversionCookiePrefix, f[T.g.ya] = c, f[T.g.Md] = d, f[T.g.oa] = Uv(T.g.oa), f[T.g.fa] = Uv("developer_id"), f);
            g[T.g.Ga] = Uv(T.g.Ga), g[T.g.da] = Uv(T.g.da), g[T.g.Jb] = Uv(T.g.Jb), g[T.g.Na] = Uv(T.g.Na);
            b.vtp_rdp && (g[T.g.Mb] = !0);
            if (b.vtp_enableCustomParams) for (var h in e) Xh.hasOwnProperty(h) || (g[h] = e[h]);
            if (b.vtp_enableProductReporting) {
                var l = a(b, g, b.vtp_productReportingDataSource);
                l(T.g.Rd, "vtp_awMerchantId", "aw_merchant_id");
                l(T.g.Pd, "vtp_awFeedCountry", "aw_feed_country");
                l(T.g.Qd, "vtp_awFeedLanguage", "aw_feed_language");
                l(T.g.Od, "vtp_discount", "discount");
                l(T.g.ja, "vtp_items", "items")
            }
            b.vtp_enableShippingData && (g[T.g.Wc] = b.vtp_deliveryPostalCode, g[T.g.be] = b.vtp_estimatedDeliveryDate, g[T.g.Oc] = b.vtp_deliveryCountry, g[T.g.Zd] = b.vtp_shippingFee);
            b.vtp_transportUrl && (g[T.g.va] = b.vtp_transportUrl);
            if (b.vtp_enableNewCustomerReporting) {
                var n = a(b, g, b.vtp_newCustomerReportingDataSource);
                n(T.g.Sc, "vtp_awNewCustomer", "new_customer");
                n(T.g.Yd, "vtp_awCustomerLTV", "customer_lifetime_value")
            }
            var p;
            a:{
                if (b.vtp_enableEnhancedConversion) {
                    var q = b.vtp_cssProvidedEnhancedConversionValue || b.vtp_enhancedConversionObject;
                    if (q) {
                        p = {enhanced_conversions_mode: "manual", enhanced_conversions_manual_var: q};
                        break a
                    }
                }
                p = void 0
            }
            var r = p;
            if (r) {
                var t = {};
                g[T.g.Rc] = (t[b.vtp_conversionLabel] = r, t)
            }
            var u = Ip(Hp(Gp(Fp(yp(new xp(b.vtp_gtmEventId, b.vtp_gtmPriorityId), g), b.vtp_gtmOnSuccess), b.vtp_gtmOnFailure))),
                v = "AW-" +
                    b.vtp_conversionId + "/" + b.vtp_conversionLabel;
            u.eventMetadata.hit_type_override = "conversion";
            AB(v, T.g.Ia, Date.now(), u)
        })
    }();
    Z.m.remm = ["google"], function () {
        (function (a) {
            Z.__remm = a;
            Z.__remm.o = "remm";
            Z.__remm.isVendorTemplate = !0;
            Z.__remm.priorityOverride = 0;
            Z.__remm.isInfrastructure = !1
        })(function (a) {
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
            bw(f, "remm", a.vtp_gtmEventId);
            return f
        })
    }();


    Z.m.hid = ["google"], function () {
        (function (a) {
            Z.__hid = a;
            Z.__hid.o = "hid";
            Z.__hid.isVendorTemplate = !0;
            Z.__hid.priorityOverride = 0;
            Z.__hid.isInfrastructure = !1
        })(function () {
            return Pe.se
        })
    }();


    Z.m.zone = [], function () {
        var a = {}, b = function (c) {
            for (var d = 0; d < c.length; d++) if (!c[d]) return !1;
            return !0
        };
        (function (c) {
            Z.__zone = c;
            Z.__zone.o = "zone";
            Z.__zone.isVendorTemplate = !0;
            Z.__zone.priorityOverride = 0;
            Z.__zone.isInfrastructure = !1
        })(function (c) {
            var d = b(c.vtp_boundaries || []);
            if (c.vtp_gtmTagId in a) lt(a[c.vtp_gtmTagId], c.vtp_gtmEventId, d); else if (d) {
                var e = c.vtp_childContainers.map(function (l) {
                    return l.publicId
                }), f = c.vtp_enableTypeRestrictions ?
                    c.vtp_whitelistedTypes.map(function (l) {
                        return l.typeId
                    }) : null, g = {};
                var h = kt(c.vtp_gtmEventId, e, f, g, xs(1, c.vtp_gtmEntityIndex, c.vtp_gtmEntityName));
                a[c.vtp_gtmTagId] = h
            }
            J(c.vtp_gtmOnSuccess)
        })
    }();
    Z.m.html = ["customScripts"], function () {
        function a(d, e, f, g) {
            return function () {
                try {
                    if (0 < e.length) {
                        var h = e.shift(), l = a(d, e, f, g);
                        if ("SCRIPT" == String(h.nodeName).toUpperCase() && "text/gtmscript" == h.type) {
                            var n = I.createElement("script");
                            n.async = !1;
                            n.type = "text/javascript";
                            n.id = h.id;
                            n.text = h.text || h.textContent || h.innerHTML || "";
                            h.charset && (n.charset = h.charset);
                            var p = h.getAttribute("data-gtmsrc");
                            p && (n.src = p, jc(n, l));
                            d.insertBefore(n, null);
                            p || l()
                        } else if (h.innerHTML && 0 <= h.innerHTML.toLowerCase().indexOf("<script")) {
                            for (var q =
                                []; h.firstChild;) q.push(h.removeChild(h.firstChild));
                            d.insertBefore(h, null);
                            a(h, q, l, g)()
                        } else d.insertBefore(h, null), l()
                    } else f()
                } catch (r) {
                    J(g)
                }
            }
        }

        function b(d) {
            if (I.body) {
                var e = d.vtp_gtmOnFailure, f = cw(d.vtp_html, d.vtp_gtmOnSuccess, e), g = f.sk, h = f.aa;
                if (d.vtp_useIframe) {
                } else d.vtp_supportDocumentWrite ? c(g, h, e) : a(I.body, vc(g), h, e)()
            } else Pv(function () {
                b(d)
            }, 200)
        }

        Z.__html = b;
        Z.__html.o =
            "html";
        Z.__html.isVendorTemplate = !0;
        Z.__html.priorityOverride = 0;
        Z.__html.isInfrastructure = !1
    }();

    Z.m.img = ["customPixels"], function () {
        (function (a) {
            Z.__img = a;
            Z.__img.o = "img";
            Z.__img.isVendorTemplate = !0;
            Z.__img.priorityOverride = 0;
            Z.__img.isInfrastructure = !1
        })(function (a) {
            var b = vc('<a href="' + a.vtp_url + '"></a>')[0].href, c = a.vtp_cacheBusterQueryParam;
            if (a.vtp_useCacheBuster) {
                c || (c = "gtmcb");
                var d = b.charAt(b.length - 1), e = 0 <= b.indexOf("?") ? "?" == d || "&" == d ? "" : "&" : "?";
                b += e + c + "=" + a.vtp_randomNumber
            }
            rD(b, a.vtp_gtmOnSuccess, a.vtp_gtmOnFailure)
        })
    }();


    Z.m.get_cookies = ["google"], function () {
        function a(b, c) {
            return {name: c}
        }

        (function (b) {
            Z.__get_cookies = b;
            Z.__get_cookies.o = "get_cookies";
            Z.__get_cookies.isVendorTemplate = !0;
            Z.__get_cookies.priorityOverride = 0;
            Z.__get_cookies.isInfrastructure = !1
        })(function (b) {
            var c = b.vtp_cookieAccess || "specific", d = b.vtp_cookieNames || [], e = b.vtp_createPermissionError;
            return {
                assert: function (f, g) {
                    if (!k(g)) throw e(f, {}, "Cookie name must be a string.");
                    if ("any" !== c && !("specific" === c && 0 <= d.indexOf(g))) throw e(f, {}, 'Access to cookie "' +
                        g + '" is prohibited.');
                }, ba: a
            }
        })
    }();
    Z.m.read_character_set = ["google"], function () {
        (function (a) {
            Z.__read_character_set = a;
            Z.__read_character_set.o = "read_character_set";
            Z.__read_character_set.isVendorTemplate = !0;
            Z.__read_character_set.priorityOverride = 0;
            Z.__read_character_set.isInfrastructure = !1
        })(function () {
            return {
                assert: function () {
                }, ba: function () {
                    return {}
                }
            }
        })
    }();
    var LE = {};
    LE.macro = function (a) {
        if (Pe.Ef.hasOwnProperty(a)) return Pe.Ef[a]
    }, LE.onHtmlSuccess = Pe.Zh(!0), LE.onHtmlFailure = Pe.Zh(!1);
    LE.dataLayer = zi;
    LE.callback = function (a) {
        pi.hasOwnProperty(a) && Ea(pi[a]) && pi[a]();
        delete pi[a]
    };
    LE.bootstrap = 0;
    LE._spx = !1;

    function ME() {
        Zh[L.F] = Zh[L.F] || LE;
        L.hb && (Zh["ctid_" + L.hb] = LE);
        Pl();
        Rl() || m(Sl(), function (a, b) {
            bs(a, b.transportUrl, b.context);
            Q(92)
        });
        Ya(qi, Z.m);
        Qe();
        Re = ef
    }

    (function (a) {
        function b() {
            l = I.documentElement.getAttribute("data-tag-assistant-present");
            lv(l) && (h = g.rj)
        }

        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (I.referrer) {
                var d = Qf(I.referrer);
                c = "cct.google" === Nf(d, "host")
            }
            if (!c) {
                var e = fj("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0, nc("https://cct.google/taggy/agent.js"))
        }
        if (ki) a(); else {
            var f = function (u) {
                    var v = "GTM", w = "GTM";
                    ei ? (v = "OGT", w = "GTAG") : ki && (w = v = "OPT");
                    var y = z["google.tagmanager.debugui2.queue"];
                    y || (y = [],
                        z["google.tagmanager.debugui2.queue"] = y, nc("https://" + Yh.Ld + "/debug/bootstrap?id=" + L.F + "&src=" + w + "&cond=" + u + "&gtm=" + Vl()));
                    var x = {
                        messageType: "CONTAINER_STARTING",
                        data: {scriptSource: hc, containerProduct: v, debug: !1, id: L.F, isGte: di}
                    };
                    x.data.resume = function () {
                        a()
                    };
                    Yh.Ki && (x.data.initialPublish = !0);
                    y.push(x)
                }, g = {Cl: 1, sj: 2, Ej: 3, Mi: 4, rj: 5}, h = void 0, l = void 0,
                n = Of(z.location, "query", !1, void 0, "gtm_debug");
            lv(n) && (h = g.sj);
            if (!h && I.referrer) {
                var p = Qf(I.referrer);
                "tagassistant.google.com" === Nf(p, "host") && (h = g.Ej)
            }
            if (!h) {
                var q =
                    fj("__TAG_ASSISTANT");
                q.length && q[0].length && (h = g.Mi)
            }
            h || b();
            if (!h && mv(l)) {
                var r = function () {
                    if (t) return !0;
                    t = !0;
                    b();
                    h && hc ? f(h) : a()
                }, t = !1;
                rc(I, "TADebugSignal", function () {
                    r()
                }, !1);
                z.setTimeout(function () {
                    r()
                }, 200)
            } else h && hc ? f(h) : a()
        }
    })(function () {
        var a = !1;
        a && yr("INIT");
        if (U(70)) {
            var b =
                sr(Rq.I.Ue, L.F);
            tr(b)
        }
        Hi().B();
        Dm();
        if (L.hb ? Zh["ctid_" + L.hb] : Zh[L.F]) {
            var c = Zh.zones;
            c && c.unregisterChild(ul());
        } else {
            (U(11) || U(13) || U(55) || U(48)) && Wn();
            for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) Ge.push(e[f]);
            for (var g = d.tags || [], h = 0; h < g.length; h++) Ke.push(g[h]);
            for (var l = d.predicates || [], n = 0; n < l.length; n++) Je.push(l[n]);
            for (var p = d.rules || [], q = 0; q < p.length; q++) {
                for (var r = p[q], t = {}, u = 0; u < r.length; u++) t[r[u][0]] = Array.prototype.slice.call(r[u], 1);
                Ie.push(t)
            }
            Me = Z;
            Ne = zw;
            mf = new lf;
            var v = data.sandboxed_scripts, w = data.security_groups, y = data.infra, x = data.runtime || [],
                A = data.runtime_lines;
            lD = new ge;
            oD();
            Fe = mD();
            var B = lD, C = iD();
            nb(B.h, "require", C);
            for (var D = 0; D < x.length; D++) {
                var H = x[D];
                if (!Ia(H) || 3 > H.length) {
                    if (0 === H.length) continue;
                    break
                }
                A && A[D] && A[D].length && Ye(H, A[D]);
                try {
                    lD.execute(H)
                } catch (Wa) {
                }
            }
            if (void 0 !== v) for (var G =
                ["sandboxedScripts"], O = 0; O < v.length; O++) {
                var R = v[O].replace(/^_*/, "");
                qi[R] = G
            }
            pD(w);
            if (void 0 !== y) for (var aa = 0; aa < y.length; aa++) ri[y[aa]] = !0;
            ME();
            kv();
            qs = !1;
            rs = 0;
            if ("interactive" == I.readyState && !I.createEventObject || "complete" == I.readyState) ts(); else {
                rc(I, "DOMContentLoaded", ts);
                rc(I, "readystatechange", ts);
                if (I.createEventObject && I.documentElement.doScroll) {
                    var pa = !0;
                    try {
                        pa = !z.frameElement
                    } catch (Wa) {
                    }
                    pa && us()
                }
                rc(z, "load", ts)
            }
            zu = !1;
            "complete" === I.readyState ? Bu() : rc(z, "load", Bu);
            Pm && z.setInterval(Um, 864E5);
            wb("HEALTH", 1);
            oi = Ua();
            LE.bootstrap = oi;
            if (a) {
                var ca = zr("INIT");
            }
            if (U(70)) {
                var ba = sr(Rq.I.Cg, L.F);
                if (tr(ba)) {
                    var Fa = sr(Rq.I.Ue, L.F);
                    ur(ba, Fa)
                }
            }
        }
    });

})()
