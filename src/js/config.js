(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig);

    function appConfig($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'js/components/main/main.view.html',
        controller: 'mainController',
        controllerAs: 'mainCtrl'
      })
      .when('/cart', {
        templateUrl: 'js/components/cart/cart.view.html',
        controller: 'cartController',
        controllerAs: 'cartCtrl'
      })
      .otherwise('/');
    }

})();
