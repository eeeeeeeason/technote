# java,day8多态

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

      ​


- ​
- ​
