/**
 * @Purpose   :Taking input as a four digit number check whether the given number is a leap year
 *             or not. 
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
 */

var readline=require("readline-sync");
var leap=require("../Utility/Util");
var year=readline.question("Enter the year:");
leap.findleap(year);