// Creating a varible with object literals having behaviour/method is an bad idea, thus we can create Factory functions.

function  createCircle(radius) {
    return {
        radius,
        draw:function() {
            console.log('Draw with Radius', this.radius);
        }
    }
}

const circle = createCircle(1);
circle.draw();