var prompt = require('prompt-sync')();
var utility = require('../UtilityAlgo/utilityAlgo.js')
function dayOfWeek()
{
        var m = prompt("Enter month of the date ==> ")
        m = parseInt(m);
        var d = prompt("Enter date ==> ")
        d = parseInt(d);
        var y = prompt("Enter year of the date ==>")
        y = parseInt(y);
        var day = utility.dayOfWeek(m, d, y);
        
}

        
      
dayOfWeek();

