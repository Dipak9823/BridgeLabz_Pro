/**
 * @Purpose   : To find the number .
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
*/
var readline=require("readline-sync");
var f=require("../Utility/Util");

let number=readline.question("Enter a number you want to find:");
let range=Math.pow(number,2);

f.findYourNumber(0,range);