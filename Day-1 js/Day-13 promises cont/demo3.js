function dummyPromise(){
    return new Promise(function f(resolve, reject){
        setTimeout(function(){
            resolve("Timer's promise");
        }, 0);
    });
}


console.log("Start of the file");

setTimeout(function timer1(){
    console.log("Timer 1 is done");
    let y = dummyPromise();
    y.then(function promiseY(value){
        console.log("whose promis ?", value);
    });
    
}, 0);

// for(let i = 0; i< 1000000000; i++){
//     //something
// }

let x = Promise.resolve("Sanket's promise");
x.then(function processPromise(value){
    console.log("Whose promise ?", value);
});


setTimeout(function timer2(){
    console.log("Timer 2 is done");
}, 0);

console.log("End of the file");