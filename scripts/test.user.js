// ==UserScript==
// @name          Test scripts
// @namespace     https://github.com/dreignier/web-hacks
// @description   Just a test script, don't mind me
// @downloadURL   https://github.com/dreignier/web-hacks/raw/master/scripts/test.user.js
// @updateURL     https://github.com/dreignier/web-hacks/raw/master/scripts/test.user.js
// @include       *
// @version       1.0
// @resource 	  css ../css/test.css
// ==/UserScript==

GM_addStyle(GM_getResourceText('css'));
console.log('This is a test !');