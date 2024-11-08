let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let N = + input();
let D = + input();
let A = + input();

// Função para calcular a distância mínima com comportamento cíclico
function mod(value: number, size: number): number {
    value = value % size;
    if (value < 0) {
        value += size;
    }
    return value;
}

// Calcula a diferença cíclica entre a posição do avião e do disco
let dist = mod(D - A, N);

// Imprime o número mínimo de apertos
write(dist);
