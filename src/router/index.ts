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
    path: "/path",
    component: Path,
    name: "Path",
    meta: { title: "Path" }
  },
  {
    path: "/resume",
    name: "Resume",
    beforeEnter() {
      location.href =
        "https://drive.google.com/file/d/1ywzp41ek_nguP7A1RUfzya7W7KkscH9T/view?usp=sharing";
    }
  },
  {
    path: "/linkedin",
    name: "Linkedin",
    beforeEnter() {
      location.href = "https://linkedin.com/in/siwanont";
    }
  },
  {
    path: "/github",
    name: "Github",
    beforeEnter() {
      location.href = "https://github.com/booktay";
    }
  },
  {
    path: "/facebook",
    name: "Facebook",
    beforeEnter() {
      location.href = "https://fb.me/booktay";
    }
  }
];

export default new VueRouter({
  routes: routes
});
