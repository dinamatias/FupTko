let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let p = + input();
let d1 = + input();
let d2 = + input();

let soma = d1 + d2

function ehPar(numero: number): boolean {
    if (numero % 2 == 0) {
        return true;
    } return false;
}

if (p == 0 && ehPar(soma)) {
    console.log("0");
} else if (p == 0 && !ehPar(soma)) {
    console.log("1");
} else if (p == 1 && ehPar(soma)) {
    console.log("1");
} else {
    console.log("0");
}
