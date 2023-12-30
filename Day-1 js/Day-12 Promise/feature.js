
//task

//1. Write a function to download data from url.
//2. Write a function to save that downloaded data in a file and return the filename
//3. write a function to upload the file written in previous step to new url.

function fetchData(url){
    return new Promise(function(resolve, reject){
        console.log("Start downloading from", url);
        setTimeout(function processDownloading(){
            let data = "dummy data";
            console.log("Downlaod completed");
            resolve(data);
            console.log("hello");
            // resolve("Raushan");// this line will not be executed as promise is fullfilled only once
            // resolve(12345);
        }, 7000);
    });
}

function writeFile(data){
    return new Promise(function(resolve, reject){
        console.log("Started writing", data , "in a file");
        setTimeout(function processWriting(){
            let filename = "result.txt";
            console.log("File written successfully");
            resolve(filename);
        },3000 );
    });
}

function uploadData(file, url){
    return new Promise(function(resolve, reject){
        console.log("Upload started on url", url , "filename is", file);
        setTimeout(function processupload(){
            let result = "Success";
            console.log("Upload done");
            resolve(result);
        }, 5000);
    });
}

// let data = fetchData("www.datadrive.com");


// let downloadPromise = fetchData("www.datadrive.com");
// downloadPromise.then(function processDOwnload(value){
//     console.log("Download promiss fullfilled");
//     console.log("Data is", value);
//    let writePromise = writeFile(value);
//    writePromise.then(function processWriting(value){
//     console.log("writing done");
//     console.log("filename is", value);
//    })
// })
//Above piece of code solve inversion control but still gets promise hell

// let downloadPromise = fetchData("www.datadrive.com");
// x = downloadPromise
// .then(function processDownload(value){
//     console.log("Downloading is done with the following value", value);
//     return "Raushan";
// });

// x.then(function process(value){
//     console.log("x promise value is", x);
// })

let downloadPromise = fetchData("www.datadrive.com");
x = downloadPromise
.then(function processDownload(value){
    console.log("Downloading is done with the following value", value);
    return value;
})
.then(function processWriting(value){
    return writeFile(value);
  })
  .then(function processUpload(value){
    return uploadData(value,"www.google.com");
   
  });
   




