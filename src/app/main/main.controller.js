(function() {
  'use strict';

  angular
    .module('demoApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout,$rootScope,$state) {
    function current(event) {

      $timeout(function() {
        $rootScope.title = $state.$current.data.pageTitle
      });
    }
    function listener(event, toState) {

      $timeout(function() {
        $rootScope.title = (toState.data && toState.data.pageTitle)
          ? toState.data.pageTitle
          : 'Default title';
      });
    }

    current();

    $rootScope.$on('$stateChangeStart', listener);
  }
})();
