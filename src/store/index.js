import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isFooterShow:true,
  },
  mutations: {
    ChangeFooter(state,val){
      state.isFooterShow = val;
    }
  },
  actions: {
  },
  getters:{
  },
  modules: {
  }
})
