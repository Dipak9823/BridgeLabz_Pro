class Node {

    constructor(data) {
        this.data=data;
        this.next=null;
    }
}
class LinkedList {
    constructor() {
        this.head=null;
    }

    add(data) {
        var newNode=new Node(data);
        if(this.head==null) {
            this.head=newNode;
        }
        else if(this.head.next==null) {
            this.head.next=newNode;
        }

            
        else {
            var temp=this.head;

            while(temp.next != null) {
                temp=temp.next;
            }

            temp.next=newNode;
        }
    }

    search(company_name) {
        var temp=this.head;

        while(temp != null) {
            if(temp.data.name==company_name) {
                return true;
            }
        }
        return false;
    }

    delete(company_name) {
        var p1, p2;
        p1=p2=this.head;
        while(p2 != null) {
            if(p1.data.name==company_name && p1==p2) {
                p2=p1.next;
                this.head=p2;
            }else if(p2.data.name==company_name) {
                p1.next=p2.next;
            }else if(p2.data.name==company_name && p2.next==null) {
                p1.next=null;
            }
            p1=p2;
            p2=p1.next;
        }
    }

    print() {
        if(this.head==null) {
            console.log("This LinkedList is Empty");
        }
        var temp=this.head;
        while(temp != null) {
            console.log("The Company name:"+temp.data.name+" Total:-"+(temp.data.shares*temp.data.Price) );
            temp=temp.next;
        }

    }

}

module.exports= {
    LinkedList
}