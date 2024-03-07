// Odin Project Recursive Methods lesson
// https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// Question 1
// return sum from 1 to number
function sumRange(number, total = 0) {
    total += number;
    if (number == 0 || number == 1) {
        return total;
    }
    return sumRange(number - 1, total);
}
// console.log(sumRange(10));


// Question 2
// return power of base and exponent
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent === 1) {
        return base;
    }
    return base * power(base, exponent - 1);
}
// console.log(power(4, 3));


// Question 3
// return factorial of number
function factorial(number) {
    if (number == 0 || number == 1) {
        return 1;
    }
    return number * factorial(number - 1);
}
// console.log(factorial(5));


// Question 4
// returns true if all array values passed into callback return true
function all(array, callback) {
    if (array.length === 0) {
        return false;
    }

    if (callback(array.shift())) {
        if (array.length === 0) {
            return true;
        }
        return all(array, callback);
    }

    return false;
}
// console.log(all([1, 2, 6], function (num) {
//     return num < 7;
// }));


// Question 5
// returns product of numbers in array
function productOfArray(array, total = 0) {
    if (array.length === 0) {
        return total;
    }

    if (total === 0) {
        total = array.shift();
    }

    total *= array.shift();
    return productOfArray(array, total);
}
// console.log(productOfArray([1, 2, 3, 10]));


// Question 6
// return true if value found in nested object
function contains(nestedObject, value) {
    let key = Object.keys(nestedObject);

    // scan thru object
    for (let i = 0; i < key.length; i++) {
        let objValue = nestedObject[key[i]];

        if (objValue === value) {
            return true;
        }

        if (typeof objValue === 'object') {
            return contains(objValue, value);
        }
    }

    return false;
}
let nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        something: 'foo2',
                        magicNumber: 44,
                    }
                }
            }
        }
    }
}
// console.log(contains(nestedObject, 44));


// Question 7
// return total number of integers stored in multi-dimensional array
function totalIntegers(array, total = 0) {
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i])) {
            total += 1;
        }

        if (typeof array[i] === 'object') {
            total = totalIntegers(array[i], total);
        }
    }
    return total;
}
// console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); // 7


// Question 8
// sums squares of numbers in list that may contain more lists
function sumSquares(array, total = 0) {
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i])) {
            total += power(array[i], 2);
        }

        if (typeof array[i] === 'object') {
            total = sumSquares(array[i], total);
        }
    }
    return total;
}
// console.log(sumSquares([[1, 2], 3])); // 1 + 4 + 9 = 14
// console.log(sumSquares([10, [[10], 10], [10]])); // 100 + 100 + 100 + 100 = 400


// Question 9
// return array containing repetitions of number argument
function replicate(reps, number, result = []) {
    if (reps === 0) {
        return result;
    }

    result.push(number);
    return replicate(reps - 1, number, result);
}
// console.log(replicate(3, 5)); // [5, 5, 5];


// Odin project, 'Project: Recursion' assignment 1
// Fibonacci sequence, function returns array with n digits of sequence
function fibs(n) {
    let array = [];

    if (n === 0) {
        return array;
    }

    if (n >= 1) {
        array.push(0);
    }

    if (n >= 2) {
        array.push(1);
    }

    if (n > 2) {
        for (let i = 2; i < n; i++) {
            array[i] = array[i - 1] + array[i - 2];
        }
    }

    return array;
}
// console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

// solved recursively
function fibsRec(n, array = []) {
    if (n <= 0) {
        return array;
    } else if (array.length === 0) {
        array.push(0);
    } else if (array.length === 1) {
        array.push(1);
    } else if (array.length >= 2) {
        array.push(array[array.length - 1] + array[array.length - 2]);
    }

    return fibsRec(n - 1, array);
}
// console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]


// Odin project, 'Project: Recursion' assignment 2
// merge sort list of given integers, return sorted array
function mergeSort(array, newArray = []) {
    let leftHalf = array.slice(0, Math.round(array.length / 2));
    let rightHalf = array.slice(Math.round(array.length / 2), array.length);

    if (leftHalf.length !== 1) {
        leftHalf = mergeSort(leftHalf);
    }

    if (rightHalf.length !== 1) {
        rightHalf = mergeSort(rightHalf);
    }

    while (leftHalf.length && rightHalf.length) {
        if (leftHalf[0] <= rightHalf[0]) {
            newArray.push(leftHalf.shift());
        } else {
            newArray.push(rightHalf.shift());
        }
    }

    while (leftHalf[0]) {
        newArray.push(leftHalf.shift());
    }

    while (rightHalf[0]) {
        newArray.push(rightHalf.shift());
    }

    return newArray;
}
// console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
// console.log(mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]
// console.log(mergeSort([105, 79, 100, 110, 3, 2, 1, 13, 8, 5, 0, 2, 1, 4, 3]));