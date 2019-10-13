//Navigation
$(window).scroll(function() {

    if ($(window).scrollTop() >= 120) {
        $('.navbar').css({
            'background-color': 'beige',
            '-webkit-transiton': 'all .5s',
            '-moz-transiton': 'all .5s',
            'transition': 'all .5s'
        });
    } else {
        $('.navbar').css({
            'background-color': 'rgba(245,245,220,0.6)'
        });
    }
});


//navbar-toggler click
var clicked = 0;

$(".navbar-toggler").click(function() {
    clicked++;

    if (clicked % 2 == 0) {
        $('.navbar').css({
            'background': 'rgba(245,245,220,0.6)'
        });
    } else {
        $('.navbar').css({
            'background': 'beige',
            '-webkit-transiton': 'all .5s',
            '-moz-transiton': 'all .5s',
            'transition': 'all .5s'
        });
    }
});


//ESC, Prev & Next
$(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    $('#modal').hide();
  }
});


$(document).keydown(function(e) {
    if (e.keyCode === 37) {
       // Previous img
       $(".carousel-control-prev").click();
       return false;
    }
    if (e.keyCode === 39) {
       // Next img
       $(".carousel-control-next").click();
       return false;
    }
});




//FOR DEVICES ON TOUCH - PROVERITI DA LI RADI UOPSTE
function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
