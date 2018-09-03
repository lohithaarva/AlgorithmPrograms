var prompt = require('prompt-sync')();
var utility = require('../UtilityAlgo/utilityAlgo.js');
var fs = require('fs');
var date = fs.readFileSync('date.txt');
data = data.toString().split(" , ");
function bianryWord()
{
    
    var searchString = prompt("Entera string to search:"); 
   
     utility.binaryString(data,searchString);
    
}
bianryWord();
