let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let seg = +input();
let horas = Math.floor(seg / 3600);
let resto = seg % 3600;
let min = Math.floor(resto / 60);
let segs = resto % 60;

console.log(`${horas}:${min}:${segs}`);