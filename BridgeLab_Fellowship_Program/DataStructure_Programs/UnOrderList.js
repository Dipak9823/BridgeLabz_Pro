const fs=require('fs');

/*fs.readFileSync('file2.txt','utf8',(err,data)=>{
    this.data=data;
    if(err) throw err;
    console.log(data);
});
console.log(this.data);        
*/
var data=fs.readFileSync('file2.txt','utf8');
console.log(data);

       
