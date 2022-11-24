<template>
  <div class="box">

    <header>
      <img class="logo" src="../../../public/img/logo2.png" alt="无法显示图片" @click="index">
      <span>用户注册</span>
    </header>

    <div class="main">
      <div class="form">

        <table>
          <tr>
            <th><label for="username">用户名</label></th>
            <td>
              <input id="username" type="text" placeholder="请输入用户名">
            </td>
          </tr>

          <tr>
            <th><label for="password">密码</label></th>
            <td>
              <input id="password" type="password" placeholder="请输入密码">
            </td>
          </tr>
          <tr>
            <th><label for="confirm">确认密码</label></th>
            <td>
              <input id="confirm" type="password" placeholder="请再次输入密码">
            </td>
          </tr>

          <tr>
            <th><label for="phone">手机号码</label></th>
            <td>
              <input id="phone" type="text" placeholder="请输入手机号码">
            </td>
          </tr>


          <tr>
            <th><label for="verificationCode">验证码</label></th>
            <td>
              <input id="verificationCode" type="text" placeholder="请输入验证码">
              <i @click="clickOnVerificationCode">{{content}}</i>
            </td>
          </tr>

        </table>

        <div class="register" @click="skip">注册</div>

        <div class="instructions">
          <input type="radio" id="instructions" name="instructions" value="1">

          <label for="instructions">已阅读并同意以下协议
            <i @click="skip">幸福客栈服务协议、隐私权政策、法律声明</i>
          </label>

        </div>


      </div>

    </div>
  </div>

</template>

<script>
import Message from "@/components/tool/Message";

export default {
  name: "Register",
  data() {
    return {
      content: "请输入验证码",
      waitTime: 60,
      timer: null
    }
  },
  methods: {
    index() {
      this.$router.push("/index");
    },
    clickOnVerificationCode() {
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
    skip() {
      Message({text:"后端接口未连接",type:"error"})
    }
  }
}
</script>

<style scoped>

.box {
  height: 700px;
  background-color: rgb(255,255,255);
}

header {
  padding-top: 40px;
  line-height: 50px;

}

header span {
  font-size: 24px;
  position: relative;
  bottom: 15px;
  left: 5px;

}
.logo {
  width: 200px;
  margin-left: 200px;
  cursor: pointer;
}

.main {
  background-color: rgb(255,255,255);

}

.form {
  width: 800px;
  position: relative;
  left: 37%;
  top: 30px;
  background-color: rgb(255,255,255);

}


.form tr {
  line-height: 70px;
}

.form th {
  font-weight: 300;
  font-size: 14px;
  padding-right: 10px;
  text-align: right;
}

input[type=text],
input[type=password] {
  width: 250px;
  border: 1px solid rgb(214, 214, 214);
  outline: none;
  height: 10px;
  padding: 15px;

}

.gender input {
  cursor: pointer;
}
.gender label{
  padding-left: 5px;
  margin-right: 20px;
  cursor: pointer;

}

i {
  font-style: normal;
  cursor: pointer;

}

table i {
  font-size: small;
  position: relative;
  right: 80px;
  color: rgb(255, 80, 0);
}

.register {
  width: 284px;
  height: 33px;
  color: white;
  text-align: center;
  line-height: 33px;
  background-image: linear-gradient(to right,rgb(255, 204, 128),rgb(255, 168, 128));
  cursor: pointer;
  position: relative;
  left: 69px;
  top: 20px;
  font-size: 13px;
}

.instructions input {
  width: 15px;
  height: 15px;
  content: " ";
  border-radius: 0;
  display: block;

  padding: 0;
  position: absolute;
  top: 3px;
  left: -16px;
}

.instructions {
  width: 250px;
  font-size: small;
  position: relative;
  top: 50px;
  left: 85px;
  line-height: 20px;
  background-color: rgb(255,255,255);

}
.instructions label {
  display: block;
  width: 265px;
  margin-left: 7px;
  font-weight: 200;
  font-size: 13px;

}
.instructions i {
  color: rgb(253, 96, 32);
}

</style>
