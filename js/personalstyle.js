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

    // about fade in's //
    $("#about-title").waypoint(function() {
        $('#about-title').removeClass('hidden');
        $('#about-title').addClass('fadeIn');
    }, { offset: '70%' });
    $("#about-left").waypoint(function() {
        $('#about-left').removeClass('hidden');
        $('#about-left').addClass('fadeInLeft');
    }, { offset: '70%' });
    $("#about-center").waypoint(function() {
        $('#about-center').removeClass('hidden');
        $('#about-center').addClass('fadeInUp');
    }, { offset: '70%' });
    $("#about-right").waypoint(function() {
        $('#about-right').removeClass('hidden');
        $('#about-right').addClass('fadeInRight');
    }, { offset: '70%' });

    /////// portfolio animations ///////
    $("#portfolio-title").waypoint(function() {
        $('#portfolio-title').removeClass('hidden');
        $('#portfolio-title').addClass('fadeIn');
    }, { offset: '70%' });

    $("#portfolio-one").waypoint(function() {
        $('#portfolio-one').removeClass('hidden');
        $('#portfolio-one').addClass('fadeInDown');
    }, { offset: '70%' });
    $("#portfolio-two").waypoint(function() {
        $('#portfolio-two').removeClass('hidden');
        $('#portfolio-two').addClass('fadeIn');
    }, { offset: '70%' });
    $("#portfolio-three").waypoint(function() {
        $('#portfolio-three').removeClass('hidden');
        $('#portfolio-three').addClass('fadeInDown');
    }, { offset: '70%' });
    $("#portfolio-four").waypoint(function() {
        $('#portfolio-four').removeClass('hidden');
        $('#portfolio-four').addClass('fadeInLeft');
    }, { offset: '70%' });
    $("#portfolio-five").waypoint(function() {
        $('#portfolio-five').removeClass('hidden');
        $('#portfolio-five').addClass('fadeInUp');
    }, { offset: '70%' });
    $("#portfolio-six").waypoint(function() {
        $('#portfolio-six').removeClass('hidden');
        $('#portfolio-six').addClass('fadeInRight');
    }, { offset: '70%' });
    //////// TECH BOUNCE INS ///////////////////

    $("#tech-title").waypoint(function() {
        $('#tech-title').removeClass('hidden');
        $('#tech-title').addClass('fadeIn');
    }, { offset: '70%' });
    //row 1
    $("#html-img").waypoint(function() {
        $('#html-img').removeClass('hidden');
        $('#html-img').addClass('bounceIn');
    }, { offset: '80%' });
    $("#css-img").waypoint(function() {
        $('#css-img').removeClass('hidden');
        $('#css-img').addClass('bounceIn');
    }, { offset: '75%' });
    $("#js-img").waypoint(function() {
        $('#js-img').removeClass('hidden');
        $('#js-img').addClass('bounceIn');
    }, { offset: '70%' });
    $("#jquery-img").waypoint(function() {
        $('#jquery-img').removeClass('hidden');
        $('#jquery-img').addClass('bounceIn');
    }, { offset: '65%' });
    // row 2

    $("#bs-img").waypoint(function() {
        $('#bs-img').removeClass('hidden');
        $('#bs-img').addClass('bounceIn');
    }, { offset: '80%' });
    $("#foundation-img").waypoint(function() {
        $('#foundation-img').removeClass('hidden');
        $('#foundation-img').addClass('bounceIn');
    }, { offset: '75%' });
    $("#bower-img").waypoint(function() {
        $('#bower-img').removeClass('hidden');
        $('#bower-img').addClass('bounceIn');
    }, { offset: '70%' });
    $("#git-img").waypoint(function() {
        $('#git-img').removeClass('hidden');
        $('#git-img').addClass('bounceIn');
    }, { offset: '65%' });
    // row 3

    $("#github-img").waypoint(function() {
        $('#github-img').removeClass('hidden');
        $('#github-img').addClass('bounceIn');
    }, { offset: '90%' });
    $("#react-img").waypoint(function() {
        $('#react-img').removeClass('hidden');
        $('#react-img').addClass('bounceIn');
    }, { offset: '85%' });
    $("#node-img").waypoint(function() {
        $("#node-img").removeClass('hidden');
        $("#node-img").addClass('bounceIn');
    }, { offset: '80%' });
    $("#npm-img").waypoint(function() {
        $('#npm-img').removeClass('hidden');
        $('#npm-img').addClass('bounceIn');
    }, { offset: '75%' });


});
