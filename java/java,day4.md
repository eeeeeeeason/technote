# java,day4数组

- 数组

  - 语法

    - 动态初始化

    ```java
    int [] arr = new int[5];
    //可以存储五个int类型的数
    //在内存中开辟的连续的5个空间
    System.out.println(arr[0]);  // 结果为0
    //当没赋值时系统默认会给一个初始化值为0
    System.out.println(arr);  
    //结果为[I@19bb25a  ===> [代表数组，几个[就代表几维数组 I指int  19bb25a是内存开辟的地址值
    ```

    - 静态初始化
    ```java 
    int[] arr = new int[]{11,12,13}; //静态初始化不允许控制数据长度 
    int[] arr2 = {11,22,3,4}
    ```

  - 数组操作过程的异常

    ```java
    class Exception{
      public static void main(String[] args) {
        int[] arr = new int[5];
        System.out.println(arr[-1]); //找不到对应索引，越界异常，arrayIndexOutOfBoundsExcep`
        arr = null;
        System.out.println(arr[0]); //空指针异常  ,NullPointerException
      }
    }
    ```

  - 二维数组

    ```java
    class Array{
      public static void main(String[] args) {
       int[][] arr = new int[3][2]; //3代表其中有3个一维数组，2代表每个一维数组中有2个元素
       System.out.println(arr); // [[xxxxx
       System.out.println(arr[0]);  // [xxxx
       System.out.println(arr[0][0]); // 0
      }
    }
    // int[][] arr = new int[3][2]; 动态
    // int[][] arr = {{1,2,3},{4,5},{6,7}}
    ```

    ​

  - 内存分布，堆栈

    - 栈：存储局部变量，定义在方法声明上和方法中的变量，先进后出。
    - 堆：存储new出来的数组或对象
    - 方法区

    ## Java之父高司令说明，java中只有传值，无论引用数据类型的地址还是基本数据类型都是值;