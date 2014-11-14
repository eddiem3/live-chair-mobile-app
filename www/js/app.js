(function(){
    'use strict';
    var module = angular.module('app', ['onsen', 'ui.bootstrap.datetimepicker']);
    
    module.controller('AppController', function($scope, $data) {
	$scope.showForm = false; //show form for adding a review 



	$scope.doSomething = function() {
	    setTimeout(function() {
		alert('tappaed');
	    }, 100);
	};
	
	$scope.showReviewForm = function() {
	    $scope.showForm = !$scope.showForm;
	    
	};

	
	$scope.getTimes=function(n){
	    return new Array(parseInt(n));
	};  
  });

  module.controller('DetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;
      //alert($scope.item.fname)

      $scope.showAppointments = function() {
	  $scope.ons.navigator.pushPage('appointment.html');	  
      };

  });

		    

  module.controller('MasterController', function($scope, $data) {
    $scope.items = $data.items;  
    
    $scope.showDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      $scope.ons.navigator.pushPage('detail.html', {title : selectedItem.title});
    };
  });

  module.controller('ReviewController', function($scope, $data) {
      $scope.barber = $data.selectedItem;
      $scope.review = {};

      $scope.addReview = function() {
	  $scope.barber.reviews.push($scope.review);
  	  $scope.review = {};
      };     
  });

    module.controller('AppointmentController', function($scope, $data, $filter) {
	$scope.barber = $data.selectedItem; //curent barber
	//$scope.options = []; //options for appointments
	//$scope.day = "";
	$scope.cutz = $scope.barber.cutz
	$scope.displayCutz = false;
	$scope.onTimeSet = function(currentDate, previousDate) {
	    
	    
	    $scope.options = [];


	    //console.log(currentDate);
	    //console.log(previousDate);

	    //alert(typeof(moment(date).format("YY-MM-DD")));
	    var day = moment(currentDate).format("YY-MM-DD");
	    
	    //Loop through each available appointment
	    //If the day selected on the calendar is a day in the list of appointments
	    //add that day to the options array
	    for(var i in $scope.barber.slots)
	    {
		//alert($scope.barber.available[i].date);
		if ($scope.barber.slots[i].date === day)
		{
		    $scope.options.push($scope.barber.slots[i]);
		}
	    }
	};

    

	$scope.showCutz = function() {
	    $scope.displayCutz = true;
	};

	$scope.checkFree = function(slot) {
	    if(slot.available === true)
	    {
		console.log(slot);
		return "btn btn-primary";
	    } else {
		console.log(slot);
		return "btn btn-danger";
	    }
	}
    });

  module.factory('$data', function() {
      var data = {};
      
      data.items = [
          { 
              fname: 'John',
              lname: 'Boe',
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
		 }],

	      slots: [
		  {date: "14-11-13", time: "10:00pm", available: true},
		  {date: "14-11-13", time: "11:00pm", available: true},
		  {date: "14-11-13", time: "12:00n", available: false},
		  {date: "14-11-13", time: "1:00pm", available: true},
		  {date: "14-11-13", time: "2:00pm", available:false}
	      ],	   

	      cutz: [
		  {name:"Tap Up", price:"5000"},
		  {name:"Normal Cut", price:"1500"},
		  {name:"Fade", price:"1000"},
		  {name:"Eye Brows", price:"500"}
	      ],
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
              lname: 'Foe',
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

