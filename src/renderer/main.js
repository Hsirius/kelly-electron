import Vue from "vue";
import axios from "axios";
import ElementUI from "element-ui";
import musicApiConstructor from "@suen/music-api/dist/app.electron";

import "element-ui/lib/theme-chalk/index.css";
import "font-awesome/css/font-awesome.css";

import "./assets/css/reset.scss";
import App from "./App";
import router from "./router";
import store from "./store";

if (!process.env.IS_WEB) Vue.use(require("vue-electron"));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.use(ElementUI, { size: "small" });

/* eslint-disable */
const musicApi = musicApiConstructor(
  require("electron").remote.getGlobal("nodeAdapter")
);
Vue.musicApi = Vue.prototype.$musicApi = musicApi;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: "<App/>",
}).$mount("#app");
