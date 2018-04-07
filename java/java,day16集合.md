# 集合	

```
collection 子集 list(可重复有序) set(无序不可重复) 
```

数组可以存基本数据和引用数据，数组长度固定

但集合中只能存引用类型，集合长度随着会增长

```


Collection c = new ArrayList();

c.add("a")

c.add("b")

c.remove("b")     ============>只剩a

c.contains("a") =======>true

c.isEmpty()=>>>>>>>>>> false

c.clear() ==============>清空

c.size()

c1.addAll(c2)=============>把c2集合每个元素添加到c1

```

- 迭代（遍历）
  - Iterator it  =  c.iterator();
  - boolean b1 = it.hasNext();
  - Object obj1 = it.next(); // next会在每次执行后向后移动一位 
  - 如果添加的内容不为object，添加进入时会强转为object，而此时取出需要(String)it.next()向下转
- list集合
  - list.add(111); 111装箱为对象后插入到list最后
  - list.remove(111); 找到111号索引并删除，而不会去找到111这个元素
  - list.get(1);得到索引1的值
  - list.set(1,'a');设置索引1的值为a，
    - 需要注意list底下hasNext和add不应该并发进行，会导致并发异常
    - 此时使用ListIterator lit = list.listIterator(); listIterator底下的add和hasNext可以并发进行
- vector,少用，线程安全
  - addElement
  - hasMoreElements
- 数组，链表
  - 数组查询修改快，增删慢，因为数组在每次增删都要将前面或者后面所有元素拷贝向前后粘贴
  - 链表查询慢，增删快，因为查询需要从头到尾进行询问，增删只需要知道前后就直接插入
  - 数组在超出长度时，创建一个150%长度的数组再把原数组拷贝过来