//Navigation
        $('.navbar').css({
            'background': 'beige'
        });


//Contact - message counter
const message = document.getElementById('message');
const current = document.getElementById('current');
const max = document.getElementById('max');

let max_char = 255;

message.addEventListener('keyup', countWords);
max.innerHTML = max_char;

message.setAttribute('maxlength', max_char);


function countWords(event) {
    let len = event.srcElement.value.length;
    current.innerHTML = len;
}


//Prevent Numbers Input in input - name
function preventNumberInput(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode > 47 && keyCode < 58) {
        e.preventDefault();
    }
}

$(document).ready(function() {
    $('#name').keypress(function(e) {
        preventNumberInput(e);
    });
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
