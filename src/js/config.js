(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig);


    function appConfig($stateProvider) {
      var homeState = {
        name: 'home',
        url: '/',
        templateUrl: 'js/components/main/main.view.html',
        controller: 'mainController',
        controllerAs: 'mainCtrl'
      }

      var cartState = {
        name: 'cart',
        url: '/cart',
        templateUrl: 'js/components/cart/cart.view.html',
        controller: 'cartController',
        controllerAs: 'cartCtrl'
      }

      $stateProvider.state(homeState)
      $stateProvider.state(cartState)
    }

})();
