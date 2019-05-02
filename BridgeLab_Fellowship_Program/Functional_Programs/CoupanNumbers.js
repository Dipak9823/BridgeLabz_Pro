/**
 * @Purpose   :To find distinct coupon numbers
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
 */

var readline=require("readline-sync");
var findCoupan=require("../Utility/Util");
var n=readline.question("Enter a number of coupan you want:");
findCoupan.findRandom(n);