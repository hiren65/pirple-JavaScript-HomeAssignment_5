/*
* Switch Statements
* Homework Assignment #5: Switch Statements
*
*/
//create arrays one for plural and other for not plural
let arr;
 let givenString = ["seconds", "minutes", "hours", "days"];
 let givenString1 = [ "second", "minute", "hour", "day"];

/* 1.objective is create function having four perameters out of that two should
     be integer and two string
   2. Verify input perameter wather integer or not
   3. Verify string weather in required input, for that match label with givenString
      and givenString1 arrays

*/
//function for check input value is integer or not
function checkParse(data){
                    console.log("input invalid");
                    return "not valid";
                }
// check input labels are in arrays or not
let arrItemIs = function itemInCheckArray(item){
                var n = givenString.includes(item);
                 return n;
}
let arrItemIs1 = function itemInCheckArray(item){
                var n = givenString1.includes(item);
                 return n;
}

//extra credit converting input i.e. 60 seconds in minute and 60 minute
// in 1 hours and 24 hours in days
let extra = function someAddOn(v1,l1,v2,l2) {
           arr[0] = v1;arr[1] = l1;
           arr[2] = v2;arr[3] = l2;
            if(arr[1] === "seconds" && arr[0]%60 == 0){
              arr[1] = "minute";
              if(arr[0]>10){arr[1] = "minutes";}
              arr[0] = arr[0]/60;
            }
            if(arr[1] === "minutes" && arr[0]%60 == 0){
              arr[1] = "hour";
              if(arr[0]>10){arr[1] = "hours";}
              arr[0] = arr[0]/60;
            }
            if(arr[1] === "hours" && arr[0]%24 == 0 ){
              arr[1] = "day";
              if(arr[0]>10){arr[1] = "days";}
              arr[0] = arr[0]/24;
            }
            ///
            if(arr[3] === "seconds" && arr[2]%60 == 0){
              arr[3] = "minute";
              if(arr[2]>10){arr[3] = "minutes";}
              arr[2] = arr[2]/60;
            }
            if(arr[3] === "minutes" && arr[2]%60 == 0){
              arr[3] = "hour";
              if(arr[2]>10){arr[3] = "hours";}
              arr[2] = arr[2]/60;
            }
            if(arr[3] === "hours" && arr[2]%24 == 0 ){
              arr[3] = "day";
              if(arr[2]>10){arr[1] = "days";}
              arr[2] = arr[2]/24;
            }
            //if both label perameters in single unmit then do summation and
            // make final array having two members
            if(arr[1] == arr[3]){
              let val1 = arr[0] + arr[2];
              let lab1 = arr[1];
              arr = [val1,lab1];
            }

}


// Main function for process
 function timeAdder(value1, label1, value2, label2){

      //all checks for value and labels if not than converts desire result
      value1 =  (value1 == parseInt(value1,10)) ?  value1 : checkParse(value1);
      label1 =   typeof(label1) == "string" ?  label1 : checkParse(label1);
      value2 =  (value2 == parseInt(value2,10)) ?  value2 : checkParse(value2);
      label2 =   typeof(label2) == "string" ?  label2 : checkParse(label2);
      // if value not integer than value throws invalid in console and return the function
      if(value1 !== parseInt(value1) || value2 !== parseInt(value2)){
        console.log("value1 or value2 is invalid or not integer err 01 \n");
        return;
      }
      // if label is wrong than stops for further process
      if(label1 === "not valid" || label2 === "not valid" ){
        console.log("label2 or label1 is invalid or not string err 02 \n");
        return;
      }
      if(value1 < 0 || value2 < 0){
        console.log("minus value is invalid \n");
        return;
      }


     /*
      if(arrItemIs(label1)  !== true || arrItemIs(label2)  !== true){
          console.log("Item is not in array");
          return;
      }
      */
      if(value1<10 && arrItemIs1(label1)  !== true){

              console.log("Item is not in array err 00 wrong input! \n"+label1);
              return;
          }
     if(value1>10 && arrItemIs(label1)  !== true){

                  console.log("Item is not in array err 11, wrong input! \n" +label1);
                  return;
            }
      /////
      if(value2<10 && arrItemIs1(label2)  !== true){

              console.log("Item is not in array err 22 wrong input! \n" +label2);
              return;
          }
     if(value2>10 && arrItemIs(label2)  !== true){

                  console.log("Item is not in array err 33 wrong input \n"+label2);
                  return;
            }



   arr = [value1, label1, value2, label2];
   extra(arr[0],arr[1],arr[2],arr[3]);
   // use of switch
   switch(arr){
     case arr:
          console.log(arr+ "\n");
          break;
   }
 }


//normal sample
 timeAdder(12, "hours",60,"days");
 console.log("||||| Testing block starts here  ||||||");

 //testing block i.e. function
 //Check following sample input in the form of arrays.
 //some of the valid format input
 a1 = [12, "hours",60,"days"];
 a2 = [24, "hours",60,"days"];
 a3 = [12, "days",60,"days"];
 a4 = [180, "minutes",61,"seconds"];
 //some of the invalid format input
 a5 = ["12", "hours",60,"days"];
 a6 = [24, "urs",60,"days"];
 a7 = [null, "days",60,"days"];
 a8 = [180, "minutes",61,undefined];
 testArr = [a1,a2,a3,a4,a5,a6,a7,a8];
let myTesting = function(testArr){
      for(var i=0;i<testArr.length;i = i+1){
          switch (i){
               case 0:
               case 1:
               case 2:
               case 3:
               console.log("Only valid input result case:"+i +"\n");
               break;
               case 4:
               case 5:
               case 6:
               case 7:

               console.log("/// Only invalid input result ///// case:"+i+ "\n");
               break;
          }

          timeAdder(testArr[i][0], testArr[i][1],testArr[i][2],testArr[i][3]);
      }
 }


myTesting(testArr);
