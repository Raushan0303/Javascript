const obj ={
    name: "Raushan",
    display: function(){
        console.log(this,"is the calling site");
    }
}
const obj1 ={
    name: "Raushan",
    display: ()=>{
        console.log(this,"is the calling site");
    }
}

obj.display();
obj1.display();