const { Console } = require('console');
const fs= require('fs');
var read=require('readline-sync')
let arr =['abc', 'def', 'deqa def']
function Sort_asc(arr){
    
    for(var i = 0; i < arr.length; i++){
     
      for(var j = 0; j < ( arr.length - i -1 ); j++){
         
        if(arr[j] > arr[j+1]){
           
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }
    console.log("ascending Order")
    console.log(arr);
   }
    
   
   Sort_asc(arr);
   Sort_des(arr);
//    Descending order

function Sort_des(arr){
    
    for(var i = 0; i < arr.length; i++){
     
      for(var j = 0; j < ( arr.length - i -1 ); j++){
         
        if(arr[j] < arr[j+1]){
           
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }
    console.log("Desc Order")
    console.log(arr);
   }


// Searching for name


search=read.question("Select a name to search...: ");
   
    var count=0;
   for(i=0;i<arr.length;++i){
    if(search==arr[i]){
        count++;
    }
    
   }

   if(count>0){
    console.log("The name is present in the array")
}
else console.log("name not present...")
// Finding the length of each element in the array

// for(i=0;i<arr.length;i++){
//     console.log(arr[i].length)
// }



// Printing duplicates..........
var c=[]

console.log(c)
for(i=0;i<arr.length;i++){
    console.log()
for (let j = 0; j < arr[i].length; j++) {
    if(arr[i][j]!=' ')
    process.stdout.write(arr[i][j])
    else
    console.log()
}
}