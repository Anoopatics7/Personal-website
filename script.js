$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');   
        }
    })

    //toggle menu /navbar menu script

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
    //typing animation
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    //Owl carousel script
    $('.carousel').owlCarousel({
       margin: 20 ,
       loop : true ,
       autoplay:true,
       autoplayTimeout:2000,
       autoplayHoverPause:true,
       responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
       }
    });
});