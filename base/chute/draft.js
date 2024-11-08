let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);


let valorReal = + input();
let chute1 = + input();
let chute2 = + input();

if (Math.abs(valorReal - chute1) < Math.abs(valorReal - chute2)) {
    console.log("primeiro");
} else if (Math.abs(valorReal - chute1) > Math.abs(valorReal - chute2)) {
    console.log("segundo");
} else {
    console.log("empate");
}























