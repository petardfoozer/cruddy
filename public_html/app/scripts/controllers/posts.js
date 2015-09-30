'use strict';

app.controller('PostsCtrl', function ($scope, Post) {
    $scope.posts = Post.all;
    $scope.post = {url: 'http://', title: ''};

    $scope.submitPost = function ()
    {
        Post.create($scope.post.then(function() {
            $scope.posts[ref.name] = $scope.post;
            $scope.post = {url: 'http://', title: ''};
        });
    };

    $scope.deletePost = function(postId)
    {
        Post.delete(post);
    };

});

