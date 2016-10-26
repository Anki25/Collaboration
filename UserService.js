/**
 * 
 */
'use strict';

app.factory('UserService',['$http','$q','$rootScope',function($http,$q,$rootScope){
	
	console.log("UserService..")
	
	var BASE_URL='http://localhost:2222/ColBackEnd'
		return{
		fetchAllUsers:function(){
			return $http.get(BASE_URL+'/users')
			.then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while fetching UserDetails');
						return $q.reject(errResponse);
					}				
	);
},
createUser:function(user){
	return $http.post(BASE_URL+'/user',user)
	.then(
			function(response){
				return response.data;
			},
			function(errResponse){
				console.error('Error while creating User');
				return $q.reject(errResponse);
			}				
);
	
},
updateUser:function(user,id){
	return $http.put(BASE_URL+'/user/'+id,user)
	.then(
			function(response){
				return response.data;
			},
			function(errResponse){
				console.error('Error while updating User');
				return $q.reject(errResponse);
			}				
);
},
deleteUser:function(id){
	return $http.delete(BASE_URL+'/user/'+id)
	.then(
			function(response){
				return response.data;
			},
			function(errResponse){
				console.error('Error while deleting User');
				return $q.reject(errResponse);
			}				
);
},
authenticate:function(user){
	return $http.post(BASE_URL+'/user/authenticate/',user)
	.then(
			function(response){
				if(response.data.errorMessage!="")
					{
					$rootScope.currentUser={
							name:response.data.name,
							id:response.data.id,
							role:response.data.role
				};
					}
				return response.data;
			}
			);
},
}
}
]
);