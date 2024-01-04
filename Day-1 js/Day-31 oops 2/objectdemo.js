let obj = {
    x: 20,
    y: 10
}

Object.freeze(obj); // neither update nor add new property by this function
obj.y=30;
console.log(obj); //{x: 20, y: 30}

let obj1 ={
    x:45,
    y:54
}

Object.seal(); //by this function we can not add new property but can update old one
obj1.x=65;
obj1.y=64;
obj1.z=67;
console.log(obj1);

const obj2={
     x:23,y:35
}


//but cannot reassign the obj2 value directly as it is declared by const
obj2.x=55;
obj2.y=99;
console.log(obj2);