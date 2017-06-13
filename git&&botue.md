# Git笔记
### tortoiseGit图标
+ 新创建的文件没有图标
+ 已经添加到暂存区的文件具有蓝色+
+ 已经修改的文件具有红色!
+ 已经提交到本地仓库的文件具有绿色√
+ 冲突的文件具有：黄色!

## 使用命令+文字描述以下过程：
### 实现在桌面中创建一个git项目，在项目中添加文件，并提交到本地仓库的操作步骤
+ mkdir app
+ cd app
+ git init
+ touch 1.txt
+ git add *
+ git commit -m 第一次提交


### 在公司里面，我自己在github中创建了一个空仓库，为了把本地代码上传到这个仓库中，我应该执行哪些操作
+ mkdir app
+ cd app
+ git init
+ touch 1.txt
+ git add *
+ git commit -m 第一次提交
+ git push 服务器仓库地址 master



### 在公司里面，领导让我对某个github的项目进行二次开发(2+次开发)，比如我要开发一个新功能(比如添加test.html文件)，我应该执行哪些步骤从而将test.html文件提交到服务器中
+　mkdir app
+　cd app
+　git init
+　git pull 仓库地址 master
+　touch test.html
+　git add *
+　git commit -m 添加了一个test.html文件
+　git push 仓库地址 master


### 如果当前位于cart分支，我需要将cart分支合并到master分支，我应该执行哪些操作
+ git checkout master
+ git merge cart -m 合并了分支

## 命令默写
### 想要查看分支切换的操作日志，通过什么命令可以实现？
+ git reflog


### 版本回滚
+ git reset --hard 版本号


### 创建新分支
+ git branch 分支名

### 删除某个分支
+ git branch -d  分支名

### 切换分支
+ git checkout 分支名

### 分支合并
git merge 分支名 -m 备注信息


### 查看所有分支-->并说明如何辨别当前位于哪个分支
+ git branch
    - 分支前面带有*的是当前分支


#botueD1
### sessionStorage/localStorage 本地存储(h5)
+ 其中sessionStorage将会在会话结束后(关闭浏览器)清除数据;localStorage设置的数据会永久保存(需要手动清除)

+ 语法：
    - 设置数据: sessionStorage.setItem("数据名称","数据值");
        - 设置的数据应该是字符串格式，如果不是字符串格式，最终也会转换为字符串格式
    - 获取数据：sessionStorage.getItem("数据名称");
    - 移除指定数据：sessionStorage.removeItem("数据名称")

#botueD2
##细节
+ bootstrap：col-md-offset-9,设置与前面盒子元素的距离
+ .trigger('click')执行事件方法


###template使用注意
+ 导入text插件
- require(['jquery','artTemplate','text!/模板html页'],function($,art,Tpl){ $.get(url,function(data){
if(data.code!=200){console.log(data.msg) return}//ajax失败的情况
var result = data.result;
var courseCategoryList = art.render(Tpl,{result:result})//Tpl为text返回的字符串，左边的result为模板中的循环样板，右边的result为data中的内容。得到courseCategoryList 为已经编辑完毕的字符串，render有三个参数，第三个为函数可以立即执行，但这里不需要
var $courseCategoryList = $(courseCategoryList)转化为jq变量
使用jq方法插入 $(".module-container").append($courseCategoryList);
        })
})})

+ 对应的模板页
循环部分需要设置
{{each result category}}  //第三个参数为变量名可以自己命名通常为$value，由于本次循环需要嵌套，因此需要设置不同的变量名
{{if(category.cg_pid==0)}}//可以在其中添加判断条件
tr>td{{category.cg_name}}
{{each result categoryAgain}}//内层循环，需要设置不同的变量名
{{if(categoryAgain.cg_pid==category.cg_id)}}//判断条件为嵌套的父级id
{{/if}}
{{/each}}
{{/if}}
{{/each}}
render的作用是主要为了避免script标签在index中的大量使用。


#botueD3
##add&&edit
//6.11HW----add部分
1.先将6.10的main.js中list功能分离。
2.在list模板页设置添加分类按钮id以便add.js中操作
3.list中以代理的方法获取按钮点击调用add函数()
4.add中引入模板调用get请求/api/category/top，将数据获取后使用art.render(模板字符串，{result:data.result})替换
5.编辑添加模板从bootstrap文档中获取模态框和表单，表单中需要提交的数据必须使用name，添加的模态框设置id名便于移除
6.将submit提交按钮放到form表单中方便使用
7.一定要记得导bootstrap.js和依赖jquery！！！！！！！！！！！！！
8.每次使用前需要将之前创建模态框移除减少标签重复。
9.添加数据需要在表单按钮中提交信息，按照要求发送post请求，使用serialize()获取表单信息，提交后再次出发课程分类的点击事件，//模态框.trigger('click')，同时将模态框隐蔽modal("hide")
9.最后把模态框插入body后使用.modal()运行


HW--edit部分
1.编辑按钮请求数据需要导入该行的cg_id。因此在list模板渲染时需要在按钮父级添加一个类名，同时list中该按钮的点击事件应该获取到这个id并传入edit(cg_id)调用函数。

2.edit中$get请求发送该cg_id获取得到的数据修改模板模板需要使用name属性作为form表单提交的属性
值得一提的是select部分，循环判断该项的上级目录时，判断该项与上级即$value.cg_id ==result.top.cg_pid相等则设置为selected进行渲染
3.将submit提交按钮放到form表单中方便使用
4.一定要记得导bootstrap.js和依赖jquery！！！！！！！！！！！！！
5.每次使用前需要将之前创建模态框移除减少标签重复。
6.添加数据需要在表单按钮中提交信息，按照要求发送post请求，使用serialize()获取表单信息，提交后再次出发课程分类的点击事件，//模态框.trigger('click')，同时将模态框隐蔽modal("hide")
7.最后把模态框插入body后使用.modal()运行
