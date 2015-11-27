"use strict";
//= ../../bower_components/oauth-js/dist/oauth.js

//= ../../bower_components/angular/angular.js

 var user = [];
 (function(){
   var app = angular.module("twitter_user_list",[]);
   app.controller("userOptions",function($scope){
     $scope.users = user;
     this.myclick = function(){
        OAuth.initialize('rMEzxovyFqog3wQmXNu9DS69ICs');
        OAuth.popup('twitter').done(function(result){
          result.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name='+document.getElementById("account_name").value).done(function(data) {
              user[user.length] = {
                name: data.name,
                followers: data.followers_count,
                following: data.friends_count,
                status: data.description
              };
              document.getElementById("account_name").value = "";
              document.getElementById("tweet").innerHTML = data[0].text;
              console.log(data);
              $scope.users = user;
              $scope.$apply();
            })
        });
     }
   });

   user[user.length] = {
     name: "Вася",
     followers: "5",
     following: "4",
     status: "Прив"
   };
 })();

 function myFunction(){
   document.getElementById("followers").innerHTML = " ";
   document.getElementById("following").innerHTML = " ";
   document.getElementById("status").innerHTML = " ";
   OAuth.initialize('rMEzxovyFqog3wQmXNu9DS69ICs');
   //OAuth.create("twitter");
   OAuth.popup('twitter').done(function(result){
      result.get('https://api.twitter.com/1.1/statuses/home_timeline.json').done(function(data) {
        document.getElementById("followers").innerHTML = data.text;
        document.getElementById("following").innerHTML = data.friends_count;
        document.getElementById("status").innerHTML = data.description;
      })
  });

}
