
// this is correct 8/15/16

 var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory
    },
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
        inventoryLoader.open("GET", "inventory.json")
      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(this.responseText).cars
        callback(inventory)
      });
      inventoryLoader.send()
    }
  };

})();
