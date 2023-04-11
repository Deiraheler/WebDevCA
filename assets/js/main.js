$(function () {
    let profile_side_width = $("#profile-side-menu").outerWidth();

    $("#profile-icon").on('click', function () {
        $("#profile-block").toggleClass("open");
        $("#profile-shadow").width($(window).width() - profile_side_width + "px");
        $("#profile-shadow").css("margin-left", profile_side_width + "px");
    })

    $(window).resize(function () {
        $("#profile-shadow").width($(window).width() - profile_side_width + "px");
    });



    $(".close-cross").on("click", function () {
        $(this).parent().toggleClass("open");
    })

    $('.big-img').slick({
        infinite: true,
        autoplay: true,
        speed: 1000,
        dots: true,
        autoplaySpeed: 3000,
    });

    // $(".items-container").load("../../templates/item.html", function() {
    //     var copiedDiv = $("div").copy();
    //     for (let i = 0; i < 3; i++) {
    //         $(copiedDiv).appendTo("items-container");
    //     }
    //   });
})