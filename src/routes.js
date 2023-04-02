import home from "./views/home";
import homepage from "./views/homepage";
import square from "./views/square";
import details from "./views/details";
import prevalence from "./views/prevalence";
import result from "./views/result";
import model from "./views/model";
import precaution from "./views/precaution";
import loginAndRegister from "./views/loginAndRegister";
import precautionCalculation from "./views/precautionCalculation";
import personalCenter from "./views/personalCenter";

export const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {
      title: '首页',
      keepAlive: true,
    }
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: homepage,
    meta: {
      title: '首页',
      keepAlive: true,
    }
  },
  {
    path: '/square',
    name: 'square',
    component: square,
    meta: {
      title: '视频广场',
      keepAlive: true,
    }
  },
  {
    path: '/details',
    name: 'details',
    component: details,
    meta: {
      title: '视频流行度详情',
      keepAlive: true,
    }
  },
  {
    path: '/prevalence',
    name: 'prevalence',
    component: prevalence,
    meta: {
      title: '流行度预测',
      keepAlive: true,
    }
  },
  {
    path: '/result',
    name: 'result',
    component: result,
    meta: {
      title: '结果分析',
      keepAlive: true,
    }
  },
  {
    path: '/model',
    name: 'model',
    component: model,
    meta: {
      title: '模型介绍',
      keepAlive: true,
    }
  },
  {
    path: '/precaution',
    name: 'precaution',
    component: precaution,
    meta: {
      title: '视频预警详情',
      keepAlive: true,
    }
  },
  {
    path: '/precautionCalculation',
    name: 'precautionCalculation',
    component: precautionCalculation,
    meta: {
      title: '预警器',
      keepAlive: true,
    }
  },
  {
    path: '/loginAndRegister',
    name: 'loginAndRegister',
    component: loginAndRegister,
    meta: {
      title: '登录注册',
      keepAlive: true,
    }
  },
  {
    path: '/personalCenter',
    name: 'personalCenter',
    component: personalCenter,
    meta: {
      title: '个人中心',
      keepAlive: true,
    }
  }
]
