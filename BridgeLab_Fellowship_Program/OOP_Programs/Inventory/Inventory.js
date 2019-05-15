
var filestream=require('fs');
var util=require("../../Utility/Oops_Util");


function inventory(){
/* Read Json file */
var content=filestream.readFileSync("/home/admin123/Dipak/BridgeLabz_Pro-master/BridgeLab_Fellowship_Program/OOP_Programs/Inventory/Inventory.json");
var object=JSON.parse(content);
console.log(object);

util.invent(object);
}
inventory()
