/**
  * @Purpose   :To prints the Calendar of the month.
  * @author    : DipakPatil
  * @version   : 1.0
  * @since     : 09-05-2019
  **/
 var readline=require("readline-sync");
 var take = require('util');
 //var util1 = require('../../week1/AlgoUtility/Utility1');
 var util = require('../Utility/Util');
 var que = require('./Queue1');
 
 try{
 function calender() {
 
     var dayQue = new que.Queue1;
     var dateQue = new que.Queue1;
     var month = readline.question("Enter the month:");
     var year = readline.question("Enter the year:");
 
     //to calculate the starting day of month
     var day = util.dayOfWeek1(1, month, year);
     console.log(day);
     var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
     var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];
 
     var leap = util.findleap(year)
      //to check the year is leap year or not if it is true then assign 29 to dates[2]
     if (leap == true && month == 2) {
         dates[2] = 29;
     }
 
     //insert the day in dayQueue
     for (var i = 0; i < week.length; i++) {
         dayQue.enque(week[i]);
     }
     //insert the  date in dateQue
     for (var i = 1; i <= dates[month]; i++) {
         dateQue.enque(i);
     }
 
 
     for (var i = 0; i < week.length; i++) {
         console.log(dayQue.deque() + "  ");
     }
     console.log();
     for (var i = 0; i < (day * 5); i++) {
         console.log(" ");
     }
 
     for (var i = 1; i <= dates[month]; i++) {
         if (i < 10) {
             console.log(" " + dateQue.deque() + "   ");
 
         }
 
         if (i > 9) {
             console.log("" + i + "   ")
         }
         if ((i + day) % 7 == 0) {
             console.log();
         }
 
     }
 
     console.log("\n\n");
 }
 calender();
  }
  catch(err){
      console.log(err);
  }