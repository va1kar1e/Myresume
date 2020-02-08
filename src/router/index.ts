import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Layout from "@/views/layouts/Layout.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout
  }
];

export default new VueRouter({
  routes: routes
});
