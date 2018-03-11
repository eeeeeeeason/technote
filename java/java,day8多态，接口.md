# java,day8多态,抽象接口

- 多态

  - 有多种形态

    - 要有继承关系

    - 有方法重写

    - 有父类引用指向子类对象

      ```java
      class Demo_Polymorphic {
        public static void main(String[] args) {
          Cat c = new Cat();
          c.eat();				//输出猫吃鱼
          Animal a = new Cat();    //父类引用指向子类对象,向上转型
          a.eat();				//输出猫吃鱼
        }
      }
      class Animal {
        public void eat() {
          System.out.println("动物吃饭")
        }
      }
      class Cat extends Animal {   //继承关系
        public void eat() { 
          System.out.println("猫吃鱼"); //重写
        }
        public void fly() {
          
        }
      }
      ```



- 多态的成员变量看父类，只能拿到父类的值

- 多态的成员方法看右边，动态绑定

- 多态的静态方法看左边，静态绑定

  ```java
  class SuperMan {
    public static void main(String[] args) {
      Person p = new SuperMan();		//父类引用指向子类对象
      System.out.println(p.name);	//输出的成员变量看父类
      //p.fly();  //成员方法编译要看父类有没有，编译完后运行执行子类方法，动态绑定
      //>?????这就是个person肯定没有fly方法啦、
  	SuperMan sm = (SuperMan)p; //向下转型
      sm.fly();
    }
  }
  class Person {
    String name = "John";
    public void business () {
      System.out.println("谈生意");
    }
  }

  class SuperMan extends Person {
    String name = "superMan";
    public void business () {
      System.out.println("谈大大大生意");    
    }
    public void fly () {
      System.out.println("飞")
    }
  }
  ```

  - 多态的弊端如上不能使用子类superman的fly方法，子类的特有属性和行为都不能使用

  - 便于维护

    ## 抽象

    ```java
    class Demo_Abstract {
      public static void main(String[] args) {
        //Animal a = new Animal(); //Animal抽象类不能实例化
        Animal a = new Cat();		//父类引用指向子类对象
        a.eat();					
      }
    }

    abstract class Animal {
      public abstract void eat();
    }
    class Cat extends Animal {
      public void eat() {
        System.out.println("猫吃鱼")
      }
    }
    ```

    - 抽象类不能实例化,可以利用多态继承重写

    - 被抽象的强制子类重写，不能和final共用，final拒绝子类重写

    - abstract为了让子类访问并强制重写，不能和private共用，private不让子类访问

    - 用static的目的是使用类名.xxx调用，而类名调用抽象方法无意义

      ## 接口Interface

      ### 接口实例化必须用子类进行

      ```java
      class Demo_Interface {
        public static void main(String[] args) {
          Demo d  = new Demo();
          d.print(); 	
          Inter i = new Demo();	//父类引用指向子类对象，类似继承，利用子类来实例化，实现
          i.print();
        }
      }
      interface Inter {
        public static final int num = 10;	//接口中定义的成员变量都是常量，子类只能访问不能修改
        //public Inter(){} //接口中没有构造方法
        public abstract void print();  //方法中不能定义抽象方法
      }
      class Demo extends Object implements Inter { //接口中没有构造方法，需要重object中继承
        public void print() {			//重写接口中的抽象方法(必须的)
          System.out.println(num);	//输出接口中的num = 10;
        }
      }
      ```

      - 类与类：单继承，多层继承

      - 类与接口：实现关系，单实现，多实现，在继承一个类的同时实现多个接口

        ```java
        interface InterA {
          public abstract void printA();
        }
        interface InterB {
          public abstract void printB();
        }
        class Demo implements InterA,InterB {	//多实现
          public void printA() {
            System.out.println("printA")
          }
           public void printB() {
            System.out.println("printB")
          }
        }
        ```

        ​

        ​
