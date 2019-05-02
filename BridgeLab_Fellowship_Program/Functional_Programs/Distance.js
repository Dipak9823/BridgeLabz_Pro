/**
 * @Purpose   :To find euclidean distance from the point (x, y) to the origin (0, 0).
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
 */

var readline=require("readline-sync");
var count=require("../Utility/Util");

var x=readline.question("Enter x:-");
var y=readline.question("Enter y:-");

count.countDistance(x,y);