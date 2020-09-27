/* You are working with a database of email addresses from an imaginary email service yougotmail.com.
Write a body function so that the function will separate the local-part that precedes
the @ sign from the rest of the address.

The method takes the email variable and must return the result.
Your function should return values, not print them to the console. */

function getName(email) {
    let result = email.slice(0, -15);
    return result;
}

//ALSO

function getName(email) {
    return email.slice(0, email.indexOf('@'));
}