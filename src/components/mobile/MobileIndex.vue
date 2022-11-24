<template>
  <div class="box">
    <header>
    <span class="location" @click="wrong">
      {{location}}
      <span class="triangle"></span>
    </span>
      <div class="svg" @click="wrong">
        <i class="icon-kefu"></i>
        <i class="icon-saoyisao"></i>
      </div>


      <input class="toFind" type="text" placeholder="搜索附近房源">
      <i class="findText" @click="wrong">搜索</i>

      <span class="service" @click="skipService">租房</span>
      <span class="service" @click="wrong">出租</span>
      <span class="service" @click="wrong">充值</span>
      <span class="service" @click="wrong">业务</span>
    </header>
    <!--
    租房 出租 充值 业务
    -->

    <div class="tip">
      <p>亲爱的游客，登录后更精彩</p>
      <span @click="login">登录</span>
    </div>
  <div class="choose">
    <ul>
      <li @click.prevent="skipRental(1)">
        <i class="icon-kefang"></i>
        <span>单人间</span></li>
      <li @click.prevent="skipRental(2)">
        <i class="icon-zufang"></i>
        <span>标准间</span></li>
      <li @click.prevent="skipRental(3)">
        <i class="icon-zufang1"></i>
        <span>商务间</span></li>
      <li @click.prevent="skipRental(4)">
        <i class="icon-zufangfenqi"></i>
        <span>豪华间</span></li>
      <li @click.prevent="skipRental(5)">
        <i class="icon-chuzuwu"></i>
        <span>行政间</span></li>
      <li @click.prevent="skipRental(6)">
        <i class="icon-tubiao_fabuzufang"></i>
        <span>套间</span></li>
      <li @click.prevent="skipRental(7)">
        <i class="icon-kefangshengji"></i>
        <span>双套间</span></li>
      <li @click.prevent="skipRental(8)">
        <i class="icon-kefang1"></i>
        <span>组合套间</span></li>
    </ul>
  </div>


  <div class="previewBox" @mouseover="mouseOver" @mouseleave="mouseLeave">
    <img class="preview radius" v-for="item in list"
         :key="item.id" :src="item.url" v-show="item.id === num" alt="无图片" />
    <span class="toLeft toNext" @click="leftClick">&lt;</span>
    <span class="toRight toNext" @click="rightClick">&gt;</span>
  </div>



</div>
</template>

<script>
import Message from "@/components/tool/Message";

export default {
  name: "MobileIndex",
  data() {
    return {
      num: 1,
      max: 3,
      timer: null,
      list: [
        {
          id: 0,
          url: require("../../../public/img/img_5.png"),
        },
        {
          id: 1,
          url: require("../../../public/img/img_6.png"),
        },
        {
          id: 2,
          url: require("../../../public/img/img_7.png"),
        },
        {
          id: 3,
          url: require("../../../public/img/img_4.png"),
        }
      ],
      location: '烟台',
    }
  },
  props: ['nowPage'],
  inject: ['skipRental','skip2','skip3'],
  methods: {
    startInterval() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if(this.num !== 3)
          this.num++;
        else
        {
          this.num = 0;
        }
      },3000);
    },
    mouseLeave() {
      this.startInterval();
    },
    mouseOver() {
      clearInterval(this.timer);
    },
    leftClick() {
      if(this.num !== 0)
        this.num--;
      else
        this.num = this.max;
    },
    rightClick() {
      if(this.num !== this.max)
        this.num++;
      else
        this.num = 0;
    },
    skipRental(num) {
      this.$emit('skipRental',num)
    },
    skipService() {
      this.$emit('skip2')
    },
    login() {
      this.$emit('skip3')
    },
    goRegister() {
      this.$router.push("/register")
    },
    wrong() {
      Message({text:'功能未开发',type:'warn'})
    },
  },
  mounted() {
    this.startInterval();
  },
}



</script>

<style scoped>

.box {
  background-color: rgb(245, 245, 245);
  height: 800px;
  width: 100%;
}

header {
  height: 150px;
  background-color: rgb(232, 60, 60);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  position: relative;
}

header .svg {
  position: absolute;
  right: 0;
  top: 0;
  color: white;
  margin-top: 5px;
  margin-right: 10px;
}

.svg i {
  padding: 5px;
}

header .findText {
  font-style: normal;
  color: rgb(244, 127, 146);
  position: absolute;
  right: 32px;
  top: 48px;
  font-size: 15px;
}

header .triangle {
  display: block;
  position: absolute;
  right: 5px;
  bottom: 5px;

  width: 0;
  height: 0;
  border: 2px solid;
  border-color: transparent white white transparent;
}

.toFind {
  display: block;
  width: 85%;
  height: 30px;
  border-radius: 20px;
  border: none;
  padding-left: 30px;
  margin: 10px auto;
}

header .service {
  display: block;
  float: left;
  color: white;
  width: 100px;
  height: 70px;
  line-height: 60px;
  font-size: 20px;
  /*background-color: wheat;*/
  text-align: center;
}


header .location {
  display: block;
  width: 60px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: white;
  position: relative;
}

.previewBox {
  text-align: center;
  position: relative;
  top: 20px;
}

.previewBox img {
  width: 350px;
  border-radius: 20px;
}

.tip {
  width: 310px;
  height: 10px;
  background-color: white;
  margin: 20px auto;
  padding: 20px;
  border-radius: 20px;
  line-height: 10px;

  position: relative;
}

.tip span {
  display: block;
  position: absolute;
  right: 20px;
  bottom: 12px;
  width: 60px;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  background-color: rgb(230, 42, 41);
  border-radius: 20px;
  text-align: center;
  color: white;
}

.toNext {
  position: absolute;
  bottom: 120px;

  font-size: 30px;
  color: white;
  display: none;
}

.previewBox:hover .toNext {
  display: inline-block;
}
.toLeft {
  left: 35px;
}

.toRight {
  right: 35px;
}

.choose {
  margin: 10px auto;
  display: block;
  width: 310px;
  height: 130px;
  border-radius: 20px;
  padding: 20px;
  background-color: rgb(255, 255, 255);
}

.choose li {
  display: block;
  float: left;
  width: 69px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 10px;
  margin-right: 8px;
  margin-bottom: 10px;
  color: black;
  position: relative;
}

.choose i {
  display: block;
}

.choose span {
  display: block;
  width: 70px;
  position: absolute;
  top: 25px;
}
</style>
