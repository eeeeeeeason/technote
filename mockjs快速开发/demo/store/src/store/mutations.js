export default {
    SET_CARTS (state, data) {
      state.carts = data
    },
    ADD_CART (state, data) {
      state.carts.push(data)
    },
    ADD_CART_NUM (state, data) {
      let index = state.carts.indexOf(data)
      state.carts[index].num++
    },
    CHANGE_CART_NUM (state, obj) {
      for (let i = 0; i < state.carts.length; i++) {
        if (state.carts[i].id === obj.id) {
          state.carts[i].num = obj.num
          break
        }
      }
    },
    DEL (state, id) {
      for (let i = 0; i < state.carts.length; i++) {
        if (state.carts[i].id === id) {
          state.carts.splice(i, 1)
          break
        }
     }
   }
}
  