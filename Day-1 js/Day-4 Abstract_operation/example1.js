let a =5;
if(a){ //if(condition) condition should have to true to enter the loop, here a = 5 is a truthy value, means it will enter to the loop
    console.log("Hey there");//this line will be printed
}

if(a == true){ // ToNumber(true) => 1, 1==5 => false, hence it will not enter into the loop 
    console.log("By By");// this line wont be printed
}