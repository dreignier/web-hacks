// ==UserScript==

// @name          codingame.com.no-chat
// @namespace     https://github.com/dreignier/web-hacks
// @description   Remove the chat from codingame
// @include       http*://*.codingame.com/*
// @exclude       
// @version       1.1

// @grant         none

// ==/UserScript==

try {
    angular.module('chat')

    .run(['chatService'], function(chatService) {
        chatService.deleteChat();
    });

    $(function() {
        $('body').addClass('hide_chat');
    })
} catch (error) {
    console.error("codingame.com.script");
    console.error(error);
}