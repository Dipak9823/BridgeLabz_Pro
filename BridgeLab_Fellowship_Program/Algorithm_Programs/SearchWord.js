/**
 * @Purpose   : To find a string from given input array, using Binary search.
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
 */

var readline=require("readline-sync");
var search=require("../Utility/Util");

var words=['A', 'B', 'C', 'D', 'E'];
var n=readline.question("Enter word you want to search:-");
var index=search.findWord(words,n);
console.log("Find at position: "+index);