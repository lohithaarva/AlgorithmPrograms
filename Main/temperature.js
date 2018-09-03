var prompt = require('prompt-sync')();
var utility = require('../UtilityAlgo/utilityAlgo.js')
function conversion()
{
    var temp=prompt("enter temperature value ")
    var temType=prompt("Press 1 to convert to celsius \r\nPress 2 to convert to farenhite ")
    utility.conversion(temp,parseInt(temType))


}
conversion();

