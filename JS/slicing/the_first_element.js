//Given an array, return a subarray which includes the first n elements.

function takeFirstN(array, n) {
    let result = array.slice(0, n);
    return result;
}