package com.niit.dao;

import java.util.List;

import com.niit.model.Blog;
import com.niit.model.BlogComment;

public interface BlogDAO {

	public boolean save(Blog blog); 
	
	public boolean update(Blog blog);
	
	public boolean delete(Blog blog);
	
	public Blog get(int blogID);
	
	public Blog getName(String name);
	
	public List<Blog> list();
	
	public boolean addComment(BlogComment blogcomment);
	
	public List<BlogComment> listComment(int id);
	
	public List<BlogComment> listOfAllComment();
	

}
