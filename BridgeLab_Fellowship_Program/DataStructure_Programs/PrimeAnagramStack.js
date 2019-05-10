/**
 * purpose     :  Insert Prime number in Stack using LinkedList according to range. 
 *               
 * @description
 * @file       :  PrimeAnagram.js
 * @author     :  DipakPatil
 * @version    :  1.0
 * @since      :  21-2-2019
 * 
 */
let u = require("../Utility/Util");
let list=require("./StackLinkedList");
// let ud = require("./utility");
 var primenumbers=[];
//let primenumbers = u.isPrime(1000);
//console.log(primenumbers);
 for(var i=0;i<1000;i++)
 {
     if(u.isPrime(i)) {
         var num=i;
         primenumbers.push(i);
     }
 }
 //console.log(primenumbers);

 let array = [];
    let range = 100;
    let k = 0;
    let row = 0;
    //for comparing two prime are anagram or not.
    for (let i = 0; i < primenumbers.length - 1; i++) {
        for (let j = i + 1; j < primenumbers.length; j++) {
            //check two primes angram or not
            if (u.checkAnagram(primenumbers[i], primenumbers[j])) {

                /*if (primenumbers[i] <= range) {
                    //store the two anagram in array
                    if (primenumbers[j] <= range) {
                        array[k].push(primenumbers[i]);
                        array[k].push(primenumbers[j]);
                    }
                } else {
                    range = range + 100;
                    k++;
                    array[k] = [];
                    if (primenumbers[j] <= range) {
                        array[k].push(primenumbers[i]);
                        array[k].push(primenumbers[j]);
                    }
                }*/
                array.push(primenumbers[i]);
                array.push(primenumbers[j]);
                
            }

        }
    }
    var l=new list.StackLinkedList();
    for (i = 0; i < array.length; i++)
    {
        l.push(array[i]);
    }
    l.display();
 
 
