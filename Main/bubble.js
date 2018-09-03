var prompt = require('prompt-sync')();
var utility = require('../UtilityAlgo/utilityAlgo.js');
function bubble()
{
    
    var size = prompt("Enter the size of an array :"); 
    var arr = new Array(size);
    for ( x =0; x < size; x++){
    arr[x] = prompt ("Enter the elements of the array :" );
         }
    utility.bubble(arr, size);
    
}
bubble();
