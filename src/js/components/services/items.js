(function () {

  angular
    .module('Services', [])
    .service('services', servicesDir)

    servicesDir.$inject = ['$http', '$rootScope']

    function servicesDir($http, $rootScope) {
      console.log('services');
      var vm = this

      vm.getAll = function () {
        return $http.get('http://localhost:5000')
      }
      vm.range = function (num) {
        var out = [];
        for (var i = 1; i <= num; i++) {
          out.push(i)
        }
        return out
      }

      vm.addItem = function (item) {
        var isThere = false;
        var index = 0;
        $rootScope.cart.forEach(function (curItem, i) {
          if(curItem.id == item.id){
            isThere = true;
            index = i
          }
        })
        if (isThere){
          $rootScope.cart[index].quant += item.quant
        }
        else{
          $rootScope.cart.push(item)
        }

        $http.put('http://localhost:5000/new', item)
        .then(() => console.log('ok'))
        .catch(() => console.log('bad'))
        return $rootScope.cart.length
      }
      vm.remove = function (item) {
        item.quantity -= item.quant
        $http.put('http://localhost:5000/remove', item)
        .then(() => console.log('ok'))
        .catch(() => console.log('bad'))
        return item.price * item.quant
      }

      vm.getOptions = (arr) => {
      return arr.map((item) => item.catergories)
        .map((category) => category.map((thing) => thing[1]))
        .reduce((a, b) => a.concat(b), [])
        .filter((item, pos, self) => self.indexOf(item) == pos)
      }

    }



})();
