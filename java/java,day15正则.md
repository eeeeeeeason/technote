# java,day15正则，随机数，垃圾回收

- 正则String regex = "[a-zA-Z]";      匹配a-z A-Z
  - "ABcabs".matches(regex); ===>true
  - String regex = "[a-z[B-C]]";      匹配a-z 与B-C
  - String regex = "[a-z[B-C]]";      匹配a-z 与B-C
  - String regex = "[a-z&&[def]]";      匹配def
  - String regex = "[a-z&&[^bc]]";      匹配a-z除了bc
  - Random r = new Random ;  r.nextInt();=========System.nanoTime() 种子跟纳秒产生关系因此不容易产生重复

- Random r1 = new Random(1000); 

  - int a = r.nextInt() =========> -1111
  - int b = r.nextInt() =========> -2222

  在用同样的种子进行同样次数的结果会一样

  - r.nextInt(100) =========> 即生成0到100-1范围内的随机数

- System.gc()，在确定某个对象不会被引用时触发垃圾回收机制，调用finalize(),或者手动用gc()调用finalize

- System.arraycopy(复制源，开始索引，目标数组，目标数组的开始索引，拷贝原数组长度)

- BigInteger 

- BigDecimal

  ```
  BigDecimal bd1 =  new BigDecimal("2.0")
  BigDecimal bd2 =  new BigDecimal("1.1")
  bd1.substract
  ```

  ​