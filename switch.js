/*
* Switch Statements
* Homework Assignment #5: Switch Statements
*
*/
 let givenString = ["seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"];

/* 1.objective is create function having four perameters out that two should
     be integer and two string
   2. Verify input perameter wather integer or not
   3. Verify string

*/
function checkParse(data){
                    console.log("input invalid");
                    return "not valid";
                }
let arrItemIs = function itemInCheckArray(item){
                var n = givenString.includes(item);
                 return n;
}

 function timeAdder(value1, label1, value2, label2){

      value1 =  (value1 == parseInt(value1,10)) ?  value1 : checkParse(value1);
      label1 =   typeof(label1) == "string" ?  label1 : checkParse(label1);
      value2 =  (value2 == parseInt(value2,10)) ?  value2 : checkParse(value2);
      label2 =   typeof(label2) == "string" ?  label2 : checkParse(label2);
      if(arrItemIs(label1)  !== true || arrItemIs(label2)  !== true){
          console.log("Item is not in array");
          return;
      }


   let arr = [value1, label1, value2, label2]
   console.log(arr);
 }

 timeAdder(5, "minute",3,"our");
