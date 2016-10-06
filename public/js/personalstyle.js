$(document).ready(function() {
    $("li a").click(function() {
        var scroll = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(scroll).offset().top
        }, 2000);
        return false;
    });
    $("#jumbotron-click").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000, 'swing');
    });

    /// jQuery plug-in method for easier animation
    $.fn.customAnimate = function(options, offset) {
        var $this = this;
        $this.waypoint(function() {
            $this.removeClass('hidden');
            $this.addClass(options);
        }, { offset: offset });
    }

    if ($(window).width() >= 1024) {
        // about fade in's //
        $('#about-title').customAnimate('fadeIn', '70%');
        $('#about-left').customAnimate('fadeInLeft', '70%');
        $("#about-right").customAnimate('fadeInRight', '70%');

        /////// portfolio animations ///////
        $('#portfolio-title').customAnimate('fadeIn', '70%');
        $('#portfolio-one').customAnimate('fadeInDown', '70%');
        $('#portfolio-two').customAnimate('fadeIn', '70%');
        $('#portfolio-three').customAnimate('fadeInDown', '70%');
        $('#portfolio-four').customAnimate('fadeInLeft', '70%');
        $('#portfolio-five').customAnimate('fadeInUp', '70%');
        $('#portfolio-six').customAnimate('fadeInRight', '70%');

        //////// TECH BOUNCE INS ///////////////////
        $('#tech-title').customAnimate('fadeIn', '70%');
        //row 1
        $('#html-img').customAnimate('bounceIn', '80%');
        $('#css-img').customAnimate('bounceIn', '75%');
        $('#js-img').customAnimate('bounceIn', '70%');
        $('#jquery-img').customAnimate('bounceIn', '65%');
        // row 2
        $('#bs-img').customAnimate('bounceIn', '80%');
        $('#foundation-img').customAnimate('bounceIn', '75%');
        $('#bower-img').customAnimate('bounceIn', '70%');
        $('#git-img').customAnimate('bounceIn', '65%');
        // row 3
        $('#github-img').customAnimate('bounceIn', '90%');
        $('#react-img').customAnimate('bounceIn', '88%');
        $("#node-img").customAnimate('bounceIn', '86%');
        $('#npm-img').customAnimate('bounceIn', "84%");
    }
    if ($(window).width() <= 1023 && $(window).width() >= 640) {
        $('#about-title').customAnimate('fadeIn', '70%');
        $('#about-left').customAnimate('fadeInLeft', '70%');
        $("#about-right").customAnimate('fadeInRight', '70%');
        /////// portfolio animations ///////
        $('#portfolio-title').customAnimate('fadeIn', '70%');
        $('#portfolio-one').customAnimate('fadeInLeft', '70%');
        $('#portfolio-two').customAnimate('fadeInRight', '70%');
        $('#portfolio-three').customAnimate('fadeInLeft', '70%');
        $('#portfolio-four').customAnimate('fadeInRight', '70%');
        $('#portfolio-five').customAnimate('fadeInLeft', '70%');
        $('#portfolio-six').customAnimate('fadeInRight', '70%');
        //////// TECH BOUNCE INS ///////////////////
        $('#tech-title').customAnimate('fadeIn', '70%');
        //row 1
        $('#html-img').customAnimate('bounceIn', '80%');
        $('#css-img').customAnimate('bounceIn', '70%');
        $('#js-img').customAnimate('bounceIn', '60%');
        // row 2
        $('#jquery-img').customAnimate('bounceIn', '80%');
        $('#bs-img').customAnimate('bounceIn', '70%');
        $('#foundation-img').customAnimate('bounceIn', '60%');
        // row 3
        $('#bower-img').customAnimate('bounceIn', '80%');
        $('#git-img').customAnimate('bounceIn', '70%');
        $('#github-img').customAnimate('bounceIn', '60%');
        //row 4
        $('#react-img').customAnimate('bounceIn', '80%');
        $("#node-img").customAnimate('bounceIn', '70%');
        $('#npm-img').customAnimate('bounceIn', "60%");
    }
    if ($(window).width() <= 639) {
        $('#about-title').customAnimate('fadeIn', '70%');
        $('#about-left').customAnimate('fadeIn', '70%');
        $("#about-right").customAnimate('fadeIn', '70%');
        /////// portfolio animations ///////
        $('#portfolio-title').customAnimate('fadeIn', '70%');
        $('#portfolio-one').customAnimate('fadeIn', '70%');
        $('#portfolio-two').customAnimate('fadeIn', '70%');
        $('#portfolio-three').customAnimate('fadeIn', '70%');
        $('#portfolio-four').customAnimate('fadeIn', '70%');
        $('#portfolio-five').customAnimate('fadeIn', '70%');
        $('#portfolio-six').customAnimate('fadeIn', '70%');
        //////// TECH BOUNCE INS ///////////////////
        $('#tech-title').customAnimate('fadeIn', '70%');
        //row 1
        $('#html-img').customAnimate('bounceIn', '70%');
        $('#css-img').customAnimate('bounceIn', '70%');
        $('#js-img').customAnimate('bounceIn', '70%');
        // row 2
        $('#jquery-img').customAnimate('bounceIn', '70%');
        $('#bs-img').customAnimate('bounceIn', '70%');
        $('#foundation-img').customAnimate('bounceIn', '70%');
        // row 3
        $('#bower-img').customAnimate('bounceIn', '70%');
        $('#git-img').customAnimate('bounceIn', '70%');
        $('#github-img').customAnimate('bounceIn', '70%');
        //row 4
        $('#react-img').customAnimate('bounceIn', '70%');
        $("#node-img").customAnimate('bounceIn', '70%');
        $('#npm-img').customAnimate('bounceIn', "70%");
    }
});
