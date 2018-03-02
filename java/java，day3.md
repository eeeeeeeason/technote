# java，day3，day4	

- 逻辑运算符

  - 与&,或|,异或^,非!

    - 异或有一个true，才为true否则为false

  - 双与&&, 和单与最终结果相同，但有短路效果，左边为false时，右边不执行

    ```
    int x = 3; int y = 4; ++x == 3 && ++y == 4 为false 但此时输出的y为4
    ```

    - 双或||也一样有短路效果，左边为true时，右边不执行，双与双或节省性能

- 位运算符

  - 与&,或|,异或^,取反~

    - 与运算时转为2进制，有0为0

    - 或运算时有1为1

    - 异或，两者不同时为1，相同为0,异或运算执行两次后不变

      ```
      怎么不用第三个变量进行两个变量的交换
      x = x^y;  x = 10^5 
      y = x^y;  y = 10^5^5  ===>y = 10
      x = x^y;  x = 10^5^10 ===>y = 5
      ```

    - 取反

      ```
      000000000 00000000 00000000 00000110 6的原反补码(~6)
      111111111 11111111 11111111 11111001 (1.6取反码为)
      000000000 00000000 00000000 00000001 (2.读数先减1)
      -------------------------------------
      111111111 11111111 11111111 11111000 (3.取反码，高位不变)
      100000000 00000000 00000000 00000111 (-7)
      ```

  - 位移运算符

    - ‘<<’:左移  左边最高位丢弃，右边补0 ，相当于乘2 12<<1 = 24

    - '>>':右移 相当于除2  12>>1 = 6

      ```
      计算机中最高效的方法计算2*8 2<<3 ,因为底层也是利用2进制进行运算
      ```

- Java语言基础

  - 键盘录入

    ```java
    import java.util.Scanner; //导包
    class Test_Scanner{
      public static void main(String[] args) {
        	Scanner sc = new Scanner(System.in); //创建键盘录入对象
            System.out,println("请输入第一个证书");
            int x = sc.nextInt();
            System.out,println("请输入第二个证书");
            int y = sc.nextInt();
      }
    }
    ```

    ​

  - 循环结构

    - 跳出语句

      - continue; 终止此次循环

      - break outer;终止全部流程,默认的break只终止内层循环

        ```
        outer: for(int i = 1; i<= 10; i++){
          System.out.println("i="+i);
          inner: for(int j = 1; j<=10; j++){
            System.out.println("j="+j);
            break outer
          }
        }
        ```

      - return语句; 返回方法，结束方法

        ​

  - 方法概述，格式说明

    ```
    public static int add(int a,int b){
      int sum = a + b; 
      return sum;
    }
    ```

    - public ,static 修饰符

    - int 返回值类型 ， 如果返回值类型为void ，return; 不需要返回内容

    - add方法名

    - return 返回赋值

    - 重载：可以声明多个名字相同的函数，并会根据调用时参数列表的类型和个数决定调用的函数

      ```
      class Overload{
        public static void main(String[] args){
          boolean b1 = isEquals(10,10);  // 调用第一个
          boolean b2 = isEquals(10.5,10.6);  // 调用第二个
        }
        public static boolean isEquals(int a, int b) {
          return a == b;
        }
        public static boolean isEquals(double a, double b) {
          return a == b;
        }
      }
      ```

      ​