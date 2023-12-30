var Myname = "Raushan";
function greet(){
    console.log("greeting!", Myname);
    var x =9;
    function tolate(){
        console.log("you are too late!", x);
    }
    console.log(x);
    tolate();
}
function fun(){
    console.log("Have fun!", Myname);
}
greet();
fun();
