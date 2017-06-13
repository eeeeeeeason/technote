# RequireJS
## 模块化
### 模块化是什么？
### 为什么要使用模块化?
+ 为了更好地复用
+ 减少全局变量污染
+ 解决功能之间的依赖关系

### 模块化的实现方式
#### 使用闭包来实现

+ 闭包实现存在的缺点
    - 随着功能的增加，暴露的全局变量也会越来越多
    - 不能很好的解决模块依赖的问题


#### 使用主流的一些实现模块化的库来实现
+ requireJS(主讲)
+ seaJS
+ browserify
+ webpack(后面的课程)

## requireJS
### 官方网站：
英文版：http://requirejs.org/
中文版：http://www.requirejs.cn/

### 入门
1. 下载requirejs文件
2. 引入requirejs文件
3. 编写js代码
    + 在a.js文件中通过来定义一个模块(tip:约定一个js文件就是一个模块)
    ```js
    define(function(){
      //模块内部的代码
    })
    ```
    + 在b.js文件中从而获取a.js中的代码，这样的话就可以保证在执行b.js中的代码之前先执行了a.js中的代码
    ```js
    require(["./a.js"])
    ```

### 依赖注入：模块具有返回值：
1. 给定义模块的回调函数添加return语句
```js
//a.js文件中
define(function(){
    return 10;
})
//b.js文件中
define(function(){
    return {name:"张三"};
})
```
2. 在获取模块的时候，通过require()的第二个参数来依次获取各个模块的返回值
```js
require(["./a.js","./b.js"],function(a,b){
    console.log(a);//10
    console.log(b.name);//"张三"
})
```

### 入口文件
通过给引入requirejs时的script标签添加data-main属性值，那么requirejs就会自动加载该文件(模块)，可以通过该文件来进行访问其他的模块
```html
<script src="require.js" data-main="./main"></script>
```

### 路径(加载模块时遵循的规则)
+ 如果没有入口文件，加载模块时的路径以引入requirejs时的路径为准(优先级最低)
+ 如果有入口文件，加载模块的路径以入口文件为准(优先级次高)
+ 通过配置来自定义路径(优先级最高)
```js
require.config({
    baseUrl:""
})
```

### 配置常用的模块路径(比如：jquery/arttemplate)
```js
require.config({
    baseUrl:"./lib",
    paths:{
        //路径不需要.js后缀，最终该文件的路径将会和baseUrl拼接，也就是："./lib/js/jquery-2.1.4"
        jquery:"js/jquery-2.1.4"
    }
})
//a.js文件中
define(["jquery"],function($){
    //这里请求的jquery也就是去上面paths中设置的jquery进行查找,也就是："./lib/js/jquery-2.1.4"

})

```


### 如果一个js文件不支持AMD这种模块定义规范(比如bootstrap.js)，但是它又依赖于我们定义的模块(jquery)，通过以下方式来解决
```js
require.config({
    baseUrl:"./lib",
    paths:{
        //路径不需要.js后缀，最终该文件的路径将会和baseUrl拼接，也就是："./lib/js/jquery-2.1.4"
        jquery:"js/jquery-2.1.4",
        bootstrap:"assets/bootstrap/bootstrap"
    },
    shim:{
        bootstrap:{
            //这样在请求bootstrap的时候会自动去请求jquery模块
            deps:["jquery"]
        }
    }
})
```

### requireJS先加载了一个支持AMD规范的A模块(jquery.js)
然后加载了一个不支持AMD规范的B模块(bootstrap.js)，如果B模块又依赖于A模块，那么可能发生错误
-->解决方案：shim
```js
    require.config({
        baseUrl:"./lib",
        paths:{
            //路径不需要.js后缀，最终该文件的路径将会和baseUrl拼接，也就是："./lib/js/jquery-2.1.4"
            jquery:"js/jquery-2.1.4",
            bootstrap:"assets/bootstrap/bootstrap"
        },
        shim:{
            bootstrap:{
                //这样在请求bootstrap的时候会自动去请求jquery模块
                deps:["jquery"]   //这里的"jquery"指的就是paths中配置的jquery模块路径
            }
        }
    })
```


### requireJS加载一个不支持AMD规范的，本身不依赖于其他模块的js文件，通过以下方式改造该文件：
```js
if(typeof define ==="function" && define.amd){
  define([],function(){
    return Zepto;   //模块的返回值
  })
}
```

### require加载文件顺序
+ 加载引入了requirejs的html文件
+ 加载requirejs源文件
+ 如果有main文件，再加载main文件
+ 去加载其他模块
```js
    - require(["zepto"])    //在加载zepto.js之前已经产生了2个全局变量(require函数、define函数-->具有amd属性)
```

### requireJS应用场景
+   如果只是使用zepto，2种方式
    - 1、不修改源码，可能会造成$冲突，建议使用Zepto全名称操作

    - 2、修改源码，
        if(typeof define ==="function" && define.amd){
          define([],function(){
            return Zepto;   //模块的返回值
          })
        }

+   对于要加载某个模块，模块本身不支持AMD规范(bootstrap)，但是依赖于另一个AMD规范(jquery)
    - 1、shim
    - 2、把它改造成支持AMD规范的

