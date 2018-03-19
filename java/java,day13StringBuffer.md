# java,day13StringBuffer

-  StringBuffer,线程安全效率低JDK1.0,可变的字符序列

   -  初始化16个字节可以通过sb.capacity();拿到初始容量16个字节，但不能直接通过length实际值拿到

      ```java
      StringBuffer sb = new StringBuffer(10);	//.capacity()===>10,.length()===>0;
      StringBuffer sb1 = new StringBuffer("hhh");	//.capacity()===>19,.length()===>3;
      //此时capacity扩充了初始容量16+3;
      ```

   -  对同一个StringBuffer sb进行append操作添加时，返回的永远是同一个字符串缓冲区

   -  insert(index,"xxx");插入

   -  deleteCharAt(4);删除对应索引字符

   -  delete(0,2);// 0是开始，2是往后删除的个数

   -  replace(0,3,"bai");//替换对应个数

   -  reserve();//反转

   -  String str = sb.substring(4);//用string接收，截取第四个以后的字符串

   -  substring(4,7);//也可以截取多个

-  StringBuilder，线程不安全效率高JDK1.5,可变的字符序列

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