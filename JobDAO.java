package com.niit.dao;

import java.util.List;

import com.niit.model.Job;

public interface JobDAO {

	public boolean save(Job job);

	public boolean update(Job job);

	public boolean delete(int jobID);

	public Job get(int jobID);

	public List<Job> list();

}
