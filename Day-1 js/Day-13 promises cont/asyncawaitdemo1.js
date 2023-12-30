
function fetchData(url){
    return new Promise(function(resolve, reject){
        console.log("Start downloading from", url);
        setTimeout(function processDownloading(){
            let data = "dummy data";
            console.log("Downlaod completed");
            resolve(data);
            console.log("hello");
            
        }, 7000);
    });
}

async function processing(){
    console.log("Enter processing");
    let value1 = await fetchData("www.youtube.com");
    console.log("youtube downloading done");
    let value2 = await fetchData("www.google.com");
    console.log("google downlaoding is done");
    return value1+value2;
}
console.log("start");

setTimeout(function timer1(){console.log("timer 1 is done");},0);
console.log("after setting timer1");
let x = processing();
x.then(function(value){
    console.log("finally processing promise resolves with", value);
});

setTimeout(function timer2(){console.log("timer 2")},1000);
setTimeout(function timer2(){console.log("timer 3")},0);
console.log("end");


