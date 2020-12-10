"use strict";

$(function () {
    var setElm = $('.loopSlider'),
        slideSpeed = 2000;

    setElm.each(function () {
        var self = $(this),
            selfWidth = self.innerWidth(),
            findUl = self.find('ul'),
            findLi = findUl.find('li'),
            listWidth = findLi.outerWidth(),
            listCount = findLi.length,
            loopWidth = listWidth * listCount;

        findUl.wrapAll('<div class="loopSliderWrap" />');
        var selfWrap = self.find('.loopSliderWrap');

        if (loopWidth > selfWidth) {
            findUl.css({
                width: loopWidth
            }).clone().appendTo(selfWrap);

            selfWrap.css({
                width: loopWidth * 2
            });

            function loopMove() {
                selfWrap.animate({
                    left: '-' + (loopWidth) + 'px'
                }, slideSpeed * listCount, 'linear', function () {
                    selfWrap.css({
                        left: '0'
                    });
                    loopMove();
                });
            };
            loopMove();

            setElm.hover(function () {
                selfWrap.pause();
            }, function () {
                selfWrap.resume();
            });
        }
    });
});


<<<<<<< HEAD
const carouselWidth = $("#carousel li").width();
const length = $(".carousel-item").length;
const innerWidth = carouselWidth * length;
const time = 400;

const carouselinner = $("#carousel");
const prev = $("#prev");
const next = $("#next");

let c = 1;

next.click(function () {
    if (c == length) {
        carouselinner.stop().animate({
                left: 0,

            },
            time
        );
        c = 1;
    } else {
        carouselinner.stop().animate({
                left: -c * carouselWidth,
            },
            time
        );
        c++;
    }
});

prev.click(function () {
    if (c == 1) {
        carouselinner.stop().animate({
                left: carouselWidth - innerWidth,
            },
            time
        );
        c = length;

    } else {
        carouselinner.stop().animate({
                left: -(c - 2) * carouselWidth,
            },
            time
        );
        c--;
    }
});

$('.fa-bars').on('click', function () {
    $('.nav').toggleClass('show');
});

//click イベントで発火
document.body.addEventListener("click", drop, false);

function drop(e) {

    //座標の取得
    var x = e.pageX;
    var y = e.pageY;

    //しずくになるdivの生成、座標の設定
    var sizuku = document.createElement("div");
    sizuku.style.top = y + "px";
    sizuku.style.left = x + "px";
    document.body.appendChild(sizuku);

    //アニメーションをする className を付ける
    sizuku.className = "sizuku";

    //アニメーションが終わった事を感知してしずくを remove する
    sizuku.addEventListener("animationend", function () {
        this.parentNode.removeChild(this);
    }, false);
}
=======
>>>>>>> 8cfcd7e114699fb8ef09f4194a547a04a571047f
