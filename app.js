var app = angular.module('app', []);


app.controller('myCtrl', ["$scope", function($scope){
	console.log('hey i loaded')
	$scope.people= ['dan','morty', 'rick'];
}])
