let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let velocKmh = + input();
let tempoMin = + input();
let consuLit = + input();

let tempoHrs = tempoMin/60;
let distKm = velocKmh * tempoHrs;
let desempenho = distKm / consuLit;

console.log(desempenho.toFixed(2));

