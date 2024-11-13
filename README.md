# Assignment 1

Ng Shuo Kang
You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

## Description 

This node module provides allows you to buy things from an online shop and has functionalities allowing you to add items to your shopping bag, remove items from your shopping bag, updating the shop item price and allowing you to view the total price of your items after you are done shopping.

## Usage

app.js: <br>
const app = require('./shuokang_node');

//display all items in the shop and their prices <br>
console.log(app.displayShopItems());

//update shop item price change scarf price from 15 to 10 <br>
app.updateShopItemPrice('scarf', 10);

//display all items in the shop and their updated prices <br>
console.log(app.displayShopItems());

//add items to shopping bag <br>
app.addItemToShoppingBag('scarf', 5); <br>
app.addItemToShoppingBag('jeans', 2); <br>
app.addItemToShoppingBag('shoes', 1); <br>

//display all items you have added into the shopping bag and the quantity of each item <br>
console.log(app.displayShoppingBag());

//remove specific quantity of item from shopping bag <br>
app.removeItemFromShoppingBag('scarf', 1);

//remove all of this specfic item from shopping bag <br>
app.removeItemFromShoppingBag('jeans', 2);

//updated display of all items you have added into the shopping bag and the quantity of each item <br>
console.log(app.displayShoppingBag());

//display the total cost of all items in the shopping bag <br>
console.log(app.calculateTotalCostOfShoppingBag());

## Functions
displayShopItems - display all items in the shop and their prices <br>
displayShoppingBag - display of all items you have added into the shopping bag and the quantity of each item <br>
updateShopItemPrice -  update the price of a item in the shop items list <br>
addItemToShoppingBag - add item into your shopping bag <br>
removeItemFromShoppingBag - remove item from shopping bag <br>
calculateTotalCostOfShoppingBag - displays the total cost of all the items added into the shopping bag

# References
Provide the references that you have used to support your assignment. 