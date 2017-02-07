(function() {
	'use strict';

	angular
		.module('demoApp')
		.controller('ProfileController', ProfileController);

	/** @ngInject */
	function ProfileController($rootScope) {
			this.submission = {
				data: $rootScope.user.data
			};
			this.components = ['password'];
		console.log($rootScope);
	}
})();
