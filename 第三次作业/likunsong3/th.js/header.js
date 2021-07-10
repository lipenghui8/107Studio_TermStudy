var text = document.querySelector('.input');
var text_c = text.children;
for (var i = 0; i < text_c.length; i++) {
    text.onmouseover = function () {
        text_c[0].className = 'on';
        text_c[1].style.opacity = '1';
    }
    text.onmouseout = function () {
        text_c[0].className = 'fir';
        text_c[1].style.opacity = '0.4';
    }

}