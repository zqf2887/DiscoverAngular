angular.module('module.controller',[])
.controller('ModuleController',['$scope', 'moduleStatus', function($scope, moduleStatus){
//	$scope.currentStatus = moduleStatus.INITIAL;

	$scope.formData = {};
	$scope.master = {};

    $scope.setIndex = function(index){
        $scope.index = index;
    };

	$scope.isInitial = function(){
		var m = $scope.getModuleByIndex($scope.index);
		return m.currentStatus === moduleStatus.INITIAL;
	};

	$scope.isOpen = function(){
		var m = $scope.getModuleByIndex($scope.index);
		return m.currentStatus == moduleStatus.OPEN;
	};

	$scope.isEdit = function(){
	    var m = $scope.getModuleByIndex($scope.index);
		return m.currentStatus === moduleStatus.EDIT;
		//return true;
	};

	$scope.isSaved = function(){
	    var m = $scope.getModuleByIndex($scope.index);
		return m.currentStatus === moduleStatus.SAVED;
		//return false;
	};

	$scope.save = function(formData) {
		$scope.master = angular.copy(formData);
		var m = $scope.getModuleByIndex($scope.index);
		m.currentStatus = moduleStatus.SAVED;
		$scope.moveToNextModule();
	};

	$scope.edit = function() {
	    var m = $scope.getModuleByIndex($scope.index);
		m.currentStatus = moduleStatus.EDIT;
		$scope.updateModuleIndex($scope.index);
	};

	$scope.cancel = function() {
		$scope.formData = angular.copy($scope.master);
		var m = $scope.getModuleByIndex($scope.index);
		m.currentStatus = moduleStatus.SAVED;
	};

}]);