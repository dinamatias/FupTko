let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let vareta1 = + input();
let vareta2 = + input();
let vareta3 = + input();

if(vareta1 >= vareta2 + vareta3 || vareta2 >= vareta1 + vareta3 || vareta3 >= vareta1 + vareta2) {
    console.log("False")
} else {
    console.log("True")
}