export default {
    //总数
    count (state) {
        let  carts = state.carts
        let result = 0
        for (let i = 0; i < carts.length; i++){
            result += carts[i].num
        }
        return result
    },
    //总价
    total (state) {
        let  carts = state.carts
        let result = 0
        for (let i = 0; i < carts.length; i++){
            result += carts[i].num * carts[i].price
        }
        return result
    }
}