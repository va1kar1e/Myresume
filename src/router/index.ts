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
        "https://drive.google.com/file/d/18cDF61FgGoWp3FCyIoEdF3H510x9Kkvb/view";
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
  },
  {
    path: "/srclus",
    name: "Srclus",
    beforeEnter() {
      location.href = "https://www.youtube.com/watch?v=eMprd8Fwt80";
    }
  },
  {
    path: "/explerercar",
    name: "Explerer Car",
    beforeEnter() {
      location.href = "https://www.youtube.com/watch?v=Lg-nDld06WY";
    }
  }
];

export default new VueRouter({
  routes: routes
});
