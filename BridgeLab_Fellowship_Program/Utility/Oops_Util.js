

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
    }
    

}