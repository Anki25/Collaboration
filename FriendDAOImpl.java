package com.niit.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.niit.model.Friend;
import com.niit.model.User;

@SuppressWarnings("deprecation")
@Repository(value = "FriendDAO")
public class FriendDAOImpl implements FriendDAO {
	
	@Autowired
	private SessionFactory sessionFactory;

	public FriendDAOImpl(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}


	@Transactional
	public boolean save(Friend friend) {
		// TODO Auto-generated method stub
		try {
			sessionFactory.getCurrentSession().save(friend);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	@Transactional
	public boolean update(Friend friend) {
		// TODO Auto-generated method stub
		try {
			sessionFactory.getCurrentSession().update(friend);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Transactional
	public boolean delete(int userID,int friendID) {
		// TODO Auto-generated method stub
		try {
			Friend friend=new Friend();
			friend.setFriend_id(friendID);
			friend.setUser_id(userID);
			sessionFactory.getCurrentSession().delete(friendID);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Transactional
	public List<Friend> getMyFriends(int userID) {
		// TODO Auto-generated method stub
		String hql = "from Friend where user_id=" + userID ;

		@SuppressWarnings("rawtypes")
		Query query = sessionFactory.getCurrentSession().createQuery(hql);
		@SuppressWarnings("unchecked")
		List<Friend> list = (List<Friend>) query.list();

		return list;
	}

	@Transactional
	public Friend getName(String name) {
		// TODO Auto-generated method stub
		String hql = "from Friend where userID=" + "'" + name + "'";
		@SuppressWarnings("rawtypes")
		Query query = sessionFactory.getCurrentSession().createQuery(hql);
		@SuppressWarnings("unchecked")
		List<Friend> list = (List<Friend>) query.list();

		if (list != null && !list.isEmpty()) {
			System.out.println("username retrieved from DAOImpl");
			return list.get(0);
		} else {
			return null;
		}
	}

	@Transactional
	public List<Friend> getMyNewFriendRequest(String userID){
		String hql = "from Friend where userID=" +  userID + "' and request_status = '" + "N";
		@SuppressWarnings("rawtypes")
		Query query = sessionFactory.getCurrentSession().createQuery(hql);
		@SuppressWarnings("unchecked")
		List<Friend> list = (List<Friend>) query.list();
        return list;
		
	}
		}
