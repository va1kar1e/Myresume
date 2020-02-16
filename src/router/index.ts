import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "@/views/Home.vue";
import Path from "@/views/Path.vue";

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/",
        component: Home,
        name: "Home",
        meta: { title: "Home" }
      }
    ]
  },
  {
    path: "/resume",
    name: "Resume",
    beforeEnter() {
      location.href =
        "https://drive.google.com/open?id=1OF1aVZMs4qbo71npq7lUkYMafEaeqRAF";
    }
  },
  {
    path: "/path",
    component: Path,
    name: "Path",
    meta: { title: "Path" }
  }
];

export default new VueRouter({
  routes: routes
});
