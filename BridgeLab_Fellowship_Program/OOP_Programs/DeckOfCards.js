var readline=require("readline-sync");
var util=require("../Utility/Oops_Util");
module.exports={
DeckCards(){

var  suit=["clubs","Diamonds","Hearts","spades"];
var rank=["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];

var cards=new Array();

for(let i=0;i<suit.length;i++) {
    
    for(let j=0;j<rank.length;j++) {
        cards.push(" "+suit[i]+" "+rank[j]);
    }
}
console.log(cards);
module.exports=cards;
util.shuffle(cards);

} 
//DeckCards();
}