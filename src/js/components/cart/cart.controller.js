(function() {

  'use strict';

  angular
    .module('myApp.components.cart', [])
    .controller('cartController', cartController);

  cartController.$inject = ['services'];

  function cartController(services) {
    console.log('Cart controller');
    /*jshint validthis: true */
    var vm = this

  }

})();
