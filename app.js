var app=angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	
	.when('/',{
		templateUrl:'c_home/home.html',
		controller:'HomeController'
	})
	
	.when('/manageUser',{
		templateUrl:'c_admin/manage_users.html',
		controller:'AdminController'
	})
	
	.when('/about',{
		templateUrl:'c_about/AboutUs.html',
	})
	
	.when('/contact',{
		templateUrl:'c_about/ContactUs.html',
	})

	
	/*
	 * EVENT
	 */
	
	.when('/event',{
		templateUrl:'c_event/event.html',
		controller:'EventController'
	})
		
	.when('/login',{
		templateUrl:'c_user/login.html',
		controller:'UserController'
	})
	
	.when('/register',{
		templateUrl:'c_user/register.html',
		
	})
	
	/**
	 * BLOG
	**/
	
	.when('/my_blog',{
		templateUrl:'c_blog/my_blog.html',
		controller:'BlogController'
	})
	
	.when('/create_blog',{
		templateUrl:'c_blog/create_blog.html',
		controller:'BlogController'
	})
	
	.when('/list_blog',{
		templateUrl:'c_blog/list_blog.html',
		controller:'BlogController'
	})
	
	.when('/view_blog',{
		templateUrl:'c_blog/view_blog.html',
		controller:'BlogController'
	})
	
	/**
	 * FRIEND RELATED MAPPING
	 **/
	
	.when('/add_friend',{
		templateUrl:'c_friend/add_friend.html',
		controller:'FriendController'
	})
	
	.when('/search_friend',{
		templateUrl:'c_friend/search_friend.html',
		controller:'FriendController'
	})
	
	.when('/view_friend',{
		templateUrl:'c_friend/view_friend.html',
		controller:'FriendController'
	})
	
	/**
	 * FORUM RELATED MAPPING 
	 **/
	
	.when('/create_forum',{
		templateUrl:'c_forum/create_forum.html',
		controller:'ForumController'
	})
	
	.when('/list_forum',{
		templateUrl:'c_forum/list_forum.html',
		controller:'ForumController'
	})
	
	.when('/view_forum',{
		templateUrl:'c_forum/view_forum.html',
		controller:'ForumController'
	})
	
	.when('/my_forum',{
		templateUrl:'c_forum/my_forum.html',
		controller:'ForumController'
	})
	
	/**
	 * JOB RELATED MAPPING
	 **/
	
	.when('/create_job',{
		templateUrl:'c_job/create_job.html',
		controller:'JobController'
	})
	
	.when('/list_job',{
		templateUrl:'c_job/list_job.html',
		controller:'JobController'
	})
	
	.when('/view_job',{
		templateUrl:'c_job/view_job.html',
		controller:'JobController'
	})
	
	.when('/my_job',{
		templateUrl:'c_job/my_job.html',
		controller:'JobController'
	})
	
	.otherwise({redirectTo: '/'});

});