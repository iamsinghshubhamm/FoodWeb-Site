$(document).ready(function(){
    $('.food_slider').slick({
        autoplay:'true',
        slidesToShow:3,
        slidesToScroll:1,
        prevArrow:".previous_btn",
        nextArrow:".next_btn",

        responsive:[
              {
                breakpoint:992,
                settings:{
                    slidesToShow:2
                }
              },
              {
                breakpoint:768,
                settings:{
                    slidesToShow:1
                }
              }
            ]
    })

    $('.nav_trigger').click(function(){
        $('.site_content_wrapper').toggleClass('scaled')
    })
})