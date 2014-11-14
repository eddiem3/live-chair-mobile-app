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
	$scope.options = []; //options for appointments
	//$scope.day = "";
	$scope.cutz = $scope.barber.cutz
	$scope.displayCutz = false;
	$scope.alert = false;
	$scope.confirm = false;
	$scope.onTimeSet = function(currentDate, previousDate) {
	    

	    
	    //$scope.options = [];


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
	};

	$scope.showAlert = function() {
	    $scope.alert = !$scope.alert;
	}

	$scope.showConfirm = function() {
	    $scope.confirm = !$scope.confirm;
	    $scope.alert = !$scope.alert;
	}

	$scope.closeConfirm = function() {
	    $scope.confirm = false;
	}

     });

   module.factory('$data', function() {

       var data = {};
       data.items = [
	   { 
	       fname: 'Kyle',
	       lname: 'Massen',

	       thumb: 'http://api.randomuser.me/portraits/thumb/men/40.jpg',
	       avatar:'http://api.randomuser.me/portraits/men/40.jpg',
	       shop_name: 'Rudy\'s Barbership',
	       address: '16095 Cleveland St',
	       city: 'Redmond, WA 98052',
	       state:'WA',
	       zip: '98052',
	       rating: '5',
	       reviews: [{
		   stars: 5,
		   body: "Kyle does a great consistent job each time at a much cheaper price than the stylists",
		   author: "turtleguyy@gmail.com",
		   createdOn: 1397490980837
	       },
			 {
			     stars: 5,
			     body: "I am more than happy with my new hairstyle from Kyle, she did an amzing job.",
			     author: "LouisW407@gmail.com",
			     createdOn: 1397490980837
			 }, {
			     stars: 5,
			     body: "This is why I make the drive all the way from OLYMPIA because I know Kyle will always take care of me",
			     author: "nat@gmail.com",
			     createdOn: 1397490980837
			 }],
	       slots: [

		   {date: "14-11-14", time: "11:00a", available:false},
		   {date: "14-11-14", time: "12:00n", available:true},
		   {date: "14-11-14", time: "1:00pm", available:false},
		   {date: "14-11-14", time: "2:00pm", available:false},
		   {date: "14-11-14", time: "3:00pm", available:true},
		   {date: "14-11-14", time: "4:00pm", available:true}
	       ],

	       cutz: [
		   {name:"Tape Up", price:"5000"},
		   {name:"Normal Cut", price:"1500"},
		   {name:"Fade", price:"1000"},
		   {name:"Eye Brows", price:"500"}
	       ],


	   },


	   { 
	       fname: 'Kyle',
	       lname: 'Fields',

	       thumb: 'http://api.randomuser.me/portraits/thumb/men/70.jpg',
	       avatar:'http://api.randomuser.me/portraits/men/70.jpg',
	       shop_name: 'Rudy\'s Barbership',
	       address: '16095 Cleveland St',
	       city: 'Redmond, WA 98052',
	       state:'WA',
	       zip: '98052',
	       rating: '5',
	      reviews: [{
		  stars: 5,
		  body: "Kyle does a great consistent job each time at a much cheaper price than the stylists",
		  author: "turtleguyy@gmail.com",
		  createdOn: 1397490980837
	      },
			{
			    stars: 5,
			    body: "I am more than happy with my new hairstyle from Kyle, she did an amzing job.",
			    author: "LouisW407@gmail.com",
			    createdOn: 1397490980837
			}, {
			    stars: 5,
			    body: "This is why I make the drive all the way from OLYMPIA because I know Kyle will always take care of me",
			    author: "nat@gmail.com",
			    createdOn: 1397490980837
			}],

	      slots: [
		  {date: "14-11-14", time: "10:00pm", available: true},
		  {date: "14-11-14", time: "11:00pm", available: true},
		  {date: "14-11-14", time: "12:00n", available: false},
		  {date: "14-11-14", time: "1:00pm", available: true},
		  {date: "14-11-14", time: "2:00pm", available:false}
	      ]   
          },

          { 
	      fname: 'Mike',
              lname: 'Brown',
	      thumb: 'http://api.randomuser.me/portraits/thumb/men/52.jpg',
              avatar:'http://api.randomuser.me/portraits/men/52.jpg',
              shop_name: 'Hill\'s Barbershop',
	      address: '8147 161st Ave NE',
	      city: 'Redmond',
	      state:'WA',
	      zip: '98052',
	      rating: '4',

	      reviews: [{
		  stars: 4,
		  body: "Very comfortable environment for guys.",
		  author: "ananda@gmail.com",
		  createdOn: 1397490980837
	      },
			{
			    stars: 4,
			    body: "Real talk. He da truth.",
			    author: "LouisW407@gmail.com",
			    createdOn: 1397490980837
			}, {
			    stars: 4,
			    body: "Moved away from Redmond but still make the drive to see Young every 4 weeks. I can't say enough nice things about his work. Also, just a great all around nice guy who I look forward to chatting with every 4 weeks. 5 stars! You will not be dissapointed.",
			    author: "nat@gmail.com",
			    createdOn: 1397490980837
			}],

	      	      slots: [
		  {date: "14-11-14", time: "11:00am", available: true},
		  {date: "14-11-14", time: "12:00N", available: false},
		  {date: "14-11-14", time: "1:00am", available: true},
		  {date: "14-11-14", time: "2:00am", available:false}
	      ]   

          },


	  { 
              fname: 'Kyle',
              lname: 'Doe',
	      
	      thumb: 'http://api.randomuser.me/portraits/thumb/men/20.jpg',
              avatar:'http://api.randomuser.me/portraits/men/20.jpg',
              shop_name: 'Rudy\'s Barbership',
	      address: '16095 Cleveland St',
	      city: 'Redmond, WA 98052',
	      state:'WA',
	      zip: '98052',
	      rating: '5',
	      reviews: [{
		  stars: 5,
		  body: "Kyle does a great consistent job each time at a much cheaper price than the stylists",
		  author: "turtleguyy@gmail.com",
		  createdOn: 1397490980837
	      },
			{
			    stars: 5,
			    body: "I am more than happy with my new hairstyle from Kyle, she did an amzing job.",
			    author: "LouisW407@gmail.com",
			    createdOn: 1397490980837
			}, {
			    stars: 5,
			    body: "This is why I make the drive all the way from OLYMPIA because I know Kyle will always take care of me",
			    author: "nat@gmail.com",
			    createdOn: 1397490980837
			}]      
          },

	  { 
              fname: 'Kyle',
              lname: 'Mack',
	      
	      thumb: 'http://api.randomuser.me/portraits/thumb/women/35.jpg',
              avatar:'http://api.randomuser.me/portraits/women/35.jpg',
              shop_name: 'Rudy\'s Barbership',
	      address: '16095 Cleveland St',
	      city: 'Redmond, WA 98052',
	      state:'WA',
	      zip: '98052',
	      rating: '5',
	      reviews: [{
		  stars: 5,
		  body: "Kyle does a great consistent job each time at a much cheaper price than the stylists",
		  author: "turtleguyy@gmail.com",
		  createdOn: 1397490980837
	      },
			{
			    stars: 5,
			    body: "I am more than happy with my new hairstyle from Kyle, she did an amzing job.",
			    author: "LouisW407@gmail.com",
			    createdOn: 1397490980837
			}, {
			    stars: 5,
			    body: "This is why I make the drive all the way from OLYMPIA because I know Kyle will always take care of me",
			    author: "nat@gmail.com",
			    createdOn: 1397490980837
			}]      
          },

	  { 
              fname: 'Eiden',
              lname: 'Church',
	      
	      thumb: 'http://api.randomuser.me/portraits/thumb/men/15.jpg',
              avatar:'http://api.randomuser.me/portraits/men/15.jpg',
              shop_name: 'Rudy\'s Barbership',
	      address: '16095 Cleveland St',
	      city: 'Redmond, WA 98052',
	      state:'WA',
	      zip: '98052',
	      rating: '5',
	      reviews: [{
		  stars: 5,
		  body: "Kyle does a great consistent job each time at a much cheaper price than the stylists",
		  author: "turtleguyy@gmail.com",
		  createdOn: 1397490980837
	      },
			{
			    stars: 5,
			    body: "I am more than happy with my new hairstyle from Kyle, she did an amzing job.",
			    author: "LouisW407@gmail.com",
			    createdOn: 1397490980837
			}, {
			    stars: 5,
			    body: "This is why I make the drive all the way from OLYMPIA because I know Kyle will always take care of me",
			    author: "nat@gmail.com",
			    createdOn: 1397490980837
			}]      
          },

	  { 
              fname: 'Kimmy',
              lname: 'Aaron',
	      
	      thumb: 'http://api.randomuser.me/portraits/thumb/women/55.jpg',
              avatar:'http://api.randomuser.me/portraits/women/55.jpg',
              shop_name: 'Rudy\'s Barbership',
	      address: '16095 Cleveland St',
	      city: 'Redmond, WA 98052',
	      state:'WA',
	      zip: '98052',
	      rating: '5',
	      reviews: [{
		  stars: 5,
		  body: "Kyle does a great consistent job each time at a much cheaper price than the stylists",
		  author: "turtleguyy@gmail.com",
		  createdOn: 1397490980837
	      },
			{
			    stars: 5,
			    body: "I am more than happy with my new hairstyle from Kyle, she did an amzing job.",
			    author: "LouisW407@gmail.com",
			    createdOn: 1397490980837
			}, {
			    stars: 5,
			    body: "This is why I make the drive all the way from OLYMPIA because I know Kyle will always take care of me",
			    author: "nat@gmail.com",
			    createdOn: 1397490980837
			}]      
          },



          { 
	      fname: 'John',
              lname: 'Doe',
	      thumb: 'http://api.randomuser.me/portraits/thumb/men/40.jpg',
              avatar:'http://api.randomuser.me/portraits/men/40.jpg',
              shop_name: 'True',
	      address: '123 Street Ave.',
	      city: 'Cleveland',
	      state:'OH',
	      zip: '44106',
	      rating: '1',

	      reviews: [{
		  stars: 1,
		  body: "This gem is WAY too expensive for its rarity value.",
		  author: "turtleguyy@yahoo.com",
		  createdOn: 1397490980837
	      },
			{
			    stars: 1,
			    body: "BBW: High Shine != High Quality.",
			    author: "LouisW407@hotmail.com",
			    createdOn: 1397490980837
			}, {
			    stars: 1,
			    body: "Don't waste your rubles!",
			    author: "nat@hotmail.com",
			    createdOn: 1397490980837
			}]      
          }
      ];
      

      
      
      return data;
  });
})();

