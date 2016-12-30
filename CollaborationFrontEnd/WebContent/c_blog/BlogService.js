/**
 * 
 */
'use strict';

app.factory('BlogService',['$http','$q','$rootScope',function($http,$q,$rootScope){
	
	console.log("BlogService..")
	
	var BASE_URL='http://localhost:6789/CollaborationBackEnd'
		return{
		
/* GET LIST OF ALL BLOGS */
		
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

/* GET LIST OF ALL BLOGS COMMENTS AS PER ID*/

fetchAllBlogComments:function(id){
	return $http.get(BASE_URL+'/blogscommentlistperblog/'+id)
	.then(
			function(response){
				return response.data;
			},
			function(errResponse){
				console.error('Error while fetching BlogComments List');
				return $q.reject(errResponse);
			}				
);
},

/* GET LIST OF ALL BLOGS COMMENTS */

fetchAllBlogComment:function(){
	return $http.get(BASE_URL+'/blogscommentlist/')
	.then(
			function(response){
				return response.data;
			},
			function(errResponse){
				console.error('Error while fetching BlogComments List');
				return $q.reject(errResponse);
			}				
);
},

/* CREATE A BLOG */

createBlog:function(blog){
	return $http.post(BASE_URL+'/blog/',blog)
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

/* CREATE A BLOG COMMENT*/

createComment:function(id,blogcomment){
	return $http.post(BASE_URL+'/blogcomment/'+id,blogcomment)
	.then(
			function(response){
				return response.data;
			},
			function(errResponse){
				console.error('Error while creating Blog Comment');
				return $q.reject(errResponse);
			}				
);
},


/* UPDATE A BLOG */

updateBlog:function(blog,id){
	return $http.put(BASE_URL+'/blog/'+id,blog)  //blog is json object
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

/* DELETE A BLOG */

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

/* GET SELECTED BLOG DETAILS */

getBlog: function(id){
	return $http.get(BASE_URL+'/blog/'+id)
	.then(
			function(response){
				console.log("getting blog in service! " + id)
				$rootScope.selectedBlog=response.data
				return response.data;
			},
			function(errResponse){
				console.error('Error while deleting Blog');
				return $q.reject(errResponse);
			}				
);
},
};
	
}

]
);