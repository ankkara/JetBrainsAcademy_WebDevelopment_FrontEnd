/* Imagine that you want to study at a prestigious University, and you have to pass the math exam with a score no less than 90. For the function passingExam, create a promise that returns "You are enrolled!"
in case of success, and "Sorry, you haven't passed the Math exam" otherwise.
*/

function passingExam (myPoints) {
    return new Promise(function(resolve, reject) {
        if (myPoints >= 90){
            resolve("You are enrolled!");
        } else {
            reject("Sorry, you haven't passed the Math exam");
        }
    });
}
