/**
 * @Purpose   : To Find a square root of non-negative number.
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
 */
var Utility=require('../utility/Util');
var readline=require('readline-sync');
function sqrt()
{
    var num=readline.question("Enter the non negative value ");
    Utility.sqrt(num);
}
sqrt();