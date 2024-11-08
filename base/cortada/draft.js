let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let B = + input();
let T = + input();

let altura = 70;
let base1 = B;
let base2 = T;

let areaTrapezioFelix = ((base1 + base2) * altura)/2;

if (areaTrapezioFelix > 5600) {
    console.log("1");
} else if (areaTrapezioFelix < 5600) {
    console.log("2");
} else {
    console.log("0");
}
