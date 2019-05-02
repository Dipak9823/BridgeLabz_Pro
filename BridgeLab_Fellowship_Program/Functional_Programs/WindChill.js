/**
 * @Purpose   : To find the windchill, by using user input temperature and volume.
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 02-05-2019
*/

var readline=require("readline-sync");
var weather=require("../Utility/Util");

var t=readline.question("Enter t:-");      //temprature in Farenheiht
var v=readline.question("Enter v:-");      //speed in miles per hour

weather.temprature(t,v);