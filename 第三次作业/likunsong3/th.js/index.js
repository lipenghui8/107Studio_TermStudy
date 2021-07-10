// 轮播图
var next = document.querySelector('.next');
var fir_left = document.querySelector('.fir_left');
var ul = fir_left.querySelector('ul');
var ol = fir_left.querySelector('.point');
var ol_li = ol.querySelectorAll('li');
var fir_leftwidth = fir_left.offsetWidth;
var le_fir = fir_left.querySelector('.le_fir');
var le_sec = fir_left.querySelector('.le_sec');
for (var i = 0; i < ol_li.length; i++) {
    ol_li[i].setAttribute('index', i);
    ol_li[i].addEventListener('click', function () {
        for (var i = 0; i < ol_li.length; i++) {
            ol_li[i].className = 'point2';
        }
        this.className = 'point1';
        var index = this.getAttribute('index');
        if (index == 0) {
            le_fir.className = 'le_fir';
            le_sec.className = 'le_sec hide';
        }
        else if (index == 1) {
            le_fir.className = 'le_fir hide';
            le_sec.className = 'le_sec';
        }
        num = index;
        circle = index;
        animate(ul, -index * fir_leftwidth);
    })

}

var first = ul.children[0].cloneNode(true);
ul.appendChild(first);

var num = 0;
var circle = 0;
next.addEventListener('click', function () {
    if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
    }
    num++;
    animate(ul, -num * fir_leftwidth);
    circle++;
    if (circle == ol_li.length) {
        circle = 0;
    }
    for (var i = 0; i < ol_li.length; i++) {
        ol_li[i].className = 'point2';
    }
    ol_li[circle].className = 'point1';

    if (circle == 0) {
        le_fir.className = 'le_fir';
        le_sec.className = 'le_sec hide';
    }
    else if (circle == 1) {
        le_fir.className = 'le_fir hide';
        le_sec.className = 'le_sec';
    }
})
var timer = setInterval(function () {
    next.click();
}, 5000);

var gotop = document.querySelector('.gotop');

document.addEventListener('scroll', function () {
    if (window.pageYOffset >= 170) {
        gotop.style.opacity = '1';
    }
    if (window.pageYOffset < 170) {
        gotop.style.opacity = '0';

    }
})


//漂浮效果的制作
var fly = document.querySelector('.float');

var max_left = document.documentElement.clientWidth - fly.offsetWidth;
var max_top = document.documentElement.clientHeight - fly.offsetHeight;

//每个5毫秒获取一次窗口的长和宽
function dongtai(){   
max_left = document.documentElement.clientWidth - fly.offsetWidth;
max_top = document.documentElement.clientHeight - fly.offsetHeight;
}

var time2 = setInterval(dongtai,5);
var x = 1;
var y = 1;

function active(){
    var old_left = fly.offsetLeft;
    var old_top = fly.offsetTop;

    var new_left = old_left + x;
    var new_top = old_top + y;

    if(new_left > max_left){
        new_left = max_left;
    }
    if(new_top > max_top){
        new_top = max_top;
    }
    if(new_left < 0){
        new_left = 0;
    }
    if(new_top < 0){
        new_top = 0;
    }


fly.style.left = new_left + 'px';
fly.style.top = new_top + 'px';

if(new_top >= max_top){
    y = -1;
}
if(new_top == 0){
    y = 1;
}
if(new_left >= max_left){
    x = -1;
}
if(new_left == 0){
    x = 1;
}
}
var time =  setInterval(active,10);