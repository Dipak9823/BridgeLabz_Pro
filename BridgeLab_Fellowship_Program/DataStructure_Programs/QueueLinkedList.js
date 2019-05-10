class Node {
    constructor(data) {
        this.data=data;
        this.next=null;
    }
}

class QueueLinkedList {
    constructor() {
        this.front=0;
        this.rear=0;
    }

    enqueue(n) {
        var newNode=new Node(n);

        this.rear.next=newNode;
        this.rear=newNode;
    }
    dequeue() {
        if(front==null) {
            console.log("This is Empty Queue");
        }
        var temp=this.front;
        this.front=this.front.next;

        return temp;
    }

    display() {

    }
}

 module.exports={
     QueueLinkedList
 }