/**
 * @Purpose   : To sort number of array Elements using Bubble Sort.
 * @author    : Dipakpatil
 * @version   : 1.0
 * @since     : 02-05-2019
*/
var Util=require('../utility/Util');
var readline=require('readline-sync');
function bubblesort()
{
    var arr=[];
  var res=Util.inputArray(arr);
 var res1=Util.bubbleSort(res);
  console.log(res1);
}
bubblesort();