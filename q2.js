
var read=require('readline-sync')
let fare=read.question("Enter the fare for the passenger...");

let t=read.question("Enter the time...");

let new_fare=0;

if(l>'10000' & l<='20000'){
    point+=10;
}
else if(l>'20000'&l<='50000'){
    point+=20;
}
else if (l>'50000'&l<='100000'){
    point+=50;
}

console.log(point)