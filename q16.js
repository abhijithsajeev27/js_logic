const fs= require('fs');

var read=require('readline-sync')
let food={
  seatno:[],
  food_preference:[]

}
let seat=[
          ['','','','',''],
          ['','','','',''],
          ['','','','',''],
          ['','','','',''],
          ['','','','','']
        ];//00
      
let k=1
for(i=0;i<5;++i){
  for (j=0;j<5;++j){
    seat[i][j]=k;
    k+=1;
  }
}

console.log(seat)

l=read.question("Enter the traveller preference number...");

for(i=0;i<l;++i){
  
  food.seatno[i]=read.question("Enter the seat number.....")
  food.food_preference[i]=read.question("Enter the food preference.....");
}

for(i=0;i<5;++i){
  for(j=0;j<5;++j){
    for(k=0;k<l;++k){
      if (seat[i][j]==food.seatno[k]){
         seat[i][j]=food.food_preference[i]
      }
    }
  }
}

console.log(seat)