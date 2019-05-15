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