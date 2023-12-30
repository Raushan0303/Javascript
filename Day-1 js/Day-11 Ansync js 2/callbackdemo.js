
//task

//1. Write a function to download data from url.
//2. Write a function to save that downloaded data in a file and return the filename
//3. write a function to upload the file written in previous step to new url.

function fetchCustom(url, fn){
 //download content of url
 // this downloading can take sometime
 // we will download the content from url, and then whatever is the result , we will pass to the callback
console.log("Starting downloading from", url);
setTimeout(function process(){
    console.log("Download completed");
    let response = "Dummy data";
    fn(response);
   
}, 3000);
}

function writeFile(data, fn){
    //this function writes data in a new file
    console.log("Writing data", data);
    setTimeout(function process(){
        console.log("Writing completed");
        let filename = "Output.text";
        fn(filename);
        console.log("Writing ended");
    }, 3000)
}

function uploadFile(filename, newurl, fn){
    console.log("Upload started");
    setTimeout(function process(){
        console.log("File", filename, "upload successfully on", newurl);
        let uploadResponse = "SUCCESS";
        fn(uploadResponse);
        console.log("upload ended");
    }, 4000)
}


fetchCustom("www.google.com", function downloadCallback(response){
    console.log("Downloaded response is", response);
    writeFile(response, function writecallback(filenameResponse){
        console.log("new file is written", filenameResponse);
        uploadFile(filenameResponse, "www.drive.google.com", function uplooadcallback(uploadResponse){
            console.log("new file is uploaded", uploadResponse);
        })
    })
    
});