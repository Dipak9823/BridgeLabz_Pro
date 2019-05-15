class Stock{
    constructor(content) {
        this.data=content
    }

    createAccount(data){
        var customer=data.Customer;
        var name=readline.question("Enter name of customer:");

        for(var key in customer) {
            if(customer[key].name==name) {
                console.log("This customer already exist");
                break;
            }
        }
        var id=readline.question("Enter the Id For Customer:");
        var shares=readline.question("Enter the no of shares");
        var amount=readline.question("Enter the amount of Customer:");
        var price=readline.question("Enter the Price of share:-");
        data.Customer.push({
            name : name,
            id : id,
            shares : shares,
            amount : amount,
            price : price
        })
        filestream.writeFileSync("Shares.json",JSON.stringify(data));
        console.log("Customer Added to account successfully");

    }
    buy(data) {
        var status=true;
        var company=data.Comapny;
        var customer=data.Customer;
        var company_name=readline.question("Enter the Name of Company:");
        for(var key in comapany) {
            if(company[key].name==comapany_name) {
                status=true;
                break;
            }
            status=false;
        }

        if(!status) {
            console.log("This comapany not exist here");
        }
        else {
            var no_of_share=readline.question("How many shares you want to buy");
            total=no_of-share;
        }
    }

    
}