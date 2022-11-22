<template>
  <div class="aside">
    <span class="index"><img @click="index" src="../../public/img/logo.png" alt="无法显示"> </span>
    <span :class="active !== '1'?'page':'nowPage' " @click="skip">
      <el-icon><User /></el-icon>
      租房预约
    </span>
    <span :class="active !== '2'?'page':'nowPage'" @click="historyOrder">
      <el-icon><List /></el-icon>
      历史订单
    </span>
  </div>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      active: "1",
      list: [
        {
          name: "租房预约"
        },
        {
          name: "历史订单"
        }
      ]
    }
  },
  methods: {
    skip() {
      this.active = "1";
      this.$router.push("/rentalService");
    },
    index() {
      this.$router.push("/");
    },
    historyOrder() {
      this.active = "2";
      this.$router.push("/historyOrders");
    }
  },
  created() {
    this.active = sessionStorage.getItem("active");
  }


}
</script>

<style scoped>

svg {
  width: 20px;
}


.aside {
  display: inline-block;
  width: 200px;
  height: 724px;
  background-color: rgba(53, 73, 94,1);
  padding-right: 30px;

}

span {
  display: inline-block;
  width: 200px;
  height: 70px;
  color: rgba(167, 177, 194,1);
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  padding-right: 30px;

}

.nowPage {
  background-color: rgb(53, 63, 78);
  color: white;

}

.page,
img {
  cursor: pointer;

}

.page:hover {
  background-color: rgb(53, 63, 78);
  color: white;

}

.index {
  height: 100px;
  line-height: 100px;
  padding-top: 20px;
}

.index img {
  width: 150px;
}

.main {
  display: inline-block;
  background-color: rgb(243, 243, 244);
}
</style>
