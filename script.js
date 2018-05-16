/*
Write a program to calculate the total price of your phone purchase.
You will keep purchasing phones (hint: loop!) until you run out of money
in your bank account. You'll also buy accessories for each phone as long as
your purchase amount is below your mental spending threshold.

After you've calculated your purchase amount, add in the tax,
then print out the calculated purchase amount, properly formatted.

Finally, check the amount against your bank account balance to see
if you can afford it or not.

You should set up some constants for the "tax rate," "phone price,"
"accessory price," and "spending threshold," as well as a variable for your
"bank account balance.""

You should define functions for calculating the tax and for formatting the
price with a "$" and rounding to two decimal places.

Bonus Challenge: Try to incorporate input into this program, perhaps with
the prompt(..) covered in "Input" earlier. You may prompt the user for
their bank account balance, for example. Have fun and be creative!

OK, go ahead. Try it. Don't peek at my code listing until you've given
it a shot yourself!
*/
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
