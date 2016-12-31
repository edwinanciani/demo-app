(function() {
  'use strict';

  angular
    .module('demoApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/',
        abstract:true,
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('app.dashboard', {
        url: 'dashboard',
        templateUrl: 'app/components/dashboard/dashboard.html'
      })
      .state('app.elements', {
        url: 'elements',
        templateUrl: 'app/components/elements/elements.html',
        controller: 'ElementsController',
        controllerAs: 'element'
      })
      .state('app.chats', {
        url: 'chats',
        templateUrl: 'app/components/chats/chats.html',
        controller: 'ChatsController',
        controllerAs: 'chats'
      });

    $urlRouterProvider.otherwise('/dashboard');
  }

})();
