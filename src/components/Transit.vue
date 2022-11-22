<template>
<div></div>
</template>

<script>
export default {
  name: "Transit",
  mounted() {
    var a = this.$route.query.next;
    if(!(a === undefined))
    {
      this.$router.push(a);

    }
  }
}
</script>

<style scoped>

</style>
