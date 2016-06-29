// ==UserScript==

// @name          codingame.com.no-chat
// @namespace     https://github.com/dreignier/web-hacks
// @description   Remove the chat from codingame
// @include       http*://*.codingame.com/*
// @exclude       
// @version       1.3

// @grant         none

// ==/UserScript==

try {
    angular.module('chat')

    .config(['$provide', function($provide) {
        $provide.decorator('chatService', function($delegate) {
            $delegate.deleteChat();
            return $delegate;
        });
    }]);

    $(function() {
        $('body').addClass('hide_chat');
    })
} catch (error) {
    console.error("codingame.com.script");
    console.error(error);
}