let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let valor = + input();
let parcelas = + input();

let taxa = (parcelas -1) * 5;
let juros = valor * (taxa / 100)

let total = valor + juros;
let vparcela = total / parcelas;

console.log(vparcela.toFixed(2));
console.log(total.toFixed(2));

