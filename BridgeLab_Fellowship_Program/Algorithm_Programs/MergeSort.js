/**
 * @Purpose   : sort the array using the merge sort technique.
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
 */
var util=require('../Utility/Util');

var readline=require('readline-sync');

var arr=[];
var size=readline.question("enter size of array:");
console.log("enter array elements");
// read the elements in array 
for(var i=0;i<size;i++)
{
    arr[i]=readline.question("enter element on "+i+"th position:");
}
  var arr1=util.mergeSort(arr);
  console.log("Sorted Array ");
  console.log(arr1);