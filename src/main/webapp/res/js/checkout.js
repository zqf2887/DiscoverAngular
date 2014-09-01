var checkoutApp = angular.module('checkoutApp', []);

checkoutApp.value('moduleStatus', {
	INITIAL: "initial",
	OPEN: "open",
	EDIT: "edit",
	SAVED: "complete"
});


checkoutApp.controller('ModuleController',['$scope', 'moduleStatus', function($scope, moduleStatus){
	$scope.currentStatus = moduleStatus.INITIAL;
	
	$scope.module = {
		title: "Name Details",
		header: "Please enter your name and date of birth",	
	};
	
	$scope.formData = {};
	$scope.master = {};
	
	$scope.isInitial = function(){
		return $scope.currentStatus === moduleStatus.INITIAL;
		//return false;
	};
	
	$scope.isOpen = function(){
		return $scope.currentStatus === moduleStatus.OPEN;
	};
	
	$scope.isEdit = function(){
		return $scope.currentStatus === moduleStatus.EDIT; 
		//return true;
	};
	
	$scope.isSaved = function(){
		return $scope.currentStatus === moduleStatus.SAVED;
		//return false;
	};
	
	$scope.open = function() {
		$scope.currentStatus = moduleStatus.OPEN;
	};
	
	$scope.save = function(formData) {
		$scope.master = angular.copy(formData);
		$scope.currentStatus = moduleStatus.SAVED;
	};
	
	$scope.edit = function() {
		$scope.currentStatus = moduleStatus.EDIT;
	};
	
	$scope.cancel = function() {
		$scope.formData = angular.copy($scope.master);
		$scope.currentStatus = moduleStatus.SAVED;
	};
	
}]);
