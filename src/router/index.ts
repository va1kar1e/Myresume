import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Resumeweb from "@/views/Resumeweb.vue";
import info from "@/assets/info.json";

const routes = [
  {
    path: "/",
    component: Resumeweb,
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
          location.href = info.urllink.resume;
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
          location.href = info.urllink.linkedin;
        },
      },
      {
        path: "github",
        name: "Github",
        beforeEnter() {
          location.href = info.urllink.github;
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
          location.href = info.urllink.srclusYT;
        },
      },
      {
        path: "explorercar",
        name: "Explerer Car",
        beforeEnter() {
          location.href = info.urllink.explorercarYT;
        },
      },
    ],
  },
];

export default new VueRouter({
  mode: "history",
  routes: routes,
});
