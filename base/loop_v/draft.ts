let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let [a, b]:  number[] = input().split(" ").map(Number);

let saida: string = "[ ";

while (true) {
    if (a == b) {
        break; // Pare o loop quando a atingir b
    }

    if (a % 2 !== 0) { // Se for ímpar, adiciona na saída
        saida += a + " ";
    }

    a++; // Incrementa a cada iteração
}

saida += "]";
console.log(saida)

