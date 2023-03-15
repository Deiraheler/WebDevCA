$(function(){
    $("#profile-icon").on('click', function(){
        $("#profile-block").toggleClass("open");
    })

    $(".close-cross").on("click", function(){
        $(this).parent().toggleClass("open");
    })

    $('.big-img').slick({
        infinite: true,
        autoplay: true,
        speed: 1000,
        dots: true,
        autoplaySpeed: 3000,
      });
})