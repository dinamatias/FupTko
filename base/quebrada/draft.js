let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let n1 = +input();
let n2 = +input();

let inteira = Math.floor(n1 / n2);
let resto = n1 % n2;
let quebrarda = (n1/n2).toFixed(2);

console.log(`${inteira}\n${resto}\n${quebrarda}`);

