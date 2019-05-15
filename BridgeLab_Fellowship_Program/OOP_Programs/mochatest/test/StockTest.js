var filestream=require("fs");
var assert=require("chai").assert;
var util=require("../../../Utility/Oops_Util").stock;
var content=filestream.readFileSync("/home/admin123/Dipak/BridgeLabz_Pro-master/BridgeLab_Fellowship_Program/OOP_Programs/Stock/nStock.json");
var data=JSON.parse(content);

describe("Check return",function(){
    it("This should return", function(){
        assert.isTrue(util(data));
    });
});
describe("check Object", function(){
    it("This is a Object", function(){
        assert.isObject(data);
    });
});
describe("check DataTypes",function(){
    it("This should be string", function(){
        for(var key in data.stock)
        {
            //console.log(company[key])
            assert.isString(data.stock[key].Stock_name);
        }
    });
    it("This should Number", function(){
        for(var key in data.stock) {
        assert.isNumber(data.stock[key].No_Of_stock);
        }
    });
    it("This Should Number", function(){
        for(var key in data.stock) {
            assert.isNumber(data.stock[key].Price);
        }
    });
});
