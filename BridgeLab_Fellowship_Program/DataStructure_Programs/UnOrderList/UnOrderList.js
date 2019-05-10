/**
 * @Purpose   :To create Unordered linked list Take a user input to search a Word in the List. 
 *             If the Word is not found then add it to the list, and if it found then remove the
 *             word from the List.
 * @author    : DipakPatil
 * @version   : 1.0
 * @since     : 09-05-2019
 **/


const fs=require('fs');
var readline=require("readline-sync");
var a=require("../UnOrderList/LinkedList1")
/*fs.readFileSync('file2.txt','utf8',(err,data)=>{
    this.data=data;
    if(err) throw err;
    console.log(data);
});
console.log(this.data);        
*/
const l=new a.LinkedList1();
var data=fs.readFileSync('file2.txt','utf8');
var element=[];
var arr=[];
console.log(data);
element=data.split(" ");
console.log(element);
    for(let i=0;i<element.length;i++)
{
    l.add(element[i]);
}
//l.show();

var search=readline.question("Enter a String you want to search:");

var status=l.search(search);
if(status) {

    console.log("This string is found into file, so we can delete this string");
    l.delete(search);
    //console.log(element);
    console.log("Our Linked list is:");
    arr=l.show();
    console.log(arr);
    fs.writeFileSync("file2.txt",arr);
}
else {
    console.log("This string is not found into file, so we add into the file");
    l.add(search);
    arr=l.show();
    console.log(arr);
    fs.writeFileSync("file2.txt",arr);
}
    

//console.log(element);


//UnorderLinkedList();