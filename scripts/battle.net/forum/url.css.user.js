// ==UserScript==

// @name          battle.net.forum.url.css
// @namespace     https://github.com/dreignier/web-hacks
// @description   Convert URLs in clickable links in posts.
// @include       http*://*.battle.net/*/forum/topic/*
// @version       1.5

// @grant         GM_addStyle
// @grant         GM_getResourceText
// @resource      css ../../../css/UrlEnhancer.css

// ==/UserScript==

try {
	GM_addStyle(GM_getResourceText('css'));
} catch (error) {
	console.error("url.css.user.js");
	console.error(error);
}