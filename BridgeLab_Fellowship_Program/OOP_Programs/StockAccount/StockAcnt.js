var filestream=require("fs");
var s=require("./Stock");
var content=filestream.readFileSync("Shares.json");
//var data1=content.Company;
//var data2=content.Customer;
var data=JSON.parse(content)

var st=new s.Stock(data);

