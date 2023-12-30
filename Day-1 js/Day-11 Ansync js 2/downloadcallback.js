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

   const response = fetchCustom("www.google.com", function callback(response){
    console.log("downloaded content is", response);
    console.log("End of file");
   })