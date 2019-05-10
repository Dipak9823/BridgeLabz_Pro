class Node{
    constructor(data) {
        this.data=data;
        this.next=null;
    }
}
class StackLinkedList {
    constructor() {
            this.top=null;
    }

    push(n) {
        var newNode=new Node(n);

        //if(newNode==Null)
        newNode.data=n;
        newNode.next=this.top;
        this.top=newNode;

    }

    pop() {
        if(this.top==null) {
            console.log("Stack underFlow");
        }
        this.top=this.top.next;

    }
    display() {
        if(this.top==null) {
            console.log("Stack is Empty");
        }
        else {
            var temp=this.top;
            while(temp!=null) {
                console.log(temp.data);
                temp=temp.next;
            }
        }
    }
}
module.exports={
    StackLinkedList
}