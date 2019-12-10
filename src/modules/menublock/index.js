import Vue from 'vue';
require ('./navigation');
import { store } from "../store/store";
import menulist from './rendertopmenu.vue';

var app = new Vue({
    store: store,
    el: '#menu-block',
    render: h => h(menulist)
});