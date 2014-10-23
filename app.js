(function() {
	"use strict";
})();

(function(){
	var app = angular.module('taxCalculatorApp', []);
	app.controller('TaxCalculatorCtrl', ['$scope', function($scope){
		$scope.area = 40;
		$scope.cost = 1000000;
		$scope.tax = function() {
			var meterCost = $scope.cost / $scope.area;
			var multiplier;
			if ($scope.cost < 10000000) {
				multiplier = 0.001;
			} else if ($scope.cost < 20000000) {
				multiplier = 0.0015;
			} else {
				multiplier = 0.002;
			}
			return meterCost * ($scope.area - 20) * multiplier;
		};
	}]);
})();
