function process(){
    console.log("Start");
    for(var i=0; i<3; i++){
        setTimeout(function exec(){
            console.log("Exwcuted after some time",i);
        }, 3000);
        console.log("inside for loop");
    }
    for(var j = 0; j< 1000000; j++){
        //some task
    }

    console.log("End");

}
process();
