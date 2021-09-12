import Vue from "vue";
import Vuex from "vuex";
import ApiService from "@/common/api.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    lang: null, // 存放使用者選用的語系
    screenWidth: document.body.clientWidth,
  },
  mutations: {
    // 切換語系設定
    SET_LANG(state, value) {
      state.lang = value;
    },
    SET_LOADING(state, value) {
      state.isLoading = value;
    },
    SET_SCREEN_WIDTH(state, value) {
      state.screenWidth = value;
    },
  },
  actions: {
    getApi(context) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.get("api/get", "", {})
          .then(({ data }) => {
            console.log(data);
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              resolve(data.data);
            } else {
              alert(data.msg);
            }
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
  },
  modules: {},
});
