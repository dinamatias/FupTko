let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = +input();
let b = +input();
let c = input();

if (c === "+") {
    console.log(a + b);
} if (c === "-") {
    console.log(a - b);
} if (c === "*") {
    console.log(a * b);
}if (c === "/") {
    console.log(Math.floor(a / b));
}