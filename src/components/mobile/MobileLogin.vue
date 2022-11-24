<template>

  <div :class="{'main':loginType==='验证码登录','none':loginType!=='验证码登录'}">
    <h2>用户登录</h2>
    <input type="text" placeholder="请输入账号">
    <input type="password" placeholder="请输入密码">
    <button class="login" @click="wrong">登录</button>
  </div>
  <div :class="{'main':loginType!=='验证码登录','none':loginType==='验证码登录'}">
    <h2>用户登录</h2>
    <input type="number" v-model="phone" placeholder="请输入手机号码">
    <input type="password" placeholder="请输入验证码">
    <span @click="clickOnVerificationCode">{{content}}</span>
    <button class="login" @click="wrong">登录</button>
  </div>
  <footer>
    <span class="register" @click="register">新用户注册</span>
    <span class="loginType" @click="typeChange">{{loginType}}</span>
  </footer>
</template>

<script>
import Message from "@/components/tool/Message";
import {isMobile} from "@/api/tool/MathTool";

export default {
  name: "MobileLogin",
  data() {
    return {
      loginType: '验证码登录',
      content: '请输入验证码',
      timer: null,
      waitTime: 60,
      phone: '',
    }
  },
  methods: {
    wrong() {
      Message({text:'功能未开发',type:'warn'})
    },
    typeChange() {
      if(this.loginType === '验证码登录') {
        this.loginType = '密码登录';
      }else {
        this.loginType = '验证码登录'
      }

    },
    clickOnVerificationCode() {

      if(!isMobile(this.phone)) {
        Message({text:'请输入正确的号码',type:'error'})
        return;
      }


      if(this.timer !== null) {
        return;
      }
      this.content = this.waitTime-- + "秒后重发"
      this.timer = setInterval(() => {
        this.content = this.waitTime-- + "秒后重发"
      },1000)

      setTimeout(() => {
        this.content = "请输入验证码";
        clearInterval(this.timer);
        this.timer = null;
        this.waitTime = 60;
      },60000);

      this.skip();
    },
    register() {
      this.$router.push('/mobile/register')
    }
  },
  created() {
  }
}
</script>

<style scoped>

.main {
  width: 320px;
  margin: 0 auto;
  position: relative;
}

.none {
  display: none;
}

.main span {
  color: rgb(255, 80, 0);
  position: absolute;
  right: 20px;
  bottom: 105px;
  font-size: 13px;
}

h2 {
  padding-top: 70px;
  padding-bottom: 40px;
  font-weight: 350;
  font-size: 30px;
}

input {
  display: block;
  height: 50px;
  line-height: 30px;
  width: 280px;
  border: none;
  outline: none;
  margin: 20px auto;
  padding-left: 20px;
  border-bottom: 1px solid rgb(236, 237, 241);
}

input::placeholder {
  color: rgb(198, 201, 209);
}


button {
  display: block;
  margin: 50px auto;

  width: 280px;
  height: 40px;
  color: white;
  border: none;
  background-color: rgba(255, 165, 0,0.9);
  border-radius: 5px;
}

button:active {
  background-color: rgba(255, 165, 0,1);

}

footer {
  width: 300px;
  margin: 0 auto;
  margin-top: 250px;
  color: rgb(78, 83, 97);

}

footer span {
  display: inline-block;
  width: 149px;
  text-align: center;

}

footer span:active {
  color: rgba(255, 165, 0,0.9);

}

.loginType {
  border-left: 1px solid rgb(226, 226, 230);
}


</style>
