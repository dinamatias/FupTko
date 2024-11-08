let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let texto: string = input();
let indice: number = +input();
let qtd: number = +input();

let saida: string = "";

if (indice >= 0 && indice < texto.length) {
    for (let i = indice; i < indice + qtd && i < texto.length; i++) {
        saida += texto[i];
    }
    write(saida);
}
















