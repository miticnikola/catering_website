//Navigation
$(window).scroll(function() {

    if ($(window).scrollTop() >= 120) {
        $('.navbar').css({
            'background': 'beige',
            '-webkit-transiton': 'all .5s',
            '-moz-transiton': 'all .5s',
            'transition': 'all .5s'
        });
    } else {
        $('.navbar').css({
            'background': 'transparent',
        });
    }
});


//navbar-toggler click
var clicked = 0;

$(".navbar-toggler").click(function() {
    clicked++;

    if (clicked % 2 == 0) {
        $('.navbar').css({
            'background': 'transparent',
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
