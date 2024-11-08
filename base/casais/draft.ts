let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let qtd: number = + input();
let lista: number[] = input().split(" ").map(Number);

let contador: number = 0;

for (let a = 0; a < qtd; a++) {
    for (let b = 0; b < qtd; b++) {
    
        if (lista[a] > 0) {
            if (- lista[a] == lista[b]) {
                contador++
                lista[a] = 0;
                lista[b] = 0;
            }
        }
    }
}

console.log(contador);