/**
 * @Purpose   : Vending machine program to calculate number of notes.
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
 */

var Util=require('../Utility/Util');
var readline=require('readline-sync');
function vendingM()
{
    
        var val=readline.question("enter amoumt :");
        //console.log(val);
        Util.vending(val,0,0);
}

vendingM();