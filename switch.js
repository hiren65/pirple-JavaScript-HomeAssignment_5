/*
* Switch Statements
* Homework Assignment #5: Switch Statements
*
*/
 let givenString = ["seconds", "minutes", "hours", "days"];
 let givenString1 = [ "second", "minute", "hour", "day"];

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
let arrItemIs1 = function itemInCheckArray(item){
                var n = givenString1.includes(item);
                 return n;
}

 function timeAdder(value1, label1, value2, label2){

      value1 =  (value1 == parseInt(value1,10)) ?  value1 : checkParse(value1);
      label1 =   typeof(label1) == "string" ?  label1 : checkParse(label1);
      value2 =  (value2 == parseInt(value2,10)) ?  value2 : checkParse(value2);
      label2 =   typeof(label2) == "string" ?  label2 : checkParse(label2);
      if(value1 !== parseInt(value1) || value2 !== parseInt(value2)){
        console.log("value1 is invalid");
        return;
      }
      if(label1 === "not valid" || label2 === "not valid" ){
        console.log("label2 is invalid");
        return;
      }

     /*
      if(arrItemIs(label1)  !== true || arrItemIs(label2)  !== true){
          console.log("Item is not in array");
          return;
      }
      */
      if(value1<10 && arrItemIs1(label1)  !== true){

              console.log("Item is not in array 00");
              return;
          }
     if(value1>10 && arrItemIs(label1)  !== true){

                  console.log("Item is not in array 11");
                  return;
            }
      /////
      if(value2<10 && arrItemIs1(label2)  !== true){

              console.log("Item is not in array 22");
              return;
          }
     if(value2>10 && arrItemIs(label2)  !== true){

                  console.log("Item is not in array 33");
                  return;
            }



   let arr = [value1, label1, value2, label2]
   console.log(arr);
 }

 timeAdder(2, "minute",63,"seconds");
