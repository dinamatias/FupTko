let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = + input();
let b = + input();
let c = + input();
let h = + input();
let l = + input();

if (a <= h && b <= l) {
  console.log("S");
} else if (b <= h && a <= l) {
  console.log("S");
} else if (b <= h && c <= l) {
  console.log("S");
} else if (c <= h && b <= l) {
  console.log("S");
} else if (a <= h && c <= l) {
  console.log("S");
} else if (c <= h && a <= l) {
  console.log("S");
} else {
    console.log("N");
}