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

// let downloadPromise = fetchData("ww.drivel.google.com");

// let writePromise = writeFile("dummy data");

// let uploadPromise = uploadData("test.txt", "drive.google.com");
async function process1() {
    let downloadedData = await fetchData("www.google.com");
    let file = await writeFile(downloadedData);
    let uploadResponsel = await uploadData(file, "www.drive.google.com");
    return uploadResponsel;
  }
  
  async function process2() {
    let downloadedDatal = await fetchData("www.google.com");
    let filel = await writeFile(downloadedDatal);
    let uploadResponse2 = await uploadData(filel, "www.onedrive.com");
    return uploadResponse2;
  }
  async function process3() {
    let downloadedData2 = await fetchData("www.google.com");
    let file2 = await writeFile(downloadedData2);
    let uploadResponse3 = await uploadData(file2, "www.metabase.com");
    return uploadResponse3;
  }

console.log("start");

// Promise.all([downloadPromise, writePromise, uploadPromise]).then(function process(value) {
//     console.log(value);
// });

Promise.all([process1(), process2(), process3()]).then(function process(value) {
    console.log(value);
});