//how can we write a function to download some data from a url, and not use callbacks
// instead use promise?
function fetchData(url){
    return new Promise(function(resolve, reject){
        console.log("Starting fetching from ", url);
        setTimeout(function process(){
            let data = "Dummy data";
            console.log("completed fetching the data");
            //somehow we need to return the data ? - TODO
            resolve(data); //return some data on success
        },4000);

    })
 }

fetchData("www.google.com");

function fetch1(data){
    return new Promise(function(resolve, reject){
        //write any logic
        for(let i = 0; i< 10000000000; i++){
            //some task
        }
        console.log("completed");
        resolve("Raushan");
    })
}

let x = fetch1("www.google.com");
console.log("We have called the promise", x);



