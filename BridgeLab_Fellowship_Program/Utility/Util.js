



/*************************************************************************************************************************** */
 /* Functional Programs*/
/*************************************************************************************************************************** */

/*var methods={
replaceString: function(str, name) {
    var newstring = str.replace(/username/, name);
    return newstring;
}
};
exports.data=methods;*/
var readline =require("readline-sync");

module.exports={
/************************************Replace String*********************************/

  /*
     * @Purpose   : By ensuring username with minimum 3 characters,replacing USERNAME with userinput
     *             and print the string.
     *  @descriptipn: Declaring the function and passing the userinput as argument.
     *  @function: displayname takes the userinput and print it with some sentence.
     */
  replaceString: function(name){
    var str="Hello username , How are you!!!";
    
    var newstring=str.replace(/username/, name);
    console.log(newstring);
    },
/************************************Flip Coin**************************************/
/** @purpose : By using random function flip the coin no of times from user input
    *            and print the percentage of head vs tails
    **/

  /*
   * @description : Declaring a function and passing the userinput for fliping the coin
   *                no of times
   * @function: coinFlip function declaring to generate random number
   *           
   */

    flipcoin: function(n){
        var tail=0;
        var head=0;
        for(let i=0;i<n;i++)
        {
            var r=Math.random();
            if(r>0.5)
            {
                head++;    
            }
            else{
                tail++;
            }
        }
        var perH=(head*100)/n;
        var perT=(tail*100)/n;

        console.log("Percentage of head is:"+perH);
        console.log("Percentage of Tail is:"+perT);

    },

/************************************Leap Year*******************************************/
  /*
   * @purpose : Taking input as a fourdigit number check whether the given number is a leap year
   *            or not. 
   * @description : Declaring the function and passing a four digit number from userinput
   * @function:  Function compares the length of given number and prints the number 
   *             is a leap year or not 
   */

    findleap(year){
        if(year%4==0 || year%400==0 && year/100!=0 )
        {
            console.log("This is Leap year");
        }
        else{
            console.log("This is not leap year");
        }
    },

/*********************************Power of 2*************************************/
  /* @purpose : generate the power of two values 
   * @param   : user input value
   * @description : it prints the two's power value 
   */

    powerOf2: function(num){
        console.log("The power is: "+Math.pow(2,num));

        for(let i=1;i<=num;i++)
        {
            console.log("the power of "+i+" "+Math.pow(2,i));
        }
    },
  /**********************************Harmonic****************************************/
  /* 
  * @purpose : To genarate harmonic numbers according to the userinput
     * @param    : input from user
     * @description : To generate the sum of harmonic numbers by taking input from user
     * @function : Harmonic function takes user input and sum it no of times that user given
     */
    findHarmonic(n)
    {
        var harmonicNumber=0;
        for(let i=1;i<=n;i++)
        {
            harmonicNumber +=(1/i);
        }
        console.log("The Harmonic number of given number is:"+harmonicNumber);
        
    },
/************************************GAMBLER****************************************/
  /*
  * @purpose : To calculate the total number of wins and percentage of wins and loss
  * @param   : stack- amount that player have 
  * @param   : goal - amount that player want to win 
  * @param   : totaltime -no of times he wants to play 
  * @description : the game continue upto, if player reached his goal,
  *               or he lost all his money or he lost his total number of times he want play.
  */
    gamblerMethod: function(stake,goal,noOfTimes)
    {
        //wins=0;
        bets=0;
        win=0;
        loose=0;
       for(let i=0;i<noOfTimes;i++)
        {
            cash=stake;
            while(cash>0 && cash<goal)
            {
                if(Math.random()>0.5)
                    cash++;
                else
                    cash--;
            }
            if(cash==goal)
            {
                win++
            }
            else
            {
                loose++;
            }
            

        }
        console.log("No of Time Win="+win);
            console.log("Percentage of win"+((win*100)/noOfTimes));
            console.log("Percentage of loose"+((loose*100)/noOfTimes));

    },
/***************************Coupon Numbers***********************************/

  /* @purpose: To get distinct coupon numbers
     @function: Functions to generate random number and to process distinct coupons.
   */
    findRandom: function(n){
       let arr=[];
       var status=true;
       var index=0; 
       arr[0]=Math.random()*n;
        while(index<n)
        {
            var randomNo=Math.random()*n;
            for(let j=0;j<n;j++)
            {
                if(arr[j]==randomNo)
                {
                    status=false;
                }
                if(status)
                {
                    arr[index]=randomNo;
                    index++;
                }
            }
        }
        for(let k in arr)
        {
            console.log(k);
        }
    },
/************************Two Dimensional Array******************************/
  /*
     *@purpose :to print Two Dimensional Array,from user input elements 
     *@param   : row-number of rows & column-number of columns
     *@description :ask user to enter total number of column and row
     *convert into two Dimenstional array format and prints 
     */
    twoDArray(row, column) {

      var arr = [];
      console.log("enter elements : ");
      //to generate the multi-dimensional array
      for (var i = 0; i < row; i++) {
        arr[i] = [];
        // adding elements by elements in generated array
        for (var j = 0; j < column; j++) {
          var ele = readline.question(' ');
          arr[i][j] = ele;
        }
  
      }
      return arr;
    },
/************************** Sum of three integers adds to 0*****************************/
  /*
    *@purpose :to find triplets from user input array elements
    *@param   :array elements
    * @description :if sum of 3 array elemets equals to zero its called triplet
    *prints the total triplets formed  
    */
    triplates: function(arr)
    {
        console.log("The Distinct Triplates are:");
        var count=0;

        for(let i=0;i<9;i++)
        {
            for(let j=i+1;j<9;j++)
            {
                for(let k=j+1;j<0;j++)
                {
                    if(arr[i]+arr[j]+arr[k]==0)
                    {
                        console.log(arr[i]+" + "+arr[j]+" + "+arr[k]+" ");
                    }
                }
            }
        }
        console.log("The number of Distinct Triplates are:"+count);
    },
/**********************************Distance******************************************/
  /*
   *  @Purpose :To find euclidean distance from the point (x, y) to the origin (0, 0).
   */
    countDistance: function(x){
        var dist=Math.sqrt(x*x+y*y);
        console.log("Distance from ("+x+","+y+") from (0,0) is:-"+dist);
    },

    /***************************************WindChill**************************************/
  /*
     *@purpose :to find the windchill, by using user input temperature and volume
     * @param  : temp-temperature from the user input
     *           vol-volume from the user input 
     *  @description :first check the input for temperture is in range 
     *                and for the volume range, and prints the results
     * */

    temprature: function(t,v){
        var w = 35.74 + 0.6215*t + (0.4275*t - 35.75) * Math.pow(v, 0.16);
        console.log("Temprature="+t);
        console.log("wind speed="+v);
        console.log("Weather="+w);
    },
/***********************************Quadratic*************************************/
  /*
  *@purpose : To calculate the Quadartic roots using user input value.
  *@param   : a-first element
              b-second element
              c-third element
  *@description : calculate the roots by using the formula and prints all possible roots.
  *
  */
    quadratic: function(a,b,determinant)
    {
        var root1,root2;
        if(determinant > 0) {
            root1 = (-b + Math.sqrt(determinant)) / (2 * a);
            root2 = (-b - Math.sqrt(determinant)) / (2 * a);
   
           console.log("root1 = %.2f and root2 = %.2f", root1 , root2);
        }
        // Condition for real and equal roots
	 else if(determinant == 0) {
        root1 = root2 = -b / (2 * a);

        console.log("root1 = root2 = %.2f;", root1);
    }
// If roots are not real
    else {
        var realPart = -b / (2 *a);
        var imaginaryPart = Math.sqrt(-determinant) / (2 * a);

        console.log("root1 = %.2f+%.2fi and root2 = %.2f-%.2fi", realPart, imaginaryPart, realPart, imaginaryPart);

    }

    },
/******************************Prime Factors****************************/

  /* @purpose : To genarate primeFactor numbers according to the userinput
   * @description : Finding the primefactors of a given number 
   */
    primeFactor(Num) {
      for (var i = 2; i <= Num; i++) {
        while (Num % i == 0) {
          console.log(i);
          Num = Num / i;
        }
      }
      if (Num > 2) {
        console.log(Num);
      }
    },
 /****************************************Permutation****************************** */
    /*  *@purpose :to find the permutation of given string and prints all combination
      *@param   : string-empty 
                  str-user input string 
                  first-first index
                  last-last index
      *@description :check all possible combination of string 
      *use recursion method to find possible combination
      *prints the all combination
      */
    permutation(string, str, first, last) {
        if (first == last) {
          console.log(str);
          string = string + str;
        }
        else {
          for (let index = first; index <= last; index++) {
            //call swapstring method swap the characters 
            str = this.swapString(str, first, index);            
            // recursion method 
            string = this.permutation(string, str, first + 1, last);
            str = this.swapString(str, first, index);
          }
        }
        return string;
      },
       // swap method for swaping the string character
       swapString(str, first, last) {
        var as = '';
        //empty array
        var ch = [];
        //split string into the character
        ch = str.split('');
        // temporary variable
        var temp = ch[first];
        ch[first] = ch[last];
        ch[last] = temp;
        for (let index = 0; index < str.length; index++) {
          as = as + ch[index];
        }
        return as;
      },
/************************StopWatch Program******************************* */
  /*
   *@purpose : To calculate the time that elapses between the start and end clicks
   *@param   : start-when execution start
   *@param   : stop - when execution stop
   *@Description : create object of Date and get time in seconds by using inbuild function
   */

      startTime: function(){
            var start=new Date().getTime();
            return start;
      },
      stopTime: function(){
            var stop=new Date().getTime();
            return stop;
      },
  

   

//module.exports=methods;

/************************************************************************************************************************** */
/* Algorithm Program*/
/************************************************************************************************************************** */


/************************String Anagram Program*************************/

    /*
     *@purpose : To check whether two strings are anagram or not.
     *@param   : str1-first string of user input 
     *           str2-second string of user input 
     *@description :Take two string from user and compare those, and prints the message 
                    wheather they are anagram or not.
     */
    checkAnagram(string1, string2){
      string1=string1+"";
      string2=string2+"";
      //checking the length of the both string 
      if (string1.length != string2.length){
          return false;
      }
      //create an empty array
      var arr = [];
      for (let index = 0; index < 36; index++){
          arr[index] = 0;
      }
          for (let index = 0; index < string1.length; index++){
              var ch = string1.charAt(index);
              if (ch >= 'a' && ch <= 'z') {
                  var code = ch.charCodeAt(0);
                  //converting into ascii value 
                  arr[code - 97]++;
                } 
              else if (ch >= 'A' && ch <= 'Z'){
                  var code = ch.charCodeAt(0);
                  //converting into ascii value 
                  arr[code - 65]++;
              } 
              else{
                  var code = ch.charCodeAt(0);
                  //converting into ascii value 
                   arr[code - 22]++;
              }
              ch = string2.charAt(index);
              if (ch >= 'a' && ch <= 'z'){
                  var code = ch.charCodeAt(0);
                  arr[code - 97]--;
              } 
              else if (ch >= 'A' && ch <= 'Z'){
                  var code = ch.charCodeAt(0);
                  arr[code - 65]--;
              } 
              else{
                  var code = ch.charCodeAt(0);
                  arr[code - 22]--;
              }
          }
      //loop for comparing the ascii values
      for (let index = 0; index < 36; index++){
          if (arr[index] != 0){
              return false;
          }
      }
      return true;
  }, 
 /*****************************Prime Numbers***************************/

    /* @Purpose   :To find prime numbers in between 0 t0 1000. */
      checkPrime(i)
      {
        for(let j=2;j<=i;j++)
        {
          if(i%j==0)
          {
            return false;
            break;
          }
          else{
            return true;
          }
        }
       
      },    

/********************Prime Numbers that are Anagram and palindrom**************************/

    /* @Purpose: to check prime numbers that are anagram and palindrom*/
      isPallindrome(i){
        var n=i;
        var reverse;
        while(n>0)
        {
          var rem=n%10;
          reverse=(reverse*10)+rem;
          n =Math.floor(n/10);
        }
        
        if(reverse==i)
          return true;
        
         
        },

      isAnagram(i)
      {
        for(let j=2;j<1000;j++)
        {
          for(let k=2;k<1000;k++)
          {
            if(this.anagram(k,j))
            {
              return true;
            }
            else
            {
              return false;
            }
          }
        }
        return false;
      },

      anagram(k,j) {
        var n1=[];
        var n2=[];
        n1 =this.count(k);
        n2=this.count(j);
        for(let m=0;m<n2.length;m++)
        {
          if(n1[m]!=n2[m])
            return false;
        }
        return true;

      },
      
      count(num) {
        var temp=num;
        var n=[];
        while(temp!=0)
        {
          var rem=temp%10;
          n[rem]++;
          temp =(temp/10);
        }
        return n;
      },

      findYourNumber: function(low,high)
      {
        let mid=Math.floor((high+low)/2);

        if(low==high)
          console.log("Your number is:-"+mid);
        
        var choice=readline.question("Enter the 0 if your number bet"+ low +"and"+ mid+", enter 1 if your number is between "+mid+" &"+high+":");
       
        if(choice==0)
        {
          return this.findYourNumber(low,mid);
        }
        else if(choice==1)
        {
          return this.findYourNumber(mid,high);
        }
        else
        {
          console.log("Invalid Choice");
        }
      },
/******************************Binary Search *********************************/

    /* @Purpose : to find the key index by using binary search*/
      findWord: function(words,word)
      {
        var len=words.length;
        var low=0;
        var high=len-1;
        
        while(low<=high)
        {
          var mid=Math.floor(low+high-1/2);

        //  var a=words[mid].localeCompare(word);

          if(word==words[mid])
            return mid;
          else if(word>words[mid])
              low=mid+1;

          else if(word<words[mid])
              high=mid-1;
          
        }
      },

//----------------------------------------------------------------------------------------------------------------------------//
//Bubble Sort
inputArray(array){
  var number = readline.question("Enter total number of array elements");
  for (var i = 0; i < number; i++){
      array[i] = Number(readline.question(" "));
  }
  return array;
},

bubbleSort(res){
  // compare first and next elements in array and arrange 
  for (let i = 0; i < res.length; i++){
      for (let j = i + 1; j < res.length; j++){
          if (res[i] > res[j]){
              var temp = res[i];
              res[i] = res[j];
              res[j] = temp;
          }
      }
  }
  return res;
},
//------------------------------------------------------------------------------------------------------------------------------//
//Insertion Sort
insertion(res){
  for (let i = 1; i < res.length; i++){
      var point = res[i];
      var j = i - 1;
      while (j >= 0 && res[j] > point){
          res[j + 1] = res[j];
          j = j - 1;
      }
      res[j + 1] = point;
  }
  return res;
},
//--------------------------------------------------------------------------------------------------------------------------//
//Vending Machine
vending(value,I,TOTAL){
  /*
 *  array to store values of notes
 */
var NOTES = [ 1000 , 500 , 100, 50, 10, 5, 2, 1 ];
/*
 * Function to find the notes and print the output
 * 
 * @param value the amount to which the note to despenced
 */
  if(Math.floor(value / NOTES[I]>0)){
      console.log(NOTES[I] + "rs notes :" + Math.floor(value / NOTES[I]));
      TOTAL=TOTAL+Math.floor(value / NOTES[I]);
      value = value % NOTES[I];
      this.vending(value,I+1,TOTAL);
      //return;
  }
  if (value==0 && I==NOTES.length){
console.log("total notes :" + TOTAL);
return;
  }
},
//---------------------------------------------------------------------------------------------------------------------------//
//Merge Sort
 /*******************************Merge Sort******************************/

    /*
     *@purpose : sort the array using the merge sort technique  
     *@param   : res-array
     *@description : take array,divide into two halves,and sort the elements for both right and left halves 
     */
    mergeSort(arr) {
      var n = arr.length;
      //if size is equals to 1 return it.
      if (n === 1) {
          // return once we hit an array with a single item
          return arr;
      }
      //cal mid value 
      var mid = Math.floor(n / 2);
      var left = arr.slice(0, mid);
      var right = arr.slice(mid);

      return this.merge(this.mergeSort(left), this.mergeSort(right));

  },

  merge(left, right) {
      var result = [];
      var i = 0;
      var j = 0;
      while (i < left.length && j < right.length) {
          if (left[i] < right[j]) {
              result.push(left[i]);
              i++;
          }
          else {
              result.push(right[j]);
              j++;
          }
      }


      return result.concat(left.slice(i)).concat(right.slice(j))
  },
//---------------------------------------------------------------------------------------------------------------------------//
//Monthly payment
payment(principle, year, rate){
  //formula to calculate the result
  var R = rate / (12 * 100);
  var n = 12 * year;
  var rs = Math.pow((1 + R), (-n));
  var calculation = (principle * R) / (1 - (rs));
  console.log("Monthly payment " + calculation);
},



//--------------------------------------------------------------------------------------------------------------------------//
//dayOfWeek     
    dayOfWeek1(day, month, year) { 
        var y0 = year - Math.floor((14 - month) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        var m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
        var res = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday"];
        if (d0 <= res.length) 
        {
            console.log("Day is " + res[d0]);
        }
        else {
            console.log("Invalid day ");
        }
    },
//----------------------------------------------------------------------------------------------------------------------------/
//Temparature Conversion
convertTemp(number){
  // convertion of Celsius to Fahrenheit
  if (number == 1) {
      var num = readline.question("Enter your celsius value :");
      var fahrenheit = (num * 9 / 5) + 32;
      console.log("Temperature in Fahrenheit: " + fahrenheit);
  }
  //convertion of Fahrenheit to Celsius
  else if(number==2){
      var num1 = readline.question("Enter your celsius value :");
      var celsius = (num1 - 32) * 5 / 9;
      console.log("Temperature in Celsius: " + celsius);
  }
  else{
      console.log("invalid value");
  }
},
//----------------------------------------------------------------------------------------------------------------------------//
//Square Root
sqrt(num){
  if (num > 0){
      //formula 
      var t = num;
      var epsilon = 1e-15;
      while (Math.abs(t - num / t) > epsilon * t){
          t = (num / t + t) / 2;
      }
      console.log("Squre root of non negative number is : "+ t)
  }
  else{
      console.log("Number should be positive ");
  }
},
//-----------------------------------------------------------------------------------------------------------------------------//
//ToBinary
tobin(num){
  var str = "";
  while (num > 0){
      var r = num % 2;
      var str = r + str;
      num = Math.floor(num / 2);
  }
  //padding generate 4 byte 
  while (str.length < 8){
      str = "0" + str;
  }
  return str;
},
//---------------------------------------------------------------------------------------------------------------------------//
//Swap Nibbl

/*draw(){
  var arr=[];
  for(let i=1;i<=3;i++)
  {
    arr[i]=[];
    for(let j=1;j<=3;j++)
    {
      arr[i][j]==-1;
    }
  }
  for(let i=1;i<=3;i++)
  {
    for(let j=0;j<=3;j++)
    {
      console.log("|"+arr[i][j]+"|");
    }
  }



},
checkWin(){
  if(arr[i][j]==)
  
},
userTurn(){
  var row=readline.question("Enter the Row:");
  var column=readline.question("Enter the column:");
  if(row>=3 && column>=3)
  {
    if(arr[i][j]==-1)
    {
      arr[row][column]=X;
    }
  }
  if(checkWin())
  {
    console.log("You win");
  }
  else {
    computerTurn();
  }
},
computerTurn(){
  var row=Math.random()*3;
  var col=Math.random()*3;
  
  if(arr[row][col]==-1)
  {
    arr[row][col]=O;
  }
  else{
    console.log("Enter valid row and column ");
    this.computerTurn();
  }

  if(checkWin)
  {
    console.log("You loose");
  }
},

ticTocToe()
{
  
}
*/    



/************************************************************************************************************************
  Data Structure Programs
 ************************************************************************************************************************/
isPrime(num) {
  try {
    if (num == 0 || num == 1)
      return false;
    for (let i = 2; i < num; i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }
  catch (e) {
    console.log(e.message);
  }
},

/*******************************Calender.js***************************** */
dayOfWeek(month,year) {
  var y = parseInt(year);
  var m = parseInt(month);
  var d = parseInt(1);
  var day;
  var y0 = y - Math.floor((14 - m) / 12);
  var x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400);
  var m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
  var d0 = (d + x + Math.floor(31 * m0 / 12)) % 7;
  d0 = parseInt(d0);
  switch (d0) {
      case 0:

          day = 0;

          break;
      case 1:

          day = 1;
          break;
      case 2:

          day = 2;
          break;
      case 3:

          day = 3
          break;
      case 4:

          day = 4;
          break;
      case 5:

          day = 5
          break;
      case 6:

          day = 6;
  }

  return day;

},



display(month, day, year) {
 
  if (month == 2) {
      feb
      if ((year % 4 == 0)&&(year % 100 != 0) || (year % 400 == 0)) {
          var feb = 29;
      } else {
          feb = 28;
      }
  }



  var monthNames = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var dayNames = ["S ", "M ", "T ", "W ", "Th ", "F ", "S "];

  var dayPerMonth = ["", "31", "" + feb + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

  var mon = new Array(7);

  for (var i = 0; i <= 7; i++) {
      mon[i] = new Array(7);
  }
  var weekdays = day;

  for (i = 0; i < 7; i++) {
      for (j = 0; j < 7; j++) {
          mon[i][j] = 0
      }
  }
  for (var i = 0; i <= month; i++) {
      if (month == i)
          console.log(monthNames[i])
      var nd = dayPerMonth[i]
  }

  console.log('Number of days in month:- ', nd);

  console.log(dayNames.toString(''));
  var count = 0;
  var j = 0;
  var days = day - 1
  var max = nd;

  var min = 1;
  for (i = 0; i < 7; i++) {
      for (j =0; j < 7; j++) {

          {
              if (min <= max)
                  if (i == 0 && j <= days)
                      mon[i][j] = "  ";
                  else {

                      mon[i][j] = min;
                      min += 1
                  }
          }
      }
  }
  for (i = 0; i < 6; i++) {
      for (j = 0; j < 7; j++) {
      
          console.log(mon[i][j] + " ");
      }
      console.log();
  }

}
/***************************** */

}