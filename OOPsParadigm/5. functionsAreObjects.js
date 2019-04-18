// In javascript functions are Object.

// NOTE: example below

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('drwa', this.radius);
    }
}
Circle.call({}, 1); // this similar to creating instance of Circle function i.e let c = new Circle(1);
let c = new Circle(1);
console.log(c)
console.log(Circle.name); //Name of function object
console.log(Circle.length); // length of argument.
console.log(Circle.constructor)

// the following code is same as above.
const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
    console.log('drwa', this.radius);
}
`);

const circle = new Circle1(1);
console.log(circle);