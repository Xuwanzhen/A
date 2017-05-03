angular.module("myApp.one",[])
	.config(function($stateProvider,$urlRouterProvider) {
		$stateProvider
			.state({
				name:"one",
				url:"/one",
				templateUrl:"app/pages/one/one.html",
				css:"app/pages/one/one.css",
				controller:"oneController"
			})
	})
	.controller('oneController', function($scope,$http,$rootScope,$stateParams)
	{
		$http.get("../data/data.json")
			.then(function (result) {
				if (!$rootScope.dataArr) 
				{
					$rootScope.dataArr = result.data.arr;
				} 
				$scope.dataArr = $rootScope.dataArr;

				$scope.delete = function(index) 
				{
					$scope.dataArr.splice(index,1);
				}
				$scope.flag11 = true;
				$scope.indexflag = function () 
				{
					$scope.flag = true;
					$scope.flag11 = false;
				}
				$scope.indexflag1 = function () 
				{
					$scope.flag = false;
					$scope.flag11 = true;
				}
			})
	})