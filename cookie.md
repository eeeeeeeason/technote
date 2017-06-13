#cookie内容相关


## cookie
1. cookie的作用：实现跨页面访问数据(状态保持-->服务器session)
    //      比如：a.html
    //              document.cookie="userName=ccc";
    //              document.cookie="userPwd=123456";
    //          就可以在同一个域名下面的另一个文件中:b.html
    //              console.log(document.cookie);
    //                      -->"userName=ccc; userPwd=123456"

2. 原生JS设置cookie值
    //<font color="red">切记:一行代码只能设置一个cookie</font>：
    //      通过document.cookie="名称=值";       设置了一个cookie
    //
3. 原生JS获取cookie值(要用服务器才能访问cookie)：
    //      document.cookie -->打印出当前域名下面的所有的cookie的集合：
    //                         -->"userName=ccc; userPwd=123456"

4. 默认情况下设置的cookie都是关闭浏览器就会消失
    //      如果希望某个cookie存储很久：document.cookie="id=888;expires="+new Date("2017-06-11 8:00:00")

## jquery.cookie插件
1. 设置cookie
    $.cookie("uId",888);

2. 获取cookie
    console.log($.cookie("uId"));

3. 删除cookie
    $.removeCookie("uId");

4. 设置过期时间
    - $.cookie("uName","jackyChen",{ expires:new Date("2017-06-11") });     //cookie将会在指定时间过期
    - $.cookie("uName","jackyChen",{ expires:7);    //cookie将会在7天后过期

## cookie使用特点
+ 设置cookie值只能是一个字符串值，如果不是字符串也会强制转换为字符串存储    -->(sessionStorage/localStorage)

## cookie的缺点
+ 不能跨域
+ 不能存储安全性较高的内容(密码)

## JSON的序列化和反序列化
+ JSON.stringify(obj);//会将对象序列化为一个字符串格式

+ JSON.parse(objString);//会将一个JSON字符串反序列化为一个对象格式

## cookie和session的比较
+ 都是实现状态保持的一种手段
    - 跨页面访问数据
+ cookie通过浏览器端来实现、session通过服务器端来实现
+ cookie值保存的数据都不安全,session保存的数据相对安全性较高
+ cookie主要保存一些使用比较频繁，但是安全性不高的数据(比如用户名、昵称、头像)
+ session可以保存一些安全性要求较高的数据
    - 保存登录状态

## 退出登录的实现步骤：
+ 通过ajax调用退出登录的接口，接口调用成功，并且返回的数据中含有code=200，说明已经成功的退出登录
+ 删除本地存储的用户名等cookie值
+ 跳转到登录页