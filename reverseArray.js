function reverseArray(a) {
    let reversedArray = [];
    for(let i = a.length-1; i>=0; i--){
        reversedArray.push(a[i]);
    }
    return reversedArray;

}

let array = [1,2,3];
let result = reverseArray(array);
console.log(result);