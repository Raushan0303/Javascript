function fun(x, fn){
    /**
     * x -> number
     * fn -> callback function
     */

    //some logic
    for(let i = 0; i<x; i++){
        console.log(i);
    }
    fn(); //calling the callback function passed
    //some more logic
}

// fun(10, function log(){
//     //this is the callback function
//     console.log("Custom logger");
// });

// fun(2, function(){
//     console.log("Annonymous function")
// });

// fun(5, gun);
// function gun(){
//     console.log("Inside gun");
// }

let g = function gun(){
    console.log("Inside g");
}

fun(5, g); 