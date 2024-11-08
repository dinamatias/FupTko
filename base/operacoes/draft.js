let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = +input();
let b = +input();

let soma = a + b;
let subt = a - b;
let mult = a * b;
let divi = (a/b).toFixed(2);
let rest = a % b;

console.log(`${soma}\n${subt}\n${mult}\n${divi}\n${rest}`)