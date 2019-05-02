/**
 * @Purpose   : To calculate the Quadartic roots using user input value.
 * @author    :DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
*/

var readline=require("readline-sync");
var ans=require("../Utility/Util");

var a=readline.question("Enter the first value:-");
var b=readline.question("Enter the second value:-");
var determinant=readline.question("Enter Determinant value:-");

ans.quadratic(a,b,determinant);