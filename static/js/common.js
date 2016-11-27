$(document).ready(function() {
    'use strict';
    var applyNavPlusPattern, $navBarAtTop, headroom;

    // All outside links opens in a new page ootb
    $("a[href^='http://'], a[href^='https://']").each(function(){
        if(this.href.indexOf(location.hostname) === -1) {
            $(this).attr('target', '_blank');
        }
    });

    applyNavPlusPattern = function() {
        var $moreLinks;

        // Apply Priority+ navigation pattern
        // https://css-tricks.com/the-priority-navigation-pattern/
        $moreLinks = $('.more-links');
        $moreLinks.closest('nav').addClass('plus');
        $moreLinks.text('more');
        $moreLinks.on('click', function() {
            $(this).closest('nav').toggleClass('open');
        });
    };
    applyNavPlusPattern();

    // Show/hide navbar depending on scroll behaviour
    $navBarAtTop = $('header nav');
    if ($navBarAtTop.length > 0 && 'Headroom' in window) {
        headroom = new Headroom($navBarAtTop[0]);
        headroom.init();
    }
});
