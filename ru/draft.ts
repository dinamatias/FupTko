let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let frase: string = input();
let vogais: string[] = ["a", "e", "i", "o", "u"]

function ehVogal(letra: string): boolean {
    if (vogais.includes(letra)) {
        return true;
    } return false;
}

let mulheres: string = "";
let homens: string = "";

for (let i = 0; i < frase.length; i++) {
    if (ehVogal(frase[i])) {
        mulheres += frase[i];
    } else if (frase[i] != " ") {
        homens += frase[i];
    }
}

write(mulheres);
write(homens);