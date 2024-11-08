let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let entrada: string = input();


// O método replace() é usado para substituir partes de uma string por outra.
// Expressão regumar: ubstitui múltiplos espaços por um único espaço 
// \s: Corresponde a qualquer caractere de espaço em branco, incluindo tabulações, quebras de linha, etc.
// +: Indica que a expressão anterior (\s) pode ocorrer uma ou mais vezes.
// g: Significa que o regex deve ser aplicado globalmente, ou seja, ele vai substituir todas as ocorrências 
let resultado: string = entrada.replace(/\s+/g, ' ');

// Imprime o resultado
write(resultado);