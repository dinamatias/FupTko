let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let entrada: string[] = input().split(" ");
let a: number = +entrada[0];
let b: number = +entrada[1];
let fim: number = b;
let saida: string = "[ ";

while(a <= fim) {
    saida += a + " " + b + " ";
    a++;
    b--;
}

saida += "]";
console.log(saida);























// let entrada: string[] = input().split(" ");
// let a: number = + entrada[0];
// let b: number = + entrada[1];

// let fim = b;
// let saida: string = "";

// while(a <= fim) {
//     saida += a + " " + b + " ";
//     a++;
//     b--;
// }

// console.log("[ " + saida + "]");

























