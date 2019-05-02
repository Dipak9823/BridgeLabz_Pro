/**
 * @Purpose   : To find the Day of weeek.
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
*/

var Utility=require('../utility/Util');
var readline=require('readline-sync');
function dayOfWeek()
{
    var day=readline.question("day:-");
     var month=readline.question("Month:-");
     var year=readline.question("Year:-");
    Utility.dayOfWeek(day,month,year);
}
dayOfWeek();