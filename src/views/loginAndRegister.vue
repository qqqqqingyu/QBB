<template>
  <div class="register_bg" :style="{ minHeight: screenHeight + 'px' }">
    <el-row>
      <el-col :span="4" :offset="1" class="site-title">
        <router-link to="/">
          <img src="src/assets/img/logo-nav.png" alt="图标" height="60">
          <!--        <span class="logo-title">恰帮帮</span>-->
        </router-link>
      </el-col>
    </el-row>

    <el-row>
      <el-col :offset="2" :span="10" class="left-img">
        <img v-if="login === '注册'" src="src/assets/img/login.svg" height="400" alt="注册">
        <img v-else src="src/assets/img/register-img.svg" height="350" alt="注册">
      </el-col>
      <el-col :offset="2" :span="7" class="right-form ">
        <el-card>
          <el-row>
            <el-col class="left" style="margin-top: 10px;margin-bottom: 10px">
              <el-radio-group v-model="login" class="radio-bg">
                <el-radio-button class="industry-radio" label="登录"></el-radio-button>
                <el-radio-button class="industry-radio" label="注册"></el-radio-button>
              </el-radio-group>
            </el-col>
            <el-form :model="registerForm" v-if="login === '注册'">
              <el-col :span="24" style="margin-top: 5px">
                <el-form-item label="类型" style="margin-bottom: 10px">
                  <el-radio v-model="registerForm.userType" label="UP主">UP主</el-radio>
                  <el-radio v-model="registerForm.userType" label="MCN机构">MCN机构</el-radio>
                  <el-radio v-model="registerForm.userType" label="监管方">监管方</el-radio>
                </el-form-item>
              </el-col>

              <el-col :span="24">
                <el-form-item prop="phone" style="margin-top: 20px">
                  <el-input
                    placeholder="请输入手机号"
                    v-model="registerForm.phone"
                    class="my-input"
                    oninput="value=value.replace(/[^0-9.]/g,'')">
                    <i slot="prefix" class="phone-icon"></i>
                  </el-input>
                </el-form-item>
              </el-col>

              <el-col :span="24">
                <el-form-item prop="phone">
                  <el-input
                    placeholder="请输入昵称"
                    v-model="registerForm.userName"
                    class="my-input">
                    <i slot="prefix" class="phone-icon"></i>
                  </el-input>
                </el-form-item>
              </el-col>

              <el-col :span="24">
                <el-form-item prop="phone">
                  <el-input
                    placeholder="请输入密码"
                    v-model="registerForm.pwd"
                    class="my-input"
                    show-password>
                    <i slot="prefix" class="pwd-icon"></i>
                  </el-input>
                </el-form-item>
              </el-col>

              <el-col :span="24">
                <el-form-item>
                  <el-input
                    placeholder="请确认密码"
                    v-model="registerForm.pwdAgain"
                    class="my-input"
                    show-password>
                    <i slot="prefix" class="pwd-icon"></i>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col v-if="login === '登录'" :span="24" class="right hand" style="margin-bottom: 20px">
                <a>忘记密码？</a>
              </el-col>

              <el-col :span="24">
                <el-button type="primary" class="submit-btn" v-on:click="submitRegister">注册</el-button>
              </el-col>

            </el-form>
            <el-form :model="loginForm" v-else>
              <el-col :span="24">
                <el-form-item prop="phone" style="margin-top: 20px">
                  <el-input
                    placeholder="请输入手机号"
                    v-model="loginForm.phone"
                    class="my-input"
                    oninput="value=value.replace(/[^0-9.]/g,'')">
                    <i slot="prefix" class="phone-icon"></i>
                  </el-input>
                </el-form-item>
              </el-col>

              <el-col :span="24">
                <el-form-item prop="phone">
                  <el-input
                    placeholder="请输入密码"
                    v-model="loginForm.pwd"
                    class="my-input"
                    show-password>
                    <i slot="prefix" class="pwd-icon"></i>
                  </el-input>
                </el-form-item>
              </el-col>

              <el-button type="primary" class="submit-btn" v-on:click="submitLogin">确认登录</el-button>

            </el-form>
          </el-row>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import {login, register} from "../api/loginRegister";

export default {
  name: "loginAndRegister",
  data() {
    return {
      screenHeight: window.innerHeight,
      registerForm: {
        userType: '',
        phone: '',
        pwd: '',
        pwdAgain: '',
        userName: '',
      },
      loginForm: {
        phone: '',
        pwd: ''
      },
      checked: '',
      ok: true,
      login: '登录',
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.screenHeight = window.innerHeight
    },
    // 注册
    submitRegister() {
      if (this.registerForm.userType == '') {
        this.$message({
          message: "请选择用户类型",
          type: "warning"
        });
        return
      } else if (this.registerForm.phone == '') {
        this.$message({
          message: "请输入手机号",
          type: "warning"
        });
        return
      } else if (this.registerForm.userName == '') {
        this.$message({
          message: "请输入昵称",
          type: "warning"
        });
        return
      } else if (this.registerForm.pwd == '') {
        this.$message({
          message: "请输入密码",
          type: "warning"
        });
        return
      } else if (this.registerForm.pwdAgain == '') {
        this.$message({
          message: "请确认密码",
          type: "warning"
        });
        return
      }

      let form = {};

      form.userType = this.registerForm.userType
      form.phone = this.registerForm.phone
      form.userName = this.registerForm.userName
      form.pwd = this.registerForm.pwd

      register(form).then((res) => {
        if (res.data.flag === true) {
          this.$message({
            message: "注册成功！",
            type: "success"
          });
          this.login = '登录'
          this.user.userName = res.data.userName
        } else {
          this.$message({
            type: 'info',
            message: '注册失败，请重试'
          });
        }
      })
        .catch((res) => {
          this.$message({
            type: 'info',
            message: '注册失败，请重试'
          });
          console.log('注册接口调用失败：' + res);
        });
    },
    // 登录
    submitLogin() {
      if (this.loginForm.phone == '') {
        this.$message({
          message: "请输入手机号",
          type: "warning"
        });
        return
      } else if (this.loginForm.pwd == '') {
        this.$message({
          message: "请输入密码",
          type: "warning"
        });
        return
      }

      let form = {};

      form.phone = this.loginForm.phone
      form.pwd = this.loginForm.pwd

      this.user.phone = this.loginForm.phone

      login(form).then((res) => {
        if (res.data.flag === true) {
          this.$message({
            message: "登录成功！",
            type: "success"
          });
          this.user.phone = this.loginForm.pwd
          this.$router.push({
            path: '/',
          })
        } else {
          this.$message({
            type: 'warning',
            message: res.data.state
          });
        }
      })
        .catch((res) => {
          this.$message({
            type: 'info',
            message: '登录失败，请重试'
          });
          console.log('登录接口调用失败：' + res);
        });
    }
  }
}
</script>


<style scoped>
.register_bg {
  background-image: url("../assets/img/register-bg.jpg");
  background-size: cover;
}

.site-title {
  margin-top: 3px;
  font-size: 27px;
  font-weight: 600;
  color: #00A5E6;
}

.logo-title {
  margin-left: 10px;
}

.left-img {
  margin-top: 80px;
}

.right-form {
  margin-top: 80px;
}

.right-form h1 {
  font-weight: 600;
}

.right-form .el-form-item {
  margin-bottom: 15px;
}

.content {
  margin-top: 100px;
}

.phone-icon {
  content: url('../assets/img/phone-icon.png');
  height: 24px;
  margin-top: 8px;
}

.pwd-icon {
  content: url('../assets/img/pwd-icon.png');
  height: 20px;
  margin-top: 10px;
  margin-left: 3px;
}

.my-input >>> .el-input__inner {
  padding-left: 35px;
  background: rgba(232, 242, 252, 0.6);
  border-color: rgba(232, 242, 252, 0.8);
}

.submit-btn {
  width: 100%;
  box-shadow: 2px 2px 30px 1px rgba(155, 203, 255, 0.7);
  /*X轴偏移量 Y轴偏移量 阴影模糊半径 阴影扩展半径 阴影颜色*/
  margin-bottom: 30px;
}

.my-input >>> .el-checkbox__label {
  color: #606266;
}

.industry-radio {
  margin-right: 10px;
}


/*被选后的单选框颜色*/
.industry-radio >>> .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  color: rgb(21, 154, 245);
  background: rgba(232, 242, 252, 1);
}

/*单选框样式*/
.industry-radio >>> .el-radio-button__inner {
  border-radius: 5px;
  background: #F5F8FA;
  color: #7F7F7F;
  border: 0;
  padding: 8px 14px;
}

/*单选框覆盖原有阴影*/
.industry-radio >>> .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  box-shadow: none;
}
</style>
