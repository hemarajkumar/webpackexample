import Vue from 'vue';
import Vuex from 'vuex';
import data from "../common/jsondata";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      data
    }
});