/* You are given an array of numbers called numbers.
Calculate the sum of numbers and return it from the function.
If the next number is equal to 0, the program must stop processing the numbers and return the result.
*/

function sum(numbers) {
    let add = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            break;
        }
        add += numbers[i];
    }

    return add;
}
