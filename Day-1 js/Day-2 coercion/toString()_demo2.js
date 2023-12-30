console.log("Raushan" + {"a" : 10});
/**
 * "Raushan"-> is already a primitive
 * {"a": 10} -> is not a primitive, so, we call ToPrimitive without a hint, means hint -> number
 * means hint -> number
 * we first call valueOf on {"a" : 10} -> and it returns same object
 * we call toString will return '[object  object]' which is string i.e. primitive
 * 
 * "Raushan" + "[object object]" -> "Raushan[object object]"
 */
console.log(10 - {"a" : 10});
/**
 * 10 is already a number
 * {"a":10} is going to converted ToNumber, and this is an object,
 * for object we call ToPrimitive with hint Number
 * first we call valueOf -> it returns the same object -> {"a":10}
 * then we call toString -> it returns '[object object]' which is primitive
 * so call ToNumber on '[object object]' which gives NaN because this string unable to convert into the number
 * 10 - NaN = NaN;
 */
let x = {"b": 90, valueOf() {return 2;}};
/**
 * x is an object , we need to pass it to ToPrimitive with hint Number
 * we call valueOf() -> it returns 2; which is primtive
 * x becomes 2, 10 is already a number 
 * 2 - 10 = 8
 */

console.log("Raushan" + {"a": 90, valueOf() {return {}}, toString() {return {}}});