var prompt = require('prompt-sync')();
var utility = require('../UtilityAlgo/utilityAlgo.js')
var arr=new Array();
var len,key;
function search() {

    var choice = prompt("Give your choice of entry: 1. Binary 2. Insertion 3. Bubble ====>")


switch (parseInt(choice)) {
    case 1:
        binarysearch();
        break;
     case 2:
         insertionsort();
         break;
     case 3:
         bubblesort();
         break;
    default:console.log("Invalid input")
        
        
}
}
search();
function binarysearch() {
     var len = prompt("Enter the length of the array ===> ");
    for (var i = 0; i < len; i++) {
        var x = prompt(`enter ${(i)}th value `)
        arr.push(x);
    }
   
    var key = prompt("Enter the key to search ===>")
            var strornum = true;
            var a=[];
            for (var i = 0; i < len; i++) {
                if (isNaN(arr[i]))
                    strornum = false;
            }

            if (strornum== true) {
                for (var i = 0; i < len; i++) {
                    a.push(parseInt(arr[i]))
                }
                var start = utility.getCurrentTime();
                var index = utility.binarynum(a, 0, len-1, key);
                var endtime = utility.getCurrentTime();
                var result = utility.elapsedTime(start, endtime)

            }
            else {
                var start = utility.getCurrentTime();
                var index = utility.binaryString(arr, key);
                var endtime = utility.getCurrentTime();
                var result = utility.elapsedTime(start, endtime)

            }
                if (parseInt(index)!= -1) {
                console.log("Index of the key is ===>", index)
                console.log("Time taken: ", result)
            }
            else {
                console.log("Element not found")
                console.log("Time taken: ", result)
            }
        }
function insertionsort()
 {
     var choice = prompt(" Enter your choice 1 for interger \r\n 2 for string ==> ")
     if (choice == 1)
     {
        var len = prompt("Enter the length of the array ");
        for (var i = 0; i < len; i++) {
        arr[i] = parseInt(prompt(`Enter ${(i)}th value  `)) 
     }
     //var key = readlineSync.question("enter the key to search ")
    var start = utility.getCurrentTime();
    utility.insertion(arr, len);
    var endtime = utility.getCurrentTime();
    var result = utility.elapsedTime(start, endtime)
    console.log("Time taken is ",result, " seconds")
    }

    else if ( choice == 2)
    {   
        {
            var len = prompt("Enter the length of the array ");
            for (var i = 0; i < len; i++) {
            arr[i] = (prompt(`Enter ${(i)}th value  `)) 
         }
         //var key = readlineSync.question("enter the key to search ")
        var start = utility.getCurrentTime();
         utility.insertion(arr, len)
        var endtime = utility.getCurrentTime();
        var result = utility.elapsedTime(start, endtime)
        console.log("Time taken is ",result, " seconds")
        }
    }
 }

function bubblesort() {

    var choice = prompt(" Enter your choice 1 for interger \r\n Enter your choice 2 for string ==> ")
    if (choice == 1)
     {
    
        var len = prompt("Enter the length of the array ===> ");
        for (var i = 0; i < len ; i++) {
        var x = parseInt(prompt(`Enter ${(i)}th value `)) 
        arr.push(x);
        }

        //var key = readlineSync.question("enter the key to search ")
        var start = utility.getCurrentTime();
        utility.bubble(arr, len)
        var endtime = utility.getCurrentTime();
        var result = utility.elapsedTime(start, endtime)
        console.log("Time taken is ===>",result + " seconds")
        }
    else if (choice == 2)
    {
            var len = prompt("Enter the length of the array ===> ");
            for (var i = 0; i < len; i++) {
            var x = prompt(`Enter ${(i)}th value ===> `)
            arr.push(x);
            }
            //var key = readlineSync.question("enter the key to search ")
            var start = utility.getCurrentTime();
            utility.bubble(arr, len)
            var endtime = utility.getCurrentTime();
            var result = utility.elapsedTime(start, endtime)
            console.log("Time taken is ===>",result + " seconds")
    }


}