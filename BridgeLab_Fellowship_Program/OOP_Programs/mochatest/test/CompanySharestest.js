var filestream=require("fs");
var util=require("../../../Utility/Oops_Util")
var assert=require("chai").assert;
var content=filestream.readFileSync("/home/admin123/Dipak/BridgeLabz_Pro-master/BridgeLab_Fellowship_Program/OOP_Programs/Company_Shares/Shares.json");
var data=JSON.parse(content);
//var company=data.company;
describe("Check Object",function(){
    it("This is a object", function(){
        assert.isObject(data);
    } );

});

describe("check DataTypes",function(){
    it("This should be string", function(){
        for(var key in data.company)
        {
            //console.log(company[key])
            assert.isString(data.company[key].name);
        }
    });
    it("This should Number", function(){
        for(var key in data.company) {
        assert.isNumber(data.company[key].shares);
        }
    });
    it("This Should Number", function(){
        for(var key in data.company) {
            assert.isNumber(data.company[key].price);
        }
    });

});
