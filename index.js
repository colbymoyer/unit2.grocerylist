const items = [
  { id: 1, name: "apple", price: 1.75, categoryId: 1, inventory: 100 },
  { id: 2, name: "banana", price: 0.25, categoryId: 1, inventory: 100 },
  { id: 3, name: "orange", price: 1.0, categoryId: 1, inventory: 100 },
  { id: 4, name: "broccoli", price: 3.0, categoryId: 2, inventory: 100 },
  { id: 5, name: "cucumber", price: 1.0, categoryId: 2, inventory: 100 },
  { id: 6, name: "milk", price: 5.75, categoryId: 3, inventory: 100 },
  { id: 7, name: "cheddar cheese", price: 4.0, categoryId: 3, inventory: 100 },
  { id: 8, name: "sourdough loaf", price: 5.5, categoryId: 4, inventory: 100 },
];

const cart = [
  { id: 5, name: "cucumber", price: 1.0, categoryId: 2, inventory: 100 },
  { id: 6, name: "milk", price: 5.75, categoryId: 3, inventory: 100 },
  { id: 7, name: "cheddar cheese", price: 4.0, categoryId: 3, inventory: 100 },
  { id: 8, name: "sourdough loaf", price: 5.5, categoryId: 4, inventory: 100 },
];

items.forEach(item => {
    console.log(item.name);
  });
function findItemById(id) {
  return items.find(item => item.id === id);
}
const FindId = 3;
const foundItem = findItemById(FindId);
console.log(foundItem);

function capitalizeNames() {
}
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const capitalizedItems = items.map(item => ({item, name: capitalize(item.name)
}));
console.log(capitalizedItems);


function calculateTotalInventory() {
}
const totalInventory = items.reduce((total, item) => total + item.inventory, 0);
console.log(totalInventory);

function calculateAllInventoryPrice() {
}
const totalInventoryValue = items.reduce((total, item) => total + (item.price * item.inventory), 0);
console.log(totalInventoryValue);

function filterItemsByCategoryId(categoryId) {
  return items.filter(item => item.categoryId === categoryId);
}
const categoryIdToFilter = 1;
const FilterItems = filterItemsByCategoryId(categoryIdToFilter);
console.log(FilterItems)

function getItemPriceByName(name) {
  const item = items.find(item => item.name.toLowerCase() === name.toLowerCase());
  return item ? item.price : null
}
const itemName = "sourdough loaf";
const itemPrice = getItemPriceByName(itemName);
console.log(`The price of ${itemName} is $${itemPrice}`);

function filterItemsByCategory(categoryId) {
return items.filter(item => item.categoryId === categoryId);
}
const categoryId = 1;
const filteredItems = filterItemsByCategory(categoryIdToFilter);
console.log(filteredItems);

function logCartItems(cart) {
for (let i = 0; i < cart.length; i++) {
  console.log(cart[i].name)
}
} 
logCartItems(cart)

function calculateTotalCartPrice(cart) {
let totalPrice = 0;  
for (let i = 0; i < cart.length; i++) {
  totalPrice += cart[i].price;
}
  return totalPrice;
}
const totalCartPrice = calculateTotalCartPrice(cart);
console.log("Total price of all items in the cart:", totalCartPrice);

// --------------------- DO NOT CHANGE THE CODE BELOW ------------------------ //

// const ids = prompt(
//   "enter numbers separated by commas for the ids of the items you want to add to your cart",
//   "1, 3, 5"
// );
// // Split the string of numbers into an array of strings.
// const idArr = ids.split(", ");

// idArr.forEach((id) => cart.push(id));
// console.log(`The names of all the items are: `);
// logItemNames();
// const itemId = prompt("enter the id of an item you are trying to find", "1");
// console.log(
//   `The item with id ${itemId} is  ${JSON.stringify(
//     findItemById(+itemId),
//     null,
//     2
//   )}`
// );
// console.log(
//   "We can map over an array and return a new array with the names capitalized like so: ",
//   capitalizeNames()
// );
// console.log(
//   "The total inventory of all grocery items is: ",
//   calculateTotalInventory()
// );
// console.log(
//   "The total price of all items in inventory is: ",
//   calculateAllInventoryPrice()
// );

// const itemToFind = prompt(
//   "Enter the name of an item to find the price of",
//   "apple"
// );
// console.log(`The price of ${itemToFind} is: `, getItemPriceByName(itemToFind));

// const categoryId = prompt(
//   "Enter a number between 1-4 to filter only items with that categoryId",
//   2
// );
// console.log(
//   `The items in category ${categoryId} are: `,
//   filterItemsByCategoryId(+categoryId)
// );

// console.log("Cart items: ");
// logCartItems();

// console.log(
//   `The total price of the items in your cart is: `,
//   calculateTotalCartPrice()
// );
