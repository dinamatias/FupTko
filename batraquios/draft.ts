let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let entrada1: number[] = input().split(" ").map(Number);
let entrada2: number[] = input().split(" ").map(Number);

let vetor1: number[] = [];
let vetor2: number[] = [];

for (let i = 1; i <= entrada1[0]; i++) {
    vetor1.push(entrada1[i]);
} 
for (let i = 1; i <= entrada2[0]; i++) {
    vetor2.push(entrada2[i]);
}
let saida: string = "sim";

for (let i = 0; i < vetor1.length; i++) {
    if (!vetor2.includes(vetor1[i])) {
        saida = "nao";
        break;
    }
}

write(saida);