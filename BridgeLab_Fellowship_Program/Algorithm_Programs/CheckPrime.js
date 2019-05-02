/**
 * @Purpose   : To find the number of Prime element upto 1000.
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 02-05-2019
*/
var num=require("../Utility/Util");
var readline=require("readline-sync");
var range=readline.question("Enter the range between 2 to 1000:");
for(let i=2;i<range;i++)
{
    if(num.checkPrime(i))
    {
        console.log(i);
    }
}