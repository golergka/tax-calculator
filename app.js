(function() {
	"use strict";
})();

(function(){
	var app = angular.module('taxCalculatorApp', ['fcsa-number']);
	app.controller('TaxCalculatorCtrl', ['$scope', function($scope){
		$scope.firstFlat = true;
		$scope.exampleCost = 8640000;
		$scope.exampleArea = 54;
		$scope.tax = function() {
			var meterCost = $scope.cost / $scope.area;
			var multiplier;
			if ($scope.cost < 10000000) {
				multiplier = 0.001;
			} else if ($scope.cost < 20000000) {
				multiplier = 0.0015;
			} else if ($scope.cost < 50000000) {
				multiplier = 0.002;
			} else if ($scope.cost < 300000000) {
				multiplier = 0.003;
			} else {
				multiplier = 0.02;
			}
			var effectiveArea = $scope.area;
			if ($scope.firstFlat) {
				effectiveArea -= 20;
			}
			return meterCost * effectiveArea * multiplier;
		};
	}]);
})();
