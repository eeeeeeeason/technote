# java,day11Object

-  toString ;更方便显示

   ```java
   Student s = new Student
   String str = s.toString  
   //return getClass().getName() + "@" + Integer.toHexString(hashCode()); 
   //com.heima.object@xxxx，xxx为哈希code十六进制返回
   ```

-  equals;比较两个对象是否相等，通常我们需要在子类中重写该方法来比较属性是否相同

   ```

   ```

-  eclipse快捷键

   ctrl +n 创建新文件

   alt +shift +s /+c 创建空参构造

   alt +shift +s /+o 创建有参构造

   alt +shift +s /+r 生成setget方法