let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let nome = input();
let idade = + input();

if (idade < 12) {
    write(nome + " eh " + "crianca");
} else if (idade >= 12 && idade < 18) {
    write(nome + " eh " + "jovem");
} else if (idade >= 18 && idade < 65) {
    write(nome + " eh " + "adulto");
} else if (idade >= 65 && idade < 100) {
    write(nome + " eh " + "idoso");
} else {
    write(nome + " eh " + "mumia");
}