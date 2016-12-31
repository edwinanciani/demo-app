(function() {
  'use strict';

  angular
  .module('demoApp')
  .controller('NavController', NavController);

/** @ngInject */
function NavController($timeout) {
  var element = angular.element;


  element('.btn-toggle-fullwidth').on('click', function() {
    if(!element('body').hasClass('layout-fullwidth')) {
      element('body').addClass('layout-fullwidth');
    } else {
      element('body').removeClass('layout-fullwidth');
    }

    element(this).find('.lnr').toggleClass('lnr-arrow-left-circle lnr-arrow-right-circle');

    if(element(window).innerWidth() < 1025) {
      if(!element('body').hasClass('offcanvas-active')) {
        element('body').addClass('offcanvas-active');
      } else {
        element('body').removeClass('offcanvas-active');
      }
    }
  });

  element(window).on('load resize', function() {
    if(element(this).innerWidth() < 1025) {
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
      if(element(this).hasClass('collapsed')) {
        element(this).addClass('active');
      } else {
        element(this).removeClass('active');
      }
    });

  });
}})();
