import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import info from "@/assets/info.json";
import profile from "@/views/Profile.vue";
import home from "@/views/Home.vue";
import resume from "@/views/Resume.vue";
import notfound from "@/views/NotFound.vue";

import path from "@/views/Path.vue";
import tnid from "@/components/path/tnid.vue";

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
    meta: { title: "Resume" },
     children: [
      {
        path: "general",
        name: "General",
        beforeEnter() {
          location.href = location.origin + "/files/" + info.urllink.resume4G;
        },
       },
       {
        path: "ats",
        name: "ATS",
        beforeEnter() {
          location.href = location.origin + "/files/" + info.urllink.resume4ATS;
        },
      },
    ]
  },
  {
    path: "/path",
    name: "Path",
    component: path,
    meta: { title: "Path" },
    children: [
      {
        path: "tnid",
        name: "Thai National ID Reader",
        component: tnid,
        props: {
          title: "Thai National ID Reader",
        },
       },
    ]
  },
  {
    path: "/c",
    name: "Contact",
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
  {
    path: "/:pathMatch(.*)*",
    component: notfound,
    name: "Not Found",
    meta: { title: "Not Found" },
  }
];

export default new VueRouter({
  mode: "history",
  routes: routes,
});
