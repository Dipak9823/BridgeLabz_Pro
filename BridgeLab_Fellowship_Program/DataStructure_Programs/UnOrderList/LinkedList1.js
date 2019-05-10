class Node{
    
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList1{
    constructor()
    {
        this.head=null;
    }

    add(data)
    {
        var newNode=new Node(data);
        
        if(this.head==null)
        {
            this.head=newNode;
        }
        else if(this.head.next==null)
        {
            this.head.next=newNode;
        }
        else {
            var temp=this.head;
            while(temp.next!=null) {
                temp=temp.next;
            }   
            temp.next=newNode;
        }
    }
    show(){
        var arr=[];
        var temp=this.head;
        while(temp!=null)
        {
            arr=temp.data;
            temp=temp.next;
        }
        return arr;
    }

    search(element)
    {
        var status=true;
        var temp=this.head;
        while(temp!=null)
        {
            if(temp.data==element)
            {
                status=true;
                break;
            }
            else{
                status=false;
            }
            temp=temp.next;
        }
        return status;
    }

    delete(d)
    {
        var p1,p2; 
        p1=p2=this.head;
        if(p1.data==d && p1==p2)
        {
            p2=p1.next;
            this.head=p2;
        }
        else if(p2.data==d && p2.next==null)
        {
            p1.next=null;

        }
        else if(p2.data==d) {
            p1.next=p2.next;
        }
        p1=p2;
        p2=p1.next;

    }

}

module.exports={
    LinkedList1
}