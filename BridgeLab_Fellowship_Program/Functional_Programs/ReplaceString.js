
/**
 * @Purpose   :By ensuring username with minimum 3 characters,replacing USERNAME with userinput 
 *             and print the string.
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
 */
var readline =require('readline-sync');
/*
var str="Hello username , How are you!!!";
var name=readline.question("Enter your name");
/*function replace(str)
{
    var newstring=str.replace(/username/, name);
    return newstring;
}
console.log(replaceString(str,name));*/
var newString=require('../Utility/Util');
var name=readline.question("Enter your name");
newString.replaceString(name);