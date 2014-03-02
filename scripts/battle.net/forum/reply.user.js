// ==UserScript==

// @name          battle.net.forum.reply
// @namespace     https://github.com/dreignier/web-hacks
// @description   Improve the way to reply on battle.net forums
// @include       http*://*.battle.net/*/forum/topic/*
// @exclude       http*://*.battle.net/*/forum/topic/*/edit
// @version       1.7

// @grant         none

// ==/UserScript==

try {
    
    if (!Core.loggedIn) {
        return;
    }

    var cleaned = false;
    function toggle($form, showOrHide) {
        if (!cleaned) {
            $form.find('.bml-toolbar').first().remove();
            cleaned = true;
        }

        if (showOrHide == undefined) {
            $form.toggle();
        } else {
            $form.toggle(showOrHide);
        }
    }

    var $tab = $('<div class="reply-zone" />'),
        $tabTop = $('<div class="reply-zone-top" />').appendTo($tab),
        $button = $('<button class="ui-button button1"><span class="button-left"><span class="button-right">REPLY</span></span></button>').appendTo($tabTop),
        $form = $('#new-post').appendTo($tab).hide();

    $tab.appendTo(document.body);
    
    $button.click(function() {
        toggle($form);
    });

    // Clean up the form
    $form.find('.form-left-col').hide();
    $form.find('button[type="submit"]').css('float', 'right').appendTo($form.find('.topic-form-controls'));

    // Fix the form appearance
    $form.css('margin-left', ($(window).width() / 2) - 302.5);

    $('body').on('click', '.reply-to-post, .quote-post, .quote-button', function() {
        toggle($form, true);
    });
} catch (error) {
    console.error("reply.user.js");
    console.error(error);
}