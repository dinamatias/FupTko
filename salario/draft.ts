let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let salario: number = parseFloat(input());
let novoSalario: number = 0;

if (salario <= 1000) {
    novoSalario = salario + (salario * 20/100);
    write(novoSalario.toFixed(2));
} else if (salario <= 1500) {
    novoSalario = salario + (salario * 15/100);
    write(novoSalario.toFixed(2));
} else if (salario <= 2000) {
    novoSalario = salario + (salario * 10/100);
    write(novoSalario.toFixed(2));
} else {
    novoSalario = salario + (salario * 5/100);
    write(novoSalario.toFixed(2));
}
