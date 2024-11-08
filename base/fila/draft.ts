let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let n: number = +input();
let lista: number[] = input().split(" ").map(Number);

let impares: number[] = [];
let pares: number[] = [];

for (let i = 0; i < n; i++) {
    if (lista[i] % 2 === 0) {
        pares.push(lista[i]);
    } else {
        impares.push(lista[i]);
    }
}

let saida: string = "";

if (impares.length > 0) {
    saida += "[ " + impares.join(" ") + " ]\n";
} else {
    saida += "[ ]\n";
}

if (pares.length > 0) {
    saida += "[ " + pares.join(" ") + " ]";
} else {
    saida += "[ ]";
}

write(saida);

// let saida = `[${impares.length > 0 ? " " + impares.join(" ") + " " : " "}]` +
//             `\n` + 
//             `[${pares.length > 0 ? " " + pares.join(" ") + " " : " "}]`;

// write(saida);