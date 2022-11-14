const { Console } = require('console');
const fs= require('fs');
var read=require('readline-sync')
let temp='';
let j=0;
let k=1;
let array=[];
let store=[];
let arrayindex=0
let len=read.question("Enter the length...");
for(i=0;i<len;i++){
temp=read.question("Enter the flight fare...");
if(temp%2==0){
        array[k]=temp;
        k+=2
}
else{
        array[j]=temp;
        j+=2
}
}
console.log(array)