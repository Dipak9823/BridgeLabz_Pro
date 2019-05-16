var readline=require("readline-sync");
var filestream=require("fs");
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
        return true;
    },
    regexExpression(name, fullname, mob_number, date) {
        var filestream=require('fs');
        /* Read content from file*/
        var content=filestream.readFileSync("/home/admin123/Dipak/BridgeLabz_Pro-master/BridgeLab_Fellowship_Program/OOP_Programs/RegularExpression/regular.txt",'utf-8');
        /*Replace <<name>> with name*/
        content=content.replace(/<<name>>/,name);
        /*Replace <<full name>> with fullname*/
        content=content.replace(/<<full name>>/,fullname);
        /*Replace "xxxxxxxxx" with mob_number*/
        content=content.replace("xxxxxxxxxx",mob_number);
        /*Replace Date */
        content=content.replace("01/01/2016",date);

        return content;

    },

    stock(object) {
        var s=object.stock;
        /*Calculate All The Shares and Print*/
        for(var key in s) {
            console.log("\n");
            console.log("Stock_name:- "+s[key].Stock_name+"  Total Price:- "+s[key].No_Of_stock*s[key].Price);
        }
        return true;

    },

    shuffle(cards) {

        var shuffleCards=new Array();
        //var n=cards.length;
        var k=0;
        var status=true;
        var randomCard=Math.floor(Math.random()*cards.length);
        /*Enter First Random into Array*/
        shuffleCards[0]=cards[randomCard];
        while(k<cards.length) {
            var randomCard=Math.floor(Math.random()*cards.length);
            for(let index=0;index<cards.length;index++) {
                /*Compare all the array element with random to avoid Duplicates*/
                if(shuffleCards[index]==cards[randomCard]) {
                    status=true;
                }
                else {
                    status=false;
                }
            }
            if(!status) {
                /*Add Into the Array*/
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
        /* Read four player who want to play Game*/
        for(let i=0;i<4;i++) {
            player[i]=readline.question("Enter the "+i+" Player:-");

        }
        var range=9;
        var j=0;
        /*Distribute 9 Cards per Player*/
        for(let i=0;i<4;i++) {
            console.log(player[i]+" Cards Are:-");
            while(j<range) {
                console.log(shuffleCards[j]);
                j++;
            }
            range +=9;
        }

        return true;
    },

    clinicManagement(data) {
        var doctor=data.Doctors;
        var patient=data.Patient;
        /*Enter A choice To Find a Doctor*/
        while(choice!=4) {
        console.log("Enter Follwing Number To Find Doctor");
        console.log("1. Enter the name of Doctor:-");
        console.log("2. Enter The Id of Doctor:-");
        console.log("3. Enter The Specializarion of Doctor:-");
        console.log("4. Exit");
        var choice=readline.question("Enter Your Choice:-");
       
        switch(choice) {
            
        case "1" :
            var status=false;
            var doctor_name=readline.question("Enter the name of the Doctor:-");
            for(var key in doctor) {
                if(doctor[key].name==doctor_name) {
                    status=true;
                    console.log(doctor[key]);
                }
            }
            if(!status) {
                console.log("Invalid Doctor Name");
            }

            break;
        
        case "2" :
            var status=false;
            var doctor_id=readline.question("Enter the id Of the Doctor:-");
            for(var key in doctor) {
                if(doctor[key].id==doctor_id) {
                    status=true;
                    console.log(doctor[key]);
                }

            }
            if(!status) {
                console.log("Invalid Doctor name");
            }

            break;
        
        case "3" :
            var status=false;
            var doctor_specialization=require.question("Enter the Specialization of Doctor:-");
            for(var key in doctor) {
                if(doctor[key]==doctor_specialization) {
                    status=true;
                    console.log(doctor[key]);
                }
            }
            if(!status) {
                console.log("Invalid Specialization");
            }
            break;

        case "4" : console.log("Exit");
                    break;

        default: console.log("Invalid Choice");
    
    }
}
    /*Enter Your Choice and Search Patient*/
    while(choice!=4) {
        console.log("Enter Follwing Choice To Find Patient");
        console.log("1. Enter the name of Patient:-");
        console.log("2. Enter The Id of Patient:-");
        console.log("3. Enter The Mobile_no of Patient:-");
        console.log("4. Exit");
        var choice=readline.question("Enter Your Choice:-");
       
        switch(choice) {
            
        case "1" :
            var status=false;
            var patient_name=readline.question("Enter the name of the Patient:-");
            for(var key in patient) {
                if(patient[key].name==patient_name) {
                    status=true;
                    console.log(patient[key]);
                }
            }
            if(!status) {
                console.log("Invalid Patient Name");
            }

            break;
        
        case "2" :
            var status=false;
            var patient_id=readline.question("Enter the id Of the Patient:-");
            for(var key in patient) {
                if(patient[key].id==patient_id) {
                    status=true;
                    console.log(patient[key]);
                }

            }
            if(!status) {
                console.log("Invalid Patient name");
            }

            break;
        
        case "3" :
            var status=false;
            var patient_mob_no=require.question("Enter the Mobile Number of Student:-");
            for(var key in patient) {
                if(patient[key]==patient_mob_no) {
                    status=true;
                    console.log(patient[key]);
                }
            }
            if(!status) {
                console.log("Invalid Mobile Number");
            }
            break;

        case "4" : console.log("Exit");
                    break;

        default: console.log("Invalid Choice");
        return
    
    }

    }
    

    },
    /* Take Appointment Of Doctor*/
    appointment(data) {
        var doctor=data.Doctors;
        var patient=data.Patient;
        var doctor_name=readline.question("Enter the name Doctor:-");
        for(var key in doctor) {
            if(doctor[key].name==doctor_name) {
                console.log(doctor[key].name+" Availabel on Day "+doctor[key].onDay);
            }
        }

        console.log("You can take Appointment:-");
        var patient_name=readline.question("Enter the name of Patient:-");
        for(var key in patient) {
            if(patient[key].name==patient_name) {
                console.log(patient[key]);
            }
            else {
                var pname=readline.question("Enter the name of patient:-");
                var pid=readline.question("Enter the id of the Patient");
                var pmob_no=readline.question("Enter the Mob_no:-");
                var pAge=readline.question("Enter the Age of Patient:-");

                data.Patient.push({
                    name:pname,
                    Id:pid,
                    Mobile_No:pmob_no,
                    Age :pAge

                })
                filestream.writeFielSync("info.json",JSON.stringify(data) );
            }
        }
    }
}
