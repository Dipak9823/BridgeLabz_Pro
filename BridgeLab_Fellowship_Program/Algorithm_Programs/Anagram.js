/**
 * @Purpose   : To find the Anagram String, by using user input Two String.
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
*/

var readline=require("readline-sync");
var match=require("../Utility/Util");
var str1=readline.question("Enter the first string:");
var str2=readline.question("Enter the second String:");
match.checkAnagram(str1,str2);
