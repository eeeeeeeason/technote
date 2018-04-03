<template>
  <div id="app">
    <page-header/>
     <router-view/>
  </div>
</template>

<script>
import pageHeader from './components/Header'

export default {
  created () {
    //获取购物车数据
    this.$store.dispatch('getCarts')
  },
  components: {
    pageHeader
  }
}
</script>
