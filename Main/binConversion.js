var readline=require('readline');
var util=require('../UtilityAlgo/utilityAlgo.js');
var read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function toBinary()
{
    read.question("Enter decimal number: ", function(num){
            var a=parseInt(num);
            util.toBinary(read,a);
            read.close();
    })
}
toBinary();
