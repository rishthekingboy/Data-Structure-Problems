/*
array: 
    -9 -9 -9  1  1  1 
     0 -9  0  4  3  2
    -9 -9 -9  1  2  3
     0  0  8  6  6  0
     0  0  0 -2  0  0
     0  0  1  2  4  0

hourglassSum:
    -63, -34, -9, 12, 
    -10,   0, 28, 23, 
    -27, -11, -2, 10, 
     9,   17, 25, 18

hourglassSum logic:
    a b c
      d
    e f g



SAMPLES 
-------------------
input:
    1 1 1 0 0 0
    0 1 0 0 0 0
    1 1 1 0 0 0
    0 0 2 4 4 0
    0 0 0 2 0 0
    0 0 1 2 4 0

output:
    19



*/

const inputArray = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];



function hourglassSum(arr) {
    let max = [];
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr[i].length - 2; j++) {
            let a = arr[i][j];
            let b = arr[i][j + 1];
            let c = arr[i][j + 2];

            let d = arr[i + 1][j + 1];

            let e = arr[i + 2][j];
            let f = arr[i + 2][j + 1];
            let g = arr[i + 2][j + 2];

            let sum = a + b + c + d + e + f + g;
            max.push(sum);

        }

    }
    max = Math.max(...max);
    return max;
}

let result = hourglassSum(inputArray);
console.log(result);