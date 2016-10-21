(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['services', '$location'];

  function mainController(services, $location) {
    console.log('controller');
    /*jshint validthis: true */
    var vm = this
    vm.searchCat = 'all'
    vm.cartLen = 0
    services.getAll()
    .then(data => {
      console.log(data.data.items);
      vm.items = data.data.items
    })

    vm.range = function (num) {
      return services.range(num)
    }

    vm.add = function (item, quant) {
      item.quant = parseInt(quant)
      return services.addItem(item)
    }
    vm.cart = function () {
      console.log('hit');
      $location.path('/cart')
    }
  }

})();
