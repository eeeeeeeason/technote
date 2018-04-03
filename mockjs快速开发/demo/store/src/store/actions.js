import http from 'axios'
let host = 'http://localhost:3000'
export default {
    // 删除
  del ({commit}, id) {
    http.delete(host + '/carts/' + id)
      .then(res => {
        commit('DEL', id)
      })
  },
  // 更改购物车数据的num值
  changeCartNum ({commit}, obj) {
    http.patch(host + '/carts/' + obj.id, {
      num: obj.num
    })
      .then(res => {
        commit('CHANGE_CART_NUM', obj)
      })
  },
  getCarts ({commit}) {
    http.get(host + '/carts')
      .then(res => {
        commit('SET_CARTS', res.data)
      })
  },
  addCart (store, item) {
      //判断购物车是否存在数据
    let switchBol = true
    let carts = store.state.carts
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].productId === item.id) {
        // 已经存在
        switchBol = false
        let num = carts[i].num
        num++
        http.patch(host + '/carts/' + carts[i].id, {
          num: num
        })
          .then(res => {
            store.commit('ADD_CART_NUM', carts[i])
          })
        break
      }
    }
    if (switchBol) {
      // 不存在
      let cartObj = {
        name: item.name,
        productId: item.id,
        price: item.price,
        num: 1
      }
      http.post(host + '/carts', cartObj)
        .then(res => {
          // console.log(res.data)
          store.commit('ADD_CART', res.data)
        })
    }
  }
}