angular.module('gogetApp')
  .controller('HomeCtrl',['$scope', function ($scope) {
  	$scope.products = [
  		{'name':'iphone'},
  		{'name':'iphone'},
  		{'name':'iphone'},
  		{'name':'iphone'},
  		{'name':'iphone'},
  		{'name':'iphone'}
  	];

  }]);
