<template>
<div class="layout">
  <span :class="{'now':nowPage === 3}" @click="skip3">我的</span>
  <span :class="{'now':nowPage === 1}" @click="skip1">首页</span>
  <span :class="{'now':nowPage === 2}" @click="skip2">租房</span>
</div>
  <router-view v-on:skipRental="skipRental" v-on:skip2="skip2" v-on:skip3="skip3" v-on:skip1="skip1"  ></router-view>
</template>

<script>

export default {
  name: "MobileLayout",
  data() {
    return {
      nowPage: 1,
    }
  },
  methods: {
    skip1() {
      sessionStorage.setItem("page","1");

      this.nowPage = 1;
      this.$router.push('/index');
    },
    skip2() {
      sessionStorage.setItem("page","2");


      this.nowPage = 2;
      this.$router.push('/rentalService');
    },
    skip3() {
      sessionStorage.setItem("page","3");


      this.nowPage = 3;
      this.$router.push('/login');
    },
    skipRental(num) {
      sessionStorage.setItem("page","2");

      this.nowPage = 2;
      this.$router.push({path:"/mobile/rentalService",query: {num:num}});
    }

  },
  created() {
    if(sessionStorage.getItem("page") !== null) {
      this.nowPage = parseInt(sessionStorage.getItem("page"));
    }
  }
}
</script>

<style scoped>

.layout {
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 60px;
  background-color: rgba(255, 250, 250,1);
  z-index: 9999;
}
.layout span {
  display: block;
  float: left;
  width: 135px;
  text-align: center;
  line-height: 60px;
  color: black;
}

.now {
  color: rgb(232, 60, 60)!important;
}

</style>
