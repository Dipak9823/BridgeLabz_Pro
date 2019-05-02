/**
 * @Purpose   :To genarate primeFactor numbers according to the userinput
 * @author    : DipakPatil
 * @version   : 1
 * @since     : 02-05-2019
 */

var readline=require("readline-sync");
var factor=require("../Utility/Util");

var n=readline.question("Enter number for factors:");
console.log("The factors are:-");

factor.primeFactor(n);
