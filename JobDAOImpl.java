package com.niit.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.niit.model.Job;

@SuppressWarnings("deprecation")
@Repository(value = "JobDAO")
public class JobDAOImpl implements JobDAO {
	@Autowired
	private SessionFactory sessionFactory;

	public JobDAOImpl(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Transactional
	public boolean save(Job job) {
		// TODO Auto-generated method stub
		try {
			sessionFactory.getCurrentSession().save(job);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	@Transactional
	public boolean update(Job job) {
		// TODO Auto-generated method stub
		try {
			sessionFactory.getCurrentSession().update(job);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Transactional
	public boolean delete(int jobID) {
		// TODO Auto-generated method stub
		try {
			sessionFactory.getCurrentSession().delete(jobID);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Transactional
	public Job get(int jobID) {
		// TODO Auto-generated method stub
		String hql = "from Job where job_id=" + jobID ;

		@SuppressWarnings("rawtypes")
		Query query = sessionFactory.getCurrentSession().createQuery(hql);
		@SuppressWarnings("unchecked")
		List<Job> list = (List<Job>) query.list();

		if (list != null && !list.isEmpty()) {
			System.out.println("job retrieved from DAOImpl");
			return list.get(0);
		} else {
			return null;
		}
	}

	
	@Transactional
	public List<Job> list() {
		// TODO Auto-generated method stub
		String hql = " from Job";
		@SuppressWarnings("rawtypes")
		Query query = sessionFactory.getCurrentSession().createQuery(hql);
		return query.list();

	}

	

}
