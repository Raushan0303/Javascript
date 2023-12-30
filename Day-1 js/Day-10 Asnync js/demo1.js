function process(){
    console.log("Start");
    setTimeout(function exec(){
        console.log("Executed some task");
    }, 3000);

    for(let i = 0; i< 10000000000; i++){
        //some task
    }

    console.log("End");

}
process();
console.log("TATA");