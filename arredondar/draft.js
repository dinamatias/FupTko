let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let operaçao = input();
let numero = + input();

function ceil(numero) {
    return Math.ceil(numero);
}
function floor(numero) {
    return Math.floor(numero);
}
function round(numero) {
    if (numero % 1 < 0.5) {
        return floor(numero);
    } else {
        return ceil(numero);
    }
}

if (operaçao == "c") {
    console.log(ceil(numero));
} else if (operaçao == "f") {
    console.log(floor(numero));
} else {
    console.log(round(numero));
}
