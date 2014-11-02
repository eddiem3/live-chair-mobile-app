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
              shop_name: 'Doe Cutz',
	      address: '123 Street Ave.',
	      city: 'Orangeburg',
	      state:'SC',
	      zip: '29115',
	      rating: '3'
          },

          { 
	      fname: 'John',
              lname: 'Doe',
              shop_name: 'Family Barber',
	      address: '123 Street Ave.',
	      city: 'Seattle',
	      state:'WA',
	      zip: '98052',
	      rating: '5'
          },

          { 
	      fname: 'John',
              lname: 'Doe',
              shop_name: 'True',
	      address: '123 Street Ave.',
	      city: 'Cleveland',
	      state:'OH',
	      zip: '44106',
	      rating: '2'
          }
      ]; 
      
      return data;
  });
})();

