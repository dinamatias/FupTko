let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let t: number = + input();
let lista: number[] = []

for(let i = 0; i < t; i++) {
    lista.push(+ input());
}

let jedi: number[] = lista.slice(0, lista.length/2);
let sith: number[] = lista.slice(lista.length/2, lista.length);

let somaJedi: number = 0;
let somaSith: number = 0;

for (let i = 0; i < jedi.length; i++) {
    somaJedi += jedi[i];
}
for(let i = 0; i < sith.length; i++) {
    somaSith += sith[i];
}

if (somaJedi > somaSith) {
    write("Jedi");
} else if (somaJedi < somaSith) {
    write("Sith");
} else {
    write("Empate");
}