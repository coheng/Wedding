// -----------------------------

//   js index
/* =================== */
/*

1. preloader
2. h4 header sticky
3. countdown
4. screen_slider
5. screen-slider-two
6. client_carousel
7. Active current Li
8. Smoth Scroll
9. Canvas
10. Slick Nav Mobile Menu
11. Background Paralax activation
12. Warm Canvas activation
13. Background video
14. Ajax MailChip
15. Ajax Contact Form




*/
// -----------------------------


(function($) {
    "use strict";

    /*---------------------
    1. preloader
    --------------------- */

    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() { $(this).remove(); });
    });

    /*-----------------
    2. h4 header sticky
    -----------------*/
    $(window).on('scroll', function() {

        var wScroll = $(this).scrollTop();

        var header_style_one = $('.header_style_one');

        if (wScroll > 200) {
            header_style_one.addClass('bg-solid');
        } else {
            header_style_one.removeClass('bg-solid');
        }
    });

    /*---------------------
    3. countdown
    --------------------- */
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
        });
    });

    /*---------------------
    4. screen_slider
    --------------------- */
    function screen_slider() {
        var owl = $(".screen-slider");
        owl.owlCarousel({
            loop: true,
            margin: 25,
            navText: false,
            nav: false,
            items: 3,
            smartSpeed: 1000,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            // mouseDrag: false,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 3
                }
            }
        });
    }
    screen_slider();

    /*---------------------
    5. screen-slider-two
    --------------------- */
    function screen_slider_two() {
        var owl = $(".screen-slider-two");
        owl.owlCarousel({
            loop: false,
            margin: 0,
            navText: false,
            nav: false,
            items: 4,
            smartSpeed: 1000,
            dots: true,
            dotsEach: true,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 4
                },
                1080: {
                    items: 4
                }
            }
        });
    }
    screen_slider_two();

    /*---------------------
    6. client_carousel
    --------------------- */
    function client_carousel() {
        var owl = $(".client-carousel");
        owl.owlCarousel({
            loop: false,
            margin: 0,
            navText: false,
            nav: false,
            items: 5,
            smartSpeed: 1000,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 2
                },
                760: {
                    items: 4
                },
                1080: {
                    items: 5
                }
            }
        });
    }
    client_carousel();

    /*----------------------------
    7. Active current Li
    ------------------------------ */

    //ACTIVE CURRENT MENU WHILE SCROLLING

    $(window).on("scroll", function() {

        activeMenuItem($(".nav-menu"));

    });

    // function for active menuitem
    function activeMenuItem($links) {
        var top = $(window).scrollTop(),
            windowHeight = $(window).height(),
            documentHeight = $(document).height(),
            cur_pos = top + 2,
            sections = $("section"),
            nav = $links,
            nav_height = nav.outerHeight(),
            home = nav.find(" > ul > li:first");


        sections.each(function() {
            var top = $(this).offset().top - nav_height - 40,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find("> ul > li > a").parent().removeClass("active");
                nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("active");
            } else if (cur_pos === 2) {
                nav.find("> ul > li > a").parent().removeClass("active");
                home.addClass("active");
            } else if ($(window).scrollTop() + windowHeight > documentHeight - 400) {
                nav.find("> ul > li > a").parent().removeClass("active");
            }
        });
    }

    /*----------------------------
    8. Smoth Scroll
    ------------------------------ */

    function smoothScrolling($links, $topGap) {
        var links = $links;
        var topGap = $topGap;

        links.on("click", function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - topGap
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
            return false;
        });
    }

    $(window).on("load", function() {
        var header_area = $('.header-area').height() - 10;
        smoothScrolling($(".go-down a[href^='#']"), header_area);
        smoothScrolling($(".nav-menu ul li a[href^='#']"), header_area);
    });

    /*----------------------------
    9. Canvas
    ------------------------------ */
    if ($('#canvas-gradient').length) {
        var granimInstance = new Granim({
            element: "#canvas-gradient",
            name: "basic-gradient",
            direction: "left-right",
            opacity: [1, 1],
            isPausedWhenNotInView: true,
            states: {
                "default-state": {
                    gradients: [
                        ["#d620e1", "#F46567"],
                        ["#20d1e1", "#19f892"],
                        ["#e15f20", "#F46567"]
                    ]
                }
            }
        })
    }

    /*----------------------------
    10. Slick Nav Mobile Menu
    ------------------------------ */
    $('#mobile_menu').slicknav({
        prependTo: '.mobile-menu'
    });

    /*-----------------------------
    Blog masonary activation
    ------------------------------- */
    $('#container').imagesLoaded(function() { //image loaded
        // masonary activation
        $('.blog-masonary').isotope({
            itemSelector: '.bm-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.bm-item'
            }
        })
    });

    /*-----------------------------
    11. Background Paralax activation
    ------------------------------- */
    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function() {
                var height = $(this).position().top;
                var resize = height - $(window).scrollTop();
                var parallaxSpeed = $(this).data("speed");
                var doParallax = -(resize / parallaxSpeed);
                var positionValue = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                });

                if (window.innerWidth < 768) {
                    $(this).css({
                        backgroundPosition: "center center"
                    });
                }
            });
        }
    }
    bgParallax();

    $(window).on("scroll", function() {
        bgParallax();
    });


    /*-----------------------------
    12. Warm Canvas activation
    ------------------------------- */
    $('.canvas-two').glassyWorms({
        colors: ['#fff', '#c2c2c2'],
        useStyles: true,
        numParticles: 500,
        tailLength: 20,
        maxForce: 8,
        friction: 0.75,
        gravity: 9.81,
        interval: 3
        // colors: ['#000'],
        // element: $('<canvas class="worms"></canvas>')[0]
    });

    /*-----------------------------
    13. Background video
    ------------------------------- */

    $(window).on('load', function() {
        var myPlayer = $("#bgndVideo").YTPlayer();
    });

    /*-----------------------------
    14. Ajax MailChip
    ------------------------------- */
    $('#mc-form').ajaxChimp({
        url: 'http://www.wpocean.us13.list-manage.com/subscribe/post?u=e9d729be03847d1a66b143bd2&amp;id=21ac2a3302', //Set Your Mailchamp URL
        callback: function (resp) {
            if (resp.result === 'success') {
                $('.sform input, .sform .subscribe-btn').fadeOut();
            }
        }
    });

    /*-----------------------------
    15. Ajax Contact Form
    ------------------------------- */
    $('.screen-reader-response').hide();
    $('form#cf button#submit').on('click', function() {
        var fname = $('#fname').val();
        var subject = $('#subject').val();
        var email = $('#email').val();
        var msg = $('#msg').val();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!regex.test(email)) {
            alert('Please enter valid email');
            return false;
        }

        fname = $.trim(fname);
        subject = $.trim(subject);
        email = $.trim(email);
        msg = $.trim(msg);

        if (fname != '' && email != '' && msg != '') {
            var values = "fname=" + fname + "&email=" + email + " &msg=" + msg;
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: values,
                success: function() {
                    $('#fname').val('');
                    $('#email').val('');
                    $('#msg').val('');

                    $('.screen-reader-response').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
                    setTimeout(function() {
                        $('.screen-reader-response').fadeOut('slow');
                    }, 4000);
                }
            });
        } else {
            $('.screen-reader-response').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
        }
        return false;
    });


}(jQuery));