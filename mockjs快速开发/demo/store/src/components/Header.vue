<template>
  <div class="container-fluid">
		<nav class="navbar navbar-inverse">
      <router-link class="navbar-brand" to="/">商店</router-link>
			<div class="navbar-right">
				<div class="navbar-text">
					<b>你的购物车</b>
					{{count}} 件,￥{{total.toFixed(2)}}
				</div>
        <router-link to="/checkout" class="btn btn-default navbar-btn">checkout</router-link>
			</div>
		</nav>
	</div>
</template>
<script>
export default {
  computed: {
      count () {
          return this.$store.getters.count
      },
      total () {
          return this.$store.getters.total
      }
  }
}
</script>

<style>
.navbar-right{
    float: right !important;
    margin-right: 5px;
}
.navbar-text{
    margin-right: 10px;
}    
</style>