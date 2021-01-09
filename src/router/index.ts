import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import profile from "@/views/Profile.vue";
import home from "@/views/Home.vue";
// import path from "@/views/Path.vue";
import resume from "@/views/Resume.vue";
import construction from "@/views/Construction.vue";
import info from "@/assets/info.json";

const routes = [
  {
    path: "/",
    component: home,
    name: "Home",
    meta: { title: "Home" },
    redirect: { name: 'Profile' }
  },
  {
    path: "/profile",
    component: profile,
    name: "Profile",
    meta: { title: "Profile" },
  },
  {
    path: "/resume",
    component: resume,
    name: "Resume",
    meta: { title: "Profile" },
  },
  {
    path: "/path",
    component: construction,
    name: "Path",
    meta: { title: "Path" },
    // children: [
    //   {
    //     path: "/a",
    //     component: path,
    //     meta: { title: "PathA" },
    //   }
    // ],
  },
  {
    path: "/c",
    name: "Contact",
    component: construction,
    children: [
      {
        path: "email",
        name: "Email",
        beforeEnter() {
          location.href = "mailto:"+info.header.email;
        },
      },
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
