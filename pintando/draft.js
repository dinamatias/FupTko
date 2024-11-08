let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = + input();
let b = + input();
let c = + input();

let perimetro = (a + b + c)/2;
let area = Math.sqrt(perimetro*(perimetro-a)*(perimetro-b)*(perimetro-c));

console.log(area.toFixed(2));