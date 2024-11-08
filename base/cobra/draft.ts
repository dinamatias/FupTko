let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let N = + input();
let X = + input();
let Y = + input();
let C = input();
let S = + input();

function mod(value: number, size: number): number {
    value = value % size; // Calcula o resto da divisão (módulo)
    if (value < 0) {      // Se o valor for negativo
        value += size;     // Corrige somando o tamanho do tabuleiro
    }
    return value;          // Retorna o valor ajustado
}

if (C == "U") {
    Y -= S;
} else if (C == "D") {
    Y += S;
} else if (C == "R") {
    X += S;
} else if (C == "L") {
    X -= S;
}


X = mod(X, N);
Y = mod(Y, N);

console.log(X, Y);