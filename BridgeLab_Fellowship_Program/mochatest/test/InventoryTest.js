const assert=require("chai").assert;
const invent=require("../../Utility/Oops_Util");
var filestream=require("fs");
const content=filestream.readFileSync("/home/admin123/Dipak/BridgeLabz_Pro-master/BridgeLab_Fellowship_Program/OOP_Programs/Inventory/Inventory");
var data=JSON.parse(content);
describe("App",function(){
    it("is a object", function(){
        assert.isObject(data, "Data is an Object");
    });
});