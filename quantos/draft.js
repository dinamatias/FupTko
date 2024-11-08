let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = + input();
let b = + input();
let c = + input();

if (a === b && b === c) {
  console.log("3");
} else if ( a === b || b === c || a === c) {
  console.log("2");
} else {
  console.log("0");
}