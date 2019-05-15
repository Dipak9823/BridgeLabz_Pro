var filestream=require("fs");
var util=require("../../../Utility/Oops_Util").invent;
var assert=require("chai").assert;
var content=filestream.readFileSync("/home/admin123/Dipak/BridgeLabz_Pro-master/BridgeLab_Fellowship_Program/OOP_Programs/Inventory/Inventory.json");
var object=JSON.parse(content);


describe("values", function(){
    it("It should return some values",function(){
assert.isTrue(util(object));
    });
});


describe("object", function(){
    it("it should return true",function(){
assert.isObject(object,"This is object");
    });
});

