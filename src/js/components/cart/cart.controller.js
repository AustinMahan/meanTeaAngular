(function() {

  'use strict';

  angular
    .module('myApp.components.cart', [])
    .controller('cartController', cartController);

  cartController.$inject = ['services', '$rootScope'];

  function cartController(services, $rootScope) {
    console.log('Cart controller');
    /*jshint validthis: true */
    var vm = this
    vm.total = 0;
    vm.cart = $rootScope.cart

    vm.cart.forEach(function (item) {
      vm.total += item.price * item.quant
    })

    vm.remove = function (item, index) {
      vm.total -= services.remove(item, index)
      $rootScope.cart.splice(index, 1)
    }
  }

})();
