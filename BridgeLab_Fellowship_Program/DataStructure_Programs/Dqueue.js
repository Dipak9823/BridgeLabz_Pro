class Dqueue{
    constructor() {
        this.front=0;
        this.rear=0;
        this.dqueue=[];
    }

    enqueueFront(data) {
        if(this.front==0) {
            console.log("Underflow");
        }
        this.dqueue[front--]=data;
    }

    dqueueFront() {
        if(this.front==this.rear)
        {
            console.log("This Queue is Empty");
        }
        var data=this.dqueue[this.front++];
        return data;
    }

    enqueueRear(data) {
        this.rear++;
        this.dqueue[this.rear]=data;

    }

    dqueueRear() {
        if(this.rear==this.front)
        {
            console.log("Queue is Empty");
        }
        var data=this.dqueue[this.rear--];
        
        return data;
    }
}
module.exports={
    Dqueue
}