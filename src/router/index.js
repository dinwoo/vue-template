import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "HomeLayout" },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/card",
    name: "Card",
    meta: { layout: "DefaultLayout" },
    component: () => import("../views/Card.vue"),
  },
  {
    path: "/cardinfo",
    name: "CardInfo",
    meta: { layout: "DefaultLayout" },
    component: () => import("../views/CardInfo.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
