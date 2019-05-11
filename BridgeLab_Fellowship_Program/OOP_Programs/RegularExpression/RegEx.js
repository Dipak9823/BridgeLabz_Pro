var readline=require("readline-sync");
var util=require("../../Utility/Oops_Util");

var name=readline.question("Enter Your Name:-");
var fullname=readline.question("Enter your full name:-");
var mob_number=readline.question("Enter your mobile number:-");
var date=new Date();

var content=util.regexExpression(name, fullname, mob_number, date);

console.log(content);