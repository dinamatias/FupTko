let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let dia = + input();
let hora = + input();

if (dia === 1) {
    console.log("NAO");
} else if (dia >= 2 && dia <= 6) {
    if (hora >= 8 && hora <= 11 || hora >= 14 && hora <= 17) {
        console.log("SIM");
    } else {
        console.log("NAO");
    }
} else if (dia === 7) {
    if (hora >= 8 && hora <= 11) {
        console.log("SIM");
    } else {
        console.log("NAO");
    }
} else {
    console.log("NAO");n
}