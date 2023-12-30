function fetchData(url){
    return new Promise(function(resolve, reject){
        console.log("going to start download");
        setTimeout(function process() {
            let data = "Dummy data downloaded";
            console.log("Download completed");
            resolve(data);

        },1000)
       console.log("Timer to mimic download started");
    })
}

console.log("Starting the program");
console.log("We are expecting to mimic downloader");
x = fetchData("www.google.com");
console.log("New promise object created successfully, but downloading still going on");
console.log(x);