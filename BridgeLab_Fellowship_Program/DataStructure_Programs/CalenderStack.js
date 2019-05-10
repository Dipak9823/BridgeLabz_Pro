/**
  * @Purpose   :To prints the Calendar of the month using Queue and stack
  * @author    : DipakPatil
 
  * @version   : 1.0
  * @since     : 09-05-2019
  **/
 
 var access = require('./Stack1');
 var access1 = require('./Queue1');
 var util = require('../Utility/Util');
 //var util1 = require('../../week1/AlgoUtility/Utility1');
 var readline = require('readline-sync');
 var take = require('util');
 
 try{
 function calender() {
     var month = readline.question("enter the Month:");
     var year = readline.question("Enter the Year :");
 
     //to calculate the starting day of month
     var answer = util.dayOfWeek1(Number(1), Number(month), Number(year));
     console.log(answer);
 
     var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
     var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];
   
     var leap = util.findleap(year);
      //to check the year is leap year or not if it is true then assign 29 to dates[2]
     if (leap == true && month == 2) {
         dates[2] = 29;
     }
     var dayQue = new access1.Queue1;
     var dateQue = new access1.Queue1;
     var stk = new access.Stack1;
     var stk1 = new access.Stack1;
 
     for (let i = 0; i < 7; i++) {
         dayQue.enque(week[i]);
         stk.push(dayQue.deque());
     }
     for (let j = 1; j <= dates[month]; j++) {
         dateQue.enque(j);
        var s = stk1.push(dateQue.deque());
 
     }
     
     var rstk = stk.reverseStack();
     var rstk1 = stk1.reverseStack();
 
 
     for (let k = 0; k < 7; k++) {
         console.log(" " + rstk.pop());
     }
     console.log();
     for (let j = 0; j < (answer * 4 + 2); j++) {
         console.log(" ");
 
     }
     for (let j = 1; j <= dates[month]; j++) {
         var ch = rstk1.pop();
         if (ch < 10)
             console.log(" "+ch, "  ");
         else {
             console.log(ch, "  ");
         }
         if ((answer + ch) % 7 == 0) {
             console.log();
             console.log("  ");
         }
 
     }
     console.log("\n\n\n");
 
 }
 calender();
  }
  catch(err){
      console.log(err);
  }