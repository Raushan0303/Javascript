function demo1(){
    return new Promise(function(resolve, reject){
       console.log("hi");
       setTimeout(function process(){
        console.log("whoo,Task done");
        resolve("Students are best");
       },10000)

       console.log("by");
    })
}

function demo2(val){
    return new Promise(function(resolve,reject){
        console.log("Start");
        setTimeout(function process(){
            console.log("complete timer");
            if(val%2 == 0){
                //even number
                console.log("Number is even")
                resolve("Even");
            }else{
                //odd number
                console.log("Number is odd")
                reject("Odd");
            }
        },1000)

        console.log("somewhere");
    })
}

let evenodd = demo2(20);
evenodd.then(function check(value){
    console.log(evenodd)
    return value;
})
.then(function(value){
    return demo1(value)
});