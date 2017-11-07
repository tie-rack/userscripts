// ==UserScript==
// @name         Gmail ghost people widget
// @namespace    https://kilosecond.com/
// @homepage     https://github.com/tie-rack/userscripts
// @version      0.1
// @description  Get the space from the People Widget back in Gmail
// @author       tie-rack
// @match        https://mail.google.com/*
// @grant        none
// @license      MPL 2.0; https://www.mozilla.org/en-US/MPL/2.0/
// ==/UserScript==

(() => {
  'use strict';

  const MAIL_VIEW_RE = /inbox\/[0-9a-f]+/;

  const locationHashTrigger = function() {
    if (MAIL_VIEW_RE.test(location.hash)) {
      document.querySelector('[role=main]').style.paddingRight = '300px';
    }
  };

  window.addEventListener('hashchange', locationHashTrigger);
})();
