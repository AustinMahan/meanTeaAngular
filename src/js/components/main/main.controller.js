(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['services', '$location', '$rootScope'];

  function mainController(services, $location, $rootScope) {
    console.log('controller');
    /*jshint validthis: true */
    var vm = this
    vm.searchCat = 'all'
    vm.cartLen = $rootScope.cart.length
    vm.options = []

    services.getAll()
    .then(data => {
      vm.items = data.data.items
      vm.options = services.getOptions(vm.items)
    })

    vm.range = function (num) {
      return services.range(num)
    }

    vm.add = function (item, quant) {
      item.quant = parseInt(quant)
      vm.cartLen = services.addItem(item)
    }
    vm.cart = function () {
      $location.path('/cart')
    }
  }

})();
