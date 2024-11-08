let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtd: number = + input();
let lista: number[] = input().split(" ").map(Number);

let saida: string = "["

for(let i = 0; i < qtd; i++) {
    if (i != 0) {
        saida += ", " + lista[i];
    } else {
        saida += lista[i];
    }
}

saida += "]";
write(saida);















// let qtd: number = + input();
// let lista: number[] = input().split(" ").map(Number);

// let saida: string = "["

// for (let i = 0; i < lista.length; i++) {
//     if (i != 0) {
//         saida += ", " + lista[i];
//     } else {
//         saida += lista[i];
//     }
// }

// saida += "]";

// if (qtd == 0) {
//     console.log("[]");
// } else {
// console.log(saida);
// }