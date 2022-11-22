<template>

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
        <option id="1">单人间</option>
        <option id="2">标准间</option>
        <option id="3">商务间</option>
        <option id="4">豪华间</option>
        <option id="5">行政间</option>
        <option id="6">套间</option>
        <option id="7">双套间</option>
        <option id="8">组合套件</option>
      </select></td>
    </tr>
    <tr>
      <th><label for="days">租房天数</label></th>
      <td><input id="days" type="text"></td>
    </tr>
    <tr>
      <span class="radius" @click="confirm">预约</span>
    </tr>

  </table>

</template>

<script>
import MyMessage from "@/components/tool/Message";

export default {
  name: "RentalService",
  mounted() {

    var num = this.$route.query.num;
    if(num !==  undefined) {
      var elementById = document.getElementById(num);
      elementById.setAttribute("selected","selected");
    }

  },
  methods: {
    confirm() {
      MyMessage({text:"后端接口未连接",type:"error"})
    }
  }
}
</script>

<style scoped>

.radius {
  border-radius: 20px;
}

input[type=text],
input[type=date],
select {
  width: 300px;
  padding-left: 5px;
  line-height: 25px;
  height: 25px;
  border-radius: 5px;
  border-color: rgba(0,0,0,0.3);
  outline-color: rgba(135, 206, 250,0.6);
}

input[type=text]:focus,
input[type=date]:focus,
select:focus{
  box-shadow: 0px 0px 2px 4px rgba(135, 206, 250,0.2);
}

th {
  padding-right: 40px;
  font-weight: 400;
}

.rent {
  position: absolute;
  padding: 20px;
  left: 40%;
  top: 15%;
  width: 500px;
  background-color: white;
}

tr {
  line-height: 50px;
}

.gender input {
  margin-right: 10px;
}

.gender label {
  margin-right: 20px;
}

span {
  display: block;
  background-color: rgba(53, 73, 94,0.8);
  color: white;
  text-align: center;
  position: relative;
  width: 100px;
  left: 300px;
  margin-top: 20px;
  cursor: pointer;
}

span:hover {
  background-color: rgba(53, 73, 94,1);

}
</style>
