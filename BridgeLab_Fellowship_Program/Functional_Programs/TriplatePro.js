/**
 * @Purpose   :to find triplets from user input array elements
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
 */

var readline=require("readline-sync");
var trip=require("../Utility/Util");
let arr=[];

console.log("Enter Number of element for an array:");
for(let i=0;i<9;i++)
{
    arr[i]=readline.question();
}
trip.triplates(arr);