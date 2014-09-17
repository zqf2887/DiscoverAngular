var checkoutApp = angular.module('checkoutApp', ['checkout.controller']);

checkoutApp.value('moduleStatus', {
	INITIAL: "initial",
	OPEN: "open",
	EDIT: "edit",
	SAVED: "complete"
});

checkoutApp.directive('nameDetailsModule', function(){
    return {
        restrict: 'A',
        templateUrl: './name-details.html'
    };
});


