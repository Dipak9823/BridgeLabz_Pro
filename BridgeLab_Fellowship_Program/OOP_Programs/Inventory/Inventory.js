/* Read Json file */
/**
 *  @Purpose        : To create the JSON from Inventory Object and output the JSON String.     
 *  @file           : inventoryDataM.js
 *  @overview       : Create a JSON file having Inventory Details for Rice, Pulses and Wheats 
                      with properties name, weight, price per kg.Then read Json file and calculate 
                      value of each inventory. 
 *  @author         : DipakPatil
 *  @since          : 14-05-2019
 */

var filestream=require('fs');
var util=require("../../Utility/Oops_Util");

function inventory(){
/*Read JSON Data From File*/
var content=filestream.readFileSync("/home/user/Dipak/BridgeLabz_Pro-master/BridgeLab_Fellowship_Program/OOP_Programs/Inventory/Inventory.json");
/*Parse it into simple Object*/
var object=JSON.parse(content);
console.log(object);

util.invent(object);
}
inventory()
