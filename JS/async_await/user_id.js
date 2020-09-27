/* We have a function that searches for a user ID and returns their name if it succeeds and an error message if it fails.

If we call our function with id 5: findUserById(5) it should return the user name after 1 second.
If we call the function with an id that does not exist, 3 for example, it should return the following message: No user with this id

The function findUserById() is already defined, as well as the users and their IDs.

You need to perform the following steps:

Make the function handleResult() asynchronous.
Within this function, use await to store the result of the Promise in a constant named resultOfThePromisse.
Use try..catch statements to handle errors.
Use console.log() to print the constant resultOfThePromisse.No
*/

async function findUserById(id) {
    return new Promise((resolve, reject) => {
        if (users[id]) {
            setTimeout(() => resolve(users[id]), 1000);
        }
        setTimeout(() => reject('No user with this id'), 1000);
    });
}
async function handleResult(number) {
    try {
        const resultOfThePromisse = await findUserById(number);
        console.log(resultOfThePromisse);
    } catch (error) {
        console.log('No user with this id');
    }
}