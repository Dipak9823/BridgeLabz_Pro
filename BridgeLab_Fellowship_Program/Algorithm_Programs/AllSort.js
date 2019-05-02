/**
 * @Purpose   : To sort array using Insertion sort and Bubble sort and find a number or string using Binary search.
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
*/

var Util=require('../utility/Util');
var readline=require('readline-sync');
function allsort()
{
    var intArray=[];
    var stringArray=[];
    var intArray1=[];
    var stringArray1=[];
  /*var int=Util.inputArray(arr);
  var str=Util.inputArray(arr);
    */
  var number1 = readline.question("Enter total number of array Integer elements");
  for (var i = 0; i < number1; i++){
      intArray[i] = Number(readline.question(" "));
  }  
  var res1=Util.bubbleSort(intArray);
  console.log(res1);

  var number2 = readline.question("Enter total number of array String elements");
  for (var i = 0; i < number2; i++){
      stringArray[i] = readline.question(" ");
  }
  var res2=Util.bubbleSort(stringArray);
  console.log(res2);

  var number3 = readline.question("Enter total number of array integer elements");
  for (var i = 0; i < number3; i++){
      intArray1[i] = Number(readline.question(" "));
  }
  var res3=Util.insertion(intArray1);
  console.log(res3);

  var number4 = readline.question("Enter total number of array String elements");
  for (var i = 0; i < number4; i++){
      stringArray1[i] = readline.question(" ");
  }
  var res4=Util.insertion(stringArray1);
  console.log(res4);

  var int=readline.question("Enetr a integer to find:-");
  var index=Util.findWord(intArray1,int);
  console.log("The Integer is at position:"+index);

  var str=readline.question("Enter a String to Find:-");
  var index1=Util.findWord(stringArray1,str);
  console.log("The String is at position:-"+index1);
  
}
allsort();