$(document).ready(function(){
    $('.owl-carousel').owlCarousel({

        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            320: {
                items:2
                },
            375: {
                items:2
                },
            425: {
                items:3
                },
            768:{
                items:4
            },
           1024: {
            items:5
            },
            
            1044:{
                items:7
            },
           
        }
        
    })
})