let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let entrada: number[] = input().split(" ").map(Number);
let x = entrada[0]; //elemento
let n = entrada[1]; //tamanho

let contador: number = 0;
let lista: number[] = [];

for (let i = 0; i < n; i++){
    lista.push(+input());

    if(lista[i] == x){
        contador++;
    }
}

write(contador);















// let [x, n]: number[] = input().split(" ").map(Number);
// let count: number = 0;

// for (let i = 0; i < n; i++) {
//     let a: number = Number(input());
//     if (a === x) {
//         count++;
//     }
// }

// console.log(count);


