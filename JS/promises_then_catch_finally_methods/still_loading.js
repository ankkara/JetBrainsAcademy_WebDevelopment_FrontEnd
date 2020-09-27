/*Complete the function loader to show the message "The info has loaded."
in case of success, the message "Please, try again later." in case of failure, and "Hello, Mr. Smith!" in any case.
*/

function loader(value) {
    const promise = new Promise(function(resolve, reject){
        if (value === "true"){
            resolve("The info has loaded.");
        } else {
            reject("Please, try again later.");
        }
    });
    return promise.then(
        function successStatus(response) {
            console.log(response);
            return response;
        })
        .catch(function failStatus(error) {
            console.log(error);
            return error;
        })
        .finally(function stopLoader () {
            console.log("Hello, Mr. Smith!");
        }
    )
}

console.log(loader("true"));