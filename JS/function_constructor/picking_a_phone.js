/*Write a function constructor called Phone with properties name, height, width, screenSize, and resolution.

You don't need to call the function.

 Report a typo
Sample Input 1:

iPhone11 144 71.4 6.1 12
Sample Output 1:

Phone {
  name: 'iPhone11',
  height: '144',
  width: '71.4',
  screenSize: '6.1',
  resolution: '12' }
Sample Input 2:

iPhone11ProMax 158 77.8 5.8 12
Sample Output 2:

Phone {
  name: 'iPhone11ProMax',
  height: '158',
  width: '77.8',
  screenSize: '5.8',
  resolution: '12' }
 */

function Phone(name, height, width, screenSize, resolution) {
    this.name = name;
    this.height = height;
    this.width = width;
    this.screenSize = screenSize;
    this.resolution = resolution;
}