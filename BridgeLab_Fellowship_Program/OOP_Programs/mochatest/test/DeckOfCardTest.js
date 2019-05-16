
var arr=require("../../DeckOfCards");
//var card=require("../../DeckOfCards").cards;
var assert=require("chai").assert;
var util=require("../../../Utility/Oops_Util").shuffle;
describe("function",function(){
    it("It should be function",function(){
        assert.isFunction(arr.DeckCards());
    });
});


/*describe("To ", function(){

    it(" ",function(){
        assert.typeOf();
    });
});
describe("Check function", function(){
    it("This is a function",function(){
        assert.typeOf(util());
    })
});*/


