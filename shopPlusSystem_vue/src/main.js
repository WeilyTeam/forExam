// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/js/rem'
import './assets/style/reset.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Chat from 'vue-beautiful-chat'
import {
  Button,
  Card,
  Cell,
  Col,
  DropdownItem,
  DropdownMenu,
  Field,
  Form,
  GoodsAction,
  GoodsActionButton,
  GoodsActionIcon,
  Grid,
  GridItem,
  Icon,
  Image as VanImage,
  Lazyload,
  List,
  NavBar,
  PullRefresh,
  Row,
  Search,
  Sku,
  Swipe,
  SwipeItem,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
  Tag,
  Toast,
  TreeSelect
} from 'vant'

import query from "./utils/query";
// require("./mock/mock")
Vue.use(Chat)
Vue.use(DropdownMenu).use(DropdownItem).use(Tag).use(Sku).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Toast).use(Field).use(Form).use(NavBar).use(Tab).use(Cell).use(List).use(PullRefresh).use(TreeSelect).use(Icon).use(VanImage).use(Tabs).use(Grid).use(GridItem).use(Tabbar).use(TabbarItem).use(Button).use(Search).use(Col).use(Row).use(Swipe).use(SwipeItem).use(Lazyload).use(Card)
Vue.config.productionTip = false
Vue.prototype.$http = query;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
