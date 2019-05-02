/**
 * @Purpose   : To calculate the time that elapses between the start and end clicks
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
*/

var readline=require("readline-sync");
var Util=require("../Utility/Util");

var start;
var stop;
var elapsedTime;

    var s1=readline.question("Enter 1 to startTime ");

if(s1==1)
{
    start=Util.startTime();
    console.log("Start Time is :-"+start);
}
else
{
    console.log("Invalid choice");
}
var s2=readline.question("Enter 1 to startTime ");
if(s2==0)
{
    stop=Util.stopTime();
    console.log("Stop Time is:-"+stop);
}
else{
    console.log("Invalid Choice");
}
elapsedTime=stop-start;
console.log("Elapsed Time is:"+elapsedTime);
//Util.elapsedTime();
