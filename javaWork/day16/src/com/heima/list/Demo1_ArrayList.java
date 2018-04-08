package com.heima.list;

import java.util.ArrayList;
import java.util.Iterator;
@SuppressWarnings({ "rawtypes", "unchecked" })
public class Demo1_ArrayList {

	public static void main(String[] args) {
		ArrayList list = new ArrayList();
		list.add("a");
		list.add("a");
		list.add("b");
		list.add("b");
		list.add("c");
		ArrayList newList = getSingle(list);
		System.out.println(newList);
		
	}
	public static ArrayList getSingle(ArrayList list) {
		ArrayList newlist = new ArrayList<>();
		Iterator it = list.iterator();
		while(it.hasNext()) {
			Object obj = it.next();
			if(!newlist.contains(obj)) {
				newlist.add(obj);
			}
		}
		return newlist;
	}
}
