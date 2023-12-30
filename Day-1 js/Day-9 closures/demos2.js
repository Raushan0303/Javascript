function todo(task){
     console.log("Starting todo");
     setTimeout(function fun(){
        console.log("completed", task);
     },5000);

     task = "Raushan";
     console.log("end todo");
}
console.log("starting");
todo("assignment");
console.log("Ending");