/**
 * @Purpose   :to print Two Dimensional Array,from user input elements 
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
 */

var util=require('../Utility/Util');

var readline=require('readline-sync');

var row=readline.question("enter number of row:");
var column=readline.question("enter number of column:");
var arr=util.twoDArray(row,column);
console.log(arr);