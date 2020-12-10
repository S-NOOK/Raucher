const carouselWidth = $("#carousel li").width(); 
const length = $(".carousel-item").length; 
const innerWidth = carouselWidth * length; 
const time = 400;

const carouselinner = $("#carousel");
const prev = $("#prev");
const next = $("#next");

let c = 1;

'use strict';

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
