/**
 * @Purpose   : Convert a given Temprature into farenheit or celsius.
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
 */
var Utility=require('../utility/Util');
var readline=require('readline-sync');
function tempConversion()
{
   var number=readline.question("Press 1 to conver temperature to fahrenheit, and 2 for fahrenheit to temperature");
   Utility.convertTemp(number);
}
   tempConversion();