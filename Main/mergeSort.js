var prompt = require('prompt-sync')();
var utility = require('../UtilityAlgo/utilityAlgo.js');
function mergeSort()
{
    var size = prompt("ENter the size of the array: ");
    utility.mergeSort(size);
}
    mergeSort();