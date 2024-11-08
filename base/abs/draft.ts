let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

// let entrada: number[] = input().split(" ").map(Number);
// let a: number = entrada[0];
// let b: number = entrada[1];

let [a, b]: number[] = input().split(" ").map(Number);

console.log(a, b)

// split: transforma a string em uma lista de strings
// map: mapeia a lista de strings e transforma os elementos do vetor em números