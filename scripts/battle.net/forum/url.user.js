// ==UserScript==

// @name          battle.net forums url enhancer
// @namespace     https://github.com/dreignier/web-hacks
// @description   Convert URLs in clickable links in posts.
// @include       http*://*.battle.net/*/forum/topic/*
// @version       1.1

// @grant         GM_addStyle
// @require       ../../../js/UrlEnhancer.js
// @resource      css ../../../css/UrlEnhancer.css

// ==/UserScript==

try {
	GM_addStyle(GM_getResourceText('css'));

	var enhancer = new UrlEnhancer({
		filter : function(url) {
			return !url.contains('battle.net');
		}
	});

	$('.topic-post:not(.blizzard) .post-detail').each(function() {
		var $post = $(this);
		$post.html(enhancer.enhance($post.html()));
	});
} catch (error) {
	console.error("url.user.js");
	console.error(error);
}