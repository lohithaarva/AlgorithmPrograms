var prompt = require('prompt-sync')();
var utility = require('../UtilityAlgo/utilityAlgo.js')
function toBinary()
{
    
    var number = prompt("Enter a number to convert to binary :"); 
   
    utility.toBinary(number);
    
}
toBinary();

