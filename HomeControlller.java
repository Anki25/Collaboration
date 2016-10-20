package com.niit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.niit.dao.UserDAO;
import com.niit.model.User;

@Controller
public class HomeControlller {
	
	@Autowired
	User u;
	
	@Autowired
	UserDAO userDAO;
	
	
	@RequestMapping("/")
	public ModelAndView LandingPage() {
		System.out.println("In Home page");
	
		return new ModelAndView("index");

	}
	
	@RequestMapping("/saving")
	public ModelAndView NextPage() {
		System.out.println("In Next page");
		u.setContact(12622997);
		u.setEmail("another@yahoo.com");
		u.setPassword("nnnn");
		u.setRole("STUDENT");
		u.setUser_name("another");
		
		
		userDAO.save(u);
	
		return new ModelAndView("next");

	}


}
