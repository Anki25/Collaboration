/**
 * 
 */
'use strict';

app.controller('UserController', [
		'$scope',
		'UserService',
		'$location',
		'$rootScope',
		function($scope, UserService, $location, $rootScope) {
			console.log("UserController...")
			var self = this;
			self.user = {
				user_id : '',
				user_name : '',
				password : '',
				cpassword:'',
				contact : '',
				address : '',
				email : '',
				role : '',
				image:'',
				isOnline:'',
				errorMessage : '',
				errorCode:''
			};
			self.users = [];
			
			self.friend={ // initialization
					id : '',
					friend_id : '',
					friend_name:'',
					user_id : '',
					request_status : '',
					isOnline : '',
					errorCode:'',
					errorMessage:''
				};
			self.friends=[];

/* FETCH ALL USERS LIST */
			self.fetchAllUsers = function() {
				UserService.fetchAllUsers().then(function(d) {
					self.users = d;
				}, function(errResponse) {
					console.error('Error while fetching Users');
				});
			};
			self.fetchAllUsers();

/* CREATE USER */
			self.createUser = function(user) {
				//var img=JSON.stringify(image);
				UserService.createUser(user)
				.then(self.fetchAllUsers,
						function(errResponse) {
							console.error('Error while creating User...');
						});
			};

/* UPDATE USER */
			self.updateUser = function(user, id) {
				UserService.updateUser(user, id)
				.then(self.fetchAllUsers,
						function(errResponse) {
							console.error('Error while updating User...');
						});
			};

/* AUTHENTICATION OF USER */
			self.authenticate = function(user) {
				UserService.authenticate(user)
				.then(function(d) {
					self.user = d;
					if(self.user.email=="admin@gmail.com"&&self.user.password=="admin"){
						$location.path('/admin')
					}
					else if ($rootScope.currentUser) {
						$location.path('/');
					}
				}, function(errResponse) {
					console.error('Error while authenticate User...');
				});
			};

/* DELETE USER */
			self.deleteUser = function(id) {
				UserService.deleteUser(id)
				.then(self.fetchAllUsers,
						function(errResponse) {
							console.error('Error while deleting User');
						});
			};

			self.login = function() {
				{
					console.log('login validation????', self.user);
					self.authenticate(self.user);
				}
			};
			
			/*self.edit = function(id) {
				console.log('id to be edited', id);
				for (var i = 0; i < self.users.length; i++) {
					if (self.users[i].id == id) {
						self.user = angular.copy(self.users[i]);
						break;
					}
				}
			};
			
			self.remove = function(id) {
				console.log('id to be deleted', id);
				if (self.user.id == id) {
					self.reset();
				}
				self.deleteUser(id);
			}; */
			
			self.logout=function(){
				console.log('Logging out');
				UserService.logout()
				.then(function() {
					if (self.errorCode==200) {
						console.log("You have successfully logged out!");
						alert("You have successfully logged out!");
					}},
						/*$rootScope.currentUser={}
						$cookieStore.remove('currentUser');*/
						
						/*$location.path("/")*/
						function(errResponse) {
						
						
						
						
						
						
						
						
					console.error('Error while logging out');
				})
			};
				
				self.submit = function() {
					//console.log('Saving image', image);
						console.log('Saving New user', self.user);
						self.createUser(self.user);
					
				self.reset();
				};
				
				
				self.reset=function(){
					console.log('reset user',self.user);
					self.user={
							user_id : '',
							user_name : '',
							password : '',
							cpassword:'',
							contact : '',
							address : '',
							email : '',
							role : '',
							isOnline:'',
							image:'',
							errorCode:'',
							errorMessage : ''
						};
				};


	
			/* END OF ALL */
	
		} ]);