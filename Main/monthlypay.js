var readlineSync = require('readline-sync');
var utility = require('../UtilityAlgo/utilityAlgo.js')
function monthlyPayment()
{
    var principalAmt =process.argv[2]
    var interest =process.argv[3]
    var years =process.argv[4]
    utility.monthlyPayment(principalAmt ,interest,years);
}
monthlyPayment();