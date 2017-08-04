var DynamicToken = artifacts.require("./DynamicToken.sol");

var account_one = null; // an address
var account_two = null; // another address

var amount = 0;

var dt = DynamicToken.deployed();

dt.transfer(account_two, amount, {from: account_one}).then(function(tx_id) {
  alert("Transaction successful!")
}).catch(function(e) {
  // There was an error! Handle it.
})

dt.balanceOf.call(account_one, {from: account_one}).then(function(balance) {
  console.log(balance.toNumber());
}).catch(function(e) {
  // There was an error! Handle it.
})

dt.transferFrom(account_two, account_one, amount, {from: account_one}).then(function(tx_id) {
  alert("Transaction successful!")
}).catch(function(e) {
  // There was an error! Handle it.
})
