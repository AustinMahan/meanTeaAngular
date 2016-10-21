(function () {

  angular
    .module('Services', [])
    .service('services', servicesDir)

    servicesDir.$inject = ['$http']

    function servicesDir($http) {
      console.log('services');
      this.getAll = function () {
        return $http.get('http://localhost:5000')
      }
    }

})();
