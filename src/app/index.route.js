(function() {
  'use strict';

  angular
    .module('demoApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig(
    $stateProvider,
    $urlRouterProvider,
    FormioResourceProvider,
    $injector,
    AppConfig) {
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
        templateUrl: 'app/components/dashboard/dashboard.html',
        data : { pageTitle: 'Dashboard' }
      })
      .state('app.elements', {
        url: 'elements',
        templateUrl: 'app/components/elements/elements.html',
        controller: 'ElementsController',
        controllerAs: 'element',
        data : { pageTitle: 'Elements' }
      })
      .state('app.chats', {
        url: 'chats',
        templateUrl: 'app/components/chats/chats.html',
        controller: 'ChatsController',
        controllerAs: 'chats',
        data: {
          pageTitle:'Chat'
        }
      });

    // Register all of the resources.
    angular.forEach(AppConfig.resources, function(resource, name) {
      FormioResourceProvider.register(name, resource.form, $injector.get(resource.resource + 'Provider'));
    });

    $urlRouterProvider.otherwise('/dashboard');
  }

})();
