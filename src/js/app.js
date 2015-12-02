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
                name: data[0].user.name,
                followers: data[0].user.followers_count,
                following: data[0].user.friends_count,
                status: data[0].user.description
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
     status: "Привет брат"
   };

   app.controller("PanelController",function($scope){
     $scope.users = user;
     $scope.tab = 1;
     $scope.selectTab = function(setTab){
       $scope.tab = setTab;
     }
     $scope.isSelected = function(checkTab){
       return $scope.tab = checkTab;
     }
   });
 })();
