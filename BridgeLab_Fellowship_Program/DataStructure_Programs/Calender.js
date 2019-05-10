/*
*  @description    
* 
*  @file           : Calender.js
*  @overview       : Calender module to Display days in month to take command line input month and year.
*  @module         : Calender - This is optional if expeclictly its an npm or local package
*  @author         : Parmeshwar Raut
*  @version        : 1.0
*  @since          : 02-01-2019
*
******************************************************************************/
var util = require("../Utility/Util");
var readline=require("readline-sync");
function input() {
   
   var month = readline.question("Enter month:-");
   var year = readline.question("Enter the Year:-");
   
   var day=util.dayOfWeek((month), (year));
   
   util.display(month, day, year);
} 
input();