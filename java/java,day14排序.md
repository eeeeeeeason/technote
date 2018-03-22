# java,day14排序,第13天课

- 高级选择排序;if(arr[n+1]>arr[n]){arr[n] = arr[n+1]}

- 冒泡排序

- 二分排序;基于有序数组的情况下，可以快速找到元素val的索引

  ```
  int max = arr.length-1;
  int min = 0
  int mid = (max+min)/2
  while(arr[mid]!=val){
    if(arr[mid]<val){
      min = mid + 1
    }else if(arr[mid]>val){
      max = mid - 1
    }
    mid = (min + max)/2
    if(min>max){
      return -1 
    }
  }

  return mid; 
  ```

- 也可以直接用Arrays.sort(arr)进行排序

- Arrays.binarySearch(arr,val)找到数组中对应值的位置。如果不是有序的数会返回-(该位置) - 1

- 包装类

  - byte Byte

  - short Short

  - Int Integer

  - char character

  - double Double

  - boolean Boolean

    ```java
    Integer.toBinaryString(60)==========>111100
    Integer i1 = new Integer("1999999")  int i2 = i1.intValue() =========> 199999  字符串转数字
    或者 int i3 = Integer.parseInt("11111111111") ===========>转数字
    ```

  - Byte取值范围内自动装箱不会重新创建对象，会从常量池中获取因此

    ```
    Integer i1 = 127
    Integer i2 = 127
    i1==i2 ===========>true
    ```

    ​