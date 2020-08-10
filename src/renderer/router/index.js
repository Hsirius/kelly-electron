import Vue from "vue";
import Router from "vue-router";

const MainContent = () => import("../pages/LeftBar/SystemInformation.vue");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "mainPage",
      component: MainContent,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});
