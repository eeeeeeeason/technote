# java,day面向对象，构造方法

- 面向过程，构造方法

  ```java
  class Demo_Person {
    public static void main(String[] args) {
      //此时不能用p.person执行，而是在创建时就执行了该方法，()就是person方法
      Person p = new Person("李雷",18);
      p.show();
    }
  }
  class Person {
    private String name;
    private int age;
    //构造方法，没有返回值，没有返回值类型
    public person (String name,int age) {
      this.name = name;
      this.age = age;
    }
    public void show () {
      System.out.println(name+"....."+age);
    }
  }
  ```

  ```java
  class Demo_Student {			//步骤1 ，Demo_Student进方法区，main主方法进栈
    public static void main(String[] args) {	//步骤2同步。生成Student.class进方法区
      Student s = new Student()				//步骤3堆内存中开辟空间，创建对象
      s.show()              //打印李四 24
    }
  }
  class Student {                       
    private String name = "张三";              //步骤4默认初始化name = null 后显示初始化为张三  
    private int age = 23;
    public Student() {
      name = "李四";							//步骤5构造方法进栈，修改了s中的参数，
      age = 24;
    }											//构造方法弹栈
    public void show() {
      System.out.println(name+"..."+age);
    }
  }
  ```

  - static关键字的作用

    ```java
    class Demo_Static {
      public static void main(String[] args) {
        Person p1 = new Person();
        p1.name = "苍老师";   //成员变量，存储在堆，跟随着对象
        p1.country = "日本";
        p1.speak();
        p1.name = "小泽老师";
        //p1.country = "日本";   // 会直接从静态资源中去取，随着类加载就加载，被类生成的对象共享
      	//静态数据可以直接用类名.属性赋值 Person.country = "日本"; 但这里的name不行因为不是静态
        p1.speak();
      } 
    }
    class Person {
      String name;
      static String country;
      static int num1 = 10;  //静态资源存在于方法区中类开辟的静态区
      int num2 = 20;
      public void speak() {
        System.out.println(name+"..."+country)
      }
      public static void print() {
        System.out.println(num1);      //静态资源随着类加载就加载、优先对象存在
        //System.out.println(num2);     //在创建对象后存在，因此静态方法无法访问
        // System.out.println(this.num1);  //此时对象还没创建，this指向空
      }
    }
    ```

    ### 当一个类中所有的方法均为静态时，必须要私有该类,避免创建对象导致失败

    ```java
    class ArrayTool {
      private ArrayTool() {}
      public static int get(){
        
      }....
    }
    //方法为静态时使用方便不需要new创建对象，直接类名ArrayTool.get()
    ```

    ​
