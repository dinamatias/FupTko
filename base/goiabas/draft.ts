let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let C = + input();
let goiabas = + input();
let bananas = + input();
let mangas = + input();

let qtdViagens = Math.floor((goiabas + bananas + mangas) / C);
let resto = (goiabas + bananas + mangas) % C;

if (resto > 0) {
    qtdViagens += 1;
}

write(qtdViagens);

