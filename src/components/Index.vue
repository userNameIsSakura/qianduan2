<template>
  <div class="body">

    <header>
      <img src="../../public/img/logo.png" alt="图片无法显示">
    </header>
    <div class="main radius">

      <div class="classification radius">
        <ul>
          <li class="li" @click.prevent="skip(1)"><a href="">单人间</a></li>
          <li class="li" @click.prevent="skip(2)"><a href="">标准间</a></li>
          <li class="li" @click.prevent="skip(3)"><a href="">商务间</a></li>
          <li class="li" @click.prevent="skip(4)"><a href="">豪华间</a></li>
          <li class="li" @click.prevent="skip(5)"><a href="">行政间</a></li>
          <li class="li" @click.prevent="skip(6)"><a href="">套间</a></li>
          <li class="li" @click.prevent="skip(7)"><a href="">双套间</a></li>
          <li class="li" @click.prevent="skip(8)"><a href="">组合套间</a></li>
        </ul>
      </div>
      <div class="previewBox" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <img class="preview radius" v-for="item in list"
             :key="item.id" :src="item.url" v-show="item.id === num" alt="无图片" />
        <span class="toLeft toNext" @click="leftClick">&lt;</span>
        <span class="toRight toNext" @click="rightClick">&gt;</span>
      </div>


      <div class="loginInformation">
        <div class="defaultAvatar"></div>
        <div class="greetings">Hi!你好!</div>
        <div class="accountOperation">
          <span class="radius" @click.prevent="login"><a href="">登录</a></span>
          <span class="radius" @click.prevent="goRegister"><a href="">注册</a></span>
        </div>
      </div>


    </div>

    <footer>
      <div class="footerContent">
        <ul>
          <li><a href="">加入我们</a></li>
          <li><a href="">帮助</a></li>
          <li><a href="">用户反馈</a></li>
        </ul>
      </div>
    </footer>
  </div>

</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      num: 1,
      max: 3,
      timer: null,
      list: [
        {
          id: 0,
          url: require("../../public/img/img_5.png"),
        },
        {
          id: 1,
          url: require("../../public/img/img_6.png"),
        },
        {
          id: 2,
          url: require("../../public/img/img_7.png"),
        },
        {
          id: 3,
          url: require("../../public/img/img_4.png"),
        }
      ],
    }
  },

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
    skip(num) {
      sessionStorage.setItem("active","1")
      this.$router.push({path:"/rentalService",query: {num:num}});
    },
    login() {
      this.$router.push("/login")
    },
    goRegister() {
      this.$router.push("/register")
    }
  },
  mounted() {
    this.startInterval();
  },
}



</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  font-family: Hiragino Sans GB,serif;
}

.body {
  background-color: rgba(53, 73, 94,1);
  /*background: image("") no-repeat;*/
  width: 100%;

}

ul{/*去掉ul的小圆点*/
  list-style: none;
}


a{/*改变a链接的默认格式，颜色和下划线*/
  color: rgb(108, 108, 108);
  text-decoration: none;
}


header {
  margin: 0 auto 20px;
  padding: 20px;
  height: 50px;
  width: 100%;

}
header img {
  margin-top: 5px;
  margin-left: 190px;
  height: 60px;

  border-radius: 10px;
  float: left;
}

header h2 {
  font-size: 18px;
  font-weight: 400;
  line-height: 50px;
  color: #3c3c3c;
  float: left;
  padding: 0 8px;
}



.main {
  background-color: rgb(245, 245, 245);
  margin: 0 auto 100px auto;
  width: 1100px;
  padding: 30px 20px;
  position: relative;
  height: 440px;

}

.radius {
  border-radius: 12px;
}


.classification {
  display: inline-block;
  width: 200px;
  margin: 0 0 0 20px;
  background-color: rgba(247, 249, 250,1);
  position: absolute;
  left: 10px;
}

.classification li {
  height: 50px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}

.li:hover {
  background-color: rgba(53, 73, 94,0.8);
  border-radius: 20px;
}

.li:hover a {
  color: white;
}

.preview {

  display: inline-block;
  position: absolute;
  left: 320px;
  top: 80px;

  width: 500px;
  height: 352px;
  cursor: default;
  user-select: none;
}

.preview span {
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #716f70;
  color: white;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  font-weight: bold;
  opacity: 0;
  cursor: pointer;
}

.preview:hover span {
  opacity: 0.8;
}

.preview span:hover {
  opacity: 1;
}

.previewBox:hover .toNext {
  display: block;
}

.toNext {
  position: absolute;
  font-size: 30px;
  width: 30px;
  top: 50%;
  color: white;
  background-color: rgba(0,0,0,0.3);
  text-align: center;
  user-select: none;
  display: none;
  cursor: pointer;
}
.toNext:hover {
  background-color: rgba(0,0,0,1);
}

.toLeft {
  right: 790px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.toRight {
  left: 790px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.loginInformation {
  display: inline-block;
  position: absolute;
  top: 160px;
  left: 930px;

}

.defaultAvatar {
  width: 70px;
  height: 70px;
  background: url("../../public/img/defaultAvatar.png") center no-repeat;
  background-size: cover;
}

.greetings {
  font-size: 18px;
  font-weight: 700;
  margin-top: 20px;

}

.accountOperation {
  margin-top: 20px;
  position: relative;
  right: 51px;


}

.accountOperation span{
  display: inline-block;
  width: 80px;
  height: 40px;
  background-color: orange;
  margin-right: 10px;
  opacity: 0.8;
}
.accountOperation span:hover{
  opacity: 1;
}

.accountOperation a {
  display: block;
  color: white;
  text-align: center;
  font-size: 14px;
  line-height: 40px;
}


footer {
  background: rgb(245, 245, 245);
  margin-top: 0px;
  height: 30px;
}

footer a {
  color: rgba(165, 165, 165,1);
}

.footerContent {
  margin: 0 auto;
  width: 1100px;
}

.footerContent li {
  width: 80px;
  float: right;
  font-size: 10px;
  line-height: 30px;
  text-align: center;
}

.footerContent a:hover {
  color: black;
}

.preview ul {
  position: absolute;
  bottom: 0;
  width: 300px;
}

.preview li {
  float: left;
  display: block;
  width: 15px;
  height: 15px;
  background-color: whitesmoke;
}
</style>
