<template>
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
          <th>性别</th>
          <td class="gender">
            <input type="radio" id="man" name="gender">
            <label for="man">男</label>
            <input type="radio" id="woman" name="gender">
            <label for="woman">女</label>
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
            <i @click="skip">获取验证码</i>
          </td>
        </tr>

      </table>

      <div class="register" @click="skip">注册</div>

      <div class="instructions">
        <input type="radio" id="instructions">
        <label for="instructions">已阅读并同意以下协议
        </label>
        <i @click="skip">幸福客栈服务协议、隐私权政策、法律声明</i>
      </div>


    </div>

  </div>
</template>

<script>
import Message from "@/components/tool/Message";

export default {
  name: "Register",
  methods: {
    index() {
      this.$router.push("/");
    },
    skip() {
      Message({text:"后端接口未连接",type:"error"})
    }
  }
}
</script>

<style scoped>

* {
  background-color: white;
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

.form {
  width: 800px;
  position: relative;
  left: 37%;
  top: 30px;
}


.form tr {
  line-height: 60px;
}

.form th {
  font-weight: normal;
  padding-right: 10px;
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
  width: 280px;
  height: 33px;
  color: white;
  text-align: center;
  line-height: 33px;
  background-color: rgba(255, 181, 128,0.9);
  cursor: pointer;
  position: relative;
  left: 80px;
  top: 20px;
  font-size: 13px;
}

.register:hover {
  background-color: rgba(255, 181, 128,1);
}

.instructions {
  width: 250px;
  font-size: small;
  position: relative;
  top: 50px;
  left: 85px;
  line-height: 20px;
}
.instructions label {
  padding-left: 5px;
}
.instructions i {
  color: rgb(253, 96, 32);
}

</style>
