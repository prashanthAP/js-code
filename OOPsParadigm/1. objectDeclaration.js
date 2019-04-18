// Declaring variable with object literals.

// Object is a unordered collection of key value pairs. keys may be properties or methods(value might be function).

let circle = {
    radius:1, // Property
    location:{  // Property
        x:1,
        y:2
    }, 
    draw:function() {  // Method
        console.log('Draw');
    }
}

circle.draw();