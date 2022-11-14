for (let i = 2; i <= 30; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}