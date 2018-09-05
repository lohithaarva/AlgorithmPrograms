var prompt = require('prompt-sync')();
var utility = require('../UtilityAlgo/utilityAlgo.js');
var fs = require('fs');
function bianryWord()
{
try {
    var data = fs.readFileSync('data.txt');
   
}
catch(exception)
{
    console.log("File not found...");
} 
        var arr = data.toString().split(',');
        arr.sort();
        console.log(arr);
            var searchString = prompt("Enter string to search ==> "); 
            utility.binaryWord(arr,searchString);
    
}
bianryWord();
