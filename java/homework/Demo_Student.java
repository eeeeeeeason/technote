class Demo_Student {
	public static void main(String[] args) {
		//��������ĸ�ʽ������ ������ = new ����();
		Student s = new Student();
		s.name = "����";
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
	  System.out.println("ѧϰ");
	}
	public void sleep() {
	  System.out.println("˯��");
	}
}