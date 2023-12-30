function test(){
    for(let i =0; i<5; i++){
        setTimeout(function exec(){
            console.log(`i: ${i}`); //`i: `+i
        }, i*1000);
    }
}
test();