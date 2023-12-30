function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from", url);
        setTimeout(function processDownloading() {
            let data = "Dummy data";
            console.log("Download completed");
            //resolve(data);//output-> value is dummy data
            reject(data); //output -> error is dummy data
        }, 7000);
    });

}

let x = fetchData("fksbkvf");
x.then(function success(value) {
    console.log("value is", value);
}, function err(err) {
    console.log("error is", err);
});