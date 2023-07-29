let arr = [
    2,
    234,
    234,
    234,
    123,
    54,
    35,
    456,
    56,
    32,
    413,
    124,
    346,
    4563,
    242,
    4345,
    46,
    46,
    234233453,
    43452,
    423,
    42,
    53456,
    56,
    756,
    7,
    9
];

function twoWayMerge(arr1, arr2) {
    const output = [];

    let m = 0;
    let n = 0;
    let c = arr1.length + arr2.length;

    while (c !== output.length) {
        if ((arr1[m] <= arr2[n]) || (n >= arr2.length)) {
            if (m < arr1.length) {
                output.push(arr1[m]);
                m++;
            }
        } else if ((arr1[m] > arr2[n]) || (m >= arr1.length)) {
            if (n < arr2.length) {
                output.push(arr2[n]);
                n++;
            }
        }
    }

    return output;
}

function splitArray(arr, chunks) {
    const size = arr.length;
    const range = parseInt(size / chunks, 0);

    const arrays = [];
    let subArray = [];

    for (let k = 0; k < arr.length; k++) {
        if (subArray.length >= range) {
            arrays.push(subArray);
            subArray = [];
        }
        subArray.push(arr[k]);
    }

    if (subArray.length > 0) {
        arrays.push(subArray);
        subArray = [];
    }

    return arrays;
}

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

console.log("Array", arr);

const arrays = splitArray(arr, 4);
console.log("Arrays not sorted", arrays);

const arraySorted = arrays.map((m) => sortArray(m));
console.log("Arrays sorted", arraySorted);

let finalArray = [];
for (const arr of arraySorted) {
    finalArray = twoWayMerge(finalArray, arr);
}
console.log("Final array", finalArray);
