<template>
  <header @click="login">
    &lt;
  </header>

  <div class="main">
    <h3>输入手机号码</h3>
    <input type="number">
    <p>
      <input type="radio">
      已阅读并同意<i @click="wrong">服务协议</i>和<i @click="wrong">隐私保护政策</i>
    </p>
    <span @click="wrong">下一步</span>
  </div>
</template>

<script>
import Message from "@/components/tool/Message";

export default {
  name: "MobileRegister",
  methods: {
    wrong() {
      Message({text:'功能未开发',type:'warn'})
    },
    login() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
header {
  width: 30px;
  padding: 10px;
  font-size: 30px;
  font-weight: 300;
  color: rgb(101, 101, 101);
}

.main {
  width: 370px;
  height: 400px;
  margin: 10px auto;
}

h3 {
  margin-top: 40px;
  margin-left: 10px;
  font-size: 30px;
  font-weight: 400;
}

input[type=number] {
  display: block;
  width: 300px;
  margin: 0 auto;
  margin-top: 50px;
  border: none;
  outline: none;
  border-bottom: 1px solid rgb(241, 241, 241);
}

p {
  margin-top: 30px;
  margin-left: 20px;
  color: rgb(198, 198, 198);
}

i {
  font-style: normal;
  color: rgb(255, 165, 0);
}

span {
  display: block;
  width: 320px;
  height: 50px;
  background-color: rgba(255, 165, 0,0.9);
  text-align: center;
  line-height: 50px;
  margin: 60px auto;
  border-radius: 10px;
  color: white;
}

span:active  {
  background-color: rgba(255, 165, 0,1);

}

</style>
