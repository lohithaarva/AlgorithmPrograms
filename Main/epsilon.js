var readlineSync = require('readline-sync');
var utility = require('../UtilityAlgo/utilityAlgo.js')
function dosqrt()
{
    var c=readlineSync.question("Enter c value => ")
    res= utility.dosqrt(c);
     console.log("Square root of given number is ",res)
}
    dosqrt();