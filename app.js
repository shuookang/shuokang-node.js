const app = require('./shuokang_node');

//display all items in the shop and their prices
console.log(app.displayShopItems());

//update shop item prices
app.updateShopItemPrice('scarf', 10);

//display all items in the shop and their prices
console.log(app.displayShopItems());

//add items to shopping bag
app.addItemToShoppingBag('scarf', 5);
app.addItemToShoppingBag('jeans', 2);
app.addItemToShoppingBag('shoes', 1);

//display all items you have added into the shopping bag and the quantity of each item
console.log(app.displayShoppingBag());

//remove one of this specific item from shopping bag
app.removeItemFromShoppingBag('scarf', 1);

//remove all of this specfic item from shopping bag
app.removeItemFromShoppingBag('jeans', 2);

//display all items you have added into the shopping bag and the quantity of each item
console.log(app.displayShoppingBag());

//display the total cost of all items in the shopping bag
console.log(app.calculateTotalCostOfShoppingBag());
