/* Write a function constructor User and call it via a constant user
to show the following object:

{
    name: "Mike",
    age: 23,
    city: "New York"
}
 */

function User(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
const user = new User ("Mike", 23, "New York");