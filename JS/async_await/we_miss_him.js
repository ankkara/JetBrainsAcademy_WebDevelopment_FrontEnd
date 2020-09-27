/*Make an asynchronous function named rockBand that takes a string as a parameter.
The function should check if the string equals 'Linkin Park'. If true, return a resolved promise with the phrase:
'Chester, we miss you!' and 'No matter the band we miss him anyway!' otherwise.
 */

async function rockBand(str) {
    return new Promise((resolve, reject) => {
        if (str == 'Linkin Park') {
            resolve('Chester, we miss you!')
        }
        reject('No matter the band we miss him anyway!')
    });
}