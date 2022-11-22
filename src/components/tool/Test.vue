<template>
  <!-- 显示时的动画，滑动 -->
  <transition name="down">
    <div class="my-message" :style="style[type]" v-show="isShow">
      <!-- 上面绑定的是样式 -->
      <!-- 不同提示图标会变 -->
      <!-- i标签就是消息提示内容前面的小图标 -->
      <el-icon><List /></el-icon>
      <el-icon>
        <component :is="icon" />
      </el-icon>
      {{style[type].icon}}
      <span class="text">{{ text }}</span>
    </div>
  </transition>
</template>
<script>
import { onMounted, ref } from 'vue'
export default {
  name: 'XtxMessage',
  data() {
    return {
      icon: "List"
    }
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      // warn 警告  error 错误  success 成功
      default: 'warn'
    }
  },
  setup() {
    // 定义一个对象，包含三种情况的样式，对象key就是类型字符串
    const style = {
      warn: {
        icon: '警告：',
        color: '#E6A23C',
        backgroundColor: 'rgb(253, 246, 236)',
        borderColor: 'rgb(250, 236, 216)'
      },
      error: {
        icon: '错误：',
        color: '#F56C6C',
        backgroundColor: 'rgb(254, 240, 240)',
        borderColor: 'rgb(253, 226, 226)'
      },
      success: {
        icon: '',
        color: '#67C23A',
        backgroundColor: 'rgb(240, 249, 235)',
        borderColor: 'rgb(225, 243, 216)'
      }
    }
    const isShow = ref(false)
    onMounted(() => {
      isShow.value = true
    })
    return { style, isShow }
  }
}
</script>
<style scoped lang="less">
svg {
  width: 20px;
}

.down {
  &-enter {
    &-from {
      transform: translate3d(0, -75px, 0);
      opacity: 0;
    }
    &-active {
      transition: all 0.5s;
    }
    &-to {
      transform: none;
      opacity: 1;
    }
  }
}
.my-message {
  height: 50px;
  position: fixed;
  z-index: 9999;
  left: 50%;
  margin-left: -150px;
  top: 25px;
  line-height: 50px;
  padding: 0 25px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
  i {
    margin-right: 4px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
}
</style>
