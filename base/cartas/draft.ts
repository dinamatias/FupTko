let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let qtd: number = + input();
let cartas: string[] = input().split(" ");

for (let i = 0; i < qtd; i++) {
    if (cartas[i] == "1") {
        cartas[i] = "A"; 
    } else if (cartas[i] == "11") {
        cartas[i] = "J";
    } else if (cartas[i] == "12") {
        cartas[i] = "Q";
    } else if (cartas[i] == "13") {
        cartas[i] = "K";
    }
}

console.log(`[${cartas.join(", ")}]`);


