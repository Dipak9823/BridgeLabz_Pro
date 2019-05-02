/**
 * @Purpose   : To find the Prime Anagram and Paliindrome number.
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
*/
var readline=require("readline-sync");
var anagramPallindrome=require("../Utility/Util");
//var range=readline.question("Enter the Range:");

console.log("Prime Anagram and Pallindrome number are:");
for(let i=2;i<1000;i++)
{
    if(anagramPallindrome.checkPrime(i))
    {
        console.log(i);
        if(anagramPallindrome.isPallindrome(i))
        {
            if(anagramPallindrome.isAnagram(i))
            {
                console.log(i);
            }
        }
    }
}