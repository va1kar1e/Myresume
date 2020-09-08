import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Resume from "@/views/Resume.vue";
// import Path from "@/views/Path.vue";

const RESUME_LINK =
  "https://drive.google.com/file/d/1ZVtVd-9QeiF-KC4gcgoHNHxhCgZOtDuI/view";

const routes = [
  {
    path: "/",
    component: Resume,
    name: "Home",
    meta: { title: "Home" },
  },
  // {
  //   path: "/path",
  //   component: Path,
  //   name: "Path",
  //   meta: { title: "Path" },
  //   children: [
  //     {
  //       path: "/a",
  //       component: Path,
  //       meta: { title: "PathA" },
  //     },
  //     {
  //       path: "/b",
  //       component: Path,
  //       meta: { title: "PathB" },
  //     },
  //   ],
  // },
  {
    path: "/d",
    name: "Download",
    children: [
      {
        path: "resume",
        name: "Resume",
        beforeEnter() {
          location.href = RESUME_LINK;
        },
      },
    ],
  },
  {
    path: "/c",
    name: "Contact",
    children: [
      {
        path: "linkedin",
        name: "Linkedin",
        beforeEnter() {
          location.href = "https://linkedin.com/in/siwanont";
        },
      },
      {
        path: "github",
        name: "Github",
        beforeEnter() {
          location.href = "https://github.com/va1kar1e";
        },
      },
    ],
  },
  {
    path: "/v",
    name: "Video",
    children: [
      {
        path: "srclus",
        name: "Srclus",
        beforeEnter() {
          location.href = "https://www.youtube.com/watch?v=eMprd8Fwt80";
        },
      },
      // {
      //   path: "explorercar",
      //   name: "Explerer Car",
      //   beforeEnter() {
      //     location.href = "https://www.youtube.com/watch?v=Lg-nDld06WY";
      //   },
      // },
    ],
  },
];

export default new VueRouter({
  mode: "history",
  routes: routes,
});
