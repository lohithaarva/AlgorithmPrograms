var readline = require('readline');
var utility =require('../UtilityAlgo/utilityAlgo.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var stringA, stringB;
function anagram()
{ 
    
    read.question("Enter a string to check anagram: ", function(string1)
    {
        read.question("Enter another string to check for anagram: ", function(string2)
        {
            stringA,
            stringB,
        utility.anagram(string1,string2);
           read.close();
    });
  });
}

anagram();