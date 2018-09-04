var readlineSync = require('readline-sync');
var utility = require('../UtilityAlgo/utilityAlgo.js')
function dosqrt()
{
    var c=parseInt(readlineSync.question("Enter c value => "))
    utility.dosqrt(c);
    
}
    dosqrt();