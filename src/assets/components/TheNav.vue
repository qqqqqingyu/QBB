<template>
  <el-row class="my-nav-bar nav-pos center-vertically">
    <el-col :span="4" :offset="1" class="site-title">
      <router-link to="/">
        <img src="src/assets/img/logo-nav.png" alt="图标" height="60" style="padding-bottom: 10px">
<!--        <span class="logo-title">恰帮帮</span>-->
      </router-link>
    </el-col>
    <ul class="my-nav nav-list">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/square">视频广场</router-link>
      </li>
      <li>
        <router-link to="/loginAndRegister">流行度预测</router-link>
      </li>
      <li>
        <router-link to="/model">模型介绍</router-link>
      </li>
      <li>
        <router-link to="/loginAndRegister">预警器</router-link>
      </li>
      <router-link to="/loginAndRegister" style="color: #FFFFFF">
        <li class="center-vertically nav-btn">
          <span class="nav">登录</span> |
          <span>注册</span>
        </li>
      </router-link>
    </ul>
  </el-row>
</template>

<script>
export default {
  name: "TheNav"
}
</script>

<style scoped>

.site-title{
  font-size: 27px;
  font-weight: 600;
  color: #00A5E6;
}

.site-title img{
  padding-top: 13px;
}

.site-title a{
  text-decoration: none;

}

.site-title a:hover{
  color: #00A5E6;
}

.logo-title{
  margin-left: 10px;
}


.nav-pos{
  position: fixed;
  width: 100%;
  top:0;
  z-index: 20;
  border-bottom: solid 1px #e6e6e6;
  transition: all 0.3s ease-out 0s;
}

.nav{
  display: inline-block;
}

.my-nav-bar {
  width: 100%;
  margin: 0 auto;
  padding-top: 7px;
  padding-bottom: 3px;
  z-index: 20;
  height: 65px;
  background: #FFFFFF;
}

.my-nav {
  position: absolute;
  right: 8.3%;
  z-index: 20;
}

.my-nav li {
  float: left;
  padding-left: 35px;
  padding-right: 35px;
  height: 40px;
  line-height: 40px;
  list-style-type: none;
  cursor: pointer;
  margin: 0;
}

.my-nav li a {
  text-decoration: none;
  padding-bottom: 4px;
  font-size: 16px;
}

.my-navleft-option li a:hover {
  border-bottom: solid 2px #fff;
}

.nav-btn{
  background-image: linear-gradient(to right, #48c6ef 0%, #6f86d6 100%);
  border-radius:15px;
  color: #FFFFFF;
}

.nav-btn span{
  margin-left: 3px;
  margin-right: 3px;
}

.nav-btn :hover{
  font-weight: 600;
}

</style>
