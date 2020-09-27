/*You have a function constructor Bird:

function Bird(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
}
Call it to create the following objects:

{
    name: "Amazon parrot",
    color: "green",
    size: "medium"
}

{
    name: "Canary",
    color: "orange, red, yellow",
    size: "small"
}
 */

function Bird(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
}

const amazonParrot = new Bird ("Amazon parrot", "green", "medium");
const canary = new Bird ("Canary", "orange, red, yellow", "small");