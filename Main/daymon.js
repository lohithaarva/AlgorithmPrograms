var prompt = require('prompt-sync')();
var utility = require('../UtilityAlgo/utilityAlgo.js')
function dayOfWeek()
{
        var m = prompt("Enter month of the date ==> ")
        var d = prompt("Enter date ==> ")
        var y = prompt("Enter year of the date ==>")
        var day = utility.dayOfWeek(m, d, y);
        switch (day) {
            case 0: console.log("sunday");
                break;
            case 1: console.log("Monday");
                break;
            case 2: console.log("Tuesday");
                break;
            case 3: console.log("Wednesday");
                break;
            case 4: console.log("Thursday");
                break;
            case 5: console.log("Friday");
                break;
            case 6: console.log("Saturday");
                break;
            default:console.log("Invalid date")
            break;
        }
}

        
      
dayOfWeek();

