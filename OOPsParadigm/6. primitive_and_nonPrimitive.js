
// >>>>>>>>>>>>>>>>        "PRIMITIVE" or "VALUETYPES"  >>>>>>>>>>>>>>>>>>>>>>>>>>>>
// priitive are value type i.e primitives are copied by their value not references.
// Examples
// 1.Number, 2.String, 3.Boolean, 4.Symbol,  5.null, 6.undefined.
let primitiveValue = 10;
let copiedValue = primitiveValue;

primitiveValue = 20;
console.log("valueType: ", copiedValue) // value of copiedValue will be 10 because it copies value of primitiveType rather then its reference.



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>    NON-PRIMITIVE/REFERENCETYPE      >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// reference types are copied by their reference value/id.
// Examples
// 1.Objects, 2.Array, 3.functions

let referenceType = {value:10};
let copiedRefence = referenceType;
referenceType.value = 40;
console.log('ReferenceType:',copiedRefence.value); //value of copiedRefence has been changed to updated value of referenceType varible because copiedRefence variable refering to pointing address of varible.

