/*
*  @Purpose        : Use Regex to replace name, full name, Mobile#, and Date with proper value.   
*  @file           : RegularExpDemon.js
*  @overview       : Read in the following message: Hello <<name>>, We have your full name as <<full name>> in our system.
*                    your contact number is 91­xxxxxxxxxx.Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
*                    Use Regex to replace name, full name, Mobile#, and Date with proper value.
*  @author         : DipakPatil
*  @since          : 11-05-2019
*/

var readline=require("readline-sync");
var util=require("../../Utility/Oops_Util");
var reg=function(){
var name=readline.question("Enter Your Name:-");
var fullname=readline.question("Enter your full name:-");
var mob_number=readline.question("Enter your mobile number:-");
var date=new Date();
var arr=[];
arr[0]=name;
arr[1]=fullname;
arr[2]=mob_number;

var content=util.regexExpression(name, fullname, mob_number, date);

console.log(content);
return arr;
}
reg();
module.exports=reg;

