import Vue from 'vue';
import { store } from "../store/store";
import carousel from './rendercarousel.vue';

var app = new Vue({
    store: store,
    el: '#vue-carousel',
    render: h => h(carousel)
});