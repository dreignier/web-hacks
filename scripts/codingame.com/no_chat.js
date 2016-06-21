// ==UserScript==

// @name          codingame.com.no_chat
// @namespace     https://github.com/dreignier/web-hacks
// @description   Add some feature to the codingame website
// @include       http*://*.codingame.com/*
// @exclude       
// @version       1.0

// @grant         none

// ==/UserScript==

try {
    angular.module('chat')

    .decorator('cgChatDirective', function() {
        return {
            restrict: 'E',
            template: '',
            controller: angular.noop
        }
    });
} catch (error) {
    console.error("codingame.com.script");
    console.error(error);
}