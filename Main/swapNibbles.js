var readline=require('readline');
var util=require('../UtilityAlgo/utilityAlgo.js');
var read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function binary()
{
    read.question("Enter decimal number: ", function(num){
            var a=parseInt(num);
            util.binary(read,a);
            read.close();
    })
}
binary();