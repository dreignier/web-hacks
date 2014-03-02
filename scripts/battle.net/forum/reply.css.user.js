// ==UserScript==

// @name          battle.net.forum.reply.css
// @namespace     https://github.com/dreignier/web-hacks
// @description   Improve the way to reply on battle.net forums
// @include       http*://*.battle.net/*/forum/topic/*
// @exclude       http*://*.battle.net/*/forum/topic/*/edit
// @version       1.1

// @grant         GM_addStyle
// @grant         GM_getResourceText
// @resource      css ../../../css/battle.net/forum/reply.css

// ==/UserScript==

try {
    GM_addStyle(GM_getResourceText('css'));
} catch (error) {
    console.error("reply.css.user.js");
    console.error(error);
}