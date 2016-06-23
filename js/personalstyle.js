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
    $("#about-title").waypoint(function() {
        $('#about-title').removeClass('hidden');
        $('#about-title').addClass('fadeInDown');
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

});
