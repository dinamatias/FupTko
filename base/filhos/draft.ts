let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);

let idade: number = +input();
let qtdFilhos: number = + input();

while(qtdFilhos > 0) {
    console.log(idade);
    idade +=2;
    qtdFilhos -=1;
}























