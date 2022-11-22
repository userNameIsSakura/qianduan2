<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted() {
    // 检测浏览器路由改变页面不刷新问题,hash模式的工作原理是 hashchange事件
    window.addEventListener('hashchange', () => {
      let currentPath = window.location.hash.slice(1)
      if (this.$route.path !== currentPath) {
        this.$router.push(currentPath)
      }
    }, false)
  }
}
</script>

<style>

 * {
   margin: 0;
   padding: 0;
 }

div {
  background-color: rgba(243, 243, 244,1);
}
</style>
