(function() {
  'use strict';

  angular
    .module('demoApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout,$rootScope,$state,$mdDialog,$mdSidenav) {
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
    this.toggleLeft = function () {
			$mdSidenav('left').toggle();
		};

    this.userLogout= function () {
			localStorage.clear();
			$state.go('auth.login');
		};

		this.showPrompt = function(ev) {
				$mdDialog.show({
					controller: inviteCtrl,
					templateUrl: 'dialog.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose:true
				})
					.then(function(answer) {
						console.log('You said the information was "' + answer + '".');
					}, function() {
						console.log('You cancelled the dialog.');
					});
			};


		function inviteCtrl($scope, $mdDialog) {
			$scope.submission =  {
				data: {
					applicationUrl: location.origin + location.pathname,
					status:'pending'
				}
			};
			$scope.hideComponents = ['status'];
			$scope.$on('formSubmission',function (event, submission) {
				console.log($scope.submission);
				console.log(submission);
				$mdDialog.hide(submission);

			});
			$scope.hide = function() {
				$mdDialog.hide();
			};

			$scope.cancel = function() {
				$mdDialog.cancel();
			};

			$scope.answer = function(answer) {
				$mdDialog.hide(answer);
			};
		}

    $rootScope.$on('$stateChangeStart', listener);
  }
})();
