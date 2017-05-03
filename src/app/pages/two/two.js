angular.module("myApp.two",[])
	.config(function($stateProvider,$urlRouterProvider) {
		$stateProvider
			.state({
				name:"two",
				url:"/two",
				templateUrl:"app/pages/two/two.html",
				css:"app/pages/two/two.css",
				controller:"twoController"
			})
	})
	.controller('twoController', function($state,$scope,$rootScope){
		$scope.flag = function () {
			if (!$scope.content || !$scope.title) {
				return true;
			}else{
				return false;
			}
		}
		$scope.tijiao = function() {
			$rootScope.dataArr.push({
				"title":$scope.title,
				"content":$scope.content,
			})
			console.log($rootScope.dataArr);
			$state.go("one");
		}
	})