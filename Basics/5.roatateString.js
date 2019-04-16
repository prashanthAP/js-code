// Write a JavaScript program to rotate the string 'HelloWord' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

function roatateString(str){
  let result = [str], n=str.length;
    for (let i = 0; i < n; i++) {
        result.push(str.slice(str.length-1)+str.slice(0,str.length-1));
        str = result[result.length-1];
    }
    return result;
}
console.log(roatateString('Hello'));

// Solution with HTML DOC:
// function animate_string(id) {
//     var element = document.getElementById(id);
//     var textNode = element.childNodes[0]; // assuming no other children
//     var text = textNode.data;

//     setInterval(function () {
//         text = text[text.length - 1] + text.substring(0, text.length - 1);
//         textNode.data = text;
//     }, 1000);
// }
// console.log(animate_string())
var a = "I want apple";
var b = "an";
var position = 6;
var output = [a.slice(0, position+1), b, a.slice(position)].join('');
console.log(output.split(' ').join(' '));
