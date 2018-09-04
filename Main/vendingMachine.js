var prompt = require('prompt-sync')();
var utility = require('../UtilityAlgo/utilityAlgo.js');
function vendingMachine()
{
    
    var amount = prompt("Enter the amount : "); 
   
     utility.vendingMachine(amount);
}    
vendingMachine();

