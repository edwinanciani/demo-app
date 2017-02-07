(function() {
  'use strict';

  angular
    .module('demoApp')
    .controller('DecideController', DecideController);

  /** @ngInject */
  function DecideController($scope,$http,$stateParams,$state,AppConfig,Formio) {
		console.log($stateParams);
    if(!$stateParams.token) {
      $state.go('auth.login');
    }
    else {
      $scope.user = {
      	token:$stateParams.token,
				email:$stateParams.email
			}
    }
  }
})();
