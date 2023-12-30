console.log(null == undefined); //true due to abstract operation
console.log(undefined == null); // true due to abstract operation mention in the official documentations
console.log(10 == "10"); // ToNumber("10") => 10, 10 = 10 -> true
console.log(10 == "12"); // ToNumber("12") => 12, 10 = 12 -> false
console.log(false == 0); //ToNumber(false) => 0, 0 = 0 -> true
console.log(true == 10); //ToNumber(true) => 1, 1=10 -> false
console.log(true == "1"); //ToNumber(true, 1) => 1 = 1 -> true
console.log(10 == {valueOf() {return 10}}); //ToPrimitive({valueOf() {return 10}}) -> hint:number, 10=10 -> true
