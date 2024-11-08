let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);

let qtdDias: number = + input();
let caloriasTotal: number = 0;

for(let i = 0; i < qtdDias; i++) {
    let caloriasDia = + input();
    caloriasTotal += caloriasDia;
}

let media = caloriasTotal/qtdDias;
console.log(media.toFixed(1));































