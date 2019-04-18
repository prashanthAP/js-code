// This demo shows the Enumating all key value pairs of an object.

function  Employees(name) {
    this.name = name;
    this.occupation = function() {
        console.log('Bangalore.');
    }
}

let employee = new Employees('John');

// Enumating of above constructor function obj.
for(let key in employee){
    if(typeof employee[key] !== 'function') //we can restrict using condition.
    console.log(key,":", employee[key]);
}

// otherway of iteratig object in js to get all the key/properties and methods of object, use :
const keyArray = Object.keys(employee); // it will return arry of key name of Object passed.
console.log("keyValuedArray:", keyArray);

// TO check existence of perticular key/property/method of an object :
if('name' in employee) console.log('name of the employee: ', employee.name);
