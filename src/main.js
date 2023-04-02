import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 全局注册
import components from "./components";
//自定义全局样式
import "./assets/css/style.css"
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(VueRouter);
Vue.use(ElementUI);
//全局组件
Vue.use(components);


const router = new VueRouter({
  routes: routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

router.beforeEach((to, from, next) => {
  //路由发生改变时,触发
  window.document.title = to.meta.title == undefined ? '默认标题' : to.meta.title
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next();
})
