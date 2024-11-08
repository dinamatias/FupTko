let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let qtd1 = +input();
let qtd2 = +input();
let qtd3 = +input();

let prc1 = +input();
let prc2 = +input();
let prc3 = +input();

let orç = +input();

let total = (qtd1 * prc1) + (qtd2 * prc2) + (qtd3 * prc3);
let sobrou = (orç - total).toFixed(2);

console.log(sobrou);