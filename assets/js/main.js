$(function () {
    let profile_side_width;

    $("#profile-icon").on('click', function () {
        profile_side_width = $("#profile-block .side-menu").outerWidth();
        $("#profile-block").toggleClass("open");
        $(".shadow-full").width($(window).width() - profile_side_width + "px");
        $(".shadow-full").css("margin-left", profile_side_width + "px");
    })

    $("#adaptive-menu").on('click', function () {
        profile_side_width = $("#menu-block .side-menu").outerWidth();
        $("#menu-block").toggleClass("open");
        $(".shadow-full").width($(window).width() - profile_side_width + "px");
        $(".shadow-full").css("margin-left", profile_side_width + "px");
    })

    $(window).resize(function () {
        $(".shadow-full").width($(window).width() - profile_side_width + "px");
    });


    //Close side menu
    $(".close-cross").on("click", function () {
        $(this).parent().toggleClass("open");
    })

    $('.big-img').slick({
        infinite: true,
        autoplay: true,
        speed: 1000,
        dots: true,
        autoplaySpeed: 3000,
        variableWidth: true,
        adaptiveHeight: true
    });

    // Slider adaptive slide image
    var parentBlock = $('.index .slick-slide');
    var img = $('.index .slick-slide > img');

    
    setImgHeight();
    setSlidesWidth();

    $(window).resize(function() {
        setImgHeight();
        setSlidesWidth();
    });

    function setSlidesWidth(){
        $(".slick-slide").css({"width": $(".slick-list.draggable").width() + "px"});
    }

    function setImgHeight() {
        if (img.height() < parentBlock.height()) {
        img.css({
            'height': '100%',
            'width': 'auto',
        });
        }else if(img.height() > parentBlock.height()){
        img.css({
            'height': 'auto',
            'width': '100%',
        });
        }
    }
    // END Slider adaptive slide image

      Fancybox.bind("[data-fancybox='gallery']", {
        thumbs: {
            autoStart: true, // Show thumbnails by default
            axis: 'x', // Arrange thumbnails horizontally
            hideOnClose: true // Hide thumbnails when the gallery is closed
          }
      });
})