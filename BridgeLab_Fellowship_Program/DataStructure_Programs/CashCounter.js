var readline=require("readline-sync");
var a=require("./Queue");
var balance=1000;
var q=new a.Queue();
var n=readline.question("Enter length of array:-");
for(var i=0;i<n;i++)
{
    var name=readline.question("Enter Name :");
    q.enqueue(name);
}

for(var i=0;i<n;i++)
{
    console.log("Welcome id="+i+" "+q.dequeue());

    console.log("1. Deposit");
    console.log("2. Withdraw");
    var ch=readline.question("Enter Your choice:");
    switch(ch)
    {
        case 1: var amount=readline.question("Enter Amount you want to deposit:");
                var total=balance+amount;
                console.log("Total:-"+total);
                break;

        case 2: var amount=readline.question("Enter Amount you want to Withdraw:-");
                var total=balance-amount;
                console.log("Total:-"+total);
                break;

        default: console.log("Invalid choice");
    }
}
