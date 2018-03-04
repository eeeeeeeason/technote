# java,day面向对象

- 面向过程

  ```
  学习做菜洗菜，并执行
  ```

- 面向对象

  ```java
  //找一个人会做菜洗菜的，指挥，角色不同，复杂的事情简单化
  //特征：封装、继承、多态
  class Demo_Student{
    public static void main(String[] args){
      Student s = new Student();
      s.name = "张三";
      s.age = "18";
      s.run();
    }
  }
  class Student {
    String name;             
    int age;
    String gender;
    public void study() {
      System.out.println("学习");
    }
    public void sleep() {
      System.out.println("睡觉");
    }
    public void run(int x) {
      int a = 1;
      System.out.println(name+"..."+age);
    }
  }

  ```

  - 封装

    - this关键字使用

      ```
      this代表当前对象的引用，下面的this.age代表该创建对象的age
      ```

      ​

    - 隐藏对象的属性和实现细节，仅对外提供公共访问方式 ，private关键字

      ```java
      //隐藏了实现细节
      //提高复用性
      //提高安全性
      class Demo_Person {
        public static void main{
          Person p1 = new Person();
          p1.name = "张三";
          p1.setAge(17);  //p1.age = 17 这样会被恶意修改
          p1.speak();
        }
      }
      class Person {
        private String name;
        private int age; //被private修饰的只能在本类中访问
        public void setAge(int age) { //设置年龄,判断值的范围
          if(a>0&&a<150){
            this.age = age
          }else{
            System.our.println("范围不合理储存失败")
          }
          age = x;
        }
        public void getAge() { //获取年龄
          return age;			 //这里的return相当于 return this.age
        }
        public void speak(){
          System.out.println(name+".."+age)
        }
      }
      ```

      ​

  - 成员变量，局部变量;

    - 类中的变量为成员变量如以上的age,gender
    - 类中的方法自带的参数为局部变量 如以上run方法的 x , a

  ```
  除了堆栈还有主方法区、首先在编译过程中主方法执行编译，虚拟机将main方法开辟在栈空间中,遇到new Student这个Student类时又会把Student创建在方法区中。调用main方法时，构造的对象会在堆中生成一个空间，包括age name，并把给予s一个指针0x0011。 s.run 执行时在栈中生成一个空间得到，s已经有一个指向堆中的地址0x0011其中打印的name和age就可以在内存地址中寻找，运行完毕后弹栈;
  ```

  - 垃圾回收机制

    ```
    正常使用时在弹栈过程后，或者栈中的地址被强转为null，堆中的元素不再被引用时，java的垃圾回收机制会自动进行处理。
    ```