/**
 * @Purpose   : convert the given Decimal value into Binary Value .
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
 */
var Utility=require('../utility/Util');
var readline=require('readline-sync');
function tobinary()
{
 var num=readline.question("Enter your decimal value ");
  var res=Utility.tobin(num);
  console.log("convertes form ",res);
}
tobinary();