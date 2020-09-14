import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/styles/index.scss";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");