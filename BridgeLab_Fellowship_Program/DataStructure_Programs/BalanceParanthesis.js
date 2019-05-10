/**
  * @Purpose   :To check the paranthesis balanced or not by using stack.
  * @author    : DipakPatil
  * @version   : 1.0
  * @since     : 09-05-2019
  **/

var stack=require("./ParanthesisStack");

var exp="(5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)";
var char=[];
var char=exp.split('');
console.log(char);
var s=new stack.Stack();
for(var i=0;i<char.length;i++)
{
    if(char[i]=='(')
    s.push(char[i]);
    else if(char[i]==')')
    s.pop();
}

if(s.isEmpty()){
    console.log(" balance Paranthesis");
}
else {
    console.log("Not Balanced Paranthesis");
}