$(document).ready(function() {


    $(".main-screen .call-tab-1").on("click", function() {
        $(".screen-btn").removeClass("active_btn");
        $(".wrapersMain .tabs").hide();
        $(".wrapersMain .tabs_1").show();
        $(this).addClass("active_btn");
    });

    $(".main-screen .call-tab-2").on("click", function() {
        $(".screen-btn").removeClass("active_btn");
        $(".wrapersMain .tabs").hide();
        $(".wrapersMain .tabs_2").show();
        $(this).addClass("active_btn");
    });

    $(".main-screen .call-tab-3").on("click", function() {
        $(".screen-btn").removeClass("active_btn");
        $(".wrapersMain .tabs").hide();
        $(".wrapersMain .tabs_3").show();
        $(this).addClass("active_btn");
    });

    $(".main-screen .call-tab-4").on("click", function() {
        $(".screen-btn").removeClass("active_btn");
        $(".wrapersMain .tabs").hide();
        $(".wrapersMain .tabs_4").show();
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

    $(".main-screen-btn").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 35;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $('div.tabs__caption').on('click', 'div:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $(".team-container .tabs__content:first-child").addClass("active");
    $(".tabs__caption div:first-child").addClass("active");

});