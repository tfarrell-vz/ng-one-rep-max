var app = angular.module('ng-orm', []);
app.controller('MainCtrl', function($scope) {
  $scope.calculate = function() {
    $scope.result = $scope.weight * $scope.reps;
  };
});
