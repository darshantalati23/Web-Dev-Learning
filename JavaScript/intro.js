console.log("Hello World, with JS!");

function print(a=5) {
    for(let i=0; i<a; i++) {
        console.log("My name isss.....");
    }
}

function sum(a, b, c=3) {
    return (a+b+c);
}

let str = "\"JavaScript\"";
let len = str.length;
console.log(str);
console.log(len);
print(0);

console.log("DKT_Ekantik");
console.log("5+10=" + sum(5, 10));
console.log("5+10+5=" + sum(5, 10, 5));
console.log("function has a default optional parameter c=3");

console.log("Faulty Calculator");
a=Math.random();
const input = prompt("Enter two numbers separated by space:");
const [b, c] = input.split(' ').map(Number);

// if (a<0.1) {
    
// }