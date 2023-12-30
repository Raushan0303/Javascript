let arr = [1,2,3,4,5];

let x = arr.map(function process(v, i){
    /**
     * v -> value
     * i -> index
     */
    console.log(i, v);
    return v*v;
});

console.log(x);
console.log(arr);