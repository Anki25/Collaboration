/**
 * 
 */
'use strict';

app.factory('BlogService',['$http','$q','$rootScope',function($http,$q,$rootScope){
	
	console.log("BlogService..")
	
	var BASE_URL='http://localhost:8081/ColBackEnd'
		return{
		fetchAllBlogs:function(){
			return $http.get(BASE_URL+'/blogs')
			.then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while fetching BlogDetails');
						return $q.reject(errResponse);
					}				
	);
},
createBlog:function(blog){
	return $http.post(BASE_URL+'/blog',blog)
	.then(
			function(response){
				return response.data;
			},
			function(errResponse){
				console.error('Error while creating Blog');
				return $q.reject(errResponse);
			}				
);
	
},
updateBlog:function(blog,id){
	return $http.put(BASE_URL+'/blog/'+id,blog)
	.then(
			function(response){
				return response.data;
			},
			function(errResponse){
				console.error('Error while updating Blog');
				return $q.reject(errResponse);
			}				
);
},
deleteBlog:function(id){
	return $http.delete(BASE_URL+'/blog/'+id)
	.then(
			function(response){
				return response.data;
			},
			function(errResponse){
				console.error('Error while deleting Blog');
				return $q.reject(errResponse);
			}				
);
},
getBlog: function(id){
	return $http.get(BASE_URL+'/blog/'+id)
	.then(
			function(response){
				$rootScope.selectedBlog=response.data
				return response.data;
			},
			function(errResponse){
				console.error('Error while deleting Blog');
				return $q.reject(errResponse);
			}				
);
},
}
	
}

]
);