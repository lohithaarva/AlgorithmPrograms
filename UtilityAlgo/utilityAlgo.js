module.exports = {

anagram: function(string1,string2)
{
    
    if(string1!=NaN && string2!=NaN)
    {
        if(string1.toLowerCase().split('').sort().join('').trim() === string2.toLowerCase().split('').sort().join('').trim())
        {
            console.log("String is an anagram!!");
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
                console.log("The two anagrams are : " + arr[i] + " , " + arr[j])
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
                    console.log("palindromes are " + newarr);
        
                }
               
            }
           
       }
       
    },
/********************************************************************************************/
        

}
   