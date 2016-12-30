/**
 * 
 */
'use strict';

app.controller('JobController', [
		'$scope',
		'JobService','UserService',
		'$location',
		'$rootScope',
		function($scope, JobService, $location, $rootScope) {
			console.log("JobController...")
			var self = this; // self is alias name instead directly use this
			self.job = { // initialization
				job_id : '',
				user_id:'',
				job_title : '',
				creation_date : '',
				expiry_date:'',
				status : '',
				details : '',
				company:'',
				errorCode:'',
				errorMessage:''
			};
			self.jobs = [];
			
			self.jobapp={
					id:'',
					job_id : '',
					user_id:'',
					status:'',
					errorCode:'',
					errorMessage:''
				};
			self.jobsapp = [];
			
			
			/*APPLY FOR JOB*/
			
			self.applyForJob=applyForJob
			
			function applyForJob(jobID){
				console.log("calling method applyForJob");
				 {
			JobService.applyForJob(jobID)
			.then(
					function(d){
						self.job=d;
						alert("You have successfully applied for job")
					},
					function(errResponse){
						console.error('Error while applying')
					});}
		}		
			/*GET SELECTED JOB DETAILS*/

			self.getSelectedJob = getJob

			function getJob(job_id) {
				console.log("getting job! " + job_id)
				JobService.getJob(job_id).then(function(d) {
					self.job = d;
					var dt=self.creation_date;
					var dat=dt.toDateString();
					console.log('date from backend is: ' + dt);
					console.log('date after conversion is: ' + dat);
				}, function(errResponse) {
					console.error('Error while fetching jobs');
				});
			};

			/* GET LIST OF ALL JOBS */

			self.fetchAllJobs = function() {
				console.log("getting list of jobs")
				JobService.fetchAllJobs()
				.then(function(d) { 
					self.jobs = d;
				}, function(errResponse) {
					console.error('Error while fetching Jobs');
				});
			};
			self.fetchAllJobs();

			/* GET LIST OF ALL JOBS APPLICATION */

			self.fetchAllJobsApp = function() {
				console.log("getting list of job applications")
				JobService.fetchAllJobsApp()
				.then(function(d) { 
					self.jobsapp = d;
				}, function(errResponse) {
					console.error('Error while fetching Job applications');
				});
			};
			self.fetchAllJobsApp();

			
			/* CREATE A JOB */

			self.createJob = function(job) {
				console.log('submit a new job',self.job);
				JobService.createJob(job)
				.then(function(d){
				   self.job=d;	
				},
				function(errResponse) {
							console.error('Error while creating Jobs');
						});
			};

			/* UPDATE A JOB */

			self.updateJob = function(job) {
				JobService.updateJob(job).then(self.fetchAllJobs,
						function(errResponse) {
							console.error('Error while updating Jobs');
						});
			};	

			
			/* GET MY APPLIED JOBS*/
			
			self.getMyAppliedJobs = function(){
				console.log('calling the method getMyAppliedJobs');
				JobService.getMyAppliedJobs().then(function(d){
					self.jobs=d;
					/*$location.path('list_job'); */
				},function(errResponse) {
					console.error('Error while applying Job');
				});
	};
	
	/* REJECT JOB APPLICATION */
	
	self.rejectJobApplication = function(userID){
		console.log('calling rejectJobApplication');
		JobService.rejectJobApplication().then(function(d){
			self.jobs=d;
		},function(errResponse) {
			console.error('Error while applying Job');
		});
};
		
/* SELECT A CANDIDATE */

self.selectUser = function(userID) {
	console.log('Calling selectUser method:',userID);
	JobService.selectUser(userID,selectedJobID)
	.then(function(d){
		self.job=d;
		alert('Application status changed to selected')
	},function(errResponse) {
		console.error('Error while selecting candidate');
	});
};

self.submit = function() {
	//self.job.user_id = $rootScope.currentUser.user_id;
		console.log('Saving New Job', self.job);
		
		self.createJob(self.job);
	self.reset();
};


self.reset=function(){
	console.log('resetting the job',self.job);
	self.job={
			job_id : '',
			user_id:'',
			job_title : '',
			creation_date : '',
			expiry_date:'',
			status : '',
			details : '',
			company:'',
			errorCode:'',
			errorMessage:''
		};
     $scope.myForm.$setPristine(); //reset Form


			/* END OF ALL */
};
	
		} ]);