const { Console } = require('console');
const fs= require('fs');
const { off } = require('process');
var read=require('readline-sync')

let arr=[100, 200, 550, 500, 400, 400]
// asc
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
// Search...
   search=read.question("Select a fare to search...: ");
   
    var count=0;
   for(i=0;i<arr.length;++i){
    if(search==arr[i]){
        count++;
    }
    
   }

   if(count>0){
    console.log("Present")
}
else console.log("fare not present...")


// Duplicate
console.log("Duplicates......")
let c=[]
for(i=0;i<arr.length;++i){
    count=0
   let c_len=c.length;
   for(j=0;j<=c_len;j++){
        if (arr[i]==c[j]){
            count+=1;
        }    
   }

if(count==0){
    c.push(arr[i])
} 
else process.stdout.write(arr[i]+' ')
}

// Max and Min
let max=arr[0]
let min=arr[0]
for(i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
    if(arr[i]<min){
        min=arr[i]
    }

}

console.log("maximum element....",max)
console.log("Minimum element",min)