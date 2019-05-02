/**
 * @Purpose :  By using random function flip the coin no of times from user input
 *             and print the percentage of head vs tails
 * @author  : DipakPatil
 * @version : 1.0
 * @since   : 02-05-2019
 */

var newFunction=require("../Utility/Util")
var readline=require("readline-sync");
var n=readline.question("Enter No. of time you want to flip a coin");
newFunction.flipcoin(n);