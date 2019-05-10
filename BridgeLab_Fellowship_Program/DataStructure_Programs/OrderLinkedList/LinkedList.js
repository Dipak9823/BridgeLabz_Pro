class Node{
    constructor(data) {
        this.data=data;
        this.next=null;
    }
}

class LinkedList {
    constructor(size){
        this.head=null;
        this.size=0;
        
    }
     

    add(data) {
        
        var newNode=new Node(data);
       // console.log(newNode);
        if(this.head==null)
        {
            this.head=newNode;
         //  console.log(this.head.data);
        }
        else if(this.head.next==null)
            {
                if(this.head.data>newNode.data)
                {
                    newNode.next=this.head;
                    this.head=newNode;
                }
                else {
                    this.head.next=newNode;
                }
            }
            else {
                var p1,p2;
                p1=p2=this.head;
                while(p2!=null)
                {
                    if(p1.data>newNode.data && p1==head)
                    {
                        newNode.next=head;
                        this.head=newNode;
                    } 
                    else if(p1.data < newNode.data && p2.data >newNode.data) {
                        p1.next=newNode;
                        newNode.next=p2;
                    }
                    else if(p2.next=null && p2.data<newNode.data)
                    {
                        p2.next=null;
                    }
                    p1=p2;
                    p2=p1.next;
                }
            }
        }
    
    show() {
        var arr=[];
        var temp=this.head;
        while(temp!=null) {
            //for(var i=0;i<)
            arr.push(temp.data);
            temp=temp.next;
        }
        return arr;
    }
    search(key){
        var temp=this.head;
        while(temp!=null)
        {
            if(temp.data==key)
            {
                return true;
            }
            temp=temp.next;
        }
        return false;
    }
    remove(key) {
        var ptr1, ptr2;
		ptr1 = ptr2 = this.head;
		if (ptr1 == null) {
			console.log(" Underflow ");
		} else {
			if (ptr1.next == null) {
				this.head = null;
			}
			while (ptr2 != null) {
					if (ptr1 == ptr2 && ptr2.data == key) {
						this.head = ptr1.next;
					}
					if (ptr2.data == key) {
						ptr1.next = ptr2.next;
					}
					ptr1 = ptr2;
					ptr2 = ptr1.next;
			}
		}

    }

}

module.exports={
    LinkedList
}