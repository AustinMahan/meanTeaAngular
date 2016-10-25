// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'ui.router',
      'Services',
      'myApp.config',
      'myApp.components.main',
      'myApp.components.cart',
    ])
    .controller('init', function ($rootScope) {
      $rootScope.cart = []
      console.log($rootScope);
    })

})();
