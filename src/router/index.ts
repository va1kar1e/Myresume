import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Layout from "@/views/layouts/Layout.vue";
import Path from "@/views/Path.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout
  },
  {
    path: "/path",
    component: Layout,
    name: "Path",
    children: [
      {
        path: "/path",
        name: "Path",
        component: Path,
        meta: { title: "Path" }
      }
    ]
  }
];

export default new VueRouter({
  routes: routes,
  mode: "history"
});
