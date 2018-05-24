"use strict"  // child component
{

    const componentadd = {
        templateUrl: "componentadd.html", 
        controller: "CalculatorController"
    }

    angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {
        $scope.result = function() {
            if ($scope.operator == '+') {
                return $scope.a + $scope.b;
            }
            if ($scope.operator == '-') {
                return $scope.a - $scope.b;
            }
            if ($scope.operator == '*') {
                return $scope.a * $scope.b;
            }
            if ($scope.operator == '/') {
                return $scope.a / $scope.b;
            }
        };
    })
   
angular
.module("CalculatorApp")
.component("componentadd", componentadd)
.controller("CalculatorController", CalculatorController)
}