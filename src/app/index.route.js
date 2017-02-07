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
      })
			.state('app.profile', {
				url: 'profile',
        abstract:true,
				templateUrl: 'app/components/profile/profile.html',
				controller: 'ProfileController',
				controllerAs: 'profile',
				data: {
					pageTitle:'Profile'
				}
			})
			.state('app.profile.reset', {
				url: '/reset',
				templateUrl: 'app/components/profile/profile.reset.html',
				controller: 'ProfileResetController',
				data: {
					pageTitle:'Profile'
				}
			})
			.state('app.profile.edit', {
				url: '/edit',
				templateUrl: 'app/components/profile/profile.edit.html',
				data: {
					pageTitle:'Profile'
				}
			})
			.state('auth.register', {
				url: '/register?:token&:email',
				templateUrl: 'views/user/register.html',
				controller: 'RegisterController',
				controllerAs: 'register',
				params: {
					token:null,
					email:null
				}
			})
			.state('auth.decide', {
				url: '/decide?:token&:email',
				templateUrl: 'views/user/decide.html',
				controller: 'DecideController',
				controllerAs: 'decide',
				params: {
					token:null,
					email:null
				}
			})
			.state('auth.decline', {
				url: '/decline?:token&:email',
				templateUrl: 'views/user/decline.html',
				controller: '/DeclineController',
				controllerAs: 'decline',
				params: {
					token:null,
					email:null
				}
			})
			.state('app.food', {
				url: '/foodsafety',
				abstract:true,
				templateUrl: 'views/user/decline.html',
				controller: '/DeclineController',
				controllerAs: 'decline',
				params: {
					token:null,
					email:null
				}
			});

    // Register all of the resources.
    angular.forEach(AppConfig.resources, function(resource, name) {
      FormioResourceProvider.register(name, resource.form, $injector.get(resource.resource + 'Provider'));
    });

    $urlRouterProvider.otherwise('/dashboard');
  }

})();
