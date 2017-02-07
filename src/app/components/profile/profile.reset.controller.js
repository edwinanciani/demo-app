(function() {
	'use strict';

	angular
		.module('demoApp')
		.controller('ProfileResetController', ProfileResetController);

	/** @ngInject */
	function ProfileResetController($scope,$rootScope,Formio,AppConfig,$state) {
		$scope.form = {};
		(new Formio(AppConfig.forms.reset)).loadForm().then(function (form) {
			$scope.form = form;
		});
		$scope.$on('formSubmission',function (event, submission) {
			$rootScope.whenReady.then(function () {
				$rootScope.user.data.password = submission.data.resetPassword;
				(new Formio(AppConfig.appUrl+'/employee/submission/'+$rootScope.user._id)).saveSubmission($rootScope.user).then(function () {
					$state.go('app.profile.edit');
				});
			});
		});
	}
})();
