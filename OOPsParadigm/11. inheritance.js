let person = {name : 'pk'};
console.log(person);
console.log('iterable:', Object.keys(person));
person.name = 'dk';
console.log('writable: ', person);

Object.defineProperty(person, "name", {
    enumerable:false,
    writable:false,
    configurable:false
});

console.log("enumerable", Object.keys(person));
person.name = 'ck';
console.log('writable: ',person);
delete person.name;
console.log('configurable : ', person);
