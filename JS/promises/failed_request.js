//Declare a promise named dataLoader that returns the text "An error occurred" in case of failure.


let dataLoader = new Promise(function(resolve, reject) {
    reject(("An error occurred"));
});