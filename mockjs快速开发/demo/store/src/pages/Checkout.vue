<template>
  <div class="container-fluid">
	<h2>你的购物车</h2>
	<div class="alert alert-warning" v-if="!(count > 0)">
		这个购物车中没有任何商品
    <router-link to="/" class="alert-link">点击这里返回购物</router-link>
	</div>
	<div v-if="count > 0">
		<table class="table">
			<thead>
				<tr>
					<th>数量</th>
					<th>商品名称</th>
					<th class="text-right">单价</th>
					<th>小计</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in carts" :key="item.id">
					<td class="text-center store-number">
						<div class="input-group">
						  <div class="input-group-btn">
						    <button type="button" class="btn btn-default" @click="sub(item)">-</button>
						  </div>
						  <input type="text" class="form-control" :value="item.num" @input="changeNum(item)">
						  <div class="input-group-btn">
						    <button type="button" class="btn btn-default" @click="add(item)">+</button>
						  </div>
						</div>
					</td>
					<td class="text-left">{{item.name}}</td>
					<td class="text-right">￥{{item.price}}</td>
					<td class="text-right">{{(item.price * item.num).toFixed(2)}}</td>
					<td>
						<button class="btn btn-sm btn-warning" @click="del(item.id)">删除</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
</template>
<script>
export default {
  methods: {
    del (id) {
      this.$store.dispatch('del', id)
    },
    // 添加
    add (item) {
      let num = item.num
      num++
      let changeObj = {
        id: item.id,
        num: num
      }
      this.$store.dispatch('changeCartNum', changeObj)
    },
    // 减少
    sub (item) {
      let num = item.num
      if (num > 1) {
        num--
        let changeObj = {
          id: item.id,
          num: num
        }
        this.$store.dispatch('changeCartNum', changeObj)
      }
    },
    changeNum (item) {
      let val = Number(event.target.value)
      if (val > 0) {
        let changeObj = {
          id: item.id,
          num: val
        }
        this.$store.dispatch('changeCartNum', changeObj)
      }
    }
  },
  computed: {
    count () {
      return this.$store.getters.count
    },
    carts () {
      return this.$store.state.carts
    }
  }
}
</script>
<style type="text/css">
.store-number{
    width: 20%;
}    
</style>