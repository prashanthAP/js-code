//Every object has built in costructor property, and that(constructor) references function that was used to create that object.

let obj = {} // object literal. jsEngine take care of creating instance i.e let obj = new Object()

//Similarly

new String() //'', "" 
new Boolean() // true, false
new Number() // 1, 2, 3....

//Example
let sampleObject = {}
console.log(sampleObject.constructor());

// Factory Function.
function createCircle(radius){
    return {
        radius,
        draw:function() {
            console.log(this.radius)
        }
    }
}
const c = createCircle(1);
console.log(c.constructor);
c.draw();

// Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Draw with radius: ', this.radius);
    }
}
const c1 = new Circle(1);
c1.draw();
console.log(c1.constructor); // built in constructor property
