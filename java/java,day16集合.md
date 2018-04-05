# 集合	

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