
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

async function process(){
    let downloadedData = await fetchData("www.google.com");
    console.log("Downloading await completed");
    let file = await writeFile(downloadedData);
    console.log("Writing await completed");
    let uploadResponse = await uploadData(file, "www.drive.google.com");
    console.log("uplaoding await completed");
    console.log("Completed process witht responsne:", uploadResponse);

    return true;

}
console.log("start");
x = process();
console.log("end");