import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueI18n from "vue-i18n"; // 引入 Vue I18n
import ch from "./lang/ch";
import en from "./lang/en";

import VueScrollmagic from "vue-scrollmagic";

import mixinMethod from "@/mixins/index.js";

import VueMeta from "vue-meta";

import "./plugins/axios";
// mock
import "./fake-db/index.js";

Vue.use(VueMeta);

Vue.use(VueI18n);
Vue.mixin(mixinMethod);
router.afterEach(() => {
  window.scrollTo(0, 0); //切换路由之后滚动条始终在最顶部
});

// 預設使用的語系
let locale = "en";

// 檢查 localStorage 是否已有保存使用者選用的語系資訊
if (localStorage.getItem("footmark-lang")) {
  locale = localStorage.getItem("footmark-lang");
  store.commit("SET_LANG", locale);
} else {
  store.commit("SET_LANG", locale);
}

const i18n = new VueI18n({
  locale: locale,
  messages: {
    ch,
    en,
  },
});

Vue.use(VueScrollmagic, {
  verical: true,
  globalSceneOptions: {},
  loglevel: 2,
  refreshInterval: 100,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
