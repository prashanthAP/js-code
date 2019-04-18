// NOTE: construction functions are pascalcase i.e Circle, Object

function Circle(radius) {
    console.log('this is : ', this);
    this.radius = radius;
    this.draw = function(params) {
        console.log("Draw with radius", this.radius)
    }
}

const c = new Circle(1); // "new" keyword helps to bind Circle object key and value to its instances, if you forget to declare instances without new kwy word, then c will assign to window global object.
c.draw();
