var filestream=require("fs");
var util=require("../../../Utility/Oops_Util").regexExpression;
var reg=require("../../RegularExpression/RegEx").reg;
var content=filestream.readFileSync("/home/admin123/Dipak/BridgeLabz_Pro-master/BridgeLab_Fellowship_Program/OOP_Programs/RegularExpression/regular.txt");
var assert=require("chai").assert;

describe("Not Empty", function(){
    it("File content Not Empty", function(){
        assert.isNotNull(util.content);
    })
})
describe("Check function", function(){
    it("This is a function", function(){
        assert.isFunction(util());
    });
});

describe("Data type check", function(){
    it("This should be string", function(){
        assert.isString(reg.arr[0]);
    })
})
/*describe("RegularExpression", function(){
    it("This should return paragraph", function(){
        
    });
} );*/
