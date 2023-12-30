export function linearsearch(arr, x){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===x){
            return i;
        }
    }
    return NaN;
}
export function binarySearch(arr,x){
    //linear search algorithm implemented
}
// module.exports = {
//     linear : linearsearch,
// }
export default function fun(){
    console.log("fun")
}
// export{
//     linearsearch,
//     binarySearch
// }