import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import profile from "@/views/Profile.vue";
import home from "@/views/Home.vue";
import path from "@/views/Path.vue";
import info from "@/assets/info.json";

const routes = [
  {
    path: "/",
    component: home,
    name: "Home",
    meta: { title: "Home" },
  },
  {
    path: "/profile",
    component: profile,
    name: "Profile",
    meta: { title: "Profile" },
  },
  {
    path: "/path",
    component: path,
    name: "Path",
    meta: { title: "Path" },
    children: [
      {
        path: "/a",
        component: path,
        meta: { title: "PathA" },
      },
      {
        path: "/b",
        component: path,
        meta: { title: "PathB" },
      },
    ],
  },
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
