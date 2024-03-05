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
//


// Question 8
//


// Question 9
//
