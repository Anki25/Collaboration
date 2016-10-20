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

import com.niit.dao.JobDAO;
import com.niit.model.Job;

@RestController
public class JobController {

private static final Logger logger	= LoggerFactory.getLogger(JobController.class);
	
	@Autowired
	JobDAO jobDAO;
	
	@RequestMapping(value="/jobs",method=RequestMethod.GET)
	public ResponseEntity<List<Job>> listAllJobs(){
		logger.debug("calling method listAllJobs");
		List<Job> job=jobDAO.list();
		if(job.isEmpty()){
			return new ResponseEntity<List<Job>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Job>>(job,HttpStatus.OK);
	}

	@RequestMapping(value="/job/",method=RequestMethod.POST)
	public ResponseEntity<Job> createJob(@RequestBody Job job){
		logger.debug("calling method createJob" + job.getJob_id());
		if(jobDAO.get(job.getJob_id())==null){
			jobDAO.save(job);			
		}
		logger.debug("job already exists with id:" + job.getJob_id());
		job.setErrorMessage("job already exists with id:" + job.getJob_id());
		return new ResponseEntity<Job>(job,HttpStatus.OK);
			}
	
	@RequestMapping(value="/job/{id}",method=RequestMethod.PUT)
	public ResponseEntity<Job> updateJob(@PathVariable("id") int job_id,@RequestBody Job job){
		logger.debug("calling method updateJob" + job.getJob_id());
		System.out.println("starting to update"+ " " + job_id);
		if(jobDAO.get(job_id)==null){
			logger.debug("job does not exists with id:" + job.getJob_id());		
			job=new Job();
			job.setErrorMessage("job does not exists with id:" + job.getJob_id());
			return new ResponseEntity<Job> (job,HttpStatus.NOT_FOUND);
		}
		System.out.println("updating" + " " + job_id);
		jobDAO.update(job);
		logger.debug("job updated successfully");
		System.out.println("updating end" + " " + job_id);
		return new ResponseEntity<Job> (job,HttpStatus.OK);		
	}

	@RequestMapping(value="/job/{id}",method=RequestMethod.DELETE)
	public ResponseEntity<Job> deleteJob(@PathVariable("id") int job_id){
		logger.debug("calling method deleteJob for job id: " + job_id);
		Job job=jobDAO.get(job_id);
		if(job==null){
			logger.debug("job does not exists with id:" + job_id);
			job=new Job();
			job.setErrorMessage("job does not exists with id:" + job_id);
			return new ResponseEntity<Job> (job,HttpStatus.NOT_FOUND);	
		}
		System.out.println("deleting" + job_id);
		jobDAO.delete(job_id);
		System.out.println("deleted");
		logger.debug("job deleted successfully");
		return new ResponseEntity<Job> (job,HttpStatus.OK);		
	}
	
	@RequestMapping(value="/job/{id}",method=RequestMethod.GET)
	public ResponseEntity<Job> getJob(@PathVariable("id") int job_id){
		logger.debug("calling method getJob for job id: " + job_id);
		Job job=jobDAO.get(job_id);
		if(job==null){
			logger.debug("job does not exists with id:" + job_id);
			job=new Job();
			job.setErrorMessage("job does not exists with id:" + job_id);
			return new ResponseEntity<Job> (job,HttpStatus.NOT_FOUND);
		}
		logger.debug("job exists with id:" + job_id);
		return new ResponseEntity<Job> (job,HttpStatus.OK);
	}


}




