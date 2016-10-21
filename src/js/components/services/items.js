(function () {

  angular
    .module('Services', [])
    .service('services', servicesDir)

    servicesDir.$inject = ['$http', '$rootScope']

    function servicesDir($http, $rootScope) {
      console.log('services');
      this.getAll = function () {
        return $http.get('http://localhost:5000')
      }
      this.range = function (num) {
        var out = [];
        for (var i = 1; i <= num; i++) {
          out.push(i)
        }
        return out
      }

      this.addItem = function (item) {
        $rootScope.$emit('addToCart', item)
        $http.put('http://localhost:5000/new', item)
        .then(() => console.log('ok'))
        .catch(() => console.log('bad'))
        return ''
      }
    }



})();
