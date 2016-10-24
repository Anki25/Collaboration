package com.niit.dao;

import java.util.List;

import com.niit.model.Friend;

public interface FriendDAO {
	
public boolean save(Friend friend); 
	
	public boolean update(Friend friend);
	
	public boolean delete(int userID,int friendID);
	
	public List<Friend> getMyFriends(int userID);
	
	public Friend getName(String name);
	
	public List<Friend> getMyNewFriendRequest(String userID);
	
}
