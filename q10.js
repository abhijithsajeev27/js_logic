
// Accept the 10 boarding pass numbers and allocate to a counter to check-in Qs. 
// Each Q can accommodate max 3 people. Allocate randomly if the Q has space. Max three counters are
// there
// const fs= require('fs');
var read=require('readline-sync')
let l=read.question("Enter the number of passengers...");
let inn='';
let q1=[]
let q2=[]
let q3=[]
let q1_f=0
let q2_f=0
let q3_f=0
let demo =0
for(i=0;i<l;++i){

        let inn=read.question("Enter the name of passenger...");
        demo=passf()

        function passf(){  
            let b = Math.floor(Math.random() * 3+1);
        
        if (b == 1 & q1_f==3|| b == 2 &q2_f==3 || b == 3 &q3_f==3)
        b=passf()
        return b  
         }
     
    if (demo == 1) 
       
    {q1.push(inn)
    q1_f+=1
    }
      
    else if (demo == 2 )
    {q2.push(inn)
    q2_f+=1}
        
    else if (demo == 3 )
    {q3.push(inn)
        q3_f+=1}
    
    console.log(q1)
    console.log(q2)
    console.log(q3)

}


