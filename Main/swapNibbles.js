var prompt = require('prompt-sync')();
var utility = require('../UtilityAlgo/utilityAlgo.js')
function swapNibbles()
{
    
    var number = prompt("Enter a number to convert to binary :"); 
    var res = utility.toBinary(number);
    var result = utility.swapNibbles(number);
    console.log("The resutant number is : " +result)
    
}
swapNibbles();
