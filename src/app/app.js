angular.module("myApp",["ui.router","angularCSS",
		"myApp.one",
		"myApp.two"])
	.config(function($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise("/one")
	})