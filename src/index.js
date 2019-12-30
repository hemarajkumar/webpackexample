import './sass/main.scss';
require ('./modules/common/main');

import Vue from 'vue'
import router from './modules/routing/index.js';
import App from './modules/App'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount();