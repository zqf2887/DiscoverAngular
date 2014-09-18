var checkoutApp = angular.module('checkoutApp', ['module.controller']);

checkoutApp.value('moduleStatus', {
	INITIAL: "initial",
	OPEN: "open",
	EDIT: "edit",
	SAVED: "complete"
});

checkoutApp.directive('checkoutModule', function(){
    return {
        restrict: 'A',
        templateUrl: function(scope,attr){
//            console.log(attr.moduleName);
            return './'+ attr.moduleName +'.html';
        }
    };
});

checkoutApp.controller('CheckoutController',['$scope', function($scope){

	$scope.moduleNames = [{
		title: "Name Details",
		header: "Please enter your name and date of birth",
		summaryHeader: "Your name details"
	}];
}]);

