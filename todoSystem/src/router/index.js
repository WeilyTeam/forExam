import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import main from "@/pages/main";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: login
    },
    {
      path: "/main",
      name: "main",
      component: main,
      redirect: "home",
      children: [
        {
          path: "/home",
          name: "home",

          component: () => import("@/components/mainForm")
        },
        {
          path: "/mytodo",
          name: "mytodo",

          component: () => import("@/components/mytodo")
        },
        {
          path: "/mine",
          name: "mine",

          component: () => import("@/components/mine")
        }
      ]
    }
  ]
});
