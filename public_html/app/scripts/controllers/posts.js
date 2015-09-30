'use strict';

app.controller('PostsCtrl', function ($scope, Post) {
    $scope.posts = Post.all;
    $scope.post = {url: 'http://', title: ''};

    $scope.existingPosts = [];
    $scope.getAllPosts = function ()
    {
        $http.get('https://bottombitches.firebaseio.com/posts/')
        .success(function(data, status, headers)
        {
            $scope.existingPosts = data;
            console.log($scope.existingPosts);
        })
        .error(function(data, status, headers, config)
        {
            console.log("There was an error loading the posts")
        });

    };

    $scope.submitPost = function ()
    {
        Post.create($scope.post).then(function() {
            $scope.posts[ref.name] = $scope.post;
            $scope.post = {url: 'http://', title: ''};
        });
    };

    $scope.deletePost = function(postId)
    {
        Post.delete(post);
    };

});

