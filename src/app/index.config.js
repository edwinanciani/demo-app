(function() {
  'use strict';

  angular
    .module('demoApp')
    .config(config);

  /** @ngInject */
  function config(
    $logProvider,
    toastrConfig,
    $locationProvider,
    FormioProvider,
    FormioAuthProvider,
    AppConfig) {
    // Enable log
    $locationProvider.hashPrefix('');
    // Set the base url for formio.
    FormioProvider.setBaseUrl(AppConfig.apiUrl);
    FormioProvider.setAppUrl(AppConfig.appUrl);

    // Initialize our FormioAuth provider states.
    FormioAuthProvider.setStates('auth.login', 'app.dashboard');
    FormioAuthProvider.setForceAuth(true);
    FormioAuthProvider.register('login', 'user');
    FormioAuthProvider.register('register', 'user');


    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
