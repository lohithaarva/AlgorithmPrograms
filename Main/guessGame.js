var readlineSync = require('readline-sync');
var utility = require('../UtilityAlgo/utilityAlgo.js')
function guessNumber()
{
     var value = readlineSync.question("Enter the number ")
     utility.guessNumber(0 , value-1 , readlineSync);
}
guessNumber();