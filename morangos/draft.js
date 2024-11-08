let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let comprimento1 = + input();
let largura1 = + input();
let comprimento2 = + input();
let largura2 = + input();

let area1 = comprimento1 * largura1;
let area2 = comprimento2 * largura2;

if (area1 > area2) {
    console.log(area1);
} else {
    console.log(area2);
}