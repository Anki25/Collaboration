package com.niit.dao;

import java.util.List;

import com.niit.model.Blog;

public interface BlogDAO {

	public boolean save(Blog blog); 
	
	public boolean update(Blog blog);
	
	public boolean delete(int blogID);
	
	public Blog get(int blogID);
	
	public Blog getName(String name);
	
	public List<Blog> list();
	

}
