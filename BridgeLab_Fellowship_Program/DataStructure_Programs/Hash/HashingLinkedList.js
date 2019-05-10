class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class HashingLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        let n = new Node(data);
        if (this.head == null) {
            this.head = n;
            this.size++;
            return;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            this.size++;
            current.next = n;
        }
    }

    insertFirst(data) {
        let n = new Node(data);
        if (this.head == null) {
            this.head = n;
            this.size++;
            return;
        }
        else {
            n.next = this.head;
            this.head = n;
            this.size++;
            return;
        }
    }

    insert(index, data) {
        if (index == 1) {
            this.insertFirst(data);
            return;
        }
        if (this.head == null) {
            return;
        }

        var n = new Node(data);
        var c = 0, pre = this.head, curr = this.head;
        while (curr) {
            if (c == index - 1) {
                pre.next = n;
                n.next = curr;
                this.size++;
                return;
            }
            c++;
            pre = curr;
            curr = curr.next;
        }
        return false;
    }

    deleteFirst() {
        if (this.head == null) {
            console.log("No element present in the list");
            return;
        }
        var n = this.head.data;
        this.head = this.head.next;
        this.size--;
        return n;
    }

    


    remove(data) {

        var curr = this.head;
        if (curr.data == data) {
            this.deleteFirst();
            return;
        }
        var pre = curr;
        while (curr) {
            if (curr.data == data) {
                pre.next = curr.next;
                this.size--;
                return curr.data;

            }

            pre = curr;
            curr = curr.next;
        }
        return null;
    }

    search(item) {
        if (this.head == null) {
            return false;
        }
        var curr = this.head;
        while (curr) {
            if (curr.data == item) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }

    isEmpty() {
        if (this.size == 0) {
            return true;
        }

        return false;
    }

    sizeOfList() {
        return this.size;
    }

    
    show() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str = str + curr.data + " ";
            if (curr.next != null) {
                str = str + "  ";
            }
            curr = curr.next;
        }
        console.log(str);
        return str;



    }
    getData() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str = str + curr.data;
            if (curr.next != null) {
                str = str + " ";
            }
            curr = curr.next;
        }
        return str;
    }
}
module.exports={
    HashingLinkedList
}