(function() {
  'use strict';

  angular
  .module('demoApp')
  .controller('NavController', NavController);

/** @ngInject */
function NavController($timeout,$stateParams) {
  var vm = this;
  var element = angular.element;
  element('.btn-toggle-fullwidth').on('click', function() {
    if(!element('body').hasClass('layout-fullwidth')) {
      element('body').addClass('layout-fullwidth');
    } else {
      element('body').removeClass('layout-fullwidth');
    }

    element(vm).find('.lnr').toggleClass('lnr-arrow-left-circle lnr-arrow-right-circle');

    if(element(window).innerWidth() < 1025) {
      if(!element('body').hasClass('offcanvas-active')) {
        element('body').addClass('offcanvas-active');
      } else {
        element('body').removeClass('offcanvas-active');
      }
    }
  });

  element(window).on('load resize', function() {
    if(element(vm).innerWidth() < 1025) {
      element('body').addClass('layout-fullwidth');
    } else {
      element('body').removeClass('layout-fullwidth');
    }
  });

  element(window).on('load', function() {
    if(element(window).innerWidth() < 1025) {
      element('.btn-toggle-fullwidth').find('.icon-arrows')
        .removeClass('icon-arrows-move-left')
        .addClass('icon-arrows-move-right');
    }

    /* to make sure footer on the bottom,
     adjust .main height when it's shorter than .sidebar. Timeout to wait chart rendered */
    $timeout(function() {

      if(element('.main').height() < element('.sidebar').height()) {
        element('.main').height(element('.sidebar').height());
      }
    }, 500);

    element('.sidebar a[data-toggle="collapse"]').on('click', function() {
      if(element(vm).hasClass('collapsed')) {
        element(vm).addClass('active');
      } else {
        element(vm).removeClass('active');
      }
    });

    console.log($stateParams);

  });
}
})();
