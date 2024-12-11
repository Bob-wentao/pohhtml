/*-----------------------------------------------------------------------------------

    Theme Name: YARA
    Theme URI: http://
    Description: Personal Portfolio Template
    Author: gecdesigns    

-----------------------------------------------------------------------------------*/

/*=================================================
 == Table Of Content

    1. PRELOADER
    2. SCROLLIT
    3. NAVBAR
    4. COUNT TO
    5. EASYPIECHART
    6. SCROLL TO TOP 
    7. PORTFOLIO
    8. OWLCAROUSEL
    9. VALIDATOR
 

*/
const timeline = gsap.timeline({ repeat: -1 });
const chars = document.querySelectorAll(".text10");


/* COLOR CHANGER */
window.addEventListener("load", function () {
    const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
    scrollColorElems.forEach((colorSection, i) => {
        const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
        const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

        ScrollTrigger.create({
            trigger: colorSection,
            scroller: ".container",
            start: "top 50%",
            onEnter: () =>
                gsap.to("body", {
                    backgroundColor: colorSection.dataset.bgcolor,
                    color: colorSection.dataset.textcolor,
                    overwrite: "auto"
                }),
            onLeaveBack: () =>
                gsap.to("body", {
                    backgroundColor: prevBg,
                    color: prevText,
                    overwrite: "auto"
                })
        });
    });
});

gsap.set(".one", { color: "#3498DB" });
gsap.set(".two", { color: "#E74C3C" });
gsap.set(".three", { color: "#F1C40F" });
gsap.set(".four", { color: "#3498DB" });
gsap.set(".five", { color: "#27AE60" });
gsap.set(".six", { color: "#E74C3C" });
gsap.set(".seven", { color: "#F1C40F" });
gsap.set(".eight", { color: "#3498DB" });
gsap.set(".nine", { color: "#27AE60" });
timeline.from(chars, { opacity: 1, scale: 0, ease: "sine", delay: 0.25 })
    .to(".text10", {
        "--font-weight": 900,
        duration: .9,
        ease: "sine.inOut",
        stagger: {
            yoyo: true,
            each: 0.1,
            repeat: -1
        }
    }, 1);
var tl = gsap.timeline({ repeat: -1 });
tl.to("h11", 30, { backgroundPosition: "-960px 0" });

$(function () {
    "use strict";

    /*============= PRELOADER ============= */

    $(document).ready(function () {

        setTimeout(function () {
            $('body').addClass('loaded');
            $('.preloader').fadeOut(1500);
        }, 1500);

    });

    /*============= SCROLLIT ============= */
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed       
    });

    /*===========  NAVBAR ===============*/
    $(document).ready(function () {

        'use strict';

        var c, currentScrollTop = 0,
            navbar = $('nav');

        $(window).scroll(function () {
            var a = $(window).scrollTop();
            var b = navbar.height();

            currentScrollTop = a;

            if (c < currentScrollTop && a > b + b) {
                navbar.addClass("scrollUp");
            } else if (c > currentScrollTop && !(a <= b)) {
                navbar.removeClass("scrollUp");
            }
            c = currentScrollTop;
        });

    });

    // close navbar-collapse when a  clicked
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
});

/*=========  COUNT TO =========*/
var eventFired = false,
    objectPositionTop = $('.counts').offset().top;
$(window).on('scroll', function () {
    var currentPosition = $(document).scrollTop() + 400;
    if (currentPosition >= objectPositionTop && eventFired === false) {
        eventFired = true;
        $(".count").countTo({
            speed: 5000,
            refreshInterval: 80
        });
    }
});

/*=========  EASYPIECHART =========*/
$(function () {
    $('.chart').easyPieChart({
        size: 140,
        easing: 'easeOutBounce',
        barColor: '#ff0066',
        scaleColor: false,
        lineCap: 'circle',
        lineWidth: 12,
        trackColor: '#333333',
        animate: 500
    });
});

/*============= SCROLL TO TOP ============= */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#scroll-to-top').click(function () {
        $('#scroll-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

/*===========  PORTFOLIO ===============*/
var options = {
    animationDuration: 0.6,
    filter: "all",
    callbacks: {
        onFilteringStart: function () { },
        onFilteringEnd: function () { }
    },
    delay: 0,
    delayMode: "alternate",
    easing: "ease-out",
    layout: "sameSize",
    selector: ".filtr-container",
    setupControls: true
}
var filterizd = $(".filtr-container").filterizr(options);
filterizd.filterizr("setOptions", options);

/*========= OWLCAROUSEL =========*/

// Testimonials owlCarousel
//=========================
$('.testi-carousel').owlCarousel({
    loop: true,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 450,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        991: {
            items: 3
        },
        1200: {
            items: 3
        },
        1920: {
            items: 3
        }
    }
});

/*========= VALIDATOR =========*/

// contact form validator
$('#contact-form').validator();

$('#contact-form').on('submit', function (e) {
    if (!e.isDefaultPrevented()) {
        var url = "contact.php";

        $.ajax({
            type: "POST",
            url: url,
            data: $(this).serialize(),
            success: function (data) {
                var messageAlert = 'alert-' + data.type;
                var messageText = data.message;

                var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                if (messageAlert && messageText) {
                    $('#contact-form').find('.messages').html(alertBox);
                    $('#contact-form')[0].reset();
                }
            }
        });
        return false;
    }
});