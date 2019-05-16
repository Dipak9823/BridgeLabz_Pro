/**
 *  @Purpose        : To create the JSON from ExtendInventoryDataM Object and output the JSON String.     
 *  @file           : ExtendInventoryDataM.js
 *  @overview       : Inventory Manager will use InventoryFactory to create Inventory
                      Object from JSON. The InventoryManager will call each Inventory Object in its list
                      to calculate the Inventory Price and then call the Inventory Object to return the
                      JSON String.
 *  @author         : DipakPatil
 *  @since          : 14-05-2019
 */

let read = require("readline-sync");
let fs = require("fs");
let util = require("./ExtendInventoryDataMUtil");
/* Read JSON from Simple File */
let data = fs.readFileSync("/home/user/Dipak/BridgeLabz_Pro-master/BridgeLab_Fellowship_Program/OOP_Programs/InventoryManagement/ExtendInventoryDataM.json");
/* Parse that JSON Data into Simple Object*/
let JSONData = JSON.parse(data);    
function inventManage(){
        if(JSONData != null){
            util.inventManage(JSONData)
            return true;
        }
        else{
            return false;
        }       
    }
module.exports = inventManage();