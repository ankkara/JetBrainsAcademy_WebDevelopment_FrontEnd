/* Inside the Student function, write a method getStudent() that displays
the text ("Student name: a, student surname: b, student age: c") via console.log(), where is a, b, and c are parameters.

function Student(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;

  // write your function here
}

const student = new Student("Alex", "Brown", 28);
*/

function Student(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.getStudent = function(a, b, c) {
       a = this.name;
       b = this.surname;
       c = this.age;
       console.log("Student name: " + a + ", student surname: " + b + ", student age: " + c);
    };

}

const student = new Student("Alex", "Brown", 28);

