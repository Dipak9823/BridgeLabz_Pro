class Stack {
    constructor() {
     //   this.size=sizes;
        this.top=0;
        this.item=[];

    }
    isEmpty()
    {
        return this.top==0;
    }

    push(element)
    {
        this.item.push(element);
        //this.item[this.top++]=element;
        //this.top++;
    }

    pop()
    {
        if(this.item.length==0) {
            //console.log("This stack is underFlow");
            return null;
        }
        return this.item.pop();
        //this.item[--this.top];
    }

}

module.exports={
    Stack
}