function fun(inputString, fn){
    //internal function
    //executes some algorithm on the string
    // console.log(`${inputString}`)
    let output = inputString.split(',');
    console.log(output);
    for(let i = 0; i< output.length; i++){
        fn(output[i]);
        fn(output[i]);
    }
}

//using it

fun("name: Raushan, subject: cse", function process(ip){
    let arr = ip.split(":");
    console.log("{", arr[0], "=>", arr[1], "}");
    
})