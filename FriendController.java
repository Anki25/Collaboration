package com.niit.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.niit.dao.FriendDAO;
import com.niit.model.Friend;

@RestController
public class FriendController {

private static final Logger logger	= LoggerFactory.getLogger(FriendController.class);
	
	@Autowired
	FriendDAO friendDAO;
	
	@RequestMapping(value="/friends",method=RequestMethod.GET)
	public ResponseEntity<List<Friend>> listAllFriends(){
		logger.debug("calling method listAllFriends");
		List<Friend> friend=friendDAO.list();
		if(friend.isEmpty()){
			return new ResponseEntity<List<Friend>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Friend>>(friend,HttpStatus.OK);
	}

	@RequestMapping(value="/friend/",method=RequestMethod.POST)
	public ResponseEntity<Friend> createFriend(@RequestBody Friend friend){
		logger.debug("calling method createFriend" + friend.getFriend_id());
		if(friendDAO.get(friend.getFriend_id())==null){
			friendDAO.save(friend);			
		}
		logger.debug("friend already exists with id:" + friend.getFriend_id());
		friend.setErrorMessage("friend already exists with id:" + friend.getFriend_id());
		return new ResponseEntity<Friend>(friend,HttpStatus.OK);
			}
	
	@RequestMapping(value="/friend/{id}",method=RequestMethod.PUT)
	public ResponseEntity<Friend> updateFriend(@PathVariable("id") int friend_id,@RequestBody Friend friend){
		logger.debug("calling method updateFriend" + friend.getFriend_id());
		if(friendDAO.get(friend_id)==null){
			logger.debug("friend does not exists with id:" + friend.getFriend_id());		
			friend=new Friend();
			friend.setErrorMessage("friend does not exists with id:" + friend.getFriend_id());
			return new ResponseEntity<Friend> (friend,HttpStatus.NOT_FOUND);
		}
		friendDAO.update(friend);
		logger.debug("friend updated successfully");
		return new ResponseEntity<Friend> (friend,HttpStatus.OK);		
	}

	@RequestMapping(value="/friend/{id}",method=RequestMethod.DELETE)
	public ResponseEntity<Friend> deleteFriend(@PathVariable("id") int friend_id){
		logger.debug("calling method deleteFriend for friend id: " + friend_id);
		Friend friend=friendDAO.get(friend_id);
		if(friend==null){
			logger.debug("friend does not exists with id:" + friend_id);
			friend=new Friend();
			friend.setErrorMessage("friend does not exists with id:" + friend_id);
			return new ResponseEntity<Friend> (friend,HttpStatus.NOT_FOUND);	
		}
		friendDAO.delete(friend_id);
		logger.debug("friend deleted successfully");
		return new ResponseEntity<Friend> (friend,HttpStatus.OK);		
	}
	
	@RequestMapping(value="/friend/{id}",method=RequestMethod.GET)
	public ResponseEntity<Friend> getFriend(@PathVariable("id") int friend_id){
		logger.debug("calling method getFriend for friend id: " + friend_id);
		Friend friend=friendDAO.get(friend_id);
		if(friend==null){
			logger.debug("friend does not exists with id:" + friend_id);
			friend=new Friend();
			friend.setErrorMessage("friend does not exists with id:" + friend_id);
			return new ResponseEntity<Friend> (friend,HttpStatus.NOT_FOUND);
		}
		logger.debug("friend exists with id:" + friend_id);
		return new ResponseEntity<Friend> (friend,HttpStatus.OK);
	}


}





