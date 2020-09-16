$(document).ready(function() {

    // var header = $("header");

    // $(window).scroll(function() {

    //     if ($(this).scrollTop() > 100) {

    //         header.addClass("header-fix");

    //     } else if ($(this).scrollTop() <= 100) {

    //         header.removeClass("header-fix");

    //     }

    // });

    $(".call-tab-1").on("click", function(){
        $(".screen-btn").removeClass("active_btn");
        $(".tabs").hide();
        $(".tabs_1").show();
        $(this).addClass("active_btn");
    });

    $(".call-tab-2").on("click", function(){
        $(".screen-btn").removeClass("active_btn");
        $(".tabs").hide();
        $(".tabs_2").show();
        $(this).addClass("active_btn");
    });

    $(".call-tab-3").on("click", function(){
        $(".screen-btn").removeClass("active_btn");
        $(".tabs").hide();
        $(".tabs_3").show();
        $(this).addClass("active_btn");
    });

    $(".call-tab-4").on("click", function(){
        $(".screen-btn").removeClass("active_btn");
        $(".tabs").hide();
        $(".tabs_4").show();
        $(this).addClass("active_btn");
    });

    $(".btn-call-menu").on("click", function() {
        $(".header_mob_info").slideToggle(100);
    });

    $('.single-item').slick({
        infinite: true,
        nav: false,
        dots: true,
        margin: 10,
        adaptiveHeight: true
    });

});