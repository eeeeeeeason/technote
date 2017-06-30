# NodeJS的基本概念


## NodeJS是什么？
	官网:
		https://nodejs.org/en/
		
	Node.js® is a JavaScript runtime built on 
	Chrome's V8 JavaScript engine. Node.js uses
	an event-driven, non-blocking I/O model that
	makes it lightweight and efficient. Node.js' 
	package ecosystem, npm, is the largest 
	ecosystem of open source libraries in the 
	world.
	
	js能做什么事?
		js ---> 浏览器中运行(面向过程--->面向对象)
		
		js ---> 后台开发
		
	NodeJS就是使用js代码，来做后台开发
	
	使用NodeJS可以开启一个Web服务，给浏览器提供数据去
	展示，并且接收浏览器提交过来的用户产生的数据，存储
	到数据库中，方便后面使用(注册)

## NodeJS能做什么？
	1、提供数据给浏览器展示
	2、保存用户提交过来的数据
	3、数据统计与分析
	
## 为什么要学习
	1、要和后台打交道，明白后台提供给我们的数据是经过哪几步
	
	2、以后在开发过程中方便调试
	
	3、迈向全栈工程师的开始
	
	4、面试也能加分
	
## 哪些公司在使用NodeJS
	淘宝
	小公司，替补

## 我们怎么学
	
	1、看官方文档:
		API怎么用，缺点，都是一些零散的API，没有一个完整的Demo
		
	2、百度
		node快速入门 node使用
		
	3、专业Node的论坛【深入学习】
		http://cnodejs.org/
	
	4、出错之后的网站:
		www.baidu.com
		www.stackoverflow.com
			使用的时候，搜索英文关键字
	
-------------------------------

# Node服务器软件的安装与配置

## 为什要安装我们的Node服务器
	
	js如果要想运行起来?
	
	浏览器端: js的解析引擎(v8)
	
	服务器端: 安装一个node.exe的文件(相当于安装Apache)

## Node.exe的安装
	下一步下一步
		
	检测是否安装成功 node -v
	
	另外一种安装我们node的方式【了解】
		nvm这个软件来安装
		node version manger,如果你想同时安装多个node版本
		
		教程:http://www.jianshu.com/p/07c3456e875a
		
	前提:
		如果使用我们的nvm安装node，那原先的node得干掉
		
	步骤:
		1、安装nvm这个软件:
			https://github.com/coreybutler/nvm-windows/releases
			
		2、使用上面装好的nvm软件，安装我们需要的node版本了
			指令:
			nvm install 具体的版本号就行了(https://nodejs.org/en/download/releases/)
			
			nvm uninstall 具体的版本号
			
			nvm list 查看当前安装了哪些版本
			
			nvm use 具体版本号，切换到某个版本
				
				
	建议:
		你安装一个高一点的稳定的版本即可，因为我们的软件都是向下兼容

-------------------------------

# 系统环境变量及其作用

## 系统环境变量
	每个系统都会提供一种叫做环境变量的东西，用来简化我们去访问某一个应用程序可执行文件(.exe)的操作
	
	我们配置了环境变量能做到什么事呢？
		在我们终端的任何一个目录下，都可以访问，配置在系统环境变量里面的可执行文件
		
		
	如何将一个软件的可执行文件配置在我们的系统环境变量中?
		步骤：
			1、拷贝一个可执行文件所在的目录，比如node.exe所在的目录 `C:\Program Files\nodejs`
			
			2、去系统(次计算机右键属性) > 高级系统设置 > 高级 > 环境变量 > 系统变量 > Path > 填写上你的目录
	
	注意事项:
		如果更改了系统的环境变量，就必须把终端重新启动
		
-------------------------------

# 启动node.exe执行js代码

## 启动(相当于启动Apache服务器)
	
	1、在我们的node的安装目录下，去双击我们node.exe

	2、在终端输入 node即可 node.exe
	
## 退出我们的node.exe
	1、在终端中输入.exit
	
	2、连续按住两次 CTRL + C
	
## 怎么去执行js代码
	
	1、直接在我们启动的node.exe中写代码(在开启的`REPL`环境中写代码执行)【了解】
		缺点:
			书写不方便，阅读起来也不方便
			因为在我们的cmd中写的代码，是放在内存中的，一旦我们退出了node.exe，原先写的代码都没有了
			
	2、把我们写好的代码放在一个单独的js文件中去执行
		执行的时候，通过node.exe去执行，具体的写法是这样【掌握】
		
		在终端中输入 node.exe 你要去执行的文件名称
		
		注意点:
			1、我们js代码不是在终端中运行的，只是借助终端去启动我们node.exe，并且最终将结果展现在终端里面而已
			
			2、在运行时候，首先你的终端的目录得切换到你要执行的文件的目录下面去，然后使用node 文件名称执行即可
		
		我们nodejs的代码是在一个叫做`REPL`环境中，执行的
		

------------------------------

# REPL

## JS的执行

	执行js在浏览器端，我是是要依靠浏览器(js的解析引擎)
	
	在服务器端 nodejs开启的REPL环境
	
	官网的解释:
		参考:http://shouce.qdfuns.com/nodejs/repl.html
		
	REPL就是当通过node.exe启动之后开辟的一块内存空间，在这块内容空间里面就可以解释执行我们的js代码
	
	例如:
		在终端中输入了 node abc.js 做的事情就是，将abc.js中写好的js的逻辑代码扔在启动好的node的内容空间中去运行，我们把启动好的node的这块内存空间称之为REPL环境
	

------------------------------

# 模块化思想

## 为什么前端需要有模块化
	1、解决全局变量名污染的问题
	2、把相同功能的代码放在一个模块(一个js文件中)方便后期维护
	
## NodeJS中是如何体现模块化
	ecmascript5 var function
	
	1、Node本身是基于CommonJS规范，
	参考:http://javascript.ruanyifeng.com/nodejs/module.html#toc0
	
	2、Node作者在设计这门语言的时候，就严格按照CommonJS的规范，将它的API设计成模块化了，比如它将开启Web服务这个功能所有代码都放入一个http模块中
	
	3、Node本质来说就是将相同功能的代码放入到一个.js文件中管理
	
## 学习的NodeJS中的模块
	模块		  作用
	http      开启一个Web服务，给浏览器提供服务
	url		  给浏览器发送请求用，还可以传递参数(GET)
	querystring 处理浏览器通过GET/POST发送过来的参数
	path      查找文件的路径
	fs		  在服务器端读取文件用的
	
	上面五大核心模块加上其它一些第三方的模块，这个时候，我们就可以做一个管理系统出来了
	
------------------------------

# 写代码来体验我们Node中模块化开发思想

## 开启web服务
	步骤:
		1、导入我们需要的核心模块(NodeJS提供的模块我们称之为核心模块)
		require('http') 会返回一个 http对象
		
		2、利用获取到的核心模块的对象，创建一个server对象
		
		3、利用server对象监听浏览器的请求，并且处理(请求-处理-响应)
		
		4、开启web服务开始监听
		
## 获取url中的一些相关信息
	
	http://127.0.0.1:8899/login?username=zhangsan&pwd=123
	
	http://127.0.0.1:8899/register?username=zhangsan&pwd=123
	
	在我们的服务器端，想要获取一些东西
	
	1、路径 login，获取我们路径的作用是为了知道浏览器的意图
	2、传递过来的参数 zhangsan 123
	
	为了获取我们上面需要的东西，这个时候，node提供了另外一个核心模块来解决我们这些繁琐的问题 url
	
## 使用url模块的步骤
	1、导入url这个核心模块
	
	2、调用url.parse(url字符串,true)，如果是true的话代表把我们的username=zhangsan&pwd=123 字符串解析成js对象
	
------------------------------

# es6

	ECMAScript 6
	参考:http://es6.ruanyifeng.com/
	
	注意点:	
		写es6的代码最好开启严格模式，让我们在开发阶段写代码更加严谨
		可以在我们每个js代码的最前面加上 `use strict`
	
## const&let 
	const&let其实是对var，认为就相当于es5中var，就是用来定义变量/常量的
	
	定义常量 const 
	
	定义变量 let
	
	开发建议:
		如果你的值，不需要更改就是用常量，如果你的值后面要改我们就需要使用let（变量），其它和var也没有多大区别

## 字符串的一些方法
	字符串.includes('字符串') 判断某一个字符串中是否包含另外一个字符串，其实作用相当于es5的indexOf
	
	startsWith : 判断字符串是否以什么开头，判断协议头 http:// file://

	endsWith : 判断字符串是否以什么结尾，判断文件后缀名 .png .jpg .jpeg
	
## 模版字符串
	作用:
		1、格式化字符串，以你想要的格式输出
		2、模版：占位替换
		
	语法:
		``

## 箭头函数
	很变态，多用了就好了
	
	只有一个参数，并且函数块中只有一行代码
	我们的函数参数的`()`可以不写
	函数体的 `{}` return 都可以省略
	
	但是建议，哪个只有一个参数，只有一句话我们都写全

------------------------------

##今日总结小demo
```js
'use strict'
//1 导入模块
const http = require('http')
const url = require('url')
//2 创建服务器
const server = http.createServer()
//3 就收请求，并设置请求时响应返回的相应数据
server.on('request',function(req,res){
    //首先接收
    const urlString = req.url//这里的url是属性
    const urlObj = url.parse(urlString,true)//模块方法
    console.log(urlObj.query.username)
})
//4 设置服务器监听
server.listen(8881,'127.0.0.1',function(err){
    if(err){
        console.log(err)
    }
    console.log('success')
})
```