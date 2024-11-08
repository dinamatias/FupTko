let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

// let p: number = + input();
// let s: number = + input();
// let e: number = + input();
// let sapo: number = 0;

// while (true) {
//     let saida: string = "";
//     saida += sapo + " ";
//     sapo += s;

//     if (sapo >= p) {
//         saida += "saiu";
//         console.log(saida);
//         break;
//     } else if (sapo < 0) {
//         saida += "morreu";
//         console.log(saida);
//         break;
//     } else {
//         saida += sapo;
//         console.log(saida)
//         sapo -= e;
//         s -= 10;
//     }
// }

let p: number = + input();
let s: number = + input();
let e: number = + input();
let sapo: number = 0
let aux: number = 0

while (true) {
    aux = sapo;
    sapo += s;
    s -= 10;

    if (s < 0) {
        s = 0;   
    }
    if (sapo >= p) {
        console.log(aux + " saiu");
        break;
    }
    console.log(aux + " " + sapo);
    sapo -= e;
    if (sapo < 0) {
        console.log(sapo + " morreu");
        break;
    }
}


