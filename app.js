var app = angular.module('ng-orm', []);
app.controller('MainCtrl', ['$scope', function($scope) {
  $scope.calculate = function() {
    $scope.result = $scope.weight * $scope.reps;
  };
}]);
