// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
// formula s = (a+b+c)/2 and Area of Triangle area = Math.sqrt(s*(s-a)(s-b)(s-c));

function areaOfTriangle(a,b,c){
    let perimeter = (a+b+c)/2;
    return Math.sqrt(perimeter*(perimeter-a)*(perimeter-b)*(perimeter-c));
}

console.log(areaOfTriangle(8,9,10));