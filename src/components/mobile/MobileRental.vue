<template>
  <div class="box">
    <header @click="index">
      <img src="../../../public/img/logo3.png" alt="图片显示错误">
    </header>

    <div class="time" @click="login">
      您还未登录，请先登录
      <i>></i>
    </div>

    <div class="form">
      <table class="rent radius">
        <tr>
          <th><label for="name">姓名</label></th>
          <td><input id="name" type="text"></td>
        </tr>
        <tr class="gender">
          <th>性别</th>
          <td>
            <input id="man" type="radio" name="gender"><label for="man">男</label>
            <input id="woman" type="radio" name="gender"><label for="woman">女</label>
          </td>
        </tr>
        <tr>
          <th><label for="type">证件类型</label></th>
          <td>
            <select name="type" id="type">
              <option>中国大陆居民身份证</option>
              <option>香港身份证</option>
              <option>澳门身份证</option>
            </select>
          </td>
        </tr>
        <tr>
          <th><label for="id">证件号码</label></th>
          <td><input id="id" type="text"></td>
        </tr>
        <tr>
          <th><label for="phone">联系方式</label></th>
          <td><input id="phone" type="text"></td>
        </tr>
        <tr>
          <th><label for="date">入住日期</label></th>
          <td><input id="date" type="date"></td>
        </tr>
        <tr>
          <th><label for="room">客房类型</label></th>
          <td><select id="room">
            <option id="1" :selected="type === '1'">单人间</option>
            <option id="2" :selected="type === '2'">标准间</option>
            <option id="3" :selected="type === '3'">商务间</option>
            <option id="4" :selected="type === '4'">豪华间</option>
            <option id="5" :selected="type === '5'">行政间</option>
            <option id="6" :selected="type === '6'">套间</option>
            <option id="7" :selected="type === '7'">双套间</option>
            <option id="8" :selected="type === '8'">组合套件</option>
          </select></td>
        </tr>
        <tr>
          <th><label for="days">租房天数</label></th>
          <td><input id="days" type="text"></td>
        </tr>
        <tr>
          <span class="radius" @click="wrong">预约</span>
        </tr>

      </table>
    </div>

  </div>




</template>

<script>
import Message from "@/components/tool/Message";

export default {
  name: "MobileRental",
  inject: ['skipRental','skip2','skip3','skip1'],
  data() {
    return {
      type: '1',
    }
  },
  methods: {
    login() {
      this.$emit('skip3')
    },
    wrong() {
      Message({text:'功能未开发',type:'warn'})
    },
    index() {
      this.$emit('skip1');
    }
  },
  created() {
    if(this.$route.query.num !== null) {
      this.type = this.$route.query.num;
    }

  }
}
</script>

<style scoped>
.box {
  background-color: rgb(234, 232, 235);
  height: 680px;
  padding-top: 20px;
}
table {
  margin: 0 auto;
  padding-top: 30px;
}

.radius {
  border-radius: 20px;
}
input[type=text],
input[type=date],
select {
  width: 200px;
  padding-left: 5px;
  line-height: 25px;
  height: 25px;
  border-radius: 5px;
  border: none;
  border-bottom: 1px solid rgb(236, 237, 241);
  outline-color: rgba(135, 206, 250,0.6);
}



th {
  font-weight: 400;
  text-align: left;
  position: relative;
  right: 10px;
  line-height: 50px;
}



header img {
  width: 200px;
  display: block;
  margin: 0 auto;
}

.time {
  width: 370px;
  height: 60px;
  margin: 0 auto;
  position: relative;
  top: 10px;
  border-radius: 20px;
  background-color: white;
  padding-left: 20px;
  line-height: 60px;
  font-size: 13px;
}

.time i {
  font-style: normal;
  color: #6C6C6C;
  float: right;
  margin-right: 20px;
  font-size: 20px;
}

.form {
  width: 380px;
  height: 600px;
  position: relative;
  top: 30px;
  border-radius: 20px;
  background-color: white;
  margin: 0 auto;
}

table span {
  display: inline-block;
  background-color: rgb(254, 97, 96);
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: white;
  font-size: 18px;
  position: absolute;
  right: 30px;
  bottom: 90px;
}

.gender input {
  margin-right: 10px;
}

.gender label {
  margin-right: 20px;
}
</style>
