import 'owl.carousel/dist/owl.carousel';

export default {
    loadCarousel () {
        $(document).ready(function() {
            $('.js-homePageCarousel').owlCarousel({
                loop:false,
                margin:10,
                nav:true,
                navText: ['<div class="left"></div>', '<div class="right"></div>'],
                dots: false,
                rewind:false,
                responsive:{
                    0:{items:1},
                    769:{items:2},
                    1000:{items:5}
                }
            });
        });
    }
}