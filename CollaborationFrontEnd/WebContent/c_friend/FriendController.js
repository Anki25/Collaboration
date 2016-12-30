/**
 * 
 */
'use strict'

app.controller('FriendController',['$scope','FriendService','$location','$rootScope',
                                   function($http,$q,$rootScope,FriendService){
	console.log("FriendController....")
	var selfs=this;
	selfs.friend={ // initialization
			id : '',
			friend_id : '',
			friend_name:'',
			user_id : '',
			request_status : '',
			isOnline : '',
			errorCode:'',
			errorMessage:''
		};
	selfs.friends=[];
	
	selfs.user = {
			id : '',
			name : '',
			password : '',
			mobile : '',
			address : '',
			email : '',
			role : '',
			errorMessage : ''
		};
		selfs.users = [];

/*SENDING FRIEND REQUEST*/		
selfs.sendFriendRequest=sendFriendRequest

function sendFriendRequest(friendID)
{
console.log("sendFriendRequest:" + friendID)
FriendService.sendFriendRequest(friendID)
.then(
function(d){
	selfs.friend=d;
	alert("Friend request sent")
},function(errResponse){
	console.error('Error while sending Friend requests');
	
});
};

/*GET MY FRIENDS LIST*/
selfs.getMyFriends=function(){
	console.log("getting My Friends")
	FriendService.getMyFriends()
	.then(
	function(d){
		selfs.friends=d;
		console.log("Got the friends list")
	},function(errResponse){
		console.error('Error while fetching Friend');
		
	});
	};
	
selfs.updateFriendRequest=function(friend,id){
	FriendService.updateFriendRequest(friend,id)
	.then(
	selfs.fetchAllFriends,
	function(errResponse){
		console.error('Error while updating Friend');
	}
	);
};

selfs.deleteFriend=function(id){
	FriendService.deleteFriend(id)
	.then(
	selfs.fetchAllFriends,
	function(errResponse){
		console.error('Error while deleting Friend');
	}
	);
};

selfs.fetchAllUsers=function(){
	FriendService.fetchAllUsers().then(function(d) {
		console.log('Calling users from friend controller')
		selfs.users = d;
	}, function(errResponse) {
		console.error('Error while fetching Users');
	});
};

selfs.fetchAllUsers();
selfs.getMyFriends();

	/* END OF ALL */

} ]);