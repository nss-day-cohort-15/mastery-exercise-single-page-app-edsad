// var CarLot = (function () {
//   var inventory = [];

//   return {
//     getInventory: function () {

//     },
//     loadInventory: function (callback) {
//       var inventoryLoader = new XMLHttpRequest();

//       inventoryLoader.addEventListener("load", function () {

//       });
//     }
//   };

// })();

var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {

    },

    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open('GET', 'inventory.json')
      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(inventoryLoader.responseText).cars
        callback(inventory)
      });
      inventoryLoader.send()
    }


  };

  })();
