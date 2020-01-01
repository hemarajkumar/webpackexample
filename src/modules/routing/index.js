import Vue from 'vue';
import Router from 'vue-router';
import homePage from '../components/homepage.vue';
import plpPage from '../components/plp.vue';
import page404 from '../components/pagenotfound.vue';
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homePage
    },
    {
      path: '/plp/:category',
      name: 'plppage',
      component: plpPage
    },
    {
      path: '*',
      name: 'notfound',
      component: page404
    }
  ]
})

export default router;