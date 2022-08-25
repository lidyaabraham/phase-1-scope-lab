// Write your solution in this file!
var customerName = 'bob';
console.log(customerName);
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}
var bestCustomer;

function setBestCustomer() { 
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

const leastFavoriteCustomer = 'toy';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'adix';
    return leastFavoriteCustomer;
}