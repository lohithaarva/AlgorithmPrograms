var prompt = require('prompt-sync')();
var utility = require('../UtilityAlgo/utilityAlgo.js')
function calender()
{
    var date = prompt("Enter date ==> ")
    date = parseInt(date);
    var month = prompt("Enter month ==> ")
    month = parseInt(month);
    var year = prompt("Enter year of the date ==>")
    year = parseInt(year);
    //var day = utility.calender(date, month, year);
    
    if(year % 4 == 0 && (year % 100 !=0 || year % 400 ==0)) //logic to find leap year
    {
        if (date > 0 && date < 32 && month < 13)
        {
            utility.calender(date, month , year);
        }
        else{
            console.log("Invalid date");
    
        }

    }
    else if (date >= 29 && month === 2)
    {
        console.log("Date does'nt exsit");
    }
    else if (date >= 31 && (month == 4 || month ==6 || month ==9 || month == 11))
    {
        console.log("Invalid date");
    }
    else if(date > 0 && date < 32)
    {
        utility.calender(date, month , year);
    }
    else{
        console.log("Invalid date");
    }
}      
calender();

