'use strict';

app.factory('Post', function($resource){
    return $resource('https://bottombitches.firebaseio.com/posts/:id.json');
})