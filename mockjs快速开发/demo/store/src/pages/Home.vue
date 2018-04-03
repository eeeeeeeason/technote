<template>
  <div class="container-fluid">
		<div class="panel panel-default row">
			<div class="col-xs-3">
				<a class="btn btn-block btn-default btn-lg" href="###" :class="{'btn-primary': activeCategoriesId===0}" @click="changeActiveCategoriesId(0)">所有商品</a>
				<a class="btn btn-block btn-default btn-lg" href="###" v-for="item in categories" :key="item.id" :class="{'btn-primary': activeCategoriesId===item.id}" @click="changeActiveCategoriesId(item.id)">{{item.name}}</a>
			</div>
			<div class="col-xs-8">
				<div class="well" v-for="item in showProducts" :key="item.id">
					<h3>
						<strong>{{item.name}}</strong>
						<span class="pull-right label label-primary">￥{{item.price}}</span>
					</h3>
					<div class="description">
						<span class="lead">{{item.dec}}</span>
						<button class="btn btn-success pull-right" @click="addCart(item)">添加到购物车</button>
					</div>
				</div>
				<div class="pull-right btn-group">
					<a class="btn btn-default" v-for="(item, index) in pageCount" :key="index" :class="{'btn-primary': activePage===index}" @click="changeActivePage(index)">
						{{item}}
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
//每页的商品数量
const pageSize = 4
export default {
    created () {
        //获取分类数据
        this.$http.get('http://localhost:3000/categories')
        .then(res=>{
            this.categories = res.data
        })
        //获取商品数据
        this.$http.get('http://localhost:3000/products')
        .then(res=>{
            this.products = res.data
        })
    },
    data () { 
      return {
          categories: [],   
          products: [],
          //激活的页面数
          activePage: 0,
          //激活的分类项
          activeCategoriesId: 0
      }
    },
    methods: {
        // 添加到购物车
        addCart (item) {
            // 调用actions中的addCart
             this.$store.dispatch('addCart', item)
        },
        // 切换激活的分类id
        changeActiveCategoriesId (id) {
            this.activeCategoriesId = id
            // 将激活的页面下标重置为0
            this.activePage = 0
        },
        // 切换激活的页面下标
        changeActivePage (index) {
            this.activePage = index
        }
    },
    computed: {
        //激活分类所对应的商品数量
        activeProducts () {
            //为0 返回所有商品
            if(this.activeCategoriesId === 0){
                return this.products
            }else{
                return this.products.filter(item => item.categoryId === this.activeCategoriesId)
            }
        },
        //返回需要渲染的商品数量
        //排序分割每页数量slice(star,end)
        showProducts () {
            let start = this.activePage * pageSize
            return this.activeProducts.slice(start,start + pageSize)
        },
        //返回页面的数量
        pageCount () {
            return Math.ceil(this.activeProducts.length / pageSize)
        }
    }
}
</script>
