//Display the corresponding text to the user in case of success and in case of failure.

function hasDownloaded (value) {
    const promise = new Promise(function(resolve, reject){
        if (value === "true"){
            resolve("Now you can watch the video!");
        } else {
            reject("Oops! An error occurs");
        }
    });
    return promise.then(
        function successStatus(response) {
            console.log(response);
            return response;
        },
        function failStatus(error) {
            console.log(error);
            return error;
        }
    );
}