// ==UserScript==

// @name          battle.net.forum.sc2.profile
// @namespace     https://github.com/dreignier/web-hacks
// @description   Show additional information for players profiles on a mouse hover event
// @include       http*://*.battle.net/sc2/*/forum/topic/*
// @version       1.1

// @grant         none

// ==/UserScript==

try {

    $('#post-list').on('hover', '.forum-user:not(.enhanced)', function() {
        var $element = $(this), 
            url = $element.find('.forum-avatar a').attr('href'),
            $profiles = $('a[href="' + url + '"]').parents('.forum-user').addClass('enhanced');

        jQuery.ajax({
            url : url,
            dataType : 'html',
            success : function(data) {
                var $data = $(data),
                    currentClasses = $data.find('#season-snapshot span.badge').first().attr('class'),
                    bestClasses = $data.find('.best-finishes span.badge').first().attr('class');

                $profiles.each(function() {
                    var $username = $(this).find('.bnet-username');

                    $('<div class="badge"><span class="' + bestClasses + '"></span></div>').insertAfter($username);
                    $('<div class="badge"><span class="' + currentClasses + '"></span></div>').insertAfter($username);
            });
         }
      });
   });

} catch (error) {
    console.error("profile.user.js");
    console.error(error);
}