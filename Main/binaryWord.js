var prompt = require('prompt-sync')();
var utility = require('../UtilityAlgo/utilityAlgo.js');
var fs = require('fs');
var data = fs.readFileSync('data.txt');
data = data.toString().split(",");
function bianryWord()
{
    
    var searchString = prompt("Enter string to search:"); 
   
     utility.binaryWord(data,searchString);
    
}
bianryWord();
