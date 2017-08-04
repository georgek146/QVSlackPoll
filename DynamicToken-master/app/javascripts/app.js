import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

import dynamic_artifacts from '../../build/contracts/DynamicToken.json';

var DynamicToken = contract(dynamic_artifacts);
DynamicToken.setProvider(web3.currentProvider);

window.App = {


  //start: function() {
    //  DynamicToken.setProvider(web3.currentProvider);
    //});

  //},

  balanceOf: function(owner) {
    console.log("Getting balance");

    var dynamic;
    DynamicToken.deployed().then(function(instance) {
      dynamic = instance;
      return dynamic.balanceOf(receiver, amount, {from: account});
    }).then(function() {
      console.log("Got balance!");
    }).catch(function(e) {
      console.log(e);
      console.log("Error getting balance; see log.");
    });
  },

  transfer: function(to, amount) {
    console.log("Initiating transer... moving tokens through the net");

    var dynamic;
    DynamicToken.deployed().then(function(instance) {
      dynamic = instance;
      return dynamic.transfer(receiver, amount, {from: account});
    }).then(function() {
      console.log("Transfer complete!");
    }).catch(function(e) {
      console.log(e);
      console.log("Error sending tokens; see log.");
    });
  },

  transferFrom: function(from, to, amount) {
    console.log("Initiating transerFrom... moving tokens through the net");

    var dynamic;
    DynamicToken.deployed().then(function(instance) {
      dynamic = instance;
      return dynamic.transferFrom(from, to, value, {from: account});
    }).then(function() {
      console.log("transferFrom complete!");
    }).catch(function(e) {
      console.log(e);
      console.log("Error sending tokens from; see log.");
    });

  },

  allowance: function(owner, spender) {
    console.log("Setting allowance...");

    var dynamic;
    DynamicToken.deployed().then(function(instance) {
      dynamic = instance;
      return dynamic.allowance(from, to, value, {from: account});
    }).then(function() {
      console.log("Allowance complete!");
    }).catch(function(e) {
      console.log(e);
      console.log("Error setting allowance; see log.");
    });

  },

  approve: function(spender, amount) {
    console.log("Approving spender...)");

    var dynamic;
    DynamicToken.deployed().then(function(instance) {
      dynamic = instance;
      return dynamic.approve(spender, amount, {from: account});
    }).then(function() {
      console.log("Approving spender complete!");
    }).catch(function(e) {
      console.log(e);
      console.log("Error approving spender; see log.");
    });
  },
}




window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  //App.start();
});
