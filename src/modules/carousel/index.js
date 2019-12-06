import Vue from 'vue';
import 'owl.carousel/dist/owl.carousel';
import MainContent from './rendercarousel';
let MainComponent = Vue.extend(MainContent);
new MainComponent().$mount("#vue-carousel");

//var bindCarousel = function() {};
//bindCarousel();