/**
 * 
 */
'use strict';

app.controller('BlogController', [ '$scope', 'BlogService', '$location',
		'$rootScope', function($scope, BlogService, $location, $rootScope) {
			console.log("BlogController...")
			var self = this; //self is alias name instead directly use this
			self.blog = {  //initialization
				blog_id : '',
				blog_title : '',
				creation_date : '',
				status : '',
				description : '',
				user_name : '',
};
			self.blogs=[];
			
			self.getSelectedBlog=getBlog
			
			function getBlog(id){
				console.log("getting blog! " + blog_id)
				BlogService.getBlog(id)
				.then(
						function(d){
							self.blog=d;
							$location.path('/view_blog');
						},
						function(errResponse){
							console.error('Error while fetching blogs');
						}
				);
			};
			
self.fetchAllBlogs=function(){
	
BlogService.fetchAllBlogs()
	.then(
			function(d){  //these methods are called call back methods
				self.blogs=d;
			},
			function(errResponse){
				console.error('Error while fetching Blogs');
			}
);
};
/*self.createBlog=function(blog){
	BlogService.createBlog(blog)
	.then(
			self.fetchAllBlogs,
			function(errResponse){
				console.error('Error while creating Blogs');
			}
);
};

self.updateBlog=function(blog){
	BlogService.updateBlog(blog)
	.then(
			self.fetchAllBlogs,
			function(errResponse){
				console.error('Error while updating Blogs');
			}
);
};

self.deleteBlog=function(id){
	BlogService.deleteBlog(id)
	.then(
			self.fetchAllBlogs,
			function(errResponse){
				console.error('Error while deleting Blogs');
			}
);
};
*/
self.fetchAllBlogs();

/*self.submit=function(){
	if(self.blog.blog_id==null){
		console.log('Saving New Blog',self.blog);
		self.blog.user_name=$rootScope.currentUser.id
		self.createblog(self.blog);
	}
	self.reset();
};
*/}
]
);