import TheNav from "./assets/components/TheNav";
import TheNavLogin from "./assets/components/TheNavLogin";

export default (Vue) => {
  // 全局注册组件，可以把组件当做html标签一样直接使用
  Vue.component('TheNav',TheNav);
  Vue.component('TheNavLogin',TheNavLogin);
}
