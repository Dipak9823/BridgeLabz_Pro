/**
 *  @Purpose        : To Create stock class to maintain the stock object in json file.   
 *  @file           : Stocks.js
 *  @author         : DipakPatil
 *  @since          : 11-05-2019
 */
var readline=require("readline-sync");
var util=require("../../Utility/Oops_Util");
var filestream=require('fs');
/* Read JSON Data From Simple File*/
var content=filestream.readFileSync("nStock.json");
/* Parse that JSON Data into Simple Object*/
var object=JSON.parse(content);

console.log(object);

util.stock(object);