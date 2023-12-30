function checkDirection(val){
    // val will always a number, and val wont be NaN
    //tell us whether val is a negative value or a positive value
    // if val is negative return 'left' otherwise if val is positive return 'right'
    if(!Number.isNaN(val)){
    if(val<0){
        console.log("left, it means val is negative number");
    }
    if(val>0){
        console.log("right, it means val is positive number");
    }

}
console.log("Number is NaN");
} 

checkDirection(0/0);