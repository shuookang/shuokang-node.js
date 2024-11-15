let shoppingbag = 
[
    { item: "t-shirt", qty: 2, price: 15 },
];

let shopitems = 
[
    { item: "t-shirt", price: 15 }, 
    { item: "jeans", price: 25 },
    { item: "shoes", price: 50 },
    { item: "socks", price: 5 },
    { item: "hat", price: 10 },
    { item: "gloves", price: 8 },
    { item: "jacket", price: 30 },
    { item: "scarf", price: 15 },
    { item: "sweater", price: 20 },
    { item: "shorts", price: 10 }
];



module.exports = {
    // function to find item in the shopitems list, returns item if found
    findItem(item) {
        return shopitems.find(i => i.item === item);
    },
    // function to find an item in the shopping bag, returns item if found
    findShoppingBagItem(item) {
        return shoppingbag.find(i => i.item === item);
    },

    //display all items in the shopitems list and their respective prices
    displayShopItems() {
        let shopitemslist = ('Shop Items: \n');
        shopitems.forEach((item, index) => {
            shopitemslist += `ITEM${index + 1}: ${item.item}: $${item.price}\n`;
        });
        return shopitemslist;
    },

    //display all items in the shopping bag and their respective quantities
    displayShoppingBag() {
        let shoppingbaglist = ('Shopping Bag: \n'); 
        shoppingbag.forEach((item, index) => {
            shoppingbaglist += `ITEM${index + 1}: ${item.item}: ${item.qty}\n`; 
        });
        return shoppingbaglist;
    },

    // function to update the price of the item in the shop items list
    updateShopItemPrice(item, price) {
        const shopitem = this.findItem(item); //find item in shopitems list
        //if item not found in shopitems list, throw error to show it is not found
        if (!shopitem) {
            throw new Error('Item not found in shop');
        }
        shopitem.price = price; //update the price of the item
        console.log(`${item} has been updated to $${price}.`);
    },

    // function to add item to shopping bag, throws error if item already exists
    addItemToShoppingBag(item, qty) {
        const shopitem = this.findItem(item); //find item in shopitems list
        //if item not found in shopitems list, throw error to show it is not found
        if (!shopitem) { 
            throw new Error('Item not found in shop');
        }
        const shoppingbagitem = this.findShoppingBagItem(item); //find item in shopping bag
        //if item already in shopping bag, throw error to show it is already in shopping bag
        if (shoppingbagitem) { 
            throw new Error('Item already in shopping bag');
        }
        shoppingbag.push({ item, qty, price: shopitem.price }); 
        //add item as well as quantity to shopping bag
        console.log(`The ${item} has been added to the shopping bag.`);
    },

    // function to remove item from shopping bag, throws error if item not found
    removeItemFromShoppingBag(item, qty) {
        const shoppingbagitem = this.findShoppingBagItem(item); //find item in shopping bag
        //if item not found in shopping bag, throw error to show it is not found
        if (!shoppingbagitem) {
            throw new Error('Item not found in shopping bag');
        }
        //if the quantity to remove is greater than or equal to the quantity in the shopping bag, remove the item
        if (qty >= shoppingbagitem.qty) {
            shoppingbag = shoppingbag.filter(i => i.item !== item); 
            //remove item from shopping bag filter out the item
            console.log(`The ${item} has been removed from the shopping bag.`);
        } else {
            //otherwise, decrease the quantity
            shoppingbagitem.qty -= qty;
            console.log(`${qty} of ${item} has been removed from the shopping bag.`);
        }
    },

    // function to calculate total cost of items in shopping bag
    calculateTotalCostOfShoppingBag() {
        let totalcost = 0; //initialize total cost to 0
        shoppingbag.forEach(item => { //loop through each item in shopping bag
            totalcost += item.price * item.qty; //calculate the total cost of all the items
        });
        console.log(`Total payment due is $${totalcost}.`);
        return totalcost;
        }
}
