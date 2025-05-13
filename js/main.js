var preloader = function() {

    var loader = document.querySelector('.loader');
    var overlay = document.getElementById('overlayer');

    function fadeOut(el) {
        el.style.opacity = 1;
        (function fade() {
            if ((el.style.opacity -= .1) < 0) {
                el.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    };

    setTimeout(function() {
        fadeOut(loader);
        fadeOut(overlay);
    }, 800);
};
preloader();


$(document).ready(function() {
    $("#banner_section").owlCarousel({
        loop: true,
        nav: false,
        margin: 10,
        dots: false,
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive: {
            0: {
                items: 1 // Number of items in view for small screens
            },
            600: {
                items: 2 // Number of items in view for medium screens
            },
            1000: {
                items: 4 // Number of items in view for large screens
            }
        }
    });
});



// Fixed header on scroll 
$(window).scroll(function() {
    windowWidth = $(window).width();
    if (windowWidth > 300) {
        var scroll = $(window).scrollTop();

        if (scroll >= 150) {
            $("header").addClass("header-fixed animateHeader");
        } else {
            $("header").removeClass("header-fixed animateHeader");
        }
    }
});



$(document).ready(function() {
    $(".down").click(function() {
        $("html, body").animate({
                scrollTop: $(".about_section").offset().top
            },
            1500
        );
    });
});


var btn = $("#button");

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass("show");
    } else {
        btn.removeClass("show");
    }
});

btn.on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, "300");
});



$('.counter').countUp();