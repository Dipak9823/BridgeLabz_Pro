var readline=require("readline-sync");

module.exports={
    invent(obj) {
        var rice=obj.Rice;
        var pulse=obj.Pulses;
        var wheats=obj.wheats;

        /* Calculate Total Price of each Rice */
        for(var key in rice) {
            console.log("/n");
            console.log("The total price Of Rice "+rice[key].rice_name+" is "+rice[key].weight*rice[key].price);
        }
        /*calculate Total price of each Pulse */
        for(var key in  pulse) {
                console.log("/n");
                console.log("The Total price of Pulse "+pulse[key].pulse_name+" is "+pulse[key].weight*pulse[key].price);
        }
        /*calculate Total Price of each Wheat */
        for(var key in wheats) {
                console.log("/n");
                console.log("The Total Price of Wheat "+wheats[key].wheat_name+" is "+pulse[key].weight*wheat[key].price);
        }
    },
    regexExpression(name, fullname, mob_number, date) {
        var filestream=require('fs');
        var content=filestream.readFileSync("regular.txt",'utf-8');

        content=content.replace(/<<name>>/,name);
        content=content.replace(/<<full name>>/,fullname);
        content=content.replace("xxxxxxxxxx",mob_number);
        content=content.replace("01/01/2016",date);

        return content;

    },

    stock(object) {
        var s=object.stock;

        for(var key in s) {
            console.log("\n");
            console.log("Stock_name:- "+s[key].Stock_name+"  Total Price:- "+s[key].No_Of_stock*s[key].Price);
        }
    },

    shuffle(cards) {
        var shuffleCards=new Array();
        var n=cards.length;
        var k=0;
        var status=true;
        var randomCard=Math.floor(Math.random()*n);
        shuffleCards[0]=cards[randomCard];
        while(k<n) {
            var randomCard=Math.floor(Math.random()*n);
            for(let index=0;index<cards.length;index++) {
                if(shuffleCards[index]==cards[randomCard]) {
                    status=true;
                }
                else {
                    status=false;
                }
            }
            if(!status) {
                shuffleCards.push(cards[randomCard]);
                k++;
            }        
        }
        console.log(shuffleCards);
        this.distribute(shuffleCards);
    },
    distribute(shuffleCards) {
        console.log("Enter the name of the player:-");
        var player=[];
        for(let i=0;i<4;i++) {
            player[i]=readline.question("Enter the "+i+" Player:-");

        }
        var range=9;
        var j=0;
        for(let i=0;i<4;i++) {
            console.log(player[i]+" Cards Are:-");
            while(j<range) {
                console.log(shuffleCards[j]);
                j++;
            }
            range +=9;
        }


    }

    

}