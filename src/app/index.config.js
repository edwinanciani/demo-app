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
    AppConfig,
		$mdThemingProvider) {
    // Enable log
    $locationProvider.hashPrefix('');
    // Set the base url for formio.
    FormioProvider.setBaseUrl(AppConfig.apiUrl);
    FormioProvider.setAppUrl(AppConfig.appUrl);

    // Initialize our FormioAuth provider states.
    FormioAuthProvider.setStates('auth.login', 'app.dashboard');
    FormioAuthProvider.setForceAuth(true);
    FormioAuthProvider.register('login', 'user');


    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
		$mdThemingProvider.alwaysWatchTheme(true);


		//themes are still defined in config, but the css is not generated
		$mdThemingProvider.theme('default')
			.primaryPalette('teal',{
				'default': '400', // by default use shade 400 from the pink palette for primary intentions
				'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
				'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
				'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
			})
			.accentPalette('grey');
		$mdThemingProvider.theme('food')
			.primaryPalette('cyan',{
				'default': '400', // by default use shade 400 from the pink palette for primary intentions
				'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
				'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
				'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
			})
			.accentPalette('grey');
		$mdThemingProvider.theme('harvest')
			.primaryPalette('light-blue',{
				'default': '400', // by default use shade 400 from the pink palette for primary intentions
				'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
				'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
				'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
			})
			.accentPalette('grey');
  }

})();
