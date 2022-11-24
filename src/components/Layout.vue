<template>
  <nav>
    <div class="nav-bd">
      <ul class="left">
        <li><a href=""><span id="login" @click.prevent="goLogin">亲，请登录</span></a></li>
        <li><a href=""><span @click.prevent="goRegister">免费注册</span></a></li>
      </ul>
      <ul class="right">
        <li><a href=""><span @click.prevent="index">首页</span></a></li>
        <li><a href=""><span @click.prevent="goOrder">订单</span></a></li>
        <li><a href=""><span @click.prevent="skip">联系客服</span></a></li>
      </ul>
    </div>
  </nav>

  <body>
    <router-view></router-view>
  </body>
</template>

<script>
import Message from "@/components/tool/Message";

export default {
  name: "Layout",
  methods: {
    goOrder() {
      sessionStorage.setItem("active",2)
      this.$router.push('/historyOrders');
    },
    goLogin() {
      this.$router.push('/login');
    },
    goRegister() {
      this.$router.push("/register")
    },
    index() {
      this.$router.push("/index");
    },
    skip() {
      Message({text:"功能暂未开发",type:"warn"})
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: rgb(243, 243, 244);
}

ul{/*去掉ul的小圆点*/
  list-style: none;
}

a{/*改变a链接的默认格式，颜色和下划线*/
  color: #716f70;
  text-decoration: none;
}

nav {
  height: 35px;
  background: #f5f5f5;
  border: 1px solid rgba(0,0,0,0.1);
}

.nav-bd {
  margin: 0 50px;
}
.nav-bd li {
  line-height: 35px;
  font-size: 12px;
  padding: 0 10px;
  color: #6C6C6C;
}
nav .left li{
  float: left;
}
nav .right li{
  float: right;
}
#login {
  color: red;
}
</style>
