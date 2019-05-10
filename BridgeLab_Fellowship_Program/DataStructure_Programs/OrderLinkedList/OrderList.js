/**
  * @Purpose   :To create ordered linked list and perform operation like add, remove.
  * @author    : DipakPatil
  * @version   : 1.0
  * @since     : 09-05-2019
  **/


var readline=require("readline-sync");
var fs=require('fs');
var list=require("../OrderLinkedList/LinkedList");

var data=fs.readFileSync('file.txt');
var stringData=data.toString();
trim=stringData.trim();
//console.log(data);
var element=[];
var arr=[];

element=trim.split(/\s/);
console.log(element);
var l=new list.LinkedList();
for(let i=0;i<element.length;i++) {
    l.add(element[i]);
}
arr=l.show();
console.log(arr);
var key=readline.question("Enter a number you want to search:");
if(l.search(key)) {
    console.log("Element is found, its remove from file");
    l.remove(key);
    arr=l.show();
   console.log(arr);
}

else {
    console.log("Element is not found , its added into file");
    l.add(key);
    arr=l.show();
    console.log(arr);
}
