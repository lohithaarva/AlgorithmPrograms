module.exports = {

anagram: function(string1,string2)
{
    
    if(string1!=NaN && string2!=NaN)
    {
        if(string1.toLowerCase().split('').sort().join('').trim() === string2.toLowerCase().split('').sort().join('').trim())
        {
            console.log("String matched!! It is an anagram!!");
        }
        else
        {
            console.log("String is not an anagram!!");
        }

    }
    
    else
        
    {
        console.log("Please enter a valid string!!");

        }
    },

/*********************************************************************************************/
prime : function(range1 , range2)
{
    var res = new Array();
    if (range2 <= 1000)
    {
    for(var i = 2;i <=range2; i++)
    {
        prime = 0;
        
        for (var j =2; j<=i/2; j++)
        {
            if (i % j ==0)
            {
                prime =1;
                break;
            }
        }
        if (prime == 0)
        {
        res.push(i);  
          }
    }
    console.log("Prime numbers are : " +res);
    return res;
}
else 
{
    console.log("Range exceeded !! Enter below 1000");
}
},
/********************************************************************************************/
  primeana : function(range1, range2 )
  { 
   
    var arr = this.prime(range1 , range2)
    var arr1 =[];
    for(var i = 0; i <= arr.length; i++)
    {
        for(var j =i+1; j <= arr.length; j++)
        {
            var s1 = "" + parseInt(arr[i]);
            var s2 = "" + parseInt(arr[j]);
            s1 = s1.split('').sort();
            s2 = s2.split('').sort();
            if(s1.join() === s2.join())
            {
                console.logreadlineSync.question("The two anagrams are : " + arr[i] + " , " + arr[j])
                arr1.push(arr[i]);
                
            }
        }
    }
       for (var k =0; k < arr1.length; k++){                                                                     
            var rev, sum =0;
            var newarr = arr1[k];
            while(arr1[k] > 0){
                rev = arr1[k] % 10;
                sum = (sum * 10) + rev;
                arr1[k] = Math.floor(arr1[k]/10);
                if ( newarr === sum)
                {
                    console.log("Palindromes are ===> " + newarr);
        
                }
               
            }
           
       }
       
    },
/********************************************************************************************/
binarynum: function (arr, first, last, key) {
    var prompt = require('prompt-sync')();
    var mid;
    arr.sort();
    console.log(arr)
    console.log(key)
    if (last >= first) {
        mid = parseInt((first + last) / 2);
        console.log(mid)
        if (parseInt(arr[mid]) === parseInt(key))
            return mid;
        if (parseInt(arr[mid]) > parseInt(key))
            return this.binarynum(arr, first, mid - 1, key)
        else
            return this.binarynum(arr, mid + 1, last, key)

    }
    return -1;
},
binaryString: function (arr, key) {
    console.log(arr);
    var n = arr.indexOf(key);
    return (parseInt(n));


},
getCurrentTime: function () {
    var obj = new Date();//creating reference for Date class
    var start = obj.getTime();
    return start;
},
elapsedTime: function (start, end) {
    resultTime = (end - start)/1000;
    return resultTime;
},
insertion: function (arr, len) {
    var val, index;
    for (i = 1; i <= len - 1; i++) {
        val = arr[i];
        index = i;
        while (index > 0 && (arr[index - 1]) > val) {
            arr[index] = (arr[index - 1]);
            index--;
        }
        (arr[index]) = val;
    }
    console.log("sorted array is ", arr)
},    
bubble: function (arr, n) {
    for (var k = 0; k <= n ; k++) {
        for (var i = k + 1; i < n ; i++) {
            if (parseInt(arr[k]) > parseInt(arr[i])) {
                temp = arr[k];
                arr[k] = arr[i];
                arr[i]= temp;
            }
        }
    }
    console.log("Sorted array is ===>", arr)
},
/********************************************************************************************/
/*temperature : function(choice)
{
    var temp;
    var prompt = re'lohi', 'ranju', 'akshu', 'abhi', 'deeee' ]
    if (choice ==1)nadeem@nadeem-Latitude-3480:~/Programlabz/AlgorithmPrograms/Main$ node searchsort.js
    {
        prompt("Enter the temperature in Fahrenheit: ")
                var res = ((temp - 32) * (5 / 9));
                console.log("celsius temperature is", res)
            }
            else {
                prompt("Enter the temperature in Celsius: ")
                var res = (temp * (9 / 5)) + 32;
                console.log("Farenheit temperature is", res)
            }
        }
    }*/
/*********************************************************************************************/
    conversion: function (t, temptype) {
        if (temptype == 1) {
            var res = (t - 32) * (5 / 9);
            console.log("Celsius temperature is", res)
        }
        else {
            var res = (t * (9 / 5)) + 32;
            console.log("Farenheit temperature is", res)
        }
    },
/******************************************************************************************** */
    dayOfWeek: function (m, d, y) {
        var y0, m0, d0, x;
        y0 = ((y - (14 - m)) / 12);
        var y0=parseInt(y0);
        x = (y0 + ((y0 / 4) - (y0 / 100) + (y0 / 400)));
        var x0 = parseInt(x)
        m0 = ((m + (12 * x) * ((14 - m) / 12)) - 2);
        var m0 = parseInt(m0)
        d0 = (d + x + ((31 * m0) / 12)) 
        var d0 = parseInt(d0)
        var d1=(d0)%7;
        return d1;
    
        
    },
    /****************************************************************************************/
    monthlyPayment : function(principalAmt , interest, years)
    {
            var payment=0 , years
             n = 12 * years;
             interest = interest / (12 * 100);
            var pow =1 - (1 + interest) ** (-n)
            payment = (principalAmt * interest) / pow;
             console.log("Total payments is ", payment)
        
    },
/*******************************************************************************************/
insertion: function (arr, len) {
    var val, index;
    for (i = 1; i <= len - 1; i++) {
        val = arr[i];
        index = i;
        while (index > 0 && (arr[index - 1]) > val) {
            arr[index] = (arr[index - 1]);
            index--;
        }
        (arr[index]) = val;
    }
    console.log("sorted array is ", arr)
},
/*********************************************************************************************/
bubble: function (arr, n) {
    for (var k = 0; k < n ; k++) {
        for (var i = k + 1; i < n ; i++) {
            if (arr[k] > arr[i]) {
                temp = arr[k];
                arr[k] = arr[i]
                arr[i]= temp;
            }
        }
    }
    console.log("Sorted array is ===>", arr)
},
/*******************************************************************************************/
dosqrt:function(c)
{
    var t=c;
    var epsilon=1e-15
    while(Math.abs(t-(c/t)>epsilon))
        {
             t=((c/t)+t)/2;
        }
   
   return t;
        
},
/********************************************************************************************/
toBinary : function(number)
{
    var arr1 = new Array();
    var arr = new Array();
    var i = 0;
    while( number > 0)
    {
        arr [i] = Math.floor(number % 2);
        number = Math.floor(number / 2);
        i++;
    }
  

    for (var j = i-1; j>=0; j--)
    {
      arr1.push( arr[j]);
    }
    console.log(arr1)
   /* console.log (arr[j]);
    { console.log (arr[j]);
      console.log (arr[j]);id positive number ")
    } console.log (arr[j]);
    else if (number > 0)
    {
        number = parseInt(number);
        let result = number.toString(2);
        console.log("The number represented in binary is ==> " +result)

    } */
},
/********************************************************************************************/
swapNibbles : function(number)
{
    
    return ((number & 0x0F) << 4 | (number & 0xF0) >> 4);
    
},
/***************************************************************************************** */
binaryWord: function (arr, first, last, key) {
    var prompt = require('prompt-sync')();
    var mid;
    arr.sort();
    console.log(arr)
    console.log(key)
    if (last >= first) {
        mid = ((first + last) / 2);
        console.log(mid)
        if ((arr[mid]) === (key))
            return mid;
        if ((arr[mid]) > (key))
            return this.binaryWord(arr, first, mid - 1, key)
        else
            return this.binaryWord(arr, mid + 1, last, key)

    }
    return -1;


}


}


















 
        


   