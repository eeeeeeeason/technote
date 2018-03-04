class Demo_Student {
	public static void main(String[] args) {
		//创建对象的格式：类名 对象名 = new 类名();
		Student s = new Student();
		s.name = "张三";
		s.age = 23;
		System.out.println(s.name+""+s.age);
		s.study();
		s.sleep();
	}
}

class Student {
	String name;             
	int age;
	String gender;
	public void study() {
	  System.out.println("学习");
	}
	public void sleep() {
	  System.out.println("睡觉");
	}
}