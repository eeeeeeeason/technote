# java,day12常见对象

-  string每一个字符串都相当于一个对象,一旦被赋值无法改变

   ```java
   String str = "abc";	
   str = "def";				//指向了新的一个对象，原有对象垃圾处理
   System.out.println(str);	//String类重写了tostring方法返回的是其对象本身
   ```

-  常量池

   ```java
   String str1 = "abc";
   String str2 = "abc";
   String str3 = new String("abc");
   str1 == str2;  true 			//原因是常量池中会找最近声明的变量，如果有就不再重新开辟空间
   str1 == str3;	false  	//但在创建该过程中创建了两个"abc"对象，一个在常量池，一个new在堆内存

   ```

-  String 相关判断方法

   ``` java
   .equals
   .equalsIgnoreCase		//忽略大小写相等
   .contains	//包含
   .startWith	//是否以x开头
   .endsWith	//结尾
   .isEmpty	//判断是否为空
   str.charAt(index) //第index个字母
   str.replace('a','z');替换
   str.trim();//去掉两边
   str.indexOf();//有的话返回索引值否则-1
   ```

   ​