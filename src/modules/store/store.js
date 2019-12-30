import Vue from 'vue';
import Vuex from 'vuex';
import data from "../common/jsondata";
Vue.use(Vuex);

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

const productObject = new Vuex.Store({
  state: [{
    'data': data.productList,
    'sortOption': 'default',
    'productDetails': [],
    'categoryList': data.category,
    'categoryTitle': '',
    'categoryId': '',
    'actionProductObj': []
  }],
  mutations: {
    getCategoryDetails: (state) => {
     // console.log('test..');
      var categoryObj = document.querySelector('.js-router-category');
      var categoryType = categoryObj.getAttribute('routepage');
      let categoryList = state[0].categoryList;
      for (let value of Object.values(categoryList["lists"])) {
        if (value.name == categoryType.trim()) {
          state[0].categoryTitle = value.title;
          state[0].categoryId = value.id;
        }
      }
     // console.log(state[0].categoryTitle);
      return state[0].categoryId;
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
      //console.log('1');
     // console.log(_.filter(listObj,'roundelImg'));
     // console.log('2');
    }
  },
  getters: {
    generateProductList: (state) => {
      let productList = state[0].data;
      let productArray = [];
      let categoryTitle = [];
      let productobj = [];
      for (let value of Object.values(productList["lists"])) {
        let childObject = {};
        childObject["Title"] = value.Title;
        childObject["id"] = value.id;
        let listobj = {};
        let categoryId = state[0].categoryId;
        for (let list of Object.values(value.list)) {
          listobj = {};
          listobj["id"] = list.id;
          listobj["name"] = list.name;
          listobj["price"] = list.price;
          listobj["image"] = list.image;
          listobj["roundelImg"] = list.roundelImg;
          listobj["color"] = list.color;
          listobj["wasprice"] = list.wasprice;
          listobj["quantity"] = list.quantity;
          let productId = list.id;
          switch (categoryId) {
            case 'viewall':
              productArray.push(listobj);
              break;
            case 'sales':
              if (list.roundelImg) {
                productArray.push(listobj);
              }
              break;
            default:
              if (productId.includes(categoryId)) {
                productArray.push(listobj);
              }
          }
        }
        categoryTitle.push(childObject);
      }
      productobj = productArray;
      state[0].productDetails = productArray;
      return productobj;
    },
  },
  actions: {
  }
})

const sortOption = new Vuex.Store({
  state: [{
    'data': data.sortList,
    'sortOption': 'default'
  }],
  mutations: {
    updateSortOption: (state, value) => {
      state[0].sortOption = value;
    }
  }
})

export {
  productObject,
  carouselObject,
  navMenu,
  sortOption
}