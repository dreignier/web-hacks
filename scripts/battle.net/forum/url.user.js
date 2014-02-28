// ==UserScript==
// @name          battle.net forums url enhancer
// @namespace     https://github.com/dreignier/web-hacks
// @description   Convert URLs in clickable links in posts.
// @include       http*://*.battle.net/*/forum/topic/*
// @version       1.0

// @require       ../../../js/UrlEnhancer.js
// ==/UserScript==

try {
	var enhancer = new UrlEnhancer({
		filter : function(url) {
			return !url.contains('battle.net');
		}
	});

	$('.topic-post:not(.blizzard)').each(function() {
		var $post = $(this).find('.post-detail');
		$post.html(enhancer.enhance($post.html())):
	});
} catch (error) {
	console.error("url.user.js");
	console.error(error);
}