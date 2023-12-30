function fun(){
    console.log(x); // why we get undefined ? -> lexical scoping 
    var x =10;
    console.log(x);
}
fun();

{
   
 var y = 10; // becomes global due to var
}

console.log(8);
 if(true){
    var z =30;
 }

 if (false){
    var a = 20;
 }

 console.log(z);
 console.log(a);