var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
    'categories|4': [
        {
            'id|+1': 1,
            'name': '@cword(3,4)'
        }
    ],
    'products|40-60':[
        {
            'id|+1': 1,
            'name': '@cword(3,5)',
            'categoryId|1-4': 1,
            'dec': '@csentence()',
            'price|1-999.2': 10 
        }
    ],
    'carts':[]
})
fs.writeFile('db.json', JSON.stringify(data,null,2), function () {
    console.log('你的数据写好在db.json,快去查看')
})