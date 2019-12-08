import Vue from 'vue';
import NavContent from './rendertopmenu';
require ('./navigation');
let NavComponent = Vue.extend(NavContent);
new NavComponent().$mount("#menu-block");