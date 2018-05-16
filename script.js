// Constant variables
const taxRate = 0.06;
const phonePrice = 199.99;
const accessory = 19.99;
let spendingThreshold;
let bankAccountBalance;
let phonePurchase = 0;
let accessoriesBought = 0;

// calculates the tax
function withTax(tax, price) {
  const amount = tax * price;
  return price + amount;
}

// rounds the price and adds the $
function totalPrice(price) {
  return `$${price.toFixed(2)}`;
}

//calulates complete price
function completePrice() {
  return (
    withTax(taxRate, phonePrice) * phonePurchase + accessory * accessoriesBought
  );
}

//rejects nonnumbers and numbers less than 0;
do {
  bankAccountBalance = Number(prompt('Enter your account balance?'));
  spendingThreshold = Number(prompt('Desired acessory spending amount?'));
} while (bankAccountBalance < 0 && spendingThreshold < 0);

//we want to keep const for the bank account balance
const totalInBank = bankAccountBalance;

//adds phones until no money in bank account
while (bankAccountBalance > withTax(taxRate, phonePrice)) {
  bankAccountBalance -= withTax(taxRate, phonePrice);
  phonePurchase += 1;
}

//adds accessories until no money in SpendingThreshold
while (spendingThreshold > accessory) {
  spendingThreshold -= accessory;
  accessoriesBought += 1;
}

//print total price of phone $ format and round to decimal places
console.log(totalPrice(completePrice()));

//check if user can afford phone with accessories
if (completePrice() > totalInBank) {
  console.log('You cannot afford all these accessories');
}
