/**
 * @Purpose   :generate the power of two values 
 * @author    : Dipakpatil
 * @version   : 1.0
 * @since     : 02-05-2019
 */

var readline=require("readline-sync");
var power=require("../Utility/Util");
var num=readline.question("Enter a number:");
if(num>0 && num<=31)
{
    power.powerOf2(num);
}
else{
    console.log("Please enter the number between 1 to 32");
}
