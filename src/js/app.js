"use strict";
//= ../../bower_components/oauth-js/dist/oauth.js

//= ../../bower_components/angular/angular.js

 function myFunction(){
   document.getElementById("followers").innerHTML = " ";
   document.getElementById("following").innerHTML = " ";
   document.getElementById("status").innerHTML = " ";
   OAuth.initialize('rMEzxovyFqog3wQmXNu9DS69ICs');
   //OAuth.create("twitter");
   OAuth.popup('twitter').done(function(result){
      result.get('https://api.twitter.com/1.1/users/show.json?screen_name='+document.getElementById("account_name").value).done(function(data) {
        document.getElementById("followers").innerHTML = data.followers_count;
        document.getElementById("following").innerHTML = data.friends_count;
        document.getElementById("status").innerHTML = data.description;
      })
  });

 }
