/*Find the first occurrence of the number 5 in the given array and return its index.
If the number is not found, return -1.
*/

function find5(numbers) {
    let find = 5;
    for (let v = 0; v < numbers.length; v++) {
        if (numbers[v] !== find) {
            continue;
        }
        return (v);
    }
    return(-1);
}

console.log(find5([10, 3, 8, 5, 3, 4, 5]));
console.log(find5([3, 4, 1]));