/**
 * @Purpose   : To calculate the total number of wins and percentage of wins and loss
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 05-02-2019
 */


var readline=require("readline-sync");
var gambler=require("../Utility/util");
var stake=readline.question("Enter Stake:");
var goal=readline.question("Enter the goal:-");
var noOfTimes=readline.question("Enter the number of time:-");
gambler.gamblerMethod(stake,goal,noOfTimes);