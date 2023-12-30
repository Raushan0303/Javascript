function process(){
    console.log("Start");

        setTimeout(function exec(){
            console.log("inside the 7 s timeoout");
        }, 7000);
      
        setTimeout(function exec(){
            console.log("inside the 3 sec timeout");
        }, 3000);
}

process();
// for(let i = 0; i< 1000000000; i++){
//     //some task
// }//
setTimeout(function exec(){
    console.log("last timeout");
}, 0);
