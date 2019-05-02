/**
 * @Purpose   : Program for to Payment of employee.
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
 */

var Util=require('../utility/Util');
var readline = require('readline-sync');
//var prompt = rl.createInterface(process.stdin, process.stdout);
function payment()
{
    var P=readline.question("enter the principal loan amount");
    var Y=readline.question("enter the year");
    var R=readline.question("enter the rate");
    /*var P=+process.argv[2];
    var Y=+process.argv[3];
    var R=+process.argv[4];*/
    Util.payment(P,Y,R);
}
    payment();