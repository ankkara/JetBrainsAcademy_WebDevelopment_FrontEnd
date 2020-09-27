/*Imagine that you are a director of your own company and have to make
a calendar of workdays for your employees.

Using the switch statement, show "Yes, you should go to work" in the console.log
if the value is between 1 to 5 inclusively. Otherwise, show "No, this is your well-deserved weekend!"
*/

function checkTheDate(value) {
    switch (value) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log("Yes, you should go to work");
            break;
        default:
            console.log("No, this is your well-deserved weekend!");
            break;
    }
}