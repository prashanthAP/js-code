// constructor Function-name must always capitalized.

function  Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('drew with radius', this.radius);
    }
}

const circle = new Circle(2);
console.log(circle);

circle.location = {point:4};
console.log("adding location property: ", circle);

delete circle["location"];
console.log('deleting location property: ', circle);