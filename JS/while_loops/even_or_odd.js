/* You are given an array of numbers called numbers. Write a cycle that logs "even" for each even number and "odd"
for odd numbers. If the number is 0, the program must stop processing the numbers.
*/

//I DON'T GET IT!!!

function checkEvenOrOdd(numbers) {
    for (let n in numbers) {
        if (numbers[n] === 0) {
            break;
        }
        if (numbers[n] % 2 === 0) {
            console.log("even");
        }
        if (numbers[n] % 2 !== 0) {
            console.log("odd");
        }
    }
}

//NOT FINISHED
