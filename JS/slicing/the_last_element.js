//Given an array, return a subarray which includes the last n elements.

function takeLastN(array, n) {
    let result = array.slice(-n);
    return result;
}