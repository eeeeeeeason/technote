# java,day9package，包管理

- 有包类，打包后文件路径

  - 1.package com.heima

  - 2.javac -d . Demo_Package.java  在当前目录下按照java文件中的package包路径进行生成/com/heima/Demo_Package.javac文件

  - 3.在当前目录使用java com.heima.Demo_Package运行编译文件

- 不同包下的类之间访问
  - import com.baidu.Person; //导入com.baidu中的Person类

- 修饰符

  - private 本类可以访问
  - 默认本类，同一个包可以访问
  - protected本类，同一个包，不同包下的子类可以访问其他包需要继承该类才能访问
  - public 不同包下的无关类也可以访问

- 内部类

  - 可以访问外部类成员
  - 如果成员内部类被私有，就创建新的对象去调用其中方法

  ```java
  class Demo1_InnerClass {
    public static void main(String[] args) {
      Outer.Inner oi = new Outer().new Inner();
      oi.method();	//10
    }
  }
  class Outer {
  public int num = 10
    class Inner {
      public void method(){
        System.out.println(num);
      }
    }
    private class OtherInner() {
      public void Othermethod(){
        System.out.println(num);
      }
    }
    public void print() {
      OtherInner i  = new OtherInner();	//如果成员内部类被私有，就创建新的对象去调用其中方法
      i.Othermethod();
    }
  }
  ```

  ​
