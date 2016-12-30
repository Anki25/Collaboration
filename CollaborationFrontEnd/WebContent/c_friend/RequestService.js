/**
 * 
 */
'use strict';

app.factory('RequestService',['$http','$q','$rootScope',function($http,$q,$rootScope){
	
	console.log("RequestService..")
	
	var BASE_URL='http://localhost:6789/CollaborationBackEnd'
		return{
		
	
fetchAllUsers:function(){
			return $http.get(BASE_URL+'/users')
			.then(
					function(response){
						console.log('Calling friends in friend service ')
						return response.data;
					},
					function(errResponse){
						console.error('Error while fetching UserDetails');
						return $q.reject(errResponse);
					}				
	);
},

/*SEND FRIEND REQUEST*/
sendFriendRequest:function(friendID){
	return $http.post(BASE_URL+'/addFriend/'+friendID)
	.then(
			function(response){
				return response.data;
			},
			function(errResponse){
				console.error('Error while sending Friend request');
				return $q.reject(errResponse);
			}				
);
},


/* END OF ALL */
	}
	}
	]
	);