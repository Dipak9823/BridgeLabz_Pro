/**
 * @Purpose   :to find the permutation of given string and prints all combination
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
*/
var util=require('../Utility/Util');

var readline=require('readline-sync');
function permutation()
{
  var string= readline.question('Enter the String ');
  var vr=util.permutation("",string,0,string.length-1);
  console.log(vr);
}
permutation();