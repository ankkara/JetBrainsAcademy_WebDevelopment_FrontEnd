/*Several errors sneaked into this code. You need to find and fix them.
let animal = (
        name: "cat",
    sound: "meow",
    animalSay() {
    return "A " + "this".name + " says " + "this".sound;
}
);
*/

let animal = {
    name:"cat",
    sound:"meow",
    animalSay() {
        return "A " + this.name + " says " + this.sound;
    }
};

console.log(animal.animalSay());
