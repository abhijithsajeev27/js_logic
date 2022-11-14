const read = require('readline-sync')
const fs = require('fs')
let count=1;
while(true){

    console.log("1. Add Flight details");
    console.log("2. Display Shortest path");
    console.log("3. Display Longest path");
    console.log("4. Display lowest fare.");
    console.log("5. Display Highest fare");
    
    console.log("7. Exit");

    let option = read.question('Please select an option: ');
    switch (option) {
        case "1":
            addflight();
            break;

            function addflight() 
                {
                    console.log("Adding flight details......");
                    var user = {
                    dest: null,
                    distance: null,
                    fare: null,
                    source: null,
                    key: null
                };
            console.log("The code is here....")
            user.source = read.question("Source: ");
            user.dest = read.question("Destination: ");
            user.distance = read.question("Distance: ")
        
            user.fare = read.question("Fare: ");
            user.key=count;
            count+=1;

            let fileName = getFileName(count);
            var json = JSON.stringify(user);
            fs.writeFileSync(fileName, json);
            console.log("Success")
                }
     

function getFileName(key){
    return `data1/${key}.json`;
}



// Display all data
case '2':
    

    console.log("Starting of case 2")
       shortestpath()
    // Shortest path searching
function shortestpath(){
    short_source = read.question("Source: ");
    short_dest = read.question("Destination: ");
    let short=1000;
    for(i=0;i<files.length;i++)

    {

        var data=fs.readFileSync(`./data1/${files[i]}`,'utf-8')
        var obj=JSON.parse(data)
        if(obj.dest<short)
        short=obj[i]

    }
console.log(short)
}
}
}
