console.log(12 - 2);// both of them are already a number, so we just subtract

console.log(undefined - 2);
/**
 * undefined is not a valid number, so make it undergo ToNumber Abstract operation
 * ToNumber(undefined) -> NaN
 * NaN - 2 -> and for any number when you do any operation with NaN it result NaN
 * NaN - 2 -> NaN
 */

console.log(null-3);
/**
 *  null is not a valid number, so we make it undergo ToNumber abstract operation
 * ToNumber(null) -> +0
 * +0 - 3 -> -3
 */

console.log("123" - 43);
/**
 * "123" is string, so we make it undergo ToNumber abstract operation
 * ToNumber("123")-> 123
 * 123 - 43 = 80
 */
console.log("123fd"-10);
/**
 * "123fd" is a string, so we make it undergo ToNumber abstract operation
 * ToNumber("123fd")-> NaN because this string cannot be parsed a number
 * NaN - 10 -> NaN
 */
// console.log(symbol("123")-30); gives type error
console.log(4 - true);
/**
 * true is boolean, so we make it undergo ToNumber abstract operation
 * ToNumber(true) -> 1
 * 4 - 1 -> 3
 */
console.log("0xf" - 1);
/**
 * Oxf, is string, but in the starting we have Ox denotes starts of hexadecimal value
 * if we can convert this string to a valid hexadecimal , we will do it
 * ToNumber("Oxf")-> 15
 * 15 - 1 -> 14
 */
console.log("0xz" - 1);
/**
 * "Oxz" is having Ox in start to denote hexadecimal , but z is not a valid hexadecimal so we get NaN
 * ToNumber("Oxz")-> NaN
 * NaN - 1 -> NaN
 */
console.log("0o11"-1);
/**
 * "0o11", is a string, and can become a valid octal number
 * ToNumber("0o11")-> 9
 * 9-1 -> 8
 */
