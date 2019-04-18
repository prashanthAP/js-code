// ABSTRACTION : it means we should hide the details or complexity of implimatation and shows/expose only essentials.

//EXAMPLE : witout Abstraction.
function Circle(radius) {
    this.radius = radius;
    this.defaultLocation = {x:1};
    this.computeOptimumLocation = function(){
        console.log('it may compute changes...')
    }
    this.draw = function(){
        this.computeOptimumLocation();
        console.log('someText...')
    }
}


// closures : in contrast to scope, it will determine what variable will be  accessible to inner function of parent function.
//scope is temporary
function CircleAb(radius) {
    this.radius = radius;
    let defaultLocation = {x:1}; // private member of an Circle function.
    let computeOptimumLocation = function(){ //private member/method of Circle, so we cant access outside Circle.
        console.log('it may compute changes...')
    }
    this.getDefaultLocation = function(){
        return defaultLocation;
    }
    this.draw = function(){
        this.computeOptimumLocation();
        console.log('someText...')
    }

    Object.defineProperty(this, 'defaultLocation', {
        get:function() {
            return defaultLocation; // defaultLocation is part of closure. and its readOnlyproperty.
        },
        set: function(value) {
            if(!value.x) throw new Error('Invalid location.')
            defaultLocation = value;
        }
    })
}

let circle = new CircleAb(20);
console.log(circle.defaultLocation);
// circle.defaultLocation = 1;
console.log(circle.getDefaultLocation());