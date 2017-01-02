(function() {
  'use strict';

  angular
    .module('demoApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$rootScope,FormioAuth,AppConfig) {
    // Initialize the Form.io authentication system.
    FormioAuth.init();

    // Allow the app to have access to configurations.
    $rootScope.config = AppConfig;
    // Add the forms to the root scope.
    angular.forEach(AppConfig.forms, function(url, form) {
      $rootScope[form] = url;
    });

    $log.debug('runBlock end');
  }

})();
