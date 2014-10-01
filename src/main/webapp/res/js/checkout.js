var checkoutApp = angular.module('checkoutApp', ['module.controller']);

checkoutApp.constant('moduleStatus', {
	INITIAL: "initial",
	OPEN: "open",
	EDIT: "edit",
	SAVED: "complete"
});


checkoutApp.controller('CheckoutController', ['$scope', '$http', 'moduleStatus', function($scope, $http, moduleStatus){
    $scope.modules = [
        {moduleName:"name-details", currentStatus:"initial"},
        {moduleName:"contact-details", currentStatus:"initial"}
    ];

    $scope.currentModuleIndex = 0;

    $scope.getCurrentModule = function(){
        return $scope.modules[$scope.currentModuleIndex];
    };

    $scope.getModuleByIndex = function(index){
        return $scope.modules[index];
    };

    $scope.open = function(){
        var module = $scope.getCurrentModule();
        module.currentStatus = moduleStatus.OPEN;
    };

    $scope.updateModuleIndex = function(newIndex){
        $scope.currentModuleIndex = newIndex;
    };

    $scope.moveToNextModule = function(){
        // Dependent module logic can be injected here
        // For now just increase current index by 1
        $scope.updateModuleIndex($scope.currentModuleIndex + 1);
        if($scope.currentModuleIndex < $scope.modules.length){
            $scope.open();
        }
    };
}]);
