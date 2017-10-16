// ==UserScript==
// @name         Dinosaur Helper
// @namespace    https://kilosecond.com/
// @homepage     https://github.com/tie-rack/userscripts
// @version      0.1
// @description  There's so much extra
// @author       tie-rack
// @match        http://*.qwantz.com/*
// @grant        none
// @license      MPL 2.0; https://www.mozilla.org/en-US/MPL/2.0/
// ==/UserScript==

(() => {
  'use strict';

  const css = `
.kilosecond--subtitle {
  background-color: #FFFFCC;
  border: 1px solid yellow;
  font-variant: normal;
  margin: 10px 20px;
  padding: 1em;
  width: 735px;
}
`;

  const attachCSS = () => {
    const style = document.createElement('style');
    style.textContent = css;

    document.head.appendChild(style);
  };

  const createSubtitle = (parent, subtitle) => {
    const div = document.createElement('div');
    div.className = 'kilosecond--subtitle';
    div.textContent = subtitle;

    parent.appendChild(div);
  };

  const comic = document.querySelector('img.comic');

  if (comic) {
    const parent = comic.parentElement;

    const title = comic.title;

    const mailto = document.querySelector('.topnav a[href^="mailto"]');
    const subject = (new URLSearchParams((new URL(mailto.href)).search)).get('subject');

    attachCSS();
    createSubtitle(parent, title);
    createSubtitle(parent, subject);
  }
})();
