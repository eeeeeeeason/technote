package com.heima.bean;

public class Student {
	private String name;
	private int age;
//	�����ղι���
	public Student() {
		super();
		
	}
//	�вι���
	public Student(String name, int age) {
		super();
		this.name = name;
		this.age = age;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	@Override
	//��дequals����
	public boolean equals(Object obj) {
		Student s = (Student)obj;
		return this.name.equals(s.name);
	}
	


}
