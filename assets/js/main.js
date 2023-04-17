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

    $('.slider').slick({
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        asNavFor: '.thumbnails'
    });
    $('.thumbnails').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider',
        focusOnSelect: true
    });

    // Slider adaptive slide image
    var parentBlock = $('.slick-slide');
    var img = $('.slick-slide > img');

    
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
        console.log("---------------");
        console.log("IMG HEIGH: " + img.height());
        console.log("IMG WIDTH: " + img.width());
        console.log("BLOCK HEIGH: " + parentBlock.height());
        console.log("BLOCK WIDTH: " + parentBlock.width());
        console.log("---------------");

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
})