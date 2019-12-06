import Vue from 'vue';
import NavContent from './rendertopmenu';
let NavComponent = Vue.extend(NavContent);
new NavComponent().$mount("#menu-block");

//var bindCarousel = function() {};
//bindCarousel();