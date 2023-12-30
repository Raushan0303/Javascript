if(true){
    let x = 10;
    console.log(x);
}

function fun(){
    console.log(y); // cannot access 'y' before initialization
    let y = 9;
    console.log(y);
}
fun();