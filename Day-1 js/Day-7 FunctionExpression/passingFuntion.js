function fun(){
    console.log("function called");
}

function gun(fn){
    console.log("inside gun");
    fn();
    console.log("Leaving gun");
}

gun(function(){
      console.log("new function passed");  
});

gun(fun);