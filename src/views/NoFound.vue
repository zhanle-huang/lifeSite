<template>
  <div class="no-found">
    <div class="title">很遗憾页面丢失!</div>
    <div class="logo">404</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    mounted() {
    }
  }
</script>

<style scoped lang="less">

  .aa {
    color: yellow;
  }

  .no-found {
    padding-top: 60px;
    color: #000;
  }

  .no-found .title {
    font-size: 200px;
    text-align: center;
  }

  .no-found .logo {
    font-size: 100px;
    text-align: center;
    font-weight: bold;
  }
  a {
      font-size: 12px;
  }
  .dd:hover {
      color: red;
  }
  table {
      font-size: 12px;
  }
  tr:hover {
      background: #00ffff;
      color: #000;
  }
</style>
