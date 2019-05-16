/**
  * @Purpose   :To Maintain the List of CompanyShares in a Linked List So new CompanyShares can
                be added or removed easily
  * @author    : DipakPatil
  * @version   : 1.0
  * @since     : 14-05-2019
  **/


var readline=require("readline-sync");
var list=require("../../OOP_Programs/Company_Shares/LinkedList");
function shareFunc() { 
var l=new list.LinkedList();

while(ch!=4) {
console.log("1. Add shares:-\n2. Delete Shares:-\n3. Print all the shares:-");
var ch =readline.question("Enter your choice:-");

switch(ch) {
    case '1' :  var name=readline.question("Enter the name of Company:-");
                var no_of_shares=readline.question("Enter the number of Shares:-");
                var price=readline.question("Enter the Price Of Share:-");
                
                var share={
                            name: name,
                            shares: no_of_shares,
                            Price : price
                    }
                
                l.add(share);
                break;

    case '2' :    var company_name=readline.question("Enter the share name you want to delete:-");
                if(l.search(company_name)) {
                    l.delete(company_name);
                }
                else {
                    console.log("Invalid Company name");
                }
                break;
    
    case '3' :    console.log("All the Shares and their total amount is:-");
                l.print();
                break;

    default :   console.log("Invalid Choice");
                
}

}
}
shareFunc();