<template>
<table>
  <tr class="header">
    <td>订单号</td>
    <td>客户名称</td>
    <td>入住时间</td>
    <td>退房时间</td>
    <td>房间类型</td>
    <td>房间号</td>
  </tr>

  <tr  v-for="order in nowList" :key="order.id">
    <td v-text="order.id"> </td>
    <td v-text="order.name"></td>
    <td v-text="order.start"></td>
    <td v-text="order.end"></td>
    <td v-text="order.type"></td>
    <td v-text="order.roomId"></td>
  </tr>

  <div class="pageHelper">
    当前页数：{{page}}/{{sum}}
    <span @click="previous" :class="page !== 1 ? 'button' : 'disabled'">上一页</span>
    <span @click="next" :class="page !== sum ? 'button' : 'disabled'">下一页</span>
    跳转到：
    <input type="text" v-model="skipPage" @keydown.enter="skip">
    <span class="button" @click="skip">跳转</span>
  </div>


</table>


</template>

<script>
import {isNumber} from "@/api/tool/MathTool";
import MyMessage from "@/components/tool/Message"

export default {
  name: "HistoryOrders",
  data() {
    return {
      a:"order in orderList.slice(0,10)",
      page: 1,
      sum: "",
      skipPage: "",
      capacity: 10,
      nowList: [],
      orderList: [
        {
          id:"10001",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10002",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10003",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10004",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10005",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10006",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10007",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10008",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10009",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10010",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10011",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10012",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10013",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10014",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10015",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10016",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10017",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10018",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10019",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10020",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10021",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10022",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10023",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },
        {
          id:"10024",
          name:"张三",
          start:"2022.1.1",
          end:"2022.1.6",
          type:"单人间",
          roomId:"1001"
        },

      ]
    }
  },
  mounted() {
    var num = this.orderList.length;
    this.sum = (num % 10 === 0) ? (num / 10) : (Math.floor(num / 10) + 1);
    this.nowList = this.orderList.slice(0,this.capacity);

  },
  methods: {
    next() {
      var newPage =this.page + 1;
      if(newPage > this.sum)
      {
        MyMessage({text:"当前是最后一页",type:"warn"})
        return;
      }
      this.nowList = this.orderList.slice(parseInt((newPage - 1)*10),10+parseInt((newPage - 1)*10));
      this.page++;
    },
    previous() {
      var newPage =this.page - 1;
      if(newPage === 0)
      {
        MyMessage({text:"当前是第一页",type:"warn"})
        return;
      }
      this.nowList = this.orderList.slice(parseInt((newPage - 1)*10),10+parseInt((newPage - 1)*10));
      this.page--;
    },
    skip() {

      var page = this.skipPage;

      if(!isNumber(page) || page === "0")
      {
        MyMessage({text:"请输入正确页码",type:"error"})
        this.skipPage = "";
        return;
      }
      if(page > parseInt(this.sum))
      {
        page = parseInt(this.sum);
        MyMessage({text:"已跳至最后一页",type:"success"})
      }
      this.nowList = this.orderList.slice(parseInt((page - 1)*10),10+parseInt((page - 1)*10));
      this.page = page;
      this.skipPage = "";
    }
  }
}
</script>

<style scoped>

svg {
  width: 20px;
}

table {
  display: block;
  position: absolute;
  top: 15%;
  left: 23%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 10px;
}

tr {
  line-height: 45px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

td {
  padding: 0 50px;
}

.header {
  background-color: rgba(53, 73, 94,1);
  color: white;
}

span {
  margin: 0 10px;
}

.disabled {
  display: inline-block;
  background-color: rgba(60, 60, 60,0.4);
  color: rgba(0,0,0,0.3);
  width: 70px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 5px;
  cursor: inherit;

}


.button {
  display: inline-block;
  background-color: #3c3c3c;
  color: white;
  width: 70px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}

.pageHelper {
  position: absolute;
  bottom: -40px;
  right: 0px;
  user-select: none;
}

.pageHelper input {
  height: 25px;
  width: 50px;
  margin-left: -12px;
}

</style>

