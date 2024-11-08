let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);



// let a = + input();
// let b = + input();
// let c = + input();

// let delta = (b * b) - 4 * a * c;

// if (delta > 0) {
//     console.log(((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2));
//     console.log(((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2));
// } else if (delta == 0) {
//     console.log((-b / (2 * a)).toFixed(2));
// } else {
//     console.log("nao ha raiz real");
// }
















/*

let a = parseFloat(input());
let b = parseFloat(input());
let c = parseFloat(input());

function calcularRaizes(a, b, c) {
    let delta = b * b - 4 * a * c;

    if (delta > 0) {
        let raiz1 = (- b + Math.sqrt(delta)) / (2 * a);
        let raiz2 = (- b - Math.sqrt(delta)) / (2 * a);
        console.log(raiz1.toFixed(2));
        console.log(raiz2.toFixed(2));
    } else if (delta === 0) {
        let raiz = - b / (2 * a);
        console.log(raiz.toFixed(2));
    } else {
        console.log("nao ha raiz real");
    }
}

calcularRaizes(a, b, c);
*/