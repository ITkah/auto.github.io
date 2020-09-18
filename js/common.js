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

    $('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});


    $(".popup-with-form").on("click", function () {
        let value = $(this).attr("data-curse");
        $(".hide-curse").val(value);
    });

    var url = "https://ucavtoshkola.com.ua/success";

    $(".modal-curse").submit(function() {
        var form_data = $(this).serializeArray();
        $.ajax({
            type: "POST",
            url: "../../mail.php",
            data: form_data,
            success: function() {
                $(location).attr('href',url);
                $('.mfp-close').click();
            },
            error: function(error) {
                console.log(error);
            }
        });
        return false;
    });

});