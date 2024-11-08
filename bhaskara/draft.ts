let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let a: number = + input();
let b: number = + input();
let c: number = + input();

let delta: number = (b * b) - (4 * a * c);

if (delta > 0) {
    let raizPositiva = ((-b + Math.sqrt(delta))/ (2 * a));
    let raizNegativa = ((-b - Math.sqrt(delta))/ (2 * a));
    console.log(raizPositiva.toFixed(2));
    console.log(raizNegativa.toFixed(2));
} else if (delta == 0) {
    console.log((-b/(2 * a)).toFixed(2));
} else {
    console.log("nao ha raiz real");
}
