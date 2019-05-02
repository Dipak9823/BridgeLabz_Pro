/**
 * @Purpose   : To sort array using insertion sort.
 * @author    : Dipakpatil
 * @version   : 1.0
 * @since     : 02-05-2019
*/

var Util=require('../utility/Util');
var readline=require('readline-sync');
function insert()
{
  var arr = [];
  var res = Util.inputArray(arr);
  var res1 = Util.insertion(res);
  console.log(res1);
}
insert();