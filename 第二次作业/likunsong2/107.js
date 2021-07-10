var text = document.querySelector('input');
text.onfocus = function () {
    if (this.value === '站内搜索') {
        this.value = '';
        this.style.backgroundColor = 'white';
    }
}
text.onblur = function () {
    if (this.value === '') {
        this.value = '站内搜索';
        this.style.backgroundColor = '#F5AA02';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    }
}
var next = document.querySelector('.next');
var prev = document.querySelector('.prev')
var banner_content = document.querySelector('.banner_content');
var ul = banner_content.querySelector('ul');
var ol = banner_content.querySelector('.xiaoyuandian');
var banner_contentwidth = banner_content.offsetWidth;
for (var i = 0; i < ul.children.length; i++) {
    var li = document.createElement('li');
    li.setAttribute('index', i);
    ol.appendChild(li);
    li.addEventListener('click', function () {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        this.className = 'selected';
        //点击小圆点，移动图片
        var index = this.getAttribute('index');
        num = index;
        circle = index;
        animate(ul, -index * banner_contentwidth);

    })
}
ol.children[0].className = 'selected';
var first = ul.children[0].cloneNode(true);
ul.appendChild(first);

//右侧按钮

var num = 0;
var circle = 0;
next.addEventListener('click', function () {
    if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
    }
    num++;
    animate(ul, -num * banner_contentwidth);
    circle++;
    if (circle == ol.children.length) {
        circle = 0;
    }
    circlechange();
})

//左侧按钮
prev.addEventListener('click', function () {
    if (num == 0) {
        num = ul.children.length - 1;
        ul.style.left = -num * banner_contentwidth + 'px';
    }
    num--;
    animate(ul, -num * banner_contentwidth);
    circle--;
    if (circle < 0) {
        circle = ol.children.length - 1;
    }
    circlechange();
})
function circlechange() {
    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = '';
    }
    ol.children[circle].className = 'selected';
}
var timer = setInterval(function () {
    next.click();
}, 3000);

//中间部分的js
//left 部分
var top_ul = document.querySelector('.top_content');
var items = document.querySelectorAll('.item');

for (var i = 0; i < top_ul.children.length; i++) {
    top_ul.children[i].setAttribute('sum', i);
    top_ul.children[i].onclick = function () {
        for (var i = 0; i < top_ul.children.length; i++) {
            top_ul.children[i].className = '';
        }
        var sum = this.getAttribute('sum');
        if (sum == 0) {
            this.className = 'current1';
        }
        else {
            this.className = 'current2';
        }

        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'none';
        }

        items[sum].style.display = 'block';
    }
}

// 第二个轮播图

var img = document.querySelector('.img');
var img_ul = img.querySelector('ul');
var img_em = document.querySelectorAll('.bol em');
var imgwidth = img.offsetWidth;

var bo = document.querySelector('.bo');
var bo_ul = bo.querySelector('ul');



for (var i = 0; i < img_ul.children.length; i++) {

    for (var i = 0; i < bo_ul.children.length; i++) {
        bo_ul.children[i].ol_index = i;
        bo_ul.children[i].setAttribute('sec_index', i);
        bo_ul.children[i].addEventListener('click', function () {
            for (var i = 0; i < bo_ul.children.length; i++) {
                bo_ul.children[i].className = 'bol';
                img_em[i].className = 'jiantou';

            }
            this.className = 'bol choice';
            var sec_index = this.getAttribute('sec_index');
            img_em[this.ol_index].className = 'jiantou block';
            sec_num = sec_index;
            sec_circle = sec_index;
           
            animate(img_ul, -sec_index * imgwidth);
        })
    }

}

var sec_num = 0;
var sec_circle = 0;

var sec_next = document.querySelector('.sec_next');
var sec_fir = img_ul.children[0].cloneNode(true);
img_ul.appendChild(sec_fir);

sec_next.addEventListener('click', function () {
    if (sec_num == img_ul.children.length - 1) {
        img_ul.style.left = 0;
        sec_num = 0;
    }
    sec_num++;
    
    animate(img_ul, -sec_num * imgwidth);
    sec_circle++;
    
    if (sec_circle == bo_ul.children.length) {
        sec_circle = 0;
    }
    for (var i = 0; i < bo_ul.children.length; i++) {
        bo_ul.children[i].className = 'bol';
        img_em[i].className = 'jiantou';
    }
    bo_ul.children[sec_circle].className = 'bol choice';
    img_em[sec_circle].className = 'jiantou block'
})

var sec_timer = setInterval(function () {
    sec_next.click();
}, 3000);

// 右侧的手风琴诗句

var aList = document.querySelectorAll('.nav-list h2');
var aHide = document.querySelectorAll('.hide');

aHide[0].style.height ='160px'; 
for( var i=0;i< aList.length ;i++){
    aList[i].th_index = i;
    //设置高度
    aHide[1].style.height = '0';
    aHide[2].style.height = '0';

    aList[i].onclick = function() {
        for(var i=0 ;i<aList.length ;i++){
            aList[i].className = '';
            aHide[i].style.height = '0';
        }
        aList[this.th_index].className = 'on';
        //设置高度
        aHide[this.th_index].style.height = '160px';
    }
}


//第三个轮播图
var lunbo3 = document.querySelector('.lunbo3');
var lunbo_ul = lunbo3.querySelector('ul');
var width = lunbo_ul.children[0].offsetWidth + 22;

var th_next = document.querySelector('.th-next');
var th_prev = document.querySelector('.th-prev');

var th_fir = lunbo_ul.children[0].cloneNode(true);
var th_sec = lunbo_ul.children[1].cloneNode(true);
var th_th = lunbo_ul.children[2].cloneNode(true);
var th_fo = lunbo_ul.children[3].cloneNode(true);
lunbo_ul.appendChild(th_fir);
lunbo_ul.appendChild(th_sec);
lunbo_ul.appendChild(th_th);
lunbo_ul.appendChild(th_fo);

var th_num = 0;
th_next.addEventListener('click', function () {
    if (th_num == lunbo_ul.children.length - 4) {
        ul.style.left = 0;
        th_num = 0;
    }
    th_num++;
    animate(lunbo_ul, -th_num * width);

})
th_prev.addEventListener('click', function () {
    if (th_num == 0) {

        th_num = lunbo_ul.children.length - 4;
        ul.style.left = -th_num * width + 'px';
    }
    th_num--;
    animate(lunbo_ul, -th_num * width);

})
var th_timer = setInterval(function () {
    th_prev.click();
}, 3000);


//模态框
var content1 = document.querySelector('.content1'); 
var content2 = document.querySelector('.content2'); 
var content3 = document.querySelector('.content3'); 
var content4 = document.querySelector('.content4'); 

var ing1 = document.querySelector('.ing1');
var ing2 = document.querySelector('.ing2');
var ing3 = document.querySelector('.ing3');
var ing4 = document.querySelector('.ing4');

var close1 = document.querySelector('.close1');
var close2 = document.querySelector('.close2');
var close3 = document.querySelector('.close3');
var close4 = document.querySelector('.close4');

ing1.addEventListener('click',function(){
     content1.style.display = 'block';   
 })
 ing2.addEventListener('click',function(){
    content2.style.display = 'block';   
})
ing3.addEventListener('click',function(){
    content3.style.display = 'block';   
})
ing4.addEventListener('click',function(){
    content4.style.display = 'block';   
})

close1.addEventListener('click',function(){
    content1.style.display = 'none'; 
})
close2.addEventListener('click',function(){
    content2.style.display = 'none'; 
})
close3.addEventListener('click',function(){
    content3.style.display = 'none'; 
})
close4.addEventListener('click',function(){
    content4.style.display = 'none'; 
})
