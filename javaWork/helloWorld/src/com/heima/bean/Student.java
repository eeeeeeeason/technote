package com.heima.bean;

public class Student {
	private String name;
	private int age;
//	创建空参构造
	public Student() {
		super();
		
	}
//	有参构造
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
	//重写equals方法
	public boolean equals(Object obj) {
		Student s = (Student)obj;
		return this.name.equals(s.name);
	}
	


}
