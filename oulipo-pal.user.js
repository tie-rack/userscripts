// ==UserScript==
// @name         oulipo.social pal
// @namespace    https://kilosecond.com/
// @homepage     https://github.com/tie-rack/userscripts
// @version      0.1
// @description  A pal for typing oulipian toots.
// @author       tie-rack
// @match        https://oulipo.social/*
// @grant        none
// @license      MPL 2.0; https://www.mozilla.org/en-US/MPL/2.0/
// ==/UserScript==

(() => {
    'use strict';

    var $ = window.jQuery;

    var e = /e/i;

    var defaultColor = $("textarea").css("color");
    var defaultBackgroundColor = $("textarea").css("backgroundColor");

    var redOnE = function(event) {
        var $textarea = $(event.target);

        if (e.test($textarea.val())) {
            $textarea.css("color", "red");
            $textarea.css("backgroundColor", "#fee");
        } else {
            $textarea.css("color", defaultColor);
            $textarea.css("backgroundColor", defaultBackgroundColor);
        }
    };

    $("textarea").on("input", redOnE);
})();
