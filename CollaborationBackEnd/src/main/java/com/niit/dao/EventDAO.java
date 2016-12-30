package com.niit.dao;

import java.util.List;

import com.niit.model.Event;

public interface EventDAO {

public boolean save(Event event); 
	
	public boolean update(Event event);
	
	public boolean delete(Event event);
	
	public Event get(int eventID);
	
	public Event getName(String name);
	
	public List<Event> list();
	


}

