/**
 * @description Dependencies require to be installed before the execution of this file.
 * @var {Class} prompt class instance of the prompt
 */
module.exports = {

anagram: function(string1,string2)
{
/** 
*@description An anagram detection, One string is an anagram of another if the second is simply a
rearrangement of the first.
*@param string1 stores the first string from the user
*@param string2 stores the second string from the user
*/
    
    if(string1!=NaN && string2!=NaN) //accepts only string
    {
        if(string1.toLowerCase().split('').sort().join('').trim() === string2.toLowerCase().split('').sort().join('').trim())
        {
            console.log("String matched!! It is an anagram!!");
        }
        else
        {
            console.log("Strings " + string1 + " and " + string2 + " are not anagrams!!");
        }

    }
    else{
        console.log("Please enter a valid string!!");
        }
    },

/*********************************************************************************************/
/** 
*@description To take a range of 0 ­ 1000 Numbers and find the Prime numbers in that range.
*@param range1 stores an initial range 
*@param range2 stores an final range
*/
prime : function( range1, range2)
{
    var result = new Array(); //creation of a new empty array
    if (range2 <= 1000)      // checks if the final range exceeds more than the limited range
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
        result.push(i);  
          }
    }
    console.log("Prime numbers are : " +result);
    return result;
}
else 
{
    console.log("Range exceeded !! Enter range below 1000");
}
},

/********************************************************************************************/
/** 
*@description To display prime numbers that are Anagram and Palindrome
*@param range1 stores the initial range
*@param range2 stores an final range
*/
  primeana : function(range1, range2 )
  { 
    // checks for prime 
    var arr = this.prime(range1 , range2)  //calling prime method
    var arr1 =[];   
    // checks for anagram                       //creation of an empty array
    for(var i = 0; i <= arr.length; i++)
    {
        for(var j =i+1; j <= arr.length; j++)
        {
            var s1 = "" + parseInt(arr[i]); 
            var s2 = "" + parseInt(arr[j]);
            s1 = s1.split('').sort();       
            s2 = s2.split('').sort();     //parse each element and sort in ascending order  
            if(s1.join() === s2.join())  //joins the specified path string segments 
            {
                console.log("The two anagrams are : " + arr[i] + " , " + arr[j]);
                arr1.push(arr[i]); // stores the result in array arr1
                
            }
        }
    }
    // checks for palindrome 
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
/**
*@description Binary search, Insertion sort, Bubble sort for intergers and strings
*@param range1 stores the initial range
*@param range2 stores an final range
*/
binarynum: function (arr, first, last, key) {
    var prompt = require('prompt-sync')();
    var mid;
    arr.sort();
    console.log(arr)
    console.log(key)
    if (last >= first) {
        mid = parseInt((first + last) / 2);  // checks for the middle element in the array 
        console.log(mid)
        if (parseInt(arr[mid]) === parseInt(key)) //if the key is equal to middle element
            return mid;
        if (parseInt(arr[mid]) > parseInt(key)) //if key element is greater than middle
            return this.binarynum(arr, first, mid - 1, key)
        else
            return this.binarynum(arr, mid + 1, last, key)

    }
    return -1;
},
//binary search for an string
binaryString: function (arr, key) {
    console.log(arr);
    var n = arr.indexOf(key);
    return (parseInt(n));
},
// to get the current time 
getCurrentTime: function () {
    var obj = new Date();       //creating reference for Date class
    var start = obj.getTime();
    return start;
},
//  differnece between the strat time and 
elapsedTime: function (start, end) {
    resultTime = (end - start)/1000;
    return resultTime;
},
//Insertion sort
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
//Bubble sort
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
/**
*@description To know the temparature in fahrenheit or in celcisus
*@param temptype holds an integer value
*/
    conversion: function (t, temptype) {
        if (temptype == 1) {
            var res = (t - 32) * (5 / 9);   //converts to celcius degree 
            console.log("Celsius temperature is", res)
        }
        else {
            var res = (t * (9 / 5)) + 32;   //converts to fahrenhite degree
            console.log("Farenheit temperature is", res)
        }
    },

/*********************************************************************************************/
/**
*@description To know the day of the entered date
*@param m hods the value of month
*@param d holds the date of the year
*@param y holds the year
*/
    dayOfWeek: function (m, d, y) {
        var y0, m0, d0, x,n;
        // evaluation of the formula
        n=(Math.floor(14 - m) / 12);
        n=parseInt(n)
        y0 = (y - n );
        var y0=parseInt(y0);

        x = (y0 + (Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400)));
        var x = parseInt(x)

        m0 = ((m + (12 * n)) - 2);
        var m0 = parseInt(m0)

        d0 = (d + x + Math.floor((31 * m0) / 12))%7
        var d0 = parseInt(d0)
     
        switch (parseInt(d0)) 
        {
            case 0: console.log("sunday");
                break;
            case 1: console.log("Monday");
                break;
            case 2: console.log("Tuesday");
                break;
            case 3: console.log("Wednesday");
                break;
            case 4: console.log("Thursday");
                break;
            case 5: console.log("Friday");
                break;
            case 6: console.log("Saturday");
                break;
            default:console.log("Invalid date")
            break;
        } 
    },
    
/****************************************************************************************/
/**
*@description monthly payments over years to pay off a principal loan amount at percent interest compounded monthly.
*@param principalAmt holds the amount
*@param interest holds the interest
*@param years holds number of years
*/
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
/**
*@description Reads in strings from standard input and prints them in sorted order.
*@param arr to store the array elements
*@param len to store the size of an arrays 
*/
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
/**
*@description Reads in strings from standard input and prints them in sorted order.
*@param arr to store the array elements
*@param len to store the size of an arrays 
*/
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
/**
*@description To compute the square root of a nonnegative number using Newton's method:.
*@param c holds a non negative integer
*/
dosqrt:function(c)
{
    if( c >= 0 && !NaN)
    {
    var t=c;
    var epsilon=1e-15
    while(Math.abs(t-(c/t)>epsilon))  //evaluation of formula
        {
             t=((c/t)+t)/2;
        }
    console.log("Square root of given number is ",t)  
    }
    else 
    {
        console.log(" Enter a positive integer ");
    }    
},
/********************************************************************************************/
/**
*@description To convert decimal to binary form 
*@param number holds a decimal form from the user
*/
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
    console.log(String(arr1.reverse()).replace(/\, /g, " "));

    // Inbuilt method to convert decimal to binary number
   /* console.log (arr[j]);
    { console.log (arr[j]);
      console.log (arr[j]);id positive number ")
    } console.log (arr[j]);
    else if (number > 0)
    {
        number = parseInt(number);
        let result = number.toStringundefined(2);
        console.log("The number represented in binary is ==> " +result)

    } */
},
/********************************************************************************************/
/**
*@description Swap nibbles and find the new number.
*@param number holds a decimal form from the user
*/
swapNibbles : function(number)
{
    
    return ((number & 0x0F) << 4 | (number & 0xF0) >> 4);
    
},
/***************************************************************************************** */
/**
*@description Read in a list of words from File.
*@param arr holds the elements inserted
*@param string holds the string elements in the text file
*/
binaryWord: function(arr,string)
{
    var mid,flag;
    var low=0,high=arr.length-1;
   // console.log(arr.length);
    arr.sort();
    console.log(arr);
    
    var mid= Math.floor((low+high)/2);
    if(string==arr[mid])
    {
        console.log("Element found!!!!");
        return true;
    }
    if(string<arr[mid])
    {
        for(var i=low;i<mid;i++)
        {
            if(arr[i]==string)
            {
            flag=1;
            break;
            }
        }
      if(flag==1)
            {
                console.log("Element found!!!!!");
            }
            else
            {
                console.log("Element not found");
            }
        }
    else
    {
        for(var j=mid;j<=high+1;j++)
        {
            if(arr[j]==string)
            {
            flag=1;
            break;
            }
        }
            if(flag==1)
            {
                console.log("Element found!!!!!");
            }
            else
            {
                console.log("Element not found")
            }
        }     
},
/********************************************************************************************/
//vending machine using switch statement
/* vendingMachine : function(amount)
    {
        var count =0;
        choice = 1;
    switch(choice)
    {
    case 1 : if(amount/1000>=1)
    {
        var result = Math.floor(amount/1000)
        console.log('Number of 1000 rs note are : ' +result)
        amount = amount -result*1000;
        count = count + result;
    }
    case 2 : if(amount/500>=1)
    {
        var result1 = Math.floor(amount/500)
        console.log('Number of 500 rs note are : ' +result1)
        amount = amount - result1*500;
        count = count + result1;
    }
    case 3 : if(amount/100>=1)
    {
        var result2 = Math.floor(amount/100)
        console.log('Number of 100 rs note are : ' +result2)
        amount = amount - result2*100;
        count = count + result2;
    }
    case 4 : if(amount/50>=1){
        var result3 = Math.floor(amount/50)
        console.log('Number of 50 rs note are : ' +result3)
        amount = amount - result3*50;
        count = count + result3;
    }
    case 5: if(amount/10>=1)
    {
        var result4 = Math.floor(amount/10)
        console.log('Number of 10 rs note are : ' +result4)
        amount = amount - result4*10;
        count = count + result4;
    }
    case 6: if(amount/5>=1)
    {
        var result5 = Math.floor(amount/5)
        console.log('Number of 5 rs note are : ' +result5)
        amount = amount - result5*5;
        count = count + result5;
    }
    case 7 : if(amount/2>=1)
    {
        var result7 = Math.floor(amount/2)
        console.log('Number of 2 rs note are : ' +result7)number
        amount = amount - result7*2;
        count = count + result7;
    }
    case 8 : if(amount/1>=1)
    {
        var result8 = Math.floor(amount/1)
        console.log('Number of 1 rs note are : ' +result8)
        count = count + result8;
    }
    }
    count = parseInt(count)
    console.log('Total notes are ' +count)
    },
    */
   /**
*@description calculate the minimum number of Notes, to be returned by the Vending Machine as a
Change
*@param amount holds the amount entered by the user
*/
   vendingMachine : function(amount)
   {
    var  arr = [1, 2, 10, 50,100, 500, 1000];
       let i= arr.length - 1;
       var count = 0;
       function recurssion ( initial)
       {
           if ((amount/initial) >= 1)
           {
               let value = Math.floor(amount/initial)
               console.log("Number of " +initial + " notes " + value);
               amount = amount - (value * initial);
               count = count + value;
               if(i >= 0)
               {
                   i--;
                   recurssion(arr[i]);
               }
           }
           else 
           {
                if (i >= 0)
                {
                    i--;
               recurssion(arr[i]);
                }               
           }   
       }
      recurssion(arr[i])
      console.log("Total number of notes " + count );
   },
/********************************************************************************************/
guessNumber : function(low, high , readlineSync)
{
    mid = Math.floor((low + high) / 2);
    console.log(`Is your number equal to ${(mid)}, Press 0 or if less, press 1 or if greater`);
    var temp = readlineSync.question("Enter your option");
    if (temp == 0)
    {
        console.log(" Your number is :" +mid);
    }
    else if (temp == 1)
    {
        this.guessNumber(0, mid -1,readlineSync)
    }
    else if(temp == 2)
    {
        this.guessNumber(mid+1, high, readlineSync);
    }
    else
    {
        console.log("Invalid option");
    }
},
/*********************************************************************************************/
mergeSort : function(size)
    {
        var prompt=require('prompt-sync')();
        var arr=new Array(size);
            for(let i=0;i<size;i++)
            {
                arr[i]=prompt("enter elements: ");
                
            }
            console.log((arr));
           // console.log("before merge arr len "+arr.length);
            this.merge((arr));
            //console.log("after merge arr len "+arr.length);
            arr.forEach(element =>
                {
            
                    console.log(parseInt(element));
                });
    },  
    merge : function(arr)
    {
        if(arr.length==1)
        {
            return; 
        }
        var m=Math.floor(arr.length/2);
        var a1=new Array(m);
        var a2=new Array(arr.length-m);
        var i;
        for(i=0;i<a1.length;i++)
        {
            a1[i]=parseInt(arr[i]);
            
        }
        for(var j=0;j<a2.length;j++,i++)
        {
            a2[j]=parseInt(arr[i]);
            
        }
        this.merge(a1);
        this.merge(a2);
        this.merger(a1,a2,arr);
    },
    merger : function(a,b,c)
    {
        var i=0,j=0,k=0;
        while(i<a.length && j<b.length)
        {
            if(a[i]<b[j])
            {
                c[k]=parseInt(a[i]);
                i++;
                k++;
            }
            else
            {
                c[k]=parseInt(b[j]);
                k++;
                j++;
            }
        }
        while(i<a.length)
        {
            c[k]=parseInt(a[i]);
            k++;
            i++;
        }
        while(j<b.length)
        {
            c[k]=parseInt(b[j]);
            k++;
            j++;
        }
    },

}


















 
        


   