let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let celsius = +input();
let fahr = (celsius * 1.8) + 32;

console.log(fahr.toFixed(6));