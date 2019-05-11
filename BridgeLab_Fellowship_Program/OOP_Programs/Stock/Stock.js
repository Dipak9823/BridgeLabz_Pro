var readline=require("readline-sync");
var util=require("../../Utility/Oops_Util");
var filestream=require('fs');
var content=filestream.readFileSync("nStock.json");

var object=JSON.parse(content);

console.log(object);

util.stock(object);