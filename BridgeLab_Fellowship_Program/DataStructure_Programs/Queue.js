class Queue{
    constructor(){
        this.front=0;
        this.rear=0;
        this.queue=[];    
    }

    isEmpty() {
        if(this.rear==0)
            return true;

        return false;
    }

    enqueue(ele) {
        this.queue[this.rear++]=ele;

    }

    dequeue() {
        if(this.isEmpty())
        {
            console.log("Queue is Empty");
        }
        var ele=this.queue[this.front++];
        return ele;
    }
}
module.exports={
    Queue
}