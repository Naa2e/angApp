(function(){
	'use strict';

	angular.module('demo', [])
        .controller('MainController', ['$scope', function($scope){
          $scope.name="Nicole";
          $scope.instructors = [
          {name:'steve', allergies:'sunshine'},
          {name:'zoe', allergies:'students'},
          {name:'joe', allergies:'everything'},
          ]
        }])

})()
