let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let L = + input();
let R = + input();
let D = + input();

if (R>50 && L< R && R > D) {
    console.log("S");
} else {
    console.log("N");
}