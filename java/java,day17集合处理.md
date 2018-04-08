# 集合的处理	

- arraylist	

  - arrlist.contains(obj)，会遍历并判断是否集合中的对象和括号中的对象equals,因此需要重写对象中的equals
  - arrlist.remove(obj),同理删除对象时要equals比较

- 链表linkedlist

  - list.getFirst()
  - list.getLast()
  - list.removeFirst()
  - list.removeLast()
  - list.get(2);=========>先判断size/2是否比2小，小的话从头开始链式向下寻找

- 栈，队列

  - 栈先进后出
  - 队列先进先出

- 泛型

  - Collection<E>  E限制了集合中可选数据类型，解决类型转化异常的安全问题
    - ArrayList<Person> list = new ArrayList<Person>(); 需要保证前后泛型数据一致
    - 泛型选择Object没什么意义、添加任何类型进入都会装箱 变成object

  ```java
  自己定义的类，通过
  public class Tool<Q> {
    private Q obj;			//自定义泛型通过这个Q传递在编译期进行限制
    public Q getObj() {		//
      return obj;
    }
    public void setObj(Q obj) {	//
      this.obj = obj;
    }
    public<Q> void show(Q q){} //方法泛型，最好与类一致，也可以不一致，在使用时填入
    public static<Q> void print(Q q){} //静态方法无法跟随类的泛型，因为随着类加载就创建，只能自己声明
  }
  ```

  ​