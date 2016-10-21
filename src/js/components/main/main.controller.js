(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['services'];

  function mainController(services) {
    console.log('controller');
    /*jshint validthis: true */
    var vm = this
    vm.searchCat = 'all'
    services.getAll()
    .then(data => {
      console.log(data.data.items);
      vm.items = data.data.items
    })
  }

})();
