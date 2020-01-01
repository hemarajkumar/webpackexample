import Vue from 'vue';
import Vuex from 'vuex';
import data from "../common/jsondata";
import router from "../routing/index";
Vue.use(Vuex);

import plpmethods from './functions';

const navMenu = new Vuex.Store({
  state: [{
    'data': data.menu
  }]
})

const carouselObject = new Vuex.Store({
  state: [{
    'data': data.carousel
  }]
})

export const store = new Vuex.Store({
  state: [{
    'data': data.productList,
    'sortList': data.sortList,
    'sortOption': 'default',
    'productDetails': [],
    'categoryList': data.category,
    'categoryTitle': '',
    'categoryId': ''
  }],
  mutations: {
    categoryTitle: (state) => {
      state[0].categoryId = '';
      let category = router.history.current.params.category;
      let _categorySection = plpmethods.gatCategoryTitle(category, state[0].categoryList);
      state[0].categoryTitle = _categorySection.title;
      state[0].categoryId = _categorySection.id;
      return state[0].categoryTitle;
    },

    productList: (state) => {
      let category = router.history.current.params.category;
      let _categoryId = plpmethods.gatCategoryId(category, state[0].categoryList);
      let products = plpmethods.getlistProducts(state[0].data, _categoryId);
      state[0].productDetails = products;
      return state[0].productDetails;
    },

    updateSortOption: (state, value) => {
      let listObj = state[0].productDetails;
      state[0].sortOption = value;
      switch (value){
        case 'lowtohigh':
          console.log('low to high');
          break;
        case 'hightolow':
          console.log('high to low');
          break;
        case 'atoz':
          console.log('a to z');
          break;
        case 'ztoa':
          console.log('z to a');
          break;
      }
    // console.log(_.filter(listObj,'roundelImg'));
    // console.log(_.sortBy( listObj, 'name' ));
    // console.log('2');
    }
  },
  getters: {
    categoryTitle: (state) => {
        state[0].categoryId = '';
        let category = router.history.current.params.category;
        let _categorySection = plpmethods.gatCategoryTitle(category, state[0].categoryList);
        state[0].categoryTitle = _categorySection.title;
        state[0].categoryId = _categorySection.id;
        return state[0].categoryTitle;
    },
  
    productList: (state) => {
      let category = router.history.current.params.category;
      let _categoryId = plpmethods.gatCategoryId(category, state[0].categoryList);
      let products = plpmethods.getlistProducts(state[0].data, _categoryId);
      state[0].productDetails = products;
      return state[0].productDetails;
    },
  },
  actions: {

  }
})

const sortOption = new Vuex.Store({
  state: [{
    'data': data.sortList,
    'sortOption': 'default'
  }]
})

export {
  carouselObject,
  navMenu,
  sortOption
}