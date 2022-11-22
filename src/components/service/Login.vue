<template>
  <header>
    <img class="logo" src="../../../public/img/logo2.png" @click="index">
    <div class="main">

      <div class="login">
        <div class="header">
          <span :class="{'clickSpan':!click}" @click="password">密码登录</span>
          <span :class="{'clickSpan':click}" @click="sms">短信登录</span>
        </div>
        <div :class="{'svg':true, 'passwordForm':click}">
          <label for="id" class="idsvg">
            <el-icon><UserFilled /></el-icon>
          </label>
          <label for="password" class="passwordsvg">
            <el-icon><Lock /></el-icon>
          </label>
        </div>
        <div :class="{'password':true, 'passwordForm':click}">
          <input id="id" type="text" placeholder="请输入账号">
          <input id="password" :type="passwordType" placeholder="请输入密码">
          <i id="eye" :class='{"icon-yanjing_yincang":passwordLook,"icon-yanjing_xianshi":!passwordLook}' @click="lookPassword" style="font-size: 22px!important" ></i>
        </div>


        <div :class="{'svg':true, 'passwordForm':!click}">
          <label for="phone" class="idsvg">
            <el-icon><Iphone /></el-icon>
          </label>
          <label for="verificationCode" class="passwordsvg">
            <el-icon><ChatSquare /></el-icon>
          </label>
        </div>
        <div :class="{'password':true, 'passwordForm':!click}">
          <input id="phone" type="text" placeholder="请输入手机号码">
          <input id="verificationCode" type="text" placeholder="请输入验证码">
          <span class="tip" @click="skip">获取验证码</span>
        </div>

        <div class="submit" @click="skip">登录</div>
        <div class="thirdParty" @click="skip">
          <i class="icon-QQ" style="color: lightskyblue"></i>
          <span>QQ登录</span>
          <i class="icon-weixin" style="color: rgb(21, 212, 107)"></i>
          <span>微信登录</span>
        </div>
        <span class="register" @click="goRegister">免费注册</span>

      </div>
    </div>

  </header>
</template>

<script>

import Message from "@/components/tool/Message";

export default {
  name: "Login",
  data() {
    return {
      click: false,
      passwordLook: true,
      passwordType: 'password'
    }
  },
  components: [],
  methods: {
    password() {
      this.click = false;
    },
    sms() {
      this.click = true;
    },
    index() {
      this.$router.push("/");
    },
    skip() {
      Message({text:"后端接口未连接",type:"error"})
    },
    goRegister() {
      this.$router.push("/register");
    },
    lookPassword() {
      this.passwordLook = !this.passwordLook;
      if(this.passwordLook) {
        this.passwordType = 'password';
      }
      else {
        this.passwordType = 'text';
      }
    }
  }
}
</script>

<style scoped>

svg {
  width: 30px;
  height: 40px;
  color: white;
  background-color: rgb(204, 204, 204);
  padding: 0 5px;
  margin-bottom: 10px;

  z-index: 9999;

}

.svg {
  width: 30px;
  position: absolute;
  top: 70px;
  z-index: 9999;
}

header {
  height: 800px;
  background-color: rgb(255, 255, 255);
}

.logo {
  height: 50px;
  position: absolute;
  left: 170px;
  top: 60px;
  cursor: pointer;
}

.main {
  height: 530px;
  background: url("../../../public/img/img_3.png");
  background-size: cover;
  background-position-y: -280px;
  position: relative;
  top: 100px;
}

.login {
  background-color: rgba(250, 244, 251,0.97);
  width: 300px;
  height: 300px;
  position: absolute;
  right: 200px;
  top: 70px;
  padding: 18px;
}


.header span{
  margin-right: 10px;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
}

.clickSpan {
  border-bottom: 3px solid black;
}

.password {
  width: 200px;
  position: relative;
  top: 13px;
  left: 40px;
}
#eye {
  position: absolute;
  top: 80px;
  right: -25px;
  cursor: pointer;
}

.password input {

  position: relative;
  top: 15px;
  margin-bottom: 15px;
  padding: 10px 10px 10px 10px;
  width: 225px;
  height: 20px;
  border: 0;
  outline: 0;

}

.passwordForm {
  display: none;
}

.submit {
  position: relative;
  top: 40px;
  background-color: rgba(255, 68, 0,0.8);
  color: white;
  text-align: center;
  height: 45px;
  width: 287px;
  line-height: 45px;
  cursor: pointer;
}

.submit:hover {
  background-color: rgba(255, 68, 0,1);
}

.tip {
  font-size: small;
  position: absolute;
  right: -35px;
  top: 80px;
  color: #6C6C6C;
  cursor: pointer;
}

.register {
  position: absolute;
  bottom: 30px;
  right: 20px;
  font-size: small;
  color: #6C6C6C;
  cursor: pointer;
}

.thirdParty {
  position: absolute;
  bottom: 63px;
  left: 20px;
  font-size: small;
  color: #6C6C6C;
  cursor: pointer;
}

.thirdParty span {
  margin-right: 5px;
}
</style>
