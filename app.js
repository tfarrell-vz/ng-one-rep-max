var app = angular.module('ng-orm', []);
app.controller('MainCtrl', function($scope) {
  $scope.calculate = function() {
    $scope.result = $scope.weight * (1 + $scope.reps/30);
  };

  $scope.reset = function() {
    $scope.weight = null;
    $scope.reps = null;
    $scope.result = null;
  };
});
