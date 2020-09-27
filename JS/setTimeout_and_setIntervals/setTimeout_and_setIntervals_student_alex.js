// Change the code so that showName returns the greeting with the name 'Alex' every 3 seconds:

function showName(name) {
    return ("Hello, student " + (name) + '!') ;
}

const studentGreeting = setInterval(showName, 3000);
clearInterval(studentGreeting);

console.log(showName("Alex"));