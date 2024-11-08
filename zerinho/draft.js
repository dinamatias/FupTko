let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let jog1 = + input();
let jog2 = + input();
let jog3 = + input();

if (jog1 == jog2 && jog2 == jog3) {
    console.log("empate");
} else if (jog1 != jog2 && jog2 == jog3) {
    console.log("jog1");
} else if (jog2 != jog3 && jog3 == jog1) {
    console.log("jog2");
} else if (jog3 != jog1 && jog1 == jog2) {
    console.log("jog3");
}