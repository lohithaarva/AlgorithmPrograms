var readline = require('readline');
var utility =require('../UtilityAlgo/utilityAlgo.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function primeana()
{ 
    read.question("Enter a initial range: ", function(range1)
    {
        read.question("Enter the final range: ", function(range2)
        {
        utility.primeana(range1,range2);
           read.close();
    });
  });
  

}

primeana();