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
      redirect: {
        name:"home"
      },
      children: [
        {
          path: "home",
          name: "home",

          component: () => import("@/components/mainPage")
        },
        {
          path: "mine",
          name: "mine",

          component: () => import("@/components/mine")
        },
        {
          path:"share",
          name:"share",

          component: () => import("@/components/share")
        }
      ]
    }
  ]
});
