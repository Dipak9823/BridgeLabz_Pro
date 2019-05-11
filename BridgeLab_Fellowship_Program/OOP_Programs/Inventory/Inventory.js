
var filestream=require('fs');
var util=require("../../Utility/Oops_Util");

/* Read Json file */
var content=filestream.readFileSync("Inventory.json");
var object=JSON.parse(content);
console.log(object);

util.invent(object);