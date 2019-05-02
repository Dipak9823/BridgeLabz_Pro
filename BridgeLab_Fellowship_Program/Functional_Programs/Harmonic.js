/**
 * @Purpose   :To genarate harmonic numbers according to the user input.
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-5-2019
 */

var readline=require("readline-sync");
var harmonic=require("../Utility/Util");
var num=readline.question("Enter a number");
harmonic.findHarmonic(num);