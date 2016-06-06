var angularJSLoginForm = angular.module('angularJSLoginForm',[]);

angularJSLoginForm.controller('LoginController', 
[ 
  '$http',
  '$scope', 
  function($http, $scope) 
  {
			$scope.facebookLogin = function()
			{
				console.log('Facebook Button Clicked');
				alert($scope.userName);
			}
			
			$scope.linkedInLogin = function()
			{
				console.log('LinkedIn Button Clicked');
				alert($scope.userName);
			}
  }
]);