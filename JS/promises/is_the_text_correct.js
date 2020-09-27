//Declare a promise named checkingText that resolves "Your text is correct" in case of success.

const isCorrectText = true;
let checkingText = new Promise(function(resolve, reject) {
    if (isCorrectText){
        resolve("Your text is correct")
    } else {
        reject(false);
    }
});
