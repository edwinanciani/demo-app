(function() {
  'use strict';

  angular
    .module('demoApp')
    .controller('DeclineController', DeclineController);

  /** @ngInject */
  function DeclineController($scope,$http,$stateParams,$state,AppConfig,Formio) {
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
