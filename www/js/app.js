(function(){
    'use strict';
    var module = angular.module('app', ['onsen']);
    
    module.controller('AppController', function($scope, $data) {
	$scope.doSomething = function() {
	    setTimeout(function() {
		alert('tappaed');
	    }, 100);
	};
	
	

	
	$scope.getTimes=function(n){
	    return new Array(parseInt(n));
	};  

  });

  module.controller('DetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;
  });

  module.controller('MasterController', function($scope, $data) {
    $scope.items = $data.items;  
    
    $scope.showDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      $scope.ons.navigator.pushPage('detail.html', {title : selectedItem.title});
    };
  });

  module.factory('$data', function() {
      var data = {};
      
      data.items = [
          { 
              fname: 'John',
              lname: 'Doe',
	      avatar: '../img/barber1.jpg',
              shop_name: 'Doe Cutz',
	      address: '123 Street Ave.',
	      city: 'Orangeburg',
	      state:'SC',
	      zip: '29115',
	      rating: '3',

	      reviews: [{
		  stars: 1,
		  body: "This gem is WAY too expensive for its rarity value.",
		  author: "turtleguyy@example.org",
		  createdOn: 1397490980837
	      },
		 {
		     stars: 1,
		     body: "BBW: High Shine != High Quality.",
		     author: "LouisW407@example.org",
		     createdOn: 1397490980837
		 }, {
		     stars: 1,
		     body: "Don't waste your rubles!",
		     author: "nat@example.org",
		     createdOn: 1397490980837
		 }]	      
          },

          { 
	      fname: 'John',
              lname: 'Doe',
	      avatar: '../img/barber2.jpg',
              shop_name: 'Family Barber',
	      address: '123 Street Ave.',
	      city: 'Seattle',
	      state:'WA',
	      zip: '98052',
	      rating: '5',

	        reviews: [{
		  stars: 1,
		  body: "Buddy can't cut bo.",
		  author: "turtleguyy@example.org",
		  createdOn: 1397490980837
	      },
		 {
		     stars: 5,
		     body: "Real talk. He da truth.",
		     author: "LouisW407@example.org",
		     createdOn: 1397490980837
		 }, {
		     stars: 2,
		     body: "Don't waste your money bruh!",
		     author: "nat@example.org",
		     createdOn: 1397490980837
		 }]	      

          },

          { 
	      fname: 'John',
              lname: 'Doe',
	      avatar: '../img/barber3.jpg',
              shop_name: 'True',
	      address: '123 Street Ave.',
	      city: 'Cleveland',
	      state:'OH',
	      zip: '44106',
	      rating: '2',

	        reviews: [{
		  stars: 1,
		  body: "This gem is WAY too expensive for its rarity value.",
		  author: "turtleguyy@example.org",
		  createdOn: 1397490980837
	      },
		 {
		     stars: 1,
		     body: "BBW: High Shine != High Quality.",
		     author: "LouisW407@example.org",
		     createdOn: 1397490980837
		 }, {
		     stars: 1,
		     body: "Don't waste your rubles!",
		     author: "nat@example.org",
		     createdOn: 1397490980837
		 }]	      
          }
      ]; 
      
      return data;
  });
})();

