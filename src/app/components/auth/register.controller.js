(function() {
  'use strict';

  angular
    .module('demoApp')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController($scope,$http,$stateParams,$state,AppConfig,Formio) {
		console.log($stateParams);
    if(!$stateParams.token) {
      $state.go('auth.login');
    }
    else {
      localStorage.setItem('formioToken',$stateParams.token);
      $scope.submission={
        data:{
          email:$stateParams.email
        }
      };
      var config = {
        headers:{
          "x-jwt-token": $stateParams.token
        }
      };
      $scope.$on('formSubmission',function (event,submission) {
				console.log(submission);
				$http.get(AppConfig.appUrl+'/invitation/submission?data.email='+submission.data.email,config).then(function (invite) {
					$scope.changeStatus = invite;
					  $scope.changeStatus.status = 'accepted';
					  $state.go('app.dashboard');
					// $scope.invite.saveSubmission($scope.changeStatus);
				})
			})
    }
  }
})();
