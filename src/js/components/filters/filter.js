(function () {

  angular
    .module('myApp')
    .filter('toPrice', toPrice)
    .filter('sortCat', sortCat)

  function toPrice() {
    return (num) => {
      num = num.toString()
      var end = num.slice(-2)
      var start = num.slice(0, -2)
      return `$${start}.${end}`
    }
  }

  function sortCat() {
    return (arr, str) => {
      if (str == 'all') return arr
      return arr.filter(function (item) {
        var isThere = false
        console.log(item);
        item.catergories.forEach(function (categorie) {
          if (categorie[1] == str) {
            isThere = true
          }
        })
        return isThere
      })
    }
  }

})();
