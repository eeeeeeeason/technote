# java,day7继承，构造代码块

- 继承extend

  - 维护方便，但耦合性提高了，不便于维护
  - java中只支持单继承，但可以多层继承有爷爷。
  - 子类只能继承父类非私有的成员
  - 子类不能继承父类的构造方法(构造方法都是自己用的)

  ```java
  class Demo_Animal {
    
  }
  class Animal {  //父类
    String color;
    int leg;
    public void eat() {
      System.out.println("吃吃吃")
    }
    public void sleep() {
      System.out.println("睡睡睡")
    }
  }
  class Cat extends Animal {  //子类
    
  }
  ```
- final最终方法，或者最终类是不能被继承的，final类生成的对象是不能再重新new去改变地址，但是可以set去改变属性

- this,super的使用

  ```java
    class Father {
      int num1 = 10;
      int num2 = 30;
    }
    class Son extends Father {
      int num2 = 20;
      public void print() {
        System.out.println(this.num1);  // 可以打印父类的num1因为子类不存在num1
        System.out.println(super.num2);  //可以打印父类的num2 super指向父类   
      }
    }
  ```

    ### 子类所有的构造方法都会访问父类的空惨构造方法

  ```java
    class Father {
      public Father() {
        super();                 //默认会有这句话，父类会访问最高级的object
        System.out.println("father")
      }
    }
    class Son extends Father {
      public Son () {
        super();                 //子类构造前会先去构造父类，父类初始化后再执行子类
        System.put.println("Son")
      }
    }
  ```

    ### 父类中没空参构造方法时************

- 子类方法和父类方法名相同时会使用子类方法，叫重写override

- 父类方法如果私有了，子类不能重写会报错

- 子类的权限应越来越大，更加强大

- 父类的静态方法子类也必须用静态方法重写
