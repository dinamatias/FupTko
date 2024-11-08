let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

function calcularEconomia(A, G, rA, rG) {
    let custoA = A/rA;
    let custoG = G/rG;

    if(custoA < custoG) {
        console.log("A");
    } else {
        console.log("G");
    }
}

let entrada = input();
let [A, G, rA, rG] = entrada.split(" ").map(parseFloat);

calcularEconomia(A, G, rA, rG);













